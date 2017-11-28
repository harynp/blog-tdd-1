const express = require('express')
const router = express.Router()
const blog = require('../controllers/blogController')

router.get('/', blog.all)
router.get('/:id', blog.findById)
router.post('/', blog.create)
router.put('/:id', blog.update)
router.delete('/:id', blog.remove)

module.exports = router
