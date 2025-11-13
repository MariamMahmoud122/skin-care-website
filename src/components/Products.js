import React from "react";

//     {
//         "id": 1,
//         "brand": "amorepacific",
//         "name": "age spot brightening pen",
//         "image": [
        
//         "https://i.pinimg.com/1200x/95/eb/40/95eb40b9afba770ba4d7a225560d6e45.jpg"
        
//         ]
//     },
//     {
//         "id": 2,
//         "brand": "amorepacific",
//         "name": "all day balancing care serum",
//         "image": [
//         "https://i.pinimg.com/736x/69/96/1f/69961f7a266ba44144ba8f3a424f0f7e.jpg"
        
        
//         ]
//     },
//     {
//         "id": 3,
//         "brand": "amorepacific",
//         "name": "bio-enzyme refining complex",
//         "image": [
//     "https://i.pinimg.com/736x/7d/a5/df/7da5dfb6ff34907f64c18d4fe2187373.jpg"
//   ],
//     },
//     {
//         "id": 4,
//         "brand": "amorepacific",
//         "name": "bio-enzyme refining complex",
//         "image": [
//     "https://i.pinimg.com/736x/ae/c8/1e/aec81e8e4b30ab99ae4df96e2ba0923a.jpg"
//   ],
//     },
//     {
//         "id": 5,
//         "brand": "amorepacific",
//         "name": "bio-enzyme refining complex",
//         "image": [
//     "https://i.pinimg.com/736x/54/bd/12/54bd124a9fc76fed9dc22da5fef0f617.jpg"
//   ],
//     },
//     {
//         "id": 6,
//         "brand": "amorepacific",
//         "name": "bio-enzyme refining complex",
//         "image": [
//     "https://i.pinimg.com/1200x/41/0e/66/410e66512c7151a247361a9cc4e2f594.jpg"
//   ],
//     },
//     {
//         "id": 7,
//         "brand": "amorepacific",
//         "name": "bio-enzyme refining complex",
//         "image": [
//     "https://i.pinimg.com/736x/bf/5c/26/bf5c26e32bc4f3b31d42443982e04aa2.jpg"
//   ],
//     },
//     {
//         "id": 8,
//         "brand": "amorepacific",
//         "name": "bio-enzyme refining complex",
//         "image": [
//     "https://i.pinimg.com/736x/c9/a9/56/c9a95633740b40986ea4d49fd91c4525.jpg"
//   ],
//     },
// ];
const products = [
  {
    id: 1,
    brand: "Amorepacific",
    title: "Age Spot Brightening Pen",
    price: "$89.00",
    image: [
      "https://i.pinimg.com/1200x/95/eb/40/95eb40b9afba770ba4d7a225560d6e45.jpg"
    ]
  },
  {
    id: 2,
    brand: "Amorepacific",
    title: "All Day Balancing Care Serum",
    price: "$120.00",
    image: [
      "https://i.pinimg.com/736x/69/96/1f/69961f7a266ba44144ba8f3a424f0f7e.jpg"
    ]
  },
  {
    id: 3,
    brand: "Amorepacific",
    title: "Bio-Enzyme Refining Gentle Formula",
    price: "$135.00",
    image: [
      "https://i.pinimg.com/736x/7d/a5/df/7da5dfb6ff34907f64c18d4fe2187373.jpg"
    ]
  },
  {
    id: 4,
    brand: "Amorepacific",
    title: "Moisture Bound Rejuvenating Cream",
    price: "$150.00",
    image: [
      "https://i.pinimg.com/736x/ae/c8/1e/aec81e8e4b30ab99ae4df96e2ba0923a.jpg"
    ]
  },
  {
    id: 5,
    brand: "Amorepacific",
    title: "Time Response Skin Renewal Serum",
    price: "$210.00",
    image: [
      "https://i.pinimg.com/736x/54/bd/12/54bd124a9fc76fed9dc22da5fef0f617.jpg"
    ]
  },
  {
    id: 6,
    brand: "Amorepacific",
    title: "Treatment Cleansing Foam",
    price: "$65.00",
    image: [
      "https://i.pinimg.com/1200x/41/0e/66/410e66512c7151a247361a9cc4e2f594.jpg"
    ]
  },
  {
    id: 7,
    brand: "Amorepacific",
    title: "Essential Refining Toner - Gentel",
    price: "$70.00",
    image: [
      "https://i.pinimg.com/736x/bf/5c/26/bf5c26e32bc4f3b31d42443982e04aa2.jpg"
    ]
  },
  {
    id: 8,
    brand: "Amorepacific",
    title: "Vintage Single Extract Essence",
    price: "$195.00",
    image: [
      "https://i.pinimg.com/736x/c9/a9/56/c9a95633740b40986ea4d49fd91c4525.jpg"
    ]
    // pcost:[
    //   ""
    // ]
  }
];


const Products = () => {
  return (
    <section  id="products" className="py-5">
      <div className="container">
        <h3 className="mb-4 text-center fw-bold" style={{color:"white"}}>Our Products</h3>
        <div className="row g-4">
          {products.map((p) => (
            <div className="col-md-3 m" key={p.id}>
              <div className="card product-card p-3 border-0">
                <div className="text-center">
                  <img src={p.image[0]} alt={p.title} className="product-img mb-3" />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title mb-1">{p.title}</h5>
                  <p className=" fw-semibold mb-2" style={{ color: "black" }} >{p.price}</p>
                  <button
                     className="btn btn-sm text-white border-0"
                     style={{
                     background: "linear-gradient(135deg, rgb(181 149 255), #00d4ff99, rgb(149 134 220))",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
  }}
>
  Add to Cart
</button>

                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
