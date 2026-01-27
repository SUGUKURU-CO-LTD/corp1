#!/bin/bash

# GCP Cloud Run Deployment Script for Sugukuru Corporate Website
# Uses Cloud Build for remote building (no local Docker required)
# Project: sugukurucorpsite

set -e

# Configuration
PROJECT_ID="${PROJECT_ID:-sugukurucorpsite}"
REGION="${REGION:-asia-northeast1}"
SERVICE_NAME="sugukurucorpsite"
REPOSITORY_NAME="sugukurucorpsite"
IMAGE_NAME="website"

echo "🚀 Sugukuru Corporate Website - GCP Deployment"
echo "================================================"
echo "Project ID: $PROJECT_ID"
echo "Region: $REGION"
echo "Service: $SERVICE_NAME"
echo ""

# Check if gcloud is installed
if ! command -v gcloud &> /dev/null; then
    echo "❌ gcloud CLI is not installed. Please install it first."
    echo "   https://cloud.google.com/sdk/docs/install"
    exit 1
fi

# Set project
echo "📋 Setting project to $PROJECT_ID..."
gcloud config set project $PROJECT_ID

# Enable required APIs
echo "🔧 Enabling required GCP APIs..."
gcloud services enable run.googleapis.com --quiet
gcloud services enable cloudbuild.googleapis.com --quiet
gcloud services enable artifactregistry.googleapis.com --quiet

# Create Artifact Registry repository if it doesn't exist
echo "📦 Setting up Artifact Registry..."
if ! gcloud artifacts repositories describe $REPOSITORY_NAME --location=$REGION &> /dev/null 2>&1; then
    echo "   Creating repository $REPOSITORY_NAME..."
    gcloud artifacts repositories create $REPOSITORY_NAME \
        --repository-format=docker \
        --location=$REGION \
        --description="Sugukuru Corporate Website"
else
    echo "   Repository $REPOSITORY_NAME already exists."
fi

# Build and push image using Cloud Build
IMAGE_TAG="$REGION-docker.pkg.dev/$PROJECT_ID/$REPOSITORY_NAME/$IMAGE_NAME:latest"
echo "🔨 Building Docker image with Cloud Build..."
echo "   Image: $IMAGE_TAG"

gcloud builds submit \
    --tag $IMAGE_TAG \
    --timeout=1200s \
    .

# Deploy to Cloud Run
echo "🚀 Deploying to Cloud Run..."
gcloud run deploy $SERVICE_NAME \
    --image $IMAGE_TAG \
    --region $REGION \
    --platform managed \
    --allow-unauthenticated \
    --port 8080 \
    --memory 512Mi \
    --cpu 1 \
    --min-instances 0 \
    --max-instances 10

# Get service URL
echo ""
echo "✅ Deployment complete!"
echo ""
SERVICE_URL=$(gcloud run services describe $SERVICE_NAME --region=$REGION --format='value(status.url)')
echo "🌐 Service URL: $SERVICE_URL"
echo ""
echo "📝 Next steps:"
echo "   1. Test the deployed site at the URL above"
echo "   2. Configure custom domain in Cloud Run console:"
echo "      gcloud run domain-mappings create --service=$SERVICE_NAME --domain=YOUR_DOMAIN --region=$REGION"
echo "   3. Update DNS records as instructed"
