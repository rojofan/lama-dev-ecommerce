import {
    FavoriteBorderOutlined,
    KeyboardArrowDown,
    PersonOutlineOutlined,
    Search,
    ShoppingCartOutlined
} from "@mui/icons-material";
import {Link} from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <div className="item">
                        <img src="/img/en.png" alt="english"/>
                        <KeyboardArrowDown/>
                    </div>
                    <div className="item">
                        <span>USD</span>
                        <KeyboardArrowDown/>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/1">Children</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/2">Men</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/3">Women</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/4">Accessories</Link>
                    </div>
                </div>
                <div className="center">
                    <Link className="link" to="/">LAMASTORE</Link>
                </div>
                <div className="right">
                    <div className="item">
                        <Link className="link" to="/">Homepage</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/">About</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/">Contact</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/">Stores</Link>
                    </div>
                    <div className="icons">
                        <Search/>
                        <PersonOutlineOutlined/>
                        <FavoriteBorderOutlined/>
                        <div className="cartIcons">
                            <ShoppingCartOutlined/>
                            <span>0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar