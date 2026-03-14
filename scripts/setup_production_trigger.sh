#!/bin/bash

# Configure Cloud Build trigger for production website deploys.
# This script intentionally keeps substitutions free of secrets.

set -euo pipefail

PROJECT_ID="${PROJECT_ID:-sugukurucorpsite}"
TRIGGER_NAME="${TRIGGER_NAME:-deploy-sugukurucorpsite-main}"
REPO_OWNER="${REPO_OWNER:-SUGUKURU-CO-LTD}"
REPO_NAME="${REPO_NAME:-corp1}"
BRANCH_PATTERN="${BRANCH_PATTERN:-^main$}"
BUILD_CONFIG="${BUILD_CONFIG:-cloudbuild.yaml}"
TRIGGER_REGION="${TRIGGER_REGION:-global}"

REGION="${REGION:-asia-northeast1}"
SERVICE_NAME="${SERVICE_NAME:-sugukurucorpsite}"
REPOSITORY_NAME="${REPOSITORY_NAME:-sugukurucorpsite}"
IMAGE_NAME="${IMAGE_NAME:-website}"

if ! command -v gcloud >/dev/null 2>&1; then
  echo "gcloud CLI is required."
  exit 1
fi

echo "Setting project to ${PROJECT_ID}"
gcloud config set project "${PROJECT_ID}" >/dev/null

EXISTING_ID="$(gcloud builds triggers list --region="${TRIGGER_REGION}" --filter="github.owner=${REPO_OWNER} AND github.name=${REPO_NAME} AND github.push.branch=${BRANCH_PATTERN}" --format='value(id)' | head -n 1)"
FINAL_TRIGGER_NAME="${TRIGGER_NAME}"
if [[ -z "${EXISTING_ID}" ]]; then
  echo "No existing GitHub trigger found for ${REPO_OWNER}/${REPO_NAME} ${BRANCH_PATTERN}."
  echo "Attempting to create a new trigger..."
  gcloud builds triggers create github \
    --name="${TRIGGER_NAME}" \
    --description="Deploy ${SERVICE_NAME} on push to ${BRANCH_PATTERN}" \
    --repo-owner="${REPO_OWNER}" \
    --repo-name="${REPO_NAME}" \
    --branch-pattern="${BRANCH_PATTERN}" \
    --build-config="${BUILD_CONFIG}" \
    --substitutions="_REGION=${REGION},_SERVICE_NAME=${SERVICE_NAME},_REPOSITORY_NAME=${REPOSITORY_NAME},_IMAGE_NAME=${IMAGE_NAME},_IMAGE_TAG=\$COMMIT_SHA" \
    --included-files="**" \
    --ignored-files="" \
    --include-logs-with-status \
    --region="${TRIGGER_REGION}"
else
  EXISTING_NAME="$(gcloud builds triggers describe "${EXISTING_ID}" --region="${TRIGGER_REGION}" --format='value(name)')"
  FINAL_TRIGGER_NAME="${EXISTING_NAME}"
  EXISTING_RESOURCE_NAME="$(gcloud builds triggers describe "${EXISTING_ID}" --region="${TRIGGER_REGION}" --format='value(resourceName)')"
  EXISTING_SERVICE_ACCOUNT="$(gcloud builds triggers describe "${EXISTING_ID}" --region="${TRIGGER_REGION}" --format='value(serviceAccount)')"
  EXISTING_CREATE_TIME="$(gcloud builds triggers describe "${EXISTING_ID}" --region="${TRIGGER_REGION}" --format='value(createTime)')"
  TMP_FILE="$(mktemp)"
  cat > "${TMP_FILE}" <<EOF
createTime: '${EXISTING_CREATE_TIME}'
description: Deploy ${SERVICE_NAME} to Cloud Run on push to "${BRANCH_PATTERN}"
filename: ${BUILD_CONFIG}
github:
  owner: ${REPO_OWNER}
  name: ${REPO_NAME}
  push:
    branch: ${BRANCH_PATTERN}
id: ${EXISTING_ID}
includeBuildLogs: INCLUDE_BUILD_LOGS_WITH_STATUS
name: ${EXISTING_NAME}
resourceName: ${EXISTING_RESOURCE_NAME}
serviceAccount: ${EXISTING_SERVICE_ACCOUNT}
substitutions:
  _REGION: ${REGION}
  _SERVICE_NAME: ${SERVICE_NAME}
  _REPOSITORY_NAME: ${REPOSITORY_NAME}
  _IMAGE_NAME: ${IMAGE_NAME}
  _IMAGE_TAG: \$COMMIT_SHA
EOF

  echo "Updating existing trigger id=${EXISTING_ID} via import..."
  gcloud alpha builds triggers import --source="${TMP_FILE}" --region="${TRIGGER_REGION}"
  rm -f "${TMP_FILE}"
fi

echo
echo "Production trigger is configured."
echo "Trigger name : ${FINAL_TRIGGER_NAME}"
echo "Repository   : ${REPO_OWNER}/${REPO_NAME}"
echo "Branch regex : ${BRANCH_PATTERN}"
echo "Service      : ${SERVICE_NAME}"
echo "Region       : ${REGION}"
