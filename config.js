// Configuración de la aplicación AprendIA Chiapas
const CONFIG = {
    // URLs de la API
    API: {
        // URL de desarrollo (local)
        DEVELOPMENT: 'http://localhost:3000/api',
        
        // URL de producción (Render)
        PRODUCTION: 'https://landing-aprendia-api.onrender.com/api'
    },
    
    // Detectar entorno
    isProduction: () => {
        const hostname = window.location.hostname;
        console.log('🔍 Detectando entorno - hostname:', hostname);
        console.log('🔍 Es localhost?', hostname === 'localhost');
        console.log('🔍 Es 127.0.0.1?', hostname === '127.0.0.1');
        console.log('🔍 Incluye localhost?', hostname.includes('localhost'));
        
        const isProd = hostname !== 'localhost' && 
                      hostname !== '127.0.0.1' &&
                      !hostname.includes('localhost') &&
                      !hostname.includes('127.0.0.1');
        
        console.log('🔍 Es producción?', isProd);
        return isProd;
    },
    
    // Obtener URL de la API según el entorno
    getApiUrl: () => {
        const isProd = CONFIG.isProduction();
        const apiUrl = isProd ? CONFIG.API.PRODUCTION : CONFIG.API.DEVELOPMENT;
        console.log('🌐 URL de API seleccionada:', apiUrl);
        return apiUrl;
    },
    
    // Forzar uso de producción (para testing)
    forceProduction: () => {
        console.log('🚀 Forzando uso de API de producción');
        return CONFIG.API.PRODUCTION;
    },
    
    // Endpoints específicos
    endpoints: {
        register: '/register',
        health: '/health',
        users: '/users',
        stats: '/stats'
    },
    
    // Configuración de la aplicación
    app: {
        name: 'AprendIA Chiapas',
        version: '1.0.0',
        description: 'Programa educativo gratuito del Gobierno de Chiapas'
    }
};

// Exportar para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} else {
    window.CONFIG = CONFIG;
}
