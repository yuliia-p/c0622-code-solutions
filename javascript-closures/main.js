function graduate(credential) {
  return function (fullName) {
    return `${fullName}, ${credential}`;
  };
}

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

console.dir(medicalSchool);
console.dir(lawSchool);

console.log('medicalSchool:', medicalSchool('Yuliia Kozakova'));
console.log('lawSchool:', lawSchool('Yuliia Kozakova'));
