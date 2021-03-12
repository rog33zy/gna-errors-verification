import React from "react";

import DuplicatePurchaseRequestsTable from "../UI/DuplicatePurchaseRequestsTable/DuplicatePurchaseRequestsTable";

const DuplicatePurchaseRequests = (props) => {
  const shPurchaseRequestsSheetData = props.shPurchaseRequestsSheetData;

  function errorsListHandler() {
    const duplicatesList = [];
    const duplicateGuids = [];
    for (let i = 0; i < shPurchaseRequestsSheetData.length; i++) {
      const sh_purchase_requests_sheet_row_data_one =
        shPurchaseRequestsSheetData[i];
      const guid_one = sh_purchase_requests_sheet_row_data_one.guid;
      const farmer_one = sh_purchase_requests_sheet_row_data_one.farmer;
      const seed_type_one = sh_purchase_requests_sheet_row_data_one.seedtype;
      const total_value_one =
        sh_purchase_requests_sheet_row_data_one.total_value;
      const total_weight_one =
        sh_purchase_requests_sheet_row_data_one.total_weight;

      for (let j = 0; j < shPurchaseRequestsSheetData.length; j++) {
        const sh_purchase_requests_sheet_row_data_two =
          shPurchaseRequestsSheetData[j];
        const guid_two = sh_purchase_requests_sheet_row_data_two.guid;

        const farmer_two = sh_purchase_requests_sheet_row_data_two.farmer;
        const seed_type_two = sh_purchase_requests_sheet_row_data_two.seedtype;
        const total_value_two =
          sh_purchase_requests_sheet_row_data_two.total_value;
        const total_weight_two =
          sh_purchase_requests_sheet_row_data_two.total_weight;

        if (
          i !== j &&
          farmer_one === farmer_two &&
          seed_type_one === seed_type_two &&
          total_value_one === total_value_two &&
          total_weight_one === total_weight_two
        ) {
          if (!duplicateGuids.includes(guid_one)) {
            duplicatesList.push(sh_purchase_requests_sheet_row_data_one);
            duplicateGuids.push(guid_one);
          }

          if (!duplicateGuids.includes(guid_two)) {
            duplicatesList.push(sh_purchase_requests_sheet_row_data_two);
            duplicateGuids.push(guid_two);
          }
        }
      }
    }
    return duplicatesList;
  }

  return (
    <div>
      <DuplicatePurchaseRequestsTable
        rows={errorsListHandler()}
        title="Duplicate Purchase Requests"
      />
    </div>
  );
};

export default DuplicatePurchaseRequests;
