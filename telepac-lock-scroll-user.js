// ==UserScript==
// @name         Telepac Lock Scroll
// @namespace    https://github.com/zakk44
// @version      1.2
// @description  Disable vertical scrolling in Telepac interface
// @author       zakk44
// @match        https://isis.telepac.agriculture.gouv.fr/telepac/prg/rpg/*
// @downloadURL  https://raw.githubusercontent.com/zakk44430/telepac-userscripts/main/telepac-lock-scroll-user.js
// @updateURL    https://raw.githubusercontent.com/zakk44430/telepac-userscripts/main/telepac-lock-scroll-user.js
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    function disableScroll() {
        const style = document.createElement('style');
        style.textContent = `
            html, body {
                overflow-y: hidden !important;
                height: 100% !important;
            }
        `;
        document.documentElement.appendChild(style);
    }

    disableScroll();

})();
