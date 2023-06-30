# Node.js 的 ODM 工具 Mongoose<!-- omit in toc -->

- [1. 相关资源](#1-相关资源)
- [2. 定义](#2-定义)
- [3. 背景](#3-背景)
- [4. 应用场景](#4-应用场景)
- [5. 尝试](#5-尝试)
  - [5.1. 启动 MongoDB](#51-启动-mongodb)
  - [5.2. 初始化环境](#52-初始化环境)
  - [5.3. 连接 MongoDB](#53-连接-mongodb)
  - [5.4. 定义模式和模型](#54-定义模式和模型)
  - [5.5. 插入文档](#55-插入文档)
  - [5.6. 查找文档](#56-查找文档)
  - [5.7. 更新文档](#57-更新文档)
  - [5.8. 删除文档](#58-删除文档)

## 1. 相关资源

[官方网站](https://mongoosejs.com) | [官方文档](https://mongoosejs.com/docs) | [GitHub](https://github.com/Automattic/mongoose)  
[MongoDB Mongoose 入门指引](https://www.mongodb.com/developer/languages/javascript/getting-started-with-mongodb-and-mongoose) | [MongoDB Node.js 驱动](https://www.mongodb.com/docs/drivers/node/current/)

## 2. 定义

Mongoose 是一个在 Node.js 环境中运行的、基于 MongoDB 官方驱动程序的 ODM（对象数据建模）第三方库。它可以帮助简化对 MongoDB 的操作，使得可以更加容易地进行数据建模、模式实施、类型转换、模型验证、查询构建、业务逻辑挂钩等等操作。

默认情况下，MongoDB 具有灵活的数据模型，这使得 MongoDB 数据库在未来非常容易更改和更新，但许多开发人员习惯于采用严格的模式。Mongoose 从一开始就强制采用半刚性模式，使用 Mongoose，开发人员必须定义模式（Schema）和模型（Model）。Mongoose 模式直接映射到 MongoDB 集合，通过模式，我们定义集合文档的结构，包括每个字段及其数据类型。模型引用指定的模式并将其应用到其集合中的每个文档，负责所有文档交互，包括增删改查等等。

## 3. 背景

MongoDB 已经提供了官方的 Node.js 驱动程序，但它需要编写大量的原生 MongoDB 查询和更新语句，对于开发者来说不够灵活且易于出错。于是在 MongoDB 公司负责开发和维护 MongoDB 的 Node.js 驱动程序的软件工程师 Aaron Heckmann 创建了 Mongoose，目标是让开发者更加轻松和高效地在 Node.js 应用程序中使用 MongoDB 数据库。

## 4. 应用场景

在 Node.js 应用程序中使用 Mongoose，可以更加轻松和高效地操作 MongoDB 数据库。

## 5. 尝试

### 5.1. 启动 MongoDB

在 Docker 中启动 MongoDB 并映射端口到本地主机：

```sh
docker run --name mongo -d -p 27017:27017 mongodb/mongodb-community-server:latest
```

### 5.2. 初始化环境

```sh
npm i
```

### 5.3. 连接 MongoDB

[查看源代码](./src/connect.js)

```sh
node src/connect.js
```

### 5.4. 定义模式和模型

[查看源代码](./src/movie-model.js)

### 5.5. 插入文档

插入一个文档（[查看源代码](./src/insert.js)）：

```sh
node src/insert.js
```

插入一个文档方法二（[查看源代码](./src/insert2.js)）：

```sh
node src/insert2.js
```

插入多个文档（[查看源代码](./src/insert-many.js)）：

```sh
node src/insert-many.js
```

### 5.6. 查找文档

查找一个文档（[查看源代码](./src/find-one.js)）：

```sh
node src/find-one.js
```

查找多个文档，并按条件筛选、指定字段（[查看源代码](./src/find.js)）：

```sh
node src/find.js
```

聚合查找（[查看源代码](./src/aggregate.js)）：

```sh
node src/aggregate.js
```

### 5.7. 更新文档

更新一个文档（[查看源代码](./src/update-one.js)）：

```sh
node src/update-one.js
```

更新多个文档（[查看源代码](./src/update-many.js)）：

```sh
node src/update-many.js
```

### 5.8. 删除文档

删除一个文档（[查看源代码](./src/delete-one.js)）：

```sh
node src/delete-one.js
```

删除多个文档（[查看源代码](./src/delete-many.js)）：

```sh
node src/delete-many.js
```
