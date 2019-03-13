const telephoneData = [
  {countryCode: '0030', country: 'Greece'},
  {countryCode: '0039', country: 'Italy'},
  {countryCode: '00972', country: 'Israel'},
  {countryCode: '0007', country: 'Russia'},
  {countryCode: '0044', country: 'United Kingdom'},
  {countryCode: '0001', country: 'United States'},
  {countryCode: '00963', country: 'Syria'},
  {countryCode: '0029', country: 'Belgium'},
  {countryCode: '0031', country: 'Holland'},
  {countryCode: '0049', country: 'Germany'}
];

const findCountryByCode = code => {
  const foundCountry = telephoneData.find(countryInfo => countryInfo.countryCode === code);
  if (foundCountry) {
    return foundCountry.country;
  } else {
    return 'Country with the specific code was not found!';
  }
}

console.log(findCountryByCode('0039'));
console.log(findCountryByCode('0031'));
console.log(findCountryByCode('0025'));
