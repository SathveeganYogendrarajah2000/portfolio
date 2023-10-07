import me from "../assets/images/Me01bgRemoved.png";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="homeContainer_hero">
        <div className="homeContainer_hero_details">
          <h1 className="homeContainer_hero_details_name">
            Sathveegan Yogendrarajah
          </h1>
          <h2 className="homeContainer_hero_details_degree">
            Bsc (Hons) in Engineering specialized in Computer Science and
            Engineering
          </h2>
          <div className="homeContainer_hero_details_techStack">
            TECH STACK <span className="homeContainer_hero_details_techStack_techs">JAVA</span>
          </div>
        </div>
        <div className="homeContainer_hero_pic">
          <img src={me} alt="Sathveegan" />
        </div>
      </div>
    </div>
  );
};

export default Home;
