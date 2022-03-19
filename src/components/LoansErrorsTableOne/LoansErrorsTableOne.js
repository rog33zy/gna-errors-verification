import React from "react";

import Table from "../UI/LoansErrorTableOne/LoansErrorTableOne";

const LoansErrorsTableOne = (props) => {
  const combinedInputsLoansSheetData = props.combinedInputsLoansSheetData;
  const shDownloadLoansSheetData = props.shDownloadLoansSheetData;

  console.log(combinedInputsLoansSheetData);
  console.log(shDownloadLoansSheetData);

  function matchesOrNah(boolValue) {
    if (boolValue) {
      return " (Matches)";
    } else {
      return " (Doesn't Match)";
    }
  }

  function errorsListHandler() {
    const finalList = [];
    for (var i = 0; i < combinedInputsLoansSheetData.length; i++) {
      if (shDownloadLoansSheetData.length === 0) {
        break;
      }

      const combinedInputsFarmerId =
        combinedInputsLoansSheetData[i].id_card_number;
      const combinedInputsSeedVariety = combinedInputsLoansSheetData[i].variety;
      const combinedInputsFirstName =
        combinedInputsLoansSheetData[i].first_name;
      const combinedInputsLastName = combinedInputsLoansSheetData[i].last_name;

      let combinedInputsFarmerCategory;
      try {
        combinedInputsFarmerCategory = combinedInputsLoansSheetData[
          i
        ].farmer_classification.toLowerCase();
      } catch (error) {
        combinedInputsFarmerCategory = "blank";
      }

      const combinedInputsAreaOfLand =
        combinedInputsLoansSheetData[i].area_of_land__ha_;

      var combinedInputsSeedQuantityReceived =
        combinedInputsLoansSheetData[i].total_seed_quantity_received__kg_;
      if (
        combinedInputsSeedQuantityReceived === null ||
        typeof combinedInputsSeedQuantityReceived === "string"
      ) {
        combinedInputsSeedQuantityReceived = 0;
      }

      var combinedInputsSoyInoculantQuantity =
        combinedInputsLoansSheetData[i].soybean_inoculant_qty;
      if (
        combinedInputsSoyInoculantQuantity === null ||
        typeof combinedInputsSoyInoculantQuantity === "string"
      ) {
        combinedInputsSoyInoculantQuantity = 0;
      }

      var combinedInputsGroundnutsInoculantQuantity =
        combinedInputsLoansSheetData[i].groundnut_inoculant_qty;
      if (
        combinedInputsGroundnutsInoculantQuantity === null ||
        typeof combinedInputsGroundnutsInoculantQuantity === "string"
      ) {
        combinedInputsGroundnutsInoculantQuantity = 0;
      }

      var combinedInputsMAPFertilizerQuantity =
        combinedInputsLoansSheetData[i].fertilizer_map_qty;
      if (
        combinedInputsMAPFertilizerQuantity === null ||
        typeof combinedInputsMAPFertilizerQuantity === "string"
      ) {
        combinedInputsMAPFertilizerQuantity = 0;
      }

      var combinedInputsSoyaMixAFertilizerQuantity =
        combinedInputsLoansSheetData[i].fertilizer_soya_mix_a_qty;
      if (
        combinedInputsSoyaMixAFertilizerQuantity === null ||
        typeof combinedInputsSoyaMixAFertilizerQuantity === "string"
      ) {
        combinedInputsSoyaMixAFertilizerQuantity = 0;
      }

      var combinedInputsUreaFertilizerQuantity =
        combinedInputsLoansSheetData[i].urea_qty;
      if (
        combinedInputsUreaFertilizerQuantity === null ||
        typeof combinedInputsUreaFertilizerQuantity === "string"
      ) {
        combinedInputsUreaFertilizerQuantity = 0;
      }

      var combinedInputsGypsumQuantity =
        combinedInputsLoansSheetData[i].gypsum_qty;
      if (
        combinedInputsGypsumQuantity === null ||
        typeof combinedInputsGypsumQuantity === "string"
      ) {
        combinedInputsGypsumQuantity = 0;
      }

      var combinedInputsGlyphosateQuantity =
        combinedInputsLoansSheetData[i].glyphosate_qty;
      if (
        combinedInputsGlyphosateQuantity === null ||
        typeof combinedInputsGlyphosateQuantity === "string"
      ) {
        combinedInputsGlyphosateQuantity = 0;
      }

      var combinedInputsDeltamethrinQuantity =
        combinedInputsLoansSheetData[i].deltamethrin_qty;
      if (
        combinedInputsDeltamethrinQuantity === null ||
        typeof combinedInputsDeltamethrinQuantity === "string"
      ) {
        combinedInputsDeltamethrinQuantity = 0;
      }

      var combinedInputsAcetamipridQuantity =
        combinedInputsLoansSheetData[i].acetamiprid_qty;
      if (
        combinedInputsAcetamipridQuantity === null ||
        typeof combinedInputsAcetamipridQuantity === "string"
      ) {
        combinedInputsAcetamipridQuantity = 0;
      }

      var combinedInputsXP16SprayerQuantity =
        combinedInputsLoansSheetData[i].xp16_sprayer_qty;
      if (
        combinedInputsXP16SprayerQuantity === null ||
        typeof combinedInputsXP16SprayerQuantity === "string"
      ) {
        combinedInputsXP16SprayerQuantity = 0;
      }

      var combinedInputsHD400SprayerQuantity =
        combinedInputsLoansSheetData[i].hd400_sprayer_qty;
      if (
        combinedInputsHD400SprayerQuantity === null ||
        typeof combinedInputsHD400SprayerQuantity === "string"
      ) {
        combinedInputsHD400SprayerQuantity = 0;
      }

      for (var j = 0; j < shDownloadLoansSheetData.length; j++) {
        if (shDownloadLoansSheetData[j].farmer === null) {
          continue;
        }
        let shDownloadsFarmerId;

        try {
          shDownloadsFarmerId = shDownloadLoansSheetData[j].farmer
            .split("(GNA00000")[1]
            .split(")")[0];
        } catch (error) {
          shDownloadsFarmerId = "blank";
        }
        let shDownloadsSeedVariety;

        try {
          shDownloadsSeedVariety = shDownloadLoansSheetData[j].seed_type
            .split("(")[0]
            .trim();
        } catch (error) {
          shDownloadsSeedVariety = "blank";
        }

        let shDownloadsFarmerCategory;
        try {
          shDownloadsFarmerCategory = shDownloadLoansSheetData[
            j
          ].farmer_classification_grower_category.toLowerCase();
        } catch (error) {
          shDownloadsFarmerCategory = "blank";
        }

        if (shDownloadsFarmerCategory === "good_nature_green") {
          shDownloadsFarmerCategory = "good nature green";
        }

        let shDownloadsAreaOfLand = shDownloadLoansSheetData[j].area_of_land ?? 0;

        let shDownloadsSeedQuantityReceived =
          shDownloadLoansSheetData[j].amount_seeds ?? 0;

        var shDownloadsSoyInoculantQuantity =
          shDownloadLoansSheetData[j].amount_soy_inoculant ?? 0;

        let shDownloadsGroundnutsInoculantQuantity =
          shDownloadLoansSheetData[j].amount_groundnut_inoculant ?? 0;

        let shDownloadsFertMAPQuantity =
          shDownloadLoansSheetData[j].amount_fertilizer_map ?? 0;

        let shDownloadsFertSoyaMixAQuantity =
          shDownloadLoansSheetData[j].amount_fertilizer_soya_mix_a ?? 0;

        let shDownloadsFertUreaQuantity =
          shDownloadLoansSheetData[j].amount_fertilizer_urea ?? 0;

        let shDownloadsGypsumQuantity =
          shDownloadLoansSheetData[j].amount_fertilizer_gypsum ?? 0;

        let shDownloadsGlyphosateQuantity =
          shDownloadLoansSheetData[j].amount_glyphosate ?? 0;

        let shDownloadsDeltamethrinQuantity =
          shDownloadLoansSheetData[j].amount_deltamethrin ?? 0;

        let shDownloadsAcetamipridQuantity =
          shDownloadLoansSheetData[j].amount_acetamiprid ?? 0;

        let shDownloadsXP160SprayerQuantity =
          shDownloadLoansSheetData[j].amount_xp160_sprayer ?? 0;

        let shDownloadsHD400SprayerQuantity =
          shDownloadLoansSheetData[j].amount_hd400_sprayer ?? 0;

        if (
          combinedInputsFarmerId === shDownloadsFarmerId &&
          combinedInputsSeedVariety === shDownloadsSeedVariety
        ) {

          const doesFarmerCategoryMatch =
            combinedInputsFarmerCategory === shDownloadsFarmerCategory;

          const doesAreaOfLandMatch =
            combinedInputsAreaOfLand === shDownloadsAreaOfLand;

          const doesSeedQuantityReceivedMatch =
            combinedInputsSeedQuantityReceived ===
            shDownloadsSeedQuantityReceived;

          const doesFertilizerMAPQuantityMatch =
            combinedInputsMAPFertilizerQuantity === shDownloadsFertMAPQuantity;

          const doesFertilizerSoyaMixAQuantityMatch =
            combinedInputsSoyaMixAFertilizerQuantity === shDownloadsFertSoyaMixAQuantity;

          const doesFertilizerUreaQuantityMatch =
            combinedInputsUreaFertilizerQuantity === shDownloadsFertUreaQuantity;

          const doesGypsumQuantityMatch = combinedInputsGypsumQuantity === shDownloadsGypsumQuantity;

          const doesSoyInoculantQuantityMatch =
            combinedInputsSoyInoculantQuantity === shDownloadsSoyInoculantQuantity;

          const doesGroundnutsInoculantQuantityMatch =
            combinedInputsGroundnutsInoculantQuantity === shDownloadsGroundnutsInoculantQuantity;

          const doesGlyphosateQuantityMatch =
            combinedInputsGlyphosateQuantity === shDownloadsGlyphosateQuantity;

          const doesDeltamethrinQuantityMatch = combinedInputsDeltamethrinQuantity === shDownloadsDeltamethrinQuantity;

          const doesAcemtamipridQuanityMatch = combinedInputsAcetamipridQuantity === shDownloadsAcetamipridQuantity;

          const doesXP160SprayerQuantityMatch = combinedInputsXP16SprayerQuantity === shDownloadsXP160SprayerQuantity;

          const doesHD400SprayerQuantityMatch = combinedInputsHD400SprayerQuantity === shDownloadsHD400SprayerQuantity;

          if (
            !doesFarmerCategoryMatch ||
            !doesAreaOfLandMatch ||
            !doesSeedQuantityReceivedMatch ||
            !doesFertilizerMAPQuantityMatch ||
            !doesFertilizerSoyaMixAQuantityMatch ||
            !doesFertilizerUreaQuantityMatch ||
            !doesGypsumQuantityMatch ||
            !doesGlyphosateQuantityMatch ||
            !doesSoyInoculantQuantityMatch ||
            !doesGroundnutsInoculantQuantityMatch ||
            !doesDeltamethrinQuantityMatch ||
            !doesAcemtamipridQuanityMatch ||
            !doesXP160SprayerQuantityMatch ||
            !doesHD400SprayerQuantityMatch
          ) {
            finalList.push({
              farmer_id: shDownloadsFarmerId,
              seed_variety: shDownloadsSeedVariety,
              farmer_name: `${combinedInputsFirstName} ${combinedInputsLastName}`,
              farmer_category:
                shDownloadsFarmerCategory +
                matchesOrNah(doesFarmerCategoryMatch),
              area_of_land:
                shDownloadsAreaOfLand + matchesOrNah(doesAreaOfLandMatch),
              total_seed_quantity_received:
                shDownloadsSeedQuantityReceived +
                matchesOrNah(doesSeedQuantityReceivedMatch),
              soybean_inoculant_quantity: shDownloadsSoyInoculantQuantity + matchesOrNah(doesSoyInoculantQuantityMatch),
              groundnut_inoculant_quantity: shDownloadsGroundnutsInoculantQuantity + matchesOrNah(doesGroundnutsInoculantQuantityMatch),
              fertilizer_map_quantity:
                shDownloadsFertMAPQuantity +
                matchesOrNah(doesFertilizerMAPQuantityMatch),
              fertilizer_soy_mix_a_quantity:
                shDownloadsFertSoyaMixAQuantity +
                matchesOrNah(doesFertilizerSoyaMixAQuantityMatch),
              fertilizer_urea_quantity:
                shDownloadsFertUreaQuantity +
                matchesOrNah(doesFertilizerUreaQuantityMatch),
              gypsum_quantity: shDownloadsGypsumQuantity + matchesOrNah(doesGypsumQuantityMatch),
              glyphosate_quantity: shDownloadsGlyphosateQuantity + matchesOrNah(doesGlyphosateQuantityMatch),
              deltamethrin_quantity: shDownloadsDeltamethrinQuantity + matchesOrNah(doesDeltamethrinQuantityMatch),
              acetamiprid_quantity: shDownloadsAcetamipridQuantity + matchesOrNah(doesAcemtamipridQuanityMatch),
              xp16_sprayer_quantity: shDownloadsXP160SprayerQuantity + matchesOrNah(doesXP160SprayerQuantityMatch),
              hd400_sprayer_quantity: shDownloadsHD400SprayerQuantity + matchesOrNah(doesHD400SprayerQuantityMatch),
            });
          } else {
            continue;
          }
        } else {
          continue;
        }
      }
    }
    return finalList;
  }
  return (
    <div>
      <Table
        title="Loan Entries that Do Not Match in SH and Google Sheets"
        rows={errorsListHandler()}
      />
    </div>
  );
};

export default LoansErrorsTableOne;
