import { rgb } from "pdf-lib";

const drawCellLabTest = (page: any, x: number, y: number, text_line1: string, text_line2: string, text_line3: string) => {
  page.drawText(text_line1, {
    x: x,
    y: y,
    size: 12,
    color: rgb(1, 0, 0),
  });

  page.drawText(text_line2, {
    x: x,
    y: y - 12,
    size: 12,
    color: rgb(1, 0, 0),
  });

  page.drawText(text_line3, {
    x: x,
    y: y - 24,
    size: 12,
    color: rgb(1, 0, 0),
  });
};

export default drawCellLabTest;
