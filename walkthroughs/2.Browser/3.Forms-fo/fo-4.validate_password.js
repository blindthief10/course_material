const attempts = ['blindthief@10', 'marcelo21', 'mypassword23', 'this should fail'];
const passwordRegex = /^[\S]{8,20}$/i;

for (let attempt of attempts) {
  console.log(passwordRegex.test(attempt));
}
