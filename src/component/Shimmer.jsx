import React from "react";

function Shimmer() {
  const arr = new Array(5).fill(0);
  return (
    <div className="w-full flex items-center justify-around">
      {arr.map((el, index) => (
        <Card key={index} />
      ))}
    </div>
  );
}

function Card() {
  return (
    <div className="w-[10rem] h-[18rem]  ">
      <div className="bg-white/10 w-full h-full"></div>
      {/* <h2>{name}</h2> */}
    </div>
  );
}

export default Shimmer;
