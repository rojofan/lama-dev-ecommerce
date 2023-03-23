import "./Product.scss";
import {useState} from "react";
import {AddShoppingCart, Balance, FavoriteBorder, FavoriteBorderOutlined} from "@mui/icons-material";
import {Link} from "react-router-dom";

const Product = () => {

    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);



    const images = [
        "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600"
    ]

    return (
        <div className="product">
            <div className="left">
                <div className="images">
                    <img src={images[0]} alt=""  onClick={e => setSelectedImage(0)}/>
                    <img src={images[1]} alt="" onClick={e => setSelectedImage(1)}/>
                </div>
                <div className="mainImg">
                    <img src={images[selectedImage]} alt=""/>
                </div>
            </div>
            <div className="right">
                <h1>Title</h1>
                <span className="price">$200</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur deleniti dolores eos iusto maiores nam non porro saepe vel voluptate. Aliquid, cum, minus? Dicta eum nihil numquam optio quod unde!</p>
                <div className="quantity">
                    <button onClick={() => setQuantity(prevState => prevState === 1 ? 1 :  prevState - 1)}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => setQuantity(prevState => prevState + 1)}>+</button>
                </div>
                <button className="add">
                    <AddShoppingCart/> ADD TO CART
                </button>
                <div className="links">
                    <div className="item">
                        <FavoriteBorder/> ADD TO WISH LIST
                    </div>
                    <div className="item">
                        <Balance/> ADD TO COMPARE
                    </div>
                </div>
                <div className="info">
                    <span>Vendor: Polo</span>
                    <span>Product Typw: T-Shirt</span>
                    <span>Tag: T-Shirt, Women, Top</span>
                </div>
                <hr/>
                <div className="info">
                    <span>DESCRIPTION</span>
                    <hr/>
                    <span>ADDITIONAL INFORMATION</span>
                    <hr/>
                    <span>FAQ</span>
                </div>
            </div>
        </div>
    )
}
export default Product