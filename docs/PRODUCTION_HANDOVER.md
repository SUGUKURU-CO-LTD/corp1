# Production Handover (sugu-kuru.co.jp)

## 1. Scope

This runbook defines the canonical production operations for the corporate website.

- Project ID: `sugukurucorpsite`
- Production service: `sugukurucorpsite`
- Region: `asia-northeast1`
- Domains:
  - `sugu-kuru.co.jp`
  - `www.sugu-kuru.co.jp`
- Source of truth: GitHub `main` (`SUGUKURU-CO-LTD/corp1`)

## 2. System Ownership

- Application code: IT事業部 (GitHub)
- CI/CD trigger and build: IT事業部 (Cloud Build)
- Runtime and domain routing: IT事業部 (Cloud Run + Domain mapping)
- Secret governance: IT事業部 (Secret Manager)

## 3. Standard Deployment Flow

1. Merge PR into `main`.
2. Cloud Build trigger starts automatically.
3. Docker image is built and pushed to Artifact Registry.
4. Cloud Run `sugukurucorpsite` updates to immutable image tag (`commit SHA`).
5. Validate production health checks.

### Manual deployment (fallback)

```bash
./deploy.sh
```

This path should be used only for emergency or controlled operations.

## 4. Trigger Management

### Configure or repair production trigger

```bash
./scripts/setup_production_trigger.sh
```

### Verify trigger list

```bash
gcloud builds triggers list --format="table(id,name,disabled,createTime)"
```

Expected: one active trigger for this website deployment path.

## 5. Security Baseline

### Trigger substitution audit

```bash
./scripts/audit_build_triggers.sh
```

If this script reports suspicious keys (`SECRET`, `TOKEN`, `KEY`, etc.), rotate and remove immediately.

### Required policy

- Never place secrets in Cloud Build substitutions.
- Keep runtime secrets in Secret Manager.
- Bind secrets to Cloud Run via `--set-secrets` (or equivalent IaC) only when needed.

### Facebook feed secrets

`/journal` uses server-side fetch via `/api/facebook/posts`.

- `FACEBOOK_PAGE_ID` (plain env, non-secret)
- `FACEBOOK_PAGE_ACCESS_TOKEN` (secret)

If the token is missing or API fails, the page automatically falls back to sample posts and shows a warning banner.

## 6. Rollback Procedure

1. Identify prior healthy revision:

```bash
gcloud run revisions list \
  --service sugukurucorpsite \
  --region asia-northeast1 \
  --format="table(metadata.name,status.conditions[0].lastTransitionTime)"
```

2. Route 100% traffic to target revision:

```bash
gcloud run services update-traffic sugukurucorpsite \
  --region asia-northeast1 \
  --to-revisions REVISION_NAME=100
```

3. Re-verify endpoints listed in section 7.

## 7. Production Verification Checklist

Run after every deployment:

- `https://sugu-kuru.co.jp/` returns `200`.
- `https://www.sugu-kuru.co.jp/` returns `200`.
- Main pages render expected content:
  - `/`
  - `/about`
  - `/services`
  - `/contact`
- SEO endpoints:
  - `/robots.txt`
  - `/sitemap.xml`
- Analytics snippet exists (GA id configured in app layout).

Suggested command:

```bash
python3 - <<'PY'
import urllib.request
urls = [
    "https://sugu-kuru.co.jp/",
    "https://sugu-kuru.co.jp/about",
    "https://sugu-kuru.co.jp/services",
    "https://sugu-kuru.co.jp/contact",
    "https://sugu-kuru.co.jp/robots.txt",
    "https://sugu-kuru.co.jp/sitemap.xml",
]
for u in urls:
    code = urllib.request.urlopen(u, timeout=20).status
    print(code, u)
PY
```

## 8. Incident Response Notes

- If deploy fails before runtime update, check Cloud Build logs first.
- If deploy succeeds but site behavior regresses, roll back traffic to previous revision.
- If domain routing fails, inspect Cloud Run domain mappings and DNS records.

## 9. Quarterly Maintenance

- Review Cloud Build triggers and remove stale ones.
- Verify domain mappings are still attached to `sugukurucorpsite`.
- Rotate high-risk secrets and invalidate leaked credentials.
- Confirm this runbook still matches current operational reality.
