import "./FeaturedProducts.scss";
import Card from "../card/Card";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({productType}) => {

    const {data, loading, error} = useFetch(`/products?populate=*&[filters][type][$eq]=${productType}`);

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
                {error
                    ? "something went wrong!"
                    : loading
                        ? "loading"
                        : data.map(item => (
                            <Card item={item} key={item.id}/>
                        ))}
            </div>
        </div>
    )
}

export default FeaturedProducts