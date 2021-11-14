module.exports = app => {
    const { STRING } = app.Sequelize;
    const Clazz = app.model.define('clazz', {
        //自动生成id
        name: STRING,
    })
    return Clazz;
}

//班级：id,name