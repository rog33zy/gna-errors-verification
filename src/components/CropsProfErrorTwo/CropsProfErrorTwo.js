import React from "react";

import CropsProfErrorTableOne from "../UI/CropsProfErrorTableOne/CropsProfErrorTableOne";

const CropsProfErrorTwo = (props) => {
  const shCroppingProfilesSheetData = props.shCroppingProfilesSheetData;
  const shDownloadLoansSheetData = props.shDownloadLoansSheetData;

  function errorsListHandler() {
    for (let j = 0; j < shDownloadLoansSheetData.length; j++) {
      const shDownloadsFarmerId = shDownloadLoansSheetData[j].farmer
        .split("(GNA00000")[1]
        .split(")")[0];
      const shDownloadsSeedVariety = shDownloadLoansSheetData[j].seed_type
        .split("(")[0]
        .trim();
      for (let i = 0; i < shCroppingProfilesSheetData.length; i++) {
        const shCroppingProfileFarmerId = shCroppingProfilesSheetData[i].farmer
          .split("(GNA00000")[1]
          .split(")")[0];
        const shCroppingProfileSeedVariety = shCroppingProfilesSheetData[
          i
        ].crop.split("/")[1];

        if (
          shDownloadsFarmerId === shCroppingProfileFarmerId &&
          shDownloadsSeedVariety === shCroppingProfileSeedVariety
        ) {
          shDownloadLoansSheetData.splice(j, 1);
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
      <CropsProfErrorTableOne
        cropsProfList={false}
        title="Loans that are not attached to Cropping profiles"
        rows={errorsListHandler()}
      />
    </div>
  );
};

export default CropsProfErrorTwo;
