const express = require('express')
const SubjectController = require('../controllers/SubjectController')
const router = express.Router()

router.get('/', (req, res) => {
    SubjectController.showAll(req, res)
})

router.get('/:id/enrolled-students', (req, res) => {
    SubjectController.enrolled(req, res)
}) 

module.exports = router