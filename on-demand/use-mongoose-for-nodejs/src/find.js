// 连接数据库
require('./connect');

// 引入模型
const MovieModel = require('./movie-model');

// 查找一个文档
MovieModel.find(
  // 过滤条件
  {
    title: 'Titanic',
    released: { $lt: '2010-01-01' },
    'awards.wins': { $gt: 1 },
    languages: { $in: ['English', 'Mandarin'] },
  },
  // 指定字段
  {
    _id: 0,
    title: 1,
    released: 1,
  }
)
  .then((docs) => {
    console.log('查找成功');
    console.log(docs);
  })
  .catch((error) => {
    console.log('查找失败');
    console.error(error);
  });
