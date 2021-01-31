import React from "react";

import TableTwo from "../../components/UI/LoansErrorTableTwo/LoansErrorTableTwo";

const LoansErrorsTableTwo = (props) => {
  const combinedInputsLoansSheetData = props.combinedInputsLoansSheetData;
  const shDownloadLoansSheetData = props.shDownloadLoansSheetData;

  function errorsListHandler() {
    for (let i = 0; i < combinedInputsLoansSheetData.length; i++) {
      const combinedInputsFarmerId =
        combinedInputsLoansSheetData[i].id_card_number;
      const combinedInputsSeedVariety = combinedInputsLoansSheetData[i].variety;
      for (let j = 0; j < shDownloadLoansSheetData.length; j++) {
        const shDownloadsFarmerId = shDownloadLoansSheetData[j].farmer
          .split("(GNA00000")[1]
          .split(")")[0];
        const shDownloadsSeedVariety = shDownloadLoansSheetData[j].seed_type
          .split("(")[0]
          .trim();

        if (
          combinedInputsFarmerId === shDownloadsFarmerId &&
          combinedInputsSeedVariety === shDownloadsSeedVariety
        ) {
          combinedInputsLoansSheetData.splice(i, 1);
          i -= 1;
          continue;
        } else {
          continue;
        }
      }
    }
    return combinedInputsLoansSheetData;
  }
  return (
    <div>
      <TableTwo
        title="Loan Entries that are in Google Sheets but are not in Smallholdr"
        rows={errorsListHandler()}
      />
    </div>
  );
};

export default LoansErrorsTableTwo;
