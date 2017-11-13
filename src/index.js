import app from './server';
import http from 'http';
const server = http.createServer(app);
let currentApp = app;

server.listen(process.env.PORT || 3000);

const fs = require('fs');

const visibilityFile = 'node_modules/semantic-ui-react/dist/commonjs/behaviors/Visibility/Visibility.js';
const stickyFile = 'node_modules/semantic-ui-react/dist/commonjs/modules/Sticky/Sticky.js';

fs.readFile(visibilityFile, 'utf8', function (err, data) {
  if (err) {
    return console.error(err);
  }
  const result = data.replace('context: window', 'context: typeof window === \'object\' && window !== null && window.self === window ? window : {}');

  fs.writeFile(visibilityFile, result, 'utf8', function (err) {
    if (err) return console.error(err);
  });
});

fs.readFile(stickyFile, 'utf8', function (err, data) {
  if (err) {
    return console.error(err);
  }
  const result = data.replace('scrollContext: window', 'scrollContext: typeof window === \'object\' && window !== null && window.self === window ? window : {}');

  fs.writeFile(stickyFile, result, 'utf8', function (err) {
    if (err) return console.error(err);
  });
});

if (module.hot) {
  console.log('✅  Server-side HMR Enabled!');

  module.hot.accept('./server', () => {
    console.log('🔁  HMR Reloading `./server`...');
    server.removeListener('request', currentApp);
    const newApp = require('./server').default;
    server.on('request', newApp);
    currentApp = newApp;
  });
}
