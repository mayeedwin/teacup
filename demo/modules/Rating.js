// abbreviate values with "K, M, T"
export const abbreviateRating = rateValue => {
  let newValue = rateValue;
  if (rateValue >= 1000) {
    let suffixes = ["", "K", "M", "B", "T"];
    let suffixNum = Math.floor(("" + rateValue).length / 3);
    let shortValue = "";
    for (let precision = 2; precision >= 1; precision--) {
      shortValue = parseFloat(
        (suffixNum != 0
          ? rateValue / Math.pow(1000, suffixNum)
          : rateValue
        ).toPrecision(precision)
      );
      let dotLessShortValue = (shortValue + "").replace(/[^a-zA-Z 0-9]+/g, "");
      if (dotLessShortValue.length <= 2) {
        break;
      }
    }
    if (shortValue % 1 != 0) shortValue = shortValue.toFixed(1);
    newValue = shortValue + suffixes[suffixNum];
  }
  return newValue;
};
