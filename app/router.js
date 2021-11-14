'use strict';
/* 
npm init egg --type=simple
npm install --save egg-view-nunjucks
npm install --save egg-cors
npm install --save egg-jwt
npm install --save egg-sequelize mysql2
 RESTful风格的URL定义
        restful风格的urI可以简化路由文件
        router.resources('posts', '/api/posts', controller.posts); //一个方法同时定义增删改查
        Method   Path            Route Name   Controller.Action
        GET      /posts          posts        app.controllers.posts.index
        GET      /posts/new      new_ post    app.controllers.posts.new
        GET      /posts/:id      post         app.controllers.posts.show
        GET      /posts/:id/edit edit_post    app.controllers.posts.edit
        POST     /posts          posts        app.controllers.posts.create
        PUT      /posts/:id      post         app.controllers.posts.update
        DELETE   /posts/:id      post         app.controllers.posts.destroy
*/
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // router.get('/fruits',controller.fruits.index);
  // router.get('/fruits/:id',controller.fruits.getId);
  // router.get('/createfruit',controller.fruits.createPage);
  // router.post('/createfruit',controller.fruits.createFruit);
  router.resources('fruits','/fruits',controller.fruits)
  router.get("/data",controller.home.getData);
  router.get('/login',controller.home.login);
  router.post('/login',controller.home.doLogin);
  router.post('/logout',controller.home.logout);
  router.get('/zhuce',controller.home.zhuce);
  router.get('/jwt',controller.jwt.index);
  router.post("/jwtlogin",controller.jwt.doLogin)
  router.get("/jwtmessage",app.middleware.checktoken(),controller.jwt.getMessage)
  router.resources('clazz','/clazz',controller.clazz);
  router.resources('student','/student',controller.student);
};
