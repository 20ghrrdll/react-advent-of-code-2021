import getDataString from "./utils/getDataString";
import data from './data/day1';

const parseMeasurements = () => {
  //const measurementString = getDataString(data);
  const splitMeasurements =  data.split(/\r?\n/);
  return splitMeasurements.map(measurement => parseInt(measurement));
}

const countIncreases = (measurements) => {
  let numIncreases = 0;

  for (let measurementIndex = 1; measurementIndex < measurements.length; measurementIndex++) {
    const currentMeasurement = measurements[measurementIndex];
    const previousMeasurement = measurements[measurementIndex - 1]
    if (currentMeasurement > previousMeasurement) {
      numIncreases += 1;
    }
  }
  return numIncreases;
};

const getWindowSum = (measurements, index) => {
  return measurements[index] + measurements[index+1] + measurements[index+2];
}

const countThreeMeasurementIncreases = (measurements) => {
  let numIncreases = 0;

  for (let measurementIndex = 1; measurementIndex < measurements.length - 2; measurementIndex ++) {
    const currentWindowSum = getWindowSum(measurements, measurementIndex);
    const previousWindowSum = getWindowSum(measurements, measurementIndex - 1);
    if (currentWindowSum > previousWindowSum) {
      numIncreases+=1;
    }
  }

  return numIncreases;
}

const getSoln = () => {
  const parsedMeasurements = parseMeasurements()
  return `
    Num increases ${countIncreases(parsedMeasurements)},
    num three-measurement increases ${countThreeMeasurementIncreases(parsedMeasurements)}`
}

export default getSoln;