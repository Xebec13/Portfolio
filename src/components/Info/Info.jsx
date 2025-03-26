import "./info.css";

const LandingPageInfo = [
  {
    name: "I'am David",
    title: "Web Developer",
  },
];

const Info = () => (
  <section>
    {LandingPageInfo.map(({ name, title }, index) => (
      <div key={index} className="content">
        <p>{name}</p>
        <p>{title}</p>
      </div>
    ))}
  </section>
);

export default Info;
