import TextField from "@mui/material/TextField";

function Input_RenalFunction({ residualRenalFunction, setResidualRenalFunction }: any) {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value.slice(0, 65); // Limit input to 65 characters
    setResidualRenalFunction(newValue);
  };

  return (
    <TextField
      required
      fullWidth
      label='Residual Renal Function Kt/V'
      variant='outlined'
      value={residualRenalFunction}
      onChange={handleOnChange}
      type='number'
      inputProps={{ maxLength: 65, step: "0.01" }}
      sx={{ bgcolor: "#ffffff" }}
    />
  );
}

export default Input_RenalFunction;
