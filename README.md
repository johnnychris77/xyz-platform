## 🚀 Future Enhancements

### 1. Continuous Deployment with Helm
Add GitHub Actions step to auto-deploy to Kubernetes:

```yaml
- name: Helm Deploy
  run: |
    helm upgrade --install admin-service ./helm/admin-service --namespace production

## 🚀 Helm Deployment

To deploy the `admin-service` to a Kubernetes cluster using Helm:

```bash
cd helm/admin-service
helm install admin-service .## 📦 Helm Chart Overview

### 📁 `templates/deployment.yaml`
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: admin-service
spec:
  replicas: 1
  selector:
    matchLabels:
      app: admin-service
  template:
    metadata:
      labels:
        app: admin-service
    spec:
      containers:
        - name: admin-service
          image: your-dockerhub-username/admin-service:latest
          ports:
            - containerPort: 3000
apiVersion: v1
kind: Service
metadata:
  name: admin-service
spec:
  selector:
    app: admin-service
  ports:
    - protocol: TCP
      port: 3000
      targetPort: 3000




