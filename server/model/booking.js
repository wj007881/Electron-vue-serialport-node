var mongoose = require('mongoose') 

var Schema = mongoose.Schema   //用于定义表模型

//创建模型

var booking = new Schema({
"bookingList":[
{
"title": String,
"ip": String,
"test_detail": String,
"test_type": String,
"tester": String,
"created": {
    type: Date,
    default: Date.now
},
}
]
});
//输出模型

module.exports = mongoose.model('booking',booking )

// 这里需要注意一下，输出的模型名字要和想要关联的数据库表名字相关，如：模型名字是Kecheng，则想要关联的数据库表名要设为Kechengs; 如果没有加s对应，可加第三个参数用于指定需要关联的表。如

// module.exports = mongoose.model('Kecheng',classSchema ,'otherCollectionName')