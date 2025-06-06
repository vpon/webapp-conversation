declare module 'dify-client';
declare module 'uuid';
// add dataLayer to window
interface Window {
    dataLayer: any[];
  }