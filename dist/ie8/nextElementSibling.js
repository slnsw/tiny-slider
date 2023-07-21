"use strict";

// Element.nextElementSibling

(function () {
  "use strict";

  if (!("nextElementSibling" in document.documentElement)) {
    Object.defineProperty(Element.prototype, "nextElementSibling", {
      get: function get() {
        var e = this.nextSibling;
        while (e && 1 !== e.nodeType) {
          e = e.nextSibling;
        }
        return e;
      }
    });
  }
})();