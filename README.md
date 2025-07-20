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
helm install admin-service .

