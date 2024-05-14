import { Helmet } from "react-helmet";
import Banner from "../../Components/Banner";
import FetureDestination from "../../Components/FetureDestination";
import Newslatter from "../../Components/Newslatter";
import RecentBlog from "../../Components/RecentBlog";
import TravelEssential from "../../Components/TravelEssential";

 

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Backpack Traveler</title>
      </Helmet>
     <Banner></Banner>
     <RecentBlog></RecentBlog>
     <Newslatter></Newslatter>
     <FetureDestination></FetureDestination>
     <TravelEssential></TravelEssential>
    </div>
  );
};

export default Home;
