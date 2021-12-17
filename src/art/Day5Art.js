import React from "react";
import Nav from "../components/Nav";
import day5Soln from "../challenges/day5";

const Day5Art = () => {
  const { part1 } = day5Soln();
  return (
    <>
      <Nav />
      <div>{`part1: ${part1}, part2: ??`}</div>
    </>
  );
};

export default Day5Art;
