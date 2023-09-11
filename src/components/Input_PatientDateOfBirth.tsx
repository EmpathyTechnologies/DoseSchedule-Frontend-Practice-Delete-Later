import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateField } from "@mui/x-date-pickers/DateField";

function Input_PatientDateOfBirth({ patientDateOfBirth, setPatientDateOfBirth }: any) {
  const handleDateChange = (newDate: Date | null) => {
    if (newDate !== null) {
      setPatientDateOfBirth(newDate);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateField fullWidth label='Patient Date of Birth' value={patientDateOfBirth} onChange={handleDateChange} sx={{ bgcolor: "#ffffff" }} />
    </LocalizationProvider>
  );
}

export default Input_PatientDateOfBirth;
