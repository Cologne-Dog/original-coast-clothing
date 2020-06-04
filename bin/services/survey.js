/**
 * Copyright 2019-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Messenger For Original Coast Clothing
 * https://developers.facebook.com/docs/messenger-platform/getting-started/sample-apps/original-coast-clothing
 */

"use strict";

// Imports dependencies
const API = require("../api/api"),
  i18n = require("../i18n/i18n.config");

module.exports = class Survey {
  constructor(client, webhookEvent) {
    this.client = client;
    this.webhookEvent = webhookEvent;
  }

  static genAgentRating(agent) {
    let response = API.genQuickReply(
      i18n.__("survey.prompt", {
        agentFirstName: agent
      }),
      [
        {
          title: "\uD83D\uDE00",
          payload: "CSAT_GOOD"
        },
        {
          title: "\uD83D\uDE42",
          payload: "CSAT_AVERAGE"
        },
        {
          title: "\uD83D\uDE41",
          payload: "CSAT_BAD"
        }
      ]
    );

    // This is triggered 4 sec after comming back from talking with an agent
    response.delay = "4000";

    return response;
  }

  handlePayload(payload) {
    let response = null;
    
    switch (payload) {
      case "CSAT_GOOD":
        response = API.genText(i18n.__("survey.positive"));
        break;

      case "CSAT_AVERAGE":
        response = API.genText(i18n.__("survey.neutral"));
        break;

      case "CSAT_BAD":
        response = API.genQuickReply(i18n.__("survey.negative"), [
          {
            title: i18n.__("menu.help"),
            payload: "SUPPORT_HELP"
          }
        ]);
        break;

      case "CSAT_SUGGESTION":
        response = API.genText(i18n.__("survey.suggestion"));
        break;
    }

    return response;
  }
};