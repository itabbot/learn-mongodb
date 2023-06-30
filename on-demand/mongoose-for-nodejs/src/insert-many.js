// 连接数据库
require('./connect');

// 引入模型
const MovieModel = require('./movie-model');

// 创建并保存多个模型对象
MovieModel.create([
  {
    title: 'The Dark Knight',
    year: 2008,
    genres: ['Action', 'Crime', 'Drama'],
    languages: ['English', 'Mandarin'],
    released: '2008-07-18T00:00:00.000Z',
    awards: { wins: 144, nominations: 106 },
    directors: ['Christopher Nolan'],
  },
  {
    title: 'Spirited Away',
    year: 2001,
    genres: ['Animation', 'Adventure', 'Family'],
    languages: ['Japanese'],
    released: '2003-03-28T00:00:00.000Z',
    awards: { wins: 52, nominations: 22 },
    directors: ['Hayao Miyazaki'],
  },
])
  .then((docs) => {
    console.log('保存成功');
    console.log(docs);
  })
  .catch((error) => {
    console.log('保存失败');
    console.error(error);
  });
