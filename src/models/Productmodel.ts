import { Schema, model, Document } from "mongoose";

const productSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  category: {
    type: String,
    require: true
  },
  image: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    require: true
  },
  brand: {
    type: String,
    require: true
  },
  rating: {
    type: Number,
    require: true
  },
  numReviews: {
    type: Number,
    require: true
  },
  countInStock: {
    type: Number,
    require: true
  },
  description: {
    type: String,
    require: true
  }
});

export interface IProduct extends Document {
//   _id?: string;
  name: string;
  category: string;
  image: string;
  price: number;
  brand: string;
  rating: number;
  numReviews: number;
  countInStock: number;
  description: string;
}


const Product = model<IProduct>("product", productSchema);

export default Product;