const {Post} = require('../models/models')
const ApiError = require('../error/ApiError')

class PostController {
    async create (req,res) {
        const {text,role} = req.body
        const post = await Post.create({text,role})
        return res.json(post)
    }
    async getAll (req,res) {
        const post = await Post.findAll()
        return res.json(post)
    }
    async delete (req,res) {
        const {id} = req.body
        const post = await Post.destroy({
            where:{id:id}
        })
        return res.json(post)
    }
    async update (req,res) {
        const {text,id} = req.body
        const post = await Post.update(req.body,{
            where:{id:id}
        })
        return res.json(post)
    }
    async filterComp (req,res) {
        const {sort} = req.body
        //const post;
        sort === true ? res.json(await Post.findAll({where:{role:true}})) : sort === false ? res.json(await Post.findAll({where:{role:false}})) : res.json(await Post.findAll());
        
        //return res.json(post)
    }
}

module.exports = new PostController()