import React from "react";

import FaultySmallholdrGrnsTable from "../UI/FaultySmallholdrGrnsTable/FaultySmallholdrGrnsTable";

const FaultySmallholdrGrns = (props) => {
  const physicalGrnsSheetData = props.physicalGrnsSheetData;
  const shPaymentRequestsSheetData = props.shPaymentRequestsSheetData;

  function errorListHandler() {
    for (let j = 0; j < physicalGrnsSheetData.length; j++) {
      const shPaymentRequestsSheetDataRow = shPaymentRequestsSheetData[j];
      let grn_number_sh;

      try {
        grn_number_sh = shPaymentRequestsSheetDataRow.grn_no_;
      } catch (error) {
        continue;
      }

      for (let i = 0; i < shPaymentRequestsSheetData.length; i++) {
        const physicalGrnsSheetDataRow = physicalGrnsSheetData[i];
        let grn_number_physical;
        try {
          grn_number_physical = physicalGrnsSheetDataRow.grn_no_;
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
    return shPaymentRequestsSheetData;
  }
  return (
    <div>
      <FaultySmallholdrGrnsTable
        rows={errorListHandler()}
        title="Smallholdr grns without physical copies"
        is_faulty_grn={true}
      />
    </div>
  );
};

export default FaultySmallholdrGrns;
