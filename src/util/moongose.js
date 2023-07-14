module.exports = {
    multipleMongooseToObject : function(mongooses){
        return mongooses.map(mongooses => mongoose.toObject())
    },

    mongooseToObject: function(mongoose){
        return mongoose ? mongoose.toObject() : mongoose;
    },
};