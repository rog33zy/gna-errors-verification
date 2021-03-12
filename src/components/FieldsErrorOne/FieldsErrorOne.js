import React from "react";

import FieldsErrorTableOne from "../UI/CropsProfErrorTableOne/CropsProfErrorTableOne";

const FieldsErrorOne = (props) => {
  const shCroppingProfilesSheetData = props.shCroppingProfilesSheetData;

  function errorsListHandler() {
    const finalList = [];
    for (let i = 0; i < shCroppingProfilesSheetData.length; i++) {
      if (shCroppingProfilesSheetData[i].field === null) {
        finalList.push(shCroppingProfilesSheetData[i]);
        continue;
      }
    }
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
