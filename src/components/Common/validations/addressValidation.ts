import data from "../uk-counties-list.json";
var SplitAdd;

// Split address into postcode addressline and other details
export function addressPostCodeCheck(addressLine: string) {
  let regexp = /\b((?:(?:gir)|(?:[a-pr-uwyz])(?:(?:[0-9](?:[a-hjkpstuw]|[0-9])?)|(?:[a-hk-y][0-9](?:[0-9]|[abehmnprv-y])?)))) ?([0-9][abd-hjlnp-uw-z]{2})\b/gi;
  SplitAdd = addressLine.split(",");
  SplitAdd.map((s) => s.trim().match(/([A-Za-z]{1,2}\d{1,2})(\s?(\d?\w{2}))?/));
  let checkValidPostCode = SplitAdd[SplitAdd.length - 1] || "";
  let check = regexp.test(checkValidPostCode);
  return {
    addressArray: SplitAdd,
    postCodeValidationRes: check,
    postCode: checkValidPostCode,
  };
}

// Get country and county for the address provided
export function countiesCheck(addressLine: string) {
  var result = data.filter(function (item) {
    return addressLine.includes(item.Bedfordshire);
  });
  console.log(result[0]);
  if (result[0]) {
    return {
      country: result[0].England,
      county: result[0].Bedfordshire,
    };
  } else {
    return {
      country: "UK",
      county: "",
    };
  }
}
