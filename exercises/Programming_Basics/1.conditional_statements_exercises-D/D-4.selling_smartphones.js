var customerWantsToBuy = true;
var wantsHeadphones = true;
var wantsCover = true;
var favoriteColor = 'cyan';
var smartphonePrice = 300;
var headphonesPrice = 50;
var coverPrice = 50;
var cashier = 0;

if (customerWantsToBuy) {
  cashier = smartphonePrice;

  if (wantsHeadphones && wantsCover) {
    cashier = (smartphonePrice + headphonesPrice + coverPrice) * 0.85;
  } else if (wantsHeadphones) {
    cashier = (smartphonePrice + headphonesPrice) * 0.9;
  } else if (wantsCover) {
    switch(favoriteColor) {
      case 'green':
        cashier = (smartphonePrice + coverPrice) * 0.93;
        break;
      case 'pink':
        cashier = (smartphonePrice + coverPrice) * 0.88;
        break;
      case 'orange':
        cashier = (smartphonePrice + coverPrice) * 0.85;
        break;
      default:
        cashier = (smartphonePrice + coverPrice) * 0.95;
    }
  }
}else {
  cashier = 0;
}

console.log(`My cashier after this buy is ${cashier}$`);
