// 连接数据库
require('./connect');

// 引入模型
const MovieModel = require('./movie-model');

// 更新多个文档
MovieModel.updateMany(
  {
    released: { $lt: '2005-01-01' },
  },
  {
    $set: { status: 'P' },
    $currentDate: { lastModified: true },
  }
)
  .then((rst) => {
    console.log('更新结果：');
    console.log(rst);
  })
  .catch((error) => {
    console.log('更新失败');
    console.error(error);
  });
