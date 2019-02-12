// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var Msal = require("msal");
var Js_mapperRt = require("bs-platform/lib/js/js_mapperRt.js");

var jsMapperConstantArray = /* array */[
  /* tuple */[
    -374781653,
    "localSession"
  ],
  /* tuple */[
    448401680,
    "localStorage"
  ]
];

function cacheLocationToJs(param) {
  return Js_mapperRt.binarySearch(2, param, jsMapperConstantArray);
}

function cacheLocationFromJs(param) {
  return Js_mapperRt.revSearch(2, jsMapperConstantArray, param);
}

function initApp(clientId, authority, tokenReceivedCallback, postLogoutRedirectUri, redirectUri, storeAuthStateInCookie, validateAuthority, cacheLocation) {
  var options = {
    redirectUri: redirectUri,
    postLogoutRedirectUri: postLogoutRedirectUri,
    storeAuthStateInCookie: storeAuthStateInCookie,
    validateAuthority: validateAuthority,
    cacheLocation: cacheLocationToJs(cacheLocation)
  };
  return new Msal.UserAgentApplication(clientId, authority, tokenReceivedCallback, options);
}

exports.cacheLocationToJs = cacheLocationToJs;
exports.cacheLocationFromJs = cacheLocationFromJs;
exports.initApp = initApp;
/* msal Not a pure module */