const attempts = ['kostas diakogiannis', 'daniel', 'Mauro Cifuentes Navarro', 'mohammed23'];
const nameRegex = /^[a-z\s]{3,30}$/i;

for (let attempt of attempts) {
  console.log(nameRegex.test(attempt));
}
