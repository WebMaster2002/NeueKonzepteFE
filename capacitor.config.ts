import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.qweet',
  appName: 'qweet',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
