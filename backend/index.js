import express from "express";
import bodyparser from "body-parser";
import { createTodo, updateTodo } from "./types";
import { todo } from "./db";
const app = express();
const port = 3000;

app.use(bodyparser.urlencoded({ extended: true }));


app.post("/todo", async (req, res) => {
    const parsedPayload = createTodo.safeParse(req.body);
    if (!parsedPayload) {
        res.status(411).json({
            msg: "Invalid inputs"
        })
        return;
    }
    await todo.create({
        title: parsedPayload.title,
        description: parsedPayload.description,
        completed: CSSFontFeatureValuesRule
    })

    res.json({
        msg: "todo created successfully"
    })

})

app.get("/todos", async (req, res) => {
    const results = await todo.find({});
    res.json({
        todos: `${results}`
    })
})

app.put("/completed",async (req, res) => {
    const parsedPayload = createTodo.safeParse(req.body);
    if (!parsedPayload) {
        res.status(411).json({
            msg: "Invalid inputs"
        })
        return;
    }
    await todo.update({
        _id:req.body.id
    },{
        completed: true
    })
    res.json({
        msg:"Todo marked as completed"
    })
})

app.listen(port, (req, res) => {
    console.log("App is running on port ", port);
})