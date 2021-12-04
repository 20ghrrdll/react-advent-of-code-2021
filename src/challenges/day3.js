import data from "./data/day3";
import getDataArray from "./utils/getDataArray";

const getPowerConsumption = (diagnostics) => {};

const getSoln = () => {
  const diagnostics = getDataArray(data);
  return {
    part1: getPowerConsumption(diagnostics),
  };
};

export default getSoln;
