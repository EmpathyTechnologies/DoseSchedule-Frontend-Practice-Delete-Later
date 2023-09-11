import TextField from "@mui/material/TextField";

function Input_CreatedBy({ createdBy, setCreatedBy }: any) {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value.slice(0, 65); // Limit input to 65 characters
    setCreatedBy(newValue);
  };

  return (
    <TextField
      fullWidth
      label='Created By'
      variant='outlined'
      value={createdBy}
      onChange={handleOnChange}
      inputProps={{ maxLength: 65 }}
      sx={{ bgcolor: "#ffffff" }}
    />
  );
}

export default Input_CreatedBy;
