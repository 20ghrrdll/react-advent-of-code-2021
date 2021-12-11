import React from "react";
import "./Calendar.css";

const PART_1_COMPLETE_DAYS = new Set([1, 2, 3, 4]);
const PART_2_COMPLETE_DAYS = new Set([1, 2, 3]);
const ELIGIBLE_DAYS = new Set([4, 5, 6, 7, 8, 9, 10]);

const Calendar = () => {
  let dayData = new Array(25).fill({
    isEligible: false,
    isPart1Done: false,
    isPart2Done: false,
  });
  dayData = dayData.map((dayDatum, index) => {
    if (ELIGIBLE_DAYS.has(index)) {
      dayDatum.isEligible = true;
    }
    if (PART_1_COMPLETE_DAYS.has(index)) {
      dayDatum.isPart1Done = true;
    }
    if (PART_2_COMPLETE_DAYS.has(index)) {
      dayDatum.isPart2Done = true;
    }
    return dayDatum;
  });

  return (
    <div className={"calendarContainer"}>
      {dayData.map((dayDatum, index) => (
        <div key={`day-${index}`} className={"calendarDay"}>
          <img
            src="AdventCandy.png"
            alt="Piece of chocolate candy"
            width="100%"
            height="100%"
          />
        </div>
      ))}
    </div>
  );
};

export default Calendar;
