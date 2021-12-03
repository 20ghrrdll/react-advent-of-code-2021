import React from 'react';
import Nav from '../components/Nav';
import day1Soln from '../challenges/day1';

const Day1Art = () => {
  const {part1, part2} = day1Soln();
  return (
    <>
      <Nav/>
      <div>{`part1: ${part1}, part2: ${part2}`}</div>
    </>
  );
}

export default Day1Art;