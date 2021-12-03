import React from 'react';
import Nav from '../components/Nav';
import day2Soln from '../challenges/day2';

const Day2Art = () => {
  const {part1, part2} = day2Soln();
  return (
    <>
      <Nav/>
      <div>{`part1: ${part1}, part2: ${part2}`}</div>
    </>
  );
}

export default Day2Art;