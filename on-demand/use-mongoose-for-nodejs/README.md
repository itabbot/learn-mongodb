# 使用 Node.js 的 ODM 工具 Mongoose<!-- omit in toc -->

- [1. 相关资源](#1-相关资源)
- [2. 场景](#2-场景)
- [3. 尝试](#3-尝试)

## 1. 相关资源

[官方网站](https://mongoosejs.com) | [官方文档](https://mongoosejs.com/docs) | [GitHub](https://github.com/Automattic/mongoose)  
[MongoDB Mongoose 入门指引](https://www.mongodb.com/developer/languages/javascript/getting-started-with-mongodb-and-mongoose) | [MongoDB Node.js 驱动](https://www.mongodb.com/docs/drivers/node/current/)

## 2. 场景

MongoDB 官方提供了标准的 Node.js 驱动程序，但一些开发人员喜欢使用一些对象数据建模（ODM）或对象关系映射（ORM）工具来获得更好的体验。Mongoose 就是 MongoDB 的 ODM（对象数据建模）第三方库。它可以帮助简化对 MongoDB 的操作，并更加容易地进行数据建模、模式实施、类型转换、模型验证、查询构建、业务逻辑挂钩等等操作。

默认情况下，MongoDB 具有灵活的数据模型，这使得 MongoDB 数据库在未来非常容易更改和更新，但许多开发人员习惯于采用严格的模式。Mongoose 从一开始就强制采用半刚性模式，使用 Mongoose，开发人员必须定义模式（Schema）和模型（Model）。Mongoose 模式直接映射到 MongoDB 集合，通过模式，我们定义集合文档的结构，包括每个字段及其数据类型。模型引用指定的模式并将其应用到其集合中的每个文档，负责所有文档交互，包括增删改查等等。

## 3. 尝试

1. 在 Docker 中启动 MongoDB 并映射端口到本地主机：

```sh
docker run --name mongo -d -p 27017:27017 mongodb/mongodb-community-server:latest
```

2. 初始化环境

```sh
npm i
```

3. 连接 MongoDB（[查看源代码](./src/connect.js)）

```sh
node src/connect.js
```

4. 定义模式和模型（[查看源代码](./src/movie-model.js)）

5. 插入文档（[查看源代码](./src/insert.js) | [查看源代码](./src/insert2.js) | [查看源代码](./src/insert-many.js)）

```sh
# 插入一个文档
node src/insert.js
# 插入一个文档（方法 2）
node src/insert2.js
# 插入多个文档
node src/insert-many.js
```

1. 查找文档（[查看源代码](./src/find-one.js) | [查看源代码](./src/find.js)）

```sh
# 查找一个文档
node src/find-one.js
# 查找多个文档（按条件筛选、指定字段）
node src/find.js
```
