# 🔗 Conexión Frontend-Backend - AprendIA Chiapas

## 📋 Configuración Actual

### **URLs Configuradas:**
- **Desarrollo**: `http://localhost:3000/api`
- **Producción**: `https://landing-aprendia-api.onrender.com/api`

### **Archivos de Configuración:**
- ✅ `config.js` - Configuración centralizada
- ✅ `index.html` - Frontend principal
- ✅ `test-connection.html` - Página de pruebas

## 🧪 Probar Conexión

### **1. Página de Pruebas:**
Abrir `test-connection.html` en el navegador para:
- ✅ Verificar información del entorno
- ✅ Probar health check
- ✅ Probar registro de usuario
- ✅ Ver usuarios registrados
- ✅ Ver logs de consola

### **2. Consola del Navegador:**
Abrir DevTools (F12) y verificar:
- ✅ `🌐 Usando API: [URL]`
- ✅ `✅ API conectada correctamente`
- ✅ Sin errores de CORS

## 🔧 Configuración de URLs

### **Cambiar URL de Producción:**
Editar `config.js`:
```javascript
API: {
    PRODUCTION: 'https://tu-nueva-url.onrender.com/api'
}
```

### **Agregar Nuevo Entorno:**
```javascript
// En config.js
isProduction: () => {
    const hostname = window.location.hostname;
    return hostname !== 'localhost' && 
           hostname !== '127.0.0.1' &&
           !hostname.includes('localhost');
}
```

## 🚨 Solución de Problemas

### **Error de CORS:**
1. Verificar que Render tenga CORS habilitado
2. Verificar que la URL de la API sea correcta
3. Verificar que el endpoint exista

### **Error 404:**
1. Verificar que la API esté funcionando
2. Verificar la URL completa
3. Probar con Postman

### **Error de Conexión:**
1. Verificar que Render esté activo
2. Verificar variables de entorno
3. Verificar logs en Render

## 📊 Endpoints Disponibles

### **Health Check:**
```
GET /api/health
```

### **Registrar Usuario:**
```
POST /api/register
Content-Type: application/json

{
  "name": "Juan Pérez",
  "email": "juan@email.com",
  "municipality": "tuxtla",
  "education": "universidad"
}
```

### **Ver Usuarios:**
```
GET /api/users
```

### **Estadísticas:**
```
GET /api/stats
```

## 🔍 Verificación Paso a Paso

### **1. Verificar API en Render:**
```bash
curl https://landing-aprendia-api.onrender.com/api/health
```

### **2. Verificar Frontend Local:**
1. Abrir `index.html` en navegador
2. Abrir DevTools (F12)
3. Verificar logs de consola
4. Probar formulario de registro

### **3. Verificar Frontend en Netlify:**
1. Desplegar en Netlify
2. Abrir URL de Netlify
3. Probar formulario de registro
4. Verificar que se guarden datos en MongoDB

## 📱 URLs de Producción

- **Frontend**: `https://aprendia-chiapas.netlify.app`
- **Backend**: `https://landing-aprendia-api.onrender.com`
- **Health Check**: `https://landing-aprendia-api.onrender.com/api/health`

## 🎯 Flujo de Datos

```
Usuario → Netlify → Render → MongoDB Atlas
```

1. **Usuario** llena formulario en Netlify
2. **Netlify** envía datos a Render
3. **Render** procesa y guarda en MongoDB
4. **MongoDB** almacena datos del usuario
5. **Render** responde con confirmación
6. **Netlify** muestra notificación al usuario

## ✅ Checklist de Verificación

- [ ] API funcionando en Render
- [ ] Frontend funcionando en Netlify
- [ ] Conexión entre frontend y backend
- [ ] Formulario de registro funcional
- [ ] Datos guardándose en MongoDB
- [ ] Notificaciones funcionando
- [ ] Sin errores de CORS
- [ ] Logs funcionando correctamente

## 🚀 Próximos Pasos

1. **Desplegar frontend en Netlify**
2. **Probar conexión completa**
3. **Verificar que se guarden datos**
4. **Optimizar rendimiento**
5. **Agregar monitoreo**

¡La conexión frontend-backend está lista para funcionar!
