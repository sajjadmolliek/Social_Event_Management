import { useLoaderData } from "react-router-dom";
import CarosoleBanner from "./CarosoleBanner";
import Services from "./Services";
import Gallery from "./Gallery";
import About from "./About";


const Home = () => {

    const data = useLoaderData();

    return (
        <div>
            <CarosoleBanner></CarosoleBanner>
            <Services data={data}></Services>
            <Gallery data={data}></Gallery>
            <About></About>
        </div>
    );
};

export default Home;