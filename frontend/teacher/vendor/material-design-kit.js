!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports, require("dom-factory"))
    : "function" == typeof define && define.amd
    ? define(["exports", "dom-factory"], e)
    : e(
        ((t = "undefined" != typeof globalThis ? globalThis : t || self).MDK =
          {}),
        t.domFactory
      );
})(this, function (t, e) {
  "use strict";
  var r =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : {};
  function n(t, e, r) {
    return (
      t(
        (r = {
          path: e,
          exports: {},
          require: function (t, e) {
            return (function () {
              throw new Error(
                "Dynamic requires are not currently supported by @rollup/plugin-commonjs"
              );
            })(null == e && r.path);
          },
        }),
        r.exports
      ),
      r.exports
    );
  }
  var i = n(function (t, e) {
      t.exports = (function (t) {
        function e(n) {
          if (r[n]) return r[n].exports;
          var i = (r[n] = { exports: {}, id: n, loaded: !1 });
          return (
            t[n].call(i.exports, i, i.exports, e), (i.loaded = !0), i.exports
          );
        }
        var r = {};
        return (e.m = t), (e.c = r), (e.p = ""), e(0);
      })([
        function (t, e, r) {
          function n(t) {
            return t && t.__esModule ? t : { default: t };
          }
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.unwatch = e.watch = void 0);
          var i = n(r(4)),
            o = n(r(3)),
            s =
              ((e.watch = function () {
                for (var t = arguments.length, e = Array(t), r = 0; t > r; r++)
                  e[r] = arguments[r];
                var n = e[1];
                c(n)
                  ? g.apply(void 0, e)
                  : s(n)
                  ? v.apply(void 0, e)
                  : m.apply(void 0, e);
              }),
              (e.unwatch = function () {
                for (var t = arguments.length, e = Array(t), r = 0; t > r; r++)
                  e[r] = arguments[r];
                var n = e[1];
                c(n) || void 0 === n
                  ? T.apply(void 0, e)
                  : s(n)
                  ? w.apply(void 0, e)
                  : y.apply(void 0, e);
              }),
              function (t) {
                return "[object Array]" === {}.toString.call(t);
              }),
            a = function (t) {
              return "[object Object]" === {}.toString.call(t);
            },
            c = function (t) {
              return "[object Function]" === {}.toString.call(t);
            },
            l = function (t, e, r) {
              (0, o.default)(t, e, {
                enumerable: !1,
                configurable: !0,
                writable: !1,
                value: r,
              });
            },
            u = function (t, e, r, n) {
              (0, o.default)(t, e, {
                get: r,
                set: function (t) {
                  n.call(this, t);
                },
                enumerable: !0,
                configurable: !0,
              });
            },
            f = function (t, e, r, n, i) {
              var o = void 0,
                s = t.__watchers__[e];
              (o = t.__watchers__.__watchall__) && (s = s ? s.concat(o) : o);
              for (var a = s ? s.length : 0, c = 0; a > c; c++)
                s[c].call(t, r, n, e, i);
            },
            h = [
              "pop",
              "push",
              "reverse",
              "shift",
              "sort",
              "unshift",
              "splice",
            ],
            d = function (t, e, r, n) {
              l(t, r, function () {
                for (
                  var i = 0,
                    o = void 0,
                    s = void 0,
                    a = arguments.length,
                    c = Array(a),
                    l = 0;
                  a > l;
                  l++
                )
                  c[l] = arguments[l];
                if ("splice" === r) {
                  var u = c[0],
                    f = u + c[1];
                  (o = t.slice(u, f)), (s = []);
                  for (var h = 2; h < c.length; h++) s[h - 2] = c[h];
                  i = u;
                } else s = "push" === r || "unshift" === r ? (c.length > 0 ? c : void 0) : c.length > 0 ? c[0] : void 0;
                var d = e.apply(t, c);
                return (
                  "pop" === r
                    ? ((o = d), (i = t.length))
                    : "push" === r
                    ? (i = t.length - 1)
                    : "shift" === r
                    ? (o = d)
                    : "unshift" !== r && void 0 === s && (s = d),
                  n.call(t, i, r, s, o),
                  d
                );
              });
            },
            p = function (t, e) {
              if (c(e) && t && !(t instanceof String) && s(t))
                for (var r = h.length; r > 0; r--) {
                  var n = h[r - 1];
                  d(t, t[n], n, e);
                }
            },
            _ = function (t, e, r, n) {
              var c = !1,
                h = s(t);
              void 0 === t.__watchers__ &&
                (l(t, "__watchers__", {}),
                h &&
                  p(t, function (r, i, o, c) {
                    if ((f(t, r, o, c, i), 0 !== n && o && (a(o) || s(o)))) {
                      var l = void 0,
                        u = t.__watchers__[e];
                      (l = t.__watchers__.__watchall__) &&
                        (u = u ? u.concat(l) : l);
                      for (var h = u ? u.length : 0, d = 0; h > d; d++)
                        if ("splice" !== i)
                          g(o, u[d], void 0 === n ? n : n - 1);
                        else
                          for (var p = 0; p < o.length; p++)
                            g(o[p], u[d], void 0 === n ? n : n - 1);
                    }
                  })),
                void 0 === t.__proxy__ && l(t, "__proxy__", {}),
                void 0 === t.__watchers__[e] &&
                  ((t.__watchers__[e] = []), h || (c = !0));
              for (var d = 0; d < t.__watchers__[e].length; d++)
                if (t.__watchers__[e][d] === r) return;
              t.__watchers__[e].push(r),
                c &&
                  (function () {
                    var r = (0, i.default)(t, e);
                    void 0 !== r
                      ? (function () {
                          var n = {
                            enumerable: r.enumerable,
                            configurable: r.configurable,
                          };
                          ["get", "set"].forEach(function (e) {
                            void 0 !== r[e] &&
                              (n[e] = function () {
                                for (
                                  var n = arguments.length, i = Array(n), o = 0;
                                  n > o;
                                  o++
                                )
                                  i[o] = arguments[o];
                                return r[e].apply(t, i);
                              });
                          }),
                            ["writable", "value"].forEach(function (t) {
                              void 0 !== r[t] && (n[t] = r[t]);
                            }),
                            (0, o.default)(t.__proxy__, e, n);
                        })()
                      : (t.__proxy__[e] = t[e]);
                    var c = function (r) {
                      var i = t.__proxy__[e];
                      if (
                        0 !== n &&
                        t[e] &&
                        (a(t[e]) || s(t[e])) &&
                        !t[e].__watchers__
                      )
                        for (var o = 0; o < t.__watchers__[e].length; o++)
                          g(
                            t[e],
                            t.__watchers__[e][o],
                            void 0 === n ? n : n - 1
                          );
                      i !== r && ((t.__proxy__[e] = r), f(t, e, r, i, "set"));
                    };
                    u(
                      t,
                      e,
                      function () {
                        return t.__proxy__[e];
                      },
                      c
                    );
                  })();
            },
            g = function t(e, r, n) {
              if ("string" != typeof e && (e instanceof Object || s(e)))
                if (s(e)) {
                  if ((_(e, "__watchall__", r, n), void 0 === n || n > 0))
                    for (var i = 0; i < e.length; i++) t(e[i], r, n);
                } else {
                  var o = [];
                  for (var a in e) ({}.hasOwnProperty.call(e, a) && o.push(a));
                  v(e, o, r, n);
                }
            },
            m = function (t, e, r, n) {
              "string" != typeof t &&
                (t instanceof Object || s(t)) &&
                (c(t[e]) ||
                  (null !== t[e] &&
                    (void 0 === n || n > 0) &&
                    g(t[e], r, void 0 !== n ? n - 1 : n),
                  _(t, e, r, n)));
            },
            v = function (t, e, r, n) {
              if ("string" != typeof t && (t instanceof Object || s(t)))
                for (var i = 0; i < e.length; i++) {
                  var o = e[i];
                  m(t, o, r, n);
                }
            },
            y = function (t, e, r) {
              if (void 0 !== t.__watchers__ && void 0 !== t.__watchers__[e])
                if (void 0 === r) delete t.__watchers__[e];
                else
                  for (var n = 0; n < t.__watchers__[e].length; n++)
                    t.__watchers__[e][n] === r &&
                      t.__watchers__[e].splice(n, 1);
            },
            w = function (t, e, r) {
              for (var n in e) e.hasOwnProperty(n) && y(t, e[n], r);
            },
            b = function t(e, r) {
              var n = [];
              for (var i in e)
                e.hasOwnProperty(i) &&
                  (e[i] instanceof Object && t(e[i], r), n.push(i));
              w(e, n, r);
            },
            T = function (t, e) {
              if (!(t instanceof String || (!t instanceof Object && !s(t))))
                if (s(t)) {
                  for (var r = ["__watchall__"], n = 0; n < t.length; n++)
                    r.push(n);
                  w(t, r, e);
                } else b(t, e);
            };
        },
        function (t, e) {
          var r = (t.exports = { version: "1.2.6" });
          "number" == typeof __e && (__e = r);
        },
        function (t, e) {
          var r = Object;
          t.exports = {
            create: r.create,
            getProto: r.getPrototypeOf,
            isEnum: {}.propertyIsEnumerable,
            getDesc: r.getOwnPropertyDescriptor,
            setDesc: r.defineProperty,
            setDescs: r.defineProperties,
            getKeys: r.keys,
            getNames: r.getOwnPropertyNames,
            getSymbols: r.getOwnPropertySymbols,
            each: [].forEach,
          };
        },
        function (t, e, r) {
          t.exports = { default: r(5), __esModule: !0 };
        },
        function (t, e, r) {
          t.exports = { default: r(6), __esModule: !0 };
        },
        function (t, e, r) {
          var n = r(2);
          t.exports = function (t, e, r) {
            return n.setDesc(t, e, r);
          };
        },
        function (t, e, r) {
          var n = r(2);
          r(17),
            (t.exports = function (t, e) {
              return n.getDesc(t, e);
            });
        },
        function (t, e) {
          t.exports = function (t) {
            if ("function" != typeof t)
              throw TypeError(t + " is not a function!");
            return t;
          };
        },
        function (t, e) {
          var r = {}.toString;
          t.exports = function (t) {
            return r.call(t).slice(8, -1);
          };
        },
        function (t, e, r) {
          var n = r(7);
          t.exports = function (t, e, r) {
            if ((n(t), void 0 === e)) return t;
            switch (r) {
              case 1:
                return function (r) {
                  return t.call(e, r);
                };
              case 2:
                return function (r, n) {
                  return t.call(e, r, n);
                };
              case 3:
                return function (r, n, i) {
                  return t.call(e, r, n, i);
                };
            }
            return function () {
              return t.apply(e, arguments);
            };
          };
        },
        function (t, e) {
          t.exports = function (t) {
            if (null == t) throw TypeError("Can't call method on  " + t);
            return t;
          };
        },
        function (t, e, r) {
          var n = r(13),
            i = r(1),
            o = r(9),
            s = "prototype",
            a = function (t, e, r) {
              var c,
                l,
                u,
                f = t & a.F,
                h = t & a.G,
                d = t & a.S,
                p = t & a.P,
                _ = t & a.B,
                g = t & a.W,
                m = h ? i : i[e] || (i[e] = {}),
                v = h ? n : d ? n[e] : (n[e] || {})[s];
              for (c in (h && (r = e), r))
                ((l = !f && v && c in v) && c in m) ||
                  ((u = l ? v[c] : r[c]),
                  (m[c] =
                    h && "function" != typeof v[c]
                      ? r[c]
                      : _ && l
                      ? o(u, n)
                      : g && v[c] == u
                      ? (function (t) {
                          var e = function (e) {
                            return this instanceof t ? new t(e) : t(e);
                          };
                          return (e[s] = t[s]), e;
                        })(u)
                      : p && "function" == typeof u
                      ? o(Function.call, u)
                      : u),
                  p && ((m[s] || (m[s] = {}))[c] = u));
            };
          (a.F = 1),
            (a.G = 2),
            (a.S = 4),
            (a.P = 8),
            (a.B = 16),
            (a.W = 32),
            (t.exports = a);
        },
        function (t, e) {
          t.exports = function (t) {
            try {
              return !!t();
            } catch (t) {
              return !0;
            }
          };
        },
        function (t, e) {
          var r = (t.exports =
            "undefined" != typeof window && window.Math == Math
              ? window
              : "undefined" != typeof self && self.Math == Math
              ? self
              : Function("return this")());
          "number" == typeof __g && (__g = r);
        },
        function (t, e, r) {
          var n = r(8);
          t.exports = Object("z").propertyIsEnumerable(0)
            ? Object
            : function (t) {
                return "String" == n(t) ? t.split("") : Object(t);
              };
        },
        function (t, e, r) {
          var n = r(11),
            i = r(1),
            o = r(12);
          t.exports = function (t, e) {
            var r = (i.Object || {})[t] || Object[t],
              s = {};
            (s[t] = e(r)),
              n(
                n.S +
                  n.F *
                    o(function () {
                      r(1);
                    }),
                "Object",
                s
              );
          };
        },
        function (t, e, r) {
          var n = r(14),
            i = r(10);
          t.exports = function (t) {
            return n(i(t));
          };
        },
        function (t, e, r) {
          var n = r(16);
          r(15)("getOwnPropertyDescriptor", function (t) {
            return function (e, r) {
              return t(n(e), r);
            };
          });
        },
      ]);
    }),
    o = function () {
      return {
        _scrollTargetSelector: null,
        _scrollTarget: null,
        get scrollTarget() {
          return this._scrollTarget
            ? this._scrollTarget
            : this._defaultScrollTarget;
        },
        set scrollTarget(t) {
          this._scrollTarget = t;
        },
        get scrollTargetSelector() {
          return this._scrollTargetSelector
            ? this._scrollTargetSelector
            : this.element.hasAttribute("data-scroll-target")
            ? this.element.getAttribute("data-scroll-target")
            : void 0;
        },
        set scrollTargetSelector(t) {
          this._scrollTargetSelector = t;
        },
        get _defaultScrollTarget() {
          return this._doc;
        },
        get _owner() {
          return this.element.ownerDocument;
        },
        get _doc() {
          return this._owner.documentElement;
        },
        get _scrollTop() {
          return this._isValidScrollTarget()
            ? this.scrollTarget === this._doc
              ? window.pageYOffset
              : this.scrollTarget.scrollTop
            : 0;
        },
        set _scrollTop(t) {
          this.scrollTarget === this._doc
            ? window.scrollTo(window.pageXOffset, t)
            : this._isValidScrollTarget() && (this.scrollTarget.scrollTop = t);
        },
        get _scrollLeft() {
          return this._isValidScrollTarget()
            ? this.scrollTarget === this._doc
              ? window.pageXOffset
              : this.scrollTarget.scrollLeft
            : 0;
        },
        set _scrollLeft(t) {
          this.scrollTarget === this._doc
            ? window.scrollTo(t, window.pageYOffset)
            : this._isValidScrollTarget() && (this.scrollTarget.scrollLeft = t);
        },
        get _scrollTargetWidth() {
          return this._isValidScrollTarget()
            ? this.scrollTarget === this._doc
              ? window.innerWidth
              : this.scrollTarget.offsetWidth
            : 0;
        },
        get _scrollTargetHeight() {
          return this._isValidScrollTarget()
            ? this.scrollTarget === this._doc
              ? window.innerHeight
              : this.scrollTarget.offsetHeight
            : 0;
        },
        get _isPositionedFixed() {
          return (
            this.element instanceof HTMLElement &&
            "fixed" === window.getComputedStyle(this.element).position
          );
        },
        attachToScrollTarget: function () {
          this.detachFromScrollTarget(),
            i.watch(this, "scrollTargetSelector", this.attachToScrollTarget),
            "document" === this.scrollTargetSelector
              ? (this.scrollTarget = this._doc)
              : "string" == typeof this.scrollTargetSelector
              ? (this.scrollTarget = document.querySelector(
                  "".concat(this.scrollTargetSelector)
                ))
              : this.scrollTargetSelector instanceof HTMLElement &&
                (this.scrollTarget = this.scrollTargetSelector),
            this._doc.style.overflow ||
              (this._doc.style.overflow =
                this.scrollTarget !== this._doc ? "hidden" : ""),
            this.scrollTarget &&
              ((this.eventTarget =
                this.scrollTarget === this._doc ? window : this.scrollTarget),
              (this._boundScrollHandler =
                this._boundScrollHandler || this._scrollHandler.bind(this)),
              this._loop());
        },
        _loop: function () {
          requestAnimationFrame(this._boundScrollHandler);
        },
        detachFromScrollTarget: function () {
          i.unwatch(this, "scrollTargetSelector", this.attachToScrollTarget);
        },
        scroll: function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0,
            e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0;
          this.scrollTarget === this._doc
            ? window.scrollTo(t, e)
            : this._isValidScrollTarget() &&
              ((this.scrollTarget.scrollLeft = t),
              (this.scrollTarget.scrollTop = e));
        },
        scrollWithBehavior: function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0,
            e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            r = arguments.length > 2 ? arguments[2] : void 0,
            n = arguments.length > 3 ? arguments[3] : void 0;
          if (
            ((n =
              "function" == typeof n
                ? n
                : function (t, e, r, n) {
                    return -r * (t /= n) * (t - 2) + e;
                  }),
            "smooth" === r)
          ) {
            var i = Date.now(),
              o = this._scrollTop,
              s = this._scrollLeft,
              a = e - o,
              c = t - s,
              l = 300;
            (function t() {
              var e = Date.now() - i;
              e < l &&
                (this.scroll(n(e, s, c, l), n(e, o, a, l)),
                requestAnimationFrame(t.bind(this)));
            }.call(this));
          } else this.scroll(t, e);
        },
        _isValidScrollTarget: function () {
          return this.scrollTarget instanceof HTMLElement;
        },
        _scrollHandler: function () {},
      };
    },
    s = function (t) {
      return t && t.Math == Math && t;
    },
    a =
      s("object" == typeof globalThis && globalThis) ||
      s("object" == typeof window && window) ||
      s("object" == typeof self && self) ||
      s("object" == typeof r && r) ||
      Function("return this")(),
    c = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    },
    l = !c(function () {
      return (
        7 !=
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1]
      );
    }),
    u = {}.propertyIsEnumerable,
    f = Object.getOwnPropertyDescriptor,
    h = {
      f:
        f && !u.call({ 1: 2 }, 1)
          ? function (t) {
              var e = f(this, t);
              return !!e && e.enumerable;
            }
          : u,
    },
    d = function (t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e,
      };
    },
    p = {}.toString,
    _ = function (t) {
      return p.call(t).slice(8, -1);
    },
    g = "".split,
    m = c(function () {
      return !Object("z").propertyIsEnumerable(0);
    })
      ? function (t) {
          return "String" == _(t) ? g.call(t, "") : Object(t);
        }
      : Object,
    v = function (t) {
      if (null == t) throw TypeError("Can't call method on " + t);
      return t;
    },
    y = function (t) {
      return m(v(t));
    },
    w = function (t) {
      return "object" == typeof t ? null !== t : "function" == typeof t;
    },
    b = function (t, e) {
      if (!w(t)) return t;
      var r, n;
      if (e && "function" == typeof (r = t.toString) && !w((n = r.call(t))))
        return n;
      if ("function" == typeof (r = t.valueOf) && !w((n = r.call(t)))) return n;
      if (!e && "function" == typeof (r = t.toString) && !w((n = r.call(t))))
        return n;
      throw TypeError("Can't convert object to primitive value");
    },
    T = {}.hasOwnProperty,
    S = function (t, e) {
      return T.call(t, e);
    },
    x = a.document,
    E = w(x) && w(x.createElement),
    A = function (t) {
      return E ? x.createElement(t) : {};
    },
    O =
      !l &&
      !c(function () {
        return (
          7 !=
          Object.defineProperty(A("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      }),
    D = Object.getOwnPropertyDescriptor,
    R = {
      f: l
        ? D
        : function (t, e) {
            if (((t = y(t)), (e = b(e, !0)), O))
              try {
                return D(t, e);
              } catch (t) {}
            if (S(t, e)) return d(!h.f.call(t, e), t[e]);
          },
    },
    C = function (t) {
      if (!w(t)) throw TypeError(String(t) + " is not an object");
      return t;
    },
    P = Object.defineProperty,
    I = {
      f: l
        ? P
        : function (t, e, r) {
            if ((C(t), (e = b(e, !0)), C(r), O))
              try {
                return P(t, e, r);
              } catch (t) {}
            if ("get" in r || "set" in r)
              throw TypeError("Accessors not supported");
            return "value" in r && (t[e] = r.value), t;
          },
    },
    L = l
      ? function (t, e, r) {
          return I.f(t, e, d(1, r));
        }
      : function (t, e, r) {
          return (t[e] = r), t;
        },
    M = function (t, e) {
      try {
        L(a, t, e);
      } catch (r) {
        a[t] = e;
      }
      return e;
    },
    k = "__core-js_shared__",
    j = a[k] || M(k, {}),
    F = Function.toString;
  "function" != typeof j.inspectSource &&
    (j.inspectSource = function (t) {
      return F.call(t);
    });
  var z,
    H,
    N,
    W = j.inspectSource,
    q = a.WeakMap,
    B = "function" == typeof q && /native code/.test(W(q)),
    V = n(function (t) {
      (t.exports = function (t, e) {
        return j[t] || (j[t] = void 0 !== e ? e : {});
      })("versions", []).push({
        version: "3.6.5",
        mode: "global",
        copyright: "© 2020 Denis Pushkarev (zloirock.ru)",
      });
    }),
    U = 0,
    G = Math.random(),
    Q = function (t) {
      return (
        "Symbol(" +
        String(void 0 === t ? "" : t) +
        ")_" +
        (++U + G).toString(36)
      );
    },
    Y = V("keys"),
    X = function (t) {
      return Y[t] || (Y[t] = Q(t));
    },
    $ = {},
    K = a.WeakMap;
  if (B) {
    var Z = new K(),
      J = Z.get,
      tt = Z.has,
      et = Z.set;
    (z = function (t, e) {
      return et.call(Z, t, e), e;
    }),
      (H = function (t) {
        return J.call(Z, t) || {};
      }),
      (N = function (t) {
        return tt.call(Z, t);
      });
  } else {
    var rt = X("state");
    ($[rt] = !0),
      (z = function (t, e) {
        return L(t, rt, e), e;
      }),
      (H = function (t) {
        return S(t, rt) ? t[rt] : {};
      }),
      (N = function (t) {
        return S(t, rt);
      });
  }
  var nt = {
      set: z,
      get: H,
      has: N,
      enforce: function (t) {
        return N(t) ? H(t) : z(t, {});
      },
      getterFor: function (t) {
        return function (e) {
          var r;
          if (!w(e) || (r = H(e)).type !== t)
            throw TypeError("Incompatible receiver, " + t + " required");
          return r;
        };
      },
    },
    it = n(function (t) {
      var e = nt.get,
        r = nt.enforce,
        n = String(String).split("String");
      (t.exports = function (t, e, i, o) {
        var s = !!o && !!o.unsafe,
          c = !!o && !!o.enumerable,
          l = !!o && !!o.noTargetGet;
        "function" == typeof i &&
          ("string" != typeof e || S(i, "name") || L(i, "name", e),
          (r(i).source = n.join("string" == typeof e ? e : ""))),
          t !== a
            ? (s ? !l && t[e] && (c = !0) : delete t[e],
              c ? (t[e] = i) : L(t, e, i))
            : c
            ? (t[e] = i)
            : M(e, i);
      })(Function.prototype, "toString", function () {
        return ("function" == typeof this && e(this).source) || W(this);
      });
    }),
    ot = a,
    st = function (t) {
      return "function" == typeof t ? t : void 0;
    },
    at = function (t, e) {
      return arguments.length < 2
        ? st(ot[t]) || st(a[t])
        : (ot[t] && ot[t][e]) || (a[t] && a[t][e]);
    },
    ct = Math.ceil,
    lt = Math.floor,
    ut = function (t) {
      return isNaN((t = +t)) ? 0 : (t > 0 ? lt : ct)(t);
    },
    ft = Math.min,
    ht = function (t) {
      return t > 0 ? ft(ut(t), 9007199254740991) : 0;
    },
    dt = Math.max,
    pt = Math.min,
    _t = function (t) {
      return function (e, r, n) {
        var i,
          o = y(e),
          s = ht(o.length),
          a = (function (t, e) {
            var r = ut(t);
            return r < 0 ? dt(r + e, 0) : pt(r, e);
          })(n, s);
        if (t && r != r) {
          for (; s > a; ) if ((i = o[a++]) != i) return !0;
        } else
          for (; s > a; a++)
            if ((t || a in o) && o[a] === r) return t || a || 0;
        return !t && -1;
      };
    },
    gt = { includes: _t(!0), indexOf: _t(!1) },
    mt = gt.indexOf,
    vt = function (t, e) {
      var r,
        n = y(t),
        i = 0,
        o = [];
      for (r in n) !S($, r) && S(n, r) && o.push(r);
      for (; e.length > i; ) S(n, (r = e[i++])) && (~mt(o, r) || o.push(r));
      return o;
    },
    yt = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ],
    wt = yt.concat("length", "prototype"),
    bt = {
      f:
        Object.getOwnPropertyNames ||
        function (t) {
          return vt(t, wt);
        },
    },
    Tt = { f: Object.getOwnPropertySymbols },
    St =
      at("Reflect", "ownKeys") ||
      function (t) {
        var e = bt.f(C(t)),
          r = Tt.f;
        return r ? e.concat(r(t)) : e;
      },
    xt = function (t, e) {
      for (var r = St(e), n = I.f, i = R.f, o = 0; o < r.length; o++) {
        var s = r[o];
        S(t, s) || n(t, s, i(e, s));
      }
    },
    Et = /#|\.prototype\./,
    At = function (t, e) {
      var r = Dt[Ot(t)];
      return r == Ct || (r != Rt && ("function" == typeof e ? c(e) : !!e));
    },
    Ot = (At.normalize = function (t) {
      return String(t).replace(Et, ".").toLowerCase();
    }),
    Dt = (At.data = {}),
    Rt = (At.NATIVE = "N"),
    Ct = (At.POLYFILL = "P"),
    Pt = At,
    It = R.f,
    Lt = function (t, e) {
      var r,
        n,
        i,
        o,
        s,
        c = t.target,
        l = t.global,
        u = t.stat;
      if ((r = l ? a : u ? a[c] || M(c, {}) : (a[c] || {}).prototype))
        for (n in e) {
          if (
            ((o = e[n]),
            (i = t.noTargetGet ? (s = It(r, n)) && s.value : r[n]),
            !Pt(l ? n : c + (u ? "." : "#") + n, t.forced) && void 0 !== i)
          ) {
            if (typeof o == typeof i) continue;
            xt(o, i);
          }
          (t.sham || (i && i.sham)) && L(o, "sham", !0), it(r, n, o, t);
        }
    },
    Mt = function (t) {
      if ("function" != typeof t)
        throw TypeError(String(t) + " is not a function");
      return t;
    },
    kt = function (t, e, r) {
      if ((Mt(t), void 0 === e)) return t;
      switch (r) {
        case 0:
          return function () {
            return t.call(e);
          };
        case 1:
          return function (r) {
            return t.call(e, r);
          };
        case 2:
          return function (r, n) {
            return t.call(e, r, n);
          };
        case 3:
          return function (r, n, i) {
            return t.call(e, r, n, i);
          };
      }
      return function () {
        return t.apply(e, arguments);
      };
    },
    jt = function (t) {
      return Object(v(t));
    },
    Ft =
      Array.isArray ||
      function (t) {
        return "Array" == _(t);
      },
    zt =
      !!Object.getOwnPropertySymbols &&
      !c(function () {
        return !String(Symbol());
      }),
    Ht = zt && !Symbol.sham && "symbol" == typeof Symbol.iterator,
    Nt = V("wks"),
    Wt = a.Symbol,
    qt = Ht ? Wt : (Wt && Wt.withoutSetter) || Q,
    Bt = function (t) {
      return (
        S(Nt, t) ||
          (zt && S(Wt, t) ? (Nt[t] = Wt[t]) : (Nt[t] = qt("Symbol." + t))),
        Nt[t]
      );
    },
    Vt = Bt("species"),
    Ut = function (t, e) {
      var r;
      return (
        Ft(t) &&
          ("function" != typeof (r = t.constructor) ||
          (r !== Array && !Ft(r.prototype))
            ? w(r) && null === (r = r[Vt]) && (r = void 0)
            : (r = void 0)),
        new (void 0 === r ? Array : r)(0 === e ? 0 : e)
      );
    },
    Gt = [].push,
    Qt = function (t) {
      var e = 1 == t,
        r = 2 == t,
        n = 3 == t,
        i = 4 == t,
        o = 6 == t,
        s = 5 == t || o;
      return function (a, c, l, u) {
        for (
          var f,
            h,
            d = jt(a),
            p = m(d),
            _ = kt(c, l, 3),
            g = ht(p.length),
            v = 0,
            y = u || Ut,
            w = e ? y(a, g) : r ? y(a, 0) : void 0;
          g > v;
          v++
        )
          if ((s || v in p) && ((h = _((f = p[v]), v, d)), t))
            if (e) w[v] = h;
            else if (h)
              switch (t) {
                case 3:
                  return !0;
                case 5:
                  return f;
                case 6:
                  return v;
                case 2:
                  Gt.call(w, f);
              }
            else if (i) return !1;
        return o ? -1 : n || i ? i : w;
      };
    },
    Yt = {
      forEach: Qt(0),
      map: Qt(1),
      filter: Qt(2),
      some: Qt(3),
      every: Qt(4),
      find: Qt(5),
      findIndex: Qt(6),
    },
    Xt = function (t, e) {
      var r = [][t];
      return (
        !!r &&
        c(function () {
          r.call(
            null,
            e ||
              function () {
                throw 1;
              },
            1
          );
        })
      );
    },
    $t = Object.defineProperty,
    Kt = {},
    Zt = function (t) {
      throw t;
    },
    Jt = function (t, e) {
      if (S(Kt, t)) return Kt[t];
      e || (e = {});
      var r = [][t],
        n = !!S(e, "ACCESSORS") && e.ACCESSORS,
        i = S(e, 0) ? e[0] : Zt,
        o = S(e, 1) ? e[1] : void 0;
      return (Kt[t] =
        !!r &&
        !c(function () {
          if (n && !l) return !0;
          var t = { length: -1 };
          n ? $t(t, 1, { enumerable: !0, get: Zt }) : (t[1] = 1),
            r.call(t, i, o);
        }));
    },
    te = Yt.forEach,
    ee = Xt("forEach"),
    re = Jt("forEach"),
    ne =
      ee && re
        ? [].forEach
        : function (t) {
            return te(this, t, arguments.length > 1 ? arguments[1] : void 0);
          };
  Lt({ target: "Array", proto: !0, forced: [].forEach != ne }, { forEach: ne });
  var ie = function () {
    var t = C(this),
      e = "";
    return (
      t.global && (e += "g"),
      t.ignoreCase && (e += "i"),
      t.multiline && (e += "m"),
      t.dotAll && (e += "s"),
      t.unicode && (e += "u"),
      t.sticky && (e += "y"),
      e
    );
  };
  function oe(t, e) {
    return RegExp(t, e);
  }
  var se,
    ae,
    ce = {
      UNSUPPORTED_Y: c(function () {
        var t = oe("a", "y");
        return (t.lastIndex = 2), null != t.exec("abcd");
      }),
      BROKEN_CARET: c(function () {
        var t = oe("^r", "gy");
        return (t.lastIndex = 2), null != t.exec("str");
      }),
    },
    le = RegExp.prototype.exec,
    ue = String.prototype.replace,
    fe = le,
    he =
      ((se = /a/),
      (ae = /b*/g),
      le.call(se, "a"),
      le.call(ae, "a"),
      0 !== se.lastIndex || 0 !== ae.lastIndex),
    de = ce.UNSUPPORTED_Y || ce.BROKEN_CARET,
    pe = void 0 !== /()??/.exec("")[1];
  (he || pe || de) &&
    (fe = function (t) {
      var e,
        r,
        n,
        i,
        o = this,
        s = de && o.sticky,
        a = ie.call(o),
        c = o.source,
        l = 0,
        u = t;
      return (
        s &&
          (-1 === (a = a.replace("y", "")).indexOf("g") && (a += "g"),
          (u = String(t).slice(o.lastIndex)),
          o.lastIndex > 0 &&
            (!o.multiline || (o.multiline && "\n" !== t[o.lastIndex - 1])) &&
            ((c = "(?: " + c + ")"), (u = " " + u), l++),
          (r = new RegExp("^(?:" + c + ")", a))),
        pe && (r = new RegExp("^" + c + "$(?!\\s)", a)),
        he && (e = o.lastIndex),
        (n = le.call(s ? r : o, u)),
        s
          ? n
            ? ((n.input = n.input.slice(l)),
              (n[0] = n[0].slice(l)),
              (n.index = o.lastIndex),
              (o.lastIndex += n[0].length))
            : (o.lastIndex = 0)
          : he && n && (o.lastIndex = o.global ? n.index + n[0].length : e),
        pe &&
          n &&
          n.length > 1 &&
          ue.call(n[0], r, function () {
            for (i = 1; i < arguments.length - 2; i++)
              void 0 === arguments[i] && (n[i] = void 0);
          }),
        n
      );
    });
  var _e = fe;
  Lt({ target: "RegExp", proto: !0, forced: /./.exec !== _e }, { exec: _e });
  var ge = Bt("species"),
    me = !c(function () {
      var t = /./;
      return (
        (t.exec = function () {
          var t = [];
          return (t.groups = { a: "7" }), t;
        }),
        "7" !== "".replace(t, "$<a>")
      );
    }),
    ve = "$0" === "a".replace(/./, "$0"),
    ye = Bt("replace"),
    we = !!/./[ye] && "" === /./[ye]("a", "$0"),
    be = !c(function () {
      var t = /(?:)/,
        e = t.exec;
      t.exec = function () {
        return e.apply(this, arguments);
      };
      var r = "ab".split(t);
      return 2 !== r.length || "a" !== r[0] || "b" !== r[1];
    }),
    Te = function (t, e, r, n) {
      var i = Bt(t),
        o = !c(function () {
          var e = {};
          return (
            (e[i] = function () {
              return 7;
            }),
            7 != ""[t](e)
          );
        }),
        s =
          o &&
          !c(function () {
            var e = !1,
              r = /a/;
            return (
              "split" === t &&
                (((r = {}).constructor = {}),
                (r.constructor[ge] = function () {
                  return r;
                }),
                (r.flags = ""),
                (r[i] = /./[i])),
              (r.exec = function () {
                return (e = !0), null;
              }),
              r[i](""),
              !e
            );
          });
      if (
        !o ||
        !s ||
        ("replace" === t && (!me || !ve || we)) ||
        ("split" === t && !be)
      ) {
        var a = /./[i],
          l = r(
            i,
            ""[t],
            function (t, e, r, n, i) {
              return e.exec === _e
                ? o && !i
                  ? { done: !0, value: a.call(e, r, n) }
                  : { done: !0, value: t.call(r, e, n) }
                : { done: !1 };
            },
            {
              REPLACE_KEEPS_$0: ve,
              REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: we,
            }
          ),
          u = l[0],
          f = l[1];
        it(String.prototype, t, u),
          it(
            RegExp.prototype,
            i,
            2 == e
              ? function (t, e) {
                  return f.call(t, this, e);
                }
              : function (t) {
                  return f.call(t, this);
                }
          );
      }
      n && L(RegExp.prototype[i], "sham", !0);
    },
    Se = Bt("match"),
    xe = Bt("species"),
    Ee = function (t) {
      return function (e, r) {
        var n,
          i,
          o = String(v(e)),
          s = ut(r),
          a = o.length;
        return s < 0 || s >= a
          ? t
            ? ""
            : void 0
          : (n = o.charCodeAt(s)) < 55296 ||
            n > 56319 ||
            s + 1 === a ||
            (i = o.charCodeAt(s + 1)) < 56320 ||
            i > 57343
          ? t
            ? o.charAt(s)
            : n
          : t
          ? o.slice(s, s + 2)
          : i - 56320 + ((n - 55296) << 10) + 65536;
      };
    },
    Ae = { codeAt: Ee(!1), charAt: Ee(!0) },
    Oe = Ae.charAt,
    De = function (t, e, r) {
      return e + (r ? Oe(t, e).length : 1);
    },
    Re = function (t, e) {
      var r = t.exec;
      if ("function" == typeof r) {
        var n = r.call(t, e);
        if ("object" != typeof n)
          throw TypeError(
            "RegExp exec method returned something other than an Object or null"
          );
        return n;
      }
      if ("RegExp" !== _(t))
        throw TypeError("RegExp#exec called on incompatible receiver");
      return _e.call(t, e);
    },
    Ce = [].push,
    Pe = Math.min,
    Ie = 4294967295,
    Le = !c(function () {
      return !RegExp(Ie, "y");
    });
  Te(
    "split",
    2,
    function (t, e, r) {
      var n;
      return (
        (n =
          "c" == "abbc".split(/(b)*/)[1] ||
          4 != "test".split(/(?:)/, -1).length ||
          2 != "ab".split(/(?:ab)*/).length ||
          4 != ".".split(/(.?)(.?)/).length ||
          ".".split(/()()/).length > 1 ||
          "".split(/.?/).length
            ? function (t, r) {
                var n,
                  i,
                  o = String(v(this)),
                  s = void 0 === r ? Ie : r >>> 0;
                if (0 === s) return [];
                if (void 0 === t) return [o];
                if (
                  !w((n = t)) ||
                  !(void 0 !== (i = n[Se]) ? i : "RegExp" == _(n))
                )
                  return e.call(o, t, s);
                for (
                  var a,
                    c,
                    l,
                    u = [],
                    f =
                      (t.ignoreCase ? "i" : "") +
                      (t.multiline ? "m" : "") +
                      (t.unicode ? "u" : "") +
                      (t.sticky ? "y" : ""),
                    h = 0,
                    d = new RegExp(t.source, f + "g");
                  (a = _e.call(d, o)) &&
                  !(
                    (c = d.lastIndex) > h &&
                    (u.push(o.slice(h, a.index)),
                    a.length > 1 &&
                      a.index < o.length &&
                      Ce.apply(u, a.slice(1)),
                    (l = a[0].length),
                    (h = c),
                    u.length >= s)
                  );

                )
                  d.lastIndex === a.index && d.lastIndex++;
                return (
                  h === o.length
                    ? (!l && d.test("")) || u.push("")
                    : u.push(o.slice(h)),
                  u.length > s ? u.slice(0, s) : u
                );
              }
            : "0".split(void 0, 0).length
            ? function (t, r) {
                return void 0 === t && 0 === r ? [] : e.call(this, t, r);
              }
            : e),
        [
          function (e, r) {
            var i = v(this),
              o = null == e ? void 0 : e[t];
            return void 0 !== o ? o.call(e, i, r) : n.call(String(i), e, r);
          },
          function (t, i) {
            var o = r(n, t, this, i, n !== e);
            if (o.done) return o.value;
            var s = C(t),
              a = String(this),
              c = (function (t, e) {
                var r,
                  n = C(t).constructor;
                return void 0 === n || null == (r = C(n)[xe]) ? e : Mt(r);
              })(s, RegExp),
              l = s.unicode,
              u =
                (s.ignoreCase ? "i" : "") +
                (s.multiline ? "m" : "") +
                (s.unicode ? "u" : "") +
                (Le ? "y" : "g"),
              f = new c(Le ? s : "^(?:" + s.source + ")", u),
              h = void 0 === i ? Ie : i >>> 0;
            if (0 === h) return [];
            if (0 === a.length) return null === Re(f, a) ? [a] : [];
            for (var d = 0, p = 0, _ = []; p < a.length; ) {
              f.lastIndex = Le ? p : 0;
              var g,
                m = Re(f, Le ? a : a.slice(p));
              if (
                null === m ||
                (g = Pe(ht(f.lastIndex + (Le ? 0 : p)), a.length)) === d
              )
                p = De(a, p, l);
              else {
                if ((_.push(a.slice(d, p)), _.length === h)) return _;
                for (var v = 1; v <= m.length - 1; v++)
                  if ((_.push(m[v]), _.length === h)) return _;
                p = d = g;
              }
            }
            return _.push(a.slice(d)), _;
          },
        ]
      );
    },
    !Le
  );
  var Me = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0,
  };
  for (var ke in Me) {
    var je = a[ke],
      Fe = je && je.prototype;
    if (Fe && Fe.forEach !== ne)
      try {
        L(Fe, "forEach", ne);
      } catch (t) {
        Fe.forEach = ne;
      }
  }
  function ze(t) {
    return (ze =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              "function" == typeof Symbol &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          })(t);
  }
  function He(t, e, r) {
    return (
      e in t
        ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = r),
      t
    );
  }
  function Ne(t) {
    return (
      (function (t) {
        if (Array.isArray(t)) return We(t);
      })(t) ||
      (function (t) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
          return Array.from(t);
      })(t) ||
      (function (t, e) {
        if (!t) return;
        if ("string" == typeof t) return We(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        "Object" === r && t.constructor && (r = t.constructor.name);
        if ("Map" === r || "Set" === r) return Array.from(t);
        if (
          "Arguments" === r ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
          return We(t, e);
      })(t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function We(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
    return n;
  }
  var qe,
    Be,
    Ve = function () {
      return {
        _scrollEffects: {},
        _effectsRunFn: [],
        _effects: [],
        _effectsConfig: null,
        get effects() {
          return this.element.dataset.effects
            ? this.element.dataset.effects.split(" ")
            : [];
        },
        get effectsConfig() {
          if (this._effectsConfig) return this._effectsConfig;
          if (this.element.hasAttribute("data-effects-config"))
            try {
              return JSON.parse(
                this.element.getAttribute("data-effects-config")
              );
            } catch (t) {}
          return {};
        },
        set effectsConfig(t) {
          this._effectsConfig = t;
        },
        get _clampedScrollTop() {
          return Math.max(0, this._scrollTop);
        },
        registerEffect: function (t, e) {
          if (void 0 !== this._scrollEffects[t])
            throw new Error("effect ".concat(t, " is already registered."));
          this._scrollEffects[t] = e;
        },
        isOnScreen: function () {
          return !1;
        },
        isContentBelow: function () {
          return !1;
        },
        createEffect: function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            r = this._scrollEffects[t];
          if (void 0 === ze(r))
            throw new ReferenceError(
              "Scroll effect ".concat(t, " was not registered")
            );
          var n = this._boundEffect(r, e);
          return n.setUp(), n;
        },
        _boundEffect: function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            r = parseFloat(e.startsAt || 0),
            n = parseFloat(e.endsAt || 1),
            i = n - r,
            o = Function(),
            s =
              0 === r && 1 === n
                ? t.run
                : function (e, n) {
                    t.run.call(this, Math.max(0, (e - r) / i), n);
                  };
          return {
            setUp: t.setUp ? t.setUp.bind(this, e) : o,
            run: t.run ? s.bind(this) : o,
            tearDown: t.tearDown ? t.tearDown.bind(this) : o,
          };
        },
        _setUpEffects: function () {
          var t = this;
          this._tearDownEffects(),
            this.effects.forEach(function (e) {
              var r;
              (r = t._scrollEffects[e]) &&
                t._effects.push(t._boundEffect(r, t.effectsConfig[e]));
            }),
            this._effects.forEach(function (e) {
              !1 !== e.setUp() && t._effectsRunFn.push(e.run);
            });
        },
        _tearDownEffects: function () {
          this._effects.forEach(function (t) {
            t.tearDown();
          }),
            (this._effectsRunFn = []),
            (this._effects = []);
        },
        _runEffects: function (t, e) {
          this._effectsRunFn.forEach(function (r) {
            return r(t, e);
          });
        },
        _scrollHandler: function () {
          this._updateScrollState(this._clampedScrollTop), this._loop();
        },
        _updateScrollState: function (t) {},
        _transform: function (t, r) {
          (r = r || this.element), e.util.transform(t, r);
        },
      };
    },
    Ue = function (t, e, r) {
      var n = b(e);
      n in t ? I.f(t, n, d(0, r)) : (t[n] = r);
    },
    Ge = at("navigator", "userAgent") || "",
    Qe = a.process,
    Ye = Qe && Qe.versions,
    Xe = Ye && Ye.v8;
  Xe
    ? (Be = (qe = Xe.split("."))[0] + qe[1])
    : Ge &&
      (!(qe = Ge.match(/Edge\/(\d+)/)) || qe[1] >= 74) &&
      (qe = Ge.match(/Chrome\/(\d+)/)) &&
      (Be = qe[1]);
  var $e = Be && +Be,
    Ke = Bt("species"),
    Ze = function (t) {
      return (
        $e >= 51 ||
        !c(function () {
          var e = [];
          return (
            ((e.constructor = {})[Ke] = function () {
              return { foo: 1 };
            }),
            1 !== e[t](Boolean).foo
          );
        })
      );
    },
    Je = Bt("isConcatSpreadable"),
    tr = 9007199254740991,
    er = "Maximum allowed index exceeded",
    rr =
      $e >= 51 ||
      !c(function () {
        var t = [];
        return (t[Je] = !1), t.concat()[0] !== t;
      }),
    nr = Ze("concat"),
    ir = function (t) {
      if (!w(t)) return !1;
      var e = t[Je];
      return void 0 !== e ? !!e : Ft(t);
    };
  Lt(
    { target: "Array", proto: !0, forced: !rr || !nr },
    {
      concat: function (t) {
        var e,
          r,
          n,
          i,
          o,
          s = jt(this),
          a = Ut(s, 0),
          c = 0;
        for (e = -1, n = arguments.length; e < n; e++)
          if (ir((o = -1 === e ? s : arguments[e]))) {
            if (c + (i = ht(o.length)) > tr) throw TypeError(er);
            for (r = 0; r < i; r++, c++) r in o && Ue(a, c, o[r]);
          } else {
            if (c >= tr) throw TypeError(er);
            Ue(a, c++, o);
          }
        return (a.length = c), a;
      },
    }
  );
  var or = Yt.map,
    sr = Ze("map"),
    ar = Jt("map");
  Lt(
    { target: "Array", proto: !0, forced: !sr || !ar },
    {
      map: function (t) {
        return or(this, t, arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  );
  var cr = I.f,
    lr = Function.prototype,
    ur = lr.toString,
    fr = /^\s*function ([^ (]*)/,
    hr = "name";
  l &&
    !(hr in lr) &&
    cr(lr, hr, {
      configurable: !0,
      get: function () {
        try {
          return ur.call(this).match(fr)[1];
        } catch (t) {
          return "";
        }
      },
    });
  var dr = /"/g;
  Lt(
    {
      target: "String",
      proto: !0,
      forced: (function (t) {
        return c(function () {
          var e = ""[t]('"');
          return e !== e.toLowerCase() || e.split('"').length > 3;
        });
      })("fixed"),
    },
    {
      fixed: function () {
        return (
          (t = "tt"),
          (e = ""),
          (r = ""),
          (n = String(v(this))),
          (i = "<" + t),
          "" !== e &&
            (i += " " + e + '="' + String(r).replace(dr, "&quot;") + '"'),
          i + ">" + n + "</" + t + ">"
        );
        var t, e, r, n, i;
      },
    }
  );
  var pr = ["DOMMouseScroll", "mousewheel"],
    _r = function (t, e, r, n, i) {
      t || (t = document),
        e || (e = window),
        "boolean" != typeof r && (r = !0),
        "function" != typeof i && (i = null);
      var o,
        s,
        a,
        c = function (t) {
          (t = t || window.event),
            (i && i.call(this, t)) ||
              (function (t, e, r, n) {
                r &&
                  (t.preventDefault
                    ? t.preventDefault()
                    : (event.returnValue = !1));
                var i = t.detail || -t.wheelDelta / 40;
                (i *= 19),
                  "number" != typeof n || isNaN(n) || (i *= n),
                  t.wheelDeltaX ||
                  ("axis" in t &&
                    "HORIZONTAL_AXIS" in t &&
                    t.axis == t.HORIZONTAL_AXIS)
                    ? e.scrollBy
                      ? e.scrollBy(i, 0)
                      : (e.scrollLeft += i)
                    : e.scrollBy
                    ? e.scrollBy(0, i)
                    : (e.scrollTop += i);
              })(t, e, r, n);
        };
      return (
        (o = t.addEventListener)
          ? (o.call(t, pr[0], c, !1), o.call(t, pr[1], c, !1))
          : (o = t.attachEvent) && o.call(t, "on" + pr[1], c),
        (s = t.removeEventListener)
          ? (a = function () {
              s.call(t, pr[0], c, !1), s.call(t, pr[1], c, !1);
            })
          : (s = t.detachEvent) &&
            (a = function () {
              s.call(t, "on" + pr[1], c);
            }),
        { restore: a }
      );
    },
    gr =
      "".repeat ||
      function (t) {
        var e = String(v(this)),
          r = "",
          n = ut(t);
        if (n < 0 || n == 1 / 0)
          throw RangeError("Wrong number of repetitions");
        for (; n > 0; (n >>>= 1) && (e += e)) 1 & n && (r += e);
        return r;
      },
    mr = (1).toFixed,
    vr = Math.floor,
    yr = function (t, e, r) {
      return 0 === e
        ? r
        : e % 2 == 1
        ? yr(t, e - 1, r * t)
        : yr(t * t, e / 2, r);
    },
    wr =
      (mr &&
        ("0.000" !== (8e-5).toFixed(3) ||
          "1" !== (0.9).toFixed(0) ||
          "1.25" !== (1.255).toFixed(2) ||
          "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0))) ||
      !c(function () {
        mr.call({});
      });
  Lt(
    { target: "Number", proto: !0, forced: wr },
    {
      toFixed: function (t) {
        var e,
          r,
          n,
          i,
          o = (function (t) {
            if ("number" != typeof t && "Number" != _(t))
              throw TypeError("Incorrect invocation");
            return +t;
          })(this),
          s = ut(t),
          a = [0, 0, 0, 0, 0, 0],
          c = "",
          l = "0",
          u = function (t, e) {
            for (var r = -1, n = e; ++r < 6; )
              (n += t * a[r]), (a[r] = n % 1e7), (n = vr(n / 1e7));
          },
          f = function (t) {
            for (var e = 6, r = 0; --e >= 0; )
              (r += a[e]), (a[e] = vr(r / t)), (r = (r % t) * 1e7);
          },
          h = function () {
            for (var t = 6, e = ""; --t >= 0; )
              if ("" !== e || 0 === t || 0 !== a[t]) {
                var r = String(a[t]);
                e = "" === e ? r : e + gr.call("0", 7 - r.length) + r;
              }
            return e;
          };
        if (s < 0 || s > 20) throw RangeError("Incorrect fraction digits");
        if (o != o) return "NaN";
        if (o <= -1e21 || o >= 1e21) return String(o);
        if ((o < 0 && ((c = "-"), (o = -o)), o > 1e-21))
          if (
            ((r =
              (e =
                (function (t) {
                  for (var e = 0, r = t; r >= 4096; ) (e += 12), (r /= 4096);
                  for (; r >= 2; ) (e += 1), (r /= 2);
                  return e;
                })(o * yr(2, 69, 1)) - 69) < 0
                ? o * yr(2, -e, 1)
                : o / yr(2, e, 1)),
            (r *= 4503599627370496),
            (e = 52 - e) > 0)
          ) {
            for (u(0, r), n = s; n >= 7; ) u(1e7, 0), (n -= 7);
            for (u(yr(10, n, 1), 0), n = e - 1; n >= 23; )
              f(1 << 23), (n -= 23);
            f(1 << n), u(1, 1), f(2), (l = h());
          } else u(0, r), u(1 << -e, 0), (l = h() + gr.call("0", s));
        return (l =
          s > 0
            ? c +
              ((i = l.length) <= s
                ? "0." + gr.call("0", s - i) + l
                : l.slice(0, i - s) + "." + l.slice(i - s))
            : c + l);
      },
    }
  );
  var br = '[class*="__bg-front"]',
    Tr = '[class*="__bg-rear"]',
    Sr = {
      name: "blend-background",
      setUp: function () {
        var t = this,
          e = this.element.querySelector(br),
          r = this.element.querySelector(Tr);
        [e, r].map(function (e) {
          e &&
            "" === e.style.transform &&
            (t._transform("translateZ(0)", e),
            (e.style.willChange = "opacity"));
        }),
          (r.style.opacity = 0);
      },
      run: function (t, e) {
        var r = this.element.querySelector(br),
          n = this.element.querySelector(Tr);
        (r.style.opacity = (1 - t).toFixed(5)),
          (n.style.opacity = t.toFixed(5));
      },
    },
    xr = Yt.filter,
    Er = Ze("filter"),
    Ar = Jt("filter");
  Lt(
    { target: "Array", proto: !0, forced: !Er || !Ar },
    {
      filter: function (t) {
        return xr(this, t, arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  );
  var Or,
    Dr =
      Object.keys ||
      function (t) {
        return vt(t, yt);
      },
    Rr = l
      ? Object.defineProperties
      : function (t, e) {
          C(t);
          for (var r, n = Dr(e), i = n.length, o = 0; i > o; )
            I.f(t, (r = n[o++]), e[r]);
          return t;
        },
    Cr = at("document", "documentElement"),
    Pr = X("IE_PROTO"),
    Ir = function () {},
    Lr = function (t) {
      return "<script>" + t + "</" + "script>";
    },
    Mr = function () {
      try {
        Or = document.domain && new ActiveXObject("htmlfile");
      } catch (t) {}
      var t, e;
      Mr = Or
        ? (function (t) {
            t.write(Lr("")), t.close();
            var e = t.parentWindow.Object;
            return (t = null), e;
          })(Or)
        : (((e = A("iframe")).style.display = "none"),
          Cr.appendChild(e),
          (e.src = String("javascript:")),
          (t = e.contentWindow.document).open(),
          t.write(Lr("document.F=Object")),
          t.close(),
          t.F);
      for (var r = yt.length; r--; ) delete Mr.prototype[yt[r]];
      return Mr();
    };
  $[Pr] = !0;
  var kr =
      Object.create ||
      function (t, e) {
        var r;
        return (
          null !== t
            ? ((Ir.prototype = C(t)),
              (r = new Ir()),
              (Ir.prototype = null),
              (r[Pr] = t))
            : (r = Mr()),
          void 0 === e ? r : Rr(r, e)
        );
      },
    jr = Bt("unscopables"),
    Fr = Array.prototype;
  null == Fr[jr] && I.f(Fr, jr, { configurable: !0, value: kr(null) });
  var zr,
    Hr,
    Nr,
    Wr = function (t) {
      Fr[jr][t] = !0;
    },
    qr = {},
    Br = !c(function () {
      function t() {}
      return (
        (t.prototype.constructor = null),
        Object.getPrototypeOf(new t()) !== t.prototype
      );
    }),
    Vr = X("IE_PROTO"),
    Ur = Object.prototype,
    Gr = Br
      ? Object.getPrototypeOf
      : function (t) {
          return (
            (t = jt(t)),
            S(t, Vr)
              ? t[Vr]
              : "function" == typeof t.constructor && t instanceof t.constructor
              ? t.constructor.prototype
              : t instanceof Object
              ? Ur
              : null
          );
        },
    Qr = Bt("iterator"),
    Yr = !1;
  [].keys &&
    ("next" in (Nr = [].keys())
      ? (Hr = Gr(Gr(Nr))) !== Object.prototype && (zr = Hr)
      : (Yr = !0)),
    null == zr && (zr = {}),
    S(zr, Qr) ||
      L(zr, Qr, function () {
        return this;
      });
  var Xr = { IteratorPrototype: zr, BUGGY_SAFARI_ITERATORS: Yr },
    $r = I.f,
    Kr = Bt("toStringTag"),
    Zr = function (t, e, r) {
      t &&
        !S((t = r ? t : t.prototype), Kr) &&
        $r(t, Kr, { configurable: !0, value: e });
    },
    Jr = Xr.IteratorPrototype,
    tn = function () {
      return this;
    },
    en =
      Object.setPrototypeOf ||
      ("__proto__" in {}
        ? (function () {
            var t,
              e = !1,
              r = {};
            try {
              (t = Object.getOwnPropertyDescriptor(
                Object.prototype,
                "__proto__"
              ).set).call(r, []),
                (e = r instanceof Array);
            } catch (t) {}
            return function (r, n) {
              return (
                C(r),
                (function (t) {
                  if (!w(t) && null !== t)
                    throw TypeError(
                      "Can't set " + String(t) + " as a prototype"
                    );
                })(n),
                e ? t.call(r, n) : (r.__proto__ = n),
                r
              );
            };
          })()
        : void 0),
    rn = Xr.IteratorPrototype,
    nn = Xr.BUGGY_SAFARI_ITERATORS,
    on = Bt("iterator"),
    sn = "keys",
    an = "values",
    cn = "entries",
    ln = function () {
      return this;
    },
    un = function (t, e, r, n, i, o, s) {
      !(function (t, e, r) {
        var n = e + " Iterator";
        (t.prototype = kr(Jr, { next: d(1, r) })), Zr(t, n, !1), (qr[n] = tn);
      })(r, e, n);
      var a,
        c,
        l,
        u = function (t) {
          if (t === i && g) return g;
          if (!nn && t in p) return p[t];
          switch (t) {
            case sn:
            case an:
            case cn:
              return function () {
                return new r(this, t);
              };
          }
          return function () {
            return new r(this);
          };
        },
        f = e + " Iterator",
        h = !1,
        p = t.prototype,
        _ = p[on] || p["@@iterator"] || (i && p[i]),
        g = (!nn && _) || u(i),
        m = ("Array" == e && p.entries) || _;
      if (
        (m &&
          ((a = Gr(m.call(new t()))),
          rn !== Object.prototype &&
            a.next &&
            (Gr(a) !== rn &&
              (en ? en(a, rn) : "function" != typeof a[on] && L(a, on, ln)),
            Zr(a, f, !0))),
        i == an &&
          _ &&
          _.name !== an &&
          ((h = !0),
          (g = function () {
            return _.call(this);
          })),
        p[on] !== g && L(p, on, g),
        (qr[e] = g),
        i)
      )
        if (((c = { values: u(an), keys: o ? g : u(sn), entries: u(cn) }), s))
          for (l in c) (nn || h || !(l in p)) && it(p, l, c[l]);
        else Lt({ target: e, proto: !0, forced: nn || h }, c);
      return c;
    },
    fn = "Array Iterator",
    hn = nt.set,
    dn = nt.getterFor(fn),
    pn = un(
      Array,
      "Array",
      function (t, e) {
        hn(this, { type: fn, target: y(t), index: 0, kind: e });
      },
      function () {
        var t = dn(this),
          e = t.target,
          r = t.kind,
          n = t.index++;
        return !e || n >= e.length
          ? ((t.target = void 0), { value: void 0, done: !0 })
          : "keys" == r
          ? { value: n, done: !1 }
          : "values" == r
          ? { value: e[n], done: !1 }
          : { value: [n, e[n]], done: !1 };
      },
      "values"
    );
  (qr.Arguments = qr.Array), Wr("keys"), Wr("values"), Wr("entries");
  var _n = [].join,
    gn = m != Object,
    mn = Xt("join", ",");
  Lt(
    { target: "Array", proto: !0, forced: gn || !mn },
    {
      join: function (t) {
        return _n.call(y(this), void 0 === t ? "," : t);
      },
    }
  );
  var vn = {};
  vn[Bt("toStringTag")] = "z";
  var yn = "[object z]" === String(vn),
    wn = Bt("toStringTag"),
    bn =
      "Arguments" ==
      _(
        (function () {
          return arguments;
        })()
      ),
    Tn = yn
      ? _
      : function (t) {
          var e, r, n;
          return void 0 === t
            ? "Undefined"
            : null === t
            ? "Null"
            : "string" ==
              typeof (r = (function (t, e) {
                try {
                  return t[e];
                } catch (t) {}
              })((e = Object(t)), wn))
            ? r
            : bn
            ? _(e)
            : "Object" == (n = _(e)) && "function" == typeof e.callee
            ? "Arguments"
            : n;
        },
    Sn = yn
      ? {}.toString
      : function () {
          return "[object " + Tn(this) + "]";
        };
  yn || it(Object.prototype, "toString", Sn, { unsafe: !0 });
  var xn = !c(function () {
      return Object.isExtensible(Object.preventExtensions({}));
    }),
    En = n(function (t) {
      var e = I.f,
        r = Q("meta"),
        n = 0,
        i =
          Object.isExtensible ||
          function () {
            return !0;
          },
        o = function (t) {
          e(t, r, { value: { objectID: "O" + ++n, weakData: {} } });
        },
        s = (t.exports = {
          REQUIRED: !1,
          fastKey: function (t, e) {
            if (!w(t))
              return "symbol" == typeof t
                ? t
                : ("string" == typeof t ? "S" : "P") + t;
            if (!S(t, r)) {
              if (!i(t)) return "F";
              if (!e) return "E";
              o(t);
            }
            return t[r].objectID;
          },
          getWeakData: function (t, e) {
            if (!S(t, r)) {
              if (!i(t)) return !0;
              if (!e) return !1;
              o(t);
            }
            return t[r].weakData;
          },
          onFreeze: function (t) {
            return xn && s.REQUIRED && i(t) && !S(t, r) && o(t), t;
          },
        });
      $[r] = !0;
    }),
    An = Bt("iterator"),
    On = Array.prototype,
    Dn = function (t) {
      return void 0 !== t && (qr.Array === t || On[An] === t);
    },
    Rn = Bt("iterator"),
    Cn = function (t) {
      if (null != t) return t[Rn] || t["@@iterator"] || qr[Tn(t)];
    },
    Pn = function (t, e, r, n) {
      try {
        return n ? e(C(r)[0], r[1]) : e(r);
      } catch (e) {
        var i = t.return;
        throw (void 0 !== i && C(i.call(t)), e);
      }
    },
    In = n(function (t) {
      var e = function (t, e) {
        (this.stopped = t), (this.result = e);
      };
      (t.exports = function (t, r, n, i, o) {
        var s,
          a,
          c,
          l,
          u,
          f,
          h,
          d = kt(r, n, i ? 2 : 1);
        if (o) s = t;
        else {
          if ("function" != typeof (a = Cn(t)))
            throw TypeError("Target is not iterable");
          if (Dn(a)) {
            for (c = 0, l = ht(t.length); l > c; c++)
              if (
                (u = i ? d(C((h = t[c]))[0], h[1]) : d(t[c])) &&
                u instanceof e
              )
                return u;
            return new e(!1);
          }
          s = a.call(t);
        }
        for (f = s.next; !(h = f.call(s)).done; )
          if (
            "object" == typeof (u = Pn(s, d, h.value, i)) &&
            u &&
            u instanceof e
          )
            return u;
        return new e(!1);
      }).stop = function (t) {
        return new e(!0, t);
      };
    }),
    Ln = function (t, e, r) {
      if (!(t instanceof e))
        throw TypeError("Incorrect " + (r ? r + " " : "") + "invocation");
      return t;
    },
    Mn = Bt("iterator"),
    kn = !1;
  try {
    var jn = 0,
      Fn = {
        next: function () {
          return { done: !!jn++ };
        },
        return: function () {
          kn = !0;
        },
      };
    (Fn[Mn] = function () {
      return this;
    }),
      Array.from(Fn, function () {
        throw 2;
      });
  } catch (t) {}
  var zn = function (t, e) {
      if (!e && !kn) return !1;
      var r = !1;
      try {
        var n = {};
        (n[Mn] = function () {
          return {
            next: function () {
              return { done: (r = !0) };
            },
          };
        }),
          t(n);
      } catch (t) {}
      return r;
    },
    Hn = function (t, e, r) {
      var n, i;
      return (
        en &&
          "function" == typeof (n = e.constructor) &&
          n !== r &&
          w((i = n.prototype)) &&
          i !== r.prototype &&
          en(t, i),
        t
      );
    },
    Nn = function (t, e, r) {
      for (var n in e) it(t, n, e[n], r);
      return t;
    },
    Wn = Bt("species"),
    qn = I.f,
    Bn = En.fastKey,
    Vn = nt.set,
    Un = nt.getterFor,
    Gn =
      ((function (t, e, r) {
        var n = -1 !== t.indexOf("Map"),
          i = -1 !== t.indexOf("Weak"),
          o = n ? "set" : "add",
          s = a[t],
          l = s && s.prototype,
          u = s,
          f = {},
          h = function (t) {
            var e = l[t];
            it(
              l,
              t,
              "add" == t
                ? function (t) {
                    return e.call(this, 0 === t ? 0 : t), this;
                  }
                : "delete" == t
                ? function (t) {
                    return !(i && !w(t)) && e.call(this, 0 === t ? 0 : t);
                  }
                : "get" == t
                ? function (t) {
                    return i && !w(t) ? void 0 : e.call(this, 0 === t ? 0 : t);
                  }
                : "has" == t
                ? function (t) {
                    return !(i && !w(t)) && e.call(this, 0 === t ? 0 : t);
                  }
                : function (t, r) {
                    return e.call(this, 0 === t ? 0 : t, r), this;
                  }
            );
          };
        if (
          Pt(
            t,
            "function" != typeof s ||
              !(
                i ||
                (l.forEach &&
                  !c(function () {
                    new s().entries().next();
                  }))
              )
          )
        )
          (u = r.getConstructor(e, t, n, o)), (En.REQUIRED = !0);
        else if (Pt(t, !0)) {
          var d = new u(),
            p = d[o](i ? {} : -0, 1) != d,
            _ = c(function () {
              d.has(1);
            }),
            g = zn(function (t) {
              new s(t);
            }),
            m =
              !i &&
              c(function () {
                for (var t = new s(), e = 5; e--; ) t[o](e, e);
                return !t.has(-0);
              });
          g ||
            (((u = e(function (e, r) {
              Ln(e, u, t);
              var i = Hn(new s(), e, u);
              return null != r && In(r, i[o], i, n), i;
            })).prototype = l),
            (l.constructor = u)),
            (_ || m) && (h("delete"), h("has"), n && h("get")),
            (m || p) && h(o),
            i && l.clear && delete l.clear;
        }
        (f[t] = u),
          Lt({ global: !0, forced: u != s }, f),
          Zr(u, t),
          i || r.setStrong(u, t, n);
      })(
        "Set",
        function (t) {
          return function () {
            return t(this, arguments.length ? arguments[0] : void 0);
          };
        },
        {
          getConstructor: function (t, e, r, n) {
            var i = t(function (t, o) {
                Ln(t, i, e),
                  Vn(t, {
                    type: e,
                    index: kr(null),
                    first: void 0,
                    last: void 0,
                    size: 0,
                  }),
                  l || (t.size = 0),
                  null != o && In(o, t[n], t, r);
              }),
              o = Un(e),
              s = function (t, e, r) {
                var n,
                  i,
                  s = o(t),
                  c = a(t, e);
                return (
                  c
                    ? (c.value = r)
                    : ((s.last = c =
                        {
                          index: (i = Bn(e, !0)),
                          key: e,
                          value: r,
                          previous: (n = s.last),
                          next: void 0,
                          removed: !1,
                        }),
                      s.first || (s.first = c),
                      n && (n.next = c),
                      l ? s.size++ : t.size++,
                      "F" !== i && (s.index[i] = c)),
                  t
                );
              },
              a = function (t, e) {
                var r,
                  n = o(t),
                  i = Bn(e);
                if ("F" !== i) return n.index[i];
                for (r = n.first; r; r = r.next) if (r.key == e) return r;
              };
            return (
              Nn(i.prototype, {
                clear: function () {
                  for (var t = o(this), e = t.index, r = t.first; r; )
                    (r.removed = !0),
                      r.previous && (r.previous = r.previous.next = void 0),
                      delete e[r.index],
                      (r = r.next);
                  (t.first = t.last = void 0),
                    l ? (t.size = 0) : (this.size = 0);
                },
                delete: function (t) {
                  var e = this,
                    r = o(e),
                    n = a(e, t);
                  if (n) {
                    var i = n.next,
                      s = n.previous;
                    delete r.index[n.index],
                      (n.removed = !0),
                      s && (s.next = i),
                      i && (i.previous = s),
                      r.first == n && (r.first = i),
                      r.last == n && (r.last = s),
                      l ? r.size-- : e.size--;
                  }
                  return !!n;
                },
                forEach: function (t) {
                  for (
                    var e,
                      r = o(this),
                      n = kt(
                        t,
                        arguments.length > 1 ? arguments[1] : void 0,
                        3
                      );
                    (e = e ? e.next : r.first);

                  )
                    for (n(e.value, e.key, this); e && e.removed; )
                      e = e.previous;
                },
                has: function (t) {
                  return !!a(this, t);
                },
              }),
              Nn(
                i.prototype,
                r
                  ? {
                      get: function (t) {
                        var e = a(this, t);
                        return e && e.value;
                      },
                      set: function (t, e) {
                        return s(this, 0 === t ? 0 : t, e);
                      },
                    }
                  : {
                      add: function (t) {
                        return s(this, (t = 0 === t ? 0 : t), t);
                      },
                    }
              ),
              l &&
                qn(i.prototype, "size", {
                  get: function () {
                    return o(this).size;
                  },
                }),
              i
            );
          },
          setStrong: function (t, e, r) {
            var n = e + " Iterator",
              i = Un(e),
              o = Un(n);
            un(
              t,
              e,
              function (t, e) {
                Vn(this, {
                  type: n,
                  target: t,
                  state: i(t),
                  kind: e,
                  last: void 0,
                });
              },
              function () {
                for (var t = o(this), e = t.kind, r = t.last; r && r.removed; )
                  r = r.previous;
                return t.target && (t.last = r = r ? r.next : t.state.first)
                  ? "keys" == e
                    ? { value: r.key, done: !1 }
                    : "values" == e
                    ? { value: r.value, done: !1 }
                    : { value: [r.key, r.value], done: !1 }
                  : ((t.target = void 0), { value: void 0, done: !0 });
              },
              r ? "entries" : "values",
              !r,
              !0
            ),
              (function (t) {
                var e = at(t),
                  r = I.f;
                l &&
                  e &&
                  !e[Wn] &&
                  r(e, Wn, {
                    configurable: !0,
                    get: function () {
                      return this;
                    },
                  });
              })(e);
          },
        }
      ),
      Ae.charAt),
    Qn = "String Iterator",
    Yn = nt.set,
    Xn = nt.getterFor(Qn);
  un(
    String,
    "String",
    function (t) {
      Yn(this, { type: Qn, string: String(t), index: 0 });
    },
    function () {
      var t,
        e = Xn(this),
        r = e.string,
        n = e.index;
      return n >= r.length
        ? { value: void 0, done: !0 }
        : ((t = Gn(r, n)), (e.index += t.length), { value: t, done: !1 });
    }
  );
  var $n = "\t\n\v\f\r                　\u2028\u2029\ufeff",
    Kn = "[" + $n + "]",
    Zn = RegExp("^" + Kn + Kn + "*"),
    Jn = RegExp(Kn + Kn + "*$"),
    ti = function (t) {
      return function (e) {
        var r = String(v(e));
        return (
          1 & t && (r = r.replace(Zn, "")), 2 & t && (r = r.replace(Jn, "")), r
        );
      };
    },
    ei = { start: ti(1), end: ti(2), trim: ti(3) },
    ri = ei.trim;
  Lt(
    {
      target: "String",
      proto: !0,
      forced: (function (t) {
        return c(function () {
          return !!$n[t]() || "​᠎" != "​᠎"[t]() || $n[t].name !== t;
        });
      })("trim"),
    },
    {
      trim: function () {
        return ri(this);
      },
    }
  );
  var ni = Bt("iterator"),
    ii = Bt("toStringTag"),
    oi = pn.values;
  for (var si in Me) {
    var ai = a[si],
      ci = ai && ai.prototype;
    if (ci) {
      if (ci[ni] !== oi)
        try {
          L(ci, ni, oi);
        } catch (t) {
          ci[ni] = oi;
        }
      if ((ci[ii] || L(ci, ii, si), Me[si]))
        for (var li in pn)
          if (ci[li] !== pn[li])
            try {
              L(ci, li, pn[li]);
            } catch (t) {
              ci[li] = pn[li];
            }
    }
  }
  var ui = '[class*="__bg-front"]',
    fi = '[class*="__bg-rear"]',
    hi = '[class*="__bg-front"]',
    di = '[class*="__bg-rear"]',
    pi = [
      Sr,
      {
        name: "fade-background",
        setUp: function (t) {
          var e = this,
            r = t.duration || "0.5s",
            n = t.threshold || (this._isPositionedFixed ? 1 : 0.3);
          [this.element.querySelector(ui), this.element.querySelector(fi)].map(
            function (t) {
              if (t) {
                var n = t.style.willChange
                  .split(",")
                  .map(function (t) {
                    return t.trim();
                  })
                  .filter(function (t) {
                    return t.length;
                  });
                n.push("opacity", "transform"),
                  (t.style.willChange = Ne(new Set(n)).join(", ")),
                  "" === t.style.transform && e._transform("translateZ(0)", t),
                  (t.style.transitionProperty = "opacity"),
                  (t.style.transitionDuration = r);
              }
            }
          ),
            (this._fadeBackgroundThreshold = this._isPositionedFixed
              ? n
              : n + this._progress * n);
        },
        tearDown: function () {
          delete this._fadeBackgroundThreshold;
        },
        run: function (t, e) {
          var r = this.element.querySelector(ui),
            n = this.element.querySelector(fi);
          t >= this._fadeBackgroundThreshold
            ? ((r.style.opacity = 0), (n.style.opacity = 1))
            : ((r.style.opacity = 1), (n.style.opacity = 0));
        },
      },
      {
        name: "parallax-background",
        setUp: function () {},
        tearDown: function () {
          var t = this,
            e = [
              this.element.querySelector(hi),
              this.element.querySelector(di),
            ],
            r = ["marginTop", "marginBottom"];
          e.map(function (e) {
            e &&
              (t._transform("translate3d(0, 0, 0)", e),
              r.forEach(function (t) {
                return (e.style[t] = "");
              }));
          });
        },
        run: function (t, e) {
          var r = this,
            n =
              (this.scrollTarget.scrollHeight - this._scrollTargetHeight) /
              this.scrollTarget.scrollHeight,
            i = this.element.offsetHeight * n;
          void 0 !== this._dHeight &&
            ((n = this._dHeight / this.element.offsetHeight),
            (i = this._dHeight * n));
          var o = Math.abs(0.5 * i).toFixed(5),
            s = this._isPositionedFixedEmulated ? 1e6 : i,
            a = o * t,
            c = Math.min(a, s).toFixed(5);
          [this.element.querySelector(hi), this.element.querySelector(di)].map(
            function (t) {
              t &&
                ((t.style.marginTop = "".concat(-1 * o, "px")),
                r._transform("translate3d(0, ".concat(c, "px, 0)"), t));
            }
          );
          var l = this.element.querySelector('[class$="__bg"]');
          l.style.visibility || (l.style.visibility = "visible");
        },
      },
    ],
    _i = gt.indexOf,
    gi = [].indexOf,
    mi = !!gi && 1 / [1].indexOf(1, -0) < 0,
    vi = Xt("indexOf"),
    yi = Jt("indexOf", { ACCESSORS: !0, 1: 0 });
  Lt(
    { target: "Array", proto: !0, forced: mi || !vi || !yi },
    {
      indexOf: function (t) {
        return mi
          ? gi.apply(this, arguments) || 0
          : _i(this, t, arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  );
  var wi = "toString",
    bi = RegExp.prototype,
    Ti = bi.toString,
    Si = c(function () {
      return "/a/b" != Ti.call({ source: "a", flags: "b" });
    }),
    xi = Ti.name != wi;
  (Si || xi) &&
    it(
      RegExp.prototype,
      wi,
      function () {
        var t = C(this),
          e = String(t.source),
          r = t.flags;
        return (
          "/" +
          e +
          "/" +
          String(
            void 0 === r && t instanceof RegExp && !("flags" in bi)
              ? ie.call(t)
              : r
          )
        );
      },
      { unsafe: !0 }
    );
  var Ei = [
      {
        name: "waterfall",
        setUp: function () {
          this._primary.classList.add("mdk-header--shadow");
        },
        run: function (t, e) {
          this._primary.classList[
            this.isOnScreen() && this.isContentBelow() ? "add" : "remove"
          ]("mdk-header--shadow-show");
        },
        tearDown: function () {
          this._primary.classList.remove("mdk-header--shadow");
        },
      },
      {
        name: "fx-condenses",
        setUp: function () {
          var t = this,
            e = Ne(this.element.querySelectorAll("[data-fx-condenses]")),
            r = Ne(this.element.querySelectorAll("[data-fx-id]")),
            n = {};
          e.forEach(function (e) {
            if (e) {
              t._transform("translateZ(0)", e),
                "inline" === window.getComputedStyle(e).display &&
                  (e.style.display = "inline-block");
              var r = e.getAttribute("id");
              e.hasAttribute("id") ||
                ((r = "rt" + (0 | (9e6 * Math.random())).toString(36)),
                e.setAttribute("id", r));
              var i = e.getBoundingClientRect();
              n[r] = i;
            }
          }),
            r.forEach(function (e) {
              if (e) {
                var r = e.getAttribute("id"),
                  i = e.getAttribute("data-fx-id"),
                  o = t.element.querySelector("#".concat(i)),
                  s = n[r],
                  a = n[i],
                  c = e.textContent.trim().length > 0,
                  l = 1;
                void 0 !== a &&
                  ((n[r].dx = s.left - a.left),
                  (n[r].dy = s.top - a.top),
                  (l = c
                    ? parseInt(window.getComputedStyle(o)["font-size"], 10) /
                      parseInt(window.getComputedStyle(e)["font-size"], 10)
                    : a.height / s.height),
                  (n[r].scale = l));
              }
            }),
            (this._fxCondenses = { elements: e, targets: r, bounds: n });
        },
        run: function (t, e) {
          var r = this,
            n = this._fxCondenses;
          this.condenses || (e = 0),
            t >= 1
              ? n.elements.forEach(function (t) {
                  t && (t.style.opacity = -1 !== n.targets.indexOf(t) ? 0 : 1);
                })
              : n.elements.forEach(function (t) {
                  t && (t.style.opacity = -1 !== n.targets.indexOf(t) ? 1 : 0);
                }),
            n.targets.forEach(function (i) {
              if (i) {
                var o = i.getAttribute("id");
                !(function (t, e, r, n) {
                  r.apply(
                    n,
                    e.map(function (e) {
                      return e[0] + (e[1] - e[0]) * t;
                    })
                  );
                })(
                  Math.min(1, t),
                  [
                    [1, n.bounds[o].scale],
                    [0, -n.bounds[o].dx],
                    [e, e - n.bounds[o].dy],
                  ],
                  function (t, e, n) {
                    (e = e.toFixed(5)),
                      (n = n.toFixed(5)),
                      (t = t.toFixed(5)),
                      r._transform(
                        "translate("
                          .concat(e, "px, ")
                          .concat(n, "px) scale3d(")
                          .concat(t, ", ")
                          .concat(t, ", 1)"),
                        i
                      );
                  }
                );
              }
            });
        },
        tearDown: function () {
          delete this._fxCondenses;
        },
      },
    ],
    Ai = "mdk-header",
    Oi = ".".concat(Ai, "__content"),
    Di = ".".concat(Ai, "__bg"),
    Ri = "".concat(Di, "-front"),
    Ci = "".concat(Di, "-rear"),
    Pi = "".concat(Ai, "--fixed"),
    Ii = function (t) {
      var e, r;
      return (
        (e = {
          properties: {
            condenses: { type: Boolean, reflectToAttribute: !0 },
            reveals: { type: Boolean, reflectToAttribute: !0 },
            fixed: { type: Boolean, reflectToAttribute: !0 },
            disabled: { type: Boolean, reflectToAttribute: !0 },
            retargetMouseScroll: {
              type: Boolean,
              reflectToAttribute: !0,
              value: !0,
            },
          },
          observers: [
            "_handleFixedPositionedScroll(scrollTarget)",
            "_reset(condenses, reveals, fixed)",
          ],
          listeners: ["window._debounceResize(resize)"],
          mixins: [o(), Ve()],
          _height: 0,
          _dHeight: 0,
          _primaryTop: 0,
          _primary: null,
          _top: 0,
          _progress: 0,
          _wasScrollingDown: !1,
          _initScrollTop: 0,
          _initTimestamp: 0,
          _lastTimestamp: 0,
          _lastScrollTop: 0,
          get transformDisabled() {
            return (
              this.disabled ||
              this.element.dataset.transformDisabled ||
              !this._isPositionedFixedEmulated ||
              (this.condenses && !this.willCondense())
            );
          },
          set transformDisabled(t) {
            this.element[t ? "setAttribute" : "removeAttribute"](
              "data-transform-disabled",
              "data-transform-disabled"
            );
          },
          get _maxHeaderTop() {
            return this.fixed ? this._dHeight : this._height + 5;
          },
          get _isPositionedFixedEmulated() {
            return this.fixed || this.condenses || this.reveals;
          },
          get _isPositionedAbsolute() {
            return (
              "absolute" === window.getComputedStyle(this.element).position
            );
          },
          get _primaryisPositionedFixed() {
            return "fixed" === window.getComputedStyle(this._primary).position;
          },
          willCondense: function () {
            return this._dHeight > 0 && this.condenses;
          },
          isOnScreen: function () {
            return 0 !== this._height && this._top < this._height;
          },
          isContentBelow: function () {
            return 0 === this._top
              ? this._clampedScrollTop > 0
              : this._clampedScrollTop - this._maxHeaderTop >= 0;
          },
          getScrollState: function () {
            return { progress: this._progress, top: this._top };
          },
          _setupBackgrounds: function () {
            var t = this.element.querySelector(Di);
            t ||
              ((t = document.createElement("DIV")),
              this.element.insertBefore(t, this.element.childNodes[0]),
              t.classList.add(Di.substr(1))),
              [Ri, Ci].map(function (e) {
                var r = t.querySelector(e);
                r ||
                  ((r = document.createElement("DIV")),
                  t.appendChild(r),
                  r.classList.add(e.substr(1)));
              });
          },
          _reset: function () {
            if (
              (this._primary.classList[
                this.fixed || this.condenses || this.reveals ? "add" : "remove"
              ](Pi),
              0 !== this.element.offsetWidth || 0 !== this.element.offsetHeight)
            ) {
              this._primaryisPositionedFixed &&
                (this.element.style.paddingTop =
                  this._primary.offsetHeight + "px");
              var t = this._clampedScrollTop,
                e = 0 === this._height || 0 === t;
              (this._height = this.element.offsetHeight),
                (this._primaryTop = this._primary
                  ? this._primary.offsetTop
                  : 0),
                (this._dHeight = 0),
                this._mayMove() &&
                  (this._dHeight = this._primary
                    ? this._height - this._primary.offsetHeight
                    : 0),
                this._setUpEffects(),
                this._updateScrollState(e ? t : this._lastScrollTop, !0);
            }
          },
          _handleFixedPositionedScroll: function () {
            void 0 !== this._fixedPositionedScrollHandler &&
              this._fixedPositionedScrollHandler.restore(),
              this._isValidScrollTarget() &&
                this._isPositionedFixedEmulated &&
                this.scrollTarget !== this._doc &&
                this.retargetMouseScroll &&
                (this._fixedPositionedScrollHandler = _r(
                  this.element,
                  this.scrollTarget
                ));
          },
        }),
        "_primary",
        ((r = {})._primary = r._primary || {}),
        (r._primary.get = function () {
          if (this._primaryElement) return this._primaryElement;
          for (
            var t, e = this.element.querySelector(Oi).children, r = 0;
            r < e.length;
            r++
          )
            if (e[r].nodeType === Node.ELEMENT_NODE) {
              var n = e[r];
              if (void 0 !== n.dataset.primary) {
                t = n;
                break;
              }
              t || (t = n);
            }
          return (this._primaryElement = t), this._primaryElement;
        }),
        He(e, "_updateScrollState", function (t, e) {
          if (
            0 !== this._height &&
            !this.disabled &&
            (e || t !== this._lastScrollTop)
          ) {
            var r = 0,
              n = 0,
              i = this._top,
              o = this._maxHeaderTop,
              s = t - this._lastScrollTop,
              a = Math.abs(s),
              c = t > this._lastScrollTop,
              l = Date.now();
            if (
              (this._mayMove() &&
                (n = this._clamp(this.reveals ? i + s : t, 0, o)),
              t >= this._dHeight &&
                (n = this.condenses ? Math.max(this._dHeight, n) : n),
              this.reveals &&
                a < 100 &&
                ((l - this._initTimestamp > 300 ||
                  this._wasScrollingDown !== c) &&
                  ((this._initScrollTop = t), (this._initTimestamp = l)),
                t >= o))
            )
              if (Math.abs(this._initScrollTop - t) > 30 || a > 10) {
                c && t >= o
                  ? (n = o)
                  : !c &&
                    t >= this._dHeight &&
                    (n = this.condenses ? this._dHeight : 0);
                var u = s / (l - this._lastTimestamp);
                this._revealTransitionDuration = this._clamp(
                  (n - i) / u,
                  0,
                  300
                );
              } else n = this._top;
            (r = 0 === this._dHeight ? (t > 0 ? 1 : 0) : n / this._dHeight),
              e ||
                ((this._lastScrollTop = t),
                (this._top = n),
                (this._wasScrollingDown = c),
                (this._lastTimestamp = l)),
              (e || r !== this._progress || i !== n || 0 === t) &&
                ((this._progress = r),
                this._runEffects(r, n),
                this._transformHeader(n));
          }
        }),
        He(e, "_transformHeader", function (t) {
          var e = this;
          if (!this.transformDisabled) {
            if (this._isPositionedAbsolute) {
              var r = t;
              return (
                this.scrollTarget === this._doc && (r = 0),
                t === r &&
                  this._transform("translate3d(0, ".concat(-1 * r, "px, 0)")),
                void (
                  t >= this._primaryTop &&
                  this._transform(
                    "translate3d(0, ".concat(
                      Math.min(t, this._dHeight) - this._primaryTop,
                      "px, 0)"
                    ),
                    this._primary
                  )
                )
              );
            }
            if (this.fixed && this._isPositionedFixed) {
              var n = t;
              return (
                this._transform("translate3d(0, ".concat(-1 * n, "px, 0)")),
                void (
                  t >= this._primaryTop &&
                  this._transform(
                    "translate3d(0, ".concat(
                      Math.min(t, this._dHeight) - this._primaryTop,
                      "px, 0)"
                    ),
                    this._primary
                  )
                )
              );
            }
            var i = 0,
              o = "".concat(this._revealTransitionDuration, "ms");
            t > this._dHeight &&
              ((i = -1 * (t - this._dHeight)), this.reveals && (o = "0ms")),
              this.reveals &&
                t <= this._dHeight &&
                (this._primary.style.transitionDuration = o),
              this._transform(
                "translate3d(0, ".concat(i, "px, 0)"),
                this._primary
              ),
              this.reveals &&
                t > this._dHeight &&
                setTimeout(function () {
                  return (e._primary.style.transitionDuration = o);
                });
          }
        }),
        He(e, "_clamp", function (t, e, r) {
          return Math.min(r, Math.max(e, t));
        }),
        He(e, "_mayMove", function () {
          return this.condenses || !this.fixed;
        }),
        He(e, "_debounceResize", function () {
          var t = this;
          clearTimeout(this._onResizeTimeout),
            this._resizeWidth !== window.innerWidth &&
              (this._onResizeTimeout = setTimeout(function () {
                (t._resizeWidth = window.innerWidth), t._reset();
              }, 50));
        }),
        He(e, "init", function () {
          var t = this;
          (this._resizeWidth = window.innerWidth),
            this.attachToScrollTarget(),
            this._handleFixedPositionedScroll(),
            this._setupBackgrounds(),
            this._primary.setAttribute("data-primary", "data-primary"),
            pi.concat(Ei).map(function (e) {
              return t.registerEffect(e.name, e);
            });
        }),
        He(e, "destroy", function () {
          clearTimeout(this._onResizeTimeout), this.detachFromScrollTarget();
        }),
        (function (t, e) {
          for (var r in e)
            ((o = e[r]).configurable = o.enumerable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(t, r, o);
          if (Object.getOwnPropertySymbols)
            for (
              var n = Object.getOwnPropertySymbols(e), i = 0;
              i < n.length;
              i++
            ) {
              var o,
                s = n[i];
              ((o = e[s]).configurable = o.enumerable = !0),
                "value" in o && (o.writable = !0),
                Object.defineProperty(t, s, o);
            }
        })(e, r),
        e
      );
    };
  e.handler.register(Ai, Ii);
  var Li = function () {
    return {
      properties: {
        hasScrollingRegion: { type: Boolean, reflectToAttribute: !0 },
        fullbleed: { type: Boolean, reflectToAttribute: !0 },
      },
      observers: [
        "_updateScroller(hasScrollingRegion)",
        "_updateContentPosition(hasScrollingRegion, header.fixed, header.condenses)",
        "_updateDocument(fullbleed)",
      ],
      listeners: ["window._debounceResize(resize)"],
      get contentContainer() {
        return this.element.querySelector(".mdk-header-layout__content");
      },
      get header() {
        var t = this.element.querySelector(".mdk-header");
        if (t) return t.mdkHeader;
      },
      _updateScroller: function () {
        this.header.scrollTargetSelector = this.hasScrollingRegion
          ? this.contentContainer
          : null;
      },
      _updateContentPosition: function () {
        var t = this.header.element.offsetHeight,
          e = parseInt(
            window.getComputedStyle(this.header.element).marginBottom,
            10
          ),
          r = this.contentContainer.style;
        (this.header.fixed || this.header.willCondense()) &&
          ((r.paddingTop = "".concat(t + e, "px")), (r.marginTop = ""));
      },
      _debounceResize: function () {
        var t = this;
        clearTimeout(this._onResizeTimeout),
          this._resizeWidth !== window.innerWidth &&
            (this._onResizeTimeout = setTimeout(function () {
              (t._resizeWidth = window.innerWidth), t._reset();
            }, 50));
      },
      _updateDocument: function () {
        var t = Ne(document.querySelectorAll("html, body"));
        this.fullbleed &&
          t.forEach(function (t) {
            t.style.height = "100%";
          });
      },
      _reset: function () {
        this._updateContentPosition();
      },
      init: function () {
        (this._resizeWidth = window.innerWidth),
          this._updateDocument(),
          this._updateScroller();
      },
      destroy: function () {
        clearTimeout(this._onResizeTimeout),
          Ne(document.querySelectorAll("html, body")).forEach(function (t) {
            t.style.height = "";
          });
      },
    };
  };
  e.handler.register("mdk-header-layout", Li);
  var Mi,
    ki = "mdk-box",
    ji = ".".concat(ki, "__bg"),
    Fi = "".concat(ji, "-front"),
    zi = "".concat(ji, "-rear"),
    Hi = function (t) {
      return {
        properties: { disabled: { type: Boolean, reflectToAttribute: !0 } },
        listeners: ["window._debounceResize(resize)"],
        mixins: [o(), Ve()],
        _progress: 0,
        isOnScreen: function () {
          return (
            this._elementTop < this._scrollTop + this._scrollTargetHeight &&
            this._elementTop + this.element.offsetHeight > this._scrollTop
          );
        },
        isVisible: function () {
          return this.element.offsetWidth > 0 && this.element.offsetHeight > 0;
        },
        getScrollState: function () {
          return { progress: this._progress };
        },
        _setupBackgrounds: function () {
          var t = this.element.querySelector(ji);
          t ||
            ((t = document.createElement("DIV")),
            this.element.insertBefore(t, this.element.childNodes[0]),
            t.classList.add(ji.substr(1))),
            [Fi, zi].map(function (e) {
              var r = t.querySelector(e);
              r ||
                ((r = document.createElement("DIV")),
                t.appendChild(r),
                r.classList.add(e.substr(1)));
            });
        },
        _getElementTop: function () {
          for (var t = this.element, e = 0; t && t !== this.scrollTarget; )
            (e += t.offsetTop), (t = t.offsetParent);
          return e;
        },
        _updateScrollState: function (t) {
          if (!this.disabled && this.isOnScreen()) {
            var e = Math.min(
                this._scrollTargetHeight,
                this._elementTop + this.element.offsetHeight
              ),
              r = 1 - (this._elementTop - t + this.element.offsetHeight) / e;
            (this._progress = r), this._runEffects(this._progress, t);
          }
        },
        _debounceResize: function () {
          var t = this;
          clearTimeout(this._onResizeTimeout),
            this._resizeWidth !== window.innerWidth &&
              (this._onResizeTimeout = setTimeout(function () {
                (t._resizeWidth = window.innerWidth), t._reset();
              }, 50));
        },
        init: function () {
          var t = this;
          (this._resizeWidth = window.innerWidth),
            this.attachToScrollTarget(),
            this._setupBackgrounds(),
            pi.map(function (e) {
              return t.registerEffect(e.name, e);
            });
        },
        _reset: function () {
          (this._elementTop = this._getElementTop()),
            this._setUpEffects(),
            this._updateScrollState(this._clampedScrollTop);
        },
        destroy: function () {
          clearTimeout(this._onResizeTimeout), this.detachFromScrollTarget();
        },
      };
    };
  e.handler.register(ki, Hi);
  var Ni = function () {
    return {
      properties: {
        opened: { type: Boolean, reflectToAttribute: !0 },
        persistent: { type: Boolean, reflectToAttribute: !0 },
        align: { reflectToAttribute: !0, value: "start" },
        position: { reflectToAttribute: !0 },
      },
      observers: [
        "_resetPosition(align, _isRTL)",
        "_fireChange(opened, persistent, align, position)",
        "_onChangedState(_drawerState)",
        "_onClose(opened)",
      ],
      listeners: [
        "_onTransitionend(transitionend)",
        "scrim._onClickScrim(click)",
      ],
      _drawerState: 0,
      _DRAWER_STATE: { INIT: 0, OPENED: 1, OPENED_PERSISTENT: 2, CLOSED: 3 },
      _isRTL: !1,
      get contentContainer() {
        return this.element.querySelector(".mdk-drawer__content");
      },
      get scrim() {
        var t = this.element.querySelector(".mdk-drawer__scrim");
        return (
          t ||
            ((t = document.createElement("DIV")),
            this.element.insertBefore(t, this.element.childNodes[0]),
            t.classList.add("mdk-drawer__scrim")),
          t
        );
      },
      getWidth: function () {
        return this.contentContainer.offsetWidth;
      },
      toggle: function () {
        this.opened = !this.opened;
      },
      close: function () {
        this.opened = !1;
      },
      open: function () {
        this.opened = !0;
      },
      _onClose: function (t) {
        t || this.element.setAttribute("data-closing", !0);
      },
      _setTransitionDuration: function (t) {
        (this.contentContainer.style.transitionDuration = t),
          (this.scrim.style.transitionDuration = t);
      },
      _resetDrawerState: function () {
        var t = this._drawerState;
        this.opened
          ? (this._drawerState = this.persistent
              ? this._DRAWER_STATE.OPENED_PERSISTENT
              : this._DRAWER_STATE.OPENED)
          : (this._drawerState = this._DRAWER_STATE.CLOSED),
          t !== this._drawerState &&
            (this.opened || this.element.removeAttribute("data-closing"),
            this._drawerState === this._DRAWER_STATE.OPENED
              ? (document.body.style.overflow = "hidden")
              : (document.body.style.overflow = ""));
      },
      _resetPosition: function () {
        switch (this.align) {
          case "start":
            return void (this.position = this._isRTL ? "right" : "left");
          case "end":
            return void (this.position = this._isRTL ? "left" : "right");
        }
        this.position = this.align;
      },
      _fireChange: function () {
        this.fire("mdk-drawer-change");
      },
      _fireChanged: function () {
        this.fire("mdk-drawer-changed");
      },
      _onTransitionend: function (t) {
        var e = t.target;
        (e !== this.contentContainer && e !== this.scrim) ||
          this._resetDrawerState();
      },
      _onClickScrim: function (t) {
        t.preventDefault(), this.close();
      },
      _onChangedState: function (t, e) {
        e !== this._DRAWER_STATE.INIT && this._fireChanged();
      },
      destroy: function () {
        clearInterval(Mi);
      },
      init: function () {
        var t = this;
        (Mi = setInterval(function () {
          return (t._isRTL =
            window && "rtl" === window.getComputedStyle(t.element).direction);
        }, 100)),
          this._resetPosition(),
          this._setTransitionDuration("0s"),
          setTimeout(function () {
            t._setTransitionDuration(""), t._resetDrawerState();
          }, 0);
      },
    };
  };
  e.handler.register("mdk-drawer", Ni);
  var Wi = Yt.find,
    qi = "find",
    Bi = !0,
    Vi = Jt(qi);
  qi in [] &&
    Array(1).find(function () {
      Bi = !1;
    }),
    Lt(
      { target: "Array", proto: !0, forced: Bi || !Vi },
      {
        find: function (t) {
          return Wi(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    ),
    Wr(qi);
  var Ui = !zn(function (t) {
    Array.from(t);
  });
  Lt(
    { target: "Array", stat: !0, forced: Ui },
    {
      from: function (t) {
        var e,
          r,
          n,
          i,
          o,
          s,
          a = jt(t),
          c = "function" == typeof this ? this : Array,
          l = arguments.length,
          u = l > 1 ? arguments[1] : void 0,
          f = void 0 !== u,
          h = Cn(a),
          d = 0;
        if (
          (f && (u = kt(u, l > 2 ? arguments[2] : void 0, 2)),
          null == h || (c == Array && Dn(h)))
        )
          for (r = new c((e = ht(a.length))); e > d; d++)
            (s = f ? u(a[d], d) : a[d]), Ue(r, d, s);
        else
          for (
            o = (i = h.call(a)).next, r = new c();
            !(n = o.call(i)).done;
            d++
          )
            (s = f ? Pn(i, u, [n.value, d], !0) : n.value), Ue(r, d, s);
        return (r.length = d), r;
      },
    }
  );
  var Gi = function (t) {
      var e = {
        query: t,
        queryMatches: null,
        _reset: function () {
          this._removeListener(),
            (this.queryMatches = null),
            this.query &&
              ((this._mq = window.matchMedia(this.query)),
              this._addListener(),
              this._handler(this._mq));
        },
        _handler: function (t) {
          this.queryMatches = t.matches;
        },
        _addListener: function () {
          this._mq && this._mq.addListener(this._handler);
        },
        _removeListener: function () {
          this._mq && this._mq.removeListener(this._handler), (this._mq = null);
        },
        init: function () {
          i.watch(this, "query", this._reset), this._reset();
        },
        destroy: function () {
          i.unwatch(this, "query", this._reset), this._removeListener();
        },
      };
      return (
        (e._reset = e._reset.bind(e)),
        (e._handler = e._handler.bind(e)),
        e.init(),
        e
      );
    },
    Qi = function () {
      return {
        properties: {
          forceNarrow: { type: Boolean, reflectToAttribute: !0 },
          responsiveWidth: { reflectToAttribute: !0, value: "554px" },
          hasScrollingRegion: { type: Boolean, reflectToAttribute: !0 },
          fullbleed: { type: Boolean, reflectToAttribute: !0 },
        },
        observers: [
          "_resetLayout(narrow, forceNarrow)",
          "_onQueryMatches(mediaQuery.queryMatches)",
          "_updateScroller(hasScrollingRegion)",
          "_updateDocument(fullbleed)",
        ],
        listeners: ["drawer._onDrawerChange(mdk-drawer-change)"],
        _narrow: null,
        _mediaQuery: null,
        get mediaQuery() {
          return (
            this._mediaQuery ||
              (this._mediaQuery = Gi(this.responsiveMediaQuery)),
            this._mediaQuery
          );
        },
        get narrow() {
          return !!this.forceNarrow || this._narrow;
        },
        set narrow(t) {
          this._narrow = !(t || !this.forceNarrow) || t;
        },
        get contentContainer() {
          return this.element.querySelector(".mdk-drawer-layout__content");
        },
        get drawerNode() {
          var t;
          try {
            t = Array.from(this.element.children).find(function (t) {
              return t.matches(".mdk-drawer");
            });
          } catch (t) {
            console.error(t.message, t.stack);
          }
          if (t) return t;
        },
        get drawer() {
          if (this.drawerNode) return this.drawerNode.mdkDrawer;
        },
        get responsiveMediaQuery() {
          return this.forceNarrow
            ? "(min-width: 0px)"
            : "(max-width: ".concat(this.responsiveWidth, ")");
        },
        _updateDocument: function () {
          var t = Ne(document.querySelectorAll("html, body"));
          this.fullbleed &&
            t.forEach(function (t) {
              t.style.height = "100%";
            });
        },
        _updateScroller: function () {
          var t = Ne(document.querySelectorAll("html, body"));
          this.hasScrollingRegion &&
            t.forEach(function (t) {
              (t.style.overflow = "hidden"), (t.style.position = "relative");
            });
        },
        _resetLayout: function () {
          (this.drawer.opened = this.drawer.persistent = !this.narrow),
            this._onDrawerChange();
        },
        _resetPush: function () {
          var t = this.drawer,
            r = (this.drawer.getWidth(), this.contentContainer);
          if (t.opened) e.util.transform("translate3d(0, 0, 0)", r);
          else {
            var n = (this.element.offsetWidth - r.offsetWidth) / 2;
            (n = "right" === t.position ? n : -1 * n),
              e.util.transform("translate3d(".concat(n, "px, 0, 0)"), r);
          }
        },
        _setContentTransitionDuration: function (t) {
          this.contentContainer.style.transitionDuration = t;
        },
        _onDrawerChange: function () {
          this._resetPush();
        },
        _onQueryMatches: function (t) {
          this.narrow = t;
        },
        init: function () {
          var t = this;
          this._setContentTransitionDuration("0s"),
            setTimeout(function () {
              return t._setContentTransitionDuration("");
            }, 0),
            this._updateDocument(),
            this._updateScroller(),
            this.drawerNode && this.mediaQuery.init();
        },
        destroy: function () {
          this.mediaQuery.destroy(),
            Ne(document.querySelectorAll("html, body")).forEach(function (t) {
              (t.style.height = ""),
                (t.style.overflow = ""),
                (t.style.position = "");
            });
        },
      };
    };
  e.handler.register("mdk-drawer-layout", Qi);
  var Yi = bt.f,
    Xi = R.f,
    $i = I.f,
    Ki = ei.trim,
    Zi = "Number",
    Ji = a.Number,
    to = Ji.prototype,
    eo = _(kr(to)) == Zi,
    ro = function (t) {
      var e,
        r,
        n,
        i,
        o,
        s,
        a,
        c,
        l = b(t, !1);
      if ("string" == typeof l && l.length > 2)
        if (43 === (e = (l = Ki(l)).charCodeAt(0)) || 45 === e) {
          if (88 === (r = l.charCodeAt(2)) || 120 === r) return NaN;
        } else if (48 === e) {
          switch (l.charCodeAt(1)) {
            case 66:
            case 98:
              (n = 2), (i = 49);
              break;
            case 79:
            case 111:
              (n = 8), (i = 55);
              break;
            default:
              return +l;
          }
          for (s = (o = l.slice(2)).length, a = 0; a < s; a++)
            if ((c = o.charCodeAt(a)) < 48 || c > i) return NaN;
          return parseInt(o, n);
        }
      return +l;
    };
  if (Pt(Zi, !Ji(" 0o1") || !Ji("0b1") || Ji("+0x1"))) {
    for (
      var no,
        io = function (t) {
          var e = arguments.length < 1 ? 0 : t,
            r = this;
          return r instanceof io &&
            (eo
              ? c(function () {
                  to.valueOf.call(r);
                })
              : _(r) != Zi)
            ? Hn(new Ji(ro(e)), r, io)
            : ro(e);
        },
        oo = l
          ? Yi(Ji)
          : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(
              ","
            ),
        so = 0;
      oo.length > so;
      so++
    )
      S(Ji, (no = oo[so])) && !S(io, no) && $i(io, no, Xi(Ji, no));
    (io.prototype = to), (to.constructor = io), it(a, Zi, io);
  }
  var ao = function () {
    return {
      properties: {
        partialHeight: { reflectToAttribute: !0, type: Number, value: 0 },
        forceReveal: { type: Boolean, reflectToAttribute: !0 },
        trigger: { value: "click", reflectToAttribute: !0 },
        opened: { type: Boolean, reflectToAttribute: !0 },
      },
      observers: ["_onChange(opened)"],
      listeners: [
        "_onEnter(mouseenter, touchstart)",
        "_onLeave(mouseleave, touchend)",
        "window._debounceResize(resize)",
        "_onClick(click)",
      ],
      get reveal() {
        return this.element.querySelector(".mdk-reveal__content");
      },
      get partial() {
        var t = this.reveal.querySelector(".mdk-reveal__partial");
        return (
          t ||
            ((t = document.createElement("DIV")).classList.add(
              "mdk-reveal__partial"
            ),
            this.reveal.insertBefore(t, this.reveal.childNodes[0])),
          t
        );
      },
      open: function () {
        this.opened = !0;
      },
      close: function () {
        this.opened = !1;
      },
      toggle: function () {
        this.opened = !this.opened;
      },
      _reset: function () {
        (this._translate =
          "translateY(" +
          -1 * (this.reveal.offsetHeight - this.partialHeight) +
          "px)"),
          0 !== this.partialHeight &&
            (this.partial.style.height = this.partialHeight + "px"),
          (this.element.style.height =
            this.reveal.offsetTop + this.partialHeight + "px"),
          this.forceReveal && !this.opened && this.open();
      },
      _onChange: function () {
        e.util.transform(
          this.opened ? this._translate : "translateY(0)",
          this.reveal
        );
      },
      _onEnter: function () {
        "hover" !== this.trigger || this.forceReveal || this.open();
      },
      _onClick: function () {
        "click" === this.trigger && this.toggle();
      },
      _onLeave: function () {
        "hover" !== this.trigger || this.forceReveal || this.close();
      },
      _debounceResize: function () {
        var t = this;
        clearTimeout(this._debounceResizeTimer),
          (this._debounceResizeTimer = setTimeout(function () {
            t._resizeWidth !== window.innerWidth &&
              ((t._resizeWidth = window.innerWidth), t._reset());
          }, 50));
      },
      init: function () {
        this._resizeWidth = window.innerWidth;
      },
      destroy: function () {
        clearTimeout(this._debounceResizeTimer);
      },
    };
  };
  e.handler.register("mdk-reveal", ao),
    Te("match", 1, function (t, e, r) {
      return [
        function (e) {
          var r = v(this),
            n = null == e ? void 0 : e[t];
          return void 0 !== n ? n.call(e, r) : new RegExp(e)[t](String(r));
        },
        function (t) {
          var n = r(e, t, this);
          if (n.done) return n.value;
          var i = C(t),
            o = String(this);
          if (!i.global) return Re(i, o);
          var s = i.unicode;
          i.lastIndex = 0;
          for (var a, c = [], l = 0; null !== (a = Re(i, o)); ) {
            var u = String(a[0]);
            (c[l] = u),
              "" === u && (i.lastIndex = De(o, ht(i.lastIndex), s)),
              l++;
          }
          return 0 === l ? null : c;
        },
      ];
    });
  var co = function (t) {
      var e = window.getComputedStyle(t, null);
      return (function (t) {
        "none" === t && (t = "matrix(0,0,0,0,0)");
        var e = {},
          r = t.match(/([-+]?[\d\.]+)/g);
        return (
          (e.translate = {
            x: parseInt(r[4], 10) || 0,
            y: parseInt(r[5], 10) || 0,
          }),
          e
        );
      })(
        e.getPropertyValue("-webkit-transform") ||
          e.getPropertyValue("-moz-transform") ||
          e.getPropertyValue("-ms-transform") ||
          e.getPropertyValue("-o-transform") ||
          e.getPropertyValue("transform")
      );
    },
    lo = function (t) {
      return {
        x: (t =
          (t = t.originalEvent || t || window.event).touches && t.touches.length
            ? t.touches[0]
            : t.changedTouches && t.changedTouches.length
            ? t.changedTouches[0]
            : t).pageX
          ? t.pageX
          : t.clientX,
        y: t.pageY ? t.pageY : t.clientY,
      };
    },
    uo = function (t, e) {
      return { x: t.x - e.x, y: t.y - e.y };
    },
    fo = function () {
      return {
        properties: {
          autoStart: { type: Boolean, reflectToAttribute: !0 },
          interval: { type: Number, reflectToAttribute: !0, value: 3e3 },
        },
        listeners: [
          "_onEnter(mouseenter)",
          "_onLeave(mouseleave)",
          "_onTransitionend(transitionend)",
          "_onDragStart(mousedown, touchstart)",
          "_onMouseDrag(dragstart, selectstart)",
          "document._onDragMove(mousemove, touchmove)",
          "document._onDragEnd(mouseup, touchend)",
          "window._debounceResize(resize)",
        ],
        _items: [],
        _isMoving: !1,
        _content: null,
        _current: null,
        _drag: {},
        _reset: function () {
          (this._content = this.element.querySelector(
            ".mdk-carousel__content"
          )),
            (this._items = Ne(this._content.children)),
            (this._content.style.width = ""),
            this._items.forEach(function (t) {
              t.style.width = "";
            });
          var t = this.element.offsetWidth,
            e = this._items[0].offsetWidth,
            r = t / e;
          if (
            ((this._itemWidth = e),
            (this._visible = Math.round(r)),
            (this._max = this._items.length - this._visible),
            (this.element.style.overflow = "hidden"),
            (this._content.style.width = e * this._items.length + "px"),
            this._items.forEach(function (t) {
              t.classList.add("mdk-carousel__item"), (t.style.width = e + "px");
            }),
            this._current || (this._current = this._items[0]),
            !(this._items.length < 2))
          ) {
            var n = this._items.indexOf(this._current);
            this._transform(n * e * -1, 0), this.autoStart && this.start();
          }
        },
        start: function () {
          this.stop(),
            this._items.length < 2 ||
              this._items.length <= this._visible ||
              (this._setContentTransitionDuration(""),
              (this._interval = setInterval(
                this.next.bind(this),
                this.interval
              )));
        },
        stop: function () {
          clearInterval(this._interval), (this._interval = null);
        },
        next: function () {
          if (
            !(this._items.length < 2 || this._isMoving || document.hidden) &&
            this._isOnScreen()
          ) {
            var t = this._items.indexOf(this._current),
              e = void 0 !== this._items[t + 1] ? t + 1 : 0;
            this._items.length - t === this._visible && (e = 0), this._to(e);
          }
        },
        prev: function () {
          if (!(this._items.length < 2 || this._isMoving)) {
            var t = this._items.indexOf(this._current),
              e = void 0 !== this._items[t - 1] ? t - 1 : this._items.length;
            this._to(e);
          }
        },
        _transform: function (t, r, n) {
          void 0 !== r && this._setContentTransitionDuration(r + "ms"),
            co(this._content).translate.x === t
              ? "function" == typeof n && n.call(this)
              : requestAnimationFrame(
                  function () {
                    0 !== r && (this._isMoving = !0),
                      e.util.transform(
                        "translate3d(" + t + "px, 0, 0)",
                        this._content
                      ),
                      "function" == typeof n && n.call(this);
                  }.bind(this)
                );
        },
        _to: function (t) {
          if (!(this._items.length < 2 || this._isMoving)) {
            t > this._max && (t = this._max), t < 0 && (t = 0);
            var e = t * this._itemWidth * -1;
            this._transform(e, !1, function () {
              this._current = this._items[t];
            });
          }
        },
        _debounceResize: function () {
          clearTimeout(this._resizeTimer),
            this._resizeWidth !== window.innerWidth &&
              (this._resizeTimer = setTimeout(
                function () {
                  (this._resizeWidth = window.innerWidth),
                    this.stop(),
                    this._reset();
                }.bind(this),
                50
              ));
        },
        _setContentTransitionDuration: function (t) {
          this._content.style.transitionDuration = t;
        },
        _onEnter: function () {
          this.stop();
        },
        _onLeave: function () {
          !this._drag.wasDragging && this.autoStart && this.start();
        },
        _onTransitionend: function () {
          this._isMoving = !1;
        },
        _onDragStart: function (t) {
          if (!this._drag.isDragging && !this._isMoving && 3 !== t.which) {
            this.stop();
            var e = co(this._content).translate;
            (this._drag.isDragging = !0),
              (this._drag.isScrolling = !1),
              (this._drag.time = new Date().getTime()),
              (this._drag.start = e),
              (this._drag.current = e),
              (this._drag.delta = { x: 0, y: 0 }),
              (this._drag.pointer = lo(t)),
              (this._drag.target = t.target);
          }
        },
        _onDragMove: function (t) {
          if (this._drag.isDragging) {
            var e = uo(this._drag.pointer, lo(t)),
              r = uo(this._drag.start, e),
              n = "ontouchstart" in window && Math.abs(e.x) < Math.abs(e.y);
            n || (t.preventDefault(), this._transform(r.x, 0)),
              (this._drag.delta = e),
              (this._drag.current = r),
              (this._drag.isScrolling = n),
              (this._drag.target = t.target);
          }
        },
        _onDragEnd: function (t) {
          if (this._drag.isDragging) {
            this._setContentTransitionDuration(""),
              (this._drag.duration = new Date().getTime() - this._drag.time);
            var e = Math.abs(this._drag.delta.x),
              r = e > 20 || e > this._itemWidth / 3,
              n = Math.max(Math.round(e / this._itemWidth), 1),
              i = this._drag.delta.x > 0;
            if (r) {
              var o = this._items.indexOf(this._current),
                s = i ? o + n : o - n;
              this._to(s);
            } else this._transform(this._drag.start.x);
            (this._drag.isDragging = !1), (this._drag.wasDragging = !0);
          }
        },
        _onMouseDrag: function (t) {
          t.preventDefault(), t.stopPropagation();
        },
        _isOnScreen: function () {
          var t = this.element.getBoundingClientRect();
          return (
            t.top >= 0 &&
            t.left >= 0 &&
            t.bottom <= window.innerHeight &&
            t.right <= window.innerWidth
          );
        },
        init: function () {
          (this._resizeWidth = window.innerWidth), this._reset();
        },
        destroy: function () {
          this.stop(), clearTimeout(this._resizeTimer);
        },
      };
    };
  e.handler.register("mdk-carousel", fo);
  var ho = function (t) {
    return {
      properties: {
        for: {
          readOnly: !0,
          value: function () {
            var t = this.element.getAttribute("data-for");
            return document.querySelector("#" + t);
          },
        },
        position: { reflectToAttribute: !0, value: "bottom" },
        opened: { type: Boolean, reflectToAttribute: !0 },
      },
      listeners: [
        "for.show(mouseenter, touchstart)",
        "for.hide(mouseleave, touchend)",
        "window._debounceResize(resize)",
      ],
      observers: ["_reset(position)"],
      mixins: [o()],
      get drawerLayout() {
        var t = document.querySelector(".mdk-js-drawer-layout");
        if (t) return t.mdkDrawerLayout;
      },
      _reset: function () {
        this.element.removeAttribute("style");
        var t = this.for.getBoundingClientRect(),
          e = t.left + t.width / 2,
          r = t.top + t.height / 2,
          n = (this.element.offsetWidth / 2) * -1,
          i = (this.element.offsetHeight / 2) * -1;
        "left" === this.position || "right" === this.position
          ? r + i < 0
            ? ((this.element.style.top = "0"),
              (this.element.style.marginTop = "0"))
            : ((this.element.style.top = r + "px"),
              (this.element.style.marginTop = i + "px"))
          : e + n < 0
          ? ((this.element.style.left = "0"),
            (this.element.style.marginLeft = "0"))
          : ((this.element.style.left = e + "px"),
            (this.element.style.marginLeft = n + "px")),
          "top" === this.position
            ? (this.element.style.top =
                t.top - this.element.offsetHeight - 10 + "px")
            : "right" === this.position
            ? (this.element.style.left = t.left + t.width + 10 + "px")
            : "left" === this.position
            ? (this.element.style.left =
                t.left - this.element.offsetWidth - 10 + "px")
            : (this.element.style.top = t.top + t.height + 10 + "px");
      },
      _debounceResize: function () {
        var t = this;
        clearTimeout(this._debounceResizeTimer),
          (this._debounceResizeTimer = setTimeout(function () {
            window.innerWidth !== t._debounceResizeWidth &&
              ((t._debounceResizeWidth = window.innerWidth), t._reset());
          }, 50));
      },
      _scrollHandler: function () {
        clearTimeout(this._debounceScrollTimer),
          (this._debounceScrollTimer = setTimeout(this._reset.bind(this), 50));
      },
      show: function () {
        this.opened = !0;
      },
      hide: function () {
        this.opened = !1;
      },
      toggle: function () {
        this.opened = !this.opened;
      },
      init: function () {
        document.body.appendChild(this.element),
          (this._debounceResizeWidth = window.innerWidth),
          this.attachToScrollTarget(),
          this._reset(),
          this.drawerLayout &&
            this.drawerLayout.hasScrollingRegion &&
            (this.scrollTargetSelector = this.drawerLayout.contentContainer);
      },
      destroy: function () {
        clearTimeout(this._debounceResizeTimer),
          clearTimeout(this._debounceScrollTimer),
          this.detachFromScrollTarget();
      },
    };
  };
  e.handler.register("mdk-tooltip", ho),
    (t.HEADER_SCROLL_EFFECTS = Ei),
    (t.SCROLL_EFFECTS = pi),
    (t.boxComponent = Hi),
    (t.carouselComponent = fo),
    (t.drawerComponent = Ni),
    (t.drawerLayoutComponent = Qi),
    (t.headerComponent = Ii),
    (t.headerLayoutComponent = Li),
    (t.mediaQuery = Gi),
    (t.revealComponent = ao),
    (t.scrollEffectBehavior = Ve),
    (t.scrollTargetBehavior = o),
    (t.tooltipComponent = ho),
    Object.defineProperty(t, "__esModule", { value: !0 });
});
