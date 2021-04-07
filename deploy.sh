#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add .
git commit -m 'deploy'

git remote add origin git@github.com:zbw-zbw/kyriewen-blog.git
git branch -M main
git push -f git@github.com:zbw-zbw/kyriewen-blog.git main:gh-pages

cd -