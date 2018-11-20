const express = require('express')
const router = express.Router()
const StudentController = require('../controllers/StudentController')

router.get('/', (req, res) => {
    StudentController.showStudent(req, res)
})

router.get('/add', (req, res) => {
    res.render('./pages/studentAdd.ejs')
})

router.post('/add', (req, res) => {
    StudentController.add(req, res)
})

router.get('/:id/add-subject', (req, res) => {
    StudentController.studentAddSubject(req, res)
})

router.post('/:id/add-subject', (req, res) => {
    StudentController.studentupdateSubject(req, res)
})

router.get('/:id/delete', (req, res) => {
    StudentController.delete(req, res)
})

router.get('/:id/edit', (req, res) => {
    StudentController.edit(req, res)
})
router.post('/:id/edit', (req, res) => {
    StudentController.editUpdate(req, res)
})

module.exports = router