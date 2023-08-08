#!/bin/bash

# Instalar las dependencias de cada servicio
SERVICES=("auth-service" "order-service" "user-service")

for SERVICE in "${SERVICES[@]}"; do
  echo "Setting up $SERVICE..."
  cd "services/$SERVICE"
  npm install
  cd -
  echo "$SERVICE set up successfully!"
done

# Construir las imágenes Docker para cada servicio
for SERVICE in "${SERVICES[@]}"; do
  echo "Building Docker image for $SERVICE..."
  cd "services/$SERVICE"
  docker build -t "$SERVICE" .
  cd -
  echo "Docker image for $SERVICE built successfully!"
done

echo "Setup completed for all services."
