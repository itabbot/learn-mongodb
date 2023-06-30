// 连接数据库
require('./connect');

// 引入模型
const MovieModel = require('./movie-model');

// 查找一个文档
MovieModel.aggregate([
  { $unwind: '$genres' },
  {
    $group: {
      _id: '$genres',
      genreCount: { $count: {} },
    },
  },
  { $sort: { genreCount: -1 } },
])
  .then((rst) => {
    console.log('聚合查找成功');
    console.log(rst);
  })
  .catch((error) => {
    console.log('聚合查找失败');
    console.error(error);
  });
