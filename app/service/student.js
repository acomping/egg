const Service = require("egg").Service;

class StudentService extends Service {
    async getStudentList() {
        try {
            let studentList = await this.app.model.Clazz.findAll()
            return studentList;
        } catch (error) {
            return null;
        }
    }

    async createStudent(name,achievement,clazz_id){
        try {
            await this.app.model.Student.create({
                name:name,
                achievement:achievement,
                clazz_id:clazz_id
            })
            return true;
        } catch (error) {
            return false;
        }
    }
}

module.exports = StudentService;