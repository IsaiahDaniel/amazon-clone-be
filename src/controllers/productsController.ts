import Product from "../models/Productmodel";

const getProducts = async (req: any, res: any) => {
    console.log("hitting here");
    const allProducts = await Product.find();
    console.log(allProducts);
    res.json(allProducts);
}

const getProduct = async (req: any, res: any) => {
    console.log("hitting here");
    const singleProduct = await Product.findOne({ _id: req.params.id });
    console.log(singleProduct);
    res.json(singleProduct);
}



export {
    getProducts   
}
