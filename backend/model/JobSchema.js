
const mongoose =  require("mongoose")
const Schema = mongoose.Schema;

const JBSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    location:{
        type:String,
        require:true
    },
    orderdate:{
        type:String,
        require:true
    },
    qty:{
        type:String,
        require:true
    },
    jobid:{
        type:String,
        require:true
    },
    status:{
        type:String,
        require:true
    }

}, { versionKey: false })

module.exports = mongoose.model("JobData",JBSchema)