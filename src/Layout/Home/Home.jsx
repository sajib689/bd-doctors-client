import Navbar from "../../Shared/Navbar/Navbar";
import Banner from "./Banner/Banner";
import Category from "./Catgory/Category";
import Details from "./Details/Details";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Details></Details>
            <Category></Category>
        </div>
    );
};

export default Home;