import "./info.css";
import SakuraPetals from "../../containers/Background/SakuraPetals";
import petalImage from "../../assets/petal.png";

const LandingPageInfo = [
  {
    name: "I'am David",
    title: "Web Developer",
    description:
      "As a passionate front-end developer, I specialize in creating stunning, responsive websites that provide an exceptional user experience. With a keen eye for design and a strong foundation in modern web technologies, I bring your ideas to life with precision and creativity.",
  },
];

const Info = () => (
  <section className="main-section test-card">
    {/* <SakuraPetals petalImage={petalImage} petalCount={100} /> */}
    {LandingPageInfo.map(({ name, title, description }, index) => (
      <div key={index} className="content">
        <h1>{name}</h1>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    ))}
  </section>
);

export default Info;
