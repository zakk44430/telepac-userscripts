// ==UserScript==
// @name         Telepac Lock Scroll Top
// @namespace    https://github.com/zakk44
// @version      1.0
// @description  Prevent Telepac interface from scrolling down
// @author       zakk44
// @match        https://isis.telepac.agriculture.gouv.fr/telepac/prg/rpg/*
// downlowadURL  https://raw.githubusercontent.com/zakk44430/telepac-userscripts/refs/heads/main/telepac-lock-scroll-user.js
// updateURL     https://raw.githubusercontent.com/zakk44430/telepac-userscripts/refs/heads/main/telepac-lock-scroll-user.js
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function lockScroll() {
        if (window.scrollY > 0) {
            window.scrollTo(0, 0);
        }
    }

    // Bloque scroll souris
    window.addEventListener('scroll', lockScroll, { passive: true });

    // Bloque certaines touches clavier
    window.addEventListener('keydown', function(e) {
        const blockedKeys = [
            "ArrowDown",
            "PageDown",
            "End",
            " "
        ];

        if (blockedKeys.includes(e.key)) {
            e.preventDefault();
        }
    });

    // Au chargement
    window.addEventListener('load', () => {
        window.scrollTo(0, 0);
    });

})();
