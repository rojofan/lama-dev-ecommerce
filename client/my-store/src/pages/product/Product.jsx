import "./Product.scss";
import {useState} from "react";
import {AddShoppingCart, Balance, FavoriteBorder} from "@mui/icons-material";
import {useParams} from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import {useDispatch} from "react-redux";
import {addToCart} from "../../redux/cartReducer";

const Product = () => {

    const id = useParams().id
    const uploadUrl = process.env.REACT_APP_API_UPLOAD_URL;
    const [selectedImage, setSelectedImage] = useState("img");
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch()

    const {data, loading, error} = useFetch(`/products/${id}?populate=*`)

    return (
        <div className="product">
            {loading ? ("Loading"
            ) : (
                <>
                    <div className="left">
                        <div className="images">
                            <img src={uploadUrl + data?.attributes?.img?.data?.attributes?.url} alt=""
                                 onClick={e => setSelectedImage("img")}/>
                            <img src={uploadUrl + data?.attributes?.img2?.data?.attributes?.url} alt=""
                                 onClick={e => setSelectedImage("img2")}/>
                        </div>
                        <div className="mainImg">
                            <img src={data.attributes? uploadUrl + data?.attributes[selectedImage]?.data?.attributes?.url : "loading"} alt=""/>
                        </div>
                    </div>
                    <div className="right">
                        <h1>{data?.attributes?.title}</h1>
                        <span className="price">{data?.attributes?.price}</span>
                        <p>{data?.attributes?.desc}</p>
                        <div className="quantity">
                            <button
                                onClick={() => setQuantity(prevState => prevState === 1 ? 1 : prevState - 1)}>-
                            </button>
                            <span>{quantity}</span>
                            <button onClick={() => setQuantity(prevState => prevState + 1)}>+</button>
                        </div>
                        <button className="add" onClick={() => dispatch(addToCart({
                            id: data.id,
                            title: data.attributes.title,
                            desc: data.attributes.desc,
                            price: data.attributes.price,
                            img: uploadUrl + data?.attributes?.img?.data?.attributes?.url,
                            quantity
                        }))}>
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
                            <span>Product Type: T-Shirt</span>
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

                </>)

            }
        </div>
    )
}
export default Product