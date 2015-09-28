/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define([
  'views/legal_copy',
  'stache!templates/tos',
  'lib/auth-errors'
],
function (LegalCopyView, Template, AuthErrors) {
  'use strict';

  var View = LegalCopyView.extend({
    className: 'tos',
    copyUrl: '/legal/terms',
    events: {
      'click #fxa-tos-back': 'back',
      'keyup #fxa-tos-back': 'backOnEnter'
    },
    fetchError: AuthErrors.toError('COULD_NOT_GET_TOS'),
    template: Template
  });

  return View;
});

