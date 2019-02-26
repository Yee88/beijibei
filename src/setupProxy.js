const proxy = require('http-proxy-middleware'); //模块 vue ,react 之所以支持反向代理

module.exports = function(app) {
  app.use(proxy('/api/v1', {
          target: 'https://www.shanbay.com',
          host: 'www.shanbay.com',
          changeOrigin:true,
          headers:{
    			cookie:'_ga=GA1.2.339604756.1551076247; csrftoken=E2RqnNcWIOP4ZLsizrwG4p9wXCDTgJvA; __utmc=183787513; __utmz=183787513.1551140889.7.4.utmcsr=baidu|utmccn=(organic)|utmcmd=organic; auth_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjE0OTU4NTk4LCJleHAiOjE1NTIwMDYyOTgsImRldmljZSI6IiIsInVzZXJuYW1lIjoiUGhvbmVfYTRjMDBkZjFmNWRkZjBmYSIsImlzX3N0YWZmIjowfQ.JeX1ajZ-Gj6l9ztfuYt__0Y7QWYrykLkZUL829Eh5qw; locale=zh-cn; userid=214958598; __utma=183787513.339604756.1551076247.1551140889.1551148552.8; userid=214958598'
    		}
  }));
};