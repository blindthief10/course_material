const attempts = ['0049 15770452536', '015770452536', '00491577 0452536', '004915 77 04 52 5 36', '015770452536 5'];
const regexCellphone = /^(0049|0)\s?(\d\s?){11}$/i;

for (let attempt of attempts) {
  console.log(regexCellphone.test(attempt));
}
