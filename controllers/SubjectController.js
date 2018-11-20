const Model = require('../models/index')

class SubjectController {
    static showAll(req, res) {
        Model.Subject.findAll({
            include: [{
                model: Model.Teacher
            }]
        })
            .then((data) => {
                // res.send(data)
                res.render('./pages/subject.ejs', {data:data})
            }).catch((err) => {
                res.send(err)
            });
    }

    static enrolled(req, res) {
        Model.Subject.findOne({
            where: {
                id: req.params.id
            },
            include: [{
                model: Model.Student
            }]
        })
            .then((data) => {
                // res.send(data)
                res.render('./pages/subjectEnrolled.ejs', {data: data})
            }).catch((err) => {
                res.send(err)
            });
    }
}


module.exports = SubjectController