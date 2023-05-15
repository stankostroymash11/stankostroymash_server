import Duplicates from "../models/Duplicates.js";

export const GetItemDuplicates = async (req, res) => {
  try {
    const tools = await Duplicates.findOne({ _id: req.params.id });
    res.status(200).json(tools);
  } catch (e) {
    res.status(400).json({ message: e });
  }
};
