import React from "react";

import TableThree from "../../components/UI/LoansErrorTableThree/LoansErrorTableThree";

const LoansErrorsTableThree = (props) => {
  const combinedInputsLoansSheetData = props.combinedInputsLoansSheetData;
  const shDownloadLoansSheetData = props.shDownloadLoansSheetData;

  function errorsListHandler() {
    for (let i = 0; i < shDownloadLoansSheetData.length; i++) {
      if (shDownloadLoansSheetData[i] === undefined) {
        continue;
      }

      let shDownloadsFarmerId;

      try {
        shDownloadsFarmerId = shDownloadLoansSheetData[i].farmer
          .split("(GNA00000")[1]
          .split(")")[0];
      } catch (error) {
        continue;
      }

      let shDownloadsSeedVariety;

      try {
        shDownloadsSeedVariety = shDownloadLoansSheetData[i].seed_type
          .split("(")[0]
          .trim();
      } catch (error) {
        continue;
      }
      for (let j = 0; j < combinedInputsLoansSheetData.length; j++) {
        if (combinedInputsLoansSheetData[j] === undefined) {
          continue;
        }
        const combinedInputsFarmerId =
          combinedInputsLoansSheetData[j].id_card_number;

        const combinedInputsSeedVariety =
          combinedInputsLoansSheetData[j].variety;

        if (
          combinedInputsFarmerId === shDownloadsFarmerId &&
          combinedInputsSeedVariety === shDownloadsSeedVariety
        ) {
          shDownloadLoansSheetData.splice(i, 1);
          combinedInputsLoansSheetData.splice(j, 1);
          i -= 1;
          j -= 1;
          continue;
        } else {
          continue;
        }
      }
    }
    return shDownloadLoansSheetData;
  }

  return (
    <div>
      <TableThree
        title="Loan Entries that are in Smallholdr but are not in Google Sheets"
        rows={errorsListHandler()}
      />
    </div>
  );
};

export default LoansErrorsTableThree;
