#!/bin/bash

# Publish script for @anggiedimasta/ui monorepo

set -e

echo "🚀 Starting publish workflow..."

# Check if we're on main branch
if [[ $(git branch --show-current) != "main" ]]; then
  echo "❌ Error: Must be on main branch to publish"
  exit 1
fi

# Check if there are uncommitted changes
if [[ -n $(git status --porcelain) ]]; then
  echo "❌ Error: There are uncommitted changes"
  exit 1
fi

# Build all packages
echo "📦 Building packages..."
pnpm build

# Publish config package
echo "📤 Publishing @anggiedimasta/config..."
cd packages/config
pnpm publish --no-git-checks --access public
cd ../..

# Publish UI package
echo "📤 Publishing @anggiedimasta/ui..."
cd packages/ui
pnpm publish --no-git-checks --access public
cd ../..

echo "✅ Packages published successfully!"

# Deploy web app to Vercel
echo "🌐 Deploying web app to Vercel..."
cd apps/web
vercel --prod
cd ../..

echo "🎉 Publish workflow completed!"