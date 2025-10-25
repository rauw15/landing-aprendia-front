# 🚨 Manejo de Errores - AprendIA Chiapas

## 📋 Tipos de Errores Manejados

### **1. Usuario Ya Existe (409)**
- **Causa**: Email ya registrado en la base de datos
- **Mensaje**: "Este email ya está registrado en el programa. Por favor, usa otro email."
- **Botón**: "Usuario Ya Existe" (color naranja)
- **Acción**: Usuario debe cambiar el email

### **2. Datos Inválidos (400)**
- **Causa**: Campos con formato incorrecto o vacíos
- **Mensaje**: "Por favor, verifica que todos los campos estén correctos."
- **Botón**: "Datos Inválidos" (color rojo)
- **Acción**: Usuario debe corregir los campos

### **3. Error de Conexión**
- **Causa**: API no disponible o problemas de red
- **Mensaje**: "Error de conexión. Verifica que la API esté funcionando."
- **Botón**: "Error en Registro" (color rojo)
- **Acción**: Reintentar más tarde

### **4. Error de CORS**
- **Causa**: Problemas de configuración CORS
- **Mensaje**: "Error de CORS. Verifica la configuración del servidor."
- **Botón**: "Error en Registro" (color rojo)
- **Acción**: Contactar soporte técnico

### **5. Error Interno del Servidor (500)**
- **Causa**: Problemas en el servidor o base de datos
- **Mensaje**: "Error interno del servidor. Intenta más tarde."
- **Botón**: "Error en Registro" (color rojo)
- **Acción**: Reintentar más tarde

## 🔧 Validaciones del Frontend

### **Campos Requeridos:**
- ✅ Nombre completo
- ✅ Email
- ✅ Municipio
- ✅ Nivel educativo

### **Validación de Email:**
```javascript
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```

### **Estados del Botón:**
- **Normal**: "Registrarse al Programa"
- **Cargando**: "Registrando..."
- **Éxito**: "¡Registro Exitoso!"
- **Usuario existe**: "Usuario Ya Existe"
- **Datos inválidos**: "Datos Inválidos"
- **Error**: "Error en Registro"

## 🎨 Colores de Notificaciones

### **Éxito (Verde):**
- Background: `linear-gradient(135deg, #1c6b50, #8d4a5b)`
- Icono: ✅
- Duración: 6 segundos

### **Error (Rojo):**
- Background: `linear-gradient(135deg, #ba1a1a, #8d4a5b)`
- Icono: ❌
- Duración: 6 segundos

### **Info (Azul):**
- Background: `linear-gradient(135deg, #1c6b50, #8d4a5b)`
- Icono: ℹ️
- Duración: 6 segundos

## 📊 Códigos de Estado HTTP

### **200 - OK**
- Registro exitoso
- Usuario creado correctamente

### **400 - Bad Request**
- Datos inválidos
- Campos faltantes o incorrectos

### **409 - Conflict**
- Usuario ya existe
- Email duplicado

### **500 - Internal Server Error**
- Error interno del servidor
- Problemas con la base de datos

## 🔍 Logging y Debug

### **Consola del Navegador:**
```javascript
console.log('🌐 Usando API (forzada):', apiUrl);
console.log('🔗 URL completa:', fullUrl);
console.log('📤 Datos a enviar:', requestData);
console.log('📊 Status de respuesta:', response.status);
console.log('📋 Resultado completo:', result);
```

### **Logs del Servidor:**
- Registros recibidos
- Errores de validación
- Usuarios registrados exitosamente
- Errores del servidor

## 🚀 Mejoras Implementadas

### **1. Manejo Específico de Errores:**
- Diferentes mensajes según el tipo de error
- Colores específicos para cada estado
- Botones con texto descriptivo

### **2. Validación Frontend:**
- Campos requeridos
- Formato de email
- Prevención de envíos duplicados

### **3. Notificaciones Mejoradas:**
- Iconos descriptivos
- Mensajes claros
- Duración apropiada
- Animaciones suaves

### **4. UX Mejorada:**
- Estados visuales claros
- Feedback inmediato
- Prevención de errores comunes

## 📱 Flujo de Usuario

### **Registro Exitoso:**
1. Usuario llena formulario
2. Validación frontend
3. Envío a API
4. Respuesta exitosa
5. Notificación de éxito
6. Formulario se limpia

### **Usuario Ya Existe:**
1. Usuario llena formulario
2. Validación frontend
3. Envío a API
4. Respuesta 409
5. Notificación específica
6. Usuario cambia email

### **Error de Conexión:**
1. Usuario llena formulario
2. Validación frontend
3. Error de red
4. Notificación de error
5. Usuario puede reintentar

## 🔧 Solución de Problemas

### **Si aparece "Usuario Ya Existe":**
- Verificar que el email no esté registrado
- Usar un email diferente
- Verificar en la base de datos

### **Si aparece "Datos Inválidos":**
- Verificar que todos los campos estén llenos
- Verificar formato del email
- Verificar selección de municipio y educación

### **Si aparece "Error de Conexión":**
- Verificar que la API esté funcionando
- Verificar conexión a internet
- Verificar logs del servidor

## ✅ Checklist de Verificación

- [ ] Usuario ya existe (409) - ✅ Manejado
- [ ] Datos inválidos (400) - ✅ Manejado
- [ ] Error de conexión - ✅ Manejado
- [ ] Error de CORS - ✅ Manejado
- [ ] Error interno (500) - ✅ Manejado
- [ ] Validación frontend - ✅ Implementada
- [ ] Notificaciones mejoradas - ✅ Implementadas
- [ ] Estados del botón - ✅ Implementados
- [ ] Logging detallado - ✅ Implementado

¡El manejo de errores está completamente implementado y optimizado!
