import Slider from "../../components/slider/Slider";
import FeaturedProducts from "../../components/featuredProducts/FeaturedProducts";
import "./Home.scss";
import Categories from "../../components/categories/Categories";
import Contact from "../../components/contact/Contact";

const Home = () => {
    return (
        <div className="home">
            <Slider/>
            <FeaturedProducts productType="Featured"/>
            <Categories/>
            <FeaturedProducts productType="Trending"/>
            <Contact/>
        </div>
    )
}

export default Home