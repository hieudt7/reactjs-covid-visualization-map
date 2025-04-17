const Config = {
    env: import.meta.env['VITE_APP_ENV'] as string,
    isDev: import.meta.env['VITE_APP_ENV'] === 'development',
    isProduction: import.meta.env['VITE_APP_ENV'] === 'production',
    apiBaseUrl: import.meta.env['VITE_API_BASE_URL'] as string,
    mapBoxUrl: import.meta.env['VITE_MAP_BOX_TOKEN'] as string,
  }
  
  export default Config