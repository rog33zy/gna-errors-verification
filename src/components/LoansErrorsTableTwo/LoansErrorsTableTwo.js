import React from "react";

import TableTwo from "../../components/UI/LoansErrorTableTwo/LoansErrorTableTwo";

const LoansErrorsTableTwo = (props) => {
  const combinedInputsLoansSheetData = props.combinedInputsLoansSheetData;
  const shDownloadLoansSheetData = props.shDownloadLoansSheetData;
  function errorsListHandler() {
    for (let i = 0; i < combinedInputsLoansSheetData.length; i++) {
      if (combinedInputsLoansSheetData[i] === undefined) {
        continue;
      }
      const combinedInputsFarmerId =
        combinedInputsLoansSheetData[i].id_card_number;
      const combinedInputsSeedVariety = combinedInputsLoansSheetData[i].variety;

      for (let j = 0; j < shDownloadLoansSheetData.length; j++) {
        if (
          shDownloadLoansSheetData[j] === undefined ||
          shDownloadLoansSheetData[j].farmer === null
        ) {
          continue;
        }
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
          shDownloadLoansSheetData.splice(j, 1);
          i -= 1;
          j -= 1;
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
