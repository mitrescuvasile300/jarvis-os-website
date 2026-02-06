#!/bin/bash
# auto-commit.sh — Agent Website Auto-Commit Script
# Usage: ./auto-commit.sh "commit message"

REPO_DIR="/root/.openclaw/workspace/products/jarvis-os-template/landing_page"
COMMIT_MSG="${1:-Auto-commit: Progress update $(date +%H:%M)}"

cd "$REPO_DIR" || exit 1

# Check if there are changes
if git diff --quiet && git diff --cached --quiet; then
    echo "No changes to commit"
    exit 0
fi

# Add all changes
git add -A

# Commit
git commit -m "$COMMIT_MSG"

# Push
git push origin main

echo "✅ Committed and pushed: $COMMIT_MSG"
echo "🌐 https://github.com/mitrescuvasile300/jarvis-os-website"