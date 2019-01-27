// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
  // Initialize Firebase
  apiKey: 'AIzaSyCJLupXXVKWLTGdd16YpCyUvlFQa61BUxQ',
  authDomain: 'todolistapp-ba75b.firebaseapp.com',
  databaseURL: 'https://todolistapp-ba75b.firebaseio.com',
  projectId: 'todolistapp-ba75b',
  storageBucket: 'todolistapp-ba75b.appspot.com',
  messagingSenderId: '986114143633'
  }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
