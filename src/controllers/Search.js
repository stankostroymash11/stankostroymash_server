import Duplicates from "../models/Duplicates.js";
import MachineTool from "../models/MachineTool.js";

export const Search = async (req, res) => {
  try {
    let s = req.query.search;
    const search = await MachineTool.find({
      $or: [{ title: s.toUpperCase() }, { title: s.toLowerCase() }],
    }).select({ shortDescription: 0, photos: 0, description: 0 });
    const searchD = await Duplicates.find({
      $or: [{ title: s.toUpperCase() }, { title: s.toLowerCase() }],
    }).select({ shortDescription: 0, photos: 0, description: 0 });
    return res.status(200).json({ result: [...search, ...searchD] });
  } catch (e) {
    res.status(400).json({ message: "search" });
  }
};
