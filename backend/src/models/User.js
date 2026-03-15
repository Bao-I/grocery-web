const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
<<<<<<< HEAD
    fullName: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: function () {
        return this.authProvider === "LOCAL";
      },
    },
    phone: { type: String, default: null },
    status: { type: String, enum: ["ACTIVE", "LOCKED"], default: "ACTIVE" },
    role: { type: String, enum: ["CUSTOMER", "ADMIN"], default: "CUSTOMER" },
    resetToken: { type: String, default: null },
    resetTokenExpiry: { type: Date, default: null },
    googleId: { type: String, default: null },
    authProvider: { type: String, enum: ["LOCAL", "GOOGLE"], default: "LOCAL" },
    avatar: { type: String, default: null },
    gender: { type: String, enum: ["Nam", "Nữ", "Khác"], default: null },
    birthday: { type: Date, default: null },
    availableSpins: { type: Number, default: 1 },
    lastSpinDate: { type: Date, default: null },
    vouchers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Promotion" }],
    lastMiniGameDate: { type: Date, default: null },
=======
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, default: "CUSTOMER" },
    status: { type: String, default: "ACTIVE" },
    avatar: { type: String, default: "" },
>>>>>>> e344a2b8c22a04bee0f22d144f39392d00bd1fde
  },
  { timestamps: true },
);

module.exports = mongoose.model("User", UserSchema);
