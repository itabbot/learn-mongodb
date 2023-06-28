// 连接数据库
require('./connect');

// 引入模型
const MovieModel = require('./movie-model');

// 删除一个文档
MovieModel.deleteMany({ status: 'P' })
  .then((rst) => {
    console.log('删除结果：');
    console.log(rst);
  })
  .catch((error) => {
    console.log('删除失败');
    console.error(error);
  });
