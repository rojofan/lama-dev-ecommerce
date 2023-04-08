import './Card.scss'
import {Link} from "react-router-dom";

const Card = ({item}) => {

    const uploadUrl = process.env.REACT_APP_API_UPLOAD_URL;

    return (
        <Link className="link" to={`/product/${item.id}`}>
            <div className="card">
                <div className="image">
                    {item.attributes?.isNew &&
                        <span>New Season</span>}
                    <img src={uploadUrl + item?.attributes?.img.data.attributes.url} alt="" className="mainImg"/>
                    <img src={uploadUrl + item?.attributes?.img2?.data?.attributes?.url} alt="" className="secondImg"/>
                </div>
                <h2>{item.attributes.title}</h2>
                <div className="prices">
                    <h3>${item.attributes?.oldPrice ? item.attributes?.oldPrice : item.attributes?.price + 12}</h3>
                    <h3>${item.attributes?.price}</h3>
                </div>
            </div>
        </Link>
    )
}

export default Card