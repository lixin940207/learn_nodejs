const mongoose = require("mongoose")

mongoose.Promise = Promise;

const Schema = mongoose.Schema;//规定表里面的字段的规范

const ObjectId = Schema.Types.ObjectId; // schema中的objectid用这个
// 自己生成objectid用这个：mongoose.Types.ObjectId

const uri = 'mongodb://localhost:27017/what_i_love';
mongoose.connect(uri);
const db = mongoose.connection;

const UserSchema = new Schema({
    name: {type: String, required: true, unique: true, index: 1},
    age: {type: Number, max: 188, min: 0},
});

const UserModel = mongoose.model('user', UserSchema);//绑定表和model


(async (param) => {
    const filter = {};
    if(param.name) filter.name = param.name;
    const flow = UserModel.find(filter);
    if(param.projection) flow.select(param.projection);
    if(param.sort) flow.sort(param.sort);

    return await flow.exec();

})({
        name:'xiaoli',
        projection:{age:1},
        sort:{age:-1}
    })
    .then(r => {
        console.log(r)
    })
    .catch(e => {
        console.log(e)
    });

db.on('open', ()=>{
    console.log('db connected!')
});

db.on('error', (e) => {
    console.log(e)
})
