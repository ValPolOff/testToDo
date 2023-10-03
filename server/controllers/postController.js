const {Post} = require('../models/models')
const ApiError = require('../error/ApiError')

class PostController {
    async create (req,res) {
        const {text} = req.body
        const post = await Post.create({text})
        return res.json(post)
    }
    async getAll (req,res) {
        const post = await Post.findAll()
        return res.json(post)
    }
    async delete (req,res) {
        const {id} = req.body
        const post = await Post.drop({
            where:{id:id}
        })
        return res.json(post)
    }
    async update (req,res) {
        
    }
}

module.exports = new PostController()