import React from "react";

import CropsProfErrorTableOne from "../UI/CropsProfErrorTableOne/CropsProfErrorTableOne";

const CropsProfErrorTwo = (props) => {
  const shCroppingProfilesSheetData = props.shCroppingProfilesSheetData;
  const shDownloadLoansSheetData = props.shDownloadLoansSheetData;

  function errorsListHandler() {
    for (let j = 0; j < shDownloadLoansSheetData.length; j++) {
      if (shDownloadLoansSheetData[j] === undefined) {
        continue;
      }
      if (shDownloadLoansSheetData[j].farmer === null) {
        shDownloadLoansSheetData.splice(j, 1);
        j -= 1;
        continue;
      }
      let shDownloadsFarmerId;

      try {
        shDownloadsFarmerId = shDownloadLoansSheetData[j].farmer
          .split("(GNA00000")[1]
          .split(")")[0];
      } catch (error) {
        continue;
      }
      let shDownloadsSeedVariety;

      try {
        shDownloadsSeedVariety = shDownloadLoansSheetData[j].seed_type
          .split("(")[0]
          .trim();
      } catch (error) {
        continue;
      }

      for (let i = 0; i < shCroppingProfilesSheetData.length; i++) {
        if (shCroppingProfilesSheetData[i] === undefined) {
          continue;
        }
        let shCroppingProfileFarmerId;
        try {
          shCroppingProfileFarmerId = shCroppingProfilesSheetData[i].farmer
            .split("(GNA00000")[1]
            .split(")")[0];
        } catch (error) {
          continue;
        }
        const shCroppingProfileSeedVariety = shCroppingProfilesSheetData[
          i
        ].crop.split("/")[1];

        if (
          shDownloadsFarmerId === shCroppingProfileFarmerId &&
          shDownloadsSeedVariety === shCroppingProfileSeedVariety
        ) {
          shDownloadLoansSheetData.splice(j, 1);
          shCroppingProfilesSheetData.splice(i, 1);
          j -= 1;
          i -= 1;
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
      <CropsProfErrorTableOne
        cropsProfList={false}
        title="Loans that are not attached to Cropping profiles"
        rows={errorsListHandler()}
      />
    </div>
  );
};

export default CropsProfErrorTwo;
