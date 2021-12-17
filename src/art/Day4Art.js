import React from "react";
import Nav from "../components/Nav";
import day4Soln from "../challenges/day4";

const Day4Art = () => {
  const { part1, part2 } = day4Soln();
  return (
    <>
      <Nav />
      <div>{`part1: ${part1}, part2: ${part2}`}</div>
    </>
  );
};

export default Day4Art;
