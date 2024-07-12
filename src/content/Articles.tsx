import { useState } from "react";

const Articles = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const articles = [
    {
      title: "Revolutionizing AI: The Next Big Leap",
      content: "Discover how TechWave Innovations is transforming the AI landscape with cutting-edge research and development. Our AI systems are designed to learn and adapt autonomously, offering solutions that can revolutionize industries such as healthcare, finance, and logistics. We focus on creating intelligent algorithms that improve efficiency, reduce costs, and provide deeper insights."
    },
    {
      title: "The Future of Quantum Computing",
      content: "Quantum computing is set to redefine problem-solving. Learn about our latest breakthroughs in developing quantum algorithms and architectures that promise unprecedented computational power. Our research aims to tackle complex problems in fields like cryptography, material science, and artificial intelligence, paving the way for a future where quantum computers outperform their classical counterparts."
    },
    {
      title: "Sustainable Tech Solutions",
      content: "Our commitment to sustainability drives our innovation. Explore our eco-friendly tech initiatives that focus on reducing carbon footprints and promoting green technology. From energy-efficient data centers to recyclable electronic components, TechWave Innovations is dedicated to creating a more sustainable future."
    }
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % articles.length);
  };

  const handlePrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + articles.length) % articles.length);
  };

  return (
    <>
        <section>
          <h2 className="ArticleHeader">Featured Articles</h2>
            <article className="article-container">
              <h3>{articles[activeIndex].title}</h3>
              <p>{articles[activeIndex].content}</p>
            </article>
        <div className="carousel-control">
          <a className="prev" onClick={handlePrevious}>&#10094;</a>
          <a className="next" onClick={handleNext}>&#10095;</a>
        </div>
      
        </section>
    </>
  );
};

export default Articles;

