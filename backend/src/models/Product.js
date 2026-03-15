const mongoose = require("mongoose");
<<<<<<< HEAD

const productSchema = new mongoose.Schema(
    {
        productName: {
            type: String,
            required: true,
            trim: true
        },
        productCode: {
            type: String,
            required: true,
            unique: true
        },
        price: {
            type: Number,
            required: true,
            min: 0
        },
        description: {
            type: String,
            default: ""
        },
        images: [
            {
                type: String
            }
        ],
        quantity: {
            type: Number,
            default: 0,
            min: 0
        },
        status: {
            type: String,
            enum: ["active", "inactive"],
            default: "active"
        },
        categoryID: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Category",
                required: true
            }
        ],
        slogan: {
            type: String,
            default: ""
        },
        variants: [
            {
                label: String, // e.g., "200g", "500g"
                price: Number,
                stock: Number
            }
        ]
    },
    { timestamps: true }
);

productSchema.index({
    productName: "text",
    description: "text"
});

module.exports = mongoose.model("Product", productSchema);
=======
const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slogan: { type: String },
    category: { type: String, required: true },

    variants: [
      {
        label: String,
        price: Number,
        stock: Number,
      },
    ],

    images: [String],
    description: { type: String },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Product", ProductSchema);
>>>>>>> e344a2b8c22a04bee0f22d144f39392d00bd1fde
