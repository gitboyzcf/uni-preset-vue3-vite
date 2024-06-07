import Mock from 'mockjs'

Mock.mock('/mock/user', 'post', {
  code: 200,
  data: {
    id: '@id',
    name: '@name',
    'age|18-30': 20,
    'sex|1': ['男', '女']
  }
})
