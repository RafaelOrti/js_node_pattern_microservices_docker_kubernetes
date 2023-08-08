// Ejemplo de middleware de autorización
function authorize(role) {
  return function (req, res, next) {
    // Lógica de autorización aquí
    // Verificar el rol del usuario y permitir o denegar el acceso
    // Si la autorización es exitosa, llamar a next()
    // Si la autorización falla, enviar una respuesta de error
  };
}

module.exports = authorize;
