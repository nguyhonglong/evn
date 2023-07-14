import mongoose from "mongoose";
const Schema = mongoose.Schema

const parameter = new Schema({
    timestamp: { type: String },
    hydrogen: { type: String },
    methane: { type: String },
    acetylene: { type: String },
    ethylene: { type: String },
    ethane: { type: String },
    carbonMonoxide: { type: String },
    carbonDioxide: { type: String },
    oxygen: { type: String },
    TDCG: { type: String },
    water: { type: String },
})

const notification = new Schema({
    title: { type: String },
    descryption: { type: String },
    createdDate: { type: String }
})


export const Parameter = mongoose.model('Parameter', parameter);
export const Notification = mongoose.model('Notification', notification);
