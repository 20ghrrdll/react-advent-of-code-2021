import data from "./data/day4";

export const parseBingoData = (rawData) => {
  const bingoDataChunks = rawData.split("\n\n");
  const bingoDrawNums = bingoDataChunks[0].split(",");
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
      gridNums.forEach((num) => {
        if (num) {
          // because single digit numbers have an extra space on the front which adds empty string entries :/
          boardNumbers.set(num, { row: parseInt(rowIndex), col: row.length });
          row.push({ num, marked: false });
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

export const getIsBingo = (bingoBoard) => {
  let isBingo = false;

  //check for horizontal bingo
  for (const row of bingoBoard) {
    let colIndex = 0;
    let isRowBingo = true;
    while (colIndex < row.length && isRowBingo) {
      isRowBingo = isRowBingo && row[colIndex].marked;
      colIndex += 1;
    }
    if (isRowBingo) {
      isBingo = true;
      break;
    }
  }

  //check for vertical bingo
  if (!isBingo) {
    for (let col = 0; col < bingoBoard[0].length; col++) {
      let rowIndex = 0;
      let isColBingo = true;
      while (rowIndex < bingoBoard.length && isColBingo) {
        isColBingo = bingoBoard[rowIndex][col].marked;
        rowIndex += 1;
      }

      if (isColBingo) {
        isBingo = true;
        break;
      }
    }
  }

  return isBingo;
};

export const calculateBoardScore = (bingoBoard, winningNum) => {
  let unmarkedNumSum = 0;
  for (const row of bingoBoard) {
    for (const boardNum of row) {
      const { marked, num } = boardNum;
      if (!marked) {
        unmarkedNumSum += parseInt(num);
      }
    }
  }

  return unmarkedNumSum * parseInt(winningNum);
};

export const getWinningBoardScore = ({ bingoDrawNums, bingoBoards }) => {
  // mark first 4 nums

  for (
    let initialDrawNumIndex = 0;
    initialDrawNumIndex < 4;
    initialDrawNumIndex++
  ) {
    const initialDrawNum = bingoDrawNums[initialDrawNumIndex];
    for (const boardData of bingoBoards) {
      const { bingoBoard, boardNumbers } = boardData;
      if (boardNumbers.has(initialDrawNum)) {
        const { row, col } = boardNumbers.get(initialDrawNum);
        const currNumData = bingoBoard[row][col];
        bingoBoard[row][col] = { ...currNumData, marked: true };
      }
    }
  }

  let drawNumIndex = 4;
  let winningBoard = null;
  let currentDrawNum;
  // from 5th mark on
  while (!winningBoard && drawNumIndex < bingoDrawNums.length) {
    //mark next num
    currentDrawNum = bingoDrawNums[drawNumIndex];
    for (const boardData of bingoBoards) {
      const { bingoBoard, boardNumbers } = boardData;
      if (boardNumbers.has(currentDrawNum)) {
        const { row, col } = boardNumbers.get(currentDrawNum);
        const currNumData = bingoBoard[row][col];
        bingoBoard[row][col] = { ...currNumData, marked: true };
        if (getIsBingo(bingoBoard)) {
          winningBoard = bingoBoard;
          break;
        }
      }
    }
    drawNumIndex += 1;
  }

  if (winningBoard) {
    return calculateBoardScore(winningBoard, currentDrawNum);
  } else {
    console.error("oh no! none of the boards seem to have gotten bingo!");
  }
};

const getSoln = () => {
  const bingoData = parseBingoData(data);

  return { part1: getWinningBoardScore(bingoData) };
};

export default getSoln;
