import React from "react";
import Meta from "./utils/Meta";

const Home = () => {
  //event({ action: "click", params: { button: "Request Quote" } }); // Used to trigger a Google Analytics event
  return (
    <>
      <Meta
        Description="Description"
        Title="Title"
        Keywords="keywords"
        Image="Image url"
      />
      <div className="center">Home Page</div>
    </>
  );
};

export default Home;
