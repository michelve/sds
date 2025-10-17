import $, { createContext as _, useRef as L, useCallback as X, useState as Y, useContext as z, useEffect as Z, useMemo as U, version as pv, cloneElement as ya, forwardRef as re, isValidElement as vv, useSyncExternalStore as hv } from "react";
import bv, { flushSync as Xi, createPortal as mv } from "react-dom";
var xi = { exports: {} }, Ln = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vo;
function gv() {
  if (vo) return Ln;
  vo = 1;
  var t = $, e = Symbol.for("react.element"), n = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, l = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, r = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(a, u, s) {
    var c, d = {}, v = null, p = null;
    s !== void 0 && (v = "" + s), u.key !== void 0 && (v = "" + u.key), u.ref !== void 0 && (p = u.ref);
    for (c in u) i.call(u, c) && !r.hasOwnProperty(c) && (d[c] = u[c]);
    if (a && a.defaultProps) for (c in u = a.defaultProps, u) d[c] === void 0 && (d[c] = u[c]);
    return { $$typeof: e, type: a, key: v, ref: p, props: d, _owner: l.current };
  }
  return Ln.Fragment = n, Ln.jsx = o, Ln.jsxs = o, Ln;
}
var jn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ho;
function $v() {
  return ho || (ho = 1, process.env.NODE_ENV !== "production" && function() {
    var t = $, e = Symbol.for("react.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), a = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), s = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), h = Symbol.iterator, m = "@@iterator";
    function g(C) {
      if (C === null || typeof C != "object")
        return null;
      var O = h && C[h] || C[m];
      return typeof O == "function" ? O : null;
    }
    var b = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(C) {
      {
        for (var O = arguments.length, q = new Array(O > 1 ? O - 1 : 0), le = 1; le < O; le++)
          q[le - 1] = arguments[le];
        D("error", C, q);
      }
    }
    function D(C, O, q) {
      {
        var le = b.ReactDebugCurrentFrame, be = le.getStackAddendum();
        be !== "" && (O += "%s", q = q.concat([be]));
        var ge = q.map(function(pe) {
          return String(pe);
        });
        ge.unshift("Warning: " + O), Function.prototype.apply.call(console[C], console, ge);
      }
    }
    var k = !1, P = !1, T = !1, M = !1, F = !1, H;
    H = Symbol.for("react.module.reference");
    function K(C) {
      return !!(typeof C == "string" || typeof C == "function" || C === i || C === r || F || C === l || C === s || C === c || M || C === p || k || P || T || typeof C == "object" && C !== null && (C.$$typeof === v || C.$$typeof === d || C.$$typeof === o || C.$$typeof === a || C.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      C.$$typeof === H || C.getModuleId !== void 0));
    }
    function y(C, O, q) {
      var le = C.displayName;
      if (le)
        return le;
      var be = O.displayName || O.name || "";
      return be !== "" ? q + "(" + be + ")" : q;
    }
    function R(C) {
      return C.displayName || "Context";
    }
    function A(C) {
      if (C == null)
        return null;
      if (typeof C.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof C == "function")
        return C.displayName || C.name || null;
      if (typeof C == "string")
        return C;
      switch (C) {
        case i:
          return "Fragment";
        case n:
          return "Portal";
        case r:
          return "Profiler";
        case l:
          return "StrictMode";
        case s:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof C == "object")
        switch (C.$$typeof) {
          case a:
            var O = C;
            return R(O) + ".Consumer";
          case o:
            var q = C;
            return R(q._context) + ".Provider";
          case u:
            return y(C, C.render, "ForwardRef");
          case d:
            var le = C.displayName || null;
            return le !== null ? le : A(C.type) || "Memo";
          case v: {
            var be = C, ge = be._payload, pe = be._init;
            try {
              return A(pe(ge));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var B = Object.assign, j = 0, x, S, w, W, J, N, Q;
    function te() {
    }
    te.__reactDisabledLog = !0;
    function ue() {
      {
        if (j === 0) {
          x = console.log, S = console.info, w = console.warn, W = console.error, J = console.group, N = console.groupCollapsed, Q = console.groupEnd;
          var C = {
            configurable: !0,
            enumerable: !0,
            value: te,
            writable: !0
          };
          Object.defineProperties(console, {
            info: C,
            log: C,
            warn: C,
            error: C,
            group: C,
            groupCollapsed: C,
            groupEnd: C
          });
        }
        j++;
      }
    }
    function we() {
      {
        if (j--, j === 0) {
          var C = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: B({}, C, {
              value: x
            }),
            info: B({}, C, {
              value: S
            }),
            warn: B({}, C, {
              value: w
            }),
            error: B({}, C, {
              value: W
            }),
            group: B({}, C, {
              value: J
            }),
            groupCollapsed: B({}, C, {
              value: N
            }),
            groupEnd: B({}, C, {
              value: Q
            })
          });
        }
        j < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var De = b.ReactCurrentDispatcher, ke;
    function Le(C, O, q) {
      {
        if (ke === void 0)
          try {
            throw Error();
          } catch (be) {
            var le = be.stack.trim().match(/\n( *(at )?)/);
            ke = le && le[1] || "";
          }
        return `
` + ke + C;
      }
    }
    var Ve = !1, Ge;
    {
      var ie = typeof WeakMap == "function" ? WeakMap : Map;
      Ge = new ie();
    }
    function G(C, O) {
      if (!C || Ve)
        return "";
      {
        var q = Ge.get(C);
        if (q !== void 0)
          return q;
      }
      var le;
      Ve = !0;
      var be = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ge;
      ge = De.current, De.current = null, ue();
      try {
        if (O) {
          var pe = function() {
            throw Error();
          };
          if (Object.defineProperty(pe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(pe, []);
            } catch (et) {
              le = et;
            }
            Reflect.construct(C, [], pe);
          } else {
            try {
              pe.call();
            } catch (et) {
              le = et;
            }
            C.call(pe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (et) {
            le = et;
          }
          C();
        }
      } catch (et) {
        if (et && le && typeof et.stack == "string") {
          for (var ce = et.stack.split(`
`), Ye = le.stack.split(`
`), Ne = ce.length - 1, je = Ye.length - 1; Ne >= 1 && je >= 0 && ce[Ne] !== Ye[je]; )
            je--;
          for (; Ne >= 1 && je >= 0; Ne--, je--)
            if (ce[Ne] !== Ye[je]) {
              if (Ne !== 1 || je !== 1)
                do
                  if (Ne--, je--, je < 0 || ce[Ne] !== Ye[je]) {
                    var rt = `
` + ce[Ne].replace(" at new ", " at ");
                    return C.displayName && rt.includes("<anonymous>") && (rt = rt.replace("<anonymous>", C.displayName)), typeof C == "function" && Ge.set(C, rt), rt;
                  }
                while (Ne >= 1 && je >= 0);
              break;
            }
        }
      } finally {
        Ve = !1, De.current = ge, we(), Error.prepareStackTrace = be;
      }
      var gn = C ? C.displayName || C.name : "", Qt = gn ? Le(gn) : "";
      return typeof C == "function" && Ge.set(C, Qt), Qt;
    }
    function ae(C, O, q) {
      return G(C, !1);
    }
    function Ae(C) {
      var O = C.prototype;
      return !!(O && O.isReactComponent);
    }
    function oe(C, O, q) {
      if (C == null)
        return "";
      if (typeof C == "function")
        return G(C, Ae(C));
      if (typeof C == "string")
        return Le(C);
      switch (C) {
        case s:
          return Le("Suspense");
        case c:
          return Le("SuspenseList");
      }
      if (typeof C == "object")
        switch (C.$$typeof) {
          case u:
            return ae(C.render);
          case d:
            return oe(C.type, O, q);
          case v: {
            var le = C, be = le._payload, ge = le._init;
            try {
              return oe(ge(be), O, q);
            } catch {
            }
          }
        }
      return "";
    }
    var Qe = Object.prototype.hasOwnProperty, xt = {}, yi = b.ReactDebugCurrentFrame;
    function se(C) {
      if (C) {
        var O = C._owner, q = oe(C.type, C._source, O ? O.type : null);
        yi.setExtraStackFrame(q);
      } else
        yi.setExtraStackFrame(null);
    }
    function Ee(C, O, q, le, be) {
      {
        var ge = Function.call.bind(Qe);
        for (var pe in C)
          if (ge(C, pe)) {
            var ce = void 0;
            try {
              if (typeof C[pe] != "function") {
                var Ye = Error((le || "React class") + ": " + q + " type `" + pe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof C[pe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ye.name = "Invariant Violation", Ye;
              }
              ce = C[pe](O, pe, le, q, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ne) {
              ce = Ne;
            }
            ce && !(ce instanceof Error) && (se(be), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", le || "React class", q, pe, typeof ce), se(null)), ce instanceof Error && !(ce.message in xt) && (xt[ce.message] = !0, se(be), E("Failed %s type: %s", q, ce.message), se(null));
          }
      }
    }
    var Ke = Array.isArray;
    function Rn(C) {
      return Ke(C);
    }
    function _p(C) {
      {
        var O = typeof Symbol == "function" && Symbol.toStringTag, q = O && C[Symbol.toStringTag] || C.constructor.name || "Object";
        return q;
      }
    }
    function qp(C) {
      try {
        return to(C), !1;
      } catch {
        return !0;
      }
    }
    function to(C) {
      return "" + C;
    }
    function no(C) {
      if (qp(C))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", _p(C)), to(C);
    }
    var io = b.ReactCurrentOwner, Yp = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, lo, ro;
    function Zp(C) {
      if (Qe.call(C, "ref")) {
        var O = Object.getOwnPropertyDescriptor(C, "ref").get;
        if (O && O.isReactWarning)
          return !1;
      }
      return C.ref !== void 0;
    }
    function Xp(C) {
      if (Qe.call(C, "key")) {
        var O = Object.getOwnPropertyDescriptor(C, "key").get;
        if (O && O.isReactWarning)
          return !1;
      }
      return C.key !== void 0;
    }
    function Jp(C, O) {
      typeof C.ref == "string" && io.current;
    }
    function Qp(C, O) {
      {
        var q = function() {
          lo || (lo = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        q.isReactWarning = !0, Object.defineProperty(C, "key", {
          get: q,
          configurable: !0
        });
      }
    }
    function ev(C, O) {
      {
        var q = function() {
          ro || (ro = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        q.isReactWarning = !0, Object.defineProperty(C, "ref", {
          get: q,
          configurable: !0
        });
      }
    }
    var tv = function(C, O, q, le, be, ge, pe) {
      var ce = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: C,
        key: O,
        ref: q,
        props: pe,
        // Record the component responsible for creating this element.
        _owner: ge
      };
      return ce._store = {}, Object.defineProperty(ce._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ce, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: le
      }), Object.defineProperty(ce, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: be
      }), Object.freeze && (Object.freeze(ce.props), Object.freeze(ce)), ce;
    };
    function nv(C, O, q, le, be) {
      {
        var ge, pe = {}, ce = null, Ye = null;
        q !== void 0 && (no(q), ce = "" + q), Xp(O) && (no(O.key), ce = "" + O.key), Zp(O) && (Ye = O.ref, Jp(O, be));
        for (ge in O)
          Qe.call(O, ge) && !Yp.hasOwnProperty(ge) && (pe[ge] = O[ge]);
        if (C && C.defaultProps) {
          var Ne = C.defaultProps;
          for (ge in Ne)
            pe[ge] === void 0 && (pe[ge] = Ne[ge]);
        }
        if (ce || Ye) {
          var je = typeof C == "function" ? C.displayName || C.name || "Unknown" : C;
          ce && Qp(pe, je), Ye && ev(pe, je);
        }
        return tv(C, ce, Ye, be, le, io.current, pe);
      }
    }
    var bl = b.ReactCurrentOwner, oo = b.ReactDebugCurrentFrame;
    function mn(C) {
      if (C) {
        var O = C._owner, q = oe(C.type, C._source, O ? O.type : null);
        oo.setExtraStackFrame(q);
      } else
        oo.setExtraStackFrame(null);
    }
    var ml;
    ml = !1;
    function gl(C) {
      return typeof C == "object" && C !== null && C.$$typeof === e;
    }
    function ao() {
      {
        if (bl.current) {
          var C = A(bl.current.type);
          if (C)
            return `

Check the render method of \`` + C + "`.";
        }
        return "";
      }
    }
    function iv(C) {
      return "";
    }
    var uo = {};
    function lv(C) {
      {
        var O = ao();
        if (!O) {
          var q = typeof C == "string" ? C : C.displayName || C.name;
          q && (O = `

Check the top-level render call using <` + q + ">.");
        }
        return O;
      }
    }
    function so(C, O) {
      {
        if (!C._store || C._store.validated || C.key != null)
          return;
        C._store.validated = !0;
        var q = lv(O);
        if (uo[q])
          return;
        uo[q] = !0;
        var le = "";
        C && C._owner && C._owner !== bl.current && (le = " It was passed a child from " + A(C._owner.type) + "."), mn(C), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', q, le), mn(null);
      }
    }
    function co(C, O) {
      {
        if (typeof C != "object")
          return;
        if (Rn(C))
          for (var q = 0; q < C.length; q++) {
            var le = C[q];
            gl(le) && so(le, O);
          }
        else if (gl(C))
          C._store && (C._store.validated = !0);
        else if (C) {
          var be = g(C);
          if (typeof be == "function" && be !== C.entries)
            for (var ge = be.call(C), pe; !(pe = ge.next()).done; )
              gl(pe.value) && so(pe.value, O);
        }
      }
    }
    function rv(C) {
      {
        var O = C.type;
        if (O == null || typeof O == "string")
          return;
        var q;
        if (typeof O == "function")
          q = O.propTypes;
        else if (typeof O == "object" && (O.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        O.$$typeof === d))
          q = O.propTypes;
        else
          return;
        if (q) {
          var le = A(O);
          Ee(q, C.props, "prop", le, C);
        } else if (O.PropTypes !== void 0 && !ml) {
          ml = !0;
          var be = A(O);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", be || "Unknown");
        }
        typeof O.getDefaultProps == "function" && !O.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ov(C) {
      {
        for (var O = Object.keys(C.props), q = 0; q < O.length; q++) {
          var le = O[q];
          if (le !== "children" && le !== "key") {
            mn(C), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", le), mn(null);
            break;
          }
        }
        C.ref !== null && (mn(C), E("Invalid attribute `ref` supplied to `React.Fragment`."), mn(null));
      }
    }
    var fo = {};
    function po(C, O, q, le, be, ge) {
      {
        var pe = K(C);
        if (!pe) {
          var ce = "";
          (C === void 0 || typeof C == "object" && C !== null && Object.keys(C).length === 0) && (ce += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ye = iv();
          Ye ? ce += Ye : ce += ao();
          var Ne;
          C === null ? Ne = "null" : Rn(C) ? Ne = "array" : C !== void 0 && C.$$typeof === e ? (Ne = "<" + (A(C.type) || "Unknown") + " />", ce = " Did you accidentally export a JSX literal instead of a component?") : Ne = typeof C, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ne, ce);
        }
        var je = nv(C, O, q, be, ge);
        if (je == null)
          return je;
        if (pe) {
          var rt = O.children;
          if (rt !== void 0)
            if (le)
              if (Rn(rt)) {
                for (var gn = 0; gn < rt.length; gn++)
                  co(rt[gn], C);
                Object.freeze && Object.freeze(rt);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              co(rt, C);
        }
        if (Qe.call(O, "key")) {
          var Qt = A(C), et = Object.keys(O).filter(function(fv) {
            return fv !== "key";
          }), $l = et.length > 0 ? "{key: someKey, " + et.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!fo[Qt + $l]) {
            var dv = et.length > 0 ? "{" + et.join(": ..., ") + ": ...}" : "{}";
            E(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, $l, Qt, dv, Qt), fo[Qt + $l] = !0;
          }
        }
        return C === i ? ov(je) : rv(je), je;
      }
    }
    function av(C, O, q) {
      return po(C, O, q, !0);
    }
    function uv(C, O, q) {
      return po(C, O, q, !1);
    }
    var sv = uv, cv = av;
    jn.Fragment = i, jn.jsx = sv, jn.jsxs = cv;
  }()), jn;
}
var bo;
function yv() {
  return bo || (bo = 1, process.env.NODE_ENV === "production" ? xi.exports = gv() : xi.exports = $v()), xi.exports;
}
var f = yv();
function xa(t) {
  var e, n, i = "";
  if (typeof t == "string" || typeof t == "number") i += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var l = t.length;
    for (e = 0; e < l; e++) t[e] && (n = xa(t[e])) && (i && (i += " "), i += n);
  } else for (n in t) t[n] && (i && (i += " "), i += n);
  return i;
}
function I() {
  for (var t, e, n = 0, i = "", l = arguments.length; n < l; n++) (t = arguments[n]) && (e = xa(t)) && (i && (i += " "), i += e);
  return i;
}
const xv = (t) => /* @__PURE__ */ f.jsx(it, { ...t, children: /* @__PURE__ */ f.jsx("path", { d: "M12.6668 7.99992H3.3335M3.3335 7.99992L8.00016 12.6666M3.3335 7.99992L8.00016 3.33325", stroke: "var(--svg-stroke-color)", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }) }), Ev = (t) => /* @__PURE__ */ f.jsx(it, { ...t, children: /* @__PURE__ */ f.jsx("path", { d: "M3.33331 7.99992H12.6666M12.6666 7.99992L7.99998 3.33325M12.6666 7.99992L7.99998 12.6666", stroke: "var(--svg-stroke-color)", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }) }), Ea = (t) => /* @__PURE__ */ f.jsx(it, { ...t, children: /* @__PURE__ */ f.jsx("path", { d: "M13.3333 4L5.99999 11.3333L2.66666 8", stroke: "var(--svg-stroke-color)", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }) }), ai = (t) => /* @__PURE__ */ f.jsx(it, { ...t, children: /* @__PURE__ */ f.jsx("path", { d: "M4 6L8 10L12 6", stroke: "var(--svg-stroke-color)", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }) }), Cv = (t) => /* @__PURE__ */ f.jsx(it, { ...t, children: /* @__PURE__ */ f.jsx("path", { d: "M12 10L8 6L4 10", stroke: "var(--svg-stroke-color)", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }) }), Pv = (t) => /* @__PURE__ */ f.jsxs(it, { ...t, children: [
  /* @__PURE__ */ f.jsx("g", { clipPath: "url(#clip0_68_15823)", children: /* @__PURE__ */ f.jsx("path", { d: "M11.6666 4.33331H11.6733M4.66665 1.33331H11.3333C13.1743 1.33331 14.6666 2.8257 14.6666 4.66665V11.3333C14.6666 13.1743 13.1743 14.6666 11.3333 14.6666H4.66665C2.8257 14.6666 1.33331 13.1743 1.33331 11.3333V4.66665C1.33331 2.8257 2.8257 1.33331 4.66665 1.33331ZM10.6666 7.57998C10.7489 8.13481 10.6542 8.70146 10.3958 9.19932C10.1375 9.69719 9.72874 10.1009 9.22773 10.3531C8.72672 10.6053 8.15894 10.693 7.60517 10.6039C7.0514 10.5148 6.53982 10.2534 6.14321 9.85675C5.74659 9.46014 5.48513 8.94856 5.39602 8.39479C5.30691 7.84102 5.39469 7.27324 5.64686 6.77223C5.89904 6.27122 6.30277 5.86247 6.80064 5.60414C7.2985 5.34581 7.86515 5.25104 8.41998 5.33331C8.98593 5.41724 9.50988 5.68096 9.91444 6.08552C10.319 6.49008 10.5827 7.01403 10.6666 7.57998Z", stroke: "var(--svg-stroke-color)", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }) }),
  /* @__PURE__ */ f.jsx("defs", { children: /* @__PURE__ */ f.jsx("clipPath", { id: "clip0_68_15823", children: /* @__PURE__ */ f.jsx("rect", { width: "16", height: "16", fill: "white" }) }) })
] }), Dv = (t) => /* @__PURE__ */ f.jsxs(it, { ...t, children: [
  /* @__PURE__ */ f.jsx("path", { d: "M10.6667 5.33337C11.7275 5.33337 12.745 5.7548 13.4951 6.50495C14.2452 7.25509 14.6667 8.27251 14.6667 9.33337V14H12V9.33337C12 8.97975 11.8595 8.64061 11.6095 8.39057C11.3594 8.14052 11.0203 8.00004 10.6667 8.00004C10.3131 8.00004 9.97392 8.14052 9.72387 8.39057C9.47382 8.64061 9.33334 8.97975 9.33334 9.33337V14H6.66668V9.33337C6.66668 8.27251 7.0881 7.25509 7.83825 6.50495C8.58839 5.7548 9.60581 5.33337 10.6667 5.33337Z", stroke: "var(--svg-stroke-color)", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ f.jsx("path", { d: "M4.00001 6.00004H1.33334V14H4.00001V6.00004Z", stroke: "var(--svg-stroke-color)", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ f.jsx("path", { d: "M2.66668 4.00004C3.40306 4.00004 4.00001 3.40309 4.00001 2.66671C4.00001 1.93033 3.40306 1.33337 2.66668 1.33337C1.9303 1.33337 1.33334 1.93033 1.33334 2.66671C1.33334 3.40309 1.9303 4.00004 2.66668 4.00004Z", stroke: "var(--svg-stroke-color)", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" })
] }), Sv = (t) => /* @__PURE__ */ f.jsx(it, { ...t, children: /* @__PURE__ */ f.jsx("path", { d: "M2 8H14M2 4H14M2 12H14", stroke: "var(--svg-stroke-color)", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }) }), wv = (t) => /* @__PURE__ */ f.jsx(it, { ...t, children: /* @__PURE__ */ f.jsx("path", { d: "M3.33337 8H12.6667", stroke: "var(--svg-stroke-color)", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }) }), kv = (t) => /* @__PURE__ */ f.jsx(it, { ...t, children: /* @__PURE__ */ f.jsx("path", { d: "M14 14L11.1 11.1M12.6667 7.33333C12.6667 10.2789 10.2789 12.6667 7.33333 12.6667C4.38781 12.6667 2 10.2789 2 7.33333C2 4.38781 4.38781 2 7.33333 2C10.2789 2 12.6667 4.38781 12.6667 7.33333Z", stroke: "var(--svg-stroke-color)", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }) }), Tv = (t) => /* @__PURE__ */ f.jsx(it, { ...t, children: /* @__PURE__ */ f.jsx("path", { d: "M7.99992 1.33325L10.0599 5.50659L14.6666 6.17992L11.3333 9.42659L12.1199 14.0133L7.99992 11.8466L3.87992 14.0133L4.66659 9.42659L1.33325 6.17992L5.93992 5.50659L7.99992 1.33325Z", stroke: "var(--svg-stroke-color)", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }) }), Bv = (t) => /* @__PURE__ */ f.jsxs(it, { ...t, children: [
  /* @__PURE__ */ f.jsx("g", { clipPath: "url(#clip0_68_16059)", children: /* @__PURE__ */ f.jsx("path", { d: "M15.3333 2.00011C14.6949 2.45043 13.988 2.79485 13.24 3.02011C12.8385 2.55845 12.3048 2.23124 11.7113 2.08273C11.1178 1.93422 10.493 1.97158 9.92135 2.18975C9.34974 2.40792 8.85892 2.79638 8.51528 3.30259C8.17164 3.8088 7.99176 4.40834 7.99996 5.02011V5.68678C6.82838 5.71716 5.66747 5.45732 4.62063 4.93041C3.57379 4.4035 2.6735 3.62587 1.99996 2.66678C1.99996 2.66678 -0.666707 8.66678 5.33329 11.3334C3.96031 12.2654 2.32473 12.7327 0.666626 12.6668C6.66663 16.0001 14 12.6668 14 5.00011C13.9993 4.81441 13.9815 4.62917 13.9466 4.44678C14.627 3.77577 15.1072 2.92859 15.3333 2.00011Z", stroke: "var(--svg-stroke-color)", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }) }),
  /* @__PURE__ */ f.jsx("defs", { children: /* @__PURE__ */ f.jsx("clipPath", { id: "clip0_68_16059", children: /* @__PURE__ */ f.jsx("rect", { width: "16", height: "16", fill: "white" }) }) })
] }), kn = (t) => /* @__PURE__ */ f.jsx(it, { ...t, children: /* @__PURE__ */ f.jsx("path", { d: "M12 4L4 12M4 4L12 12", stroke: "var(--svg-stroke-color)", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }) }), Av = (t) => /* @__PURE__ */ f.jsxs(it, { ...t, children: [
  /* @__PURE__ */ f.jsxs("g", { clipPath: "url(#clip0_68_16115)", children: [
    /* @__PURE__ */ f.jsx("path", { d: "M15.0266 4.27984C14.9474 3.96344 14.7862 3.67355 14.5591 3.43944C14.332 3.20533 14.0471 3.03529 13.7333 2.9465C12.5866 2.6665 7.99997 2.6665 7.99997 2.6665C7.99997 2.6665 3.41331 2.6665 2.26664 2.97317C1.95281 3.06196 1.66796 3.232 1.44087 3.46611C1.21378 3.70022 1.0525 3.99011 0.973308 4.3065C0.763451 5.47021 0.660798 6.65071 0.666641 7.83317C0.65916 9.02453 0.761819 10.214 0.973308 11.3865C1.06061 11.6931 1.22551 11.9719 1.45207 12.1962C1.67863 12.4204 1.95919 12.5824 2.26664 12.6665C3.41331 12.9732 7.99997 12.9732 7.99997 12.9732C7.99997 12.9732 12.5866 12.9732 13.7333 12.6665C14.0471 12.5777 14.332 12.4077 14.5591 12.1736C14.7862 11.9395 14.9474 11.6496 15.0266 11.3332C15.2349 10.1782 15.3375 9.00673 15.3333 7.83317C15.3408 6.64181 15.2381 5.4523 15.0266 4.27984Z", stroke: "var(--svg-stroke-color)", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ f.jsx("path", { d: "M6.49997 10.0132L10.3333 7.83317L6.49997 5.65317V10.0132Z", stroke: "var(--svg-stroke-color)", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" })
  ] }),
  /* @__PURE__ */ f.jsx("defs", { children: /* @__PURE__ */ f.jsx("clipPath", { id: "clip0_68_16115", children: /* @__PURE__ */ f.jsx("rect", { width: "16", height: "16", fill: "white" }) }) })
] }), ar = _(null);
_(null);
_(null);
_(null);
_(null);
const Ca = _({}), de = typeof document < "u" ? $.useLayoutEffect : () => {
};
function Be(t) {
  const e = L(null);
  return de(() => {
    e.current = t;
  }, [
    t
  ]), X((...n) => {
    const i = e.current;
    return i == null ? void 0 : i(...n);
  }, []);
}
function Fv(t) {
  let [e, n] = Y(t), i = L(null), l = Be(() => {
    if (!i.current) return;
    let o = i.current.next();
    if (o.done) {
      i.current = null;
      return;
    }
    e === o.value ? l() : n(o.value);
  });
  de(() => {
    i.current && l();
  });
  let r = Be((o) => {
    i.current = o(e), l();
  });
  return [
    e,
    r
  ];
}
const Mi = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0
}, Pa = /* @__PURE__ */ $.createContext(Mi), Kv = /* @__PURE__ */ $.createContext(!1);
let Nv = !!(typeof window < "u" && window.document && window.document.createElement), yl = /* @__PURE__ */ new WeakMap();
function Iv(t = !1) {
  let e = z(Pa), n = L(null);
  if (n.current === null && !t) {
    var i, l;
    let r = (l = $.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || l === void 0 || (i = l.ReactCurrentOwner) === null || i === void 0 ? void 0 : i.current;
    if (r) {
      let o = yl.get(r);
      o == null ? yl.set(r, {
        id: e.current,
        state: r.memoizedState
      }) : r.memoizedState !== o.state && (e.current = o.id, yl.delete(r));
    }
    n.current = ++e.current;
  }
  return n.current;
}
function Mv(t) {
  let e = z(Pa);
  e === Mi && !Nv && process.env.NODE_ENV !== "production" && console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  let n = Iv(!!t), i = e === Mi && process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${e.prefix}`;
  return t || `${i}-${n}`;
}
function Rv(t) {
  let e = $.useId(), [n] = Y(Mt()), i = n || process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${Mi.prefix}`;
  return t || `${i}-${e}`;
}
const Lv = typeof $.useId == "function" ? Rv : Mv;
function jv() {
  return !1;
}
function zv() {
  return !0;
}
function Ov(t) {
  return () => {
  };
}
function Mt() {
  return typeof $.useSyncExternalStore == "function" ? $.useSyncExternalStore(Ov, jv, zv) : z(Kv);
}
let Vv = !!(typeof window < "u" && window.document && window.document.createElement), Pn = /* @__PURE__ */ new Map(), Wn;
typeof FinalizationRegistry < "u" && (Wn = new FinalizationRegistry((t) => {
  Pn.delete(t);
}));
function Pe(t) {
  let [e, n] = Y(t), i = L(null), l = Lv(e), r = L(null);
  if (Wn && Wn.register(r, l), Vv) {
    const o = Pn.get(l);
    o && !o.includes(i) ? o.push(i) : Pn.set(l, [
      i
    ]);
  }
  return de(() => {
    let o = l;
    return () => {
      Wn && Wn.unregister(r), Pn.delete(o);
    };
  }, [
    l
  ]), Z(() => {
    let o = i.current;
    return o && n(o), () => {
      o && (i.current = null);
    };
  }), l;
}
function Hv(t, e) {
  if (t === e) return t;
  let n = Pn.get(t);
  if (n)
    return n.forEach((l) => l.current = e), e;
  let i = Pn.get(e);
  return i ? (i.forEach((l) => l.current = t), t) : e;
}
function Nt(t = []) {
  let e = Pe(), [n, i] = Fv(e), l = X(() => {
    i(function* () {
      yield e, yield document.getElementById(e) ? e : void 0;
    });
  }, [
    e,
    i
  ]);
  return de(l, [
    e,
    l,
    ...t
  ]), n;
}
function Dt(...t) {
  return (...e) => {
    for (let n of t) typeof n == "function" && n(...e);
  };
}
const he = (t) => {
  var e;
  return (e = t == null ? void 0 : t.ownerDocument) !== null && e !== void 0 ? e : document;
}, lt = (t) => t && "window" in t && t.window === t ? t : he(t).defaultView || window;
function Uv(t) {
  return t !== null && typeof t == "object" && "nodeType" in t && typeof t.nodeType == "number";
}
function Wv(t) {
  return Uv(t) && t.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in t;
}
let Gv = !1, _v = !1;
function Ri() {
  return Gv;
}
function Ji() {
  return _v;
}
function Se(t, e) {
  if (!Ji()) return e && t ? t.contains(e) : !1;
  if (!t || !e) return !1;
  let n = e;
  for (; n !== null; ) {
    if (n === t) return !0;
    n.tagName === "SLOT" && n.assignedSlot ? n = n.assignedSlot.parentNode : Wv(n) ? n = n.host : n = n.parentNode;
  }
  return !1;
}
const _e = (t = document) => {
  var e;
  if (!Ji()) return t.activeElement;
  let n = t.activeElement;
  for (; n && "shadowRoot" in n && (!((e = n.shadowRoot) === null || e === void 0) && e.activeElement); ) n = n.shadowRoot.activeElement;
  return n;
};
function ve(t) {
  return Ji() && t.target.shadowRoot && t.composedPath ? t.composedPath()[0] : t.target;
}
class qv {
  get currentNode() {
    return this._currentNode;
  }
  set currentNode(e) {
    if (!Se(this.root, e)) throw new Error("Cannot set currentNode to a node that is not contained by the root node.");
    const n = [];
    let i = e, l = e;
    for (this._currentNode = e; i && i !== this.root; ) if (i.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      const o = i, a = this._doc.createTreeWalker(o, this.whatToShow, {
        acceptNode: this._acceptNode
      });
      n.push(a), a.currentNode = l, this._currentSetFor.add(a), i = l = o.host;
    } else i = i.parentNode;
    const r = this._doc.createTreeWalker(this.root, this.whatToShow, {
      acceptNode: this._acceptNode
    });
    n.push(r), r.currentNode = l, this._currentSetFor.add(r), this._walkerStack = n;
  }
  get doc() {
    return this._doc;
  }
  firstChild() {
    let e = this.currentNode, n = this.nextNode();
    return Se(e, n) ? (n && (this.currentNode = n), n) : (this.currentNode = e, null);
  }
  lastChild() {
    let n = this._walkerStack[0].lastChild();
    return n && (this.currentNode = n), n;
  }
  nextNode() {
    const e = this._walkerStack[0].nextNode();
    if (e) {
      if (e.shadowRoot) {
        var n;
        let l;
        if (typeof this.filter == "function" ? l = this.filter(e) : !((n = this.filter) === null || n === void 0) && n.acceptNode && (l = this.filter.acceptNode(e)), l === NodeFilter.FILTER_ACCEPT)
          return this.currentNode = e, e;
        let r = this.nextNode();
        return r && (this.currentNode = r), r;
      }
      return e && (this.currentNode = e), e;
    } else if (this._walkerStack.length > 1) {
      this._walkerStack.shift();
      let i = this.nextNode();
      return i && (this.currentNode = i), i;
    } else return null;
  }
  previousNode() {
    const e = this._walkerStack[0];
    if (e.currentNode === e.root) {
      if (this._currentSetFor.has(e))
        if (this._currentSetFor.delete(e), this._walkerStack.length > 1) {
          this._walkerStack.shift();
          let l = this.previousNode();
          return l && (this.currentNode = l), l;
        } else return null;
      return null;
    }
    const n = e.previousNode();
    if (n) {
      if (n.shadowRoot) {
        var i;
        let r;
        if (typeof this.filter == "function" ? r = this.filter(n) : !((i = this.filter) === null || i === void 0) && i.acceptNode && (r = this.filter.acceptNode(n)), r === NodeFilter.FILTER_ACCEPT)
          return n && (this.currentNode = n), n;
        let o = this.lastChild();
        return o && (this.currentNode = o), o;
      }
      return n && (this.currentNode = n), n;
    } else if (this._walkerStack.length > 1) {
      this._walkerStack.shift();
      let l = this.previousNode();
      return l && (this.currentNode = l), l;
    } else return null;
  }
  /**
   * @deprecated
   */
  nextSibling() {
    return null;
  }
  /**
   * @deprecated
   */
  previousSibling() {
    return null;
  }
  /**
   * @deprecated
   */
  parentNode() {
    return null;
  }
  constructor(e, n, i, l) {
    this._walkerStack = [], this._currentSetFor = /* @__PURE__ */ new Set(), this._acceptNode = (o) => {
      if (o.nodeType === Node.ELEMENT_NODE) {
        const u = o.shadowRoot;
        if (u) {
          const s = this._doc.createTreeWalker(u, this.whatToShow, {
            acceptNode: this._acceptNode
          });
          return this._walkerStack.unshift(s), NodeFilter.FILTER_ACCEPT;
        } else {
          var a;
          if (typeof this.filter == "function") return this.filter(o);
          if (!((a = this.filter) === null || a === void 0) && a.acceptNode) return this.filter.acceptNode(o);
          if (this.filter === null) return NodeFilter.FILTER_ACCEPT;
        }
      }
      return NodeFilter.FILTER_SKIP;
    }, this._doc = e, this.root = n, this.filter = l ?? null, this.whatToShow = i ?? NodeFilter.SHOW_ALL, this._currentNode = n, this._walkerStack.unshift(e.createTreeWalker(n, i, this._acceptNode));
    const r = n.shadowRoot;
    if (r) {
      const o = this._doc.createTreeWalker(r, this.whatToShow, {
        acceptNode: this._acceptNode
      });
      this._walkerStack.unshift(o);
    }
  }
}
function Yv(t, e, n, i) {
  return Ji() ? new qv(t, e, n, i) : t.createTreeWalker(e, n, i);
}
function V(...t) {
  let e = {
    ...t[0]
  };
  for (let n = 1; n < t.length; n++) {
    let i = t[n];
    for (let l in i) {
      let r = e[l], o = i[l];
      typeof r == "function" && typeof o == "function" && // This is a lot faster than a regex.
      l[0] === "o" && l[1] === "n" && l.charCodeAt(2) >= /* 'A' */
      65 && l.charCodeAt(2) <= /* 'Z' */
      90 ? e[l] = Dt(r, o) : (l === "className" || l === "UNSAFE_className") && typeof r == "string" && typeof o == "string" ? e[l] = I(r, o) : l === "id" && r && o ? e.id = Hv(r, o) : e[l] = o !== void 0 ? o : r;
    }
  }
  return e;
}
function Rt(...t) {
  return t.length === 1 && t[0] ? t[0] : (e) => {
    let n = !1;
    const i = t.map((l) => {
      const r = mo(l, e);
      return n || (n = typeof r == "function"), r;
    });
    if (n) return () => {
      i.forEach((l, r) => {
        typeof l == "function" ? l() : mo(t[r], null);
      });
    };
  };
}
function mo(t, e) {
  if (typeof t == "function") return t(e);
  t != null && (t.current = e);
}
const Zv = /* @__PURE__ */ new Set([
  "id"
]), Xv = /* @__PURE__ */ new Set([
  "aria-label",
  "aria-labelledby",
  "aria-describedby",
  "aria-details"
]), Jv = /* @__PURE__ */ new Set([
  "href",
  "hrefLang",
  "target",
  "rel",
  "download",
  "ping",
  "referrerPolicy"
]), Qv = /^(data-.*)$/;
function ee(t, e = {}) {
  let { labelable: n, isLink: i, propNames: l } = e, r = {};
  for (const o in t) Object.prototype.hasOwnProperty.call(t, o) && (Zv.has(o) || n && Xv.has(o) || i && Jv.has(o) || l != null && l.has(o) || Qv.test(o)) && (r[o] = t[o]);
  return r;
}
function st(t) {
  if (eh()) t.focus({
    preventScroll: !0
  });
  else {
    let e = th(t);
    t.focus(), nh(e);
  }
}
let Ei = null;
function eh() {
  if (Ei == null) {
    Ei = !1;
    try {
      document.createElement("div").focus({
        get preventScroll() {
          return Ei = !0, !0;
        }
      });
    } catch {
    }
  }
  return Ei;
}
function th(t) {
  let e = t.parentNode, n = [], i = document.scrollingElement || document.documentElement;
  for (; e instanceof HTMLElement && e !== i; )
    (e.offsetHeight < e.scrollHeight || e.offsetWidth < e.scrollWidth) && n.push({
      element: e,
      scrollTop: e.scrollTop,
      scrollLeft: e.scrollLeft
    }), e = e.parentNode;
  return i instanceof HTMLElement && n.push({
    element: i,
    scrollTop: i.scrollTop,
    scrollLeft: i.scrollLeft
  }), n;
}
function nh(t) {
  for (let { element: e, scrollTop: n, scrollLeft: i } of t)
    e.scrollTop = n, e.scrollLeft = i;
}
function Qi(t) {
  var e;
  return typeof window > "u" || window.navigator == null ? !1 : ((e = window.navigator.userAgentData) === null || e === void 0 ? void 0 : e.brands.some((n) => t.test(n.brand))) || t.test(window.navigator.userAgent);
}
function ur(t) {
  var e;
  return typeof window < "u" && window.navigator != null ? t.test(((e = window.navigator.userAgentData) === null || e === void 0 ? void 0 : e.platform) || window.navigator.platform) : !1;
}
function Lt(t) {
  if (process.env.NODE_ENV === "test") return t;
  let e = null;
  return () => (e == null && (e = t()), e);
}
const qt = Lt(function() {
  return ur(/^Mac/i);
}), ih = Lt(function() {
  return ur(/^iPhone/i);
}), Da = Lt(function() {
  return ur(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  qt() && navigator.maxTouchPoints > 1;
}), el = Lt(function() {
  return ih() || Da();
}), Fi = Lt(function() {
  return qt() || el();
}), sr = Lt(function() {
  return Qi(/AppleWebKit/i) && !Sa();
}), Sa = Lt(function() {
  return Qi(/Chrome/i);
}), Jn = Lt(function() {
  return Qi(/Android/i);
}), lh = Lt(function() {
  return Qi(/Firefox/i);
}), rh = /* @__PURE__ */ _({
  isNative: !0,
  open: uh,
  useHref: (t) => t
});
function un() {
  return z(rh);
}
function oh(t, e) {
  let n = t.getAttribute("target");
  return (!n || n === "_self") && t.origin === location.origin && !t.hasAttribute("download") && !e.metaKey && // open in new tab (mac)
  !e.ctrlKey && // open in new tab (windows)
  !e.altKey && // download
  !e.shiftKey;
}
function rn(t, e, n = !0) {
  var i, l;
  let { metaKey: r, ctrlKey: o, altKey: a, shiftKey: u } = e;
  lh() && (!((l = window.event) === null || l === void 0 || (i = l.type) === null || i === void 0) && i.startsWith("key")) && t.target === "_blank" && (qt() ? r = !0 : o = !0);
  let s = sr() && qt() && !Da() && process.env.NODE_ENV !== "test" ? new KeyboardEvent("keydown", {
    keyIdentifier: "Enter",
    metaKey: r,
    ctrlKey: o,
    altKey: a,
    shiftKey: u
  }) : new MouseEvent("click", {
    metaKey: r,
    ctrlKey: o,
    altKey: a,
    shiftKey: u,
    bubbles: !0,
    cancelable: !0
  });
  rn.isOpening = n, st(t), t.dispatchEvent(s), rn.isOpening = !1;
}
rn.isOpening = !1;
function ah(t, e) {
  if (t instanceof HTMLAnchorElement) e(t);
  else if (t.hasAttribute("data-href")) {
    let n = document.createElement("a");
    n.href = t.getAttribute("data-href"), t.hasAttribute("data-target") && (n.target = t.getAttribute("data-target")), t.hasAttribute("data-rel") && (n.rel = t.getAttribute("data-rel")), t.hasAttribute("data-download") && (n.download = t.getAttribute("data-download")), t.hasAttribute("data-ping") && (n.ping = t.getAttribute("data-ping")), t.hasAttribute("data-referrer-policy") && (n.referrerPolicy = t.getAttribute("data-referrer-policy")), t.appendChild(n), e(n), t.removeChild(n);
  }
}
function uh(t, e) {
  ah(t, (n) => rn(n, e));
}
function cr(t) {
  let e = un();
  var n;
  const i = e.useHref((n = t.href) !== null && n !== void 0 ? n : "");
  return {
    "data-href": t.href ? i : void 0,
    "data-target": t.target,
    "data-rel": t.rel,
    "data-download": t.download,
    "data-ping": t.ping,
    "data-referrer-policy": t.referrerPolicy
  };
}
function tl(t) {
  let e = un();
  var n;
  const i = e.useHref((n = t == null ? void 0 : t.href) !== null && n !== void 0 ? n : "");
  return {
    href: t != null && t.href ? i : void 0,
    target: t == null ? void 0 : t.target,
    rel: t == null ? void 0 : t.rel,
    download: t == null ? void 0 : t.download,
    ping: t == null ? void 0 : t.ping,
    referrerPolicy: t == null ? void 0 : t.referrerPolicy
  };
}
let Wt = /* @__PURE__ */ new Map(), Il = /* @__PURE__ */ new Set();
function go() {
  if (typeof window > "u") return;
  function t(i) {
    return "propertyName" in i;
  }
  let e = (i) => {
    if (!t(i) || !i.target) return;
    let l = Wt.get(i.target);
    l || (l = /* @__PURE__ */ new Set(), Wt.set(i.target, l), i.target.addEventListener("transitioncancel", n, {
      once: !0
    })), l.add(i.propertyName);
  }, n = (i) => {
    if (!t(i) || !i.target) return;
    let l = Wt.get(i.target);
    if (l && (l.delete(i.propertyName), l.size === 0 && (i.target.removeEventListener("transitioncancel", n), Wt.delete(i.target)), Wt.size === 0)) {
      for (let r of Il) r();
      Il.clear();
    }
  };
  document.body.addEventListener("transitionrun", e), document.body.addEventListener("transitionend", n);
}
typeof document < "u" && (document.readyState !== "loading" ? go() : document.addEventListener("DOMContentLoaded", go));
function sh() {
  for (const [t] of Wt)
    "isConnected" in t && !t.isConnected && Wt.delete(t);
}
function wa(t) {
  requestAnimationFrame(() => {
    sh(), Wt.size === 0 ? t() : Il.add(t);
  });
}
function sn() {
  let t = L(/* @__PURE__ */ new Map()), e = X((l, r, o, a) => {
    let u = a != null && a.once ? (...s) => {
      t.current.delete(o), o(...s);
    } : o;
    t.current.set(o, {
      type: r,
      eventTarget: l,
      fn: u,
      options: a
    }), l.addEventListener(r, u, a);
  }, []), n = X((l, r, o, a) => {
    var u;
    let s = ((u = t.current.get(o)) === null || u === void 0 ? void 0 : u.fn) || o;
    l.removeEventListener(r, s, a), t.current.delete(o);
  }, []), i = X(() => {
    t.current.forEach((l, r) => {
      n(l.eventTarget, l.type, r, l.options);
    });
  }, [
    n
  ]);
  return Z(() => i, [
    i
  ]), {
    addGlobalListener: e,
    removeGlobalListener: n,
    removeAllGlobalListeners: i
  };
}
function Tn(t, e) {
  let { id: n, "aria-label": i, "aria-labelledby": l } = t;
  return n = Pe(n), l && i ? l = [
    .../* @__PURE__ */ new Set([
      n,
      ...l.trim().split(/\s+/)
    ])
  ].join(" ") : l && (l = l.trim().split(/\s+/).join(" ")), !i && !l && e && (i = e), {
    id: n,
    "aria-label": i,
    "aria-labelledby": l
  };
}
function Re(t) {
  const e = L(null), n = L(void 0), i = X((l) => {
    if (typeof t == "function") {
      const r = t, o = r(l);
      return () => {
        typeof o == "function" ? o() : r(null);
      };
    } else if (t)
      return t.current = l, () => {
        t.current = null;
      };
  }, [
    t
  ]);
  return U(() => ({
    get current() {
      return e.current;
    },
    set current(l) {
      e.current = l, n.current && (n.current(), n.current = void 0), l != null && (n.current = i(l));
    }
  }), [
    i
  ]);
}
function dr(t, e) {
  const n = L(!0), i = L(null);
  Z(() => (n.current = !0, () => {
    n.current = !1;
  }), []), Z(() => {
    let l = i.current;
    n.current ? n.current = !1 : (!l || e.some((r, o) => !Object.is(r, l[o]))) && t(), i.current = e;
  }, e);
}
function $o(t, e) {
  const n = L(!0), i = L(null);
  de(() => (n.current = !0, () => {
    n.current = !1;
  }), []), de(() => {
    n.current ? n.current = !1 : (!i.current || e.some((l, r) => !Object.is(l, i[r]))) && t(), i.current = e;
  }, e);
}
function ch() {
  return typeof window.ResizeObserver < "u";
}
function Bn(t) {
  const { ref: e, box: n, onResize: i } = t;
  Z(() => {
    let l = e == null ? void 0 : e.current;
    if (l)
      if (ch()) {
        const r = new window.ResizeObserver((o) => {
          o.length && i();
        });
        return r.observe(l, {
          box: n
        }), () => {
          l && r.unobserve(l);
        };
      } else
        return window.addEventListener("resize", i, !1), () => {
          window.removeEventListener("resize", i, !1);
        };
  }, [
    i,
    e,
    n
  ]);
}
function fr(t, e) {
  de(() => {
    if (t && t.ref && e)
      return t.ref.current = e.current, () => {
        t.ref && (t.ref.current = null);
      };
  });
}
function Qn(t, e) {
  if (!t) return !1;
  let n = window.getComputedStyle(t), i = /(auto|scroll)/.test(n.overflow + n.overflowX + n.overflowY);
  return i && e && (i = t.scrollHeight !== t.clientHeight || t.scrollWidth !== t.clientWidth), i;
}
function Ze(t, e) {
  let n = t;
  for (Qn(n, e) && (n = n.parentElement); n && !Qn(n, e); ) n = n.parentElement;
  return n || document.scrollingElement || document.documentElement;
}
function dh(t, e) {
  const n = [];
  for (; t && t !== document.documentElement; )
    Qn(t, e) && n.push(t), t = t.parentElement;
  return n;
}
let ot = typeof document < "u" && window.visualViewport;
function fh() {
  let t = Mt(), [e, n] = Y(() => t ? {
    width: 0,
    height: 0
  } : yo());
  return Z(() => {
    let i = () => {
      n((l) => {
        let r = yo();
        return r.width === l.width && r.height === l.height ? l : r;
      });
    };
    return ot ? ot.addEventListener("resize", i) : window.addEventListener("resize", i), () => {
      ot ? ot.removeEventListener("resize", i) : window.removeEventListener("resize", i);
    };
  }, []), e;
}
function yo() {
  return {
    width: ot && (ot == null ? void 0 : ot.width) || window.innerWidth,
    height: ot && (ot == null ? void 0 : ot.height) || window.innerHeight
  };
}
let ph = 0;
const xl = /* @__PURE__ */ new Map();
function ui(t) {
  let [e, n] = Y();
  return de(() => {
    if (!t) return;
    let i = xl.get(t);
    if (i)
      n(i.element.id);
    else {
      let l = `react-aria-description-${ph++}`;
      n(l);
      let r = document.createElement("div");
      r.id = l, r.style.display = "none", r.textContent = t, document.body.appendChild(r), i = {
        refCount: 0,
        element: r
      }, xl.set(t, i);
    }
    return i.refCount++, () => {
      i && --i.refCount === 0 && (i.element.remove(), xl.delete(t));
    };
  }, [
    t
  ]), {
    "aria-describedby": t ? e : void 0
  };
}
function Gn(t, e, n, i) {
  let l = Be(n), r = n == null;
  Z(() => {
    if (r || !t.current) return;
    let o = t.current;
    return o.addEventListener(e, l, i), () => {
      o.removeEventListener(e, l, i);
    };
  }, [
    t,
    e,
    i,
    r,
    l
  ]);
}
function ka(t, e) {
  let n = xo(t, e, "left"), i = xo(t, e, "top"), l = e.offsetWidth, r = e.offsetHeight, o = t.scrollLeft, a = t.scrollTop, { borderTopWidth: u, borderLeftWidth: s, scrollPaddingTop: c, scrollPaddingRight: d, scrollPaddingBottom: v, scrollPaddingLeft: p } = getComputedStyle(t), h = o + parseInt(s, 10), m = a + parseInt(u, 10), g = h + t.clientWidth, b = m + t.clientHeight, E = parseInt(c, 10) || 0, D = parseInt(v, 10) || 0, k = parseInt(d, 10) || 0, P = parseInt(p, 10) || 0;
  n <= o + P ? o = n - parseInt(s, 10) - P : n + l > g - k && (o += n + l - g + k), i <= m + E ? a = i - parseInt(u, 10) - E : i + r > b - D && (a += i + r - b + D), t.scrollLeft = o, t.scrollTop = a;
}
function xo(t, e, n) {
  const i = n === "left" ? "offsetLeft" : "offsetTop";
  let l = 0;
  for (; e.offsetParent && (l += e[i], e.offsetParent !== t); ) {
    if (e.offsetParent.contains(t)) {
      l -= t[i];
      break;
    }
    e = e.offsetParent;
  }
  return l;
}
function nt(t, e) {
  if (t && document.contains(t)) {
    let o = document.scrollingElement || document.documentElement;
    if (window.getComputedStyle(o).overflow === "hidden") {
      let u = dh(t);
      for (let s of u) ka(s, t);
    } else {
      var n;
      let { left: u, top: s } = t.getBoundingClientRect();
      t == null || (n = t.scrollIntoView) === null || n === void 0 || n.call(t, {
        block: "nearest"
      });
      let { left: c, top: d } = t.getBoundingClientRect();
      if (Math.abs(u - c) > 1 || Math.abs(s - d) > 1) {
        var i, l, r;
        e == null || (l = e.containingElement) === null || l === void 0 || (i = l.scrollIntoView) === null || i === void 0 || i.call(l, {
          block: "center",
          inline: "center"
        }), (r = t.scrollIntoView) === null || r === void 0 || r.call(t, {
          block: "nearest"
        });
      }
    }
  }
}
function Ml(t) {
  return t.mozInputSource === 0 && t.isTrusted ? !0 : Jn() && t.pointerType ? t.type === "click" && t.buttons === 1 : t.detail === 0 && !t.pointerType;
}
function vh(t) {
  return !Jn() && t.width === 0 && t.height === 0 || t.width === 1 && t.height === 1 && t.pressure === 0 && t.detail === 0 && t.pointerType === "mouse";
}
function si(t, e, n) {
  let i = L(e), l = Be(() => {
    n && n(i.current);
  });
  Z(() => {
    var r;
    let o = t == null || (r = t.current) === null || r === void 0 ? void 0 : r.form;
    return o == null || o.addEventListener("reset", l), () => {
      o == null || o.removeEventListener("reset", l);
    };
  }, [
    t,
    l
  ]);
}
function Ta(t, e) {
  let { collection: n, onLoadMore: i, scrollOffset: l = 1 } = t, r = L(null), o = Be((a) => {
    for (let u of a)
      u.isIntersecting && i && i();
  });
  de(() => (e.current && (r.current = new IntersectionObserver(o, {
    root: Ze(e == null ? void 0 : e.current),
    rootMargin: `0px ${100 * l}% ${100 * l}% ${100 * l}%`
  }), r.current.observe(e.current)), () => {
    r.current && r.current.disconnect();
  }), [
    n,
    o,
    e,
    l
  ]);
}
function Li(t) {
  const e = pv.split(".");
  return parseInt(e[0], 10) >= 19 ? t : t ? "true" : void 0;
}
const hh = "react-aria-clear-focus", bh = "react-aria-focus";
function xn(t) {
  return qt() ? t.metaKey : t.ctrlKey;
}
function pr(t, e = !0) {
  let [n, i] = Y(!0), l = n && e;
  return de(() => {
    if (l && t.current && "getAnimations" in t.current)
      for (let r of t.current.getAnimations()) r instanceof CSSTransition && r.cancel();
  }, [
    t,
    l
  ]), Ba(t, l, X(() => i(!1), [])), l;
}
function Rl(t, e) {
  let [n, i] = Y(e ? "open" : "closed");
  switch (n) {
    case "open":
      e || i("exiting");
      break;
    case "closed":
    case "exiting":
      e && i("open");
      break;
  }
  let l = n === "exiting";
  return Ba(t, l, X(() => {
    i((r) => r === "exiting" ? "closed" : r);
  }, [])), l;
}
function Ba(t, e, n) {
  de(() => {
    if (e && t.current) {
      if (!("getAnimations" in t.current)) {
        n();
        return;
      }
      let i = t.current.getAnimations();
      if (i.length === 0) {
        n();
        return;
      }
      let l = !1;
      return Promise.all(i.map((r) => r.finished)).then(() => {
        l || Xi(() => {
          n();
        });
      }).catch(() => {
      }), () => {
        l = !0;
      };
    }
  }, [
    t,
    e,
    n
  ]);
}
const vr = [
  "input:not([disabled]):not([type=hidden])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "a[href]",
  "area[href]",
  "summary",
  "iframe",
  "object",
  "embed",
  "audio[controls]",
  "video[controls]",
  '[contenteditable]:not([contenteditable^="false"])'
], mh = vr.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
vr.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const gh = vr.join(':not([hidden]):not([tabindex="-1"]),');
function Aa(t) {
  return t.matches(mh);
}
function $h(t) {
  return t.matches(gh);
}
function dt(t, e, n) {
  let [i, l] = Y(t || e), r = L(t !== void 0), o = t !== void 0;
  Z(() => {
    let s = r.current;
    s !== o && process.env.NODE_ENV !== "production" && console.warn(`WARN: A component changed from ${s ? "controlled" : "uncontrolled"} to ${o ? "controlled" : "uncontrolled"}.`), r.current = o;
  }, [
    o
  ]);
  let a = o ? t : i, u = X((s, ...c) => {
    let d = (v, ...p) => {
      n && (Object.is(a, v) || n(v, ...p)), o || (a = v);
    };
    typeof s == "function" ? (process.env.NODE_ENV !== "production" && console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"), l((p, ...h) => {
      let m = s(o ? a : p, ...h);
      return d(m, ...c), o ? p : m;
    })) : (o || l(s), d(s, ...c));
  }, [
    o,
    a,
    n
  ]);
  return [
    a,
    u
  ];
}
function An(t, e = -1 / 0, n = 1 / 0) {
  return Math.min(Math.max(t, e), n);
}
function Ci(t, e) {
  let n = t, i = e.toString(), l = i.indexOf("."), r = l >= 0 ? i.length - l : 0;
  if (r > 0) {
    let o = Math.pow(10, r);
    n = Math.round(n * o) / o;
  }
  return n;
}
function zn(t, e, n, i) {
  e = Number(e), n = Number(n);
  let l = (t - (isNaN(e) ? 0 : e)) % i, r = Ci(Math.abs(l) * 2 >= i ? t + Math.sign(l) * (i - Math.abs(l)) : t - l, i);
  return isNaN(e) ? !isNaN(n) && r > n && (r = Math.floor(Ci(n / i, i)) * i) : r < e ? r = e : !isNaN(n) && r > n && (r = e + Math.floor(Ci((n - e) / i, i)) * i), r = Ci(r, i), r;
}
const Yt = Symbol("default");
function xe({ values: t, children: e }) {
  for (let [n, i] of t)
    e = /* @__PURE__ */ $.createElement(n.Provider, {
      value: i
    }, e);
  return e;
}
function ne(t) {
  let { className: e, style: n, children: i, defaultClassName: l, defaultChildren: r, defaultStyle: o, values: a } = t;
  return U(() => {
    let u, s, c;
    return typeof e == "function" ? u = e({
      ...a,
      defaultClassName: l
    }) : u = e, typeof n == "function" ? s = n({
      ...a,
      defaultStyle: o || {}
    }) : s = n, typeof i == "function" ? c = i({
      ...a,
      defaultChildren: r
    }) : i == null ? c = r : c = i, {
      className: u ?? l,
      style: s || o ? {
        ...o,
        ...s
      } : void 0,
      children: c ?? r,
      "data-rac": ""
    };
  }, [
    e,
    n,
    i,
    l,
    r,
    o,
    a
  ]);
}
function mt(t, e) {
  let n = z(t);
  if (e === null)
    return null;
  if (n && typeof n == "object" && "slots" in n && n.slots) {
    let i = e || Yt;
    if (!n.slots[i]) {
      let l = new Intl.ListFormat().format(Object.keys(n.slots).map((o) => `"${o}"`)), r = e ? `Invalid slot "${e}".` : "A slot prop is required.";
      throw new Error(`${r} Valid slot names are ${l}.`);
    }
    return n.slots[i];
  }
  return n;
}
function fe(t, e, n) {
  let i = mt(n, t.slot) || {}, { ref: l, ...r } = i, o = Re(U(() => Rt(e, l), [
    e,
    l
  ])), a = V(r, t);
  return "style" in r && r.style && "style" in t && t.style && (typeof r.style == "function" || typeof t.style == "function" ? a.style = (u) => {
    let s = typeof r.style == "function" ? r.style(u) : r.style, c = {
      ...u.defaultStyle,
      ...s
    }, d = typeof t.style == "function" ? t.style({
      ...u,
      defaultStyle: c
    }) : t.style;
    return {
      ...c,
      ...d
    };
  } : a.style = {
    ...r.style,
    ...t.style
  }), [
    a,
    o
  ];
}
function St(t = !0) {
  let [e, n] = Y(t), i = L(!1), l = X((r) => {
    i.current = !0, n(!!r);
  }, []);
  return de(() => {
    i.current || n(!1);
  }, []), [
    l,
    e
  ];
}
function on(t) {
  const e = /^(data-.*)$/;
  let n = {};
  for (const i in t) e.test(i) || (n[i] = t[i]);
  return n;
}
class ei {
  get childNodes() {
    throw new Error("childNodes is not supported");
  }
  clone() {
    let e = new ei(this.type, this.key);
    return e.value = this.value, e.level = this.level, e.hasChildNodes = this.hasChildNodes, e.rendered = this.rendered, e.textValue = this.textValue, e["aria-label"] = this["aria-label"], e.index = this.index, e.parentKey = this.parentKey, e.prevKey = this.prevKey, e.nextKey = this.nextKey, e.firstChildKey = this.firstChildKey, e.lastChildKey = this.lastChildKey, e.props = this.props, e.render = this.render, e.colSpan = this.colSpan, e.colIndex = this.colIndex, e;
  }
  constructor(e, n) {
    this.value = null, this.level = 0, this.hasChildNodes = !1, this.rendered = null, this.textValue = "", this["aria-label"] = void 0, this.index = 0, this.parentKey = null, this.prevKey = null, this.nextKey = null, this.firstChildKey = null, this.lastChildKey = null, this.props = {}, this.colSpan = null, this.colIndex = null, this.type = e, this.key = n;
  }
}
class nl {
  get size() {
    return this.keyMap.size;
  }
  getKeys() {
    return this.keyMap.keys();
  }
  *[Symbol.iterator]() {
    let e = this.firstKey != null ? this.keyMap.get(this.firstKey) : void 0;
    for (; e; )
      yield e, e = e.nextKey != null ? this.keyMap.get(e.nextKey) : void 0;
  }
  getChildren(e) {
    let n = this.keyMap;
    return {
      *[Symbol.iterator]() {
        let i = n.get(e), l = (i == null ? void 0 : i.firstChildKey) != null ? n.get(i.firstChildKey) : null;
        for (; l; )
          yield l, l = l.nextKey != null ? n.get(l.nextKey) : void 0;
      }
    };
  }
  getKeyBefore(e) {
    let n = this.keyMap.get(e);
    if (!n) return null;
    if (n.prevKey != null) {
      for (n = this.keyMap.get(n.prevKey); n && n.type !== "item" && n.lastChildKey != null; ) n = this.keyMap.get(n.lastChildKey);
      var i;
      return (i = n == null ? void 0 : n.key) !== null && i !== void 0 ? i : null;
    }
    return n.parentKey;
  }
  getKeyAfter(e) {
    let n = this.keyMap.get(e);
    if (!n) return null;
    if (n.type !== "item" && n.firstChildKey != null) return n.firstChildKey;
    for (; n; ) {
      if (n.nextKey != null) return n.nextKey;
      if (n.parentKey != null) n = this.keyMap.get(n.parentKey);
      else return null;
    }
    return null;
  }
  getFirstKey() {
    return this.firstKey;
  }
  getLastKey() {
    let e = this.lastKey != null ? this.keyMap.get(this.lastKey) : null;
    for (; (e == null ? void 0 : e.lastChildKey) != null; ) e = this.keyMap.get(e.lastChildKey);
    var n;
    return (n = e == null ? void 0 : e.key) !== null && n !== void 0 ? n : null;
  }
  getItem(e) {
    var n;
    return (n = this.keyMap.get(e)) !== null && n !== void 0 ? n : null;
  }
  at() {
    throw new Error("Not implemented");
  }
  clone() {
    let e = this.constructor, n = new e();
    return n.keyMap = new Map(this.keyMap), n.firstKey = this.firstKey, n.lastKey = this.lastKey, n;
  }
  addNode(e) {
    if (this.frozen) throw new Error("Cannot add a node to a frozen collection");
    this.keyMap.set(e.key, e);
  }
  removeNode(e) {
    if (this.frozen) throw new Error("Cannot remove a node to a frozen collection");
    this.keyMap.delete(e);
  }
  commit(e, n, i = !1) {
    if (this.frozen) throw new Error("Cannot commit a frozen collection");
    this.firstKey = e, this.lastKey = n, this.frozen = !i;
  }
  // TODO: this is pretty specific to menu, will need to check if it is generic enough
  // Will need to handle varying levels I assume but will revisit after I get searchable menu working for base menu
  // TODO: an alternative is to simply walk the collection and add all item nodes that match the filter and any sections/separators we encounter
  // to an array, then walk that new array and fix all the next/Prev keys while adding them to the new collection
  UNSTABLE_filter(e) {
    let n = new nl(), i = null;
    for (let l of this)
      if (l.type === "section" && l.hasChildNodes) {
        let r = l.clone(), o = null;
        for (let a of this.getChildren(l.key)) if (Eo(a, e, this, n)) {
          let u = a.clone();
          o == null && (r.firstChildKey = u.key), n.firstKey == null && (n.firstKey = r.key), o && o.parentKey === u.parentKey ? (o.nextKey = u.key, u.prevKey = o.key) : u.prevKey = null, u.nextKey = null, n.addNode(u), o = u;
        }
        o && (o.type !== "header" ? (r.lastChildKey = o.key, i == null ? r.prevKey = null : (i.type === "section" || i.type === "separator") && (i.nextKey = r.key, r.prevKey = i.key), r.nextKey = null, i = r, n.addNode(r)) : (n.firstKey === r.key && (n.firstKey = null), n.removeNode(o.key)));
      } else if (l.type === "separator") {
        let r = l.clone();
        r.nextKey = null, (i == null ? void 0 : i.type) === "section" && (i.nextKey = r.key, r.prevKey = i.key, i = r, n.addNode(r));
      } else {
        let r = l.clone();
        Eo(r, e, this, n) && (n.firstKey == null && (n.firstKey = r.key), i != null && i.type !== "section" && i.type !== "separator" && i.parentKey === r.parentKey ? (i.nextKey = r.key, r.prevKey = i.key) : r.prevKey = null, r.nextKey = null, n.addNode(r), i = r);
      }
    if ((i == null ? void 0 : i.type) === "separator" && i.nextKey === null) {
      let l;
      i.prevKey != null && (l = n.getItem(i.prevKey), l.nextKey = null), n.removeNode(i.key), i = l;
    }
    return n.lastKey = (i == null ? void 0 : i.key) || null, n;
  }
  constructor() {
    this.keyMap = /* @__PURE__ */ new Map(), this.firstKey = null, this.lastKey = null, this.frozen = !1;
  }
}
function Eo(t, e, n, i) {
  if (t.type === "subdialogtrigger" || t.type === "submenutrigger") {
    let l = [
      ...n.getChildren(t.key)
    ][0];
    if (l && e(l.textValue)) {
      let r = l.clone();
      return i.addNode(r), !0;
    } else return !1;
  } else return t.type === "header" ? !0 : e(t.textValue);
}
class Fa {
  *[Symbol.iterator]() {
    let e = this.firstChild;
    for (; e; )
      yield e, e = e.nextSibling;
  }
  get firstChild() {
    return this._firstChild;
  }
  set firstChild(e) {
    this._firstChild = e, this.ownerDocument.markDirty(this);
  }
  get lastChild() {
    return this._lastChild;
  }
  set lastChild(e) {
    this._lastChild = e, this.ownerDocument.markDirty(this);
  }
  get previousSibling() {
    return this._previousSibling;
  }
  set previousSibling(e) {
    this._previousSibling = e, this.ownerDocument.markDirty(this);
  }
  get nextSibling() {
    return this._nextSibling;
  }
  set nextSibling(e) {
    this._nextSibling = e, this.ownerDocument.markDirty(this);
  }
  get parentNode() {
    return this._parentNode;
  }
  set parentNode(e) {
    this._parentNode = e, this.ownerDocument.markDirty(this);
  }
  get isConnected() {
    var e;
    return ((e = this.parentNode) === null || e === void 0 ? void 0 : e.isConnected) || !1;
  }
  invalidateChildIndices(e) {
    (this._minInvalidChildIndex == null || !this._minInvalidChildIndex.isConnected || e.index < this._minInvalidChildIndex.index) && (this._minInvalidChildIndex = e, this.ownerDocument.markDirty(this));
  }
  updateChildIndices() {
    let e = this._minInvalidChildIndex;
    for (; e; )
      e.index = e.previousSibling ? e.previousSibling.index + 1 : 0, e = e.nextSibling;
    this._minInvalidChildIndex = null;
  }
  appendChild(e) {
    e.parentNode && e.parentNode.removeChild(e), this.firstChild == null && (this.firstChild = e), this.lastChild ? (this.lastChild.nextSibling = e, e.index = this.lastChild.index + 1, e.previousSibling = this.lastChild) : (e.previousSibling = null, e.index = 0), e.parentNode = this, e.nextSibling = null, this.lastChild = e, this.ownerDocument.markDirty(this), this.isConnected && this.ownerDocument.queueUpdate();
  }
  insertBefore(e, n) {
    if (n == null) return this.appendChild(e);
    e.parentNode && e.parentNode.removeChild(e), e.nextSibling = n, e.previousSibling = n.previousSibling, e.index = n.index - 1, this.firstChild === n ? this.firstChild = e : n.previousSibling && (n.previousSibling.nextSibling = e), n.previousSibling = e, e.parentNode = n.parentNode, this.invalidateChildIndices(e), this.isConnected && this.ownerDocument.queueUpdate();
  }
  removeChild(e) {
    e.parentNode !== this || !this.ownerDocument.isMounted || (this._minInvalidChildIndex === e && (this._minInvalidChildIndex = null), e.nextSibling && (this.invalidateChildIndices(e.nextSibling), e.nextSibling.previousSibling = e.previousSibling), e.previousSibling && (e.previousSibling.nextSibling = e.nextSibling), this.firstChild === e && (this.firstChild = e.nextSibling), this.lastChild === e && (this.lastChild = e.previousSibling), e.parentNode = null, e.nextSibling = null, e.previousSibling = null, e.index = 0, this.ownerDocument.markDirty(e), this.isConnected && this.ownerDocument.queueUpdate());
  }
  addEventListener() {
  }
  removeEventListener() {
  }
  get previousVisibleSibling() {
    let e = this.previousSibling;
    for (; e && e.isHidden; ) e = e.previousSibling;
    return e;
  }
  get nextVisibleSibling() {
    let e = this.nextSibling;
    for (; e && e.isHidden; ) e = e.nextSibling;
    return e;
  }
  get firstVisibleChild() {
    let e = this.firstChild;
    for (; e && e.isHidden; ) e = e.nextSibling;
    return e;
  }
  get lastVisibleChild() {
    let e = this.lastChild;
    for (; e && e.isHidden; ) e = e.previousSibling;
    return e;
  }
  constructor(e) {
    this._firstChild = null, this._lastChild = null, this._previousSibling = null, this._nextSibling = null, this._parentNode = null, this._minInvalidChildIndex = null, this.ownerDocument = e;
  }
}
class Dn extends Fa {
  get index() {
    return this._index;
  }
  set index(e) {
    this._index = e, this.ownerDocument.markDirty(this);
  }
  get level() {
    return this.parentNode instanceof Dn ? this.parentNode.level + (this.node.type === "item" ? 1 : 0) : 0;
  }
  /**
  * Lazily gets a mutable instance of a Node. If the node has already
  * been cloned during this update cycle, it just returns the existing one.
  */
  getMutableNode() {
    return this.isMutated || (this.node = this.node.clone(), this.isMutated = !0), this.ownerDocument.markDirty(this), this.node;
  }
  updateNode() {
    var e, n, i;
    let l = this.nextVisibleSibling, r = this.getMutableNode();
    r.index = this.index, r.level = this.level, r.parentKey = this.parentNode instanceof Dn ? this.parentNode.node.key : null;
    var o;
    r.prevKey = (o = (e = this.previousVisibleSibling) === null || e === void 0 ? void 0 : e.node.key) !== null && o !== void 0 ? o : null;
    var a;
    r.nextKey = (a = l == null ? void 0 : l.node.key) !== null && a !== void 0 ? a : null, r.hasChildNodes = !!this.firstChild;
    var u;
    r.firstChildKey = (u = (n = this.firstVisibleChild) === null || n === void 0 ? void 0 : n.node.key) !== null && u !== void 0 ? u : null;
    var s;
    if (r.lastChildKey = (s = (i = this.lastVisibleChild) === null || i === void 0 ? void 0 : i.node.key) !== null && s !== void 0 ? s : null, (r.colSpan != null || r.colIndex != null) && l) {
      var c, d;
      let v = ((c = r.colIndex) !== null && c !== void 0 ? c : r.index) + ((d = r.colSpan) !== null && d !== void 0 ? d : 1);
      if (v !== l.node.colIndex) {
        let p = l.getMutableNode();
        p.colIndex = v;
      }
    }
  }
  setProps(e, n, i, l) {
    let r = this.getMutableNode(), { value: o, textValue: a, id: u, ...s } = e;
    if (s.ref = n, r.props = s, r.rendered = i, r.render = l, r.value = o, r.textValue = a || (typeof s.children == "string" ? s.children : "") || e["aria-label"] || "", u != null && u !== r.key) {
      if (this.hasSetProps) throw new Error("Cannot change the id of an item");
      r.key = u;
    }
    s.colSpan != null && (r.colSpan = s.colSpan), this.hasSetProps = !0, this.isConnected && this.ownerDocument.queueUpdate();
  }
  get style() {
    let e = this;
    return {
      get display() {
        return e.isHidden ? "none" : "";
      },
      set display(n) {
        let i = n === "none";
        if (e.isHidden !== i) {
          var l, r;
          (((l = e.parentNode) === null || l === void 0 ? void 0 : l.firstVisibleChild) === e || ((r = e.parentNode) === null || r === void 0 ? void 0 : r.lastVisibleChild) === e) && e.ownerDocument.markDirty(e.parentNode);
          let o = e.previousVisibleSibling, a = e.nextVisibleSibling;
          o && e.ownerDocument.markDirty(o), a && e.ownerDocument.markDirty(a), e.isHidden = i, e.ownerDocument.markDirty(e);
        }
      }
    };
  }
  hasAttribute() {
  }
  setAttribute() {
  }
  setAttributeNS() {
  }
  removeAttribute() {
  }
  constructor(e, n) {
    super(n), this.nodeType = 8, this.isMutated = !0, this._index = 0, this.hasSetProps = !1, this.isHidden = !1, this.node = new ei(e, `react-aria-${++n.nodeId}`);
  }
}
class yh extends Fa {
  get isConnected() {
    return this.isMounted;
  }
  createElement(e) {
    return new Dn(e, this);
  }
  getMutableCollection() {
    return this.nextCollection || (this.nextCollection = this.collection.clone()), this.nextCollection;
  }
  markDirty(e) {
    this.dirtyNodes.add(e);
  }
  addNode(e) {
    if (e.isHidden) return;
    let n = this.getMutableCollection();
    if (!n.getItem(e.node.key)) for (let i of e) this.addNode(i);
    n.addNode(e.node);
  }
  removeNode(e) {
    for (let i of e) this.removeNode(i);
    this.getMutableCollection().removeNode(e.node.key);
  }
  /** Finalizes the collection update, updating all nodes and freezing the collection. */
  getCollection() {
    return this.inSubscription ? this.collection.clone() : (this.queuedRender = !1, this.updateCollection(), this.collection);
  }
  updateCollection() {
    for (let r of this.dirtyNodes) r instanceof Dn && (!r.isConnected || r.isHidden) ? this.removeNode(r) : r.updateChildIndices();
    for (let r of this.dirtyNodes) r instanceof Dn && (r.isConnected && !r.isHidden && (r.updateNode(), this.addNode(r)), r.isMutated = !1);
    if (this.dirtyNodes.clear(), this.nextCollection) {
      var e, n, i, l;
      this.nextCollection.commit((i = (e = this.firstVisibleChild) === null || e === void 0 ? void 0 : e.node.key) !== null && i !== void 0 ? i : null, (l = (n = this.lastVisibleChild) === null || n === void 0 ? void 0 : n.node.key) !== null && l !== void 0 ? l : null, this.isSSR), this.isSSR || (this.collection = this.nextCollection, this.nextCollection = null);
    }
  }
  queueUpdate() {
    if (!(this.dirtyNodes.size === 0 || this.queuedRender)) {
      this.queuedRender = !0, this.inSubscription = !0;
      for (let e of this.subscriptions) e();
      this.inSubscription = !1;
    }
  }
  subscribe(e) {
    return this.subscriptions.add(e), () => this.subscriptions.delete(e);
  }
  resetAfterSSR() {
    this.isSSR && (this.isSSR = !1, this.firstChild = null, this.lastChild = null, this.nodeId = 0);
  }
  constructor(e) {
    super(null), this.nodeType = 11, this.ownerDocument = this, this.dirtyNodes = /* @__PURE__ */ new Set(), this.isSSR = !1, this.nodeId = 0, this.nodesByProps = /* @__PURE__ */ new WeakMap(), this.isMounted = !0, this.nextCollection = null, this.subscriptions = /* @__PURE__ */ new Set(), this.queuedRender = !1, this.inSubscription = !1, this.collection = e, this.nextCollection = e;
  }
}
function hr(t) {
  let { children: e, items: n, idScope: i, addIdAndValue: l, dependencies: r = [] } = t, o = U(() => /* @__PURE__ */ new WeakMap(), r);
  return U(() => {
    if (n && typeof e == "function") {
      let s = [];
      for (let c of n) {
        let d = o.get(c);
        if (!d) {
          d = e(c);
          var a, u;
          let v = (u = (a = d.props.id) !== null && a !== void 0 ? a : c.key) !== null && u !== void 0 ? u : c.id;
          if (v == null) throw new Error("Could not determine key for item");
          i && (v = i + ":" + v), d = ya(d, l ? {
            key: v,
            id: v,
            value: c
          } : {
            key: v
          }), o.set(c, d);
        }
        s.push(d);
      }
      return s;
    } else if (typeof e != "function") return e;
  }, [
    e,
    n,
    o,
    i,
    l
  ]);
}
if (typeof HTMLTemplateElement < "u") {
  const t = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild").get;
  Object.defineProperty(HTMLTemplateElement.prototype, "firstChild", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      return this.dataset.reactAriaHidden ? this.content.firstChild : t.call(this);
    }
  });
}
const ji = /* @__PURE__ */ _(!1);
function xh(t) {
  if (z(ji))
    return /* @__PURE__ */ $.createElement($.Fragment, null, t.children);
  let n = /* @__PURE__ */ $.createElement(ji.Provider, {
    value: !0
  }, t.children);
  return /* @__PURE__ */ $.createElement("template", {
    "data-react-aria-hidden": !0
  }, n);
}
function ci(t) {
  let e = (n, i) => z(ji) ? null : t(n, i);
  return e.displayName = t.displayName || t.name, re(e);
}
function Eh() {
  return z(ji);
}
function br(t) {
  let e = t;
  return e.nativeEvent = t, e.isDefaultPrevented = () => e.defaultPrevented, e.isPropagationStopped = () => e.cancelBubble, e.persist = () => {
  }, e;
}
function Ka(t, e) {
  Object.defineProperty(t, "target", {
    value: e
  }), Object.defineProperty(t, "currentTarget", {
    value: e
  });
}
function Na(t) {
  let e = L({
    isFocused: !1,
    observer: null
  });
  de(() => {
    const i = e.current;
    return () => {
      i.observer && (i.observer.disconnect(), i.observer = null);
    };
  }, []);
  let n = Be((i) => {
    t == null || t(i);
  });
  return X((i) => {
    if (i.target instanceof HTMLButtonElement || i.target instanceof HTMLInputElement || i.target instanceof HTMLTextAreaElement || i.target instanceof HTMLSelectElement) {
      e.current.isFocused = !0;
      let l = i.target, r = (o) => {
        if (e.current.isFocused = !1, l.disabled) {
          let a = br(o);
          n(a);
        }
        e.current.observer && (e.current.observer.disconnect(), e.current.observer = null);
      };
      l.addEventListener("focusout", r, {
        once: !0
      }), e.current.observer = new MutationObserver(() => {
        if (e.current.isFocused && l.disabled) {
          var o;
          (o = e.current.observer) === null || o === void 0 || o.disconnect();
          let a = l === document.activeElement ? null : document.activeElement;
          l.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: a
          })), l.dispatchEvent(new FocusEvent("focusout", {
            bubbles: !0,
            relatedTarget: a
          }));
        }
      }), e.current.observer.observe(l, {
        attributes: !0,
        attributeFilter: [
          "disabled"
        ]
      });
    }
  }, [
    n
  ]);
}
let zi = !1;
function Co(t) {
  for (; t && !Aa(t); ) t = t.parentElement;
  let e = lt(t), n = e.document.activeElement;
  if (!n || n === t) return;
  zi = !0;
  let i = !1, l = (c) => {
    (c.target === n || i) && c.stopImmediatePropagation();
  }, r = (c) => {
    (c.target === n || i) && (c.stopImmediatePropagation(), !t && !i && (i = !0, st(n), u()));
  }, o = (c) => {
    (c.target === t || i) && c.stopImmediatePropagation();
  }, a = (c) => {
    (c.target === t || i) && (c.stopImmediatePropagation(), i || (i = !0, st(n), u()));
  };
  e.addEventListener("blur", l, !0), e.addEventListener("focusout", r, !0), e.addEventListener("focusin", a, !0), e.addEventListener("focus", o, !0);
  let u = () => {
    cancelAnimationFrame(s), e.removeEventListener("blur", l, !0), e.removeEventListener("focusout", r, !0), e.removeEventListener("focusin", a, !0), e.removeEventListener("focus", o, !0), zi = !1, i = !1;
  }, s = requestAnimationFrame(u);
  return u;
}
let Cn = "default", Ll = "", Ki = /* @__PURE__ */ new WeakMap();
function jl(t) {
  if (el()) {
    if (Cn === "default") {
      const e = he(t);
      Ll = e.documentElement.style.webkitUserSelect, e.documentElement.style.webkitUserSelect = "none";
    }
    Cn = "disabled";
  } else if (t instanceof HTMLElement || t instanceof SVGElement) {
    let e = "userSelect" in t.style ? "userSelect" : "webkitUserSelect";
    Ki.set(t, t.style[e]), t.style[e] = "none";
  }
}
function Ni(t) {
  if (el()) {
    if (Cn !== "disabled") return;
    Cn = "restoring", setTimeout(() => {
      wa(() => {
        if (Cn === "restoring") {
          const e = he(t);
          e.documentElement.style.webkitUserSelect === "none" && (e.documentElement.style.webkitUserSelect = Ll || ""), Ll = "", Cn = "default";
        }
      });
    }, 300);
  } else if ((t instanceof HTMLElement || t instanceof SVGElement) && t && Ki.has(t)) {
    let e = Ki.get(t), n = "userSelect" in t.style ? "userSelect" : "webkitUserSelect";
    t.style[n] === "none" && (t.style[n] = e), t.getAttribute("style") === "" && t.removeAttribute("style"), Ki.delete(t);
  }
}
const ti = $.createContext({
  register: () => {
  }
});
ti.displayName = "PressResponderContext";
function Ch(t, e) {
  return e.get ? e.get.call(t) : e.value;
}
function Ia(t, e, n) {
  if (!e.has(t)) throw new TypeError("attempted to " + n + " private field on non-instance");
  return e.get(t);
}
function Ph(t, e) {
  var n = Ia(t, e, "get");
  return Ch(t, n);
}
function Dh(t, e) {
  if (e.has(t))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function Sh(t, e, n) {
  Dh(t, e), e.set(t, n);
}
function wh(t, e, n) {
  if (e.set) e.set.call(t, n);
  else {
    if (!e.writable)
      throw new TypeError("attempted to set read only private field");
    e.value = n;
  }
}
function Po(t, e, n) {
  var i = Ia(t, e, "set");
  return wh(t, i, n), n;
}
function kh(t) {
  let e = z(ti);
  if (e) {
    let { register: n, ...i } = e;
    t = V(i, t), n();
  }
  return fr(e, t.ref), t;
}
var Pi = /* @__PURE__ */ new WeakMap();
class Di {
  continuePropagation() {
    Po(this, Pi, !1);
  }
  get shouldStopPropagation() {
    return Ph(this, Pi);
  }
  constructor(e, n, i, l) {
    Sh(this, Pi, {
      writable: !0,
      value: void 0
    }), Po(this, Pi, !0);
    var r;
    let o = (r = l == null ? void 0 : l.target) !== null && r !== void 0 ? r : i.currentTarget;
    const a = o == null ? void 0 : o.getBoundingClientRect();
    let u, s = 0, c, d = null;
    i.clientX != null && i.clientY != null && (c = i.clientX, d = i.clientY), a && (c != null && d != null ? (u = c - a.left, s = d - a.top) : (u = a.width / 2, s = a.height / 2)), this.type = e, this.pointerType = n, this.target = i.currentTarget, this.shiftKey = i.shiftKey, this.metaKey = i.metaKey, this.ctrlKey = i.ctrlKey, this.altKey = i.altKey, this.x = u, this.y = s;
  }
}
const Do = Symbol("linkClicked"), So = "react-aria-pressable-style", wo = "data-react-aria-pressable";
function bt(t) {
  let { onPress: e, onPressChange: n, onPressStart: i, onPressEnd: l, onPressUp: r, onClick: o, isDisabled: a, isPressed: u, preventFocusOnPress: s, shouldCancelOnPointerExit: c, allowTextSelectionOnPress: d, ref: v, ...p } = kh(t), [h, m] = Y(!1), g = L({
    isPressed: !1,
    ignoreEmulatedMouseEvents: !1,
    didFirePressStart: !1,
    isTriggeringEvent: !1,
    activePointerId: null,
    target: null,
    isOverTarget: !1,
    pointerType: null,
    disposables: []
  }), { addGlobalListener: b, removeAllGlobalListeners: E } = sn(), D = Be((y, R) => {
    let A = g.current;
    if (a || A.didFirePressStart) return !1;
    let B = !0;
    if (A.isTriggeringEvent = !0, i) {
      let j = new Di("pressstart", R, y);
      i(j), B = j.shouldStopPropagation;
    }
    return n && n(!0), A.isTriggeringEvent = !1, A.didFirePressStart = !0, m(!0), B;
  }), k = Be((y, R, A = !0) => {
    let B = g.current;
    if (!B.didFirePressStart) return !1;
    B.didFirePressStart = !1, B.isTriggeringEvent = !0;
    let j = !0;
    if (l) {
      let x = new Di("pressend", R, y);
      l(x), j = x.shouldStopPropagation;
    }
    if (n && n(!1), m(!1), e && A && !a) {
      let x = new Di("press", R, y);
      e(x), j && (j = x.shouldStopPropagation);
    }
    return B.isTriggeringEvent = !1, j;
  }), P = Be((y, R) => {
    let A = g.current;
    if (a) return !1;
    if (r) {
      A.isTriggeringEvent = !0;
      let B = new Di("pressup", R, y);
      return r(B), A.isTriggeringEvent = !1, B.shouldStopPropagation;
    }
    return !0;
  }), T = Be((y) => {
    let R = g.current;
    if (R.isPressed && R.target) {
      R.didFirePressStart && R.pointerType != null && k(en(R.target, y), R.pointerType, !1), R.isPressed = !1, R.isOverTarget = !1, R.activePointerId = null, R.pointerType = null, E(), d || Ni(R.target);
      for (let A of R.disposables) A();
      R.disposables = [];
    }
  }), M = Be((y) => {
    c && T(y);
  }), F = Be((y) => {
    o == null || o(y);
  }), H = Be((y, R) => {
    if (o) {
      let A = new MouseEvent("click", y);
      Ka(A, R), o(br(A));
    }
  }), K = U(() => {
    let y = g.current, R = {
      onKeyDown(B) {
        if (El(B.nativeEvent, B.currentTarget) && Se(B.currentTarget, ve(B.nativeEvent))) {
          var j;
          Bo(ve(B.nativeEvent), B.key) && B.preventDefault();
          let x = !0;
          if (!y.isPressed && !B.repeat) {
            y.target = B.currentTarget, y.isPressed = !0, y.pointerType = "keyboard", x = D(B, "keyboard");
            let S = B.currentTarget, w = (W) => {
              El(W, S) && !W.repeat && Se(S, ve(W)) && y.target && P(en(y.target, W), "keyboard");
            };
            b(he(B.currentTarget), "keyup", Dt(w, A), !0);
          }
          x && B.stopPropagation(), B.metaKey && qt() && ((j = y.metaKeyEvents) === null || j === void 0 || j.set(B.key, B.nativeEvent));
        } else B.key === "Meta" && (y.metaKeyEvents = /* @__PURE__ */ new Map());
      },
      onClick(B) {
        if (!(B && !Se(B.currentTarget, ve(B.nativeEvent))) && B && B.button === 0 && !y.isTriggeringEvent && !rn.isOpening) {
          let j = !0;
          if (a && B.preventDefault(), !y.ignoreEmulatedMouseEvents && !y.isPressed && (y.pointerType === "virtual" || Ml(B.nativeEvent))) {
            let x = D(B, "virtual"), S = P(B, "virtual"), w = k(B, "virtual");
            F(B), j = x && S && w;
          } else if (y.isPressed && y.pointerType !== "keyboard") {
            let x = y.pointerType || B.nativeEvent.pointerType || "virtual", S = P(en(B.currentTarget, B), x), w = k(en(B.currentTarget, B), x, !0);
            j = S && w, y.isOverTarget = !1, F(B), T(B);
          }
          y.ignoreEmulatedMouseEvents = !1, j && B.stopPropagation();
        }
      }
    }, A = (B) => {
      var j;
      if (y.isPressed && y.target && El(B, y.target)) {
        var x;
        Bo(ve(B), B.key) && B.preventDefault();
        let w = ve(B), W = Se(y.target, ve(B));
        k(en(y.target, B), "keyboard", W), W && H(B, y.target), E(), B.key !== "Enter" && mr(y.target) && Se(y.target, w) && !B[Do] && (B[Do] = !0, rn(y.target, B, !1)), y.isPressed = !1, (x = y.metaKeyEvents) === null || x === void 0 || x.delete(B.key);
      } else if (B.key === "Meta" && (!((j = y.metaKeyEvents) === null || j === void 0) && j.size)) {
        var S;
        let w = y.metaKeyEvents;
        y.metaKeyEvents = void 0;
        for (let W of w.values()) (S = y.target) === null || S === void 0 || S.dispatchEvent(new KeyboardEvent("keyup", W));
      }
    };
    if (typeof PointerEvent < "u") {
      R.onPointerDown = (x) => {
        if (x.button !== 0 || !Se(x.currentTarget, ve(x.nativeEvent))) return;
        if (vh(x.nativeEvent)) {
          y.pointerType = "virtual";
          return;
        }
        y.pointerType = x.pointerType;
        let S = !0;
        if (!y.isPressed) {
          y.isPressed = !0, y.isOverTarget = !0, y.activePointerId = x.pointerId, y.target = x.currentTarget, d || jl(y.target), S = D(x, y.pointerType);
          let w = ve(x.nativeEvent);
          "releasePointerCapture" in w && w.releasePointerCapture(x.pointerId), b(he(x.currentTarget), "pointerup", B, !1), b(he(x.currentTarget), "pointercancel", j, !1);
        }
        S && x.stopPropagation();
      }, R.onMouseDown = (x) => {
        if (Se(x.currentTarget, ve(x.nativeEvent)) && x.button === 0) {
          if (s) {
            let S = Co(x.target);
            S && y.disposables.push(S);
          }
          x.stopPropagation();
        }
      }, R.onPointerUp = (x) => {
        !Se(x.currentTarget, ve(x.nativeEvent)) || y.pointerType === "virtual" || x.button === 0 && !y.isPressed && P(x, y.pointerType || x.pointerType);
      }, R.onPointerEnter = (x) => {
        x.pointerId === y.activePointerId && y.target && !y.isOverTarget && y.pointerType != null && (y.isOverTarget = !0, D(en(y.target, x), y.pointerType));
      }, R.onPointerLeave = (x) => {
        x.pointerId === y.activePointerId && y.target && y.isOverTarget && y.pointerType != null && (y.isOverTarget = !1, k(en(y.target, x), y.pointerType, !1), M(x));
      };
      let B = (x) => {
        if (x.pointerId === y.activePointerId && y.isPressed && x.button === 0 && y.target) {
          if (Se(y.target, ve(x)) && y.pointerType != null) {
            let S = !1, w = setTimeout(() => {
              y.isPressed && y.target instanceof HTMLElement && (S ? T(x) : (st(y.target), y.target.click()));
            }, 80);
            b(x.currentTarget, "click", () => S = !0, !0), y.disposables.push(() => clearTimeout(w));
          } else T(x);
          y.isOverTarget = !1;
        }
      }, j = (x) => {
        T(x);
      };
      R.onDragStart = (x) => {
        Se(x.currentTarget, ve(x.nativeEvent)) && T(x);
      };
    } else if (process.env.NODE_ENV === "test") {
      R.onMouseDown = (x) => {
        if (x.button !== 0 || !Se(x.currentTarget, ve(x.nativeEvent))) return;
        if (y.ignoreEmulatedMouseEvents) {
          x.stopPropagation();
          return;
        }
        if (y.isPressed = !0, y.isOverTarget = !0, y.target = x.currentTarget, y.pointerType = Ml(x.nativeEvent) ? "virtual" : "mouse", Xi(() => D(x, y.pointerType)) && x.stopPropagation(), s) {
          let w = Co(x.target);
          w && y.disposables.push(w);
        }
        b(he(x.currentTarget), "mouseup", B, !1);
      }, R.onMouseEnter = (x) => {
        if (!Se(x.currentTarget, ve(x.nativeEvent))) return;
        let S = !0;
        y.isPressed && !y.ignoreEmulatedMouseEvents && y.pointerType != null && (y.isOverTarget = !0, S = D(x, y.pointerType)), S && x.stopPropagation();
      }, R.onMouseLeave = (x) => {
        if (!Se(x.currentTarget, ve(x.nativeEvent))) return;
        let S = !0;
        y.isPressed && !y.ignoreEmulatedMouseEvents && y.pointerType != null && (y.isOverTarget = !1, S = k(x, y.pointerType, !1), M(x)), S && x.stopPropagation();
      }, R.onMouseUp = (x) => {
        Se(x.currentTarget, ve(x.nativeEvent)) && !y.ignoreEmulatedMouseEvents && x.button === 0 && !y.isPressed && P(x, y.pointerType || "mouse");
      };
      let B = (x) => {
        if (x.button === 0) {
          if (y.ignoreEmulatedMouseEvents) {
            y.ignoreEmulatedMouseEvents = !1;
            return;
          }
          y.target && y.target.contains(x.target) && y.pointerType != null || T(x), y.isOverTarget = !1;
        }
      };
      R.onTouchStart = (x) => {
        if (!Se(x.currentTarget, ve(x.nativeEvent))) return;
        let S = Th(x.nativeEvent);
        if (!S) return;
        y.activePointerId = S.identifier, y.ignoreEmulatedMouseEvents = !0, y.isOverTarget = !0, y.isPressed = !0, y.target = x.currentTarget, y.pointerType = "touch", d || jl(y.target), D(Ut(y.target, x), y.pointerType) && x.stopPropagation(), b(lt(x.currentTarget), "scroll", j, !0);
      }, R.onTouchMove = (x) => {
        if (!Se(x.currentTarget, ve(x.nativeEvent))) return;
        if (!y.isPressed) {
          x.stopPropagation();
          return;
        }
        let S = ko(x.nativeEvent, y.activePointerId), w = !0;
        S && To(S, x.currentTarget) ? !y.isOverTarget && y.pointerType != null && (y.isOverTarget = !0, w = D(Ut(y.target, x), y.pointerType)) : y.isOverTarget && y.pointerType != null && (y.isOverTarget = !1, w = k(Ut(y.target, x), y.pointerType, !1), M(Ut(y.target, x))), w && x.stopPropagation();
      }, R.onTouchEnd = (x) => {
        if (!Se(x.currentTarget, ve(x.nativeEvent))) return;
        if (!y.isPressed) {
          x.stopPropagation();
          return;
        }
        let S = ko(x.nativeEvent, y.activePointerId), w = !0;
        S && To(S, x.currentTarget) && y.pointerType != null ? (P(Ut(y.target, x), y.pointerType), w = k(Ut(y.target, x), y.pointerType), H(x.nativeEvent, y.target)) : y.isOverTarget && y.pointerType != null && (w = k(Ut(y.target, x), y.pointerType, !1)), w && x.stopPropagation(), y.isPressed = !1, y.activePointerId = null, y.isOverTarget = !1, y.ignoreEmulatedMouseEvents = !0, y.target && !d && Ni(y.target), E();
      }, R.onTouchCancel = (x) => {
        Se(x.currentTarget, ve(x.nativeEvent)) && (x.stopPropagation(), y.isPressed && T(Ut(y.target, x)));
      };
      let j = (x) => {
        y.isPressed && Se(ve(x), y.target) && T({
          currentTarget: y.target,
          shiftKey: !1,
          ctrlKey: !1,
          metaKey: !1,
          altKey: !1
        });
      };
      R.onDragStart = (x) => {
        Se(x.currentTarget, ve(x.nativeEvent)) && T(x);
      };
    }
    return R;
  }, [
    b,
    a,
    s,
    E,
    d,
    T,
    M,
    k,
    D,
    P,
    F,
    H
  ]);
  return Z(() => {
    if (!v || process.env.NODE_ENV === "test") return;
    const y = he(v.current);
    if (!y || !y.head || y.getElementById(So)) return;
    const R = y.createElement("style");
    R.id = So, R.textContent = `
@layer {
  [${wo}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim(), y.head.prepend(R);
  }, [
    v
  ]), Z(() => {
    let y = g.current;
    return () => {
      var R;
      d || Ni((R = y.target) !== null && R !== void 0 ? R : void 0);
      for (let A of y.disposables) A();
      y.disposables = [];
    };
  }, [
    d
  ]), {
    isPressed: u || h,
    pressProps: V(p, K, {
      [wo]: !0
    })
  };
}
function mr(t) {
  return t.tagName === "A" && t.hasAttribute("href");
}
function El(t, e) {
  const { key: n, code: i } = t, l = e, r = l.getAttribute("role");
  return (n === "Enter" || n === " " || n === "Spacebar" || i === "Space") && !(l instanceof lt(l).HTMLInputElement && !Ma(l, n) || l instanceof lt(l).HTMLTextAreaElement || l.isContentEditable) && // Links should only trigger with Enter key
  !((r === "link" || !r && mr(l)) && n !== "Enter");
}
function Th(t) {
  const { targetTouches: e } = t;
  return e.length > 0 ? e[0] : null;
}
function ko(t, e) {
  const n = t.changedTouches;
  for (let i = 0; i < n.length; i++) {
    const l = n[i];
    if (l.identifier === e) return l;
  }
  return null;
}
function Ut(t, e) {
  let n = 0, i = 0;
  return e.targetTouches && e.targetTouches.length === 1 && (n = e.targetTouches[0].clientX, i = e.targetTouches[0].clientY), {
    currentTarget: t,
    shiftKey: e.shiftKey,
    ctrlKey: e.ctrlKey,
    metaKey: e.metaKey,
    altKey: e.altKey,
    clientX: n,
    clientY: i
  };
}
function en(t, e) {
  let n = e.clientX, i = e.clientY;
  return {
    currentTarget: t,
    shiftKey: e.shiftKey,
    ctrlKey: e.ctrlKey,
    metaKey: e.metaKey,
    altKey: e.altKey,
    clientX: n,
    clientY: i
  };
}
function Bh(t) {
  let e = 0, n = 0;
  return t.width !== void 0 ? e = t.width / 2 : t.radiusX !== void 0 && (e = t.radiusX), t.height !== void 0 ? n = t.height / 2 : t.radiusY !== void 0 && (n = t.radiusY), {
    top: t.clientY - n,
    right: t.clientX + e,
    bottom: t.clientY + n,
    left: t.clientX - e
  };
}
function Ah(t, e) {
  return !(t.left > e.right || e.left > t.right || t.top > e.bottom || e.top > t.bottom);
}
function To(t, e) {
  let n = e.getBoundingClientRect(), i = Bh(t);
  return Ah(n, i);
}
function Fh(t) {
  return t instanceof HTMLInputElement ? !1 : t instanceof HTMLButtonElement ? t.type !== "submit" && t.type !== "reset" : !mr(t);
}
function Bo(t, e) {
  return t instanceof HTMLInputElement ? !Ma(t, e) : Fh(t);
}
const Kh = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function Ma(t, e) {
  return t.type === "checkbox" || t.type === "radio" ? e === " " : Kh.has(t.type);
}
let It = null, ni = /* @__PURE__ */ new Set(), Zn = /* @__PURE__ */ new Map(), an = !1, zl = !1;
const Nh = {
  Tab: !0,
  Escape: !0
};
function il(t, e) {
  for (let n of ni) n(t, e);
}
function Ih(t) {
  return !(t.metaKey || !qt() && t.altKey || t.ctrlKey || t.key === "Control" || t.key === "Shift" || t.key === "Meta");
}
function Oi(t) {
  an = !0, Ih(t) && (It = "keyboard", il("keyboard", t));
}
function at(t) {
  It = "pointer", (t.type === "mousedown" || t.type === "pointerdown") && (an = !0, il("pointer", t));
}
function Ra(t) {
  Ml(t) && (an = !0, It = "virtual");
}
function La(t) {
  t.target === window || t.target === document || zi || !t.isTrusted || (!an && !zl && (It = "virtual", il("virtual", t)), an = !1, zl = !1);
}
function ja() {
  zi || (an = !1, zl = !0);
}
function Vi(t) {
  if (typeof window > "u" || typeof document > "u" || Zn.get(lt(t))) return;
  const e = lt(t), n = he(t);
  let i = e.HTMLElement.prototype.focus;
  e.HTMLElement.prototype.focus = function() {
    an = !0, i.apply(this, arguments);
  }, n.addEventListener("keydown", Oi, !0), n.addEventListener("keyup", Oi, !0), n.addEventListener("click", Ra, !0), e.addEventListener("focus", La, !0), e.addEventListener("blur", ja, !1), typeof PointerEvent < "u" ? (n.addEventListener("pointerdown", at, !0), n.addEventListener("pointermove", at, !0), n.addEventListener("pointerup", at, !0)) : process.env.NODE_ENV === "test" && (n.addEventListener("mousedown", at, !0), n.addEventListener("mousemove", at, !0), n.addEventListener("mouseup", at, !0)), e.addEventListener("beforeunload", () => {
    za(t);
  }, {
    once: !0
  }), Zn.set(e, {
    focus: i
  });
}
const za = (t, e) => {
  const n = lt(t), i = he(t);
  e && i.removeEventListener("DOMContentLoaded", e), Zn.has(n) && (n.HTMLElement.prototype.focus = Zn.get(n).focus, i.removeEventListener("keydown", Oi, !0), i.removeEventListener("keyup", Oi, !0), i.removeEventListener("click", Ra, !0), n.removeEventListener("focus", La, !0), n.removeEventListener("blur", ja, !1), typeof PointerEvent < "u" ? (i.removeEventListener("pointerdown", at, !0), i.removeEventListener("pointermove", at, !0), i.removeEventListener("pointerup", at, !0)) : process.env.NODE_ENV === "test" && (i.removeEventListener("mousedown", at, !0), i.removeEventListener("mousemove", at, !0), i.removeEventListener("mouseup", at, !0)), Zn.delete(n));
};
function Mh(t) {
  const e = he(t);
  let n;
  return e.readyState !== "loading" ? Vi(t) : (n = () => {
    Vi(t);
  }, e.addEventListener("DOMContentLoaded", n)), () => za(t, n);
}
typeof document < "u" && Mh();
function Zt() {
  return It !== "pointer";
}
function Hi() {
  return It;
}
function gr(t) {
  It = t, il(t, null);
}
function Oa() {
  Vi();
  let [t, e] = Y(It);
  return Z(() => {
    let n = () => {
      e(It);
    };
    return ni.add(n), () => {
      ni.delete(n);
    };
  }, []), Mt() ? null : t;
}
const Rh = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function Lh(t, e, n) {
  let i = he(n == null ? void 0 : n.target);
  const l = typeof window < "u" ? lt(n == null ? void 0 : n.target).HTMLInputElement : HTMLInputElement, r = typeof window < "u" ? lt(n == null ? void 0 : n.target).HTMLTextAreaElement : HTMLTextAreaElement, o = typeof window < "u" ? lt(n == null ? void 0 : n.target).HTMLElement : HTMLElement, a = typeof window < "u" ? lt(n == null ? void 0 : n.target).KeyboardEvent : KeyboardEvent;
  return t = t || i.activeElement instanceof l && !Rh.has(i.activeElement.type) || i.activeElement instanceof r || i.activeElement instanceof o && i.activeElement.isContentEditable, !(t && e === "keyboard" && n instanceof a && !Nh[n.key]);
}
function jh(t, e, n) {
  Vi(), Z(() => {
    let i = (l, r) => {
      Lh(!!(n != null && n.isTextInput), l, r) && t(Zt());
    };
    return ni.add(i), () => {
      ni.delete(i);
    };
  }, e);
}
function Te(t) {
  const e = he(t), n = _e(e);
  if (Hi() === "virtual") {
    let i = n;
    wa(() => {
      _e(e) === i && t.isConnected && st(t);
    });
  } else st(t);
}
function $r(t) {
  let { isDisabled: e, onFocus: n, onBlur: i, onFocusChange: l } = t;
  const r = X((u) => {
    if (u.target === u.currentTarget)
      return i && i(u), l && l(!1), !0;
  }, [
    i,
    l
  ]), o = Na(r), a = X((u) => {
    const s = he(u.target), c = s ? _e(s) : _e();
    u.target === u.currentTarget && c === ve(u.nativeEvent) && (n && n(u), l && l(!0), o(u));
  }, [
    l,
    n,
    o
  ]);
  return {
    focusProps: {
      onFocus: !e && (n || l || i) ? a : void 0,
      onBlur: !e && (i || l) ? r : void 0
    }
  };
}
function Ao(t) {
  if (!t) return;
  let e = !0;
  return (n) => {
    let i = {
      ...n,
      preventDefault() {
        n.preventDefault();
      },
      isDefaultPrevented() {
        return n.isDefaultPrevented();
      },
      stopPropagation() {
        e && process.env.NODE_ENV !== "production" ? console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.") : e = !0;
      },
      continuePropagation() {
        e = !1;
      },
      isPropagationStopped() {
        return e;
      }
    };
    t(i), e && n.stopPropagation();
  };
}
function yr(t) {
  return {
    keyboardProps: t.isDisabled ? {} : {
      onKeyDown: Ao(t.onKeyDown),
      onKeyUp: Ao(t.onKeyUp)
    }
  };
}
let Ol = /* @__PURE__ */ $.createContext(null);
function zh(t) {
  let e = z(Ol) || {};
  fr(e, t);
  let { ref: n, ...i } = e;
  return i;
}
function jt(t, e) {
  let { focusProps: n } = $r(t), { keyboardProps: i } = yr(t), l = V(n, i), r = zh(e), o = t.isDisabled ? {} : r, a = L(t.autoFocus);
  Z(() => {
    a.current && e.current && Te(e.current), a.current = !1;
  }, [
    e
  ]);
  let u = t.excludeFromTabOrder ? -1 : 0;
  return t.isDisabled && (u = void 0), {
    focusableProps: V({
      ...l,
      tabIndex: u
    }, o)
  };
}
const Va = /* @__PURE__ */ $.forwardRef(({ children: t, ...e }, n) => {
  let i = L(!1), l = z(ti);
  n = Re(n || (l == null ? void 0 : l.ref));
  let r = V(l || {}, {
    ...e,
    ref: n,
    register() {
      i.current = !0, l && l.register();
    }
  });
  return fr(l, n), Z(() => {
    i.current || (process.env.NODE_ENV !== "production" && console.warn("A PressResponder was rendered without a pressable child. Either call the usePress hook, or wrap your DOM node with <Pressable> component."), i.current = !0);
  }, []), /* @__PURE__ */ $.createElement(ti.Provider, {
    value: r
  }, t);
});
function Oh({ children: t }) {
  let e = U(() => ({
    register: () => {
    }
  }), []);
  return /* @__PURE__ */ $.createElement(ti.Provider, {
    value: e
  }, t);
}
function cn(t) {
  let { isDisabled: e, onBlurWithin: n, onFocusWithin: i, onFocusWithinChange: l } = t, r = L({
    isFocusWithin: !1
  }), { addGlobalListener: o, removeAllGlobalListeners: a } = sn(), u = X((d) => {
    d.currentTarget.contains(d.target) && r.current.isFocusWithin && !d.currentTarget.contains(d.relatedTarget) && (r.current.isFocusWithin = !1, a(), n && n(d), l && l(!1));
  }, [
    n,
    l,
    r,
    a
  ]), s = Na(u), c = X((d) => {
    if (!d.currentTarget.contains(d.target)) return;
    const v = he(d.target), p = _e(v);
    if (!r.current.isFocusWithin && p === ve(d.nativeEvent)) {
      i && i(d), l && l(!0), r.current.isFocusWithin = !0, s(d);
      let h = d.currentTarget;
      o(v, "focus", (m) => {
        if (r.current.isFocusWithin && !Se(h, m.target)) {
          let g = new v.defaultView.FocusEvent("blur", {
            relatedTarget: m.target
          });
          Ka(g, h);
          let b = br(g);
          u(b);
        }
      }, {
        capture: !0
      });
    }
  }, [
    i,
    l,
    s,
    o,
    u
  ]);
  return e ? {
    focusWithinProps: {
      // These cannot be null, that would conflict in mergeProps
      onFocus: void 0,
      onBlur: void 0
    }
  } : {
    focusWithinProps: {
      onFocus: c,
      onBlur: u
    }
  };
}
let Ui = !1, Cl = 0;
function Vl() {
  Ui = !0, setTimeout(() => {
    Ui = !1;
  }, 50);
}
function Fo(t) {
  t.pointerType === "touch" && Vl();
}
function Vh() {
  if (!(typeof document > "u"))
    return typeof PointerEvent < "u" ? document.addEventListener("pointerup", Fo) : process.env.NODE_ENV === "test" && document.addEventListener("touchend", Vl), Cl++, () => {
      Cl--, !(Cl > 0) && (typeof PointerEvent < "u" ? document.removeEventListener("pointerup", Fo) : process.env.NODE_ENV === "test" && document.removeEventListener("touchend", Vl));
    };
}
function He(t) {
  let { onHoverStart: e, onHoverChange: n, onHoverEnd: i, isDisabled: l } = t, [r, o] = Y(!1), a = L({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  Z(Vh, []);
  let { addGlobalListener: u, removeAllGlobalListeners: s } = sn(), { hoverProps: c, triggerHoverEnd: d } = U(() => {
    let v = (m, g) => {
      if (a.pointerType = g, l || g === "touch" || a.isHovered || !m.currentTarget.contains(m.target)) return;
      a.isHovered = !0;
      let b = m.currentTarget;
      a.target = b, u(he(m.target), "pointerover", (E) => {
        a.isHovered && a.target && !Se(a.target, E.target) && p(E, E.pointerType);
      }, {
        capture: !0
      }), e && e({
        type: "hoverstart",
        target: b,
        pointerType: g
      }), n && n(!0), o(!0);
    }, p = (m, g) => {
      let b = a.target;
      a.pointerType = "", a.target = null, !(g === "touch" || !a.isHovered || !b) && (a.isHovered = !1, s(), i && i({
        type: "hoverend",
        target: b,
        pointerType: g
      }), n && n(!1), o(!1));
    }, h = {};
    return typeof PointerEvent < "u" ? (h.onPointerEnter = (m) => {
      Ui && m.pointerType === "mouse" || v(m, m.pointerType);
    }, h.onPointerLeave = (m) => {
      !l && m.currentTarget.contains(m.target) && p(m, m.pointerType);
    }) : process.env.NODE_ENV === "test" && (h.onTouchStart = () => {
      a.ignoreEmulatedMouseEvents = !0;
    }, h.onMouseEnter = (m) => {
      !a.ignoreEmulatedMouseEvents && !Ui && v(m, "mouse"), a.ignoreEmulatedMouseEvents = !1;
    }, h.onMouseLeave = (m) => {
      !l && m.currentTarget.contains(m.target) && p(m, "mouse");
    }), {
      hoverProps: h,
      triggerHoverEnd: p
    };
  }, [
    e,
    n,
    i,
    l,
    a,
    u,
    s
  ]);
  return Z(() => {
    l && d({
      currentTarget: a.target
    }, a.pointerType);
  }, [
    l
  ]), {
    hoverProps: c,
    isHovered: r
  };
}
function Hh(t) {
  let { ref: e, onInteractOutside: n, isDisabled: i, onInteractOutsideStart: l } = t, r = L({
    isPointerDown: !1,
    ignoreEmulatedMouseEvents: !1
  }), o = Be((u) => {
    n && Si(u, e) && (l && l(u), r.current.isPointerDown = !0);
  }), a = Be((u) => {
    n && n(u);
  });
  Z(() => {
    let u = r.current;
    if (i) return;
    const s = e.current, c = he(s);
    if (typeof PointerEvent < "u") {
      let d = (v) => {
        u.isPointerDown && Si(v, e) && a(v), u.isPointerDown = !1;
      };
      return c.addEventListener("pointerdown", o, !0), c.addEventListener("click", d, !0), () => {
        c.removeEventListener("pointerdown", o, !0), c.removeEventListener("click", d, !0);
      };
    } else if (process.env.NODE_ENV === "test") {
      let d = (p) => {
        u.ignoreEmulatedMouseEvents ? u.ignoreEmulatedMouseEvents = !1 : u.isPointerDown && Si(p, e) && a(p), u.isPointerDown = !1;
      }, v = (p) => {
        u.ignoreEmulatedMouseEvents = !0, u.isPointerDown && Si(p, e) && a(p), u.isPointerDown = !1;
      };
      return c.addEventListener("mousedown", o, !0), c.addEventListener("mouseup", d, !0), c.addEventListener("touchstart", o, !0), c.addEventListener("touchend", v, !0), () => {
        c.removeEventListener("mousedown", o, !0), c.removeEventListener("mouseup", d, !0), c.removeEventListener("touchstart", o, !0), c.removeEventListener("touchend", v, !0);
      };
    }
  }, [
    e,
    i,
    o,
    a
  ]);
}
function Si(t, e) {
  if (t.button > 0) return !1;
  if (t.target) {
    const n = t.target.ownerDocument;
    if (!n || !n.documentElement.contains(t.target) || t.target.closest("[data-react-aria-top-layer]")) return !1;
  }
  return e.current ? !t.composedPath().includes(e.current) : !1;
}
function Ha(t) {
  let { onMoveStart: e, onMove: n, onMoveEnd: i } = t, l = L({
    didMove: !1,
    lastPosition: null,
    id: null
  }), { addGlobalListener: r, removeGlobalListener: o } = sn(), a = Be((c, d, v, p) => {
    v === 0 && p === 0 || (l.current.didMove || (l.current.didMove = !0, e == null || e({
      type: "movestart",
      pointerType: d,
      shiftKey: c.shiftKey,
      metaKey: c.metaKey,
      ctrlKey: c.ctrlKey,
      altKey: c.altKey
    })), n == null || n({
      type: "move",
      pointerType: d,
      deltaX: v,
      deltaY: p,
      shiftKey: c.shiftKey,
      metaKey: c.metaKey,
      ctrlKey: c.ctrlKey,
      altKey: c.altKey
    }));
  }), u = Be((c, d) => {
    Ni(), l.current.didMove && (i == null || i({
      type: "moveend",
      pointerType: d,
      shiftKey: c.shiftKey,
      metaKey: c.metaKey,
      ctrlKey: c.ctrlKey,
      altKey: c.altKey
    }));
  });
  return {
    moveProps: U(() => {
      let c = {}, d = () => {
        jl(), l.current.didMove = !1;
      };
      if (typeof PointerEvent > "u" && process.env.NODE_ENV === "test") {
        let p = (b) => {
          if (b.button === 0) {
            var E, D, k, P;
            a(b, "mouse", b.pageX - ((k = (E = l.current.lastPosition) === null || E === void 0 ? void 0 : E.pageX) !== null && k !== void 0 ? k : 0), b.pageY - ((P = (D = l.current.lastPosition) === null || D === void 0 ? void 0 : D.pageY) !== null && P !== void 0 ? P : 0)), l.current.lastPosition = {
              pageX: b.pageX,
              pageY: b.pageY
            };
          }
        }, h = (b) => {
          b.button === 0 && (u(b, "mouse"), o(window, "mousemove", p, !1), o(window, "mouseup", h, !1));
        };
        c.onMouseDown = (b) => {
          b.button === 0 && (d(), b.stopPropagation(), b.preventDefault(), l.current.lastPosition = {
            pageX: b.pageX,
            pageY: b.pageY
          }, r(window, "mousemove", p, !1), r(window, "mouseup", h, !1));
        };
        let m = (b) => {
          let E = [
            ...b.changedTouches
          ].findIndex(({ identifier: M }) => M === l.current.id);
          if (E >= 0) {
            var D, k;
            let { pageX: M, pageY: F } = b.changedTouches[E];
            var P, T;
            a(b, "touch", M - ((P = (D = l.current.lastPosition) === null || D === void 0 ? void 0 : D.pageX) !== null && P !== void 0 ? P : 0), F - ((T = (k = l.current.lastPosition) === null || k === void 0 ? void 0 : k.pageY) !== null && T !== void 0 ? T : 0)), l.current.lastPosition = {
              pageX: M,
              pageY: F
            };
          }
        }, g = (b) => {
          [
            ...b.changedTouches
          ].findIndex(({ identifier: D }) => D === l.current.id) >= 0 && (u(b, "touch"), l.current.id = null, o(window, "touchmove", m), o(window, "touchend", g), o(window, "touchcancel", g));
        };
        c.onTouchStart = (b) => {
          if (b.changedTouches.length === 0 || l.current.id != null) return;
          let { pageX: E, pageY: D, identifier: k } = b.changedTouches[0];
          d(), b.stopPropagation(), b.preventDefault(), l.current.lastPosition = {
            pageX: E,
            pageY: D
          }, l.current.id = k, r(window, "touchmove", m, !1), r(window, "touchend", g, !1), r(window, "touchcancel", g, !1);
        };
      } else {
        let p = (m) => {
          if (m.pointerId === l.current.id) {
            var g, b;
            let k = m.pointerType || "mouse";
            var E, D;
            a(m, k, m.pageX - ((E = (g = l.current.lastPosition) === null || g === void 0 ? void 0 : g.pageX) !== null && E !== void 0 ? E : 0), m.pageY - ((D = (b = l.current.lastPosition) === null || b === void 0 ? void 0 : b.pageY) !== null && D !== void 0 ? D : 0)), l.current.lastPosition = {
              pageX: m.pageX,
              pageY: m.pageY
            };
          }
        }, h = (m) => {
          if (m.pointerId === l.current.id) {
            let g = m.pointerType || "mouse";
            u(m, g), l.current.id = null, o(window, "pointermove", p, !1), o(window, "pointerup", h, !1), o(window, "pointercancel", h, !1);
          }
        };
        c.onPointerDown = (m) => {
          m.button === 0 && l.current.id == null && (d(), m.stopPropagation(), m.preventDefault(), l.current.lastPosition = {
            pageX: m.pageX,
            pageY: m.pageY
          }, l.current.id = m.pointerId, r(window, "pointermove", p, !1), r(window, "pointerup", h, !1), r(window, "pointercancel", h, !1));
        };
      }
      let v = (p, h, m) => {
        d(), a(p, "keyboard", h, m), u(p, "keyboard");
      };
      return c.onKeyDown = (p) => {
        switch (p.key) {
          case "Left":
          case "ArrowLeft":
            p.preventDefault(), p.stopPropagation(), v(p, -1, 0);
            break;
          case "Right":
          case "ArrowRight":
            p.preventDefault(), p.stopPropagation(), v(p, 1, 0);
            break;
          case "Up":
          case "ArrowUp":
            p.preventDefault(), p.stopPropagation(), v(p, 0, -1);
            break;
          case "Down":
          case "ArrowDown":
            p.preventDefault(), p.stopPropagation(), v(p, 0, 1);
            break;
        }
      }, c;
    }, [
      l,
      r,
      o,
      a,
      u
    ])
  };
}
const Uh = 500;
function Ua(t) {
  let { isDisabled: e, onLongPressStart: n, onLongPressEnd: i, onLongPress: l, threshold: r = Uh, accessibilityDescription: o } = t;
  const a = L(void 0);
  let { addGlobalListener: u, removeGlobalListener: s } = sn(), { pressProps: c } = bt({
    isDisabled: e,
    onPressStart(v) {
      if (v.continuePropagation(), (v.pointerType === "mouse" || v.pointerType === "touch") && (n && n({
        ...v,
        type: "longpressstart"
      }), a.current = setTimeout(() => {
        v.target.dispatchEvent(new PointerEvent("pointercancel", {
          bubbles: !0
        })), he(v.target).activeElement !== v.target && st(v.target), l && l({
          ...v,
          type: "longpress"
        }), a.current = void 0;
      }, r), v.pointerType === "touch")) {
        let p = (h) => {
          h.preventDefault();
        };
        u(v.target, "contextmenu", p, {
          once: !0
        }), u(window, "pointerup", () => {
          setTimeout(() => {
            s(v.target, "contextmenu", p);
          }, 30);
        }, {
          once: !0
        });
      }
    },
    onPressEnd(v) {
      a.current && clearTimeout(a.current), i && (v.pointerType === "mouse" || v.pointerType === "touch") && i({
        ...v,
        type: "longpressend"
      });
    }
  }), d = ui(l && !e ? o : void 0);
  return {
    longPressProps: V(c, d)
  };
}
var wi = { exports: {} }, Pl = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ko;
function Wh() {
  if (Ko) return Pl;
  Ko = 1;
  var t = $;
  function e(d, v) {
    return d === v && (d !== 0 || 1 / d === 1 / v) || d !== d && v !== v;
  }
  var n = typeof Object.is == "function" ? Object.is : e, i = t.useState, l = t.useEffect, r = t.useLayoutEffect, o = t.useDebugValue;
  function a(d, v) {
    var p = v(), h = i({ inst: { value: p, getSnapshot: v } }), m = h[0].inst, g = h[1];
    return r(
      function() {
        m.value = p, m.getSnapshot = v, u(m) && g({ inst: m });
      },
      [d, p, v]
    ), l(
      function() {
        return u(m) && g({ inst: m }), d(function() {
          u(m) && g({ inst: m });
        });
      },
      [d]
    ), o(p), p;
  }
  function u(d) {
    var v = d.getSnapshot;
    d = d.value;
    try {
      var p = v();
      return !n(d, p);
    } catch {
      return !0;
    }
  }
  function s(d, v) {
    return v();
  }
  var c = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? s : a;
  return Pl.useSyncExternalStore = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : c, Pl;
}
var Dl = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var No;
function Gh() {
  return No || (No = 1, process.env.NODE_ENV !== "production" && function() {
    function t(p, h) {
      return p === h && (p !== 0 || 1 / p === 1 / h) || p !== p && h !== h;
    }
    function e(p, h) {
      c || l.startTransition === void 0 || (c = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var m = h();
      if (!d) {
        var g = h();
        r(m, g) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), d = !0);
      }
      g = o({
        inst: { value: m, getSnapshot: h }
      });
      var b = g[0].inst, E = g[1];
      return u(
        function() {
          b.value = m, b.getSnapshot = h, n(b) && E({ inst: b });
        },
        [p, m, h]
      ), a(
        function() {
          return n(b) && E({ inst: b }), p(function() {
            n(b) && E({ inst: b });
          });
        },
        [p]
      ), s(m), m;
    }
    function n(p) {
      var h = p.getSnapshot;
      p = p.value;
      try {
        var m = h();
        return !r(p, m);
      } catch {
        return !0;
      }
    }
    function i(p, h) {
      return h();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var l = $, r = typeof Object.is == "function" ? Object.is : t, o = l.useState, a = l.useEffect, u = l.useLayoutEffect, s = l.useDebugValue, c = !1, d = !1, v = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? i : e;
    Dl.useSyncExternalStore = l.useSyncExternalStore !== void 0 ? l.useSyncExternalStore : v, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Dl;
}
var Io;
function _h() {
  return Io || (Io = 1, process.env.NODE_ENV === "production" ? wi.exports = Wh() : wi.exports = Gh()), wi.exports;
}
var qh = _h();
const Wa = /* @__PURE__ */ _(!1), ii = /* @__PURE__ */ _(null);
function dn(t) {
  if (z(ii))
    return t.content;
  let { collection: n, document: i } = Jh(t.createCollection);
  return /* @__PURE__ */ $.createElement($.Fragment, null, /* @__PURE__ */ $.createElement(xh, null, /* @__PURE__ */ $.createElement(ii.Provider, {
    value: i
  }, t.content)), /* @__PURE__ */ $.createElement(Yh, {
    render: t.children,
    collection: n
  }));
}
function Yh({ collection: t, render: e }) {
  return e(t);
}
function Zh(t, e, n) {
  let i = Mt(), l = L(i);
  l.current = i;
  let r = X(() => l.current ? n() : e(), [
    e,
    n
  ]);
  return qh.useSyncExternalStore(t, r);
}
const Xh = typeof $.useSyncExternalStore == "function" ? $.useSyncExternalStore : Zh;
function Jh(t) {
  let [e] = Y(() => new yh((t == null ? void 0 : t()) || new nl())), n = X((o) => e.subscribe(o), [
    e
  ]), i = X(() => {
    let o = e.getCollection();
    return e.isSSR && e.resetAfterSSR(), o;
  }, [
    e
  ]), l = X(() => (e.isSSR = !0, e.getCollection()), [
    e
  ]), r = Xh(n, i, l);
  return de(() => (e.isMounted = !0, () => {
    e.isMounted = !1;
  }), [
    e
  ]), {
    collection: r,
    document: e
  };
}
const Hl = /* @__PURE__ */ _(null);
function Ga(t, e, n, i, l, r) {
  let o = X((u) => {
    u == null || u.setProps(e, n, i, r);
  }, [
    e,
    n,
    i,
    r
  ]), a = z(Hl);
  if (a) {
    let u = a.ownerDocument.nodesByProps.get(e);
    return u || (u = a.ownerDocument.createElement(t), u.setProps(e, n, i, r), a.appendChild(u), a.ownerDocument.updateCollection(), a.ownerDocument.nodesByProps.set(e, u)), l ? /* @__PURE__ */ $.createElement(Hl.Provider, {
      value: u
    }, l) : null;
  }
  return /* @__PURE__ */ $.createElement(t, {
    ref: o
  }, l);
}
function zt(t, e) {
  let n = ({ node: l }) => e(l.props, l.props.ref, l), i = re((l, r) => {
    let o = z(Ol);
    if (!z(Wa)) {
      if (e.length >= 3) throw new Error(e.name + " cannot be rendered outside a collection.");
      return e(l, r);
    }
    return Ga(t, l, r, "children" in l ? l.children : null, null, (u) => (
      // Forward FocusableContext to real DOM tree so tooltips work.
      /* @__PURE__ */ $.createElement(Ol.Provider, {
        value: o
      }, /* @__PURE__ */ $.createElement(n, {
        node: u
      }))
    ));
  });
  return i.displayName = e.name, i;
}
function xr(t, e, n = _a) {
  let i = ({ node: r }) => e(r.props, r.props.ref, r), l = re((r, o) => {
    let a = n(r);
    var u;
    return (u = Ga(t, r, o, null, a, (s) => /* @__PURE__ */ $.createElement(i, {
      node: s
    }))) !== null && u !== void 0 ? u : /* @__PURE__ */ $.createElement($.Fragment, null);
  });
  return l.displayName = e.name, l;
}
function _a(t) {
  return hr({
    ...t,
    addIdAndValue: !0
  });
}
const Mo = /* @__PURE__ */ _(null);
function Ot(t) {
  let e = z(Mo), n = ((e == null ? void 0 : e.dependencies) || []).concat(t.dependencies), i = t.idScope || (e == null ? void 0 : e.idScope), l = _a({
    ...t,
    idScope: i,
    dependencies: n
  });
  return z(ii) && (l = /* @__PURE__ */ $.createElement(Qh, null, l)), e = U(() => ({
    dependencies: n,
    idScope: i
  }), [
    i,
    ...n
  ]), /* @__PURE__ */ $.createElement(Mo.Provider, {
    value: e
  }, l);
}
function Qh({ children: t }) {
  let e = z(ii), n = U(() => /* @__PURE__ */ $.createElement(ii.Provider, {
    value: null
  }, /* @__PURE__ */ $.createElement(Wa.Provider, {
    value: !0
  }, t)), [
    t
  ]);
  return Mt() ? /* @__PURE__ */ $.createElement(Hl.Provider, {
    value: e
  }, n) : /* @__PURE__ */ mv(n, e);
}
function e0(t, e) {
  let { elementType: n = "a", onPress: i, onPressStart: l, onPressEnd: r, onClick: o, isDisabled: a, ...u } = t, s = {};
  n !== "a" && (s = {
    role: "link",
    tabIndex: a ? void 0 : 0
  });
  let { focusableProps: c } = jt(t, e), { pressProps: d, isPressed: v } = bt({
    onPress: i,
    onPressStart: l,
    onPressEnd: r,
    onClick: o,
    isDisabled: a,
    ref: e
  }), p = ee(u, {
    labelable: !0
  }), h = V(c, d), m = un(), g = tl(t);
  return {
    isPressed: v,
    linkProps: V(p, g, {
      ...h,
      ...s,
      "aria-disabled": a || void 0,
      "aria-current": t["aria-current"],
      onClick: (b) => {
        var E;
        (E = d.onClick) === null || E === void 0 || E.call(d, b), !m.isNative && b.currentTarget instanceof HTMLAnchorElement && b.currentTarget.href && // If props are applied to a router Link component, it may have already prevented default.
        !b.isDefaultPrevented() && oh(b.currentTarget, b) && t.href && (b.preventDefault(), m.open(b.currentTarget, b, t.href, t.routerOptions));
      }
    })
  };
}
const t0 = /* @__PURE__ */ new Set([
  "Arab",
  "Syrc",
  "Samr",
  "Mand",
  "Thaa",
  "Mend",
  "Nkoo",
  "Adlm",
  "Rohg",
  "Hebr"
]), n0 = /* @__PURE__ */ new Set([
  "ae",
  "ar",
  "arc",
  "bcc",
  "bqi",
  "ckb",
  "dv",
  "fa",
  "glk",
  "he",
  "ku",
  "mzn",
  "nqo",
  "pnb",
  "ps",
  "sd",
  "ug",
  "ur",
  "yi"
]);
function i0(t) {
  if (Intl.Locale) {
    let n = new Intl.Locale(t).maximize(), i = typeof n.getTextInfo == "function" ? n.getTextInfo() : n.textInfo;
    if (i) return i.direction === "rtl";
    if (n.script) return t0.has(n.script);
  }
  let e = t.split("-")[0];
  return n0.has(e);
}
const l0 = Symbol.for("react-aria.i18n.locale");
function qa() {
  let t = typeof window < "u" && window[l0] || typeof navigator < "u" && (navigator.language || navigator.userLanguage) || "en-US";
  try {
    Intl.DateTimeFormat.supportedLocalesOf([
      t
    ]);
  } catch {
    t = "en-US";
  }
  return {
    locale: t,
    direction: i0(t) ? "rtl" : "ltr"
  };
}
let Ul = qa(), _n = /* @__PURE__ */ new Set();
function Ro() {
  Ul = qa();
  for (let t of _n) t(Ul);
}
function r0() {
  let t = Mt(), [e, n] = Y(Ul);
  return Z(() => (_n.size === 0 && window.addEventListener("languagechange", Ro), _n.add(n), () => {
    _n.delete(n), _n.size === 0 && window.removeEventListener("languagechange", Ro);
  }), []), t ? {
    locale: "en-US",
    direction: "ltr"
  } : e;
}
const o0 = /* @__PURE__ */ $.createContext(null);
function We() {
  let t = r0();
  return z(o0) || t;
}
const a0 = Symbol.for("react-aria.i18n.locale"), u0 = Symbol.for("react-aria.i18n.strings");
let $n;
class ll {
  /** Returns a localized string for the given key and locale. */
  getStringForLocale(e, n) {
    let l = this.getStringsForLocale(n)[e];
    if (!l) throw new Error(`Could not find intl message ${e} in ${n} locale`);
    return l;
  }
  /** Returns all localized strings for the given locale. */
  getStringsForLocale(e) {
    let n = this.strings[e];
    return n || (n = s0(e, this.strings, this.defaultLocale), this.strings[e] = n), n;
  }
  static getGlobalDictionaryForPackage(e) {
    if (typeof window > "u") return null;
    let n = window[a0];
    if ($n === void 0) {
      let l = window[u0];
      if (!l) return null;
      $n = {};
      for (let r in l) $n[r] = new ll({
        [n]: l[r]
      }, n);
    }
    let i = $n == null ? void 0 : $n[e];
    if (!i) throw new Error(`Strings for package "${e}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);
    return i;
  }
  constructor(e, n = "en-US") {
    this.strings = Object.fromEntries(Object.entries(e).filter(([, i]) => i)), this.defaultLocale = n;
  }
}
function s0(t, e, n = "en-US") {
  if (e[t]) return e[t];
  let i = c0(t);
  if (e[i]) return e[i];
  for (let l in e)
    if (l.startsWith(i + "-")) return e[l];
  return e[n];
}
function c0(t) {
  return Intl.Locale ? new Intl.Locale(t).language : t.split("-")[0];
}
const Lo = /* @__PURE__ */ new Map(), jo = /* @__PURE__ */ new Map();
class d0 {
  /** Formats a localized string for the given key with the provided variables. */
  format(e, n) {
    let i = this.strings.getStringForLocale(e, this.locale);
    return typeof i == "function" ? i(n, this) : i;
  }
  plural(e, n, i = "cardinal") {
    let l = n["=" + e];
    if (l) return typeof l == "function" ? l() : l;
    let r = this.locale + ":" + i, o = Lo.get(r);
    o || (o = new Intl.PluralRules(this.locale, {
      type: i
    }), Lo.set(r, o));
    let a = o.select(e);
    return l = n[a] || n.other, typeof l == "function" ? l() : l;
  }
  number(e) {
    let n = jo.get(this.locale);
    return n || (n = new Intl.NumberFormat(this.locale), jo.set(this.locale, n)), n.format(e);
  }
  select(e, n) {
    let i = e[n] || e.other;
    return typeof i == "function" ? i() : i;
  }
  constructor(e, n) {
    this.locale = e, this.strings = n;
  }
}
const zo = /* @__PURE__ */ new WeakMap();
function f0(t) {
  let e = zo.get(t);
  return e || (e = new ll(t), zo.set(t, e)), e;
}
function p0(t, e) {
  return e && ll.getGlobalDictionaryForPackage(e) || f0(t);
}
function gt(t, e) {
  let { locale: n } = We(), i = p0(t, e);
  return U(() => new d0(n, i), [
    n,
    i
  ]);
}
let Sl = /* @__PURE__ */ new Map(), Wl = !1;
try {
  Wl = new Intl.NumberFormat("de-DE", {
    signDisplay: "exceptZero"
  }).resolvedOptions().signDisplay === "exceptZero";
} catch {
}
let Wi = !1;
try {
  Wi = new Intl.NumberFormat("de-DE", {
    style: "unit",
    unit: "degree"
  }).resolvedOptions().style === "unit";
} catch {
}
const Ya = {
  degree: {
    narrow: {
      default: "°",
      "ja-JP": " 度",
      "zh-TW": "度",
      "sl-SI": " °"
    }
  }
};
class v0 {
  /** Formats a number value as a string, according to the locale and options provided to the constructor. */
  format(e) {
    let n = "";
    if (!Wl && this.options.signDisplay != null ? n = b0(this.numberFormatter, this.options.signDisplay, e) : n = this.numberFormatter.format(e), this.options.style === "unit" && !Wi) {
      var i;
      let { unit: l, unitDisplay: r = "short", locale: o } = this.resolvedOptions();
      if (!l) return n;
      let a = (i = Ya[l]) === null || i === void 0 ? void 0 : i[r];
      n += a[o] || a.default;
    }
    return n;
  }
  /** Formats a number to an array of parts such as separators, digits, punctuation, and more. */
  formatToParts(e) {
    return this.numberFormatter.formatToParts(e);
  }
  /** Formats a number range as a string. */
  formatRange(e, n) {
    if (typeof this.numberFormatter.formatRange == "function") return this.numberFormatter.formatRange(e, n);
    if (n < e) throw new RangeError("End date must be >= start date");
    return `${this.format(e)} – ${this.format(n)}`;
  }
  /** Formats a number range as an array of parts. */
  formatRangeToParts(e, n) {
    if (typeof this.numberFormatter.formatRangeToParts == "function") return this.numberFormatter.formatRangeToParts(e, n);
    if (n < e) throw new RangeError("End date must be >= start date");
    let i = this.numberFormatter.formatToParts(e), l = this.numberFormatter.formatToParts(n);
    return [
      ...i.map((r) => ({
        ...r,
        source: "startRange"
      })),
      {
        type: "literal",
        value: " – ",
        source: "shared"
      },
      ...l.map((r) => ({
        ...r,
        source: "endRange"
      }))
    ];
  }
  /** Returns the resolved formatting options based on the values passed to the constructor. */
  resolvedOptions() {
    let e = this.numberFormatter.resolvedOptions();
    return !Wl && this.options.signDisplay != null && (e = {
      ...e,
      signDisplay: this.options.signDisplay
    }), !Wi && this.options.style === "unit" && (e = {
      ...e,
      style: "unit",
      unit: this.options.unit,
      unitDisplay: this.options.unitDisplay
    }), e;
  }
  constructor(e, n = {}) {
    this.numberFormatter = h0(e, n), this.options = n;
  }
}
function h0(t, e = {}) {
  let { numberingSystem: n } = e;
  if (n && t.includes("-nu-") && (t.includes("-u-") || (t += "-u-"), t += `-nu-${n}`), e.style === "unit" && !Wi) {
    var i;
    let { unit: o, unitDisplay: a = "short" } = e;
    if (!o) throw new Error('unit option must be provided with style: "unit"');
    if (!(!((i = Ya[o]) === null || i === void 0) && i[a])) throw new Error(`Unsupported unit ${o} with unitDisplay = ${a}`);
    e = {
      ...e,
      style: "decimal"
    };
  }
  let l = t + (e ? Object.entries(e).sort((o, a) => o[0] < a[0] ? -1 : 1).join() : "");
  if (Sl.has(l)) return Sl.get(l);
  let r = new Intl.NumberFormat(t, e);
  return Sl.set(l, r), r;
}
function b0(t, e, n) {
  if (e === "auto") return t.format(n);
  if (e === "never") return t.format(Math.abs(n));
  {
    let i = !1;
    if (e === "always" ? i = n > 0 || Object.is(n, 0) : e === "exceptZero" && (Object.is(n, -0) || Object.is(n, 0) ? n = Math.abs(n) : i = n > 0), i) {
      let l = t.format(-n), r = t.format(n), o = l.replace(r, "").replace(/\u200e|\u061C/, "");
      return [
        ...o
      ].length !== 1 && console.warn("@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case"), l.replace(r, "!!!").replace(o, "+").replace("!!!", r);
    } else return t.format(n);
  }
}
function m0(t = {}) {
  let { locale: e } = We();
  return U(() => new v0(e, t), [
    e,
    t
  ]);
}
let wl = /* @__PURE__ */ new Map();
function Kn(t) {
  let { locale: e } = We(), n = e + (t ? Object.entries(t).sort((l, r) => l[0] < r[0] ? -1 : 1).join() : "");
  if (wl.has(n)) return wl.get(n);
  let i = new Intl.Collator(e, t);
  return wl.set(n, i), i;
}
function g0(t) {
  let e = Kn({
    usage: "search",
    ...t
  }), n = X((r, o) => o.length === 0 ? !0 : (r = r.normalize("NFC"), o = o.normalize("NFC"), e.compare(r.slice(0, o.length), o) === 0), [
    e
  ]), i = X((r, o) => o.length === 0 ? !0 : (r = r.normalize("NFC"), o = o.normalize("NFC"), e.compare(r.slice(-o.length), o) === 0), [
    e
  ]), l = X((r, o) => {
    if (o.length === 0) return !0;
    r = r.normalize("NFC"), o = o.normalize("NFC");
    let a = 0, u = o.length;
    for (; a + u <= r.length; a++) {
      let s = r.slice(a, a + u);
      if (e.compare(o, s) === 0) return !0;
    }
    return !1;
  }, [
    e
  ]);
  return U(() => ({
    startsWith: n,
    endsWith: i,
    contains: l
  }), [
    n,
    i,
    l
  ]);
}
function $0(t, e) {
  let { elementType: n = "button", isDisabled: i, onPress: l, onPressStart: r, onPressEnd: o, onPressUp: a, onPressChange: u, preventFocusOnPress: s, allowFocusWhenDisabled: c, onClick: d, href: v, target: p, rel: h, type: m = "button" } = t, g;
  n === "button" ? g = {
    type: m,
    disabled: i
  } : g = {
    role: "button",
    href: n === "a" && !i ? v : void 0,
    target: n === "a" ? p : void 0,
    type: n === "input" ? m : void 0,
    disabled: n === "input" ? i : void 0,
    "aria-disabled": !i || n === "input" ? void 0 : i,
    rel: n === "a" ? h : void 0
  };
  let { pressProps: b, isPressed: E } = bt({
    onPressStart: r,
    onPressEnd: o,
    onPressChange: u,
    onPress: l,
    onPressUp: a,
    onClick: d,
    isDisabled: i,
    preventFocusOnPress: s,
    ref: e
  }), { focusableProps: D } = jt(t, e);
  c && (D.tabIndex = i ? -1 : D.tabIndex);
  let k = V(D, b, ee(t, {
    labelable: !0
  }));
  return {
    isPressed: E,
    buttonProps: V(g, k, {
      "aria-haspopup": t["aria-haspopup"],
      "aria-expanded": t["aria-expanded"],
      "aria-controls": t["aria-controls"],
      "aria-pressed": t["aria-pressed"],
      "aria-current": t["aria-current"]
    })
  };
}
function y0(t) {
  const e = lt(t);
  if (!(t instanceof e.HTMLElement) && !(t instanceof e.SVGElement)) return !1;
  let { display: n, visibility: i } = t.style, l = n !== "none" && i !== "hidden" && i !== "collapse";
  if (l) {
    const { getComputedStyle: r } = t.ownerDocument.defaultView;
    let { display: o, visibility: a } = r(t);
    l = o !== "none" && a !== "hidden" && a !== "collapse";
  }
  return l;
}
function x0(t, e) {
  return !t.hasAttribute("hidden") && // Ignore HiddenSelect when tree walking.
  !t.hasAttribute("data-react-aria-prevent-focus") && (t.nodeName === "DETAILS" && e && e.nodeName !== "SUMMARY" ? t.hasAttribute("open") : !0);
}
function Za(t, e) {
  return t.nodeName !== "#comment" && y0(t) && x0(t, e) && (!t.parentElement || Za(t.parentElement, t));
}
const Oo = /* @__PURE__ */ $.createContext(null), Gl = "react-aria-focus-scope-restore";
let ye = null;
function rl(t) {
  let { children: e, contain: n, restoreFocus: i, autoFocus: l } = t, r = L(null), o = L(null), a = L([]), { parentNode: u } = z(Oo) || {}, s = U(() => new ql({
    scopeRef: a
  }), [
    a
  ]);
  de(() => {
    let v = u || ze.root;
    if (ze.getTreeNode(v.scopeRef) && ye && !Gi(ye, v.scopeRef)) {
      let p = ze.getTreeNode(ye);
      p && (v = p);
    }
    v.addChild(s), ze.addNode(s);
  }, [
    s,
    u
  ]), de(() => {
    let v = ze.getTreeNode(a);
    v && (v.contain = !!n);
  }, [
    n
  ]), de(() => {
    var v;
    let p = (v = r.current) === null || v === void 0 ? void 0 : v.nextSibling, h = [], m = (g) => g.stopPropagation();
    for (; p && p !== o.current; )
      h.push(p), p.addEventListener(Gl, m), p = p.nextSibling;
    return a.current = h, () => {
      for (let g of h) g.removeEventListener(Gl, m);
    };
  }, [
    e
  ]), S0(a, i, n), C0(a, n), w0(a, i, n), D0(a, l), Z(() => {
    const v = _e(he(a.current ? a.current[0] : void 0));
    let p = null;
    if (ct(v, a.current)) {
      for (let h of ze.traverse()) h.scopeRef && ct(v, h.scopeRef.current) && (p = h);
      p === ze.getTreeNode(a) && (ye = p.scopeRef);
    }
  }, [
    a
  ]), de(() => () => {
    var v, p, h;
    let m = (h = (p = ze.getTreeNode(a)) === null || p === void 0 || (v = p.parent) === null || v === void 0 ? void 0 : v.scopeRef) !== null && h !== void 0 ? h : null;
    (a === ye || Gi(a, ye)) && (!m || ze.getTreeNode(m)) && (ye = m), ze.removeTreeNode(a);
  }, [
    a
  ]);
  let c = U(() => E0(a), []), d = U(() => ({
    focusManager: c,
    parentNode: s
  }), [
    s,
    c
  ]);
  return /* @__PURE__ */ $.createElement(Oo.Provider, {
    value: d
  }, /* @__PURE__ */ $.createElement("span", {
    "data-focus-scope-start": !0,
    hidden: !0,
    ref: r
  }), e, /* @__PURE__ */ $.createElement("span", {
    "data-focus-scope-end": !0,
    hidden: !0,
    ref: o
  }));
}
function E0(t) {
  return {
    focusNext(e = {}) {
      let n = t.current, { from: i, tabbable: l, wrap: r, accept: o } = e;
      var a;
      let u = i || _e(he((a = n[0]) !== null && a !== void 0 ? a : void 0)), s = n[0].previousElementSibling, c = tn(n), d = Xe(c, {
        tabbable: l,
        accept: o
      }, n);
      d.currentNode = ct(u, n) ? u : s;
      let v = d.nextNode();
      return !v && r && (d.currentNode = s, v = d.nextNode()), v && Ft(v, !0), v;
    },
    focusPrevious(e = {}) {
      let n = t.current, { from: i, tabbable: l, wrap: r, accept: o } = e;
      var a;
      let u = i || _e(he((a = n[0]) !== null && a !== void 0 ? a : void 0)), s = n[n.length - 1].nextElementSibling, c = tn(n), d = Xe(c, {
        tabbable: l,
        accept: o
      }, n);
      d.currentNode = ct(u, n) ? u : s;
      let v = d.previousNode();
      return !v && r && (d.currentNode = s, v = d.previousNode()), v && Ft(v, !0), v;
    },
    focusFirst(e = {}) {
      let n = t.current, { tabbable: i, accept: l } = e, r = tn(n), o = Xe(r, {
        tabbable: i,
        accept: l
      }, n);
      o.currentNode = n[0].previousElementSibling;
      let a = o.nextNode();
      return a && Ft(a, !0), a;
    },
    focusLast(e = {}) {
      let n = t.current, { tabbable: i, accept: l } = e, r = tn(n), o = Xe(r, {
        tabbable: i,
        accept: l
      }, n);
      o.currentNode = n[n.length - 1].nextElementSibling;
      let a = o.previousNode();
      return a && Ft(a, !0), a;
    }
  };
}
function tn(t) {
  return t[0].parentElement;
}
function qn(t) {
  let e = ze.getTreeNode(ye);
  for (; e && e.scopeRef !== t; ) {
    if (e.contain) return !1;
    e = e.parent;
  }
  return !0;
}
function C0(t, e) {
  let n = L(void 0), i = L(void 0);
  de(() => {
    let l = t.current;
    if (!e) {
      i.current && (cancelAnimationFrame(i.current), i.current = void 0);
      return;
    }
    const r = he(l ? l[0] : void 0);
    let o = (s) => {
      if (s.key !== "Tab" || s.altKey || s.ctrlKey || s.metaKey || !qn(t) || s.isComposing) return;
      let c = _e(r), d = t.current;
      if (!d || !ct(c, d)) return;
      let v = tn(d), p = Xe(v, {
        tabbable: !0
      }, d);
      if (!c) return;
      p.currentNode = c;
      let h = s.shiftKey ? p.previousNode() : p.nextNode();
      h || (p.currentNode = s.shiftKey ? d[d.length - 1].nextElementSibling : d[0].previousElementSibling, h = s.shiftKey ? p.previousNode() : p.nextNode()), s.preventDefault(), h && Ft(h, !0);
    }, a = (s) => {
      (!ye || Gi(ye, t)) && ct(ve(s), t.current) ? (ye = t, n.current = ve(s)) : qn(t) && !Gt(ve(s), t) ? n.current ? n.current.focus() : ye && ye.current && _l(ye.current) : qn(t) && (n.current = ve(s));
    }, u = (s) => {
      i.current && cancelAnimationFrame(i.current), i.current = requestAnimationFrame(() => {
        let c = Hi(), d = (c === "virtual" || c === null) && Jn() && Sa(), v = _e(r);
        if (!d && v && qn(t) && !Gt(v, t)) {
          ye = t;
          let h = ve(s);
          if (h && h.isConnected) {
            var p;
            n.current = h, (p = n.current) === null || p === void 0 || p.focus();
          } else ye.current && _l(ye.current);
        }
      });
    };
    return r.addEventListener("keydown", o, !1), r.addEventListener("focusin", a, !1), l == null || l.forEach((s) => s.addEventListener("focusin", a, !1)), l == null || l.forEach((s) => s.addEventListener("focusout", u, !1)), () => {
      r.removeEventListener("keydown", o, !1), r.removeEventListener("focusin", a, !1), l == null || l.forEach((s) => s.removeEventListener("focusin", a, !1)), l == null || l.forEach((s) => s.removeEventListener("focusout", u, !1));
    };
  }, [
    t,
    e
  ]), de(() => () => {
    i.current && cancelAnimationFrame(i.current);
  }, [
    i
  ]);
}
function Xa(t) {
  return Gt(t);
}
function ct(t, e) {
  return !t || !e ? !1 : e.some((n) => n.contains(t));
}
function Gt(t, e = null) {
  if (t instanceof Element && t.closest("[data-react-aria-top-layer]")) return !0;
  for (let { scopeRef: n } of ze.traverse(ze.getTreeNode(e)))
    if (n && ct(t, n.current)) return !0;
  return !1;
}
function P0(t) {
  return Gt(t, ye);
}
function Gi(t, e) {
  var n;
  let i = (n = ze.getTreeNode(e)) === null || n === void 0 ? void 0 : n.parent;
  for (; i; ) {
    if (i.scopeRef === t) return !0;
    i = i.parent;
  }
  return !1;
}
function Ft(t, e = !1) {
  if (t != null && !e) try {
    Te(t);
  } catch {
  }
  else if (t != null) try {
    t.focus();
  } catch {
  }
}
function Ja(t, e = !0) {
  let n = t[0].previousElementSibling, i = tn(t), l = Xe(i, {
    tabbable: e
  }, t);
  l.currentNode = n;
  let r = l.nextNode();
  return e && !r && (i = tn(t), l = Xe(i, {
    tabbable: !1
  }, t), l.currentNode = n, r = l.nextNode()), r;
}
function _l(t, e = !0) {
  Ft(Ja(t, e));
}
function D0(t, e) {
  const n = $.useRef(e);
  Z(() => {
    if (n.current) {
      ye = t;
      const i = he(t.current ? t.current[0] : void 0);
      !ct(_e(i), ye.current) && t.current && _l(t.current);
    }
    n.current = !1;
  }, [
    t
  ]);
}
function S0(t, e, n) {
  de(() => {
    if (e || n) return;
    let i = t.current;
    const l = he(i ? i[0] : void 0);
    let r = (o) => {
      let a = ve(o);
      ct(a, t.current) ? ye = t : Xa(a) || (ye = null);
    };
    return l.addEventListener("focusin", r, !1), i == null || i.forEach((o) => o.addEventListener("focusin", r, !1)), () => {
      l.removeEventListener("focusin", r, !1), i == null || i.forEach((o) => o.removeEventListener("focusin", r, !1));
    };
  }, [
    t,
    e,
    n
  ]);
}
function Vo(t) {
  let e = ze.getTreeNode(ye);
  for (; e && e.scopeRef !== t; ) {
    if (e.nodeToRestore) return !1;
    e = e.parent;
  }
  return (e == null ? void 0 : e.scopeRef) === t;
}
function w0(t, e, n) {
  const i = L(typeof document < "u" ? _e(he(t.current ? t.current[0] : void 0)) : null);
  de(() => {
    let l = t.current;
    const r = he(l ? l[0] : void 0);
    if (!e || n) return;
    let o = () => {
      (!ye || Gi(ye, t)) && ct(_e(r), t.current) && (ye = t);
    };
    return r.addEventListener("focusin", o, !1), l == null || l.forEach((a) => a.addEventListener("focusin", o, !1)), () => {
      r.removeEventListener("focusin", o, !1), l == null || l.forEach((a) => a.removeEventListener("focusin", o, !1));
    };
  }, [
    t,
    n
  ]), de(() => {
    const l = he(t.current ? t.current[0] : void 0);
    if (!e) return;
    let r = (o) => {
      if (o.key !== "Tab" || o.altKey || o.ctrlKey || o.metaKey || !qn(t) || o.isComposing) return;
      let a = l.activeElement;
      if (!Gt(a, t) || !Vo(t)) return;
      let u = ze.getTreeNode(t);
      if (!u) return;
      let s = u.nodeToRestore, c = Xe(l.body, {
        tabbable: !0
      });
      c.currentNode = a;
      let d = o.shiftKey ? c.previousNode() : c.nextNode();
      if ((!s || !s.isConnected || s === l.body) && (s = void 0, u.nodeToRestore = void 0), (!d || !Gt(d, t)) && s) {
        c.currentNode = s;
        do
          d = o.shiftKey ? c.previousNode() : c.nextNode();
        while (Gt(d, t));
        o.preventDefault(), o.stopPropagation(), d ? Ft(d, !0) : Xa(s) ? Ft(s, !0) : a.blur();
      }
    };
    return n || l.addEventListener("keydown", r, !0), () => {
      n || l.removeEventListener("keydown", r, !0);
    };
  }, [
    t,
    e,
    n
  ]), de(() => {
    const l = he(t.current ? t.current[0] : void 0);
    if (!e) return;
    let r = ze.getTreeNode(t);
    if (r) {
      var o;
      return r.nodeToRestore = (o = i.current) !== null && o !== void 0 ? o : void 0, () => {
        let a = ze.getTreeNode(t);
        if (!a) return;
        let u = a.nodeToRestore, s = _e(l);
        if (e && u && (s && Gt(s, t) || s === l.body && Vo(t))) {
          let c = ze.clone();
          requestAnimationFrame(() => {
            if (l.activeElement === l.body) {
              let d = c.getTreeNode(t);
              for (; d; ) {
                if (d.nodeToRestore && d.nodeToRestore.isConnected) {
                  Ho(d.nodeToRestore);
                  return;
                }
                d = d.parent;
              }
              for (d = c.getTreeNode(t); d; ) {
                if (d.scopeRef && d.scopeRef.current && ze.getTreeNode(d.scopeRef)) {
                  let v = Ja(d.scopeRef.current, !0);
                  Ho(v);
                  return;
                }
                d = d.parent;
              }
            }
          });
        }
      };
    }
  }, [
    t,
    e
  ]);
}
function Ho(t) {
  t.dispatchEvent(new CustomEvent(Gl, {
    bubbles: !0,
    cancelable: !0
  })) && Ft(t);
}
function Xe(t, e, n) {
  let i = e != null && e.tabbable ? $h : Aa, l = (t == null ? void 0 : t.nodeType) === Node.ELEMENT_NODE ? t : null, r = he(l), o = Yv(r, t || r, NodeFilter.SHOW_ELEMENT, {
    acceptNode(a) {
      var u;
      return !(e == null || (u = e.from) === null || u === void 0) && u.contains(a) ? NodeFilter.FILTER_REJECT : i(a) && Za(a) && (!n || ct(a, n)) && (!(e != null && e.accept) || e.accept(a)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  return e != null && e.from && (o.currentNode = e.from), o;
}
class Er {
  get size() {
    return this.fastMap.size;
  }
  getTreeNode(e) {
    return this.fastMap.get(e);
  }
  addTreeNode(e, n, i) {
    let l = this.fastMap.get(n ?? null);
    if (!l) return;
    let r = new ql({
      scopeRef: e
    });
    l.addChild(r), r.parent = l, this.fastMap.set(e, r), i && (r.nodeToRestore = i);
  }
  addNode(e) {
    this.fastMap.set(e.scopeRef, e);
  }
  removeTreeNode(e) {
    if (e === null) return;
    let n = this.fastMap.get(e);
    if (!n) return;
    let i = n.parent;
    for (let r of this.traverse()) r !== n && n.nodeToRestore && r.nodeToRestore && n.scopeRef && n.scopeRef.current && ct(r.nodeToRestore, n.scopeRef.current) && (r.nodeToRestore = n.nodeToRestore);
    let l = n.children;
    i && (i.removeChild(n), l.size > 0 && l.forEach((r) => i && i.addChild(r))), this.fastMap.delete(n.scopeRef);
  }
  // Pre Order Depth First
  *traverse(e = this.root) {
    if (e.scopeRef != null && (yield e), e.children.size > 0) for (let n of e.children) yield* this.traverse(n);
  }
  clone() {
    var e;
    let n = new Er();
    var i;
    for (let l of this.traverse()) n.addTreeNode(l.scopeRef, (i = (e = l.parent) === null || e === void 0 ? void 0 : e.scopeRef) !== null && i !== void 0 ? i : null, l.nodeToRestore);
    return n;
  }
  constructor() {
    this.fastMap = /* @__PURE__ */ new Map(), this.root = new ql({
      scopeRef: null
    }), this.fastMap.set(null, this.root);
  }
}
class ql {
  addChild(e) {
    this.children.add(e), e.parent = this;
  }
  removeChild(e) {
    this.children.delete(e), e.parent = void 0;
  }
  constructor(e) {
    this.children = /* @__PURE__ */ new Set(), this.contain = !1, this.scopeRef = e.scopeRef;
  }
}
let ze = new Er();
function Fe(t = {}) {
  let { autoFocus: e = !1, isTextInput: n, within: i } = t, l = L({
    isFocused: !1,
    isFocusVisible: e || Zt()
  }), [r, o] = Y(!1), [a, u] = Y(() => l.current.isFocused && l.current.isFocusVisible), s = X(() => u(l.current.isFocused && l.current.isFocusVisible), []), c = X((p) => {
    l.current.isFocused = p, o(p), s();
  }, [
    s
  ]);
  jh((p) => {
    l.current.isFocusVisible = p, s();
  }, [], {
    isTextInput: n
  });
  let { focusProps: d } = $r({
    isDisabled: i,
    onFocusChange: c
  }), { focusWithinProps: v } = cn({
    isDisabled: !i,
    onFocusWithinChange: c
  });
  return {
    isFocused: r,
    isFocusVisible: a,
    focusProps: i ? v : d
  };
}
function Cr(t, e) {
  let n = e == null ? void 0 : e.isDisabled, [i, l] = Y(!1);
  return de(() => {
    if (t != null && t.current && !n) {
      let r = () => {
        if (t.current) {
          let a = Xe(t.current, {
            tabbable: !0
          });
          l(!!a.nextNode());
        }
      };
      r();
      let o = new MutationObserver(r);
      return o.observe(t.current, {
        subtree: !0,
        childList: !0,
        attributes: !0,
        attributeFilter: [
          "tabIndex",
          "disabled"
        ]
      }), () => {
        o.disconnect();
      };
    }
  }), n ? !1 : i;
}
function Qa(t) {
  let e = T0(he(t));
  e !== t && (e && k0(e, t), t && eu(t, e));
}
function k0(t, e) {
  t.dispatchEvent(new FocusEvent("blur", {
    relatedTarget: e
  })), t.dispatchEvent(new FocusEvent("focusout", {
    bubbles: !0,
    relatedTarget: e
  }));
}
function eu(t, e) {
  t.dispatchEvent(new FocusEvent("focus", {
    relatedTarget: e
  })), t.dispatchEvent(new FocusEvent("focusin", {
    bubbles: !0,
    relatedTarget: e
  }));
}
function T0(t) {
  let e = _e(t), n = e == null ? void 0 : e.getAttribute("aria-activedescendant");
  return n && t.getElementById(n) || e;
}
const tu = 7e3;
let Et = null;
function ln(t, e = "assertive", n = tu) {
  Et ? Et.announce(t, e, n) : (Et = new B0(), (typeof IS_REACT_ACT_ENVIRONMENT == "boolean" ? IS_REACT_ACT_ENVIRONMENT : typeof jest < "u") ? Et.announce(t, e, n) : setTimeout(() => {
    Et != null && Et.isAttached() && (Et == null || Et.announce(t, e, n));
  }, 100));
}
class B0 {
  isAttached() {
    var e;
    return (e = this.node) === null || e === void 0 ? void 0 : e.isConnected;
  }
  createLog(e) {
    let n = document.createElement("div");
    return n.setAttribute("role", "log"), n.setAttribute("aria-live", e), n.setAttribute("aria-relevant", "additions"), n;
  }
  destroy() {
    this.node && (document.body.removeChild(this.node), this.node = null);
  }
  announce(e, n = "assertive", i = tu) {
    var l, r;
    if (!this.node) return;
    let o = document.createElement("div");
    typeof e == "object" ? (o.setAttribute("role", "img"), o.setAttribute("aria-labelledby", e["aria-labelledby"])) : o.textContent = e, n === "assertive" ? (l = this.assertiveLog) === null || l === void 0 || l.appendChild(o) : (r = this.politeLog) === null || r === void 0 || r.appendChild(o), e !== "" && setTimeout(() => {
      o.remove();
    }, i);
  }
  clear(e) {
    this.node && ((!e || e === "assertive") && this.assertiveLog && (this.assertiveLog.innerHTML = ""), (!e || e === "polite") && this.politeLog && (this.politeLog.innerHTML = ""));
  }
  constructor() {
    this.node = null, this.assertiveLog = null, this.politeLog = null, typeof document < "u" && (this.node = document.createElement("div"), this.node.dataset.liveAnnouncer = "true", Object.assign(this.node.style, {
      border: 0,
      clip: "rect(0 0 0 0)",
      clipPath: "inset(50%)",
      height: "1px",
      margin: "-1px",
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      width: "1px",
      whiteSpace: "nowrap"
    }), this.assertiveLog = this.createLog("assertive"), this.node.appendChild(this.assertiveLog), this.politeLog = this.createLog("polite"), this.node.appendChild(this.politeLog), document.body.prepend(this.node));
  }
}
const Pr = {
  badInput: !1,
  customError: !1,
  patternMismatch: !1,
  rangeOverflow: !1,
  rangeUnderflow: !1,
  stepMismatch: !1,
  tooLong: !1,
  tooShort: !1,
  typeMismatch: !1,
  valueMissing: !1,
  valid: !0
}, nu = {
  ...Pr,
  customError: !0,
  valid: !1
}, En = {
  isInvalid: !1,
  validationDetails: Pr,
  validationErrors: []
}, iu = _({}), li = "__formValidationState" + Date.now();
function fn(t) {
  if (t[li]) {
    let { realtimeValidation: e, displayValidation: n, updateValidation: i, resetValidation: l, commitValidation: r } = t[li];
    return {
      realtimeValidation: e,
      displayValidation: n,
      updateValidation: i,
      resetValidation: l,
      commitValidation: r
    };
  }
  return A0(t);
}
function A0(t) {
  let { isInvalid: e, validationState: n, name: i, value: l, builtinValidation: r, validate: o, validationBehavior: a = "aria" } = t;
  n && (e || (e = n === "invalid"));
  let u = e !== void 0 ? {
    isInvalid: e,
    validationErrors: [],
    validationDetails: nu
  } : null, s = U(() => {
    if (!o || l == null) return null;
    let K = F0(o, l);
    return Uo(K);
  }, [
    o,
    l
  ]);
  r != null && r.validationDetails.valid && (r = void 0);
  let c = z(iu), d = U(() => i ? Array.isArray(i) ? i.flatMap((K) => Yl(c[K])) : Yl(c[i]) : [], [
    c,
    i
  ]), [v, p] = Y(c), [h, m] = Y(!1);
  c !== v && (p(c), m(!1));
  let g = U(() => Uo(h ? [] : d), [
    h,
    d
  ]), b = L(En), [E, D] = Y(En), k = L(En), P = () => {
    if (!T) return;
    M(!1);
    let K = s || r || b.current;
    kl(K, k.current) || (k.current = K, D(K));
  }, [T, M] = Y(!1);
  return Z(P), {
    realtimeValidation: u || g || s || r || En,
    displayValidation: a === "native" ? u || g || E : u || g || s || r || E,
    updateValidation(K) {
      a === "aria" && !kl(E, K) ? D(K) : b.current = K;
    },
    resetValidation() {
      let K = En;
      kl(K, k.current) || (k.current = K, D(K)), a === "native" && M(!1), m(!0);
    },
    commitValidation() {
      a === "native" && M(!0), m(!0);
    }
  };
}
function Yl(t) {
  return t ? Array.isArray(t) ? t : [
    t
  ] : [];
}
function F0(t, e) {
  if (typeof t == "function") {
    let n = t(e);
    if (n && typeof n != "boolean") return Yl(n);
  }
  return [];
}
function Uo(t) {
  return t.length ? {
    isInvalid: !0,
    validationErrors: t,
    validationDetails: nu
  } : null;
}
function kl(t, e) {
  return t === e ? !0 : !!t && !!e && t.isInvalid === e.isInvalid && t.validationErrors.length === e.validationErrors.length && t.validationErrors.every((n, i) => n === e.validationErrors[i]) && Object.entries(t.validationDetails).every(([n, i]) => e.validationDetails[n] === i);
}
function K0(...t) {
  let e = /* @__PURE__ */ new Set(), n = !1, i = {
    ...Pr
  };
  for (let o of t) {
    var l, r;
    for (let a of o.validationErrors) e.add(a);
    n || (n = o.isInvalid);
    for (let a in i) (l = i)[r = a] || (l[r] = o.validationDetails[a]);
  }
  return i.valid = !n, {
    isInvalid: n,
    validationErrors: [
      ...e
    ],
    validationDetails: i
  };
}
function ol(t, e, n) {
  let { validationBehavior: i, focus: l } = t;
  de(() => {
    if (i === "native" && (n != null && n.current) && !n.current.disabled) {
      let u = e.realtimeValidation.isInvalid ? e.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
      n.current.setCustomValidity(u), n.current.hasAttribute("title") || (n.current.title = ""), e.realtimeValidation.isInvalid || e.updateValidation(I0(n.current));
    }
  });
  let r = Be(() => {
    e.resetValidation();
  }), o = Be((u) => {
    var s;
    e.displayValidation.isInvalid || e.commitValidation();
    let c = n == null || (s = n.current) === null || s === void 0 ? void 0 : s.form;
    if (!u.defaultPrevented && n && c && M0(c) === n.current) {
      var d;
      l ? l() : (d = n.current) === null || d === void 0 || d.focus(), gr("keyboard");
    }
    u.preventDefault();
  }), a = Be(() => {
    e.commitValidation();
  });
  Z(() => {
    let u = n == null ? void 0 : n.current;
    if (!u) return;
    let s = u.form;
    return u.addEventListener("invalid", o), u.addEventListener("change", a), s == null || s.addEventListener("reset", r), () => {
      u.removeEventListener("invalid", o), u.removeEventListener("change", a), s == null || s.removeEventListener("reset", r);
    };
  }, [
    n,
    o,
    a,
    r,
    i
  ]);
}
function N0(t) {
  let e = t.validity;
  return {
    badInput: e.badInput,
    customError: e.customError,
    patternMismatch: e.patternMismatch,
    rangeOverflow: e.rangeOverflow,
    rangeUnderflow: e.rangeUnderflow,
    stepMismatch: e.stepMismatch,
    tooLong: e.tooLong,
    tooShort: e.tooShort,
    typeMismatch: e.typeMismatch,
    valueMissing: e.valueMissing,
    valid: e.valid
  };
}
function I0(t) {
  return {
    isInvalid: !t.validity.valid,
    validationDetails: N0(t),
    validationErrors: t.validationMessage ? [
      t.validationMessage
    ] : []
  };
}
function M0(t) {
  for (let e = 0; e < t.elements.length; e++) {
    let n = t.elements[e];
    if (!n.validity.valid) return n;
  }
  return null;
}
function lu(t, e, n) {
  let { isDisabled: i = !1, isReadOnly: l = !1, value: r, name: o, children: a, "aria-label": u, "aria-labelledby": s, validationState: c = "valid", isInvalid: d } = t, v = (T) => {
    T.stopPropagation(), e.setSelected(T.target.checked);
  }, p = a != null, h = u != null || s != null;
  !p && !h && process.env.NODE_ENV !== "production" && console.warn("If you do not provide children, you must specify an aria-label for accessibility");
  let { pressProps: m, isPressed: g } = bt({
    isDisabled: i
  }), { pressProps: b, isPressed: E } = bt({
    onPress() {
      var T;
      e.toggle(), (T = n.current) === null || T === void 0 || T.focus();
    },
    isDisabled: i || l
  }), { focusableProps: D } = jt(t, n), k = V(m, D), P = ee(t, {
    labelable: !0
  });
  return si(n, e.isSelected, e.setSelected), {
    labelProps: V(b, {
      onClick: (T) => T.preventDefault()
    }),
    inputProps: V(P, {
      "aria-invalid": d || c === "invalid" || void 0,
      "aria-errormessage": t["aria-errormessage"],
      "aria-controls": t["aria-controls"],
      "aria-readonly": l || void 0,
      onChange: v,
      disabled: i,
      ...r == null ? {} : {
        value: r
      },
      name: o,
      type: "checkbox",
      ...k
    }),
    isSelected: e.isSelected,
    isPressed: g || E,
    isDisabled: i,
    isReadOnly: l,
    isInvalid: d || c === "invalid"
  };
}
function ru(t, e, n) {
  let i = fn({
    ...t,
    value: e.isSelected
  }), { isInvalid: l, validationErrors: r, validationDetails: o } = i.displayValidation, { labelProps: a, inputProps: u, isSelected: s, isPressed: c, isDisabled: d, isReadOnly: v } = lu({
    ...t,
    isInvalid: l
  }, e, n);
  ol(t, i, n);
  let { isIndeterminate: p, isRequired: h, validationBehavior: m = "aria" } = t;
  Z(() => {
    n.current && (n.current.indeterminate = !!p);
  });
  let { pressProps: g } = bt({
    isDisabled: d || v,
    onPress() {
      let { [li]: b } = t, { commitValidation: E } = b || i;
      E();
    }
  });
  return {
    labelProps: V(a, g),
    inputProps: {
      ...u,
      checked: s,
      "aria-required": h && m === "aria" || void 0,
      required: h && m === "native"
    },
    isSelected: s,
    isPressed: c,
    isDisabled: d,
    isReadOnly: v,
    isInvalid: l,
    validationErrors: r,
    validationDetails: o
  };
}
const ou = /* @__PURE__ */ new WeakMap();
function al(t) {
  let { id: e, label: n, "aria-labelledby": i, "aria-label": l, labelElementType: r = "label" } = t;
  e = Pe(e);
  let o = Pe(), a = {};
  n ? (i = i ? `${o} ${i}` : o, a = {
    id: o,
    htmlFor: r === "label" ? e : void 0
  }) : !i && !l && process.env.NODE_ENV !== "production" && console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility");
  let u = Tn({
    id: e,
    "aria-label": l,
    "aria-labelledby": i
  });
  return {
    labelProps: a,
    fieldProps: u
  };
}
function di(t) {
  let { description: e, errorMessage: n, isInvalid: i, validationState: l } = t, { labelProps: r, fieldProps: o } = al(t), a = Nt([
    !!e,
    !!n,
    i,
    l
  ]), u = Nt([
    !!e,
    !!n,
    i,
    l
  ]);
  return o = V(o, {
    "aria-describedby": [
      a,
      // Use aria-describedby for error message because aria-errormessage is unsupported using VoiceOver or NVDA. See https://github.com/adobe/react-spectrum/issues/1346#issuecomment-740136268
      u,
      t["aria-describedby"]
    ].filter(Boolean).join(" ") || void 0
  }), {
    labelProps: r,
    fieldProps: o,
    descriptionProps: {
      id: a
    },
    errorMessageProps: {
      id: u
    }
  };
}
function R0(t, e) {
  let { isDisabled: n, name: i, validationBehavior: l = "aria" } = t, { isInvalid: r, validationErrors: o, validationDetails: a } = e.displayValidation, { labelProps: u, fieldProps: s, descriptionProps: c, errorMessageProps: d } = di({
    ...t,
    // Checkbox group is not an HTML input element so it
    // shouldn't be labeled by a <label> element.
    labelElementType: "span",
    isInvalid: r,
    errorMessage: t.errorMessage || o
  });
  ou.set(e, {
    name: i,
    descriptionId: c.id,
    errorMessageId: d.id,
    validationBehavior: l
  });
  let v = ee(t, {
    labelable: !0
  }), { focusWithinProps: p } = cn({
    onBlurWithin: t.onBlur,
    onFocusWithin: t.onFocus,
    onFocusWithinChange: t.onFocusChange
  });
  return {
    groupProps: V(v, {
      role: "group",
      "aria-disabled": n || void 0,
      ...s,
      ...p
    }),
    labelProps: u,
    descriptionProps: c,
    errorMessageProps: d,
    isInvalid: r,
    validationErrors: o,
    validationDetails: a
  };
}
function Dr(t = {}) {
  let { isReadOnly: e } = t, [n, i] = dt(t.isSelected, t.defaultSelected || !1, t.onChange);
  function l(o) {
    e || i(o);
  }
  function r() {
    e || i(!n);
  }
  return {
    isSelected: n,
    setSelected: l,
    toggle: r
  };
}
function L0(t, e, n) {
  const i = Dr({
    isReadOnly: t.isReadOnly || e.isReadOnly,
    isSelected: e.isSelected(t.value),
    onChange(g) {
      g ? e.addValue(t.value) : e.removeValue(t.value), t.onChange && t.onChange(g);
    }
  });
  let { name: l, descriptionId: r, errorMessageId: o, validationBehavior: a } = ou.get(e);
  var u;
  a = (u = t.validationBehavior) !== null && u !== void 0 ? u : a;
  let { realtimeValidation: s } = fn({
    ...t,
    value: i.isSelected,
    // Server validation is handled at the group level.
    name: void 0,
    validationBehavior: "aria"
  }), c = L(En), d = () => {
    e.setInvalid(t.value, s.isInvalid ? s : c.current);
  };
  Z(d);
  let v = e.realtimeValidation.isInvalid ? e.realtimeValidation : s, p = a === "native" ? e.displayValidation : v;
  var h;
  let m = ru({
    ...t,
    isReadOnly: t.isReadOnly || e.isReadOnly,
    isDisabled: t.isDisabled || e.isDisabled,
    name: t.name || l,
    isRequired: (h = t.isRequired) !== null && h !== void 0 ? h : e.isRequired,
    validationBehavior: a,
    [li]: {
      realtimeValidation: v,
      displayValidation: p,
      resetValidation: e.resetValidation,
      commitValidation: e.commitValidation,
      updateValidation(g) {
        c.current = g, d();
      }
    }
  }, i, n);
  return {
    ...m,
    inputProps: {
      ...m.inputProps,
      "aria-describedby": [
        t["aria-describedby"],
        e.isInvalid ? o : null,
        r
      ].filter(Boolean).join(" ") || void 0
    }
  };
}
const j0 = 0, z0 = 100, O0 = 1;
function V0(t) {
  const { isDisabled: e = !1, minValue: n = j0, maxValue: i = z0, numberFormatter: l, step: r = O0, orientation: o = "horizontal" } = t;
  let a = U(() => {
    let N = (i - n) / 10;
    return N = zn(N, 0, N + r, r), Math.max(N, r);
  }, [
    r,
    i,
    n
  ]), u = X((N) => N == null ? void 0 : N.map((Q, te) => {
    let ue = te === 0 ? n : N[te - 1], we = te === N.length - 1 ? i : N[te + 1];
    return zn(Q, ue, we, r);
  }), [
    n,
    i,
    r
  ]), s = U(() => u(Go(t.value)), [
    t.value
  ]), c = U(() => {
    var N;
    return u((N = Go(t.defaultValue)) !== null && N !== void 0 ? N : [
      n
    ]);
  }, [
    t.defaultValue,
    n
  ]), d = _o(t.value, t.defaultValue, t.onChange), v = _o(t.value, t.defaultValue, t.onChangeEnd);
  const [p, h] = dt(s, c, d), [m, g] = Y(new Array(p.length).fill(!1)), b = L(new Array(p.length).fill(!0)), [E, D] = Y(void 0), k = L(p), P = L(m);
  let T = (N) => {
    k.current = N, h(N);
  }, M = (N) => {
    P.current = N, g(N);
  };
  function F(N) {
    return (N - n) / (i - n);
  }
  function H(N) {
    return N === 0 ? n : p[N - 1];
  }
  function K(N) {
    return N === p.length - 1 ? i : p[N + 1];
  }
  function y(N) {
    return b.current[N];
  }
  function R(N, Q) {
    b.current[N] = Q;
  }
  function A(N, Q) {
    if (e || !y(N)) return;
    const te = H(N), ue = K(N);
    Q = zn(Q, te, ue, r);
    let we = Wo(k.current, N, Q);
    T(we);
  }
  function B(N, Q) {
    if (e || !y(N)) return;
    Q && (k.current = p);
    const te = P.current[N];
    P.current = Wo(P.current, N, Q), M(P.current), v && te && !P.current.some(Boolean) && v(k.current);
  }
  function j(N) {
    return l.format(N);
  }
  function x(N, Q) {
    A(N, w(Q));
  }
  function S(N) {
    return Math.round((N - n) / r) * r + n;
  }
  function w(N) {
    const Q = N * (i - n) + n;
    return An(S(Q), n, i);
  }
  function W(N, Q = 1) {
    let te = Math.max(Q, r);
    A(N, zn(p[N] + te, n, i, r));
  }
  function J(N, Q = 1) {
    let te = Math.max(Q, r);
    A(N, zn(p[N] - te, n, i, r));
  }
  return {
    values: p,
    getThumbValue: (N) => p[N],
    setThumbValue: A,
    setThumbPercent: x,
    isThumbDragging: (N) => m[N],
    setThumbDragging: B,
    focusedThumb: E,
    setFocusedThumb: D,
    getThumbPercent: (N) => F(p[N]),
    getValuePercent: F,
    getThumbValueLabel: (N) => j(p[N]),
    getFormattedValue: j,
    getThumbMinValue: H,
    getThumbMaxValue: K,
    getPercentValue: w,
    isThumbEditable: y,
    setThumbEditable: R,
    incrementThumb: W,
    decrementThumb: J,
    step: r,
    pageSize: a,
    orientation: o,
    isDisabled: e
  };
}
function Wo(t, e, n) {
  return t[e] === n ? t : [
    ...t.slice(0, e),
    n,
    ...t.slice(e + 1)
  ];
}
function Go(t) {
  if (t != null)
    return Array.isArray(t) ? t : [
      t
    ];
}
function _o(t, e, n) {
  return (i) => {
    typeof t == "number" || typeof e == "number" ? n == null || n(i[0]) : n == null || n(i);
  };
}
const qo = {
  border: 0,
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  width: "1px",
  whiteSpace: "nowrap"
};
function fi(t = {}) {
  let { style: e, isFocusable: n } = t, [i, l] = Y(!1), { focusWithinProps: r } = cn({
    isDisabled: !n,
    onFocusWithinChange: (a) => l(a)
  }), o = U(() => i ? e : e ? {
    ...qo,
    ...e
  } : qo, [
    i
  ]);
  return {
    visuallyHiddenProps: {
      ...r,
      style: o
    }
  };
}
function pi(t) {
  let { children: e, elementType: n = "div", isFocusable: i, style: l, ...r } = t, { visuallyHiddenProps: o } = fi(t);
  return /* @__PURE__ */ $.createElement(n, V(r, o), e);
}
const Sr = /* @__PURE__ */ new WeakMap();
function Zl(t, e) {
  let n = Sr.get(t);
  if (!n) throw new Error("Unknown slider state");
  return `${n.id}-${e}`;
}
function H0(t, e, n) {
  let { labelProps: i, fieldProps: l } = al(t), r = t.orientation === "vertical";
  var o;
  Sr.set(e, {
    id: (o = i.id) !== null && o !== void 0 ? o : l.id,
    "aria-describedby": t["aria-describedby"],
    "aria-details": t["aria-details"]
  });
  let { direction: a } = We(), { addGlobalListener: u, removeGlobalListener: s } = sn();
  const c = L(null), d = a === "rtl", v = L(null), { moveProps: p } = Ha({
    onMoveStart() {
      v.current = null;
    },
    onMove({ deltaX: b, deltaY: E }) {
      if (!n.current) return;
      let { height: D, width: k } = n.current.getBoundingClientRect(), P = r ? D : k;
      v.current == null && c.current != null && (v.current = e.getThumbPercent(c.current) * P);
      let T = r ? E : b;
      if ((r || d) && (T = -T), v.current += T, c.current != null && n.current) {
        const M = An(v.current / P, 0, 1);
        e.setThumbPercent(c.current, M);
      }
    },
    onMoveEnd() {
      c.current != null && (e.setThumbDragging(c.current, !1), c.current = null);
    }
  });
  let h = L(void 0), m = (b, E, D, k) => {
    if (n.current && !t.isDisabled && e.values.every((P, T) => !e.isThumbDragging(T))) {
      let { height: P, width: T, top: M, left: F } = n.current.getBoundingClientRect(), H = r ? P : T, A = ((r ? k : D) - (r ? M : F)) / H;
      (a === "rtl" || r) && (A = 1 - A);
      let B = e.getPercentValue(A), j, x = e.values.findIndex((S) => B - S < 0);
      if (x === 0) j = x;
      else if (x === -1) j = e.values.length - 1;
      else {
        let S = e.values[x - 1], w = e.values[x];
        Math.abs(S - B) < Math.abs(w - B) ? j = x - 1 : j = x;
      }
      j >= 0 && e.isThumbEditable(j) ? (b.preventDefault(), c.current = j, e.setFocusedThumb(j), h.current = E, e.setThumbDragging(c.current, !0), e.setThumbValue(j, B), u(window, "mouseup", g, !1), u(window, "touchend", g, !1), u(window, "pointerup", g, !1)) : c.current = null;
    }
  }, g = (b) => {
    var E, D;
    ((D = b.pointerId) !== null && D !== void 0 ? D : (E = b.changedTouches) === null || E === void 0 ? void 0 : E[0].identifier) === h.current && (c.current != null && (e.setThumbDragging(c.current, !1), c.current = null), s(window, "mouseup", g, !1), s(window, "touchend", g, !1), s(window, "pointerup", g, !1));
  };
  return "htmlFor" in i && i.htmlFor && (delete i.htmlFor, i.onClick = () => {
    var b;
    (b = document.getElementById(Zl(e, 0))) === null || b === void 0 || b.focus(), gr("keyboard");
  }), {
    labelProps: i,
    // The root element of the Slider will have role="group" to group together
    // all the thumb inputs in the Slider.  The label of the Slider will
    // be used to label the group.
    groupProps: {
      role: "group",
      ...l
    },
    trackProps: V({
      onMouseDown(b) {
        b.button !== 0 || b.altKey || b.ctrlKey || b.metaKey || m(b, void 0, b.clientX, b.clientY);
      },
      onPointerDown(b) {
        b.pointerType === "mouse" && (b.button !== 0 || b.altKey || b.ctrlKey || b.metaKey) || m(b, b.pointerId, b.clientX, b.clientY);
      },
      onTouchStart(b) {
        m(b, b.changedTouches[0].identifier, b.changedTouches[0].clientX, b.changedTouches[0].clientY);
      },
      style: {
        position: "relative",
        touchAction: "none"
      }
    }, p),
    outputProps: {
      htmlFor: e.values.map((b, E) => Zl(e, E)).join(" "),
      "aria-live": "off"
    }
  };
}
function U0(t, e) {
  let { index: n = 0, isRequired: i, validationState: l, isInvalid: r, trackRef: o, inputRef: a, orientation: u = e.orientation, name: s } = t, c = t.isDisabled || e.isDisabled, d = u === "vertical", { direction: v } = We(), { addGlobalListener: p, removeGlobalListener: h } = sn(), m = Sr.get(e);
  var g;
  const { labelProps: b, fieldProps: E } = al({
    ...t,
    id: Zl(e, n),
    "aria-labelledby": `${m.id} ${(g = t["aria-labelledby"]) !== null && g !== void 0 ? g : ""}`.trim()
  }), D = e.values[n], k = X(() => {
    a.current && st(a.current);
  }, [
    a
  ]), P = e.focusedThumb === n;
  Z(() => {
    P && k();
  }, [
    P,
    k
  ]);
  let T = v === "rtl", M = L(null), { keyboardProps: F } = yr({
    onKeyDown(x) {
      let { getThumbMaxValue: S, getThumbMinValue: w, decrementThumb: W, incrementThumb: J, setThumbValue: N, setThumbDragging: Q, pageSize: te } = e;
      if (!/^(PageUp|PageDown|Home|End)$/.test(x.key)) {
        x.continuePropagation();
        return;
      }
      switch (x.preventDefault(), Q(n, !0), x.key) {
        case "PageUp":
          J(n, te);
          break;
        case "PageDown":
          W(n, te);
          break;
        case "Home":
          N(n, w(n));
          break;
        case "End":
          N(n, S(n));
          break;
      }
      Q(n, !1);
    }
  }), { moveProps: H } = Ha({
    onMoveStart() {
      M.current = null, e.setThumbDragging(n, !0);
    },
    onMove({ deltaX: x, deltaY: S, pointerType: w, shiftKey: W }) {
      const { getThumbPercent: J, setThumbPercent: N, decrementThumb: Q, incrementThumb: te, step: ue, pageSize: we } = e;
      if (!o.current) return;
      let { width: De, height: ke } = o.current.getBoundingClientRect(), Le = d ? ke : De;
      if (M.current == null && (M.current = J(n) * Le), w === "keyboard")
        x > 0 && T || x < 0 && !T || S > 0 ? Q(n, W ? we : ue) : te(n, W ? we : ue);
      else {
        let Ve = d ? S : x;
        (d || T) && (Ve = -Ve), M.current += Ve, N(n, An(M.current / Le, 0, 1));
      }
    },
    onMoveEnd() {
      e.setThumbDragging(n, !1);
    }
  });
  e.setThumbEditable(n, !c);
  const { focusableProps: K } = jt(V(t, {
    onFocus: () => e.setFocusedThumb(n),
    onBlur: () => e.setFocusedThumb(void 0)
  }), a);
  let y = L(void 0), R = (x) => {
    k(), y.current = x, e.setThumbDragging(n, !0), p(window, "mouseup", A, !1), p(window, "touchend", A, !1), p(window, "pointerup", A, !1);
  }, A = (x) => {
    var S, w;
    ((w = x.pointerId) !== null && w !== void 0 ? w : (S = x.changedTouches) === null || S === void 0 ? void 0 : S[0].identifier) === y.current && (k(), e.setThumbDragging(n, !1), h(window, "mouseup", A, !1), h(window, "touchend", A, !1), h(window, "pointerup", A, !1));
  }, B = e.getThumbPercent(n);
  (d || v === "rtl") && (B = 1 - B);
  let j = c ? {} : V(F, H, {
    onMouseDown: (x) => {
      x.button !== 0 || x.altKey || x.ctrlKey || x.metaKey || R();
    },
    onPointerDown: (x) => {
      x.button !== 0 || x.altKey || x.ctrlKey || x.metaKey || R(x.pointerId);
    },
    onTouchStart: (x) => {
      R(x.changedTouches[0].identifier);
    }
  });
  return si(a, D, (x) => {
    e.setThumbValue(n, x);
  }), {
    inputProps: V(K, E, {
      type: "range",
      tabIndex: c ? void 0 : 0,
      min: e.getThumbMinValue(n),
      max: e.getThumbMaxValue(n),
      step: e.step,
      value: D,
      name: s,
      disabled: c,
      "aria-orientation": u,
      "aria-valuetext": e.getThumbValueLabel(n),
      "aria-required": i || void 0,
      "aria-invalid": r || l === "invalid" || void 0,
      "aria-errormessage": t["aria-errormessage"],
      "aria-describedby": [
        m["aria-describedby"],
        t["aria-describedby"]
      ].filter(Boolean).join(" "),
      "aria-details": [
        m["aria-details"],
        t["aria-details"]
      ].filter(Boolean).join(" "),
      onChange: (x) => {
        e.setThumbValue(n, parseFloat(x.target.value));
      }
    }),
    thumbProps: {
      ...j,
      style: {
        position: "absolute",
        [d ? "top" : "left"]: `${B * 100}%`,
        transform: "translate(-50%, -50%)",
        touchAction: "none"
      }
    },
    labelProps: b,
    isDragging: e.isThumbDragging(n),
    isDisabled: c,
    isFocused: P
  };
}
function au(t, e) {
  let { inputElementType: n = "input", isDisabled: i = !1, isRequired: l = !1, isReadOnly: r = !1, type: o = "text", validationBehavior: a = "aria" } = t, [u, s] = dt(t.value, t.defaultValue || "", t.onChange), { focusableProps: c } = jt(t, e), d = fn({
    ...t,
    value: u
  }), { isInvalid: v, validationErrors: p, validationDetails: h } = d.displayValidation, { labelProps: m, fieldProps: g, descriptionProps: b, errorMessageProps: E } = di({
    ...t,
    isInvalid: v,
    errorMessage: t.errorMessage || p
  }), D = ee(t, {
    labelable: !0
  });
  const k = {
    type: o,
    pattern: t.pattern
  };
  return si(e, u, s), ol(t, d, e), Z(() => {
    if (e.current instanceof lt(e.current).HTMLTextAreaElement) {
      let P = e.current;
      Object.defineProperty(P, "defaultValue", {
        get: () => P.value,
        set: () => {
        },
        configurable: !0
      });
    }
  }, [
    e
  ]), {
    labelProps: m,
    inputProps: V(D, n === "input" ? k : void 0, {
      disabled: i,
      readOnly: r,
      required: l && a === "native",
      "aria-required": l && a === "aria" || void 0,
      "aria-invalid": v || void 0,
      "aria-errormessage": t["aria-errormessage"],
      "aria-activedescendant": t["aria-activedescendant"],
      "aria-autocomplete": t["aria-autocomplete"],
      "aria-haspopup": t["aria-haspopup"],
      "aria-controls": t["aria-controls"],
      value: u,
      onChange: (P) => s(P.target.value),
      autoComplete: t.autoComplete,
      autoCapitalize: t.autoCapitalize,
      maxLength: t.maxLength,
      minLength: t.minLength,
      name: t.name,
      placeholder: t.placeholder,
      inputMode: t.inputMode,
      autoCorrect: t.autoCorrect,
      spellCheck: t.spellCheck,
      [parseInt($.version, 10) >= 17 ? "enterKeyHint" : "enterkeyhint"]: t.enterKeyHint,
      // Clipboard events
      onCopy: t.onCopy,
      onCut: t.onCut,
      onPaste: t.onPaste,
      // Composition events
      onCompositionEnd: t.onCompositionEnd,
      onCompositionStart: t.onCompositionStart,
      onCompositionUpdate: t.onCompositionUpdate,
      // Selection events
      onSelect: t.onSelect,
      // Input events
      onBeforeInput: t.onBeforeInput,
      onInput: t.onInput,
      ...c,
      ...g
    }),
    descriptionProps: b,
    errorMessageProps: E,
    isInvalid: v,
    validationErrors: p,
    validationDetails: h
  };
}
var uu = {};
uu = {
  buttonLabel: "عرض المقترحات",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} خيار`,
    other: () => `${e.number(t.optionCount)} خيارات`
  })} متاحة.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `المجموعة المدخلة ${t.groupTitle}, مع ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} خيار`,
      other: () => `${e.number(t.groupCount)} خيارات`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", محدد",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "مقترحات",
  selectedAnnouncement: (t) => `${t.optionText}، محدد`
};
var su = {};
su = {
  buttonLabel: "Покажи предложения",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} опция`,
    other: () => `${e.number(t.optionCount)} опции`
  })} на разположение.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Въведена група ${t.groupTitle}, с ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} опция`,
      other: () => `${e.number(t.groupCount)} опции`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", избрани",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Предложения",
  selectedAnnouncement: (t) => `${t.optionText}, избрани`
};
var cu = {};
cu = {
  buttonLabel: "Zobrazit doporučení",
  countAnnouncement: (t, e) => `K dispozici ${e.plural(t.optionCount, {
    one: () => `je ${e.number(t.optionCount)} možnost`,
    other: () => `jsou/je ${e.number(t.optionCount)} možnosti/-í`
  })}.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Zadaná skupina „${t.groupTitle}“ ${e.plural(t.groupCount, {
      one: () => `s ${e.number(t.groupCount)} možností`,
      other: () => `se ${e.number(t.groupCount)} možnostmi`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: " (vybráno)",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Návrhy",
  selectedAnnouncement: (t) => `${t.optionText}, vybráno`
};
var du = {};
du = {
  buttonLabel: "Vis forslag",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} mulighed tilgængelig`,
    other: () => `${e.number(t.optionCount)} muligheder tilgængelige`
  })}.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Angivet gruppe ${t.groupTitle}, med ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} mulighed`,
      other: () => `${e.number(t.groupCount)} muligheder`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", valgt",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Forslag",
  selectedAnnouncement: (t) => `${t.optionText}, valgt`
};
var fu = {};
fu = {
  buttonLabel: "Empfehlungen anzeigen",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} Option`,
    other: () => `${e.number(t.optionCount)} Optionen`
  })} verfügbar.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Eingetretene Gruppe ${t.groupTitle}, mit ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} Option`,
      other: () => `${e.number(t.groupCount)} Optionen`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", ausgewählt",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Empfehlungen",
  selectedAnnouncement: (t) => `${t.optionText}, ausgewählt`
};
var pu = {};
pu = {
  buttonLabel: "Προβολή προτάσεων",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} επιλογή`,
    other: () => `${e.number(t.optionCount)} επιλογές `
  })} διαθέσιμες.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Εισαγμένη ομάδα ${t.groupTitle}, με ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} επιλογή`,
      other: () => `${e.number(t.groupCount)} επιλογές`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", επιλεγμένο",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Προτάσεις",
  selectedAnnouncement: (t) => `${t.optionText}, επιλέχθηκε`
};
var vu = {};
vu = {
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Entered group ${t.groupTitle}, with ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} option`,
      other: () => `${e.number(t.groupCount)} options`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", selected",
    other: ""
  }, t.isSelected)}`,
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} option`,
    other: () => `${e.number(t.optionCount)} options`
  })} available.`,
  selectedAnnouncement: (t) => `${t.optionText}, selected`,
  buttonLabel: "Show suggestions",
  listboxLabel: "Suggestions"
};
var hu = {};
hu = {
  buttonLabel: "Mostrar sugerencias",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} opción`,
    other: () => `${e.number(t.optionCount)} opciones`
  })} disponible(s).`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Se ha unido al grupo ${t.groupTitle}, con ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} opción`,
      other: () => `${e.number(t.groupCount)} opciones`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", seleccionado",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Sugerencias",
  selectedAnnouncement: (t) => `${t.optionText}, seleccionado`
};
var bu = {};
bu = {
  buttonLabel: "Kuva soovitused",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} valik`,
    other: () => `${e.number(t.optionCount)} valikud`
  })} saadaval.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Sisestatud rühm ${t.groupTitle}, valikuga ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} valik`,
      other: () => `${e.number(t.groupCount)} valikud`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", valitud",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Soovitused",
  selectedAnnouncement: (t) => `${t.optionText}, valitud`
};
var mu = {};
mu = {
  buttonLabel: "Näytä ehdotukset",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} vaihtoehto`,
    other: () => `${e.number(t.optionCount)} vaihtoehdot`
  })} saatavilla.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Mentiin ryhmään ${t.groupTitle}, ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} vaihtoehdon`,
      other: () => `${e.number(t.groupCount)} vaihtoehdon`
    })} kanssa.`,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", valittu",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Ehdotukset",
  selectedAnnouncement: (t) => `${t.optionText}, valittu`
};
var gu = {};
gu = {
  buttonLabel: "Afficher les suggestions",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} option`,
    other: () => `${e.number(t.optionCount)} options`
  })} disponible(s).`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Groupe ${t.groupTitle} rejoint, avec ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} option`,
      other: () => `${e.number(t.groupCount)} options`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", sélectionné(s)",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Suggestions",
  selectedAnnouncement: (t) => `${t.optionText}, sélectionné`
};
var $u = {};
$u = {
  buttonLabel: "הצג הצעות",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `אפשרות ${e.number(t.optionCount)}`,
    other: () => `${e.number(t.optionCount)} אפשרויות`
  })} במצב זמין.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `נכנס לקבוצה ${t.groupTitle}, עם ${e.plural(t.groupCount, {
      one: () => `אפשרות ${e.number(t.groupCount)}`,
      other: () => `${e.number(t.groupCount)} אפשרויות`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", נבחר",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "הצעות",
  selectedAnnouncement: (t) => `${t.optionText}, נבחר`
};
var yu = {};
yu = {
  buttonLabel: "Prikaži prijedloge",
  countAnnouncement: (t, e) => `Dostupno još: ${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} opcija`,
    other: () => `${e.number(t.optionCount)} opcije/a`
  })}.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Unesena skupina ${t.groupTitle}, s ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} opcijom`,
      other: () => `${e.number(t.groupCount)} opcije/a`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", odabranih",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Prijedlozi",
  selectedAnnouncement: (t) => `${t.optionText}, odabrano`
};
var xu = {};
xu = {
  buttonLabel: "Javaslatok megjelenítése",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} lehetőség`,
    other: () => `${e.number(t.optionCount)} lehetőség`
  })} áll rendelkezésre.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Belépett a(z) ${t.groupTitle} csoportba, amely ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} lehetőséget`,
      other: () => `${e.number(t.groupCount)} lehetőséget`
    })} tartalmaz. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", kijelölve",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Javaslatok",
  selectedAnnouncement: (t) => `${t.optionText}, kijelölve`
};
var Eu = {};
Eu = {
  buttonLabel: "Mostra suggerimenti",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} opzione disponibile`,
    other: () => `${e.number(t.optionCount)} opzioni disponibili`
  })}.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Ingresso nel gruppo ${t.groupTitle}, con ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} opzione`,
      other: () => `${e.number(t.groupCount)} opzioni`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", selezionato",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Suggerimenti",
  selectedAnnouncement: (t) => `${t.optionText}, selezionato`
};
var Cu = {};
Cu = {
  buttonLabel: "候補を表示",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} 個のオプション`,
    other: () => `${e.number(t.optionCount)} 個のオプション`
  })}を利用できます。`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `入力されたグループ ${t.groupTitle}、${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} 個のオプション`,
      other: () => `${e.number(t.groupCount)} 個のオプション`
    })}を含む。`,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: "、選択済み",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "候補",
  selectedAnnouncement: (t) => `${t.optionText}、選択済み`
};
var Pu = {};
Pu = {
  buttonLabel: "제안 사항 표시",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)}개 옵션`,
    other: () => `${e.number(t.optionCount)}개 옵션`
  })}을 사용할 수 있습니다.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `입력한 그룹 ${t.groupTitle}, ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)}개 옵션`,
      other: () => `${e.number(t.groupCount)}개 옵션`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", 선택됨",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "제안",
  selectedAnnouncement: (t) => `${t.optionText}, 선택됨`
};
var Du = {};
Du = {
  buttonLabel: "Rodyti pasiūlymus",
  countAnnouncement: (t, e) => `Yra ${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} parinktis`,
    other: () => `${e.number(t.optionCount)} parinktys (-ių)`
  })}.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Įvesta grupė ${t.groupTitle}, su ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} parinktimi`,
      other: () => `${e.number(t.groupCount)} parinktimis (-ių)`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", pasirinkta",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Pasiūlymai",
  selectedAnnouncement: (t) => `${t.optionText}, pasirinkta`
};
var Su = {};
Su = {
  buttonLabel: "Rādīt ieteikumus",
  countAnnouncement: (t, e) => `Pieejamo opciju skaits: ${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} opcija`,
    other: () => `${e.number(t.optionCount)} opcijas`
  })}.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Ievadīta grupa ${t.groupTitle}, ar ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} opciju`,
      other: () => `${e.number(t.groupCount)} opcijām`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", atlasīta",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Ieteikumi",
  selectedAnnouncement: (t) => `${t.optionText}, atlasīta`
};
var wu = {};
wu = {
  buttonLabel: "Vis forslag",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} alternativ`,
    other: () => `${e.number(t.optionCount)} alternativer`
  })} finnes.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Angitt gruppe ${t.groupTitle}, med ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} alternativ`,
      other: () => `${e.number(t.groupCount)} alternativer`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", valgt",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Forslag",
  selectedAnnouncement: (t) => `${t.optionText}, valgt`
};
var ku = {};
ku = {
  buttonLabel: "Suggesties weergeven",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} optie`,
    other: () => `${e.number(t.optionCount)} opties`
  })} beschikbaar.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Groep ${t.groupTitle} ingevoerd met ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} optie`,
      other: () => `${e.number(t.groupCount)} opties`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", geselecteerd",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Suggesties",
  selectedAnnouncement: (t) => `${t.optionText}, geselecteerd`
};
var Tu = {};
Tu = {
  buttonLabel: "Wyświetlaj sugestie",
  countAnnouncement: (t, e) => `dostępna/dostępne(-nych) ${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} opcja`,
    other: () => `${e.number(t.optionCount)} opcje(-i)`
  })}.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Dołączono do grupy ${t.groupTitle}, z ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} opcją`,
      other: () => `${e.number(t.groupCount)} opcjami`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", wybrano",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Sugestie",
  selectedAnnouncement: (t) => `${t.optionText}, wybrano`
};
var Bu = {};
Bu = {
  buttonLabel: "Mostrar sugestões",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} opção`,
    other: () => `${e.number(t.optionCount)} opções`
  })} disponível.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Grupo inserido ${t.groupTitle}, com ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} opção`,
      other: () => `${e.number(t.groupCount)} opções`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", selecionado",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Sugestões",
  selectedAnnouncement: (t) => `${t.optionText}, selecionado`
};
var Au = {};
Au = {
  buttonLabel: "Apresentar sugestões",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} opção`,
    other: () => `${e.number(t.optionCount)} opções`
  })} disponível.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Grupo introduzido ${t.groupTitle}, com ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} opção`,
      other: () => `${e.number(t.groupCount)} opções`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", selecionado",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Sugestões",
  selectedAnnouncement: (t) => `${t.optionText}, selecionado`
};
var Fu = {};
Fu = {
  buttonLabel: "Afișare sugestii",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} opțiune`,
    other: () => `${e.number(t.optionCount)} opțiuni`
  })} disponibile.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Grup ${t.groupTitle} introdus, cu ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} opțiune`,
      other: () => `${e.number(t.groupCount)} opțiuni`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", selectat",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Sugestii",
  selectedAnnouncement: (t) => `${t.optionText}, selectat`
};
var Ku = {};
Ku = {
  buttonLabel: "Показать предложения",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} параметр`,
    other: () => `${e.number(t.optionCount)} параметров`
  })} доступно.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Введенная группа ${t.groupTitle}, с ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} параметром`,
      other: () => `${e.number(t.groupCount)} параметрами`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", выбранными",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Предложения",
  selectedAnnouncement: (t) => `${t.optionText}, выбрано`
};
var Nu = {};
Nu = {
  buttonLabel: "Zobraziť návrhy",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} možnosť`,
    other: () => `${e.number(t.optionCount)} možnosti/-í`
  })} k dispozícii.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Zadaná skupina ${t.groupTitle}, s ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} možnosťou`,
      other: () => `${e.number(t.groupCount)} možnosťami`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", vybraté",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Návrhy",
  selectedAnnouncement: (t) => `${t.optionText}, vybraté`
};
var Iu = {};
Iu = {
  buttonLabel: "Prikaži predloge",
  countAnnouncement: (t, e) => `Na voljo je ${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} opcija`,
    other: () => `${e.number(t.optionCount)} opcije`
  })}.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Vnesena skupina ${t.groupTitle}, z ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} opcija`,
      other: () => `${e.number(t.groupCount)} opcije`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", izbrano",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Predlogi",
  selectedAnnouncement: (t) => `${t.optionText}, izbrano`
};
var Mu = {};
Mu = {
  buttonLabel: "Prikaži predloge",
  countAnnouncement: (t, e) => `Dostupno još: ${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} opcija`,
    other: () => `${e.number(t.optionCount)} opcije/a`
  })}.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Unesena grupa ${t.groupTitle}, s ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} opcijom`,
      other: () => `${e.number(t.groupCount)} optione/a`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", izabranih",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Predlozi",
  selectedAnnouncement: (t) => `${t.optionText}, izabrano`
};
var Ru = {};
Ru = {
  buttonLabel: "Visa förslag",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} alternativ`,
    other: () => `${e.number(t.optionCount)} alternativ`
  })} tillgängliga.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Ingick i gruppen ${t.groupTitle} med ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} alternativ`,
      other: () => `${e.number(t.groupCount)} alternativ`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", valda",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Förslag",
  selectedAnnouncement: (t) => `${t.optionText}, valda`
};
var Lu = {};
Lu = {
  buttonLabel: "Önerileri göster",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} seçenek`,
    other: () => `${e.number(t.optionCount)} seçenekler`
  })} kullanılabilir.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Girilen grup ${t.groupTitle}, ile ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} seçenek`,
      other: () => `${e.number(t.groupCount)} seçenekler`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", seçildi",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Öneriler",
  selectedAnnouncement: (t) => `${t.optionText}, seçildi`
};
var ju = {};
ju = {
  buttonLabel: "Показати пропозиції",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} параметр`,
    other: () => `${e.number(t.optionCount)} параметри(-ів)`
  })} доступно.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Введена група ${t.groupTitle}, з ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} параметр`,
      other: () => `${e.number(t.groupCount)} параметри(-ів)`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", вибрано",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Пропозиції",
  selectedAnnouncement: (t) => `${t.optionText}, вибрано`
};
var zu = {};
zu = {
  buttonLabel: "显示建议",
  countAnnouncement: (t, e) => `有 ${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} 个选项`,
    other: () => `${e.number(t.optionCount)} 个选项`
  })}可用。`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `进入了 ${t.groupTitle} 组，其中有 ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} 个选项`,
      other: () => `${e.number(t.groupCount)} 个选项`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", 已选择",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "建议",
  selectedAnnouncement: (t) => `${t.optionText}, 已选择`
};
var Ou = {};
Ou = {
  buttonLabel: "顯示建議",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} 選項`,
    other: () => `${e.number(t.optionCount)} 選項`
  })} 可用。`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `輸入的群組 ${t.groupTitle}, 有 ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} 選項`,
      other: () => `${e.number(t.groupCount)} 選項`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", 已選取",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "建議",
  selectedAnnouncement: (t) => `${t.optionText}, 已選取`
};
var Vu = {};
Vu = {
  "ar-AE": uu,
  "bg-BG": su,
  "cs-CZ": cu,
  "da-DK": du,
  "de-DE": fu,
  "el-GR": pu,
  "en-US": vu,
  "es-ES": hu,
  "et-EE": bu,
  "fi-FI": mu,
  "fr-FR": gu,
  "he-IL": $u,
  "hr-HR": yu,
  "hu-HU": xu,
  "it-IT": Eu,
  "ja-JP": Cu,
  "ko-KR": Pu,
  "lt-LT": Du,
  "lv-LV": Su,
  "nb-NO": wu,
  "nl-NL": ku,
  "pl-PL": Tu,
  "pt-BR": Bu,
  "pt-PT": Au,
  "ro-RO": Fu,
  "ru-RU": Ku,
  "sk-SK": Nu,
  "sl-SI": Iu,
  "sr-SP": Mu,
  "sv-SE": Ru,
  "tr-TR": Lu,
  "uk-UA": ju,
  "zh-CN": zu,
  "zh-TW": Ou
};
const Pt = {
  top: "top",
  bottom: "top",
  left: "left",
  right: "left"
}, _i = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, W0 = {
  top: "left",
  left: "top"
}, Xl = {
  top: "height",
  left: "width"
}, Hu = {
  width: "totalWidth",
  height: "totalHeight"
}, ki = {};
let Ue = typeof document < "u" ? window.visualViewport : null;
function Yo(t) {
  let e = 0, n = 0, i = 0, l = 0, r = 0, o = 0, a = {};
  var u;
  let s = ((u = Ue == null ? void 0 : Ue.scale) !== null && u !== void 0 ? u : 1) > 1;
  if (t.tagName === "BODY") {
    let h = document.documentElement;
    i = h.clientWidth, l = h.clientHeight;
    var c;
    e = (c = Ue == null ? void 0 : Ue.width) !== null && c !== void 0 ? c : i;
    var d;
    n = (d = Ue == null ? void 0 : Ue.height) !== null && d !== void 0 ? d : l, a.top = h.scrollTop || t.scrollTop, a.left = h.scrollLeft || t.scrollLeft, Ue && (r = Ue.offsetTop, o = Ue.offsetLeft);
  } else
    ({ width: e, height: n, top: r, left: o } = Sn(t)), a.top = t.scrollTop, a.left = t.scrollLeft, i = e, l = n;
  if (sr() && (t.tagName === "BODY" || t.tagName === "HTML") && s) {
    a.top = 0, a.left = 0;
    var v;
    r = (v = Ue == null ? void 0 : Ue.pageTop) !== null && v !== void 0 ? v : 0;
    var p;
    o = (p = Ue == null ? void 0 : Ue.pageLeft) !== null && p !== void 0 ? p : 0;
  }
  return {
    width: e,
    height: n,
    totalWidth: i,
    totalHeight: l,
    scroll: a,
    top: r,
    left: o
  };
}
function G0(t) {
  return {
    top: t.scrollTop,
    left: t.scrollLeft,
    width: t.scrollWidth,
    height: t.scrollHeight
  };
}
function Zo(t, e, n, i, l, r, o) {
  var a;
  let u = (a = l.scroll[t]) !== null && a !== void 0 ? a : 0, s = i[Xl[t]], c = i.scroll[Pt[t]] + r, d = s + i.scroll[Pt[t]] - r, v = e - u + o[t] - i[Pt[t]], p = e - u + n + o[t] - i[Pt[t]];
  return v < c ? c - v : p > d ? Math.max(d - p, c - v) : 0;
}
function _0(t) {
  let e = window.getComputedStyle(t);
  return {
    top: parseInt(e.marginTop, 10) || 0,
    bottom: parseInt(e.marginBottom, 10) || 0,
    left: parseInt(e.marginLeft, 10) || 0,
    right: parseInt(e.marginRight, 10) || 0
  };
}
function Xo(t) {
  if (ki[t]) return ki[t];
  let [e, n] = t.split(" "), i = Pt[e] || "right", l = W0[i];
  Pt[n] || (n = "center");
  let r = Xl[i], o = Xl[l];
  return ki[t] = {
    placement: e,
    crossPlacement: n,
    axis: i,
    crossAxis: l,
    size: r,
    crossSize: o
  }, ki[t];
}
function Tl(t, e, n, i, l, r, o, a, u, s) {
  let { placement: c, crossPlacement: d, axis: v, crossAxis: p, size: h, crossSize: m } = i, g = {};
  var b;
  g[p] = (b = t[p]) !== null && b !== void 0 ? b : 0;
  var E, D, k, P;
  d === "center" ? g[p] += (((E = t[m]) !== null && E !== void 0 ? E : 0) - ((D = n[m]) !== null && D !== void 0 ? D : 0)) / 2 : d !== p && (g[p] += ((k = t[m]) !== null && k !== void 0 ? k : 0) - ((P = n[m]) !== null && P !== void 0 ? P : 0)), g[p] += r;
  const T = t[p] - n[m] + u + s, M = t[p] + t[m] - u - s;
  if (g[p] = An(g[p], T, M), c === v) {
    const F = a ? o[h] : e[Hu[h]];
    g[_i[v]] = Math.floor(F - t[v] + l);
  } else g[v] = Math.floor(t[v] + t[h] + l);
  return g;
}
function q0(t, e, n, i, l, r, o, a) {
  const u = i ? n.height : e[Hu.height];
  var s;
  let c = t.top != null ? n.top + t.top : n.top + (u - ((s = t.bottom) !== null && s !== void 0 ? s : 0) - o);
  var d, v, p, h, m, g;
  let b = a !== "top" ? (
    // We want the distance between the top of the overlay to the bottom of the boundary
    Math.max(0, e.height + e.top + ((d = e.scroll.top) !== null && d !== void 0 ? d : 0) - c - (((v = l.top) !== null && v !== void 0 ? v : 0) + ((p = l.bottom) !== null && p !== void 0 ? p : 0) + r))
  ) : Math.max(0, c + o - (e.top + ((h = e.scroll.top) !== null && h !== void 0 ? h : 0)) - (((m = l.top) !== null && m !== void 0 ? m : 0) + ((g = l.bottom) !== null && g !== void 0 ? g : 0) + r));
  return Math.min(e.height - r * 2, b);
}
function Jo(t, e, n, i, l, r) {
  let { placement: o, axis: a, size: u } = r;
  var s, c;
  if (o === a) return Math.max(0, n[a] - t[a] - ((s = t.scroll[a]) !== null && s !== void 0 ? s : 0) + e[a] - ((c = i[a]) !== null && c !== void 0 ? c : 0) - i[_i[a]] - l);
  var d;
  return Math.max(0, t[u] + t[a] + t.scroll[a] - e[a] - n[a] - n[u] - ((d = i[a]) !== null && d !== void 0 ? d : 0) - i[_i[a]] - l);
}
function Y0(t, e, n, i, l, r, o, a, u, s, c, d, v, p, h, m) {
  let g = Xo(t), { size: b, crossAxis: E, crossSize: D, placement: k, crossPlacement: P } = g, T = Tl(e, a, n, g, c, d, s, v, h, m), M = c, F = Jo(a, s, e, l, r + c, g);
  if (o && i[b] > F) {
    let ue = Xo(`${_i[k]} ${P}`), we = Tl(e, a, n, ue, c, d, s, v, h, m);
    Jo(a, s, e, l, r + c, ue) > F && (g = ue, T = we, M = c);
  }
  let H = "bottom";
  g.axis === "top" ? g.placement === "top" ? H = "top" : g.placement === "bottom" && (H = "bottom") : g.crossAxis === "top" && (g.crossPlacement === "top" ? H = "bottom" : g.crossPlacement === "bottom" && (H = "top"));
  let K = Zo(E, T[E], n[D], a, u, r, s);
  T[E] += K;
  let y = q0(T, a, s, v, l, r, n.height, H);
  p && p < y && (y = p), n.height = Math.min(n.height, y), T = Tl(e, a, n, g, M, d, s, v, h, m), K = Zo(E, T[E], n[D], a, u, r, s), T[E] += K;
  let R = {}, A = e[E] + 0.5 * e[D] - T[E] - l[Pt[E]];
  const B = h / 2 + m;
  var j, x, S, w;
  const W = Pt[E] === "left" ? ((j = l.left) !== null && j !== void 0 ? j : 0) + ((x = l.right) !== null && x !== void 0 ? x : 0) : ((S = l.top) !== null && S !== void 0 ? S : 0) + ((w = l.bottom) !== null && w !== void 0 ? w : 0), J = n[D] - W - h / 2 - m, N = e[E] + h / 2 - (T[E] + l[Pt[E]]), Q = e[E] + e[D] - h / 2 - (T[E] + l[Pt[E]]), te = An(A, N, Q);
  return R[E] = An(te, B, J), {
    position: T,
    maxHeight: y,
    arrowOffsetLeft: R.left,
    arrowOffsetTop: R.top,
    placement: g.placement
  };
}
function Z0(t) {
  let { placement: e, targetNode: n, overlayNode: i, scrollNode: l, padding: r, shouldFlip: o, boundaryElement: a, offset: u, crossOffset: s, maxHeight: c, arrowSize: d = 0, arrowBoundaryOffset: v = 0 } = t, p = i instanceof HTMLElement ? X0(i) : document.documentElement, h = p === document.documentElement;
  const m = window.getComputedStyle(p).position;
  let g = !!m && m !== "static", b = h ? Sn(n) : Qo(n, p);
  if (!h) {
    let { marginTop: R, marginLeft: A } = window.getComputedStyle(n);
    b.top += parseInt(R, 10) || 0, b.left += parseInt(A, 10) || 0;
  }
  let E = Sn(i), D = _0(i);
  var k, P;
  E.width += ((k = D.left) !== null && k !== void 0 ? k : 0) + ((P = D.right) !== null && P !== void 0 ? P : 0);
  var T, M;
  E.height += ((T = D.top) !== null && T !== void 0 ? T : 0) + ((M = D.bottom) !== null && M !== void 0 ? M : 0);
  let F = G0(l), H = Yo(a), K = Yo(p), y = a.tagName === "BODY" ? Sn(p) : Qo(p, a);
  return p.tagName === "HTML" && a.tagName === "BODY" && (K.scroll.top = 0, K.scroll.left = 0), Y0(e, b, E, F, D, r, o, H, K, y, u, s, g, c, d, v);
}
function Sn(t) {
  let { top: e, left: n, width: i, height: l } = t.getBoundingClientRect(), { scrollTop: r, scrollLeft: o, clientTop: a, clientLeft: u } = document.documentElement;
  return {
    top: e + r - a,
    left: n + o - u,
    width: i,
    height: l
  };
}
function Qo(t, e) {
  let n = window.getComputedStyle(t), i;
  if (n.position === "fixed") {
    let { top: l, left: r, width: o, height: a } = t.getBoundingClientRect();
    i = {
      top: l,
      left: r,
      width: o,
      height: a
    };
  } else {
    i = Sn(t);
    let l = Sn(e), r = window.getComputedStyle(e);
    l.top += (parseInt(r.borderTopWidth, 10) || 0) - e.scrollTop, l.left += (parseInt(r.borderLeftWidth, 10) || 0) - e.scrollLeft, i.top -= l.top, i.left -= l.left;
  }
  return i.top -= parseInt(n.marginTop, 10) || 0, i.left -= parseInt(n.marginLeft, 10) || 0, i;
}
function X0(t) {
  let e = t.offsetParent;
  if (e && e === document.body && window.getComputedStyle(e).position === "static" && !ea(e) && (e = document.documentElement), e == null)
    for (e = t.parentElement; e && !ea(e); ) e = e.parentElement;
  return e || document.documentElement;
}
function ea(t) {
  let e = window.getComputedStyle(t);
  return e.transform !== "none" || /transform|perspective/.test(e.willChange) || e.filter !== "none" || e.contain === "paint" || "backdropFilter" in e && e.backdropFilter !== "none" || "WebkitBackdropFilter" in e && e.WebkitBackdropFilter !== "none";
}
const Uu = /* @__PURE__ */ new WeakMap();
function J0(t) {
  let { triggerRef: e, isOpen: n, onClose: i } = t;
  Z(() => {
    if (!n || i === null) return;
    let l = (r) => {
      let o = r.target;
      if (!e.current || o instanceof Node && !o.contains(e.current) || r.target instanceof HTMLInputElement || r.target instanceof HTMLTextAreaElement) return;
      let a = i || Uu.get(e.current);
      a && a();
    };
    return window.addEventListener("scroll", l, !0), () => {
      window.removeEventListener("scroll", l, !0);
    };
  }, [
    n,
    i,
    e
  ]);
}
let Ie = typeof document < "u" ? window.visualViewport : null;
function Q0(t) {
  let { direction: e } = We(), { arrowSize: n = 0, targetRef: i, overlayRef: l, scrollRef: r = l, placement: o = "bottom", containerPadding: a = 12, shouldFlip: u = !0, boundaryElement: s = typeof document < "u" ? document.body : null, offset: c = 0, crossOffset: d = 0, shouldUpdatePosition: v = !0, isOpen: p = !0, onClose: h, maxHeight: m, arrowBoundaryOffset: g = 0 } = t, [b, E] = Y(null), D = [
    v,
    o,
    l.current,
    i.current,
    r.current,
    a,
    u,
    s,
    c,
    d,
    p,
    e,
    m,
    g,
    n
  ], k = L(Ie == null ? void 0 : Ie.scale);
  Z(() => {
    p && (k.current = Ie == null ? void 0 : Ie.scale);
  }, [
    p
  ]);
  let P = X(() => {
    if (v === !1 || !p || !l.current || !i.current || !s || (Ie == null ? void 0 : Ie.scale) !== k.current) return;
    let K = null;
    if (r.current && r.current.contains(document.activeElement)) {
      var y;
      let w = (y = document.activeElement) === null || y === void 0 ? void 0 : y.getBoundingClientRect(), W = r.current.getBoundingClientRect();
      var R;
      if (K = {
        type: "top",
        offset: ((R = w == null ? void 0 : w.top) !== null && R !== void 0 ? R : 0) - W.top
      }, K.offset > W.height / 2) {
        K.type = "bottom";
        var A;
        K.offset = ((A = w == null ? void 0 : w.bottom) !== null && A !== void 0 ? A : 0) - W.bottom;
      }
    }
    let B = l.current;
    if (!m && l.current) {
      var j;
      B.style.top = "0px", B.style.bottom = "";
      var x;
      B.style.maxHeight = ((x = (j = window.visualViewport) === null || j === void 0 ? void 0 : j.height) !== null && x !== void 0 ? x : window.innerHeight) + "px";
    }
    let S = Z0({
      placement: tb(o, e),
      overlayNode: l.current,
      targetNode: i.current,
      scrollNode: r.current || l.current,
      padding: a,
      shouldFlip: u,
      boundaryElement: s,
      offset: c,
      crossOffset: d,
      maxHeight: m,
      arrowSize: n,
      arrowBoundaryOffset: g
    });
    if (S.position) {
      if (B.style.top = "", B.style.bottom = "", B.style.left = "", B.style.right = "", Object.keys(S.position).forEach((w) => B.style[w] = S.position[w] + "px"), B.style.maxHeight = S.maxHeight != null ? S.maxHeight + "px" : "", K && document.activeElement && r.current) {
        let w = document.activeElement.getBoundingClientRect(), W = r.current.getBoundingClientRect(), J = w[K.type] - W[K.type];
        r.current.scrollTop += J - K.offset;
      }
      E(S);
    }
  }, D);
  de(P, D), eb(P), Bn({
    ref: l,
    onResize: P
  }), Bn({
    ref: i,
    onResize: P
  });
  let T = L(!1);
  de(() => {
    let K, y = () => {
      T.current = !0, clearTimeout(K), K = setTimeout(() => {
        T.current = !1;
      }, 500), P();
    }, R = () => {
      T.current && y();
    };
    return Ie == null || Ie.addEventListener("resize", y), Ie == null || Ie.addEventListener("scroll", R), () => {
      Ie == null || Ie.removeEventListener("resize", y), Ie == null || Ie.removeEventListener("scroll", R);
    };
  }, [
    P
  ]);
  let M = X(() => {
    T.current || h == null || h();
  }, [
    h,
    T
  ]);
  J0({
    triggerRef: i,
    isOpen: p,
    onClose: h && M
  });
  var F, H;
  return {
    overlayProps: {
      style: {
        position: "absolute",
        zIndex: 1e5,
        ...b == null ? void 0 : b.position,
        maxHeight: (F = b == null ? void 0 : b.maxHeight) !== null && F !== void 0 ? F : "100vh"
      }
    },
    placement: (H = b == null ? void 0 : b.placement) !== null && H !== void 0 ? H : null,
    arrowProps: {
      "aria-hidden": "true",
      role: "presentation",
      style: {
        left: b == null ? void 0 : b.arrowOffsetLeft,
        top: b == null ? void 0 : b.arrowOffsetTop
      }
    },
    updatePosition: P
  };
}
function eb(t) {
  de(() => (window.addEventListener("resize", t, !1), () => {
    window.removeEventListener("resize", t, !1);
  }), [
    t
  ]);
}
function tb(t, e) {
  return e === "rtl" ? t.replace("start", "right").replace("end", "left") : t.replace("start", "left").replace("end", "right");
}
const Ct = [];
function Wu(t, e) {
  let { onClose: n, shouldCloseOnBlur: i, isOpen: l, isDismissable: r = !1, isKeyboardDismissDisabled: o = !1, shouldCloseOnInteractOutside: a } = t;
  Z(() => {
    if (l && !Ct.includes(e))
      return Ct.push(e), () => {
        let h = Ct.indexOf(e);
        h >= 0 && Ct.splice(h, 1);
      };
  }, [
    l,
    e
  ]);
  let u = () => {
    Ct[Ct.length - 1] === e && n && n();
  }, s = (h) => {
    (!a || a(h.target)) && Ct[Ct.length - 1] === e && (h.stopPropagation(), h.preventDefault());
  }, c = (h) => {
    (!a || a(h.target)) && (Ct[Ct.length - 1] === e && (h.stopPropagation(), h.preventDefault()), u());
  }, d = (h) => {
    h.key === "Escape" && !o && !h.nativeEvent.isComposing && (h.stopPropagation(), h.preventDefault(), u());
  };
  Hh({
    ref: e,
    onInteractOutside: r && l ? c : void 0,
    onInteractOutsideStart: s
  });
  let { focusWithinProps: v } = cn({
    isDisabled: !i,
    onBlurWithin: (h) => {
      !h.relatedTarget || P0(h.relatedTarget) || (!a || a(h.relatedTarget)) && (n == null || n());
    }
  }), p = (h) => {
    h.target === h.currentTarget && h.preventDefault();
  };
  return {
    overlayProps: {
      onKeyDown: d,
      ...v
    },
    underlayProps: {
      onPointerDown: p
    }
  };
}
function Gu(t, e, n) {
  let { type: i } = t, { isOpen: l } = e;
  Z(() => {
    n && n.current && Uu.set(n.current, e.close);
  });
  let r;
  i === "menu" ? r = !0 : i === "listbox" && (r = "listbox");
  let o = Pe();
  return {
    triggerProps: {
      "aria-haspopup": r,
      "aria-expanded": l,
      "aria-controls": l ? o : void 0,
      onPress: e.toggle
    },
    overlayProps: {
      id: o
    }
  };
}
const Bl = typeof document < "u" && window.visualViewport, nb = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
let Ti = 0, Al;
function _u(t = {}) {
  let { isDisabled: e } = t;
  de(() => {
    if (!e)
      return Ti++, Ti === 1 && (el() ? Al = lb() : Al = ib()), () => {
        Ti--, Ti === 0 && Al();
      };
  }, [
    e
  ]);
}
function ib() {
  let t = window.innerWidth - document.documentElement.clientWidth;
  return Dt(t > 0 && // Use scrollbar-gutter when supported because it also works for fixed positioned elements.
  ("scrollbarGutter" in document.documentElement.style ? nn(document.documentElement, "scrollbarGutter", "stable") : nn(document.documentElement, "paddingRight", `${t}px`)), nn(document.documentElement, "overflow", "hidden"));
}
function lb() {
  let t, e, n = (s) => {
    t = Ze(s.target, !0), !(t === document.documentElement && t === document.body) && t instanceof HTMLElement && window.getComputedStyle(t).overscrollBehavior === "auto" && (e = nn(t, "overscrollBehavior", "contain"));
  }, i = (s) => {
    if (!t || t === document.documentElement || t === document.body) {
      s.preventDefault();
      return;
    }
    t.scrollHeight === t.clientHeight && t.scrollWidth === t.clientWidth && s.preventDefault();
  }, l = () => {
    e && e();
  }, r = (s) => {
    let c = s.target;
    rb(c) && (a(), c.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      c.style.transform = "", Bl && (Bl.height < window.innerHeight ? requestAnimationFrame(() => {
        ta(c);
      }) : Bl.addEventListener("resize", () => ta(c), {
        once: !0
      }));
    }));
  }, o = null, a = () => {
    if (o) return;
    let s = () => {
      window.scrollTo(0, 0);
    }, c = window.pageXOffset, d = window.pageYOffset;
    o = Dt(On(window, "scroll", s), nn(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`), nn(document.documentElement, "overflow", "hidden"), nn(document.body, "marginTop", `-${d}px`), () => {
      window.scrollTo(c, d);
    }), window.scrollTo(0, 0);
  }, u = Dt(On(document, "touchstart", n, {
    passive: !1,
    capture: !0
  }), On(document, "touchmove", i, {
    passive: !1,
    capture: !0
  }), On(document, "touchend", l, {
    passive: !1,
    capture: !0
  }), On(document, "focus", r, !0));
  return () => {
    e == null || e(), o == null || o(), u();
  };
}
function nn(t, e, n) {
  let i = t.style[e];
  return t.style[e] = n, () => {
    t.style[e] = i;
  };
}
function On(t, e, n, i) {
  return t.addEventListener(e, n, i), () => {
    t.removeEventListener(e, n, i);
  };
}
function ta(t) {
  let e = document.scrollingElement || document.documentElement, n = t;
  for (; n && n !== e; ) {
    let i = Ze(n);
    if (i !== document.documentElement && i !== document.body && i !== n) {
      let l = i.getBoundingClientRect().top, r = n.getBoundingClientRect().top;
      r > l + n.clientHeight && (i.scrollTop += r - l);
    }
    n = i.parentElement;
  }
}
function rb(t) {
  return t instanceof HTMLInputElement && !nb.has(t.type) || t instanceof HTMLTextAreaElement || t instanceof HTMLElement && t.isContentEditable;
}
const ob = /* @__PURE__ */ _({});
function ab() {
  var t;
  return (t = z(ob)) !== null && t !== void 0 ? t : {};
}
var qu = {};
qu = {
  dismiss: "تجاهل"
};
var Yu = {};
Yu = {
  dismiss: "Отхвърляне"
};
var Zu = {};
Zu = {
  dismiss: "Odstranit"
};
var Xu = {};
Xu = {
  dismiss: "Luk"
};
var Ju = {};
Ju = {
  dismiss: "Schließen"
};
var Qu = {};
Qu = {
  dismiss: "Απόρριψη"
};
var es = {};
es = {
  dismiss: "Dismiss"
};
var ts = {};
ts = {
  dismiss: "Descartar"
};
var ns = {};
ns = {
  dismiss: "Lõpeta"
};
var is = {};
is = {
  dismiss: "Hylkää"
};
var ls = {};
ls = {
  dismiss: "Rejeter"
};
var rs = {};
rs = {
  dismiss: "התעלם"
};
var os = {};
os = {
  dismiss: "Odbaci"
};
var as = {};
as = {
  dismiss: "Elutasítás"
};
var us = {};
us = {
  dismiss: "Ignora"
};
var ss = {};
ss = {
  dismiss: "閉じる"
};
var cs = {};
cs = {
  dismiss: "무시"
};
var ds = {};
ds = {
  dismiss: "Atmesti"
};
var fs = {};
fs = {
  dismiss: "Nerādīt"
};
var ps = {};
ps = {
  dismiss: "Lukk"
};
var vs = {};
vs = {
  dismiss: "Negeren"
};
var hs = {};
hs = {
  dismiss: "Zignoruj"
};
var bs = {};
bs = {
  dismiss: "Descartar"
};
var ms = {};
ms = {
  dismiss: "Dispensar"
};
var gs = {};
gs = {
  dismiss: "Revocare"
};
var $s = {};
$s = {
  dismiss: "Пропустить"
};
var ys = {};
ys = {
  dismiss: "Zrušiť"
};
var xs = {};
xs = {
  dismiss: "Opusti"
};
var Es = {};
Es = {
  dismiss: "Odbaci"
};
var Cs = {};
Cs = {
  dismiss: "Avvisa"
};
var Ps = {};
Ps = {
  dismiss: "Kapat"
};
var Ds = {};
Ds = {
  dismiss: "Скасувати"
};
var Ss = {};
Ss = {
  dismiss: "取消"
};
var ws = {};
ws = {
  dismiss: "關閉"
};
var ks = {};
ks = {
  "ar-AE": qu,
  "bg-BG": Yu,
  "cs-CZ": Zu,
  "da-DK": Xu,
  "de-DE": Ju,
  "el-GR": Qu,
  "en-US": es,
  "es-ES": ts,
  "et-EE": ns,
  "fi-FI": is,
  "fr-FR": ls,
  "he-IL": rs,
  "hr-HR": os,
  "hu-HU": as,
  "it-IT": us,
  "ja-JP": ss,
  "ko-KR": cs,
  "lt-LT": ds,
  "lv-LV": fs,
  "nb-NO": ps,
  "nl-NL": vs,
  "pl-PL": hs,
  "pt-BR": bs,
  "pt-PT": ms,
  "ro-RO": gs,
  "ru-RU": $s,
  "sk-SK": ys,
  "sl-SI": xs,
  "sr-SP": Es,
  "sv-SE": Cs,
  "tr-TR": Ps,
  "uk-UA": Ds,
  "zh-CN": Ss,
  "zh-TW": ws
};
function ub(t) {
  return t && t.__esModule ? t.default : t;
}
function Jl(t) {
  let { onDismiss: e, ...n } = t, i = gt(ub(ks), "@react-aria/overlays"), l = Tn(n, i.format("dismiss")), r = () => {
    e && e();
  };
  return /* @__PURE__ */ $.createElement(pi, null, /* @__PURE__ */ $.createElement("button", {
    ...l,
    tabIndex: -1,
    onClick: r,
    style: {
      width: 1,
      height: 1
    }
  }));
}
let Vn = /* @__PURE__ */ new WeakMap(), tt = [];
function wr(t, e = document.body) {
  let n = new Set(t), i = /* @__PURE__ */ new Set(), l = (u) => {
    for (let v of u.querySelectorAll("[data-live-announcer], [data-react-aria-top-layer]")) n.add(v);
    let s = (v) => {
      if (n.has(v) || v.parentElement && i.has(v.parentElement) && v.parentElement.getAttribute("role") !== "row") return NodeFilter.FILTER_REJECT;
      for (let p of n)
        if (v.contains(p)) return NodeFilter.FILTER_SKIP;
      return NodeFilter.FILTER_ACCEPT;
    }, c = document.createTreeWalker(u, NodeFilter.SHOW_ELEMENT, {
      acceptNode: s
    }), d = s(u);
    if (d === NodeFilter.FILTER_ACCEPT && r(u), d !== NodeFilter.FILTER_REJECT) {
      let v = c.nextNode();
      for (; v != null; )
        r(v), v = c.nextNode();
    }
  }, r = (u) => {
    var s;
    let c = (s = Vn.get(u)) !== null && s !== void 0 ? s : 0;
    u.getAttribute("aria-hidden") === "true" && c === 0 || (c === 0 && u.setAttribute("aria-hidden", "true"), i.add(u), Vn.set(u, c + 1));
  };
  tt.length && tt[tt.length - 1].disconnect(), l(e);
  let o = new MutationObserver((u) => {
    for (let s of u)
      if (!(s.type !== "childList" || s.addedNodes.length === 0) && ![
        ...n,
        ...i
      ].some((c) => c.contains(s.target))) {
        for (let c of s.removedNodes) c instanceof Element && (n.delete(c), i.delete(c));
        for (let c of s.addedNodes)
          (c instanceof HTMLElement || c instanceof SVGElement) && (c.dataset.liveAnnouncer === "true" || c.dataset.reactAriaTopLayer === "true") ? n.add(c) : c instanceof Element && l(c);
      }
  });
  o.observe(e, {
    childList: !0,
    subtree: !0
  });
  let a = {
    visibleNodes: n,
    hiddenNodes: i,
    observe() {
      o.observe(e, {
        childList: !0,
        subtree: !0
      });
    },
    disconnect() {
      o.disconnect();
    }
  };
  return tt.push(a), () => {
    o.disconnect();
    for (let u of i) {
      let s = Vn.get(u);
      s != null && (s === 1 ? (u.removeAttribute("aria-hidden"), Vn.delete(u)) : Vn.set(u, s - 1));
    }
    a === tt[tt.length - 1] ? (tt.pop(), tt.length && tt[tt.length - 1].observe()) : tt.splice(tt.indexOf(a), 1);
  };
}
function sb(t) {
  let e = tt[tt.length - 1];
  if (e && !e.visibleNodes.has(t))
    return e.visibleNodes.add(t), () => {
      e.visibleNodes.delete(t);
    };
}
function cb(t, e) {
  let { triggerRef: n, popoverRef: i, groupRef: l, isNonModal: r, isKeyboardDismissDisabled: o, shouldCloseOnInteractOutside: a, ...u } = t, s = u.trigger === "SubmenuTrigger", { overlayProps: c, underlayProps: d } = Wu({
    isOpen: e.isOpen,
    onClose: e.close,
    shouldCloseOnBlur: !0,
    isDismissable: !r || s,
    isKeyboardDismissDisabled: o,
    shouldCloseOnInteractOutside: a
  }, l ?? i), { overlayProps: v, arrowProps: p, placement: h } = Q0({
    ...u,
    targetRef: n,
    overlayRef: i,
    isOpen: e.isOpen,
    onClose: r && !s ? e.close : null
  });
  return _u({
    isDisabled: r || !e.isOpen
  }), de(() => {
    if (e.isOpen && i.current) {
      var m, g;
      return r ? sb((m = l == null ? void 0 : l.current) !== null && m !== void 0 ? m : i.current) : wr([
        (g = l == null ? void 0 : l.current) !== null && g !== void 0 ? g : i.current
      ]);
    }
  }, [
    r,
    e.isOpen,
    i,
    l
  ]), {
    popoverProps: V(c, v),
    arrowProps: p,
    underlayProps: d,
    placement: h
  };
}
const Ts = /* @__PURE__ */ $.createContext(null);
function Ql(t) {
  let e = Mt(), { portalContainer: n = e ? null : document.body, isExiting: i } = t, [l, r] = Y(!1), o = U(() => ({
    contain: l,
    setContain: r
  }), [
    l,
    r
  ]), { getContainer: a } = ab();
  if (!t.portalContainer && a && (n = a()), !n) return null;
  let u = t.children;
  return t.disableFocusManagement || (u = /* @__PURE__ */ $.createElement(rl, {
    restoreFocus: !0,
    contain: (t.shouldContainFocus || l) && !i
  }, u)), u = /* @__PURE__ */ $.createElement(Ts.Provider, {
    value: o
  }, /* @__PURE__ */ $.createElement(Oh, null, u)), /* @__PURE__ */ bv.createPortal(u, n);
}
function Bs() {
  let t = z(Ts), e = t == null ? void 0 : t.setContain;
  de(() => {
    e == null || e(!0);
  }, [
    e
  ]);
}
function db(t, e, n) {
  let { overlayProps: i, underlayProps: l } = Wu({
    ...t,
    isOpen: e.isOpen,
    onClose: e.close
  }, n);
  return _u({
    isDisabled: !e.isOpen
  }), Bs(), Z(() => {
    if (e.isOpen && n.current) return wr([
      n.current
    ]);
  }, [
    e.isOpen,
    n
  ]), {
    modalProps: V(i),
    underlayProps: l
  };
}
const ul = /* @__PURE__ */ new WeakMap();
function fb(t) {
  return typeof t == "string" ? t.replace(/\s*/g, "") : "" + t;
}
function As(t, e) {
  let n = ul.get(t);
  if (!n) throw new Error("Unknown list");
  return `${n.id}-option-${fb(e)}`;
}
function er(t) {
  return Fi() ? t.altKey : t.ctrlKey;
}
function Ii(t, e) {
  var n, i;
  let l = `[data-key="${CSS.escape(String(e))}"]`, r = (n = t.current) === null || n === void 0 ? void 0 : n.dataset.collection;
  return r && (l = `[data-collection="${CSS.escape(r)}"]${l}`), (i = t.current) === null || i === void 0 ? void 0 : i.querySelector(l);
}
const Fs = /* @__PURE__ */ new WeakMap();
function pb(t) {
  let e = Pe();
  return Fs.set(t, e), e;
}
function vb(t) {
  return Fs.get(t);
}
const hb = 1e3;
function Ks(t) {
  let { keyboardDelegate: e, selectionManager: n, onTypeSelect: i } = t, l = L({
    search: "",
    timeout: void 0
  }).current, r = (o) => {
    let a = bb(o.key);
    if (!(!a || o.ctrlKey || o.metaKey || !o.currentTarget.contains(o.target))) {
      if (a === " " && l.search.trim().length > 0 && (o.preventDefault(), "continuePropagation" in o || o.stopPropagation()), l.search += a, e.getKeyForSearch != null) {
        let u = e.getKeyForSearch(l.search, n.focusedKey);
        u == null && (u = e.getKeyForSearch(l.search)), u != null && (n.setFocusedKey(u), i && i(u));
      }
      clearTimeout(l.timeout), l.timeout = setTimeout(() => {
        l.search = "";
      }, hb);
    }
  };
  return {
    typeSelectProps: {
      // Using a capturing listener to catch the keydown event before
      // other hooks in order to handle the Spacebar event.
      onKeyDownCapture: e.getKeyForSearch ? r : void 0
    }
  };
}
function bb(t) {
  return t.length === 1 || !/^[A-Z]/i.test(t) ? t : "";
}
function sl(t) {
  let { selectionManager: e, keyboardDelegate: n, ref: i, autoFocus: l = !1, shouldFocusWrap: r = !1, disallowEmptySelection: o = !1, disallowSelectAll: a = !1, escapeKeyBehavior: u = "clearSelection", selectOnFocus: s = e.selectionBehavior === "replace", disallowTypeAhead: c = !1, shouldUseVirtualFocus: d, allowsTabNavigation: v = !1, isVirtualized: p, scrollRef: h = i, linkBehavior: m = "action" } = t, { direction: g } = We(), b = un(), E = (S) => {
    var w;
    if (S.altKey && S.key === "Tab" && S.preventDefault(), !(!((w = i.current) === null || w === void 0) && w.contains(S.target))) return;
    const W = (G, ae) => {
      if (G != null) {
        if (e.isLink(G) && m === "selection" && s && !er(S)) {
          Xi(() => {
            e.setFocusedKey(G, ae);
          });
          let Ae = Ii(i, G), oe = e.getItemProps(G);
          Ae && b.open(Ae, S, oe.href, oe.routerOptions);
          return;
        }
        if (e.setFocusedKey(G, ae), e.isLink(G) && m === "override") return;
        S.shiftKey && e.selectionMode === "multiple" ? e.extendSelection(G) : s && !er(S) && e.replaceSelection(G);
      }
    };
    switch (S.key) {
      case "ArrowDown":
        if (n.getKeyBelow) {
          var J, N, Q;
          let G = e.focusedKey != null ? (J = n.getKeyBelow) === null || J === void 0 ? void 0 : J.call(n, e.focusedKey) : (N = n.getFirstKey) === null || N === void 0 ? void 0 : N.call(n);
          G == null && r && (G = (Q = n.getFirstKey) === null || Q === void 0 ? void 0 : Q.call(n, e.focusedKey)), G != null && (S.preventDefault(), W(G));
        }
        break;
      case "ArrowUp":
        if (n.getKeyAbove) {
          var te, ue, we;
          let G = e.focusedKey != null ? (te = n.getKeyAbove) === null || te === void 0 ? void 0 : te.call(n, e.focusedKey) : (ue = n.getLastKey) === null || ue === void 0 ? void 0 : ue.call(n);
          G == null && r && (G = (we = n.getLastKey) === null || we === void 0 ? void 0 : we.call(n, e.focusedKey)), G != null && (S.preventDefault(), W(G));
        }
        break;
      case "ArrowLeft":
        if (n.getKeyLeftOf) {
          var De, ke, Le;
          let G = e.focusedKey != null ? (De = n.getKeyLeftOf) === null || De === void 0 ? void 0 : De.call(n, e.focusedKey) : null;
          G == null && r && (G = g === "rtl" ? (ke = n.getFirstKey) === null || ke === void 0 ? void 0 : ke.call(n, e.focusedKey) : (Le = n.getLastKey) === null || Le === void 0 ? void 0 : Le.call(n, e.focusedKey)), G != null && (S.preventDefault(), W(G, g === "rtl" ? "first" : "last"));
        }
        break;
      case "ArrowRight":
        if (n.getKeyRightOf) {
          var Ve, Ge, ie;
          let G = e.focusedKey != null ? (Ve = n.getKeyRightOf) === null || Ve === void 0 ? void 0 : Ve.call(n, e.focusedKey) : null;
          G == null && r && (G = g === "rtl" ? (Ge = n.getLastKey) === null || Ge === void 0 ? void 0 : Ge.call(n, e.focusedKey) : (ie = n.getFirstKey) === null || ie === void 0 ? void 0 : ie.call(n, e.focusedKey)), G != null && (S.preventDefault(), W(G, g === "rtl" ? "last" : "first"));
        }
        break;
      case "Home":
        if (n.getFirstKey) {
          if (e.focusedKey === null && S.shiftKey) return;
          S.preventDefault();
          let G = n.getFirstKey(e.focusedKey, xn(S));
          e.setFocusedKey(G), G != null && (xn(S) && S.shiftKey && e.selectionMode === "multiple" ? e.extendSelection(G) : s && e.replaceSelection(G));
        }
        break;
      case "End":
        if (n.getLastKey) {
          if (e.focusedKey === null && S.shiftKey) return;
          S.preventDefault();
          let G = n.getLastKey(e.focusedKey, xn(S));
          e.setFocusedKey(G), G != null && (xn(S) && S.shiftKey && e.selectionMode === "multiple" ? e.extendSelection(G) : s && e.replaceSelection(G));
        }
        break;
      case "PageDown":
        if (n.getKeyPageBelow && e.focusedKey != null) {
          let G = n.getKeyPageBelow(e.focusedKey);
          G != null && (S.preventDefault(), W(G));
        }
        break;
      case "PageUp":
        if (n.getKeyPageAbove && e.focusedKey != null) {
          let G = n.getKeyPageAbove(e.focusedKey);
          G != null && (S.preventDefault(), W(G));
        }
        break;
      case "a":
        xn(S) && e.selectionMode === "multiple" && a !== !0 && (S.preventDefault(), e.selectAll());
        break;
      case "Escape":
        u === "clearSelection" && !o && e.selectedKeys.size !== 0 && (S.stopPropagation(), S.preventDefault(), e.clearSelection());
        break;
      case "Tab":
        if (!v) {
          if (S.shiftKey) i.current.focus();
          else {
            let G = Xe(i.current, {
              tabbable: !0
            }), ae, Ae;
            do
              Ae = G.lastChild(), Ae && (ae = Ae);
            while (Ae);
            ae && !ae.contains(document.activeElement) && st(ae);
          }
          break;
        }
    }
  }, D = L({
    top: 0,
    left: 0
  });
  Gn(h, "scroll", p ? void 0 : () => {
    var S, w, W, J;
    D.current = {
      top: (W = (S = h.current) === null || S === void 0 ? void 0 : S.scrollTop) !== null && W !== void 0 ? W : 0,
      left: (J = (w = h.current) === null || w === void 0 ? void 0 : w.scrollLeft) !== null && J !== void 0 ? J : 0
    };
  });
  let k = (S) => {
    if (e.isFocused) {
      S.currentTarget.contains(S.target) || e.setFocused(!1);
      return;
    }
    if (S.currentTarget.contains(S.target)) {
      if (e.setFocused(!0), e.focusedKey == null) {
        var w, W;
        let Q = (ue) => {
          ue != null && (e.setFocusedKey(ue), s && !e.isSelected(ue) && e.replaceSelection(ue));
        }, te = S.relatedTarget;
        var J, N;
        te && S.currentTarget.compareDocumentPosition(te) & Node.DOCUMENT_POSITION_FOLLOWING ? Q((J = e.lastSelectedKey) !== null && J !== void 0 ? J : (w = n.getLastKey) === null || w === void 0 ? void 0 : w.call(n)) : Q((N = e.firstSelectedKey) !== null && N !== void 0 ? N : (W = n.getFirstKey) === null || W === void 0 ? void 0 : W.call(n));
      } else !p && h.current && (h.current.scrollTop = D.current.top, h.current.scrollLeft = D.current.left);
      if (e.focusedKey != null && h.current) {
        let Q = Ii(i, e.focusedKey);
        Q instanceof HTMLElement && (!Q.contains(document.activeElement) && !d && st(Q), Hi() === "keyboard" && nt(Q, {
          containingElement: i.current
        }));
      }
    }
  }, P = (S) => {
    S.currentTarget.contains(S.relatedTarget) || e.setFocused(!1);
  }, T = L(!1);
  Gn(i, bh, d ? (S) => {
    let { detail: w } = S;
    S.stopPropagation(), e.setFocused(!0), (w == null ? void 0 : w.focusStrategy) === "first" && (T.current = !0);
  } : void 0);
  let M = Be(() => {
    var S, w;
    let W = (w = (S = n.getFirstKey) === null || S === void 0 ? void 0 : S.call(n)) !== null && w !== void 0 ? w : null;
    W == null ? (Qa(i.current), e.collection.size > 0 && (T.current = !1)) : (e.setFocusedKey(W), T.current = !1);
  });
  $o(() => {
    T.current && M();
  }, [
    e.collection,
    M
  ]);
  let F = Be(() => {
    e.collection.size > 0 && (T.current = !1);
  });
  $o(() => {
    F();
  }, [
    e.focusedKey,
    F
  ]), Gn(i, hh, d ? (S) => {
    var w;
    S.stopPropagation(), e.setFocused(!1), !((w = S.detail) === null || w === void 0) && w.clearFocusKey && e.setFocusedKey(null);
  } : void 0);
  const H = L(l), K = L(!1);
  Z(() => {
    if (H.current) {
      var S, w;
      let N = null;
      var W;
      l === "first" && (N = (W = (S = n.getFirstKey) === null || S === void 0 ? void 0 : S.call(n)) !== null && W !== void 0 ? W : null);
      var J;
      l === "last" && (N = (J = (w = n.getLastKey) === null || w === void 0 ? void 0 : w.call(n)) !== null && J !== void 0 ? J : null);
      let Q = e.selectedKeys;
      if (Q.size) {
        for (let te of Q) if (e.canSelectItem(te)) {
          N = te;
          break;
        }
      }
      e.setFocused(!0), e.setFocusedKey(N), N == null && !d && i.current && Te(i.current), e.collection.size > 0 && (H.current = !1, K.current = !0);
    }
  });
  let y = L(e.focusedKey), R = L(null);
  Z(() => {
    if (e.isFocused && e.focusedKey != null && (e.focusedKey !== y.current || K.current) && h.current && i.current) {
      let S = Hi(), w = Ii(i, e.focusedKey);
      if (!(w instanceof HTMLElement))
        return;
      (S === "keyboard" || K.current) && (R.current && cancelAnimationFrame(R.current), R.current = requestAnimationFrame(() => {
        h.current && (ka(h.current, w), S !== "virtual" && nt(w, {
          containingElement: i.current
        }));
      }));
    }
    !d && e.isFocused && e.focusedKey == null && y.current != null && i.current && Te(i.current), y.current = e.focusedKey, K.current = !1;
  }), Z(() => () => {
    R.current && cancelAnimationFrame(R.current);
  }, []), Gn(i, "react-aria-focus-scope-restore", (S) => {
    S.preventDefault(), e.setFocused(!0);
  });
  let A = {
    onKeyDown: E,
    onFocus: k,
    onBlur: P,
    onMouseDown(S) {
      h.current === S.target && S.preventDefault();
    }
  }, { typeSelectProps: B } = Ks({
    keyboardDelegate: n,
    selectionManager: e
  });
  c || (A = V(B, A));
  let j;
  d || (j = e.focusedKey == null ? 0 : -1);
  let x = pb(e.collection);
  return {
    collectionProps: V(A, {
      tabIndex: j,
      "data-collection": x
    })
  };
}
function Nn(t) {
  let { id: e, selectionManager: n, key: i, ref: l, shouldSelectOnPressUp: r, shouldUseVirtualFocus: o, focus: a, isDisabled: u, onAction: s, allowsDifferentPressOrigin: c, linkBehavior: d = "action" } = t, v = un();
  e = Pe(e);
  let p = (w) => {
    if (w.pointerType === "keyboard" && er(w)) n.toggleSelection(i);
    else {
      if (n.selectionMode === "none") return;
      if (n.isLink(i)) {
        if (d === "selection" && l.current) {
          let W = n.getItemProps(i);
          v.open(l.current, w, W.href, W.routerOptions), n.setSelectedKeys(n.selectedKeys);
          return;
        } else if (d === "override" || d === "none") return;
      }
      n.selectionMode === "single" ? n.isSelected(i) && !n.disallowEmptySelection ? n.toggleSelection(i) : n.replaceSelection(i) : w && w.shiftKey ? n.extendSelection(i) : n.selectionBehavior === "toggle" || w && (xn(w) || w.pointerType === "touch" || w.pointerType === "virtual") ? n.toggleSelection(i) : n.replaceSelection(i);
    }
  };
  Z(() => {
    i === n.focusedKey && n.isFocused && (o ? Qa(l.current) : a ? a() : document.activeElement !== l.current && l.current && Te(l.current));
  }, [
    l,
    i,
    n.focusedKey,
    n.childFocusStrategy,
    n.isFocused,
    o
  ]), u = u || n.isDisabled(i);
  let h = {};
  !o && !u ? h = {
    tabIndex: i === n.focusedKey ? 0 : -1,
    onFocus(w) {
      w.target === l.current && n.setFocusedKey(i);
    }
  } : u && (h.onMouseDown = (w) => {
    w.preventDefault();
  });
  let m = n.isLink(i) && d === "override", g = n.isLink(i) && d !== "selection" && d !== "none", b = !u && n.canSelectItem(i) && !m, E = (s || g) && !u, D = E && (n.selectionBehavior === "replace" ? !b : !b || n.isEmpty), k = E && b && n.selectionBehavior === "replace", P = D || k, T = L(null), M = P && b, F = L(!1), H = L(!1), K = (w) => {
    if (s && s(), g && l.current) {
      let W = n.getItemProps(i);
      v.open(l.current, w, W.href, W.routerOptions);
    }
  }, y = {
    ref: l
  };
  r ? (y.onPressStart = (w) => {
    T.current = w.pointerType, F.current = M, w.pointerType === "keyboard" && (!P || ia()) && p(w);
  }, c ? (y.onPressUp = D ? void 0 : (w) => {
    w.pointerType === "mouse" && b && p(w);
  }, y.onPress = D ? K : (w) => {
    w.pointerType !== "keyboard" && w.pointerType !== "mouse" && b && p(w);
  }) : y.onPress = (w) => {
    if (D || k && w.pointerType !== "mouse") {
      if (w.pointerType === "keyboard" && !na()) return;
      K(w);
    } else w.pointerType !== "keyboard" && b && p(w);
  }) : (y.onPressStart = (w) => {
    T.current = w.pointerType, F.current = M, H.current = D, b && (w.pointerType === "mouse" && !D || w.pointerType === "keyboard" && (!E || ia())) && p(w);
  }, y.onPress = (w) => {
    (w.pointerType === "touch" || w.pointerType === "pen" || w.pointerType === "virtual" || w.pointerType === "keyboard" && P && na() || w.pointerType === "mouse" && H.current) && (P ? K(w) : b && p(w));
  }), h["data-collection"] = vb(n.collection), h["data-key"] = i, y.preventFocusOnPress = o, o && (y = V(y, {
    onPressStart(w) {
      w.pointerType !== "touch" && (n.setFocused(!0), n.setFocusedKey(i));
    },
    onPress(w) {
      w.pointerType === "touch" && (n.setFocused(!0), n.setFocusedKey(i));
    }
  }));
  let { pressProps: R, isPressed: A } = bt(y), B = k ? (w) => {
    T.current === "mouse" && (w.stopPropagation(), w.preventDefault(), K(w));
  } : void 0, { longPressProps: j } = Ua({
    isDisabled: !M,
    onLongPress(w) {
      w.pointerType === "touch" && (p(w), n.setSelectionBehavior("toggle"));
    }
  }), x = (w) => {
    T.current === "touch" && F.current && w.preventDefault();
  }, S = n.isLink(i) ? (w) => {
    rn.isOpening || w.preventDefault();
  } : void 0;
  return {
    itemProps: V(
      h,
      b || D || o && !u ? R : {},
      M ? j : {},
      {
        onDoubleClick: B,
        onDragStartCapture: x,
        onClick: S,
        id: e
      },
      // Prevent DOM focus from moving on mouse down when using virtual focus
      o ? {
        onMouseDown: (w) => w.preventDefault()
      } : void 0
    ),
    isPressed: A,
    isSelected: n.isSelected(i),
    isFocused: n.isFocused && n.focusedKey === i,
    isDisabled: u,
    allowsSelection: b,
    hasAction: P
  };
}
function na() {
  let t = window.event;
  return (t == null ? void 0 : t.key) === "Enter";
}
function ia() {
  let t = window.event;
  return (t == null ? void 0 : t.key) === " " || (t == null ? void 0 : t.code) === "Space";
}
class tr {
  getItemRect(e) {
    let n = this.ref.current;
    if (!n) return null;
    let i = e != null ? Ii(this.ref, e) : null;
    if (!i) return null;
    let l = n.getBoundingClientRect(), r = i.getBoundingClientRect();
    return {
      x: r.left - l.left + n.scrollLeft,
      y: r.top - l.top + n.scrollTop,
      width: r.width,
      height: r.height
    };
  }
  getContentSize() {
    let e = this.ref.current;
    var n, i;
    return {
      width: (n = e == null ? void 0 : e.scrollWidth) !== null && n !== void 0 ? n : 0,
      height: (i = e == null ? void 0 : e.scrollHeight) !== null && i !== void 0 ? i : 0
    };
  }
  getVisibleRect() {
    let e = this.ref.current;
    var n, i, l, r;
    return {
      x: (n = e == null ? void 0 : e.scrollLeft) !== null && n !== void 0 ? n : 0,
      y: (i = e == null ? void 0 : e.scrollTop) !== null && i !== void 0 ? i : 0,
      width: (l = e == null ? void 0 : e.offsetWidth) !== null && l !== void 0 ? l : 0,
      height: (r = e == null ? void 0 : e.offsetHeight) !== null && r !== void 0 ? r : 0
    };
  }
  constructor(e) {
    this.ref = e;
  }
}
class In {
  isDisabled(e) {
    var n;
    return this.disabledBehavior === "all" && (((n = e.props) === null || n === void 0 ? void 0 : n.isDisabled) || this.disabledKeys.has(e.key));
  }
  findNextNonDisabled(e, n) {
    let i = e;
    for (; i != null; ) {
      let l = this.collection.getItem(i);
      if ((l == null ? void 0 : l.type) === "item" && !this.isDisabled(l)) return i;
      i = n(i);
    }
    return null;
  }
  getNextKey(e) {
    let n = e;
    return n = this.collection.getKeyAfter(n), this.findNextNonDisabled(n, (i) => this.collection.getKeyAfter(i));
  }
  getPreviousKey(e) {
    let n = e;
    return n = this.collection.getKeyBefore(n), this.findNextNonDisabled(n, (i) => this.collection.getKeyBefore(i));
  }
  findKey(e, n, i) {
    let l = e, r = this.layoutDelegate.getItemRect(l);
    if (!r || l == null) return null;
    let o = r;
    do {
      if (l = n(l), l == null) break;
      r = this.layoutDelegate.getItemRect(l);
    } while (r && i(o, r) && l != null);
    return l;
  }
  isSameRow(e, n) {
    return e.y === n.y || e.x !== n.x;
  }
  isSameColumn(e, n) {
    return e.x === n.x || e.y !== n.y;
  }
  getKeyBelow(e) {
    return this.layout === "grid" && this.orientation === "vertical" ? this.findKey(e, (n) => this.getNextKey(n), this.isSameRow) : this.getNextKey(e);
  }
  getKeyAbove(e) {
    return this.layout === "grid" && this.orientation === "vertical" ? this.findKey(e, (n) => this.getPreviousKey(n), this.isSameRow) : this.getPreviousKey(e);
  }
  getNextColumn(e, n) {
    return n ? this.getPreviousKey(e) : this.getNextKey(e);
  }
  getKeyRightOf(e) {
    let n = this.direction === "ltr" ? "getKeyRightOf" : "getKeyLeftOf";
    return this.layoutDelegate[n] ? (e = this.layoutDelegate[n](e), this.findNextNonDisabled(e, (i) => this.layoutDelegate[n](i))) : this.layout === "grid" ? this.orientation === "vertical" ? this.getNextColumn(e, this.direction === "rtl") : this.findKey(e, (i) => this.getNextColumn(i, this.direction === "rtl"), this.isSameColumn) : this.orientation === "horizontal" ? this.getNextColumn(e, this.direction === "rtl") : null;
  }
  getKeyLeftOf(e) {
    let n = this.direction === "ltr" ? "getKeyLeftOf" : "getKeyRightOf";
    return this.layoutDelegate[n] ? (e = this.layoutDelegate[n](e), this.findNextNonDisabled(e, (i) => this.layoutDelegate[n](i))) : this.layout === "grid" ? this.orientation === "vertical" ? this.getNextColumn(e, this.direction === "ltr") : this.findKey(e, (i) => this.getNextColumn(i, this.direction === "ltr"), this.isSameColumn) : this.orientation === "horizontal" ? this.getNextColumn(e, this.direction === "ltr") : null;
  }
  getFirstKey() {
    let e = this.collection.getFirstKey();
    return this.findNextNonDisabled(e, (n) => this.collection.getKeyAfter(n));
  }
  getLastKey() {
    let e = this.collection.getLastKey();
    return this.findNextNonDisabled(e, (n) => this.collection.getKeyBefore(n));
  }
  getKeyPageAbove(e) {
    let n = this.ref.current, i = this.layoutDelegate.getItemRect(e);
    if (!i) return null;
    if (n && !Qn(n)) return this.getFirstKey();
    let l = e;
    if (this.orientation === "horizontal") {
      let r = Math.max(0, i.x + i.width - this.layoutDelegate.getVisibleRect().width);
      for (; i && i.x > r && l != null; )
        l = this.getKeyAbove(l), i = l == null ? null : this.layoutDelegate.getItemRect(l);
    } else {
      let r = Math.max(0, i.y + i.height - this.layoutDelegate.getVisibleRect().height);
      for (; i && i.y > r && l != null; )
        l = this.getKeyAbove(l), i = l == null ? null : this.layoutDelegate.getItemRect(l);
    }
    return l ?? this.getFirstKey();
  }
  getKeyPageBelow(e) {
    let n = this.ref.current, i = this.layoutDelegate.getItemRect(e);
    if (!i) return null;
    if (n && !Qn(n)) return this.getLastKey();
    let l = e;
    if (this.orientation === "horizontal") {
      let r = Math.min(this.layoutDelegate.getContentSize().width, i.y - i.width + this.layoutDelegate.getVisibleRect().width);
      for (; i && i.x < r && l != null; )
        l = this.getKeyBelow(l), i = l == null ? null : this.layoutDelegate.getItemRect(l);
    } else {
      let r = Math.min(this.layoutDelegate.getContentSize().height, i.y - i.height + this.layoutDelegate.getVisibleRect().height);
      for (; i && i.y < r && l != null; )
        l = this.getKeyBelow(l), i = l == null ? null : this.layoutDelegate.getItemRect(l);
    }
    return l ?? this.getLastKey();
  }
  getKeyForSearch(e, n) {
    if (!this.collator) return null;
    let i = this.collection, l = n || this.getFirstKey();
    for (; l != null; ) {
      let r = i.getItem(l);
      if (!r) return null;
      let o = r.textValue.slice(0, e.length);
      if (r.textValue && this.collator.compare(o, e) === 0) return l;
      l = this.getNextKey(l);
    }
    return null;
  }
  constructor(...e) {
    if (e.length === 1) {
      let n = e[0];
      this.collection = n.collection, this.ref = n.ref, this.collator = n.collator, this.disabledKeys = n.disabledKeys || /* @__PURE__ */ new Set(), this.disabledBehavior = n.disabledBehavior || "all", this.orientation = n.orientation || "vertical", this.direction = n.direction, this.layout = n.layout || "stack", this.layoutDelegate = n.layoutDelegate || new tr(n.ref);
    } else
      this.collection = e[0], this.disabledKeys = e[1], this.ref = e[2], this.collator = e[3], this.layout = "stack", this.orientation = "vertical", this.disabledBehavior = "all", this.layoutDelegate = new tr(this.ref);
    this.layout === "stack" && this.orientation === "vertical" && (this.getKeyLeftOf = void 0, this.getKeyRightOf = void 0);
  }
}
function kr(t) {
  let { selectionManager: e, collection: n, disabledKeys: i, ref: l, keyboardDelegate: r, layoutDelegate: o } = t, a = Kn({
    usage: "search",
    sensitivity: "base"
  }), u = e.disabledBehavior, s = U(() => r || new In({
    collection: n,
    disabledKeys: i,
    disabledBehavior: u,
    ref: l,
    collator: a,
    layoutDelegate: o
  }), [
    r,
    o,
    n,
    i,
    l,
    a,
    u
  ]), { collectionProps: c } = sl({
    ...t,
    ref: l,
    selectionManager: e,
    keyboardDelegate: s
  });
  return {
    listProps: c
  };
}
function mb(t, e, n) {
  let i = ee(t, {
    labelable: !0
  }), l = t.selectionBehavior || "toggle", r = t.linkBehavior || (l === "replace" ? "action" : "override");
  l === "toggle" && r === "action" && (r = "override");
  let { listProps: o } = kr({
    ...t,
    ref: n,
    selectionManager: e.selectionManager,
    collection: e.collection,
    disabledKeys: e.disabledKeys,
    linkBehavior: r
  }), { focusWithinProps: a } = cn({
    onFocusWithin: t.onFocus,
    onBlurWithin: t.onBlur,
    onFocusWithinChange: t.onFocusChange
  }), u = Pe(t.id);
  ul.set(e, {
    id: u,
    shouldUseVirtualFocus: t.shouldUseVirtualFocus,
    shouldSelectOnPressUp: t.shouldSelectOnPressUp,
    shouldFocusOnHover: t.shouldFocusOnHover,
    isVirtualized: t.isVirtualized,
    onAction: t.onAction,
    linkBehavior: r
  });
  let { labelProps: s, fieldProps: c } = al({
    ...t,
    id: u,
    // listbox is not an HTML input element so it
    // shouldn't be labeled by a <label> element.
    labelElementType: "span"
  });
  return {
    labelProps: s,
    listBoxProps: V(i, a, e.selectionManager.selectionMode === "multiple" ? {
      "aria-multiselectable": "true"
    } : {}, {
      role: "listbox",
      ...V(c, o)
    })
  };
}
class gb {
  build(e, n) {
    return this.context = n, la(() => this.iterateCollection(e));
  }
  *iterateCollection(e) {
    let { children: n, items: i } = e;
    if ($.isValidElement(n) && n.type === $.Fragment) yield* this.iterateCollection({
      children: n.props.children,
      items: i
    });
    else if (typeof n == "function") {
      if (!i) throw new Error("props.children was a function but props.items is missing");
      let l = 0;
      for (let r of i)
        yield* this.getFullNode({
          value: r,
          index: l
        }, {
          renderer: n
        }), l++;
    } else {
      let l = [];
      $.Children.forEach(n, (o) => {
        o && l.push(o);
      });
      let r = 0;
      for (let o of l) {
        let a = this.getFullNode({
          element: o,
          index: r
        }, {});
        for (let u of a)
          r++, yield u;
      }
    }
  }
  getKey(e, n, i, l) {
    if (e.key != null) return e.key;
    if (n.type === "cell" && n.key != null) return `${l}${n.key}`;
    let r = n.value;
    if (r != null) {
      var o;
      let a = (o = r.key) !== null && o !== void 0 ? o : r.id;
      if (a == null) throw new Error("No key found for item");
      return a;
    }
    return l ? `${l}.${n.index}` : `$.${n.index}`;
  }
  getChildState(e, n) {
    return {
      renderer: n.renderer || e.renderer
    };
  }
  *getFullNode(e, n, i, l) {
    if ($.isValidElement(e.element) && e.element.type === $.Fragment) {
      let g = [];
      $.Children.forEach(e.element.props.children, (E) => {
        g.push(E);
      });
      var r;
      let b = (r = e.index) !== null && r !== void 0 ? r : 0;
      for (const E of g) yield* this.getFullNode({
        element: E,
        index: b++
      }, n, i, l);
      return;
    }
    let o = e.element;
    if (!o && e.value && n && n.renderer) {
      let g = this.cache.get(e.value);
      if (g && (!g.shouldInvalidate || !g.shouldInvalidate(this.context))) {
        g.index = e.index, g.parentKey = l ? l.key : null, yield g;
        return;
      }
      o = n.renderer(e.value);
    }
    if ($.isValidElement(o)) {
      let g = o.type;
      if (typeof g != "function" && typeof g.getCollectionNode != "function") {
        let k = o.type;
        throw new Error(`Unknown element <${k}> in collection.`);
      }
      let b = g.getCollectionNode(o.props, this.context);
      var a;
      let E = (a = e.index) !== null && a !== void 0 ? a : 0, D = b.next();
      for (; !D.done && D.value; ) {
        let k = D.value;
        e.index = E;
        var u;
        let P = (u = k.key) !== null && u !== void 0 ? u : null;
        P == null && (P = k.element ? null : this.getKey(o, e, n, i));
        let M = [
          ...this.getFullNode({
            ...k,
            key: P,
            index: E,
            wrapper: $b(e.wrapper, k.wrapper)
          }, this.getChildState(n, k), i ? `${i}${o.key}` : o.key, l)
        ];
        for (let F of M) {
          var s, c;
          F.value = (c = (s = k.value) !== null && s !== void 0 ? s : e.value) !== null && c !== void 0 ? c : null, F.value && this.cache.set(F.value, F);
          var d;
          if (e.type && F.type !== e.type) throw new Error(`Unsupported type <${Fl(F.type)}> in <${Fl((d = l == null ? void 0 : l.type) !== null && d !== void 0 ? d : "unknown parent type")}>. Only <${Fl(e.type)}> is supported.`);
          E++, yield F;
        }
        D = b.next(M);
      }
      return;
    }
    if (e.key == null || e.type == null) return;
    let v = this;
    var p, h;
    let m = {
      type: e.type,
      props: e.props,
      key: e.key,
      parentKey: l ? l.key : null,
      value: (p = e.value) !== null && p !== void 0 ? p : null,
      level: l ? l.level + 1 : 0,
      index: e.index,
      rendered: e.rendered,
      textValue: (h = e.textValue) !== null && h !== void 0 ? h : "",
      "aria-label": e["aria-label"],
      wrapper: e.wrapper,
      shouldInvalidate: e.shouldInvalidate,
      hasChildNodes: e.hasChildNodes || !1,
      childNodes: la(function* () {
        if (!e.hasChildNodes || !e.childNodes) return;
        let g = 0;
        for (let b of e.childNodes()) {
          b.key != null && (b.key = `${m.key}${b.key}`);
          let E = v.getFullNode({
            ...b,
            index: g
          }, v.getChildState(n, b), m.key, m);
          for (let D of E)
            g++, yield D;
        }
      })
    };
    yield m;
  }
  constructor() {
    this.cache = /* @__PURE__ */ new WeakMap();
  }
}
function la(t) {
  let e = [], n = null;
  return {
    *[Symbol.iterator]() {
      for (let i of e) yield i;
      n || (n = t());
      for (let i of n)
        e.push(i), yield i;
    }
  };
}
function $b(t, e) {
  if (t && e) return (n) => t(e(n));
  if (t) return t;
  if (e) return e;
}
function Fl(t) {
  return t[0].toUpperCase() + t.slice(1);
}
function Tr(t, e, n) {
  let i = U(() => new gb(), []), { children: l, items: r, collection: o } = t;
  return U(() => {
    if (o) return o;
    let u = i.build({
      children: l,
      items: r
    }, n);
    return e(u);
  }, [
    i,
    l,
    r,
    o,
    n,
    e
  ]);
}
function Oe(t, e) {
  return typeof e.getChildren == "function" ? e.getChildren(t.key) : t.childNodes;
}
function At(t) {
  return Yn(t, 0);
}
function Yn(t, e) {
  if (e < 0) return;
  let n = 0;
  for (let i of t) {
    if (n === e) return i;
    n++;
  }
}
function Kt(t) {
  let e;
  for (let n of t) e = n;
  return e;
}
function Kl(t, e, n) {
  if (e.parentKey === n.parentKey) return e.index - n.index;
  let i = [
    ...ra(t, e),
    e
  ], l = [
    ...ra(t, n),
    n
  ], r = i.slice(0, l.length).findIndex((o, a) => o !== l[a]);
  return r !== -1 ? (e = i[r], n = l[r], e.index - n.index) : i.findIndex((o) => o === n) >= 0 ? 1 : (l.findIndex((o) => o === e) >= 0, -1);
}
function ra(t, e) {
  let n = [], i = e;
  for (; (i == null ? void 0 : i.parentKey) != null; )
    i = t.getItem(i.parentKey), i && n.unshift(i);
  return n;
}
const oa = /* @__PURE__ */ new WeakMap();
function Br(t) {
  let e = oa.get(t);
  if (e != null) return e;
  let n = 0, i = (l) => {
    for (let r of l)
      r.type === "section" ? i(Oe(r, t)) : r.type === "item" && n++;
  };
  return i(t), oa.set(t, n), n;
}
function yb(t, e, n) {
  var i, l;
  let { key: r } = t, o = ul.get(e);
  var a;
  let u = (a = t.isDisabled) !== null && a !== void 0 ? a : e.selectionManager.isDisabled(r);
  var s;
  let c = (s = t.isSelected) !== null && s !== void 0 ? s : e.selectionManager.isSelected(r);
  var d;
  let v = (d = t.shouldSelectOnPressUp) !== null && d !== void 0 ? d : o == null ? void 0 : o.shouldSelectOnPressUp;
  var p;
  let h = (p = t.shouldFocusOnHover) !== null && p !== void 0 ? p : o == null ? void 0 : o.shouldFocusOnHover;
  var m;
  let g = (m = t.shouldUseVirtualFocus) !== null && m !== void 0 ? m : o == null ? void 0 : o.shouldUseVirtualFocus;
  var b;
  let E = (b = t.isVirtualized) !== null && b !== void 0 ? b : o == null ? void 0 : o.isVirtualized, D = Nt(), k = Nt(), P = {
    role: "option",
    "aria-disabled": u || void 0,
    "aria-selected": e.selectionManager.selectionMode !== "none" ? c : void 0
  };
  qt() && sr() || (P["aria-label"] = t["aria-label"], P["aria-labelledby"] = D, P["aria-describedby"] = k);
  let T = e.collection.getItem(r);
  if (E) {
    let S = Number(T == null ? void 0 : T.index);
    P["aria-posinset"] = Number.isNaN(S) ? void 0 : S + 1, P["aria-setsize"] = Br(e.collection);
  }
  let M = o != null && o.onAction ? () => {
    var S;
    return o == null || (S = o.onAction) === null || S === void 0 ? void 0 : S.call(o, r);
  } : void 0, F = As(e, r), { itemProps: H, isPressed: K, isFocused: y, hasAction: R, allowsSelection: A } = Nn({
    selectionManager: e.selectionManager,
    key: r,
    ref: n,
    shouldSelectOnPressUp: v,
    allowsDifferentPressOrigin: v && h,
    isVirtualized: E,
    shouldUseVirtualFocus: g,
    isDisabled: u,
    onAction: M || !(T == null || (i = T.props) === null || i === void 0) && i.onAction ? Dt(T == null || (l = T.props) === null || l === void 0 ? void 0 : l.onAction, M) : void 0,
    linkBehavior: o == null ? void 0 : o.linkBehavior,
    id: F
  }), { hoverProps: B } = He({
    isDisabled: u || !h,
    onHoverStart() {
      Zt() || (e.selectionManager.setFocused(!0), e.selectionManager.setFocusedKey(r));
    }
  }), j = ee(T == null ? void 0 : T.props);
  delete j.id;
  let x = tl(T == null ? void 0 : T.props);
  return {
    optionProps: {
      ...P,
      ...V(j, H, B, x),
      id: F
    },
    labelProps: {
      id: D
    },
    descriptionProps: {
      id: k
    },
    isFocused: y,
    isFocusVisible: y && e.selectionManager.isFocused && Zt(),
    isSelected: c,
    isDisabled: u,
    isPressed: K,
    allowsSelection: A,
    hasAction: R
  };
}
function xb(t) {
  let { heading: e, "aria-label": n } = t, i = Pe();
  return {
    itemProps: {
      role: "presentation"
    },
    headingProps: e ? {
      // Techincally, listbox cannot contain headings according to ARIA.
      // We hide the heading from assistive technology, using role="presentation",
      // and only use it as a visual label for the nested group.
      id: i,
      role: "presentation"
    } : {},
    groupProps: {
      role: "group",
      "aria-label": n,
      "aria-labelledby": e ? i : void 0
    }
  };
}
var Ns = {};
Ns = {
  longPressMessage: "اضغط مطولاً أو اضغط على Alt + السهم لأسفل لفتح القائمة"
};
var Is = {};
Is = {
  longPressMessage: "Натиснете продължително или натиснете Alt+ стрелка надолу, за да отворите менюто"
};
var Ms = {};
Ms = {
  longPressMessage: "Dlouhým stiskem nebo stisknutím kláves Alt + šipka dolů otevřete nabídku"
};
var Rs = {};
Rs = {
  longPressMessage: "Langt tryk eller tryk på Alt + pil ned for at åbne menuen"
};
var Ls = {};
Ls = {
  longPressMessage: "Drücken Sie lange oder drücken Sie Alt + Nach-unten, um das Menü zu öffnen"
};
var js = {};
js = {
  longPressMessage: "Πιέστε παρατεταμένα ή πατήστε Alt + κάτω βέλος για να ανοίξετε το μενού"
};
var zs = {};
zs = {
  longPressMessage: "Long press or press Alt + ArrowDown to open menu"
};
var Os = {};
Os = {
  longPressMessage: "Mantenga pulsado o pulse Alt + flecha abajo para abrir el menú"
};
var Vs = {};
Vs = {
  longPressMessage: "Menüü avamiseks vajutage pikalt või vajutage klahve Alt + allanool"
};
var Hs = {};
Hs = {
  longPressMessage: "Avaa valikko painamalla pohjassa tai näppäinyhdistelmällä Alt + Alanuoli"
};
var Us = {};
Us = {
  longPressMessage: "Appuyez de manière prolongée ou appuyez sur Alt + Flèche vers le bas pour ouvrir le menu."
};
var Ws = {};
Ws = {
  longPressMessage: "לחץ לחיצה ארוכה או הקש Alt + ArrowDown כדי לפתוח את התפריט"
};
var Gs = {};
Gs = {
  longPressMessage: "Dugo pritisnite ili pritisnite Alt + strelicu prema dolje za otvaranje izbornika"
};
var _s = {};
_s = {
  longPressMessage: "Nyomja meg hosszan, vagy nyomja meg az Alt + lefele nyíl gombot a menü megnyitásához"
};
var qs = {};
qs = {
  longPressMessage: "Premere a lungo o premere Alt + Freccia giù per aprire il menu"
};
var Ys = {};
Ys = {
  longPressMessage: "長押しまたは Alt+下矢印キーでメニューを開く"
};
var Zs = {};
Zs = {
  longPressMessage: "길게 누르거나 Alt + 아래쪽 화살표를 눌러 메뉴 열기"
};
var Xs = {};
Xs = {
  longPressMessage: "Norėdami atidaryti meniu, nuspaudę palaikykite arba paspauskite „Alt + ArrowDown“."
};
var Js = {};
Js = {
  longPressMessage: "Lai atvērtu izvēlni, turiet nospiestu vai nospiediet taustiņu kombināciju Alt + lejupvērstā bultiņa"
};
var Qs = {};
Qs = {
  longPressMessage: "Langt trykk eller trykk Alt + PilNed for å åpne menyen"
};
var ec = {};
ec = {
  longPressMessage: "Druk lang op Alt + pijl-omlaag of druk op Alt om het menu te openen"
};
var tc = {};
tc = {
  longPressMessage: "Naciśnij i przytrzymaj lub naciśnij klawisze Alt + Strzałka w dół, aby otworzyć menu"
};
var nc = {};
nc = {
  longPressMessage: "Pressione e segure ou pressione Alt + Seta para baixo para abrir o menu"
};
var ic = {};
ic = {
  longPressMessage: "Prima continuamente ou prima Alt + Seta Para Baixo para abrir o menu"
};
var lc = {};
lc = {
  longPressMessage: "Apăsați lung sau apăsați pe Alt + săgeată în jos pentru a deschide meniul"
};
var rc = {};
rc = {
  longPressMessage: "Нажмите и удерживайте или нажмите Alt + Стрелка вниз, чтобы открыть меню"
};
var oc = {};
oc = {
  longPressMessage: "Ponuku otvoríte dlhým stlačením alebo stlačením klávesu Alt + klávesu so šípkou nadol"
};
var ac = {};
ac = {
  longPressMessage: "Za odprtje menija pritisnite in držite gumb ali pritisnite Alt+puščica navzdol"
};
var uc = {};
uc = {
  longPressMessage: "Dugo pritisnite ili pritisnite Alt + strelicu prema dole da otvorite meni"
};
var sc = {};
sc = {
  longPressMessage: "Håll nedtryckt eller tryck på Alt + pil nedåt för att öppna menyn"
};
var cc = {};
cc = {
  longPressMessage: "Menüyü açmak için uzun basın veya Alt + Aşağı Ok tuşuna basın"
};
var dc = {};
dc = {
  longPressMessage: "Довго або звичайно натисніть комбінацію клавіш Alt і стрілка вниз, щоб відкрити меню"
};
var fc = {};
fc = {
  longPressMessage: "长按或按 Alt + 向下方向键以打开菜单"
};
var pc = {};
pc = {
  longPressMessage: "長按或按 Alt+向下鍵以開啟功能表"
};
var vc = {};
vc = {
  "ar-AE": Ns,
  "bg-BG": Is,
  "cs-CZ": Ms,
  "da-DK": Rs,
  "de-DE": Ls,
  "el-GR": js,
  "en-US": zs,
  "es-ES": Os,
  "et-EE": Vs,
  "fi-FI": Hs,
  "fr-FR": Us,
  "he-IL": Ws,
  "hr-HR": Gs,
  "hu-HU": _s,
  "it-IT": qs,
  "ja-JP": Ys,
  "ko-KR": Zs,
  "lt-LT": Xs,
  "lv-LV": Js,
  "nb-NO": Qs,
  "nl-NL": ec,
  "pl-PL": tc,
  "pt-BR": nc,
  "pt-PT": ic,
  "ro-RO": lc,
  "ru-RU": rc,
  "sk-SK": oc,
  "sl-SI": ac,
  "sr-SP": uc,
  "sv-SE": sc,
  "tr-TR": cc,
  "uk-UA": dc,
  "zh-CN": fc,
  "zh-TW": pc
};
function Eb(t) {
  return t && t.__esModule ? t.default : t;
}
function Ar(t, e, n) {
  let { type: i = "menu", isDisabled: l, trigger: r = "press" } = t, o = Pe(), { triggerProps: a, overlayProps: u } = Gu({
    type: i
  }, e, n), s = (p) => {
    if (!l && !(r === "longPress" && !p.altKey) && n && n.current)
      switch (p.key) {
        case "Enter":
        case " ":
          if (r === "longPress") return;
        // fallthrough
        case "ArrowDown":
          "continuePropagation" in p || p.stopPropagation(), p.preventDefault(), e.toggle("first");
          break;
        case "ArrowUp":
          "continuePropagation" in p || p.stopPropagation(), p.preventDefault(), e.toggle("last");
          break;
        default:
          "continuePropagation" in p && p.continuePropagation();
      }
  }, c = gt(Eb(vc), "@react-aria/menu"), { longPressProps: d } = Ua({
    isDisabled: l || r !== "longPress",
    accessibilityDescription: c.format("longPressMessage"),
    onLongPressStart() {
      e.close();
    },
    onLongPress() {
      e.open("first");
    }
  }), v = {
    preventFocusOnPress: !0,
    onPressStart(p) {
      p.pointerType !== "touch" && p.pointerType !== "keyboard" && !l && (st(p.target), e.open(p.pointerType === "virtual" ? "first" : null));
    },
    onPress(p) {
      p.pointerType === "touch" && !l && (st(p.target), e.toggle());
    }
  };
  return delete a.onPress, {
    // @ts-ignore - TODO we pass out both DOMAttributes AND AriaButtonProps, but useButton will discard the longPress event handlers, it's only through PressResponder magic that this works for RSP and RAC. it does not work in aria examples
    menuTriggerProps: {
      ...a,
      ...r === "press" ? v : d,
      id: o,
      onKeyDown: s
    },
    menuProps: {
      ...u,
      "aria-labelledby": o,
      autoFocus: e.focusStrategy || !0,
      onClose: e.close
    }
  };
}
const hc = /* @__PURE__ */ new WeakMap();
function Cb(t, e, n) {
  let { shouldFocusWrap: i = !0, onKeyDown: l, onKeyUp: r, ...o } = t;
  !t["aria-label"] && !t["aria-labelledby"] && process.env.NODE_ENV !== "production" && console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
  let a = ee(t, {
    labelable: !0
  }), { listProps: u } = kr({
    ...o,
    ref: n,
    selectionManager: e.selectionManager,
    collection: e.collection,
    disabledKeys: e.disabledKeys,
    shouldFocusWrap: i,
    linkBehavior: "override"
  });
  return hc.set(e, {
    onClose: t.onClose,
    onAction: t.onAction,
    shouldUseVirtualFocus: t.shouldUseVirtualFocus
  }), {
    menuProps: V(a, {
      onKeyDown: l,
      onKeyUp: r
    }, {
      role: "menu",
      ...u,
      onKeyDown: (s) => {
        var c;
        (s.key !== "Escape" || t.shouldUseVirtualFocus) && ((c = u.onKeyDown) === null || c === void 0 || c.call(u, s));
      }
    })
  };
}
function Pb(t, e, n) {
  let { id: i, key: l, closeOnSelect: r, isVirtualized: o, "aria-haspopup": a, onPressStart: u, onPressUp: s, onPress: c, onPressChange: d, onPressEnd: v, onHoverStart: p, onHoverChange: h, onHoverEnd: m, onKeyDown: g, onKeyUp: b, onFocus: E, onFocusChange: D, onBlur: k, selectionManager: P = e.selectionManager } = t, T = !!a, M = T && t["aria-expanded"] === "true";
  var F;
  let H = (F = t.isDisabled) !== null && F !== void 0 ? F : P.isDisabled(l);
  var K;
  let y = (K = t.isSelected) !== null && K !== void 0 ? K : P.isSelected(l), R = hc.get(e), A = e.collection.getItem(l), B = t.onClose || R.onClose, j = un(), x = (oe) => {
    var Qe;
    if (!T) {
      if (!(A == null || (Qe = A.props) === null || Qe === void 0) && Qe.onAction ? A.props.onAction() : t.onAction && t.onAction(l), R.onAction) {
        let xt = R.onAction;
        xt(l);
      }
      oe.target instanceof HTMLAnchorElement && A && j.open(oe.target, oe, A.props.href, A.props.routerOptions);
    }
  }, S = "menuitem";
  T || (P.selectionMode === "single" ? S = "menuitemradio" : P.selectionMode === "multiple" && (S = "menuitemcheckbox"));
  let w = Nt(), W = Nt(), J = Nt(), N = {
    id: i,
    "aria-disabled": H || void 0,
    role: S,
    "aria-label": t["aria-label"],
    "aria-labelledby": w,
    "aria-describedby": [
      W,
      J
    ].filter(Boolean).join(" ") || void 0,
    "aria-controls": t["aria-controls"],
    "aria-haspopup": a,
    "aria-expanded": t["aria-expanded"]
  };
  P.selectionMode !== "none" && !T && (N["aria-checked"] = y), o && (N["aria-posinset"] = A == null ? void 0 : A.index, N["aria-setsize"] = Br(e.collection));
  let Q = (oe) => {
    oe.pointerType === "keyboard" && x(oe), u == null || u(oe);
  }, te = () => {
    !T && B && (r ?? (P.selectionMode !== "multiple" || P.isLink(l))) && B();
  }, ue = (oe) => {
    oe.pointerType === "mouse" && (x(oe), te()), s == null || s(oe);
  }, we = (oe) => {
    oe.pointerType !== "keyboard" && oe.pointerType !== "mouse" && (x(oe), te()), c == null || c(oe);
  }, { itemProps: De, isFocused: ke } = Nn({
    id: i,
    selectionManager: P,
    key: l,
    ref: n,
    shouldSelectOnPressUp: !0,
    allowsDifferentPressOrigin: !0,
    // Disable all handling of links in useSelectable item
    // because we handle it ourselves. The behavior of menus
    // is slightly different from other collections because
    // actions are performed on key down rather than key up.
    linkBehavior: "none",
    shouldUseVirtualFocus: R.shouldUseVirtualFocus
  }), { pressProps: Le, isPressed: Ve } = bt({
    onPressStart: Q,
    onPress: we,
    onPressUp: ue,
    onPressChange: d,
    onPressEnd: v,
    isDisabled: H
  }), { hoverProps: Ge } = He({
    isDisabled: H,
    onHoverStart(oe) {
      !Zt() && !(M && a) && (P.setFocused(!0), P.setFocusedKey(l)), p == null || p(oe);
    },
    onHoverChange: h,
    onHoverEnd: m
  }), { keyboardProps: ie } = yr({
    onKeyDown: (oe) => {
      if (oe.repeat) {
        oe.continuePropagation();
        return;
      }
      switch (oe.key) {
        case " ":
          !H && P.selectionMode === "none" && !T && r !== !1 && B && B();
          break;
        case "Enter":
          !H && r !== !1 && !T && B && B();
          break;
        default:
          T || oe.continuePropagation(), g == null || g(oe);
          break;
      }
    },
    onKeyUp: b
  }), { focusProps: G } = $r({
    onBlur: k,
    onFocus: E,
    onFocusChange: D
  }), ae = ee(A == null ? void 0 : A.props);
  delete ae.id;
  let Ae = tl(A == null ? void 0 : A.props);
  return {
    menuItemProps: {
      ...N,
      ...V(
        ae,
        Ae,
        T ? {
          onFocus: De.onFocus,
          "data-collection": De["data-collection"],
          "data-key": De["data-key"]
        } : De,
        Le,
        Ge,
        ie,
        G,
        // Prevent DOM focus from moving on mouse down when using virtual focus or this is a submenu/subdialog trigger.
        R.shouldUseVirtualFocus || T ? {
          onMouseDown: (oe) => oe.preventDefault()
        } : void 0
      ),
      // If a submenu is expanded, set the tabIndex to -1 so that shift tabbing goes out of the menu instead of the parent menu item.
      tabIndex: De.tabIndex != null && M && !R.shouldUseVirtualFocus ? -1 : De.tabIndex
    },
    labelProps: {
      id: w
    },
    descriptionProps: {
      id: W
    },
    keyboardShortcutProps: {
      id: J
    },
    isFocused: ke,
    isFocusVisible: ke && P.isFocused && Zt() && !M,
    isSelected: y,
    isPressed: Ve,
    isDisabled: H
  };
}
function Db(t) {
  let { heading: e, "aria-label": n } = t, i = Pe();
  return {
    itemProps: {
      role: "presentation"
    },
    headingProps: e ? {
      // Techincally, menus cannot contain headings according to ARIA.
      // We hide the heading from assistive technology, using role="presentation",
      // and only use it as a label for the nested group.
      id: i,
      role: "presentation"
    } : {},
    groupProps: {
      role: "group",
      "aria-label": n,
      "aria-labelledby": e ? i : void 0
    }
  };
}
function Sb(t) {
  return t && t.__esModule ? t.default : t;
}
function wb(t, e) {
  let { buttonRef: n, popoverRef: i, inputRef: l, listBoxRef: r, keyboardDelegate: o, layoutDelegate: a, shouldFocusWrap: u, isReadOnly: s, isDisabled: c } = t, d = L(null);
  n = n ?? d;
  let v = gt(Sb(Vu), "@react-aria/combobox"), { menuTriggerProps: p, menuProps: h } = Ar({
    type: "listbox",
    isDisabled: c || s
  }, e, n);
  ul.set(e, {
    id: h.id
  });
  let { collection: m } = e, { disabledKeys: g } = e.selectionManager, b = U(() => o || new In({
    collection: m,
    disabledKeys: g,
    ref: r,
    layoutDelegate: a
  }), [
    o,
    a,
    m,
    g,
    r
  ]), { collectionProps: E } = sl({
    selectionManager: e.selectionManager,
    keyboardDelegate: b,
    disallowTypeAhead: !0,
    disallowEmptySelection: !0,
    shouldFocusWrap: u,
    ref: l,
    // Prevent item scroll behavior from being applied here, should be handled in the user's Popover + ListBox component
    isVirtualized: !0
  }), D = un(), k = (ie) => {
    if (!ie.nativeEvent.isComposing)
      switch (ie.key) {
        case "Enter":
        case "Tab":
          if (e.isOpen && ie.key === "Enter" && ie.preventDefault(), e.isOpen && r.current && e.selectionManager.focusedKey != null && e.selectionManager.isLink(e.selectionManager.focusedKey)) {
            let G = r.current.querySelector(`[data-key="${CSS.escape(e.selectionManager.focusedKey.toString())}"]`);
            if (ie.key === "Enter" && G instanceof HTMLAnchorElement) {
              let ae = e.collection.getItem(e.selectionManager.focusedKey);
              ae && D.open(G, ie, ae.props.href, ae.props.routerOptions);
            }
            e.close();
          } else e.commit();
          break;
        case "Escape":
          (e.selectedKey !== null || e.inputValue === "" || t.allowsCustomValue) && ie.continuePropagation(), e.revert();
          break;
        case "ArrowDown":
          e.open("first", "manual");
          break;
        case "ArrowUp":
          e.open("last", "manual");
          break;
        case "ArrowLeft":
        case "ArrowRight":
          e.selectionManager.setFocusedKey(null);
          break;
      }
  }, P = (ie) => {
    var G;
    let ae = (n == null ? void 0 : n.current) && n.current === ie.relatedTarget, Ae = (G = i.current) === null || G === void 0 ? void 0 : G.contains(ie.relatedTarget);
    ae || Ae || (t.onBlur && t.onBlur(ie), e.setFocused(!1));
  }, T = (ie) => {
    e.isFocused || (t.onFocus && t.onFocus(ie), e.setFocused(!0));
  }, { isInvalid: M, validationErrors: F, validationDetails: H } = e.displayValidation, { labelProps: K, inputProps: y, descriptionProps: R, errorMessageProps: A } = au({
    ...t,
    onChange: e.setInputValue,
    onKeyDown: s ? t.onKeyDown : Dt(e.isOpen && E.onKeyDown, k, t.onKeyDown),
    onBlur: P,
    value: e.inputValue,
    onFocus: T,
    autoComplete: "off",
    validate: void 0,
    [li]: e
  }, l), B = (ie) => {
    if (ie.pointerType === "touch") {
      var G;
      (G = l.current) === null || G === void 0 || G.focus(), e.toggle(null, "manual");
    }
  }, j = (ie) => {
    if (ie.pointerType !== "touch") {
      var G;
      (G = l.current) === null || G === void 0 || G.focus(), e.toggle(ie.pointerType === "keyboard" || ie.pointerType === "virtual" ? "first" : null, "manual");
    }
  }, x = Tn({
    id: p.id,
    "aria-label": v.format("buttonLabel"),
    "aria-labelledby": t["aria-labelledby"] || K.id
  }), S = Tn({
    id: h.id,
    "aria-label": v.format("listboxLabel"),
    "aria-labelledby": t["aria-labelledby"] || K.id
  }), w = L(0), W = (ie) => {
    if (c || s) return;
    if (ie.timeStamp - w.current < 500) {
      var G;
      ie.preventDefault(), (G = l.current) === null || G === void 0 || G.focus();
      return;
    }
    let ae = ie.target.getBoundingClientRect(), Ae = ie.changedTouches[0], oe = Math.ceil(ae.left + 0.5 * ae.width), Qe = Math.ceil(ae.top + 0.5 * ae.height);
    if (Ae.clientX === oe && Ae.clientY === Qe) {
      var xt;
      ie.preventDefault(), (xt = l.current) === null || xt === void 0 || xt.focus(), e.toggle(null, "manual"), w.current = ie.timeStamp;
    }
  }, J = e.selectionManager.focusedKey != null && e.isOpen ? e.collection.getItem(e.selectionManager.focusedKey) : void 0;
  var N;
  let Q = (N = J == null ? void 0 : J.parentKey) !== null && N !== void 0 ? N : null;
  var te;
  let ue = (te = e.selectionManager.focusedKey) !== null && te !== void 0 ? te : null, we = L(Q), De = L(ue);
  Z(() => {
    if (Fi() && J != null && ue != null && ue !== De.current) {
      let G = e.selectionManager.isSelected(ue), ae = Q != null ? e.collection.getItem(Q) : null, Ae = (ae == null ? void 0 : ae["aria-label"]) || (typeof (ae == null ? void 0 : ae.rendered) == "string" ? ae.rendered : "") || "";
      var ie;
      let oe = v.format("focusAnnouncement", {
        isGroupChange: (ie = ae && Q !== we.current) !== null && ie !== void 0 ? ie : !1,
        groupTitle: Ae,
        groupCount: ae ? [
          ...Oe(ae, e.collection)
        ].length : 0,
        optionText: J["aria-label"] || J.textValue || "",
        isSelected: G
      });
      ln(oe);
    }
    we.current = Q, De.current = ue;
  });
  let ke = Br(e.collection), Le = L(ke), Ve = L(e.isOpen);
  Z(() => {
    let ie = e.isOpen !== Ve.current && (e.selectionManager.focusedKey == null || Fi());
    if (e.isOpen && (ie || ke !== Le.current)) {
      let G = v.format("countAnnouncement", {
        optionCount: ke
      });
      ln(G);
    }
    Le.current = ke, Ve.current = e.isOpen;
  });
  let Ge = L(e.selectedKey);
  return Z(() => {
    if (Fi() && e.isFocused && e.selectedItem && e.selectedKey !== Ge.current) {
      let ie = e.selectedItem["aria-label"] || e.selectedItem.textValue || "", G = v.format("selectedAnnouncement", {
        optionText: ie
      });
      ln(G);
    }
    Ge.current = e.selectedKey;
  }), Z(() => {
    if (e.isOpen) return wr([
      l.current,
      i.current
    ].filter((ie) => ie != null));
  }, [
    e.isOpen,
    l,
    i
  ]), dr(() => {
    !J && l.current && _e(he(l.current)) === l.current && eu(l.current, null);
  }, [
    J
  ]), {
    labelProps: K,
    buttonProps: {
      ...p,
      ...x,
      excludeFromTabOrder: !0,
      preventFocusOnPress: !0,
      onPress: B,
      onPressStart: j,
      isDisabled: c || s
    },
    inputProps: V(y, {
      role: "combobox",
      "aria-expanded": p["aria-expanded"],
      "aria-controls": e.isOpen ? h.id : void 0,
      // TODO: readd proper logic for completionMode = complete (aria-autocomplete: both)
      "aria-autocomplete": "list",
      "aria-activedescendant": J ? As(e, J.key) : void 0,
      onTouchEnd: W,
      // This disable's iOS's autocorrect suggestions, since the combo box provides its own suggestions.
      autoCorrect: "off",
      // This disable's the macOS Safari spell check auto corrections.
      spellCheck: "false"
    }),
    listBoxProps: V(h, S, {
      autoFocus: e.focusStrategy || !0,
      shouldUseVirtualFocus: !0,
      shouldSelectOnPressUp: !0,
      shouldFocusOnHover: !0,
      linkBehavior: "selection"
    }),
    descriptionProps: R,
    errorMessageProps: A,
    isInvalid: M,
    validationErrors: F,
    validationDetails: H
  };
}
function kb(t, e) {
  let { role: n = "dialog" } = t, i = Nt();
  i = t["aria-label"] ? void 0 : i;
  let l = L(!1);
  return Z(() => {
    if (e.current && !e.current.contains(document.activeElement)) {
      Te(e.current);
      let r = setTimeout(() => {
        document.activeElement === e.current && (l.current = !0, e.current && (e.current.blur(), Te(e.current)), l.current = !1);
      }, 500);
      return () => {
        clearTimeout(r);
      };
    }
  }, [
    e
  ]), Bs(), {
    dialogProps: {
      ...ee(t, {
        labelable: !0
      }),
      role: n,
      tabIndex: -1,
      "aria-labelledby": t["aria-labelledby"] || i,
      // Prevent blur events from reaching useOverlay, which may cause
      // popovers to close. Since focus is contained within the dialog,
      // we don't want this to occur due to the above useEffect.
      onBlur: (r) => {
        l.current && r.stopPropagation();
      }
    },
    titleProps: {
      id: i
    }
  };
}
function Tb(t, e, n) {
  let { isDisabled: i } = t, l = Pe(), r = Pe(), a = !Mt() && "onbeforematch" in document.body, u = L(null), s = X(() => {
    u.current = requestAnimationFrame(() => {
      n.current && n.current.setAttribute("hidden", "until-found");
    }), Xi(() => {
      e.toggle();
    });
  }, [
    n,
    e
  ]);
  return Gn(n, "beforematch", a ? s : null), de(() => {
    u.current && cancelAnimationFrame(u.current), a && n.current && !i && (e.isExpanded ? n.current.removeAttribute("hidden") : n.current.setAttribute("hidden", "until-found"));
  }, [
    i,
    n,
    e.isExpanded,
    a
  ]), Z(() => () => {
    u.current && cancelAnimationFrame(u.current);
  }, []), {
    buttonProps: {
      id: l,
      "aria-expanded": e.isExpanded,
      "aria-controls": r,
      onPress: (c) => {
        !i && c.pointerType !== "keyboard" && e.toggle();
      },
      isDisabled: i,
      onPressStart(c) {
        c.pointerType === "keyboard" && !i && e.toggle();
      }
    },
    panelProps: {
      id: r,
      // This can be overridden at the panel element level.
      role: "group",
      "aria-labelledby": l,
      "aria-hidden": !e.isExpanded,
      hidden: a ? !0 : !e.isExpanded
    }
  };
}
const Fr = /* @__PURE__ */ new WeakMap();
function aa(t, e) {
  var n;
  let { id: i } = (n = Fr.get(t)) !== null && n !== void 0 ? n : {};
  if (!i) throw new Error("Unknown list");
  return `${i}-${Bb(e)}`;
}
function Bb(t) {
  return typeof t == "string" ? t.replace(/\s*/g, "") : "" + t;
}
class bc {
  isCell(e) {
    return e.type === "cell";
  }
  isRow(e) {
    return e.type === "row" || e.type === "item";
  }
  isDisabled(e) {
    var n;
    return this.disabledBehavior === "all" && (((n = e.props) === null || n === void 0 ? void 0 : n.isDisabled) || this.disabledKeys.has(e.key));
  }
  findPreviousKey(e, n) {
    let i = e != null ? this.collection.getKeyBefore(e) : this.collection.getLastKey();
    for (; i != null; ) {
      let l = this.collection.getItem(i);
      if (!l) return null;
      if (!this.isDisabled(l) && (!n || n(l))) return i;
      i = this.collection.getKeyBefore(i);
    }
    return null;
  }
  findNextKey(e, n) {
    let i = e != null ? this.collection.getKeyAfter(e) : this.collection.getFirstKey();
    for (; i != null; ) {
      let l = this.collection.getItem(i);
      if (!l) return null;
      if (!this.isDisabled(l) && (!n || n(l))) return i;
      if (i = this.collection.getKeyAfter(i), i == null) return null;
    }
    return null;
  }
  getKeyForItemInRowByIndex(e, n = 0) {
    if (n < 0) return null;
    let i = this.collection.getItem(e);
    if (!i) return null;
    let l = 0;
    for (let a of Oe(i, this.collection)) {
      var r;
      if (a.colSpan && a.colSpan + l > n) return (r = a.key) !== null && r !== void 0 ? r : null;
      a.colSpan && (l = l + a.colSpan - 1);
      var o;
      if (l === n) return (o = a.key) !== null && o !== void 0 ? o : null;
      l++;
    }
    return null;
  }
  getKeyBelow(e) {
    let n = e, i = this.collection.getItem(n);
    if (!i) return null;
    var l;
    if (this.isCell(i) && (n = (l = i.parentKey) !== null && l !== void 0 ? l : null), n == null) return null;
    if (n = this.findNextKey(n, (r) => r.type === "item"), n != null) {
      if (this.isCell(i)) {
        let r = i.colIndex ? i.colIndex : i.index;
        return this.getKeyForItemInRowByIndex(n, r);
      }
      if (this.focusMode === "row") return n;
    }
    return null;
  }
  getKeyAbove(e) {
    let n = e, i = this.collection.getItem(n);
    if (!i) return null;
    var l;
    if (this.isCell(i) && (n = (l = i.parentKey) !== null && l !== void 0 ? l : null), n == null) return null;
    if (n = this.findPreviousKey(n, (r) => r.type === "item"), n != null) {
      if (this.isCell(i)) {
        let r = i.colIndex ? i.colIndex : i.index;
        return this.getKeyForItemInRowByIndex(n, r);
      }
      if (this.focusMode === "row") return n;
    }
    return null;
  }
  getKeyRightOf(e) {
    let n = this.collection.getItem(e);
    if (!n) return null;
    if (this.isRow(n)) {
      var i, l;
      let c = Oe(n, this.collection);
      var r;
      return (r = this.direction === "rtl" ? (i = Kt(c)) === null || i === void 0 ? void 0 : i.key : (l = At(c)) === null || l === void 0 ? void 0 : l.key) !== null && r !== void 0 ? r : null;
    }
    if (this.isCell(n) && n.parentKey != null) {
      let c = this.collection.getItem(n.parentKey);
      if (!c) return null;
      let d = Oe(c, this.collection);
      var o;
      let v = (o = this.direction === "rtl" ? Yn(d, n.index - 1) : Yn(d, n.index + 1)) !== null && o !== void 0 ? o : null;
      var a;
      if (v) return (a = v.key) !== null && a !== void 0 ? a : null;
      var u;
      if (this.focusMode === "row") return (u = n.parentKey) !== null && u !== void 0 ? u : null;
      var s;
      return (s = this.direction === "rtl" ? this.getFirstKey(e) : this.getLastKey(e)) !== null && s !== void 0 ? s : null;
    }
    return null;
  }
  getKeyLeftOf(e) {
    let n = this.collection.getItem(e);
    if (!n) return null;
    if (this.isRow(n)) {
      var i, l;
      let c = Oe(n, this.collection);
      var r;
      return (r = this.direction === "rtl" ? (i = At(c)) === null || i === void 0 ? void 0 : i.key : (l = Kt(c)) === null || l === void 0 ? void 0 : l.key) !== null && r !== void 0 ? r : null;
    }
    if (this.isCell(n) && n.parentKey != null) {
      let c = this.collection.getItem(n.parentKey);
      if (!c) return null;
      let d = Oe(c, this.collection);
      var o;
      let v = (o = this.direction === "rtl" ? Yn(d, n.index + 1) : Yn(d, n.index - 1)) !== null && o !== void 0 ? o : null;
      var a;
      if (v) return (a = v.key) !== null && a !== void 0 ? a : null;
      var u;
      if (this.focusMode === "row") return (u = n.parentKey) !== null && u !== void 0 ? u : null;
      var s;
      return (s = this.direction === "rtl" ? this.getLastKey(e) : this.getFirstKey(e)) !== null && s !== void 0 ? s : null;
    }
    return null;
  }
  getFirstKey(e, n) {
    let i = e ?? null, l;
    if (i != null) {
      if (l = this.collection.getItem(i), !l) return null;
      if (this.isCell(l) && !n && l.parentKey != null) {
        var r;
        let s = this.collection.getItem(l.parentKey);
        if (!s) return null;
        var o;
        return (o = (r = At(Oe(s, this.collection))) === null || r === void 0 ? void 0 : r.key) !== null && o !== void 0 ? o : null;
      }
    }
    if (i = this.findNextKey(void 0, (s) => s.type === "item"), i != null && (l && this.isCell(l) && n || this.focusMode === "cell")) {
      var a;
      let s = this.collection.getItem(i);
      if (!s) return null;
      var u;
      i = (u = (a = At(Oe(s, this.collection))) === null || a === void 0 ? void 0 : a.key) !== null && u !== void 0 ? u : null;
    }
    return i;
  }
  getLastKey(e, n) {
    let i = e ?? null, l;
    if (i != null) {
      if (l = this.collection.getItem(i), !l) return null;
      if (this.isCell(l) && !n && l.parentKey != null) {
        var r;
        let s = this.collection.getItem(l.parentKey);
        if (!s) return null;
        let c = Oe(s, this.collection);
        var o;
        return (o = (r = Kt(c)) === null || r === void 0 ? void 0 : r.key) !== null && o !== void 0 ? o : null;
      }
    }
    if (i = this.findPreviousKey(void 0, (s) => s.type === "item"), i != null && (l && this.isCell(l) && n || this.focusMode === "cell")) {
      var a;
      let s = this.collection.getItem(i);
      if (!s) return null;
      let c = Oe(s, this.collection);
      var u;
      i = (u = (a = Kt(c)) === null || a === void 0 ? void 0 : a.key) !== null && u !== void 0 ? u : null;
    }
    return i;
  }
  getKeyPageAbove(e) {
    let n = e, i = this.layoutDelegate.getItemRect(n);
    if (!i) return null;
    let l = Math.max(0, i.y + i.height - this.layoutDelegate.getVisibleRect().height);
    for (; i && i.y > l && n != null; ) {
      var r;
      if (n = (r = this.getKeyAbove(n)) !== null && r !== void 0 ? r : null, n == null) break;
      i = this.layoutDelegate.getItemRect(n);
    }
    return n;
  }
  getKeyPageBelow(e) {
    let n = e, i = this.layoutDelegate.getItemRect(n);
    if (!i) return null;
    let l = this.layoutDelegate.getVisibleRect().height, r = Math.min(this.layoutDelegate.getContentSize().height, i.y + l);
    for (; i && i.y + i.height < r; ) {
      let o = this.getKeyBelow(n);
      if (o == null) break;
      i = this.layoutDelegate.getItemRect(o), n = o;
    }
    return n;
  }
  getKeyForSearch(e, n) {
    let i = n ?? null;
    if (!this.collator) return null;
    let l = this.collection;
    if (i = n ?? this.getFirstKey(), i == null) return null;
    let r = l.getItem(i);
    if (!r) return null;
    var o;
    r.type === "cell" && (i = (o = r.parentKey) !== null && o !== void 0 ? o : null);
    let a = !1;
    for (; i != null; ) {
      let c = l.getItem(i);
      if (!c) return null;
      if (c.textValue) {
        let d = c.textValue.slice(0, e.length);
        if (this.collator.compare(d, e) === 0) {
          var u, s;
          return this.isRow(c) && this.focusMode === "cell" ? (s = (u = At(Oe(c, this.collection))) === null || u === void 0 ? void 0 : u.key) !== null && s !== void 0 ? s : null : c.key;
        }
      }
      i = this.findNextKey(i, (d) => d.type === "item"), i == null && !a && (i = this.getFirstKey(), a = !0);
    }
    return null;
  }
  constructor(e) {
    if (this.collection = e.collection, this.disabledKeys = e.disabledKeys, this.disabledBehavior = e.disabledBehavior || "all", this.direction = e.direction, this.collator = e.collator, !e.layout && !e.ref) throw new Error("Either a layout or a ref must be specified.");
    this.layoutDelegate = e.layoutDelegate || (e.layout ? new Ab(e.layout) : new tr(e.ref)), this.focusMode = e.focusMode || "row";
  }
}
class Ab {
  getContentSize() {
    return this.layout.getContentSize();
  }
  getItemRect(e) {
    var n;
    return ((n = this.layout.getLayoutInfo(e)) === null || n === void 0 ? void 0 : n.rect) || null;
  }
  getVisibleRect() {
    return this.layout.virtualizer.visibleRect;
  }
  constructor(e) {
    this.layout = e;
  }
}
const Kr = /* @__PURE__ */ new WeakMap();
var mc = {};
mc = {
  deselectedItem: (t) => `${t.item} غير المحدد`,
  longPressToSelect: "اضغط مطولًا للدخول إلى وضع التحديد.",
  select: "تحديد",
  selectedAll: "جميع العناصر المحددة.",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "لم يتم تحديد عناصر",
    one: () => `${e.number(t.count)} عنصر محدد`,
    other: () => `${e.number(t.count)} عنصر محدد`
  })}.`,
  selectedItem: (t) => `${t.item} المحدد`
};
var gc = {};
gc = {
  deselectedItem: (t) => `${t.item} не е избран.`,
  longPressToSelect: "Натиснете и задръжте за да влезете в избирателен режим.",
  select: "Изберете",
  selectedAll: "Всички елементи са избрани.",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "Няма избрани елементи",
    one: () => `${e.number(t.count)} избран елемент`,
    other: () => `${e.number(t.count)} избрани елементи`
  })}.`,
  selectedItem: (t) => `${t.item} избран.`
};
var $c = {};
$c = {
  deselectedItem: (t) => `Položka ${t.item} není vybrána.`,
  longPressToSelect: "Dlouhým stisknutím přejdete do režimu výběru.",
  select: "Vybrat",
  selectedAll: "Vybrány všechny položky.",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "Nevybrány žádné položky",
    one: () => `Vybrána ${e.number(t.count)} položka`,
    other: () => `Vybráno ${e.number(t.count)} položek`
  })}.`,
  selectedItem: (t) => `Vybrána položka ${t.item}.`
};
var yc = {};
yc = {
  deselectedItem: (t) => `${t.item} ikke valgt.`,
  longPressToSelect: "Lav et langt tryk for at aktivere valgtilstand.",
  select: "Vælg",
  selectedAll: "Alle elementer valgt.",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "Ingen elementer valgt",
    one: () => `${e.number(t.count)} element valgt`,
    other: () => `${e.number(t.count)} elementer valgt`
  })}.`,
  selectedItem: (t) => `${t.item} valgt.`
};
var xc = {};
xc = {
  deselectedItem: (t) => `${t.item} nicht ausgewählt.`,
  longPressToSelect: "Gedrückt halten, um Auswahlmodus zu öffnen.",
  select: "Auswählen",
  selectedAll: "Alle Elemente ausgewählt.",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "Keine Elemente ausgewählt",
    one: () => `${e.number(t.count)} Element ausgewählt`,
    other: () => `${e.number(t.count)} Elemente ausgewählt`
  })}.`,
  selectedItem: (t) => `${t.item} ausgewählt.`
};
var Ec = {};
Ec = {
  deselectedItem: (t) => `Δεν επιλέχθηκε το στοιχείο ${t.item}.`,
  longPressToSelect: "Πατήστε παρατεταμένα για να μπείτε σε λειτουργία επιλογής.",
  select: "Επιλογή",
  selectedAll: "Επιλέχθηκαν όλα τα στοιχεία.",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "Δεν επιλέχθηκαν στοιχεία",
    one: () => `Επιλέχθηκε ${e.number(t.count)} στοιχείο`,
    other: () => `Επιλέχθηκαν ${e.number(t.count)} στοιχεία`
  })}.`,
  selectedItem: (t) => `Επιλέχθηκε το στοιχείο ${t.item}.`
};
var Cc = {};
Cc = {
  deselectedItem: (t) => `${t.item} not selected.`,
  select: "Select",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "No items selected",
    one: () => `${e.number(t.count)} item selected`,
    other: () => `${e.number(t.count)} items selected`
  })}.`,
  selectedAll: "All items selected.",
  selectedItem: (t) => `${t.item} selected.`,
  longPressToSelect: "Long press to enter selection mode."
};
var Pc = {};
Pc = {
  deselectedItem: (t) => `${t.item} no seleccionado.`,
  longPressToSelect: "Mantenga pulsado para abrir el modo de selección.",
  select: "Seleccionar",
  selectedAll: "Todos los elementos seleccionados.",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "Ningún elemento seleccionado",
    one: () => `${e.number(t.count)} elemento seleccionado`,
    other: () => `${e.number(t.count)} elementos seleccionados`
  })}.`,
  selectedItem: (t) => `${t.item} seleccionado.`
};
var Dc = {};
Dc = {
  deselectedItem: (t) => `${t.item} pole valitud.`,
  longPressToSelect: "Valikurežiimi sisenemiseks vajutage pikalt.",
  select: "Vali",
  selectedAll: "Kõik üksused valitud.",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "Üksusi pole valitud",
    one: () => `${e.number(t.count)} üksus valitud`,
    other: () => `${e.number(t.count)} üksust valitud`
  })}.`,
  selectedItem: (t) => `${t.item} valitud.`
};
var Sc = {};
Sc = {
  deselectedItem: (t) => `Kohdetta ${t.item} ei valittu.`,
  longPressToSelect: "Siirry valintatilaan painamalla pitkään.",
  select: "Valitse",
  selectedAll: "Kaikki kohteet valittu.",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "Ei yhtään kohdetta valittu",
    one: () => `${e.number(t.count)} kohde valittu`,
    other: () => `${e.number(t.count)} kohdetta valittu`
  })}.`,
  selectedItem: (t) => `${t.item} valittu.`
};
var wc = {};
wc = {
  deselectedItem: (t) => `${t.item} non sélectionné.`,
  longPressToSelect: "Appuyez de manière prolongée pour passer en mode de sélection.",
  select: "Sélectionner",
  selectedAll: "Tous les éléments sélectionnés.",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "Aucun élément sélectionné",
    one: () => `${e.number(t.count)} élément sélectionné`,
    other: () => `${e.number(t.count)} éléments sélectionnés`
  })}.`,
  selectedItem: (t) => `${t.item} sélectionné.`
};
var kc = {};
kc = {
  deselectedItem: (t) => `${t.item} לא נבחר.`,
  longPressToSelect: "הקשה ארוכה לכניסה למצב בחירה.",
  select: "בחר",
  selectedAll: "כל הפריטים נבחרו.",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "לא נבחרו פריטים",
    one: () => `פריט ${e.number(t.count)} נבחר`,
    other: () => `${e.number(t.count)} פריטים נבחרו`
  })}.`,
  selectedItem: (t) => `${t.item} נבחר.`
};
var Tc = {};
Tc = {
  deselectedItem: (t) => `Stavka ${t.item} nije odabrana.`,
  longPressToSelect: "Dugo pritisnite za ulazak u način odabira.",
  select: "Odaberite",
  selectedAll: "Odabrane su sve stavke.",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "Nije odabrana nijedna stavka",
    one: () => `Odabrana je ${e.number(t.count)} stavka`,
    other: () => `Odabrano je ${e.number(t.count)} stavki`
  })}.`,
  selectedItem: (t) => `Stavka ${t.item} je odabrana.`
};
var Bc = {};
Bc = {
  deselectedItem: (t) => `${t.item} nincs kijelölve.`,
  longPressToSelect: "Nyomja hosszan a kijelöléshez.",
  select: "Kijelölés",
  selectedAll: "Az összes elem kijelölve.",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "Egy elem sincs kijelölve",
    one: () => `${e.number(t.count)} elem kijelölve`,
    other: () => `${e.number(t.count)} elem kijelölve`
  })}.`,
  selectedItem: (t) => `${t.item} kijelölve.`
};
var Ac = {};
Ac = {
  deselectedItem: (t) => `${t.item} non selezionato.`,
  longPressToSelect: "Premi a lungo per passare alla modalità di selezione.",
  select: "Seleziona",
  selectedAll: "Tutti gli elementi selezionati.",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "Nessun elemento selezionato",
    one: () => `${e.number(t.count)} elemento selezionato`,
    other: () => `${e.number(t.count)} elementi selezionati`
  })}.`,
  selectedItem: (t) => `${t.item} selezionato.`
};
var Fc = {};
Fc = {
  deselectedItem: (t) => `${t.item} が選択されていません。`,
  longPressToSelect: "長押しして選択モードを開きます。",
  select: "選択",
  selectedAll: "すべての項目を選択しました。",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "項目が選択されていません",
    one: () => `${e.number(t.count)} 項目を選択しました`,
    other: () => `${e.number(t.count)} 項目を選択しました`
  })}。`,
  selectedItem: (t) => `${t.item} を選択しました。`
};
var Kc = {};
Kc = {
  deselectedItem: (t) => `${t.item}이(가) 선택되지 않았습니다.`,
  longPressToSelect: "선택 모드로 들어가려면 길게 누르십시오.",
  select: "선택",
  selectedAll: "모든 항목이 선택되었습니다.",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "선택된 항목이 없습니다",
    one: () => `${e.number(t.count)}개 항목이 선택되었습니다`,
    other: () => `${e.number(t.count)}개 항목이 선택되었습니다`
  })}.`,
  selectedItem: (t) => `${t.item}이(가) 선택되었습니다.`
};
var Nc = {};
Nc = {
  deselectedItem: (t) => `${t.item} nepasirinkta.`,
  longPressToSelect: "Norėdami įjungti pasirinkimo režimą, paspauskite ir palaikykite.",
  select: "Pasirinkti",
  selectedAll: "Pasirinkti visi elementai.",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "Nepasirinktas nė vienas elementas",
    one: () => `Pasirinktas ${e.number(t.count)} elementas`,
    other: () => `Pasirinkta elementų: ${e.number(t.count)}`
  })}.`,
  selectedItem: (t) => `Pasirinkta: ${t.item}.`
};
var Ic = {};
Ic = {
  deselectedItem: (t) => `Vienums ${t.item} nav atlasīts.`,
  longPressToSelect: "Ilgi turiet nospiestu. lai ieslēgtu atlases režīmu.",
  select: "Atlasīt",
  selectedAll: "Atlasīti visi vienumi.",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "Nav atlasīts neviens vienums",
    one: () => `Atlasīto vienumu skaits: ${e.number(t.count)}`,
    other: () => `Atlasīto vienumu skaits: ${e.number(t.count)}`
  })}.`,
  selectedItem: (t) => `Atlasīts vienums ${t.item}.`
};
var Mc = {};
Mc = {
  deselectedItem: (t) => `${t.item} er ikke valgt.`,
  longPressToSelect: "Bruk et langt trykk for å gå inn i valgmodus.",
  select: "Velg",
  selectedAll: "Alle elementer er valgt.",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "Ingen elementer er valgt",
    one: () => `${e.number(t.count)} element er valgt`,
    other: () => `${e.number(t.count)} elementer er valgt`
  })}.`,
  selectedItem: (t) => `${t.item} er valgt.`
};
var Rc = {};
Rc = {
  deselectedItem: (t) => `${t.item} niet geselecteerd.`,
  longPressToSelect: "Druk lang om de selectiemodus te openen.",
  select: "Selecteren",
  selectedAll: "Alle items geselecteerd.",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "Geen items geselecteerd",
    one: () => `${e.number(t.count)} item geselecteerd`,
    other: () => `${e.number(t.count)} items geselecteerd`
  })}.`,
  selectedItem: (t) => `${t.item} geselecteerd.`
};
var Lc = {};
Lc = {
  deselectedItem: (t) => `Nie zaznaczono ${t.item}.`,
  longPressToSelect: "Naciśnij i przytrzymaj, aby wejść do trybu wyboru.",
  select: "Zaznacz",
  selectedAll: "Wszystkie zaznaczone elementy.",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "Nie zaznaczono żadnych elementów",
    one: () => `${e.number(t.count)} zaznaczony element`,
    other: () => `${e.number(t.count)} zaznaczonych elementów`
  })}.`,
  selectedItem: (t) => `Zaznaczono ${t.item}.`
};
var jc = {};
jc = {
  deselectedItem: (t) => `${t.item} não selecionado.`,
  longPressToSelect: "Mantenha pressionado para entrar no modo de seleção.",
  select: "Selecionar",
  selectedAll: "Todos os itens selecionados.",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "Nenhum item selecionado",
    one: () => `${e.number(t.count)} item selecionado`,
    other: () => `${e.number(t.count)} itens selecionados`
  })}.`,
  selectedItem: (t) => `${t.item} selecionado.`
};
var zc = {};
zc = {
  deselectedItem: (t) => `${t.item} não selecionado.`,
  longPressToSelect: "Prima continuamente para entrar no modo de seleção.",
  select: "Selecionar",
  selectedAll: "Todos os itens selecionados.",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "Nenhum item selecionado",
    one: () => `${e.number(t.count)} item selecionado`,
    other: () => `${e.number(t.count)} itens selecionados`
  })}.`,
  selectedItem: (t) => `${t.item} selecionado.`
};
var Oc = {};
Oc = {
  deselectedItem: (t) => `${t.item} neselectat.`,
  longPressToSelect: "Apăsați lung pentru a intra în modul de selectare.",
  select: "Selectare",
  selectedAll: "Toate elementele selectate.",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "Niciun element selectat",
    one: () => `${e.number(t.count)} element selectat`,
    other: () => `${e.number(t.count)} elemente selectate`
  })}.`,
  selectedItem: (t) => `${t.item} selectat.`
};
var Vc = {};
Vc = {
  deselectedItem: (t) => `${t.item} не выбрано.`,
  longPressToSelect: "Нажмите и удерживайте для входа в режим выбора.",
  select: "Выбрать",
  selectedAll: "Выбраны все элементы.",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "Нет выбранных элементов",
    one: () => `${e.number(t.count)} элемент выбран`,
    other: () => `${e.number(t.count)} элементов выбрано`
  })}.`,
  selectedItem: (t) => `${t.item} выбрано.`
};
var Hc = {};
Hc = {
  deselectedItem: (t) => `Nevybraté položky: ${t.item}.`,
  longPressToSelect: "Dlhším stlačením prejdite do režimu výberu.",
  select: "Vybrať",
  selectedAll: "Všetky vybraté položky.",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "Žiadne vybraté položky",
    one: () => `${e.number(t.count)} vybratá položka`,
    other: () => `Počet vybratých položiek:${e.number(t.count)}`
  })}.`,
  selectedItem: (t) => `Vybraté položky: ${t.item}.`
};
var Uc = {};
Uc = {
  deselectedItem: (t) => `Element ${t.item} ni izbran.`,
  longPressToSelect: "Za izbirni način pritisnite in dlje časa držite.",
  select: "Izberite",
  selectedAll: "Vsi elementi so izbrani.",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "Noben element ni izbran",
    one: () => `${e.number(t.count)} element je izbran`,
    other: () => `${e.number(t.count)} elementov je izbranih`
  })}.`,
  selectedItem: (t) => `Element ${t.item} je izbran.`
};
var Wc = {};
Wc = {
  deselectedItem: (t) => `${t.item} nije izabrano.`,
  longPressToSelect: "Dugo pritisnite za ulazak u režim biranja.",
  select: "Izaberite",
  selectedAll: "Izabrane su sve stavke.",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "Nije izabrana nijedna stavka",
    one: () => `Izabrana je ${e.number(t.count)} stavka`,
    other: () => `Izabrano je ${e.number(t.count)} stavki`
  })}.`,
  selectedItem: (t) => `${t.item} je izabrano.`
};
var Gc = {};
Gc = {
  deselectedItem: (t) => `${t.item} ej markerat.`,
  longPressToSelect: "Tryck länge när du vill öppna väljarläge.",
  select: "Markera",
  selectedAll: "Alla markerade objekt.",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "Inga markerade objekt",
    one: () => `${e.number(t.count)} markerat objekt`,
    other: () => `${e.number(t.count)} markerade objekt`
  })}.`,
  selectedItem: (t) => `${t.item} markerat.`
};
var _c = {};
_c = {
  deselectedItem: (t) => `${t.item} seçilmedi.`,
  longPressToSelect: "Seçim moduna girmek için uzun basın.",
  select: "Seç",
  selectedAll: "Tüm ögeler seçildi.",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "Hiçbir öge seçilmedi",
    one: () => `${e.number(t.count)} öge seçildi`,
    other: () => `${e.number(t.count)} öge seçildi`
  })}.`,
  selectedItem: (t) => `${t.item} seçildi.`
};
var qc = {};
qc = {
  deselectedItem: (t) => `${t.item} не вибрано.`,
  longPressToSelect: "Виконайте довге натиснення, щоб перейти в режим вибору.",
  select: "Вибрати",
  selectedAll: "Усі елементи вибрано.",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "Жодних елементів не вибрано",
    one: () => `${e.number(t.count)} елемент вибрано`,
    other: () => `Вибрано елементів: ${e.number(t.count)}`
  })}.`,
  selectedItem: (t) => `${t.item} вибрано.`
};
var Yc = {};
Yc = {
  deselectedItem: (t) => `未选择 ${t.item}。`,
  longPressToSelect: "长按以进入选择模式。",
  select: "选择",
  selectedAll: "已选择所有项目。",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "未选择项目",
    one: () => `已选择 ${e.number(t.count)} 个项目`,
    other: () => `已选择 ${e.number(t.count)} 个项目`
  })}。`,
  selectedItem: (t) => `已选择 ${t.item}。`
};
var Zc = {};
Zc = {
  deselectedItem: (t) => `未選取「${t.item}」。`,
  longPressToSelect: "長按以進入選擇模式。",
  select: "選取",
  selectedAll: "已選取所有項目。",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "未選取任何項目",
    one: () => `已選取 ${e.number(t.count)} 個項目`,
    other: () => `已選取 ${e.number(t.count)} 個項目`
  })}。`,
  selectedItem: (t) => `已選取「${t.item}」。`
};
var cl = {};
cl = {
  "ar-AE": mc,
  "bg-BG": gc,
  "cs-CZ": $c,
  "da-DK": yc,
  "de-DE": xc,
  "el-GR": Ec,
  "en-US": Cc,
  "es-ES": Pc,
  "et-EE": Dc,
  "fi-FI": Sc,
  "fr-FR": wc,
  "he-IL": kc,
  "hr-HR": Tc,
  "hu-HU": Bc,
  "it-IT": Ac,
  "ja-JP": Fc,
  "ko-KR": Kc,
  "lt-LT": Nc,
  "lv-LV": Ic,
  "nb-NO": Mc,
  "nl-NL": Rc,
  "pl-PL": Lc,
  "pt-BR": jc,
  "pt-PT": zc,
  "ro-RO": Oc,
  "ru-RU": Vc,
  "sk-SK": Hc,
  "sl-SI": Uc,
  "sr-SP": Wc,
  "sv-SE": Gc,
  "tr-TR": _c,
  "uk-UA": qc,
  "zh-CN": Yc,
  "zh-TW": Zc
};
function Fb(t) {
  return t && t.__esModule ? t.default : t;
}
function Xc(t, e) {
  let { getRowText: n = (a) => {
    var u, s, c, d;
    return (d = (u = (s = e.collection).getTextValue) === null || u === void 0 ? void 0 : u.call(s, a)) !== null && d !== void 0 ? d : (c = e.collection.getItem(a)) === null || c === void 0 ? void 0 : c.textValue;
  } } = t, i = gt(Fb(cl), "@react-aria/grid"), l = e.selectionManager.rawSelection, r = L(l), o = Be(() => {
    var a;
    if (!e.selectionManager.isFocused || l === r.current) {
      r.current = l;
      return;
    }
    let u = ua(l, r.current), s = ua(r.current, l), c = e.selectionManager.selectionBehavior === "replace", d = [];
    if (e.selectionManager.selectedKeys.size === 1 && c) {
      let v = e.selectionManager.selectedKeys.keys().next().value;
      if (v != null && e.collection.getItem(v)) {
        let p = n(v);
        p && d.push(i.format("selectedItem", {
          item: p
        }));
      }
    } else if (u.size === 1 && s.size === 0) {
      let v = u.keys().next().value;
      if (v != null) {
        let p = n(v);
        p && d.push(i.format("selectedItem", {
          item: p
        }));
      }
    } else if (s.size === 1 && u.size === 0) {
      let v = s.keys().next().value;
      if (v != null && e.collection.getItem(v)) {
        let p = n(v);
        p && d.push(i.format("deselectedItem", {
          item: p
        }));
      }
    }
    e.selectionManager.selectionMode === "multiple" && (d.length === 0 || l === "all" || l.size > 1 || r.current === "all" || ((a = r.current) === null || a === void 0 ? void 0 : a.size) > 1) && d.push(l === "all" ? i.format("selectedAll") : i.format("selectedCount", {
      count: l.size
    })), d.length > 0 && ln(d.join(" ")), r.current = l;
  });
  dr(() => {
    if (e.selectionManager.isFocused) o();
    else {
      let a = requestAnimationFrame(o);
      return () => cancelAnimationFrame(a);
    }
  }, [
    l,
    e.selectionManager.isFocused
  ]);
}
function ua(t, e) {
  let n = /* @__PURE__ */ new Set();
  if (t === "all" || e === "all") return n;
  for (let i of t.keys()) e.has(i) || n.add(i);
  return n;
}
function Kb(t) {
  return t && t.__esModule ? t.default : t;
}
function Jc(t) {
  let e = gt(Kb(cl), "@react-aria/grid"), n = Oa(), i = (n === "pointer" || n === "virtual" || n == null) && typeof window < "u" && "ontouchstart" in window, l = U(() => {
    let o = t.selectionManager.selectionMode, a = t.selectionManager.selectionBehavior, u;
    return i && (u = e.format("longPressToSelect")), a === "replace" && o !== "none" && t.hasItemActions ? u : void 0;
  }, [
    t.selectionManager.selectionMode,
    t.selectionManager.selectionBehavior,
    t.hasItemActions,
    e,
    i
  ]);
  return ui(l);
}
function Nb(t, e, n) {
  let { isVirtualized: i, disallowTypeAhead: l, keyboardDelegate: r, focusMode: o, scrollRef: a, getRowText: u, onRowAction: s, onCellAction: c, escapeKeyBehavior: d = "clearSelection", shouldSelectOnPressUp: v } = t, { selectionManager: p } = e;
  !t["aria-label"] && !t["aria-labelledby"] && console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
  let h = Kn({
    usage: "search",
    sensitivity: "base"
  }), { direction: m } = We(), g = e.selectionManager.disabledBehavior, b = U(() => r || new bc({
    collection: e.collection,
    disabledKeys: e.disabledKeys,
    disabledBehavior: g,
    ref: n,
    direction: m,
    collator: h,
    focusMode: o
  }), [
    r,
    e.collection,
    e.disabledKeys,
    g,
    n,
    m,
    h,
    o
  ]), { collectionProps: E } = sl({
    ref: n,
    selectionManager: p,
    keyboardDelegate: b,
    isVirtualized: i,
    scrollRef: a,
    disallowTypeAhead: l,
    escapeKeyBehavior: d
  }), D = Pe(t.id);
  Kr.set(e, {
    keyboardDelegate: b,
    actions: {
      onRowAction: s,
      onCellAction: c
    },
    shouldSelectOnPressUp: v
  });
  let k = Jc({
    selectionManager: p,
    hasItemActions: !!(s || c)
  }), P = ee(t, {
    labelable: !0
  }), T = X((K) => {
    if (p.isFocused) {
      K.currentTarget.contains(K.target) || p.setFocused(!1);
      return;
    }
    K.currentTarget.contains(K.target) && p.setFocused(!0);
  }, [
    p
  ]), M = U(() => ({
    onBlur: E.onBlur,
    onFocus: T
  }), [
    T,
    E.onBlur
  ]), F = Cr(n, {
    isDisabled: e.collection.size !== 0
  }), H = V(
    P,
    {
      role: "grid",
      id: D,
      "aria-multiselectable": p.selectionMode === "multiple" ? "true" : void 0
    },
    e.isKeyboardNavigationDisabled ? M : E,
    // If collection is empty, make sure the grid is tabbable unless there is a child tabbable element.
    e.collection.size === 0 && {
      tabIndex: F ? -1 : 0
    } || void 0,
    k
  );
  return i && (H["aria-rowcount"] = e.collection.size, H["aria-colcount"] = e.collection.columnCount), Xc({
    getRowText: u
  }, e), {
    gridProps: H
  };
}
function Ib() {
  return {
    rowGroupProps: {
      role: "rowgroup"
    }
  };
}
function Mb(t, e, n) {
  var i, l;
  let { node: r, isVirtualized: o, shouldSelectOnPressUp: a, onAction: u } = t, { actions: s, shouldSelectOnPressUp: c } = Kr.get(e), d = s.onRowAction ? () => {
    var g;
    return (g = s.onRowAction) === null || g === void 0 ? void 0 : g.call(s, r.key);
  } : u, { itemProps: v, ...p } = Nn({
    selectionManager: e.selectionManager,
    key: r.key,
    ref: n,
    isVirtualized: o,
    shouldSelectOnPressUp: c || a,
    onAction: d || !(r == null || (i = r.props) === null || i === void 0) && i.onAction ? Dt(r == null || (l = r.props) === null || l === void 0 ? void 0 : l.onAction, d) : void 0,
    isDisabled: e.collection.size === 0
  }), h = e.selectionManager.isSelected(r.key), m = {
    role: "row",
    "aria-selected": e.selectionManager.selectionMode !== "none" ? h : void 0,
    "aria-disabled": p.isDisabled || void 0,
    ...v
  };
  return o && (m["aria-rowindex"] = r.index + 1), {
    rowProps: m,
    ...p
  };
}
function Qc(t, e, n) {
  let { node: i, isVirtualized: l, focusMode: r = "child", shouldSelectOnPressUp: o, onAction: a } = t, { direction: u } = We(), { keyboardDelegate: s, actions: { onCellAction: c } } = Kr.get(e), d = L(null), v = () => {
    if (n.current) {
      let D = Xe(n.current);
      if (r === "child") {
        if (n.current.contains(document.activeElement) && n.current !== document.activeElement) return;
        let k = e.selectionManager.childFocusStrategy === "last" ? Nl(D) : D.firstChild();
        if (k) {
          Te(k);
          return;
        }
      }
      (d.current != null && i.key !== d.current || !n.current.contains(document.activeElement)) && Te(n.current);
    }
  }, { itemProps: p, isPressed: h } = Nn({
    selectionManager: e.selectionManager,
    key: i.key,
    ref: n,
    isVirtualized: l,
    focus: v,
    shouldSelectOnPressUp: o,
    onAction: c ? () => c(i.key) : a,
    isDisabled: e.collection.size === 0
  }), m = (D) => {
    if (!D.currentTarget.contains(D.target) || e.isKeyboardNavigationDisabled || !n.current || !document.activeElement) return;
    let k = Xe(n.current);
    switch (k.currentNode = document.activeElement, D.key) {
      case "ArrowLeft": {
        let K = u === "rtl" ? k.nextNode() : k.previousNode();
        if (r === "child" && K === n.current && (K = null), D.preventDefault(), D.stopPropagation(), K)
          Te(K), nt(K, {
            containingElement: Ze(n.current)
          });
        else {
          var P;
          if (((P = s.getKeyLeftOf) === null || P === void 0 ? void 0 : P.call(s, i.key)) !== i.key) {
            var T;
            (T = n.current.parentElement) === null || T === void 0 || T.dispatchEvent(new KeyboardEvent(D.nativeEvent.type, D.nativeEvent));
            break;
          }
          r === "cell" && u === "rtl" ? (Te(n.current), nt(n.current, {
            containingElement: Ze(n.current)
          })) : (k.currentNode = n.current, K = u === "rtl" ? k.firstChild() : Nl(k), K && (Te(K), nt(K, {
            containingElement: Ze(n.current)
          })));
        }
        break;
      }
      case "ArrowRight": {
        let K = u === "rtl" ? k.previousNode() : k.nextNode();
        if (r === "child" && K === n.current && (K = null), D.preventDefault(), D.stopPropagation(), K)
          Te(K), nt(K, {
            containingElement: Ze(n.current)
          });
        else {
          var M;
          if (((M = s.getKeyRightOf) === null || M === void 0 ? void 0 : M.call(s, i.key)) !== i.key) {
            var F;
            (F = n.current.parentElement) === null || F === void 0 || F.dispatchEvent(new KeyboardEvent(D.nativeEvent.type, D.nativeEvent));
            break;
          }
          r === "cell" && u === "ltr" ? (Te(n.current), nt(n.current, {
            containingElement: Ze(n.current)
          })) : (k.currentNode = n.current, K = u === "rtl" ? Nl(k) : k.firstChild(), K && (Te(K), nt(K, {
            containingElement: Ze(n.current)
          })));
        }
        break;
      }
      case "ArrowUp":
      case "ArrowDown":
        if (!D.altKey && n.current.contains(D.target)) {
          var H;
          D.stopPropagation(), D.preventDefault(), (H = n.current.parentElement) === null || H === void 0 || H.dispatchEvent(new KeyboardEvent(D.nativeEvent.type, D.nativeEvent));
        }
        break;
    }
  }, g = (D) => {
    if (d.current = i.key, D.target !== n.current) {
      Zt() || e.selectionManager.setFocusedKey(i.key);
      return;
    }
    requestAnimationFrame(() => {
      r === "child" && document.activeElement === n.current && v();
    });
  }, b = V(p, {
    role: "gridcell",
    onKeyDownCapture: m,
    "aria-colspan": i.colSpan,
    "aria-colindex": i.colIndex != null ? i.colIndex + 1 : void 0,
    colSpan: l ? void 0 : i.colSpan,
    onFocus: g
  });
  var E;
  return l && (b["aria-colindex"] = ((E = i.colIndex) !== null && E !== void 0 ? E : i.index) + 1), o && b.tabIndex != null && b.onPointerDown == null && (b.onPointerDown = (D) => {
    let k = D.currentTarget, P = k.getAttribute("tabindex");
    k.removeAttribute("tabindex"), requestAnimationFrame(() => {
      P != null && k.setAttribute("tabindex", P);
    });
  }), {
    gridCellProps: b,
    isPressed: h
  };
}
function Nl(t) {
  let e = null, n = null;
  do
    n = t.lastChild(), n && (e = n);
  while (n);
  return e;
}
function Rb(t) {
  return t && t.__esModule ? t.default : t;
}
function Lb(t, e) {
  let { key: n } = t, i = e.selectionManager, l = Pe(), r = !e.selectionManager.canSelectItem(n), o = e.selectionManager.isSelected(n), a = () => i.toggleSelection(n);
  const u = gt(Rb(cl), "@react-aria/grid");
  return {
    checkboxProps: {
      id: l,
      "aria-label": u.format("select"),
      isSelected: o,
      isDisabled: r,
      onChange: a
    }
  };
}
function jb(t, e, n) {
  let { isVirtualized: i, keyboardDelegate: l, layoutDelegate: r, onAction: o, disallowTypeAhead: a, linkBehavior: u = "action", keyboardNavigationBehavior: s = "arrow", escapeKeyBehavior: c = "clearSelection", shouldSelectOnPressUp: d } = t;
  !t["aria-label"] && !t["aria-labelledby"] && console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
  let { listProps: v } = kr({
    selectionManager: e.selectionManager,
    collection: e.collection,
    disabledKeys: e.disabledKeys,
    ref: n,
    keyboardDelegate: l,
    layoutDelegate: r,
    isVirtualized: i,
    selectOnFocus: e.selectionManager.selectionBehavior === "replace",
    shouldFocusWrap: t.shouldFocusWrap,
    linkBehavior: u,
    disallowTypeAhead: a,
    autoFocus: t.autoFocus,
    escapeKeyBehavior: c
  }), p = Pe(t.id);
  Fr.set(e, {
    id: p,
    onAction: o,
    linkBehavior: u,
    keyboardNavigationBehavior: s,
    shouldSelectOnPressUp: d
  });
  let h = Jc({
    selectionManager: e.selectionManager,
    hasItemActions: !!o
  }), m = Cr(n, {
    isDisabled: e.collection.size !== 0
  }), g = ee(t, {
    labelable: !0
  }), b = V(
    g,
    {
      role: "grid",
      id: p,
      "aria-multiselectable": e.selectionManager.selectionMode === "multiple" ? "true" : void 0
    },
    // If collection is empty, make sure the grid is tabbable unless there is a child tabbable element.
    e.collection.size === 0 ? {
      tabIndex: m ? -1 : 0
    } : v,
    h
  );
  return i && (b["aria-rowcount"] = e.collection.size, b["aria-colcount"] = 1), Xc({}, e), {
    gridProps: b
  };
}
const sa = {
  expand: {
    ltr: "ArrowRight",
    rtl: "ArrowLeft"
  },
  collapse: {
    ltr: "ArrowLeft",
    rtl: "ArrowRight"
  }
};
function zb(t, e, n) {
  var i, l;
  let { node: r, isVirtualized: o } = t, { direction: a } = We(), { onAction: u, linkBehavior: s, keyboardNavigationBehavior: c, shouldSelectOnPressUp: d } = Fr.get(e), v = Nt(), p = L(null), h = () => {
    var S;
    n.current !== null && (p.current != null && r.key !== p.current || !(!((S = n.current) === null || S === void 0) && S.contains(document.activeElement))) && Te(n.current);
  }, m = {}, g = t.hasChildItems, b = e.selectionManager.isLink(r.key);
  if (r != null && "expandedKeys" in e) {
    var E, D, k;
    let S = (E = (D = e.collection).getChildren) === null || E === void 0 ? void 0 : E.call(D, r.key);
    g = g || [
      ...S ?? []
    ].length > 1, u == null && !b && e.selectionManager.selectionMode === "none" && g && (u = () => e.toggleKey(r.key));
    let w = g ? e.expandedKeys.has(r.key) : void 0, W = 1;
    var P;
    if (r.level > 0 && (r == null ? void 0 : r.parentKey) != null) {
      let J = e.collection.getItem(r.parentKey);
      if (J) {
        var T, M;
        let N = (T = (M = e.collection).getChildren) === null || T === void 0 ? void 0 : T.call(M, J.key);
        W = Kt(N).index + 1;
      }
    } else W = ((P = (k = [
      ...e.collection
    ].filter((J) => J.level === 0).at(-1)) === null || k === void 0 ? void 0 : k.index) !== null && P !== void 0 ? P : 0) + 1;
    m = {
      "aria-expanded": w,
      "aria-level": r.level + 1,
      "aria-posinset": (r == null ? void 0 : r.index) + 1,
      "aria-setsize": W
    };
  }
  let { itemProps: F, ...H } = Nn({
    selectionManager: e.selectionManager,
    key: r.key,
    ref: n,
    isVirtualized: o,
    shouldSelectOnPressUp: t.shouldSelectOnPressUp || d,
    onAction: u || !((i = r.props) === null || i === void 0) && i.onAction ? Dt((l = r.props) === null || l === void 0 ? void 0 : l.onAction, u ? () => u(r.key) : void 0) : void 0,
    focus: h,
    linkBehavior: s
  }), K = (S) => {
    if (!S.currentTarget.contains(S.target) || !n.current || !document.activeElement) return;
    let w = Xe(n.current);
    if (w.currentNode = document.activeElement, "expandedKeys" in e && document.activeElement === n.current) {
      if (S.key === sa.expand[a] && e.selectionManager.focusedKey === r.key && g && !e.expandedKeys.has(r.key)) {
        e.toggleKey(r.key), S.stopPropagation();
        return;
      } else if (S.key === sa.collapse[a] && e.selectionManager.focusedKey === r.key && g && e.expandedKeys.has(r.key)) {
        e.toggleKey(r.key), S.stopPropagation();
        return;
      }
    }
    switch (S.key) {
      case "ArrowLeft":
        if (c === "arrow") {
          let J = a === "rtl" ? w.nextNode() : w.previousNode();
          if (J)
            S.preventDefault(), S.stopPropagation(), Te(J), nt(J, {
              containingElement: Ze(n.current)
            });
          else if (S.preventDefault(), S.stopPropagation(), a === "rtl")
            Te(n.current), nt(n.current, {
              containingElement: Ze(n.current)
            });
          else {
            w.currentNode = n.current;
            let N = ca(w);
            N && (Te(N), nt(N, {
              containingElement: Ze(n.current)
            }));
          }
        }
        break;
      case "ArrowRight":
        if (c === "arrow") {
          let J = a === "rtl" ? w.previousNode() : w.nextNode();
          if (J)
            S.preventDefault(), S.stopPropagation(), Te(J), nt(J, {
              containingElement: Ze(n.current)
            });
          else if (S.preventDefault(), S.stopPropagation(), a === "ltr")
            Te(n.current), nt(n.current, {
              containingElement: Ze(n.current)
            });
          else {
            w.currentNode = n.current;
            let N = ca(w);
            N && (Te(N), nt(N, {
              containingElement: Ze(n.current)
            }));
          }
        }
        break;
      case "ArrowUp":
      case "ArrowDown":
        if (!S.altKey && n.current.contains(S.target)) {
          var W;
          S.stopPropagation(), S.preventDefault(), (W = n.current.parentElement) === null || W === void 0 || W.dispatchEvent(new KeyboardEvent(S.nativeEvent.type, S.nativeEvent));
        }
        break;
    }
  }, y = (S) => {
    if (p.current = r.key, S.target !== n.current) {
      Zt() || e.selectionManager.setFocusedKey(r.key);
      return;
    }
  }, R = (S) => {
    if (!(!S.currentTarget.contains(S.target) || !n.current || !document.activeElement))
      switch (S.key) {
        case "Tab":
          if (c === "tab") {
            let w = Xe(n.current, {
              tabbable: !0
            });
            w.currentNode = document.activeElement, (S.shiftKey ? w.previousNode() : w.nextNode()) && S.stopPropagation();
          }
      }
  }, A = cr(r.props), B = H.hasAction ? A : {}, j = V(F, B, {
    role: "row",
    onKeyDownCapture: K,
    onKeyDown: R,
    onFocus: y,
    // 'aria-label': [(node.textValue || undefined), rowAnnouncement].filter(Boolean).join(', '),
    "aria-label": r.textValue || void 0,
    "aria-selected": e.selectionManager.canSelectItem(r.key) ? e.selectionManager.isSelected(r.key) : void 0,
    "aria-disabled": e.selectionManager.isDisabled(r.key) || void 0,
    "aria-labelledby": v && r.textValue ? `${aa(e, r.key)} ${v}` : void 0,
    id: aa(e, r.key)
  });
  o && (j["aria-rowindex"] = r.index + 1);
  let x = {
    role: "gridcell",
    "aria-colindex": 1
  };
  return {
    rowProps: {
      ...V(j, m)
    },
    gridCellProps: x,
    descriptionProps: {
      id: v
    },
    ...H
  };
}
function ca(t) {
  let e = null, n = null;
  do
    n = t.lastChild(), n && (e = n);
  while (n);
  return e;
}
const ed = /* @__PURE__ */ new WeakMap();
function Ob(t, e, n) {
  let { value: i, children: l, "aria-label": r, "aria-labelledby": o } = t;
  const a = t.isDisabled || e.isDisabled;
  let u = l != null, s = r != null || o != null;
  !u && !s && process.env.NODE_ENV !== "production" && console.warn("If you do not provide children, you must specify an aria-label for accessibility");
  let c = e.selectedValue === i, d = (F) => {
    F.stopPropagation(), e.setSelectedValue(i);
  }, { pressProps: v, isPressed: p } = bt({
    isDisabled: a
  }), { pressProps: h, isPressed: m } = bt({
    isDisabled: a,
    onPress() {
      var F;
      e.setSelectedValue(i), (F = n.current) === null || F === void 0 || F.focus();
    }
  }), { focusableProps: g } = jt(V(t, {
    onFocus: () => e.setLastFocusedValue(i)
  }), n), b = V(v, g), E = ee(t, {
    labelable: !0
  }), D = -1;
  e.selectedValue != null ? e.selectedValue === i && (D = 0) : (e.lastFocusedValue === i || e.lastFocusedValue == null) && (D = 0), a && (D = void 0);
  let { name: k, descriptionId: P, errorMessageId: T, validationBehavior: M } = ed.get(e);
  return si(n, e.selectedValue, e.setSelectedValue), ol({
    validationBehavior: M
  }, e, n), {
    labelProps: V(h, {
      onClick: (F) => F.preventDefault()
    }),
    inputProps: V(E, {
      ...b,
      type: "radio",
      name: k,
      tabIndex: D,
      disabled: a,
      required: e.isRequired && M === "native",
      checked: c,
      value: i,
      onChange: d,
      "aria-describedby": [
        t["aria-describedby"],
        e.isInvalid ? T : null,
        P
      ].filter(Boolean).join(" ") || void 0
    }),
    isDisabled: a,
    isSelected: c,
    isPressed: p || m
  };
}
function Vb(t, e) {
  let { name: n, isReadOnly: i, isRequired: l, isDisabled: r, orientation: o = "vertical", validationBehavior: a = "aria" } = t, { direction: u } = We(), { isInvalid: s, validationErrors: c, validationDetails: d } = e.displayValidation, { labelProps: v, fieldProps: p, descriptionProps: h, errorMessageProps: m } = di({
    ...t,
    // Radio group is not an HTML input element so it
    // shouldn't be labeled by a <label> element.
    labelElementType: "span",
    isInvalid: e.isInvalid,
    errorMessage: t.errorMessage || c
  }), g = ee(t, {
    labelable: !0
  }), { focusWithinProps: b } = cn({
    onBlurWithin(k) {
      var P;
      (P = t.onBlur) === null || P === void 0 || P.call(t, k), e.selectedValue || e.setLastFocusedValue(null);
    },
    onFocusWithin: t.onFocus,
    onFocusWithinChange: t.onFocusChange
  }), E = (k) => {
    let P;
    switch (k.key) {
      case "ArrowRight":
        u === "rtl" && o !== "vertical" ? P = "prev" : P = "next";
        break;
      case "ArrowLeft":
        u === "rtl" && o !== "vertical" ? P = "next" : P = "prev";
        break;
      case "ArrowDown":
        P = "next";
        break;
      case "ArrowUp":
        P = "prev";
        break;
      default:
        return;
    }
    k.preventDefault();
    let T = Xe(k.currentTarget, {
      from: k.target
    }), M;
    P === "next" ? (M = T.nextNode(), M || (T.currentNode = k.currentTarget, M = T.firstChild())) : (M = T.previousNode(), M || (T.currentNode = k.currentTarget, M = T.lastChild())), M && (M.focus(), e.setSelectedValue(M.value));
  }, D = Pe(n);
  return ed.set(e, {
    name: D,
    descriptionId: h.id,
    errorMessageId: m.id,
    validationBehavior: a
  }), {
    radioGroupProps: V(g, {
      // https://www.w3.org/TR/wai-aria-1.2/#radiogroup
      role: "radiogroup",
      onKeyDown: E,
      "aria-invalid": e.isInvalid || void 0,
      "aria-errormessage": t["aria-errormessage"],
      "aria-readonly": i || void 0,
      "aria-required": l || void 0,
      "aria-disabled": r || void 0,
      "aria-orientation": o,
      ...p,
      ...b
    }),
    labelProps: v,
    descriptionProps: h,
    errorMessageProps: m,
    isInvalid: s,
    validationErrors: c,
    validationDetails: d
  };
}
const td = /* @__PURE__ */ new WeakMap();
function Hb(t, e, n) {
  let { keyboardDelegate: i, isDisabled: l, isRequired: r, name: o, validationBehavior: a = "aria" } = t, u = Kn({
    usage: "search",
    sensitivity: "base"
  }), s = U(() => i || new In(e.collection, e.disabledKeys, n, u), [
    i,
    e.collection,
    e.disabledKeys,
    u,
    n
  ]), { menuTriggerProps: c, menuProps: d } = Ar({
    isDisabled: l,
    type: "listbox"
  }, e, n), v = (F) => {
    switch (F.key) {
      case "ArrowLeft": {
        var H, K;
        F.preventDefault();
        let A = e.selectedKey != null ? (H = s.getKeyAbove) === null || H === void 0 ? void 0 : H.call(s, e.selectedKey) : (K = s.getFirstKey) === null || K === void 0 ? void 0 : K.call(s);
        A && e.setSelectedKey(A);
        break;
      }
      case "ArrowRight": {
        var y, R;
        F.preventDefault();
        let A = e.selectedKey != null ? (y = s.getKeyBelow) === null || y === void 0 ? void 0 : y.call(s, e.selectedKey) : (R = s.getFirstKey) === null || R === void 0 ? void 0 : R.call(s);
        A && e.setSelectedKey(A);
        break;
      }
    }
  }, { typeSelectProps: p } = Ks({
    keyboardDelegate: s,
    selectionManager: e.selectionManager,
    onTypeSelect(F) {
      e.setSelectedKey(F);
    }
  }), { isInvalid: h, validationErrors: m, validationDetails: g } = e.displayValidation, { labelProps: b, fieldProps: E, descriptionProps: D, errorMessageProps: k } = di({
    ...t,
    labelElementType: "span",
    isInvalid: h,
    errorMessage: t.errorMessage || m
  });
  p.onKeyDown = p.onKeyDownCapture, delete p.onKeyDownCapture;
  let P = ee(t, {
    labelable: !0
  }), T = V(p, c, E), M = Pe();
  return td.set(e, {
    isDisabled: l,
    isRequired: r,
    name: o,
    validationBehavior: a
  }), {
    labelProps: {
      ...b,
      onClick: () => {
        if (!t.isDisabled) {
          var F;
          (F = n.current) === null || F === void 0 || F.focus(), gr("keyboard");
        }
      }
    },
    triggerProps: V(P, {
      ...T,
      isDisabled: l,
      onKeyDown: Dt(T.onKeyDown, v, t.onKeyDown),
      onKeyUp: t.onKeyUp,
      "aria-labelledby": [
        M,
        T["aria-labelledby"],
        T["aria-label"] && !T["aria-labelledby"] ? T.id : null
      ].filter(Boolean).join(" "),
      onFocus(F) {
        e.isFocused || (t.onFocus && t.onFocus(F), t.onFocusChange && t.onFocusChange(!0), e.setFocused(!0));
      },
      onBlur(F) {
        e.isOpen || (t.onBlur && t.onBlur(F), t.onFocusChange && t.onFocusChange(!1), e.setFocused(!1));
      }
    }),
    valueProps: {
      id: M
    },
    menuProps: {
      ...d,
      autoFocus: e.focusStrategy || !0,
      shouldSelectOnPressUp: !0,
      shouldFocusOnHover: !0,
      disallowEmptySelection: !0,
      linkBehavior: "selection",
      onBlur: (F) => {
        F.currentTarget.contains(F.relatedTarget) || (t.onBlur && t.onBlur(F), t.onFocusChange && t.onFocusChange(!1), e.setFocused(!1));
      },
      "aria-labelledby": [
        E["aria-labelledby"],
        T["aria-label"] && !E["aria-labelledby"] ? T.id : null
      ].filter(Boolean).join(" ")
    },
    descriptionProps: D,
    errorMessageProps: k,
    isInvalid: h,
    validationErrors: m,
    validationDetails: g
  };
}
function Ub(t, e, n) {
  let i = td.get(e) || {}, { autoComplete: l, name: r = i.name, isDisabled: o = i.isDisabled } = t, { validationBehavior: a, isRequired: u } = i, { visuallyHiddenProps: s } = fi();
  si(t.selectRef, e.selectedKey, e.setSelectedKey), ol({
    validationBehavior: a,
    focus: () => {
      var d;
      return (d = n.current) === null || d === void 0 ? void 0 : d.focus();
    }
  }, e, t.selectRef);
  var c;
  return {
    containerProps: {
      ...s,
      "aria-hidden": !0,
      // @ts-ignore
      "data-react-aria-prevent-focus": !0,
      // @ts-ignore
      "data-a11y-ignore": "aria-hidden-focus"
    },
    inputProps: {
      style: {
        display: "none"
      }
    },
    selectProps: {
      tabIndex: -1,
      autoComplete: l,
      disabled: o,
      required: a === "native" && u,
      name: r,
      value: (c = e.selectedKey) !== null && c !== void 0 ? c : void 0,
      onChange: (d) => e.setSelectedKey(d.target.value)
    }
  };
}
function Wb(t) {
  let { state: e, triggerRef: n, label: i, name: l, isDisabled: r } = t, o = L(null), { containerProps: a, selectProps: u } = Ub({
    ...t,
    selectRef: o
  }, e, n);
  var s;
  return e.collection.size <= 300 ? /* @__PURE__ */ $.createElement("div", {
    ...a,
    "data-testid": "hidden-select-container"
  }, /* @__PURE__ */ $.createElement("label", null, i, /* @__PURE__ */ $.createElement("select", {
    ...u,
    ref: o
  }, /* @__PURE__ */ $.createElement("option", null), [
    ...e.collection.getKeys()
  ].map((c) => {
    let d = e.collection.getItem(c);
    if (d && d.type === "item") return /* @__PURE__ */ $.createElement("option", {
      key: d.key,
      value: d.key
    }, d.textValue);
  })))) : l ? /* @__PURE__ */ $.createElement("input", {
    type: "hidden",
    autoComplete: u.autoComplete,
    name: l,
    disabled: r,
    value: (s = e.selectedKey) !== null && s !== void 0 ? s : ""
  }) : null;
}
function Gb(t) {
  let e = ee(t, {
    labelable: !0
  }), n;
  return t.orientation === "vertical" && (n = "vertical"), t.elementType !== "hr" ? {
    separatorProps: {
      ...e,
      role: "separator",
      "aria-orientation": n
    }
  } : {
    separatorProps: e
  };
}
function _b(t, e, n) {
  let { labelProps: i, inputProps: l, isSelected: r, isPressed: o, isDisabled: a, isReadOnly: u } = lu(t, e, n);
  return {
    labelProps: i,
    inputProps: {
      ...l,
      role: "switch",
      checked: r
    },
    isSelected: r,
    isPressed: o,
    isDisabled: a,
    isReadOnly: u
  };
}
const Nr = /* @__PURE__ */ new WeakMap();
function nr(t) {
  return typeof t == "string" ? t.replace(/\s*/g, "") : "" + t;
}
function qb(t, e) {
  let n = Nr.get(t);
  if (!n) throw new Error("Unknown grid");
  return `${n}-${nr(e)}`;
}
function nd(t, e, n) {
  let i = Nr.get(t);
  if (!i) throw new Error("Unknown grid");
  return `${i}-${nr(e)}-${nr(n)}`;
}
function id(t, e) {
  return [
    ...t.collection.rowHeaderColumnKeys
  ].map((n) => nd(t, e, n)).join(" ");
}
var ld = {};
ld = {
  ascending: "تصاعدي",
  ascendingSort: (t) => `ترتيب حسب العمود ${t.columnName} بترتيب تصاعدي`,
  columnSize: (t) => `${t.value} بالبكسل`,
  descending: "تنازلي",
  descendingSort: (t) => `ترتيب حسب العمود ${t.columnName} بترتيب تنازلي`,
  resizerDescription: "اضغط على مفتاح Enter لبدء تغيير الحجم",
  select: "تحديد",
  selectAll: "تحديد الكل",
  sortable: "عمود قابل للترتيب"
};
var rd = {};
rd = {
  ascending: "възходящ",
  ascendingSort: (t) => `сортирано по колона ${t.columnName} във възходящ ред`,
  columnSize: (t) => `${t.value} пиксела`,
  descending: "низходящ",
  descendingSort: (t) => `сортирано по колона ${t.columnName} в низходящ ред`,
  resizerDescription: "Натиснете „Enter“, за да започнете да преоразмерявате",
  select: "Изберете",
  selectAll: "Изберете всичко",
  sortable: "сортираща колона"
};
var od = {};
od = {
  ascending: "vzestupně",
  ascendingSort: (t) => `řazeno vzestupně podle sloupce ${t.columnName}`,
  columnSize: (t) => `${t.value} pixelů`,
  descending: "sestupně",
  descendingSort: (t) => `řazeno sestupně podle sloupce ${t.columnName}`,
  resizerDescription: "Stisknutím klávesy Enter začnete měnit velikost",
  select: "Vybrat",
  selectAll: "Vybrat vše",
  sortable: "sloupec s možností řazení"
};
var ad = {};
ad = {
  ascending: "stigende",
  ascendingSort: (t) => `sorteret efter kolonne ${t.columnName} i stigende rækkefølge`,
  columnSize: (t) => `${t.value} pixels`,
  descending: "faldende",
  descendingSort: (t) => `sorteret efter kolonne ${t.columnName} i faldende rækkefølge`,
  resizerDescription: "Tryk på Enter for at ændre størrelse",
  select: "Vælg",
  selectAll: "Vælg alle",
  sortable: "sorterbar kolonne"
};
var ud = {};
ud = {
  ascending: "aufsteigend",
  ascendingSort: (t) => `sortiert nach Spalte ${t.columnName} in aufsteigender Reihenfolge`,
  columnSize: (t) => `${t.value} Pixel`,
  descending: "absteigend",
  descendingSort: (t) => `sortiert nach Spalte ${t.columnName} in absteigender Reihenfolge`,
  resizerDescription: "Eingabetaste zum Starten der Größenänderung drücken",
  select: "Auswählen",
  selectAll: "Alles auswählen",
  sortable: "sortierbare Spalte"
};
var sd = {};
sd = {
  ascending: "αύξουσα",
  ascendingSort: (t) => `διαλογή ανά στήλη ${t.columnName} σε αύξουσα σειρά`,
  columnSize: (t) => `${t.value} pixel`,
  descending: "φθίνουσα",
  descendingSort: (t) => `διαλογή ανά στήλη ${t.columnName} σε φθίνουσα σειρά`,
  resizerDescription: "Πατήστε Enter για έναρξη της αλλαγής μεγέθους",
  select: "Επιλογή",
  selectAll: "Επιλογή όλων",
  sortable: "Στήλη διαλογής"
};
var cd = {};
cd = {
  select: "Select",
  selectAll: "Select All",
  sortable: "sortable column",
  ascending: "ascending",
  descending: "descending",
  ascendingSort: (t) => `sorted by column ${t.columnName} in ascending order`,
  descendingSort: (t) => `sorted by column ${t.columnName} in descending order`,
  columnSize: (t) => `${t.value} pixels`,
  resizerDescription: "Press Enter to start resizing"
};
var dd = {};
dd = {
  ascending: "ascendente",
  ascendingSort: (t) => `ordenado por columna ${t.columnName} en sentido ascendente`,
  columnSize: (t) => `${t.value} píxeles`,
  descending: "descendente",
  descendingSort: (t) => `ordenado por columna ${t.columnName} en orden descendente`,
  resizerDescription: "Pulse Intro para empezar a redimensionar",
  select: "Seleccionar",
  selectAll: "Seleccionar todos",
  sortable: "columna ordenable"
};
var fd = {};
fd = {
  ascending: "tõusev järjestus",
  ascendingSort: (t) => `sorditud veeru järgi ${t.columnName} tõusvas järjestuses`,
  columnSize: (t) => `${t.value} pikslit`,
  descending: "laskuv järjestus",
  descendingSort: (t) => `sorditud veeru järgi ${t.columnName} laskuvas järjestuses`,
  resizerDescription: "Suuruse muutmise alustamiseks vajutage klahvi Enter",
  select: "Vali",
  selectAll: "Vali kõik",
  sortable: "sorditav veerg"
};
var pd = {};
pd = {
  ascending: "nouseva",
  ascendingSort: (t) => `lajiteltu sarakkeen ${t.columnName} mukaan nousevassa järjestyksessä`,
  columnSize: (t) => `${t.value} pikseliä`,
  descending: "laskeva",
  descendingSort: (t) => `lajiteltu sarakkeen ${t.columnName} mukaan laskevassa järjestyksessä`,
  resizerDescription: "Aloita koon muutos painamalla Enter-näppäintä",
  select: "Valitse",
  selectAll: "Valitse kaikki",
  sortable: "lajiteltava sarake"
};
var vd = {};
vd = {
  ascending: "croissant",
  ascendingSort: (t) => `trié en fonction de la colonne ${t.columnName} par ordre croissant`,
  columnSize: (t) => `${t.value} pixels`,
  descending: "décroissant",
  descendingSort: (t) => `trié en fonction de la colonne ${t.columnName} par ordre décroissant`,
  resizerDescription: "Appuyez sur Entrée pour commencer le redimensionnement.",
  select: "Sélectionner",
  selectAll: "Sélectionner tout",
  sortable: "colonne triable"
};
var hd = {};
hd = {
  ascending: "עולה",
  ascendingSort: (t) => `מוין לפי עמודה ${t.columnName} בסדר עולה`,
  columnSize: (t) => `${t.value} פיקסלים`,
  descending: "יורד",
  descendingSort: (t) => `מוין לפי עמודה ${t.columnName} בסדר יורד`,
  resizerDescription: "הקש Enter כדי לשנות את הגודל",
  select: "בחר",
  selectAll: "בחר הכול",
  sortable: "עמודה שניתן למיין"
};
var bd = {};
bd = {
  ascending: "rastući",
  ascendingSort: (t) => `razvrstano po stupcima ${t.columnName} rastućem redoslijedom`,
  columnSize: (t) => `${t.value} piksela`,
  descending: "padajući",
  descendingSort: (t) => `razvrstano po stupcima ${t.columnName} padajućim redoslijedom`,
  resizerDescription: "Pritisnite Enter da biste započeli promenu veličine",
  select: "Odaberite",
  selectAll: "Odaberite sve",
  sortable: "stupac koji se može razvrstati"
};
var md = {};
md = {
  ascending: "növekvő",
  ascendingSort: (t) => `rendezve a(z) ${t.columnName} oszlop szerint, növekvő sorrendben`,
  columnSize: (t) => `${t.value} képpont`,
  descending: "csökkenő",
  descendingSort: (t) => `rendezve a(z) ${t.columnName} oszlop szerint, csökkenő sorrendben`,
  resizerDescription: "Nyomja le az Enter billentyűt az átméretezés megkezdéséhez",
  select: "Kijelölés",
  selectAll: "Összes kijelölése",
  sortable: "rendezendő oszlop"
};
var gd = {};
gd = {
  ascending: "crescente",
  ascendingSort: (t) => `in ordine crescente in base alla colonna ${t.columnName}`,
  columnSize: (t) => `${t.value} pixel`,
  descending: "decrescente",
  descendingSort: (t) => `in ordine decrescente in base alla colonna ${t.columnName}`,
  resizerDescription: "Premi Invio per iniziare a ridimensionare",
  select: "Seleziona",
  selectAll: "Seleziona tutto",
  sortable: "colonna ordinabile"
};
var $d = {};
$d = {
  ascending: "昇順",
  ascendingSort: (t) => `列 ${t.columnName} を昇順で並べ替え`,
  columnSize: (t) => `${t.value} ピクセル`,
  descending: "降順",
  descendingSort: (t) => `列 ${t.columnName} を降順で並べ替え`,
  resizerDescription: "Enter キーを押してサイズ変更を開始",
  select: "選択",
  selectAll: "すべて選択",
  sortable: "並べ替え可能な列"
};
var yd = {};
yd = {
  ascending: "오름차순",
  ascendingSort: (t) => `${t.columnName} 열을 기준으로 오름차순으로 정렬됨`,
  columnSize: (t) => `${t.value} 픽셀`,
  descending: "내림차순",
  descendingSort: (t) => `${t.columnName} 열을 기준으로 내림차순으로 정렬됨`,
  resizerDescription: "크기 조정을 시작하려면 Enter를 누르세요.",
  select: "선택",
  selectAll: "모두 선택",
  sortable: "정렬 가능한 열"
};
var xd = {};
xd = {
  ascending: "didėjančia tvarka",
  ascendingSort: (t) => `surikiuota pagal stulpelį ${t.columnName} didėjančia tvarka`,
  columnSize: (t) => `${t.value} piks.`,
  descending: "mažėjančia tvarka",
  descendingSort: (t) => `surikiuota pagal stulpelį ${t.columnName} mažėjančia tvarka`,
  resizerDescription: "Paspauskite „Enter“, kad pradėtumėte keisti dydį",
  select: "Pasirinkti",
  selectAll: "Pasirinkti viską",
  sortable: "rikiuojamas stulpelis"
};
var Ed = {};
Ed = {
  ascending: "augošā secībā",
  ascendingSort: (t) => `kārtots pēc kolonnas ${t.columnName} augošā secībā`,
  columnSize: (t) => `${t.value} pikseļi`,
  descending: "dilstošā secībā",
  descendingSort: (t) => `kārtots pēc kolonnas ${t.columnName} dilstošā secībā`,
  resizerDescription: "Nospiediet Enter, lai sāktu izmēru mainīšanu",
  select: "Atlasīt",
  selectAll: "Atlasīt visu",
  sortable: "kārtojamā kolonna"
};
var Cd = {};
Cd = {
  ascending: "stigende",
  ascendingSort: (t) => `sortert etter kolonne ${t.columnName} i stigende rekkefølge`,
  columnSize: (t) => `${t.value} piksler`,
  descending: "synkende",
  descendingSort: (t) => `sortert etter kolonne ${t.columnName} i synkende rekkefølge`,
  resizerDescription: "Trykk på Enter for å starte størrelsesendring",
  select: "Velg",
  selectAll: "Velg alle",
  sortable: "kolonne som kan sorteres"
};
var Pd = {};
Pd = {
  ascending: "oplopend",
  ascendingSort: (t) => `gesorteerd in oplopende volgorde in kolom ${t.columnName}`,
  columnSize: (t) => `${t.value} pixels`,
  descending: "aflopend",
  descendingSort: (t) => `gesorteerd in aflopende volgorde in kolom ${t.columnName}`,
  resizerDescription: "Druk op Enter om het formaat te wijzigen",
  select: "Selecteren",
  selectAll: "Alles selecteren",
  sortable: "sorteerbare kolom"
};
var Dd = {};
Dd = {
  ascending: "rosnąco",
  ascendingSort: (t) => `posortowano według kolumny ${t.columnName} w porządku rosnącym`,
  columnSize: (t) => `Liczba pikseli: ${t.value}`,
  descending: "malejąco",
  descendingSort: (t) => `posortowano według kolumny ${t.columnName} w porządku malejącym`,
  resizerDescription: "Naciśnij Enter, aby rozpocząć zmienianie rozmiaru",
  select: "Zaznacz",
  selectAll: "Zaznacz wszystko",
  sortable: "kolumna z możliwością sortowania"
};
var Sd = {};
Sd = {
  ascending: "crescente",
  ascendingSort: (t) => `classificado pela coluna ${t.columnName} em ordem crescente`,
  columnSize: (t) => `${t.value} pixels`,
  descending: "decrescente",
  descendingSort: (t) => `classificado pela coluna ${t.columnName} em ordem decrescente`,
  resizerDescription: "Pressione Enter para começar a redimensionar",
  select: "Selecionar",
  selectAll: "Selecionar tudo",
  sortable: "coluna classificável"
};
var wd = {};
wd = {
  ascending: "ascendente",
  ascendingSort: (t) => `Ordenar por coluna ${t.columnName} em ordem ascendente`,
  columnSize: (t) => `${t.value} pixels`,
  descending: "descendente",
  descendingSort: (t) => `Ordenar por coluna ${t.columnName} em ordem descendente`,
  resizerDescription: "Prima Enter para iniciar o redimensionamento",
  select: "Selecionar",
  selectAll: "Selecionar tudo",
  sortable: "Coluna ordenável"
};
var kd = {};
kd = {
  ascending: "crescătoare",
  ascendingSort: (t) => `sortate după coloana ${t.columnName} în ordine crescătoare`,
  columnSize: (t) => `${t.value} pixeli`,
  descending: "descrescătoare",
  descendingSort: (t) => `sortate după coloana ${t.columnName} în ordine descrescătoare`,
  resizerDescription: "Apăsați pe Enter pentru a începe redimensionarea",
  select: "Selectare",
  selectAll: "Selectare totală",
  sortable: "coloană sortabilă"
};
var Td = {};
Td = {
  ascending: "возрастание",
  ascendingSort: (t) => `сортировать столбец ${t.columnName} в порядке возрастания`,
  columnSize: (t) => `${t.value} пикс.`,
  descending: "убывание",
  descendingSort: (t) => `сортировать столбец ${t.columnName} в порядке убывания`,
  resizerDescription: "Нажмите клавишу Enter для начала изменения размеров",
  select: "Выбрать",
  selectAll: "Выбрать все",
  sortable: "сортируемый столбец"
};
var Bd = {};
Bd = {
  ascending: "vzostupne",
  ascendingSort: (t) => `zoradené zostupne podľa stĺpca ${t.columnName}`,
  columnSize: (t) => `Počet pixelov: ${t.value}`,
  descending: "zostupne",
  descendingSort: (t) => `zoradené zostupne podľa stĺpca ${t.columnName}`,
  resizerDescription: "Stlačením klávesu Enter začnete zmenu veľkosti",
  select: "Vybrať",
  selectAll: "Vybrať všetko",
  sortable: "zoraditeľný stĺpec"
};
var Ad = {};
Ad = {
  ascending: "naraščajoče",
  ascendingSort: (t) => `razvrščeno po stolpcu ${t.columnName} v naraščajočem vrstnem redu`,
  columnSize: (t) => `${t.value} slikovnih pik`,
  descending: "padajoče",
  descendingSort: (t) => `razvrščeno po stolpcu ${t.columnName} v padajočem vrstnem redu`,
  resizerDescription: "Pritisnite tipko Enter da začnete spreminjati velikost",
  select: "Izberite",
  selectAll: "Izberite vse",
  sortable: "razvrstljivi stolpec"
};
var Fd = {};
Fd = {
  ascending: "rastući",
  ascendingSort: (t) => `sortirano po kolonama ${t.columnName} rastućim redosledom`,
  columnSize: (t) => `${t.value} piksela`,
  descending: "padajući",
  descendingSort: (t) => `sortirano po kolonama ${t.columnName} padajućim redosledom`,
  resizerDescription: "Pritisnite Enter da biste započeli promenu veličine",
  select: "Izaberite",
  selectAll: "Izaberite sve",
  sortable: "kolona koja se može sortirati"
};
var Kd = {};
Kd = {
  ascending: "stigande",
  ascendingSort: (t) => `sorterat på kolumn ${t.columnName} i stigande ordning`,
  columnSize: (t) => `${t.value} pixlar`,
  descending: "fallande",
  descendingSort: (t) => `sorterat på kolumn ${t.columnName} i fallande ordning`,
  resizerDescription: "Tryck på Retur för att börja ändra storlek",
  select: "Markera",
  selectAll: "Markera allt",
  sortable: "sorterbar kolumn"
};
var Nd = {};
Nd = {
  ascending: "artan sırada",
  ascendingSort: (t) => `${t.columnName} sütuna göre artan düzende sırala`,
  columnSize: (t) => `${t.value} piksel`,
  descending: "azalan sırada",
  descendingSort: (t) => `${t.columnName} sütuna göre azalan düzende sırala`,
  resizerDescription: "Yeniden boyutlandırmak için Enter'a basın",
  select: "Seç",
  selectAll: "Tümünü Seç",
  sortable: "Sıralanabilir sütun"
};
var Id = {};
Id = {
  ascending: "висхідний",
  ascendingSort: (t) => `відсортовано за стовпцем ${t.columnName} у висхідному порядку`,
  columnSize: (t) => `${t.value} пікс.`,
  descending: "низхідний",
  descendingSort: (t) => `відсортовано за стовпцем ${t.columnName} у низхідному порядку`,
  resizerDescription: "Натисніть Enter, щоб почати зміну розміру",
  select: "Вибрати",
  selectAll: "Вибрати все",
  sortable: "сортувальний стовпець"
};
var Md = {};
Md = {
  ascending: "升序",
  ascendingSort: (t) => `按列 ${t.columnName} 升序排序`,
  columnSize: (t) => `${t.value} 像素`,
  descending: "降序",
  descendingSort: (t) => `按列 ${t.columnName} 降序排序`,
  resizerDescription: "按“输入”键开始调整大小。",
  select: "选择",
  selectAll: "全选",
  sortable: "可排序的列"
};
var Rd = {};
Rd = {
  ascending: "遞增",
  ascendingSort: (t) => `已依據「${t.columnName}」欄遞增排序`,
  columnSize: (t) => `${t.value} 像素`,
  descending: "遞減",
  descendingSort: (t) => `已依據「${t.columnName}」欄遞減排序`,
  resizerDescription: "按 Enter 鍵以開始調整大小",
  select: "選取",
  selectAll: "全選",
  sortable: "可排序的欄"
};
var dl = {};
dl = {
  "ar-AE": ld,
  "bg-BG": rd,
  "cs-CZ": od,
  "da-DK": ad,
  "de-DE": ud,
  "el-GR": sd,
  "en-US": cd,
  "es-ES": dd,
  "et-EE": fd,
  "fi-FI": pd,
  "fr-FR": vd,
  "he-IL": hd,
  "hr-HR": bd,
  "hu-HU": md,
  "it-IT": gd,
  "ja-JP": $d,
  "ko-KR": yd,
  "lt-LT": xd,
  "lv-LV": Ed,
  "nb-NO": Cd,
  "nl-NL": Pd,
  "pl-PL": Dd,
  "pt-BR": Sd,
  "pt-PT": wd,
  "ro-RO": kd,
  "ru-RU": Td,
  "sk-SK": Bd,
  "sl-SI": Ad,
  "sr-SP": Fd,
  "sv-SE": Kd,
  "tr-TR": Nd,
  "uk-UA": Id,
  "zh-CN": Md,
  "zh-TW": Rd
};
class Yb extends bc {
  isCell(e) {
    return e.type === "cell" || e.type === "rowheader" || e.type === "column";
  }
  getKeyBelow(e) {
    let n = this.collection.getItem(e);
    if (!n) return null;
    if (n.type === "column") {
      let i = At(Oe(n, this.collection));
      if (i) return i.key;
      let l = this.getFirstKey();
      return l == null || !this.collection.getItem(l) ? null : super.getKeyForItemInRowByIndex(l, n.index);
    }
    return super.getKeyBelow(e);
  }
  getKeyAbove(e) {
    let n = this.collection.getItem(e);
    if (!n) return null;
    if (n.type === "column") {
      let r = n.parentKey != null ? this.collection.getItem(n.parentKey) : null;
      return r && r.type === "column" ? r.key : null;
    }
    let i = super.getKeyAbove(e), l = i != null ? this.collection.getItem(i) : null;
    return l && l.type !== "headerrow" ? i : this.isCell(n) ? this.collection.columns[n.index].key : this.collection.columns[0].key;
  }
  findNextColumnKey(e) {
    let n = this.findNextKey(e.key, (l) => l.type === "column");
    if (n != null) return n;
    let i = this.collection.headerRows[e.level];
    for (let l of Oe(i, this.collection))
      if (l.type === "column") return l.key;
    return null;
  }
  findPreviousColumnKey(e) {
    let n = this.findPreviousKey(e.key, (r) => r.type === "column");
    if (n != null) return n;
    let i = this.collection.headerRows[e.level], l = [
      ...Oe(i, this.collection)
    ];
    for (let r = l.length - 1; r >= 0; r--) {
      let o = l[r];
      if (o.type === "column") return o.key;
    }
    return null;
  }
  getKeyRightOf(e) {
    let n = this.collection.getItem(e);
    return n ? n.type === "column" ? this.direction === "rtl" ? this.findPreviousColumnKey(n) : this.findNextColumnKey(n) : super.getKeyRightOf(e) : null;
  }
  getKeyLeftOf(e) {
    let n = this.collection.getItem(e);
    return n ? n.type === "column" ? this.direction === "rtl" ? this.findNextColumnKey(n) : this.findPreviousColumnKey(n) : super.getKeyLeftOf(e) : null;
  }
  getKeyForSearch(e, n) {
    if (!this.collator) return null;
    let i = this.collection, l = n ?? this.getFirstKey();
    if (l == null) return null;
    let r = i.getItem(l);
    var o;
    (r == null ? void 0 : r.type) === "cell" && (l = (o = r.parentKey) !== null && o !== void 0 ? o : null);
    let a = !1;
    for (; l != null; ) {
      let u = i.getItem(l);
      if (!u) return null;
      if (u.textValue) {
        let s = u.textValue.slice(0, e.length);
        if (this.collator.compare(s, e) === 0) return u.key;
      }
      for (let s of Oe(u, this.collection)) {
        let c = i.columns[s.index];
        if (i.rowHeaderColumnKeys.has(c.key) && s.textValue) {
          let d = s.textValue.slice(0, e.length);
          if (this.collator.compare(d, e) === 0) {
            let v = n != null ? i.getItem(n) : r;
            return (v == null ? void 0 : v.type) === "cell" ? s.key : u.key;
          }
        }
      }
      l = this.getKeyBelow(l), l == null && !a && (l = this.getFirstKey(), a = !0);
    }
    return null;
  }
}
function Zb(t) {
  return t && t.__esModule ? t.default : t;
}
function Xb(t, e, n) {
  let { keyboardDelegate: i, isVirtualized: l, layoutDelegate: r, layout: o } = t, a = Kn({
    usage: "search",
    sensitivity: "base"
  }), { direction: u } = We(), s = e.selectionManager.disabledBehavior, c = U(() => i || new Yb({
    collection: e.collection,
    disabledKeys: e.disabledKeys,
    disabledBehavior: s,
    ref: n,
    direction: u,
    collator: a,
    layoutDelegate: r,
    layout: o
  }), [
    i,
    e.collection,
    e.disabledKeys,
    s,
    n,
    u,
    a,
    r,
    o
  ]), d = Pe(t.id);
  Nr.set(e, d);
  let { gridProps: v } = Nb({
    ...t,
    id: d,
    keyboardDelegate: c
  }, e, n);
  l && (v["aria-rowcount"] = e.collection.size + e.collection.headerRows.length), Ri() && "expandedKeys" in e && (v.role = "treegrid");
  let { column: p, direction: h } = e.sortDescriptor || {}, m = gt(Zb(dl), "@react-aria/table"), g = U(() => {
    var E, D;
    let k = (D = (E = e.collection.columns.find((P) => P.key === p)) === null || E === void 0 ? void 0 : E.textValue) !== null && D !== void 0 ? D : "";
    return h && p ? m.format(`${h}Sort`, {
      columnName: k
    }) : void 0;
  }, [
    h,
    p,
    e.collection.columns
  ]), b = ui(g);
  return dr(() => {
    g && ln(g, "assertive", 500);
  }, [
    g
  ]), {
    gridProps: V(v, b, {
      // merge sort description with long press information
      "aria-describedby": [
        b["aria-describedby"],
        v["aria-describedby"]
      ].filter(Boolean).join(" ")
    })
  };
}
function Jb(t) {
  return t && t.__esModule ? t.default : t;
}
function Qb(t, e, n) {
  var i, l;
  let { node: r } = t, o = r.props.allowsSorting, { gridCellProps: a } = Qc({
    ...t,
    focusMode: "child"
  }, e, n), u = r.props.isSelectionCell && e.selectionManager.selectionMode === "single", { pressProps: s } = bt({
    isDisabled: !o || u,
    onPress() {
      e.sort(r.key);
    },
    ref: n
  }), { focusableProps: c } = jt({}, n), d, v = ((i = e.sortDescriptor) === null || i === void 0 ? void 0 : i.column) === r.key, p = (l = e.sortDescriptor) === null || l === void 0 ? void 0 : l.direction;
  r.props.allowsSorting && !Jn() && (d = v ? p : "none");
  let h = gt(Jb(dl), "@react-aria/table"), m;
  o && (m = `${h.format("sortable")}`, v && p && Jn() && (m = `${m}, ${h.format(p)}`));
  let g = ui(m), b = e.collection.size === 0;
  return Z(() => {
    b && e.selectionManager.focusedKey === r.key && e.selectionManager.setFocusedKey(null);
  }, [
    b,
    e.selectionManager,
    r.key
  ]), {
    columnHeaderProps: {
      ...V(
        c,
        a,
        s,
        g,
        // If the table is empty, make all column headers untabbable
        b ? {
          tabIndex: -1
        } : null
      ),
      role: "columnheader",
      id: qb(e, r.key),
      "aria-colspan": r.colSpan && r.colSpan > 1 ? r.colSpan : void 0,
      "aria-sort": d
    }
  };
}
const da = {
  expand: {
    ltr: "ArrowRight",
    rtl: "ArrowLeft"
  },
  collapse: {
    ltr: "ArrowLeft",
    rtl: "ArrowRight"
  }
};
function e4(t, e, n) {
  let { node: i, isVirtualized: l } = t, { rowProps: r, ...o } = Mb(t, e, n), { direction: a } = We();
  l && !(Ri() && "expandedKeys" in e) ? r["aria-rowindex"] = i.index + 1 + e.collection.headerRows.length : delete r["aria-rowindex"];
  let u = {};
  if (Ri() && "expandedKeys" in e) {
    let P = e.keyMap.get(i.key);
    if (P != null) {
      var s, c, d, v, p, h;
      let T = ((s = P.props) === null || s === void 0 ? void 0 : s.UNSTABLE_childItems) || ((d = P.props) === null || d === void 0 || (c = d.children) === null || c === void 0 ? void 0 : c.length) > e.userColumnCount;
      var m, g, b, E;
      u = {
        onKeyDown: (M) => {
          (M.key === da.expand[a] && e.selectionManager.focusedKey === P.key && T && e.expandedKeys !== "all" && !e.expandedKeys.has(P.key) || M.key === da.collapse[a] && e.selectionManager.focusedKey === P.key && T && (e.expandedKeys === "all" || e.expandedKeys.has(P.key))) && (e.toggleKey(P.key), M.stopPropagation());
        },
        "aria-expanded": T ? e.expandedKeys === "all" || e.expandedKeys.has(i.key) : void 0,
        "aria-level": P.level,
        "aria-posinset": ((m = P.indexOfType) !== null && m !== void 0 ? m : 0) + 1,
        "aria-setsize": P.level > 1 ? ((b = (v = Kt((g = (p = e.keyMap.get(P.parentKey)) === null || p === void 0 ? void 0 : p.childNodes) !== null && g !== void 0 ? g : [])) === null || v === void 0 ? void 0 : v.indexOfType) !== null && b !== void 0 ? b : 0) + 1 : ((E = (h = Kt(e.collection.body.childNodes)) === null || h === void 0 ? void 0 : h.indexOfType) !== null && E !== void 0 ? E : 0) + 1
      };
    }
  }
  let D = cr(i.props), k = o.hasAction ? D : {};
  return {
    rowProps: {
      ...V(r, u, k),
      "aria-labelledby": id(e, i.key)
    },
    ...o
  };
}
function t4(t, e, n) {
  let { node: i, isVirtualized: l } = t, r = {
    role: "row"
  };
  return l && !(Ri() && "expandedKeys" in e) && (r["aria-rowindex"] = i.index + 1), {
    rowProps: r
  };
}
function n4(t, e, n) {
  var i;
  let { gridCellProps: l, isPressed: r } = Qc(t, e, n), o = (i = t.node.column) === null || i === void 0 ? void 0 : i.key;
  return o != null && e.collection.rowHeaderColumnKeys.has(o) && (l.role = "rowheader", l.id = nd(e, t.node.parentKey, o)), {
    gridCellProps: l,
    isPressed: r
  };
}
function i4(t) {
  return t && t.__esModule ? t.default : t;
}
function l4(t, e) {
  let { key: n } = t;
  const { checkboxProps: i } = Lb(t, e);
  return {
    checkboxProps: {
      ...i,
      "aria-labelledby": `${i.id} ${id(e, n)}`
    }
  };
}
function r4(t) {
  let { isEmpty: e, isSelectAll: n, selectionMode: i } = t.selectionManager;
  return {
    checkboxProps: {
      "aria-label": gt(i4(dl), "@react-aria/table").format(i === "single" ? "select" : "selectAll"),
      isSelected: n,
      isDisabled: i !== "multiple" || t.collection.size === 0 || t.collection.rows.length === 1 && t.collection.rows[0].type === "loader",
      isIndeterminate: !e && !n,
      onChange: () => t.selectionManager.toggleSelectAll()
    }
  };
}
function Ld() {
  return Ib();
}
const jd = /* @__PURE__ */ new WeakMap();
function qi(t, e, n) {
  return t ? (typeof e == "string" && (e = e.replace(/\s+/g, "")), `${jd.get(t)}-${n}-${e}`) : "";
}
function o4(t, e, n) {
  let { key: i, isDisabled: l, shouldSelectOnPressUp: r } = t, { selectionManager: o, selectedKey: a } = e, u = i === a, s = l || e.isDisabled || e.selectionManager.isDisabled(i), { itemProps: c, isPressed: d } = Nn({
    selectionManager: o,
    key: i,
    ref: n,
    isDisabled: s,
    shouldSelectOnPressUp: r,
    linkBehavior: "selection"
  }), v = qi(e, i, "tab"), p = qi(e, i, "tabpanel"), { tabIndex: h } = c, m = e.collection.getItem(i), g = ee(m == null ? void 0 : m.props, {
    labelable: !0
  });
  delete g.id;
  let b = tl(m == null ? void 0 : m.props), { focusableProps: E } = jt({
    isDisabled: s
  }, n);
  return {
    tabProps: V(g, E, b, c, {
      id: v,
      "aria-selected": u,
      "aria-disabled": s || void 0,
      "aria-controls": u ? p : void 0,
      tabIndex: s ? void 0 : h,
      role: "tab"
    }),
    isSelected: u,
    isDisabled: s,
    isPressed: d
  };
}
function a4(t, e, n) {
  let i = Cr(n) ? void 0 : 0;
  var l;
  const r = qi(e, (l = t.id) !== null && l !== void 0 ? l : e == null ? void 0 : e.selectedKey, "tabpanel"), o = Tn({
    ...t,
    id: r,
    "aria-labelledby": qi(e, e == null ? void 0 : e.selectedKey, "tab")
  });
  return {
    tabPanelProps: V(o, {
      tabIndex: i,
      role: "tabpanel",
      "aria-describedby": t["aria-describedby"],
      "aria-details": t["aria-details"]
    })
  };
}
class u4 {
  getKeyLeftOf(e) {
    return this.flipDirection ? this.getNextKey(e) : this.getPreviousKey(e);
  }
  getKeyRightOf(e) {
    return this.flipDirection ? this.getPreviousKey(e) : this.getNextKey(e);
  }
  isDisabled(e) {
    var n, i;
    return this.disabledKeys.has(e) || !!(!((i = this.collection.getItem(e)) === null || i === void 0 || (n = i.props) === null || n === void 0) && n.isDisabled);
  }
  getFirstKey() {
    let e = this.collection.getFirstKey();
    return e != null && this.isDisabled(e) && (e = this.getNextKey(e)), e;
  }
  getLastKey() {
    let e = this.collection.getLastKey();
    return e != null && this.isDisabled(e) && (e = this.getPreviousKey(e)), e;
  }
  getKeyAbove(e) {
    return this.tabDirection ? null : this.getPreviousKey(e);
  }
  getKeyBelow(e) {
    return this.tabDirection ? null : this.getNextKey(e);
  }
  getNextKey(e) {
    let n = e;
    do
      n = this.collection.getKeyAfter(n), n == null && (n = this.collection.getFirstKey());
    while (n != null && this.isDisabled(n));
    return n;
  }
  getPreviousKey(e) {
    let n = e;
    do
      n = this.collection.getKeyBefore(n), n == null && (n = this.collection.getLastKey());
    while (n != null && this.isDisabled(n));
    return n;
  }
  constructor(e, n, i, l = /* @__PURE__ */ new Set()) {
    this.collection = e, this.flipDirection = n === "rtl" && i === "horizontal", this.disabledKeys = l, this.tabDirection = i === "horizontal";
  }
}
function s4(t, e, n) {
  let { orientation: i = "horizontal", keyboardActivation: l = "automatic" } = t, { collection: r, selectionManager: o, disabledKeys: a } = e, { direction: u } = We(), s = U(() => new u4(r, u, i, a), [
    r,
    a,
    i,
    u
  ]), { collectionProps: c } = sl({
    ref: n,
    selectionManager: o,
    keyboardDelegate: s,
    selectOnFocus: l === "automatic",
    disallowEmptySelection: !0,
    scrollRef: n,
    linkBehavior: "selection"
  }), d = Pe();
  jd.set(e, d);
  let v = Tn({
    ...t,
    id: d
  });
  return {
    tabListProps: {
      ...V(c, v),
      role: "tablist",
      "aria-orientation": i,
      tabIndex: void 0
    }
  };
}
const zd = /* @__PURE__ */ new WeakMap();
function c4(t, e, n) {
  let { direction: i } = We(), l = t.keyboardDelegate || new In({
    collection: e.collection,
    ref: n,
    orientation: "horizontal",
    direction: i,
    disabledKeys: e.disabledKeys,
    disabledBehavior: e.selectionManager.disabledBehavior
  }), { labelProps: r, fieldProps: o, descriptionProps: a, errorMessageProps: u } = di({
    ...t,
    labelElementType: "span"
  }), { gridProps: s } = jb({
    ...t,
    ...o,
    keyboardDelegate: l,
    shouldFocusWrap: !0,
    linkBehavior: "override",
    keyboardNavigationBehavior: "tab"
  }, e, n), [c, d] = Y(!1), { focusWithinProps: v } = cn({
    onFocusWithinChange: d
  }), p = ee(t), h = L(e.collection.size);
  return Z(() => {
    n.current && h.current > 0 && e.collection.size === 0 && c && n.current.focus(), h.current = e.collection.size;
  }, [
    e.collection.size,
    c,
    n
  ]), zd.set(e, {
    onRemove: t.onRemove
  }), {
    gridProps: V(s, p, {
      role: e.collection.size ? "grid" : null,
      "aria-atomic": !1,
      "aria-relevant": "additions",
      "aria-live": c ? "polite" : "off",
      ...v,
      ...o
    }),
    labelProps: r,
    descriptionProps: a,
    errorMessageProps: u
  };
}
var Od = {};
Od = {
  removeButtonLabel: "إزالة",
  removeDescription: "اضغط على مفتاح DELETE لإزالة علامة."
};
var Vd = {};
Vd = {
  removeButtonLabel: "Премахване",
  removeDescription: "Натиснете Delete, за да премахнете маркера."
};
var Hd = {};
Hd = {
  removeButtonLabel: "Odebrat",
  removeDescription: "Stisknutím klávesy Delete odeberete značku."
};
var Ud = {};
Ud = {
  removeButtonLabel: "Fjern",
  removeDescription: "Tryk på Slet for at fjerne tag."
};
var Wd = {};
Wd = {
  removeButtonLabel: "Entfernen",
  removeDescription: "Auf „Löschen“ drücken, um das Tag zu entfernen."
};
var Gd = {};
Gd = {
  removeButtonLabel: "Κατάργηση",
  removeDescription: "Πατήστε Διαγραφή για να καταργήσετε την ετικέτα."
};
var _d = {};
_d = {
  removeDescription: "Press Delete to remove tag.",
  removeButtonLabel: "Remove"
};
var qd = {};
qd = {
  removeButtonLabel: "Quitar",
  removeDescription: "Pulse Eliminar para quitar la etiqueta."
};
var Yd = {};
Yd = {
  removeButtonLabel: "Eemalda",
  removeDescription: "Sildi eemaldamiseks vajutage kustutusklahvi Delete."
};
var Zd = {};
Zd = {
  removeButtonLabel: "Poista",
  removeDescription: "Poista tunniste painamalla Poista-painiketta."
};
var Xd = {};
Xd = {
  removeButtonLabel: "Supprimer",
  removeDescription: "Appuyez sur Supprimer pour supprimer l’étiquette."
};
var Jd = {};
Jd = {
  removeButtonLabel: "הסר",
  removeDescription: "לחץ על מחק כדי להסיר תג."
};
var Qd = {};
Qd = {
  removeButtonLabel: "Ukloni",
  removeDescription: "Pritisnite Delete za uklanjanje oznake."
};
var ef = {};
ef = {
  removeButtonLabel: "Eltávolítás",
  removeDescription: "Nyomja meg a Delete billentyűt a címke eltávolításához."
};
var tf = {};
tf = {
  removeButtonLabel: "Rimuovi",
  removeDescription: "Premi Elimina per rimuovere il tag."
};
var nf = {};
nf = {
  removeButtonLabel: "削除",
  removeDescription: "タグを削除するには、Delete キーを押します。"
};
var lf = {};
lf = {
  removeButtonLabel: "제거",
  removeDescription: "태그를 제거하려면 Delete 키를 누르십시오."
};
var rf = {};
rf = {
  removeButtonLabel: "Pašalinti",
  removeDescription: "Norėdami pašalinti žymą, paspauskite „Delete“ klavišą."
};
var of = {};
of = {
  removeButtonLabel: "Noņemt",
  removeDescription: "Nospiediet Delete [Dzēst], lai noņemtu tagu."
};
var af = {};
af = {
  removeButtonLabel: "Fjern",
  removeDescription: "Trykk på Slett for å fjerne taggen."
};
var uf = {};
uf = {
  removeButtonLabel: "Verwijderen",
  removeDescription: "Druk op Verwijderen om de tag te verwijderen."
};
var sf = {};
sf = {
  removeButtonLabel: "Usuń",
  removeDescription: "Naciśnij Usuń, aby usunąć znacznik."
};
var cf = {};
cf = {
  removeButtonLabel: "Remover",
  removeDescription: "Pressione Delete para remover a tag."
};
var df = {};
df = {
  removeButtonLabel: "Eliminar",
  removeDescription: "Prima Delete para eliminar a tag."
};
var ff = {};
ff = {
  removeButtonLabel: "Îndepărtaţi",
  removeDescription: "Apăsați pe Delete (Ștergere) pentru a elimina eticheta."
};
var pf = {};
pf = {
  removeButtonLabel: "Удалить",
  removeDescription: "Нажмите DELETE, чтобы удалить тег."
};
var vf = {};
vf = {
  removeButtonLabel: "Odstrániť",
  removeDescription: "Ak chcete odstrániť značku, stlačte kláves Delete."
};
var hf = {};
hf = {
  removeButtonLabel: "Odstrani",
  removeDescription: "Pritisnite Delete, da odstranite oznako."
};
var bf = {};
bf = {
  removeButtonLabel: "Ukloni",
  removeDescription: "Pritisnite Obriši da biste uklonili oznaku."
};
var mf = {};
mf = {
  removeButtonLabel: "Ta bort",
  removeDescription: "Tryck på Radera för att ta bort taggen."
};
var gf = {};
gf = {
  removeButtonLabel: "Kaldır",
  removeDescription: "Etiketi kaldırmak için Sil tuşuna basın."
};
var $f = {};
$f = {
  removeButtonLabel: "Вилучити",
  removeDescription: "Натисніть Delete, щоб вилучити тег."
};
var yf = {};
yf = {
  removeButtonLabel: "删除",
  removeDescription: "按下“删除”以删除标记。"
};
var xf = {};
xf = {
  removeButtonLabel: "移除",
  removeDescription: "按 Delete 鍵以移除標記。"
};
var Ef = {};
Ef = {
  "ar-AE": Od,
  "bg-BG": Vd,
  "cs-CZ": Hd,
  "da-DK": Ud,
  "de-DE": Wd,
  "el-GR": Gd,
  "en-US": _d,
  "es-ES": qd,
  "et-EE": Yd,
  "fi-FI": Zd,
  "fr-FR": Xd,
  "he-IL": Jd,
  "hr-HR": Qd,
  "hu-HU": ef,
  "it-IT": tf,
  "ja-JP": nf,
  "ko-KR": lf,
  "lt-LT": rf,
  "lv-LV": of,
  "nb-NO": af,
  "nl-NL": uf,
  "pl-PL": sf,
  "pt-BR": cf,
  "pt-PT": df,
  "ro-RO": ff,
  "ru-RU": pf,
  "sk-SK": vf,
  "sl-SI": hf,
  "sr-SP": bf,
  "sv-SE": mf,
  "tr-TR": gf,
  "uk-UA": $f,
  "zh-CN": yf,
  "zh-TW": xf
};
function d4(t) {
  return t && t.__esModule ? t.default : t;
}
function f4(t, e, n) {
  let { item: i } = t, l = gt(d4(Ef), "@react-aria/tag"), r = Pe(), { onRemove: o } = zd.get(e) || {}, { rowProps: a, gridCellProps: u, ...s } = zb({
    node: i
  }, e, n), { descriptionProps: c, ...d } = s, v = e.disabledKeys.has(i.key) || i.props.isDisabled, p = (M) => {
    if (M.key === "Delete" || M.key === "Backspace") {
      if (v) return;
      M.preventDefault(), e.selectionManager.isSelected(i.key) ? o == null || o(new Set(e.selectionManager.selectedKeys)) : o == null || o(/* @__PURE__ */ new Set([
        i.key
      ]));
    }
  }, h = Oa();
  h === "virtual" && typeof window < "u" && "ontouchstart" in window && (h = "pointer");
  let m = o && (h === "keyboard" || h === "virtual") ? l.format("removeDescription") : "", g = ui(m), b = i.key === e.selectionManager.focusedKey, E = e.selectionManager.focusedKey != null, D = -1;
  !v && (b || !E) && (D = 0);
  let k = ee(i.props), P = cr(i.props), { focusableProps: T } = jt({
    isDisabled: v
  }, n);
  return {
    removeButtonProps: {
      "aria-label": l.format("removeButtonLabel"),
      "aria-labelledby": `${r} ${a.id}`,
      isDisabled: v,
      id: r,
      onPress: () => o ? o(/* @__PURE__ */ new Set([
        i.key
      ])) : null
    },
    rowProps: V(T, a, k, P, {
      tabIndex: D,
      onKeyDown: o ? p : void 0,
      "aria-describedby": g["aria-describedby"]
    }),
    gridCellProps: V(u, {
      "aria-errormessage": t["aria-errormessage"],
      "aria-label": t["aria-label"]
    }),
    ...d,
    allowsRemoving: !!o
  };
}
const ri = /* @__PURE__ */ _({});
let p4 = (t) => {
  let { onHoverStart: e, onHoverChange: n, onHoverEnd: i, ...l } = t;
  return l;
};
const v4 = /* @__PURE__ */ ci(function(e, n) {
  [e, n] = fe(e, n, ri);
  let { hoverProps: i, isHovered: l } = He(e), { isFocused: r, isFocusVisible: o, focusProps: a } = Fe({
    isTextInput: !0,
    autoFocus: e.autoFocus
  }), u = !!e["aria-invalid"] && e["aria-invalid"] !== "false", s = ne({
    ...e,
    values: {
      isHovered: l,
      isFocused: r,
      isFocusVisible: o,
      isDisabled: e.disabled || !1,
      isInvalid: u
    },
    defaultClassName: "react-aria-Input"
  });
  return /* @__PURE__ */ $.createElement("input", {
    ...V(p4(e), a, i),
    ...s,
    ref: n,
    "data-focused": r || void 0,
    "data-disabled": e.disabled || void 0,
    "data-hovered": l || void 0,
    "data-focus-visible": o || void 0,
    "data-invalid": u || void 0
  });
}), $t = /* @__PURE__ */ _({}), h4 = /* @__PURE__ */ ci(function(e, n) {
  [e, n] = fe(e, n, $t);
  let { elementType: i = "label", ...l } = e;
  return /* @__PURE__ */ $.createElement(i, {
    className: "react-aria-Label",
    ...l,
    ref: n
  });
}), b4 = /* @__PURE__ */ _(null), m4 = /* @__PURE__ */ new Set([
  "form",
  "formAction",
  "formEncType",
  "formMethod",
  "formNoValidate",
  "formTarget",
  "name",
  "value"
]), wt = /* @__PURE__ */ _({}), pn = /* @__PURE__ */ ci(function(e, n) {
  [e, n] = fe(e, n, wt), e = g4(e);
  let i = e, { isPending: l } = i, { buttonProps: r, isPressed: o } = $0(e, n), { focusProps: a, isFocused: u, isFocusVisible: s } = Fe(e), { hoverProps: c, isHovered: d } = He({
    ...e,
    isDisabled: e.isDisabled || l
  }), v = {
    isHovered: d,
    isPressed: (i.isPressed || o) && !l,
    isFocused: u,
    isFocusVisible: s,
    isDisabled: e.isDisabled || !1,
    isPending: l ?? !1
  }, p = ne({
    ...e,
    values: v,
    defaultClassName: "react-aria-Button"
  }), h = Pe(r.id), m = Pe(), g = r["aria-labelledby"];
  l && (g ? g = `${g} ${m}` : r["aria-label"] && (g = `${h} ${m}`));
  let b = L(l);
  return Z(() => {
    let E = {
      "aria-labelledby": g || h
    };
    (!b.current && u && l || b.current && u && !l) && ln(E, "assertive"), b.current = l;
  }, [
    l,
    u,
    g,
    h
  ]), /* @__PURE__ */ $.createElement("button", {
    ...ee(e, {
      propNames: m4
    }),
    ...V(r, a, c),
    ...p,
    type: r.type === "submit" && l ? "button" : r.type,
    id: h,
    ref: n,
    "aria-labelledby": g,
    slot: e.slot || void 0,
    "aria-disabled": l ? "true" : r["aria-disabled"],
    "data-disabled": e.isDisabled || void 0,
    "data-pressed": v.isPressed || void 0,
    "data-hovered": d || void 0,
    "data-focused": u || void 0,
    "data-pending": l || void 0,
    "data-focus-visible": s || void 0
  }, /* @__PURE__ */ $.createElement(b4.Provider, {
    value: {
      id: m
    }
  }, p.children));
});
function g4(t) {
  return t.isPending && (t.onPress = void 0, t.onPressStart = void 0, t.onPressEnd = void 0, t.onPressChange = void 0, t.onPressUp = void 0, t.onKeyDown = void 0, t.onKeyUp = void 0, t.onClick = void 0, t.href = void 0), t;
}
const ft = /* @__PURE__ */ _({}), Je = /* @__PURE__ */ re(function(e, n) {
  [e, n] = fe(e, n, ft);
  let { elementType: i = "span", ...l } = e;
  return /* @__PURE__ */ $.createElement(i, {
    className: "react-aria-Text",
    ...l,
    ref: n
  });
}), vn = /* @__PURE__ */ _(null), $4 = /* @__PURE__ */ re(function(e, n) {
  let i = z(vn);
  return i != null && i.isInvalid ? /* @__PURE__ */ $.createElement(y4, {
    ...e,
    ref: n
  }) : null;
}), y4 = /* @__PURE__ */ re((t, e) => {
  let n = z(vn), i = ee(t), l = ne({
    ...t,
    defaultClassName: "react-aria-FieldError",
    defaultChildren: n.validationErrors.length === 0 ? void 0 : n.validationErrors.join(" "),
    values: n
  });
  return l.children == null ? null : /* @__PURE__ */ $.createElement(Je, {
    slot: "errorMessage",
    ...i,
    ...l,
    ref: e
  });
});
function x4(t = {}) {
  let [e, n] = dt(t.value, t.defaultValue || [], t.onChange), i = !!t.isRequired && e.length === 0, l = L(/* @__PURE__ */ new Map()), r = fn({
    ...t,
    value: e
  }), o = r.displayValidation.isInvalid;
  var a;
  return {
    ...r,
    value: e,
    setValue(s) {
      t.isReadOnly || t.isDisabled || n(s);
    },
    isDisabled: t.isDisabled || !1,
    isReadOnly: t.isReadOnly || !1,
    isSelected(s) {
      return e.includes(s);
    },
    addValue(s) {
      t.isReadOnly || t.isDisabled || e.includes(s) || n(e.concat(s));
    },
    removeValue(s) {
      t.isReadOnly || t.isDisabled || e.includes(s) && n(e.filter((c) => c !== s));
    },
    toggleValue(s) {
      t.isReadOnly || t.isDisabled || (e.includes(s) ? n(e.filter((c) => c !== s)) : n(e.concat(s)));
    },
    setInvalid(s, c) {
      let d = new Map(l.current);
      c.isInvalid ? d.set(s, c) : d.delete(s), l.current = d, r.updateValidation(K0(...d.values()));
    },
    validationState: (a = t.validationState) !== null && a !== void 0 ? a : o ? "invalid" : null,
    isInvalid: o,
    isRequired: i
  };
}
class ir {
  *[Symbol.iterator]() {
    yield* this.iterable;
  }
  get size() {
    return this.keyMap.size;
  }
  getKeys() {
    return this.keyMap.keys();
  }
  getKeyBefore(e) {
    let n = this.keyMap.get(e);
    var i;
    return n && (i = n.prevKey) !== null && i !== void 0 ? i : null;
  }
  getKeyAfter(e) {
    let n = this.keyMap.get(e);
    var i;
    return n && (i = n.nextKey) !== null && i !== void 0 ? i : null;
  }
  getFirstKey() {
    return this.firstKey;
  }
  getLastKey() {
    return this.lastKey;
  }
  getItem(e) {
    var n;
    return (n = this.keyMap.get(e)) !== null && n !== void 0 ? n : null;
  }
  at(e) {
    const n = [
      ...this.getKeys()
    ];
    return this.getItem(n[e]);
  }
  getChildren(e) {
    let n = this.keyMap.get(e);
    return (n == null ? void 0 : n.childNodes) || [];
  }
  constructor(e) {
    this.keyMap = /* @__PURE__ */ new Map(), this.firstKey = null, this.lastKey = null, this.iterable = e;
    let n = (o) => {
      if (this.keyMap.set(o.key, o), o.childNodes && o.type === "section") for (let a of o.childNodes) n(a);
    };
    for (let o of e) n(o);
    let i = null, l = 0;
    for (let [o, a] of this.keyMap)
      i ? (i.nextKey = o, a.prevKey = i.key) : (this.firstKey = o, a.prevKey = void 0), a.type === "item" && (a.index = l++), i = a, i.nextKey = void 0;
    var r;
    this.lastKey = (r = i == null ? void 0 : i.key) !== null && r !== void 0 ? r : null;
  }
}
class vt extends Set {
  constructor(e, n, i) {
    super(e), e instanceof vt ? (this.anchorKey = n ?? e.anchorKey, this.currentKey = i ?? e.currentKey) : (this.anchorKey = n ?? null, this.currentKey = i ?? null);
  }
}
function E4(t, e) {
  if (t.size !== e.size) return !1;
  for (let n of t)
    if (!e.has(n)) return !1;
  return !0;
}
function vi(t) {
  let { selectionMode: e = "none", disallowEmptySelection: n = !1, allowDuplicateSelectionEvents: i, selectionBehavior: l = "toggle", disabledBehavior: r = "all" } = t, o = L(!1), [, a] = Y(!1), u = L(null), s = L(null), [, c] = Y(null), d = U(() => fa(t.selectedKeys), [
    t.selectedKeys
  ]), v = U(() => fa(t.defaultSelectedKeys, new vt()), [
    t.defaultSelectedKeys
  ]), [p, h] = dt(d, v, t.onSelectionChange), m = U(() => t.disabledKeys ? new Set(t.disabledKeys) : /* @__PURE__ */ new Set(), [
    t.disabledKeys
  ]), [g, b] = Y(l);
  l === "replace" && g === "toggle" && typeof p == "object" && p.size === 0 && b("replace");
  let E = L(l);
  return Z(() => {
    l !== E.current && (b(l), E.current = l);
  }, [
    l
  ]), {
    selectionMode: e,
    disallowEmptySelection: n,
    selectionBehavior: g,
    setSelectionBehavior: b,
    get isFocused() {
      return o.current;
    },
    setFocused(D) {
      o.current = D, a(D);
    },
    get focusedKey() {
      return u.current;
    },
    get childFocusStrategy() {
      return s.current;
    },
    setFocusedKey(D, k = "first") {
      u.current = D, s.current = k, c(D);
    },
    selectedKeys: p,
    setSelectedKeys(D) {
      (i || !E4(D, p)) && h(D);
    },
    disabledKeys: m,
    disabledBehavior: r
  };
}
function fa(t, e) {
  return t ? t === "all" ? "all" : new vt(t) : e;
}
class Mn {
  /**
  * The type of selection that is allowed in the collection.
  */
  get selectionMode() {
    return this.state.selectionMode;
  }
  /**
  * Whether the collection allows empty selection.
  */
  get disallowEmptySelection() {
    return this.state.disallowEmptySelection;
  }
  /**
  * The selection behavior for the collection.
  */
  get selectionBehavior() {
    return this.state.selectionBehavior;
  }
  /**
  * Sets the selection behavior for the collection.
  */
  setSelectionBehavior(e) {
    this.state.setSelectionBehavior(e);
  }
  /**
  * Whether the collection is currently focused.
  */
  get isFocused() {
    return this.state.isFocused;
  }
  /**
  * Sets whether the collection is focused.
  */
  setFocused(e) {
    this.state.setFocused(e);
  }
  /**
  * The current focused key in the collection.
  */
  get focusedKey() {
    return this.state.focusedKey;
  }
  /** Whether the first or last child of the focused key should receive focus. */
  get childFocusStrategy() {
    return this.state.childFocusStrategy;
  }
  /**
  * Sets the focused key.
  */
  setFocusedKey(e, n) {
    (e == null || this.collection.getItem(e)) && this.state.setFocusedKey(e, n);
  }
  /**
  * The currently selected keys in the collection.
  */
  get selectedKeys() {
    return this.state.selectedKeys === "all" ? new Set(this.getSelectAllKeys()) : this.state.selectedKeys;
  }
  /**
  * The raw selection value for the collection.
  * Either 'all' for select all, or a set of keys.
  */
  get rawSelection() {
    return this.state.selectedKeys;
  }
  /**
  * Returns whether a key is selected.
  */
  isSelected(e) {
    if (this.state.selectionMode === "none") return !1;
    let n = this.getKey(e);
    return n == null ? !1 : this.state.selectedKeys === "all" ? this.canSelectItem(n) : this.state.selectedKeys.has(n);
  }
  /**
  * Whether the selection is empty.
  */
  get isEmpty() {
    return this.state.selectedKeys !== "all" && this.state.selectedKeys.size === 0;
  }
  /**
  * Whether all items in the collection are selected.
  */
  get isSelectAll() {
    if (this.isEmpty) return !1;
    if (this.state.selectedKeys === "all") return !0;
    if (this._isSelectAll != null) return this._isSelectAll;
    let e = this.getSelectAllKeys(), n = this.state.selectedKeys;
    return this._isSelectAll = e.every((i) => n.has(i)), this._isSelectAll;
  }
  get firstSelectedKey() {
    let e = null;
    for (let i of this.state.selectedKeys) {
      let l = this.collection.getItem(i);
      (!e || l && Kl(this.collection, l, e) < 0) && (e = l);
    }
    var n;
    return (n = e == null ? void 0 : e.key) !== null && n !== void 0 ? n : null;
  }
  get lastSelectedKey() {
    let e = null;
    for (let i of this.state.selectedKeys) {
      let l = this.collection.getItem(i);
      (!e || l && Kl(this.collection, l, e) > 0) && (e = l);
    }
    var n;
    return (n = e == null ? void 0 : e.key) !== null && n !== void 0 ? n : null;
  }
  get disabledKeys() {
    return this.state.disabledKeys;
  }
  get disabledBehavior() {
    return this.state.disabledBehavior;
  }
  /**
  * Extends the selection to the given key.
  */
  extendSelection(e) {
    if (this.selectionMode === "none") return;
    if (this.selectionMode === "single") {
      this.replaceSelection(e);
      return;
    }
    let n = this.getKey(e);
    if (n == null) return;
    let i;
    if (this.state.selectedKeys === "all") i = new vt([
      n
    ], n, n);
    else {
      let o = this.state.selectedKeys;
      var l;
      let a = (l = o.anchorKey) !== null && l !== void 0 ? l : n;
      i = new vt(o, a, n);
      var r;
      for (let u of this.getKeyRange(a, (r = o.currentKey) !== null && r !== void 0 ? r : n)) i.delete(u);
      for (let u of this.getKeyRange(n, a)) this.canSelectItem(u) && i.add(u);
    }
    this.state.setSelectedKeys(i);
  }
  getKeyRange(e, n) {
    let i = this.collection.getItem(e), l = this.collection.getItem(n);
    return i && l ? Kl(this.collection, i, l) <= 0 ? this.getKeyRangeInternal(e, n) : this.getKeyRangeInternal(n, e) : [];
  }
  getKeyRangeInternal(e, n) {
    var i;
    if (!((i = this.layoutDelegate) === null || i === void 0) && i.getKeyRange) return this.layoutDelegate.getKeyRange(e, n);
    let l = [], r = e;
    for (; r != null; ) {
      let o = this.collection.getItem(r);
      if (o && (o.type === "item" || o.type === "cell" && this.allowsCellSelection) && l.push(r), r === n) return l;
      r = this.collection.getKeyAfter(r);
    }
    return [];
  }
  getKey(e) {
    let n = this.collection.getItem(e);
    if (!n || n.type === "cell" && this.allowsCellSelection) return e;
    for (; n && n.type !== "item" && n.parentKey != null; ) n = this.collection.getItem(n.parentKey);
    return !n || n.type !== "item" ? null : n.key;
  }
  /**
  * Toggles whether the given key is selected.
  */
  toggleSelection(e) {
    if (this.selectionMode === "none") return;
    if (this.selectionMode === "single" && !this.isSelected(e)) {
      this.replaceSelection(e);
      return;
    }
    let n = this.getKey(e);
    if (n == null) return;
    let i = new vt(this.state.selectedKeys === "all" ? this.getSelectAllKeys() : this.state.selectedKeys);
    i.has(n) ? i.delete(n) : this.canSelectItem(n) && (i.add(n), i.anchorKey = n, i.currentKey = n), !(this.disallowEmptySelection && i.size === 0) && this.state.setSelectedKeys(i);
  }
  /**
  * Replaces the selection with only the given key.
  */
  replaceSelection(e) {
    if (this.selectionMode === "none") return;
    let n = this.getKey(e);
    if (n == null) return;
    let i = this.canSelectItem(n) ? new vt([
      n
    ], n, n) : new vt();
    this.state.setSelectedKeys(i);
  }
  /**
  * Replaces the selection with the given keys.
  */
  setSelectedKeys(e) {
    if (this.selectionMode === "none") return;
    let n = new vt();
    for (let i of e) {
      let l = this.getKey(i);
      if (l != null && (n.add(l), this.selectionMode === "single"))
        break;
    }
    this.state.setSelectedKeys(n);
  }
  getSelectAllKeys() {
    let e = [], n = (i) => {
      for (; i != null; ) {
        if (this.canSelectItem(i)) {
          var l;
          let o = this.collection.getItem(i);
          (o == null ? void 0 : o.type) === "item" && e.push(i);
          var r;
          o != null && o.hasChildNodes && (this.allowsCellSelection || o.type !== "item") && n((r = (l = At(Oe(o, this.collection))) === null || l === void 0 ? void 0 : l.key) !== null && r !== void 0 ? r : null);
        }
        i = this.collection.getKeyAfter(i);
      }
    };
    return n(this.collection.getFirstKey()), e;
  }
  /**
  * Selects all items in the collection.
  */
  selectAll() {
    !this.isSelectAll && this.selectionMode === "multiple" && this.state.setSelectedKeys("all");
  }
  /**
  * Removes all keys from the selection.
  */
  clearSelection() {
    !this.disallowEmptySelection && (this.state.selectedKeys === "all" || this.state.selectedKeys.size > 0) && this.state.setSelectedKeys(new vt());
  }
  /**
  * Toggles between select all and an empty selection.
  */
  toggleSelectAll() {
    this.isSelectAll ? this.clearSelection() : this.selectAll();
  }
  select(e, n) {
    this.selectionMode !== "none" && (this.selectionMode === "single" ? this.isSelected(e) && !this.disallowEmptySelection ? this.toggleSelection(e) : this.replaceSelection(e) : this.selectionBehavior === "toggle" || n && (n.pointerType === "touch" || n.pointerType === "virtual") ? this.toggleSelection(e) : this.replaceSelection(e));
  }
  /**
  * Returns whether the current selection is equal to the given selection.
  */
  isSelectionEqual(e) {
    if (e === this.state.selectedKeys) return !0;
    let n = this.selectedKeys;
    if (e.size !== n.size) return !1;
    for (let i of e)
      if (!n.has(i)) return !1;
    for (let i of n)
      if (!e.has(i)) return !1;
    return !0;
  }
  canSelectItem(e) {
    var n;
    if (this.state.selectionMode === "none" || this.state.disabledKeys.has(e)) return !1;
    let i = this.collection.getItem(e);
    return !(!i || !(i == null || (n = i.props) === null || n === void 0) && n.isDisabled || i.type === "cell" && !this.allowsCellSelection);
  }
  isDisabled(e) {
    var n, i;
    return this.state.disabledBehavior === "all" && (this.state.disabledKeys.has(e) || !!(!((i = this.collection.getItem(e)) === null || i === void 0 || (n = i.props) === null || n === void 0) && n.isDisabled));
  }
  isLink(e) {
    var n, i;
    return !!(!((i = this.collection.getItem(e)) === null || i === void 0 || (n = i.props) === null || n === void 0) && n.href);
  }
  getItemProps(e) {
    var n;
    return (n = this.collection.getItem(e)) === null || n === void 0 ? void 0 : n.props;
  }
  withCollection(e) {
    return new Mn(e, this.state, {
      allowsCellSelection: this.allowsCellSelection,
      layoutDelegate: this.layoutDelegate || void 0
    });
  }
  constructor(e, n, i) {
    this.collection = e, this.state = n;
    var l;
    this.allowsCellSelection = (l = i == null ? void 0 : i.allowsCellSelection) !== null && l !== void 0 ? l : !1, this._isSelectAll = null, this.layoutDelegate = (i == null ? void 0 : i.layoutDelegate) || null;
  }
}
function Ir(t) {
  let { filter: e, layoutDelegate: n } = t, i = vi(t), l = U(() => t.disabledKeys ? new Set(t.disabledKeys) : /* @__PURE__ */ new Set(), [
    t.disabledKeys
  ]), r = X((s) => e ? new ir(e(s)) : new ir(s), [
    e
  ]), o = U(() => ({
    suppressTextValueWarning: t.suppressTextValueWarning
  }), [
    t.suppressTextValueWarning
  ]), a = Tr(t, r, o), u = U(() => new Mn(a, i, {
    layoutDelegate: n
  }), [
    a,
    i,
    n
  ]);
  return Cf(a, u), {
    collection: a,
    disabledKeys: l,
    selectionManager: u
  };
}
function C4(t, e) {
  let n = U(() => e ? t.collection.UNSTABLE_filter(e) : t.collection, [
    t.collection,
    e
  ]), i = t.selectionManager.withCollection(n);
  return Cf(n, i), {
    collection: n,
    selectionManager: i,
    disabledKeys: t.disabledKeys
  };
}
function Cf(t, e) {
  const n = L(null);
  Z(() => {
    if (e.focusedKey != null && !t.getItem(e.focusedKey) && n.current) {
      const c = n.current.getItem(e.focusedKey), d = [
        ...n.current.getKeys()
      ].map((b) => {
        const E = n.current.getItem(b);
        return (E == null ? void 0 : E.type) === "item" ? E : null;
      }).filter((b) => b !== null), v = [
        ...t.getKeys()
      ].map((b) => {
        const E = t.getItem(b);
        return (E == null ? void 0 : E.type) === "item" ? E : null;
      }).filter((b) => b !== null);
      var i, l;
      const p = ((i = d == null ? void 0 : d.length) !== null && i !== void 0 ? i : 0) - ((l = v == null ? void 0 : v.length) !== null && l !== void 0 ? l : 0);
      var r, o, a;
      let h = Math.min(p > 1 ? Math.max(((r = c == null ? void 0 : c.index) !== null && r !== void 0 ? r : 0) - p + 1, 0) : (o = c == null ? void 0 : c.index) !== null && o !== void 0 ? o : 0, ((a = v == null ? void 0 : v.length) !== null && a !== void 0 ? a : 0) - 1), m = null, g = !1;
      for (; h >= 0; ) {
        if (!e.isDisabled(v[h].key)) {
          m = v[h];
          break;
        }
        if (h < v.length - 1 && !g) h++;
        else {
          g = !0;
          var u, s;
          h > ((u = c == null ? void 0 : c.index) !== null && u !== void 0 ? u : 0) && (h = (s = c == null ? void 0 : c.index) !== null && s !== void 0 ? s : 0), h--;
        }
      }
      e.setFocusedKey(m ? m.key : null);
    }
    n.current = t;
  }, [
    t,
    e
  ]);
}
function Mr(t) {
  var e;
  let [n, i] = dt(t.selectedKey, (e = t.defaultSelectedKey) !== null && e !== void 0 ? e : null, t.onSelectionChange), l = U(() => n != null ? [
    n
  ] : [], [
    n
  ]), { collection: r, disabledKeys: o, selectionManager: a } = Ir({
    ...t,
    selectionMode: "single",
    disallowEmptySelection: !0,
    allowDuplicateSelectionEvents: !0,
    selectedKeys: l,
    onSelectionChange: (s) => {
      if (s === "all") return;
      var c;
      let d = (c = s.values().next().value) !== null && c !== void 0 ? c : null;
      d === n && t.onSelectionChange && t.onSelectionChange(d), i(d);
    }
  }), u = n != null ? r.getItem(n) : null;
  return {
    collection: r,
    disabledKeys: o,
    selectionManager: a,
    selectedKey: n,
    setSelectedKey: i,
    selectedItem: u
  };
}
function hi(t) {
  let [e, n] = dt(t.isOpen, t.defaultOpen || !1, t.onOpenChange);
  const i = X(() => {
    n(!0);
  }, [
    n
  ]), l = X(() => {
    n(!1);
  }, [
    n
  ]), r = X(() => {
    n(!e);
  }, [
    n,
    e
  ]);
  return {
    isOpen: e,
    setOpen: n,
    open: i,
    close: l,
    toggle: r
  };
}
function P4(t) {
  var e;
  let { defaultFilter: n, menuTrigger: i = "input", allowsEmptyCollection: l = !1, allowsCustomValue: r, shouldCloseOnBlur: o = !0 } = t, [a, u] = Y(!1), [s, c] = Y(!1), [d, v] = Y(null), p = (se) => {
    t.onSelectionChange && t.onSelectionChange(se), se === b && (ue(), N());
  };
  var h;
  let { collection: m, selectionManager: g, selectedKey: b, setSelectedKey: E, selectedItem: D, disabledKeys: k } = Mr({
    ...t,
    onSelectionChange: p,
    items: (h = t.items) !== null && h !== void 0 ? h : t.defaultItems
  }), P = t.defaultInputValue;
  if (P == null) {
    var T, M;
    b == null ? P = "" : P = (M = (T = m.getItem(b)) === null || T === void 0 ? void 0 : T.textValue) !== null && M !== void 0 ? M : "";
  }
  let [F, H] = dt(t.inputValue, P, t.onInputChange), K = m, y = U(() => (
    // No default filter if items are controlled.
    t.items != null || !n ? m : D4(m, F, n)
  ), [
    m,
    F,
    n,
    t.items
  ]), [R, A] = Y(y), B = L("focus"), x = hi({
    ...t,
    onOpenChange: (se) => {
      t.onOpenChange && t.onOpenChange(se, se ? B.current : void 0), g.setFocused(se), se || g.setFocusedKey(null);
    },
    isOpen: void 0,
    defaultOpen: void 0
  }), S = (se = null, Ee) => {
    let Ke = Ee === "manual" || Ee === "focus" && i === "focus";
    (l || y.size > 0 || Ke && K.size > 0 || t.items) && (Ke && !x.isOpen && t.items === void 0 && u(!0), B.current = Ee, v(se), x.open());
  }, w = (se = null, Ee) => {
    let Ke = Ee === "manual" || Ee === "focus" && i === "focus";
    !(l || y.size > 0 || Ke && K.size > 0 || t.items) && !x.isOpen || (Ke && !x.isOpen && t.items === void 0 && u(!0), x.isOpen || (B.current = Ee), J(se));
  }, W = X(() => {
    A(a ? K : y);
  }, [
    a,
    K,
    y
  ]), J = X((se = null) => {
    x.isOpen && W(), v(se), x.toggle();
  }, [
    x,
    W
  ]), N = X(() => {
    x.isOpen && (W(), x.close());
  }, [
    x,
    W
  ]), [Q, te] = Y(F), ue = () => {
    var se, Ee;
    let Ke = b != null && (Ee = (se = m.getItem(b)) === null || se === void 0 ? void 0 : se.textValue) !== null && Ee !== void 0 ? Ee : "";
    te(Ke), H(Ke);
  };
  var we, De;
  let ke = L((De = (we = t.selectedKey) !== null && we !== void 0 ? we : t.defaultSelectedKey) !== null && De !== void 0 ? De : null);
  var Le;
  let Ve = L(b != null && (Le = (e = m.getItem(b)) === null || e === void 0 ? void 0 : e.textValue) !== null && Le !== void 0 ? Le : "");
  Z(() => {
    var se;
    s && (y.size > 0 || l) && !x.isOpen && F !== Q && i !== "manual" && S(null, "input"), !a && !l && x.isOpen && y.size === 0 && N(), b != null && b !== ke.current && N(), F !== Q && (g.setFocusedKey(null), u(!1), F === "" && (t.inputValue === void 0 || t.selectedKey === void 0) && E(null)), b !== ke.current && (t.inputValue === void 0 || t.selectedKey === void 0) ? ue() : Q !== F && te(F);
    var Ee;
    let Ke = b != null && (Ee = (se = m.getItem(b)) === null || se === void 0 ? void 0 : se.textValue) !== null && Ee !== void 0 ? Ee : "";
    !s && b != null && t.inputValue === void 0 && b === ke.current && Ve.current !== Ke && (te(Ke), H(Ke)), ke.current = b, Ve.current = Ke;
  });
  let Ge = fn({
    ...t,
    value: U(() => ({
      inputValue: F,
      selectedKey: b
    }), [
      F,
      b
    ])
  }), ie = () => {
    r && b == null ? G() : ae();
  }, G = () => {
    ke.current = null, E(null), N();
  }, ae = () => {
    if (t.selectedKey !== void 0 && t.inputValue !== void 0) {
      var se, Ee;
      (se = t.onSelectionChange) === null || se === void 0 || se.call(t, b);
      var Ke;
      let Rn = b != null && (Ke = (Ee = m.getItem(b)) === null || Ee === void 0 ? void 0 : Ee.textValue) !== null && Ke !== void 0 ? Ke : "";
      te(Rn), N();
    } else
      ue(), N();
  };
  const Ae = () => {
    if (r) {
      var se, Ee;
      const Ke = b != null && (Ee = (se = m.getItem(b)) === null || se === void 0 ? void 0 : se.textValue) !== null && Ee !== void 0 ? Ee : "";
      F === Ke ? ae() : G();
    } else
      ae();
  };
  let oe = () => {
    x.isOpen && g.focusedKey != null ? b === g.focusedKey ? ae() : E(g.focusedKey) : Ae();
  }, Qe = L(F), xt = (se) => {
    se ? (Qe.current = F, i === "focus" && !t.isReadOnly && S(null, "focus")) : (o && Ae(), F !== Qe.current && Ge.commitValidation()), c(se);
  }, yi = U(() => x.isOpen ? a ? K : y : R, [
    x.isOpen,
    K,
    y,
    a,
    R
  ]);
  return {
    ...Ge,
    ...x,
    focusStrategy: d,
    toggle: w,
    open: S,
    close: Ae,
    selectionManager: g,
    selectedKey: b,
    setSelectedKey: E,
    disabledKeys: k,
    isFocused: s,
    setFocused: xt,
    selectedItem: D,
    collection: yi,
    inputValue: F,
    setInputValue: H,
    commit: oe,
    revert: ie
  };
}
function D4(t, e, n) {
  return new ir(Pf(t, t, e, n));
}
function Pf(t, e, n, i) {
  let l = [];
  for (let r of e)
    if (r.type === "section" && r.hasChildNodes) {
      let o = Pf(t, Oe(r, t), n, i);
      [
        ...o
      ].some((a) => a.type === "item") && l.push({
        ...r,
        childNodes: o
      });
    } else r.type === "item" && i(r.textValue, n) ? l.push({
      ...r
    }) : r.type !== "item" && l.push({
      ...r
    });
  return l;
}
function S4(t) {
  let [e, n] = dt(t.isExpanded, t.defaultExpanded || !1, t.onExpandedChange);
  const i = X(() => {
    n(!0);
  }, [
    n
  ]), l = X(() => {
    n(!1);
  }, [
    n
  ]), r = X(() => {
    n(!e);
  }, [
    n,
    e
  ]);
  return {
    isExpanded: e,
    setExpanded: n,
    expand: i,
    collapse: l,
    toggle: r
  };
}
function w4(t) {
  let { allowsMultipleExpanded: e = !1, isDisabled: n = !1 } = t, [i, l] = dt(U(() => t.expandedKeys ? new Set(t.expandedKeys) : void 0, [
    t.expandedKeys
  ]), U(() => t.defaultExpandedKeys ? new Set(t.defaultExpandedKeys) : /* @__PURE__ */ new Set(), [
    t.defaultExpandedKeys
  ]), t.onExpandedChange);
  return Z(() => {
    if (!e && i.size > 1) {
      let r = i.values().next().value;
      r != null && l(/* @__PURE__ */ new Set([
        r
      ]));
    }
  }), {
    allowsMultipleExpanded: e,
    isDisabled: n,
    expandedKeys: i,
    setExpandedKeys: l,
    toggleKey(r) {
      let o;
      e ? (o = new Set(i), o.has(r) ? o.delete(r) : o.add(r)) : o = new Set(i.has(r) ? [] : [
        r
      ]), l(o);
    }
  };
}
function Rr(t) {
  let e = hi(t), [n, i] = Y(null), [l, r] = Y([]), o = () => {
    r([]), e.close();
  };
  return {
    focusStrategy: n,
    ...e,
    open(s = null) {
      i(s), e.open();
    },
    toggle(s = null) {
      i(s), e.toggle();
    },
    close() {
      o();
    },
    expandedKeysStack: l,
    openSubmenu: (s, c) => {
      r((d) => c > d.length ? d : [
        ...d.slice(0, c),
        s
      ]);
    },
    closeSubmenu: (s, c) => {
      r((d) => d[c] === s ? d.slice(0, c) : d);
    }
  };
}
let k4 = Math.round(Math.random() * 1e10), T4 = 0;
function B4(t) {
  let e = U(() => t.name || `radio-group-${k4}-${++T4}`, [
    t.name
  ]);
  var n;
  let [i, l] = dt(t.value, (n = t.defaultValue) !== null && n !== void 0 ? n : null, t.onChange), [r, o] = Y(null), a = fn({
    ...t,
    value: i
  }), u = (c) => {
    !t.isReadOnly && !t.isDisabled && (l(c), a.commitValidation());
  }, s = a.displayValidation.isInvalid;
  return {
    ...a,
    name: e,
    selectedValue: i,
    setSelectedValue: u,
    lastFocusedValue: r,
    setLastFocusedValue: o,
    isDisabled: t.isDisabled || !1,
    isReadOnly: t.isReadOnly || !1,
    isRequired: t.isRequired || !1,
    validationState: t.validationState || (s ? "invalid" : null),
    isInvalid: s
  };
}
function A4(t) {
  let e = hi(t), [n, i] = Y(null), l = Mr({
    ...t,
    onSelectionChange: (s) => {
      t.onSelectionChange != null && t.onSelectionChange(s), e.close(), r.commitValidation();
    }
  }), r = fn({
    ...t,
    value: l.selectedKey
  }), [o, a] = Y(!1), u = U(() => {
    var s;
    return l.collection.size === 0 || l.collection.size === 1 && ((s = l.collection.getItem(l.collection.getFirstKey())) === null || s === void 0 ? void 0 : s.type) === "loader";
  }, [
    l.collection
  ]);
  return {
    ...r,
    ...l,
    ...e,
    focusStrategy: n,
    open(s = null) {
      u || (i(s), e.open());
    },
    toggle(s = null) {
      u || (i(s), e.toggle());
    },
    isFocused: o,
    setFocused: a
  };
}
function F4(t) {
  let { collection: e, focusMode: n } = t, i = t.UNSAFE_selectionState || vi(t), l = U(() => t.disabledKeys ? new Set(t.disabledKeys) : /* @__PURE__ */ new Set(), [
    t.disabledKeys
  ]), r = i.setFocusedKey;
  i.setFocusedKey = (u, s) => {
    if (n === "cell" && u != null) {
      let h = e.getItem(u);
      if ((h == null ? void 0 : h.type) === "item") {
        var c, d;
        let m = Oe(h, e);
        var v, p;
        s === "last" ? u = (v = (c = Kt(m)) === null || c === void 0 ? void 0 : c.key) !== null && v !== void 0 ? v : null : u = (p = (d = At(m)) === null || d === void 0 ? void 0 : d.key) !== null && p !== void 0 ? p : null;
      }
    }
    r(u, s);
  };
  let o = U(() => new Mn(e, i), [
    e,
    i
  ]);
  const a = L(null);
  return Z(() => {
    if (i.focusedKey != null && a.current && !e.getItem(i.focusedKey)) {
      const u = a.current.getItem(i.focusedKey), s = (u == null ? void 0 : u.parentKey) != null && (u.type === "cell" || u.type === "rowheader" || u.type === "column") ? a.current.getItem(u.parentKey) : u;
      if (!s) {
        i.setFocusedKey(null);
        return;
      }
      const c = a.current.rows, d = e.rows, v = c.length - d.length;
      let p = Math.min(v > 1 ? Math.max(s.index - v + 1, 0) : s.index, d.length - 1), h = null;
      for (; p >= 0; ) {
        if (!o.isDisabled(d[p].key) && d[p].type !== "headerrow") {
          h = d[p];
          break;
        }
        p < d.length - 1 ? p++ : (p > s.index && (p = s.index), p--);
      }
      if (h) {
        const m = h.hasChildNodes ? [
          ...Oe(h, e)
        ] : [], g = h.hasChildNodes && s !== u && u && u.index < m.length ? m[u.index].key : h.key;
        i.setFocusedKey(g);
      } else i.setFocusedKey(null);
    }
    a.current = e;
  }, [
    e,
    o,
    i,
    i.focusedKey
  ]), {
    collection: e,
    disabledKeys: l,
    isKeyboardNavigationDisabled: !1,
    selectionManager: o
  };
}
class K4 {
  *[Symbol.iterator]() {
    yield* [
      ...this.rows
    ];
  }
  get size() {
    return [
      ...this.rows
    ].length;
  }
  getKeys() {
    return this.keyMap.keys();
  }
  getKeyBefore(e) {
    let n = this.keyMap.get(e);
    var i;
    return n && (i = n.prevKey) !== null && i !== void 0 ? i : null;
  }
  getKeyAfter(e) {
    let n = this.keyMap.get(e);
    var i;
    return n && (i = n.nextKey) !== null && i !== void 0 ? i : null;
  }
  getFirstKey() {
    var e;
    return (e = [
      ...this.rows
    ][0]) === null || e === void 0 ? void 0 : e.key;
  }
  getLastKey() {
    var e;
    let n = [
      ...this.rows
    ];
    return (e = n[n.length - 1]) === null || e === void 0 ? void 0 : e.key;
  }
  getItem(e) {
    var n;
    return (n = this.keyMap.get(e)) !== null && n !== void 0 ? n : null;
  }
  at(e) {
    const n = [
      ...this.getKeys()
    ];
    return this.getItem(n[e]);
  }
  getChildren(e) {
    let n = this.keyMap.get(e);
    return (n == null ? void 0 : n.childNodes) || [];
  }
  constructor(e) {
    this.keyMap = /* @__PURE__ */ new Map(), this.keyMap = /* @__PURE__ */ new Map(), this.columnCount = e == null ? void 0 : e.columnCount, this.rows = [];
    let n = (d) => {
      let v = this.keyMap.get(d.key);
      e.visitNode && (d = e.visitNode(d)), this.keyMap.set(d.key, d);
      let p = /* @__PURE__ */ new Set(), h = null, m = !1;
      if (d.type === "item") {
        var g;
        for (let P of d.childNodes) if (((g = P.props) === null || g === void 0 ? void 0 : g.colSpan) !== void 0) {
          m = !0;
          break;
        }
      }
      for (let P of d.childNodes) {
        if (P.type === "cell" && m) {
          var b, E;
          P.colspan = (b = P.props) === null || b === void 0 ? void 0 : b.colSpan, P.colSpan = (E = P.props) === null || E === void 0 ? void 0 : E.colSpan;
          var D, k;
          P.colIndex = h ? ((D = h.colIndex) !== null && D !== void 0 ? D : h.index) + ((k = h.colSpan) !== null && k !== void 0 ? k : 1) : P.index;
        }
        P.type === "cell" && P.parentKey == null && (P.parentKey = d.key), p.add(P.key), h ? (h.nextKey = P.key, P.prevKey = h.key) : P.prevKey = null, n(P), h = P;
      }
      if (h && (h.nextKey = null), v)
        for (let P of v.childNodes) p.has(P.key) || i(P);
    }, i = (d) => {
      this.keyMap.delete(d.key);
      for (let v of d.childNodes) this.keyMap.get(v.key) === v && i(v);
    }, l = null;
    for (let [d, v] of e.items.entries()) {
      var r, o, a, u, s, c;
      let p = {
        ...v,
        level: (r = v.level) !== null && r !== void 0 ? r : 0,
        key: (o = v.key) !== null && o !== void 0 ? o : "row-" + d,
        type: (a = v.type) !== null && a !== void 0 ? a : "row",
        value: (u = v.value) !== null && u !== void 0 ? u : null,
        hasChildNodes: !0,
        childNodes: [
          ...v.childNodes
        ],
        rendered: v.rendered,
        textValue: (s = v.textValue) !== null && s !== void 0 ? s : "",
        index: (c = v.index) !== null && c !== void 0 ? c : d
      };
      l ? (l.nextKey = p.key, p.prevKey = l.key) : p.prevKey = null, this.rows.push(p), n(p), l = p;
    }
    l && (l.nextKey = null);
  }
}
const Df = "row-header-column-" + Math.random().toString(36).slice(2);
let lr = "row-header-column-" + Math.random().toString(36).slice(2);
for (; Df === lr; ) lr = "row-header-column-" + Math.random().toString(36).slice(2);
function Sf(t, e) {
  if (e.length === 0) return [];
  let n = [], i = /* @__PURE__ */ new Map();
  for (let c of e) {
    let d = c.parentKey, v = [
      c
    ];
    for (; d; ) {
      let p = t.get(d);
      if (!p) break;
      if (i.has(p)) {
        var l, r;
        (r = (l = p).colSpan) !== null && r !== void 0 || (l.colSpan = 0), p.colSpan++, p.colspan = p.colSpan;
        let { column: h, index: m } = i.get(p);
        if (m > v.length) break;
        for (let g = m; g < v.length; g++) h.splice(g, 0, null);
        for (let g = v.length; g < h.length; g++)
          h[g] && i.has(h[g]) && (i.get(h[g]).index = g);
      } else
        p.colSpan = 1, p.colspan = 1, v.push(p), i.set(p, {
          column: v,
          index: v.length - 1
        });
      d = p.parentKey;
    }
    n.push(v), c.index = n.length - 1;
  }
  let o = Math.max(...n.map((c) => c.length)), a = Array(o).fill(0).map(() => []), u = 0;
  for (let c of n) {
    let d = o - 1;
    for (let v of c) {
      if (v) {
        let p = a[d], h = p.reduce((m, g) => {
          var b;
          return m + ((b = g.colSpan) !== null && b !== void 0 ? b : 1);
        }, 0);
        if (h < u) {
          let m = {
            type: "placeholder",
            key: "placeholder-" + v.key,
            colspan: u - h,
            colSpan: u - h,
            index: h,
            value: null,
            rendered: null,
            level: d,
            hasChildNodes: !1,
            childNodes: [],
            textValue: ""
          };
          p.length > 0 && (p[p.length - 1].nextKey = m.key, m.prevKey = p[p.length - 1].key), p.push(m);
        }
        p.length > 0 && (p[p.length - 1].nextKey = v.key, v.prevKey = p[p.length - 1].key), v.level = d, v.colIndex = u, p.push(v);
      }
      d--;
    }
    u++;
  }
  let s = 0;
  for (let c of a) {
    let d = c.reduce((v, p) => {
      var h;
      return v + ((h = p.colSpan) !== null && h !== void 0 ? h : 1);
    }, 0);
    if (d < e.length) {
      let v = {
        type: "placeholder",
        key: "placeholder-" + c[c.length - 1].key,
        colSpan: e.length - d,
        colspan: e.length - d,
        index: d,
        value: null,
        rendered: null,
        level: s,
        hasChildNodes: !1,
        childNodes: [],
        textValue: "",
        prevKey: c[c.length - 1].key
      };
      c.push(v);
    }
    s++;
  }
  return a.map((c, d) => ({
    type: "headerrow",
    key: "headerrow-" + d,
    index: d,
    value: null,
    rendered: null,
    level: 0,
    hasChildNodes: !0,
    childNodes: c,
    textValue: ""
  }));
}
class N4 extends K4 {
  *[Symbol.iterator]() {
    yield* this.body.childNodes;
  }
  get size() {
    return this._size;
  }
  getKeys() {
    return this.keyMap.keys();
  }
  getKeyBefore(e) {
    let n = this.keyMap.get(e);
    var i;
    return (i = n == null ? void 0 : n.prevKey) !== null && i !== void 0 ? i : null;
  }
  getKeyAfter(e) {
    let n = this.keyMap.get(e);
    var i;
    return (i = n == null ? void 0 : n.nextKey) !== null && i !== void 0 ? i : null;
  }
  getFirstKey() {
    var e, n;
    return (n = (e = At(this.body.childNodes)) === null || e === void 0 ? void 0 : e.key) !== null && n !== void 0 ? n : null;
  }
  getLastKey() {
    var e, n;
    return (n = (e = Kt(this.body.childNodes)) === null || e === void 0 ? void 0 : e.key) !== null && n !== void 0 ? n : null;
  }
  getItem(e) {
    var n;
    return (n = this.keyMap.get(e)) !== null && n !== void 0 ? n : null;
  }
  at(e) {
    const n = [
      ...this.getKeys()
    ];
    return this.getItem(n[e]);
  }
  getChildren(e) {
    return e === this.body.key ? this.body.childNodes : super.getChildren(e);
  }
  getTextValue(e) {
    let n = this.getItem(e);
    if (!n) return "";
    if (n.textValue) return n.textValue;
    let i = this.rowHeaderColumnKeys;
    if (i) {
      let l = [];
      for (let r of n.childNodes) {
        let o = this.columns[r.index];
        if (i.has(o.key) && r.textValue && l.push(r.textValue), l.length === i.size) break;
      }
      return l.join(" ");
    }
    return "";
  }
  constructor(e, n, i) {
    let l = /* @__PURE__ */ new Set(), r = null, o = [];
    if (i != null && i.showSelectionCheckboxes) {
      let d = {
        type: "column",
        key: Df,
        value: null,
        textValue: "",
        level: 0,
        index: i != null && i.showDragButtons ? 1 : 0,
        hasChildNodes: !1,
        rendered: null,
        childNodes: [],
        props: {
          isSelectionCell: !0
        }
      };
      o.unshift(d);
    }
    if (i != null && i.showDragButtons) {
      let d = {
        type: "column",
        key: lr,
        value: null,
        textValue: "",
        level: 0,
        index: 0,
        hasChildNodes: !1,
        rendered: null,
        childNodes: [],
        props: {
          isDragButtonCell: !0
        }
      };
      o.unshift(d);
    }
    let a = [], u = /* @__PURE__ */ new Map(), s = (d) => {
      switch (d.type) {
        case "body":
          r = d;
          break;
        case "column":
          u.set(d.key, d), d.hasChildNodes || (o.push(d), d.props.isRowHeader && l.add(d.key));
          break;
        case "item":
          a.push(d);
          return;
      }
      for (let v of d.childNodes) s(v);
    };
    for (let d of e) s(d);
    let c = Sf(u, o);
    if (c.forEach((d, v) => a.splice(v, 0, d)), super({
      columnCount: o.length,
      items: a,
      visitNode: (d) => (d.column = o[d.index], d)
    }), this._size = 0, this.columns = o, this.rowHeaderColumnKeys = l, this.body = r, this.headerRows = c, this._size = [
      ...r.childNodes
    ].length, this.rowHeaderColumnKeys.size === 0) {
      let d = this.columns.find((v) => {
        var p, h;
        return !(!((p = v.props) === null || p === void 0) && p.isDragButtonCell) && !(!((h = v.props) === null || h === void 0) && h.isSelectionCell);
      });
      d && this.rowHeaderColumnKeys.add(d.key);
    }
  }
}
const I4 = {
  ascending: "descending",
  descending: "ascending"
};
function M4(t) {
  let [e, n] = Y(!1), { selectionMode: i = "none", showSelectionCheckboxes: l, showDragButtons: r } = t, o = U(() => ({
    showSelectionCheckboxes: l && i !== "none",
    showDragButtons: r,
    selectionMode: i,
    columns: []
  }), [
    t.children,
    l,
    i,
    r
  ]), a = Tr(t, X((d) => new N4(d, null, o), [
    o
  ]), o), { disabledKeys: u, selectionManager: s } = F4({
    ...t,
    collection: a,
    disabledBehavior: t.disabledBehavior || "selection"
  });
  var c;
  return {
    collection: a,
    disabledKeys: u,
    selectionManager: s,
    showSelectionCheckboxes: t.showSelectionCheckboxes || !1,
    sortDescriptor: (c = t.sortDescriptor) !== null && c !== void 0 ? c : null,
    isKeyboardNavigationDisabled: a.size === 0 || e,
    setKeyboardNavigationDisabled: n,
    sort(d, v) {
      var p, h;
      (h = t.onSortChange) === null || h === void 0 || h.call(t, {
        column: d,
        direction: v ?? (((p = t.sortDescriptor) === null || p === void 0 ? void 0 : p.column) === d ? I4[t.sortDescriptor.direction] : "ascending")
      });
    }
  };
}
function R4(t) {
  var e, n;
  let i = Mr({
    ...t,
    onSelectionChange: t.onSelectionChange ? (u) => {
      var s;
      u != null && ((s = t.onSelectionChange) === null || s === void 0 || s.call(t, u));
    } : void 0,
    suppressTextValueWarning: !0,
    defaultSelectedKey: (n = (e = t.defaultSelectedKey) !== null && e !== void 0 ? e : pa(t.collection, t.disabledKeys ? new Set(t.disabledKeys) : /* @__PURE__ */ new Set())) !== null && n !== void 0 ? n : void 0
  }), { selectionManager: l, collection: r, selectedKey: o } = i, a = L(o);
  return Z(() => {
    let u = o;
    t.selectedKey == null && (l.isEmpty || u == null || !r.getItem(u)) && (u = pa(r, i.disabledKeys), u != null && l.setSelectedKeys([
      u
    ])), (u != null && l.focusedKey == null || !l.isFocused && u !== a.current) && l.setFocusedKey(u), a.current = u;
  }), {
    ...i,
    isDisabled: t.isDisabled || !1
  };
}
function pa(t, e) {
  let n = null;
  if (t) {
    var i, l, r, o;
    for (n = t.getFirstKey(); n != null && (e.has(n) || !((l = t.getItem(n)) === null || l === void 0 || (i = l.props) === null || i === void 0) && i.isDisabled) && n !== t.getLastKey(); ) n = t.getKeyAfter(n);
    n != null && (e.has(n) || !((o = t.getItem(n)) === null || o === void 0 || (r = o.props) === null || r === void 0) && r.isDisabled) && n === t.getLastKey() && (n = t.getFirstKey());
  }
  return n;
}
class L4 {
  *[Symbol.iterator]() {
    yield* this.iterable;
  }
  get size() {
    return this.keyMap.size;
  }
  getKeys() {
    return this.keyMap.keys();
  }
  getKeyBefore(e) {
    let n = this.keyMap.get(e);
    var i;
    return n && (i = n.prevKey) !== null && i !== void 0 ? i : null;
  }
  getKeyAfter(e) {
    let n = this.keyMap.get(e);
    var i;
    return n && (i = n.nextKey) !== null && i !== void 0 ? i : null;
  }
  getFirstKey() {
    return this.firstKey;
  }
  getLastKey() {
    return this.lastKey;
  }
  getItem(e) {
    var n;
    return (n = this.keyMap.get(e)) !== null && n !== void 0 ? n : null;
  }
  at(e) {
    const n = [
      ...this.getKeys()
    ];
    return this.getItem(n[e]);
  }
  constructor(e, { expandedKeys: n } = {}) {
    this.keyMap = /* @__PURE__ */ new Map(), this.firstKey = null, this.lastKey = null, this.iterable = e, n = n || /* @__PURE__ */ new Set();
    let i = (a) => {
      if (this.keyMap.set(a.key, a), a.childNodes && (a.type === "section" || n.has(a.key))) for (let u of a.childNodes) i(u);
    };
    for (let a of e) i(a);
    let l = null, r = 0;
    for (let [a, u] of this.keyMap)
      l ? (l.nextKey = a, u.prevKey = l.key) : (this.firstKey = a, u.prevKey = void 0), u.type === "item" && (u.index = r++), l = u, l.nextKey = void 0;
    var o;
    this.lastKey = (o = l == null ? void 0 : l.key) !== null && o !== void 0 ? o : null;
  }
}
function j4(t) {
  let { onExpandedChange: e } = t, [n, i] = dt(t.expandedKeys ? new Set(t.expandedKeys) : void 0, t.defaultExpandedKeys ? new Set(t.defaultExpandedKeys) : /* @__PURE__ */ new Set(), e), l = vi(t), r = U(() => t.disabledKeys ? new Set(t.disabledKeys) : /* @__PURE__ */ new Set(), [
    t.disabledKeys
  ]), o = Tr(t, X((u) => new L4(u, {
    expandedKeys: n
  }), [
    n
  ]), null);
  return Z(() => {
    l.focusedKey != null && !o.getItem(l.focusedKey) && l.setFocusedKey(null);
  }, [
    o,
    l.focusedKey
  ]), {
    collection: o,
    expandedKeys: n,
    disabledKeys: r,
    toggleKey: (u) => {
      i(z4(n, u));
    },
    setExpandedKeys: i,
    selectionManager: new Mn(o, l)
  };
}
function z4(t, e) {
  let n = new Set(t);
  return n.has(e) ? n.delete(e) : n.add(e), n;
}
const Xt = /* @__PURE__ */ _(null), O4 = /* @__PURE__ */ re(function(e, n) {
  [e, n] = fe(e, n, Xt);
  let { validationErrors: i, validationBehavior: l = "native", children: r, className: o, ...a } = e;
  return /* @__PURE__ */ $.createElement("form", {
    noValidate: l !== "native",
    ...a,
    ref: n,
    className: o || "react-aria-Form"
  }, /* @__PURE__ */ $.createElement(Xt.Provider, {
    value: {
      ...e,
      validationBehavior: l
    }
  }, /* @__PURE__ */ $.createElement(iu.Provider, {
    value: i ?? {}
  }, r)));
}), wf = /* @__PURE__ */ _({}), kf = /* @__PURE__ */ _({});
let V4 = (t) => {
  let { onHoverStart: e, onHoverChange: n, onHoverEnd: i, ...l } = t;
  return l;
};
const H4 = /* @__PURE__ */ re(function(e, n) {
  [e, n] = fe(e, n, kf);
  let { hoverProps: i, isHovered: l } = He(e), { isFocused: r, isFocusVisible: o, focusProps: a } = Fe({
    isTextInput: !0,
    autoFocus: e.autoFocus
  }), u = !!e["aria-invalid"] && e["aria-invalid"] !== "false", s = ne({
    ...e,
    values: {
      isHovered: l,
      isFocused: r,
      isFocusVisible: o,
      isDisabled: e.disabled || !1,
      isInvalid: u
    },
    defaultClassName: "react-aria-TextArea"
  });
  return /* @__PURE__ */ $.createElement("textarea", {
    ...V(V4(e), a, i),
    ...s,
    ref: n,
    "data-focused": r || void 0,
    "data-disabled": e.disabled || void 0,
    "data-hovered": l || void 0,
    "data-focus-visible": o || void 0,
    "data-invalid": u || void 0
  });
}), U4 = /* @__PURE__ */ _(null), Tf = /* @__PURE__ */ ci(function(e, n) {
  [e, n] = fe(e, n, U4);
  let { validationBehavior: i } = mt(Xt) || {};
  var l, r;
  let o = (r = (l = e.validationBehavior) !== null && l !== void 0 ? l : i) !== null && r !== void 0 ? r : "native", a = L(null), [u, s] = fe({}, a, ri), [c, d] = St(!e["aria-label"] && !e["aria-labelledby"]), [v, p] = Y("input"), { labelProps: h, inputProps: m, descriptionProps: g, errorMessageProps: b, ...E } = au({
    ...on(e),
    inputElementType: v,
    label: d,
    validationBehavior: o
  }, s), D = X((T) => {
    s.current = T, T && p(T instanceof HTMLTextAreaElement ? "textarea" : "input");
  }, [
    s
  ]), k = ne({
    ...e,
    values: {
      isDisabled: e.isDisabled || !1,
      isInvalid: E.isInvalid,
      isReadOnly: e.isReadOnly || !1,
      isRequired: e.isRequired || !1
    },
    defaultClassName: "react-aria-TextField"
  }), P = ee(e);
  return delete P.id, /* @__PURE__ */ $.createElement("div", {
    ...P,
    ...k,
    ref: n,
    slot: e.slot || void 0,
    "data-disabled": e.isDisabled || void 0,
    "data-invalid": E.isInvalid || void 0,
    "data-readonly": e.isReadOnly || void 0,
    "data-required": e.isRequired || void 0
  }, /* @__PURE__ */ $.createElement(xe, {
    values: [
      [
        $t,
        {
          ...h,
          ref: c
        }
      ],
      [
        ri,
        {
          ...V(m, u),
          ref: D
        }
      ],
      [
        kf,
        {
          ...m,
          ref: D
        }
      ],
      [
        ft,
        {
          slots: {
            description: g,
            errorMessage: b
          }
        }
      ],
      [
        vn,
        E
      ]
    ]
  }, k.children));
}), rr = /* @__PURE__ */ _(null), Bf = /* @__PURE__ */ _(null), bi = {
  CollectionRoot({ collection: t, renderDropIndicator: e }) {
    return va(t, null, e);
  },
  CollectionBranch({ collection: t, parent: e, renderDropIndicator: n }) {
    return va(t, e, n);
  }
};
function va(t, e, n) {
  return hr({
    items: e ? t.getChildren(e.key) : t,
    dependencies: [
      n
    ],
    children(i) {
      let l = i.render(i);
      return !n || i.type !== "item" ? l : /* @__PURE__ */ $.createElement($.Fragment, null, n({
        type: "item",
        key: i.key,
        dropPosition: "before"
      }), l, W4(t, i, n));
    }
  });
}
function W4(t, e, n) {
  let i = e.key, l = t.getKeyAfter(i), r = l != null ? t.getItem(l) : null;
  for (; r != null && r.type !== "item"; )
    l = t.getKeyAfter(r.key), r = l != null ? t.getItem(l) : null;
  let o = e.nextKey != null ? t.getItem(e.nextKey) : null;
  for (; o != null && o.type !== "item"; ) o = o.nextKey != null ? t.getItem(o.nextKey) : null;
  let a = [];
  if (o == null) {
    let u = e;
    for (; u && (!r || u.parentKey !== r.parentKey && r.level < u.level); ) {
      let s = n({
        type: "item",
        key: u.key,
        dropPosition: "after"
      });
      /* @__PURE__ */ vv(s) && a.push(/* @__PURE__ */ ya(s, {
        key: `${u.key}-after`
      })), u = u.parentKey != null ? t.getItem(u.parentKey) : null;
    }
  }
  return a;
}
const Me = /* @__PURE__ */ _(bi);
function Lr(t) {
  return U(() => t != null ? /* @__PURE__ */ new Set([
    t
  ]) : null, [
    t
  ]);
}
const G4 = /* @__PURE__ */ _(null), jr = /* @__PURE__ */ re(function(e, n) {
  [e, n] = fe(e, n, G4);
  let i = e.href && !e.isDisabled ? "a" : "span", { linkProps: l, isPressed: r } = e0({
    ...e,
    elementType: i
  }, n), { hoverProps: o, isHovered: a } = He(e), { focusProps: u, isFocused: s, isFocusVisible: c } = Fe(), d = ne({
    ...e,
    defaultClassName: "react-aria-Link",
    values: {
      isCurrent: !!e["aria-current"],
      isDisabled: e.isDisabled || !1,
      isPressed: r,
      isHovered: a,
      isFocused: s,
      isFocusVisible: c
    }
  });
  return /* @__PURE__ */ $.createElement(i, {
    ref: n,
    slot: e.slot || void 0,
    ...V(d, l, o, u),
    "data-focused": s || void 0,
    "data-hovered": a || void 0,
    "data-pressed": r || void 0,
    "data-focus-visible": c || void 0,
    "data-current": !!e["aria-current"] || void 0,
    "data-disabled": e.isDisabled || void 0
  }, d.children);
}), _4 = /* @__PURE__ */ _(null), Af = /* @__PURE__ */ _(null), q4 = /* @__PURE__ */ re(function(e, n) {
  [e, n] = fe(e, n, _4);
  let { validationBehavior: i } = mt(Xt) || {};
  var l, r;
  let o = (r = (l = e.validationBehavior) !== null && l !== void 0 ? l : i) !== null && r !== void 0 ? r : "native", a = x4({
    ...e,
    validationBehavior: o
  }), [u, s] = St(!e["aria-label"] && !e["aria-labelledby"]), { groupProps: c, labelProps: d, descriptionProps: v, errorMessageProps: p, ...h } = R0({
    ...e,
    label: s,
    validationBehavior: o
  }, a), m = ne({
    ...e,
    values: {
      isDisabled: a.isDisabled,
      isReadOnly: a.isReadOnly,
      isRequired: e.isRequired || !1,
      isInvalid: a.isInvalid,
      state: a
    },
    defaultClassName: "react-aria-CheckboxGroup"
  });
  return /* @__PURE__ */ $.createElement("div", {
    ...c,
    ...m,
    ref: n,
    slot: e.slot || void 0,
    "data-readonly": a.isReadOnly || void 0,
    "data-required": e.isRequired || void 0,
    "data-invalid": a.isInvalid || void 0,
    "data-disabled": e.isDisabled || void 0
  }, /* @__PURE__ */ $.createElement(xe, {
    values: [
      [
        Af,
        a
      ],
      [
        $t,
        {
          ...d,
          ref: u,
          elementType: "span"
        }
      ],
      [
        ft,
        {
          slots: {
            description: v,
            errorMessage: p
          }
        }
      ],
      [
        vn,
        h
      ]
    ]
  }, m.children));
}), Y4 = /* @__PURE__ */ re(function(e, n) {
  let { inputRef: i = null, ...l } = e;
  [e, n] = fe(l, n, ar);
  let { validationBehavior: r } = mt(Xt) || {};
  var o, a;
  let u = (a = (o = e.validationBehavior) !== null && o !== void 0 ? o : r) !== null && a !== void 0 ? a : "native", s = z(Af), c = Re(U(() => Rt(i, e.inputRef !== void 0 ? e.inputRef : null), [
    i,
    e.inputRef
  ])), { labelProps: d, inputProps: v, isSelected: p, isDisabled: h, isReadOnly: m, isPressed: g, isInvalid: b } = s ? L0({
    ...on(e),
    // Value is optional for standalone checkboxes, but required for CheckboxGroup items;
    // it's passed explicitly here to avoid typescript error (requires ignore).
    // @ts-ignore
    value: e.value,
    // ReactNode type doesn't allow function children.
    children: typeof e.children == "function" ? !0 : e.children
  }, s, c) : ru({
    ...on(e),
    children: typeof e.children == "function" ? !0 : e.children,
    validationBehavior: u
  }, Dr(e), c), { isFocused: E, isFocusVisible: D, focusProps: k } = Fe(), P = h || m, { hoverProps: T, isHovered: M } = He({
    ...e,
    isDisabled: P
  }), F = ne({
    ...e,
    defaultClassName: "react-aria-Checkbox",
    values: {
      isSelected: p,
      isIndeterminate: e.isIndeterminate || !1,
      isPressed: g,
      isHovered: M,
      isFocused: E,
      isFocusVisible: D,
      isDisabled: h,
      isReadOnly: m,
      isInvalid: b,
      isRequired: e.isRequired || !1
    }
  }), H = ee(e);
  return delete H.id, /* @__PURE__ */ $.createElement("label", {
    ...V(H, d, T, F),
    ref: n,
    slot: e.slot || void 0,
    "data-selected": p || void 0,
    "data-indeterminate": e.isIndeterminate || void 0,
    "data-pressed": g || void 0,
    "data-hovered": M || void 0,
    "data-focused": E || void 0,
    "data-focus-visible": D || void 0,
    "data-disabled": h || void 0,
    "data-readonly": m || void 0,
    "data-invalid": b || void 0,
    "data-required": e.isRequired || void 0
  }, /* @__PURE__ */ $.createElement(pi, {
    elementType: "span"
  }, /* @__PURE__ */ $.createElement("input", {
    ...V(v, k),
    ref: c
  })), F.children);
});
var Ff = {};
Ff = {
  colorSwatchPicker: "تغييرات الألوان",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "حدد عنصرًا",
  tableResizer: "أداة تغيير الحجم"
};
var Kf = {};
Kf = {
  colorSwatchPicker: "Цветови мостри",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Изберете предмет",
  tableResizer: "Преоразмерител"
};
var Nf = {};
Nf = {
  colorSwatchPicker: "Vzorky barev",
  dropzoneLabel: "Místo pro přetažení",
  selectPlaceholder: "Vyberte položku",
  tableResizer: "Změna velikosti"
};
var If = {};
If = {
  colorSwatchPicker: "Farveprøver",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Vælg et element",
  tableResizer: "Størrelsesændring"
};
var Mf = {};
Mf = {
  colorSwatchPicker: "Farbfelder",
  dropzoneLabel: "Ablegebereich",
  selectPlaceholder: "Element wählen",
  tableResizer: "Größenanpassung"
};
var Rf = {};
Rf = {
  colorSwatchPicker: "Χρωματικά δείγματα",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Επιλέξτε ένα αντικείμενο",
  tableResizer: "Αλλαγή μεγέθους"
};
var Lf = {};
Lf = {
  selectPlaceholder: "Select an item",
  tableResizer: "Resizer",
  dropzoneLabel: "DropZone",
  colorSwatchPicker: "Color swatches"
};
var jf = {};
jf = {
  colorSwatchPicker: "Muestras de colores",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Seleccionar un artículo",
  tableResizer: "Cambiador de tamaño"
};
var zf = {};
zf = {
  colorSwatchPicker: "Värvinäidised",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Valige üksus",
  tableResizer: "Suuruse muutja"
};
var Of = {};
Of = {
  colorSwatchPicker: "Värimallit",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Valitse kohde",
  tableResizer: "Koon muuttaja"
};
var Vf = {};
Vf = {
  colorSwatchPicker: "Échantillons de couleurs",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Sélectionner un élément",
  tableResizer: "Redimensionneur"
};
var Hf = {};
Hf = {
  colorSwatchPicker: "דוגמיות צבע",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "בחר פריט",
  tableResizer: "שינוי גודל"
};
var Uf = {};
Uf = {
  colorSwatchPicker: "Uzorci boja",
  dropzoneLabel: "Zona spuštanja",
  selectPlaceholder: "Odaberite stavku",
  tableResizer: "Promjena veličine"
};
var Wf = {};
Wf = {
  colorSwatchPicker: "Színtárak",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Válasszon ki egy elemet",
  tableResizer: "Átméretező"
};
var Gf = {};
Gf = {
  colorSwatchPicker: "Campioni di colore",
  dropzoneLabel: "Zona di rilascio",
  selectPlaceholder: "Seleziona un elemento",
  tableResizer: "Ridimensionamento"
};
var _f = {};
_f = {
  colorSwatchPicker: "カラースウォッチ",
  dropzoneLabel: "ドロップゾーン",
  selectPlaceholder: "項目を選択",
  tableResizer: "サイズ変更ツール"
};
var qf = {};
qf = {
  colorSwatchPicker: "색상 견본",
  dropzoneLabel: "드롭 영역",
  selectPlaceholder: "항목 선택",
  tableResizer: "크기 조정기"
};
var Yf = {};
Yf = {
  colorSwatchPicker: "Spalvų pavyzdžiai",
  dropzoneLabel: "„DropZone“",
  selectPlaceholder: "Pasirinkite elementą",
  tableResizer: "Dydžio keitiklis"
};
var Zf = {};
Zf = {
  colorSwatchPicker: "Krāsu paraugi",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Izvēlēties vienumu",
  tableResizer: "Izmēra mainītājs"
};
var Xf = {};
Xf = {
  colorSwatchPicker: "Fargekart",
  dropzoneLabel: "Droppsone",
  selectPlaceholder: "Velg et element",
  tableResizer: "Størrelsesendrer"
};
var Jf = {};
Jf = {
  colorSwatchPicker: "kleurstalen",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Selecteer een item",
  tableResizer: "Resizer"
};
var Qf = {};
Qf = {
  colorSwatchPicker: "Próbki kolorów",
  dropzoneLabel: "Strefa upuszczania",
  selectPlaceholder: "Wybierz element",
  tableResizer: "Zmiana rozmiaru"
};
var ep = {};
ep = {
  colorSwatchPicker: "Amostras de cores",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Selecione um item",
  tableResizer: "Redimensionador"
};
var tp = {};
tp = {
  colorSwatchPicker: "Amostras de cores",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Selecione um item",
  tableResizer: "Redimensionador"
};
var np = {};
np = {
  colorSwatchPicker: "Specimene de culoare",
  dropzoneLabel: "Zonă de plasare",
  selectPlaceholder: "Selectați un element",
  tableResizer: "Instrument de redimensionare"
};
var ip = {};
ip = {
  colorSwatchPicker: "Цветовые образцы",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Выберите элемент",
  tableResizer: "Средство изменения размера"
};
var lp = {};
lp = {
  colorSwatchPicker: "Vzorkovníky farieb",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Vyberte položku",
  tableResizer: "Nástroj na zmenu veľkosti"
};
var rp = {};
rp = {
  colorSwatchPicker: "Barvne palete",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Izberite element",
  tableResizer: "Spreminjanje velikosti"
};
var op = {};
op = {
  colorSwatchPicker: "Uzorci boje",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Izaberite stavku",
  tableResizer: "Promena veličine"
};
var ap = {};
ap = {
  colorSwatchPicker: "Färgrutor",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Välj en artikel",
  tableResizer: "Storleksändrare"
};
var up = {};
up = {
  colorSwatchPicker: "Renk örnekleri",
  dropzoneLabel: "Bırakma Bölgesi",
  selectPlaceholder: "Bir öğe seçin",
  tableResizer: "Yeniden boyutlandırıcı"
};
var sp = {};
sp = {
  colorSwatchPicker: "Зразки кольорів",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Виберіть елемент",
  tableResizer: "Засіб змінення розміру"
};
var cp = {};
cp = {
  colorSwatchPicker: "颜色色板",
  dropzoneLabel: "放置区域",
  selectPlaceholder: "选择一个项目",
  tableResizer: "尺寸调整器"
};
var dp = {};
dp = {
  colorSwatchPicker: "色票",
  dropzoneLabel: "放置區",
  selectPlaceholder: "選取項目",
  tableResizer: "大小調整器"
};
var fp = {};
fp = {
  "ar-AE": Ff,
  "bg-BG": Kf,
  "cs-CZ": Nf,
  "da-DK": If,
  "de-DE": Mf,
  "el-GR": Rf,
  "en-US": Lf,
  "es-ES": jf,
  "et-EE": zf,
  "fi-FI": Of,
  "fr-FR": Vf,
  "he-IL": Hf,
  "hr-HR": Uf,
  "hu-HU": Wf,
  "it-IT": Gf,
  "ja-JP": _f,
  "ko-KR": qf,
  "lt-LT": Yf,
  "lv-LV": Zf,
  "nb-NO": Xf,
  "nl-NL": Jf,
  "pl-PL": Qf,
  "pt-BR": ep,
  "pt-PT": tp,
  "ro-RO": np,
  "ru-RU": ip,
  "sk-SK": lp,
  "sl-SI": rp,
  "sr-SP": op,
  "sv-SE": ap,
  "tr-TR": up,
  "uk-UA": sp,
  "zh-CN": cp,
  "zh-TW": dp
};
const kt = /* @__PURE__ */ _({}), zr = /* @__PURE__ */ _(null), Z4 = /* @__PURE__ */ re(function(e, n) {
  let { render: i } = z(zr);
  return /* @__PURE__ */ $.createElement($.Fragment, null, i(e, n));
});
function Or(t, e) {
  var n;
  let i = t == null ? void 0 : t.renderDropIndicator, l = t == null || (n = t.isVirtualDragging) === null || n === void 0 ? void 0 : n.call(t), r = X((o) => {
    if (l || e != null && e.isDropTarget(o)) return i ? i(o) : /* @__PURE__ */ $.createElement(Z4, {
      target: o
    });
  }, [
    e == null ? void 0 : e.target,
    l,
    i
  ]);
  return t != null && t.useDropIndicator ? r : void 0;
}
function pp(t, e, n) {
  var i, l;
  let r = t.focusedKey, o = null;
  if (!(e == null || (i = e.isVirtualDragging) === null || i === void 0) && i.call(e) && (n == null || (l = n.target) === null || l === void 0 ? void 0 : l.type) === "item") {
    o = n.target.key;
    var a;
    n.target.dropPosition === "after" && (o = (a = n.collection.getKeyAfter(o)) !== null && a !== void 0 ? a : o);
  }
  return U(() => new Set([
    r,
    o
  ].filter((u) => u != null)), [
    r,
    o
  ]);
}
const vp = /* @__PURE__ */ _({}), Vr = /* @__PURE__ */ _({}), X4 = /* @__PURE__ */ zt("separator", function(e, n) {
  [e, n] = fe(e, n, Vr);
  let { elementType: i, orientation: l, style: r, className: o, slot: a, ...u } = e, s = i || "hr";
  s === "hr" && l === "vertical" && (s = "div");
  let { separatorProps: c } = Gb({
    ...u,
    elementType: i,
    orientation: l
  });
  return /* @__PURE__ */ $.createElement(s, {
    ...ee(e),
    ...c,
    style: r,
    className: o ?? "react-aria-Separator",
    ref: n,
    slot: a || void 0
  });
}), mi = /* @__PURE__ */ _(null), yt = /* @__PURE__ */ _(null), J4 = /* @__PURE__ */ re(function(e, n) {
  [e, n] = fe(e, n, mi);
  let i = z(yt);
  return i ? /* @__PURE__ */ $.createElement(hp, {
    state: i,
    props: e,
    listBoxRef: n
  }) : /* @__PURE__ */ $.createElement(dn, {
    content: /* @__PURE__ */ $.createElement(Ot, e)
  }, (l) => /* @__PURE__ */ $.createElement(Q4, {
    props: e,
    listBoxRef: n,
    collection: l
  }));
});
function Q4({ props: t, listBoxRef: e, collection: n }) {
  t = {
    ...t,
    collection: n,
    children: null,
    items: null
  };
  let { layoutDelegate: i } = z(Me), l = Ir({
    ...t,
    layoutDelegate: i
  });
  return /* @__PURE__ */ $.createElement(hp, {
    state: l,
    props: t,
    listBoxRef: e
  });
}
function hp({ state: t, props: e, listBoxRef: n }) {
  var i;
  let { filter: l, collectionProps: r, collectionRef: o } = z(rr) || {};
  e = U(() => r ? {
    ...e,
    ...r
  } : e, [
    e,
    r
  ]);
  let { dragAndDropHooks: a, layout: u = "stack", orientation: s = "vertical" } = e;
  n = Re(U(() => Rt(n, o !== void 0 ? o : null), [
    o,
    n
  ]));
  let c = C4(t, l), { collection: d, selectionManager: v } = c, p = !!(a != null && a.useDraggableCollectionState), h = !!(a != null && a.useDroppableCollectionState), { direction: m } = We(), { disabledBehavior: g, disabledKeys: b } = v, E = Kn({
    usage: "search",
    sensitivity: "base"
  }), { isVirtualized: D, layoutDelegate: k, dropTargetDelegate: P, CollectionRoot: T } = z(Me), M = U(() => e.keyboardDelegate || new In({
    collection: d,
    collator: E,
    ref: n,
    disabledKeys: b,
    disabledBehavior: g,
    layout: u,
    orientation: s,
    direction: m,
    layoutDelegate: k
  }), [
    d,
    E,
    n,
    g,
    b,
    s,
    m,
    e.keyboardDelegate,
    u,
    k
  ]), { listBoxProps: F } = mb({
    ...e,
    shouldSelectOnPressUp: p || e.shouldSelectOnPressUp,
    keyboardDelegate: M,
    isVirtualized: D
  }, c, n), H = L(p), K = L(h);
  Z(() => {
    process.env.NODE_ENV !== "production" && (H.current !== p && console.warn("Drag hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior."), K.current !== h && console.warn("Drop hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior."));
  }, [
    p,
    h
  ]);
  let y, R, A, B = !1, j = null, x = L(null);
  if (p && a) {
    y = a.useDraggableCollectionState({
      collection: d,
      selectionManager: v,
      preview: a.renderDragPreview ? x : void 0
    }), a.useDraggableCollection({}, y, n);
    let ue = a.DragPreview;
    j = a.renderDragPreview ? /* @__PURE__ */ $.createElement(ue, {
      ref: x
    }, a.renderDragPreview) : null;
  }
  if (h && a) {
    R = a.useDroppableCollectionState({
      collection: d,
      selectionManager: v
    });
    let ue = a.dropTargetDelegate || P || new a.ListDropTargetDelegate(d, n, {
      orientation: s,
      layout: u,
      direction: m
    });
    A = a.useDroppableCollection({
      keyboardDelegate: M,
      dropTargetDelegate: ue
    }, R, n), B = R.isDropTarget({
      type: "root"
    });
  }
  let { focusProps: S, isFocused: w, isFocusVisible: W } = Fe(), J = c.collection.size === 0 || c.collection.size === 1 && ((i = c.collection.getItem(c.collection.getFirstKey())) === null || i === void 0 ? void 0 : i.type) === "loader", N = {
    isDropTarget: B,
    isEmpty: J,
    isFocused: w,
    isFocusVisible: W,
    layout: e.layout || "stack",
    state: c
  }, Q = ne({
    className: e.className,
    style: e.style,
    defaultClassName: "react-aria-ListBox",
    values: N
  }), te = null;
  return J && e.renderEmptyState && (te = /* @__PURE__ */ $.createElement("div", {
    // eslint-disable-next-line
    role: "option",
    style: {
      display: "contents"
    }
  }, e.renderEmptyState(N))), /* @__PURE__ */ $.createElement(rl, null, /* @__PURE__ */ $.createElement("div", {
    ...ee(e),
    ...V(F, S, A == null ? void 0 : A.collectionProps),
    ...Q,
    ref: n,
    slot: e.slot || void 0,
    onScroll: e.onScroll,
    "data-drop-target": B || void 0,
    "data-empty": J || void 0,
    "data-focused": w || void 0,
    "data-focus-visible": W || void 0,
    "data-layout": e.layout || "stack",
    "data-orientation": e.orientation || "vertical"
  }, /* @__PURE__ */ $.createElement(xe, {
    values: [
      [
        mi,
        e
      ],
      [
        yt,
        c
      ],
      [
        kt,
        {
          dragAndDropHooks: a,
          dragState: y,
          dropState: R
        }
      ],
      [
        Vr,
        {
          elementType: "div"
        }
      ],
      [
        zr,
        {
          render: nm
        }
      ],
      [
        Bf,
        {
          name: "ListBoxSection",
          render: em
        }
      ]
    ]
  }, /* @__PURE__ */ $.createElement(T, {
    collection: d,
    scrollRef: n,
    persistedKeys: pp(v, a, R),
    renderDropIndicator: Or(a, R)
  })), te, j));
}
function em(t, e, n, i = "react-aria-ListBoxSection") {
  let l = z(yt), { dragAndDropHooks: r, dropState: o } = z(kt), { CollectionBranch: a } = z(Me), [u, s] = St();
  var c;
  let { headingProps: d, groupProps: v } = xb({
    heading: s,
    "aria-label": (c = t["aria-label"]) !== null && c !== void 0 ? c : void 0
  }), p = ne({
    defaultClassName: i,
    className: t.className,
    style: t.style,
    values: {}
  });
  return /* @__PURE__ */ $.createElement("section", {
    ...ee(t),
    ...v,
    ...p,
    ref: e
  }, /* @__PURE__ */ $.createElement(vp.Provider, {
    value: {
      ...d,
      ref: u
    }
  }, /* @__PURE__ */ $.createElement(a, {
    collection: l.collection,
    parent: n,
    renderDropIndicator: Or(r, o)
  })));
}
const tm = /* @__PURE__ */ zt("item", function(e, n, i) {
  let l = Re(n), r = z(yt), { dragAndDropHooks: o, dragState: a, dropState: u } = z(kt), { optionProps: s, labelProps: c, descriptionProps: d, ...v } = yb({
    key: i.key,
    "aria-label": e == null ? void 0 : e["aria-label"]
  }, r, l), { hoverProps: p, isHovered: h } = He({
    isDisabled: !v.allowsSelection && !v.hasAction,
    onHoverStart: i.props.onHoverStart,
    onHoverChange: i.props.onHoverChange,
    onHoverEnd: i.props.onHoverEnd
  }), m = null;
  a && o && (m = o.useDraggableItem({
    key: i.key
  }, a));
  let g = null;
  u && o && (g = o.useDroppableItem({
    target: {
      type: "item",
      key: i.key,
      dropPosition: "on"
    }
  }, u, l));
  let b = a && a.isDragging(i.key), E = ne({
    ...e,
    id: void 0,
    children: e.children,
    defaultClassName: "react-aria-ListBoxItem",
    values: {
      ...v,
      isHovered: h,
      selectionMode: r.selectionManager.selectionMode,
      selectionBehavior: r.selectionManager.selectionBehavior,
      allowsDragging: !!a,
      isDragging: b,
      isDropTarget: g == null ? void 0 : g.isDropTarget
    }
  });
  Z(() => {
    !i.textValue && process.env.NODE_ENV !== "production" && console.warn("A `textValue` prop is required for <ListBoxItem> elements with non-plain text children in order to support accessibility features such as type to select.");
  }, [
    i.textValue
  ]);
  let D = e.href ? "a" : "div";
  return /* @__PURE__ */ $.createElement(D, {
    ...V(s, p, m == null ? void 0 : m.dragProps, g == null ? void 0 : g.dropProps),
    ...E,
    ref: l,
    "data-allows-dragging": !!a || void 0,
    "data-selected": v.isSelected || void 0,
    "data-disabled": v.isDisabled || void 0,
    "data-hovered": h || void 0,
    "data-focused": v.isFocused || void 0,
    "data-focus-visible": v.isFocusVisible || void 0,
    "data-pressed": v.isPressed || void 0,
    "data-dragging": b || void 0,
    "data-drop-target": (g == null ? void 0 : g.isDropTarget) || void 0,
    "data-selection-mode": r.selectionManager.selectionMode === "none" ? void 0 : r.selectionManager.selectionMode
  }, /* @__PURE__ */ $.createElement(xe, {
    values: [
      [
        ft,
        {
          slots: {
            [Yt]: c,
            label: c,
            description: d
          }
        }
      ]
    ]
  }, E.children));
});
function nm(t, e) {
  e = Re(e);
  let { dragAndDropHooks: n, dropState: i } = z(kt), { dropIndicatorProps: l, isHidden: r, isDropTarget: o } = n.useDropIndicator(t, i, e);
  return r ? null : /* @__PURE__ */ $.createElement(lm, {
    ...t,
    dropIndicatorProps: l,
    isDropTarget: o,
    ref: e
  });
}
function im(t, e) {
  let { dropIndicatorProps: n, isDropTarget: i, ...l } = t, r = ne({
    ...l,
    defaultClassName: "react-aria-DropIndicator",
    values: {
      isDropTarget: i
    }
  });
  return /* @__PURE__ */ $.createElement("div", {
    ...n,
    ...r,
    // eslint-disable-next-line
    role: "option",
    ref: e,
    "data-drop-target": i || void 0
  });
}
const lm = /* @__PURE__ */ re(im);
zt("loader", function(e, n, i) {
  let l = z(yt), { isVirtualized: r } = z(Me), { isLoading: o, onLoadMore: a, scrollOffset: u, ...s } = e, c = L(null), d = U(() => ({
    onLoadMore: a,
    collection: l == null ? void 0 : l.collection,
    sentinelRef: c,
    scrollOffset: u
  }), [
    a,
    u,
    l == null ? void 0 : l.collection
  ]);
  Ta(d, c);
  let v = ne({
    ...s,
    id: void 0,
    children: i.rendered,
    defaultClassName: "react-aria-ListBoxLoadingIndicator",
    values: null
  }), p = {
    // For Android talkback
    tabIndex: -1
  };
  return r && (p["aria-posinset"] = i.index + 1, p["aria-setsize"] = l.collection.size), /* @__PURE__ */ $.createElement($.Fragment, null, /* @__PURE__ */ $.createElement("div", {
    style: {
      position: "relative",
      width: 0,
      height: 0
    },
    inert: Li(!0)
  }, /* @__PURE__ */ $.createElement("div", {
    "data-testid": "loadMoreSentinel",
    ref: c,
    style: {
      position: "absolute",
      height: 1,
      width: 1
    }
  })), o && v.children && /* @__PURE__ */ $.createElement("div", {
    ...V(ee(e), p),
    ...v,
    // aria-selected isn't needed here since this option is not selectable.
    // eslint-disable-next-line jsx-a11y/role-has-required-aria-props
    role: "option",
    ref: n
  }, v.children));
});
const rm = /* @__PURE__ */ _(null), fl = /* @__PURE__ */ _(null), Hr = /* @__PURE__ */ _(null), bp = /* @__PURE__ */ _(null), om = /* @__PURE__ */ re(function(e, n) {
  [e, n] = fe(e, n, rm);
  let i = L(null), l = m0(e.formatOptions), r = V0({
    ...e,
    numberFormatter: l
  }), [o, a] = St(!e["aria-label"] && !e["aria-labelledby"]), { groupProps: u, trackProps: s, labelProps: c, outputProps: d } = H0({
    ...e,
    label: a
  }, r, i), v = ne({
    ...e,
    values: {
      orientation: r.orientation,
      isDisabled: r.isDisabled,
      state: r
    },
    defaultClassName: "react-aria-Slider"
  }), p = ee(e);
  return delete p.id, /* @__PURE__ */ $.createElement(xe, {
    values: [
      [
        fl,
        r
      ],
      [
        Hr,
        {
          ...s,
          ref: i
        }
      ],
      [
        bp,
        d
      ],
      [
        $t,
        {
          ...c,
          ref: o
        }
      ]
    ]
  }, /* @__PURE__ */ $.createElement("div", {
    ...p,
    ...u,
    ...v,
    ref: n,
    slot: e.slot || void 0,
    "data-orientation": r.orientation,
    "data-disabled": r.isDisabled || void 0
  }));
}), am = /* @__PURE__ */ re(function(e, n) {
  [e, n] = fe(e, n, bp);
  let { children: i, style: l, className: r, ...o } = e, a = z(fl), u = ne({
    className: r,
    style: l,
    children: i,
    defaultChildren: a.getThumbValueLabel(0),
    defaultClassName: "react-aria-SliderOutput",
    values: {
      orientation: a.orientation,
      isDisabled: a.isDisabled,
      state: a
    }
  });
  return /* @__PURE__ */ $.createElement("output", {
    ...o,
    ...u,
    ref: n,
    "data-orientation": a.orientation || void 0,
    "data-disabled": a.isDisabled || void 0
  });
}), um = /* @__PURE__ */ re(function(e, n) {
  [e, n] = fe(e, n, Hr);
  let i = z(fl), { onHoverStart: l, onHoverEnd: r, onHoverChange: o, ...a } = e, { hoverProps: u, isHovered: s } = He({
    onHoverStart: l,
    onHoverEnd: r,
    onHoverChange: o
  }), c = ne({
    ...e,
    defaultClassName: "react-aria-SliderTrack",
    values: {
      orientation: i.orientation,
      isDisabled: i.isDisabled,
      isHovered: s,
      state: i
    }
  });
  return /* @__PURE__ */ $.createElement("div", {
    ...V(a, u),
    ...c,
    ref: n,
    "data-hovered": s || void 0,
    "data-orientation": i.orientation || void 0,
    "data-disabled": i.isDisabled || void 0
  });
}), sm = /* @__PURE__ */ re(function(e, n) {
  let { inputRef: i = null } = e, l = z(fl), { ref: r } = mt(Hr), { index: o = 0 } = e, a = L(null), u = i || a, [s, c] = St(!e["aria-label"] && !e["aria-labelledby"]), { thumbProps: d, inputProps: v, labelProps: p, isDragging: h, isFocused: m, isDisabled: g } = U0({
    ...e,
    index: o,
    trackRef: r,
    inputRef: u,
    label: c
  }, l), { focusProps: b, isFocusVisible: E } = Fe(), { hoverProps: D, isHovered: k } = He(e), P = ne({
    ...e,
    defaultClassName: "react-aria-SliderThumb",
    values: {
      state: l,
      isHovered: k,
      isDragging: h,
      isFocused: m,
      isFocusVisible: E,
      isDisabled: g
    }
  }), T = ee(e);
  return delete T.id, /* @__PURE__ */ $.createElement("div", {
    ...V(T, d, D),
    ...P,
    ref: n,
    style: {
      ...d.style,
      ...P.style
    },
    "data-hovered": k || void 0,
    "data-dragging": h || void 0,
    "data-focused": m || void 0,
    "data-focus-visible": E || void 0,
    "data-disabled": g || void 0
  }, /* @__PURE__ */ $.createElement(pi, null, /* @__PURE__ */ $.createElement("input", {
    ref: u,
    ...V(v, b)
  })), /* @__PURE__ */ $.createElement(xe, {
    values: [
      [
        $t,
        {
          ...p,
          ref: s
        }
      ]
    ]
  }, P.children));
}), mp = /* @__PURE__ */ _({
  placement: "bottom"
}), cm = /* @__PURE__ */ re(function(e, n) {
  [e, n] = fe(e, n, mp);
  let i = e.placement, l = {
    position: "absolute",
    transform: i === "top" || i === "bottom" ? "translateX(-50%)" : "translateY(-50%)"
  };
  i != null && (l[i] = "100%");
  let r = ne({
    ...e,
    defaultClassName: "react-aria-OverlayArrow",
    values: {
      placement: i
    }
  });
  r.style && Object.keys(r.style).forEach((a) => r.style[a] === void 0 && delete r.style[a]);
  let o = ee(e);
  return /* @__PURE__ */ $.createElement("div", {
    ...o,
    ...r,
    style: {
      ...l,
      ...r.style
    },
    ref: n,
    "data-placement": i
  });
}), gi = /* @__PURE__ */ _(null), ha = /* @__PURE__ */ _(null), pl = /* @__PURE__ */ re(function(e, n) {
  [e, n] = fe(e, n, gi);
  let i = z(Vt), l = hi(e), r = e.isOpen != null || e.defaultOpen != null || !i ? l : i, o = Rl(n, r.isOpen) || e.isExiting || !1, a = Eh(), { direction: u } = We();
  if (a) {
    let s = e.children;
    return typeof s == "function" && (s = s({
      trigger: e.trigger || null,
      placement: "bottom",
      isEntering: !1,
      isExiting: !1,
      defaultChildren: null
    })), /* @__PURE__ */ $.createElement($.Fragment, null, s);
  }
  return r && !r.isOpen && !o ? null : /* @__PURE__ */ $.createElement(dm, {
    ...e,
    triggerRef: e.triggerRef,
    state: r,
    popoverRef: n,
    isExiting: o,
    dir: u
  });
});
function dm({ state: t, isExiting: e, UNSTABLE_portalContainer: n, clearContexts: i, ...l }) {
  let r = L(null), [o, a] = Y(0), u = L(null), s = z(ha), c = s && l.trigger === "SubmenuTrigger";
  de(() => {
    r.current && t.isOpen && a(r.current.getBoundingClientRect().width);
  }, [
    t.isOpen,
    r
  ]);
  var d;
  let { popoverProps: v, underlayProps: p, arrowProps: h, placement: m } = cb({
    ...l,
    offset: (d = l.offset) !== null && d !== void 0 ? d : 8,
    arrowSize: o,
    // If this is a submenu/subdialog, use the root popover's container
    // to detect outside interaction and add aria-hidden.
    groupRef: c ? s : u
  }, t), g = l.popoverRef, b = pr(g, !!m) || l.isEntering || !1, E = ne({
    ...l,
    defaultClassName: "react-aria-Popover",
    values: {
      trigger: l.trigger || null,
      placement: m,
      isEntering: b,
      isExiting: e
    }
  }), D = !l.isNonModal || l.trigger === "SubmenuTrigger", [k, P] = Y(!1);
  de(() => {
    g.current && P(D && !g.current.querySelector("[role=dialog]"));
  }, [
    g,
    D
  ]), Z(() => {
    k && g.current && !g.current.contains(document.activeElement) && Te(g.current);
  }, [
    k,
    g
  ]);
  let T = U(() => {
    let K = E.children;
    if (i) for (let y of i) K = /* @__PURE__ */ $.createElement(y.Provider, {
      value: null
    }, K);
    return K;
  }, [
    E.children,
    i
  ]), M = {
    ...v.style,
    ...E.style
  }, F = /* @__PURE__ */ $.createElement("div", {
    ...V(ee(l), v),
    ...E,
    role: k ? "dialog" : void 0,
    tabIndex: k ? -1 : void 0,
    "aria-label": l["aria-label"],
    "aria-labelledby": l["aria-labelledby"],
    ref: g,
    slot: l.slot || void 0,
    style: M,
    dir: l.dir,
    "data-trigger": l.trigger,
    "data-placement": m,
    "data-entering": b || void 0,
    "data-exiting": e || void 0
  }, !l.isNonModal && /* @__PURE__ */ $.createElement(Jl, {
    onDismiss: t.close
  }), /* @__PURE__ */ $.createElement(mp.Provider, {
    value: {
      ...h,
      placement: m,
      ref: r
    }
  }, T), /* @__PURE__ */ $.createElement(Jl, {
    onDismiss: t.close
  }));
  if (!c) return /* @__PURE__ */ $.createElement(Ql, {
    ...l,
    shouldContainFocus: k,
    isExiting: e,
    portalContainer: n
  }, !l.isNonModal && t.isOpen && /* @__PURE__ */ $.createElement("div", {
    "data-testid": "underlay",
    ...p,
    style: {
      position: "fixed",
      inset: 0
    }
  }), /* @__PURE__ */ $.createElement("div", {
    ref: u,
    style: {
      display: "contents"
    }
  }, /* @__PURE__ */ $.createElement(ha.Provider, {
    value: u
  }, F)));
  var H;
  return /* @__PURE__ */ $.createElement(Ql, {
    ...l,
    shouldContainFocus: k,
    isExiting: e,
    portalContainer: (H = n ?? (s == null ? void 0 : s.current)) !== null && H !== void 0 ? H : void 0
  }, F);
}
const gp = /* @__PURE__ */ _({}), fm = /* @__PURE__ */ re(function(e, n) {
  return [e, n] = fe(e, n, gp), /* @__PURE__ */ $.createElement("kbd", {
    dir: "ltr",
    ...e,
    ref: n
  });
}), $p = /* @__PURE__ */ _(null), Ur = /* @__PURE__ */ _(null), Yi = /* @__PURE__ */ _(null), Zi = /* @__PURE__ */ _(null);
function pm(t) {
  let e = Rr(t), n = L(null), { menuTriggerProps: i, menuProps: l } = Ar({
    ...t,
    type: "menu"
  }, e, n), [r, o] = Y(null), a = X(() => {
    n.current && o(n.current.offsetWidth + "px");
  }, [
    n
  ]);
  Bn({
    ref: n,
    onResize: a
  });
  let u = L(null);
  return /* @__PURE__ */ $.createElement(xe, {
    values: [
      [
        $p,
        {
          ...l,
          ref: u
        }
      ],
      [
        Vt,
        e
      ],
      [
        Yi,
        e
      ],
      [
        gi,
        {
          trigger: "MenuTrigger",
          triggerRef: n,
          scrollRef: u,
          placement: "bottom start",
          style: {
            "--trigger-width": r
          },
          "aria-labelledby": l["aria-labelledby"]
        }
      ]
    ]
  }, /* @__PURE__ */ $.createElement(Va, {
    ...i,
    ref: n,
    isPressed: e.isOpen
  }, t.children));
}
const vm = /* @__PURE__ */ _(null), hm = /* @__PURE__ */ re(function(e, n) {
  return [e, n] = fe(e, n, $p), /* @__PURE__ */ $.createElement(dn, {
    content: /* @__PURE__ */ $.createElement(Ot, e)
  }, (i) => /* @__PURE__ */ $.createElement(bm, {
    props: e,
    collection: i,
    menuRef: n
  }));
});
function bm({ props: t, collection: e, menuRef: n }) {
  let { filter: i, collectionProps: l, collectionRef: r } = z(rr) || {};
  n = Re(U(() => Rt(n, r !== void 0 ? r : null), [
    r,
    n
  ]));
  let o = U(() => i ? e.UNSTABLE_filter(i) : e, [
    e,
    i
  ]), a = j4({
    ...t,
    collection: o,
    children: void 0
  }), u = z(Yi), { isVirtualized: s, CollectionRoot: c } = z(Me), { menuProps: d } = Cb({
    ...t,
    ...l,
    isVirtualized: s,
    onClose: t.onClose || (u == null ? void 0 : u.close)
  }, a, n), v = ne({
    defaultClassName: "react-aria-Menu",
    className: t.className,
    style: t.style,
    values: {
      isEmpty: a.collection.size === 0
    }
  }), p = null;
  return a.collection.size === 0 && t.renderEmptyState && (p = /* @__PURE__ */ $.createElement("div", {
    role: "menuitem",
    style: {
      display: "contents"
    }
  }, t.renderEmptyState())), /* @__PURE__ */ $.createElement(rl, null, /* @__PURE__ */ $.createElement("div", {
    ...ee(t),
    ...d,
    ...v,
    ref: n,
    slot: t.slot || void 0,
    "data-empty": a.collection.size === 0 || void 0,
    onScroll: t.onScroll
  }, /* @__PURE__ */ $.createElement(xe, {
    values: [
      [
        Ur,
        a
      ],
      [
        Vr,
        {
          elementType: "div"
        }
      ],
      [
        Bf,
        {
          name: "MenuSection",
          render: gm
        }
      ],
      [
        vm,
        {
          parentMenuRef: n,
          shouldUseVirtualFocus: l == null ? void 0 : l.shouldUseVirtualFocus
        }
      ],
      [
        or,
        null
      ],
      [
        rr,
        null
      ],
      [
        Zi,
        a.selectionManager
      ],
      /* Ensure root MenuTriggerState is defined, in case Menu is rendered outside a MenuTrigger. */
      /* We assume the context can never change between defined and undefined. */
      /* eslint-disable-next-line react-hooks/rules-of-hooks */
      [
        Yi,
        u ?? Rr({})
      ]
    ]
  }, /* @__PURE__ */ $.createElement(c, {
    collection: a.collection,
    persistedKeys: Lr(a.selectionManager.focusedKey),
    scrollRef: n
  })), p));
}
class mm extends Mn {
  get focusedKey() {
    return this.parent.focusedKey;
  }
  get isFocused() {
    return this.parent.isFocused;
  }
  setFocusedKey(e, n) {
    return this.parent.setFocusedKey(e, n);
  }
  setFocused(e) {
    this.parent.setFocused(e);
  }
  get childFocusStrategy() {
    return this.parent.childFocusStrategy;
  }
  constructor(e, n) {
    super(e.collection, n), this.parent = e;
  }
}
function gm(t, e, n, i = "react-aria-MenuSection") {
  var l, r;
  let o = z(Ur), { CollectionBranch: a } = z(Me), [u, s] = St();
  var c;
  let { headingProps: d, groupProps: v } = Db({
    heading: s,
    "aria-label": (c = n.props["aria-label"]) !== null && c !== void 0 ? c : void 0
  }), p = ne({
    defaultClassName: i,
    className: (l = n.props) === null || l === void 0 ? void 0 : l.className,
    style: (r = n.props) === null || r === void 0 ? void 0 : r.style,
    values: {}
  }), h = z(Zi), m = vi(t), g = t.selectionMode != null ? new mm(h, m) : h;
  return /* @__PURE__ */ $.createElement("section", {
    ...ee(t),
    ...v,
    ...p,
    ref: e
  }, /* @__PURE__ */ $.createElement(xe, {
    values: [
      [
        vp,
        {
          ...d,
          ref: u
        }
      ],
      [
        Zi,
        g
      ]
    ]
  }, /* @__PURE__ */ $.createElement(a, {
    collection: o.collection,
    parent: n
  })));
}
const or = /* @__PURE__ */ _(null), $m = /* @__PURE__ */ zt("item", function(e, n, i) {
  var l;
  [e, n] = fe(e, n, or);
  let r = (l = mt(or)) === null || l === void 0 ? void 0 : l.id, o = z(Ur), a = Re(n), u = z(Zi), { menuItemProps: s, labelProps: c, descriptionProps: d, keyboardShortcutProps: v, ...p } = Pb({
    ...e,
    id: r,
    key: i.key,
    selectionManager: u
  }, o, a), { hoverProps: h, isHovered: m } = He({
    isDisabled: p.isDisabled
  }), g = ne({
    ...e,
    id: void 0,
    children: i.rendered,
    defaultClassName: "react-aria-MenuItem",
    values: {
      ...p,
      isHovered: m,
      isFocusVisible: p.isFocusVisible,
      selectionMode: u.selectionMode,
      selectionBehavior: u.selectionBehavior,
      hasSubmenu: !!e["aria-haspopup"],
      isOpen: e["aria-expanded"] === "true"
    }
  }), b = e.href ? "a" : "div";
  return /* @__PURE__ */ $.createElement(b, {
    ...V(s, h),
    ...g,
    ref: a,
    "data-disabled": p.isDisabled || void 0,
    "data-hovered": m || void 0,
    "data-focused": p.isFocused || void 0,
    "data-focus-visible": p.isFocusVisible || void 0,
    "data-pressed": p.isPressed || void 0,
    "data-selected": p.isSelected || void 0,
    "data-selection-mode": u.selectionMode === "none" ? void 0 : u.selectionMode,
    "data-has-submenu": !!e["aria-haspopup"] || void 0,
    "data-open": e["aria-expanded"] === "true" || void 0
  }, /* @__PURE__ */ $.createElement(xe, {
    values: [
      [
        ft,
        {
          slots: {
            [Yt]: c,
            label: c,
            description: d
          }
        }
      ],
      [
        gp,
        v
      ]
    ]
  }, g.children));
}), yp = /* @__PURE__ */ _(null), Vt = /* @__PURE__ */ _(null);
function ym(t) {
  let e = Rr(t), n = L(null), { triggerProps: i, overlayProps: l } = Gu({
    type: "dialog"
  }, e, n), [r, o] = Y(null), a = X(() => {
    n.current && o(n.current.offsetWidth + "px");
  }, [
    n
  ]);
  return Bn({
    ref: n,
    onResize: a
  }), i.id = Pe(), l["aria-labelledby"] = i.id, /* @__PURE__ */ $.createElement(xe, {
    values: [
      [
        Vt,
        e
      ],
      [
        Yi,
        e
      ],
      [
        yp,
        l
      ],
      [
        gi,
        {
          trigger: "DialogTrigger",
          triggerRef: n,
          "aria-labelledby": l["aria-labelledby"],
          style: {
            "--trigger-width": r
          }
        }
      ]
    ]
  }, /* @__PURE__ */ $.createElement(Va, {
    ...i,
    ref: n,
    isPressed: e.isOpen
  }, t.children));
}
const xm = /* @__PURE__ */ re(function(e, n) {
  let i = e["aria-labelledby"];
  [e, n] = fe(e, n, yp);
  let { dialogProps: l, titleProps: r } = kb({
    ...e,
    // Only pass aria-labelledby from props, not context.
    // Context is used as a fallback below.
    "aria-labelledby": i
  }, n), o = z(Vt);
  !l["aria-label"] && !l["aria-labelledby"] && (e["aria-labelledby"] ? l["aria-labelledby"] = e["aria-labelledby"] : process.env.NODE_ENV !== "production" && console.warn('If a Dialog does not contain a <Heading slot="title">, it must have an aria-label or aria-labelledby attribute for accessibility.'));
  let a = ne({
    defaultClassName: "react-aria-Dialog",
    className: e.className,
    style: e.style,
    children: e.children,
    values: {
      close: (o == null ? void 0 : o.close) || (() => {
      })
    }
  });
  return /* @__PURE__ */ $.createElement("section", {
    ...ee(e),
    ...l,
    ...a,
    ref: n,
    slot: e.slot || void 0
  }, /* @__PURE__ */ $.createElement(xe, {
    values: [
      [
        Ca,
        {
          slots: {
            [Yt]: {},
            title: {
              ...r,
              level: 2
            }
          }
        }
      ],
      [
        wt,
        {
          slots: {
            [Yt]: {},
            close: {
              onPress: () => o == null ? void 0 : o.close()
            }
          }
        }
      ]
    ]
  }, a.children));
}), Em = /* @__PURE__ */ _(null), Cm = /* @__PURE__ */ _(null), Pm = /* @__PURE__ */ re(function(e, n) {
  [e, n] = fe(e, n, Em);
  let { children: i, isDisabled: l = !1, isInvalid: r = !1, isRequired: o = !1 } = e, a = U(() => {
    var u;
    return /* @__PURE__ */ $.createElement(mi.Provider, {
      value: {
        items: (u = e.items) !== null && u !== void 0 ? u : e.defaultItems
      }
    }, typeof i == "function" ? i({
      isOpen: !1,
      isDisabled: l,
      isInvalid: r,
      isRequired: o,
      defaultChildren: null
    }) : i);
  }, [
    i,
    l,
    r,
    o,
    e.items,
    e.defaultItems
  ]);
  return /* @__PURE__ */ $.createElement(dn, {
    content: a
  }, (u) => /* @__PURE__ */ $.createElement(Sm, {
    props: e,
    collection: u,
    comboBoxRef: n
  }));
}), Dm = [
  $t,
  wt,
  ri,
  wf,
  ft
];
function Sm({ props: t, collection: e, comboBoxRef: n }) {
  let { name: i, formValue: l = "key", allowsCustomValue: r } = t;
  r && (l = "text");
  let { validationBehavior: o } = mt(Xt) || {};
  var a, u;
  let s = (u = (a = t.validationBehavior) !== null && a !== void 0 ? a : o) !== null && u !== void 0 ? u : "native", { contains: c } = g0({
    sensitivity: "base"
  }), d = P4({
    defaultFilter: t.defaultFilter || c,
    ...t,
    // If props.items isn't provided, rely on collection filtering (aka listbox.items is provided or defaultItems provided to Combobox)
    items: t.items,
    children: void 0,
    collection: e,
    validationBehavior: s
  }), v = L(null), p = L(null), h = L(null), m = L(null), [g, b] = St(!t["aria-label"] && !t["aria-labelledby"]), { buttonProps: E, inputProps: D, listBoxProps: k, labelProps: P, descriptionProps: T, errorMessageProps: M, ...F } = wb({
    ...on(t),
    label: b,
    inputRef: p,
    buttonRef: v,
    listBoxRef: h,
    popoverRef: m,
    name: l === "text" ? i : void 0,
    validationBehavior: s
  }, d), [H, K] = Y(null), y = X(() => {
    if (p.current) {
      var x;
      let S = (x = v.current) === null || x === void 0 ? void 0 : x.getBoundingClientRect(), w = p.current.getBoundingClientRect(), W = S ? Math.min(S.left, w.left) : w.left, J = S ? Math.max(S.right, w.right) : w.right;
      K(J - W + "px");
    }
  }, [
    v,
    p,
    K
  ]);
  Bn({
    ref: p,
    onResize: y
  });
  let R = U(() => ({
    isOpen: d.isOpen,
    isDisabled: t.isDisabled || !1,
    isInvalid: F.isInvalid || !1,
    isRequired: t.isRequired || !1
  }), [
    d.isOpen,
    t.isDisabled,
    F.isInvalid,
    t.isRequired
  ]), A = ne({
    ...t,
    values: R,
    defaultClassName: "react-aria-ComboBox"
  }), B = ee(t);
  delete B.id;
  var j;
  return /* @__PURE__ */ $.createElement(xe, {
    values: [
      [
        Cm,
        d
      ],
      [
        $t,
        {
          ...P,
          ref: g
        }
      ],
      [
        wt,
        {
          ...E,
          ref: v,
          isPressed: d.isOpen
        }
      ],
      [
        ri,
        {
          ...D,
          ref: p
        }
      ],
      [
        Vt,
        d
      ],
      [
        gi,
        {
          ref: m,
          triggerRef: p,
          scrollRef: h,
          placement: "bottom start",
          isNonModal: !0,
          trigger: "ComboBox",
          style: {
            "--trigger-width": H
          },
          clearContexts: Dm
        }
      ],
      [
        mi,
        {
          ...k,
          ref: h
        }
      ],
      [
        yt,
        d
      ],
      [
        ft,
        {
          slots: {
            description: T,
            errorMessage: M
          }
        }
      ],
      [
        wf,
        {
          isInvalid: F.isInvalid,
          isDisabled: t.isDisabled || !1
        }
      ],
      [
        vn,
        F
      ]
    ]
  }, /* @__PURE__ */ $.createElement("div", {
    ...B,
    ...A,
    ref: n,
    slot: t.slot || void 0,
    "data-focused": d.isFocused || void 0,
    "data-open": d.isOpen || void 0,
    "data-disabled": t.isDisabled || void 0,
    "data-invalid": F.isInvalid || void 0,
    "data-required": t.isRequired || void 0
  }), i && l === "key" && /* @__PURE__ */ $.createElement("input", {
    type: "hidden",
    name: i,
    value: (j = d.selectedKey) !== null && j !== void 0 ? j : ""
  }));
}
const xp = /* @__PURE__ */ _(null), wm = /* @__PURE__ */ re(function(e, n) {
  let i = w4(e), l = ne({
    ...e,
    defaultClassName: "react-aria-DisclosureGroup",
    values: {
      isDisabled: i.isDisabled,
      state: i
    }
  }), r = ee(e);
  return /* @__PURE__ */ $.createElement("div", {
    ...r,
    ...l,
    ref: n,
    "data-disabled": e.isDisabled || void 0
  }, /* @__PURE__ */ $.createElement(xp.Provider, {
    value: i
  }, l.children));
}), km = /* @__PURE__ */ _(null), Tm = /* @__PURE__ */ _(null), Ep = /* @__PURE__ */ _(null), Bm = /* @__PURE__ */ re(function(e, n) {
  [e, n] = fe(e, n, km);
  let i = z(xp), { id: l, ...r } = e, o = Pe();
  l || (l = o);
  let a = i ? i.expandedKeys.has(l) : e.isExpanded, u = S4({
    ...e,
    isExpanded: a,
    onExpandedChange(b) {
      var E;
      i && i.toggleKey(l), (E = e.onExpandedChange) === null || E === void 0 || E.call(e, b);
    }
  }), s = $.useRef(null), c = e.isDisabled || (i == null ? void 0 : i.isDisabled) || !1, { buttonProps: d, panelProps: v } = Tb({
    ...e,
    isExpanded: a,
    isDisabled: c
  }, u, s), { isFocusVisible: p, focusProps: h } = Fe({
    within: !0
  }), m = ne({
    ...e,
    id: void 0,
    defaultClassName: "react-aria-Disclosure",
    values: {
      isExpanded: u.isExpanded,
      isDisabled: c,
      isFocusVisibleWithin: p,
      state: u
    }
  }), g = ee(r);
  return /* @__PURE__ */ $.createElement(xe, {
    values: [
      [
        wt,
        {
          slots: {
            [Yt]: {},
            trigger: d
          }
        }
      ],
      [
        Ep,
        {
          panelProps: v,
          panelRef: s
        }
      ],
      [
        Tm,
        u
      ]
    ]
  }, /* @__PURE__ */ $.createElement("div", {
    ref: n,
    "data-expanded": u.isExpanded || void 0,
    "data-disabled": c || void 0,
    "data-focus-visible-within": p || void 0,
    ...g,
    ...h,
    ...m
  }, m.children));
}), Am = /* @__PURE__ */ re(function(e, n) {
  let { role: i = "group" } = e, { panelProps: l, panelRef: r } = z(Ep), { isFocusVisible: o, focusProps: a } = Fe({
    within: !0
  }), u = ne({
    ...e,
    defaultClassName: "react-aria-DisclosurePanel",
    values: {
      isFocusVisibleWithin: o
    }
  }), s = ee(e);
  return /* @__PURE__ */ $.createElement("div", {
    ...s,
    ref: Rt(n, r),
    ...V(l, a),
    ...u,
    role: i,
    "data-focus-visible-within": o || void 0
  }, /* @__PURE__ */ $.createElement(xe, {
    values: [
      [
        wt,
        null
      ]
    ]
  }, e.children));
}), Fm = /* @__PURE__ */ re(function(e, n) {
  [e, n] = fe(e, n, Ca);
  let { children: i, level: l = 3, className: r, ...o } = e, a = `h${l}`;
  return /* @__PURE__ */ $.createElement(a, {
    ...o,
    ref: n,
    className: r ?? "react-aria-Heading"
  }, i);
}), Km = /* @__PURE__ */ _(null), Wr = /* @__PURE__ */ _(null), Nm = /* @__PURE__ */ re(function(e, n) {
  if (z(Wr)) return /* @__PURE__ */ $.createElement(ba, {
    ...e,
    modalRef: n
  }, e.children);
  let { isDismissable: l, isKeyboardDismissDisabled: r, isOpen: o, defaultOpen: a, onOpenChange: u, children: s, isEntering: c, isExiting: d, UNSTABLE_portalContainer: v, shouldCloseOnInteractOutside: p, ...h } = e;
  return /* @__PURE__ */ $.createElement(Cp, {
    isDismissable: l,
    isKeyboardDismissDisabled: r,
    isOpen: o,
    defaultOpen: a,
    onOpenChange: u,
    isEntering: c,
    isExiting: d,
    UNSTABLE_portalContainer: v,
    shouldCloseOnInteractOutside: p
  }, /* @__PURE__ */ $.createElement(ba, {
    ...h,
    modalRef: n
  }, s));
});
function Im(t, e) {
  [t, e] = fe(t, e, Km);
  let n = z(Vt), i = hi(t), l = t.isOpen != null || t.defaultOpen != null || !n ? i : n, r = Re(e), o = L(null), a = Rl(r, l.isOpen), u = Rl(o, l.isOpen), s = a || u || t.isExiting || !1, c = Mt();
  return !l.isOpen && !s || c ? null : /* @__PURE__ */ $.createElement(Mm, {
    ...t,
    state: l,
    isExiting: s,
    overlayRef: r,
    modalRef: o
  });
}
const Cp = /* @__PURE__ */ re(Im);
function Mm({ UNSTABLE_portalContainer: t, ...e }) {
  let n = e.modalRef, { state: i } = e, { modalProps: l, underlayProps: r } = db(e, i, n), o = pr(e.overlayRef) || e.isEntering || !1, a = ne({
    ...e,
    defaultClassName: "react-aria-ModalOverlay",
    values: {
      isEntering: o,
      isExiting: e.isExiting,
      state: i
    }
  }), u = fh(), s = {
    ...a.style,
    "--visual-viewport-height": u.height + "px"
  };
  return /* @__PURE__ */ $.createElement(Ql, {
    isExiting: e.isExiting,
    portalContainer: t
  }, /* @__PURE__ */ $.createElement("div", {
    ...V(ee(e), r),
    ...a,
    style: s,
    ref: e.overlayRef,
    "data-entering": o || void 0,
    "data-exiting": e.isExiting || void 0
  }, /* @__PURE__ */ $.createElement(xe, {
    values: [
      [
        Wr,
        {
          modalProps: l,
          modalRef: n,
          isExiting: e.isExiting,
          isDismissable: e.isDismissable
        }
      ],
      [
        Vt,
        i
      ]
    ]
  }, a.children)));
}
function ba(t) {
  let { modalProps: e, modalRef: n, isExiting: i, isDismissable: l } = z(Wr), r = z(Vt), o = U(() => Rt(t.modalRef, n), [
    t.modalRef,
    n
  ]), a = Re(o), u = pr(a), s = ne({
    ...t,
    defaultClassName: "react-aria-Modal",
    values: {
      isEntering: u,
      isExiting: i,
      state: r
    }
  });
  return /* @__PURE__ */ $.createElement("div", {
    ...V(ee(t), e),
    ...s,
    ref: a,
    "data-entering": u || void 0,
    "data-exiting": i || void 0
  }, l && /* @__PURE__ */ $.createElement(Jl, {
    onDismiss: r.close
  }), s.children);
}
const Rm = /* @__PURE__ */ _(null), Lm = /* @__PURE__ */ _(null), Pp = /* @__PURE__ */ _(null), jm = /* @__PURE__ */ re(function(e, n) {
  [e, n] = fe(e, n, Rm);
  let { validationBehavior: i } = mt(Xt) || {};
  var l, r;
  let o = (r = (l = e.validationBehavior) !== null && l !== void 0 ? l : i) !== null && r !== void 0 ? r : "native", a = B4({
    ...e,
    validationBehavior: o
  }), [u, s] = St(!e["aria-label"] && !e["aria-labelledby"]), { radioGroupProps: c, labelProps: d, descriptionProps: v, errorMessageProps: p, ...h } = Vb({
    ...e,
    label: s,
    validationBehavior: o
  }, a), m = ne({
    ...e,
    values: {
      orientation: e.orientation || "vertical",
      isDisabled: a.isDisabled,
      isReadOnly: a.isReadOnly,
      isRequired: a.isRequired,
      isInvalid: a.isInvalid,
      state: a
    },
    defaultClassName: "react-aria-RadioGroup"
  });
  return /* @__PURE__ */ $.createElement("div", {
    ...c,
    ...m,
    ref: n,
    slot: e.slot || void 0,
    "data-orientation": e.orientation || "vertical",
    "data-invalid": a.isInvalid || void 0,
    "data-disabled": a.isDisabled || void 0,
    "data-readonly": a.isReadOnly || void 0,
    "data-required": a.isRequired || void 0
  }, /* @__PURE__ */ $.createElement(xe, {
    values: [
      [
        Pp,
        a
      ],
      [
        $t,
        {
          ...d,
          ref: u,
          elementType: "span"
        }
      ],
      [
        ft,
        {
          slots: {
            description: v,
            errorMessage: p
          }
        }
      ],
      [
        vn,
        h
      ]
    ]
  }, m.children));
}), zm = /* @__PURE__ */ re(function(e, n) {
  let { inputRef: i = null, ...l } = e;
  [e, n] = fe(l, n, Lm);
  let r = $.useContext(Pp), o = Re(U(() => Rt(i, e.inputRef !== void 0 ? e.inputRef : null), [
    i,
    e.inputRef
  ])), { labelProps: a, inputProps: u, isSelected: s, isDisabled: c, isPressed: d } = Ob({
    ...on(e),
    // ReactNode type doesn't allow function children.
    children: typeof e.children == "function" ? !0 : e.children
  }, r, o), { isFocused: v, isFocusVisible: p, focusProps: h } = Fe(), m = c || r.isReadOnly, { hoverProps: g, isHovered: b } = He({
    ...e,
    isDisabled: m
  }), E = ne({
    ...e,
    defaultClassName: "react-aria-Radio",
    values: {
      isSelected: s,
      isPressed: d,
      isHovered: b,
      isFocused: v,
      isFocusVisible: p,
      isDisabled: c,
      isReadOnly: r.isReadOnly,
      isInvalid: r.isInvalid,
      isRequired: r.isRequired
    }
  }), D = ee(e);
  return delete D.id, /* @__PURE__ */ $.createElement("label", {
    ...V(D, a, g, E),
    ref: n,
    "data-selected": s || void 0,
    "data-pressed": d || void 0,
    "data-hovered": b || void 0,
    "data-focused": v || void 0,
    "data-focus-visible": p || void 0,
    "data-disabled": c || void 0,
    "data-readonly": r.isReadOnly || void 0,
    "data-invalid": r.isInvalid || void 0,
    "data-required": r.isRequired || void 0
  }, /* @__PURE__ */ $.createElement(pi, {
    elementType: "span"
  }, /* @__PURE__ */ $.createElement("input", {
    ...V(u, h),
    ref: o
  })), E.children);
});
function Om(t) {
  return t && t.__esModule ? t.default : t;
}
const Gr = /* @__PURE__ */ _(null), Dp = /* @__PURE__ */ _(null), Vm = /* @__PURE__ */ re(function(e, n) {
  [e, n] = fe(e, n, Gr);
  let { children: i, isDisabled: l = !1, isInvalid: r = !1, isRequired: o = !1 } = e, a = U(() => typeof i == "function" ? i({
    isOpen: !1,
    isDisabled: l,
    isInvalid: r,
    isRequired: o,
    isFocused: !1,
    isFocusVisible: !1,
    defaultChildren: null
  }) : i, [
    i,
    l,
    r,
    o
  ]);
  return /* @__PURE__ */ $.createElement(dn, {
    content: a
  }, (u) => /* @__PURE__ */ $.createElement(Um, {
    props: e,
    collection: u,
    selectRef: n
  }));
}), Hm = [
  $t,
  wt,
  ft
];
function Um({ props: t, selectRef: e, collection: n }) {
  let { validationBehavior: i } = mt(Xt) || {};
  var l, r;
  let o = (r = (l = t.validationBehavior) !== null && l !== void 0 ? l : i) !== null && r !== void 0 ? r : "native", a = A4({
    ...t,
    collection: n,
    children: void 0,
    validationBehavior: o
  }), { isFocusVisible: u, focusProps: s } = Fe({
    within: !0
  }), c = L(null), [d, v] = St(!t["aria-label"] && !t["aria-labelledby"]), { labelProps: p, triggerProps: h, valueProps: m, menuProps: g, descriptionProps: b, errorMessageProps: E, ...D } = Hb({
    ...on(t),
    label: v,
    validationBehavior: o
  }, a, c), [k, P] = Y(null), T = X(() => {
    c.current && P(c.current.offsetWidth + "px");
  }, [
    c
  ]);
  Bn({
    ref: c,
    onResize: T
  });
  let M = U(() => ({
    isOpen: a.isOpen,
    isFocused: a.isFocused,
    isFocusVisible: u,
    isDisabled: t.isDisabled || !1,
    isInvalid: D.isInvalid || !1,
    isRequired: t.isRequired || !1
  }), [
    a.isOpen,
    a.isFocused,
    u,
    t.isDisabled,
    D.isInvalid,
    t.isRequired
  ]), F = ne({
    ...t,
    values: M,
    defaultClassName: "react-aria-Select"
  }), H = ee(t);
  delete H.id;
  let K = L(null);
  return /* @__PURE__ */ $.createElement(xe, {
    values: [
      [
        Gr,
        t
      ],
      [
        Dp,
        a
      ],
      [
        Sp,
        m
      ],
      [
        $t,
        {
          ...p,
          ref: d,
          elementType: "span"
        }
      ],
      [
        wt,
        {
          ...h,
          ref: c,
          isPressed: a.isOpen,
          autoFocus: t.autoFocus
        }
      ],
      [
        Vt,
        a
      ],
      [
        gi,
        {
          trigger: "Select",
          triggerRef: c,
          scrollRef: K,
          placement: "bottom start",
          style: {
            "--trigger-width": k
          },
          "aria-labelledby": g["aria-labelledby"],
          clearContexts: Hm
        }
      ],
      [
        mi,
        {
          ...g,
          ref: K
        }
      ],
      [
        yt,
        a
      ],
      [
        ft,
        {
          slots: {
            description: b,
            errorMessage: E
          }
        }
      ],
      [
        vn,
        D
      ]
    ]
  }, /* @__PURE__ */ $.createElement("div", {
    ...H,
    ...F,
    ...s,
    ref: e,
    slot: t.slot || void 0,
    "data-focused": a.isFocused || void 0,
    "data-focus-visible": u || void 0,
    "data-open": a.isOpen || void 0,
    "data-disabled": t.isDisabled || void 0,
    "data-invalid": D.isInvalid || void 0,
    "data-required": t.isRequired || void 0
  }), /* @__PURE__ */ $.createElement(Wb, {
    autoComplete: t.autoComplete,
    state: a,
    triggerRef: c,
    label: v,
    name: t.name,
    isDisabled: t.isDisabled
  }));
}
const Sp = /* @__PURE__ */ _(null), Wm = /* @__PURE__ */ re(function(e, n) {
  var i, l;
  [e, n] = fe(e, n, Sp);
  let r = z(Dp), { placeholder: o } = mt(Gr), a = r.selectedKey != null ? r.collection.getItem(r.selectedKey) : null, u = a == null ? void 0 : a.props.children;
  typeof u == "function" && (u = u({
    isHovered: !1,
    isPressed: !1,
    isSelected: !1,
    isFocused: !1,
    isFocusVisible: !1,
    isDisabled: !1,
    selectionMode: "single",
    selectionBehavior: "toggle"
  }));
  let s = gt(Om(fp), "react-aria-components");
  var c, d, v;
  let p = ne({
    ...e,
    defaultChildren: (c = u ?? o) !== null && c !== void 0 ? c : s.format("selectPlaceholder"),
    defaultClassName: "react-aria-SelectValue",
    values: {
      selectedItem: (d = (i = r.selectedItem) === null || i === void 0 ? void 0 : i.value) !== null && d !== void 0 ? d : null,
      selectedText: (v = (l = r.selectedItem) === null || l === void 0 ? void 0 : l.textValue) !== null && v !== void 0 ? v : null,
      isPlaceholder: !a
    }
  }), h = ee(e);
  return /* @__PURE__ */ $.createElement("span", {
    ref: n,
    ...h,
    ...p,
    "data-placeholder": !a || void 0
  }, /* @__PURE__ */ $.createElement(ft.Provider, {
    value: void 0
  }, p.children));
}), Gm = /* @__PURE__ */ _(null), _m = /* @__PURE__ */ re(function(e, n) {
  let { inputRef: i = null, ...l } = e;
  [e, n] = fe(l, n, Gm);
  let r = Re(Rt(i, e.inputRef !== void 0 ? e.inputRef : null)), o = Dr(e), { labelProps: a, inputProps: u, isSelected: s, isDisabled: c, isReadOnly: d, isPressed: v } = _b({
    ...on(e),
    // ReactNode type doesn't allow function children.
    children: typeof e.children == "function" ? !0 : e.children
  }, o, r), { isFocused: p, isFocusVisible: h, focusProps: m } = Fe(), g = e.isDisabled || e.isReadOnly, { hoverProps: b, isHovered: E } = He({
    ...e,
    isDisabled: g
  }), D = ne({
    ...e,
    defaultClassName: "react-aria-Switch",
    values: {
      isSelected: s,
      isPressed: v,
      isHovered: E,
      isFocused: p,
      isFocusVisible: h,
      isDisabled: c,
      isReadOnly: d,
      state: o
    }
  }), k = ee(e);
  return delete k.id, /* @__PURE__ */ $.createElement("label", {
    ...V(k, a, b, D),
    ref: n,
    slot: e.slot || void 0,
    "data-selected": s || void 0,
    "data-pressed": v || void 0,
    "data-hovered": E || void 0,
    "data-focused": p || void 0,
    "data-focus-visible": h || void 0,
    "data-disabled": c || void 0,
    "data-readonly": d || void 0
  }, /* @__PURE__ */ $.createElement(pi, {
    elementType: "span"
  }, /* @__PURE__ */ $.createElement("input", {
    ...V(u, m),
    ref: r
  })), D.children);
});
class qm extends nl {
  addNode(e) {
    super.addNode(e), this.columnsDirty || (this.columnsDirty = e.type === "column"), e.type === "tableheader" && (this.head = e), e.type === "tablebody" && (this.body = e);
  }
  commit(e, n, i = !1) {
    this.updateColumns(i), this.rows = [];
    for (let o of this.getChildren(this.body.key)) {
      let a = o.lastChildKey;
      if (a != null) {
        let u = this.getItem(a);
        var l, r;
        let s = ((l = u.colIndex) !== null && l !== void 0 ? l : u.index) + ((r = u.colSpan) !== null && r !== void 0 ? r : 1);
        if (s !== this.columns.length && !i) throw new Error(`Cell count must match column count. Found ${s} cells and ${this.columns.length} columns.`);
      }
      this.rows.push(o);
    }
    super.commit(e, n, i);
  }
  updateColumns(e) {
    if (!this.columnsDirty) return;
    this.rowHeaderColumnKeys = /* @__PURE__ */ new Set(), this.columns = [];
    let n = /* @__PURE__ */ new Map(), i = (l) => {
      switch (l.type) {
        case "column":
          n.set(l.key, l), l.hasChildNodes || (l.index = this.columns.length, this.columns.push(l), l.props.isRowHeader && this.rowHeaderColumnKeys.add(l.key));
          break;
      }
      for (let r of this.getChildren(l.key)) i(r);
    };
    for (let l of this.getChildren(this.head.key)) i(l);
    if (this.headerRows = Sf(n, this.columns), this.columnsDirty = !1, this.rowHeaderColumnKeys.size === 0 && this.columns.length > 0 && !e) throw new Error("A table must have at least one Column with the isRowHeader prop set to true");
  }
  get columnCount() {
    return this.columns.length;
  }
  *[Symbol.iterator]() {
    this.head.key !== -1 && (yield this.head, yield this.body);
  }
  get size() {
    return this.rows.length;
  }
  getFirstKey() {
    return this.body.firstChildKey;
  }
  getLastKey() {
    return this.body.lastChildKey;
  }
  getKeyAfter(e) {
    let n = this.getItem(e);
    var i;
    return (n == null ? void 0 : n.type) === "column" ? (i = n.nextKey) !== null && i !== void 0 ? i : null : super.getKeyAfter(e);
  }
  getKeyBefore(e) {
    var n;
    let i = this.getItem(e);
    var l;
    if ((i == null ? void 0 : i.type) === "column") return (l = i.prevKey) !== null && l !== void 0 ? l : null;
    let r = super.getKeyBefore(e);
    return r != null && ((n = this.getItem(r)) === null || n === void 0 ? void 0 : n.type) === "tablebody" ? null : r;
  }
  getChildren(e) {
    if (!this.getItem(e)) {
      for (let n of this.headerRows)
        if (n.key === e) return n.childNodes;
    }
    return super.getChildren(e);
  }
  clone() {
    let e = super.clone();
    return e.headerRows = this.headerRows, e.columns = this.columns, e.rowHeaderColumnKeys = this.rowHeaderColumnKeys, e.head = this.head, e.body = this.body, e;
  }
  getTextValue(e) {
    let n = this.getItem(e);
    if (!n) return "";
    if (n.textValue) return n.textValue;
    let i = this.rowHeaderColumnKeys, l = [];
    for (let r of this.getChildren(e)) {
      let o = this.columns[r.index];
      if (i.has(o.key) && r.textValue && l.push(r.textValue), l.length === i.size) break;
    }
    return l.join(" ");
  }
  constructor(...e) {
    super(...e), this.headerRows = [], this.columns = [], this.rows = [], this.rowHeaderColumnKeys = /* @__PURE__ */ new Set(), this.head = new ei("tableheader", -1), this.body = new ei("tablebody", -2), this.columnsDirty = !0;
  }
}
const Ym = /* @__PURE__ */ _(null), Zm = /* @__PURE__ */ _(null), Tt = /* @__PURE__ */ _(null), wp = /* @__PURE__ */ _(null), Xm = /* @__PURE__ */ re(function(e, n) {
  var i;
  [e, n] = fe(e, n, Zm);
  let l = vi(e), { selectionBehavior: r, selectionMode: o, disallowEmptySelection: a } = l, u = !!(!((i = e.dragAndDropHooks) === null || i === void 0) && i.useDraggableCollectionState), s = U(() => ({
    selectionBehavior: o === "none" ? null : r,
    selectionMode: o,
    disallowEmptySelection: a,
    allowsDragging: u
  }), [
    r,
    o,
    a,
    u
  ]), c = /* @__PURE__ */ $.createElement(kp.Provider, {
    value: s
  }, /* @__PURE__ */ $.createElement(Ot, e));
  return /* @__PURE__ */ $.createElement(dn, {
    content: c,
    createCollection: () => new qm()
  }, (d) => /* @__PURE__ */ $.createElement(Jm, {
    props: e,
    forwardedRef: n,
    selectionState: l,
    collection: d
  }));
});
function Jm({ props: t, forwardedRef: e, selectionState: n, collection: i }) {
  let l = z(Ym);
  e = Re(U(() => Rt(e, l == null ? void 0 : l.tableRef), [
    e,
    l == null ? void 0 : l.tableRef
  ]));
  let r = M4({
    ...t,
    collection: i,
    children: void 0,
    UNSAFE_selectionState: n
  }), { isVirtualized: o, layoutDelegate: a, dropTargetDelegate: u, CollectionRoot: s } = z(Me), { dragAndDropHooks: c } = t, { gridProps: d } = Xb({
    ...t,
    layoutDelegate: a,
    isVirtualized: o
  }, r, e), v = r.selectionManager, p = !!(c != null && c.useDraggableCollectionState), h = !!(c != null && c.useDroppableCollectionState), m = L(p), g = L(h);
  Z(() => {
    process.env.NODE_ENV !== "production" && (m.current !== p && console.warn("Drag hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior."), g.current !== h && console.warn("Drop hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior."));
  }, [
    p,
    h
  ]);
  let b, E, D, k = !1, P = null, T = L(null);
  if (p && c) {
    b = c.useDraggableCollectionState({
      collection: i,
      selectionManager: v,
      preview: c.renderDragPreview ? T : void 0
    }), c.useDraggableCollection({}, b, e);
    let x = c.DragPreview;
    P = c.renderDragPreview ? /* @__PURE__ */ $.createElement(x, {
      ref: T
    }, c.renderDragPreview) : null;
  }
  if (h && c) {
    E = c.useDroppableCollectionState({
      collection: i,
      selectionManager: v
    });
    let x = new In({
      collection: i,
      disabledKeys: v.disabledKeys,
      disabledBehavior: v.disabledBehavior,
      ref: e,
      layoutDelegate: a
    }), S = c.dropTargetDelegate || u || new c.ListDropTargetDelegate(i.rows, e);
    D = c.useDroppableCollection({
      keyboardDelegate: x,
      dropTargetDelegate: S
    }, E, e), k = E.isDropTarget({
      type: "root"
    });
  }
  let { focusProps: M, isFocused: F, isFocusVisible: H } = Fe(), K = ne({
    className: t.className,
    style: t.style,
    defaultClassName: "react-aria-Table",
    values: {
      isDropTarget: k,
      isFocused: F,
      isFocusVisible: H,
      state: r
    }
  }), y = !!(p && !(b != null && b.isDisabled)), R = K.style, A = null;
  l && (A = l.useTableColumnResizeState({
    tableWidth: l.tableWidth
  }, r), o || (R = {
    ...R,
    tableLayout: "fixed",
    width: "fit-content"
  }));
  let B = qe("table");
  var j;
  return /* @__PURE__ */ $.createElement(xe, {
    values: [
      [
        Tt,
        r
      ],
      [
        wp,
        A
      ],
      [
        kt,
        {
          dragAndDropHooks: c,
          dragState: b,
          dropState: E
        }
      ],
      [
        zr,
        {
          render: o3
        }
      ]
    ]
  }, /* @__PURE__ */ $.createElement(rl, null, /* @__PURE__ */ $.createElement(B, {
    ...ee(t),
    ...K,
    ...V(d, M, D == null ? void 0 : D.collectionProps),
    style: R,
    ref: e,
    slot: t.slot || void 0,
    onScroll: t.onScroll,
    "data-allows-dragging": y || void 0,
    "data-drop-target": k || void 0,
    "data-focused": F || void 0,
    "data-focus-visible": H || void 0
  }, /* @__PURE__ */ $.createElement(s, {
    collection: i,
    scrollRef: (j = l == null ? void 0 : l.scrollRef) !== null && j !== void 0 ? j : e,
    persistedKeys: pp(v, c, E)
  }))), P);
}
function qe(t) {
  let { isVirtualized: e } = z(Me);
  return e ? "div" : t;
}
const kp = /* @__PURE__ */ _(null);
function Tp() {
  return z(kp);
}
const Qm = /* @__PURE__ */ xr("tableheader", (t, e) => {
  let n = z(Tt).collection, i = hr({
    items: n.headerRows,
    children: X((s) => {
      switch (s.type) {
        case "headerrow":
          return /* @__PURE__ */ $.createElement(e3, {
            item: s
          });
        default:
          throw new Error("Unsupported node type in TableHeader: " + s.type);
      }
    }, [])
  }), l = qe("thead"), { rowGroupProps: r } = Ld(), { hoverProps: o, isHovered: a } = He({
    onHoverStart: t.onHoverStart,
    onHoverChange: t.onHoverChange,
    onHoverEnd: t.onHoverEnd
  }), u = ne({
    className: t.className,
    style: t.style,
    defaultClassName: "react-aria-TableHeader",
    values: {
      isHovered: a
    }
  });
  return /* @__PURE__ */ $.createElement(l, {
    ...V(ee(t), r, o),
    ...u,
    ref: e,
    "data-hovered": a || void 0
  }, i);
}, (t) => /* @__PURE__ */ $.createElement(Ot, {
  dependencies: t.dependencies,
  items: t.columns
}, t.children));
function e3({ item: t }) {
  let e = L(null), n = z(Tt), { isVirtualized: i, CollectionBranch: l } = z(Me), { rowProps: r } = t4({
    node: t,
    isVirtualized: i
  }, n, e), { checkboxProps: o } = r4(n), a = qe("tr");
  return /* @__PURE__ */ $.createElement(a, {
    ...r,
    ref: e
  }, /* @__PURE__ */ $.createElement(xe, {
    values: [
      [
        ar,
        {
          slots: {
            selection: o
          }
        }
      ]
    ]
  }, /* @__PURE__ */ $.createElement(l, {
    collection: n.collection,
    parent: t
  })));
}
const t3 = /* @__PURE__ */ zt("column", (t, e, n) => {
  var i, l;
  let r = Re(e), o = z(Tt), { isVirtualized: a } = z(Me), { columnHeaderProps: u } = Qb({
    node: n,
    isVirtualized: a
  }, o, r), { isFocused: s, isFocusVisible: c, focusProps: d } = Fe(), v = z(wp), p = !1;
  if (v) p = v.resizingColumn === n.key;
  else if (process.env.NODE_ENV !== "production")
    for (let D in [
      "width",
      "defaultWidth",
      "minWidth",
      "maxWidth"
    ]) D in n.props && console.warn(`The ${D} prop on a <Column> only applies when a <Table> is wrapped in a <ResizableTableContainer>. If you aren't using column resizing, you can set the width of a column with CSS.`);
  let { hoverProps: h, isHovered: m } = He({
    isDisabled: !t.allowsSorting
  }), g = ne({
    ...t,
    id: void 0,
    children: n.rendered,
    defaultClassName: "react-aria-Column",
    values: {
      isHovered: m,
      isFocused: s,
      isFocusVisible: c,
      allowsSorting: n.props.allowsSorting,
      sortDirection: ((i = o.sortDescriptor) === null || i === void 0 ? void 0 : i.column) === n.key ? o.sortDescriptor.direction : void 0,
      isResizing: p,
      startResize: () => {
        if (v)
          v.startResize(n.key), o.setKeyboardNavigationDisabled(!0);
        else throw new Error("Wrap your <Table> in a <ResizableTableContainer> to enable column resizing");
      },
      sort: (D) => {
        o.sort(n.key, D);
      }
    }
  }), b = g.style;
  v && (b = {
    ...b,
    width: v.getColumnWidth(n.key)
  });
  let E = qe("th");
  return /* @__PURE__ */ $.createElement(E, {
    ...V(ee(t), u, d, h),
    ...g,
    style: b,
    ref: r,
    "data-hovered": m || void 0,
    "data-focused": s || void 0,
    "data-focus-visible": c || void 0,
    "data-resizing": p || void 0,
    "data-allows-sorting": n.props.allowsSorting || void 0,
    "data-sort-direction": ((l = o.sortDescriptor) === null || l === void 0 ? void 0 : l.column) === n.key ? o.sortDescriptor.direction : void 0
  }, /* @__PURE__ */ $.createElement(xe, {
    values: [
      [
        n3,
        {
          column: n,
          triggerRef: r
        }
      ],
      [
        Me,
        bi
      ]
    ]
  }, g.children));
}), n3 = /* @__PURE__ */ _(null), i3 = /* @__PURE__ */ xr("tablebody", (t, e) => {
  let n = z(Tt), { isVirtualized: i } = z(Me), l = n.collection, { CollectionBranch: r } = z(Me), { dragAndDropHooks: o, dropState: a } = z(kt), u = !!(o != null && o.useDroppableCollectionState) && !(a != null && a.isDisabled);
  var s;
  let c = u && !!a && ((s = a.isDropTarget({
    type: "root"
  })) !== null && s !== void 0 ? s : !1), d = l.size === 0 || l.rows.length === 1 && l.rows[0].type === "loader", v = {
    isDropTarget: c,
    isEmpty: d
  }, p = ne({
    ...t,
    id: void 0,
    children: void 0,
    defaultClassName: "react-aria-TableBody",
    values: v
  }), h, m = qe("tr"), g = qe("td"), b = l.columnCount;
  if (d && t.renderEmptyState && n) {
    let k = {}, P = {}, T = {};
    i ? (k["aria-rowindex"] = l.headerRows.length + 1, P["aria-colspan"] = b, T = {
      display: "contents"
    }) : P.colSpan = b, h = /* @__PURE__ */ $.createElement(m, {
      role: "row",
      ...k,
      style: T
    }, /* @__PURE__ */ $.createElement(g, {
      role: "rowheader",
      ...P,
      style: T
    }, t.renderEmptyState(v)));
  }
  let { rowGroupProps: E } = Ld(), D = qe("tbody");
  return /* @__PURE__ */ $.createElement(D, {
    ...V(ee(t), E),
    ...p,
    ref: e,
    "data-empty": d || void 0
  }, u && /* @__PURE__ */ $.createElement(s3, null), /* @__PURE__ */ $.createElement(r, {
    collection: l,
    parent: l.body,
    renderDropIndicator: Or(o, a)
  }), h);
}), l3 = /* @__PURE__ */ xr("item", (t, e, n) => {
  let i = Re(e), l = z(Tt), { dragAndDropHooks: r, dragState: o, dropState: a } = z(kt), { isVirtualized: u, CollectionBranch: s } = z(Me), { rowProps: c, ...d } = e4({
    node: n,
    shouldSelectOnPressUp: !!o,
    isVirtualized: u
  }, l, i), { isFocused: v, isFocusVisible: p, focusProps: h } = Fe(), { isFocusVisible: m, focusProps: g } = Fe({
    within: !0
  }), { hoverProps: b, isHovered: E } = He({
    isDisabled: !d.allowsSelection && !d.hasAction,
    onHoverStart: t.onHoverStart,
    onHoverChange: t.onHoverChange,
    onHoverEnd: t.onHoverEnd
  }), { checkboxProps: D } = l4({
    key: n.key
  }, l), k;
  o && r && (k = r.useDraggableItem({
    key: n.key,
    hasDragButton: !0
  }, o));
  let P, T = L(null), { visuallyHiddenProps: M } = fi();
  a && r && (P = r.useDropIndicator({
    target: {
      type: "item",
      key: n.key,
      dropPosition: "on"
    }
  }, a, T));
  let F = L(null);
  Z(() => {
    o && !F.current && process.env.NODE_ENV !== "production" && console.warn('Draggable items in a Table must contain a <Button slot="drag"> element so that keyboard and screen reader users can drag them.');
  }, []);
  let H = o && o.isDragging(n.key), { children: K, ...y } = t, R = ne({
    ...y,
    id: void 0,
    defaultClassName: "react-aria-Row",
    values: {
      ...d,
      isHovered: E,
      isFocused: v,
      isFocusVisible: p,
      selectionMode: l.selectionManager.selectionMode,
      selectionBehavior: l.selectionManager.selectionBehavior,
      isDragging: H,
      isDropTarget: P == null ? void 0 : P.isDropTarget,
      isFocusVisibleWithin: m,
      id: n.key
    }
  }), A = qe("tr"), B = qe("td");
  return /* @__PURE__ */ $.createElement($.Fragment, null, P && !P.isHidden && /* @__PURE__ */ $.createElement(A, {
    role: "row",
    style: {
      height: 0
    }
  }, /* @__PURE__ */ $.createElement(B, {
    role: "gridcell",
    colSpan: l.collection.columnCount,
    style: {
      padding: 0
    }
  }, /* @__PURE__ */ $.createElement("div", {
    role: "button",
    ...M,
    ...P.dropIndicatorProps,
    ref: T
  }))), /* @__PURE__ */ $.createElement(A, {
    ...V(ee(t), c, h, b, k == null ? void 0 : k.dragProps, g),
    ...R,
    ref: i,
    "data-disabled": d.isDisabled || void 0,
    "data-selected": d.isSelected || void 0,
    "data-hovered": E || void 0,
    "data-focused": d.isFocused || void 0,
    "data-focus-visible": p || void 0,
    "data-pressed": d.isPressed || void 0,
    "data-dragging": H || void 0,
    "data-drop-target": (P == null ? void 0 : P.isDropTarget) || void 0,
    "data-selection-mode": l.selectionManager.selectionMode === "none" ? void 0 : l.selectionManager.selectionMode,
    "data-focus-visible-within": m || void 0
  }, /* @__PURE__ */ $.createElement(xe, {
    values: [
      [
        ar,
        {
          slots: {
            [Yt]: {},
            selection: D
          }
        }
      ],
      [
        wt,
        {
          slots: {
            [Yt]: {},
            drag: {
              ...k == null ? void 0 : k.dragButtonProps,
              ref: F,
              style: {
                pointerEvents: "none"
              }
            }
          }
        }
      ]
    ]
  }, /* @__PURE__ */ $.createElement(s, {
    collection: l.collection,
    parent: n
  }))));
}, (t) => {
  if (t.id == null && typeof t.children == "function") throw new Error("No id detected for the Row element. The Row element requires a id to be provided to it when the cells are rendered dynamically.");
  let e = [
    t.value
  ].concat(t.dependencies);
  return /* @__PURE__ */ $.createElement(Ot, {
    dependencies: e,
    items: t.columns,
    idScope: t.id
  }, t.children);
}), r3 = /* @__PURE__ */ zt("cell", (t, e, n) => {
  let i = Re(e), l = z(Tt), { dragState: r } = z(kt), { isVirtualized: o } = z(Me);
  n.column = l.collection.columns[n.index];
  let { gridCellProps: a, isPressed: u } = n4({
    node: n,
    shouldSelectOnPressUp: !!r,
    isVirtualized: o
  }, l, i), { isFocused: s, isFocusVisible: c, focusProps: d } = Fe(), { hoverProps: v, isHovered: p } = He({}), h = ne({
    ...t,
    id: void 0,
    defaultClassName: "react-aria-Cell",
    values: {
      isFocused: s,
      isFocusVisible: c,
      isPressed: u,
      isHovered: p,
      id: n.key
    }
  }), m = qe("td");
  return /* @__PURE__ */ $.createElement(m, {
    ...V(ee(t), a, d, v),
    ...h,
    ref: i,
    "data-focused": s || void 0,
    "data-focus-visible": c || void 0,
    "data-pressed": u || void 0
  }, /* @__PURE__ */ $.createElement(Me.Provider, {
    value: bi
  }, h.children));
});
function o3(t, e) {
  e = Re(e);
  let { dragAndDropHooks: n, dropState: i } = z(kt), l = L(null), { dropIndicatorProps: r, isHidden: o, isDropTarget: a } = n.useDropIndicator(t, i, l);
  return o ? null : /* @__PURE__ */ $.createElement(u3, {
    ...t,
    dropIndicatorProps: r,
    isDropTarget: a,
    buttonRef: l,
    ref: e
  });
}
function a3(t, e) {
  let { dropIndicatorProps: n, isDropTarget: i, buttonRef: l, ...r } = t, o = z(Tt), { visuallyHiddenProps: a } = fi(), u = ne({
    ...r,
    defaultClassName: "react-aria-DropIndicator",
    values: {
      isDropTarget: i
    }
  }), s = qe("tr"), c = qe("td");
  return /* @__PURE__ */ $.createElement(s, {
    ...ee(t),
    ...u,
    role: "row",
    ref: e,
    "data-drop-target": i || void 0
  }, /* @__PURE__ */ $.createElement(c, {
    role: "gridcell",
    colSpan: o.collection.columnCount,
    style: {
      padding: 0
    }
  }, /* @__PURE__ */ $.createElement("div", {
    ...a,
    role: "button",
    ...n,
    ref: l
  }), u.children));
}
const u3 = /* @__PURE__ */ re(a3);
function s3() {
  let t = z(Tt), { dragAndDropHooks: e, dropState: n } = z(kt), i = L(null), { dropIndicatorProps: l } = e.useDropIndicator({
    target: {
      type: "root"
    }
  }, n, i), r = n.isDropTarget({
    type: "root"
  }), { visuallyHiddenProps: o } = fi(), a = qe("tr"), u = qe("td");
  return !r && l["aria-hidden"] ? null : /* @__PURE__ */ $.createElement(a, {
    role: "row",
    "aria-hidden": l["aria-hidden"],
    style: {
      height: 0
    }
  }, /* @__PURE__ */ $.createElement(u, {
    role: "gridcell",
    colSpan: t.collection.columnCount,
    style: {
      padding: 0
    }
  }, /* @__PURE__ */ $.createElement("div", {
    role: "button",
    ...o,
    ...l,
    ref: i
  })));
}
zt("loader", function(e, n, i) {
  let l = z(Tt), { isVirtualized: r } = z(Me), { isLoading: o, onLoadMore: a, scrollOffset: u, ...s } = e, c = l.collection.columns.length, d = L(null), v = U(() => ({
    onLoadMore: a,
    collection: l == null ? void 0 : l.collection,
    sentinelRef: d,
    scrollOffset: u
  }), [
    a,
    u,
    l == null ? void 0 : l.collection
  ]);
  Ta(v, d);
  let p = ne({
    ...s,
    id: void 0,
    children: i.rendered,
    defaultClassName: "react-aria-TableLoadingIndicator",
    values: null
  }), h = qe("tr"), m = qe("td"), g = {}, b = {}, E = {};
  return r ? (g["aria-rowindex"] = i.index + 1 + l.collection.headerRows.length, b["aria-colspan"] = c, E = {
    display: "contents"
  }) : b.colSpan = c, /* @__PURE__ */ $.createElement($.Fragment, null, /* @__PURE__ */ $.createElement(h, {
    style: {
      height: 0
    },
    inert: Li(!0)
  }, /* @__PURE__ */ $.createElement(m, {
    style: {
      padding: 0,
      border: 0
    }
  }, /* @__PURE__ */ $.createElement("div", {
    "data-testid": "loadMoreSentinel",
    ref: d,
    style: {
      position: "relative",
      height: 1,
      width: 1
    }
  }))), o && p.children && /* @__PURE__ */ $.createElement(h, {
    ...V(ee(e), g),
    ...p,
    role: "row",
    ref: n
  }, /* @__PURE__ */ $.createElement(m, {
    role: "rowheader",
    ...b,
    style: E
  }, p.children)));
});
const vl = /* @__PURE__ */ _(null), Fn = /* @__PURE__ */ _(null), c3 = /* @__PURE__ */ re(function(e, n) {
  [e, n] = fe(e, n, vl);
  let { children: i, orientation: l = "horizontal" } = e;
  return i = U(() => typeof i == "function" ? i({
    orientation: l,
    defaultChildren: null
  }) : i, [
    i,
    l
  ]), /* @__PURE__ */ $.createElement(dn, {
    content: i
  }, (r) => /* @__PURE__ */ $.createElement(d3, {
    props: e,
    collection: r,
    tabsRef: n
  }));
});
function d3({ props: t, tabsRef: e, collection: n }) {
  let { orientation: i = "horizontal" } = t, l = R4({
    ...t,
    collection: n,
    children: void 0
  }), { focusProps: r, isFocused: o, isFocusVisible: a } = Fe({
    within: !0
  }), u = U(() => ({
    orientation: i,
    isFocusWithin: o,
    isFocusVisible: a
  }), [
    i,
    o,
    a
  ]), s = ne({
    ...t,
    defaultClassName: "react-aria-Tabs",
    values: u
  });
  return /* @__PURE__ */ $.createElement("div", {
    ...ee(t),
    ...r,
    ...s,
    ref: e,
    slot: t.slot || void 0,
    "data-focused": o || void 0,
    "data-orientation": i,
    "data-focus-visible": a || void 0,
    "data-disabled": l.isDisabled || void 0
  }, /* @__PURE__ */ $.createElement(xe, {
    values: [
      [
        vl,
        t
      ],
      [
        Fn,
        l
      ]
    ]
  }, s.children));
}
const f3 = /* @__PURE__ */ re(function(e, n) {
  return z(Fn) ? /* @__PURE__ */ $.createElement(p3, {
    props: e,
    forwardedRef: n
  }) : /* @__PURE__ */ $.createElement(Ot, e);
});
function p3({ props: t, forwardedRef: e }) {
  let n = z(Fn), { CollectionRoot: i } = z(Me), { orientation: l = "horizontal", keyboardActivation: r = "automatic" } = mt(vl), o = Re(e), { tabListProps: a } = s4({
    ...t,
    orientation: l,
    keyboardActivation: r
  }, n, o), u = ne({
    ...t,
    children: null,
    defaultClassName: "react-aria-TabList",
    values: {
      orientation: l,
      state: n
    }
  }), s = ee(t);
  return delete s.id, /* @__PURE__ */ $.createElement("div", {
    ...s,
    ...a,
    ref: o,
    ...u,
    "data-orientation": l || void 0
  }, /* @__PURE__ */ $.createElement(i, {
    collection: n.collection,
    persistedKeys: Lr(n.selectionManager.focusedKey)
  }));
}
const v3 = /* @__PURE__ */ zt("item", (t, e, n) => {
  let i = z(Fn), l = Re(e), { tabProps: r, isSelected: o, isDisabled: a, isPressed: u } = o4({
    key: n.key,
    ...t
  }, i, l), { focusProps: s, isFocused: c, isFocusVisible: d } = Fe(), { hoverProps: v, isHovered: p } = He({
    isDisabled: a,
    onHoverStart: t.onHoverStart,
    onHoverEnd: t.onHoverEnd,
    onHoverChange: t.onHoverChange
  }), h = ne({
    ...t,
    id: void 0,
    children: n.rendered,
    defaultClassName: "react-aria-Tab",
    values: {
      isSelected: o,
      isDisabled: a,
      isFocused: c,
      isFocusVisible: d,
      isPressed: u,
      isHovered: p
    }
  }), m = n.props.href ? "a" : "div";
  return /* @__PURE__ */ $.createElement(m, {
    ...V(r, s, v, h),
    ref: l,
    "data-selected": o || void 0,
    "data-disabled": a || void 0,
    "data-focused": c || void 0,
    "data-focus-visible": d || void 0,
    "data-pressed": u || void 0,
    "data-hovered": p || void 0
  }, h.children);
}), h3 = /* @__PURE__ */ ci(function(e, n) {
  const i = z(Fn);
  let l = Re(n), { tabPanelProps: r } = a4(e, i, l), { focusProps: o, isFocused: a, isFocusVisible: u } = Fe(), s = i.selectedKey === e.id, c = ne({
    ...e,
    defaultClassName: "react-aria-TabPanel",
    values: {
      isFocused: a,
      isFocusVisible: u,
      // @ts-ignore - compatibility with React < 19
      isInert: Li(!s),
      state: i
    }
  });
  if (!s && !e.shouldForceMount) return null;
  let d = ee(e);
  delete d.id;
  let v = s ? V(d, r, o, c) : c;
  return /* @__PURE__ */ $.createElement("div", {
    ...v,
    ref: l,
    "data-focused": a || void 0,
    "data-focus-visible": u || void 0,
    // @ts-ignore
    inert: Li(!s),
    "data-inert": s ? void 0 : "true"
  }, /* @__PURE__ */ $.createElement(xe, {
    values: [
      [
        vl,
        null
      ],
      [
        Fn,
        null
      ]
    ]
  }, /* @__PURE__ */ $.createElement(Me.Provider, {
    value: bi
  }, c.children)));
}), b3 = /* @__PURE__ */ _(null), Bp = /* @__PURE__ */ _(null), m3 = /* @__PURE__ */ re(function(e, n) {
  return [e, n] = fe(e, n, b3), /* @__PURE__ */ $.createElement(dn, {
    content: e.children
  }, (i) => /* @__PURE__ */ $.createElement(g3, {
    props: e,
    forwardedRef: n,
    collection: i
  }));
});
function g3({ props: t, forwardedRef: e, collection: n }) {
  let i = L(null), [l, r] = St(!t["aria-label"] && !t["aria-labelledby"]), o = Ir({
    ...t,
    children: void 0,
    collection: n
  }), a = ee(t), u = Object.fromEntries(Object.entries(a).map(([h]) => [
    h,
    void 0
  ])), { gridProps: s, labelProps: c, descriptionProps: d, errorMessageProps: v } = c4({
    ...t,
    ...u,
    label: r
  }, o, i);
  var p;
  return /* @__PURE__ */ $.createElement("div", {
    ...a,
    ref: e,
    slot: t.slot || void 0,
    className: (p = t.className) !== null && p !== void 0 ? p : "react-aria-TagGroup",
    style: t.style
  }, /* @__PURE__ */ $.createElement(xe, {
    values: [
      [
        $t,
        {
          ...c,
          elementType: "span",
          ref: l
        }
      ],
      [
        Bp,
        {
          ...s,
          ref: i
        }
      ],
      [
        yt,
        o
      ],
      [
        ft,
        {
          slots: {
            description: d,
            errorMessage: v
          }
        }
      ]
    ]
  }, t.children));
}
const $3 = /* @__PURE__ */ re(function(e, n) {
  return z(yt) ? /* @__PURE__ */ $.createElement(y3, {
    props: e,
    forwardedRef: n
  }) : /* @__PURE__ */ $.createElement(Ot, e);
});
function y3({ props: t, forwardedRef: e }) {
  let n = z(yt), { CollectionRoot: i } = z(Me), [l, r] = fe(t, e, Bp);
  delete l.items, delete l.renderEmptyState;
  let { focusProps: o, isFocused: a, isFocusVisible: u } = Fe(), s = {
    isEmpty: n.collection.size === 0,
    isFocused: a,
    isFocusVisible: u,
    state: n
  }, c = ne({
    className: t.className,
    style: t.style,
    defaultClassName: "react-aria-TagList",
    values: s
  }), d = Lr(n.selectionManager.focusedKey);
  return /* @__PURE__ */ $.createElement("div", {
    ...V(l, o),
    ...c,
    ref: r,
    "data-empty": n.collection.size === 0 || void 0,
    "data-focused": a || void 0,
    "data-focus-visible": u || void 0
  }, n.collection.size === 0 && t.renderEmptyState ? t.renderEmptyState(s) : /* @__PURE__ */ $.createElement(i, {
    collection: n.collection,
    persistedKeys: d
  }));
}
const x3 = /* @__PURE__ */ zt("item", (t, e, n) => {
  let i = z(yt), l = Re(e), { focusProps: r, isFocusVisible: o } = Fe({
    within: !1
  }), { rowProps: a, gridCellProps: u, removeButtonProps: s, ...c } = f4({
    item: n
  }, i, l), { hoverProps: d, isHovered: v } = He({
    isDisabled: !c.allowsSelection,
    onHoverStart: n.props.onHoverStart,
    onHoverChange: n.props.onHoverChange,
    onHoverEnd: n.props.onHoverEnd
  }), p = ne({
    ...t,
    id: void 0,
    children: n.rendered,
    defaultClassName: "react-aria-Tag",
    values: {
      ...c,
      isFocusVisible: o,
      isHovered: v,
      selectionMode: i.selectionManager.selectionMode,
      selectionBehavior: i.selectionManager.selectionBehavior
    }
  });
  return Z(() => {
    !n.textValue && process.env.NODE_ENV !== "production" && console.warn("A `textValue` prop is required for <Tag> elements with non-plain text children for accessibility.");
  }, [
    n.textValue
  ]), /* @__PURE__ */ $.createElement("div", {
    ref: l,
    ...p,
    ...V(ee(t), a, r, d),
    "data-selected": c.isSelected || void 0,
    "data-disabled": c.isDisabled || void 0,
    "data-hovered": v || void 0,
    "data-focused": c.isFocused || void 0,
    "data-focus-visible": o || void 0,
    "data-pressed": c.isPressed || void 0,
    "data-allows-removing": c.allowsRemoving || void 0,
    "data-selection-mode": i.selectionManager.selectionMode === "none" ? void 0 : i.selectionManager.selectionMode
  }, /* @__PURE__ */ $.createElement("div", {
    ...u,
    style: {
      display: "contents"
    }
  }, /* @__PURE__ */ $.createElement(xe, {
    values: [
      [
        wt,
        {
          slots: {
            remove: s
          }
        }
      ],
      [
        Me,
        bi
      ]
    ]
  }, p.children)));
});
function J3({ className: t, ...e }) {
  const n = I(t, "accordion");
  return /* @__PURE__ */ f.jsx(wm, { className: n, ...e });
}
function Q3({
  className: t,
  title: e,
  isExpanded: n,
  isDisabled: i,
  children: l,
  ...r
}) {
  const o = I(t, "accordion-item");
  return /* @__PURE__ */ f.jsxs(Bm, { className: o, ...r, children: [
    /* @__PURE__ */ f.jsx(Fm, { className: "accordion-item-title", children: /* @__PURE__ */ f.jsxs(pn, { slot: "trigger", children: [
      e,
      /* @__PURE__ */ f.jsx(
        "span",
        {
          role: "img",
          "aria-hidden": "true",
          "aria-label": "accordion item indicator",
          className: "accordion-item-indicator",
          children: /* @__PURE__ */ f.jsx(ai, { size: "20" })
        }
      )
    ] }) }),
    /* @__PURE__ */ f.jsx(Am, { className: "accordion-item-content", children: /* @__PURE__ */ f.jsx(f.Fragment, { children: l }) })
  ] });
}
function E3(t) {
  return "href" in t;
}
const hn = re(function(e, n) {
  const { style: i, ...l } = e;
  return E3(e) ? /* @__PURE__ */ f.jsx(
    jr,
    {
      ...l,
      className: e.className,
      ref: n,
      children: e.children
    }
  ) : /* @__PURE__ */ f.jsx(
    pn,
    {
      ...l,
      className: e.className,
      ref: n,
      children: e.children
    }
  );
});
function Ap({
  initials: t,
  src: e,
  alt: n
}) {
  return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    t && /* @__PURE__ */ f.jsxs("svg", { viewBox: "0 0 100 100", "aria-hidden": n ? void 0 : "true", children: [
      n && /* @__PURE__ */ f.jsx("title", { children: n }),
      /* @__PURE__ */ f.jsx(
        "text",
        {
          x: "50%",
          y: "50%",
          alignmentBaseline: "middle",
          dominantBaseline: "middle",
          textAnchor: "middle",
          dy: ".125em",
          children: t
        }
      )
    ] }),
    e && /* @__PURE__ */ f.jsx("img", { src: e, alt: n })
  ] });
}
function Xn({
  className: t,
  src: e = null,
  square: n = !1,
  initials: i,
  alt: l = "",
  size: r = "medium",
  ...o
}) {
  const a = I(
    t,
    "avatar",
    `avatar-size-${r}`,
    `avatar-shape-${n ? "square" : "circle"}`,
    e ? "avatar-image" : "avatar-initials"
  );
  return /* @__PURE__ */ f.jsx("span", { className: a, ...o, children: Ap({ initials: i, src: e, alt: l }) });
}
const eg = $.forwardRef(function({
  className: e,
  src: n = null,
  square: i = !1,
  initials: l,
  alt: r = "",
  size: o = "medium",
  ...a
}, u) {
  const s = I(
    e,
    "avatar",
    "avatar-button",
    `avatar-size-${o}`,
    `avatar-shape-${i ? "square" : "circle"}`,
    n ? "avatar-image" : "avatar-initials"
  );
  return /* @__PURE__ */ f.jsx(hn, { ...a, className: s, ref: u, children: Ap({ initials: l, src: n, alt: r }) });
}), _r = ({
  className: t,
  children: e,
  title: n,
  description: i,
  ...l
}) => {
  const r = I(t, "avatar-block");
  return /* @__PURE__ */ f.jsxs("div", { className: r, ...l, children: [
    e,
    /* @__PURE__ */ f.jsx(wn, { slot: "label", children: n }),
    i && /* @__PURE__ */ f.jsx(hl, { slot: "description", children: i })
  ] });
}, tg = ({
  className: t,
  children: e,
  max: n = 3,
  spacing: i = "200",
  ...l
}) => {
  const r = I(
    t,
    "avatar-group",
    `avatar-group-spacing-${i}`
  ), o = $.Children.toArray(e), a = o.length, u = Math.max(0, a - n), s = o.splice(0, a - u);
  return /* @__PURE__ */ f.jsxs("div", { className: r, ...l, children: [
    s,
    u > 0 && /* @__PURE__ */ f.jsxs("span", { className: "avatar-group-overflow", children: [
      "+",
      u
    ] })
  ] });
}, ht = $.forwardRef(function({ className: e, size: n = "medium", variant: i = "primary", ...l }, r) {
  const o = I(
    e,
    "button",
    `button-size-${n}`,
    `button-variant-${i}`
  ), { style: a, ...u } = l;
  return Fp(l) ? /* @__PURE__ */ f.jsx(
    jr,
    {
      ...u,
      className: o,
      ref: r,
      children: l.children
    }
  ) : /* @__PURE__ */ f.jsx(
    pn,
    {
      ...u,
      className: o,
      ref: r,
      children: l.children
    }
  );
}), C3 = $.forwardRef(function({
  className: e,
  size: n = "medium",
  variant: i = "danger-primary",
  ...l
}, r) {
  const o = I(
    e,
    "button",
    `button-size-${n}`,
    `button-variant-${i}`
  ), { style: a, ...u } = l;
  return Fp(l) ? /* @__PURE__ */ f.jsx(
    jr,
    {
      ...u,
      className: o,
      ref: r,
      children: l.children
    }
  ) : /* @__PURE__ */ f.jsx(
    pn,
    {
      ...u,
      className: o,
      ref: r,
      children: l.children
    }
  );
});
function Fp(t) {
  return "href" in t;
}
const oi = ({
  align: t = "start",
  className: e,
  ...n
}) => {
  const i = I(
    e,
    "button-group",
    `button-group-align-${t}`
  );
  return /* @__PURE__ */ f.jsx("div", { className: i, ...n });
};
function ng({
  className: t,
  label: e,
  description: n,
  errorMessage: i,
  children: l,
  ...r
}) {
  const o = I(t, "checkbox-group");
  return /* @__PURE__ */ f.jsxs(q4, { ...r, className: o, children: [
    e && /* @__PURE__ */ f.jsx(pt, { children: e }),
    n && /* @__PURE__ */ f.jsx(Bt, { children: n }),
    i && /* @__PURE__ */ f.jsx(Jt, { children: i }),
    l
  ] });
}
function ig({
  children: t,
  className: e,
  label: n,
  description: i,
  errorMessage: l,
  ...r
}) {
  const o = I(e, "checkbox-field"), a = n || (typeof t == "string" ? t : void 0);
  return /* @__PURE__ */ f.jsx(Y4, { className: o, ...r, children: /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    /* @__PURE__ */ f.jsx(pt, { children: a }),
    /* @__PURE__ */ f.jsx(qr, {}),
    i && /* @__PURE__ */ f.jsx(Bt, { children: i }),
    /* @__PURE__ */ f.jsx(Jt, { children: l }),
    a !== t && t
  ] }) });
}
function qr({ className: t, ...e }) {
  const n = I(t, "checkbox");
  return /* @__PURE__ */ f.jsxs("div", { className: n, ...e, children: [
    /* @__PURE__ */ f.jsx(wv, { "aria-hidden": "true", className: "icon-indeterminate", size: "16" }),
    /* @__PURE__ */ f.jsx(Ea, { "aria-hidden": "true", className: "icon-selected", size: "16" })
  ] });
}
function Yr({ className: t, type: e = "card", ...n }) {
  const i = I(t, "dialog", `dialog-type-${e}`);
  return /* @__PURE__ */ f.jsx(xm, { className: i, ...n });
}
const lg = ({ onPress: t }) => /* @__PURE__ */ f.jsx(
  ut,
  {
    className: "dialog-close",
    "aria-label": "Dismiss dialog",
    onPress: t,
    variant: "subtle",
    size: "small",
    children: /* @__PURE__ */ f.jsx(kn, {})
  }
);
function P3({ ...t }) {
  return /* @__PURE__ */ f.jsx(ym, { ...t });
}
function rg({
  label: t,
  icon: e,
  variant: n,
  children: i,
  ...l
}) {
  return /* @__PURE__ */ f.jsxs(P3, { children: [
    e ? /* @__PURE__ */ f.jsx(ut, { variant: n, "aria-label": t, children: e }) : /* @__PURE__ */ f.jsx(ht, { variant: n, children: t }),
    /* @__PURE__ */ f.jsx(Kp, { isDismissable: !0, children: /* @__PURE__ */ f.jsx(Yr, { ...l, children: i }) })
  ] });
}
function og({ className: t, ...e }) {
  const n = I(t, "dialog-title");
  return /* @__PURE__ */ f.jsx(Ht, { ...e, slot: "title", className: n });
}
function ag({
  className: t,
  ...e
}) {
  const n = I(t, "dialog-description");
  return /* @__PURE__ */ f.jsx(hl, { ...e, className: n });
}
function ug({ bleed: t, className: e, ...n }) {
  const i = I(
    e,
    "dialog-body",
    t && "dialog-body-bleed"
  );
  return /* @__PURE__ */ f.jsx("div", { ...n, className: i });
}
function Kp({
  children: t,
  className: e,
  isDismissable: n,
  ...i
}) {
  const l = I(e, "dialog-backdrop");
  return /* @__PURE__ */ f.jsx(Cp, { className: l, ...i, children: /* @__PURE__ */ f.jsx(Nm, { className: "dialog-container", children: t }) });
}
function sg({ ...t }) {
  const e = I("fieldset");
  return /* @__PURE__ */ f.jsx("fieldset", { ...t, className: e });
}
function cg({ ...t }) {
  const e = I("legend");
  return /* @__PURE__ */ f.jsx("legend", { ...t, className: e });
}
function dg({ ...t }) {
  const e = I("field-group");
  return /* @__PURE__ */ f.jsx("div", { ...t, className: e });
}
function D3({ className: t, singleLine: e, ...n }) {
  const i = I(t, "form", e && "form-single-line");
  return /* @__PURE__ */ f.jsx(O4, { className: i, ...n });
}
function fg(t) {
  const e = (l) => Array.isArray(l), n = new FormData(t), i = {};
  return n.forEach((l, r) => {
    if (!Reflect.has(i, r)) {
      i[r] = l;
      return;
    }
    const o = i[r];
    e(o) ? o.push(l) : i[r] = [o, l];
  }), i;
}
function Np({ className: t, ...e }) {
  const n = I(t, "field");
  return /* @__PURE__ */ f.jsx("div", { className: n, ...e });
}
function pt({ className: t, ...e }) {
  const n = I(t, "label");
  return /* @__PURE__ */ f.jsx(h4, { className: n, slot: "label", ...e });
}
function Bt({ className: t, ...e }) {
  const n = I(t, "description");
  return /* @__PURE__ */ f.jsx(Je, { className: n, slot: "description", ...e });
}
function Jt({ className: t, ...e }) {
  const n = I(t, "error-message");
  return /* @__PURE__ */ f.jsx($4, { ...e, className: n });
}
function S3({ className: t, children: e, ...n }) {
  const i = I(t, "keyboard"), l = typeof e == "string" ? e.split("").map((r) => /* @__PURE__ */ f.jsx("kbd", { children: r }, r)) : e;
  return /* @__PURE__ */ f.jsx(fm, { ...n, className: i, children: l });
}
function it({ size: t = "16", children: e, className: n }) {
  return /* @__PURE__ */ f.jsx(
    "svg",
    {
      className: I(n, "icon", `icon-size-${t}`),
      width: t,
      height: t,
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: e
    }
  );
}
const ut = re(function({ className: e, ...n }, i) {
  const l = I(e, "icon-button");
  return /* @__PURE__ */ f.jsx(ht, { ...n, ...i, className: l });
}), w3 = re(function(e, n) {
  return /* @__PURE__ */ f.jsx(C3, { ...e, ...n, className: "icon-button" });
});
function Zr({
  aspectRatio: t = "natural",
  className: e,
  size: n = "natural",
  variant: i = "rounded",
  ...l
}) {
  const [r, o] = Y(!1), a = I(
    e,
    "image",
    `image-aspect-ratio-${t}`,
    `image-size-${n}`,
    `image-variant-${i}`,
    !r && "image-loading"
  );
  return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    !r && /* @__PURE__ */ f.jsx("span", { className: I("image-placeholder", a) }),
    l.src && /* @__PURE__ */ f.jsx("img", { className: a, ...l, onLoad: () => o(!0) })
  ] });
}
function pg({ className: t, ...e }) {
  const n = I(t, "picture");
  return /* @__PURE__ */ f.jsx("picture", { className: n, ...e });
}
function vg({ ...t }) {
  return /* @__PURE__ */ f.jsx("source", { ...t });
}
function hg({
  className: t,
  placeholder: e,
  label: n,
  description: i,
  errorMessage: l,
  ...r
}) {
  const o = I(t, "field");
  return /* @__PURE__ */ f.jsxs(Tf, { className: o, ...r, children: [
    n && /* @__PURE__ */ f.jsx(pt, { children: n }),
    /* @__PURE__ */ f.jsx(Ip, { placeholder: e }),
    i && /* @__PURE__ */ f.jsx(Bt, { children: i }),
    /* @__PURE__ */ f.jsx(Jt, { children: l })
  ] });
}
const Ip = $.forwardRef(function({ className: e, ...n }, i) {
  const l = I(e, "input");
  return /* @__PURE__ */ f.jsx(v4, { className: l, ref: i, ...n });
}), k3 = $.forwardRef(function(e, n) {
  const i = I("link", e.className);
  return /* @__PURE__ */ f.jsx("a", { ...e, ref: n, className: i });
});
function Mp({
  children: t,
  className: e,
  ...n
}) {
  const i = I(e, "list-box");
  return /* @__PURE__ */ f.jsx(J4, { className: i, ...n, children: t });
}
function Rp({ className: t, ...e }) {
  const n = I(t, "list-box-item");
  return /* @__PURE__ */ f.jsx(tm, { className: n, ...e });
}
function Lp({ className: t, size: e = "default", ...n }) {
  const i = I(t, "logo", `logo-size-${e}`);
  return /* @__PURE__ */ f.jsx(hn, { className: i, ...n, "aria-label": "Company logo", children: /* @__PURE__ */ f.jsxs(
    "svg",
    {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      role: "img",
      children: [
        /* @__PURE__ */ f.jsx("title", { children: "BIT" }),
        /* @__PURE__ */ f.jsx(
          "path",
          {
            d: "M17.6766 4.31166H19.3973V5.90248H17.6766V10.4142C17.6766 10.6905 17.7183 10.9023 17.8016 11.0499C17.8887 11.1939 18.0022 11.2928 18.1424 11.3458C18.2825 11.3988 18.4379 11.4249 18.6082 11.4249C18.7367 11.4249 18.8539 11.4155 18.9598 11.3966C19.0693 11.3777 19.153 11.361 19.2098 11.3458L19.5565 12.9533C19.4466 12.9911 19.2892 13.0328 19.0848 13.0783C18.8841 13.1237 18.638 13.1508 18.3465 13.1583C17.8315 13.1735 17.3677 13.0953 16.9549 12.9249C16.542 12.7507 16.2139 12.4819 15.9715 12.1183C15.7329 11.7547 15.6152 11.3003 15.619 10.755V5.90248H14.3807V4.31166H15.619V2.22084H17.6766V4.31166ZM4.89728 1.40248C5.73799 1.40248 6.4372 1.53492 6.99396 1.79994C7.55456 2.0613 7.9733 2.41962 8.24982 2.87416C8.53005 3.32859 8.67064 3.8435 8.67072 4.41908C8.67072 4.89257 8.5791 5.29876 8.39728 5.63588C8.21549 5.96897 7.97151 6.24016 7.66486 6.44838C7.35813 6.65662 7.01518 6.80572 6.63654 6.89662V7.01088C7.04933 7.03364 7.44532 7.15975 7.82404 7.39076C8.20653 7.61799 8.51913 7.94004 8.76154 8.35658C9.00395 8.77323 9.1248 9.27743 9.12482 9.8683C9.12482 10.4706 8.97898 11.0122 8.68732 11.4933C8.39565 11.9706 7.95607 12.3476 7.36896 12.6242C6.78189 12.9006 6.04312 13.0392 5.15314 13.0392H0.443176V1.40248H4.89728ZM12.9246 13.0392H10.868V4.31166H12.9246V13.0392ZM2.55157 11.2775H4.81818C5.58329 11.2775 6.13437 11.1316 6.4715 10.84C6.81241 10.5445 6.98322 10.1654 6.98322 9.70326C6.98316 9.35871 6.89775 9.04804 6.72736 8.77162C6.5569 8.49136 6.31418 8.27152 5.99982 8.11244C5.68547 7.94965 5.31031 7.8683 4.87482 7.8683H2.55157V11.2775ZM2.55157 6.3517H4.63654C4.99998 6.35168 5.32741 6.28495 5.61896 6.15248C5.91062 6.01612 6.13979 5.82447 6.30646 5.57826C6.47683 5.32834 6.56227 5.03328 6.56232 4.69252C6.56232 4.24176 6.40296 3.86993 6.08478 3.57826C5.77039 3.28685 5.3024 3.14076 4.68146 3.14076H2.55157V6.3517ZM11.9022 0.839981C12.2315 0.84002 12.512 0.949536 12.743 1.16908C12.9778 1.38495 13.0955 1.64859 13.0955 1.95912C13.0955 2.26594 12.9778 2.52946 12.743 2.74916C12.512 2.96503 12.2316 3.07334 11.9022 3.07338C11.5765 3.07338 11.2962 2.96495 11.0613 2.74916C10.8265 2.52946 10.7088 2.26594 10.7088 1.95912C10.7088 1.64859 10.8265 1.38495 11.0613 1.16908C11.2961 0.949612 11.5766 0.839981 11.9022 0.839981Z",
            fill: "var(--logo-color)"
          }
        )
      ]
    }
  ) });
}
function jp({ className: t, ...e }) {
  return /* @__PURE__ */ f.jsx(hm, { className: I(t, "menu"), ...e });
}
function zp({ ...t }) {
  return /* @__PURE__ */ f.jsx(pm, { ...t });
}
function bg({
  label: t,
  children: e,
  icon: n,
  placement: i,
  variant: l,
  ...r
}) {
  return /* @__PURE__ */ f.jsxs(zp, { children: [
    n ? /* @__PURE__ */ f.jsx(ut, { variant: l, "aria-label": t, children: n }) : /* @__PURE__ */ f.jsx(ht, { variant: l, children: t }),
    /* @__PURE__ */ f.jsx(Op, { placement: i, children: /* @__PURE__ */ f.jsx(jp, { ...r, children: e }) })
  ] });
}
function Op({ ...t }) {
  return /* @__PURE__ */ f.jsx(pl, { ...t });
}
function ma({ className: t, ...e }) {
  const n = I(t, "menu-item"), i = e.textValue || (typeof e.children == "string" ? e.children : void 0);
  return /* @__PURE__ */ f.jsx($m, { ...e, className: n, textValue: i, children: ({ hasSubmenu: l }) => /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    e.children,
    l && /* @__PURE__ */ f.jsx(ai, {})
  ] }) });
}
function mg({ className: t, ...e }) {
  const n = I(t, "menu-header");
  return /* @__PURE__ */ f.jsx("div", { ...e, className: n });
}
function gg({ className: t, ...e }) {
  const n = I(t, "menu-section");
  return /* @__PURE__ */ f.jsx("div", { ...e, className: n });
}
function $g({ className: t, ...e }) {
  const n = I(t, "menu-heading");
  return /* @__PURE__ */ f.jsx(Ht, { ...e, className: n });
}
function yg({ className: t, ...e }) {
  const n = I(t, "menu-separator");
  return /* @__PURE__ */ f.jsx(X4, { ...e, className: n });
}
function xg({ className: t, ...e }) {
  const n = I(t, "menu-label");
  return /* @__PURE__ */ f.jsx(pt, { ...e, className: n });
}
function Eg({ className: t, ...e }) {
  const n = I(t, "menu-description");
  return /* @__PURE__ */ f.jsx(Bt, { ...e, className: n });
}
function Cg({
  children: t,
  className: e,
  ...n
}) {
  const i = I(e, "menu-shortcut");
  return /* @__PURE__ */ f.jsx(S3, { ...n, className: i, children: t });
}
function T3({
  className: t,
  direction: e = "row",
  ...n
}) {
  const i = I(
    t,
    "navigation",
    `navigation-direction-${e}`
  );
  return /* @__PURE__ */ f.jsx("nav", { className: i, ...n });
}
function B3({
  className: t,
  isSelected: e,
  ...n
}) {
  const i = I(t, "navigation-pill");
  return /* @__PURE__ */ f.jsx(
    hn,
    {
      "data-selected": e || void 0,
      className: i,
      ...n
    }
  );
}
function Pg({
  children: t,
  className: e,
  isSelected: n,
  icon: i,
  direction: l = "column",
  size: r = "medium",
  ...o
}) {
  const a = I(
    e,
    "navigation-button",
    `navigation-button-direction-${l}`,
    `navigation-button-size-${r}`
  );
  return /* @__PURE__ */ f.jsxs(
    hn,
    {
      "data-selected": n || void 0,
      className: a,
      ...o,
      children: [
        i,
        t
      ]
    }
  );
}
function Dg({
  children: t,
  className: e,
  isDismissible: n,
  icon: i,
  variant: l = "message",
  ...r
}) {
  const o = I(
    e,
    "notification",
    `notification-variant-${l}`
  );
  return /* @__PURE__ */ f.jsxs("div", { className: o, ...r, children: [
    i && /* @__PURE__ */ f.jsx("span", { className: "notification-icon", children: i }),
    /* @__PURE__ */ f.jsx("div", { className: "notification-content", children: t }),
    n && (l === "alert" ? /* @__PURE__ */ f.jsx(
      w3,
      {
        size: "small",
        variant: "danger-subtle",
        "aria-label": "Dismiss notification",
        children: /* @__PURE__ */ f.jsx(kn, {})
      }
    ) : /* @__PURE__ */ f.jsx(
      ut,
      {
        size: "small",
        variant: "subtle",
        "aria-label": "Dismiss notification",
        children: /* @__PURE__ */ f.jsx(kn, {})
      }
    ))
  ] });
}
const yn = {
  tablet: 600,
  desktop: 1024
};
function Hn(t) {
  const [e, n] = U(() => {
    const i = globalThis.matchMedia(t);
    function l(o) {
      return i.addEventListener("change", o), () => i.removeEventListener("change", o);
    }
    return [l, () => i.matches];
  }, [t]);
  return hv(e, n);
}
const $i = () => {
  const t = Hn(
    `(max-width: ${yn.tablet - 1}px)`
  ), e = Hn(
    `(min-width: ${yn.tablet}px) and (max-width: ${yn.desktop - 1}px)`
  ), n = Hn(
    `(min-width: ${yn.desktop}px)`
  ), i = Hn(
    `(min-width: ${yn.tablet}px)`
  ), l = Hn(
    `(max-width: ${yn.desktop - 1}px)`
  );
  return U(() => ({
    isMobile: t,
    isTablet: e,
    isDesktop: n,
    isTabletUp: i,
    isTabletDown: l
  }), [t, e, n, i, l]);
};
function Sg({
  "aria-label": t = "Page navigation",
  className: e,
  ...n
}) {
  const i = I("pagination");
  return /* @__PURE__ */ f.jsx("nav", { "aria-label": t, ...n, className: i });
}
function wg({
  href: t = null,
  children: e = "Previous"
}) {
  return /* @__PURE__ */ f.jsxs(
    ht,
    {
      ...t === null ? { disabled: !0 } : { href: t },
      variant: "subtle",
      "aria-label": "Previous page",
      children: [
        /* @__PURE__ */ f.jsx(xv, {}),
        e
      ]
    }
  );
}
function kg({
  href: t = null,
  children: e = "Next"
}) {
  return /* @__PURE__ */ f.jsxs(
    ht,
    {
      ...t === null ? { disabled: !0 } : { href: t },
      variant: "subtle",
      "aria-label": "Next page",
      children: [
        e,
        /* @__PURE__ */ f.jsx(Ev, {})
      ]
    }
  );
}
function Tg({ children: t }) {
  const { isTabletUp: e } = $i();
  return e && /* @__PURE__ */ f.jsx("span", { className: "pagination-list", children: t });
}
function Bg({
  href: t,
  children: e,
  current: n = !1
}) {
  return /* @__PURE__ */ f.jsx(
    ht,
    {
      href: t,
      "aria-label": `Page ${e}`,
      "aria-current": n ? "page" : void 0,
      variant: n ? "primary" : "subtle",
      className: I(),
      children: /* @__PURE__ */ f.jsx("span", { className: "", children: e })
    }
  );
}
function Ag() {
  return /* @__PURE__ */ f.jsx("div", { "aria-hidden": "true", className: "", children: "…" });
}
function Fg({
  className: t,
  label: e,
  description: n,
  errorMessage: i,
  children: l,
  ...r
}) {
  const o = I(t, "radio-group");
  return /* @__PURE__ */ f.jsxs(jm, { ...r, className: o, children: [
    e && /* @__PURE__ */ f.jsx(pt, { children: e }),
    n && /* @__PURE__ */ f.jsx(Bt, { children: n }),
    i && /* @__PURE__ */ f.jsx(Jt, { children: i }),
    l
  ] });
}
function Kg({
  children: t,
  className: e,
  label: n,
  description: i,
  errorMessage: l,
  ...r
}) {
  const o = I(e, "radio-field"), a = n || (typeof t == "string" ? t : void 0);
  return /* @__PURE__ */ f.jsx(zm, { className: o, ...r, children: /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    /* @__PURE__ */ f.jsx(pt, { children: a }),
    /* @__PURE__ */ f.jsx(A3, {}),
    i && /* @__PURE__ */ f.jsx(Bt, { children: i }),
    /* @__PURE__ */ f.jsx(Jt, { children: l }),
    a !== t && t
  ] }) });
}
function A3({ className: t, ...e }) {
  const n = I(t, "radio");
  return /* @__PURE__ */ f.jsx("div", { className: n, ...e, children: /* @__PURE__ */ f.jsx("span", { "aria-hidden": "true", className: "radio-check" }) });
}
const Ng = $.forwardRef(function({ className: e, results: n, onSearch: i, ...l }, r) {
  const [o, a] = Y(""), u = L(null), s = (d) => {
    a(d), i && i(d);
  }, c = I(e, "search-input-container");
  return /* @__PURE__ */ f.jsxs(Pm, { className: c, children: [
    /* @__PURE__ */ f.jsx(pt, { hidden: !0, children: l["aria-label"] || "Search" }),
    /* @__PURE__ */ f.jsx(
      Ip,
      {
        type: "search",
        className: "search-input",
        value: o,
        onInput: (d) => s(d.currentTarget.value),
        ref: (d) => {
          u.current = d, typeof r == "function" ? r(d) : r && (r.current = d);
        },
        ...l
      }
    ),
    /* @__PURE__ */ f.jsx("span", { className: "search-icon", children: o ? /* @__PURE__ */ f.jsx(
      ut,
      {
        "aria-label": "Clear search",
        onPress: () => s(""),
        size: "small",
        variant: "subtle",
        children: /* @__PURE__ */ f.jsx(kn, {})
      }
    ) : /* @__PURE__ */ f.jsx(
      ut,
      {
        "aria-label": "Clear search",
        onPress: () => {
          var d;
          return (d = u == null ? void 0 : u.current) == null ? void 0 : d.focus();
        },
        size: "small",
        variant: "subtle",
        children: /* @__PURE__ */ f.jsx(kv, {})
      }
    ) }),
    /* @__PURE__ */ f.jsx(pl, { children: /* @__PURE__ */ f.jsx(Mp, { children: n == null ? void 0 : n.map((d) => /* @__PURE__ */ f.jsx(Rp, { onAction: () => s(d), children: d }, d)) }) })
  ] });
});
function Ig({
  className: t,
  label: e,
  description: n,
  errorMessage: i,
  children: l,
  items: r,
  ...o
}) {
  const a = I(t, "select-container");
  return /* @__PURE__ */ f.jsx(F3, { className: a, ...o, children: /* @__PURE__ */ f.jsxs(Np, { children: [
    e && /* @__PURE__ */ f.jsx(pt, { children: e }),
    /* @__PURE__ */ f.jsxs(pn, { className: "select", children: [
      /* @__PURE__ */ f.jsx(Wm, { className: "select-value" }),
      /* @__PURE__ */ f.jsx(ai, { "aria-hidden": "true" })
    ] }),
    /* @__PURE__ */ f.jsx(pl, { children: /* @__PURE__ */ f.jsx(Mp, { items: r, children: l }) }),
    n && /* @__PURE__ */ f.jsx(Bt, { children: n }),
    /* @__PURE__ */ f.jsx(Jt, { children: i })
  ] }) });
}
function F3({ ...t }) {
  return /* @__PURE__ */ f.jsx(Vm, { ...t });
}
function Mg({ children: t, className: e, ...n }) {
  const i = I(e, "select-item"), l = typeof t == "string" ? t : "";
  return /* @__PURE__ */ f.jsx(Rp, { textValue: l, className: i, ...n, children: /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    /* @__PURE__ */ f.jsx(Ea, { className: "select-item-check" }),
    t
  ] }) });
}
function Rg({
  name: t,
  label: e,
  description: n,
  showOutput: i,
  thumbLabels: l,
  ...r
}) {
  return /* @__PURE__ */ f.jsx(K3, { ...r, children: /* @__PURE__ */ f.jsxs(Np, { children: [
    e && /* @__PURE__ */ f.jsx(pt, { children: e }),
    i && /* @__PURE__ */ f.jsx(N3, { children: ({ state: o }) => o.values.map((a, u) => o.getThumbValueLabel(u)).join(" - ") }),
    /* @__PURE__ */ f.jsx(M3, { children: ({ state: o }) => o.values.map((a, u) => /* @__PURE__ */ f.jsx(
      I3,
      {
        name: o.values.length > 1 ? `${t}-${(l == null ? void 0 : l[u]) || u}` : t,
        index: u,
        "aria-label": l == null ? void 0 : l[u]
      },
      u
    )) }),
    n && /* @__PURE__ */ f.jsx(Bt, { children: n })
  ] }) });
}
function K3({ className: t, ...e }) {
  const n = I(t, "slider-field");
  return /* @__PURE__ */ f.jsx(om, { className: n, ...e });
}
function N3({ className: t, ...e }) {
  const n = I(t, "slider-output");
  return /* @__PURE__ */ f.jsx(am, { className: n, ...e });
}
function I3({ className: t, ...e }) {
  const n = I(t, "slider-thumb");
  return /* @__PURE__ */ f.jsx(sm, { className: n, ...e });
}
function M3({ className: t, ...e }) {
  const n = I(t, "slider");
  return /* @__PURE__ */ f.jsx(um, { className: n, ...e });
}
function Lg({ className: t, ...e }) {
  const n = I(t, "switch-group");
  return /* @__PURE__ */ f.jsx("div", { ...e, className: n });
}
function jg({
  children: t,
  className: e,
  label: n,
  description: i,
  errorMessage: l,
  ...r
}) {
  const o = I(e, "switch-field"), a = n || (typeof t == "string" ? t : void 0);
  return /* @__PURE__ */ f.jsx(_m, { className: o, ...r, children: /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    /* @__PURE__ */ f.jsx(pt, { children: a }),
    /* @__PURE__ */ f.jsx(R3, {}),
    i && /* @__PURE__ */ f.jsx(Bt, { children: i }),
    /* @__PURE__ */ f.jsx(Jt, { children: l }),
    a !== t && t
  ] }) });
}
function R3({ className: t, ...e }) {
  const n = I(t, "switch");
  return /* @__PURE__ */ f.jsx("div", { className: n, ...e, children: /* @__PURE__ */ f.jsx("span", { "aria-hidden": "true", className: "switch-icon" }) });
}
function zg({ className: t, ...e }) {
  const n = I(t, "tab");
  return /* @__PURE__ */ f.jsx(v3, { className: n, ...e });
}
function Og({
  className: t,
  ...e
}) {
  const n = I(t, "tab-list");
  return /* @__PURE__ */ f.jsx(f3, { className: n, ...e });
}
function Vg({ className: t, ...e }) {
  const n = I(t, "tab-panel");
  return /* @__PURE__ */ f.jsx(h3, { className: n, ...e });
}
function Hg({ className: t, ...e }) {
  const n = I(t, "tabs");
  return /* @__PURE__ */ f.jsx(c3, { className: n, ...e });
}
function Ug({
  bleed: t = !1,
  dense: e = !1,
  grid: n = !1,
  striped: i = !1,
  className: l,
  ...r
}) {
  const o = I(
    l,
    "table",
    t && "table-bleed",
    e && "table-dense",
    n && "table-grid",
    i && "table-striped"
  );
  return /* @__PURE__ */ f.jsx(Xm, { className: o, ...r });
}
function ga({
  align: t = "start",
  className: e,
  ...n
}) {
  const i = I(e, "table-column", `table-align-${t}`);
  return /* @__PURE__ */ f.jsx(t3, { className: i, ...n, children: ({ allowsSorting: l, sortDirection: r }) => /* @__PURE__ */ f.jsx("div", { className: I("table-column-inner"), children: /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    n.children,
    l && /* @__PURE__ */ f.jsx("span", { "aria-hidden": "true", className: "sort-indicator", children: r === "ascending" ? /* @__PURE__ */ f.jsx(Cv, {}) : /* @__PURE__ */ f.jsx(ai, {}) })
  ] }) }) });
}
function Wg({
  className: t,
  ...e
}) {
  return /* @__PURE__ */ f.jsx(i3, { ...e });
}
function Gg({
  className: t,
  columns: e,
  children: n,
  ...i
}) {
  const { selectionBehavior: l, selectionMode: r, allowsDragging: o } = Tp(), a = I(t, "table-head");
  return /* @__PURE__ */ f.jsxs(Qm, { className: a, ...i, children: [
    o && /* @__PURE__ */ f.jsx(ga, {}),
    l === "toggle" && /* @__PURE__ */ f.jsx(ga, { children: r === "multiple" && /* @__PURE__ */ f.jsx(qr, { slot: "selection" }) }),
    /* @__PURE__ */ f.jsx(Ot, { items: e, children: n })
  ] });
}
function _g({
  id: t,
  columns: e,
  children: n,
  className: i,
  ...l
}) {
  const { selectionBehavior: r, allowsDragging: o } = Tp(), a = I(i, "table-row");
  return /* @__PURE__ */ f.jsxs(l3, { id: t, ...l, className: a, children: [
    o && /* @__PURE__ */ f.jsx($a, { children: /* @__PURE__ */ f.jsx(pn, { slot: "drag", children: "≡" }) }),
    r === "toggle" && /* @__PURE__ */ f.jsx($a, { children: /* @__PURE__ */ f.jsx(qr, { slot: "selection" }) }),
    /* @__PURE__ */ f.jsx(Ot, { items: e, children: n })
  ] });
}
function $a({
  align: t = "start",
  className: e,
  ...n
}) {
  const i = I(e, "table-cell", `table-align-${t}`);
  return /* @__PURE__ */ f.jsx(r3, { className: i, ...n });
}
function qg({
  children: t,
  scheme: e = "brand",
  variant: n = "primary",
  onRemove: i,
  ...l
}) {
  const r = I(
    "tag",
    `tag-scheme-${e}`,
    `tag-variant-${n}`
  );
  return /* @__PURE__ */ f.jsxs("span", { ...l, className: r, children: [
    t,
    " ",
    i && /* @__PURE__ */ f.jsx(pn, { className: "tag-remove-button", onPress: i, children: /* @__PURE__ */ f.jsx(kn, { size: "16" }) })
  ] });
}
const Yg = $.forwardRef(function({
  className: e,
  scheme: n = "brand",
  variant: i = "primary",
  ...l
}, r) {
  const o = I(
    e,
    "tag",
    "tag-button",
    `tag-scheme-${n}`,
    `tag-variant-${i}`
  );
  return /* @__PURE__ */ f.jsx(hn, { ...l, className: o, ref: r });
});
function Zg({
  children: t,
  className: e,
  iconStart: n,
  textValue: i,
  ...l
}) {
  const r = I(e, "tag", "tag-toggle");
  return i = i || (typeof t == "string" ? t : (t || "").toString()), /* @__PURE__ */ f.jsx(x3, { className: r, textValue: i, ...l, children: /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    n,
    t
  ] }) });
}
function Xg({ className: t, ...e }) {
  const n = I(t, "tag-toggle-group");
  return /* @__PURE__ */ f.jsx(m3, { className: n, ...e });
}
function Jg({
  className: t,
  ...e
}) {
  const n = I(t, "tag-toggle-list");
  return /* @__PURE__ */ f.jsx($3, { className: n, ...e });
}
function Ce({
  className: t,
  alignPrimary: e = "start",
  alignSecondary: n = "start",
  container: i = !1,
  direction: l = "row",
  gap: r,
  type: o = "auto",
  wrap: a = !1,
  ...u
}) {
  const s = I(
    t,
    "flex",
    i && "flex-container",
    `flex-align-primary-${e}`,
    `flex-align-secondary-${n}`,
    `flex-direction-${l}`,
    `flex-type-${o}`,
    r && `flex-gap-${r}`,
    a && "flex-wrap"
  );
  return /* @__PURE__ */ f.jsx(
    "div",
    {
      style: {
        "--flex-align-primary": e,
        "--flex-align-secondary": n,
        "--flex-direction": l
      },
      className: s,
      ...u
    }
  );
}
function _t({ className: t, children: e, size: n }) {
  const i = I(
    t,
    "flex-item",
    n && `flex-item-size-${n}`
  );
  return /* @__PURE__ */ f.jsx("div", { className: i, children: e });
}
function Xr({
  children: t,
  className: e,
  elementType: n = "section",
  padding: i = "600",
  paddingBottom: l,
  paddingTop: r,
  ...o
}) {
  const { variant: a = "subtle", ...u } = o, s = I(
    e,
    "section",
    `section-variant-${o.variant}`,
    `section-padding-top-${r || i}`,
    `section-padding-bottom-${l || i}`
  ), c = o.variant === "image" ? /* @__PURE__ */ f.jsx(
    Zr,
    {
      alt: "Background image",
      role: "presentation",
      src: o.src,
      size: "fill",
      aspectRatio: "fill",
      className: "section-image"
    }
  ) : null;
  switch (n) {
    case "section":
      return /* @__PURE__ */ f.jsxs("section", { className: s, ...u, children: [
        c,
        " ",
        t
      ] });
    case "header":
      return /* @__PURE__ */ f.jsxs("header", { className: s, ...u, children: [
        c,
        " ",
        t
      ] });
    case "footer":
      return /* @__PURE__ */ f.jsxs("footer", { className: s, ...u, children: [
        c,
        " ",
        t
      ] });
  }
}
function Qg({
  className: t,
  columns: e = "none",
  rows: n = "none",
  gap: i,
  columnGap: l,
  rowGap: r,
  flow: o,
  container: a = !1,
  justifyItems: u = "stretch",
  alignItems: s = "stretch",
  style: c = {},
  ...d
}) {
  const v = I(
    t,
    "grid",
    a && "grid-container",
    `grid-justify-items-${u}`,
    `grid-align-items-${s}`,
    i && `grid-gap-${i}`,
    l && `grid-column-gap-${l}`,
    r && `grid-row-gap-${r}`,
    o && `grid-flow-${o.replace(" ", "-")}`
  ), p = {
    ...c,
    display: "grid",
    gridTemplateColumns: e,
    gridTemplateRows: n,
    gap: i ? `var(--sds-size-space-${i})` : void 0,
    columnGap: l ? `var(--sds-size-space-${l})` : void 0,
    rowGap: r ? `var(--sds-size-space-${r})` : void 0,
    justifyItems: u,
    alignItems: s
  };
  return /* @__PURE__ */ f.jsx(
    "div",
    {
      className: v,
      style: p,
      ...d
    }
  );
}
function e$({ className: t, column: e, row: n, area: i, style: l = {}, ...r }) {
  const o = I(
    t,
    "grid-item"
  ), a = { ...l };
  return e && (a.gridColumn = e), n && (a.gridRow = n), i && (a.gridArea = i), /* @__PURE__ */ f.jsx(
    "div",
    {
      className: o,
      style: a,
      ...r
    }
  );
}
function hl({
  className: t,
  elementType: e = "p",
  lineHeight: n = "body",
  lineClamp: i,
  color: l = "default",
  ...r
}) {
  const o = I(
    t,
    !!i && "text-truncate",
    "text-body-base",
    `text-line-height-${n}`,
    l !== "default" && `text-color-${l}`
  ), a = i ? { "--text-truncate-line-clamp": i } : void 0;
  return /* @__PURE__ */ f.jsx(
    Je,
    {
      style: a,
      elementType: e,
      className: o,
      ...r
    }
  );
}
function Jr({
  className: t,
  elementType: e = "small",
  lineHeight: n = "body",
  lineClamp: i,
  ...l
}) {
  const r = I(
    t,
    !!i && "text-truncate",
    "text-body-small",
    `text-line-height-${n}`
  ), o = i ? { "--text-truncate-line-clamp": i } : void 0;
  return /* @__PURE__ */ f.jsx(
    Je,
    {
      style: o,
      className: r,
      elementType: e,
      ...l
    }
  );
}
function t$({
  className: t,
  elementType: e = "small",
  lineClamp: n,
  lineHeight: i = "body",
  ...l
}) {
  const r = I(
    t,
    !!n && "text-truncate",
    "text-body-small-strong",
    `text-line-height-${i}`
  ), o = n ? { "--text-truncate-line-clamp": n } : void 0;
  return /* @__PURE__ */ f.jsx(
    Je,
    {
      style: o,
      className: r,
      elementType: e,
      ...l
    }
  );
}
function wn({
  className: t,
  elementType: e = "strong",
  lineClamp: n,
  ...i
}) {
  const l = I(
    t,
    !!n && "text-truncate",
    "text-body-strong"
  ), r = n ? { "--text-truncate-line-clamp": n } : void 0;
  return /* @__PURE__ */ f.jsx(
    Je,
    {
      style: r,
      className: l,
      elementType: e,
      ...i
    }
  );
}
function n$({
  className: t,
  elementType: e,
  ...n
}) {
  const i = I(t, "text-body-emphasis");
  return /* @__PURE__ */ f.jsx(Je, { className: i, elementType: e, ...n });
}
function $e({ className: t, ...e }) {
  const n = I(t, "text-body-link");
  return /* @__PURE__ */ f.jsx(k3, { className: n, ...e });
}
function i$({ className: t, ...e }) {
  const n = I(t, "text-body-code");
  return /* @__PURE__ */ f.jsx(Je, { className: n, ...e });
}
function l$({ className: t, ...e }) {
  const n = I(t, "text-input");
  return /* @__PURE__ */ f.jsx(Je, { className: n, ...e });
}
function L3({
  className: t,
  elementType: e = "h1",
  lineClamp: n,
  ...i
}) {
  const l = I(
    t,
    !!n && "text-truncate",
    "text-title-hero"
  ), r = n ? { "--text-truncate-line-clamp": n } : void 0;
  return /* @__PURE__ */ f.jsx(
    Je,
    {
      style: r,
      className: l,
      elementType: e,
      ...i
    }
  );
}
function Vp({
  className: t,
  elementType: e = "h2",
  lineClamp: n,
  ...i
}) {
  const l = I(
    t,
    !!n && "text-truncate",
    "text-title-page"
  ), r = n ? { "--text-truncate-line-clamp": n } : void 0;
  return /* @__PURE__ */ f.jsx(
    Je,
    {
      style: r,
      className: l,
      elementType: e,
      ...i
    }
  );
}
function j3({
  className: t,
  elementType: e = "p",
  lineClamp: n,
  ...i
}) {
  const l = I(
    t,
    !!n && "text-truncate",
    "text-subtitle"
  ), r = n ? { "--text-truncate-line-clamp": n } : void 0;
  return /* @__PURE__ */ f.jsx(
    Je,
    {
      style: r,
      className: l,
      elementType: e,
      ...i
    }
  );
}
function Ht({
  className: t,
  elementType: e = "h3",
  lineClamp: n,
  color: i = "default",
  ...l
}) {
  const r = I(
    t,
    !!n && "text-truncate",
    "text-heading",
    i !== "default" && `text-color-${i}`
  ), o = n ? { "--text-truncate-line-clamp": n } : void 0;
  return /* @__PURE__ */ f.jsx(
    Je,
    {
      style: o,
      className: r,
      elementType: e,
      ...l
    }
  );
}
function Qr({
  className: t,
  elementType: e = "p",
  lineClamp: n,
  ...i
}) {
  const l = I(
    t,
    !!n && "text-truncate",
    "text-subheading"
  ), r = n ? { "--text-truncate-line-clamp": n } : void 0;
  return /* @__PURE__ */ f.jsx(
    Je,
    {
      style: r,
      className: l,
      elementType: e,
      ...i
    }
  );
}
function Hp({
  className: t,
  currency: e,
  size: n = "large",
  price: i,
  label: l,
  ...r
}) {
  const o = I(t, "text-price", `text-price-size-${n}`), a = /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    /* @__PURE__ */ f.jsx("sup", { className: "text-price-currency", children: e }),
    i
  ] });
  return /* @__PURE__ */ f.jsxs(Je, { elementType: "p", className: o, ...r, children: [
    n === "small" ? /* @__PURE__ */ f.jsx(Ht, { elementType: "span", children: a }) : /* @__PURE__ */ f.jsx(Vp, { elementType: "span", children: a }),
    l && /* @__PURE__ */ f.jsx(Jr, { children: l })
  ] });
}
function me({ className: t, ...e }) {
  const n = I(t, "text-list-item");
  return /* @__PURE__ */ f.jsx("li", { className: n, ...e });
}
function eo({
  children: t,
  className: e,
  density: n = "default",
  title: i,
  ...l
}) {
  const r = I(
    e,
    "text-list",
    `text-list-density-${n}`
  );
  return /* @__PURE__ */ f.jsxs("ul", { className: r, ...l, children: [
    i && /* @__PURE__ */ f.jsx("li", { className: "text-list-title", children: i }),
    t
  ] });
}
function Bi({ className: t, ...e }) {
  const n = I(t, "text-link-list");
  return /* @__PURE__ */ f.jsx(eo, { className: n, ...e });
}
function r$({
  align: t = "start",
  className: e,
  heading: n,
  subheading: i,
  ...l
}) {
  const r = I(
    e,
    "text-content-heading",
    `text-align-${t}`
  );
  return /* @__PURE__ */ f.jsxs(Ce, { direction: "column", gap: "200", className: r, ...l, children: [
    /* @__PURE__ */ f.jsx(Ht, { children: n }),
    i && /* @__PURE__ */ f.jsx(Qr, { children: i })
  ] });
}
function z3({
  align: t = "start",
  className: e,
  title: n,
  subtitle: i,
  color: l = "default",
  ...r
}) {
  const o = I(
    e,
    "text-content-title",
    l !== "default" && `text-color-${l}`
  ), { isMobile: a } = $i();
  return /* @__PURE__ */ f.jsxs(Ce, { direction: "column", gap: "200", className: o, ...r, children: [
    a ? /* @__PURE__ */ f.jsx(Vp, { className: `text-align-${t}`, children: n }) : /* @__PURE__ */ f.jsx(L3, { className: `text-align-${t}`, children: n }),
    i && /* @__PURE__ */ f.jsx(j3, { className: `text-align-${t}`, children: i })
  ] });
}
function o$({
  className: t,
  placeholder: e,
  label: n,
  description: i,
  errorMessage: l,
  ...r
}) {
  const o = I(t, "field");
  return /* @__PURE__ */ f.jsxs(Tf, { className: o, ...r, children: [
    n && /* @__PURE__ */ f.jsx(pt, { children: n }),
    /* @__PURE__ */ f.jsx(O3, { placeholder: e }),
    i && /* @__PURE__ */ f.jsx(Bt, { children: i }),
    /* @__PURE__ */ f.jsx(Jt, { children: l })
  ] });
}
const O3 = re(
  function({ isResizable: e = !0, ...n }, i) {
    const l = I("text-area", e && "text-area-resizable");
    return /* @__PURE__ */ f.jsx(H4, { ref: i, className: l, ...n });
  }
);
function a$({
  children: t,
  className: e,
  offset: n = 16,
  ...i
}) {
  const l = I(e, "tooltip");
  return /* @__PURE__ */ f.jsxs(pl, { className: l, offset: n, ...i, children: [
    /* @__PURE__ */ f.jsx(V3, {}),
    /* @__PURE__ */ f.jsx(Yr, { children: t })
  ] });
}
function V3({
  className: t,
  ...e
}) {
  const n = I(t, "tooltip-overlay-arrow");
  return /* @__PURE__ */ f.jsxs(cm, { ...e, className: n, children: [
    /* @__PURE__ */ f.jsx("svg", { viewBox: "0 0 10 5", children: /* @__PURE__ */ f.jsx("path", { d: "M0 0 L5 5 L10 0" }) }),
    /* @__PURE__ */ f.jsx("svg", { viewBox: "0 0 10 5", children: /* @__PURE__ */ f.jsx("path", { d: "M0 0 L5 5 L10 0" }) })
  ] });
}
function bn({
  align: t = "start",
  children: e,
  className: n,
  direction: i = "vertical",
  interactionProps: l,
  variant: r = "default",
  asset: o,
  padding: a,
  ...u
}) {
  const { isMobile: s } = $i(), c = I(
    n,
    "card",
    `card-align-${t}`,
    `card-direction-${s ? "vertical" : i}`,
    `card-padding-${a || "0"}`,
    `card-variant-${r}`
  );
  return /* @__PURE__ */ f.jsxs("div", { className: c, ...u, children: [
    o && /* @__PURE__ */ f.jsx("div", { className: "card-asset", children: o }),
    /* @__PURE__ */ f.jsx("div", { className: "card-content", children: e }),
    l && /* @__PURE__ */ f.jsx(hn, { className: "card-interaction", ...l })
  ] });
}
function u$(t, e, n, i) {
  const l = (n == null ? void 0 : n.id) === t.id, r = parseInt(t.sku.split("-")[0]), o = n ? parseInt(n == null ? void 0 : n.sku.split("-")[0]) : null, a = o && o < r, u = o && o > r, s = o === r && (n == null ? void 0 : n.interval) === "month", c = o === r && (n == null ? void 0 : n.interval) === "year", d = l ? "Current Plan" : a ? `Upgrade to ${t.name}` : u ? `Downgrade to ${t.name}` : s ? "Go Annual" : c ? "Go Monthly" : `Select ${t.name}`;
  return {
    sku: t.sku,
    interval: t.interval,
    list: t.features,
    heading: t.name,
    priceCurrency: t.currency,
    action: d,
    actionDisabled: l,
    actionVariant: e === 1 ? "neutral" : "primary",
    variant: e === 1 ? "brand" : "stroke",
    price: t.price.toString(),
    priceLabel: t.interval === "month" ? "/ mo" : "/ yr",
    onAction: () => i ? i(t) : console.log(`Selected ${t.name}`)
  };
}
function s$({
  size: t
}) {
  return /* @__PURE__ */ f.jsxs(
    bn,
    {
      variant: "stroke",
      padding: t === "large" ? "800" : "600",
      direction: "vertical",
      children: [
        /* @__PURE__ */ f.jsxs(
          Ce,
          {
            direction: t === "large" ? "column" : "row",
            alignPrimary: t === "large" ? "center" : "space-between",
            alignSecondary: "center",
            gap: t === "large" ? "400" : void 0,
            children: [
              /* @__PURE__ */ f.jsx(Ht, { children: " " }),
              /* @__PURE__ */ f.jsx(
                Hp,
                {
                  size: t,
                  label: " ",
                  currency: " ",
                  price: " "
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ f.jsx(eo, { density: t === "large" ? "default" : "tight", children: [/* @__PURE__ */ f.jsx(f.Fragment, { children: " " }), /* @__PURE__ */ f.jsx(f.Fragment, { children: " " }), /* @__PURE__ */ f.jsx(f.Fragment, { children: " " })].map((e, n) => /* @__PURE__ */ f.jsx(me, { children: e }, n)) }),
        /* @__PURE__ */ f.jsx(Ce, { alignPrimary: "stretch", children: /* @__PURE__ */ f.jsx(oi, { align: "justify", children: /* @__PURE__ */ f.jsx(ht, { isDisabled: !0, variant: "primary", children: " " }) }) })
      ]
    }
  );
}
function c$({
  heading: t,
  action: e,
  actionVariant: n = "primary",
  actionIcon: i,
  actionDisabled: l,
  onAction: r,
  price: o,
  priceCurrency: a,
  priceLabel: u = "/ mo",
  size: s = "large",
  variant: c = "stroke",
  ...d
}) {
  return /* @__PURE__ */ f.jsxs(
    bn,
    {
      ...d,
      variant: c,
      padding: s === "large" ? "800" : "600",
      direction: "vertical",
      children: [
        /* @__PURE__ */ f.jsxs(
          Ce,
          {
            direction: s === "large" ? "column" : "row",
            alignPrimary: s === "large" ? "center" : "space-between",
            alignSecondary: "center",
            gap: s === "large" ? "400" : void 0,
            children: [
              /* @__PURE__ */ f.jsx(Ht, { children: t }),
              /* @__PURE__ */ f.jsx(
                Hp,
                {
                  size: s,
                  label: u,
                  currency: a,
                  price: o
                }
              )
            ]
          }
        ),
        d.list ? /* @__PURE__ */ f.jsx(eo, { density: s === "large" ? "default" : "tight", children: d.list.map((v) => /* @__PURE__ */ f.jsx(me, { children: v }, v)) }) : d.listSlot,
        /* @__PURE__ */ f.jsx(Ce, { alignPrimary: "stretch", children: /* @__PURE__ */ f.jsx(oi, { align: "justify", children: /* @__PURE__ */ f.jsxs(
          ht,
          {
            isDisabled: l,
            variant: n,
            onPress: r,
            children: [
              e,
              i
            ]
          }
        ) }) })
      ]
    }
  );
}
function d$(t) {
  return {
    heading: t.name,
    price: t.price.toString(),
    description: t.description,
    rating: t.rating,
    asset: /* @__PURE__ */ f.jsx(
      Zr,
      {
        src: t.imageUrl,
        alt: t.name,
        aspectRatio: "4-3",
        className: "product-info-card-asset"
      }
    )
  };
}
function f$({}) {
  return /* @__PURE__ */ f.jsx(
    bn,
    {
      padding: "600",
      direction: "vertical",
      variant: "stroke",
      asset: /* @__PURE__ */ f.jsx(
        Zr,
        {
          aspectRatio: "4-3",
          alt: "Placeholder image",
          className: "product-info-card-asset"
        }
      ),
      children: /* @__PURE__ */ f.jsxs(Ce, { direction: "column", gap: "200", children: [
        /* @__PURE__ */ f.jsx(Qr, { lineClamp: 1, children: " " }),
        /* @__PURE__ */ f.jsx(wn, { children: " " }),
        /* @__PURE__ */ f.jsx(hl, { lineClamp: 2, children: " " })
      ] })
    }
  );
}
function p$({
  asset: t,
  heading: e,
  price: n,
  description: i,
  rating: l,
  ...r
}) {
  return /* @__PURE__ */ f.jsx(
    bn,
    {
      ...r,
      padding: "600",
      direction: "vertical",
      variant: "stroke",
      asset: t,
      children: /* @__PURE__ */ f.jsxs(Ce, { direction: "column", gap: "200", children: [
        /* @__PURE__ */ f.jsx(Qr, { lineClamp: 1, children: e }),
        /* @__PURE__ */ f.jsxs(wn, { children: [
          "$",
          n,
          " (",
          l,
          " rating)"
        ] }),
        /* @__PURE__ */ f.jsx(hl, { lineClamp: 2, children: i })
      ] })
    }
  );
}
function v$({
  stars: t,
  title: e,
  body: n,
  name: i,
  date: l,
  src: r,
  ...o
}) {
  return /* @__PURE__ */ f.jsxs(bn, { ...o, padding: "600", direction: "vertical", variant: "stroke", children: [
    /* @__PURE__ */ f.jsx(Ce, { gap: "100", children: new Array(t).fill(0).map((a, u) => /* @__PURE__ */ f.jsx(Tv, {}, u)) }),
    /* @__PURE__ */ f.jsxs(Ce, { direction: "column", gap: "100", children: [
      /* @__PURE__ */ f.jsx(Ht, { children: e }),
      /* @__PURE__ */ f.jsx(Jr, { children: n })
    ] }),
    /* @__PURE__ */ f.jsx(_r, { title: i, description: l, children: /* @__PURE__ */ f.jsx(Xn, { size: "large", src: r, initials: i.charAt(0) }) })
  ] });
}
function h$({
  icon: t,
  stat: e,
  description: n,
  ...i
}) {
  return /* @__PURE__ */ f.jsxs(
    bn,
    {
      ...i,
      padding: "600",
      direction: "vertical",
      variant: "stroke",
      align: "center",
      children: [
        t,
        /* @__PURE__ */ f.jsxs(Ce, { direction: "column", alignSecondary: "center", gap: "100", children: [
          /* @__PURE__ */ f.jsx(Ht, { children: e }),
          n && /* @__PURE__ */ f.jsx(Jr, { children: n })
        ] })
      ]
    }
  );
}
function b$({
  heading: t,
  name: e,
  username: n,
  initials: i,
  src: l,
  ...r
}) {
  return /* @__PURE__ */ f.jsxs(bn, { ...r, padding: "600", direction: "vertical", variant: "stroke", children: [
    /* @__PURE__ */ f.jsx(Ht, { children: t }),
    /* @__PURE__ */ f.jsx(_r, { title: e, description: `@${n}`, children: /* @__PURE__ */ f.jsx(Xn, { size: "large", src: l, initials: i }) })
  ] });
}
function m$({ className: t, ...e }) {
  const { isTabletDown: n } = $i(), i = n ? "tight" : "default";
  return /* @__PURE__ */ f.jsx(
    Xr,
    {
      elementType: "footer",
      variant: "brand",
      paddingTop: "1600",
      paddingBottom: "4000",
      style: { marginTop: "auto" },
      ...e,
      children: /* @__PURE__ */ f.jsxs(Ce, { wrap: !0, type: "quarter", gap: "600", container: !0, children: [
        /* @__PURE__ */ f.jsx(_t, { size: "minor", children: /* @__PURE__ */ f.jsxs(Ce, { direction: "column", gap: "600", alignSecondary: "start", children: [
          /* @__PURE__ */ f.jsx(_t, { children: /* @__PURE__ */ f.jsx(Lp, { className: "footer-logo" }) }),
          /* @__PURE__ */ f.jsxs(Bi, { density: i, children: [
            /* @__PURE__ */ f.jsx(me, { children: /* @__PURE__ */ f.jsx($e, { href: "https://www.figma.com", children: "figma.com" }) }),
            /* @__PURE__ */ f.jsx(me, { children: /* @__PURE__ */ f.jsx($e, { href: "https://www.x.com/figma", children: "X" }) }),
            /* @__PURE__ */ f.jsx(me, { children: /* @__PURE__ */ f.jsx($e, { href: "https://instagram.com/figma", children: "Instagram" }) }),
            /* @__PURE__ */ f.jsx(me, { children: /* @__PURE__ */ f.jsx($e, { href: "https://www.youtube.com/@Figma", children: "YouTube" }) }),
            /* @__PURE__ */ f.jsx(me, { children: /* @__PURE__ */ f.jsx($e, { href: "https://www.linkedin.com/company/figma/", children: "LinkedIn" }) })
          ] })
        ] }) }),
        /* @__PURE__ */ f.jsxs(
          Bi,
          {
            density: i,
            title: /* @__PURE__ */ f.jsx(wn, { children: "Use cases" }),
            children: [
              /* @__PURE__ */ f.jsx(me, { children: /* @__PURE__ */ f.jsx($e, { href: "#", children: "UI design" }) }),
              /* @__PURE__ */ f.jsx(me, { children: /* @__PURE__ */ f.jsx($e, { href: "#", children: "UX design" }) }),
              /* @__PURE__ */ f.jsx(me, { children: /* @__PURE__ */ f.jsx($e, { href: "#", children: "Wireframing" }) }),
              /* @__PURE__ */ f.jsx(me, { children: /* @__PURE__ */ f.jsx($e, { href: "#", children: "Diagramming" }) }),
              /* @__PURE__ */ f.jsx(me, { children: /* @__PURE__ */ f.jsx($e, { href: "#", children: "Brainstorming" }) }),
              /* @__PURE__ */ f.jsx(me, { children: /* @__PURE__ */ f.jsx($e, { href: "#", children: "Online whiteboard" }) }),
              /* @__PURE__ */ f.jsx(me, { children: /* @__PURE__ */ f.jsx($e, { href: "#", children: "Team collaboration" }) })
            ]
          }
        ),
        /* @__PURE__ */ f.jsxs(
          Bi,
          {
            density: i,
            title: /* @__PURE__ */ f.jsx(wn, { children: "Explore" }),
            children: [
              /* @__PURE__ */ f.jsx(me, { children: /* @__PURE__ */ f.jsx($e, { href: "#", children: "Design" }) }),
              /* @__PURE__ */ f.jsx(me, { children: /* @__PURE__ */ f.jsx($e, { href: "#", children: "Prototyping" }) }),
              /* @__PURE__ */ f.jsx(me, { children: /* @__PURE__ */ f.jsx($e, { href: "#", children: "Development features" }) }),
              /* @__PURE__ */ f.jsx(me, { children: /* @__PURE__ */ f.jsx($e, { href: "#", children: "Design systems" }) }),
              /* @__PURE__ */ f.jsx(me, { children: /* @__PURE__ */ f.jsx($e, { href: "#", children: "Collaboration features" }) }),
              /* @__PURE__ */ f.jsx(me, { children: /* @__PURE__ */ f.jsx($e, { href: "#", children: "Design process" }) }),
              /* @__PURE__ */ f.jsx(me, { children: /* @__PURE__ */ f.jsx($e, { href: "#", children: "FigJam" }) })
            ]
          }
        ),
        /* @__PURE__ */ f.jsxs(
          Bi,
          {
            density: i,
            title: /* @__PURE__ */ f.jsx(wn, { children: "Resources" }),
            children: [
              /* @__PURE__ */ f.jsx(me, { children: /* @__PURE__ */ f.jsx($e, { href: "#", children: "Blog" }) }),
              /* @__PURE__ */ f.jsx(me, { children: /* @__PURE__ */ f.jsx($e, { href: "#", children: "Best practices" }) }),
              /* @__PURE__ */ f.jsx(me, { children: /* @__PURE__ */ f.jsx($e, { href: "#", children: "Colors" }) }),
              /* @__PURE__ */ f.jsx(me, { children: /* @__PURE__ */ f.jsx($e, { href: "#", children: "Color wheel" }) }),
              /* @__PURE__ */ f.jsx(me, { children: /* @__PURE__ */ f.jsx($e, { href: "#", children: "Support" }) }),
              /* @__PURE__ */ f.jsx(me, { children: /* @__PURE__ */ f.jsx($e, { href: "#", children: "Developers" }) }),
              /* @__PURE__ */ f.jsx(me, { children: /* @__PURE__ */ f.jsx($e, { href: "#", children: "Resource library" }) })
            ]
          }
        )
      ] })
    }
  );
}
function g$() {
  return /* @__PURE__ */ f.jsxs(oi, { children: [
    /* @__PURE__ */ f.jsx(
      ut,
      {
        variant: "subtle",
        "aria-label": "Twitter",
        href: "https://www.twitter.com",
        children: /* @__PURE__ */ f.jsx(Bv, {})
      }
    ),
    /* @__PURE__ */ f.jsx(
      ut,
      {
        variant: "subtle",
        "aria-label": "Instagram",
        href: "https://www.instagram.com",
        children: /* @__PURE__ */ f.jsx(Pv, {})
      }
    ),
    /* @__PURE__ */ f.jsx(
      ut,
      {
        variant: "subtle",
        "aria-label": "YouTube",
        href: "https://www.youtube.com",
        children: /* @__PURE__ */ f.jsx(Av, {})
      }
    ),
    /* @__PURE__ */ f.jsx(
      ut,
      {
        variant: "subtle",
        "aria-label": "LinkedIn",
        href: "https://www.linkedin.com",
        children: /* @__PURE__ */ f.jsx(Dv, {})
      }
    )
  ] });
}
function H3({ className: t, ...e }) {
  const n = I(t, "form-box");
  return /* @__PURE__ */ f.jsx(D3, { className: n, ...e });
}
function $$({
  title: t,
  subtitle: e,
  align: n = "start",
  className: i,
  ...l
}) {
  const r = I(i);
  return /* @__PURE__ */ f.jsxs("div", { className: r, children: [
    /* @__PURE__ */ f.jsx(z3, { align: n, title: t, subtitle: e }),
    /* @__PURE__ */ f.jsx(H3, { ...l })
  ] });
}
const Up = _(null);
function U3() {
  const t = z(Up);
  if (!t)
    throw new Error("useAuth must be used within an AuthProvider");
  return t;
}
const Wp = _(null);
function y$() {
  const t = z(Wp);
  if (!t)
    throw new Error("usePricing must be used within a PricingProvider");
  return t;
}
const Gp = _(null);
function x$() {
  const t = z(Gp);
  if (!t)
    throw new Error("useProducts must be used within a ProductsProvider");
  return t;
}
const Un = {
  /**
   * Mock login function
   */
  async login(t) {
    if (await new Promise((e) => setTimeout(e, 1e3)), t.email === "error@example.com")
      throw new Error("Invalid credentials");
    return {
      id: "1",
      name: "John Doe",
      email: t.email,
      username: t.email.split("@")[0],
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${t.email}`
    };
  },
  /**
   * Mock logout function
   */
  async logout() {
    await new Promise((t) => setTimeout(t, 500)), localStorage.removeItem("auth-token");
  },
  /**
   * Check if user is authenticated (mock)
   */
  isAuthenticated() {
    return localStorage.getItem("auth-token") !== null;
  },
  /**
   * Get current user from storage (mock)
   */
  getCurrentUser() {
    const t = localStorage.getItem("current-user");
    return t ? JSON.parse(t) : null;
  },
  /**
   * Store user data (mock)
   */
  storeUser(t) {
    localStorage.setItem("current-user", JSON.stringify(t)), localStorage.setItem("auth-token", "mock-token");
  }
};
function W3({ children: t }) {
  const [e, n] = Y(null), [i, l] = Y(!1), [r, o] = Y(null);
  Z(() => {
    const d = Un.getCurrentUser();
    d && Un.isAuthenticated() && n(d);
  }, []);
  const a = X(async (d) => {
    l(!0), o(null);
    try {
      const v = await Un.login(d);
      Un.storeUser(v), n(v);
    } catch (v) {
      throw o(v), v;
    } finally {
      l(!1);
    }
  }, []), u = X(async () => {
    l(!0), o(null);
    try {
      await Un.logout(), n(null);
    } catch (d) {
      o(d);
    } finally {
      l(!1);
    }
  }, []), s = X(() => {
    o(null);
  }, []), c = U(
    () => ({
      user: e,
      isLoading: i,
      error: r,
      login: a,
      logout: u,
      clearError: s
    }),
    [e, i, r, a, u, s]
  );
  return /* @__PURE__ */ f.jsx(Up.Provider, { value: c, children: t });
}
const G3 = {
  /**
   * Get pricing plans
   */
  async getPlans() {
    return await new Promise((n) => setTimeout(n, 800)), { monthly: [
      {
        id: "beginner-monthly",
        name: "Beginner",
        description: "Perfect for getting started",
        price: 5,
        currency: "$",
        interval: "month",
        features: ["Promises", "Intentions", "240 credits"],
        sku: "1-beginner"
      },
      {
        id: "advanced-monthly",
        name: "Advanced",
        description: "For growing businesses",
        price: 10,
        currency: "$",
        interval: "month",
        features: ["Kept promises", "Better intentions", "480 credits"],
        popular: !0,
        sku: "2-advanced"
      },
      {
        id: "business-monthly",
        name: "Business",
        description: "Enterprise-grade features",
        price: 25,
        currency: "$",
        interval: "month",
        features: ["Kept promises", "Best intentions", "Infinite credits"],
        sku: "3-business"
      }
    ], annual: [
      {
        id: "beginner-annual",
        name: "Beginner",
        description: "Perfect for getting started",
        price: 50,
        currency: "$",
        interval: "year",
        features: ["Promises", "Intentions", "240 credits"],
        sku: "1-beginner"
      },
      {
        id: "advanced-annual",
        name: "Advanced",
        description: "For growing businesses",
        price: 100,
        currency: "$",
        interval: "year",
        features: ["Kept promises", "Better intentions", "480 credits"],
        popular: !0,
        sku: "2-advanced"
      },
      {
        id: "business-annual",
        name: "Business",
        description: "Enterprise-grade features",
        price: 250,
        currency: "$",
        interval: "year",
        features: ["Kept promises", "Best intentions", "Infinite credits"],
        sku: "3-business"
      }
    ] };
  },
  /**
   * Calculate cart total
   */
  calculateTotal(t) {
    return t.reduce((e, n) => e + n.price, 0);
  }
};
function _3({ children: t }) {
  const [e, n] = Y([]), [i, l] = Y([]), [r, o] = Y(), [a, u] = Y(!0);
  Z(() => {
    async function c() {
      u(!0);
      try {
        const { monthly: d, annual: v } = await G3.getPlans();
        n(d), l(v), o(d[0]);
      } catch {
      } finally {
        u(!1);
      }
    }
    c();
  }, []);
  const s = U(
    () => ({
      monthlyPlans: e,
      annualPlans: i,
      currentPlan: r,
      isLoading: a,
      setCurrentPlan: o
    }),
    [e, i, r, a, o]
  );
  return /* @__PURE__ */ f.jsx(Wp.Provider, { value: s, children: t });
}
const Ai = {
  /**
   * Get all products
   */
  async getProducts() {
    return await new Promise((t) => setTimeout(t, 1e3)), [
      {
        id: "1",
        name: "Wireless Bluetooth Headphones",
        description: "Premium noise-canceling headphones with 30-hour battery life and crystal clear audio quality.",
        price: 89.99,
        currency: "$",
        rating: 4.5,
        imageUrl: "https://picsum.photos/seed/Wireless-Bluetooth-Headphones/1200/900",
        category: "Electronics",
        inStock: !0,
        tags: ["wireless", "bluetooth", "audio"]
      },
      {
        id: "2",
        name: "Smart Fitness Tracker",
        description: "Advanced health monitoring with heart rate, sleep tracking, and GPS for all your fitness goals.",
        price: 149.99,
        currency: "$",
        rating: 4.2,
        imageUrl: "https://picsum.photos/seed/Smart-Fitness-Tracker/1200/900",
        category: "Fitness",
        inStock: !0,
        tags: ["fitness", "health", "tracking"]
      },
      {
        id: "3",
        name: "Portable Phone Charger",
        description: "Ultra-compact 10,000mAh power bank with fast charging for all your mobile devices.",
        price: 29.99,
        currency: "$",
        rating: 4.7,
        imageUrl: "https://picsum.photos/seed/Portable-Phone-Charger/1200/900",
        category: "Electronics",
        inStock: !0,
        tags: ["charging", "portable", "battery"]
      },
      {
        id: "4",
        name: "Coffee Bean Grinder",
        description: "Precision burr grinder for the perfect coffee experience with 15 grind settings.",
        price: 79.99,
        currency: "$",
        rating: 4.4,
        imageUrl: "https://picsum.photos/seed/Coffee-Beans-Grinders/1200/900",
        category: "Kitchen",
        inStock: !1,
        tags: ["coffee", "grinder", "kitchen"]
      },
      {
        id: "5",
        name: "Yoga Mat Premium",
        description: "Non-slip eco-friendly yoga mat with superior cushioning and grip for all practice levels.",
        price: 45.99,
        currency: "$",
        rating: 4.8,
        imageUrl: "https://picsum.photos/seed/Yoga-Mat-Premium/1200/900",
        category: "Fitness",
        inStock: !0,
        tags: ["yoga", "fitness", "eco-friendly"]
      },
      {
        id: "6",
        name: "LED Desk Lamp",
        description: "Adjustable brightness desk lamp with USB charging port and touch controls.",
        price: 39.99,
        currency: "$",
        rating: 4.3,
        imageUrl: "https://picsum.photos/seed/LED-Desks-Lamps/1200/900",
        category: "Office",
        inStock: !0,
        tags: ["lighting", "desk", "LED"]
      },
      {
        id: "7",
        name: "Wireless Gaming Mouse",
        description: "High-precision gaming mouse with customizable RGB lighting and programmable buttons.",
        price: 69.99,
        currency: "$",
        rating: 4.6,
        imageUrl: "https://picsum.photos/seed/Wireless-Gaming-Mouse/1200/900",
        category: "Electronics",
        inStock: !0,
        tags: ["gaming", "mouse", "RGB"]
      },
      {
        id: "8",
        name: "Ceramic Dinnerware Set",
        description: "16-piece modern dinnerware set, dishwasher and microwave safe, perfect for entertaining.",
        price: 119.99,
        currency: "$",
        rating: 4.1,
        imageUrl: "https://picsum.photos/seed/Ceramic-Dinnerware-Set/1200/900",
        category: "Kitchen",
        inStock: !0,
        tags: ["dinnerware", "ceramic", "set"]
      },
      {
        id: "9",
        name: "Bluetooth Speaker Waterproof",
        description: "Portable waterproof speaker with 360-degree sound and 12-hour battery life.",
        price: 54.99,
        currency: "$",
        rating: 4.5,
        imageUrl: "https://picsum.photos/seed/Bluetooth-Speaker-Waterproof/1200/900",
        category: "Electronics",
        inStock: !0,
        tags: ["bluetooth", "speaker", "waterproof"]
      },
      {
        id: "10",
        name: "Organic Cotton T-Shirt",
        description: "Soft, breathable organic cotton t-shirt available in multiple colors and sizes.",
        price: 24.99,
        currency: "$",
        rating: 4.3,
        imageUrl: "https://picsum.photos/seed/Organic-Cotton-T-Shirt/1200/900",
        category: "Clothing",
        inStock: !0,
        tags: ["organic", "cotton", "t-shirt"]
      },
      {
        id: "11",
        name: "Stainless Steel Water Bottle",
        description: "Insulated water bottle keeps drinks cold for 24 hours or hot for 12 hours.",
        price: 32.99,
        currency: "$",
        rating: 4.9,
        imageUrl: "https://picsum.photos/seed/Stainless-Steel-Water-Bottle/1200/900",
        category: "Fitness",
        inStock: !0,
        tags: ["water bottle", "insulated", "stainless steel"]
      },
      {
        id: "12",
        name: "Mechanical Keyboard RGB",
        description: "Tactile mechanical keyboard with customizable RGB backlighting and premium switches.",
        price: 129.99,
        currency: "$",
        rating: 4.7,
        imageUrl: "https://picsum.photos/seed/Mechanical-Keyboard-RGB/1200/900",
        category: "Electronics",
        inStock: !0,
        tags: ["keyboard", "mechanical", "RGB"]
      },
      {
        id: "13",
        name: "Essential Oil Diffuser",
        description: "Ultrasonic aromatherapy diffuser with LED lights and automatic shut-off timer.",
        price: 42.99,
        currency: "$",
        rating: 4.4,
        imageUrl: "https://picsum.photos/seed/Essential-Oils-Diffusers/1200/900",
        category: "Home",
        inStock: !0,
        tags: ["diffuser", "aromatherapy", "essential oils"]
      },
      {
        id: "14",
        name: "Phone Camera Lens Kit",
        description: "Professional lens attachment kit including wide-angle, macro, and fisheye lenses.",
        price: 35.99,
        currency: "$",
        rating: 4.2,
        imageUrl: "https://picsum.photos/seed/Phone-Camera-Lens-Kit/1200/900",
        category: "Electronics",
        inStock: !0,
        tags: ["camera", "lens", "photography"]
      },
      {
        id: "15",
        name: "Memory Foam Pillow",
        description: "Contoured memory foam pillow with cooling gel layer for optimal neck support.",
        price: 59.99,
        currency: "$",
        rating: 4.6,
        imageUrl: "https://picsum.photos/seed/Memory-Foam-Pillow/1200/900",
        category: "Home",
        inStock: !0,
        tags: ["pillow", "memory foam", "cooling"]
      },
      {
        id: "16",
        name: "Cast Iron Skillet",
        description: "Pre-seasoned cast iron skillet perfect for searing, baking, and everyday cooking.",
        price: 49.99,
        currency: "$",
        rating: 4.8,
        imageUrl: "https://picsum.photos/seed/Cast-Iron-Skillet/1200/900",
        category: "Kitchen",
        inStock: !0,
        tags: ["cast iron", "skillet", "cooking"]
      },
      {
        id: "17",
        name: "Laptop Stand Adjustable",
        description: "Ergonomic laptop stand with adjustable height and angle for better posture.",
        price: 67.99,
        currency: "$",
        rating: 4.3,
        imageUrl: "https://picsum.photos/seed/Laptop-Stand-Adjustable/1200/900",
        category: "Office",
        inStock: !0,
        tags: ["laptop", "stand", "ergonomic"]
      },
      {
        id: "18",
        name: "Silk Sleep Mask",
        description: "Luxurious mulberry silk sleep mask for complete darkness and comfortable rest.",
        price: 19.99,
        currency: "$",
        rating: 4.5,
        imageUrl: "https://picsum.photos/seed/Silk-Sleep-Mask/1200/900",
        category: "Home",
        inStock: !0,
        tags: ["sleep", "mask", "silk"]
      },
      {
        id: "19",
        name: "Resistance Bands Set",
        description: "Complete resistance training set with multiple resistance levels and exercise guide.",
        price: 28.99,
        currency: "$",
        rating: 4.4,
        imageUrl: "https://picsum.photos/seed/Resistance-Bands-Set/1200/900",
        category: "Fitness",
        inStock: !0,
        tags: ["resistance", "bands", "exercise"]
      },
      {
        id: "20",
        name: "Smart Home Hub",
        description: "Central control hub for all your smart home devices with voice assistant integration.",
        price: 99.99,
        currency: "$",
        rating: 4.1,
        imageUrl: "https://picsum.photos/seed/Smart-Home-Hub/1200/900",
        category: "Electronics",
        inStock: !0,
        tags: ["smart home", "hub", "voice assistant"]
      },
      {
        id: "21",
        name: "Bamboo Cutting Board",
        description: "Eco-friendly bamboo cutting board with juice groove and antimicrobial properties.",
        price: 34.99,
        currency: "$",
        rating: 4.7,
        imageUrl: "https://picsum.photos/seed/Bamboo-Cutting-Board/1200/900",
        category: "Kitchen",
        inStock: !0,
        tags: ["bamboo", "cutting board", "eco-friendly"]
      },
      {
        id: "22",
        name: "Wireless Car Charger",
        description: "Fast wireless charging mount for car with automatic clamping and ventilation cooling.",
        price: 44.99,
        currency: "$",
        rating: 4.2,
        imageUrl: "https://picsum.photos/seed/Wireless-Car-Charger/1200/900",
        category: "Electronics",
        inStock: !0,
        tags: ["wireless", "car charger", "mount"]
      },
      {
        id: "23",
        name: "Ceramic Space Heater",
        description: "Energy-efficient ceramic heater with remote control and safety features.",
        price: 89.99,
        currency: "$",
        rating: 4.3,
        imageUrl: "https://picsum.photos/seed/Ceramic-Space-Heater/1200/900",
        category: "Home",
        inStock: !0,
        tags: ["heater", "ceramic", "energy efficient"]
      },
      {
        id: "24",
        name: "Blue Light Glasses",
        description: "Stylish blue light blocking glasses to reduce eye strain from digital screens.",
        price: 39.99,
        currency: "$",
        rating: 4.4,
        imageUrl: "https://picsum.photos/seed/Blue-Light-Glasses/1200/900",
        category: "Health",
        inStock: !0,
        tags: ["glasses", "blue light", "eye strain"]
      },
      {
        id: "25",
        name: "Insulated Lunch Box",
        description: "Leak-proof insulated lunch box with multiple compartments and utensils included.",
        price: 26.99,
        currency: "$",
        rating: 4.6,
        imageUrl: "https://picsum.photos/seed/Insulated-Lunch-Box/1200/900",
        category: "Kitchen",
        inStock: !0,
        tags: ["lunch box", "insulated", "leak-proof"]
      },
      {
        id: "26",
        name: "Foam Roller Massage",
        description: "High-density foam roller for muscle recovery and deep tissue massage therapy.",
        price: 31.99,
        currency: "$",
        rating: 4.5,
        imageUrl: "https://picsum.photos/seed/Foam-Roller-Massage/1200/900",
        category: "Fitness",
        inStock: !0,
        tags: ["foam roller", "massage", "recovery"]
      },
      {
        id: "27",
        name: "Wireless Earbuds Pro",
        description: "Premium wireless earbuds with active noise cancellation and transparency mode.",
        price: 159.99,
        currency: "$",
        rating: 4.8,
        imageUrl: "https://picsum.photos/seed/Wireless-Earbuds-Pros/1200/900",
        category: "Electronics",
        inStock: !0,
        tags: ["earbuds", "wireless", "noise cancellation"]
      },
      {
        id: "28",
        name: "Plant Humidifier",
        description: "Decorative humidifier designed for plant care with automatic humidity control.",
        price: 55.99,
        currency: "$",
        rating: 4.2,
        imageUrl: "https://picsum.photos/seed/Plant-Humidifier/1200/900",
        category: "Home",
        inStock: !0,
        tags: ["humidifier", "plants", "humidity"]
      },
      {
        id: "29",
        name: "Magnetic Phone Mount",
        description: "Strong magnetic car mount for phones with 360-degree rotation and easy installation.",
        price: 22.99,
        currency: "$",
        rating: 4.3,
        imageUrl: "https://picsum.photos/seed/Magnetic-Phone-Mount/1200/900",
        category: "Electronics",
        inStock: !0,
        tags: ["phone mount", "magnetic", "car"]
      },
      {
        id: "30",
        name: "Electric Kettle Smart",
        description: "Smart electric kettle with temperature control and keep-warm function via app.",
        price: 79.99,
        currency: "$",
        rating: 4.5,
        imageUrl: "https://picsum.photos/seed/Electric-Kettle-Smarts/1200/900",
        category: "Kitchen",
        inStock: !0,
        tags: ["electric kettle", "smart", "temperature control"]
      },
      {
        id: "31",
        name: "Weighted Blanket Therapy",
        description: "Therapeutic weighted blanket for better sleep and anxiety relief, multiple weights available.",
        price: 89.99,
        currency: "$",
        rating: 4.7,
        imageUrl: "https://picsum.photos/seed/Weighted-Blanket-Therapy/1200/900",
        category: "Home",
        inStock: !0,
        tags: ["weighted blanket", "therapy", "sleep"]
      },
      {
        id: "32",
        name: "Knife Sharpener Electric",
        description: "Professional electric knife sharpener with precision angle guides for all blade types.",
        price: 45.99,
        currency: "$",
        rating: 4.1,
        imageUrl: "https://picsum.photos/seed/Knife-Sharpeners-Electric/1200/900",
        category: "Kitchen",
        inStock: !0,
        tags: ["knife sharpener", "electric", "professional"]
      },
      {
        id: "33",
        name: "Air Purifier HEPA",
        description: "True HEPA air purifier removes 99.97% of allergens and pollutants from indoor air.",
        price: 179.99,
        currency: "$",
        rating: 4.6,
        imageUrl: "https://picsum.photos/seed/Air-Purifier-HEPA/1200/900",
        category: "Home",
        inStock: !0,
        tags: ["air purifier", "HEPA", "allergens"]
      },
      {
        id: "34",
        name: "Cordless Vacuum Handheld",
        description: "Lightweight cordless handheld vacuum perfect for quick cleanups and car interior.",
        price: 69.99,
        currency: "$",
        rating: 4.4,
        imageUrl: "https://picsum.photos/seed/Cordless-Vacuum-Handheld/1200/900",
        category: "Home",
        inStock: !0,
        tags: ["vacuum", "cordless", "handheld"]
      },
      {
        id: "35",
        name: "Reading Light Clip-On",
        description: "Portable clip-on reading light with adjustable brightness and flexible neck.",
        price: 18.99,
        currency: "$",
        rating: 4.3,
        imageUrl: "https://picsum.photos/seed/Reading-Lights-Clip-On/1200/900",
        category: "Home",
        inStock: !0,
        tags: ["reading light", "clip-on", "portable"]
      },
      {
        id: "36",
        name: "Spice Rack Magnetic",
        description: "Space-saving magnetic spice rack with clear jars and labels, perfect for any kitchen.",
        price: 36.99,
        currency: "$",
        rating: 4.5,
        imageUrl: "https://picsum.photos/seed/Spice-Rack-Magnetic/1200/900",
        category: "Kitchen",
        inStock: !0,
        tags: ["spice rack", "magnetic", "organization"]
      },
      {
        id: "37",
        name: "Gaming Chair Ergonomic",
        description: "Ergonomic gaming chair with lumbar support, adjustable armrests, and premium materials.",
        price: 229.99,
        currency: "$",
        rating: 4.2,
        imageUrl: "https://picsum.photos/seed/Gaming-Chairs-Ergonomic/1200/900",
        category: "Office",
        inStock: !0,
        tags: ["gaming chair", "ergonomic", "lumbar support"]
      },
      {
        id: "38",
        name: "Wireless Charging Pad",
        description: "Fast wireless charging pad compatible with all Qi-enabled devices and safety features.",
        price: 29.99,
        currency: "$",
        rating: 4.4,
        imageUrl: "https://picsum.photos/seed/Wireless-Charging-Pad/1200/900",
        category: "Electronics",
        inStock: !0,
        tags: ["wireless charging", "Qi", "fast charging"]
      },
      {
        id: "39",
        name: "Bath Towel Set Luxury",
        description: "Ultra-soft luxury bath towel set made from premium cotton with superior absorbency.",
        price: 79.99,
        currency: "$",
        rating: 4.8,
        imageUrl: "https://picsum.photos/seed/Bath-Towels-Set Luxury/1200/900",
        category: "Home",
        inStock: !0,
        tags: ["bath towels", "luxury", "cotton"]
      }
    ];
  },
  /**
   * Filter products based on criteria
   */
  filterProducts(t, e) {
    return t.filter((n) => !(e.category && n.category !== e.category || e.minPrice && n.price < e.minPrice || e.maxPrice && n.price > e.maxPrice || e.minRating && n.rating < e.minRating || e.inStock !== void 0 && n.inStock !== e.inStock || e.tags && e.tags.length > 0 && !e.tags.some(
      (l) => {
        var r;
        return (r = n.tags) == null ? void 0 : r.some(
          (o) => o.toLowerCase().includes(l.toLowerCase())
        );
      }
    )));
  },
  /**
   * Sort products
   */
  sortProducts(t, e) {
    const n = [...t];
    switch (e) {
      case "name":
        return n.sort((i, l) => i.name.localeCompare(l.name));
      case "price":
        return n.sort((i, l) => i.price - l.price);
      case "rating":
        return n.sort((i, l) => l.rating - i.rating);
      case "newest":
        return n.reverse();
      // Mock newest first
      default:
        return n;
    }
  },
  /**
   * Search products by query
   */
  searchProducts(t, e) {
    if (!e.trim()) return t;
    const n = e.toLowerCase();
    return t.filter(
      (i) => {
        var l;
        return i.name.toLowerCase().includes(n) || i.description.toLowerCase().includes(n) || i.category.toLowerCase().includes(n) || ((l = i.tags) == null ? void 0 : l.some((r) => r.toLowerCase().includes(n)));
      }
    );
  },
  /**
   * Calculate cart total
   */
  calculateCartTotal(t, e) {
    return Object.entries(e).reduce((n, [i, l]) => {
      const r = t.find((o) => o.id === i);
      return n + (r ? r.price * l : 0);
    }, 0);
  }
};
function q3({ children: t }) {
  const [e, n] = Y([]), [i, l] = Y({
    query: "",
    filters: {},
    sort: "name",
    page: 1,
    limit: 10
  }), [r, o] = Y({
    items: [],
    total: 0,
    currency: "$"
  }), [a, u] = Y([]), [s, c] = Y([]), [d, v] = Y(!0), [p, h] = Y(null);
  Z(() => {
    async function A() {
      v(!0), h(null);
      try {
        const B = await Ai.getProducts();
        n(B);
      } catch (B) {
        h(B);
      } finally {
        v(!1);
      }
    }
    A();
  }, []), Z(() => {
    const A = localStorage.getItem("product-favorites"), B = localStorage.getItem("recently-viewed"), j = localStorage.getItem("product-cart");
    A && u(JSON.parse(A)), B && c(JSON.parse(B)), j && o(JSON.parse(j));
  }, []), Z(() => {
    localStorage.setItem("product-favorites", JSON.stringify(a));
  }, [a]), Z(() => {
    localStorage.setItem("recently-viewed", JSON.stringify(s));
  }, [s]), Z(() => {
    localStorage.setItem("product-cart", JSON.stringify(r));
  }, [r]), Z(() => {
    const A = r.items.reduce(
      (B, j) => B + j.product.price * j.quantity,
      0
    );
    o((B) => ({ ...B, total: A }));
  }, [r.items]);
  const m = U(() => {
    let A = e;
    return i.query && (A = Ai.searchProducts(A, i.query)), A = Ai.filterProducts(A, i.filters), A = Ai.sortProducts(A, i.sort), A;
  }, [e, i]), g = X((A) => {
    l((B) => ({ ...B, query: A, page: 1 }));
  }, []), b = X((A) => {
    l((B) => ({ ...B, filters: A, page: 1 }));
  }, []), E = X((A) => {
    l((B) => ({ ...B, sort: A, page: 1 }));
  }, []), D = X((A) => {
    l((B) => ({ ...B, page: A }));
  }, []), k = X(
    (A, B = 1) => {
      const j = e.find((x) => x.id === A);
      if (!j) {
        h(new Error(`Product with id ${A} not found`));
        return;
      }
      if (!j.inStock) {
        h(new Error(`Product ${j.name} is out of stock`));
        return;
      }
      o((x) => x.items.find(
        (w) => w.product.id === A
      ) ? {
        ...x,
        items: x.items.map(
          (w) => w.product.id === A ? { ...w, quantity: w.quantity + B } : w
        )
      } : {
        ...x,
        items: [...x.items, { product: j, quantity: B }]
      });
    },
    [e]
  ), P = X((A) => {
    o((B) => ({
      ...B,
      items: B.items.filter((j) => j.product.id !== A)
    }));
  }, []), T = X(
    (A, B) => {
      if (B <= 0) {
        P(A);
        return;
      }
      o((j) => ({
        ...j,
        items: j.items.map(
          (x) => x.product.id === A ? { ...x, quantity: B } : x
        )
      }));
    },
    [P]
  ), M = X(() => {
    o({ items: [], total: 0, currency: "$" });
  }, []), F = X((A) => {
    u((B) => B.includes(A) ? B : [...B, A]);
  }, []), H = X((A) => {
    u((B) => B.filter((j) => j !== A));
  }, []), K = X((A) => {
    c((B) => {
      const j = B.filter((x) => x !== A);
      return [A, ...j].slice(0, 10);
    });
  }, []), y = X(() => {
    h(null);
  }, []), R = U(
    () => ({
      products: e,
      filteredProducts: m,
      searchParams: i,
      cart: r,
      favorites: a,
      recentlyViewed: s,
      isLoading: d,
      error: p,
      search: g,
      setFilters: b,
      setSort: E,
      setPage: D,
      addToCart: k,
      removeFromCart: P,
      updateCartQuantity: T,
      clearCart: M,
      addToFavorites: F,
      removeFromFavorites: H,
      addToRecentlyViewed: K,
      clearError: y
    }),
    [
      e,
      m,
      i,
      r,
      a,
      s,
      d,
      p,
      g,
      b,
      E,
      D,
      k,
      P,
      T,
      M,
      F,
      H,
      K,
      y
    ]
  );
  return /* @__PURE__ */ f.jsx(Gp.Provider, { value: R, children: t });
}
function E$({ children: t }) {
  return /* @__PURE__ */ f.jsx(W3, { children: /* @__PURE__ */ f.jsx(_3, { children: /* @__PURE__ */ f.jsx(q3, { children: t }) }) });
}
function Y3() {
  const { user: t, login: e, logout: n } = U3(), [i, l] = Y(!1), [r, o] = Y("pricing"), a = /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    /* @__PURE__ */ f.jsx(
      ht,
      {
        variant: "subtle",
        size: "small",
        onPress: () => e({
          email: "Charlie Brown",
          password: "snooptroupe"
        }),
        children: "Log in"
      }
    ),
    /* @__PURE__ */ f.jsx(
      ht,
      {
        size: "small",
        onPress: () => e({
          email: "Charlie Brown",
          password: "snooptroupe"
        }),
        children: "Register"
      }
    )
  ] }), { isTabletDown: u } = $i(), s = [
    "Pricing",
    "Solutions",
    "Community",
    "Resources",
    "Contact"
  ], c = /* @__PURE__ */ f.jsx(T3, { direction: u ? "column" : "row", children: s.map((d) => /* @__PURE__ */ f.jsx(
    B3,
    {
      onPress: () => o(d.toLowerCase()),
      isSelected: r === d.toLowerCase(),
      children: d
    },
    d
  )) });
  return /* @__PURE__ */ f.jsx(
    Ce,
    {
      direction: "column",
      gap: "300",
      alignPrimary: "center",
      alignSecondary: "center",
      children: /* @__PURE__ */ f.jsx(_t, { children: u ? /* @__PURE__ */ f.jsxs(Ce, { alignPrimary: "center", children: [
        /* @__PURE__ */ f.jsx(
          ut,
          {
            variant: "subtle",
            "aria-label": "Toggle navigation menu",
            onPress: () => l(!0),
            children: /* @__PURE__ */ f.jsx(Sv, {})
          }
        ),
        /* @__PURE__ */ f.jsx(Kp, { isOpen: i, children: /* @__PURE__ */ f.jsxs(Yr, { className: I("navigation-dialog"), children: [
          /* @__PURE__ */ f.jsx(
            ut,
            {
              className: I("navigation-dialog-close"),
              variant: "subtle",
              "aria-label": "Close navigation menu",
              onPress: () => l(!1),
              children: /* @__PURE__ */ f.jsx(kn, {})
            }
          ),
          /* @__PURE__ */ f.jsxs(
            Ce,
            {
              direction: "column",
              alignPrimary: "space-between",
              alignSecondary: "center",
              children: [
                c,
                t ? /* @__PURE__ */ f.jsxs(Ce, { alignSecondary: "center", gap: "200", direction: "column", children: [
                  /* @__PURE__ */ f.jsx(_t, { children: /* @__PURE__ */ f.jsx(Ce, { alignPrimary: "center", children: /* @__PURE__ */ f.jsx(
                    Xn,
                    {
                      src: t.avatar,
                      initials: t.name.charAt(0)
                    }
                  ) }) }),
                  /* @__PURE__ */ f.jsx(_t, { children: /* @__PURE__ */ f.jsx(Ce, { alignPrimary: "center", children: /* @__PURE__ */ f.jsx(pt, { children: t.name }) }) }),
                  /* @__PURE__ */ f.jsx(_t, { children: /* @__PURE__ */ f.jsx(Ce, { alignPrimary: "center", children: /* @__PURE__ */ f.jsx(
                    ht,
                    {
                      variant: "subtle",
                      size: "small",
                      onPress: n,
                      children: "Log out"
                    }
                  ) }) })
                ] }) : /* @__PURE__ */ f.jsx(oi, { align: "center", children: a })
              ]
            }
          )
        ] }) })
      ] }) : /* @__PURE__ */ f.jsxs(Ce, { gap: "400", alignSecondary: "center", children: [
        c,
        t ? /* @__PURE__ */ f.jsxs(zp, { children: [
          /* @__PURE__ */ f.jsxs(hn, { className: I("header-auth-avatar-button"), children: [
            /* @__PURE__ */ f.jsx(Xn, { src: t.avatar, initials: t.name.charAt(0) }),
            /* @__PURE__ */ f.jsx(ai, {})
          ] }),
          /* @__PURE__ */ f.jsx(Op, { placement: "bottom right", children: /* @__PURE__ */ f.jsxs(jp, { children: [
            /* @__PURE__ */ f.jsx(ma, { children: /* @__PURE__ */ f.jsx(_r, { title: t.name, description: "View profile", children: /* @__PURE__ */ f.jsx(
              Xn,
              {
                src: t.avatar,
                initials: t.name.charAt(0)
              }
            ) }) }),
            /* @__PURE__ */ f.jsx(ma, { onAction: n, children: "Log out" })
          ] }) })
        ] }) : /* @__PURE__ */ f.jsx(oi, { className: I("header-auth-avatar-button"), children: a })
      ] }) })
    }
  );
}
function C$({ className: t, ...e }) {
  return /* @__PURE__ */ f.jsx(
    Xr,
    {
      className: "header",
      elementType: "header",
      variant: "stroke",
      padding: "800",
      ...e,
      children: /* @__PURE__ */ f.jsxs(Ce, { container: !0, alignPrimary: "space-between", alignSecondary: "center", children: [
        /* @__PURE__ */ f.jsx(_t, { size: "minor", children: /* @__PURE__ */ f.jsx(Lp, {}) }),
        /* @__PURE__ */ f.jsx(_t, { size: "major", children: /* @__PURE__ */ f.jsx(Ce, { gap: "600", alignPrimary: "end", alignSecondary: "center", children: /* @__PURE__ */ f.jsx(Y3, {}) }) })
      ] })
    }
  );
}
function P$({ children: t, flexProps: e, ...n }) {
  return /* @__PURE__ */ f.jsx(Xr, { padding: "1600", ...n, children: /* @__PURE__ */ f.jsx(
    Ce,
    {
      container: !0,
      alignPrimary: "center",
      alignSecondary: "center",
      direction: "column",
      gap: "600",
      ...e,
      children: t
    }
  ) });
}
function D$({ children: t, ...e }) {
  return /* @__PURE__ */ f.jsx(Ce, { container: !0, wrap: !0, ...e, children: t });
}
export {
  J3 as Accordion,
  Q3 as AccordionItem,
  E$ as AllProviders,
  hn as AnchorOrButton,
  W3 as AuthProvider,
  Xn as Avatar,
  _r as AvatarBlock,
  eg as AvatarButton,
  tg as AvatarGroup,
  ht as Button,
  C3 as ButtonDanger,
  oi as ButtonGroup,
  bn as Card,
  qr as Checkbox,
  ig as CheckboxField,
  ng as CheckboxGroup,
  Bt as Description,
  w3 as DestructiveIconButton,
  Yr as Dialog,
  ug as DialogBody,
  rg as DialogButton,
  lg as DialogClose,
  ag as DialogDescription,
  Kp as DialogModal,
  og as DialogTitle,
  P3 as DialogTrigger,
  Np as Field,
  Jt as FieldError,
  dg as FieldGroup,
  sg as Fieldset,
  Ce as Flex,
  _t as FlexItem,
  m$ as Footer,
  D3 as Form,
  H3 as FormBox,
  $$ as FormWithTitle,
  Qg as Grid,
  e$ as GridItem,
  C$ as Header,
  Y3 as HeaderAuth,
  P$ as Hero,
  it as Icon,
  ut as IconButton,
  Zr as Image,
  Ip as Input,
  hg as InputField,
  S3 as Keyboard,
  pt as Label,
  cg as Legend,
  k3 as Link,
  Mp as ListBox,
  Rp as ListBoxItem,
  Lp as Logo,
  jp as Menu,
  bg as MenuButton,
  Eg as MenuDescription,
  mg as MenuHeader,
  $g as MenuHeading,
  ma as MenuItem,
  xg as MenuLabel,
  Op as MenuPopover,
  gg as MenuSection,
  yg as MenuSeparator,
  Cg as MenuShortcut,
  zp as MenuTrigger,
  T3 as Navigation,
  Pg as NavigationButton,
  B3 as NavigationPill,
  Dg as Notification,
  Sg as Pagination,
  Ag as PaginationGap,
  Tg as PaginationList,
  kg as PaginationNext,
  Bg as PaginationPage,
  wg as PaginationPrevious,
  D$ as Panel,
  pg as Picture,
  vg as PictureSource,
  c$ as PricingCard,
  s$ as PricingCardSkeleton,
  _3 as PricingProvider,
  p$ as ProductInfoCard,
  f$ as ProductInfoCardSkeleton,
  q3 as ProductsProvider,
  A3 as Radio,
  Kg as RadioField,
  Fg as RadioGroup,
  v$ as ReviewCard,
  Ng as Search,
  Xr as Section,
  F3 as Select,
  Ig as SelectField,
  Mg as SelectItem,
  K3 as Slider,
  Rg as SliderField,
  N3 as SliderOutput,
  I3 as SliderThumb,
  M3 as SliderTrack,
  g$ as SocialButtons,
  h$ as StatsCard,
  R3 as Switch,
  jg as SwitchField,
  Lg as SwitchGroup,
  zg as Tab,
  Og as TabList,
  Vg as TabPanel,
  Ug as Table,
  Wg as TableBody,
  $a as TableCell,
  ga as TableColumn,
  Gg as TableHead,
  _g as TableRow,
  Hg as Tabs,
  qg as Tag,
  Yg as TagButton,
  Zg as TagToggle,
  Xg as TagToggleGroup,
  Jg as TagToggleList,
  b$ as TestimonialCard,
  hl as Text,
  i$ as TextCode,
  r$ as TextContentHeading,
  z3 as TextContentTitle,
  n$ as TextEmphasis,
  Ht as TextHeading,
  l$ as TextInput,
  $e as TextLink,
  Bi as TextLinkList,
  eo as TextList,
  me as TextListItem,
  Hp as TextPrice,
  Jr as TextSmall,
  t$ as TextSmallStrong,
  wn as TextStrong,
  Qr as TextSubheading,
  j3 as TextSubtitle,
  L3 as TextTitleHero,
  Vp as TextTitlePage,
  O3 as Textarea,
  o$ as TextareaField,
  a$ as Tooltip,
  V3 as TooltipOverlayArrow,
  fg as formEventTargetToFormData,
  u$ as pricingPlanToPricingCardProps,
  d$ as productToProductInfoCardProps,
  U3 as useAuth,
  Hn as useCustomMediaQuery,
  $i as useMediaQuery,
  y$ as usePricing,
  x$ as useProducts
};
