import TextField from "@mui/material/TextField";

function Input_PatientMedicalRecordNumber({ patientMedicalRecordNumber, setPatientMedicalRecordNumber }: any) {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value.slice(0, 65); // Limit input to 65 characters
    setPatientMedicalRecordNumber(newValue);
  };

  return (
    <TextField
      fullWidth
      label='Patient Medical Record Number'
      variant='outlined'
      value={patientMedicalRecordNumber}
      onChange={handleOnChange}
      inputProps={{ maxLength: 65 }}
      sx={{ bgcolor: "#ffffff" }}
    />
  );
}

export default Input_PatientMedicalRecordNumber;
