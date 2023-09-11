import { rgb } from "pdf-lib";

const drawWeekdays = (page: any, x: number, y: number, text: string) => {
  page.drawText(text, {
    x: x,
    y: y,
    size: 12,
    color: rgb(0, 0, 0),
  });
};

export default drawWeekdays;
