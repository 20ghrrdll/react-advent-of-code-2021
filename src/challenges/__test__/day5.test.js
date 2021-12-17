import { tinyData } from '../data/day5';
import {
  parseLines,
  getOverlappingPoints,
  getHorizVertOverlaps,
} from '../day5';

const expectedParsedLines = [
  {start: {x: 0,y: 9}, end: {x: 5,y: 9}},
  {start: {x: 8,y: 0}, end: {x: 0,y: 8}},
  {start: {x: 9,y: 4}, end: {x: 3,y: 4}},
  {start: {x: 2,y: 2}, end: {x: 2,y: 1}},
  {start: {x: 7,y: 0}, end: {x: 7,y: 4}},
  {start: {x: 6,y: 4}, end: {x: 2,y: 0}},
  {start: {x: 0,y: 9}, end: {x: 2,y: 9}},
  {start: {x: 3,y: 4}, end: {x: 1,y: 4}},
  {start: {x: 0,y: 0}, end: {x: 8,y: 8}},
  {start: {x: 5,y: 5}, end: {x: 8,y: 2}},
];

const expectedOverlapsLine0 = {
  '0,9': 1,
  '1,9': 1,
  '2,9': 1,
  '3,9': 1,
  '4,9': 1,
  '5,9': 1,
}

const expectedOverlapsLine4 = {
  '7,0': 1,
  '7,1': 1,
  '7,2': 1,
  '7,3': 1,
  '7,4': 1,
}

const expectedOverlapsLines0n6 = {
  '0,9': 2,
  '1,9': 2,
  '2,9': 2,
  '3,9': 1,
  '4,9': 1,
  '5,9': 1,
}

describe('part1', () => {
  test('parses lines correctly', () => {
    const parseLinesResult = parseLines(tinyData);

    expect(parseLinesResult).toEqual(expectedParsedLines);
  });

  test('identifies single horizontal line overlap correctly', () => {
    const horizontalOverlapStart = {};
    const horizontalOverlapResult = getOverlappingPoints(expectedParsedLines[0], horizontalOverlapStart);
    
    expect(horizontalOverlapResult).toEqual(expectedOverlapsLine0);
  });

  test('identifies single vertical line overlap correctly', () => {
    const verticalOverlapStart = {};
    const verticalOverlapResult = getOverlappingPoints(expectedParsedLines[4], verticalOverlapStart);
    
    expect(verticalOverlapResult).toEqual(expectedOverlapsLine4);
  });

  test('handles multipleLineOverlaps', () => {
    const horizontalOverlapStart = {};
    const horizontalOverlapFirstResult = getOverlappingPoints(expectedParsedLines[0], horizontalOverlapStart);
    const horizontalOverlapSecondResult = getOverlappingPoints(expectedParsedLines[6], horizontalOverlapFirstResult);

    expect (horizontalOverlapSecondResult).toEqual(expectedOverlapsLines0n6);
  });

  test ('calculates correct numOverlapsAtLeastTwice', () => {
    const numTwiceOverlaps = getHorizVertOverlaps(expectedParsedLines);

    expect(numTwiceOverlaps).toBe(5)
  });
})