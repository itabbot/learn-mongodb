const mongoose = require('mongoose');

// Mongoose 让您可以立即开始使用模型，而无需等待 mongoose 建立与 MongoDB 的连接。
// 这是因为 mongoose 在内部缓冲模型函数调用。
//
// 所以特别的，如果您在没有连接的情况下使用模型，Mongoose 默认情况下不会抛出任何错误。

mongoose
  .connect('mongodb://127.0.0.1:27017/test')
  .then(() => {
    console.log('连接成功');
  })
  .catch((error) => {
    console.log('连接失败');
    console.error(error);
  });
