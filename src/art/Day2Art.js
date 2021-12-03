import React from 'react';
import Nav from '../components/Nav';
import day1Soln from '../challenges/day1';

const Day2Art = () => {
  return (
    <>
      <Nav/>
      <div>{day1Soln()}</div>
    </>
  );
}

export default Day2Art;