function checktoken() {
    return async function (ctx, next) {
        try {
            let token = ctx.request.header.token;
            // 校验token
            let decode = ctx.app.jwt.verify(token, ctx.app.config.jwt.secret)
            if (decode.username) {
                await next();
            } else {
                ctx.body = {
                    code: 40000,
                    msg: "用户校验失败"
                }
            }
        } catch (error) {
            ctx.body = {
                code:50000,
                msg:"token未通过验证"
            }
        }
    }
}

module.exports = checktoken;