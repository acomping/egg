const Controller = require("egg").Controller;

class JwtController extends Controller {

    async doLogin(){
        let user = this.ctx.request.body.user;
        if(user.username === "admin" && user.password === "123"){
            let user_jwt = {username:user.username}
            let token =  this.app.jwt.sign(user_jwt, this.app.config.jwt.secret);
            this.ctx.body = {
                code:20000,
                token:token
            }
        }else{
            this.ctx.body = {
                code:40000,
                msg:"用户名密码错误"
            }
        }
    }

    async getMessage(){
        this.ctx.body = "hello jwt"
    }

    async index() {
        let user = {
            username: "xiaoming"
        }
        //用户登录
        let token = this.app.jwt.sign(user, this.app.config.jwt.secret)
        // this.ctx.body = token

        try {
            let decode = this.app.jwt.verify(token, this.app.config.jwt.secret)
            this.ctx.body = decode
        } catch (error) {
            this.ctx.body = "token未通过验证"
        }
    }
}

module.exports = JwtController;