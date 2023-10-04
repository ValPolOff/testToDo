const Router = require('express')
const router = new Router
const postController = require('../controllers/postController')

router.post('/',postController.create) //Создать пост
router.get('/',postController.getAll) //Получить все посты
router.delete('/',postController.delete) //Удалить пост
router.put('/',postController.update) //Изменить пост

module.exports = router