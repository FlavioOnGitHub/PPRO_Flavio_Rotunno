// Fonction pour récupérer la valeur d'une variable CSS
function getCSSVariableValue(variableName) {
  // Accède aux styles du document
  const rootStyles = getComputedStyle(document.documentElement);
  // Récupère la valeur de la variable
  return rootStyles.getPropertyValue(variableName).trim();
}

// Récupère les valeurs des variables CSS
const color1 = getCSSVariableValue("--color-1");
const color2 = getCSSVariableValue("--color-2");
const color3 = getCSSVariableValue("--color-3");
