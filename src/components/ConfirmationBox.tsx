import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";

export default function ConfirmationBox({
  openConfirmationBox,
  setOpenConfirmationBox,
  today,
  variables,
  createdBy,
  patientName,
  patientDateOfBirth,
  patientMedicalRecordNumber,
  residualRenalFunction,
  generatePDF,
}: any) {
  const handleClose = () => {
    setOpenConfirmationBox(false);
  };

  return (
    <div>
      <Dialog open={openConfirmationBox} onClose={handleClose} aria-labelledby='alert-dialog-title' aria-describedby='alert-dialog-description'>
        <DialogTitle id='alert-dialog-title'>{"Is this correct?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            <Grid container spacing={1.5}>
              {/* row 1 */}
              <Grid item xs={3}>
                Patient Name
              </Grid>
              <Grid item xs={9}>
                {patientName}
              </Grid>

              {/* row 2 */}
              <Grid item xs={3}>
                Patient DOB
              </Grid>
              <Grid item xs={9}>
                {patientDateOfBirth && patientDateOfBirth.toString() !== "Invalid Date" ? (
                  <div>
                    {new Date(patientDateOfBirth).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    })}
                  </div>
                ) : (
                  <div></div>
                )}
              </Grid>

              {/* row 3 */}
              <Grid item xs={3}>
                Patient MRN
              </Grid>
              <Grid item xs={9}>
                {patientMedicalRecordNumber}
              </Grid>

              {/* row 4 */}
              <Grid item xs={3}>
                RRF Kt/V
              </Grid>
              <Grid item xs={9}>
                {residualRenalFunction}
              </Grid>

              {/* row 5 */}
              <Grid item xs={3}>
                1st Dose Date
              </Grid>
              <Grid item xs={9}>
                {today && today.toString() !== "Invalid Date" ? (
                  <div>
                    {new Date(today).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    })}
                  </div>
                ) : (
                  <div></div>
                )}
              </Grid>

              {/* row 6 */}
              <Grid item xs={3}>
                Created By
              </Grid>
              <Grid item xs={9}>
                {createdBy}
              </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Go Back</Button>
          <Button onClick={generatePDF} autoFocus>
            Create PDF
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
