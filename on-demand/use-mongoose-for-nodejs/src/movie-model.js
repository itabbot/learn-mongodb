const { Schema, model } = require('mongoose');

module.exports = model(
  // 模型名称。
  // 请使用单数形式，Mongoose 会自动将其更改为复数形式，将其转换为小写形式，并将其用作数据库集合名称。
  'Movie',
  // 定义模式
  new Schema({
    title: String,
    year: Number,
    genres: [String],
    languages: [String],
    released: Date,
    awards: {
      wins: Number,
      nominations: Number,
    },
    directors: [String],
  })
);
