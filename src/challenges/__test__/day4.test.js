import {
  parseBingoData,
  getIsBingo,
  calculateBoardScore,
  getWinningBoardScore,
} from "../day4";

import {
  correctBingoBoard1Nums,
  correctBingoDrawNums,
  correctlyParsedBingoBoard1,
  verticalBingo,
  horizontalBingo,
  noBingo,
} from "./day4TestData";

import { tinyData } from "../data/day4";

describe("day4 part 1", () => {
  test("parses bingo data correctly", () => {
    const { bingoDrawNums, bingoBoards } = parseBingoData(tinyData);
    const firstBingoBoard = bingoBoards[0];

    expect(bingoDrawNums).toEqual(correctBingoDrawNums);
    expect(bingoBoards).toHaveLength(3);
    expect(firstBingoBoard.bingoBoard).toEqual(correctlyParsedBingoBoard1);
    expect(firstBingoBoard.boardNumbers).toEqual(correctBingoBoard1Nums);
  });

  test("accepts a correct bingo", () => {
    const isVerticalBingo = getIsBingo(verticalBingo);
    const isHorizontalBingo = getIsBingo(horizontalBingo);

    expect(isVerticalBingo).toBeTruthy();
    expect(isHorizontalBingo).toBeTruthy();
  });

  test("rejects an incorrect bingo", () => {
    const isBingo = getIsBingo(noBingo);

    expect(isBingo).toBeFalsy();
  });

  test("calculate correct winning score", () => {
    const winningScore = calculateBoardScore(verticalBingo, 11);

    expect(winningScore).toBe(1529);
  });

  test("identifies and calculates correct winning board score", () => {
    const parsedTinyData = parseBingoData(tinyData);
    const correctWinningScore = getWinningBoardScore(parsedTinyData);

    expect(correctWinningScore).toBe(4512);
  });
});
