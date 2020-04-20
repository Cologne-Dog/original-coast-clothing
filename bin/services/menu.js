/**
 * Copyright 2020, Cologne.Dog, Inc. All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Messenger For Cologne.Dog
 * https://www.messenger.com/t/colognedog
 */

"use strict";

// Imports dependencies
const API = require("../api/api"),
  Config = require("../config/config"),
  i18n = require("../i18n/i18n.config");

module.exports = class Menu {
  constructor(client, webhookEvent) {
    this.client = client;
    this.webhookEvent = webhookEvent;
  }

  handlePayload(payload) {
    let response = null

    switch (payload) {
      case "MENU_ALL":
        break;

      case "MENU":
        response = API.genQuickReply(i18n.__("menu.prompt"), [
          {
            title: i18n.__("menu.deodorants"),
            payload: "PRODUCTS_DEODORANTS"
          },
          {
            title: i18n.__("menu.biocosmeticals"),
            payload: "PRODUCTS_BIOCOSMETICALS"
          }
        ]);
        break;
    }

    return response;
  }

};