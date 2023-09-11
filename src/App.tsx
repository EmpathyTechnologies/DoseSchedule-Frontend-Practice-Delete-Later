import "./App.css";
import { useEffect, useState } from "react";
import { PDFDocument } from "pdf-lib";
import downloadPDF from "./utils/misc/downloadPDF";

// Utils
import getVariables from "./utils/misc/getVariables";
import drawPage from "./utils/misc/drawPage";

// Components
import Disclaimer from "./components/Disclaimer";
import Header from "./components/Header";
import Input_CreatedBy from "./components/Input_CreatedBy";
import Input_Today from "./components/Input_Today";
import Input_PatientDateOfBirth from "./components/Input_PatientDateOfBirth";
import Input_PatientMedicalRecordNumber from "./components/Input_PatientMedicalRecordNumber";
import Input_PatientName from "./components/Input_PatientName";
import Navbar from "./components/Navbar";
import Input_RenalFunction from "./components/Input_RenalFunction";
import StepText from "./components/StepText";
import TESTING from "./components/TESTING";
import ConfirmationBox from "./components/ConfirmationBox";

// MUI
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import dayjs from "dayjs"; // Import dayjs library

const defaultTheme = createTheme();

function App() {
  const [openConfirmationBox, setOpenConfirmationBox] = useState(false);

  const [patientName, setPatientName] = useState<string>("");
  const [patientDateOfBirth, setPatientDateOfBirth] = useState<Date | null>(null);
  const [patientMedicalRecordNumber, setPatientMedicalRecordNumber] = useState<string>("");
  // const [today, setToday] = useState<any>(new Date());
  const currentDate = dayjs(); // Use dayjs to get the current date
  const [today, setToday] = useState<any>(currentDate);
  const [residualRenalFunction, setResidualRenalFunction] = useState<number>();
  const [createdBy, setCreatedBy] = useState<string>("");

  const [variables, setVariables] = useState<any>({
    baseVariables: {},
    month1Name: "Error",
    month2Name: "Error",
    month1YearNumber: 0,
    month2YearNumber: 0,
    month1Day1Weekday: "Error",
    month2Day1Weekday: "Error",
    month1DaysCount: 0,
    month2DaysCount: 0,
    cellNumbers: [],
    cellText: [],
  });

  useEffect(() => {
    const updateVariables = async () => {
      const variables = await getVariables(today, residualRenalFunction, createdBy);
      setVariables(variables);
    };
    updateVariables();
  }, [today, residualRenalFunction]);

  const generatePDF = async () => {
    setOpenConfirmationBox(false);
    let myVariables = variables;
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([792, 612]); // 8.5 inch by 11 inch
    await drawPage(page, myVariables, residualRenalFunction, createdBy, patientName, patientDateOfBirth, patientMedicalRecordNumber);
    await downloadPDF(pdfDoc);
  };

  const handleClickOpen = () => {
    if (!residualRenalFunction || isNaN(residualRenalFunction)) alert("Residual Renal Function Kt/V is a required field");
    else if (!today || isNaN(today)) alert("Date of First Vancomycin Dose is a required field");
    else setOpenConfirmationBox(true);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Navbar />
      <ConfirmationBox
        openConfirmationBox={openConfirmationBox}
        setOpenConfirmationBox={setOpenConfirmationBox}
        today={today}
        variables={variables}
        createdBy={createdBy}
        patientName={patientName}
        patientDateOfBirth={patientDateOfBirth}
        patientMedicalRecordNumber={patientMedicalRecordNumber}
        residualRenalFunction={residualRenalFunction}
        generatePDF={generatePDF}
      />

      <Box sx={{ height: "100vh", bgcolor: "#f7f7f7", minWidth: "460px", pt: 8, pb: 6 }}>
        <Container maxWidth='sm'>
          <Header />
          <FormControl>
            <Grid container spacing={1.5}>
              {/* ROW 1 */}
              <Grid item xs={3}>
                <StepText text={"Patient Identification (optional)"} />
              </Grid>
              <Grid item xs={9}>
                <Input_PatientName patientName={patientName} setPatientName={setPatientName} />
              </Grid>

              {/* ROW 2 */}
              <Grid item xs={3}></Grid>
              <Grid item xs={9}>
                <Input_PatientDateOfBirth patientDateOfBirth={patientDateOfBirth} setPatientDateOfBirth={setPatientDateOfBirth} />
              </Grid>

              {/* ROW 3 */}
              <Grid item xs={3}></Grid>
              <Grid item xs={9}>
                <Input_PatientMedicalRecordNumber
                  patientMedicalRecordNumber={patientMedicalRecordNumber}
                  setPatientMedicalRecordNumber={setPatientMedicalRecordNumber}
                />
              </Grid>

              {/* ROW 4 */}
              <Grid item xs={3}>
                <StepText text={"Medical Details"} />
              </Grid>
              <Grid item xs={9}>
                <Input_RenalFunction residualRenalFunction={residualRenalFunction} setResidualRenalFunction={setResidualRenalFunction} />
              </Grid>

              {/* ROW 5 */}
              <Grid item xs={3}></Grid>
              <Grid item xs={9}>
                <Input_Today today={today} setToday={setToday} />
              </Grid>

              {/* ROW 6 */}
              <Grid item xs={3}>
                <StepText text={"Employee Information (optional)"} />
              </Grid>
              <Grid item xs={9}>
                <Input_CreatedBy createdBy={createdBy} setCreatedBy={setCreatedBy} />
              </Grid>

              {/* ROW 7 */}
              <Grid item xs={3}></Grid>
              <Grid item xs={9}>
                <Button
                  fullWidth
                  variant='contained'
                  onClick={handleClickOpen}
                  // onClick={generatePDF}
                >
                  Generate PDF
                </Button>
              </Grid>

              {/* ROW 8 */}
              <Grid item xs={12} md={12}>
                <Disclaimer />
              </Grid>
            </Grid>
          </FormControl>
          {/* <TESTING
            today={today}
            variables={variables}
            createdBy={createdBy}
            patientName={patientName}
            patientDateOfBirth={patientDateOfBirth}
            patientMedicalRecordNumber={patientMedicalRecordNumber}
            residualRenalFunction={residualRenalFunction}
          /> */}
        </Container>
      </Box>
    </ThemeProvider>
  );
}
export default App;
