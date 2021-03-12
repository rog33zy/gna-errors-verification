import React from "react";

import FaultyPhysicalGrnsTable from "../UI/FaultyPhysicalGrnsTable/FaultyPhysicalGrnsTable";

const FaultyPhysicalGrns = (props) => {
  const physicalGrnsSheetData = props.physicalGrnsSheetData;
  const shPaymentRequestsSheetData = props.shPaymentRequestsSheetData;

  function errorListHandler() {
    for (let i = 0; i < physicalGrnsSheetData.length; i++) {
      const physicalGrnsSheetDataRow = physicalGrnsSheetData[i];
      let grn_number_physical;
      try {
        grn_number_physical = physicalGrnsSheetDataRow.grn_no_;
      } catch (error) {
        continue;
      }

      for (let j = 0; j < shPaymentRequestsSheetData.length; j++) {
        const shPaymentRequestsSheetDataRow = shPaymentRequestsSheetData[j];
        let grn_number_sh;

        try {
          grn_number_sh = shPaymentRequestsSheetDataRow.grn_no_;
        } catch (error) {
          continue;
        }

        if (grn_number_physical === grn_number_sh) {
          physicalGrnsSheetData.splice(i, 1);
          shPaymentRequestsSheetData.splice(j, 1);
          i -= 1;
          j -= 1;
        }
      }
    }
    return physicalGrnsSheetData;
  }
  return (
    <div>
      <FaultyPhysicalGrnsTable
        rows={errorListHandler()}
        title="Physical grns not captured in smahllholdr"
      />
    </div>
  );
};

export default FaultyPhysicalGrns;
