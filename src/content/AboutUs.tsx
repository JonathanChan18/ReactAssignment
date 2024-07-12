import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
        <>
<section>   
<h2>About TechWave Innovations</h2>
<article className="article-container">
<p>We are dedicated to creating innovative tech solutions that shape the future. Learn more about our mission and vision, and meet the team of experts behind our groundbreaking projects.</p>
<Link to="/about" className="anchor">Learn More</Link>
</article>
</section>
</>
  );
};

export default AboutUs;
