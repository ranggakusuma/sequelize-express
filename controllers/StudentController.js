const Model = require('../models/index')

class StudentController {
    static add(req, res) {
        Model.Student.create(req.body)
            .then((data) => {
                if(data) {
                    res.redirect('/student/')
                }
            }).catch((err) => {
                res.send(err)
            });
    } 

    static showStudent(req, res) {
        Model.Student.findAll()
            .then((data) => {
                res.render('./pages/student', {data: data})
            }).catch((err) => {
                res.send(err)
            });
    }

    static studentAddSubject(req, res) {
        let dataStudent = {}
        Model.Student.findOne({
            where: {
                id: req.params.id
            }
        })
            .then((data) => {
                if (data) {
                    return dataStudent = data
                } else {
                    res.send('Id not found')
                }
            })
            .then(dataStudent => {
                return Model.Subject.findAll()
            })
            .then(data => {
                let allData = {
                    student: dataStudent,
                    subject: data
                }
                
                res.render('./pages/studentSubject.ejs', allData)
            })
            .catch((err) => {
                res.send(err)
            });
    }

    static studentupdateSubject(req, res) {
        Model.Student.update(req.body, {
            where: {
                id: req.params.id
            }
        })
            .then((data) => {
                if(data) {
                    res.redirect('/student')
                } else {
                    res.send('id not found')
                }
            }).catch((err) => {
                res.send(err)
            });
    }

    static delete (req, res) {
        Model.Student.destroy({
            where : {
                id: req.params.id
            }
        })
            .then((data) => {
                if (data) {
                    res.redirect('/student')
                } else {
                    res.send('id not found')
                }
            }).catch((err) => {
                res.send(err)
            });
    }

    static edit (req, res) {
        Model.Student.findOne({
            where: {
                id: req.params.id
            }
        })
            .then((data) => {
                if (data) {
                    res.render('./pages/studentEdit', {data: data})
                } else {
                    res.send('id not found')
                }
            }).catch((err) => {
                res.send(err)
            });
    } 

    static editUpdate(req, res){    
        Model.Student.update(req.body, {
            where : {
                id: req.params.id
            }
        })
            .then((data) => {
                if (data) {
                    res.redirect('/student')
                } else {
                    res.send('id not found')
                }
            }).catch((err) => {
                res.send(err)
            });
    }
}

module.exports = StudentController