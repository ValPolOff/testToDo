const Router = require('express')
const router = new Router
const postController = require('../controllers/postController')

router.post('/',postController.create) //Создать пост
router.get('/',postController.getAll) //Получить все посты
router.delete('/:id',postController.delete) //Удалить пост
router.put('/',postController.getAll) //Изменить пост

module.exports = router