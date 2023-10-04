const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user',{
    id:{type:DataTypes.INTEGER, primaryKey:true,autoIncrement:true},
    email:{type:DataTypes.STRING, unique:true},
    password:{type:DataTypes.STRING},
    role:{type:DataTypes.STRING, defaultValue: "USER"},
})

const Post = sequelize.define('post',{
    id:{type:DataTypes.INTEGER, primaryKey:true,autoIncrement:true},
    text:{type:DataTypes.STRING},
    data:{type:DataTypes.STRING},
    performance:{type:DataTypes.BOOLEAN, defaultValue: false},
})

/*User.hasOne(Post)
Post.belongsTo(User)*/

module.exports = {
    User,
    Post
}