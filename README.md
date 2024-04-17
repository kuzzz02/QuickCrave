# QuickCrave

### 使用前请先确保node.js版本在18.0 及以上

```
|- android # android 项目目录
|- ios # iOS 项目目录
|- src # 开发主文件夹
|   |- common # 静态资源
|   |- components # 一些公共组件
|   |- services # 前端接口请求
|   |- pages # 页面目录
|   |- App.js # 入口文件
|- index.js # 入口文件
```
---

# GITHUB使用指南

- 拉取仓库源码  
1.**下载并安装 git**  
2.打开**git bash**
```
git clone https://github.com/kuzzz02/QuickCrave.git
```

- 打开仓库源代码，在终端里写如下命令配置settings (或cmd或git bash都行)
```
git config --global credential.helper store
git config --global user.name "yourname"
git config --global user.email "youremail"
```

- 查看是否本地连接上github仓库
```
git remote -v
```

- 环境搭建
```
cd client
npm install -g yarn
npm install -s
```

- 项目启动 (在client 文件夹下)
```
yarn android
```

- 上传代码
```
git add ./
git commit -m "注释"
git push origin dev
```
