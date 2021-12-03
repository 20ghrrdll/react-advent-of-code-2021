import getDataArray from './utils/getDataArray';
import data from './data/day2';

const calculateDirectionProduct = (directions) => {
  let depth = 0;
  let horizontal = 0;

  for(const direction of directions) {
    const [command, value] = direction.split(" ");
    const numericalValue = parseInt(value);

    switch (command) {
      case "forward":
        horizontal += numericalValue
        break;
      case "down":
        depth += numericalValue
        break;
      case "up":
        depth -= numericalValue
        break;
      default:
        break;
    }
  }
  return depth * horizontal;
};

const calculateAimDirectionProduct = (directions) =>  {
  let depth = 0;
  let horizontal = 0;
  let aim = 0;

  for(const direction of directions) {
    const [command, value] = direction.split(" ");
    const numericalValue = parseInt(value);

    switch (command) {
      case "forward":
        horizontal += numericalValue
        depth += (aim * numericalValue)
        break;
      case "down":
        aim += numericalValue
        break;
      case "up":
        aim -= numericalValue
        break;
      default:
        break;
    }
  }

  return depth * horizontal;
};

const getSoln = () => {
  const directions = getDataArray(data);

  return {
    part1: calculateDirectionProduct(directions),
    part2: calculateAimDirectionProduct(directions),
  }
}

export default getSoln;