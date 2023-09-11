import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateField } from "@mui/x-date-pickers/DateField";

function Input_Today({ today, setToday }: any) {
  const handleDateChange = (newDate: Date | null) => {
    if (newDate !== null) {
      setToday(newDate);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateField fullWidth label='Date of First Vancomycin Dose' value={today} onChange={handleDateChange} sx={{ bgcolor: "#ffffff" }} />
    </LocalizationProvider>
  );
}

export default Input_Today;
