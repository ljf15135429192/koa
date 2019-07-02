
const UserModel= require('../schema/user');
// import userModel from '../controller/user'

console.log(222222,UserModel);
const UserController= {
    async getInfo(ctx, next){
        const {name = '', pwd='' } = ctx.query;
        console.log(111111111111111,name,pwd)
        UserModel.find({name:name,phone:1,order:1},function(error, result) { 

            console.log(error, result)
        });
    }
}

module.exports = UserController