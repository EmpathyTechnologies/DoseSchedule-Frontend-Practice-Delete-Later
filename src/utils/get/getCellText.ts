import getBaseVariables from "./getBaseVariables";
import getWeekdayDay1_Month1 from "./getWeekdayDay1_Month1";
import getMonthLength_Month1 from "./getMonthLength_Month1";

const getCellText = async (residualRenalFunction: any, year: any, month: any, date: any) => {
  // initial setup
  const baseVariables = getBaseVariables();
  const today: Date = new Date(year, month - 1, date);
  const todayNumber: number = today.getDate();
  const monthDay1: string = await getWeekdayDay1_Month1(year, month);
  const monthLength: number = await getMonthLength_Month1(year, month);

  // modifiers
  let weekday = 0;
  if (monthDay1 === "Sunday") weekday = 0;
  else if (monthDay1 === "Monday") weekday = 1;
  else if (monthDay1 === "Tuesday") weekday = 2;
  else if (monthDay1 === "Wednesday") weekday = 3;
  else if (monthDay1 === "Thursday") weekday = 4;
  else if (monthDay1 === "Friday") weekday = 5;
  else if (monthDay1 === "Saturday") weekday = 6;

  // blank variables
  let cellText: any = [];
  let day0 = {};
  let day2 = {};
  let day3 = {};
  let day4 = {};
  let day5 = {};
  let day6 = {};
  let day8 = {};
  let day10 = {};
  let day12 = {};
  let day15 = {};
  let day16 = {};
  let day20 = {};

  function getX(weekday: number, doseDay: number) {
    let count = weekday + doseDay + todayNumber;
    count = count % 7;
    if (count === 1) return baseVariables.x1;
    if (count === 2) return baseVariables.x2;
    if (count === 3) return baseVariables.x3;
    if (count === 4) return baseVariables.x4;
    if (count === 5) return baseVariables.x5;
    if (count === 6) return baseVariables.x6;
    if (count === 0) return baseVariables.x7;
  }

  //        zones
  //  y1:    1  2  3  4  5  6  7
  //  y2:    8  9 10 11 12 13 14
  //  y3:   15 16 17 18 19 20 21
  //  y4:   22 23 24 25 26 27 28
  //  y5:   29 30 31 32 33 34 35
  //  y6:   36 37 38 39 40 41 42

  //  y7:   43 44 45 46 47 48 49
  //  y8:   50 51 52 53 54 55 56
  //  y9:   57 58 59 60 61 62 63
  // y10:   64 65 66 67 68 69 70

  function getY(weekday: number, doseDay: number) {
    let zone = weekday + doseDay + todayNumber;
    let inflectionPoint = weekday + monthLength;

    if (zone <= inflectionPoint) {
      if (zone >= 1 && zone <= 7) return baseVariables.y1;
      else if (zone >= 8 && zone <= 14) return baseVariables.y2;
      else if (zone >= 15 && zone <= 21) return baseVariables.y3;
      else if (zone >= 22 && zone <= 28) return baseVariables.y4;
      else if (zone >= 29 && zone <= 35) return baseVariables.y5;
      else if (zone >= 36 && zone <= 42) return baseVariables.y6;
      else if (zone >= 43 && zone <= 49) return baseVariables.y7;
      else if (zone >= 50 && zone <= 56) return baseVariables.y8;
      else if (zone >= 57 && zone <= 63) return baseVariables.y9;
      else if (zone >= 64 && zone <= 70) return baseVariables.y10;
    }
    //
    else if (zone > inflectionPoint) {
      zone = zone - inflectionPoint + ((weekday + monthLength) % 7);
      if (zone >= 1 && zone <= 7) return baseVariables.y7;
      else if (zone >= 8 && zone <= 14) return baseVariables.y8;
      else if (zone >= 15 && zone <= 21) return baseVariables.y9;
      else if (zone >= 22 && zone <= 28) return baseVariables.y10;
    }
  }

  if (residualRenalFunction < 1) {
    day0 = {
      text: "Day 0",
      x: getX(weekday, 0),
      y: getY(weekday, 0),
    };
    day3 = {
      text: "Day 3",
      x: getX(weekday, 3),
      y: getY(weekday, 3),
    };
    day5 = {
      text: "Day 5",
      x: getX(weekday, 5),
      y: getY(weekday, 5),
    };
    day8 = {
      text: "Day 8",
      x: getX(weekday, 8),
      y: getY(weekday, 8),
    };
    day10 = {
      text: "Day 10",
      x: getX(weekday, 10),
      y: getY(weekday, 10),
    };
    day15 = {
      text: "Day 15",
      x: getX(weekday, 15),
      y: getY(weekday, 15),
    };
    day20 = {
      text: "Day 20",
      x: getX(weekday, 20),
      y: getY(weekday, 20),
    };
    cellText = [day0, day3, day5, day8, day10, day15, day20];
  } else if (residualRenalFunction >= 1) {
    day0 = {
      text: "Day 0",
      x: getX(weekday, 0),
      y: getY(weekday, 0),
    };
    day2 = {
      text: "Day 2",
      x: getX(weekday, 2),
      y: getY(weekday, 2),
    };
    day3 = {
      text: "Day 3",
      x: getX(weekday, 3),
      y: getY(weekday, 3),
    };
    day4 = {
      text: "Day 4",
      x: getX(weekday, 4),
      y: getY(weekday, 4),
    };
    day6 = {
      text: "Day 6",
      x: getX(weekday, 6),
      y: getY(weekday, 6),
    };
    day8 = {
      text: "Day 8",
      x: getX(weekday, 8),
      y: getY(weekday, 8),
    };
    day12 = {
      text: "Day 12",
      x: getX(weekday, 12),
      y: getY(weekday, 12),
    };
    day16 = {
      text: "Day 16",
      x: getX(weekday, 16),
      y: getY(weekday, 16),
    };
    day20 = {
      text: "Day 20",
      x: getX(weekday, 20),
      y: getY(weekday, 20),
    };
    cellText = [day0, day2, day3, day4, day6, day8, day12, day16, day20];
  }

  // cellText.push({ text: "TEST", x: monthLength, y: 1 });

  return cellText;
};

export default getCellText;
