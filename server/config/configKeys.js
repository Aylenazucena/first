// importando el DotEnv
import dotenv from 'dotenv';

// invocacion a la funcion config de la instancia dotenv
dotenv.config();

console.log(process.env.PO);

// creando objetos de configuracion
const defaultConfig = {
  POST: process.env.PORT || 3000,
  IP: process.env.IP || '0.0.0.0',
};

const devConfig = {
  MONGO_URL: process.env.DEV_DATABASE_URL,
};

const testConfig = {
  TEST_VALUE: 200,
};

const prodConfig = {
  MONGO_URL: process.env.PROD_DATABASE_URL,
};

// creando una funcion selectora
function getEnvConfig(env) {
  switch (env) {
    case 'production':
      return prodConfig;
    case 'development':
      return devConfig;
    case 'test':
      return testConfig;
    default:
      return devConfig;
  }
}
// Exportar el objeto de confifuracion
export default {
  ...defaultConfig,
  ...getEnvConfig(process.env.NODE_ENV),
};
