import "./Categories.scss";
import {Link} from "react-router-dom";

const Categories = () => {
    return (
        <div className="categories">
            <div className="col">
                <div className="row">
                    <img src="https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg" alt=""/>
                    <button>
                        <Link className="link" to="products/1">
                            Sale
                        </Link>
                    </button>
                </div>
                <div className="row">
                    <img
                        src="https://images.pexels.com/photos/852860/pexels-photo-852860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""/>
                    <button>
                        <Link className="link" to="products/1">
                            Women
                        </Link>
                    </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <img
                        src="https://images.pexels.com/photos/15673042/pexels-photo-15673042.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt=""/>
                    <button>
                        <Link className="link" to="products/1">
                            New Season
                        </Link>
                    </button>
                </div>
            </div>
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <img
                                src="https://images.pexels.com/photos/2896840/pexels-photo-2896840.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt=""/>
                            <button>
                                <Link className="link" to="products/1">
                                    Men
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <img
                                src="https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt=""/>
                            <button>
                                <Link className="link" to="products/1">
                                    Accessories
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <img
                        src="https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt=""/>
                    <button>
                        <Link className="link" to="products/1">
                            Children
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Categories