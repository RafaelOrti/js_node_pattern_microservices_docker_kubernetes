microservices-app/
│
├── services/
│   ├── auth-service/
│   │   ├── src/
│   │   ├── test/
│   │   ├── Dockerfile
│   │   └── ...
│   │
│   ├── user-service/
│   │   ├── src/
│   │   ├── test/
│   │   ├── Dockerfile
│   │   └── ...
│   │
│   ├── order-service/
│   │   ├── src/
│   │   ├── test/
│   │   ├── Dockerfile
│   │   └── ...
│   │
│   └── ...
│
├── common/
│   ├── utils/
│   ├── constants/
│   ├── middlewares/
│   ├── validators/
│   └── ...
│
├── shared-libraries/
│   ├── logging/
│   ├── messaging/
│   └── ...
│
├── config/
│   ├── development/
│   │   ├── auth-service.json
│   │   ├── user-service.json
│   │   ├── order-service.json
│   │   └── ...
│   ├── production/
│   │   ├── auth-service.json
│   │   ├── user-service.json
│   │   ├── order-service.json
│   │   └── ...
│   └── ...
│
├── deployments/
│   ├── kubernetes/
│   │   ├── auth-service/
│   │   │   ├── deployment.yaml
│   │   │   ├── service.yaml
│   │   │   └── ...
│   │   ├── user-service/
│   │   │   ├── deployment.yaml
│   │   │   ├── service.yaml
│   │   │   └── ...
│   │   ├── order-service/
│   │   │   ├── deployment.yaml
│   │   │   ├── service.yaml
│   │   │   └── ...
│   │   └── ...
│   ├── docker-compose.yaml
│   ├── helm-charts/
│   │   ├── auth-service/
│   │   │   ├── Chart.yaml
│   │   │   ├── values.yaml
│   │   │   └── ...
│   │   ├── user-service/
│   │   │   ├── Chart.yaml
│   │   │   ├── values.yaml
│   │   │   └── ...
│   │   ├── order-service/
│   │   │   ├── Chart.yaml
│   │   │   ├── values.yaml
│   │   │   └── ...
│   │   └── ...
│   └── ...
│
├── scripts/
│   ├── setup.sh
│   ├── deploy.sh
│   ├── test.sh
│   └── ...
│
├── .gitignore
├── .env.example
├── README.md
└── package.json
