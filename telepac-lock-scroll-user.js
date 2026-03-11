// ==UserScript==
// @name         Telepac Lock Scroll Top
// @namespace    https://github.com/zakk44
// @version      1.1
// @description  Prevent Telepac interface from scrolling down
// @author       zakk44
// @match        https://isis.telepac.agriculture.gouv.fr/telepac/prg/rpg/*
// @downloadURL  https://raw.githubusercontent.com/zakk44430/telepac-userscripts/main/telepac-lock-scroll-user.js
// @updateURL    https://raw.githubusercontent.com/zakk44430/telepac-userscripts/main/telepac-lock-scroll-user.js
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function lockScroll() {
        // force la page en haut
        window.scrollTo(0, 0);

        // force tous les conteneurs scrollables en haut
        document.querySelectorAll('*').forEach(el => {
            if (el.scrollTop > 0) {
                el.scrollTop = 0;
            }
        });
    }

    // empêche le scroll souris
    window.addEventListener('scroll', lockScroll, true);

    // empêche le scroll molette
    window.addEventListener('wheel', function(e){
        e.preventDefault();
    }, { passive:false });

    // empêche certaines touches
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

    // au chargement
    window.addEventListener('load', () => {
        lockScroll();
    });

})();
