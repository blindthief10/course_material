var potentialBuyer = true;
var buyHeadphones = true;
var buyCover = true;
var favoriteColor = 'pink';
var smartphonePrice = 300;
var headphonesPrice = 50;
var coverPrice = 20;
var cashier = 0;

if (potentialBuyer) {
  cashier = smartphonePrice;

              if (buyHeadphones) {
                cashier = (smartphonePrice + headphonesPrice + coverPrice) * 0.85;
              } else if (buyHeadphones && buyCover) {
                cashier = (smartphonePrice + headphonesPrice) * 0.9;
              } else if (buyCover) {
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

console.log(`My cashier after this buy is ${cashier}`);
