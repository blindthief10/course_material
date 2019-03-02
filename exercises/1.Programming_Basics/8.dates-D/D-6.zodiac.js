class Zodiac {
  constructor(sign, beginDate, endDate) {
    this.sign = sign;
    this.beginDate = beginDate;
    this.endDate = endDate;
  }
}

const aries = new Zodiac('Aries', new Date(2020, 2, 21), new Date(2020, 3, 19));
const taurus = new Zodiac('Taurus', new Date(2020, 3, 20), new Date(2020, 4, 20));
const gemini = new Zodiac('Gemini', new Date(2020, 4, 21), new Date(2020, 5, 20));
const cancer = new Zodiac('Cancer', new Date(2020, 5, 21), new Date(2020, 6, 22));
const leo = new Zodiac('Leo', new Date(2020, 6, 23), new Date(2020, 7, 22));
const virgo = new Zodiac('Virgo', new Date(2020, 7, 23), new Date(2020, 8, 22));
const libra = new Zodiac('Libra', new Date(2020, 8, 23), new Date(2020, 9, 22));
const scorpio = new Zodiac('Scorpio', new Date(2020, 9, 23), new Date(2020, 10, 21));
const sagittarius = new Zodiac('Sagittarius', new Date(2020, 10, 22), new Date(2020, 11, 21));
const capricorn = new Zodiac('Capricorn', new Date(2020, 11, 22), new Date(2021, 0, 19));
const aquarius = new Zodiac('Aquarius', new Date(2020, 0, 20), new Date(2020, 1, 19));
const pisces = new Zodiac('Pisces', new Date(2020, 1, 20), new Date(2020, 2, 20));

const allZodiacs = [aries, taurus, gemini, cancer, leo, virgo, libra, scorpio, sagittarius, capricorn, aquarius, pisces];

const myBirthday = new Date(1988, 2, 23);
const suesBirthday = new Date(1981, 1, 19);
const meirsBirthDay = new Date(1984, 0, 4);
const brothersBirthDay = new Date(1983, 11, 18);
const showZodiac = function(birthday) {
  birthday.getMonth() === 0 && birthday.getDate() < 20 ? birthday.setYear(2021) : birthday.setYear(2020);
  for (let zodiac of allZodiacs) {
    if (birthday >= zodiac.beginDate && birthday <= zodiac.endDate) {
      console.log(`Your zodiac is ${zodiac.sign}`);
    }
  }
}

showZodiac(myBirthday);
showZodiac(suesBirthday);
showZodiac(meirsBirthDay);
showZodiac(brothersBirthDay);
