import mongoose from "mongoose";

const MachineToolSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    categoryEn: {
      type: String,
      require: true,
    },
    subCategory: {
      type: String,
      require: true,
    },
    subCategoryEn: {
      type: String,
      require: true,
    },
    publish: {
      type: Boolean,
      default: true,
    },
    photos: {
      type: Array,
      require: false,
    },
    photoPrimary: {
      type: String,
      require: false,
      default: null,
    },
    price: {
      type: String,
      default: "договорная",
    },
    shortDescription: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("MachineTools", MachineToolSchema);
