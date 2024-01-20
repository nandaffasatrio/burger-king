import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { allProducts } from "../libs/allProducts";
import { numberFormat } from "../hooks/NumberFormat";

class ProductDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      allProducts: {},
      total: 0,
      quantity: 1,
    };
  }

  //   componentDidMount() {
  //     allProducts.forEach((allProducts) => {
  //       if (allProducts.id === parseInt(this.props.id)) {
  //         this.setState({
  //           allProducts: allProducts,
  //           total: allProducts.priceNow,
  //         });
  //       }
  //     });
  //     document.body.scrollTop = 0; // For Safari
  //     document.documentElement.scrollTop = 0;
  //   }

  //   handleIncrement = () => {
  //     this.setState({
  //       quantity: this.state.quantity + 1,
  //       total: this.state.total + this.state.allProducts.priceNow,
  //     });
  //   };

  //   handleDecrement = () => {
  //     if (this.state.quantity === 1) {
  //       this.setState({
  //         quantity: 1,
  //       });
  //     } else {
  //       this.setState({
  //         quantity: this.state.quantity - 1,
  //         total: this.state.total - this.state.allProducts.priceNow,
  //       });
  //     }
  //   };

  render() {
    const imgProducts = new URL(`${allProducts.img}`, import.meta.url).href;
    console.log(allProducts.priceNow);
    return (
      <main className="container py-5">
        <h1>Product Detail</h1>
        <hr />
        <div className="card mb-3">
          <div className="row g-0 py-5 px-3">
            <div className="col-8">
              <div className="card-body">
                <div>
                  <h5 className="card-title">{this.state.allProducts.image ? <img src={`${imgProducts}`} alt={alt} /> : ""}</h5>
                </div>
                <h5 className="card-title">{allProducts.title}</h5>
                <h6>{numberFormat(allProducts.priceNow)}</h6>
                <p className="card-text"></p>
              </div>
            </div>
            <div className="col-4 allProduct-button">
              <div className="input-group mb-3" style={{ display: "flex", justifyContent: "space-between" }}>
                <button className="input-group-text btn btn-primary px-4" onClick={this.handleDecrement}>
                  -
                </button>
                <h2>{this.state.quantity}</h2>
                <button className="input-group-text btn btn-primary px-4" onClick={this.handleIncrement}>
                  +
                </button>
              </div>
              <span className="mt-3 d-inline-block">Total Price</span>
              <h4>{numberFormat(this.state.total)}</h4>
              <button className="btn btn-primary button">Add to Cart</button>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

const ProductDetailParams = () => {
  const params = useParams();
  const navigate = useNavigate();
  const idProduct = params.id;
  return <ProductDetail idProduct={idProduct} navigate={navigate} />;
};

export default ProductDetailParams;
