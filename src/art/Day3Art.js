import React from "react";
import Nav from "../components/Nav";
import day3Soln from "../challenges/day3";

const Day3Art = () => {
  const { part1, part2 } = day3Soln();
  return (
    <>
      <Nav />
      <div>{`part1: ${part1}, part2: ${part2}`}</div>
    </>
  );
};

export default Day3Art;
