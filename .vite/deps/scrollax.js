import {
  require_jquery
} from "./chunk-WTCQJA6Y.js";
import {
  __commonJS
} from "./chunk-BUSYA2B4.js";

// node_modules/scrollax/scrollax.min.js
var require_scrollax_min = __commonJS({
  "node_modules/scrollax/scrollax.min.js"(exports, module) {
    (function(e2) {
      "function" === typeof define && define.amd ? define(["jquery"], e2) : "undefined" !== typeof exports ? module.exports = e2(require_jquery()) : e2(jQuery);
    })(function(e) {
      function W(a2) {
        if (console && console.warn) console.warn("Scrollax: " + a2);
        else throw "Scrollax: " + a2;
      }
      function ka(a2) {
        var g = !!("pageYOffset" in a2);
        return { width: g ? window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth : a2.offsetWidth, height: g ? window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight : a2.offsetHeight, left: a2[g ? "pageXOffset" : "scrollLeft"], top: a2[g ? "pageYOffset" : "scrollTop"] };
      }
      function X(a) {
        return (a = a.data("scrollax")) && eval("({" + a + "})") || {};
      }
      function Y(a2) {
        var g, c;
        return !!(a2 && "object" === typeof a2 && "object" === typeof a2.window && a2.window == a2 && a2.setTimeout && a2.alert && (g = a2.document) && "object" === typeof g && (c = g.defaultView || g.parentWindow) && "object" === typeof c && c == a2);
      }
      var v = Array.prototype, C = v.push, Z = v.splice, aa = Object.prototype.hasOwnProperty, la = /[-+]?\d+(\.\d+)?/g, ma = "translateX translateY rotate rotateX rotateY rotateZ skewX skewY scaleX scaleY".split(" "), ba = e(window), ca = e(document.body), da, ea, L, M, N, q = function(a2, g, c) {
        function k() {
          O = fa ? ca.find(ga) : P.find(ga);
          x.length = 0;
          r = !!t.horizontal;
          O.each(na);
          d();
          t.performanceTrick && (F = fa ? ca : P);
          u("load");
          return f;
        }
        function l() {
          G && (G = clearTimeout(G));
          G = setTimeout(function() {
            f.reload();
          });
        }
        function d() {
          var ha = x.length;
          t.performanceTrick && F && (clearTimeout(ia), Q || (F.addClass("scrollax-performance"), Q = true), ia = setTimeout(function() {
            F.removeClass("scrollax-performance");
            Q = false;
          }, 100));
          if (ha) {
            H = ka(a2);
            for (var c2 = 0; c2 < ha; c2++) I = x[c2], y = L(I.element, a2), 0 > y[r ? "right" : "bottom"] || y[r ? "left" : "top"] > H[r ? "width" : "height"] || (ja = I.options, R = ja.offset || t.offset || 0, J = y[r ? "right" : "bottom"], z = y[r ? "width" : "height"], A = (z - J + R) / z, 0 > A && (J = y[r ? "left" : "top"], z = H[r ? "width" : "height"], A = -1 + (z - J + R) / z), 1 < A || -1 > A || b(I, A, r));
            u("scroll", H);
          }
        }
        function b(a3, b2) {
          S = a3.parallaxElements;
          var c2 = S.length;
          if (c2) for (var f2 = 0; f2 < c2; f2++) {
            T = S[f2];
            var g2 = oa = T.element, d2 = b2;
            U = T.properties || (r ? { translateX: "100%" } : { translateY: "100%" });
            D = "";
            for (B in U) {
              n = U[B];
              if ("number" === typeof n) n *= d2;
              else if ("string" === typeof n) for (K = n.match(la), m = 0, E = K.length; m < E; m++) n = n.replace(K[m], parseFloat(K[m] * d2));
              if (-1 !== e.inArray(B, ma)) D += B + "(" + n + ")";
              else {
                var k2 = g2.style, l2 = B, h2;
                "opacity" === B ? (h2 = 0 > d2 ? 1 + n : 1 - n, h2 = 0 > h2 ? 0 : 1 < h2 ? 1 : h2) : h2 = n;
                k2[l2] = h2;
              }
            }
            D && (g2.style[da] = ea + D);
          }
        }
        function pa(a3) {
          return "undefined" !== typeof a3 ? "number" !== typeof a3 && "string" !== typeof a3 || "" === a3 || isNaN(a3) ? O.index(a3) : 0 <= a3 && a3 < x.length ? a3 : -1 : -1;
        }
        function u(a3, b2) {
          if (h[a3]) {
            E = h[a3].length;
            for (m = V.length = 0; m < E; m++) C.call(V, h[a3][m]);
            for (m = 0; m < E; m++) V[m].call(
              f,
              a3,
              b2
            );
          }
        }
        function p(a3, b2) {
          for (var c2 = 0, f2 = h[a3].length; c2 < f2; c2++) if (h[a3][c2] === b2) return c2;
          return -1;
        }
        var f = this, P = a2 && e(a2).eq(0) || ba, w2 = q.instances, v2 = null;
        a2 = P[0];
        e.each(w2, function(b2, c2) {
          b2 && b2.frame === a2 && (v2 = true);
        });
        if (!a2 || v2) v2 ? W("Scrollax: Scrollax has been initialized for this frame!") : W("Scrollax: Frame is not available!");
        else {
          var t = e.extend({}, q.defaults, g), x = [], O = null, ga = t.parentSelector || "[data-scrollax-parent]", qa = t.elementsSelector || "[data-scrollax]", h = {}, V = [], G, fa = Y(a2), m, E, F, ia, Q, H, r, R, y, I, ja, A, J, z, S, T, oa, U, B, n, D, K;
          f.frame = a2;
          f.options = t;
          f.parents = x;
          f.initialized = false;
          f.reload = k;
          var na = function(a3, b2) {
            var c2 = e(b2), f2 = X(e(b2)), d2 = {};
            d2.element = b2;
            d2.options = f2;
            d2.parallaxElements = [];
            c2.find(qa).each(function(a4, b3) {
              var c3 = X(e(b3));
              c3.element = b3;
              C.call(d2.parallaxElements, c3);
            });
            C.call(x, d2);
          };
          f.scroll = d;
          f.getIndex = pa;
          f.one = function(a3, b2) {
            function c2() {
              b2.apply(f, arguments);
              f.off(a3, c2);
            }
            f.on(a3, c2);
            return f;
          };
          f.on = function(a3, b2) {
            if ("object" === typeof a3) for (var c2 in a3) {
              if (aa.call(a3, c2)) f.on(c2, a3[c2]);
            }
            else if ("function" === typeof b2) {
              c2 = a3.split(" ");
              for (var d2 = 0, g2 = c2.length; d2 < g2; d2++) h[c2[d2]] = h[c2[d2]] || [], -1 === p(c2[d2], b2) && C.call(h[c2[d2]], b2);
            } else if ("array" === typeof b2) for (c2 = 0, d2 = b2.length; c2 < d2; c2++) f.on(a3, b2[c2]);
            return f;
          };
          f.off = function(a3, c2) {
            if (c2 instanceof Array) for (var b2 = 0, d2 = c2.length; b2 < d2; b2++) f.off(a3, c2[b2]);
            else for (var b2 = a3.split(" "), d2 = 0, g2 = b2.length; d2 < g2; d2++) if (h[b2[d2]] = h[b2[d2]] || [], "undefined" === typeof c2) h[b2[d2]].length = 0;
            else {
              var k2 = p(b2[d2], c2);
              -1 !== k2 && Z.call(h[b2[d2]], k2, 1);
            }
            return f;
          };
          f.set = function(a3, b2) {
            e.isPlainObject(a3) ? e.extend(t, a3) : aa.call(t, a3) && (t[a3] = b2);
            k();
            return f;
          };
          f.destroy = function() {
            N(window, "resize", l);
            N(a2, "scroll", d);
            e.each(w2, function(b2, c2) {
              b2 && b2.frame === a2 && Z.call(q.instances, c2, 1);
            });
            x.length = 0;
            f.initialized = false;
            u("destroy");
            return f;
          };
          f.init = function() {
            if (!f.initialized) return f.on(c), k(), M(window, "resize", l), M(a2, "scroll", d), C.call(q.instances, f), f.initialized = true, u("initialized"), f;
          };
        }
      };
      q.instances = [];
      (function() {
        var a2, g, c, k, l, d, b, e2;
        L = function(u, p) {
          g = u.ownerDocument || u;
          c = g.documentElement;
          k = Y(p) ? p : g.defaultView || window;
          p = p && p !== g ? p : c;
          l = (k.pageYOffset || c.scrollTop) - c.clientTop;
          d = (k.pageXOffset || c.scrollLeft) - c.clientLeft;
          b = { top: 0, left: 0 };
          if (u && u.getBoundingClientRect) {
            var f = {}, q2 = u.getBoundingClientRect();
            for (a2 in q2) f[a2] = q2[a2];
            b = f;
            b.width = b.right - b.left;
            b.height = b.bottom - b.top;
          } else return null;
          if (p === k) return b;
          b.top += l;
          b.left += d;
          b.right += d;
          b.bottom += l;
          if (p === c) return b;
          e2 = L(p);
          b.left -= e2.left;
          b.right -= e2.left;
          b.top -= e2.top;
          b.bottom -= e2.top;
          return b;
        };
      })();
      (function() {
        function a2() {
          this.returnValue = false;
        }
        function g() {
          this.cancelBubble = true;
        }
        M = window.addEventListener ? function(a3, g2, e2, d) {
          a3.addEventListener(g2, e2, d || false);
          return e2;
        } : function(c, e2, l) {
          var d = e2 + l;
          c[d] = c[d] || function() {
            var b = window.event;
            b.target = b.srcElement;
            b.preventDefault = a2;
            b.stopPropagation = g;
            l.call(c, b);
          };
          c.attachEvent("on" + e2, c[d]);
          return l;
        };
        N = window.removeEventListener ? function(a3, g2, e2, d) {
          a3.removeEventListener(g2, e2, d || false);
          return e2;
        } : function(a3, g2, e2) {
          var d = g2 + e2;
          a3.detachEvent("on" + g2, a3[d]);
          try {
            delete a3[d];
          } catch (b) {
            a3[d] = void 0;
          }
          return e2;
        };
      })();
      (function() {
        function a2(a3) {
          for (var e2 = 0, d = g.length; e2 < d; e2++) {
            var b = g[e2] ? g[e2] + a3.charAt(0).toUpperCase() + a3.slice(1) : a3;
            if (null != c.style[b]) return b;
          }
        }
        var g = ["", "webkit", "moz", "ms", "o"], c = document.createElement("div");
        da = a2("transform");
        ea = a2("perspective") ? "translateZ(0) " : "";
      })();
      q.defaults = { horizontal: false, offset: 0, parentSelector: null, elementsSelector: null, performanceTrick: false };
      window.Scrollax = q;
      e.fn.Scrollax = function(a2, g) {
        var c, k;
        if (!e.isPlainObject(a2)) {
          if ("string" === typeof a2 || false === a2) c = false === a2 ? "destroy" : a2, k = slice.call(arguments, 1);
          a2 = {};
        }
        return this.each(function(l, d) {
          var b = e.data(
            d,
            "scrollax"
          );
          b || c ? b && c && b[c] && b[c].apply(b, k) : e.data(d, "scrollax", new q(d, a2, g).init());
        });
      };
      e.Scrollax = function(a2, e2) {
        ba.Scrollax(a2, e2);
      };
      var v = document.head || document.getElementsByTagName("head")[0], w = document.createElement("style");
      w.type = "text/css";
      w.styleSheet ? w.styleSheet.cssText = ".scrollax-performance, .scrollax-performance *, .scrollax-performance *:before, .scrollax-performance *:after { pointer-events: none !important; -webkit-animation-play-state: paused !important; animation-play-state: paused !important; };" : w.appendChild(document.createTextNode(".scrollax-performance, .scrollax-performance *, .scrollax-performance *:before, .scrollax-performance *:after { pointer-events: none !important; -webkit-animation-play-state: paused !important; animation-play-state: paused !important; };"));
      v.appendChild(w);
      return q;
    });
  }
});
export default require_scrollax_min();
//# sourceMappingURL=scrollax.js.map
