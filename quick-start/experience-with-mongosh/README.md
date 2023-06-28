# 使用 MongoSH 体验 MongoDB 的基本操作<!-- omit in toc -->

[官方 MongoSH 方法参考](https://www.mongodb.com/docs/manual/reference/method)

## 目录<!-- omit in toc -->

- [1. 切换数据库](#1-切换数据库)
- [2. 插入文档](#2-插入文档)
- [3. 查找文档](#3-查找文档)
- [4. 聚合文档](#4-聚合文档)
- [5. 修改文档](#5-修改文档)
- [6. 删除文档](#6-删除文档)

## 1. 切换数据库

在 mongosh 命令行中，db 代表当前数据库，键入 db 可以显示当前数据库，默认是 test 数据库：

```sh
> db
test
```

切换数据库使用 `use <db>`。在切换前不用先创建数据库，当首次在数据库中存储数据时，MongoDB 会自动创建该数据库：

```sh
> use examples
switched to db examples

> db
examples
```

## 2. 插入文档

MongoDB 将文档存储在集合中，集合类似于关系数据库中的表，如果集合不存在，MongoDB 会在您首次存储该集合的数据时创建该集合。

使用 `db.<collection>.insertOne` 方法插入单个文档：

```sh
> db.movies.insertOne({
  title: 'Titanic',
  year: 1997,
  genres: ['Drama', 'Romance'],
  languages: ['English', 'French', 'German', 'Swedish', 'Italian', 'Russian'],
  released: ISODate('1997-12-19T00:00:00.000Z'),
  awards: { wins: 127, nominations: 63 },
  directors: ['James Cameron'],
});

{
  acknowledged: true,
  insertedId: ObjectId("649bd664225fda6678b00128")
}
```

使用 `db.<collection>.insertMany` 方法插入多个文档：

```sh
> db.movies.insertMany([
  {
    title: 'The Dark Knight',
    year: 2008,
    genres: ['Action', 'Crime', 'Drama'],
    languages: ['English', 'Mandarin'],
    released: ISODate('2008-07-18T00:00:00.000Z'),
    awards: { wins: 144, nominations: 106 },
    directors: ['Christopher Nolan'],
  },
  {
    title: 'Spirited Away',
    year: 2001,
    genres: ['Animation', 'Adventure', 'Family'],
    languages: ['Japanese'],
    released: ISODate('2003-03-28T00:00:00.000Z'),
    awards: { wins: 52, nominations: 22 },
    directors: ['Hayao Miyazaki'],
  },
]);

{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("649bd6d1225fda6678b00129"),
    '1': ObjectId("649bd6d1225fda6678b0012a")
  }
}
```

## 3. 查找文档

使用 `db.<collection>.findOne` 方法查询单个文档：

```sh
db.movies.findOne({});
```

使用 `db.<collection>.find` 方法查询多个文档，比如查询全部：

```sh
db.movies.find({});
```

查找 Christopher Nolan 执导的电影：

```sh
db.movies.find( { "directors": "Christopher Nolan" } );
```

查找 2000 年以前的电影：

```sh
db.movies.find( { "released": { $lt: ISODate("2000-01-01") } } );
```

查找获奖超过 100 项的电影：

```sh
db.movies.find( { "awards.wins": { $gt: 100 } } );
```

查找语种包含 Japanese 或 Mandarin 的电影：

```sh
db.movies.find( { "languages": { $in: [ "Japanese", "Mandarin" ] } } );
```

使用 `<field>: 0|1` 键值对指定返回的字段。值 “1” 表示包含该字段，值 “0” 表示排除该字段。例如：

```sh
> db.movies.find( { }, { "title": 1 } );

[
  { _id: ObjectId("649bd664225fda6678b00128"), title: 'Titanic' },
  { _id: ObjectId("649bd6d1225fda6678b00129"), title: 'The Dark Knight' },
  { _id: ObjectId("649bd6d1225fda6678b0012a"), title: 'Spirited Away' }
]
```

默认会返回 \_id 字段。若不需要则将其排除：

```sh
> db.movies.find( { }, { "_id": 0, "title": 1 } );

[
  { title: 'Titanic' },
  { title: 'The Dark Knight' },
  { title: 'Spirited Away' }
]
```

## 4. 聚合文档

使用 `db.<collection>.aggregate` 方法进行聚合查询，例如以下命令，计算每个 genres 值出现的次数并排序展示：

- $unwind 将 genres 数组中的每个元素输出为一个文档。
- $group 和 $count 计算每个 genre 的出现次数并记录在 genreCount 字段中。
- $sort 将结果文档按照 genreCount 字段降序进行排序。

```sh
> db.movies.aggregate( [
   { $unwind: "$genres" },
   {
     $group: {
       _id: "$genres",
       genreCount: { $count: { } }
     }
   },
   { $sort: { "genreCount": -1 } }
] );

[
  { _id: 'Drama', genreCount: 2 },
  { _id: 'Action', genreCount: 1 },
  { _id: 'Crime', genreCount: 1 },
  { _id: 'Romance', genreCount: 1 },
  { _id: 'Animation', genreCount: 1 },
  { _id: 'Family', genreCount: 1 },
  { _id: 'Adventure', genreCount: 1 }
]
```

## 5. 修改文档

使用 `db.<collection>.updateOne` 方法更新单个符合条件的文档。比如将电影标题从 Titanic 更新为 Titanic(new)：

```sh
> db.movies.updateOne(
   { title: "Titanic" },
   { $set: { title: "Titanic(new)" } }
);

{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
```

使用 `db.<collection>.updateMany` 方法更新多个符合条件的文档。比如以下例子，将在 2005 年之前发布的电影更新状态为 “P”。其中 `$currentDate` 运算符会将 lastModified 字段的值更新为当前日期，如果 lastModified 字段不存在则会自动创建：

```sh
> db.movies.updateMany(
   {
     released: { $lt: ISODate("2005-01-01") }
   },
   {
     $set: { status: "P" },
     $currentDate: { lastModified: true }
   }
);

{
  acknowledged: true,
  insertedId: null,
  matchedCount: 2,
  modifiedCount: 2,
  upsertedCount: 0
}
```

## 6. 删除文档

使用 `db.<collection>.deleteOne` 方法删除单个符合条件的文档。比如删除标题为 “The Dark Knight” 的文档：

```sh
> db.movies.deleteOne( { title: "The Dark Knight" } );

{ acknowledged: true, deletedCount: 1 }
```

使用 `db.<collection>.deleteMany` 方法删除多个符合条件的文档。比如删除状态为 “P” 的文档：

```sh
> db.movies.deleteMany( { status: "P" } );

{ acknowledged: true, deletedCount: 2 }
```
