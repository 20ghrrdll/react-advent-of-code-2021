import data, { exampleData } from "./data/day3";
import getDataArray from "./utils/getDataArray";

const getPowerConsumption = (diagnostics) => {
  const numPositions = diagnostics[0].length;
  const positionCount = new Array(numPositions);
  positionCount.fill(0);
  let gammaRate = "";
  let epsilonRate = "";

  for (const diagnostic of diagnostics) {
    for (let index = 0; index < diagnostic.length; index++) {
      const position = diagnostic[index];
      if (position === "1") {
        positionCount[index] += 1;
      } else if (position === "0") {
        positionCount[index] -= 1;
      } else {
        console.error(
          `oops, position is ${position} and idk what to do with that`
        );
      }
    }
  }

  positionCount.forEach((count, index) => {
    if (count > 0) {
      gammaRate = gammaRate + "1";
      epsilonRate = epsilonRate + "0";
    } else if (count < 0) {
      gammaRate = gammaRate + "0";
      epsilonRate = epsilonRate + "1";
    } else {
      console.error(
        `ooops the count at ${index} is 0 so it seems there is no dominant bit! idk what to do with that`
      );
    }
  });

  const gammaInt = parseInt(gammaRate, 2);
  const epsilonInt = parseInt(epsilonRate, 2);

  return gammaInt * epsilonInt;
};

const filterRatingSet = (ratingSet, index, filterBit) => {
  ratingSet.forEach((rating, key, set) => {
    if (rating[index] !== filterBit) {
      set.delete(rating);
    }
  });

  return ratingSet;
};

const getMostPopularBitValCount = (ratingSet, index) => {
  let bitPopularityCounter = 0;
  ratingSet.forEach((rating) => {
    if (rating[index] === "1") {
      bitPopularityCounter += 1;
    } else if (rating[index] === "0") {
      bitPopularityCounter -= 1;
    } else {
      console.error(
        `oops the bit at ${index} in rating ${rating} is neither 0 nor 1. Idk what to do with that`
      );
    }
  });

  return bitPopularityCounter;
};

const getLifeSupportRating = (diagnostics) => {
  let potentialCO2Ratings = new Set(diagnostics);
  let potentialO2GenRatings = new Set(diagnostics);

  for (
    let positionIndex = 0;
    positionIndex < diagnostics[0].length;
    positionIndex++
  ) {
    if (potentialCO2Ratings.size > 1) {
      const CO2BitPopularity = getMostPopularBitValCount(
        potentialCO2Ratings,
        positionIndex
      );
      let leastCommonCO2Bit = "0";
      if (CO2BitPopularity < 0) {
        // there are more 0s than 1s
        leastCommonCO2Bit = "1";
      }
      potentialCO2Ratings = filterRatingSet(
        potentialCO2Ratings,
        positionIndex,
        leastCommonCO2Bit
      );
    }

    if (potentialO2GenRatings.size > 1) {
      const O2GenBitPopularity = getMostPopularBitValCount(
        potentialO2GenRatings,
        positionIndex
      );
      let mostCommonO2GenBit = "1";
      if (O2GenBitPopularity < 0) {
        mostCommonO2GenBit = "0";
      }
      potentialO2GenRatings = filterRatingSet(
        potentialO2GenRatings,
        positionIndex,
        mostCommonO2GenBit
      );
    }
  }

  if (potentialCO2Ratings.size > 1) {
    console.error(
      `there is more than one potential CO2 rating! ${potentialCO2Ratings.toString()}`
    );
  }

  if (potentialO2GenRatings.size > 1) {
    console.error(
      `there is more than one potential O2 Gen rating! ${potentialO2GenRatings.toString()}`
    );
  }
  let remainingCO2Rating;
  let remainingO2GenRating;

  potentialCO2Ratings.forEach((rating) => (remainingCO2Rating = rating));
  potentialO2GenRatings.forEach((rating) => (remainingO2GenRating = rating));

  const remainingCO2RatingInt = parseInt(remainingCO2Rating, 2);
  const remainingO2GenRatingInt = parseInt(remainingO2GenRating, 2);

  return remainingCO2RatingInt * remainingO2GenRatingInt;
};

const getSoln = () => {
  const diagnostics = getDataArray(data);
  return {
    part1: getPowerConsumption(diagnostics),
    part2: getLifeSupportRating(diagnostics),
  };
};

export default getSoln;
