'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // ctx.body = `
    // <h1>hello world</h1>
    // `;
    if(this.ctx.session.user){
      await ctx.render("index", {
        fruits: [
          "香蕉",
          "苹果",
          "鸭梨",
        ]
      });
    }else{
      ctx.redirect('/login')
    }
  }
  async getData(){
    this.ctx.body = "hello egg";
  }

  async login(){
    await this.ctx.render("login")
  }

  async logout(){
    this.ctx.session.user = "";
    this.ctx.redirect("/login")
  }

  async zhuce(){
    await this.ctx.render("zhuce")
  }

  async doLogin(){
    let username = this.ctx.request.body.username;
    let password = this.ctx.request.body.password;
    if(username == "xiaoming" && password == "123"){
      this.ctx.session.user = username;
      this.ctx.redirect("/")
    }else{
      this.ctx.redirect("/login")
    }
  }
}

module.exports = HomeController;
