#!/bin/bash

# Definir los nombres de los servicios y las rutas de los archivos de implementación
SERVICES=("auth-service" "order-service" "user-service")
K8S_DEPLOYMENT_DIR="deployments/kubernetes"

# Loop a través de los servicios y aplicar las implementaciones
for SERVICE in "${SERVICES[@]}"; do
  echo "Deploying $SERVICE..."
  kubectl apply -f "$K8S_DEPLOYMENT_DIR/$SERVICE/deployment.yaml"
  kubectl apply -f "$K8S_DEPLOYMENT_DIR/$SERVICE/service.yaml"
  echo "$SERVICE deployed successfully!"
done

echo "Deployment completed for all services."
