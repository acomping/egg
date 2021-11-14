const Controller = require("egg").Controller;

class ClazzController extends Controller {

    // restfull:index/create/destroy/update
    async index() {
      
        let clazzList = await this.app.model.Clazz.findAll()
        // let id = this.ctx.request.query.id;
        // let clazzList = await this.app.model.Clazz.findAll({
        //     where: {
        //         id: id
        //     }
        // })
        this.ctx.body = clazzList
    }
    async create() {
        let name = this.ctx.request.body.name;
        await this.app.model.Clazz.create({
            name: name
        })

        this.ctx.body = "添加成功"
    }
    async destroy() {
        let id = this.ctx.params.id;
        await this.app.model.Clazz.destroy({
            where: {
                id: id
            }
        })
        this.ctx.body = "删除布局数据"
    }
    async update() {
        let id = this.ctx.params.id;
        let name = this.ctx.request.body.name
        await this.app.model.Clazz.update({ name: name }, {
            where: {
                id: id
            }
        })
        this.ctx.body = "修改成功"
    }
}

module.exports = ClazzController

/* 说明︰在真实项目中，controller和操作数据的逻辑要分离，以便于项目的扩展与维护。
this.app.model.Clazz.findAll);//查询数据
this.app.model.Clazz.findAll({where:{id:1}})//通过where设置查询条件
this.app.model.Clazz.create({name: “xx”});//添加数据
this.app.model.Clazz.update([name: “xx”},{where:{id:1}});//通过条件修改数据
this.app.model.Clazz.destroy({where:{id:1}});//通过条件删除数据
    */
