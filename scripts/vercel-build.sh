#!/usr/bin/env bash
set -euo pipefail

cd dhiwork-website
npm install
npm run build
cd ..

rm -rf .next
cp -r dhiwork-website/.next .next
cp dhiwork-website/next.config.ts next.config.ts
