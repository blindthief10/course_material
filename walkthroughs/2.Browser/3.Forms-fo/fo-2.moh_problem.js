const attempts = ['Mohammed', 'Mohamad', 'Muhammad', 'Mohamed', 'Muhammod'];
const myRegex = /^m(o|u)hamm?(a|e)d$/i;

for (let attempt of attempts) {
  console.log(myRegex.test(attempt));
}
