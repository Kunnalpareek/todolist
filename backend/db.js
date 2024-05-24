import mongoose from "mongoose";
await mongoose.connect("mongodb+srv://kunnalpareek18:Cwx0KOLTUjnM2moo@cluster0.nfmwcg7.mongodb.net/Todo_list");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

export const todo = mongoose.model("todos",todoSchema);