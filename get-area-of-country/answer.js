const areaOfCountry = (country, size) => {
  return country + ' is ' +(size / 148940000 * 100).toFixed(2) + "% of the total world's landmass";
};

const country = "Russia"; 
const size = 17098242;

areaOfCountry(country, size);

