import MachineTool from "../models/MachineTool.js";

export const GetItem = async (req, res) => {
  try {
    const tools = await MachineTool.findOne({ _id: req.params.id });
    res.status(200).json(tools);
  } catch (e) {
    res.status(400).json({ message: e });
  }
};
