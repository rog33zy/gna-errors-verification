import React from "react";

import Table from "../UI/LoansErrorTableOne/LoansErrorTableOne";

const LoansErrorsTableOne = (props) => {
  const combinedInputsLoansSheetData = props.combinedInputsLoansSheetData;
  const shDownloadLoansSheetData = props.shDownloadLoansSheetData;

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
        combinedInputsLoansSheetData[i].seed_quantity_received__kg_;
      if (
        combinedInputsSeedQuantityReceived === null ||
        typeof combinedInputsSeedQuantityReceived === "string"
      ) {
        combinedInputsSeedQuantityReceived = 0;
      }
      var combinedInputsFertilizerQuantity =
        combinedInputsLoansSheetData[i].fertilizer_bags;
      if (
        combinedInputsFertilizerQuantity === null ||
        typeof combinedInputsFertilizerQuantity === "string"
      ) {
        combinedInputsFertilizerQuantity = 0;
      }
      var combinedInputsInoculantQuantity =
        combinedInputsLoansSheetData[i].inoculant_quantity;
      if (
        combinedInputsInoculantQuantity === null ||
        typeof combinedInputsInoculantQuantity === "string"
      ) {
        combinedInputsInoculantQuantity = 0;
      }
      var combinedInputsGlyphosateQuantity =
        combinedInputsLoansSheetData[i].glyphosate_quantity;
      if (
        combinedInputsGlyphosateQuantity === null ||
        typeof combinedInputsGlyphosateQuantity === "string"
      ) {
        combinedInputsGlyphosateQuantity = 0;
      }
      var combinedInputsPostEmergenceHerbicideQuantity =
        combinedInputsLoansSheetData[i].post_emergency_herbicide_quantity;
      if (
        combinedInputsPostEmergenceHerbicideQuantity === null ||
        typeof combinedInputsPostEmergenceHerbicideQuantity === "string"
      ) {
        combinedInputsPostEmergenceHerbicideQuantity = 0;
      }
      var combinedInputsInsecticideType =
        combinedInputsLoansSheetData[i].insecticide_type;
      if (combinedInputsInsecticideType === null) {
        combinedInputsInsecticideType = "pack (322892)";
      }

      if (combinedInputsInsecticideType === "Cypermetherin") {
        combinedInputsInsecticideType = "pack (322892)";
      }

      if (combinedInputsInsecticideType === "Acetamide") {
        combinedInputsInsecticideType = "pack (322890)";
      }

      var combinedInputsInsecticideQuantity =
        combinedInputsLoansSheetData[i].insecticide_quantity;
      if (
        combinedInputsInsecticideQuantity === null ||
        typeof combinedInputsInsecticideQuantity === "string"
      ) {
        combinedInputsInsecticideQuantity = 0;
      }
      var combinedInputsFungicideQuantity =
        combinedInputsLoansSheetData[i].fungicide_quantity;
      if (
        combinedInputsFungicideQuantity === null ||
        typeof combinedInputsFungicideQuantity === "string"
      ) {
        combinedInputsFungicideQuantity = 0;
      }
      var combinedInputsAdditionalSeed =
        combinedInputsLoansSheetData[i].additional_seed_received__kg_;
      if (
        combinedInputsAdditionalSeed === null ||
        typeof combinedInputsAdditionalSeed === "string"
      ) {
        combinedInputsAdditionalSeed = 0;
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

        let shDownloadsAreaOfLand = shDownloadLoansSheetData[j].area_of_land;

        if (shDownloadsAreaOfLand === null) {
          shDownloadsAreaOfLand = 0;
        }

        let shDownloadsSeedQuantityReceived =
          shDownloadLoansSheetData[j].amount_seeds;
        if (shDownloadsSeedQuantityReceived === null) {
          shDownloadsSeedQuantityReceived = 0;
        }
        let shDownloadsFertilizerQuantity =
          shDownloadLoansSheetData[j].amount_fertilizer;

        if (shDownloadsFertilizerQuantity === null) {
          shDownloadsFertilizerQuantity = 0;
        }
        let shDownloadsInoculantQuantity =
          shDownloadLoansSheetData[j].amount_inoculant;

        if (shDownloadsInoculantQuantity === null) {
          shDownloadsInoculantQuantity = 0;
        }
        let shDownloadsGlyphosateQuantity =
          shDownloadLoansSheetData[j].amount_glyphosate;

        if (shDownloadsGlyphosateQuantity === null) {
          shDownloadsGlyphosateQuantity = 0;
        }
        let shDownloadsPostEmergenceHerbicideQuantity =
          shDownloadLoansSheetData[j].amount_post_emerg_herbicide;
        if (shDownloadsPostEmergenceHerbicideQuantity === null) {
          shDownloadsPostEmergenceHerbicideQuantity = 0;
        }
        let shDownloadsInsecticideType =
          shDownloadLoansSheetData[j].insecticide;
        if (
          shDownloadsInsecticideType === null ||
          shDownloadsInsecticideType === "kg (94243)"
        ) {
          shDownloadsInsecticideType = "pack (322892)";
        }
        let shDownloadsInsecticideQuantity =
          shDownloadLoansSheetData[j].amount_insecticide;
        if (shDownloadsInsecticideQuantity === null) {
          shDownloadsInsecticideQuantity = 0;
        }
        let shDownloadsFungicideQuantity =
          shDownloadLoansSheetData[j].amount_fungicide;

        if (shDownloadsFungicideQuantity === null) {
          shDownloadsFungicideQuantity = 0;
        }
        let shDownloadsAdditionalSeed =
          shDownloadLoansSheetData[j].additional_seed_delivered;

        if (shDownloadsAdditionalSeed === null) {
          shDownloadsAdditionalSeed = 0;
        }

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
          const doesFertilizerQuantityMatch =
            combinedInputsFertilizerQuantity === shDownloadsFertilizerQuantity;
          const doesInoculantQuantityMatch =
            combinedInputsInoculantQuantity === shDownloadsInoculantQuantity;
          const doesGlyphosateQuantityMatch =
            combinedInputsGlyphosateQuantity === shDownloadsGlyphosateQuantity;
          const doesPostEmergenceHerbicideQuantityMatch =
            combinedInputsPostEmergenceHerbicideQuantity ===
            shDownloadsPostEmergenceHerbicideQuantity;
          const doesInsecticideTypeMatch =
            combinedInputsInsecticideType === shDownloadsInsecticideType;
          const doesInsecticideQuantityMatch =
            combinedInputsInsecticideQuantity ===
            shDownloadsInsecticideQuantity;
          const doesFungicideQuantityMatch =
            combinedInputsFungicideQuantity === shDownloadsFungicideQuantity;
          const doesAdditionalSeedMatch =
            combinedInputsAdditionalSeed === shDownloadsAdditionalSeed;

          if (
            !doesFarmerCategoryMatch ||
            !doesAreaOfLandMatch ||
            !doesSeedQuantityReceivedMatch ||
            !doesFertilizerQuantityMatch ||
            !doesInoculantQuantityMatch ||
            !doesGlyphosateQuantityMatch ||
            !doesPostEmergenceHerbicideQuantityMatch ||
            !doesInsecticideTypeMatch ||
            !doesInsecticideQuantityMatch ||
            !doesFungicideQuantityMatch ||
            !doesAdditionalSeedMatch
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
              seed_quantity_received:
                shDownloadsSeedQuantityReceived +
                matchesOrNah(doesSeedQuantityReceivedMatch),
              fertilizer_quantity:
                shDownloadsFertilizerQuantity +
                matchesOrNah(doesFertilizerQuantityMatch),
              inoculant_quantity:
                shDownloadsInoculantQuantity +
                matchesOrNah(doesInoculantQuantityMatch),
              glyphosateQuantity:
                shDownloadsGlyphosateQuantity +
                matchesOrNah(doesGlyphosateQuantityMatch),
              post_emergence_herbicide_quantity:
                shDownloadsPostEmergenceHerbicideQuantity +
                matchesOrNah(doesPostEmergenceHerbicideQuantityMatch),
              insecticide_type:
                shDownloadsInsecticideType +
                matchesOrNah(doesInsecticideTypeMatch),
              insecticide_quantity:
                shDownloadsInsecticideQuantity +
                matchesOrNah(doesInsecticideQuantityMatch),
              fungicide_quantity:
                shDownloadsFungicideQuantity +
                matchesOrNah(doesFungicideQuantityMatch),
              additional_seed_delivered:
                shDownloadsAdditionalSeed +
                matchesOrNah(doesAdditionalSeedMatch),
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
