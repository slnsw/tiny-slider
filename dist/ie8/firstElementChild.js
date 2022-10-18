"use strict";

// Element.firstElementChild

(function () {
  "use strict";

  if (!("firstElementChild" in document.documentElement)) {
    Object.defineProperty(Element.prototype, "firstElementChild", {
      get: function get() {
        for (var nodes = this.children, n, i = 0, l = nodes.length; i < l; ++i) {
          if (n = nodes[i], 1 === n.nodeType) {
            return n;
          }
        }
        return null;
      }
    });
  }
})();