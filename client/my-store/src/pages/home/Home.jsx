import Slider from "../../components/slider/Slider";
import FeaturedProducts from "../../components/featuredProducts/FeaturedProducts";
import "./Home.scss";

const Home = () => {
    return (
        <div className="home">
            <Slider/>
            <FeaturedProducts productType="Featured"/>
            <FeaturedProducts productType="Trending"/>
        </div>
    )
}

export default Home