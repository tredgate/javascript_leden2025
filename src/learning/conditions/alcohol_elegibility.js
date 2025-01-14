// conditions
// alcohol_elegibility.js
const actualAge = 19;
const drinkingAgeLimit = 18;
const fullName = "Pepa Novotný";

if (actualAge >= drinkingAgeLimit) {
  // { - Pravý ALT + B, } - Pravý ALT + N
  // blok se provede, pokud je výrok v if true
  console.log(`${fullName} už může pít alkohol`); // ` NENÍ NORMÁLNÍ APOSTROF! Pravý ALT + ý, $ - Pravý ALT + ů
} else if (actualAge >= 0) {
  // blok se provede, pokud je výrok v if false
  console.log(
    `${fullName} nemůže ještě pít alkohol. Chybí mu/jí ještě ${
      drinkingAgeLimit - actualAge
    } rok/let.`
  ); // `` značí template literals (můžu vkládat kousky kódu do textu pomocí ${})
} else {
  console.log("CHYBA: Věk musí být větší než 0");
}

// 8 == "8" => TRUE
// 8 === "8" => FALSE (number není string)
