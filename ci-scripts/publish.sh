#! /bin/bash

set -e

git config --global user.email "fundamental@sap.com"
git config --global user.name "fundamental-bot"

# delete temp branch
git push "https://$GH_TOKEN@github.com/$TRAVIS_REPO_SLUG" ":$TRAVIS_BRANCH" > /dev/null 2>&1;


std_ver=$(yarn std-version)
release_tag=$(echo "$std_ver" | grep "tagging release" | awk '{print $4}')

echo "$std_ver"

git push --follow-tags "https://$GH_TOKEN@github.com/$TRAVIS_REPO_SLUG" main > /dev/null 2>&1;

npm publish

# run this after publish to make sure GitHub finishes updating from the push
yarn release:create -- --repo $TRAVIS_REPO_SLUG --tag $release_tag --branch main

# build the documentation site
yarn build:docs

# deploy documentation site to github pages branch
npm run deploy:docs -- --repo "https://$GH_TOKEN@github.com/$TRAVIS_REPO_SLUG"
