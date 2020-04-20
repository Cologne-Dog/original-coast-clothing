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
  constructor(user, webhookEvent) {
    this.user = user;
    this.webhookEvent = webhookEvent;
  }

  handlePayload(payload) {
    let response = null

    switch (payload) {
      case "SOLVENTFREE_INFO":
        break

      case "SOLVENTFREE_BENEFITS":
        break

      case "SOLVENTFREE_INFO":
        break
      
    }

    return response;
  }
};
