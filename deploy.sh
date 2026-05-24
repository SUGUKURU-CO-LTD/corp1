#!/bin/bash

# Production deployment script for sugu-kuru.co.jp
# Canonical production target:
#   - Cloud Run service: sugukurucorpsite
#   - Region: asia-northeast1
#   - Artifact Registry repo: sugukurucorpsite

set -euo pipefail

PROJECT_ID="${PROJECT_ID:-sugukurucorpsite}"
REGION="${REGION:-asia-northeast1}"
SERVICE_NAME="${SERVICE_NAME:-sugukurucorpsite}"
REPOSITORY_NAME="${REPOSITORY_NAME:-sugukurucorpsite}"
IMAGE_NAME="${IMAGE_NAME:-website}"

if ! command -v gcloud >/dev/null 2>&1; then
  echo "gcloud CLI is required."
  echo "Install: https://cloud.google.com/sdk/docs/install"
  exit 1
fi

if ! command -v git >/dev/null 2>&1; then
  echo "git is required to derive IMAGE_TAG from commit SHA."
  exit 1
fi

if ! IMAGE_TAG_FROM_GIT="$(git rev-parse --short=12 HEAD 2>/dev/null)"; then
  IMAGE_TAG_FROM_GIT="$(date +%Y%m%d%H%M%S)"
elif ! git diff --quiet --ignore-submodules HEAD -- || ! git diff --cached --quiet --ignore-submodules; then
  IMAGE_TAG_FROM_GIT="${IMAGE_TAG_FROM_GIT}-dirty-$(date +%Y%m%d%H%M%S)"
fi
IMAGE_TAG="${IMAGE_TAG:-$IMAGE_TAG_FROM_GIT}"
IMAGE_URI="${REGION}-docker.pkg.dev/${PROJECT_ID}/${REPOSITORY_NAME}/${IMAGE_NAME}:${IMAGE_TAG}"

echo "Sugukuru Corporate Website - Production Deploy"
echo "=============================================="
echo "Project ID   : ${PROJECT_ID}"
echo "Region       : ${REGION}"
echo "Service      : ${SERVICE_NAME}"
echo "Repository   : ${REPOSITORY_NAME}"
echo "Image name   : ${IMAGE_NAME}"
echo "Image tag    : ${IMAGE_TAG}"
echo "Image URI    : ${IMAGE_URI}"
echo

echo "Setting gcloud project..."
gcloud config set project "${PROJECT_ID}" >/dev/null

echo "Enabling required APIs..."
gcloud services enable run.googleapis.com --quiet
gcloud services enable cloudbuild.googleapis.com --quiet
gcloud services enable artifactregistry.googleapis.com --quiet

echo "Checking Artifact Registry repository..."
if ! gcloud artifacts repositories describe "${REPOSITORY_NAME}" --location="${REGION}" >/dev/null 2>&1; then
  echo "Creating Artifact Registry repository: ${REPOSITORY_NAME}"
  gcloud artifacts repositories create "${REPOSITORY_NAME}" \
    --repository-format=docker \
    --location="${REGION}" \
    --description="Sugukuru Corporate Website"
fi

echo "Running Cloud Build pipeline..."
gcloud builds submit \
  --config cloudbuild.yaml \
  --substitutions="_REGION=${REGION},_SERVICE_NAME=${SERVICE_NAME},_REPOSITORY_NAME=${REPOSITORY_NAME},_IMAGE_NAME=${IMAGE_NAME},_IMAGE_TAG=${IMAGE_TAG}" \
  --timeout=1200s \
  .

SERVICE_URL="$(gcloud run services describe "${SERVICE_NAME}" --region="${REGION}" --format='value(status.url)')"

echo
echo "Deployment complete."
echo "Service URL: ${SERVICE_URL}"
echo "Production domains expected:"
echo "  - https://sugu-kuru.co.jp"
echo "  - https://www.sugu-kuru.co.jp"
