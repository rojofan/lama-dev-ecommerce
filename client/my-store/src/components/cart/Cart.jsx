import './Cart.scss';
import {DeleteOutlined} from "@mui/icons-material";

const Cart = () => {

    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "long sleeves graphic t-shirt",
            desc: "DESCRIPTION part long sleeves graphic t-shirt",
            isNew: true,
            oldPrice: 19,
            price: 12
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "long sleeves graphic t-shirt",
            desc: "DESCRIPTION part long sleeves graphic t-shirt",
            isNew: true,
            oldPrice: 25,
            price: 22
        }
    ]

    return (
        <div className="cart">
            <h1>Products in your cart</h1>
            {data?.map(item => (
                <div className="item" key={item.id}>
                    <img src={item.img} alt=""/>
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item?.desc.substring(0, 100)}</p>
                        <div className="price">1 x {item.price}</div>
                    </div>
                    <DeleteOutlined className="delete"/>
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>$150</span>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            <span className="reset">Reset cart</span>
        </div>
    )
}

export default Cart