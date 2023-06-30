// 连接数据库
require('./connect');

// 引入模型
const MovieModel = require('./movie-model');

// 查找一个文档
MovieModel.findOne({ title: 'Titanic' })
  .then((doc) => {
    console.log('查找成功');
    console.log(doc);

    // 更新文档
    doc.title = 'Titanic(new)';
    return doc.save();
  })
  .then((doc) => {
    console.log('更新成功');
    console.log(doc);
  })
  .catch((error) => {
    console.log('操作失败');
    console.error(error);
  });
