import fs from "fs";

export const DeleteImage = async (req, res) => {
  try {
    const path = `.${req.body.image}`;
    await fs.unlinkSync(path);
    res.status(200).json({ message: "delete" });
  } catch (e) {
    res.status(400).json({ message: e });
  }
};
