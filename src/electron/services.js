import clc from 'cli-color';
import checkAuthToken from '../utils/checkAuthToken';
import server from '@neteaseapireborn/api/server';

export async function startNeteaseMusicApi() {
  // Let user know that the service is starting
  console.log(`${clc.redBright('[NetEase API]')} initiating NCM API`);

  // Load the NCM API.
  try {
    await server.serveNcmApi({
      port: 10754,
      moduleDefs: require('../ncmModDef'),
    });
    console.log(`${clc.redBright('[NetEase API]')} listening on 127.0.0.1:10754`);
  } catch (error) {
    console.error(`${clc.redBright('[NetEase API]')} failed to start`, error);
    throw error;
  }
}
