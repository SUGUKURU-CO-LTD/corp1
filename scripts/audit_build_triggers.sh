#!/bin/bash

# Audit Cloud Build trigger substitutions for potential secret leakage.
# This script reports suspicious key names and values.

set -euo pipefail

PROJECT_ID="${PROJECT_ID:-sugukurucorpsite}"

if ! command -v gcloud >/dev/null 2>&1; then
  echo "gcloud CLI is required."
  exit 1
fi

if ! command -v python3 >/dev/null 2>&1; then
  echo "python3 is required."
  exit 1
fi

gcloud config set project "${PROJECT_ID}" >/dev/null

RAW_JSON="$(gcloud builds triggers list --format=json)"

python3 - <<'PY' "${RAW_JSON}"
import json
import re
import sys

triggers = json.loads(sys.argv[1])
suspect_pattern = re.compile(r"(secret|token|key|password|passwd|credential|private)", re.IGNORECASE)
print(f"Found {len(triggers)} trigger(s).")
print()

issues = 0
for trigger in triggers:
    name = trigger.get("name", "<unknown>")
    subs = trigger.get("substitutions", {})
    if not subs:
        continue

    hit_rows = []
    for k, v in subs.items():
        if suspect_pattern.search(k):
            preview = "<redacted>" if v else "<empty>"
            hit_rows.append((k, preview))

    if hit_rows:
        issues += 1
        print(f"[WARN] Trigger: {name}")
        for k, preview in hit_rows:
            print(f"  - suspicious substitution key: {k} value: {preview}")
        print()

if issues == 0:
    print("No suspicious substitution keys found.")
else:
    print(f"Suspicious substitutions found in {issues} trigger(s).")
    sys.exit(2)
PY
