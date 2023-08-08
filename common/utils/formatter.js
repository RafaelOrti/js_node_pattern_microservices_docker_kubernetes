// Ejemplo de formateador para capitalizar una cadena
function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = {
  capitalizeString
};
