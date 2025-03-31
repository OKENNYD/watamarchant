import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  image: { type: String },
  brand: {
    name: { type: String },
  },
  offers: {
    price: { type: String },
    priceCurrency: { type: String },
    availability: { type: String },
    sku: { type: String },
  },
  category: { type: String },
  subcategory: { type: String },
  segment: { type: String },
  color: { type: String },
  size: { type: String },
  material: { type: String },
  mpn: { type: String },
  url: { type: String },
  rating: { rate: { type: String }, count: { type: String } },
  review: [
    {
      author: { type: String },
      reviewBody: { type: String },
      reviewRating: {
        ratingValue: { type: String },
        bestRating: { type: String },
        worstRating: { type: String },
      },
    },
  ],
});

const Product = mongoose.models?.products || mongoose.model("products", productSchema)

export {Product};
