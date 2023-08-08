// Ejemplo de función de ayuda para generar un ID único
function generateUniqueId() {
  return Math.random().toString(36).substr(2, 9);
}

module.exports = {
  generateUniqueId
};
