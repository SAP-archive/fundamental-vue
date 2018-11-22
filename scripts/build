#!/usr/bin/env bash
IFS=$'\n\t'

rm -rf ./dist/
npx vue-cli-service build \
  --mode production \
  --target lib \
  --report \
  --name fundamentalvue \
  src/index.ts
