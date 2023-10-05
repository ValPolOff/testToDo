const {Post} = require('../models/models')
const ApiError = require('../error/ApiError')
const { Op } = require('sequelize')

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
        sort === true ? res.json(await Post.findAll({where:{role:true}})) : 
        sort === false ? res.json(await Post.findAll({where:{role:false}})) : 
        sort === "ASC" ? res.json(await Post.findAll({where:{},order:[["createdAt",'ASC']]})) :
        sort === "DESC" ? res.json(await Post.findAll({where:{},order:[["createdAt",'DESC']]})) :
        sort === "Today" ? res.json(await Post.findAll({
            where:{
            createdAt : {[Op.gt]:new Date().getFullYear().toString() + '-' + (new Date().getUTCMonth()+1).toString() + '-' + new Date().getUTCDate().toString()}}
            })) : 
        res.json(await Post.findAll());
        //new Date().getFullYear().toString() + '-' + (new Date().getUTCMonth()+1).toString() + '-' + new Date().getUTCDate().toString() + 'T'+ new Date().getUTCHours().toString() + '-'+ new Date().getUTCMinutes().toString() + '-' + new Date().getUTCMilliseconds().toString() + 'Z'
        //return res.json(post)
        console.log(new Date())
    }
}

module.exports = new PostController()