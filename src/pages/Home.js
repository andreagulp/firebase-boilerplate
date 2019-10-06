import React from "react";

function Home() {
  return (
    <div>
      <h4>Hello Home</h4>
      <img
        alt="home"
        src={process.env.PUBLIC_URL + "/images/avatars-animal/Sheep.svg"}
      />
    </div>
  );
}

export default Home;
