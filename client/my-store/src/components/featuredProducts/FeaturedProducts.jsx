import "./FeaturedProducts.scss";
import Card from "../card/Card";

const FeaturedProducts = ({productType}) => {
    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "long sleeves graphic t-shirt",
            isNew: true,
            oldPrice: 19,
            price: 12
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "long sleeves graphic t-shirt",
            isNew: true,
            oldPrice: 25,
            price: 22
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "long sleeves graphic t-shirt",
            isNew: false,
            oldPrice: 55,
            price: 35
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "long sleeves graphic t-shirt",
            isNew: false,
            oldPrice: 63,
            price: 52
        }
    ];


    return (
        <div className="featuredProducts">
            <div className="top">
                <h1> {productType} products</h1>
                <p>some random text here that needs to be quite extense so I'm not sure what to write, but something
                    will
                    come up to my mind, hopefully by now it's around the size that would work fine for the demo if not i
                    can
                    continue adding a few more words, there is no harm in it..</p>
            </div>
            <div className="bottom">
                {data.map(item => (
                    <Card item={item} key={item.id}/>
                ))}
            </div>
        </div>
    )
}

export default FeaturedProducts