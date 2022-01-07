#!/bin/bash

# 执行 git 流程函数
function handleGitFlow() {
    echo "开始执行 $1 GitFlow --->"

    echo "git pull"
    git pull

    echo "git add ."
    git add .

    echo "git commit -m $2"
    git commit -m $2

    echo "git push"
    git push

    echo "结束执行 $1 GitFlow <---"
}

# 定义 Path
devPath="/d/Work/Git/webchenjie/CJ-Blog/ChenJieBlogDev"
proGiteePath="/d/Work/Git/webchenjie/CJ-Blog/ChenJieBlogProdGitee"
proGithubPath="/d/Work/Git/webchenjie/CJ-Blog/ChenJieBlogProdGithub"

# 执行 dev GitFlow
handleGitFlow dev $1

# 打包构建
yarn build

# 把打包生成的文件拷贝到对应的 Path 下
cp -rf .vuepress/dist/* ${proGiteePath}/
cp -rf .vuepress/dist/* ${proGithubPath}/

# 删除打包生成的文件
rm -rf .vuepress/dist

# 切换到 proGiteePath 执行 GitFlow
cd ${proGiteePath}
handleGitFlow proGitee $1

# 切换到 proGithubPath 执行 GitFlow
cd ${proGithubPath}
handleGitFlow proGithub $1
