import express from "express";
import { getChristmasList, postListItem, deleteItem, completedItem } from "../models/Christmaslist.js";

const christmasListRouter = express.Router();

/* GET xmas list. */
christmasListRouter.get("/", async (req, res) => {
  const data = await getChristmasList();
  res.json({ success: true, payload: data });
});

christmasListRouter.post("/", async (req, res) => {
  const listItem = req.body;
  const result = await postListItem(listItem);
  res.status(201).json({ success: true, payload: result });
});

christmasListRouter.delete('/:id', async function (req, res) {
    console.log(req.params.id)
     const deletedItem = await deleteItem(req.params.id)
     res.json({success: true, payload: deletedItem})
});

christmasListRouter.patch('/:id', async function (req, res) {
    console.log(req.params.id)
     const completed = await completedItem(req.params.id)
     res.json({success: true, payload: completed})
});

export default christmasListRouter;