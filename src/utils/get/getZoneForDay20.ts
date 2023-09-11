import getBaseVariables from "./getBaseVariables";

const getZoneForDay20 = (today: any, variables: any, isRRFMoreThan1: any, cellText_greater: any, cellText_lesser: any) => {
  const v = getBaseVariables();
  const vars = variables;

  let day20_greater = cellText_greater.cellText.day20;
  let day20_lesser = cellText_lesser.cellText.day20;

  let checkVariable;

  if (isRRFMoreThan1 == true) {
    checkVariable = day20_greater;
  } else {
    checkVariable = day20_lesser;
  }

  let zone = 0;
  let countX = 0;
  let countY = 0;

  if (checkVariable.x == v.x1) countX = 1;
  if (checkVariable.x == v.x2) countX = 2;
  if (checkVariable.x == v.x3) countX = 3;
  if (checkVariable.x == v.x4) countX = 4;
  if (checkVariable.x == v.x5) countX = 5;
  if (checkVariable.x == v.x6) countX = 6;
  if (checkVariable.x == v.x7) countX = 7;

  if (checkVariable.y == v.y5) countY = 5;
  if (checkVariable.y == v.y6) countY = 6;
  if (checkVariable.y == v.y7) countY = 7;
  if (checkVariable.y == v.y8) countY = 8;
  if (checkVariable.y == v.y9) countY = 9;
  if (checkVariable.y == v.y10) countY = 10;

  if (countX == 1 && countY == 5) zone = 29;
  if (countX == 2 && countY == 5) zone = 30;
  if (countX == 3 && countY == 5) zone = 31;
  if (countX == 4 && countY == 5) zone = 32;
  if (countX == 5 && countY == 5) zone = 33;
  if (countX == 6 && countY == 5) zone = 34;
  if (countX == 7 && countY == 5) zone = 35;
  if (countX == 1 && countY == 6) zone = 36;
  if (countX == 2 && countY == 6) zone = 37;
  if (countX == 3 && countY == 6) zone = 38;
  if (countX == 4 && countY == 6) zone = 39;
  if (countX == 5 && countY == 6) zone = 40;
  if (countX == 6 && countY == 6) zone = 41;
  if (countX == 7 && countY == 6) zone = 42;
  if (countX == 1 && countY == 7) zone = 43;
  if (countX == 2 && countY == 7) zone = 44;
  if (countX == 3 && countY == 7) zone = 45;
  if (countX == 4 && countY == 7) zone = 46;
  if (countX == 5 && countY == 7) zone = 47;
  if (countX == 6 && countY == 7) zone = 48;
  if (countX == 7 && countY == 7) zone = 49;
  if (countX == 1 && countY == 8) zone = 50;
  if (countX == 2 && countY == 8) zone = 51;
  if (countX == 3 && countY == 8) zone = 52;
  if (countX == 4 && countY == 8) zone = 53;
  if (countX == 5 && countY == 8) zone = 54;
  if (countX == 6 && countY == 8) zone = 55;
  if (countX == 7 && countY == 8) zone = 56;
  if (countX == 1 && countY == 9) zone = 57;
  if (countX == 2 && countY == 9) zone = 58;
  if (countX == 3 && countY == 9) zone = 59;
  if (countX == 4 && countY == 9) zone = 60;
  if (countX == 5 && countY == 9) zone = 61;
  if (countX == 6 && countY == 9) zone = 62;
  if (countX == 7 && countY == 9) zone = 63;
  if (countX == 1 && countY == 10) zone = 64;

  return zone;
};
export default getZoneForDay20;

//
