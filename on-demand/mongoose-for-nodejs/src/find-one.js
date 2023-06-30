// 连接数据库
require('./connect');

// 引入模型
const MovieModel = require('./movie-model');

// 查找一个文档
MovieModel.findOne({})
  .then((doc) => {
    console.log('查找成功');
    console.log(doc);
  })
  .catch((error) => {
    console.log('查找失败');
    console.error(error);
  });
