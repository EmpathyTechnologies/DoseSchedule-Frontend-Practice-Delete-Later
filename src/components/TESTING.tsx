import { useEffect } from "react";
import getMonthLength_Month1 from "../utils/get/getMonthLength_Month1";
function TESTING({ today, variables, createdBy, patientName, patientDateOfBirth, patientMedicalRecordNumber, residualRenalFunction }: any) {
  let local_today = new Date(today);
  let year: any = local_today.getFullYear();
  let month = local_today.getMonth() + 1;
  let date = local_today.getDate();

  useEffect(() => {
    year = local_today.getFullYear();
    month = local_today.getMonth() + 1;
  }, [today]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <span style={{ fontWeight: "bold" }}>getMonthLength_Month1 </span>
        --- {getMonthLength_Month1(year, month)}
      </div>
    </div>
  );
}

export default TESTING;
