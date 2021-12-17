import data from './data/day5';


const parsePointChunk = (pointChunk) => {
  const splitPoint = pointChunk.split(',');
  return {x: parseInt(splitPoint[0]), y: parseInt(splitPoint[1])}; 
}

export const parseLines = (rawData) => {
  const lineChunks = rawData.split('\n');
  const lines = []

  for (const lineChunk of lineChunks) {
    const parsedLine = lineChunk.split(' -> ');
    const start = parsePointChunk(parsedLine[0]);
    const end = parsePointChunk(parsedLine[1]);
    lines.push({start, end})
  }
  return lines;
}

export const getOverlappingPoints = (line, overlappingPoints) => {
  const { start, end } = line;

  if (start.x === end.x) {
    let init, finish;
    if (start.y < end.y) {
      init = start.y;
      finish = end.y;
    } else {
      init = end.y;
      finish = start.y;
    }

    for (let yVal = init; yVal <= finish; yVal++) {
      const pointKey = `${start.x},${yVal}`;
      const existingOverlap = overlappingPoints[pointKey];

      if (existingOverlap) {
        overlappingPoints[pointKey] = existingOverlap + 1;
      } else {
        overlappingPoints[pointKey] = 1;
      }
    }


  } else if (start.y === end.y) {
    let init, finish;
    if (start.x < end.x) {
      init = start.x;
      finish = end.x;
    } else {
      init = end.x;
      finish = start.x;
    }

    for (let xVal = init; xVal <= finish; xVal++) {
      const pointKey = `${xVal},${start.y}`;
      const existingOverlap = overlappingPoints[pointKey];

      if (typeof existingOverlap === 'number') {
        overlappingPoints[pointKey] = existingOverlap + 1;
      } else {
        overlappingPoints[pointKey] = 1;
      }
    }
  }

  return overlappingPoints;
}

export const getHorizVertOverlaps = (lines) => {
  let overlaps = {};

  for(const line of lines) {
    overlaps = getOverlappingPoints(line, overlaps);
  }

  let numOverlapsAtLeastTwice = 0;

  for (const overlapCount of Object.values(overlaps)) {
    if (overlapCount >= 2) {
      numOverlapsAtLeastTwice += 1;
    }
  }

  console.log({overlaps})

  return numOverlapsAtLeastTwice;
}



const getSoln = () => {
  const lineData = parseLines(data);

  return { part1: getHorizVertOverlaps(lineData) };
};

export default getSoln;