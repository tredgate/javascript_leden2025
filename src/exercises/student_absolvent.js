const fullName = "Marie Dlouhá";
const minPoints = 75;
const actualPoints = 64;

if (actualPoints >= minPoints) {
  console.log(`Student/ka ${fullName} prospěl/a s ${actualPoints} body.`);
} else {
  console.log(
    `Student/ka ${fullName} neprospěl/a s ${actualPoints} body. Chybí ${
      minPoints - actualPoints
    } bodů k úspěšnému prospěchu.`
  );
}
