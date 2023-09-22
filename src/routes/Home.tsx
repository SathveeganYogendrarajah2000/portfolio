import me from "../assets/images/Me01bgRemoved.png";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="homeContainer_hero">
        <div className="homeContainer_hero_details"></div>
        <div className="homeContainer_hero_pic">
          <img src={me} alt="Sathveegan" />
        </div>
      </div>
    </div>
  );
};

export default Home;
