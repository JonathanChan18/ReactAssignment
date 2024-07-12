import AboutUs from "../content/AboutUs";
import Articles from "../content/Articles";
import Testimonials from "../content/Testimonials";


const Home = () => {
  return (
    <>
      <div className="hero-banner">
        <div className="hero-text">
          <h1>Welcome to TechWave Innovations</h1>
          <p>Pioneering Tomorrow's Technology Today!</p>
        </div>
      </div>
      <div className="content">
        <Articles/>
        <AboutUs/>
        <Testimonials/>
      </div>
      <footer>
        <p>&copy; TechWave Innovations Co.Ltd</p>
      </footer>
    </>
  );
};

export default Home;
