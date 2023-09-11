function StepText({ text }: any) {
  return (
    <div
      style={{
        width: "75px",
        display: "flex",
        alignItems: "center",
        justifyContent: "left",
        fontWeight: "bold",
        lineHeight: 1.1,
      }}>
      {text}
    </div>
  );
}

export default StepText;
