let bundesligaTeams = [
  'Bayern Munich',
  'Dortmund',
  'Schalke',
  'Wolfsburg',
  'Werder Bremen',
  'Bayer Leverkusen',
  'Leipzig',
  'Freiburg',
  'Mainz',
  'Nurnberg',
  'Eintracht Frankfurt',
  'Gladbach',
  'Hannover',
  'Hertha Berlin',
  'Hoffenheim',
  'Stuttgart',
  'Fortuna Dusseldorf',
  'Augsburg'
];

let jensHatedTeam = ['Bayern Munich', 'Hannover', 'Werder Bremen', 'Schalke', 'Leipzig', 'Augsburg'];


for (let team of bundesligaTeams) {
  if (jensHatedTeam.includes(team)) {
    continue;
  }
  console.log(team);
}
