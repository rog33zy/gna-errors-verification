import React from "react";

import FieldsErrorTableOne from "../UI/CropsProfErrorTableOne/CropsProfErrorTableOne";

const FieldsErrorOne = (props) => {
  const shCroppingProfilesSheetData = props.shCroppingProfilesSheetData;
  const finalList = [];
  function errorsListHandler() {
    for (let i = 0; i < shCroppingProfilesSheetData.length; i++) {
      console.log(
        shCroppingProfilesSheetData[i].field,
        shCroppingProfilesSheetData.length
      );
      if (shCroppingProfilesSheetData[i].field === null) {
        finalList.push(shCroppingProfilesSheetData[i]);
        continue;
      }
    }
    console.log(finalList, "end");
    return finalList;
  }
  return (
    <div>
      <FieldsErrorTableOne
        cropsProfList={true}
        isCheckingForFields={true}
        title="Cropping profiles that are not attached to fields"
        rows={errorsListHandler()}
      />
    </div>
  );
};

export default FieldsErrorOne;
