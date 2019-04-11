const attempts = ['https://www.twitter.com', 'http://www.google25.de', 'ftp://www.nobodycares.com', 'http://www.nobodycares.comman'];
const urlRegex = /^https?:\/{2}w{3}\.[\w\-]{2,50}\.[a-z]{2,4}$/i;

for (let attempt of attempts) {
  console.log(urlRegex.test(attempt));
}
