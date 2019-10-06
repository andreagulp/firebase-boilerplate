import React from "react";

function News() {
  return (
    <div>
      <h4>Hello News</h4>
      <img
        alt="news"
        src={process.env.PUBLIC_URL + "/images/avatars-animal/Ant.svg"}
      />
    </div>
  );
}

export default News;
