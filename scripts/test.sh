#!/bin/bash

# Ejecutar pruebas para cada servicio
SERVICES=("auth-service" "order-service" "user-service")

for SERVICE in "${SERVICES[@]}"; do
  echo "Running tests for $SERVICE..."
  cd "services/$SERVICE"
  npm test
  cd -
done

echo "All tests completed."
