import { rgb } from "pdf-lib";

const drawMonthYear = async (page: any, month: any, y: number) => {
  const fontSize = 16;
  const monthYearTextX = page.getWidth() / 2 - (month.length * fontSize * 0.6) / 2;
  page.drawText(month, {
    size: fontSize,
    x: monthYearTextX,
    y: y,
    color: rgb(0, 0, 0),
  });
};

export default drawMonthYear;
