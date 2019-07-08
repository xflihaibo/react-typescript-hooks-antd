# react-typescript-hooks-antd

## task


> -   打包分离.  性能分析
> -   请求 




## 项目安装 启动 调试 发布流程

```bush
npm inatall or yarn install
npm run  start：开发环境
npm run  build:test ：测试环境
npm run  build:dev：开发环境
npm run  build:prod :上线环境
npm run  eslint :代码校验美化
npm run  test : 单元测试

```


### 技术栈
开发中所用主要技术如下：

1. react: [参考文档](https://reactjs.org/)
2. antd:[参考文档](https://ant.design)
3. webpack:[参考文档](https://webpack.js.org/)
4. less:[参考文档](http://lesscss.org/)
5. typescript [参考文档](http://www.typescriptlang.org/)
6. babel:[参考文档](https://babeljs.io/)
7. prettier:[参考文档](https://prettier.io/)
8. postcss:[参考文档](https://www.postcss.com.cn/)
9. eslint:[参考文档](https://eslint.org/)
10. Markdown [参考文档](https://maxiang.io)
10. jest [参考文档](https://jestjs.io/zh-Hans)
11. testing-library [参考文档](https://testing-library.com/) 

## 代码目录
```
+-- build // webpack 配置文件 
|   +-- webpack.build.js
|   +-- webpack.common.js
|   +-- webpack.dev.js
|   +-- webpack.server.js //生产环境
+-- node_modules
|   +-- ...项目依赖包
+-- src
|   +-- assets // assets 静态资源文件
|   +-- component //组件
|   +-- router //路由
|       +-- routermap.js
|       +-- index.js
|   +-- view //页面
|       +-- home 首页
|   +-- index.jsx //入口文件
+-- template //html模版文件
|   +-- index.html
+-- test //项目测试用例
|   +-- cssTransform.js // 忽略css 引用的文件
|   +-- fileTransform.js // 忽略file、img 引用的文件
+-- package.json //依赖
+-- README.md  //说明文档
+-- .babelrc   //babel 配置
+-- .eslintrc.js //eslint 配置
+-- .prettierrc.js //prettier 配置
+-- tsconfig.json //typescript 配置
+-- jest.config.js //jset 配置
+-- postcss.config.js //postcss 配置
```




## eslint 

##### 相关插件

``` shell
npm install  --save-dev  @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint typescript-eslint-parser eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-typescript
```

#####  代码自动化美化
``` shell
npm install  --save-dev  eslint-config-prettier eslint-plugin-prettier prettier 
```

##  test 测试 
使用 @testing-library/react 开发react 测试

##### 相关插件

``` shell
npm install  --save-dev  jest @types/jest ts-jest  @testing-library/react
```


##   路由问题.  nginx 配置
    
```shell
 try_files $uri /index.html;
```