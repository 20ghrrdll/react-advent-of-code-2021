/*22 13 17 11  0
 8  2 23  4 24
21  9 14 16  7
 6 10  3 18  5
 1 12 20 15 19

 3 15  0  2 22
 9 18 13 17  5
19  8  7 25 23
20 11 10 24  4
14 21 16 12  6

14 21 17 24  4
10 16 15  9 19
18  8 23 26 20
22 11 13  6  5
 2  0 12  3  7*/

export const correctBingoDrawNums = [
  "7",
  "4",
  "9",
  "5",
  "11",
  "17",
  "23",
  "2",
  "0",
  "14",
  "21",
  "24",
  "10",
  "16",
  "13",
  "6",
  "15",
  "25",
  "12",
  "22",
  "18",
  "20",
  "8",
  "19",
  "3",
  "26",
  "1",
];

export const correctBingoBoard1Nums = new Map([
  ["22", { row: 0, col: 0 }],
  ["13", { row: 0, col: 1 }],
  ["17", { row: 0, col: 2 }],
  ["11", { row: 0, col: 3 }],
  ["0", { row: 0, col: 4 }],
  ["8", { row: 1, col: 0 }],
  ["2", { row: 1, col: 1 }],
  ["23", { row: 1, col: 2 }],
  ["4", { row: 1, col: 3 }],
  ["24", { row: 1, col: 4 }],
  ["21", { row: 2, col: 0 }],
  ["9", { row: 2, col: 1 }],
  ["14", { row: 2, col: 2 }],
  ["16", { row: 2, col: 3 }],
  ["7", { row: 2, col: 4 }],
  ["6", { row: 3, col: 0 }],
  ["10", { row: 3, col: 1 }],
  ["3", { row: 3, col: 2 }],
  ["18", { row: 3, col: 3 }],
  ["5", { row: 3, col: 4 }],
  ["1", { row: 4, col: 0 }],
  ["12", { row: 4, col: 1 }],
  ["20", { row: 4, col: 2 }],
  ["15", { row: 4, col: 3 }],
  ["19", { row: 4, col: 4 }],
]);

export const correctlyParsedBingoBoard1 = [
  [
    { num: "22", marked: false },
    { num: "13", marked: false },
    { num: "17", marked: false },
    { num: "11", marked: false },
    { num: "0", marked: false },
  ],
  [
    { num: "8", marked: false },
    { num: "2", marked: false },
    { num: "23", marked: false },
    { num: "4", marked: false },
    { num: "24", marked: false },
  ],
  [
    { num: "21", marked: false },
    { num: "9", marked: false },
    { num: "14", marked: false },
    { num: "16", marked: false },
    { num: "7", marked: false },
  ],
  [
    { num: "6", marked: false },
    { num: "10", marked: false },
    { num: "3", marked: false },
    { num: "18", marked: false },
    { num: "5", marked: false },
  ],
  [
    { num: "1", marked: false },
    { num: "12", marked: false },
    { num: "20", marked: false },
    { num: "15", marked: false },
    { num: "19", marked: false },
  ],
];

export const horizontalBingo = [
  [
    { num: "22", marked: false },
    { num: "13", marked: false },
    { num: "17", marked: false },
    { num: "11", marked: false },
    { num: "0", marked: false },
  ],
  [
    { num: "8", marked: true },
    { num: "2", marked: true },
    { num: "23", marked: true },
    { num: "4", marked: true },
    { num: "24", marked: true },
  ],
  [
    { num: "21", marked: false },
    { num: "9", marked: false },
    { num: "14", marked: false },
    { num: "16", marked: false },
    { num: "7", marked: false },
  ],
  [
    { num: "6", marked: false },
    { num: "10", marked: false },
    { num: "3", marked: false },
    { num: "18", marked: false },
    { num: "5", marked: false },
  ],
  [
    { num: "1", marked: false },
    { num: "12", marked: false },
    { num: "20", marked: false },
    { num: "15", marked: false },
    { num: "19", marked: false },
  ],
];

export const verticalBingo = [
  [
    { num: "22", marked: false },
    { num: "13", marked: true },
    { num: "17", marked: false },
    { num: "11", marked: true },
    { num: "0", marked: false },
  ],
  [
    { num: "8", marked: false },
    { num: "2", marked: false },
    { num: "23", marked: false },
    { num: "4", marked: true },
    { num: "24", marked: true },
  ],
  [
    { num: "21", marked: true },
    { num: "9", marked: true },
    { num: "14", marked: false },
    { num: "16", marked: true },
    { num: "7", marked: false },
  ],
  [
    { num: "6", marked: false },
    { num: "10", marked: true },
    { num: "3", marked: false },
    { num: "18", marked: true },
    { num: "5", marked: false },
  ],
  [
    { num: "1", marked: false },
    { num: "12", marked: false },
    { num: "20", marked: true },
    { num: "15", marked: true },
    { num: "19", marked: false },
  ],
];

export const noBingo = [
  [
    { num: "22", marked: true },
    { num: "13", marked: true },
    { num: "17", marked: false },
    { num: "11", marked: false },
    { num: "0", marked: false },
  ],
  [
    { num: "8", marked: true },
    { num: "2", marked: false },
    { num: "23", marked: false },
    { num: "4", marked: true },
    { num: "24", marked: false },
  ],
  [
    { num: "21", marked: true },
    { num: "9", marked: false },
    { num: "14", marked: false },
    { num: "16", marked: false },
    { num: "7", marked: false },
  ],
  [
    { num: "6", marked: false },
    { num: "10", marked: false },
    { num: "3", marked: false },
    { num: "18", marked: false },
    { num: "5", marked: true },
  ],
  [
    { num: "1", marked: true },
    { num: "12", marked: false },
    { num: "20", marked: false },
    { num: "15", marked: false },
    { num: "19", marked: false },
  ],
];
