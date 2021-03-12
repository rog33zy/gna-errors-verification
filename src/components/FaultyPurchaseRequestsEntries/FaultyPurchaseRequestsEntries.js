import React from "react";

import FaultyPurchaseRequestsEntriesTable from "../UI/DuplicatePurchaseRequestsTable/DuplicatePurchaseRequestsTable";

const FaultyPurchaseRequestsEntries = (props) => {
  const shPurchaseRequestsSheetData = props.shPurchaseRequestsSheetData;
  const shPaymentsRequestsSheetData = props.shPaymentsRequestsSheetData;

  function errorsListHandler() {
    for (let i = 0; i < shPurchaseRequestsSheetData.length; i++) {
      const shPurchaseRequestsSheetDataRow = shPurchaseRequestsSheetData[i];

      let farmer_purchase_req;
      try {
        farmer_purchase_req = shPurchaseRequestsSheetDataRow.farmer.trim();
        farmer_purchase_req = farmer_purchase_req.replace(/\s\s+/g, " ");
      } catch (error) {
        continue;
      }

      let variety_purchase_req;
      try {
        variety_purchase_req = shPurchaseRequestsSheetDataRow.seedtype.split(
          "/"
        )[1];
      } catch (error) {
        continue;
      }

      let total_weight_purchase_req;
      try {
        total_weight_purchase_req = shPurchaseRequestsSheetDataRow.total_weight;
      } catch (error) {
        continue;
      }

      let total_value_purchase_req;
      try {
        total_value_purchase_req = shPurchaseRequestsSheetDataRow.total_value;
        if (total_value_purchase_req < 0) {
          total_value_purchase_req = 0;
        }
      } catch (error) {
        continue;
      }

      for (let j = 0; j < shPaymentsRequestsSheetData.length; j++) {
        const shPaymentsRequestsSheetDataRow = shPaymentsRequestsSheetData[j];

        let farmer_payments_req;
        try {
          farmer_payments_req = shPaymentsRequestsSheetDataRow.farmer.trim();
          farmer_payments_req = farmer_payments_req.replace(/\s\s+/g, " ");
        } catch (error) {
          continue;
        }

        let variety_payments_req;
        try {
          variety_payments_req = shPaymentsRequestsSheetDataRow.variety.split(
            " "
          )[0];
        } catch (error) {
          continue;
        }

        let total_weight_payments_req;
        try {
          total_weight_payments_req =
            shPaymentsRequestsSheetDataRow.gross_quantity__kg_;
        } catch (error) {
          continue;
        }

        let total_value_payments_req;
        try {
          total_value_payments_req =
            shPaymentsRequestsSheetDataRow.net_value_of_seed;

          if (total_value_payments_req < 0) {
            total_value_payments_req = 0;
          }
        } catch (error) {
          continue;
        }

        if (
          farmer_purchase_req === farmer_payments_req &&
          variety_purchase_req === variety_payments_req &&
          total_value_purchase_req === total_value_payments_req &&
          total_weight_purchase_req === total_weight_payments_req
        ) {
          shPurchaseRequestsSheetData.splice(i, 1);
          shPaymentsRequestsSheetData.splice(j, 1);
          i -= 1;
          j -= 1;

          continue;
        } else {
          continue;
        }
      }
    }

    return shPurchaseRequestsSheetData;
  }
  return (
    <div>
      <FaultyPurchaseRequestsEntriesTable
        rows={errorsListHandler()}
        title="Purchase Requests With Errors"
        is_faulty_purchases={true}
      />
    </div>
  );
};

export default FaultyPurchaseRequestsEntries;
