const attempts = ['kostas#diakogianni$23@gmail.com', 'kostasdiakogiannis23@gmail.com', 'kostas.net'];
const mailRegex = /^[\w$\.#]{2,50}@[a-z]{4,20}\.(com|org|net)$/i;

for (let attempt of attempts) {
  console.log(mailRegex.test(attempt));
}
