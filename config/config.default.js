/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1636762974038_7696';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.security = {
    csrf: {
      enable: false,//post
    },
  };
  config.view = {
    defaultViewEngine:'nunjucks'
  };
  config.cors={
    origin:"*",
    allowMethods:'GET,HEAD,PUT,POST,DELETE,PATCH'
  };
  config.jwt={
    secret:'chaojiguanli'
  }
  config.sequelize = {
    dialect:'mysql',
    database:'firstsql',
    host:'localhost',
    port:3306,
    username:'root',
    password:'111111',
    timezone:'+08:00'
  }
  return {
    ...config,
    ...userConfig,
  };
};
