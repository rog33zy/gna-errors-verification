import React from "react";

import DuplicatePaymentRequestsTable from "../UI/DuplicatePaymentRequestsTable/DuplicatePaymentRequestsTable";

const DuplicatePaymentRequests = (props) => {
  const shPaymentRequestsSheetData = props.shPaymentsRequestsSheetData;
  console.log(shPaymentRequestsSheetData);

  function errorsListHandler() {
    const duplicatesList = [];
    const duplicateGuids = [];
    for (let i = 0; i < shPaymentRequestsSheetData.length; i++) {
      const sh_payment_requests_sheet_row_data_one =
        shPaymentRequestsSheetData[i];
      const guid_one = sh_payment_requests_sheet_row_data_one.guid;
      const farmer_one = sh_payment_requests_sheet_row_data_one.farmer;
      const seed_type_one = sh_payment_requests_sheet_row_data_one.variety;
      const net_value_of_seed_one =
        sh_payment_requests_sheet_row_data_one.net_value_of_seed;
      const gross_quantity__kg__one =
        sh_payment_requests_sheet_row_data_one.gross_quantity__kg_;

      for (let j = 0; j < shPaymentRequestsSheetData.length; j++) {
        const sh_payment_requests_sheet_row_data_two =
          shPaymentRequestsSheetData[j];
        const guid_two = sh_payment_requests_sheet_row_data_two.guid;

        const farmer_two = sh_payment_requests_sheet_row_data_two.farmer;
        const seed_type_two = sh_payment_requests_sheet_row_data_two.variety;
        const net_value_of_seed_two =
          sh_payment_requests_sheet_row_data_two.net_value_of_seed;
        const gross_quantity__kg__two =
          sh_payment_requests_sheet_row_data_two.gross_quantity__kg_;

        if (
          i !== j &&
          farmer_one === farmer_two &&
          seed_type_one === seed_type_two &&
          net_value_of_seed_one === net_value_of_seed_two &&
          gross_quantity__kg__one === gross_quantity__kg__two
        ) {
          if (!duplicateGuids.includes(guid_one)) {
            duplicatesList.push(sh_payment_requests_sheet_row_data_one);
            duplicateGuids.push(guid_one);
          }

          if (!duplicateGuids.includes(guid_two)) {
            duplicatesList.push(sh_payment_requests_sheet_row_data_two);
            duplicateGuids.push(guid_two);
          }
        }
      }
    }
    return duplicatesList;
  }

  return (
    <div>
      <DuplicatePaymentRequestsTable
        rows={errorsListHandler()}
        title="Duplicate Payment Requests"
      />
    </div>
  );
};

export default DuplicatePaymentRequests;
