vue编码规范（根据vue风格指南整理）
===
1. 规范目的
> 统一编码风格，项目目录，命名规范，注释要求，在团队协作中输出可读性强，易维护，风格一致的代码
2. Vue项目目录：
```
   ├── index.html                      入口页面
   ├── build                           构建脚本目录
   │   ├── build-server.js                 运行本地构建服务器，可以访问构后的页面
   │   ├── build.js                        生产环境构建脚本
   │   ├── dev-client.js                   开发服务器热重载脚本，主要用来实现开发阶段的页面自动刷新
   │   ├── dev-server.js                   运行本地开发服务器
   │   ├── utils.js                        构建相关工具方法
   │   ├── webpack.base.conf.js            wabpack基础配置
   │   ├── webpack.dev.conf.js             wabpack开发环境配置
   │   └── webpack.prod.conf.js            wabpack生产环境配置
   ├── config                          项目配置
   │   ├── dev.env.js                      开发环境变量
   │   ├── index.js                        项目配置文件
   │   ├── prod.env.js                     生产环境变量
   │   └── test.env.js                     测试环境变量
   ├── mock                            mock数据目录
   │   └── hello.js
   ├── package.json                    npm包配置文件，里面定义了项目的npm脚本，依赖包等信息
   ├── src                             项目源码目录    
   │   ├── main.js                         入口js文件
   │   ├── App.vue                         根组件
   │   ├── components                      公共组件目录
   │   │   └── title.vue
   │   ├── assets                          资源目录，这里的资源会被wabpack构建
   │   │   ├── css                         公共样式文件目录
   │   │   ├── js                          公共js文件目录
   │   │   └── images                      图片存放目录
   │   ├── api                             请求api
   │   │   └── user.js
   │   ├── store                           应用级数据（state）
   │   │   └── index.js
   │   └── pages                           所有页面
   │       └── home                        home页面
   │            ├── components             home页面的组件
   │            │       ├── header.vue
   │            │       └── footer.vue
   │            └home.vue                 
   ├── static                          纯静态资源，不会被wabpack构建。
   └── test                            测试文件目录（unit&e2e）
       └── unit                            单元测试
           ├── index.js                        入口脚本
           ├── karma.conf.js                   karma配置文件
           └── specs                           单测case目录
               └── Hello.spec.js
```
3. 组件目录预览
```
|— self-component
    |— src                              资源文件                 
    |— childs                           子组件
    |— stylus                           样式文件
    |— self-component.vue               模板文件
    |— self-component.md                描述文件
```
4. 组件命名规范
```
1. 除根组件App外，组件以多个有意义且简短的单词命名
2. 基础组件采用短横线以特定功能性前缀命名，引入组件采用帕斯卡方式命名;
3. 组件名以高修饰性单词开头，描述性修饰词结尾
4. 命名建议均选用完整单词，利于理解；
5. 单页面只可被使用一次的组件应以The前缀命名，标识其唯一性（如Heading.vue、Footer.vue）；
6. 有相同样式和基础组件的，命名需要有关联性（利于查找、修改，webpack关联打包）；
7. 子组件要以强耦合关联的父组件名做前缀；
8. 不要使用保留字
```
5. 自定义属性管理
```
· 私有属性使用$_ 前缀标识
· 组件属性Prop定义时要指定类型，定义应尽量详细
· 声明Prop属性时，以驼峰式命名
```
6. 值与状态管理
```
* 使用 data 里的变量时请先在 data 对象里初始化
* 除了根组件，其他组件在使用data时，以对象函数的返回值为标准
* 优先使用prop和事件$emit、$on进行父子组件的通信，避免使用this.$parent 或改变 prop值
* 优先使用Vuex管理组件全局状态，而不是通过 this.$root 或一个全局事件
```
7. 语法规范
```
- 采用ES6语法风格进行编码
- v-for/v-if/v-else中定义和使用key值（优化vue渲染，使vue更高效更新DOM）
- v-if和v-for不要同时在一个元素上使用（降低耦合）
- 用：标识v-bind，用@标识v-on
- 非空 HTML 特性值始终带引号
- 单文件组件、字符串模板里标签使用自闭合标签，HTML文件DOM标签内尽量使用闭合标签
- 在组件scoped作用域下避免使用元素选择器（可以使用class和id选择器）
- 除根组件外（App组件），单独组件需要使用scope或CSS Modules设置样式作用域（防止样式冲突）
```
8. 编码规范
```
- 使用IDE进行开发，注意格式化代码，团队各成员IDE配置应相同
- 单文件组件 <script>、<template> 和 <style> 标签的顺序要保持一致，<style> 要放在最后
- 复杂表达式避免出现在组件模板上，用计算属性或者定义方法完成逻辑
- 复杂计算属性尽可能拆分成多个简单属性
- 分行撰写对象的多个属性
- 尽量将组件单独成独立文件，利于复用和拼接
```
9. 代码注释
```
- 代码块注释语句统一写在被注释对象上一行，保持统一的缩进对齐
- 每个功能模块都需要有一个注释，言简意赅的表明模块用途、参数类型、注意事项等
- 单行语句注释统一写在分号后
```