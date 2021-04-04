import React from "react";

import CropsProfErrorTableOne from "../UI/CropsProfErrorTableOne/CropsProfErrorTableOne";

const CropsProfErrorOne = (props) => {
  const shCroppingProfilesSheetData = props.shCroppingProfilesSheetData;
  const shDownloadLoansSheetData = props.shDownloadLoansSheetData;

  function errorsListHandler() {
    for (let i = 0; i < shCroppingProfilesSheetData.length; i++) {
      if (shCroppingProfilesSheetData[i] === undefined) {
        continue;
      }
      const shCroppingProfileFarmerId = shCroppingProfilesSheetData[i].farmer
        .split("(GNA00000")[1]
        .split(")")[0];
      const shCroppingProfileSeedVariety = shCroppingProfilesSheetData[
        i
      ].crop.split("/")[1];
      for (let j = 0; j < shDownloadLoansSheetData.length; j++) {
        if (
          shDownloadLoansSheetData[j] === undefined ||
          shDownloadLoansSheetData[j].farmer === null
        ) {
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

        if (
          shDownloadsFarmerId === shCroppingProfileFarmerId &&
          shDownloadsSeedVariety === shCroppingProfileSeedVariety
        ) {
          shCroppingProfilesSheetData.splice(i, 1);
          shDownloadLoansSheetData.splice(j, 1);
          i -= 1;
          j -= 1;
          continue;
        } else {
          continue;
        }
      }
    }
    return shCroppingProfilesSheetData;
  }
  return (
    <div>
      <CropsProfErrorTableOne
        cropsProfList={true}
        isCheckingForFields={false}
        title="Cropping profiles that are not attached to loans"
        rows={errorsListHandler()}
      />
    </div>
  );
};

export default CropsProfErrorOne;
