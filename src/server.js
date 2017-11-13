import { StaticRouter, matchPath } from 'react-router-dom';

import App from './App';
import React from 'react';
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser'
import { renderToString } from 'react-dom/server';
import { addRating } from './controller/addRating'
import { getVideoRating } from './controller/getVideoRating'

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/', (req, res) => {
    const context = {};
    const markup = renderToString(
      <StaticRouter context={context} location={req.url}>
        <App />
      </StaticRouter>
    );

    if (context.url) {
      res.redirect(context.url);
    } else {
      res.status(200).send(
        `<!doctype html>
    <html lang="">
    <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet='utf-8' />
        <title>Avaliador de vídeos</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${assets.client.css
          ? `<link rel="stylesheet" href="${assets.client.css}">`
          : ''}
        <script src="${assets.client.js}" defer></script>
    </head>
    <body>
        <div id="root">${markup}</div>
    </body>
</html>`
      );
    }
  })
  .post('/addrating', (req, res) => {
    const url = req.body.url
    const rating = req.body.rating
    const isIndependent = req.body.isIndependent
    const result = addRating(url, rating, isIndependent)
    res.send(200)
  })
  .get('/getrating', (req, res) => {
    const url = req.query.url
    const query = getVideoRating(url)
    query.exec(function (err, videos) {
      if (err)
        res.send(err)
      res.send(videos)
    });
  })

export default server;
