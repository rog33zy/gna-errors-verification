import React from "react";

import PhysicalShGrnsNotMatchingTable from "../UI/FaultySmallholdrGrnsTable/FaultySmallholdrGrnsTable";

const PhysicalShGrnsNotMatching = (props) => {
  const physicalGrnsSheetData = props.physicalGrnsSheetData;
  const shPaymentRequestsSheetData = props.shPaymentRequestsSheetData;

  function errorListHandler() {
    const final_list = [];
    for (let j = 0; j < physicalGrnsSheetData.length; j++) {
      const shPaymentRequestsSheetDataRow = shPaymentRequestsSheetData[j];
      let grn_number_sh;

      try {
        grn_number_sh = shPaymentRequestsSheetDataRow.grn_no_;
      } catch (error) {
        continue;
      }

      let base_amount_payable_sh =
        shPaymentRequestsSheetDataRow.base_amount_payable;

      if (base_amount_payable_sh < 0) {
        base_amount_payable_sh = 0;
      }

      for (let i = 0; i < shPaymentRequestsSheetData.length; i++) {
        const physicalGrnsSheetDataRow = physicalGrnsSheetData[i];
        let grn_number_physical;
        try {
          grn_number_physical = physicalGrnsSheetDataRow.grn_no_;
        } catch (error) {
          continue;
        }

        let base_amount_payable_physical =
          physicalGrnsSheetDataRow.base_amount_payable;

        if (base_amount_payable_physical < 0) {
          base_amount_payable_physical = 0;
        }

        if (grn_number_physical === grn_number_sh) {
          const doesBaseAmountPayableMatch =
            base_amount_payable_sh === base_amount_payable_physical;
          if (!doesBaseAmountPayableMatch) {
            final_list.push(shPaymentRequestsSheetDataRow);
          }
        }
      }
    }
    return final_list;
  }
  return (
    <div>
      <PhysicalShGrnsNotMatchingTable
        rows={errorListHandler()}
        title="Smallholdr and physical grns with different base amount values"
        is_faulty_grn={true}
      />
    </div>
  );
};

export default PhysicalShGrnsNotMatching;
