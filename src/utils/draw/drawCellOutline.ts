import { rgb } from "pdf-lib";

const drawCellOutline = (page: any, x: number, y: number, width: number, height: number): any => {
  const borderColor = rgb(0, 0, 0);
  page.drawRectangle({
    x,
    y,
    width: width,
    height: height,
    borderWidth: 1,
    borderColor,
  });
};

export default drawCellOutline;
