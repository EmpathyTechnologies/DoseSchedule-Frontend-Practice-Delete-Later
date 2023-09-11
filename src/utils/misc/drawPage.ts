import drawCellOutline from "../draw/drawCellOutline";
import drawCellText from "../draw/drawCellText";
import drawMonthYear from "../draw/drawMonthYear";
import drawCellNumbers from "../draw/drawCellNumbers";
import getBaseVariables from "../get/getBaseVariables";
import drawWeekdays from "../draw/drawWeekdays";
import drawCellDose from "../draw/drawCellDose";
import drawCellLabTest from "../draw/drawCellLabTest";
import getCreatedDate from "../get/getCreatedDate";

const drawPage = (
  page: any,
  variables: any,
  residualRenalFunction: any,
  createdBy: string,
  patientName: string,
  patientDateOfBirth: Date | null,
  patientMedicalRecordNumber: string
) => {
  const v = getBaseVariables();

  // top left section - patient identification
  if (patientName) drawCellText(page, 45, 580, `Patient Name: ${patientName}`);
  if (patientDateOfBirth && patientDateOfBirth.toString() !== "Invalid Date") {
    const formattedPatientDOB = new Date(patientDateOfBirth).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
    drawCellText(page, 45, 568, `Patient DOB:   ${formattedPatientDOB}`);
  }
  if (patientMedicalRecordNumber) drawCellText(page, 45, 556, `Patient MRN:   ${patientMedicalRecordNumber}`);

  // top right section
  if (createdBy) drawCellText(page, 545, 580, `Created by ${createdBy}`);
  drawCellText(page, 545, 568, getCreatedDate());

  // Month 1
  drawMonthYear(page, `${variables.month1Name} ${variables.month1YearNumber}`, v.weekday_month1_y + 17);

  drawCellOutline(page, v.x1, v.weekday_month1_y, v.width, 14);
  drawCellOutline(page, v.x2, v.weekday_month1_y, v.width, 14);
  drawCellOutline(page, v.x3, v.weekday_month1_y, v.width, 14);
  drawCellOutline(page, v.x4, v.weekday_month1_y, v.width, 14);
  drawCellOutline(page, v.x5, v.weekday_month1_y, v.width, 14);
  drawCellOutline(page, v.x6, v.weekday_month1_y, v.width, 14);
  drawCellOutline(page, v.x7, v.weekday_month1_y, v.width, 14);

  drawWeekdays(page, v.x1 + 26, v.weekday_month1_y + 3, "SUNDAY");
  drawWeekdays(page, v.x2 + 25, v.weekday_month1_y + 3, "MONDAY");
  drawWeekdays(page, v.x3 + 22, v.weekday_month1_y + 3, "TUESDAY");
  drawWeekdays(page, v.x4 + 12, v.weekday_month1_y + 3, "WEDNESDAY");
  drawWeekdays(page, v.x5 + 17, v.weekday_month1_y + 3, "THURSDAY");
  drawWeekdays(page, v.x6 + 28, v.weekday_month1_y + 3, "FRIDAY");
  drawWeekdays(page, v.x7 + 16, v.weekday_month1_y + 3, "SATURDAY");

  drawCellOutline(page, v.x1, v.y1, v.width, v.height);
  drawCellOutline(page, v.x2, v.y1, v.width, v.height);
  drawCellOutline(page, v.x3, v.y1, v.width, v.height);
  drawCellOutline(page, v.x4, v.y1, v.width, v.height);
  drawCellOutline(page, v.x5, v.y1, v.width, v.height);
  drawCellOutline(page, v.x6, v.y1, v.width, v.height);
  drawCellOutline(page, v.x7, v.y1, v.width, v.height);

  drawCellOutline(page, v.x1, v.y2, v.width, v.height);
  drawCellOutline(page, v.x2, v.y2, v.width, v.height);
  drawCellOutline(page, v.x3, v.y2, v.width, v.height);
  drawCellOutline(page, v.x4, v.y2, v.width, v.height);
  drawCellOutline(page, v.x5, v.y2, v.width, v.height);
  drawCellOutline(page, v.x6, v.y2, v.width, v.height);
  drawCellOutline(page, v.x7, v.y2, v.width, v.height);

  drawCellOutline(page, v.x1, v.y3, v.width, v.height);
  drawCellOutline(page, v.x2, v.y3, v.width, v.height);
  drawCellOutline(page, v.x3, v.y3, v.width, v.height);
  drawCellOutline(page, v.x4, v.y3, v.width, v.height);
  drawCellOutline(page, v.x5, v.y3, v.width, v.height);
  drawCellOutline(page, v.x6, v.y3, v.width, v.height);
  drawCellOutline(page, v.x7, v.y3, v.width, v.height);

  drawCellOutline(page, v.x1, v.y4, v.width, v.height);
  drawCellOutline(page, v.x2, v.y4, v.width, v.height);
  drawCellOutline(page, v.x3, v.y4, v.width, v.height);
  drawCellOutline(page, v.x4, v.y4, v.width, v.height);
  drawCellOutline(page, v.x5, v.y4, v.width, v.height);
  drawCellOutline(page, v.x6, v.y4, v.width, v.height);
  drawCellOutline(page, v.x7, v.y4, v.width, v.height);

  drawCellOutline(page, v.x1, v.y5, v.width, v.height);
  drawCellOutline(page, v.x2, v.y5, v.width, v.height);
  drawCellOutline(page, v.x3, v.y5, v.width, v.height);
  drawCellOutline(page, v.x4, v.y5, v.width, v.height);
  drawCellOutline(page, v.x5, v.y5, v.width, v.height);
  drawCellOutline(page, v.x6, v.y5, v.width, v.height);
  drawCellOutline(page, v.x7, v.y5, v.width, v.height);

  drawCellOutline(page, v.x1, v.y6, v.width, v.height);
  drawCellOutline(page, v.x2, v.y6, v.width, v.height);
  drawCellOutline(page, v.x3, v.y6, v.width, v.height);
  drawCellOutline(page, v.x4, v.y6, v.width, v.height);
  drawCellOutline(page, v.x5, v.y6, v.width, v.height);
  drawCellOutline(page, v.x6, v.y6, v.width, v.height);
  drawCellOutline(page, v.x7, v.y6, v.width, v.height);

  // Draw Cell Numbers
  if (variables.cellNumbers) {
    variables.cellNumbers.forEach(async (cellNumber: any) => await drawCellNumbers(page, cellNumber));
  }

  // Month 2
  drawMonthYear(page, `${variables.month2Name} ${variables.month2YearNumber}`, v.weekday_month2_y + 17);

  drawWeekdays(page, v.x1 + 26, v.weekday_month2_y + 3, "SUNDAY");
  drawWeekdays(page, v.x2 + 25, v.weekday_month2_y + 3, "MONDAY");
  drawWeekdays(page, v.x3 + 22, v.weekday_month2_y + 3, "TUESDAY");
  drawWeekdays(page, v.x4 + 12, v.weekday_month2_y + 3, "WEDNESDAY");
  drawWeekdays(page, v.x5 + 17, v.weekday_month2_y + 3, "THURSDAY");
  drawWeekdays(page, v.x6 + 28, v.weekday_month2_y + 3, "FRIDAY");
  drawWeekdays(page, v.x7 + 16, v.weekday_month2_y + 3, "SATURDAY");

  drawCellOutline(page, v.x1, v.weekday_month2_y, v.width, 14);
  drawCellOutline(page, v.x2, v.weekday_month2_y, v.width, 14);
  drawCellOutline(page, v.x3, v.weekday_month2_y, v.width, 14);
  drawCellOutline(page, v.x4, v.weekday_month2_y, v.width, 14);
  drawCellOutline(page, v.x5, v.weekday_month2_y, v.width, 14);
  drawCellOutline(page, v.x6, v.weekday_month2_y, v.width, 14);
  drawCellOutline(page, v.x7, v.weekday_month2_y, v.width, 14);

  drawCellOutline(page, v.x1, v.y7, v.width, v.height);
  drawCellOutline(page, v.x2, v.y7, v.width, v.height);
  drawCellOutline(page, v.x3, v.y7, v.width, v.height);
  drawCellOutline(page, v.x4, v.y7, v.width, v.height);
  drawCellOutline(page, v.x5, v.y7, v.width, v.height);
  drawCellOutline(page, v.x6, v.y7, v.width, v.height);
  drawCellOutline(page, v.x7, v.y7, v.width, v.height);

  drawCellOutline(page, v.x1, v.y8, v.width, v.height);
  drawCellOutline(page, v.x2, v.y8, v.width, v.height);
  drawCellOutline(page, v.x3, v.y8, v.width, v.height);
  drawCellOutline(page, v.x4, v.y8, v.width, v.height);
  drawCellOutline(page, v.x5, v.y8, v.width, v.height);
  drawCellOutline(page, v.x6, v.y8, v.width, v.height);
  drawCellOutline(page, v.x7, v.y8, v.width, v.height);

  drawCellOutline(page, v.x1, v.y9, v.width, v.height);
  drawCellOutline(page, v.x2, v.y9, v.width, v.height);
  drawCellOutline(page, v.x3, v.y9, v.width, v.height);
  drawCellOutline(page, v.x4, v.y9, v.width, v.height);
  drawCellOutline(page, v.x5, v.y9, v.width, v.height);
  drawCellOutline(page, v.x6, v.y9, v.width, v.height);
  drawCellOutline(page, v.x7, v.y9, v.width, v.height);

  // if ((residualRenalFunction >= 1 && v.y10 >= variables.cellText[8].y) || (residualRenalFunction < 1 && v.y10 >= variables.cellText[6].y)) {
  // if ((residualRenalFunction >= 1 && v.x1 >= variables.cellText[8].x) || (residualRenalFunction < 1 && v.x1 >= variables.cellText[6].x))
  drawCellOutline(page, v.x1, v.y10, v.width, v.height);

  // if ((residualRenalFunction >= 1 && v.x2 >= variables.cellText[8].x) || (residualRenalFunction < 1 && v.x2 >= variables.cellText[6].x))
  drawCellOutline(page, v.x2, v.y10, v.width, v.height);

  // if ((residualRenalFunction >= 1 && v.x3 >= variables.cellText[8].x) || (residualRenalFunction < 1 && v.x3 >= variables.cellText[6].x))
  drawCellOutline(page, v.x3, v.y10, v.width, v.height);

  // if ((residualRenalFunction >= 1 && v.x4 >= variables.cellText[8].x) || (residualRenalFunction < 1 && v.x4 >= variables.cellText[6].x))
  drawCellOutline(page, v.x4, v.y10, v.width, v.height);

  // if ((residualRenalFunction >= 1 && v.x5 >= variables.cellText[8].x) || (residualRenalFunction < 1 && v.x5 >= variables.cellText[6].x))
  drawCellOutline(page, v.x5, v.y10, v.width, v.height);
  // }

  // Draw Cell Text
  if (residualRenalFunction >= 1) {
    drawCellDose(page, variables.cellText[0].x + 15, variables.cellText[0].y + 24, "1st dose", "Vancomycin", "");
    drawCellLabTest(page, variables.cellText[1].x + 15, variables.cellText[1].y + 24, "Go to clinic", "for lab tests", "");
    drawCellLabTest(page, variables.cellText[2].x + 15, variables.cellText[2].y + 24, "Go to clinic", "for lab tests", "");
    drawCellDose(page, variables.cellText[3].x + 15, variables.cellText[3].y + 24, "2nd dose", "Vancomycin", "");
    drawCellLabTest(page, variables.cellText[4].x + 13, variables.cellText[4].y + 26, "If dose change,", "go to clinic", "for lab tests");
    drawCellDose(page, variables.cellText[5].x + 15, variables.cellText[5].y + 24, "3rd dose", "Vancomycin", "");
    drawCellDose(page, variables.cellText[6].x + 15, variables.cellText[6].y + 24, "4th dose", "Vancomycin", "");
    drawCellDose(page, variables.cellText[7].x + 15, variables.cellText[7].y + 24, "5th dose", "Vancomycin", "");
    drawCellDose(page, variables.cellText[8].x + 15, variables.cellText[8].y + 24, "6th dose", "Vancomycin*", "");
  } else if (residualRenalFunction < 1) {
    drawCellDose(page, variables.cellText[0].x + 15, variables.cellText[0].y + 24, "1st dose", "Vancomycin", "");
    drawCellLabTest(page, variables.cellText[1].x + 15, variables.cellText[1].y + 24, "Go to clinic", "for lab tests", "");
    drawCellDose(page, variables.cellText[2].x + 15, variables.cellText[2].y + 24, "2nd dose", "Vancomycin", "");
    drawCellLabTest(page, variables.cellText[3].x + 13, variables.cellText[3].y + 26, "If dose change,", "go to clinic", "for lab tests");
    drawCellDose(page, variables.cellText[4].x + 15, variables.cellText[4].y + 24, "3rd dose", "Vancomycin", "");
    drawCellDose(page, variables.cellText[5].x + 15, variables.cellText[5].y + 24, "4th dose", "Vancomycin", "");
    drawCellDose(page, variables.cellText[6].x + 15, variables.cellText[6].y + 24, "5th dose", "Vancomycin*", "");
  }

  // drawCellDose(
  //   page,
  //   10,
  //   30,
  //   "TEST",
  //   String(variables.cellText[variables.cellText.length - 1].x),
  //   String(variables.cellText[variables.cellText.length - 1].y)
  // );
};

export default drawPage;
