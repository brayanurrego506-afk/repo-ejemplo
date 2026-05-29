# Demo Clase — GitHub + Vercel

Proyecto de demostración para aprender el flujo de despliegue web.

## Desarrollo local

```bash
npm install
npm run dev
```

## Despliegue en Vercel

### 1. Subir a GitHub
```bash
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/TU-USUARIO/demo-clase.git
git branch -M main
git push -u origin main
```

### 2. Conectar con Vercel
1. Ir a [vercel.com](https://vercel.com)
2. **Add New Project** → importar el repositorio de GitHub
3. Vercel detecta Vite automáticamente gracias al `vercel.json`
4. Click en **Deploy**

✅ Sin configuración adicional — el `vercel.json` ya lo tiene todo.
