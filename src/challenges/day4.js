import data, { tinyData } from "./data/day4";

const parseBingoData = (rawData) => {
  const bingoDataChunks = rawData.split("\n\n");
  const bingoDrawNums = bingoDataChunks[0];
  const bingoBoards = [];

  for (
    let bingoDataIndex = 1;
    bingoDataIndex < bingoDataChunks.length;
    bingoDataIndex++
  ) {
    const bingoBoardData = bingoDataChunks[bingoDataIndex];
    const bingoBoard = [];
    const boardNumbers = new Map();
    const rowData = bingoBoardData.split("\n");
    rowData.forEach((rowDatum, rowIndex) => {
      const row = [];
      const gridNums = rowDatum.split(" ");
      gridNums.forEach((num, numIndex) => {
        if (num) {
          // because single digit numbers have an extra space on the front which adds empty string entries :/
          row.push({ num, marked: false });
          boardNumbers[num] = { row: rowIndex, col: numIndex };
        }
      });

      if (row.length !== 5) {
        console.error(`oops! the row ${row}, is not of length 5`);
      }

      bingoBoard.push(row);
    });

    if (bingoBoard.length !== 5) {
      console.error(
        `oops, the bingo board ${bingoBoard} does not have 5 rows!`
      );
    }

    bingoBoards.push({ bingoBoard, boardNumbers });
  }

  return {
    bingoDrawNums,
    bingoBoards,
  };
};

const getWinningBoardScore = (bingoData) => {
  // mark first 4 nums
  // from 5th mark on
  //mark next num
  // for each board that contains next num,
  // check if that board has bingo
  //given first board with bingo, calculate score
};

const getSoln = () => {
  const bingoData = parseBingoData(tinyData);
  console.log(bingoData);
  return { part1: "unsolved" };
};

export default getSoln;
