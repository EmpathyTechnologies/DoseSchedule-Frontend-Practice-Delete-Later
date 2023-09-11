const downloadPDF = async (pdfDoc: any) => {
  const pdfBytes = await pdfDoc.save();
  const pdfBlob = new Blob([pdfBytes], { type: "application/pdf" });

  const link = document.createElement("a");
  link.href = URL.createObjectURL(pdfBlob);
  link.download = "calendar.pdf";
  link.click();
};

export default downloadPDF;
