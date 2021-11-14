const Controller = require("egg").Controller;
let fruitList = [
    "香蕉",
    "苹果",
    "鸭梨",
]
class FruitsController extends Controller {
    async index() {
        // let query = this.ctx.request.query;
        // console.log(query);
        // this.ctx.body = `传递的index值是${query.index}`
        this.ctx.body = fruitList
    }

    // async new() {
    //     this.ctx.body = `
    //      <form action="/fruits" method="post">
    //         <input type="text" name="fruitname" />
    //         <button>添加</button>
    //      </form>
    //      `;
    // }

    async create() {
        let fruit = this.ctx.request.body.fruit;
        fruitList.push(fruit);
        this.ctx.body = "添加成功"
        //跳转到/fruits get请求
        //重定向
        // this.ctx.redirect('/fruits');
    }
    // /fruits/:id delete请求
    async destroy(){
        let id = this.ctx.params.id;
        fruitList.splice(id,1);
        this.ctx.body = "删除成功！"
    }

    async update(){

    }

    // async getId() {
    //     let id = this.ctx.params.id
    //     this.ctx.body = `传递的id是${id}`
    // }

    // async createPage() {
    //     this.ctx.body = `
    //     <form action="/createfruit" method="post">
    //     <input type="text" name="fruitname" />
    //     <button>添加</button>
    //     </form>
    //     `;
    // }

    // async createFruit() {
    //     let fruit = this.ctx.request.body;
    //     fruitList.push(fruit.fruitname);
    //     this.ctx.body = "添加成功"
    // }
}


module.exports = FruitsController;