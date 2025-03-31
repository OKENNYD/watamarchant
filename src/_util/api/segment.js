import categories from "./category"

let Segments = []

categories.map(cat=> Segments += cat.name);

let arr = ["Recommended For You", "Top Deals", "Popular Product", "Shop By Category", "Top Seller"]

Segments += arr;

export default Segments;