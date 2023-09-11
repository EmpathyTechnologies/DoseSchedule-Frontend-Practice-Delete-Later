import { rgb } from "pdf-lib";

const drawCellNumbers = (page: any, cellNumber: any) => {
  page.drawText(cellNumber.text, {
    size: 12,
    x: cellNumber.x,
    y: cellNumber.y + 35,
    color: rgb(0, 0, 0),
  });
};

export default drawCellNumbers;
