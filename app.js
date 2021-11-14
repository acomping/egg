module.exports = app =>{
    app.beforeStart(async function(){
        // await app.model.sync({ force: true });//开发环境使用，会删除数据
        //sync方法根据模型去创建表
        await app.model.sync({});
    });
};