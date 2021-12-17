import React from "react";
import { Link } from "react-router-dom";
import "./Calendar.css";

const NUM_ADVENT_DAYS = 25;
const PART_1_COMPLETE_DAYS = new Set(['5']);
const PART_2_COMPLETE_DAYS = new Set(['1', '2', '3', '4']);
const ELIGIBLE_DAYS = new Set([ '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16']);

const DayWrapper = ({dayDatum, index, children }) => {
  if (dayDatum.isPart1Done || dayDatum.isPart2Done) {
    return (<Link to={`/day${index +1}`}>{children}</Link>)
  } else {
    return (<>{children}</>)
  }
}

const Calendar = () => {
  let dayData = [];

  for(let day = 1; day <= NUM_ADVENT_DAYS; day++) {
    const dayDatum = {}
    if (PART_2_COMPLETE_DAYS.has(day.toString())) {
      dayDatum.isPart2Done = true;
    } else if (PART_1_COMPLETE_DAYS.has(day.toString())) {
      dayDatum.isPart1Done = true;
    } else if (ELIGIBLE_DAYS.has(day.toString())) {
      dayDatum.isEligible = true;
    }
    dayData.push(dayDatum);
  }

  return (
    <div className={"calendarContainer"}>
      {dayData.map((dayDatum, index) => (
        <DayWrapper key={`day-${index+1}`} dayDatum={dayDatum} index={index} >
        <div className={"calendarDayContainer"}>
          <div className={"calendarDayContents"}>
            {dayDatum.isEligible && (
              <img
                src="AdventCandy.png"
                alt="Piece of chocolate candy"
                width="85%"
                height="85%"
              />
            )}
            {dayDatum.isPart1Done && (
              <img
                src="AdventCandyHalfEaten.png"
                alt="Piece of chocolate candy"
                width="85%"
                height="85%"
                style={{paddingTop: '2.5vh'}}
              />
            )}
            <div className={"dayNumber"}>{index + 1}</div>
          </div>
        </div>
        </DayWrapper>
      ))}
    </div>
    
  );
};

export default Calendar;
