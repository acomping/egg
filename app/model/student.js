module.exports = app => {
    const { STRING,DOUBLE } = app.Sequelize;
    const Student = app.model.define('student', {
        //自动生成id
        name: STRING,
        achievement:DOUBLE
    })

    Student.associate = function(){//所属哪个班级，指向班级主键
        app.model.Student.belongsTo(app.model.Clazz,{
            foreignKey:'clazz_id',
            as:'clazz'
        })
    }

    return Student;
}