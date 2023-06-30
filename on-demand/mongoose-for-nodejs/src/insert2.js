// 连接数据库
require('./connect');

// 引入模型
const MovieModel = require('./movie-model');

// 创建并保存一个模型对象
MovieModel.create({
  title: 'Titanic',
  year: 1997,
  genres: ['Drama', 'Romance'],
  languages: ['English', 'French', 'German', 'Swedish', 'Italian', 'Russian'],
  released: '1997-12-19T00:00:00.000Z',
  awards: { wins: 127, nominations: 63 },
  directors: ['James Cameron'],
})
  .then((doc) => {
    console.log('保存成功');
    console.log(doc);
  })
  .catch((error) => {
    console.log('保存失败');
    console.error(error);
  });
