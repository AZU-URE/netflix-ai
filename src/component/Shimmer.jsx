import React from "react";

function Shimmer() {
  const arr = new Array(4).fill(0);
  return (
    <div>
      {arr.map(() => (
        <Card />
      ))}
    </div>
  );
}

function Card() {
  return (
    <div className="w-[10rem] mr-[2rem] ">
      <div className="bg-white/30 w-full"></div>
      {/* <h2>{name}</h2> */}
    </div>
  );
}

export default Shimmer;
