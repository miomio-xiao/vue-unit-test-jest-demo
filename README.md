# jest-unit-demo

> 使用 Jest + vue-test-utils 单元测试 

## 单元测试依赖(jest)
`yarn add jest babel-jest jest-serializer-vue vue-test-utils vue-jest -D`

 - vue-test-utils是最关键的测试框架。提供了一系列对于Vue组件的测试操作。
 - vue-jest用于处理*.vue的文件，
 - jest-serializer-vue用于快照测试提供快照序列化。

## 配置部分文件
`.babelrc`

```
{
  "presets": [
    ["env", { "modules": false }]
  ],
  "env": {
    "test": {
      "presets": [
        ["env", { "targets": { "node": "current" }}]
      ]
    }
  }
}
```
`package.json`

```
{
  "jest": {
    "moduleFileExtensions": [
      "js",
      "json",
      // tell Jest to handle *.vue files
      "vue"
    ],
    "transform": {
      // process js with babel-jest
      "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
      // process *.vue files with vue-jest
      ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest"
    },
    // support the same @ -> src alias mapping in source code
    "moduleNameMapper": {
      "^@/(.*)$": "<rootDir>/src/$1"
    },
    // serializer for snapshots
    "snapshotSerializers": [
      "<rootDir>/node_modules/jest-serializer-vue"
    ],
    "mapCoverage": true
  }
}
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# test
npm run test
```