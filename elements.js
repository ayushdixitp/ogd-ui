(() => {
  'use strict';
  var e,
    v = {},
    m = {};
  function t(e) {
    var n = m[e];
    if (void 0 !== n) return n.exports;
    var r = (m[e] = { exports: {} });
    return v[e](r, r.exports, t), r.exports;
  }
  (t.m = v),
    (e = []),
    (t.O = (n, r, o, u) => {
      if (!r) {
        var a = 1 / 0;
        for (i = 0; i < e.length; i++) {
          for (var [r, o, u] = e[i], s = !0, f = 0; f < r.length; f++)
            (!1 & u || a >= u) && Object.keys(t.O).every(b => t.O[b](r[f]))
              ? r.splice(f--, 1)
              : ((s = !1), u < a && (a = u));
          if (s) {
            e.splice(i--, 1);
            var d = o();
            void 0 !== d && (n = d);
          }
        }
        return n;
      }
      u = u || 0;
      for (var i = e.length; i > 0 && e[i - 1][2] > u; i--) e[i] = e[i - 1];
      e[i] = [r, o, u];
    }),
    (t.n = e => {
      var n = e && e.__esModule ? () => e.default : () => e;
      return t.d(n, { a: n }), n;
    }),
    (t.d = (e, n) => {
      for (var r in n)
        t.o(n, r) &&
          !t.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: n[r] });
    }),
    (t.f = {}),
    (t.e = e =>
      Promise.all(Object.keys(t.f).reduce((n, r) => (t.f[r](e, n), n), []))),
    (t.u = e => e + '.js'),
    (t.miniCssF = e => {}),
    (t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (() => {
      var e = {},
        n = 'chatbot-management-app:';
      t.l = (r, o, u, i) => {
        if (e[r]) e[r].push(o);
        else {
          var a, s;
          if (void 0 !== u)
            for (
              var f = document.getElementsByTagName('script'), d = 0;
              d < f.length;
              d++
            ) {
              var l = f[d];
              if (
                l.getAttribute('src') == r ||
                l.getAttribute('data-webpack') == n + u
              ) {
                a = l;
                break;
              }
            }
          a ||
            ((s = !0),
            ((a = document.createElement('script')).type = 'module'),
            (a.charset = 'utf-8'),
            (a.timeout = 120),
            t.nc && a.setAttribute('nonce', t.nc),
            a.setAttribute('data-webpack', n + u),
            (a.src = t.tu(r))),
            (e[r] = [o]);
          var c = (g, b) => {
              (a.onerror = a.onload = null), clearTimeout(p);
              var _ = e[r];
              if (
                (delete e[r],
                a.parentNode && a.parentNode.removeChild(a),
                _ && _.forEach(h => h(b)),
                g)
              )
                return g(b);
            },
            p = setTimeout(
              c.bind(null, void 0, { type: 'timeout', target: a }),
              12e4
            );
          (a.onerror = c.bind(null, a.onerror)),
            (a.onload = c.bind(null, a.onload)),
            s && document.head.appendChild(a);
        }
      };
    })(),
    (t.r = e => {
      typeof Symbol < 'u' &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (() => {
      var e;
      t.tt = () => (
        void 0 === e &&
          ((e = { createScriptURL: n => n }),
          typeof trustedTypes < 'u' &&
            trustedTypes.createPolicy &&
            (e = trustedTypes.createPolicy('angular#bundler', e))),
        e
      );
    })(),
    (t.tu = e => t.tt().createScriptURL(e)),
    (t.p = ''),
    (() => {
      var e = { 666: 0 };
      (t.f.j = (o, u) => {
        var i = t.o(e, o) ? e[o] : void 0;
        if (0 !== i)
          if (i) u.push(i[2]);
          else if (666 != o) {
            var a = new Promise((l, c) => (i = e[o] = [l, c]));
            u.push((i[2] = a));
            var s = t.p + t.u(o),
              f = new Error();
            t.l(
              s,
              l => {
                if (t.o(e, o) && (0 !== (i = e[o]) && (e[o] = void 0), i)) {
                  var c = l && ('load' === l.type ? 'missing' : l.type),
                    p = l && l.target && l.target.src;
                  (f.message =
                    'Loading chunk ' + o + ' failed.\n(' + c + ': ' + p + ')'),
                    (f.name = 'ChunkLoadError'),
                    (f.type = c),
                    (f.request = p),
                    i[1](f);
                }
              },
              'chunk-' + o,
              o
            );
          } else e[o] = 0;
      }),
        (t.O.j = o => 0 === e[o]);
      var n = (o, u) => {
          var f,
            d,
            [i, a, s] = u,
            l = 0;
          if (i.some(p => 0 !== e[p])) {
            for (f in a) t.o(a, f) && (t.m[f] = a[f]);
            if (s) var c = s(t);
          }
          for (o && o(u); l < i.length; l++)
            t.o(e, (d = i[l])) && e[d] && e[d][0](), (e[d] = 0);
          return t.O(c);
        },
        r = (self.webpackChunkchatbot_management_app =
          self.webpackChunkchatbot_management_app || []);
      r.forEach(n.bind(null, 0)), (r.push = n.bind(null, r.push.bind(r)));
    })();
})();
('use strict');
(self.webpackChunkchatbot_management_app =
  self.webpackChunkchatbot_management_app || []).push([
  [429],
  {
    7435: (ie, Ee, de) => {
      de(8583);
    },
    8583: () => {
      !(function (e) {
        const n = e.performance;
        function i(M) {
          n && n.mark && n.mark(M);
        }
        function o(M, E) {
          n && n.measure && n.measure(M, E);
        }
        i('Zone');
        const c = e.__Zone_symbol_prefix || '__zone_symbol__';
        function a(M) {
          return c + M;
        }
        const y = !0 === e[a('forceDuplicateZoneCheck')];
        if (e.Zone) {
          if (y || 'function' != typeof e.Zone.__symbol__)
            throw new Error('Zone already loaded.');
          return e.Zone;
        }
        let d = (() => {
          class M {
            constructor(t, r) {
              (this._parent = t),
                (this._name = r ? r.name || 'unnamed' : '<root>'),
                (this._properties = (r && r.properties) || {}),
                (this._zoneDelegate = new v(
                  this,
                  this._parent && this._parent._zoneDelegate,
                  r
                ));
            }
            static assertZonePatched() {
              if (e.Promise !== oe.ZoneAwarePromise)
                throw new Error(
                  'Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)'
                );
            }
            static get root() {
              let t = M.current;
              for (; t.parent; ) t = t.parent;
              return t;
            }
            static get current() {
              return U.zone;
            }
            static get currentTask() {
              return re;
            }
            static __load_patch(t, r, k = !1) {
              if (oe.hasOwnProperty(t)) {
                if (!k && y) throw Error('Already loaded patch: ' + t);
              } else if (!e['__Zone_disable_' + t]) {
                const C = 'Zone:' + t;
                i(C), (oe[t] = r(e, M, z)), o(C, C);
              }
            }
            get parent() {
              return this._parent;
            }
            get name() {
              return this._name;
            }
            get(t) {
              const r = this.getZoneWith(t);
              if (r) return r._properties[t];
            }
            getZoneWith(t) {
              let r = this;
              for (; r; ) {
                if (r._properties.hasOwnProperty(t)) return r;
                r = r._parent;
              }
              return null;
            }
            fork(t) {
              if (!t) throw new Error('ZoneSpec required!');
              return this._zoneDelegate.fork(this, t);
            }
            wrap(t, r) {
              if ('function' != typeof t)
                throw new Error('Expecting function got: ' + t);
              const k = this._zoneDelegate.intercept(this, t, r),
                C = this;
              return function () {
                return C.runGuarded(k, this, arguments, r);
              };
            }
            run(t, r, k, C) {
              U = { parent: U, zone: this };
              try {
                return this._zoneDelegate.invoke(this, t, r, k, C);
              } finally {
                U = U.parent;
              }
            }
            runGuarded(t, r = null, k, C) {
              U = { parent: U, zone: this };
              try {
                try {
                  return this._zoneDelegate.invoke(this, t, r, k, C);
                } catch ($) {
                  if (this._zoneDelegate.handleError(this, $)) throw $;
                }
              } finally {
                U = U.parent;
              }
            }
            runTask(t, r, k) {
              if (t.zone != this)
                throw new Error(
                  'A task can only be run in the zone of creation! (Creation: ' +
                    (t.zone || K).name +
                    '; Execution: ' +
                    this.name +
                    ')'
                );
              if (t.state === x && (t.type === Q || t.type === w)) return;
              const C = t.state != p;
              C && t._transitionTo(p, j), t.runCount++;
              const $ = re;
              (re = t), (U = { parent: U, zone: this });
              try {
                t.type == w &&
                  t.data &&
                  !t.data.isPeriodic &&
                  (t.cancelFn = void 0);
                try {
                  return this._zoneDelegate.invokeTask(this, t, r, k);
                } catch (l) {
                  if (this._zoneDelegate.handleError(this, l)) throw l;
                }
              } finally {
                t.state !== x &&
                  t.state !== h &&
                  (t.type == Q || (t.data && t.data.isPeriodic)
                    ? C && t._transitionTo(j, p)
                    : ((t.runCount = 0),
                      this._updateTaskCount(t, -1),
                      C && t._transitionTo(x, p, x))),
                  (U = U.parent),
                  (re = $);
              }
            }
            scheduleTask(t) {
              if (t.zone && t.zone !== this) {
                let k = this;
                for (; k; ) {
                  if (k === t.zone)
                    throw Error(
                      `can not reschedule task to ${this.name} which is descendants of the original zone ${t.zone.name}`
                    );
                  k = k.parent;
                }
              }
              t._transitionTo(X, x);
              const r = [];
              (t._zoneDelegates = r), (t._zone = this);
              try {
                t = this._zoneDelegate.scheduleTask(this, t);
              } catch (k) {
                throw (
                  (t._transitionTo(h, X, x),
                  this._zoneDelegate.handleError(this, k),
                  k)
                );
              }
              return (
                t._zoneDelegates === r && this._updateTaskCount(t, 1),
                t.state == X && t._transitionTo(j, X),
                t
              );
            }
            scheduleMicroTask(t, r, k, C) {
              return this.scheduleTask(new m(I, t, r, k, C, void 0));
            }
            scheduleMacroTask(t, r, k, C, $) {
              return this.scheduleTask(new m(w, t, r, k, C, $));
            }
            scheduleEventTask(t, r, k, C, $) {
              return this.scheduleTask(new m(Q, t, r, k, C, $));
            }
            cancelTask(t) {
              if (t.zone != this)
                throw new Error(
                  'A task can only be cancelled in the zone of creation! (Creation: ' +
                    (t.zone || K).name +
                    '; Execution: ' +
                    this.name +
                    ')'
                );
              t._transitionTo(G, j, p);
              try {
                this._zoneDelegate.cancelTask(this, t);
              } catch (r) {
                throw (
                  (t._transitionTo(h, G),
                  this._zoneDelegate.handleError(this, r),
                  r)
                );
              }
              return (
                this._updateTaskCount(t, -1),
                t._transitionTo(x, G),
                (t.runCount = 0),
                t
              );
            }
            _updateTaskCount(t, r) {
              const k = t._zoneDelegates;
              -1 == r && (t._zoneDelegates = null);
              for (let C = 0; C < k.length; C++)
                k[C]._updateTaskCount(t.type, r);
            }
          }
          return (M.__symbol__ = a), M;
        })();
        const P = {
          name: '',
          onHasTask: (M, E, t, r) => M.hasTask(t, r),
          onScheduleTask: (M, E, t, r) => M.scheduleTask(t, r),
          onInvokeTask: (M, E, t, r, k, C) => M.invokeTask(t, r, k, C),
          onCancelTask: (M, E, t, r) => M.cancelTask(t, r),
        };
        class v {
          constructor(E, t, r) {
            (this._taskCounts = { microTask: 0, macroTask: 0, eventTask: 0 }),
              (this.zone = E),
              (this._parentDelegate = t),
              (this._forkZS = r && (r && r.onFork ? r : t._forkZS)),
              (this._forkDlgt = r && (r.onFork ? t : t._forkDlgt)),
              (this._forkCurrZone =
                r && (r.onFork ? this.zone : t._forkCurrZone)),
              (this._interceptZS = r && (r.onIntercept ? r : t._interceptZS)),
              (this._interceptDlgt =
                r && (r.onIntercept ? t : t._interceptDlgt)),
              (this._interceptCurrZone =
                r && (r.onIntercept ? this.zone : t._interceptCurrZone)),
              (this._invokeZS = r && (r.onInvoke ? r : t._invokeZS)),
              (this._invokeDlgt = r && (r.onInvoke ? t : t._invokeDlgt)),
              (this._invokeCurrZone =
                r && (r.onInvoke ? this.zone : t._invokeCurrZone)),
              (this._handleErrorZS =
                r && (r.onHandleError ? r : t._handleErrorZS)),
              (this._handleErrorDlgt =
                r && (r.onHandleError ? t : t._handleErrorDlgt)),
              (this._handleErrorCurrZone =
                r && (r.onHandleError ? this.zone : t._handleErrorCurrZone)),
              (this._scheduleTaskZS =
                r && (r.onScheduleTask ? r : t._scheduleTaskZS)),
              (this._scheduleTaskDlgt =
                r && (r.onScheduleTask ? t : t._scheduleTaskDlgt)),
              (this._scheduleTaskCurrZone =
                r && (r.onScheduleTask ? this.zone : t._scheduleTaskCurrZone)),
              (this._invokeTaskZS =
                r && (r.onInvokeTask ? r : t._invokeTaskZS)),
              (this._invokeTaskDlgt =
                r && (r.onInvokeTask ? t : t._invokeTaskDlgt)),
              (this._invokeTaskCurrZone =
                r && (r.onInvokeTask ? this.zone : t._invokeTaskCurrZone)),
              (this._cancelTaskZS =
                r && (r.onCancelTask ? r : t._cancelTaskZS)),
              (this._cancelTaskDlgt =
                r && (r.onCancelTask ? t : t._cancelTaskDlgt)),
              (this._cancelTaskCurrZone =
                r && (r.onCancelTask ? this.zone : t._cancelTaskCurrZone)),
              (this._hasTaskZS = null),
              (this._hasTaskDlgt = null),
              (this._hasTaskDlgtOwner = null),
              (this._hasTaskCurrZone = null);
            const k = r && r.onHasTask;
            (k || (t && t._hasTaskZS)) &&
              ((this._hasTaskZS = k ? r : P),
              (this._hasTaskDlgt = t),
              (this._hasTaskDlgtOwner = this),
              (this._hasTaskCurrZone = E),
              r.onScheduleTask ||
                ((this._scheduleTaskZS = P),
                (this._scheduleTaskDlgt = t),
                (this._scheduleTaskCurrZone = this.zone)),
              r.onInvokeTask ||
                ((this._invokeTaskZS = P),
                (this._invokeTaskDlgt = t),
                (this._invokeTaskCurrZone = this.zone)),
              r.onCancelTask ||
                ((this._cancelTaskZS = P),
                (this._cancelTaskDlgt = t),
                (this._cancelTaskCurrZone = this.zone)));
          }
          fork(E, t) {
            return this._forkZS
              ? this._forkZS.onFork(this._forkDlgt, this.zone, E, t)
              : new d(E, t);
          }
          intercept(E, t, r) {
            return this._interceptZS
              ? this._interceptZS.onIntercept(
                  this._interceptDlgt,
                  this._interceptCurrZone,
                  E,
                  t,
                  r
                )
              : t;
          }
          invoke(E, t, r, k, C) {
            return this._invokeZS
              ? this._invokeZS.onInvoke(
                  this._invokeDlgt,
                  this._invokeCurrZone,
                  E,
                  t,
                  r,
                  k,
                  C
                )
              : t.apply(r, k);
          }
          handleError(E, t) {
            return (
              !this._handleErrorZS ||
              this._handleErrorZS.onHandleError(
                this._handleErrorDlgt,
                this._handleErrorCurrZone,
                E,
                t
              )
            );
          }
          scheduleTask(E, t) {
            let r = t;
            if (this._scheduleTaskZS)
              this._hasTaskZS && r._zoneDelegates.push(this._hasTaskDlgtOwner),
                (r = this._scheduleTaskZS.onScheduleTask(
                  this._scheduleTaskDlgt,
                  this._scheduleTaskCurrZone,
                  E,
                  t
                )),
                r || (r = t);
            else if (t.scheduleFn) t.scheduleFn(t);
            else {
              if (t.type != I) throw new Error('Task is missing scheduleFn.');
              R(t);
            }
            return r;
          }
          invokeTask(E, t, r, k) {
            return this._invokeTaskZS
              ? this._invokeTaskZS.onInvokeTask(
                  this._invokeTaskDlgt,
                  this._invokeTaskCurrZone,
                  E,
                  t,
                  r,
                  k
                )
              : t.callback.apply(r, k);
          }
          cancelTask(E, t) {
            let r;
            if (this._cancelTaskZS)
              r = this._cancelTaskZS.onCancelTask(
                this._cancelTaskDlgt,
                this._cancelTaskCurrZone,
                E,
                t
              );
            else {
              if (!t.cancelFn) throw Error('Task is not cancelable');
              r = t.cancelFn(t);
            }
            return r;
          }
          hasTask(E, t) {
            try {
              this._hasTaskZS &&
                this._hasTaskZS.onHasTask(
                  this._hasTaskDlgt,
                  this._hasTaskCurrZone,
                  E,
                  t
                );
            } catch (r) {
              this.handleError(E, r);
            }
          }
          _updateTaskCount(E, t) {
            const r = this._taskCounts,
              k = r[E],
              C = (r[E] = k + t);
            if (C < 0)
              throw new Error('More tasks executed then were scheduled.');
            (0 != k && 0 != C) ||
              this.hasTask(this.zone, {
                microTask: r.microTask > 0,
                macroTask: r.macroTask > 0,
                eventTask: r.eventTask > 0,
                change: E,
              });
          }
        }
        class m {
          constructor(E, t, r, k, C, $) {
            if (
              ((this._zone = null),
              (this.runCount = 0),
              (this._zoneDelegates = null),
              (this._state = 'notScheduled'),
              (this.type = E),
              (this.source = t),
              (this.data = k),
              (this.scheduleFn = C),
              (this.cancelFn = $),
              !r)
            )
              throw new Error('callback is not defined');
            this.callback = r;
            const l = this;
            this.invoke =
              E === Q && k && k.useG
                ? m.invokeTask
                : function () {
                    return m.invokeTask.call(e, l, this, arguments);
                  };
          }
          static invokeTask(E, t, r) {
            E || (E = this), ee++;
            try {
              return E.runCount++, E.zone.runTask(E, t, r);
            } finally {
              1 == ee && _(), ee--;
            }
          }
          get zone() {
            return this._zone;
          }
          get state() {
            return this._state;
          }
          cancelScheduleRequest() {
            this._transitionTo(x, X);
          }
          _transitionTo(E, t, r) {
            if (this._state !== t && this._state !== r)
              throw new Error(
                `${this.type} '${
                  this.source
                }': can not transition to '${E}', expecting state '${t}'${
                  r ? " or '" + r + "'" : ''
                }, was '${this._state}'.`
              );
            (this._state = E), E == x && (this._zoneDelegates = null);
          }
          toString() {
            return this.data && typeof this.data.handleId < 'u'
              ? this.data.handleId.toString()
              : Object.prototype.toString.call(this);
          }
          toJSON() {
            return {
              type: this.type,
              state: this.state,
              source: this.source,
              zone: this.zone.name,
              runCount: this.runCount,
            };
          }
        }
        const L = a('setTimeout'),
          Z = a('Promise'),
          N = a('then');
        let J,
          B = [],
          H = !1;
        function q(M) {
          if ((J || (e[Z] && (J = e[Z].resolve(0))), J)) {
            let E = J[N];
            E || (E = J.then), E.call(J, M);
          } else e[L](M, 0);
        }
        function R(M) {
          0 === ee && 0 === B.length && q(_), M && B.push(M);
        }
        function _() {
          if (!H) {
            for (H = !0; B.length; ) {
              const M = B;
              B = [];
              for (let E = 0; E < M.length; E++) {
                const t = M[E];
                try {
                  t.zone.runTask(t, null, null);
                } catch (r) {
                  z.onUnhandledError(r);
                }
              }
            }
            z.microtaskDrainDone(), (H = !1);
          }
        }
        const K = { name: 'NO ZONE' },
          x = 'notScheduled',
          X = 'scheduling',
          j = 'scheduled',
          p = 'running',
          G = 'canceling',
          h = 'unknown',
          I = 'microTask',
          w = 'macroTask',
          Q = 'eventTask',
          oe = {},
          z = {
            symbol: a,
            currentZoneFrame: () => U,
            onUnhandledError: W,
            microtaskDrainDone: W,
            scheduleMicroTask: R,
            showUncaughtError: () => !d[a('ignoreConsoleErrorUncaughtError')],
            patchEventTarget: () => [],
            patchOnProperties: W,
            patchMethod: () => W,
            bindArguments: () => [],
            patchThen: () => W,
            patchMacroTask: () => W,
            patchEventPrototype: () => W,
            isIEOrEdge: () => !1,
            getGlobalObjects: () => {},
            ObjectDefineProperty: () => W,
            ObjectGetOwnPropertyDescriptor: () => {},
            ObjectCreate: () => {},
            ArraySlice: () => [],
            patchClass: () => W,
            wrapWithCurrentZone: () => W,
            filterProperties: () => [],
            attachOriginToPatched: () => W,
            _redefineProperty: () => W,
            patchCallbacks: () => W,
            nativeScheduleMicroTask: q,
          };
        let U = { parent: null, zone: new d(null, null) },
          re = null,
          ee = 0;
        function W() {}
        o('Zone', 'Zone'), (e.Zone = d);
      })(
        (typeof window < 'u' && window) || (typeof self < 'u' && self) || global
      );
      const ie = Object.getOwnPropertyDescriptor,
        Ee = Object.defineProperty,
        de = Object.getPrototypeOf,
        ge = Object.create,
        Ve = Array.prototype.slice,
        Oe = 'addEventListener',
        Se = 'removeEventListener',
        Ze = Zone.__symbol__(Oe),
        Ne = Zone.__symbol__(Se),
        ce = 'true',
        ae = 'false',
        ke = Zone.__symbol__('');
      function Ie(e, n) {
        return Zone.current.wrap(e, n);
      }
      function Me(e, n, i, o, c) {
        return Zone.current.scheduleMacroTask(e, n, i, o, c);
      }
      const A = Zone.__symbol__,
        Pe = typeof window < 'u',
        Te = Pe ? window : void 0,
        Y = (Pe && Te) || ('object' == typeof self && self) || global;
      function Le(e, n) {
        for (let i = e.length - 1; i >= 0; i--)
          'function' == typeof e[i] && (e[i] = Ie(e[i], n + '_' + i));
        return e;
      }
      function Fe(e) {
        return (
          !e ||
          (!1 !== e.writable &&
            !('function' == typeof e.get && typeof e.set > 'u'))
        );
      }
      const Be =
          typeof WorkerGlobalScope < 'u' && self instanceof WorkerGlobalScope,
        we =
          !('nw' in Y) &&
          typeof Y.process < 'u' &&
          '[object process]' === {}.toString.call(Y.process),
        je = !we && !Be && !(!Pe || !Te.HTMLElement),
        Ue =
          typeof Y.process < 'u' &&
          '[object process]' === {}.toString.call(Y.process) &&
          !Be &&
          !(!Pe || !Te.HTMLElement),
        Re = {},
        We = function (e) {
          if (!(e = e || Y.event)) return;
          let n = Re[e.type];
          n || (n = Re[e.type] = A('ON_PROPERTY' + e.type));
          const i = this || e.target || Y,
            o = i[n];
          let c;
          if (je && i === Te && 'error' === e.type) {
            const a = e;
            (c =
              o &&
              o.call(this, a.message, a.filename, a.lineno, a.colno, a.error)),
              !0 === c && e.preventDefault();
          } else
            (c = o && o.apply(this, arguments)),
              null != c && !c && e.preventDefault();
          return c;
        };
      function qe(e, n, i) {
        let o = ie(e, n);
        if (
          (!o && i && ie(i, n) && (o = { enumerable: !0, configurable: !0 }),
          !o || !o.configurable)
        )
          return;
        const c = A('on' + n + 'patched');
        if (e.hasOwnProperty(c) && e[c]) return;
        delete o.writable, delete o.value;
        const a = o.get,
          y = o.set,
          d = n.slice(2);
        let P = Re[d];
        P || (P = Re[d] = A('ON_PROPERTY' + d)),
          (o.set = function (v) {
            let m = this;
            !m && e === Y && (m = Y),
              m &&
                ('function' == typeof m[P] && m.removeEventListener(d, We),
                y && y.call(m, null),
                (m[P] = v),
                'function' == typeof v && m.addEventListener(d, We, !1));
          }),
          (o.get = function () {
            let v = this;
            if ((!v && e === Y && (v = Y), !v)) return null;
            const m = v[P];
            if (m) return m;
            if (a) {
              let L = a.call(this);
              if (L)
                return (
                  o.set.call(this, L),
                  'function' == typeof v.removeAttribute &&
                    v.removeAttribute(n),
                  L
                );
            }
            return null;
          }),
          Ee(e, n, o),
          (e[c] = !0);
      }
      function Xe(e, n, i) {
        if (n) for (let o = 0; o < n.length; o++) qe(e, 'on' + n[o], i);
        else {
          const o = [];
          for (const c in e) 'on' == c.slice(0, 2) && o.push(c);
          for (let c = 0; c < o.length; c++) qe(e, o[c], i);
        }
      }
      const ne = A('originalInstance');
      function ve(e) {
        const n = Y[e];
        if (!n) return;
        (Y[A(e)] = n),
          (Y[e] = function () {
            const c = Le(arguments, e);
            switch (c.length) {
              case 0:
                this[ne] = new n();
                break;
              case 1:
                this[ne] = new n(c[0]);
                break;
              case 2:
                this[ne] = new n(c[0], c[1]);
                break;
              case 3:
                this[ne] = new n(c[0], c[1], c[2]);
                break;
              case 4:
                this[ne] = new n(c[0], c[1], c[2], c[3]);
                break;
              default:
                throw new Error('Arg list too long.');
            }
          }),
          ue(Y[e], n);
        const i = new n(function () {});
        let o;
        for (o in i)
          ('XMLHttpRequest' === e && 'responseBlob' === o) ||
            (function (c) {
              'function' == typeof i[c]
                ? (Y[e].prototype[c] = function () {
                    return this[ne][c].apply(this[ne], arguments);
                  })
                : Ee(Y[e].prototype, c, {
                    set: function (a) {
                      'function' == typeof a
                        ? ((this[ne][c] = Ie(a, e + '.' + c)),
                          ue(this[ne][c], a))
                        : (this[ne][c] = a);
                    },
                    get: function () {
                      return this[ne][c];
                    },
                  });
            })(o);
        for (o in n)
          'prototype' !== o && n.hasOwnProperty(o) && (Y[e][o] = n[o]);
      }
      function le(e, n, i) {
        let o = e;
        for (; o && !o.hasOwnProperty(n); ) o = de(o);
        !o && e[n] && (o = e);
        const c = A(n);
        let a = null;
        if (
          o &&
          (!(a = o[c]) || !o.hasOwnProperty(c)) &&
          ((a = o[c] = o[n]), Fe(o && ie(o, n)))
        ) {
          const d = i(a, c, n);
          (o[n] = function () {
            return d(this, arguments);
          }),
            ue(o[n], a);
        }
        return a;
      }
      function lt(e, n, i) {
        let o = null;
        function c(a) {
          const y = a.data;
          return (
            (y.args[y.cbIdx] = function () {
              a.invoke.apply(this, arguments);
            }),
            o.apply(y.target, y.args),
            a
          );
        }
        o = le(
          e,
          n,
          a =>
            function (y, d) {
              const P = i(y, d);
              return P.cbIdx >= 0 && 'function' == typeof d[P.cbIdx]
                ? Me(P.name, d[P.cbIdx], P, c)
                : a.apply(y, d);
            }
        );
      }
      function ue(e, n) {
        e[A('OriginalDelegate')] = n;
      }
      let ze = !1,
        Ae = !1;
      function ft() {
        if (ze) return Ae;
        ze = !0;
        try {
          const e = Te.navigator.userAgent;
          (-1 !== e.indexOf('MSIE ') ||
            -1 !== e.indexOf('Trident/') ||
            -1 !== e.indexOf('Edge/')) &&
            (Ae = !0);
        } catch {}
        return Ae;
      }
      Zone.__load_patch('ZoneAwarePromise', (e, n, i) => {
        const o = Object.getOwnPropertyDescriptor,
          c = Object.defineProperty,
          y = i.symbol,
          d = [],
          P = !0 === e[y('DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION')],
          v = y('Promise'),
          m = y('then');
        (i.onUnhandledError = l => {
          if (i.showUncaughtError()) {
            const u = l && l.rejection;
            u
              ? console.error(
                  'Unhandled Promise rejection:',
                  u instanceof Error ? u.message : u,
                  '; Zone:',
                  l.zone.name,
                  '; Task:',
                  l.task && l.task.source,
                  '; Value:',
                  u,
                  u instanceof Error ? u.stack : void 0
                )
              : console.error(l);
          }
        }),
          (i.microtaskDrainDone = () => {
            for (; d.length; ) {
              const l = d.shift();
              try {
                l.zone.runGuarded(() => {
                  throw l.throwOriginal ? l.rejection : l;
                });
              } catch (u) {
                N(u);
              }
            }
          });
        const Z = y('unhandledPromiseRejectionHandler');
        function N(l) {
          i.onUnhandledError(l);
          try {
            const u = n[Z];
            'function' == typeof u && u.call(this, l);
          } catch {}
        }
        function B(l) {
          return l && l.then;
        }
        function H(l) {
          return l;
        }
        function J(l) {
          return t.reject(l);
        }
        const q = y('state'),
          R = y('value'),
          _ = y('finally'),
          K = y('parentPromiseValue'),
          x = y('parentPromiseState'),
          j = null,
          p = !0,
          G = !1;
        function I(l, u) {
          return s => {
            try {
              z(l, u, s);
            } catch (f) {
              z(l, !1, f);
            }
          };
        }
        const w = function () {
            let l = !1;
            return function (s) {
              return function () {
                l || ((l = !0), s.apply(null, arguments));
              };
            };
          },
          oe = y('currentTaskTrace');
        function z(l, u, s) {
          const f = w();
          if (l === s) throw new TypeError('Promise resolved with itself');
          if (l[q] === j) {
            let g = null;
            try {
              ('object' == typeof s || 'function' == typeof s) &&
                (g = s && s.then);
            } catch (b) {
              return (
                f(() => {
                  z(l, !1, b);
                })(),
                l
              );
            }
            if (
              u !== G &&
              s instanceof t &&
              s.hasOwnProperty(q) &&
              s.hasOwnProperty(R) &&
              s[q] !== j
            )
              re(s), z(l, s[q], s[R]);
            else if (u !== G && 'function' == typeof g)
              try {
                g.call(s, f(I(l, u)), f(I(l, !1)));
              } catch (b) {
                f(() => {
                  z(l, !1, b);
                })();
              }
            else {
              l[q] = u;
              const b = l[R];
              if (
                ((l[R] = s),
                l[_] === _ && u === p && ((l[q] = l[x]), (l[R] = l[K])),
                u === G && s instanceof Error)
              ) {
                const T =
                  n.currentTask &&
                  n.currentTask.data &&
                  n.currentTask.data.__creationTrace__;
                T &&
                  c(s, oe, {
                    configurable: !0,
                    enumerable: !1,
                    writable: !0,
                    value: T,
                  });
              }
              for (let T = 0; T < b.length; )
                ee(l, b[T++], b[T++], b[T++], b[T++]);
              if (0 == b.length && u == G) {
                l[q] = 0;
                let T = s;
                try {
                  throw new Error(
                    'Uncaught (in promise): ' +
                      (function a(l) {
                        return l && l.toString === Object.prototype.toString
                          ? ((l.constructor && l.constructor.name) || '') +
                              ': ' +
                              JSON.stringify(l)
                          : l
                          ? l.toString()
                          : Object.prototype.toString.call(l);
                      })(s) +
                      (s && s.stack ? '\n' + s.stack : '')
                  );
                } catch (D) {
                  T = D;
                }
                P && (T.throwOriginal = !0),
                  (T.rejection = s),
                  (T.promise = l),
                  (T.zone = n.current),
                  (T.task = n.currentTask),
                  d.push(T),
                  i.scheduleMicroTask();
              }
            }
          }
          return l;
        }
        const U = y('rejectionHandledHandler');
        function re(l) {
          if (0 === l[q]) {
            try {
              const u = n[U];
              u &&
                'function' == typeof u &&
                u.call(this, { rejection: l[R], promise: l });
            } catch {}
            l[q] = G;
            for (let u = 0; u < d.length; u++)
              l === d[u].promise && d.splice(u, 1);
          }
        }
        function ee(l, u, s, f, g) {
          re(l);
          const b = l[q],
            T = b
              ? 'function' == typeof f
                ? f
                : H
              : 'function' == typeof g
              ? g
              : J;
          u.scheduleMicroTask(
            'Promise.then',
            () => {
              try {
                const D = l[R],
                  O = !!s && _ === s[_];
                O && ((s[K] = D), (s[x] = b));
                const S = u.run(T, void 0, O && T !== J && T !== H ? [] : [D]);
                z(s, !0, S);
              } catch (D) {
                z(s, !1, D);
              }
            },
            s
          );
        }
        const M = function () {},
          E = e.AggregateError;
        class t {
          static toString() {
            return 'function ZoneAwarePromise() { [native code] }';
          }
          static resolve(u) {
            return z(new this(null), p, u);
          }
          static reject(u) {
            return z(new this(null), G, u);
          }
          static any(u) {
            if (!u || 'function' != typeof u[Symbol.iterator])
              return Promise.reject(new E([], 'All promises were rejected'));
            const s = [];
            let f = 0;
            try {
              for (let T of u) f++, s.push(t.resolve(T));
            } catch {
              return Promise.reject(new E([], 'All promises were rejected'));
            }
            if (0 === f)
              return Promise.reject(new E([], 'All promises were rejected'));
            let g = !1;
            const b = [];
            return new t((T, D) => {
              for (let O = 0; O < s.length; O++)
                s[O].then(
                  S => {
                    g || ((g = !0), T(S));
                  },
                  S => {
                    b.push(S),
                      f--,
                      0 === f &&
                        ((g = !0), D(new E(b, 'All promises were rejected')));
                  }
                );
            });
          }
          static race(u) {
            let s,
              f,
              g = new this((D, O) => {
                (s = D), (f = O);
              });
            function b(D) {
              s(D);
            }
            function T(D) {
              f(D);
            }
            for (let D of u) B(D) || (D = this.resolve(D)), D.then(b, T);
            return g;
          }
          static all(u) {
            return t.allWithCallback(u);
          }
          static allSettled(u) {
            return (
              this && this.prototype instanceof t ? this : t
            ).allWithCallback(u, {
              thenCallback: f => ({ status: 'fulfilled', value: f }),
              errorCallback: f => ({ status: 'rejected', reason: f }),
            });
          }
          static allWithCallback(u, s) {
            let f,
              g,
              b = new this((S, V) => {
                (f = S), (g = V);
              }),
              T = 2,
              D = 0;
            const O = [];
            for (let S of u) {
              B(S) || (S = this.resolve(S));
              const V = D;
              try {
                S.then(
                  F => {
                    (O[V] = s ? s.thenCallback(F) : F), T--, 0 === T && f(O);
                  },
                  F => {
                    s
                      ? ((O[V] = s.errorCallback(F)), T--, 0 === T && f(O))
                      : g(F);
                  }
                );
              } catch (F) {
                g(F);
              }
              T++, D++;
            }
            return (T -= 2), 0 === T && f(O), b;
          }
          constructor(u) {
            const s = this;
            if (!(s instanceof t))
              throw new Error('Must be an instanceof Promise.');
            (s[q] = j), (s[R] = []);
            try {
              const f = w();
              u && u(f(I(s, p)), f(I(s, G)));
            } catch (f) {
              z(s, !1, f);
            }
          }
          get [Symbol.toStringTag]() {
            return 'Promise';
          }
          get [Symbol.species]() {
            return t;
          }
          then(u, s) {
            var f;
            let g =
              null === (f = this.constructor) || void 0 === f
                ? void 0
                : f[Symbol.species];
            (!g || 'function' != typeof g) && (g = this.constructor || t);
            const b = new g(M),
              T = n.current;
            return (
              this[q] == j ? this[R].push(T, b, u, s) : ee(this, T, b, u, s), b
            );
          }
          catch(u) {
            return this.then(null, u);
          }
          finally(u) {
            var s;
            let f =
              null === (s = this.constructor) || void 0 === s
                ? void 0
                : s[Symbol.species];
            (!f || 'function' != typeof f) && (f = t);
            const g = new f(M);
            g[_] = _;
            const b = n.current;
            return (
              this[q] == j ? this[R].push(b, g, u, u) : ee(this, b, g, u, u), g
            );
          }
        }
        (t.resolve = t.resolve),
          (t.reject = t.reject),
          (t.race = t.race),
          (t.all = t.all);
        const r = (e[v] = e.Promise);
        e.Promise = t;
        const k = y('thenPatched');
        function C(l) {
          const u = l.prototype,
            s = o(u, 'then');
          if (s && (!1 === s.writable || !s.configurable)) return;
          const f = u.then;
          (u[m] = f),
            (l.prototype.then = function (g, b) {
              return new t((D, O) => {
                f.call(this, D, O);
              }).then(g, b);
            }),
            (l[k] = !0);
        }
        return (
          (i.patchThen = C),
          r &&
            (C(r),
            le(e, 'fetch', l =>
              (function $(l) {
                return function (u, s) {
                  let f = l.apply(u, s);
                  if (f instanceof t) return f;
                  let g = f.constructor;
                  return g[k] || C(g), f;
                };
              })(l)
            )),
          (Promise[n.__symbol__('uncaughtPromiseErrors')] = d),
          t
        );
      }),
        Zone.__load_patch('toString', e => {
          const n = Function.prototype.toString,
            i = A('OriginalDelegate'),
            o = A('Promise'),
            c = A('Error'),
            a = function () {
              if ('function' == typeof this) {
                const v = this[i];
                if (v)
                  return 'function' == typeof v
                    ? n.call(v)
                    : Object.prototype.toString.call(v);
                if (this === Promise) {
                  const m = e[o];
                  if (m) return n.call(m);
                }
                if (this === Error) {
                  const m = e[c];
                  if (m) return n.call(m);
                }
              }
              return n.call(this);
            };
          (a[i] = n), (Function.prototype.toString = a);
          const y = Object.prototype.toString;
          Object.prototype.toString = function () {
            return 'function' == typeof Promise && this instanceof Promise
              ? '[object Promise]'
              : y.call(this);
          };
        });
      let ye = !1;
      if (typeof window < 'u')
        try {
          const e = Object.defineProperty({}, 'passive', {
            get: function () {
              ye = !0;
            },
          });
          window.addEventListener('test', e, e),
            window.removeEventListener('test', e, e);
        } catch {
          ye = !1;
        }
      const ht = { useG: !0 },
        te = {},
        Ye = {},
        $e = new RegExp('^' + ke + '(\\w+)(true|false)$'),
        Ke = A('propagationStopped');
      function Je(e, n) {
        const i = (n ? n(e) : e) + ae,
          o = (n ? n(e) : e) + ce,
          c = ke + i,
          a = ke + o;
        (te[e] = {}), (te[e][ae] = c), (te[e][ce] = a);
      }
      function dt(e, n, i, o) {
        const c = (o && o.add) || Oe,
          a = (o && o.rm) || Se,
          y = (o && o.listeners) || 'eventListeners',
          d = (o && o.rmAll) || 'removeAllListeners',
          P = A(c),
          v = '.' + c + ':',
          Z = function (R, _, K) {
            if (R.isRemoved) return;
            const x = R.callback;
            let X;
            'object' == typeof x &&
              x.handleEvent &&
              ((R.callback = p => x.handleEvent(p)), (R.originalDelegate = x));
            try {
              R.invoke(R, _, [K]);
            } catch (p) {
              X = p;
            }
            const j = R.options;
            return (
              j &&
                'object' == typeof j &&
                j.once &&
                _[a].call(
                  _,
                  K.type,
                  R.originalDelegate ? R.originalDelegate : R.callback,
                  j
                ),
              X
            );
          };
        function N(R, _, K) {
          if (!(_ = _ || e.event)) return;
          const x = R || _.target || e,
            X = x[te[_.type][K ? ce : ae]];
          if (X) {
            const j = [];
            if (1 === X.length) {
              const p = Z(X[0], x, _);
              p && j.push(p);
            } else {
              const p = X.slice();
              for (let G = 0; G < p.length && (!_ || !0 !== _[Ke]); G++) {
                const h = Z(p[G], x, _);
                h && j.push(h);
              }
            }
            if (1 === j.length) throw j[0];
            for (let p = 0; p < j.length; p++) {
              const G = j[p];
              n.nativeScheduleMicroTask(() => {
                throw G;
              });
            }
          }
        }
        const B = function (R) {
            return N(this, R, !1);
          },
          H = function (R) {
            return N(this, R, !0);
          };
        function J(R, _) {
          if (!R) return !1;
          let K = !0;
          _ && void 0 !== _.useG && (K = _.useG);
          const x = _ && _.vh;
          let X = !0;
          _ && void 0 !== _.chkDup && (X = _.chkDup);
          let j = !1;
          _ && void 0 !== _.rt && (j = _.rt);
          let p = R;
          for (; p && !p.hasOwnProperty(c); ) p = de(p);
          if ((!p && R[c] && (p = R), !p || p[P])) return !1;
          const G = _ && _.eventNameToString,
            h = {},
            I = (p[P] = p[c]),
            w = (p[A(a)] = p[a]),
            Q = (p[A(y)] = p[y]),
            oe = (p[A(d)] = p[d]);
          let z;
          function U(s, f) {
            return !ye && 'object' == typeof s && s
              ? !!s.capture
              : ye && f
              ? 'boolean' == typeof s
                ? { capture: s, passive: !0 }
                : s
                ? 'object' == typeof s && !1 !== s.passive
                  ? Object.assign(Object.assign({}, s), { passive: !0 })
                  : s
                : { passive: !0 }
              : s;
          }
          _ && _.prepend && (z = p[A(_.prepend)] = p[_.prepend]);
          const t = K
              ? function (s) {
                  if (!h.isExisting)
                    return I.call(
                      h.target,
                      h.eventName,
                      h.capture ? H : B,
                      h.options
                    );
                }
              : function (s) {
                  return I.call(h.target, h.eventName, s.invoke, h.options);
                },
            r = K
              ? function (s) {
                  if (!s.isRemoved) {
                    const f = te[s.eventName];
                    let g;
                    f && (g = f[s.capture ? ce : ae]);
                    const b = g && s.target[g];
                    if (b)
                      for (let T = 0; T < b.length; T++)
                        if (b[T] === s) {
                          b.splice(T, 1),
                            (s.isRemoved = !0),
                            0 === b.length &&
                              ((s.allRemoved = !0), (s.target[g] = null));
                          break;
                        }
                  }
                  if (s.allRemoved)
                    return w.call(
                      s.target,
                      s.eventName,
                      s.capture ? H : B,
                      s.options
                    );
                }
              : function (s) {
                  return w.call(s.target, s.eventName, s.invoke, s.options);
                },
            C =
              _ && _.diff
                ? _.diff
                : function (s, f) {
                    const g = typeof f;
                    return (
                      ('function' === g && s.callback === f) ||
                      ('object' === g && s.originalDelegate === f)
                    );
                  },
            $ = Zone[A('UNPATCHED_EVENTS')],
            l = e[A('PASSIVE_EVENTS')],
            u = function (s, f, g, b, T = !1, D = !1) {
              return function () {
                const O = this || e;
                let S = arguments[0];
                _ && _.transferEventName && (S = _.transferEventName(S));
                let V = arguments[1];
                if (!V) return s.apply(this, arguments);
                if (we && 'uncaughtException' === S)
                  return s.apply(this, arguments);
                let F = !1;
                if ('function' != typeof V) {
                  if (!V.handleEvent) return s.apply(this, arguments);
                  F = !0;
                }
                if (x && !x(s, V, O, arguments)) return;
                const fe = ye && !!l && -1 !== l.indexOf(S),
                  se = U(arguments[2], fe);
                if ($)
                  for (let _e = 0; _e < $.length; _e++)
                    if (S === $[_e])
                      return fe
                        ? s.call(O, S, V, se)
                        : s.apply(this, arguments);
                const xe = !!se && ('boolean' == typeof se || se.capture),
                  nt = !(!se || 'object' != typeof se) && se.once,
                  gt = Zone.current;
                let Ge = te[S];
                Ge || (Je(S, G), (Ge = te[S]));
                const rt = Ge[xe ? ce : ae];
                let De,
                  me = O[rt],
                  ot = !1;
                if (me) {
                  if (((ot = !0), X))
                    for (let _e = 0; _e < me.length; _e++)
                      if (C(me[_e], V)) return;
                } else me = O[rt] = [];
                const st = O.constructor.name,
                  it = Ye[st];
                it && (De = it[S]),
                  De || (De = st + f + (G ? G(S) : S)),
                  (h.options = se),
                  nt && (h.options.once = !1),
                  (h.target = O),
                  (h.capture = xe),
                  (h.eventName = S),
                  (h.isExisting = ot);
                const be = K ? ht : void 0;
                be && (be.taskData = h);
                const he = gt.scheduleEventTask(De, V, be, g, b);
                return (
                  (h.target = null),
                  be && (be.taskData = null),
                  nt && (se.once = !0),
                  (!ye && 'boolean' == typeof he.options) || (he.options = se),
                  (he.target = O),
                  (he.capture = xe),
                  (he.eventName = S),
                  F && (he.originalDelegate = V),
                  D ? me.unshift(he) : me.push(he),
                  T ? O : void 0
                );
              };
            };
          return (
            (p[c] = u(I, v, t, r, j)),
            z &&
              (p.prependListener = u(
                z,
                '.prependListener:',
                function (s) {
                  return z.call(h.target, h.eventName, s.invoke, h.options);
                },
                r,
                j,
                !0
              )),
            (p[a] = function () {
              const s = this || e;
              let f = arguments[0];
              _ && _.transferEventName && (f = _.transferEventName(f));
              const g = arguments[2],
                b = !!g && ('boolean' == typeof g || g.capture),
                T = arguments[1];
              if (!T) return w.apply(this, arguments);
              if (x && !x(w, T, s, arguments)) return;
              const D = te[f];
              let O;
              D && (O = D[b ? ce : ae]);
              const S = O && s[O];
              if (S)
                for (let V = 0; V < S.length; V++) {
                  const F = S[V];
                  if (C(F, T))
                    return (
                      S.splice(V, 1),
                      (F.isRemoved = !0),
                      0 === S.length &&
                        ((F.allRemoved = !0),
                        (s[O] = null),
                        'string' == typeof f) &&
                        (s[ke + 'ON_PROPERTY' + f] = null),
                      F.zone.cancelTask(F),
                      j ? s : void 0
                    );
                }
              return w.apply(this, arguments);
            }),
            (p[y] = function () {
              const s = this || e;
              let f = arguments[0];
              _ && _.transferEventName && (f = _.transferEventName(f));
              const g = [],
                b = Qe(s, G ? G(f) : f);
              for (let T = 0; T < b.length; T++) {
                const D = b[T];
                g.push(D.originalDelegate ? D.originalDelegate : D.callback);
              }
              return g;
            }),
            (p[d] = function () {
              const s = this || e;
              let f = arguments[0];
              if (f) {
                _ && _.transferEventName && (f = _.transferEventName(f));
                const g = te[f];
                if (g) {
                  const D = s[g[ae]],
                    O = s[g[ce]];
                  if (D) {
                    const S = D.slice();
                    for (let V = 0; V < S.length; V++) {
                      const F = S[V];
                      this[a].call(
                        this,
                        f,
                        F.originalDelegate ? F.originalDelegate : F.callback,
                        F.options
                      );
                    }
                  }
                  if (O) {
                    const S = O.slice();
                    for (let V = 0; V < S.length; V++) {
                      const F = S[V];
                      this[a].call(
                        this,
                        f,
                        F.originalDelegate ? F.originalDelegate : F.callback,
                        F.options
                      );
                    }
                  }
                }
              } else {
                const g = Object.keys(s);
                for (let b = 0; b < g.length; b++) {
                  const D = $e.exec(g[b]);
                  let O = D && D[1];
                  O && 'removeListener' !== O && this[d].call(this, O);
                }
                this[d].call(this, 'removeListener');
              }
              if (j) return this;
            }),
            ue(p[c], I),
            ue(p[a], w),
            oe && ue(p[d], oe),
            Q && ue(p[y], Q),
            !0
          );
        }
        let q = [];
        for (let R = 0; R < i.length; R++) q[R] = J(i[R], o);
        return q;
      }
      function Qe(e, n) {
        if (!n) {
          const a = [];
          for (let y in e) {
            const d = $e.exec(y);
            let P = d && d[1];
            if (P && (!n || P === n)) {
              const v = e[y];
              if (v) for (let m = 0; m < v.length; m++) a.push(v[m]);
            }
          }
          return a;
        }
        let i = te[n];
        i || (Je(n), (i = te[n]));
        const o = e[i[ae]],
          c = e[i[ce]];
        return o ? (c ? o.concat(c) : o.slice()) : c ? c.slice() : [];
      }
      function _t(e, n) {
        const i = e.Event;
        i &&
          i.prototype &&
          n.patchMethod(
            i.prototype,
            'stopImmediatePropagation',
            o =>
              function (c, a) {
                (c[Ke] = !0), o && o.apply(c, a);
              }
          );
      }
      function Et(e, n, i, o, c) {
        const a = Zone.__symbol__(o);
        if (n[a]) return;
        const y = (n[a] = n[o]);
        (n[o] = function (d, P, v) {
          return (
            P &&
              P.prototype &&
              c.forEach(function (m) {
                const L = `${i}.${o}::` + m,
                  Z = P.prototype;
                try {
                  if (Z.hasOwnProperty(m)) {
                    const N = e.ObjectGetOwnPropertyDescriptor(Z, m);
                    N && N.value
                      ? ((N.value = e.wrapWithCurrentZone(N.value, L)),
                        e._redefineProperty(P.prototype, m, N))
                      : Z[m] && (Z[m] = e.wrapWithCurrentZone(Z[m], L));
                  } else Z[m] && (Z[m] = e.wrapWithCurrentZone(Z[m], L));
                } catch {}
              }),
            y.call(n, d, P, v)
          );
        }),
          e.attachOriginToPatched(n[o], y);
      }
      function et(e, n, i) {
        if (!i || 0 === i.length) return n;
        const o = i.filter(a => a.target === e);
        if (!o || 0 === o.length) return n;
        const c = o[0].ignoreProperties;
        return n.filter(a => -1 === c.indexOf(a));
      }
      function tt(e, n, i, o) {
        e && Xe(e, et(e, n, i), o);
      }
      function He(e) {
        return Object.getOwnPropertyNames(e)
          .filter(n => n.startsWith('on') && n.length > 2)
          .map(n => n.substring(2));
      }
      Zone.__load_patch('util', (e, n, i) => {
        const o = He(e);
        (i.patchOnProperties = Xe),
          (i.patchMethod = le),
          (i.bindArguments = Le),
          (i.patchMacroTask = lt);
        const c = n.__symbol__('BLACK_LISTED_EVENTS'),
          a = n.__symbol__('UNPATCHED_EVENTS');
        e[a] && (e[c] = e[a]),
          e[c] && (n[c] = n[a] = e[c]),
          (i.patchEventPrototype = _t),
          (i.patchEventTarget = dt),
          (i.isIEOrEdge = ft),
          (i.ObjectDefineProperty = Ee),
          (i.ObjectGetOwnPropertyDescriptor = ie),
          (i.ObjectCreate = ge),
          (i.ArraySlice = Ve),
          (i.patchClass = ve),
          (i.wrapWithCurrentZone = Ie),
          (i.filterProperties = et),
          (i.attachOriginToPatched = ue),
          (i._redefineProperty = Object.defineProperty),
          (i.patchCallbacks = Et),
          (i.getGlobalObjects = () => ({
            globalSources: Ye,
            zoneSymbolEventNames: te,
            eventNames: o,
            isBrowser: je,
            isMix: Ue,
            isNode: we,
            TRUE_STR: ce,
            FALSE_STR: ae,
            ZONE_SYMBOL_PREFIX: ke,
            ADD_EVENT_LISTENER_STR: Oe,
            REMOVE_EVENT_LISTENER_STR: Se,
          }));
      });
      const Ce = A('zoneTask');
      function pe(e, n, i, o) {
        let c = null,
          a = null;
        i += o;
        const y = {};
        function d(v) {
          const m = v.data;
          return (
            (m.args[0] = function () {
              return v.invoke.apply(this, arguments);
            }),
            (m.handleId = c.apply(e, m.args)),
            v
          );
        }
        function P(v) {
          return a.call(e, v.data.handleId);
        }
        (c = le(
          e,
          (n += o),
          v =>
            function (m, L) {
              if ('function' == typeof L[0]) {
                const Z = {
                    isPeriodic: 'Interval' === o,
                    delay:
                      'Timeout' === o || 'Interval' === o ? L[1] || 0 : void 0,
                    args: L,
                  },
                  N = L[0];
                L[0] = function () {
                  try {
                    return N.apply(this, arguments);
                  } finally {
                    Z.isPeriodic ||
                      ('number' == typeof Z.handleId
                        ? delete y[Z.handleId]
                        : Z.handleId && (Z.handleId[Ce] = null));
                  }
                };
                const B = Me(n, L[0], Z, d, P);
                if (!B) return B;
                const H = B.data.handleId;
                return (
                  'number' == typeof H ? (y[H] = B) : H && (H[Ce] = B),
                  H &&
                    H.ref &&
                    H.unref &&
                    'function' == typeof H.ref &&
                    'function' == typeof H.unref &&
                    ((B.ref = H.ref.bind(H)), (B.unref = H.unref.bind(H))),
                  'number' == typeof H || H ? H : B
                );
              }
              return v.apply(e, L);
            }
        )),
          (a = le(
            e,
            i,
            v =>
              function (m, L) {
                const Z = L[0];
                let N;
                'number' == typeof Z
                  ? (N = y[Z])
                  : ((N = Z && Z[Ce]), N || (N = Z)),
                  N && 'string' == typeof N.type
                    ? 'notScheduled' !== N.state &&
                      ((N.cancelFn && N.data.isPeriodic) || 0 === N.runCount) &&
                      ('number' == typeof Z ? delete y[Z] : Z && (Z[Ce] = null),
                      N.zone.cancelTask(N))
                    : v.apply(e, L);
              }
          ));
      }
      Zone.__load_patch('legacy', e => {
        const n = e[Zone.__symbol__('legacyPatch')];
        n && n();
      }),
        Zone.__load_patch('queueMicrotask', (e, n, i) => {
          i.patchMethod(
            e,
            'queueMicrotask',
            o =>
              function (c, a) {
                n.current.scheduleMicroTask('queueMicrotask', a[0]);
              }
          );
        }),
        Zone.__load_patch('timers', e => {
          const n = 'set',
            i = 'clear';
          pe(e, n, i, 'Timeout'),
            pe(e, n, i, 'Interval'),
            pe(e, n, i, 'Immediate');
        }),
        Zone.__load_patch('requestAnimationFrame', e => {
          pe(e, 'request', 'cancel', 'AnimationFrame'),
            pe(e, 'mozRequest', 'mozCancel', 'AnimationFrame'),
            pe(e, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
        }),
        Zone.__load_patch('blocking', (e, n) => {
          const i = ['alert', 'prompt', 'confirm'];
          for (let o = 0; o < i.length; o++)
            le(
              e,
              i[o],
              (a, y, d) =>
                function (P, v) {
                  return n.current.run(a, e, v, d);
                }
            );
        }),
        Zone.__load_patch('EventTarget', (e, n, i) => {
          (function mt(e, n) {
            n.patchEventPrototype(e, n);
          })(e, i),
            (function pt(e, n) {
              if (Zone[n.symbol('patchEventTarget')]) return;
              const {
                eventNames: i,
                zoneSymbolEventNames: o,
                TRUE_STR: c,
                FALSE_STR: a,
                ZONE_SYMBOL_PREFIX: y,
              } = n.getGlobalObjects();
              for (let P = 0; P < i.length; P++) {
                const v = i[P],
                  Z = y + (v + a),
                  N = y + (v + c);
                (o[v] = {}), (o[v][a] = Z), (o[v][c] = N);
              }
              const d = e.EventTarget;
              d && d.prototype && n.patchEventTarget(e, n, [d && d.prototype]);
            })(e, i);
          const o = e.XMLHttpRequestEventTarget;
          o && o.prototype && i.patchEventTarget(e, i, [o.prototype]);
        }),
        Zone.__load_patch('MutationObserver', (e, n, i) => {
          ve('MutationObserver'), ve('WebKitMutationObserver');
        }),
        Zone.__load_patch('IntersectionObserver', (e, n, i) => {
          ve('IntersectionObserver');
        }),
        Zone.__load_patch('FileReader', (e, n, i) => {
          ve('FileReader');
        }),
        Zone.__load_patch('on_property', (e, n, i) => {
          !(function Tt(e, n) {
            if ((we && !Ue) || Zone[e.symbol('patchEvents')]) return;
            const i = n.__Zone_ignore_on_properties;
            let o = [];
            if (je) {
              const c = window;
              o = o.concat([
                'Document',
                'SVGElement',
                'Element',
                'HTMLElement',
                'HTMLBodyElement',
                'HTMLMediaElement',
                'HTMLFrameSetElement',
                'HTMLFrameElement',
                'HTMLIFrameElement',
                'HTMLMarqueeElement',
                'Worker',
              ]);
              const a = (function ut() {
                try {
                  const e = Te.navigator.userAgent;
                  if (-1 !== e.indexOf('MSIE ') || -1 !== e.indexOf('Trident/'))
                    return !0;
                } catch {}
                return !1;
              })()
                ? [{ target: c, ignoreProperties: ['error'] }]
                : [];
              tt(c, He(c), i && i.concat(a), de(c));
            }
            o = o.concat([
              'XMLHttpRequest',
              'XMLHttpRequestEventTarget',
              'IDBIndex',
              'IDBRequest',
              'IDBOpenDBRequest',
              'IDBDatabase',
              'IDBTransaction',
              'IDBCursor',
              'WebSocket',
            ]);
            for (let c = 0; c < o.length; c++) {
              const a = n[o[c]];
              a && a.prototype && tt(a.prototype, He(a.prototype), i);
            }
          })(i, e);
        }),
        Zone.__load_patch('customElements', (e, n, i) => {
          !(function yt(e, n) {
            const { isBrowser: i, isMix: o } = n.getGlobalObjects();
            (i || o) &&
              e.customElements &&
              'customElements' in e &&
              n.patchCallbacks(
                n,
                e.customElements,
                'customElements',
                'define',
                [
                  'connectedCallback',
                  'disconnectedCallback',
                  'adoptedCallback',
                  'attributeChangedCallback',
                ]
              );
          })(e, i);
        }),
        Zone.__load_patch('XHR', (e, n) => {
          !(function P(v) {
            const m = v.XMLHttpRequest;
            if (!m) return;
            const L = m.prototype;
            let N = L[Ze],
              B = L[Ne];
            if (!N) {
              const h = v.XMLHttpRequestEventTarget;
              if (h) {
                const I = h.prototype;
                (N = I[Ze]), (B = I[Ne]);
              }
            }
            const H = 'readystatechange',
              J = 'scheduled';
            function q(h) {
              const I = h.data,
                w = I.target;
              (w[a] = !1), (w[d] = !1);
              const Q = w[c];
              N || ((N = w[Ze]), (B = w[Ne])), Q && B.call(w, H, Q);
              const oe = (w[c] = () => {
                if (w.readyState === w.DONE)
                  if (!I.aborted && w[a] && h.state === J) {
                    const U = w[n.__symbol__('loadfalse')];
                    if (0 !== w.status && U && U.length > 0) {
                      const re = h.invoke;
                      (h.invoke = function () {
                        const ee = w[n.__symbol__('loadfalse')];
                        for (let W = 0; W < ee.length; W++)
                          ee[W] === h && ee.splice(W, 1);
                        !I.aborted && h.state === J && re.call(h);
                      }),
                        U.push(h);
                    } else h.invoke();
                  } else !I.aborted && !1 === w[a] && (w[d] = !0);
              });
              return (
                N.call(w, H, oe),
                w[i] || (w[i] = h),
                p.apply(w, I.args),
                (w[a] = !0),
                h
              );
            }
            function R() {}
            function _(h) {
              const I = h.data;
              return (I.aborted = !0), G.apply(I.target, I.args);
            }
            const K = le(
                L,
                'open',
                () =>
                  function (h, I) {
                    return (h[o] = 0 == I[2]), (h[y] = I[1]), K.apply(h, I);
                  }
              ),
              X = A('fetchTaskAborting'),
              j = A('fetchTaskScheduling'),
              p = le(
                L,
                'send',
                () =>
                  function (h, I) {
                    if (!0 === n.current[j] || h[o]) return p.apply(h, I);
                    {
                      const w = {
                          target: h,
                          url: h[y],
                          isPeriodic: !1,
                          args: I,
                          aborted: !1,
                        },
                        Q = Me('XMLHttpRequest.send', R, w, q, _);
                      h &&
                        !0 === h[d] &&
                        !w.aborted &&
                        Q.state === J &&
                        Q.invoke();
                    }
                  }
              ),
              G = le(
                L,
                'abort',
                () =>
                  function (h, I) {
                    const w = (function Z(h) {
                      return h[i];
                    })(h);
                    if (w && 'string' == typeof w.type) {
                      if (null == w.cancelFn || (w.data && w.data.aborted))
                        return;
                      w.zone.cancelTask(w);
                    } else if (!0 === n.current[X]) return G.apply(h, I);
                  }
              );
          })(e);
          const i = A('xhrTask'),
            o = A('xhrSync'),
            c = A('xhrListener'),
            a = A('xhrScheduled'),
            y = A('xhrURL'),
            d = A('xhrErrorBeforeScheduled');
        }),
        Zone.__load_patch('geolocation', e => {
          e.navigator &&
            e.navigator.geolocation &&
            (function at(e, n) {
              const i = e.constructor.name;
              for (let o = 0; o < n.length; o++) {
                const c = n[o],
                  a = e[c];
                if (a) {
                  if (!Fe(ie(e, c))) continue;
                  e[c] = (d => {
                    const P = function () {
                      return d.apply(this, Le(arguments, i + '.' + c));
                    };
                    return ue(P, d), P;
                  })(a);
                }
              }
            })(e.navigator.geolocation, [
              'getCurrentPosition',
              'watchPosition',
            ]);
        }),
        Zone.__load_patch('PromiseRejectionEvent', (e, n) => {
          function i(o) {
            return function (c) {
              Qe(e, o).forEach(y => {
                const d = e.PromiseRejectionEvent;
                if (d) {
                  const P = new d(o, {
                    promise: c.promise,
                    reason: c.rejection,
                  });
                  y.invoke(P);
                }
              });
            };
          }
          e.PromiseRejectionEvent &&
            ((n[A('unhandledPromiseRejectionHandler')] =
              i('unhandledrejection')),
            (n[A('rejectionHandledHandler')] = i('rejectionhandled')));
        });
    },
  },
  ie => {
    ie((ie.s = 7435));
  },
]);
('use strict');
(self.webpackChunkchatbot_management_app =
  self.webpackChunkchatbot_management_app || []).push([
  [179],
  {
    4466: (Ke, pe, x) => {
      x.d(pe, { m: () => ee });
      var y = x(6895),
        I = x(433),
        le = x(4650);
      let ee = (() => {
        class j {}
        return (
          (j.ɵfac = function (se) {
            return new (se || j)();
          }),
          (j.ɵmod = le.oAB({ type: j })),
          (j.ɵinj = le.cJS({ imports: [y.ez, I.UX, I.u5] })),
          j
        );
      })();
    },
    8416: (Ke, pe, x) => {
      var y = x(1481),
        I = x(4650),
        le = x(6895),
        ee = x(7579);
      const j = { now: () => (j.delegate || Date).now(), delegate: void 0 };
      class re extends ee.x {
        constructor(k = 1 / 0, ce = 1 / 0, Le = j) {
          super(),
            (this._bufferSize = k),
            (this._windowTime = ce),
            (this._timestampProvider = Le),
            (this._buffer = []),
            (this._infiniteTimeWindow = !0),
            (this._infiniteTimeWindow = ce === 1 / 0),
            (this._bufferSize = Math.max(1, k)),
            (this._windowTime = Math.max(1, ce));
        }
        next(k) {
          const {
            isStopped: ce,
            _buffer: Le,
            _infiniteTimeWindow: Ze,
            _timestampProvider: ke,
            _windowTime: st,
          } = this;
          ce || (Le.push(k), !Ze && Le.push(ke.now() + st)),
            this._trimBuffer(),
            super.next(k);
        }
        _subscribe(k) {
          this._throwIfClosed(), this._trimBuffer();
          const ce = this._innerSubscribe(k),
            { _infiniteTimeWindow: Le, _buffer: Ze } = this,
            ke = Ze.slice();
          for (let st = 0; st < ke.length && !k.closed; st += Le ? 1 : 2)
            k.next(ke[st]);
          return this._checkFinalizedStatuses(k), ce;
        }
        _trimBuffer() {
          const {
              _bufferSize: k,
              _timestampProvider: ce,
              _buffer: Le,
              _infiniteTimeWindow: Ze,
            } = this,
            ke = (Ze ? 1 : 2) * k;
          if (
            (k < 1 / 0 && ke < Le.length && Le.splice(0, Le.length - ke), !Ze)
          ) {
            const st = ce.now();
            let ot = 0;
            for (let tt = 1; tt < Le.length && Le[tt] <= st; tt += 2) ot = tt;
            ot && Le.splice(0, ot + 1);
          }
        }
      }
      var se = x(6451),
        ue = x(3900),
        ye = x(4004);
      const te = {
        schedule(X, k) {
          const ce = setTimeout(X, k);
          return () => clearTimeout(ce);
        },
        scheduleBeforeRender(X) {
          if (typeof window > 'u') return te.schedule(X, 0);
          if (typeof window.requestAnimationFrame > 'u')
            return te.schedule(X, 16);
          const k = window.requestAnimationFrame(X);
          return () => window.cancelAnimationFrame(k);
        },
      };
      let de;
      function me(X, k, ce) {
        let Le = ce;
        return (
          (function J(X) {
            return !!X && X.nodeType === Node.ELEMENT_NODE;
          })(X) &&
            k.some(
              (Ze, ke) =>
                !(
                  '*' === Ze ||
                  !(function Te(X, k) {
                    if (!de) {
                      const ce = Element.prototype;
                      de =
                        ce.matches ||
                        ce.matchesSelector ||
                        ce.mozMatchesSelector ||
                        ce.msMatchesSelector ||
                        ce.oMatchesSelector ||
                        ce.webkitMatchesSelector;
                    }
                    return X.nodeType === Node.ELEMENT_NODE && de.call(X, k);
                  })(X, Ze) ||
                  ((Le = ke), 0)
                )
            ),
          Le
        );
      }
      class we {
        constructor(k, ce) {
          this.componentFactory = ce.get(I._Vd).resolveComponentFactory(k);
        }
        create(k) {
          return new Ue(this.componentFactory, k);
        }
      }
      class Ue {
        constructor(k, ce) {
          (this.componentFactory = k),
            (this.injector = ce),
            (this.eventEmitters = new re(1)),
            (this.events = this.eventEmitters.pipe(
              (0, ue.w)(Le => (0, se.T)(...Le))
            )),
            (this.componentRef = null),
            (this.viewChangeDetectorRef = null),
            (this.inputChanges = null),
            (this.hasInputChanges = !1),
            (this.implementsOnChanges = !1),
            (this.scheduledChangeDetectionFn = null),
            (this.scheduledDestroyFn = null),
            (this.initialInputValues = new Map()),
            (this.unchangedInputs = new Set(
              this.componentFactory.inputs.map(({ propName: Le }) => Le)
            )),
            (this.ngZone = this.injector.get(I.R0b)),
            (this.elementZone =
              typeof Zone > 'u' ? null : this.ngZone.run(() => Zone.current));
        }
        connect(k) {
          this.runInZone(() => {
            if (null !== this.scheduledDestroyFn)
              return (
                this.scheduledDestroyFn(), void (this.scheduledDestroyFn = null)
              );
            null === this.componentRef && this.initializeComponent(k);
          });
        }
        disconnect() {
          this.runInZone(() => {
            null === this.componentRef ||
              null !== this.scheduledDestroyFn ||
              (this.scheduledDestroyFn = te.schedule(() => {
                null !== this.componentRef &&
                  (this.componentRef.destroy(),
                  (this.componentRef = null),
                  (this.viewChangeDetectorRef = null));
              }, 10));
          });
        }
        getInputValue(k) {
          return this.runInZone(() =>
            null === this.componentRef
              ? this.initialInputValues.get(k)
              : this.componentRef.instance[k]
          );
        }
        setInputValue(k, ce) {
          this.runInZone(() => {
            null !== this.componentRef
              ? ((function ae(X, k) {
                  return X === k || (X != X && k != k);
                })(ce, this.getInputValue(k)) &&
                  (void 0 !== ce || !this.unchangedInputs.has(k))) ||
                (this.recordInputChange(k, ce),
                this.unchangedInputs.delete(k),
                (this.hasInputChanges = !0),
                (this.componentRef.instance[k] = ce),
                this.scheduleDetectChanges())
              : this.initialInputValues.set(k, ce);
          });
        }
        initializeComponent(k) {
          const ce = I.zs3.create({ providers: [], parent: this.injector }),
            Le = (function rt(X, k) {
              const ce = X.childNodes,
                Le = k.map(() => []);
              let Ze = -1;
              k.some((ke, st) => '*' === ke && ((Ze = st), !0));
              for (let ke = 0, st = ce.length; ke < st; ++ke) {
                const ot = ce[ke],
                  tt = me(ot, k, Ze);
                -1 !== tt && Le[tt].push(ot);
              }
              return Le;
            })(k, this.componentFactory.ngContentSelectors);
          (this.componentRef = this.componentFactory.create(ce, Le, k)),
            (this.viewChangeDetectorRef = this.componentRef.injector.get(
              I.sBO
            )),
            (this.implementsOnChanges = (function je(X) {
              return 'function' == typeof X;
            })(this.componentRef.instance.ngOnChanges)),
            this.initializeInputs(),
            this.initializeOutputs(this.componentRef),
            this.detectChanges(),
            this.injector.get(I.z2F).attachView(this.componentRef.hostView);
        }
        initializeInputs() {
          this.componentFactory.inputs.forEach(({ propName: k }) => {
            this.initialInputValues.has(k) &&
              this.setInputValue(k, this.initialInputValues.get(k));
          }),
            this.initialInputValues.clear();
        }
        initializeOutputs(k) {
          const ce = this.componentFactory.outputs.map(
            ({ propName: Le, templateName: Ze }) =>
              k.instance[Le].pipe((0, ye.U)(st => ({ name: Ze, value: st })))
          );
          this.eventEmitters.next(ce);
        }
        callNgOnChanges(k) {
          if (!this.implementsOnChanges || null === this.inputChanges) return;
          const ce = this.inputChanges;
          (this.inputChanges = null), k.instance.ngOnChanges(ce);
        }
        markViewForCheck(k) {
          this.hasInputChanges &&
            ((this.hasInputChanges = !1), k.markForCheck());
        }
        scheduleDetectChanges() {
          this.scheduledChangeDetectionFn ||
            (this.scheduledChangeDetectionFn = te.scheduleBeforeRender(() => {
              (this.scheduledChangeDetectionFn = null), this.detectChanges();
            }));
        }
        recordInputChange(k, ce) {
          if (!this.implementsOnChanges) return;
          null === this.inputChanges && (this.inputChanges = {});
          const Le = this.inputChanges[k];
          if (Le) return void (Le.currentValue = ce);
          const Ze = this.unchangedInputs.has(k),
            ke = Ze ? void 0 : this.getInputValue(k);
          this.inputChanges[k] = new I.WD2(ke, ce, Ze);
        }
        detectChanges() {
          null !== this.componentRef &&
            (this.callNgOnChanges(this.componentRef),
            this.markViewForCheck(this.viewChangeDetectorRef),
            this.componentRef.changeDetectorRef.detectChanges());
        }
        runInZone(k) {
          return this.elementZone && Zone.current !== this.elementZone
            ? this.ngZone.run(k)
            : k();
        }
      }
      class Me extends HTMLElement {
        constructor() {
          super(...arguments), (this.ngElementEventsSubscription = null);
        }
      }
      var V = x(1868);
      const $ = [
        { path: '', redirectTo: '/home', pathMatch: 'full' },
        {
          path: '',
          component: (() => {
            class X {
              constructor() {}
              ngOnInit() {}
            }
            return (
              (X.ɵfac = function (ce) {
                return new (ce || X)();
              }),
              (X.ɵcmp = I.Xpm({
                type: X,
                selectors: [['app-base']],
                decls: 1,
                vars: 0,
                template: function (ce, Le) {
                  1 & ce && I._UZ(0, 'router-outlet');
                },
                dependencies: [V.lC],
              })),
              X
            );
          })(),
          children: [
            {
              path: '',
              loadChildren: () =>
                x
                  .e(668)
                  .then(x.bind(x, 668))
                  .then(X => X.PagesModule),
            },
          ],
        },
      ];
      let Y = (() => {
          class X {}
          return (
            (X.ɵfac = function (ce) {
              return new (ce || X)();
            }),
            (X.ɵmod = I.oAB({ type: X })),
            (X.ɵinj = I.cJS({ imports: [V.Bz.forRoot($), V.Bz] })),
            X
          );
        })(),
        W = (() => {
          class X {
            constructor() {
              this.title = 'chatbot-management-app';
            }
            ngOnInit() {}
          }
          return (
            (X.ɵfac = function (ce) {
              return new (ce || X)();
            }),
            (X.ɵcmp = I.Xpm({
              type: X,
              selectors: [['app-root']],
              decls: 1,
              vars: 0,
              template: function (ce, Le) {
                1 & ce && I._UZ(0, 'router-outlet');
              },
              dependencies: [V.lC],
            })),
            X
          );
        })();
      var ge = x(4466);
      let Ye = (() => {
        class X {
          constructor(ce) {
            this.injector = ce;
            const Le = (function xe(X, k) {
              const ce = (function Je(X, k) {
                  return k.get(I._Vd).resolveComponentFactory(X).inputs;
                })(X, k.injector),
                Le = k.strategyFactory || new we(X, k.injector),
                Ze = (function Ie(X) {
                  const k = {};
                  return (
                    X.forEach(({ propName: ce, templateName: Le }) => {
                      k[
                        (function K(X) {
                          return X.replace(
                            /[A-Z]/g,
                            k => `-${k.toLowerCase()}`
                          );
                        })(Le)
                      ] = ce;
                    }),
                    k
                  );
                })(ce);
              class ke extends Me {
                constructor(ot) {
                  super(), (this.injector = ot);
                }
                get ngElementStrategy() {
                  if (!this._ngElementStrategy) {
                    const ot = (this._ngElementStrategy = Le.create(
                      this.injector || k.injector
                    ));
                    ce.forEach(({ propName: tt }) => {
                      if (!this.hasOwnProperty(tt)) return;
                      const Ot = this[tt];
                      delete this[tt], ot.setInputValue(tt, Ot);
                    });
                  }
                  return this._ngElementStrategy;
                }
                attributeChangedCallback(ot, tt, Ot, Et) {
                  this.ngElementStrategy.setInputValue(Ze[ot], Ot);
                }
                connectedCallback() {
                  let ot = !1;
                  this.ngElementStrategy.events &&
                    (this.subscribeToEvents(), (ot = !0)),
                    this.ngElementStrategy.connect(this),
                    ot || this.subscribeToEvents();
                }
                disconnectedCallback() {
                  this._ngElementStrategy &&
                    this._ngElementStrategy.disconnect(),
                    this.ngElementEventsSubscription &&
                      (this.ngElementEventsSubscription.unsubscribe(),
                      (this.ngElementEventsSubscription = null));
                }
                subscribeToEvents() {
                  this.ngElementEventsSubscription =
                    this.ngElementStrategy.events.subscribe(ot => {
                      const tt = new CustomEvent(ot.name, { detail: ot.value });
                      this.dispatchEvent(tt);
                    });
                }
              }
              return (
                (ke.observedAttributes = Object.keys(Ze)),
                ce.forEach(({ propName: st }) => {
                  Object.defineProperty(ke.prototype, st, {
                    get() {
                      return this.ngElementStrategy.getInputValue(st);
                    },
                    set(ot) {
                      this.ngElementStrategy.setInputValue(st, ot);
                    },
                    configurable: !0,
                    enumerable: !0,
                  });
                }),
                ke
              );
            })(W, { injector: ce });
            customElements.define('chatbot-management-app', Le);
          }
          ngDoBootstrap(ce) {
            ce.bootstrap(W);
          }
        }
        return (
          (X.ɵfac = function (ce) {
            return new (ce || X)(I.LFG(I.zs3));
          }),
          (X.ɵmod = I.oAB({ type: X })),
          (X.ɵinj = I.cJS({ imports: [y.b2, Y, le.ez, ge.m] })),
          X
        );
      })();
      (0, I.G48)(),
        y
          .q6()
          .bootstrapModule(Ye)
          .catch(X => console.error(X));
    },
    8306: (Ke, pe, x) => {
      x.d(pe, { y: () => te });
      var y = x(2961),
        I = x(727),
        le = x(8822),
        ee = x(4671);
      var se = x(2416),
        ue = x(576),
        ye = x(2806);
      let te = (() => {
        class ve {
          constructor(Te) {
            Te && (this._subscribe = Te);
          }
          lift(Te) {
            const ae = new ve();
            return (ae.source = this), (ae.operator = Te), ae;
          }
          subscribe(Te, ae, Ie) {
            const Je = (function je(ve) {
              return (
                (ve && ve instanceof y.Lv) ||
                ((function J(ve) {
                  return (
                    ve &&
                    (0, ue.m)(ve.next) &&
                    (0, ue.m)(ve.error) &&
                    (0, ue.m)(ve.complete)
                  );
                })(ve) &&
                  (0, I.Nn)(ve))
              );
            })(Te)
              ? Te
              : new y.Hp(Te, ae, Ie);
            return (
              (0, ye.x)(() => {
                const { operator: rt, source: me } = this;
                Je.add(
                  rt
                    ? rt.call(Je, me)
                    : me
                    ? this._subscribe(Je)
                    : this._trySubscribe(Je)
                );
              }),
              Je
            );
          }
          _trySubscribe(Te) {
            try {
              return this._subscribe(Te);
            } catch (ae) {
              Te.error(ae);
            }
          }
          forEach(Te, ae) {
            return new (ae = K(ae))((Ie, Je) => {
              const rt = new y.Hp({
                next: me => {
                  try {
                    Te(me);
                  } catch (oe) {
                    Je(oe), rt.unsubscribe();
                  }
                },
                error: Je,
                complete: Ie,
              });
              this.subscribe(rt);
            });
          }
          _subscribe(Te) {
            var ae;
            return null === (ae = this.source) || void 0 === ae
              ? void 0
              : ae.subscribe(Te);
          }
          [le.L]() {
            return this;
          }
          pipe(...Te) {
            return (function re(ve) {
              return 0 === ve.length
                ? ee.y
                : 1 === ve.length
                ? ve[0]
                : function (Te) {
                    return ve.reduce((ae, Ie) => Ie(ae), Te);
                  };
            })(Te)(this);
          }
          toPromise(Te) {
            return new (Te = K(Te))((ae, Ie) => {
              let Je;
              this.subscribe(
                rt => (Je = rt),
                rt => Ie(rt),
                () => ae(Je)
              );
            });
          }
        }
        return (ve.create = de => new ve(de)), ve;
      })();
      function K(ve) {
        var de;
        return null !== (de = ve ?? se.v.Promise) && void 0 !== de
          ? de
          : Promise;
      }
    },
    7579: (Ke, pe, x) => {
      x.d(pe, { x: () => se });
      var y = x(8306),
        I = x(727);
      const ee = (0, x(3888).d)(
        ye =>
          function () {
            ye(this),
              (this.name = 'ObjectUnsubscribedError'),
              (this.message = 'object unsubscribed');
          }
      );
      var j = x(8737),
        re = x(2806);
      let se = (() => {
        class ye extends y.y {
          constructor() {
            super(),
              (this.closed = !1),
              (this.currentObservers = null),
              (this.observers = []),
              (this.isStopped = !1),
              (this.hasError = !1),
              (this.thrownError = null);
          }
          lift(K) {
            const J = new ue(this, this);
            return (J.operator = K), J;
          }
          _throwIfClosed() {
            if (this.closed) throw new ee();
          }
          next(K) {
            (0, re.x)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                this.currentObservers ||
                  (this.currentObservers = Array.from(this.observers));
                for (const J of this.currentObservers) J.next(K);
              }
            });
          }
          error(K) {
            (0, re.x)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                (this.hasError = this.isStopped = !0), (this.thrownError = K);
                const { observers: J } = this;
                for (; J.length; ) J.shift().error(K);
              }
            });
          }
          complete() {
            (0, re.x)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                this.isStopped = !0;
                const { observers: K } = this;
                for (; K.length; ) K.shift().complete();
              }
            });
          }
          unsubscribe() {
            (this.isStopped = this.closed = !0),
              (this.observers = this.currentObservers = null);
          }
          get observed() {
            var K;
            return (
              (null === (K = this.observers) || void 0 === K
                ? void 0
                : K.length) > 0
            );
          }
          _trySubscribe(K) {
            return this._throwIfClosed(), super._trySubscribe(K);
          }
          _subscribe(K) {
            return (
              this._throwIfClosed(),
              this._checkFinalizedStatuses(K),
              this._innerSubscribe(K)
            );
          }
          _innerSubscribe(K) {
            const { hasError: J, isStopped: je, observers: ve } = this;
            return J || je
              ? I.Lc
              : ((this.currentObservers = null),
                ve.push(K),
                new I.w0(() => {
                  (this.currentObservers = null), (0, j.P)(ve, K);
                }));
          }
          _checkFinalizedStatuses(K) {
            const { hasError: J, thrownError: je, isStopped: ve } = this;
            J ? K.error(je) : ve && K.complete();
          }
          asObservable() {
            const K = new y.y();
            return (K.source = this), K;
          }
        }
        return (ye.create = (te, K) => new ue(te, K)), ye;
      })();
      class ue extends se {
        constructor(te, K) {
          super(), (this.destination = te), (this.source = K);
        }
        next(te) {
          var K, J;
          null ===
            (J =
              null === (K = this.destination) || void 0 === K
                ? void 0
                : K.next) ||
            void 0 === J ||
            J.call(K, te);
        }
        error(te) {
          var K, J;
          null ===
            (J =
              null === (K = this.destination) || void 0 === K
                ? void 0
                : K.error) ||
            void 0 === J ||
            J.call(K, te);
        }
        complete() {
          var te, K;
          null ===
            (K =
              null === (te = this.destination) || void 0 === te
                ? void 0
                : te.complete) ||
            void 0 === K ||
            K.call(te);
        }
        _subscribe(te) {
          var K, J;
          return null !==
            (J =
              null === (K = this.source) || void 0 === K
                ? void 0
                : K.subscribe(te)) && void 0 !== J
            ? J
            : I.Lc;
        }
      }
    },
    2961: (Ke, pe, x) => {
      x.d(pe, { Hp: () => Te, Lv: () => J });
      var y = x(576),
        I = x(727),
        le = x(2416),
        ee = x(7849);
      function j() {}
      const re = ye('C', void 0, void 0);
      function ye(me, oe, we) {
        return { kind: me, value: oe, error: we };
      }
      var te = x(3410),
        K = x(2806);
      class J extends I.w0 {
        constructor(oe) {
          super(),
            (this.isStopped = !1),
            oe
              ? ((this.destination = oe), (0, I.Nn)(oe) && oe.add(this))
              : (this.destination = rt);
        }
        static create(oe, we, Ue) {
          return new Te(oe, we, Ue);
        }
        next(oe) {
          this.isStopped
            ? Je(
                (function ue(me) {
                  return ye('N', me, void 0);
                })(oe),
                this
              )
            : this._next(oe);
        }
        error(oe) {
          this.isStopped
            ? Je(
                (function se(me) {
                  return ye('E', void 0, me);
                })(oe),
                this
              )
            : ((this.isStopped = !0), this._error(oe));
        }
        complete() {
          this.isStopped
            ? Je(re, this)
            : ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed ||
            ((this.isStopped = !0),
            super.unsubscribe(),
            (this.destination = null));
        }
        _next(oe) {
          this.destination.next(oe);
        }
        _error(oe) {
          try {
            this.destination.error(oe);
          } finally {
            this.unsubscribe();
          }
        }
        _complete() {
          try {
            this.destination.complete();
          } finally {
            this.unsubscribe();
          }
        }
      }
      const je = Function.prototype.bind;
      function ve(me, oe) {
        return je.call(me, oe);
      }
      class de {
        constructor(oe) {
          this.partialObserver = oe;
        }
        next(oe) {
          const { partialObserver: we } = this;
          if (we.next)
            try {
              we.next(oe);
            } catch (Ue) {
              ae(Ue);
            }
        }
        error(oe) {
          const { partialObserver: we } = this;
          if (we.error)
            try {
              we.error(oe);
            } catch (Ue) {
              ae(Ue);
            }
          else ae(oe);
        }
        complete() {
          const { partialObserver: oe } = this;
          if (oe.complete)
            try {
              oe.complete();
            } catch (we) {
              ae(we);
            }
        }
      }
      class Te extends J {
        constructor(oe, we, Ue) {
          let Me;
          if ((super(), (0, y.m)(oe) || !oe))
            Me = {
              next: oe ?? void 0,
              error: we ?? void 0,
              complete: Ue ?? void 0,
            };
          else {
            let xe;
            this && le.v.useDeprecatedNextContext
              ? ((xe = Object.create(oe)),
                (xe.unsubscribe = () => this.unsubscribe()),
                (Me = {
                  next: oe.next && ve(oe.next, xe),
                  error: oe.error && ve(oe.error, xe),
                  complete: oe.complete && ve(oe.complete, xe),
                }))
              : (Me = oe);
          }
          this.destination = new de(Me);
        }
      }
      function ae(me) {
        le.v.useDeprecatedSynchronousErrorHandling
          ? (0, K.O)(me)
          : (0, ee.h)(me);
      }
      function Je(me, oe) {
        const { onStoppedNotification: we } = le.v;
        we && te.z.setTimeout(() => we(me, oe));
      }
      const rt = {
        closed: !0,
        next: j,
        error: function Ie(me) {
          throw me;
        },
        complete: j,
      };
    },
    727: (Ke, pe, x) => {
      x.d(pe, { Lc: () => re, w0: () => j, Nn: () => se });
      var y = x(576);
      const le = (0, x(3888).d)(
        ye =>
          function (K) {
            ye(this),
              (this.message = K
                ? `${K.length} errors occurred during unsubscription:\n${K.map(
                    (J, je) => `${je + 1}) ${J.toString()}`
                  ).join('\n  ')}`
                : ''),
              (this.name = 'UnsubscriptionError'),
              (this.errors = K);
          }
      );
      var ee = x(8737);
      class j {
        constructor(te) {
          (this.initialTeardown = te),
            (this.closed = !1),
            (this._parentage = null),
            (this._finalizers = null);
        }
        unsubscribe() {
          let te;
          if (!this.closed) {
            this.closed = !0;
            const { _parentage: K } = this;
            if (K)
              if (((this._parentage = null), Array.isArray(K)))
                for (const ve of K) ve.remove(this);
              else K.remove(this);
            const { initialTeardown: J } = this;
            if ((0, y.m)(J))
              try {
                J();
              } catch (ve) {
                te = ve instanceof le ? ve.errors : [ve];
              }
            const { _finalizers: je } = this;
            if (je) {
              this._finalizers = null;
              for (const ve of je)
                try {
                  ue(ve);
                } catch (de) {
                  (te = te ?? []),
                    de instanceof le
                      ? (te = [...te, ...de.errors])
                      : te.push(de);
                }
            }
            if (te) throw new le(te);
          }
        }
        add(te) {
          var K;
          if (te && te !== this)
            if (this.closed) ue(te);
            else {
              if (te instanceof j) {
                if (te.closed || te._hasParent(this)) return;
                te._addParent(this);
              }
              (this._finalizers =
                null !== (K = this._finalizers) && void 0 !== K ? K : []).push(
                te
              );
            }
        }
        _hasParent(te) {
          const { _parentage: K } = this;
          return K === te || (Array.isArray(K) && K.includes(te));
        }
        _addParent(te) {
          const { _parentage: K } = this;
          this._parentage = Array.isArray(K)
            ? (K.push(te), K)
            : K
            ? [K, te]
            : te;
        }
        _removeParent(te) {
          const { _parentage: K } = this;
          K === te
            ? (this._parentage = null)
            : Array.isArray(K) && (0, ee.P)(K, te);
        }
        remove(te) {
          const { _finalizers: K } = this;
          K && (0, ee.P)(K, te), te instanceof j && te._removeParent(this);
        }
      }
      j.EMPTY = (() => {
        const ye = new j();
        return (ye.closed = !0), ye;
      })();
      const re = j.EMPTY;
      function se(ye) {
        return (
          ye instanceof j ||
          (ye &&
            'closed' in ye &&
            (0, y.m)(ye.remove) &&
            (0, y.m)(ye.add) &&
            (0, y.m)(ye.unsubscribe))
        );
      }
      function ue(ye) {
        (0, y.m)(ye) ? ye() : ye.unsubscribe();
      }
    },
    2416: (Ke, pe, x) => {
      x.d(pe, { v: () => y });
      const y = {
        onUnhandledError: null,
        onStoppedNotification: null,
        Promise: void 0,
        useDeprecatedSynchronousErrorHandling: !1,
        useDeprecatedNextContext: !1,
      };
    },
    515: (Ke, pe, x) => {
      x.d(pe, { E: () => I });
      const I = new (x(8306).y)(j => j.complete());
    },
    2076: (Ke, pe, x) => {
      x.d(pe, { D: () => Ue });
      var y = x(8421),
        I = x(9672),
        le = x(4482),
        ee = x(5403);
      function j(Me, xe = 0) {
        return (0, le.e)((He, V) => {
          He.subscribe(
            (0, ee.x)(
              V,
              U => (0, I.f)(V, Me, () => V.next(U), xe),
              () => (0, I.f)(V, Me, () => V.complete(), xe),
              U => (0, I.f)(V, Me, () => V.error(U), xe)
            )
          );
        });
      }
      function re(Me, xe = 0) {
        return (0, le.e)((He, V) => {
          V.add(Me.schedule(() => He.subscribe(V), xe));
        });
      }
      var ye = x(8306),
        K = x(2202),
        J = x(576);
      function ve(Me, xe) {
        if (!Me) throw new Error('Iterable cannot be null');
        return new ye.y(He => {
          (0, I.f)(He, xe, () => {
            const V = Me[Symbol.asyncIterator]();
            (0, I.f)(
              He,
              xe,
              () => {
                V.next().then(U => {
                  U.done ? He.complete() : He.next(U.value);
                });
              },
              0,
              !0
            );
          });
        });
      }
      var de = x(3670),
        Te = x(8239),
        ae = x(1144),
        Ie = x(6495),
        Je = x(2206),
        rt = x(4532),
        me = x(3260);
      function Ue(Me, xe) {
        return xe
          ? (function we(Me, xe) {
              if (null != Me) {
                if ((0, de.c)(Me))
                  return (function se(Me, xe) {
                    return (0, y.Xf)(Me).pipe(re(xe), j(xe));
                  })(Me, xe);
                if ((0, ae.z)(Me))
                  return (function te(Me, xe) {
                    return new ye.y(He => {
                      let V = 0;
                      return xe.schedule(function () {
                        V === Me.length
                          ? He.complete()
                          : (He.next(Me[V++]), He.closed || this.schedule());
                      });
                    });
                  })(Me, xe);
                if ((0, Te.t)(Me))
                  return (function ue(Me, xe) {
                    return (0, y.Xf)(Me).pipe(re(xe), j(xe));
                  })(Me, xe);
                if ((0, Je.D)(Me)) return ve(Me, xe);
                if ((0, Ie.T)(Me))
                  return (function je(Me, xe) {
                    return new ye.y(He => {
                      let V;
                      return (
                        (0, I.f)(He, xe, () => {
                          (V = Me[K.h]()),
                            (0, I.f)(
                              He,
                              xe,
                              () => {
                                let U, $;
                                try {
                                  ({ value: U, done: $ } = V.next());
                                } catch (Y) {
                                  return void He.error(Y);
                                }
                                $ ? He.complete() : He.next(U);
                              },
                              0,
                              !0
                            );
                        }),
                        () => (0, J.m)(V?.return) && V.return()
                      );
                    });
                  })(Me, xe);
                if ((0, me.L)(Me))
                  return (function oe(Me, xe) {
                    return ve((0, me.Q)(Me), xe);
                  })(Me, xe);
              }
              throw (0, rt.z)(Me);
            })(Me, xe)
          : (0, y.Xf)(Me);
      }
    },
    8421: (Ke, pe, x) => {
      x.d(pe, { Xf: () => je });
      var y = x(655),
        I = x(1144),
        le = x(8239),
        ee = x(8306),
        j = x(3670),
        re = x(2206),
        se = x(4532),
        ue = x(6495),
        ye = x(3260),
        te = x(576),
        K = x(7849),
        J = x(8822);
      function je(me) {
        if (me instanceof ee.y) return me;
        if (null != me) {
          if ((0, j.c)(me))
            return (function ve(me) {
              return new ee.y(oe => {
                const we = me[J.L]();
                if ((0, te.m)(we.subscribe)) return we.subscribe(oe);
                throw new TypeError(
                  'Provided object does not correctly implement Symbol.observable'
                );
              });
            })(me);
          if ((0, I.z)(me))
            return (function de(me) {
              return new ee.y(oe => {
                for (let we = 0; we < me.length && !oe.closed; we++)
                  oe.next(me[we]);
                oe.complete();
              });
            })(me);
          if ((0, le.t)(me))
            return (function Te(me) {
              return new ee.y(oe => {
                me.then(
                  we => {
                    oe.closed || (oe.next(we), oe.complete());
                  },
                  we => oe.error(we)
                ).then(null, K.h);
              });
            })(me);
          if ((0, re.D)(me)) return Ie(me);
          if ((0, ue.T)(me))
            return (function ae(me) {
              return new ee.y(oe => {
                for (const we of me) if ((oe.next(we), oe.closed)) return;
                oe.complete();
              });
            })(me);
          if ((0, ye.L)(me))
            return (function Je(me) {
              return Ie((0, ye.Q)(me));
            })(me);
        }
        throw (0, se.z)(me);
      }
      function Ie(me) {
        return new ee.y(oe => {
          (function rt(me, oe) {
            var we, Ue, Me, xe;
            return (0, y.mG)(this, void 0, void 0, function* () {
              try {
                for (we = (0, y.KL)(me); !(Ue = yield we.next()).done; )
                  if ((oe.next(Ue.value), oe.closed)) return;
              } catch (He) {
                Me = { error: He };
              } finally {
                try {
                  Ue && !Ue.done && (xe = we.return) && (yield xe.call(we));
                } finally {
                  if (Me) throw Me.error;
                }
              }
              oe.complete();
            });
          })(me, oe).catch(we => oe.error(we));
        });
      }
    },
    6451: (Ke, pe, x) => {
      x.d(pe, { T: () => re });
      var y = x(8189),
        I = x(8421),
        le = x(515),
        ee = x(7669),
        j = x(2076);
      function re(...se) {
        const ue = (0, ee.yG)(se),
          ye = (0, ee._6)(se, 1 / 0),
          te = se;
        return te.length
          ? 1 === te.length
            ? (0, I.Xf)(te[0])
            : (0, y.J)(ye)((0, j.D)(te, ue))
          : le.E;
      }
    },
    5403: (Ke, pe, x) => {
      x.d(pe, { x: () => I });
      var y = x(2961);
      function I(ee, j, re, se, ue) {
        return new le(ee, j, re, se, ue);
      }
      class le extends y.Lv {
        constructor(j, re, se, ue, ye, te) {
          super(j),
            (this.onFinalize = ye),
            (this.shouldUnsubscribe = te),
            (this._next = re
              ? function (K) {
                  try {
                    re(K);
                  } catch (J) {
                    j.error(J);
                  }
                }
              : super._next),
            (this._error = ue
              ? function (K) {
                  try {
                    ue(K);
                  } catch (J) {
                    j.error(J);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : super._error),
            (this._complete = se
              ? function () {
                  try {
                    se();
                  } catch (K) {
                    j.error(K);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : super._complete);
        }
        unsubscribe() {
          var j;
          if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            const { closed: re } = this;
            super.unsubscribe(),
              !re &&
                (null === (j = this.onFinalize) ||
                  void 0 === j ||
                  j.call(this));
          }
        }
      }
    },
    9300: (Ke, pe, x) => {
      x.d(pe, { h: () => le });
      var y = x(4482),
        I = x(5403);
      function le(ee, j) {
        return (0, y.e)((re, se) => {
          let ue = 0;
          re.subscribe((0, I.x)(se, ye => ee.call(j, ye, ue++) && se.next(ye)));
        });
      }
    },
    4004: (Ke, pe, x) => {
      x.d(pe, { U: () => le });
      var y = x(4482),
        I = x(5403);
      function le(ee, j) {
        return (0, y.e)((re, se) => {
          let ue = 0;
          re.subscribe(
            (0, I.x)(se, ye => {
              se.next(ee.call(j, ye, ue++));
            })
          );
        });
      }
    },
    8189: (Ke, pe, x) => {
      x.d(pe, { J: () => le });
      var y = x(5577),
        I = x(4671);
      function le(ee = 1 / 0) {
        return (0, y.z)(I.y, ee);
      }
    },
    5577: (Ke, pe, x) => {
      x.d(pe, { z: () => ue });
      var y = x(4004),
        I = x(8421),
        le = x(4482),
        ee = x(9672),
        j = x(5403),
        se = x(576);
      function ue(ye, te, K = 1 / 0) {
        return (0, se.m)(te)
          ? ue(
              (J, je) =>
                (0, y.U)((ve, de) => te(J, ve, je, de))((0, I.Xf)(ye(J, je))),
              K
            )
          : ('number' == typeof te && (K = te),
            (0, le.e)((J, je) =>
              (function re(ye, te, K, J, je, ve, de, Te) {
                const ae = [];
                let Ie = 0,
                  Je = 0,
                  rt = !1;
                const me = () => {
                    rt && !ae.length && !Ie && te.complete();
                  },
                  oe = Ue => (Ie < J ? we(Ue) : ae.push(Ue)),
                  we = Ue => {
                    ve && te.next(Ue), Ie++;
                    let Me = !1;
                    (0, I.Xf)(K(Ue, Je++)).subscribe(
                      (0, j.x)(
                        te,
                        xe => {
                          je?.(xe), ve ? oe(xe) : te.next(xe);
                        },
                        () => {
                          Me = !0;
                        },
                        void 0,
                        () => {
                          if (Me)
                            try {
                              for (Ie--; ae.length && Ie < J; ) {
                                const xe = ae.shift();
                                de ? (0, ee.f)(te, de, () => we(xe)) : we(xe);
                              }
                              me();
                            } catch (xe) {
                              te.error(xe);
                            }
                        }
                      )
                    );
                  };
                return (
                  ye.subscribe(
                    (0, j.x)(te, oe, () => {
                      (rt = !0), me();
                    })
                  ),
                  () => {
                    Te?.();
                  }
                );
              })(J, je, ye, K)
            ));
      }
    },
    3099: (Ke, pe, x) => {
      x.d(pe, { B: () => re });
      var y = x(2076),
        I = x(5698),
        le = x(7579),
        ee = x(2961),
        j = x(4482);
      function re(ue = {}) {
        const {
          connector: ye = () => new le.x(),
          resetOnError: te = !0,
          resetOnComplete: K = !0,
          resetOnRefCountZero: J = !0,
        } = ue;
        return je => {
          let ve = null,
            de = null,
            Te = null,
            ae = 0,
            Ie = !1,
            Je = !1;
          const rt = () => {
              de?.unsubscribe(), (de = null);
            },
            me = () => {
              rt(), (ve = Te = null), (Ie = Je = !1);
            },
            oe = () => {
              const we = ve;
              me(), we?.unsubscribe();
            };
          return (0, j.e)((we, Ue) => {
            ae++, !Je && !Ie && rt();
            const Me = (Te = Te ?? ye());
            Ue.add(() => {
              ae--, 0 === ae && !Je && !Ie && (de = se(oe, J));
            }),
              Me.subscribe(Ue),
              ve ||
                ((ve = new ee.Hp({
                  next: xe => Me.next(xe),
                  error: xe => {
                    (Je = !0), rt(), (de = se(me, te, xe)), Me.error(xe);
                  },
                  complete: () => {
                    (Ie = !0), rt(), (de = se(me, K)), Me.complete();
                  },
                })),
                (0, y.D)(we).subscribe(ve));
          })(je);
        };
      }
      function se(ue, ye, ...te) {
        return !0 === ye
          ? (ue(), null)
          : !1 === ye
          ? null
          : ye(...te)
              .pipe((0, I.q)(1))
              .subscribe(() => ue());
      }
    },
    3900: (Ke, pe, x) => {
      x.d(pe, { w: () => ee });
      var y = x(8421),
        I = x(4482),
        le = x(5403);
      function ee(j, re) {
        return (0, I.e)((se, ue) => {
          let ye = null,
            te = 0,
            K = !1;
          const J = () => K && !ye && ue.complete();
          se.subscribe(
            (0, le.x)(
              ue,
              je => {
                ye?.unsubscribe();
                let ve = 0;
                const de = te++;
                (0, y.Xf)(j(je, de)).subscribe(
                  (ye = (0, le.x)(
                    ue,
                    Te => ue.next(re ? re(je, Te, de, ve++) : Te),
                    () => {
                      (ye = null), J();
                    }
                  ))
                );
              },
              () => {
                (K = !0), J();
              }
            )
          );
        });
      }
    },
    5698: (Ke, pe, x) => {
      x.d(pe, { q: () => ee });
      var y = x(515),
        I = x(4482),
        le = x(5403);
      function ee(j) {
        return j <= 0
          ? () => y.E
          : (0, I.e)((re, se) => {
              let ue = 0;
              re.subscribe(
                (0, le.x)(se, ye => {
                  ++ue <= j && (se.next(ye), j <= ue && se.complete());
                })
              );
            });
      }
    },
    3410: (Ke, pe, x) => {
      x.d(pe, { z: () => y });
      const y = {
        setTimeout(I, le, ...ee) {
          const { delegate: j } = y;
          return j?.setTimeout
            ? j.setTimeout(I, le, ...ee)
            : setTimeout(I, le, ...ee);
        },
        clearTimeout(I) {
          const { delegate: le } = y;
          return (le?.clearTimeout || clearTimeout)(I);
        },
        delegate: void 0,
      };
    },
    2202: (Ke, pe, x) => {
      x.d(pe, { h: () => I });
      const I = (function y() {
        return 'function' == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : '@@iterator';
      })();
    },
    8822: (Ke, pe, x) => {
      x.d(pe, { L: () => y });
      const y =
        ('function' == typeof Symbol && Symbol.observable) || '@@observable';
    },
    7669: (Ke, pe, x) => {
      x.d(pe, { _6: () => re, jO: () => ee, yG: () => j });
      var y = x(576);
      function le(se) {
        return se[se.length - 1];
      }
      function ee(se) {
        return (0, y.m)(le(se)) ? se.pop() : void 0;
      }
      function j(se) {
        return (function I(se) {
          return se && (0, y.m)(se.schedule);
        })(le(se))
          ? se.pop()
          : void 0;
      }
      function re(se, ue) {
        return 'number' == typeof le(se) ? se.pop() : ue;
      }
    },
    4742: (Ke, pe, x) => {
      x.d(pe, { D: () => j });
      const { isArray: y } = Array,
        { getPrototypeOf: I, prototype: le, keys: ee } = Object;
      function j(se) {
        if (1 === se.length) {
          const ue = se[0];
          if (y(ue)) return { args: ue, keys: null };
          if (
            (function re(se) {
              return se && 'object' == typeof se && I(se) === le;
            })(ue)
          ) {
            const ye = ee(ue);
            return { args: ye.map(te => ue[te]), keys: ye };
          }
        }
        return { args: se, keys: null };
      }
    },
    8737: (Ke, pe, x) => {
      function y(I, le) {
        if (I) {
          const ee = I.indexOf(le);
          0 <= ee && I.splice(ee, 1);
        }
      }
      x.d(pe, { P: () => y });
    },
    3888: (Ke, pe, x) => {
      function y(I) {
        const ee = I(j => {
          Error.call(j), (j.stack = new Error().stack);
        });
        return (
          (ee.prototype = Object.create(Error.prototype)),
          (ee.prototype.constructor = ee),
          ee
        );
      }
      x.d(pe, { d: () => y });
    },
    1810: (Ke, pe, x) => {
      function y(I, le) {
        return I.reduce((ee, j, re) => ((ee[j] = le[re]), ee), {});
      }
      x.d(pe, { n: () => y });
    },
    2806: (Ke, pe, x) => {
      x.d(pe, { O: () => ee, x: () => le });
      var y = x(2416);
      let I = null;
      function le(j) {
        if (y.v.useDeprecatedSynchronousErrorHandling) {
          const re = !I;
          if ((re && (I = { errorThrown: !1, error: null }), j(), re)) {
            const { errorThrown: se, error: ue } = I;
            if (((I = null), se)) throw ue;
          }
        } else j();
      }
      function ee(j) {
        y.v.useDeprecatedSynchronousErrorHandling &&
          I &&
          ((I.errorThrown = !0), (I.error = j));
      }
    },
    9672: (Ke, pe, x) => {
      function y(I, le, ee, j = 0, re = !1) {
        const se = le.schedule(function () {
          ee(), re ? I.add(this.schedule(null, j)) : this.unsubscribe();
        }, j);
        if ((I.add(se), !re)) return se;
      }
      x.d(pe, { f: () => y });
    },
    4671: (Ke, pe, x) => {
      function y(I) {
        return I;
      }
      x.d(pe, { y: () => y });
    },
    1144: (Ke, pe, x) => {
      x.d(pe, { z: () => y });
      const y = I => I && 'number' == typeof I.length && 'function' != typeof I;
    },
    2206: (Ke, pe, x) => {
      x.d(pe, { D: () => I });
      var y = x(576);
      function I(le) {
        return Symbol.asyncIterator && (0, y.m)(le?.[Symbol.asyncIterator]);
      }
    },
    576: (Ke, pe, x) => {
      function y(I) {
        return 'function' == typeof I;
      }
      x.d(pe, { m: () => y });
    },
    3670: (Ke, pe, x) => {
      x.d(pe, { c: () => le });
      var y = x(8822),
        I = x(576);
      function le(ee) {
        return (0, I.m)(ee[y.L]);
      }
    },
    6495: (Ke, pe, x) => {
      x.d(pe, { T: () => le });
      var y = x(2202),
        I = x(576);
      function le(ee) {
        return (0, I.m)(ee?.[y.h]);
      }
    },
    8239: (Ke, pe, x) => {
      x.d(pe, { t: () => I });
      var y = x(576);
      function I(le) {
        return (0, y.m)(le?.then);
      }
    },
    3260: (Ke, pe, x) => {
      x.d(pe, { L: () => ee, Q: () => le });
      var y = x(655),
        I = x(576);
      function le(j) {
        return (0, y.FC)(this, arguments, function* () {
          const se = j.getReader();
          try {
            for (;;) {
              const { value: ue, done: ye } = yield (0, y.qq)(se.read());
              if (ye) return yield (0, y.qq)(void 0);
              yield yield (0, y.qq)(ue);
            }
          } finally {
            se.releaseLock();
          }
        });
      }
      function ee(j) {
        return (0, I.m)(j?.getReader);
      }
    },
    4482: (Ke, pe, x) => {
      x.d(pe, { A: () => I, e: () => le });
      var y = x(576);
      function I(ee) {
        return (0, y.m)(ee?.lift);
      }
      function le(ee) {
        return j => {
          if (I(j))
            return j.lift(function (re) {
              try {
                return ee(re, this);
              } catch (se) {
                this.error(se);
              }
            });
          throw new TypeError('Unable to lift unknown Observable type');
        };
      }
    },
    3268: (Ke, pe, x) => {
      x.d(pe, { Z: () => ee });
      var y = x(4004);
      const { isArray: I } = Array;
      function ee(j) {
        return (0, y.U)(re =>
          (function le(j, re) {
            return I(re) ? j(...re) : j(re);
          })(j, re)
        );
      }
    },
    7849: (Ke, pe, x) => {
      x.d(pe, { h: () => le });
      var y = x(2416),
        I = x(3410);
      function le(ee) {
        I.z.setTimeout(() => {
          const { onUnhandledError: j } = y.v;
          if (!j) throw ee;
          j(ee);
        });
      }
    },
    4532: (Ke, pe, x) => {
      function y(I) {
        return new TypeError(
          `You provided ${
            null !== I && 'object' == typeof I ? 'an invalid object' : `'${I}'`
          } where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`
        );
      }
      x.d(pe, { z: () => y });
    },
    655: (Ke, pe, x) => {
      function ue(V, U, $, Y) {
        return new ($ || ($ = Promise))(function (ge, Ye) {
          function nt(ce) {
            try {
              k(Y.next(ce));
            } catch (Le) {
              Ye(Le);
            }
          }
          function X(ce) {
            try {
              k(Y.throw(ce));
            } catch (Le) {
              Ye(Le);
            }
          }
          function k(ce) {
            ce.done
              ? ge(ce.value)
              : (function W(ge) {
                  return ge instanceof $
                    ? ge
                    : new $(function (Ye) {
                        Ye(ge);
                      });
                })(ce.value).then(nt, X);
          }
          k((Y = Y.apply(V, U || [])).next());
        });
      }
      function ae(V) {
        return this instanceof ae ? ((this.v = V), this) : new ae(V);
      }
      function Ie(V, U, $) {
        if (!Symbol.asyncIterator)
          throw new TypeError('Symbol.asyncIterator is not defined.');
        var W,
          Y = $.apply(V, U || []),
          ge = [];
        return (
          (W = {}),
          Ye('next'),
          Ye('throw'),
          Ye('return'),
          (W[Symbol.asyncIterator] = function () {
            return this;
          }),
          W
        );
        function Ye(Ze) {
          Y[Ze] &&
            (W[Ze] = function (ke) {
              return new Promise(function (st, ot) {
                ge.push([Ze, ke, st, ot]) > 1 || nt(Ze, ke);
              });
            });
        }
        function nt(Ze, ke) {
          try {
            !(function X(Ze) {
              Ze.value instanceof ae
                ? Promise.resolve(Ze.value.v).then(k, ce)
                : Le(ge[0][2], Ze);
            })(Y[Ze](ke));
          } catch (st) {
            Le(ge[0][3], st);
          }
        }
        function k(Ze) {
          nt('next', Ze);
        }
        function ce(Ze) {
          nt('throw', Ze);
        }
        function Le(Ze, ke) {
          Ze(ke), ge.shift(), ge.length && nt(ge[0][0], ge[0][1]);
        }
      }
      function rt(V) {
        if (!Symbol.asyncIterator)
          throw new TypeError('Symbol.asyncIterator is not defined.');
        var $,
          U = V[Symbol.asyncIterator];
        return U
          ? U.call(V)
          : ((V = (function J(V) {
              var U = 'function' == typeof Symbol && Symbol.iterator,
                $ = U && V[U],
                Y = 0;
              if ($) return $.call(V);
              if (V && 'number' == typeof V.length)
                return {
                  next: function () {
                    return (
                      V && Y >= V.length && (V = void 0),
                      { value: V && V[Y++], done: !V }
                    );
                  },
                };
              throw new TypeError(
                U
                  ? 'Object is not iterable.'
                  : 'Symbol.iterator is not defined.'
              );
            })(V)),
            ($ = {}),
            Y('next'),
            Y('throw'),
            Y('return'),
            ($[Symbol.asyncIterator] = function () {
              return this;
            }),
            $);
        function Y(ge) {
          $[ge] =
            V[ge] &&
            function (Ye) {
              return new Promise(function (nt, X) {
                !(function W(ge, Ye, nt, X) {
                  Promise.resolve(X).then(function (k) {
                    ge({ value: k, done: nt });
                  }, Ye);
                })(nt, X, (Ye = V[ge](Ye)).done, Ye.value);
              });
            };
        }
      }
      x.d(pe, { FC: () => Ie, KL: () => rt, mG: () => ue, qq: () => ae });
    },
    6895: (Ke, pe, x) => {
      x.d(pe, {
        Do: () => me,
        EM: () => uo,
        HT: () => j,
        JF: () => It,
        K0: () => se,
        Mx: () => zo,
        O5: () => Qn,
        S$: () => ae,
        V_: () => te,
        Ye: () => oe,
        b0: () => rt,
        bD: () => Yr,
        ez: () => Ir,
        lw: () => ue,
        mk: () => Er,
        mr: () => Je,
        q: () => le,
        sg: () => ar,
        w_: () => re,
      });
      var y = x(4650);
      let I = null;
      function le() {
        return I;
      }
      function j(g) {
        I || (I = g);
      }
      class re {}
      const se = new y.OlP('DocumentToken');
      let ue = (() => {
        class g {
          historyGo(m) {
            throw new Error('Not implemented');
          }
        }
        return (
          (g.ɵfac = function (m) {
            return new (m || g)();
          }),
          (g.ɵprov = y.Yz7({
            token: g,
            factory: function () {
              return (function ye() {
                return (0, y.LFG)(K);
              })();
            },
            providedIn: 'platform',
          })),
          g
        );
      })();
      const te = new y.OlP('Location Initialized');
      let K = (() => {
        class g extends ue {
          constructor(m) {
            super(), (this._doc = m), this._init();
          }
          _init() {
            (this.location = window.location), (this._history = window.history);
          }
          getBaseHrefFromDOM() {
            return le().getBaseHref(this._doc);
          }
          onPopState(m) {
            const M = le().getGlobalEventTarget(this._doc, 'window');
            return (
              M.addEventListener('popstate', m, !1),
              () => M.removeEventListener('popstate', m)
            );
          }
          onHashChange(m) {
            const M = le().getGlobalEventTarget(this._doc, 'window');
            return (
              M.addEventListener('hashchange', m, !1),
              () => M.removeEventListener('hashchange', m)
            );
          }
          get href() {
            return this.location.href;
          }
          get protocol() {
            return this.location.protocol;
          }
          get hostname() {
            return this.location.hostname;
          }
          get port() {
            return this.location.port;
          }
          get pathname() {
            return this.location.pathname;
          }
          get search() {
            return this.location.search;
          }
          get hash() {
            return this.location.hash;
          }
          set pathname(m) {
            this.location.pathname = m;
          }
          pushState(m, M, P) {
            J() ? this._history.pushState(m, M, P) : (this.location.hash = P);
          }
          replaceState(m, M, P) {
            J()
              ? this._history.replaceState(m, M, P)
              : (this.location.hash = P);
          }
          forward() {
            this._history.forward();
          }
          back() {
            this._history.back();
          }
          historyGo(m = 0) {
            this._history.go(m);
          }
          getState() {
            return this._history.state;
          }
        }
        return (
          (g.ɵfac = function (m) {
            return new (m || g)(y.LFG(se));
          }),
          (g.ɵprov = y.Yz7({
            token: g,
            factory: function () {
              return (function je() {
                return new K((0, y.LFG)(se));
              })();
            },
            providedIn: 'platform',
          })),
          g
        );
      })();
      function J() {
        return !!window.history.pushState;
      }
      function ve(g, E) {
        if (0 == g.length) return E;
        if (0 == E.length) return g;
        let m = 0;
        return (
          g.endsWith('/') && m++,
          E.startsWith('/') && m++,
          2 == m ? g + E.substring(1) : 1 == m ? g + E : g + '/' + E
        );
      }
      function de(g) {
        const E = g.match(/#|\?|$/),
          m = (E && E.index) || g.length;
        return g.slice(0, m - ('/' === g[m - 1] ? 1 : 0)) + g.slice(m);
      }
      function Te(g) {
        return g && '?' !== g[0] ? '?' + g : g;
      }
      let ae = (() => {
        class g {
          historyGo(m) {
            throw new Error('Not implemented');
          }
        }
        return (
          (g.ɵfac = function (m) {
            return new (m || g)();
          }),
          (g.ɵprov = y.Yz7({
            token: g,
            factory: function () {
              return (function Ie() {
                const g = (0, y.LFG)(se).location;
                return new rt((0, y.LFG)(ue), (g && g.origin) || '');
              })();
            },
            providedIn: 'root',
          })),
          g
        );
      })();
      const Je = new y.OlP('appBaseHref');
      let rt = (() => {
          class g extends ae {
            constructor(m, M) {
              if (
                (super(),
                (this._platformLocation = m),
                (this._removeListenerFns = []),
                null == M && (M = this._platformLocation.getBaseHrefFromDOM()),
                null == M)
              )
                throw new Error(
                  'No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.'
                );
              this._baseHref = M;
            }
            ngOnDestroy() {
              for (; this._removeListenerFns.length; )
                this._removeListenerFns.pop()();
            }
            onPopState(m) {
              this._removeListenerFns.push(
                this._platformLocation.onPopState(m),
                this._platformLocation.onHashChange(m)
              );
            }
            getBaseHref() {
              return this._baseHref;
            }
            prepareExternalUrl(m) {
              return ve(this._baseHref, m);
            }
            path(m = !1) {
              const M =
                  this._platformLocation.pathname +
                  Te(this._platformLocation.search),
                P = this._platformLocation.hash;
              return P && m ? `${M}${P}` : M;
            }
            pushState(m, M, P, G) {
              const Z = this.prepareExternalUrl(P + Te(G));
              this._platformLocation.pushState(m, M, Z);
            }
            replaceState(m, M, P, G) {
              const Z = this.prepareExternalUrl(P + Te(G));
              this._platformLocation.replaceState(m, M, Z);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
            getState() {
              return this._platformLocation.getState();
            }
            historyGo(m = 0) {
              this._platformLocation.historyGo?.(m);
            }
          }
          return (
            (g.ɵfac = function (m) {
              return new (m || g)(y.LFG(ue), y.LFG(Je, 8));
            }),
            (g.ɵprov = y.Yz7({ token: g, factory: g.ɵfac })),
            g
          );
        })(),
        me = (() => {
          class g extends ae {
            constructor(m, M) {
              super(),
                (this._platformLocation = m),
                (this._baseHref = ''),
                (this._removeListenerFns = []),
                null != M && (this._baseHref = M);
            }
            ngOnDestroy() {
              for (; this._removeListenerFns.length; )
                this._removeListenerFns.pop()();
            }
            onPopState(m) {
              this._removeListenerFns.push(
                this._platformLocation.onPopState(m),
                this._platformLocation.onHashChange(m)
              );
            }
            getBaseHref() {
              return this._baseHref;
            }
            path(m = !1) {
              let M = this._platformLocation.hash;
              return null == M && (M = '#'), M.length > 0 ? M.substring(1) : M;
            }
            prepareExternalUrl(m) {
              const M = ve(this._baseHref, m);
              return M.length > 0 ? '#' + M : M;
            }
            pushState(m, M, P, G) {
              let Z = this.prepareExternalUrl(P + Te(G));
              0 == Z.length && (Z = this._platformLocation.pathname),
                this._platformLocation.pushState(m, M, Z);
            }
            replaceState(m, M, P, G) {
              let Z = this.prepareExternalUrl(P + Te(G));
              0 == Z.length && (Z = this._platformLocation.pathname),
                this._platformLocation.replaceState(m, M, Z);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
            getState() {
              return this._platformLocation.getState();
            }
            historyGo(m = 0) {
              this._platformLocation.historyGo?.(m);
            }
          }
          return (
            (g.ɵfac = function (m) {
              return new (m || g)(y.LFG(ue), y.LFG(Je, 8));
            }),
            (g.ɵprov = y.Yz7({ token: g, factory: g.ɵfac })),
            g
          );
        })(),
        oe = (() => {
          class g {
            constructor(m) {
              (this._subject = new y.vpe()),
                (this._urlChangeListeners = []),
                (this._urlChangeSubscription = null),
                (this._locationStrategy = m);
              const M = this._locationStrategy.getBaseHref();
              (this._baseHref = de(Me(M))),
                this._locationStrategy.onPopState(P => {
                  this._subject.emit({
                    url: this.path(!0),
                    pop: !0,
                    state: P.state,
                    type: P.type,
                  });
                });
            }
            ngOnDestroy() {
              this._urlChangeSubscription?.unsubscribe(),
                (this._urlChangeListeners = []);
            }
            path(m = !1) {
              return this.normalize(this._locationStrategy.path(m));
            }
            getState() {
              return this._locationStrategy.getState();
            }
            isCurrentPathEqualTo(m, M = '') {
              return this.path() == this.normalize(m + Te(M));
            }
            normalize(m) {
              return g.stripTrailingSlash(
                (function Ue(g, E) {
                  return g && E.startsWith(g) ? E.substring(g.length) : E;
                })(this._baseHref, Me(m))
              );
            }
            prepareExternalUrl(m) {
              return (
                m && '/' !== m[0] && (m = '/' + m),
                this._locationStrategy.prepareExternalUrl(m)
              );
            }
            go(m, M = '', P = null) {
              this._locationStrategy.pushState(P, '', m, M),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(m + Te(M)),
                  P
                );
            }
            replaceState(m, M = '', P = null) {
              this._locationStrategy.replaceState(P, '', m, M),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(m + Te(M)),
                  P
                );
            }
            forward() {
              this._locationStrategy.forward();
            }
            back() {
              this._locationStrategy.back();
            }
            historyGo(m = 0) {
              this._locationStrategy.historyGo?.(m);
            }
            onUrlChange(m) {
              return (
                this._urlChangeListeners.push(m),
                this._urlChangeSubscription ||
                  (this._urlChangeSubscription = this.subscribe(M => {
                    this._notifyUrlChangeListeners(M.url, M.state);
                  })),
                () => {
                  const M = this._urlChangeListeners.indexOf(m);
                  this._urlChangeListeners.splice(M, 1),
                    0 === this._urlChangeListeners.length &&
                      (this._urlChangeSubscription?.unsubscribe(),
                      (this._urlChangeSubscription = null));
                }
              );
            }
            _notifyUrlChangeListeners(m = '', M) {
              this._urlChangeListeners.forEach(P => P(m, M));
            }
            subscribe(m, M, P) {
              return this._subject.subscribe({
                next: m,
                error: M,
                complete: P,
              });
            }
          }
          return (
            (g.normalizeQueryParams = Te),
            (g.joinWithSlash = ve),
            (g.stripTrailingSlash = de),
            (g.ɵfac = function (m) {
              return new (m || g)(y.LFG(ae));
            }),
            (g.ɵprov = y.Yz7({
              token: g,
              factory: function () {
                return (function we() {
                  return new oe((0, y.LFG)(ae));
                })();
              },
              providedIn: 'root',
            })),
            g
          );
        })();
      function Me(g) {
        return g.replace(/\/index.html$/, '');
      }
      function zo(g, E) {
        E = encodeURIComponent(E);
        for (const m of g.split(';')) {
          const M = m.indexOf('='),
            [P, G] = -1 == M ? [m, ''] : [m.slice(0, M), m.slice(M + 1)];
          if (P.trim() === E) return decodeURIComponent(G);
        }
        return null;
      }
      let Er = (() => {
        class g {
          constructor(m, M, P, G) {
            (this._iterableDiffers = m),
              (this._keyValueDiffers = M),
              (this._ngEl = P),
              (this._renderer = G),
              (this._iterableDiffer = null),
              (this._keyValueDiffer = null),
              (this._initialClasses = []),
              (this._rawClass = null);
          }
          set klass(m) {
            this._removeClasses(this._initialClasses),
              (this._initialClasses =
                'string' == typeof m ? m.split(/\s+/) : []),
              this._applyClasses(this._initialClasses),
              this._applyClasses(this._rawClass);
          }
          set ngClass(m) {
            this._removeClasses(this._rawClass),
              this._applyClasses(this._initialClasses),
              (this._iterableDiffer = null),
              (this._keyValueDiffer = null),
              (this._rawClass = 'string' == typeof m ? m.split(/\s+/) : m),
              this._rawClass &&
                ((0, y.sIi)(this._rawClass)
                  ? (this._iterableDiffer = this._iterableDiffers
                      .find(this._rawClass)
                      .create())
                  : (this._keyValueDiffer = this._keyValueDiffers
                      .find(this._rawClass)
                      .create()));
          }
          ngDoCheck() {
            if (this._iterableDiffer) {
              const m = this._iterableDiffer.diff(this._rawClass);
              m && this._applyIterableChanges(m);
            } else if (this._keyValueDiffer) {
              const m = this._keyValueDiffer.diff(this._rawClass);
              m && this._applyKeyValueChanges(m);
            }
          }
          _applyKeyValueChanges(m) {
            m.forEachAddedItem(M => this._toggleClass(M.key, M.currentValue)),
              m.forEachChangedItem(M =>
                this._toggleClass(M.key, M.currentValue)
              ),
              m.forEachRemovedItem(M => {
                M.previousValue && this._toggleClass(M.key, !1);
              });
          }
          _applyIterableChanges(m) {
            m.forEachAddedItem(M => {
              if ('string' != typeof M.item)
                throw new Error(
                  `NgClass can only toggle CSS classes expressed as strings, got ${(0,
                  y.AaK)(M.item)}`
                );
              this._toggleClass(M.item, !0);
            }),
              m.forEachRemovedItem(M => this._toggleClass(M.item, !1));
          }
          _applyClasses(m) {
            m &&
              (Array.isArray(m) || m instanceof Set
                ? m.forEach(M => this._toggleClass(M, !0))
                : Object.keys(m).forEach(M => this._toggleClass(M, !!m[M])));
          }
          _removeClasses(m) {
            m &&
              (Array.isArray(m) || m instanceof Set
                ? m.forEach(M => this._toggleClass(M, !1))
                : Object.keys(m).forEach(M => this._toggleClass(M, !1)));
          }
          _toggleClass(m, M) {
            (m = m.trim()) &&
              m.split(/\s+/g).forEach(P => {
                M
                  ? this._renderer.addClass(this._ngEl.nativeElement, P)
                  : this._renderer.removeClass(this._ngEl.nativeElement, P);
              });
          }
        }
        return (
          (g.ɵfac = function (m) {
            return new (m || g)(
              y.Y36(y.ZZ4),
              y.Y36(y.aQg),
              y.Y36(y.SBq),
              y.Y36(y.Qsj)
            );
          }),
          (g.ɵdir = y.lG2({
            type: g,
            selectors: [['', 'ngClass', '']],
            inputs: { klass: ['class', 'klass'], ngClass: 'ngClass' },
          })),
          g
        );
      })();
      class Bn {
        constructor(E, m, M, P) {
          (this.$implicit = E),
            (this.ngForOf = m),
            (this.index = M),
            (this.count = P);
        }
        get first() {
          return 0 === this.index;
        }
        get last() {
          return this.index === this.count - 1;
        }
        get even() {
          return this.index % 2 == 0;
        }
        get odd() {
          return !this.even;
        }
      }
      let ar = (() => {
        class g {
          constructor(m, M, P) {
            (this._viewContainer = m),
              (this._template = M),
              (this._differs = P),
              (this._ngForOf = null),
              (this._ngForOfDirty = !0),
              (this._differ = null);
          }
          set ngForOf(m) {
            (this._ngForOf = m), (this._ngForOfDirty = !0);
          }
          set ngForTrackBy(m) {
            this._trackByFn = m;
          }
          get ngForTrackBy() {
            return this._trackByFn;
          }
          set ngForTemplate(m) {
            m && (this._template = m);
          }
          ngDoCheck() {
            if (this._ngForOfDirty) {
              this._ngForOfDirty = !1;
              const m = this._ngForOf;
              !this._differ &&
                m &&
                (this._differ = this._differs
                  .find(m)
                  .create(this.ngForTrackBy));
            }
            if (this._differ) {
              const m = this._differ.diff(this._ngForOf);
              m && this._applyChanges(m);
            }
          }
          _applyChanges(m) {
            const M = this._viewContainer;
            m.forEachOperation((P, G, Z) => {
              if (null == P.previousIndex)
                M.createEmbeddedView(
                  this._template,
                  new Bn(P.item, this._ngForOf, -1, -1),
                  null === Z ? void 0 : Z
                );
              else if (null == Z) M.remove(null === G ? void 0 : G);
              else if (null !== G) {
                const be = M.get(G);
                M.move(be, Z), jn(be, P);
              }
            });
            for (let P = 0, G = M.length; P < G; P++) {
              const be = M.get(P).context;
              (be.index = P), (be.count = G), (be.ngForOf = this._ngForOf);
            }
            m.forEachIdentityChange(P => {
              jn(M.get(P.currentIndex), P);
            });
          }
          static ngTemplateContextGuard(m, M) {
            return !0;
          }
        }
        return (
          (g.ɵfac = function (m) {
            return new (m || g)(y.Y36(y.s_b), y.Y36(y.Rgc), y.Y36(y.ZZ4));
          }),
          (g.ɵdir = y.lG2({
            type: g,
            selectors: [['', 'ngFor', '', 'ngForOf', '']],
            inputs: {
              ngForOf: 'ngForOf',
              ngForTrackBy: 'ngForTrackBy',
              ngForTemplate: 'ngForTemplate',
            },
          })),
          g
        );
      })();
      function jn(g, E) {
        g.context.$implicit = E.item;
      }
      let Qn = (() => {
        class g {
          constructor(m, M) {
            (this._viewContainer = m),
              (this._context = new Pt()),
              (this._thenTemplateRef = null),
              (this._elseTemplateRef = null),
              (this._thenViewRef = null),
              (this._elseViewRef = null),
              (this._thenTemplateRef = M);
          }
          set ngIf(m) {
            (this._context.$implicit = this._context.ngIf = m),
              this._updateView();
          }
          set ngIfThen(m) {
            Yt('ngIfThen', m),
              (this._thenTemplateRef = m),
              (this._thenViewRef = null),
              this._updateView();
          }
          set ngIfElse(m) {
            Yt('ngIfElse', m),
              (this._elseTemplateRef = m),
              (this._elseViewRef = null),
              this._updateView();
          }
          _updateView() {
            this._context.$implicit
              ? this._thenViewRef ||
                (this._viewContainer.clear(),
                (this._elseViewRef = null),
                this._thenTemplateRef &&
                  (this._thenViewRef = this._viewContainer.createEmbeddedView(
                    this._thenTemplateRef,
                    this._context
                  )))
              : this._elseViewRef ||
                (this._viewContainer.clear(),
                (this._thenViewRef = null),
                this._elseTemplateRef &&
                  (this._elseViewRef = this._viewContainer.createEmbeddedView(
                    this._elseTemplateRef,
                    this._context
                  )));
          }
          static ngTemplateContextGuard(m, M) {
            return !0;
          }
        }
        return (
          (g.ɵfac = function (m) {
            return new (m || g)(y.Y36(y.s_b), y.Y36(y.Rgc));
          }),
          (g.ɵdir = y.lG2({
            type: g,
            selectors: [['', 'ngIf', '']],
            inputs: {
              ngIf: 'ngIf',
              ngIfThen: 'ngIfThen',
              ngIfElse: 'ngIfElse',
            },
          })),
          g
        );
      })();
      class Pt {
        constructor() {
          (this.$implicit = null), (this.ngIf = null);
        }
      }
      function Yt(g, E) {
        if (E && !E.createEmbeddedView)
          throw new Error(
            `${g} must be a TemplateRef, but received '${(0, y.AaK)(E)}'.`
          );
      }
      let Ir = (() => {
        class g {}
        return (
          (g.ɵfac = function (m) {
            return new (m || g)();
          }),
          (g.ɵmod = y.oAB({ type: g })),
          (g.ɵinj = y.cJS({})),
          g
        );
      })();
      const Yr = 'browser';
      let uo = (() => {
        class g {}
        return (
          (g.ɵprov = (0, y.Yz7)({
            token: g,
            providedIn: 'root',
            factory: () => new Zo((0, y.LFG)(se), window),
          })),
          g
        );
      })();
      class Zo {
        constructor(E, m) {
          (this.document = E), (this.window = m), (this.offset = () => [0, 0]);
        }
        setOffset(E) {
          this.offset = Array.isArray(E) ? () => E : E;
        }
        getScrollPosition() {
          return this.supportsScrolling()
            ? [this.window.pageXOffset, this.window.pageYOffset]
            : [0, 0];
        }
        scrollToPosition(E) {
          this.supportsScrolling() && this.window.scrollTo(E[0], E[1]);
        }
        scrollToAnchor(E) {
          if (!this.supportsScrolling()) return;
          const m = (function Pn(g, E) {
            const m = g.getElementById(E) || g.getElementsByName(E)[0];
            if (m) return m;
            if (
              'function' == typeof g.createTreeWalker &&
              g.body &&
              (g.body.createShadowRoot || g.body.attachShadow)
            ) {
              const M = g.createTreeWalker(g.body, NodeFilter.SHOW_ELEMENT);
              let P = M.currentNode;
              for (; P; ) {
                const G = P.shadowRoot;
                if (G) {
                  const Z =
                    G.getElementById(E) || G.querySelector(`[name="${E}"]`);
                  if (Z) return Z;
                }
                P = M.nextNode();
              }
            }
            return null;
          })(this.document, E);
          m && (this.scrollToElement(m), m.focus());
        }
        setHistoryScrollRestoration(E) {
          if (this.supportScrollRestoration()) {
            const m = this.window.history;
            m && m.scrollRestoration && (m.scrollRestoration = E);
          }
        }
        scrollToElement(E) {
          const m = E.getBoundingClientRect(),
            M = m.left + this.window.pageXOffset,
            P = m.top + this.window.pageYOffset,
            G = this.offset();
          this.window.scrollTo(M - G[0], P - G[1]);
        }
        supportScrollRestoration() {
          try {
            if (!this.supportsScrolling()) return !1;
            const E =
              vt(this.window.history) ||
              vt(Object.getPrototypeOf(this.window.history));
            return !(!E || (!E.writable && !E.set));
          } catch {
            return !1;
          }
        }
        supportsScrolling() {
          try {
            return (
              !!this.window &&
              !!this.window.scrollTo &&
              'pageXOffset' in this.window
            );
          } catch {
            return !1;
          }
        }
      }
      function vt(g) {
        return Object.getOwnPropertyDescriptor(g, 'scrollRestoration');
      }
      class It {}
    },
    4650: (Ke, pe, x) => {
      x.d(pe, {
        $8M: () => l,
        $Z: () => ef,
        AFp: () => vg,
        AaK: () => ue,
        BQk: () => Ta,
        CRH: () => Kp,
        CZH: () => Ha,
        CqO: () => ih,
        D6c: () => _w,
        EJc: () => LE,
        F4k: () => oh,
        FYo: () => Rp,
        FiY: () => ss,
        G48: () => nw,
        Gf: () => Yp,
        GfV: () => Op,
        Gpc: () => K,
        JOm: () => xr,
        LFG: () => qt,
        LSH: () => Dl,
        Lbi: () => OE,
        MGl: () => xa,
        MMx: () => Gu,
        NdJ: () => Tu,
        O4$: () => Yi,
        OlP: () => Ae,
        PXZ: () => QE,
        Q6J: () => bu,
        QGY: () => Su,
        QP$: () => Vi,
        Qsj: () => _C,
        R0b: () => Yn,
        RDi: () => bo,
        Rgc: () => Fs,
        SBq: () => As,
        Sil: () => kE,
        Suo: () => qp,
        TTD: () => zr,
        TgZ: () => Ia,
        WD2: () => Zn,
        XFs: () => Ne,
        Xpm: () => An,
        Y36: () => vi,
        YKP: () => xp,
        YNc: () => nh,
        Yjl: () => sr,
        Yz7: () => ke,
        ZZ4: () => hc,
        _Bn: () => Sp,
        _UZ: () => Au,
        _Vd: () => Is,
        _c5: () => vw,
        _uU: () => Oh,
        aQg: () => pc,
        c2e: () => PE,
        cJS: () => ot,
        cg1: () => Ou,
        dDg: () => WE,
        deG: () => Se,
        dqk: () => Ce,
        eFA: () => xg,
        ekj: () => Fu,
        eoX: () => Ig,
        g9A: () => _g,
        h0i: () => Uo,
        hGG: () => Dw,
        hM9: () => xC,
        hij: () => Ra,
        iGM: () => Wp,
        ifc: () => at,
        ip1: () => yg,
        kL8: () => ep,
        lG2: () => $t,
        lqb: () => gi,
        lri: () => Mg,
        n5z: () => Xi,
        oAB: () => fn,
        oxw: () => uh,
        qLn: () => hs,
        qOj: () => Cu,
        qZA: () => Aa,
        rWj: () => bg,
        sBO: () => rw,
        sIi: () => Ds,
        s_b: () => Ba,
        soG: () => $a,
        tBr: () => sa,
        tb: () => Cg,
        tp0: () => as,
        uIk: () => Mu,
        vHH: () => de,
        vpe: () => Lr,
        wAp: () => ze,
        xp6: () => Rd,
        ynx: () => Sa,
        z2F: () => Ga,
        zSh: () => Ul,
        zs3: () => Fr,
      });
      var y = x(7579),
        I = x(727),
        le = x(8306),
        ee = x(6451),
        j = x(3099);
      function re(e) {
        for (let t in e) if (e[t] === re) return t;
        throw Error('Could not find renamed property on target object.');
      }
      function se(e, t) {
        for (const n in t)
          t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]);
      }
      function ue(e) {
        if ('string' == typeof e) return e;
        if (Array.isArray(e)) return '[' + e.map(ue).join(', ') + ']';
        if (null == e) return '' + e;
        if (e.overriddenName) return `${e.overriddenName}`;
        if (e.name) return `${e.name}`;
        const t = e.toString();
        if (null == t) return '' + t;
        const n = t.indexOf('\n');
        return -1 === n ? t : t.substring(0, n);
      }
      function ye(e, t) {
        return null == e || '' === e
          ? null === t
            ? ''
            : t
          : null == t || '' === t
          ? e
          : e + ' ' + t;
      }
      const te = re({ __forward_ref__: re });
      function K(e) {
        return (
          (e.__forward_ref__ = K),
          (e.toString = function () {
            return ue(this());
          }),
          e
        );
      }
      function J(e) {
        return je(e) ? e() : e;
      }
      function je(e) {
        return (
          'function' == typeof e &&
          e.hasOwnProperty(te) &&
          e.__forward_ref__ === K
        );
      }
      class de extends Error {
        constructor(t, n) {
          super(
            (function Te(e, t) {
              return `NG0${Math.abs(e)}${t ? ': ' + t.trim() : ''}`;
            })(t, n)
          ),
            (this.code = t);
        }
      }
      function ae(e) {
        return 'string' == typeof e ? e : null == e ? '' : String(e);
      }
      function oe(e, t) {
        throw new de(-201, !1);
      }
      function X(e, t) {
        null == e &&
          (function k(e, t, n, r) {
            throw new Error(
              `ASSERTION ERROR: ${e}` +
                (null == r ? '' : ` [Expected=> ${n} ${r} ${t} <=Actual]`)
            );
          })(t, e, null, '!=');
      }
      function ke(e) {
        return {
          token: e.token,
          providedIn: e.providedIn || null,
          factory: e.factory,
          value: void 0,
        };
      }
      function ot(e) {
        return { providers: e.providers || [], imports: e.imports || [] };
      }
      function tt(e) {
        return Ot(e, vn) || Ot(e, In);
      }
      function Ot(e, t) {
        return e.hasOwnProperty(t) ? e[t] : null;
      }
      function Vr(e) {
        return e && (e.hasOwnProperty(Zt) || e.hasOwnProperty(Jt))
          ? e[Zt]
          : null;
      }
      const vn = re({ ɵprov: re }),
        Zt = re({ ɵinj: re }),
        In = re({ ngInjectableDef: re }),
        Jt = re({ ngInjectorDef: re });
      var Ne = (() => (
        ((Ne = Ne || {})[(Ne.Default = 0)] = 'Default'),
        (Ne[(Ne.Host = 1)] = 'Host'),
        (Ne[(Ne.Self = 2)] = 'Self'),
        (Ne[(Ne.SkipSelf = 4)] = 'SkipSelf'),
        (Ne[(Ne.Optional = 8)] = 'Optional'),
        Ne
      ))();
      let cn;
      function wt(e) {
        const t = cn;
        return (cn = e), t;
      }
      function or(e, t, n) {
        const r = tt(e);
        return r && 'root' == r.providedIn
          ? void 0 === r.value
            ? (r.value = r.factory())
            : r.value
          : n & Ne.Optional
          ? null
          : void 0 !== t
          ? t
          : void oe(ue(e));
      }
      function Dn(e) {
        return { toString: e }.toString();
      }
      var Xt = (() => (
          ((Xt = Xt || {})[(Xt.OnPush = 0)] = 'OnPush'),
          (Xt[(Xt.Default = 1)] = 'Default'),
          Xt
        ))(),
        at = (() => {
          return (
            ((e = at || (at = {}))[(e.Emulated = 0)] = 'Emulated'),
            (e[(e.None = 2)] = 'None'),
            (e[(e.ShadowDom = 3)] = 'ShadowDom'),
            at
          );
          var e;
        })();
      const Ce = (() =>
          (typeof globalThis < 'u' && globalThis) ||
          (typeof global < 'u' && global) ||
          (typeof window < 'u' && window) ||
          (typeof self < 'u' &&
            typeof WorkerGlobalScope < 'u' &&
            self instanceof WorkerGlobalScope &&
            self))(),
        sn = {},
        $e = [],
        kn = re({ ɵcmp: re }),
        Ve = re({ ɵdir: re }),
        qn = re({ ɵpipe: re }),
        ht = re({ ɵmod: re }),
        dn = re({ ɵfac: re }),
        it = re({ __NG_ELEMENT_ID__: re });
      let kr = 0;
      function An(e) {
        return Dn(() => {
          const n = !0 === e.standalone,
            r = {},
            o = {
              type: e.type,
              providersResolver: null,
              decls: e.decls,
              vars: e.vars,
              factory: null,
              template: e.template || null,
              consts: e.consts || null,
              ngContentSelectors: e.ngContentSelectors,
              hostBindings: e.hostBindings || null,
              hostVars: e.hostVars || 0,
              hostAttrs: e.hostAttrs || null,
              contentQueries: e.contentQueries || null,
              declaredInputs: r,
              inputs: null,
              outputs: null,
              exportAs: e.exportAs || null,
              onPush: e.changeDetection === Xt.OnPush,
              directiveDefs: null,
              pipeDefs: null,
              standalone: n,
              dependencies: (n && e.dependencies) || null,
              getStandaloneInjector: null,
              selectors: e.selectors || $e,
              viewQuery: e.viewQuery || null,
              features: e.features || null,
              data: e.data || {},
              encapsulation: e.encapsulation || at.Emulated,
              id: 'c' + kr++,
              styles: e.styles || $e,
              _: null,
              setInput: null,
              schemas: e.schemas || null,
              tView: null,
            },
            i = e.dependencies,
            s = e.features;
          return (
            (o.inputs = Dt(e.inputs, r)),
            (o.outputs = Dt(e.outputs)),
            s && s.forEach(c => c(o)),
            (o.directiveDefs = i
              ? () => ('function' == typeof i ? i() : i).map(kt).filter(Kn)
              : null),
            (o.pipeDefs = i
              ? () => ('function' == typeof i ? i() : i).map(At).filter(Kn)
              : null),
            o
          );
        });
      }
      function kt(e) {
        return dt(e) || Ft(e);
      }
      function Kn(e) {
        return null !== e;
      }
      const Sn = {};
      function fn(e) {
        return Dn(() => {
          const t = {
            type: e.type,
            bootstrap: e.bootstrap || $e,
            declarations: e.declarations || $e,
            imports: e.imports || $e,
            exports: e.exports || $e,
            transitiveCompileScopes: null,
            schemas: e.schemas || null,
            id: e.id || null,
          };
          return null != e.id && (Sn[e.id] = e.type), t;
        });
      }
      function Dt(e, t) {
        if (null == e) return sn;
        const n = {};
        for (const r in e)
          if (e.hasOwnProperty(r)) {
            let o = e[r],
              i = o;
            Array.isArray(o) && ((i = o[1]), (o = o[0])),
              (n[o] = r),
              t && (t[o] = i);
          }
        return n;
      }
      const $t = An;
      function sr(e) {
        return {
          type: e.type,
          name: e.name,
          factory: null,
          pure: !1 !== e.pure,
          standalone: !0 === e.standalone,
          onDestroy: e.type.prototype.ngOnDestroy || null,
        };
      }
      function dt(e) {
        return e[kn] || null;
      }
      function Ft(e) {
        return e[Ve] || null;
      }
      function At(e) {
        return e[qn] || null;
      }
      function Gt(e, t) {
        const n = e[ht] || null;
        if (!n && !0 === t)
          throw new Error(`Type ${ue(e)} does not have '\u0275mod' property.`);
        return n;
      }
      function Pt(e) {
        return Array.isArray(e) && 'object' == typeof e[1];
      }
      function Yt(e) {
        return Array.isArray(e) && !0 === e[1];
      }
      function Rn(e) {
        return 0 != (8 & e.flags);
      }
      function jt(e) {
        return 2 == (2 & e.flags);
      }
      function On(e) {
        return 1 == (1 & e.flags);
      }
      function nn(e) {
        return null !== e.template;
      }
      function no(e) {
        return 0 != (256 & e[2]);
      }
      function Un(e, t) {
        return e.hasOwnProperty(dn) ? e[dn] : null;
      }
      class Zn {
        constructor(t, n, r) {
          (this.previousValue = t),
            (this.currentValue = n),
            (this.firstChange = r);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      function zr() {
        return fr;
      }
      function fr(e) {
        return e.type.prototype.ngOnChanges && (e.setInput = hr), br;
      }
      function br() {
        const e = so(this),
          t = e?.current;
        if (t) {
          const n = e.previous;
          if (n === sn) e.previous = t;
          else for (let r in t) n[r] = t[r];
          (e.current = null), this.ngOnChanges(t);
        }
      }
      function hr(e, t, n, r) {
        const o =
            so(e) ||
            (function Wr(e, t) {
              return (e[Hn] = t);
            })(e, { previous: sn, current: null }),
          i = o.current || (o.current = {}),
          s = o.previous,
          c = this.declaredInputs[n],
          d = s[c];
        (i[c] = new Zn(d && d.currentValue, t, s === sn)), (e[r] = t);
      }
      zr.ngInherit = !0;
      const Hn = '__ngSimpleChanges__';
      function so(e) {
        return e[Hn] || null;
      }
      let Qo;
      function bo(e) {
        Qo = e;
      }
      function vt(e) {
        return !!e.listen;
      }
      const Pn = {
        createRenderer: (e, t) =>
          (function uo() {
            return void 0 !== Qo
              ? Qo
              : typeof document < 'u'
              ? document
              : void 0;
          })(),
      };
      function It(e) {
        for (; Array.isArray(e); ) e = e[0];
        return e;
      }
      function m(e, t) {
        return It(t[e]);
      }
      function M(e, t) {
        return It(t[e.index]);
      }
      function G(e, t) {
        return e.data[t];
      }
      function be(e, t) {
        const n = t[e];
        return Pt(n) ? n : n[0];
      }
      function ut(e) {
        return 4 == (4 & e[2]);
      }
      function mt(e) {
        return 64 == (64 & e[2]);
      }
      function Xe(e, t) {
        return null == t ? null : e[t];
      }
      function Nt(e) {
        e[18] = 0;
      }
      function ft(e, t) {
        e[5] += t;
        let n = e,
          r = e[3];
        for (
          ;
          null !== r && ((1 === t && 1 === n[5]) || (-1 === t && 0 === n[5]));

        )
          (r[5] += t), (n = r), (r = r[3]);
      }
      const Fe = { lFrame: Ls(null), bindingsEnabled: !0 };
      function Ar() {
        return Fe.bindingsEnabled;
      }
      function ne() {
        return Fe.lFrame.lView;
      }
      function lt() {
        return Fe.lFrame.tView;
      }
      function St() {
        let e = Xo();
        for (; null !== e && 64 === e.type; ) e = e.parent;
        return e;
      }
      function Xo() {
        return Fe.lFrame.currentTNode;
      }
      function p(e, t) {
        const n = Fe.lFrame;
        (n.currentTNode = e), (n.isParent = t);
      }
      function h() {
        return Fe.lFrame.isParent;
      }
      function b() {
        Fe.lFrame.isParent = !1;
      }
      function wn() {
        return Fe.lFrame.bindingIndex++;
      }
      function To(e, t) {
        const n = Fe.lFrame;
        (n.bindingIndex = n.bindingRootIndex = e), Hi(t);
      }
      function Hi(e) {
        Fe.lFrame.currentDirectiveIndex = e;
      }
      function Ps() {
        return Fe.lFrame.currentQueryIndex;
      }
      function Gi(e) {
        Fe.lFrame.currentQueryIndex = e;
      }
      function Qa(e) {
        const t = e[1];
        return 2 === t.type ? t.declTNode : 1 === t.type ? e[6] : null;
      }
      function Ns(e, t, n) {
        if (n & Ne.SkipSelf) {
          let o = t,
            i = e;
          for (
            ;
            !((o = o.parent),
            null !== o ||
              n & Ne.Host ||
              ((o = Qa(i)), null === o || ((i = i[15]), 10 & o.type)));

          );
          if (null === o) return !1;
          (t = o), (e = i);
        }
        const r = (Fe.lFrame = zi());
        return (r.currentTNode = t), (r.lView = e), !0;
      }
      function ei(e) {
        const t = zi(),
          n = e[1];
        (Fe.lFrame = t),
          (t.currentTNode = n.firstChild),
          (t.lView = e),
          (t.tView = n),
          (t.contextLView = e),
          (t.bindingIndex = n.bindingStartIndex),
          (t.inI18n = !1);
      }
      function zi() {
        const e = Fe.lFrame,
          t = null === e ? null : e.child;
        return null === t ? Ls(e) : t;
      }
      function Ls(e) {
        const t = {
          currentTNode: null,
          isParent: !0,
          lView: null,
          tView: null,
          selectedIndex: -1,
          contextLView: null,
          elementDepthCount: 0,
          currentNamespace: null,
          currentDirectiveIndex: -1,
          bindingRootIndex: -1,
          bindingIndex: -1,
          currentQueryIndex: 0,
          parent: e,
          child: null,
          inI18n: !1,
        };
        return null !== e && (e.child = t), t;
      }
      function Wi() {
        const e = Fe.lFrame;
        return (
          (Fe.lFrame = e.parent), (e.currentTNode = null), (e.lView = null), e
        );
      }
      const Vs = Wi;
      function ti() {
        const e = Wi();
        (e.isParent = !0),
          (e.tView = null),
          (e.selectedIndex = -1),
          (e.contextLView = null),
          (e.elementDepthCount = 0),
          (e.currentDirectiveIndex = -1),
          (e.currentNamespace = null),
          (e.bindingRootIndex = -1),
          (e.bindingIndex = -1),
          (e.currentQueryIndex = 0);
      }
      function un() {
        return Fe.lFrame.selectedIndex;
      }
      function pr(e) {
        Fe.lFrame.selectedIndex = e;
      }
      function Lt() {
        const e = Fe.lFrame;
        return G(e.tView, e.selectedIndex);
      }
      function Yi() {
        Fe.lFrame.currentNamespace = 'svg';
      }
      function fo(e, t) {
        for (let n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
          const i = e.data[n].type.prototype,
            {
              ngAfterContentInit: s,
              ngAfterContentChecked: c,
              ngAfterViewInit: d,
              ngAfterViewChecked: _,
              ngOnDestroy: C,
            } = i;
          s && (e.contentHooks || (e.contentHooks = [])).push(-n, s),
            c &&
              ((e.contentHooks || (e.contentHooks = [])).push(n, c),
              (e.contentCheckHooks || (e.contentCheckHooks = [])).push(n, c)),
            d && (e.viewHooks || (e.viewHooks = [])).push(-n, d),
            _ &&
              ((e.viewHooks || (e.viewHooks = [])).push(n, _),
              (e.viewCheckHooks || (e.viewCheckHooks = [])).push(n, _)),
            null != C && (e.destroyHooks || (e.destroyHooks = [])).push(n, C);
        }
      }
      function ni(e, t, n) {
        Hs(e, t, 3, n);
      }
      function ri(e, t, n, r) {
        (3 & e[2]) === n && Hs(e, t, n, r);
      }
      function qi(e, t) {
        let n = e[2];
        (3 & n) === t && ((n &= 2047), (n += 1), (e[2] = n));
      }
      function Hs(e, t, n, r) {
        const i = r ?? -1,
          s = t.length - 1;
        let c = 0;
        for (let d = void 0 !== r ? 65535 & e[18] : 0; d < s; d++)
          if ('number' == typeof t[d + 1]) {
            if (((c = t[d]), null != r && c >= r)) break;
          } else
            t[d] < 0 && (e[18] += 65536),
              (c < i || -1 == i) &&
                (el(e, n, t, d), (e[18] = (4294901760 & e[18]) + d + 2)),
              d++;
      }
      function el(e, t, n, r) {
        const o = n[r] < 0,
          i = n[r + 1],
          c = e[o ? -n[r] : n[r]];
        if (o) {
          if (e[2] >> 11 < e[18] >> 16 && (3 & e[2]) === t) {
            e[2] += 2048;
            try {
              i.call(c);
            } finally {
            }
          }
        } else
          try {
            i.call(c);
          } finally {
          }
      }
      class Kr {
        constructor(t, n, r) {
          (this.factory = t),
            (this.resolving = !1),
            (this.canSeeViewProviders = n),
            (this.injectImpl = r);
        }
      }
      function ii(e, t, n) {
        const r = vt(e);
        let o = 0;
        for (; o < n.length; ) {
          const i = n[o];
          if ('number' == typeof i) {
            if (0 !== i) break;
            o++;
            const s = n[o++],
              c = n[o++],
              d = n[o++];
            r ? e.setAttribute(t, c, d, s) : t.setAttributeNS(s, c, d);
          } else {
            const s = i,
              c = n[++o];
            Zi(s)
              ? r && e.setProperty(t, s, c)
              : r
              ? e.setAttribute(t, s, c)
              : t.setAttribute(s, c),
              o++;
          }
        }
        return o;
      }
      function $s(e) {
        return 3 === e || 4 === e || 6 === e;
      }
      function Zi(e) {
        return 64 === e.charCodeAt(0);
      }
      function si(e, t) {
        if (null !== t && 0 !== t.length)
          if (null === e || 0 === e.length) e = t.slice();
          else {
            let n = -1;
            for (let r = 0; r < t.length; r++) {
              const o = t[r];
              'number' == typeof o
                ? (n = o)
                : 0 === n ||
                  Gs(e, n, o, null, -1 === n || 2 === n ? t[++r] : null);
            }
          }
        return e;
      }
      function Gs(e, t, n, r, o) {
        let i = 0,
          s = e.length;
        if (-1 === t) s = -1;
        else
          for (; i < e.length; ) {
            const c = e[i++];
            if ('number' == typeof c) {
              if (c === t) {
                s = -1;
                break;
              }
              if (c > t) {
                s = i - 1;
                break;
              }
            }
          }
        for (; i < e.length; ) {
          const c = e[i];
          if ('number' == typeof c) break;
          if (c === n) {
            if (null === r) return void (null !== o && (e[i + 1] = o));
            if (r === e[i + 1]) return void (e[i + 2] = o);
          }
          i++, null !== r && i++, null !== o && i++;
        }
        -1 !== s && (e.splice(s, 0, t), (i = s + 1)),
          e.splice(i++, 0, n),
          null !== r && e.splice(i++, 0, r),
          null !== o && e.splice(i++, 0, o);
      }
      function gn(e) {
        return -1 !== e;
      }
      function ho(e) {
        return 32767 & e;
      }
      function Sr(e, t) {
        let n = (function zs(e) {
            return e >> 16;
          })(e),
          r = t;
        for (; n > 0; ) (r = r[15]), n--;
        return r;
      }
      let Fo = !0;
      function ai(e) {
        const t = Fo;
        return (Fo = e), t;
      }
      let Ys = 0;
      const er = {};
      function po(e, t) {
        const n = Ks(e, t);
        if (-1 !== n) return n;
        const r = t[1];
        r.firstCreatePass &&
          ((e.injectorIndex = t.length),
          Ro(r.data, e),
          Ro(t, null),
          Ro(r.blueprint, null));
        const o = tr(e, t),
          i = e.injectorIndex;
        if (gn(o)) {
          const s = ho(o),
            c = Sr(o, t),
            d = c[1].data;
          for (let _ = 0; _ < 8; _++) t[i + _] = c[s + _] | d[s + _];
        }
        return (t[i + 8] = o), i;
      }
      function Ro(e, t) {
        e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
      }
      function Ks(e, t) {
        return -1 === e.injectorIndex ||
          (e.parent && e.parent.injectorIndex === e.injectorIndex) ||
          null === t[e.injectorIndex + 8]
          ? -1
          : e.injectorIndex;
      }
      function tr(e, t) {
        if (e.parent && -1 !== e.parent.injectorIndex)
          return e.parent.injectorIndex;
        let n = 0,
          r = null,
          o = t;
        for (; null !== o; ) {
          if (((r = u(o)), null === r)) return -1;
          if ((n++, (o = o[15]), -1 !== r.injectorIndex))
            return r.injectorIndex | (n << 16);
        }
        return -1;
      }
      function Oo(e, t, n) {
        !(function qs(e, t, n) {
          let r;
          'string' == typeof n
            ? (r = n.charCodeAt(0) || 0)
            : n.hasOwnProperty(it) && (r = n[it]),
            null == r && (r = n[it] = Ys++);
          const o = 255 & r;
          t.data[e + (o >> 5)] |= 1 << o;
        })(e, t, n);
      }
      function Qs(e, t, n) {
        if (n & Ne.Optional) return e;
        oe();
      }
      function Zs(e, t, n, r) {
        if (
          (n & Ne.Optional && void 0 === r && (r = null),
          0 == (n & (Ne.Self | Ne.Host)))
        ) {
          const o = e[9],
            i = wt(void 0);
          try {
            return o ? o.get(t, r, n & Ne.Optional) : or(t, r, n & Ne.Optional);
          } finally {
            wt(i);
          }
        }
        return Qs(r, 0, n);
      }
      function Js(e, t, n, r = Ne.Default, o) {
        if (null !== e) {
          if (1024 & t[2]) {
            const s = (function Ac(e, t, n, r, o) {
              let i = e,
                s = t;
              for (
                ;
                null !== i && null !== s && 1024 & s[2] && !(256 & s[2]);

              ) {
                const c = Xs(i, s, n, r | Ne.Self, er);
                if (c !== er) return c;
                let d = i.parent;
                if (!d) {
                  const _ = s[21];
                  if (_) {
                    const C = _.get(n, er, r);
                    if (C !== er) return C;
                  }
                  (d = u(s)), (s = s[15]);
                }
                i = d;
              }
              return o;
            })(e, t, n, r, er);
            if (s !== er) return s;
          }
          const i = Xs(e, t, n, r, er);
          if (i !== er) return i;
        }
        return Zs(t, n, r, o);
      }
      function Xs(e, t, n, r, o) {
        const i = (function il(e) {
          if ('string' == typeof e) return e.charCodeAt(0) || 0;
          const t = e.hasOwnProperty(it) ? e[it] : void 0;
          return 'number' == typeof t ? (t >= 0 ? 255 & t : sl) : t;
        })(n);
        if ('function' == typeof i) {
          if (!Ns(t, e, r)) return r & Ne.Host ? Qs(o, 0, r) : Zs(t, n, r, o);
          try {
            const s = i(r);
            if (null != s || r & Ne.Optional) return s;
            oe();
          } finally {
            Vs();
          }
        } else if ('number' == typeof i) {
          let s = null,
            c = Ks(e, t),
            d = -1,
            _ = r & Ne.Host ? t[16][6] : null;
          for (
            (-1 === c || r & Ne.SkipSelf) &&
            ((d = -1 === c ? tr(e, t) : t[c + 8]),
            -1 !== d && li(r, !1)
              ? ((s = t[1]), (c = ho(d)), (t = Sr(d, t)))
              : (c = -1));
            -1 !== c;

          ) {
            const C = t[1];
            if (ea(i, c, C.data)) {
              const A = ol(c, t, n, s, r, _);
              if (A !== er) return A;
            }
            (d = t[c + 8]),
              -1 !== d && li(r, t[1].data[c + 8] === _) && ea(i, c, t)
                ? ((s = C), (c = ho(d)), (t = Sr(d, t)))
                : (c = -1);
          }
        }
        return o;
      }
      function ol(e, t, n, r, o, i) {
        const s = t[1],
          c = s.data[e + 8],
          C = Po(
            c,
            s,
            n,
            null == r ? jt(c) && Fo : r != s && 0 != (3 & c.type),
            o & Ne.Host && i === c
          );
        return null !== C ? No(t, s, C, c) : er;
      }
      function Po(e, t, n, r, o) {
        const i = e.providerIndexes,
          s = t.data,
          c = 1048575 & i,
          d = e.directiveStart,
          C = i >> 20,
          O = o ? c + C : e.directiveEnd;
        for (let B = r ? c : c + C; B < O; B++) {
          const Q = s[B];
          if ((B < d && n === Q) || (B >= d && Q.type === n)) return B;
        }
        if (o) {
          const B = s[d];
          if (B && nn(B) && B.type === n) return d;
        }
        return null;
      }
      function No(e, t, n, r) {
        let o = e[n];
        const i = t.data;
        if (
          (function tl(e) {
            return e instanceof Kr;
          })(o)
        ) {
          const s = o;
          s.resolving &&
            (function Je(e, t) {
              const n = t ? `. Dependency path: ${t.join(' > ')} > ${e}` : '';
              throw new de(
                -200,
                `Circular dependency in DI detected for ${e}${n}`
              );
            })(
              (function Ie(e) {
                return 'function' == typeof e
                  ? e.name || e.toString()
                  : 'object' == typeof e &&
                    null != e &&
                    'function' == typeof e.type
                  ? e.type.name || e.type.toString()
                  : ae(e);
              })(i[n])
            );
          const c = ai(s.canSeeViewProviders);
          s.resolving = !0;
          const d = s.injectImpl ? wt(s.injectImpl) : null;
          Ns(e, r, Ne.Default);
          try {
            (o = e[n] = s.factory(void 0, i, e, r)),
              t.firstCreatePass &&
                n >= r.directiveStart &&
                (function Xa(e, t, n) {
                  const {
                    ngOnChanges: r,
                    ngOnInit: o,
                    ngDoCheck: i,
                  } = t.type.prototype;
                  if (r) {
                    const s = fr(t);
                    (n.preOrderHooks || (n.preOrderHooks = [])).push(e, s),
                      (
                        n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                      ).push(e, s);
                  }
                  o &&
                    (n.preOrderHooks || (n.preOrderHooks = [])).push(0 - e, o),
                    i &&
                      ((n.preOrderHooks || (n.preOrderHooks = [])).push(e, i),
                      (
                        n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                      ).push(e, i));
                })(n, i[n], t);
          } finally {
            null !== d && wt(d), ai(c), (s.resolving = !1), Vs();
          }
        }
        return o;
      }
      function ea(e, t, n) {
        return !!(n[t + (e >> 5)] & (1 << e));
      }
      function li(e, t) {
        return !(e & Ne.Self || (e & Ne.Host && t));
      }
      class go {
        constructor(t, n) {
          (this._tNode = t), (this._lView = n);
        }
        get(t, n, r) {
          return Js(this._tNode, this._lView, t, r, n);
        }
      }
      function sl() {
        return new go(St(), ne());
      }
      function Xi(e) {
        return Dn(() => {
          const t = e.prototype.constructor,
            n = t[dn] || es(t),
            r = Object.prototype;
          let o = Object.getPrototypeOf(e.prototype).constructor;
          for (; o && o !== r; ) {
            const i = o[dn] || es(o);
            if (i && i !== n) return i;
            o = Object.getPrototypeOf(o);
          }
          return i => new i();
        });
      }
      function es(e) {
        return je(e)
          ? () => {
              const t = es(J(e));
              return t && t();
            }
          : Un(e);
      }
      function u(e) {
        const t = e[1],
          n = t.type;
        return 2 === n ? t.declTNode : 1 === n ? e[6] : null;
      }
      function l(e) {
        return (function rl(e, t) {
          if ('class' === t) return e.classes;
          if ('style' === t) return e.styles;
          const n = e.attrs;
          if (n) {
            const r = n.length;
            let o = 0;
            for (; o < r; ) {
              const i = n[o];
              if ($s(i)) break;
              if (0 === i) o += 2;
              else if ('number' == typeof i)
                for (o++; o < r && 'string' == typeof n[o]; ) o++;
              else {
                if (i === t) return n[o + 1];
                o += 2;
              }
            }
          }
          return null;
        })(St(), e);
      }
      const f = '__parameters__';
      function F(e, t, n) {
        return Dn(() => {
          const r = (function S(e) {
            return function (...n) {
              if (e) {
                const r = e(...n);
                for (const o in r) this[o] = r[o];
              }
            };
          })(t);
          function o(...i) {
            if (this instanceof o) return r.apply(this, i), this;
            const s = new o(...i);
            return (c.annotation = s), c;
            function c(d, _, C) {
              const A = d.hasOwnProperty(f)
                ? d[f]
                : Object.defineProperty(d, f, { value: [] })[f];
              for (; A.length <= C; ) A.push(null);
              return (A[C] = A[C] || []).push(s), d;
            }
          }
          return (
            n && (o.prototype = Object.create(n.prototype)),
            (o.prototype.ngMetadataName = e),
            (o.annotationCls = o),
            o
          );
        });
      }
      class Ae {
        constructor(t, n) {
          (this._desc = t),
            (this.ngMetadataName = 'InjectionToken'),
            (this.ɵprov = void 0),
            'number' == typeof n
              ? (this.__NG_ELEMENT_ID__ = n)
              : void 0 !== n &&
                (this.ɵprov = ke({
                  token: this,
                  providedIn: n.providedIn || 'root',
                  factory: n.factory,
                }));
        }
        get multi() {
          return this;
        }
        toString() {
          return `InjectionToken ${this._desc}`;
        }
      }
      const Se = new Ae('AnalyzeForEntryComponents');
      function Gn(e, t) {
        void 0 === t && (t = e);
        for (let n = 0; n < e.length; n++) {
          let r = e[n];
          Array.isArray(r)
            ? (t === e && (t = e.slice(0, n)), Gn(r, t))
            : t !== e && t.push(r);
        }
        return t;
      }
      function Qr(e, t) {
        e.forEach(n => (Array.isArray(n) ? Qr(n, t) : t(n)));
      }
      function Tc(e, t, n) {
        t >= e.length ? e.push(n) : e.splice(t, 0, n);
      }
      function na(e, t) {
        return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
      }
      function zn(e, t, n) {
        let r = ci(e, t);
        return (
          r >= 0
            ? (e[1 | r] = n)
            : ((r = ~r),
              (function Qg(e, t, n, r) {
                let o = e.length;
                if (o == t) e.push(n, r);
                else if (1 === o) e.push(r, e[0]), (e[0] = n);
                else {
                  for (o--, e.push(e[o - 1], e[o]); o > t; )
                    (e[o] = e[o - 2]), o--;
                  (e[t] = n), (e[t + 1] = r);
                }
              })(e, r, t, n)),
          r
        );
      }
      function ul(e, t) {
        const n = ci(e, t);
        if (n >= 0) return e[1 | n];
      }
      function ci(e, t) {
        return (function Rc(e, t, n) {
          let r = 0,
            o = e.length >> n;
          for (; o !== r; ) {
            const i = r + ((o - r) >> 1),
              s = e[i << n];
            if (t === s) return i << n;
            s > t ? (o = i) : (r = i + 1);
          }
          return ~(o << n);
        })(e, t, 1);
      }
      const rs = {},
        dl = '__NG_DI_FLAG__',
        oa = 'ngTempTokenPath',
        om = /\n/gm,
        Oc = '__source';
      let os;
      function ia(e) {
        const t = os;
        return (os = e), t;
      }
      function sm(e, t = Ne.Default) {
        if (void 0 === os) throw new de(-203, !1);
        return null === os
          ? or(e, void 0, t)
          : os.get(e, t & Ne.Optional ? null : void 0, t);
      }
      function qt(e, t = Ne.Default) {
        return (
          (function ct() {
            return cn;
          })() || sm
        )(J(e), t);
      }
      function fl(e) {
        const t = [];
        for (let n = 0; n < e.length; n++) {
          const r = J(e[n]);
          if (Array.isArray(r)) {
            if (0 === r.length) throw new de(900, !1);
            let o,
              i = Ne.Default;
            for (let s = 0; s < r.length; s++) {
              const c = r[s],
                d = lm(c);
              'number' == typeof d
                ? -1 === d
                  ? (o = c.token)
                  : (i |= d)
                : (o = c);
            }
            t.push(qt(o, i));
          } else t.push(qt(r));
        }
        return t;
      }
      function is(e, t) {
        return (e[dl] = t), (e.prototype[dl] = t), e;
      }
      function lm(e) {
        return e[dl];
      }
      const sa = is(
          F('Inject', e => ({ token: e })),
          -1
        ),
        ss = is(F('Optional'), 8),
        as = is(F('SkipSelf'), 4);
      class zc {
        constructor(t) {
          this.changingThisBreaksApplicationSecurity = t;
        }
        toString() {
          return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`;
        }
      }
      function mo(e) {
        return e instanceof zc ? e.changingThisBreaksApplicationSecurity : e;
      }
      const Fm =
          /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi,
        Rm =
          /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
      var Qt = (() => (
        ((Qt = Qt || {})[(Qt.NONE = 0)] = 'NONE'),
        (Qt[(Qt.HTML = 1)] = 'HTML'),
        (Qt[(Qt.STYLE = 2)] = 'STYLE'),
        (Qt[(Qt.SCRIPT = 3)] = 'SCRIPT'),
        (Qt[(Qt.URL = 4)] = 'URL'),
        (Qt[(Qt.RESOURCE_URL = 5)] = 'RESOURCE_URL'),
        Qt
      ))();
      function Dl(e) {
        const t = (function fs() {
          const e = ne();
          return e && e[12];
        })();
        return t
          ? t.sanitize(Qt.URL, e) || ''
          : (function cs(e, t) {
              const n = (function Am(e) {
                return (e instanceof zc && e.getTypeName()) || null;
              })(e);
              if (null != n && n !== t) {
                if ('ResourceURL' === n && 'URL' === t) return !0;
                throw new Error(
                  `Required a safe ${t}, got a ${n} (see https://g.co/ng/security#xss)`
                );
              }
              return n === t;
            })(e, 'URL')
          ? mo(e)
          : (function da(e) {
              return (e = String(e)).match(Fm) || e.match(Rm)
                ? e
                : 'unsafe:' + e;
            })(ae(e));
      }
      function Cl(e) {
        return e.ngOriginalError;
      }
      class hs {
        constructor() {
          this._console = console;
        }
        handleError(t) {
          const n = this._findOriginalError(t);
          this._console.error('ERROR', t),
            n && this._console.error('ORIGINAL ERROR', n);
        }
        _findOriginalError(t) {
          let n = t && Cl(t);
          for (; n && Cl(n); ) n = Cl(n);
          return n || null;
        }
      }
      const El = new Map();
      let ey = 0;
      const Ml = '__ngContext__';
      function mn(e, t) {
        Pt(t)
          ? ((e[Ml] = t[20]),
            (function ny(e) {
              El.set(e[20], e);
            })(t))
          : (e[Ml] = t);
      }
      function ps(e) {
        const t = e[Ml];
        return 'number' == typeof t
          ? (function td(e) {
              return El.get(e) || null;
            })(t)
          : t || null;
      }
      function bl(e) {
        const t = ps(e);
        return t ? (Pt(t) ? t : t.lView) : null;
      }
      const dy = (() =>
        (
          (typeof requestAnimationFrame < 'u' && requestAnimationFrame) ||
          setTimeout
        ).bind(Ce))();
      function Zr(e) {
        return e instanceof Function ? e() : e;
      }
      var xr = (() => (
        ((xr = xr || {})[(xr.Important = 1)] = 'Important'),
        (xr[(xr.DashCase = 2)] = 'DashCase'),
        xr
      ))();
      function Al(e, t) {
        return undefined(e, t);
      }
      function gs(e) {
        const t = e[3];
        return Yt(t) ? t[3] : t;
      }
      function Sl(e) {
        return cd(e[13]);
      }
      function Tl(e) {
        return cd(e[4]);
      }
      function cd(e) {
        for (; null !== e && !Yt(e); ) e = e[4];
        return e;
      }
      function pi(e, t, n, r, o) {
        if (null != r) {
          let i,
            s = !1;
          Yt(r) ? (i = r) : Pt(r) && ((s = !0), (r = r[0]));
          const c = It(r);
          0 === e && null !== n
            ? null == o
              ? md(t, n, c)
              : Lo(t, n, c, o || null, !0)
            : 1 === e && null !== n
            ? Lo(t, n, c, o || null, !0)
            : 2 === e
            ? (function Md(e, t, n) {
                const r = ha(e, t);
                r &&
                  (function Iy(e, t, n, r) {
                    vt(e) ? e.removeChild(t, n, r) : t.removeChild(n);
                  })(e, r, t, n);
              })(t, c, s)
            : 3 === e && t.destroyNode(c),
            null != i &&
              (function Ty(e, t, n, r, o) {
                const i = n[7];
                i !== It(n) && pi(t, e, r, i, o);
                for (let c = 10; c < n.length; c++) {
                  const d = n[c];
                  ms(d[1], d, e, t, r, i);
                }
              })(t, e, i, n, o);
        }
      }
      function Fl(e, t, n) {
        if (vt(e)) return e.createElement(t, n);
        {
          const r =
            null !== n
              ? (function Mo(e) {
                  const t = e.toLowerCase();
                  return 'svg' === t
                    ? 'http://www.w3.org/2000/svg'
                    : 'math' === t
                    ? 'http://www.w3.org/1998/MathML/'
                    : null;
                })(n)
              : null;
          return null === r ? e.createElement(t) : e.createElementNS(r, t);
        }
      }
      function fd(e, t) {
        const n = e[9],
          r = n.indexOf(t),
          o = t[3];
        512 & t[2] && ((t[2] &= -513), ft(o, -1)), n.splice(r, 1);
      }
      function Rl(e, t) {
        if (e.length <= 10) return;
        const n = 10 + t,
          r = e[n];
        if (r) {
          const o = r[17];
          null !== o && o !== e && fd(o, r), t > 0 && (e[n - 1][4] = r[4]);
          const i = na(e, 10 + t);
          !(function vy(e, t) {
            ms(e, t, t[11], 2, null, null), (t[0] = null), (t[6] = null);
          })(r[1], r);
          const s = i[19];
          null !== s && s.detachView(i[1]),
            (r[3] = null),
            (r[4] = null),
            (r[2] &= -65);
        }
        return r;
      }
      function hd(e, t) {
        if (!(128 & t[2])) {
          const n = t[11];
          vt(n) && n.destroyNode && ms(e, t, n, 3, null, null),
            (function Cy(e) {
              let t = e[13];
              if (!t) return Ol(e[1], e);
              for (; t; ) {
                let n = null;
                if (Pt(t)) n = t[13];
                else {
                  const r = t[10];
                  r && (n = r);
                }
                if (!n) {
                  for (; t && !t[4] && t !== e; )
                    Pt(t) && Ol(t[1], t), (t = t[3]);
                  null === t && (t = e), Pt(t) && Ol(t[1], t), (n = t && t[4]);
                }
                t = n;
              }
            })(t);
        }
      }
      function Ol(e, t) {
        if (!(128 & t[2])) {
          (t[2] &= -65),
            (t[2] |= 128),
            (function by(e, t) {
              let n;
              if (null != e && null != (n = e.destroyHooks))
                for (let r = 0; r < n.length; r += 2) {
                  const o = t[n[r]];
                  if (!(o instanceof Kr)) {
                    const i = n[r + 1];
                    if (Array.isArray(i))
                      for (let s = 0; s < i.length; s += 2) {
                        const c = o[i[s]],
                          d = i[s + 1];
                        try {
                          d.call(c);
                        } finally {
                        }
                      }
                    else
                      try {
                        i.call(o);
                      } finally {
                      }
                  }
                }
            })(e, t),
            (function My(e, t) {
              const n = e.cleanup,
                r = t[7];
              let o = -1;
              if (null !== n)
                for (let i = 0; i < n.length - 1; i += 2)
                  if ('string' == typeof n[i]) {
                    const s = n[i + 1],
                      c = 'function' == typeof s ? s(t) : It(t[s]),
                      d = r[(o = n[i + 2])],
                      _ = n[i + 3];
                    'boolean' == typeof _
                      ? c.removeEventListener(n[i], d, _)
                      : _ >= 0
                      ? r[(o = _)]()
                      : r[(o = -_)].unsubscribe(),
                      (i += 2);
                  } else {
                    const s = r[(o = n[i + 1])];
                    n[i].call(s);
                  }
              if (null !== r) {
                for (let i = o + 1; i < r.length; i++) r[i]();
                t[7] = null;
              }
            })(e, t),
            1 === t[1].type && vt(t[11]) && t[11].destroy();
          const n = t[17];
          if (null !== n && Yt(t[3])) {
            n !== t[3] && fd(n, t);
            const r = t[19];
            null !== r && r.detachView(e);
          }
          !(function ry(e) {
            El.delete(e[20]);
          })(t);
        }
      }
      function pd(e, t, n) {
        return (function gd(e, t, n) {
          let r = t;
          for (; null !== r && 40 & r.type; ) r = (t = r).parent;
          if (null === r) return n[0];
          if (2 & r.flags) {
            const o = e.data[r.directiveStart].encapsulation;
            if (o === at.None || o === at.Emulated) return null;
          }
          return M(r, n);
        })(e, t.parent, n);
      }
      function Lo(e, t, n, r, o) {
        vt(e)
          ? e.insertBefore(t, n, r, o)
          : (vd(t) ? t.content : t).insertBefore(n, r, o);
      }
      function md(e, t, n) {
        vt(e) ? e.appendChild(t, n) : (vd(t) ? t.content : t).appendChild(n);
      }
      function yd(e, t, n, r, o) {
        null !== r ? Lo(e, t, n, r, o) : md(e, t, n);
      }
      function vd(e) {
        return 'TEMPLATE' === e.tagName && void 0 !== e.content;
      }
      function ha(e, t) {
        return vt(e) ? e.parentNode(t) : t.parentNode;
      }
      let Cd = function _d(e, t, n) {
        return 40 & e.type ? M(e, n) : null;
      };
      function pa(e, t, n, r) {
        const o = pd(e, r, t),
          i = t[11],
          c = (function Dd(e, t, n) {
            return Cd(e, t, n);
          })(r.parent || t[6], r, t);
        if (null != o)
          if (Array.isArray(n))
            for (let d = 0; d < n.length; d++) yd(i, o, n[d], c, !1);
          else yd(i, o, n, c, !1);
      }
      function ga(e, t) {
        if (null !== t) {
          const n = t.type;
          if (3 & n) return M(t, e);
          if (4 & n) return Nl(-1, e[t.index]);
          if (8 & n) {
            const r = t.child;
            if (null !== r) return ga(e, r);
            {
              const o = e[t.index];
              return Yt(o) ? Nl(-1, o) : It(o);
            }
          }
          if (32 & n) return Al(t, e)() || It(e[t.index]);
          {
            const r = wd(e, t);
            return null !== r
              ? Array.isArray(r)
                ? r[0]
                : ga(gs(e[16]), r)
              : ga(e, t.next);
          }
        }
        return null;
      }
      function wd(e, t) {
        return null !== t ? e[16][6].projection[t.projection] : null;
      }
      function Nl(e, t) {
        const n = 10 + e + 1;
        if (n < t.length) {
          const r = t[n],
            o = r[1].firstChild;
          if (null !== o) return ga(r, o);
        }
        return t[7];
      }
      function Ll(e, t, n, r, o, i, s) {
        for (; null != n; ) {
          const c = r[n.index],
            d = n.type;
          if (
            (s && 0 === t && (c && mn(It(c), r), (n.flags |= 4)),
            64 != (64 & n.flags))
          )
            if (8 & d) Ll(e, t, n.child, r, o, i, !1), pi(t, e, o, c, i);
            else if (32 & d) {
              const _ = Al(n, r);
              let C;
              for (; (C = _()); ) pi(t, e, o, C, i);
              pi(t, e, o, c, i);
            } else 16 & d ? bd(e, t, r, n, o, i) : pi(t, e, o, c, i);
          n = s ? n.projectionNext : n.next;
        }
      }
      function ms(e, t, n, r, o, i) {
        Ll(n, r, e.firstChild, t, o, i, !1);
      }
      function bd(e, t, n, r, o, i) {
        const s = n[16],
          d = s[6].projection[r.projection];
        if (Array.isArray(d))
          for (let _ = 0; _ < d.length; _++) pi(t, e, o, d[_], i);
        else Ll(e, t, d, s[3], o, i, !0);
      }
      function Id(e, t, n) {
        vt(e) ? e.setAttribute(t, 'style', n) : (t.style.cssText = n);
      }
      function Vl(e, t, n) {
        vt(e)
          ? '' === n
            ? e.removeAttribute(t, 'class')
            : e.setAttribute(t, 'class', n)
          : (t.className = n);
      }
      function Ad(e, t, n) {
        let r = e.length;
        for (;;) {
          const o = e.indexOf(t, n);
          if (-1 === o) return o;
          if (0 === o || e.charCodeAt(o - 1) <= 32) {
            const i = t.length;
            if (o + i === r || e.charCodeAt(o + i) <= 32) return o;
          }
          n = o + 1;
        }
      }
      const Sd = 'ng-template';
      function Fy(e, t, n) {
        let r = 0;
        for (; r < e.length; ) {
          let o = e[r++];
          if (n && 'class' === o) {
            if (((o = e[r]), -1 !== Ad(o.toLowerCase(), t, 0))) return !0;
          } else if (1 === o) {
            for (; r < e.length && 'string' == typeof (o = e[r++]); )
              if (o.toLowerCase() === t) return !0;
            return !1;
          }
        }
        return !1;
      }
      function Td(e) {
        return 4 === e.type && e.value !== Sd;
      }
      function Ry(e, t, n) {
        return t === (4 !== e.type || n ? e.value : Sd);
      }
      function Oy(e, t, n) {
        let r = 4;
        const o = e.attrs || [],
          i = (function Ly(e) {
            for (let t = 0; t < e.length; t++) if ($s(e[t])) return t;
            return e.length;
          })(o);
        let s = !1;
        for (let c = 0; c < t.length; c++) {
          const d = t[c];
          if ('number' != typeof d) {
            if (!s)
              if (4 & r) {
                if (
                  ((r = 2 | (1 & r)),
                  ('' !== d && !Ry(e, d, n)) || ('' === d && 1 === t.length))
                ) {
                  if (yr(r)) return !1;
                  s = !0;
                }
              } else {
                const _ = 8 & r ? d : t[++c];
                if (8 & r && null !== e.attrs) {
                  if (!Fy(e.attrs, _, n)) {
                    if (yr(r)) return !1;
                    s = !0;
                  }
                  continue;
                }
                const A = Py(8 & r ? 'class' : d, o, Td(e), n);
                if (-1 === A) {
                  if (yr(r)) return !1;
                  s = !0;
                  continue;
                }
                if ('' !== _) {
                  let O;
                  O = A > i ? '' : o[A + 1].toLowerCase();
                  const B = 8 & r ? O : null;
                  if ((B && -1 !== Ad(B, _, 0)) || (2 & r && _ !== O)) {
                    if (yr(r)) return !1;
                    s = !0;
                  }
                }
              }
          } else {
            if (!s && !yr(r) && !yr(d)) return !1;
            if (s && yr(d)) continue;
            (s = !1), (r = d | (1 & r));
          }
        }
        return yr(r) || s;
      }
      function yr(e) {
        return 0 == (1 & e);
      }
      function Py(e, t, n, r) {
        if (null === t) return -1;
        let o = 0;
        if (r || !n) {
          let i = !1;
          for (; o < t.length; ) {
            const s = t[o];
            if (s === e) return o;
            if (3 === s || 6 === s) i = !0;
            else {
              if (1 === s || 2 === s) {
                let c = t[++o];
                for (; 'string' == typeof c; ) c = t[++o];
                continue;
              }
              if (4 === s) break;
              if (0 === s) {
                o += 4;
                continue;
              }
            }
            o += i ? 1 : 2;
          }
          return -1;
        }
        return (function Vy(e, t) {
          let n = e.indexOf(4);
          if (n > -1)
            for (n++; n < e.length; ) {
              const r = e[n];
              if ('number' == typeof r) return -1;
              if (r === t) return n;
              n++;
            }
          return -1;
        })(t, e);
      }
      function xd(e, t, n = !1) {
        for (let r = 0; r < t.length; r++) if (Oy(e, t[r], n)) return !0;
        return !1;
      }
      function Fd(e, t) {
        return e ? ':not(' + t.trim() + ')' : t;
      }
      function By(e) {
        let t = e[0],
          n = 1,
          r = 2,
          o = '',
          i = !1;
        for (; n < e.length; ) {
          let s = e[n];
          if ('string' == typeof s)
            if (2 & r) {
              const c = e[++n];
              o += '[' + s + (c.length > 0 ? '="' + c + '"' : '') + ']';
            } else 8 & r ? (o += '.' + s) : 4 & r && (o += ' ' + s);
          else
            '' !== o && !yr(s) && ((t += Fd(i, o)), (o = '')),
              (r = s),
              (i = i || !yr(r));
          n++;
        }
        return '' !== o && (t += Fd(i, o)), t;
      }
      const et = {};
      function Rd(e) {
        Od(lt(), ne(), un() + e, !1);
      }
      function Od(e, t, n, r) {
        if (!r)
          if (3 == (3 & t[2])) {
            const i = e.preOrderCheckHooks;
            null !== i && ni(t, i, n);
          } else {
            const i = e.preOrderHooks;
            null !== i && ri(t, i, 0, n);
          }
        pr(n);
      }
      const Vd = new Ae('ENVIRONMENT_INITIALIZER'),
        kd = new Ae('INJECTOR_DEF_TYPES');
      function Yy(...e) {
        return { ɵproviders: Bd(0, e) };
      }
      function Bd(e, ...t) {
        const n = [],
          r = new Set();
        let o;
        return (
          Qr(t, i => {
            const s = i;
            kl(s, n, [], r) && (o || (o = []), o.push(s));
          }),
          void 0 !== o && jd(o, n),
          n
        );
      }
      function jd(e, t) {
        for (let n = 0; n < e.length; n++) {
          const { providers: o } = e[n];
          Qr(o, i => {
            t.push(i);
          });
        }
      }
      function kl(e, t, n, r) {
        if (!(e = J(e))) return !1;
        let o = null,
          i = Vr(e);
        const s = !i && dt(e);
        if (i || s) {
          if (s && !s.standalone) return !1;
          o = e;
        } else {
          const d = e.ngModule;
          if (((i = Vr(d)), !i)) return !1;
          o = d;
        }
        const c = r.has(o);
        if (s) {
          if (c) return !1;
          if ((r.add(o), s.dependencies)) {
            const d =
              'function' == typeof s.dependencies
                ? s.dependencies()
                : s.dependencies;
            for (const _ of d) kl(_, t, n, r);
          }
        } else {
          if (!i) return !1;
          {
            if (null != i.imports && !c) {
              let _;
              r.add(o);
              try {
                Qr(i.imports, C => {
                  kl(C, t, n, r) && (_ || (_ = []), _.push(C));
                });
              } finally {
              }
              void 0 !== _ && jd(_, t);
            }
            if (!c) {
              const _ = Un(o) || (() => new o());
              t.push(
                { provide: o, useFactory: _, deps: $e },
                { provide: kd, useValue: o, multi: !0 },
                { provide: Vd, useValue: () => qt(o), multi: !0 }
              );
            }
            const d = i.providers;
            null == d ||
              c ||
              Qr(d, C => {
                t.push(C);
              });
          }
        }
        return o !== e && void 0 !== e.providers;
      }
      const qy = re({ provide: String, useValue: re });
      function Bl(e) {
        return null !== e && 'object' == typeof e && qy in e;
      }
      function Vo(e) {
        return 'function' == typeof e;
      }
      const jl = new Ae('INJECTOR', -1);
      class $d {
        get(t, n = rs) {
          if (n === rs) {
            const r = new Error(`NullInjectorError: No provider for ${ue(t)}!`);
            throw ((r.name = 'NullInjectorError'), r);
          }
          return n;
        }
      }
      const Ul = new Ae('Set Injector scope.'),
        ma = {},
        Qy = {};
      let Hl;
      function $l() {
        return void 0 === Hl && (Hl = new $d()), Hl;
      }
      class gi {}
      class Gd extends gi {
        constructor(t, n, r, o) {
          super(),
            (this.parent = n),
            (this.source = r),
            (this.scopes = o),
            (this.records = new Map()),
            (this._ngOnDestroyHooks = new Set()),
            (this._onDestroyHooks = []),
            (this._destroyed = !1),
            zl(t, s => this.processProvider(s)),
            this.records.set(jl, mi(void 0, this)),
            o.has('environment') && this.records.set(gi, mi(void 0, this));
          const i = this.records.get(Ul);
          null != i && 'string' == typeof i.value && this.scopes.add(i.value),
            (this.injectorDefTypes = new Set(this.get(kd.multi, $e, Ne.Self)));
        }
        get destroyed() {
          return this._destroyed;
        }
        destroy() {
          this.assertNotDestroyed(), (this._destroyed = !0);
          try {
            for (const t of this._ngOnDestroyHooks) t.ngOnDestroy();
            for (const t of this._onDestroyHooks) t();
          } finally {
            this.records.clear(),
              this._ngOnDestroyHooks.clear(),
              this.injectorDefTypes.clear(),
              (this._onDestroyHooks.length = 0);
          }
        }
        onDestroy(t) {
          this._onDestroyHooks.push(t);
        }
        get(t, n = rs, r = Ne.Default) {
          this.assertNotDestroyed();
          const o = ia(this),
            i = wt(void 0);
          try {
            if (!(r & Ne.SkipSelf)) {
              let c = this.records.get(t);
              if (void 0 === c) {
                const d =
                  (function tv(e) {
                    return (
                      'function' == typeof e ||
                      ('object' == typeof e && e instanceof Ae)
                    );
                  })(t) && tt(t);
                (c = d && this.injectableDefInScope(d) ? mi(Gl(t), ma) : null),
                  this.records.set(t, c);
              }
              if (null != c) return this.hydrate(t, c);
            }
            return (r & Ne.Self ? $l() : this.parent).get(
              t,
              (n = r & Ne.Optional && n === rs ? null : n)
            );
          } catch (s) {
            if ('NullInjectorError' === s.name) {
              if (((s[oa] = s[oa] || []).unshift(ue(t)), o)) throw s;
              return (function um(e, t, n, r) {
                const o = e[oa];
                throw (
                  (t[Oc] && o.unshift(t[Oc]),
                  (e.message = (function cm(e, t, n, r = null) {
                    e =
                      e && '\n' === e.charAt(0) && '\u0275' == e.charAt(1)
                        ? e.slice(2)
                        : e;
                    let o = ue(t);
                    if (Array.isArray(t)) o = t.map(ue).join(' -> ');
                    else if ('object' == typeof t) {
                      let i = [];
                      for (let s in t)
                        if (t.hasOwnProperty(s)) {
                          let c = t[s];
                          i.push(
                            s +
                              ':' +
                              ('string' == typeof c ? JSON.stringify(c) : ue(c))
                          );
                        }
                      o = `{${i.join(', ')}}`;
                    }
                    return `${n}${r ? '(' + r + ')' : ''}[${o}]: ${e.replace(
                      om,
                      '\n  '
                    )}`;
                  })('\n' + e.message, o, n, r)),
                  (e.ngTokenPath = o),
                  (e[oa] = null),
                  e)
                );
              })(s, t, 'R3InjectorError', this.source);
            }
            throw s;
          } finally {
            wt(i), ia(o);
          }
        }
        resolveInjectorInitializers() {
          const t = ia(this),
            n = wt(void 0);
          try {
            const r = this.get(Vd.multi, $e, Ne.Self);
            for (const o of r) o();
          } finally {
            ia(t), wt(n);
          }
        }
        toString() {
          const t = [],
            n = this.records;
          for (const r of n.keys()) t.push(ue(r));
          return `R3Injector[${t.join(', ')}]`;
        }
        assertNotDestroyed() {
          if (this._destroyed) throw new de(205, !1);
        }
        processProvider(t) {
          let n = Vo((t = J(t))) ? t : J(t && t.provide);
          const r = (function Jy(e) {
            return Bl(e) ? mi(void 0, e.useValue) : mi(zd(e), ma);
          })(t);
          if (Vo(t) || !0 !== t.multi) this.records.get(n);
          else {
            let o = this.records.get(n);
            o ||
              ((o = mi(void 0, ma, !0)),
              (o.factory = () => fl(o.multi)),
              this.records.set(n, o)),
              (n = t),
              o.multi.push(t);
          }
          this.records.set(n, r);
        }
        hydrate(t, n) {
          return (
            n.value === ma && ((n.value = Qy), (n.value = n.factory())),
            'object' == typeof n.value &&
              n.value &&
              (function ev(e) {
                return (
                  null !== e &&
                  'object' == typeof e &&
                  'function' == typeof e.ngOnDestroy
                );
              })(n.value) &&
              this._ngOnDestroyHooks.add(n.value),
            n.value
          );
        }
        injectableDefInScope(t) {
          if (!t.providedIn) return !1;
          const n = J(t.providedIn);
          return 'string' == typeof n
            ? 'any' === n || this.scopes.has(n)
            : this.injectorDefTypes.has(n);
        }
      }
      function Gl(e) {
        const t = tt(e),
          n = null !== t ? t.factory : Un(e);
        if (null !== n) return n;
        if (e instanceof Ae) throw new de(204, !1);
        if (e instanceof Function)
          return (function Zy(e) {
            const t = e.length;
            if (t > 0)
              throw (
                ((function ns(e, t) {
                  const n = [];
                  for (let r = 0; r < e; r++) n.push(t);
                  return n;
                })(t, '?'),
                new de(204, !1))
              );
            const n = (function Et(e) {
              const t = e && (e[vn] || e[In]);
              if (t) {
                const n = (function yt(e) {
                  if (e.hasOwnProperty('name')) return e.name;
                  const t = ('' + e).match(/^function\s*([^\s(]+)/);
                  return null === t ? '' : t[1];
                })(e);
                return (
                  console.warn(
                    `DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`
                  ),
                  t
                );
              }
              return null;
            })(e);
            return null !== n ? () => n.factory(e) : () => new e();
          })(e);
        throw new de(204, !1);
      }
      function zd(e, t, n) {
        let r;
        if (Vo(e)) {
          const o = J(e);
          return Un(o) || Gl(o);
        }
        if (Bl(e)) r = () => J(e.useValue);
        else if (
          (function Hd(e) {
            return !(!e || !e.useFactory);
          })(e)
        )
          r = () => e.useFactory(...fl(e.deps || []));
        else if (
          (function Ud(e) {
            return !(!e || !e.useExisting);
          })(e)
        )
          r = () => qt(J(e.useExisting));
        else {
          const o = J(e && (e.useClass || e.provide));
          if (
            !(function Xy(e) {
              return !!e.deps;
            })(e)
          )
            return Un(o) || Gl(o);
          r = () => new o(...fl(e.deps));
        }
        return r;
      }
      function mi(e, t, n = !1) {
        return { factory: e, value: t, multi: n ? [] : void 0 };
      }
      function nv(e) {
        return !!e.ɵproviders;
      }
      function zl(e, t) {
        for (const n of e)
          Array.isArray(n) ? zl(n, t) : nv(n) ? zl(n.ɵproviders, t) : t(n);
      }
      function Wd(e, t = null, n = null, r) {
        const o = Yd(e, t, n, r);
        return o.resolveInjectorInitializers(), o;
      }
      function Yd(e, t = null, n = null, r, o = new Set()) {
        const i = [n || $e, Yy(e)];
        return (
          (r = r || ('object' == typeof e ? void 0 : ue(e))),
          new Gd(i, t || $l(), r || null, o)
        );
      }
      let Fr = (() => {
        class e {
          static create(n, r) {
            if (Array.isArray(n)) return Wd({ name: '' }, r, n, '');
            {
              const o = n.name ?? '';
              return Wd({ name: o }, n.parent, n.providers, o);
            }
          }
        }
        return (
          (e.THROW_IF_NOT_FOUND = rs),
          (e.NULL = new $d()),
          (e.ɵprov = ke({
            token: e,
            providedIn: 'any',
            factory: () => qt(jl),
          })),
          (e.__NG_ELEMENT_ID__ = -1),
          e
        );
      })();
      function vi(e, t = Ne.Default) {
        const n = ne();
        return null === n ? qt(e, t) : Js(St(), n, J(e), t);
      }
      function ef() {
        throw new Error('invalid');
      }
      function va(e, t) {
        return (e << 17) | (t << 2);
      }
      function vr(e) {
        return (e >> 17) & 32767;
      }
      function Xl(e) {
        return 2 | e;
      }
      function Jr(e) {
        return (131068 & e) >> 2;
      }
      function eu(e, t) {
        return (-131069 & e) | (t << 2);
      }
      function tu(e) {
        return 1 | e;
      }
      function gf(e, t) {
        const n = e.contentQueries;
        if (null !== n)
          for (let r = 0; r < n.length; r += 2) {
            const o = n[r],
              i = n[r + 1];
            if (-1 !== i) {
              const s = e.data[i];
              Gi(o), s.contentQueries(2, t[i], i);
            }
          }
      }
      function ys(e, t, n, r, o, i, s, c, d, _, C) {
        const A = t.blueprint.slice();
        return (
          (A[0] = o),
          (A[2] = 76 | r),
          (null !== C || (e && 1024 & e[2])) && (A[2] |= 1024),
          Nt(A),
          (A[3] = A[15] = e),
          (A[8] = n),
          (A[10] = s || (e && e[10])),
          (A[11] = c || (e && e[11])),
          (A[12] = d || (e && e[12]) || null),
          (A[9] = _ || (e && e[9]) || null),
          (A[6] = i),
          (A[20] = (function ty() {
            return ey++;
          })()),
          (A[21] = C),
          (A[16] = 2 == t.type ? e[16] : A),
          A
        );
      }
      function Di(e, t, n, r, o) {
        let i = e.data[t];
        if (null === i)
          (i = (function cu(e, t, n, r, o) {
            const i = Xo(),
              s = h(),
              d = (e.data[t] = (function Pv(e, t, n, r, o, i) {
                return {
                  type: n,
                  index: r,
                  insertBeforeIndex: null,
                  injectorIndex: t ? t.injectorIndex : -1,
                  directiveStart: -1,
                  directiveEnd: -1,
                  directiveStylingLast: -1,
                  propertyBindings: null,
                  flags: 0,
                  providerIndexes: 0,
                  value: o,
                  attrs: i,
                  mergedAttrs: null,
                  localNames: null,
                  initialInputs: void 0,
                  inputs: null,
                  outputs: null,
                  tViews: null,
                  next: null,
                  projectionNext: null,
                  child: null,
                  parent: t,
                  projection: null,
                  styles: null,
                  stylesWithoutHost: null,
                  residualStyles: void 0,
                  classes: null,
                  classesWithoutHost: null,
                  residualClasses: void 0,
                  classBindings: 0,
                  styleBindings: 0,
                };
              })(0, s ? i : i && i.parent, n, t, r, o));
            return (
              null === e.firstChild && (e.firstChild = d),
              null !== i &&
                (s
                  ? null == i.child && null !== d.parent && (i.child = d)
                  : null === i.next && (i.next = d)),
              d
            );
          })(e, t, n, r, o)),
            (function qa() {
              return Fe.lFrame.inI18n;
            })() && (i.flags |= 64);
        else if (64 & i.type) {
          (i.type = n), (i.value = r), (i.attrs = o);
          const s = (function v() {
            const e = Fe.lFrame,
              t = e.currentTNode;
            return e.isParent ? t : t.parent;
          })();
          i.injectorIndex = null === s ? -1 : s.injectorIndex;
        }
        return p(i, !0), i;
      }
      function _i(e, t, n, r) {
        if (0 === n) return -1;
        const o = t.length;
        for (let i = 0; i < n; i++)
          t.push(r), e.blueprint.push(r), e.data.push(null);
        return o;
      }
      function vs(e, t, n) {
        ei(t);
        try {
          const r = e.viewQuery;
          null !== r && Du(1, r, n);
          const o = e.template;
          null !== o && mf(e, t, o, 1, n),
            e.firstCreatePass && (e.firstCreatePass = !1),
            e.staticContentQueries && gf(e, t),
            e.staticViewQueries && Du(2, e.viewQuery, n);
          const i = e.components;
          null !== i &&
            (function Fv(e, t) {
              for (let n = 0; n < t.length; n++) Jv(e, t[n]);
            })(t, i);
        } catch (r) {
          throw (
            (e.firstCreatePass &&
              ((e.incompleteFirstPass = !0), (e.firstCreatePass = !1)),
            r)
          );
        } finally {
          (t[2] &= -5), ti();
        }
      }
      function Ci(e, t, n, r) {
        const o = t[2];
        if (128 != (128 & o)) {
          ei(t);
          try {
            Nt(t),
              (function qr(e) {
                return (Fe.lFrame.bindingIndex = e);
              })(e.bindingStartIndex),
              null !== n && mf(e, t, n, 2, r);
            const s = 3 == (3 & o);
            if (s) {
              const _ = e.preOrderCheckHooks;
              null !== _ && ni(t, _, null);
            } else {
              const _ = e.preOrderHooks;
              null !== _ && ri(t, _, 0, null), qi(t, 0);
            }
            if (
              ((function Qv(e) {
                for (let t = Sl(e); null !== t; t = Tl(t)) {
                  if (!t[2]) continue;
                  const n = t[9];
                  for (let r = 0; r < n.length; r++) {
                    const o = n[r],
                      i = o[3];
                    0 == (512 & o[2]) && ft(i, 1), (o[2] |= 512);
                  }
                }
              })(t),
              (function Kv(e) {
                for (let t = Sl(e); null !== t; t = Tl(t))
                  for (let n = 10; n < t.length; n++) {
                    const r = t[n],
                      o = r[1];
                    mt(r) && Ci(o, r, o.template, r[8]);
                  }
              })(t),
              null !== e.contentQueries && gf(e, t),
              s)
            ) {
              const _ = e.contentCheckHooks;
              null !== _ && ni(t, _);
            } else {
              const _ = e.contentHooks;
              null !== _ && ri(t, _, 1), qi(t, 1);
            }
            !(function Tv(e, t) {
              const n = e.hostBindingOpCodes;
              if (null !== n)
                try {
                  for (let r = 0; r < n.length; r++) {
                    const o = n[r];
                    if (o < 0) pr(~o);
                    else {
                      const i = o,
                        s = n[++r],
                        c = n[++r];
                      To(s, i), c(2, t[i]);
                    }
                  }
                } finally {
                  pr(-1);
                }
            })(e, t);
            const c = e.components;
            null !== c &&
              (function xv(e, t) {
                for (let n = 0; n < t.length; n++) Zv(e, t[n]);
              })(t, c);
            const d = e.viewQuery;
            if ((null !== d && Du(2, d, r), s)) {
              const _ = e.viewCheckHooks;
              null !== _ && ni(t, _);
            } else {
              const _ = e.viewHooks;
              null !== _ && ri(t, _, 2), qi(t, 2);
            }
            !0 === e.firstUpdatePass && (e.firstUpdatePass = !1),
              (t[2] &= -41),
              512 & t[2] && ((t[2] &= -513), ft(t[3], -1));
          } finally {
            ti();
          }
        }
      }
      function Rv(e, t, n, r) {
        const o = t[10],
          s = ut(t);
        try {
          !s && o.begin && o.begin(), s && vs(e, t, r), Ci(e, t, n, r);
        } finally {
          !s && o.end && o.end();
        }
      }
      function mf(e, t, n, r, o) {
        const i = un(),
          s = 2 & r;
        try {
          pr(-1), s && t.length > 22 && Od(e, t, 22, !1), n(r, o);
        } finally {
          pr(i);
        }
      }
      function yf(e, t, n) {
        if (Rn(t)) {
          const o = t.directiveEnd;
          for (let i = t.directiveStart; i < o; i++) {
            const s = e.data[i];
            s.contentQueries && s.contentQueries(1, n[i], i);
          }
        }
      }
      function du(e, t, n) {
        !Ar() ||
          ((function Uv(e, t, n, r) {
            const o = n.directiveStart,
              i = n.directiveEnd;
            e.firstCreatePass || po(n, t), mn(r, t);
            const s = n.initialInputs;
            for (let c = o; c < i; c++) {
              const d = e.data[c],
                _ = nn(d);
              _ && Wv(t, n, d);
              const C = No(t, e, c, n);
              mn(C, t),
                null !== s && Yv(0, c - o, C, d, 0, s),
                _ && (be(n.index, t)[8] = C);
            }
          })(e, t, n, M(n, t)),
          128 == (128 & n.flags) &&
            (function Hv(e, t, n) {
              const r = n.directiveStart,
                o = n.directiveEnd,
                i = n.index,
                s = (function Ka() {
                  return Fe.lFrame.currentDirectiveIndex;
                })();
              try {
                pr(i);
                for (let c = r; c < o; c++) {
                  const d = e.data[c],
                    _ = t[c];
                  Hi(c),
                    (null !== d.hostBindings ||
                      0 !== d.hostVars ||
                      null !== d.hostAttrs) &&
                      Mf(d, _);
                }
              } finally {
                pr(-1), Hi(s);
              }
            })(e, t, n));
      }
      function fu(e, t, n = M) {
        const r = t.localNames;
        if (null !== r) {
          let o = t.index + 1;
          for (let i = 0; i < r.length; i += 2) {
            const s = r[i + 1],
              c = -1 === s ? n(t, e) : e[s];
            e[o++] = c;
          }
        }
      }
      function vf(e) {
        const t = e.tView;
        return null === t || t.incompleteFirstPass
          ? (e.tView = Ca(
              1,
              null,
              e.template,
              e.decls,
              e.vars,
              e.directiveDefs,
              e.pipeDefs,
              e.viewQuery,
              e.schemas,
              e.consts
            ))
          : t;
      }
      function Ca(e, t, n, r, o, i, s, c, d, _) {
        const C = 22 + r,
          A = C + o,
          O = (function Ov(e, t) {
            const n = [];
            for (let r = 0; r < t; r++) n.push(r < e ? null : et);
            return n;
          })(C, A),
          B = 'function' == typeof _ ? _() : _;
        return (O[1] = {
          type: e,
          blueprint: O,
          template: n,
          queries: null,
          viewQuery: c,
          declTNode: t,
          data: O.slice().fill(null, C),
          bindingStartIndex: C,
          expandoStartIndex: A,
          hostBindingOpCodes: null,
          firstCreatePass: !0,
          firstUpdatePass: !0,
          staticViewQueries: !1,
          staticContentQueries: !1,
          preOrderHooks: null,
          preOrderCheckHooks: null,
          contentHooks: null,
          contentCheckHooks: null,
          viewHooks: null,
          viewCheckHooks: null,
          destroyHooks: null,
          cleanup: null,
          contentQueries: null,
          components: null,
          directiveRegistry: 'function' == typeof i ? i() : i,
          pipeRegistry: 'function' == typeof s ? s() : s,
          firstChild: null,
          schemas: d,
          consts: B,
          incompleteFirstPass: !1,
        });
      }
      function Cf(e, t, n, r) {
        const o = xf(t);
        null === n
          ? o.push(r)
          : (o.push(n), e.firstCreatePass && Ff(e).push(r, o.length - 1));
      }
      function Ef(e, t, n) {
        for (let r in e)
          if (e.hasOwnProperty(r)) {
            const o = e[r];
            (n = null === n ? {} : n).hasOwnProperty(r)
              ? n[r].push(t, o)
              : (n[r] = [t, o]);
          }
        return n;
      }
      function Wn(e, t, n, r, o, i, s, c) {
        const d = M(t, n);
        let C,
          _ = t.inputs;
        !c && null != _ && (C = _[r])
          ? (Pf(e, n, C, r, o),
            jt(t) &&
              (function Vv(e, t) {
                const n = be(t, e);
                16 & n[2] || (n[2] |= 32);
              })(n, t.index))
          : 3 & t.type &&
            ((r = (function Lv(e) {
              return 'class' === e
                ? 'className'
                : 'for' === e
                ? 'htmlFor'
                : 'formaction' === e
                ? 'formAction'
                : 'innerHtml' === e
                ? 'innerHTML'
                : 'readonly' === e
                ? 'readOnly'
                : 'tabindex' === e
                ? 'tabIndex'
                : e;
            })(r)),
            (o = null != s ? s(o, t.value || '', r) : o),
            vt(i)
              ? i.setProperty(d, r, o)
              : Zi(r) || (d.setProperty ? d.setProperty(r, o) : (d[r] = o)));
      }
      function hu(e, t, n, r) {
        let o = !1;
        if (Ar()) {
          const i = (function $v(e, t, n) {
              const r = e.directiveRegistry;
              let o = null;
              if (r)
                for (let i = 0; i < r.length; i++) {
                  const s = r[i];
                  xd(n, s.selectors, !1) &&
                    (o || (o = []),
                    Oo(po(n, t), e, s.type),
                    nn(s) ? (bf(e, n), o.unshift(s)) : o.push(s));
                }
              return o;
            })(e, t, n),
            s = null === r ? null : { '': -1 };
          if (null !== i) {
            (o = !0), If(n, e.data.length, i.length);
            for (let C = 0; C < i.length; C++) {
              const A = i[C];
              A.providersResolver && A.providersResolver(A);
            }
            let c = !1,
              d = !1,
              _ = _i(e, t, i.length, null);
            for (let C = 0; C < i.length; C++) {
              const A = i[C];
              (n.mergedAttrs = si(n.mergedAttrs, A.hostAttrs)),
                Af(e, n, t, _, A),
                zv(_, A, s),
                null !== A.contentQueries && (n.flags |= 8),
                (null !== A.hostBindings ||
                  null !== A.hostAttrs ||
                  0 !== A.hostVars) &&
                  (n.flags |= 128);
              const O = A.type.prototype;
              !c &&
                (O.ngOnChanges || O.ngOnInit || O.ngDoCheck) &&
                ((e.preOrderHooks || (e.preOrderHooks = [])).push(n.index),
                (c = !0)),
                !d &&
                  (O.ngOnChanges || O.ngDoCheck) &&
                  ((e.preOrderCheckHooks || (e.preOrderCheckHooks = [])).push(
                    n.index
                  ),
                  (d = !0)),
                _++;
            }
            !(function Nv(e, t) {
              const r = t.directiveEnd,
                o = e.data,
                i = t.attrs,
                s = [];
              let c = null,
                d = null;
              for (let _ = t.directiveStart; _ < r; _++) {
                const C = o[_],
                  A = C.inputs,
                  O = null === i || Td(t) ? null : qv(A, i);
                s.push(O), (c = Ef(A, _, c)), (d = Ef(C.outputs, _, d));
              }
              null !== c &&
                (c.hasOwnProperty('class') && (t.flags |= 16),
                c.hasOwnProperty('style') && (t.flags |= 32)),
                (t.initialInputs = s),
                (t.inputs = c),
                (t.outputs = d);
            })(e, n);
          }
          s &&
            (function Gv(e, t, n) {
              if (t) {
                const r = (e.localNames = []);
                for (let o = 0; o < t.length; o += 2) {
                  const i = n[t[o + 1]];
                  if (null == i) throw new de(-301, !1);
                  r.push(t[o], i);
                }
              }
            })(n, r, s);
        }
        return (n.mergedAttrs = si(n.mergedAttrs, n.attrs)), o;
      }
      function wf(e, t, n, r, o, i) {
        const s = i.hostBindings;
        if (s) {
          let c = e.hostBindingOpCodes;
          null === c && (c = e.hostBindingOpCodes = []);
          const d = ~t.index;
          (function jv(e) {
            let t = e.length;
            for (; t > 0; ) {
              const n = e[--t];
              if ('number' == typeof n && n < 0) return n;
            }
            return 0;
          })(c) != d && c.push(d),
            c.push(r, o, s);
        }
      }
      function Mf(e, t) {
        null !== e.hostBindings && e.hostBindings(1, t);
      }
      function bf(e, t) {
        (t.flags |= 2), (e.components || (e.components = [])).push(t.index);
      }
      function zv(e, t, n) {
        if (n) {
          if (t.exportAs)
            for (let r = 0; r < t.exportAs.length; r++) n[t.exportAs[r]] = e;
          nn(t) && (n[''] = e);
        }
      }
      function If(e, t, n) {
        (e.flags |= 1),
          (e.directiveStart = t),
          (e.directiveEnd = t + n),
          (e.providerIndexes = t);
      }
      function Af(e, t, n, r, o) {
        e.data[r] = o;
        const i = o.factory || (o.factory = Un(o.type)),
          s = new Kr(i, nn(o), vi);
        (e.blueprint[r] = s),
          (n[r] = s),
          wf(e, t, 0, r, _i(e, n, o.hostVars, et), o);
      }
      function Wv(e, t, n) {
        const r = M(t, e),
          o = vf(n),
          i = e[10],
          s = Ea(
            e,
            ys(
              e,
              o,
              null,
              n.onPush ? 32 : 16,
              r,
              t,
              i,
              i.createRenderer(r, n),
              null,
              null,
              null
            )
          );
        e[t.index] = s;
      }
      function Rr(e, t, n, r, o, i) {
        const s = M(e, t);
        !(function pu(e, t, n, r, o, i, s) {
          if (null == i)
            vt(e) ? e.removeAttribute(t, o, n) : t.removeAttribute(o);
          else {
            const c = null == s ? ae(i) : s(i, r || '', o);
            vt(e)
              ? e.setAttribute(t, o, c, n)
              : n
              ? t.setAttributeNS(n, o, c)
              : t.setAttribute(o, c);
          }
        })(t[11], s, i, e.value, n, r, o);
      }
      function Yv(e, t, n, r, o, i) {
        const s = i[t];
        if (null !== s) {
          const c = r.setInput;
          for (let d = 0; d < s.length; ) {
            const _ = s[d++],
              C = s[d++],
              A = s[d++];
            null !== c ? r.setInput(n, A, _, C) : (n[C] = A);
          }
        }
      }
      function qv(e, t) {
        let n = null,
          r = 0;
        for (; r < t.length; ) {
          const o = t[r];
          if (0 !== o)
            if (5 !== o) {
              if ('number' == typeof o) break;
              e.hasOwnProperty(o) &&
                (null === n && (n = []), n.push(o, e[o], t[r + 1])),
                (r += 2);
            } else r += 2;
          else r += 4;
        }
        return n;
      }
      function Sf(e, t, n, r) {
        return new Array(e, !0, !1, t, null, 0, r, n, null, null);
      }
      function Zv(e, t) {
        const n = be(t, e);
        if (mt(n)) {
          const r = n[1];
          48 & n[2] ? Ci(r, n, r.template, n[8]) : n[5] > 0 && gu(n);
        }
      }
      function gu(e) {
        for (let r = Sl(e); null !== r; r = Tl(r))
          for (let o = 10; o < r.length; o++) {
            const i = r[o];
            if (512 & i[2]) {
              const s = i[1];
              Ci(s, i, s.template, i[8]);
            } else i[5] > 0 && gu(i);
          }
        const n = e[1].components;
        if (null !== n)
          for (let r = 0; r < n.length; r++) {
            const o = be(n[r], e);
            mt(o) && o[5] > 0 && gu(o);
          }
      }
      function Jv(e, t) {
        const n = be(t, e),
          r = n[1];
        (function Xv(e, t) {
          for (let n = t.length; n < e.blueprint.length; n++)
            t.push(e.blueprint[n]);
        })(r, n),
          vs(r, n, n[8]);
      }
      function Ea(e, t) {
        return e[13] ? (e[14][4] = t) : (e[13] = t), (e[14] = t), t;
      }
      function mu(e) {
        for (; e; ) {
          e[2] |= 32;
          const t = gs(e);
          if (no(e) && !t) return e;
          e = t;
        }
        return null;
      }
      function Tf(e) {
        !(function yu(e) {
          for (let t = 0; t < e.components.length; t++) {
            const n = e.components[t],
              r = bl(n);
            if (null !== r) {
              const o = r[1];
              Rv(o, r, o.template, n);
            }
          }
        })(e[8]);
      }
      function Du(e, t, n) {
        Gi(0), t(e, n);
      }
      const tD = (() => Promise.resolve(null))();
      function xf(e) {
        return e[7] || (e[7] = []);
      }
      function Ff(e) {
        return e.cleanup || (e.cleanup = []);
      }
      function Of(e, t) {
        const n = e[9],
          r = n ? n.get(hs, null) : null;
        r && r.handleError(t);
      }
      function Pf(e, t, n, r, o) {
        for (let i = 0; i < n.length; ) {
          const s = n[i++],
            c = n[i++],
            d = t[s],
            _ = e.data[s];
          null !== _.setInput ? _.setInput(d, o, r, c) : (d[c] = o);
        }
      }
      function Xr(e, t, n) {
        const r = m(t, e);
        !(function dd(e, t, n) {
          vt(e) ? e.setValue(t, n) : (t.textContent = n);
        })(e[11], r, n);
      }
      function wa(e, t, n) {
        let r = n ? e.styles : null,
          o = n ? e.classes : null,
          i = 0;
        if (null !== t)
          for (let s = 0; s < t.length; s++) {
            const c = t[s];
            'number' == typeof c
              ? (i = c)
              : 1 == i
              ? (o = ye(o, c))
              : 2 == i && (r = ye(r, c + ': ' + t[++s] + ';'));
          }
        n ? (e.styles = r) : (e.stylesWithoutHost = r),
          n ? (e.classes = o) : (e.classesWithoutHost = o);
      }
      function fD() {
        const e = St();
        fo(ne()[1], e);
      }
      function Cu(e) {
        let t = (function Wf(e) {
            return Object.getPrototypeOf(e.prototype).constructor;
          })(e.type),
          n = !0;
        const r = [e];
        for (; t; ) {
          let o;
          if (nn(e)) o = t.ɵcmp || t.ɵdir;
          else {
            if (t.ɵcmp) throw new de(903, !1);
            o = t.ɵdir;
          }
          if (o) {
            if (n) {
              r.push(o);
              const s = e;
              (s.inputs = Eu(e.inputs)),
                (s.declaredInputs = Eu(e.declaredInputs)),
                (s.outputs = Eu(e.outputs));
              const c = o.hostBindings;
              c && mD(e, c);
              const d = o.viewQuery,
                _ = o.contentQueries;
              if (
                (d && pD(e, d),
                _ && gD(e, _),
                se(e.inputs, o.inputs),
                se(e.declaredInputs, o.declaredInputs),
                se(e.outputs, o.outputs),
                nn(o) && o.data.animation)
              ) {
                const C = e.data;
                C.animation = (C.animation || []).concat(o.data.animation);
              }
            }
            const i = o.features;
            if (i)
              for (let s = 0; s < i.length; s++) {
                const c = i[s];
                c && c.ngInherit && c(e), c === Cu && (n = !1);
              }
          }
          t = Object.getPrototypeOf(t);
        }
        !(function hD(e) {
          let t = 0,
            n = null;
          for (let r = e.length - 1; r >= 0; r--) {
            const o = e[r];
            (o.hostVars = t += o.hostVars),
              (o.hostAttrs = si(o.hostAttrs, (n = si(n, o.hostAttrs))));
          }
        })(r);
      }
      function Eu(e) {
        return e === sn ? {} : e === $e ? [] : e;
      }
      function pD(e, t) {
        const n = e.viewQuery;
        e.viewQuery = n
          ? (r, o) => {
              t(r, o), n(r, o);
            }
          : t;
      }
      function gD(e, t) {
        const n = e.contentQueries;
        e.contentQueries = n
          ? (r, o, i) => {
              t(r, o, i), n(r, o, i);
            }
          : t;
      }
      function mD(e, t) {
        const n = e.hostBindings;
        e.hostBindings = n
          ? (r, o) => {
              t(r, o), n(r, o);
            }
          : t;
      }
      let Ma = null;
      function ko() {
        if (!Ma) {
          const e = Ce.Symbol;
          if (e && e.iterator) Ma = e.iterator;
          else {
            const t = Object.getOwnPropertyNames(Map.prototype);
            for (let n = 0; n < t.length; ++n) {
              const r = t[n];
              'entries' !== r &&
                'size' !== r &&
                Map.prototype[r] === Map.prototype.entries &&
                (Ma = r);
            }
          }
        }
        return Ma;
      }
      function Ds(e) {
        return (
          !!wu(e) && (Array.isArray(e) || (!(e instanceof Map) && ko() in e))
        );
      }
      function wu(e) {
        return null !== e && ('function' == typeof e || 'object' == typeof e);
      }
      function yn(e, t, n) {
        return !Object.is(e[t], n) && ((e[t] = n), !0);
      }
      function Mu(e, t, n, r) {
        const o = ne();
        return yn(o, wn(), t) && (lt(), Rr(Lt(), o, e, t, n, r)), Mu;
      }
      function wi(e, t, n, r) {
        return yn(e, wn(), n) ? t + ae(n) + r : et;
      }
      function nh(e, t, n, r, o, i, s, c) {
        const d = ne(),
          _ = lt(),
          C = e + 22,
          A = _.firstCreatePass
            ? (function wD(e, t, n, r, o, i, s, c, d) {
                const _ = t.consts,
                  C = Di(t, e, 4, s || null, Xe(_, c));
                hu(t, n, C, Xe(_, d)), fo(t, C);
                const A = (C.tViews = Ca(
                  2,
                  C,
                  r,
                  o,
                  i,
                  t.directiveRegistry,
                  t.pipeRegistry,
                  null,
                  t.schemas,
                  _
                ));
                return (
                  null !== t.queries &&
                    (t.queries.template(t, C),
                    (A.queries = t.queries.embeddedTView(C))),
                  C
                );
              })(C, _, d, t, n, r, o, i, s)
            : _.data[C];
        p(A, !1);
        const O = d[11].createComment('');
        pa(_, d, O, A),
          mn(O, d),
          Ea(d, (d[C] = Sf(O, d, O, A))),
          On(A) && du(_, d, A),
          null != s && fu(d, A, c);
      }
      function bu(e, t, n) {
        const r = ne();
        return yn(r, wn(), t) && Wn(lt(), Lt(), r, e, t, r[11], n, !1), bu;
      }
      function Iu(e, t, n, r, o) {
        const s = o ? 'class' : 'style';
        Pf(e, n, t.inputs[s], s, r);
      }
      function Ia(e, t, n, r) {
        const o = ne(),
          i = lt(),
          s = 22 + e,
          c = o[11],
          d = (o[s] = Fl(
            c,
            t,
            (function Us() {
              return Fe.lFrame.currentNamespace;
            })()
          )),
          _ = i.firstCreatePass
            ? (function ID(e, t, n, r, o, i, s) {
                const c = t.consts,
                  _ = Di(t, e, 2, o, Xe(c, i));
                return (
                  hu(t, n, _, Xe(c, s)),
                  null !== _.attrs && wa(_, _.attrs, !1),
                  null !== _.mergedAttrs && wa(_, _.mergedAttrs, !0),
                  null !== t.queries && t.queries.elementStart(t, _),
                  _
                );
              })(s, i, o, 0, t, n, r)
            : i.data[s];
        p(_, !0);
        const C = _.mergedAttrs;
        null !== C && ii(c, d, C);
        const A = _.classes;
        null !== A && Vl(c, d, A);
        const O = _.styles;
        return (
          null !== O && Id(c, d, O),
          64 != (64 & _.flags) && pa(i, o, d, _),
          0 ===
            (function Ln() {
              return Fe.lFrame.elementDepthCount;
            })() && mn(d, o),
          (function Xn() {
            Fe.lFrame.elementDepthCount++;
          })(),
          On(_) && (du(i, o, _), yf(i, _, o)),
          null !== r && fu(o, _),
          Ia
        );
      }
      function Aa() {
        let e = St();
        h() ? b() : ((e = e.parent), p(e, !1));
        const t = e;
        !(function co() {
          Fe.lFrame.elementDepthCount--;
        })();
        const n = lt();
        return (
          n.firstCreatePass && (fo(n, e), Rn(e) && n.queries.elementEnd(e)),
          null != t.classesWithoutHost &&
            (function Ki(e) {
              return 0 != (16 & e.flags);
            })(t) &&
            Iu(n, t, ne(), t.classesWithoutHost, !0),
          null != t.stylesWithoutHost &&
            (function Qi(e) {
              return 0 != (32 & e.flags);
            })(t) &&
            Iu(n, t, ne(), t.stylesWithoutHost, !1),
          Aa
        );
      }
      function Au(e, t, n, r) {
        return Ia(e, t, n, r), Aa(), Au;
      }
      function Sa(e, t, n) {
        const r = ne(),
          o = lt(),
          i = e + 22,
          s = o.firstCreatePass
            ? (function AD(e, t, n, r, o) {
                const i = t.consts,
                  s = Xe(i, r),
                  c = Di(t, e, 8, 'ng-container', s);
                return (
                  null !== s && wa(c, s, !0),
                  hu(t, n, c, Xe(i, o)),
                  null !== t.queries && t.queries.elementStart(t, c),
                  c
                );
              })(i, o, r, t, n)
            : o.data[i];
        p(s, !0);
        const c = (r[i] = r[11].createComment(''));
        return (
          pa(o, r, c, s),
          mn(c, r),
          On(s) && (du(o, r, s), yf(o, s, r)),
          null != n && fu(r, s),
          Sa
        );
      }
      function Ta() {
        let e = St();
        const t = lt();
        return (
          h() ? b() : ((e = e.parent), p(e, !1)),
          t.firstCreatePass && (fo(t, e), Rn(e) && t.queries.elementEnd(e)),
          Ta
        );
      }
      function Su(e) {
        return !!e && 'function' == typeof e.then;
      }
      function oh(e) {
        return !!e && 'function' == typeof e.subscribe;
      }
      const ih = oh;
      function Tu(e, t, n, r) {
        const o = ne(),
          i = lt(),
          s = St();
        return (
          (function ah(e, t, n, r, o, i, s, c) {
            const d = On(r),
              C = e.firstCreatePass && Ff(e),
              A = t[8],
              O = xf(t);
            let B = !0;
            if (3 & r.type || c) {
              const Ee = M(r, t),
                Re = c ? c(Ee) : Ee,
                We = O.length,
                ie = c ? Be => c(It(Be[r.index])) : r.index;
              if (vt(n)) {
                let Be = null;
                if (
                  (!c &&
                    d &&
                    (Be = (function TD(e, t, n, r) {
                      const o = e.cleanup;
                      if (null != o)
                        for (let i = 0; i < o.length - 1; i += 2) {
                          const s = o[i];
                          if (s === n && o[i + 1] === r) {
                            const c = t[7],
                              d = o[i + 2];
                            return c.length > d ? c[d] : null;
                          }
                          'string' == typeof s && (i += 2);
                        }
                      return null;
                    })(e, t, o, r.index)),
                  null !== Be)
                )
                  ((Be.__ngLastListenerFn__ || Be).__ngNextListenerFn__ = i),
                    (Be.__ngLastListenerFn__ = i),
                    (B = !1);
                else {
                  i = xu(r, t, A, i, !1);
                  const pt = n.listen(Re, o, i);
                  O.push(i, pt), C && C.push(o, ie, We, We + 1);
                }
              } else
                (i = xu(r, t, A, i, !0)),
                  Re.addEventListener(o, i, s),
                  O.push(i),
                  C && C.push(o, ie, We, s);
            } else i = xu(r, t, A, i, !1);
            const Q = r.outputs;
            let he;
            if (B && null !== Q && (he = Q[o])) {
              const Ee = he.length;
              if (Ee)
                for (let Re = 0; Re < Ee; Re += 2) {
                  const xt = t[he[Re]][he[Re + 1]].subscribe(i),
                    $o = O.length;
                  O.push(i, xt), C && C.push(o, r.index, $o, -($o + 1));
                }
            }
          })(i, o, o[11], s, e, t, !!n, r),
          Tu
        );
      }
      function lh(e, t, n, r) {
        try {
          return !1 !== n(r);
        } catch (o) {
          return Of(e, o), !1;
        }
      }
      function xu(e, t, n, r, o) {
        return function i(s) {
          if (s === Function) return r;
          mu(2 & e.flags ? be(e.index, t) : t);
          let d = lh(t, 0, r, s),
            _ = i.__ngNextListenerFn__;
          for (; _; ) (d = lh(t, 0, _, s) && d), (_ = _.__ngNextListenerFn__);
          return o && !1 === d && (s.preventDefault(), (s.returnValue = !1)), d;
        };
      }
      function uh(e = 1) {
        return (function Za(e) {
          return (Fe.lFrame.contextLView = (function Ja(e, t) {
            for (; e > 0; ) (t = t[15]), e--;
            return t;
          })(e, Fe.lFrame.contextLView))[8];
        })(e);
      }
      function xa(e, t, n, r, o) {
        const i = ne(),
          s = wi(i, t, n, r);
        return s !== et && Wn(lt(), Lt(), i, e, s, i[11], o, !1), xa;
      }
      function Dh(e, t, n, r, o) {
        const i = e[n + 1],
          s = null === t;
        let c = r ? vr(i) : Jr(i),
          d = !1;
        for (; 0 !== c && (!1 === d || s); ) {
          const C = e[c + 1];
          ND(e[c], t) && ((d = !0), (e[c + 1] = r ? tu(C) : Xl(C))),
            (c = r ? vr(C) : Jr(C));
        }
        d && (e[n + 1] = r ? Xl(i) : tu(i));
      }
      function ND(e, t) {
        return (
          null === e ||
          null == t ||
          (Array.isArray(e) ? e[1] : e) === t ||
          (!(!Array.isArray(e) || 'string' != typeof t) && ci(e, t) >= 0)
        );
      }
      function Fu(e, t) {
        return (
          (function _r(e, t, n, r) {
            const o = ne(),
              i = lt(),
              s = (function ln(e) {
                const t = Fe.lFrame,
                  n = t.bindingIndex;
                return (t.bindingIndex = t.bindingIndex + e), n;
              })(2);
            i.firstUpdatePass &&
              (function Sh(e, t, n, r) {
                const o = e.data;
                if (null === o[n + 1]) {
                  const i = o[un()],
                    s = (function Ah(e, t) {
                      return t >= e.expandoStartIndex;
                    })(e, n);
                  (function Rh(e, t) {
                    return 0 != (e.flags & (t ? 16 : 32));
                  })(i, r) &&
                    null === t &&
                    !s &&
                    (t = !1),
                    (t = (function GD(e, t, n, r) {
                      const o = (function $i(e) {
                        const t = Fe.lFrame.currentDirectiveIndex;
                        return -1 === t ? null : e[t];
                      })(e);
                      let i = r ? t.residualClasses : t.residualStyles;
                      if (null === o)
                        0 === (r ? t.classBindings : t.styleBindings) &&
                          ((n = Cs((n = Ru(null, e, t, n, r)), t.attrs, r)),
                          (i = null));
                      else {
                        const s = t.directiveStylingLast;
                        if (-1 === s || e[s] !== o)
                          if (((n = Ru(o, e, t, n, r)), null === i)) {
                            let d = (function zD(e, t, n) {
                              const r = n ? t.classBindings : t.styleBindings;
                              if (0 !== Jr(r)) return e[vr(r)];
                            })(e, t, r);
                            void 0 !== d &&
                              Array.isArray(d) &&
                              ((d = Ru(null, e, t, d[1], r)),
                              (d = Cs(d, t.attrs, r)),
                              (function WD(e, t, n, r) {
                                e[vr(n ? t.classBindings : t.styleBindings)] =
                                  r;
                              })(e, t, r, d));
                          } else
                            i = (function YD(e, t, n) {
                              let r;
                              const o = t.directiveEnd;
                              for (
                                let i = 1 + t.directiveStylingLast;
                                i < o;
                                i++
                              )
                                r = Cs(r, e[i].hostAttrs, n);
                              return Cs(r, t.attrs, n);
                            })(e, t, r);
                      }
                      return (
                        void 0 !== i &&
                          (r
                            ? (t.residualClasses = i)
                            : (t.residualStyles = i)),
                        n
                      );
                    })(o, i, t, r)),
                    (function OD(e, t, n, r, o, i) {
                      let s = i ? t.classBindings : t.styleBindings,
                        c = vr(s),
                        d = Jr(s);
                      e[r] = n;
                      let C,
                        _ = !1;
                      if (Array.isArray(n)) {
                        const A = n;
                        (C = A[1]), (null === C || ci(A, C) > 0) && (_ = !0);
                      } else C = n;
                      if (o)
                        if (0 !== d) {
                          const O = vr(e[c + 1]);
                          (e[r + 1] = va(O, c)),
                            0 !== O && (e[O + 1] = eu(e[O + 1], r)),
                            (e[c + 1] = (function Dv(e, t) {
                              return (131071 & e) | (t << 17);
                            })(e[c + 1], r));
                        } else
                          (e[r + 1] = va(c, 0)),
                            0 !== c && (e[c + 1] = eu(e[c + 1], r)),
                            (c = r);
                      else
                        (e[r + 1] = va(d, 0)),
                          0 === c ? (c = r) : (e[d + 1] = eu(e[d + 1], r)),
                          (d = r);
                      _ && (e[r + 1] = Xl(e[r + 1])),
                        Dh(e, C, r, !0),
                        Dh(e, C, r, !1),
                        (function PD(e, t, n, r, o) {
                          const i = o ? e.residualClasses : e.residualStyles;
                          null != i &&
                            'string' == typeof t &&
                            ci(i, t) >= 0 &&
                            (n[r + 1] = tu(n[r + 1]));
                        })(t, C, e, r, i),
                        (s = va(c, d)),
                        i ? (t.classBindings = s) : (t.styleBindings = s);
                    })(o, i, t, n, s, r);
                }
              })(i, e, s, r),
              t !== et &&
                yn(o, s, t) &&
                (function xh(e, t, n, r, o, i, s, c) {
                  if (!(3 & t.type)) return;
                  const d = e.data,
                    _ = d[c + 1];
                  Fa(
                    (function af(e) {
                      return 1 == (1 & e);
                    })(_)
                      ? Fh(d, t, n, o, Jr(_), s)
                      : void 0
                  ) ||
                    (Fa(i) ||
                      ((function sf(e) {
                        return 2 == (2 & e);
                      })(_) &&
                        (i = Fh(d, null, n, o, c, s))),
                    (function xy(e, t, n, r, o) {
                      const i = vt(e);
                      if (t)
                        o
                          ? i
                            ? e.addClass(n, r)
                            : n.classList.add(r)
                          : i
                          ? e.removeClass(n, r)
                          : n.classList.remove(r);
                      else {
                        let s = -1 === r.indexOf('-') ? void 0 : xr.DashCase;
                        if (null == o)
                          i
                            ? e.removeStyle(n, r, s)
                            : n.style.removeProperty(r);
                        else {
                          const c =
                            'string' == typeof o && o.endsWith('!important');
                          c && ((o = o.slice(0, -10)), (s |= xr.Important)),
                            i
                              ? e.setStyle(n, r, o, s)
                              : n.style.setProperty(r, o, c ? 'important' : '');
                        }
                      }
                    })(r, s, m(un(), n), o, i));
                })(
                  i,
                  i.data[un()],
                  o,
                  o[11],
                  e,
                  (o[s + 1] = (function QD(e, t) {
                    return (
                      null == e ||
                        ('string' == typeof t
                          ? (e += t)
                          : 'object' == typeof e && (e = ue(mo(e)))),
                      e
                    );
                  })(t, n)),
                  r,
                  s
                );
          })(e, t, null, !0),
          Fu
        );
      }
      function Ru(e, t, n, r, o) {
        let i = null;
        const s = n.directiveEnd;
        let c = n.directiveStylingLast;
        for (
          -1 === c ? (c = n.directiveStart) : c++;
          c < s && ((i = t[c]), (r = Cs(r, i.hostAttrs, o)), i !== e);

        )
          c++;
        return null !== e && (n.directiveStylingLast = c), r;
      }
      function Cs(e, t, n) {
        const r = n ? 1 : 2;
        let o = -1;
        if (null !== t)
          for (let i = 0; i < t.length; i++) {
            const s = t[i];
            'number' == typeof s
              ? (o = s)
              : o === r &&
                (Array.isArray(e) || (e = void 0 === e ? [] : ['', e]),
                zn(e, s, !!n || t[++i]));
          }
        return void 0 === e ? null : e;
      }
      function Fh(e, t, n, r, o, i) {
        const s = null === t;
        let c;
        for (; o > 0; ) {
          const d = e[o],
            _ = Array.isArray(d),
            C = _ ? d[1] : d,
            A = null === C;
          let O = n[o + 1];
          O === et && (O = A ? $e : void 0);
          let B = A ? ul(O, r) : C === r ? O : void 0;
          if ((_ && !Fa(B) && (B = ul(d, r)), Fa(B) && ((c = B), s))) return c;
          const Q = e[o + 1];
          o = s ? vr(Q) : Jr(Q);
        }
        if (null !== t) {
          let d = i ? t.residualClasses : t.residualStyles;
          null != d && (c = ul(d, r));
        }
        return c;
      }
      function Fa(e) {
        return void 0 !== e;
      }
      function Oh(e, t = '') {
        const n = ne(),
          r = lt(),
          o = e + 22,
          i = r.firstCreatePass ? Di(r, o, 1, t, null) : r.data[o],
          s = (n[o] = (function xl(e, t) {
            return vt(e) ? e.createText(t) : e.createTextNode(t);
          })(n[11], t));
        pa(r, n, s, i), p(i, !1);
      }
      function Ra(e, t, n) {
        const r = ne(),
          o = wi(r, e, t, n);
        return o !== et && Xr(r, un(), o), Ra;
      }
      const jo = void 0;
      var m_ = [
        'en',
        [['a', 'p'], ['AM', 'PM'], jo],
        [['AM', 'PM'], jo, jo],
        [
          ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
          ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
          ],
          ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        ],
        jo,
        [
          ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
          [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
          ],
          [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ],
        ],
        jo,
        [
          ['B', 'A'],
          ['BC', 'AD'],
          ['Before Christ', 'Anno Domini'],
        ],
        0,
        [6, 0],
        ['M/d/yy', 'MMM d, y', 'MMMM d, y', 'EEEE, MMMM d, y'],
        ['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
        ['{1}, {0}', jo, "{1} 'at' {0}", jo],
        [
          '.',
          ',',
          ';',
          '%',
          '+',
          '-',
          'E',
          '\xd7',
          '\u2030',
          '\u221e',
          'NaN',
          ':',
        ],
        ['#,##0.###', '#,##0%', '\xa4#,##0.00', '#E0'],
        'USD',
        '$',
        'US Dollar',
        {},
        'ltr',
        function g_(e) {
          const n = Math.floor(Math.abs(e)),
            r = e.toString().replace(/^[^.]*\.?/, '').length;
          return 1 === n && 0 === r ? 1 : 5;
        },
      ];
      let Ri = {};
      function Ou(e) {
        const t = (function y_(e) {
          return e.toLowerCase().replace(/_/g, '-');
        })(e);
        let n = tp(t);
        if (n) return n;
        const r = t.split('-')[0];
        if (((n = tp(r)), n)) return n;
        if ('en' === r) return m_;
        throw new Error(`Missing locale data for the locale "${e}".`);
      }
      function ep(e) {
        return Ou(e)[ze.PluralCase];
      }
      function tp(e) {
        return (
          e in Ri ||
            (Ri[e] =
              Ce.ng &&
              Ce.ng.common &&
              Ce.ng.common.locales &&
              Ce.ng.common.locales[e]),
          Ri[e]
        );
      }
      var ze = (() => (
        ((ze = ze || {})[(ze.LocaleId = 0)] = 'LocaleId'),
        (ze[(ze.DayPeriodsFormat = 1)] = 'DayPeriodsFormat'),
        (ze[(ze.DayPeriodsStandalone = 2)] = 'DayPeriodsStandalone'),
        (ze[(ze.DaysFormat = 3)] = 'DaysFormat'),
        (ze[(ze.DaysStandalone = 4)] = 'DaysStandalone'),
        (ze[(ze.MonthsFormat = 5)] = 'MonthsFormat'),
        (ze[(ze.MonthsStandalone = 6)] = 'MonthsStandalone'),
        (ze[(ze.Eras = 7)] = 'Eras'),
        (ze[(ze.FirstDayOfWeek = 8)] = 'FirstDayOfWeek'),
        (ze[(ze.WeekendRange = 9)] = 'WeekendRange'),
        (ze[(ze.DateFormat = 10)] = 'DateFormat'),
        (ze[(ze.TimeFormat = 11)] = 'TimeFormat'),
        (ze[(ze.DateTimeFormat = 12)] = 'DateTimeFormat'),
        (ze[(ze.NumberSymbols = 13)] = 'NumberSymbols'),
        (ze[(ze.NumberFormats = 14)] = 'NumberFormats'),
        (ze[(ze.CurrencyCode = 15)] = 'CurrencyCode'),
        (ze[(ze.CurrencySymbol = 16)] = 'CurrencySymbol'),
        (ze[(ze.CurrencyName = 17)] = 'CurrencyName'),
        (ze[(ze.Currencies = 18)] = 'Currencies'),
        (ze[(ze.Directionality = 19)] = 'Directionality'),
        (ze[(ze.PluralCase = 20)] = 'PluralCase'),
        (ze[(ze.ExtraData = 21)] = 'ExtraData'),
        ze
      ))();
      const Oi = 'en-US';
      let np = Oi;
      function Lu(e, t, n, r, o) {
        if (((e = J(e)), Array.isArray(e)))
          for (let i = 0; i < e.length; i++) Lu(e[i], t, n, r, o);
        else {
          const i = lt(),
            s = ne();
          let c = Vo(e) ? e : J(e.provide),
            d = zd(e);
          const _ = St(),
            C = 1048575 & _.providerIndexes,
            A = _.directiveStart,
            O = _.providerIndexes >> 20;
          if (Vo(e) || !e.multi) {
            const B = new Kr(d, o, vi),
              Q = ku(c, t, o ? C : C + O, A);
            -1 === Q
              ? (Oo(po(_, s), i, c),
                Vu(i, e, t.length),
                t.push(c),
                _.directiveStart++,
                _.directiveEnd++,
                o && (_.providerIndexes += 1048576),
                n.push(B),
                s.push(B))
              : ((n[Q] = B), (s[Q] = B));
          } else {
            const B = ku(c, t, C + O, A),
              Q = ku(c, t, C, C + O),
              he = B >= 0 && n[B],
              Ee = Q >= 0 && n[Q];
            if ((o && !Ee) || (!o && !he)) {
              Oo(po(_, s), i, c);
              const Re = (function pC(e, t, n, r, o) {
                const i = new Kr(e, n, vi);
                return (
                  (i.multi = []),
                  (i.index = t),
                  (i.componentProviders = 0),
                  Ap(i, o, r && !n),
                  i
                );
              })(o ? hC : fC, n.length, o, r, d);
              !o && Ee && (n[Q].providerFactory = Re),
                Vu(i, e, t.length, 0),
                t.push(c),
                _.directiveStart++,
                _.directiveEnd++,
                o && (_.providerIndexes += 1048576),
                n.push(Re),
                s.push(Re);
            } else Vu(i, e, B > -1 ? B : Q, Ap(n[o ? Q : B], d, !o && r));
            !o && r && Ee && n[Q].componentProviders++;
          }
        }
      }
      function Vu(e, t, n, r) {
        const o = Vo(t),
          i = (function Ky(e) {
            return !!e.useClass;
          })(t);
        if (o || i) {
          const d = (i ? J(t.useClass) : t).prototype.ngOnDestroy;
          if (d) {
            const _ = e.destroyHooks || (e.destroyHooks = []);
            if (!o && t.multi) {
              const C = _.indexOf(n);
              -1 === C ? _.push(n, [r, d]) : _[C + 1].push(r, d);
            } else _.push(n, d);
          }
        }
      }
      function Ap(e, t, n) {
        return n && e.componentProviders++, e.multi.push(t) - 1;
      }
      function ku(e, t, n, r) {
        for (let o = n; o < r; o++) if (t[o] === e) return o;
        return -1;
      }
      function fC(e, t, n, r) {
        return Bu(this.multi, []);
      }
      function hC(e, t, n, r) {
        const o = this.multi;
        let i;
        if (this.providerFactory) {
          const s = this.providerFactory.componentProviders,
            c = No(n, n[1], this.providerFactory.index, r);
          (i = c.slice(0, s)), Bu(o, i);
          for (let d = s; d < c.length; d++) i.push(c[d]);
        } else (i = []), Bu(o, i);
        return i;
      }
      function Bu(e, t) {
        for (let n = 0; n < e.length; n++) t.push((0, e[n])());
        return t;
      }
      function Sp(e, t = []) {
        return n => {
          n.providersResolver = (r, o) =>
            (function dC(e, t, n) {
              const r = lt();
              if (r.firstCreatePass) {
                const o = nn(e);
                Lu(n, r.data, r.blueprint, o, !0),
                  Lu(t, r.data, r.blueprint, o, !1);
              }
            })(r, o ? o(e) : e, t);
        };
      }
      class mC {
        resolveComponentFactory(t) {
          throw (function gC(e) {
            const t = Error(
              `No component factory found for ${ue(
                e
              )}. Did you add it to @NgModule.entryComponents?`
            );
            return (t.ngComponent = e), t;
          })(t);
        }
      }
      let Is = (() => {
        class e {}
        return (e.NULL = new mC()), e;
      })();
      class Uo {}
      class xp {}
      class Fp {}
      function vC() {
        return Ni(St(), ne());
      }
      function Ni(e, t) {
        return new As(M(e, t));
      }
      let As = (() => {
        class e {
          constructor(n) {
            this.nativeElement = n;
          }
        }
        return (e.__NG_ELEMENT_ID__ = vC), e;
      })();
      function DC(e) {
        return e instanceof As ? e.nativeElement : e;
      }
      class Rp {}
      let _C = (() => {
          class e {}
          return (
            (e.__NG_ELEMENT_ID__ = () =>
              (function EC() {
                const e = ne(),
                  n = be(St().index, e);
                return (function CC(e) {
                  return e[11];
                })(Pt(n) ? n : e);
              })()),
            e
          );
        })(),
        wC = (() => {
          class e {}
          return (
            (e.ɵprov = ke({
              token: e,
              providedIn: 'root',
              factory: () => null,
            })),
            e
          );
        })();
      class Op {
        constructor(t) {
          (this.full = t),
            (this.major = t.split('.')[0]),
            (this.minor = t.split('.')[1]),
            (this.patch = t.split('.').slice(2).join('.'));
        }
      }
      const MC = new Op('14.0.3'),
        ju = {};
      function Va(e, t, n, r, o = !1) {
        for (; null !== n; ) {
          const i = t[n.index];
          if ((null !== i && r.push(It(i)), Yt(i)))
            for (let c = 10; c < i.length; c++) {
              const d = i[c],
                _ = d[1].firstChild;
              null !== _ && Va(d[1], d, _, r);
            }
          const s = n.type;
          if (8 & s) Va(e, t, n.child, r);
          else if (32 & s) {
            const c = Al(n, t);
            let d;
            for (; (d = c()); ) r.push(d);
          } else if (16 & s) {
            const c = wd(t, n);
            if (Array.isArray(c)) r.push(...c);
            else {
              const d = gs(t[16]);
              Va(d[1], d, c, r, !0);
            }
          }
          n = o ? n.projectionNext : n.next;
        }
        return r;
      }
      class Ss {
        constructor(t, n) {
          (this._lView = t),
            (this._cdRefInjectingView = n),
            (this._appRef = null),
            (this._attachedToViewContainer = !1);
        }
        get rootNodes() {
          const t = this._lView,
            n = t[1];
          return Va(n, t, n.firstChild, []);
        }
        get context() {
          return this._lView[8];
        }
        set context(t) {
          this._lView[8] = t;
        }
        get destroyed() {
          return 128 == (128 & this._lView[2]);
        }
        destroy() {
          if (this._appRef) this._appRef.detachView(this);
          else if (this._attachedToViewContainer) {
            const t = this._lView[3];
            if (Yt(t)) {
              const n = t[8],
                r = n ? n.indexOf(this) : -1;
              r > -1 && (Rl(t, r), na(n, r));
            }
            this._attachedToViewContainer = !1;
          }
          hd(this._lView[1], this._lView);
        }
        onDestroy(t) {
          Cf(this._lView[1], this._lView, null, t);
        }
        markForCheck() {
          mu(this._cdRefInjectingView || this._lView);
        }
        detach() {
          this._lView[2] &= -65;
        }
        reattach() {
          this._lView[2] |= 64;
        }
        detectChanges() {
          !(function vu(e, t, n) {
            const r = t[10];
            r.begin && r.begin();
            try {
              Ci(e, t, e.template, n);
            } catch (o) {
              throw (Of(t, o), o);
            } finally {
              r.end && r.end();
            }
          })(this._lView[1], this._lView, this.context);
        }
        checkNoChanges() {}
        attachToViewContainerRef() {
          if (this._appRef) throw new de(902, !1);
          this._attachedToViewContainer = !0;
        }
        detachFromAppRef() {
          (this._appRef = null),
            (function _y(e, t) {
              ms(e, t, t[11], 2, null, null);
            })(this._lView[1], this._lView);
        }
        attachToAppRef(t) {
          if (this._attachedToViewContainer) throw new de(902, !1);
          this._appRef = t;
        }
      }
      class bC extends Ss {
        constructor(t) {
          super(t), (this._view = t);
        }
        detectChanges() {
          Tf(this._view);
        }
        checkNoChanges() {}
        get context() {
          return null;
        }
      }
      class Uu extends Is {
        constructor(t) {
          super(), (this.ngModule = t);
        }
        resolveComponentFactory(t) {
          const n = dt(t);
          return new Hu(n, this.ngModule);
        }
      }
      function Pp(e) {
        const t = [];
        for (let n in e)
          e.hasOwnProperty(n) && t.push({ propName: e[n], templateName: n });
        return t;
      }
      class AC {
        constructor(t, n) {
          (this.injector = t), (this.parentInjector = n);
        }
        get(t, n, r) {
          const o = this.injector.get(t, ju, r);
          return o !== ju || n === ju ? o : this.parentInjector.get(t, n, r);
        }
      }
      class Hu extends Fp {
        constructor(t, n) {
          super(),
            (this.componentDef = t),
            (this.ngModule = n),
            (this.componentType = t.type),
            (this.selector = (function jy(e) {
              return e.map(By).join(',');
            })(t.selectors)),
            (this.ngContentSelectors = t.ngContentSelectors
              ? t.ngContentSelectors
              : []),
            (this.isBoundToModule = !!n);
        }
        get inputs() {
          return Pp(this.componentDef.inputs);
        }
        get outputs() {
          return Pp(this.componentDef.outputs);
        }
        create(t, n, r, o) {
          let i = (o = o || this.ngModule) instanceof gi ? o : o?.injector;
          i &&
            null !== this.componentDef.getStandaloneInjector &&
            (i = this.componentDef.getStandaloneInjector(i) || i);
          const s = i ? new AC(t, i) : t,
            c = s.get(Rp, Pn),
            d = s.get(wC, null),
            _ = c.createRenderer(null, this.componentDef),
            C = this.componentDef.selectors[0][0] || 'div',
            A = r
              ? (function _f(e, t, n) {
                  if (vt(e)) return e.selectRootElement(t, n === at.ShadowDom);
                  let r = 'string' == typeof t ? e.querySelector(t) : t;
                  return (r.textContent = ''), r;
                })(_, r, this.componentDef.encapsulation)
              : Fl(
                  c.createRenderer(null, this.componentDef),
                  C,
                  (function IC(e) {
                    const t = e.toLowerCase();
                    return 'svg' === t ? 'svg' : 'math' === t ? 'math' : null;
                  })(C)
                ),
            O = this.componentDef.onPush ? 288 : 272,
            B = (function zf(e, t) {
              return {
                components: [],
                scheduler: e || dy,
                clean: tD,
                playerHandler: t || null,
                flags: 0,
              };
            })(),
            Q = Ca(0, null, null, 1, 0, null, null, null, null, null),
            he = ys(null, Q, B, O, null, null, c, _, d, s, null);
          let Ee, Re;
          ei(he);
          try {
            const We = (function $f(e, t, n, r, o, i) {
              const s = n[1];
              n[22] = e;
              const d = Di(s, 22, 2, '#host', null),
                _ = (d.mergedAttrs = t.hostAttrs);
              null !== _ &&
                (wa(d, _, !0),
                null !== e &&
                  (ii(o, e, _),
                  null !== d.classes && Vl(o, e, d.classes),
                  null !== d.styles && Id(o, e, d.styles)));
              const C = r.createRenderer(e, t),
                A = ys(
                  n,
                  vf(t),
                  null,
                  t.onPush ? 32 : 16,
                  n[22],
                  d,
                  r,
                  C,
                  i || null,
                  null,
                  null
                );
              return (
                s.firstCreatePass &&
                  (Oo(po(d, n), s, t.type), bf(s, d), If(d, n.length, 1)),
                Ea(n, A),
                (n[22] = A)
              );
            })(A, this.componentDef, he, c, _);
            if (A)
              if (r) ii(_, A, ['ng-version', MC.full]);
              else {
                const { attrs: ie, classes: Be } = (function Uy(e) {
                  const t = [],
                    n = [];
                  let r = 1,
                    o = 2;
                  for (; r < e.length; ) {
                    let i = e[r];
                    if ('string' == typeof i)
                      2 === o
                        ? '' !== i && t.push(i, e[++r])
                        : 8 === o && n.push(i);
                    else {
                      if (!yr(o)) break;
                      o = i;
                    }
                    r++;
                  }
                  return { attrs: t, classes: n };
                })(this.componentDef.selectors[0]);
                ie && ii(_, A, ie),
                  Be && Be.length > 0 && Vl(_, A, Be.join(' '));
              }
            if (((Re = G(Q, 22)), void 0 !== n)) {
              const ie = (Re.projection = []);
              for (let Be = 0; Be < this.ngContentSelectors.length; Be++) {
                const pt = n[Be];
                ie.push(null != pt ? Array.from(pt) : null);
              }
            }
            (Ee = (function Gf(e, t, n, r, o) {
              const i = n[1],
                s = (function Bv(e, t, n) {
                  const r = St();
                  e.firstCreatePass &&
                    (n.providersResolver && n.providersResolver(n),
                    Af(e, r, t, _i(e, t, 1, null), n));
                  const o = No(t, e, r.directiveStart, r);
                  mn(o, t);
                  const i = M(r, t);
                  return i && mn(i, t), o;
                })(i, n, t);
              if ((r.components.push(s), (e[8] = s), null !== o))
                for (const d of o) d(s, t);
              if (t.contentQueries) {
                const d = St();
                t.contentQueries(1, s, d.directiveStart);
              }
              const c = St();
              return (
                !i.firstCreatePass ||
                  (null === t.hostBindings && null === t.hostAttrs) ||
                  (pr(c.index),
                  wf(n[1], c, 0, c.directiveStart, c.directiveEnd, t),
                  Mf(t, s)),
                s
              );
            })(We, this.componentDef, he, B, [fD])),
              vs(Q, he, null);
          } finally {
            ti();
          }
          return new TC(this.componentType, Ee, Ni(Re, he), he, Re);
        }
      }
      class TC extends class yC {} {
        constructor(t, n, r, o, i) {
          super(),
            (this.location = r),
            (this._rootLView = o),
            (this._tNode = i),
            (this.instance = n),
            (this.hostView = this.changeDetectorRef = new bC(o)),
            (this.componentType = t);
        }
        get injector() {
          return new go(this._tNode, this._rootLView);
        }
        destroy() {
          this.hostView.destroy();
        }
        onDestroy(t) {
          this.hostView.onDestroy(t);
        }
      }
      function xC(e, t) {
        return new Np(e, t ?? null);
      }
      class Np extends Uo {
        constructor(t, n) {
          super(),
            (this._parent = n),
            (this._bootstrapComponents = []),
            (this.injector = this),
            (this.destroyCbs = []),
            (this.componentFactoryResolver = new Uu(this));
          const r = Gt(t);
          (this._bootstrapComponents = Zr(r.bootstrap)),
            (this._r3Injector = Yd(
              t,
              n,
              [
                { provide: Uo, useValue: this },
                { provide: Is, useValue: this.componentFactoryResolver },
              ],
              ue(t),
              new Set(['environment'])
            )),
            this._r3Injector.resolveInjectorInitializers(),
            (this.instance = this.get(t));
        }
        get(t, n = Fr.THROW_IF_NOT_FOUND, r = Ne.Default) {
          return t === Fr || t === Uo || t === jl
            ? this
            : this._r3Injector.get(t, n, r);
        }
        destroy() {
          const t = this._r3Injector;
          !t.destroyed && t.destroy(),
            this.destroyCbs.forEach(n => n()),
            (this.destroyCbs = null);
        }
        onDestroy(t) {
          this.destroyCbs.push(t);
        }
      }
      class $u extends xp {
        constructor(t) {
          super(), (this.moduleType = t);
        }
        create(t) {
          return new Np(this.moduleType, t);
        }
      }
      class FC extends Uo {
        constructor(t, n, r) {
          super(),
            (this.componentFactoryResolver = new Uu(this)),
            (this.instance = null);
          const o = new Gd(
            [
              ...t,
              { provide: Uo, useValue: this },
              { provide: Is, useValue: this.componentFactoryResolver },
            ],
            n || $l(),
            r,
            new Set(['environment'])
          );
          (this.injector = o), o.resolveInjectorInitializers();
        }
        destroy() {
          this.injector.destroy();
        }
        onDestroy(t) {
          this.injector.onDestroy(t);
        }
      }
      function Gu(e, t = null, n = null) {
        return new FC(e, t, n).injector;
      }
      function zu(e) {
        return t => {
          setTimeout(e, void 0, t);
        };
      }
      const Lr = class JC extends y.x {
        constructor(t = !1) {
          super(), (this.__isAsync = t);
        }
        emit(t) {
          super.next(t);
        }
        subscribe(t, n, r) {
          let o = t,
            i = n || (() => null),
            s = r;
          if (t && 'object' == typeof t) {
            const d = t;
            (o = d.next?.bind(d)),
              (i = d.error?.bind(d)),
              (s = d.complete?.bind(d));
          }
          this.__isAsync && ((i = zu(i)), o && (o = zu(o)), s && (s = zu(s)));
          const c = super.subscribe({ next: o, error: i, complete: s });
          return t instanceof I.w0 && t.add(c), c;
        }
      };
      function XC() {
        return this._results[ko()]();
      }
      class Wu {
        constructor(t = !1) {
          (this._emitDistinctChangesOnly = t),
            (this.dirty = !0),
            (this._results = []),
            (this._changesDetected = !1),
            (this._changes = null),
            (this.length = 0),
            (this.first = void 0),
            (this.last = void 0);
          const n = ko(),
            r = Wu.prototype;
          r[n] || (r[n] = XC);
        }
        get changes() {
          return this._changes || (this._changes = new Lr());
        }
        get(t) {
          return this._results[t];
        }
        map(t) {
          return this._results.map(t);
        }
        filter(t) {
          return this._results.filter(t);
        }
        find(t) {
          return this._results.find(t);
        }
        reduce(t, n) {
          return this._results.reduce(t, n);
        }
        forEach(t) {
          this._results.forEach(t);
        }
        some(t) {
          return this._results.some(t);
        }
        toArray() {
          return this._results.slice();
        }
        toString() {
          return this._results.toString();
        }
        reset(t, n) {
          const r = this;
          r.dirty = !1;
          const o = Gn(t);
          (this._changesDetected = !(function qg(e, t, n) {
            if (e.length !== t.length) return !1;
            for (let r = 0; r < e.length; r++) {
              let o = e[r],
                i = t[r];
              if ((n && ((o = n(o)), (i = n(i))), i !== o)) return !1;
            }
            return !0;
          })(r._results, o, n)) &&
            ((r._results = o),
            (r.length = o.length),
            (r.last = o[this.length - 1]),
            (r.first = o[0]));
        }
        notifyOnChanges() {
          this._changes &&
            (this._changesDetected || !this._emitDistinctChangesOnly) &&
            this._changes.emit(this);
        }
        setDirty() {
          this.dirty = !0;
        }
        destroy() {
          this.changes.complete(), this.changes.unsubscribe();
        }
      }
      let Fs = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = nE), e;
      })();
      const eE = Fs,
        tE = class extends eE {
          constructor(t, n, r) {
            super(),
              (this._declarationLView = t),
              (this._declarationTContainer = n),
              (this.elementRef = r);
          }
          createEmbeddedView(t, n) {
            const r = this._declarationTContainer.tViews,
              o = ys(
                this._declarationLView,
                r,
                t,
                16,
                null,
                r.declTNode,
                null,
                null,
                null,
                null,
                n || null
              );
            o[17] = this._declarationLView[this._declarationTContainer.index];
            const s = this._declarationLView[19];
            return (
              null !== s && (o[19] = s.createEmbeddedView(r)),
              vs(r, o, t),
              new Ss(o)
            );
          }
        };
      function nE() {
        return ka(St(), ne());
      }
      function ka(e, t) {
        return 4 & e.type ? new tE(t, e, Ni(e, t)) : null;
      }
      let Ba = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = rE), e;
      })();
      function rE() {
        return $p(St(), ne());
      }
      const oE = Ba,
        Up = class extends oE {
          constructor(t, n, r) {
            super(),
              (this._lContainer = t),
              (this._hostTNode = n),
              (this._hostLView = r);
          }
          get element() {
            return Ni(this._hostTNode, this._hostLView);
          }
          get injector() {
            return new go(this._hostTNode, this._hostLView);
          }
          get parentInjector() {
            const t = tr(this._hostTNode, this._hostLView);
            if (gn(t)) {
              const n = Sr(t, this._hostLView),
                r = ho(t);
              return new go(n[1].data[r + 8], n);
            }
            return new go(null, this._hostLView);
          }
          clear() {
            for (; this.length > 0; ) this.remove(this.length - 1);
          }
          get(t) {
            const n = Hp(this._lContainer);
            return (null !== n && n[t]) || null;
          }
          get length() {
            return this._lContainer.length - 10;
          }
          createEmbeddedView(t, n, r) {
            let o, i;
            'number' == typeof r
              ? (o = r)
              : null != r && ((o = r.index), (i = r.injector));
            const s = t.createEmbeddedView(n || {}, i);
            return this.insert(s, o), s;
          }
          createComponent(t, n, r, o, i) {
            const s =
              t &&
              !(function ts(e) {
                return 'function' == typeof e;
              })(t);
            let c;
            if (s) c = n;
            else {
              const A = n || {};
              (c = A.index),
                (r = A.injector),
                (o = A.projectableNodes),
                (i = A.environmentInjector || A.ngModuleRef);
            }
            const d = s ? t : new Hu(dt(t)),
              _ = r || this.parentInjector;
            if (!i && null == d.ngModule) {
              const O = (s ? _ : this.parentInjector).get(gi, null);
              O && (i = O);
            }
            const C = d.create(_, o, void 0, i);
            return this.insert(C.hostView, c), C;
          }
          insert(t, n) {
            const r = t._lView,
              o = r[1];
            if (
              (function Ct(e) {
                return Yt(e[3]);
              })(r)
            ) {
              const C = this.indexOf(t);
              if (-1 !== C) this.detach(C);
              else {
                const A = r[3],
                  O = new Up(A, A[6], A[3]);
                O.detach(O.indexOf(t));
              }
            }
            const i = this._adjustIndex(n),
              s = this._lContainer;
            !(function Ey(e, t, n, r) {
              const o = 10 + r,
                i = n.length;
              r > 0 && (n[o - 1][4] = t),
                r < i - 10
                  ? ((t[4] = n[o]), Tc(n, 10 + r, t))
                  : (n.push(t), (t[4] = null)),
                (t[3] = n);
              const s = t[17];
              null !== s &&
                n !== s &&
                (function wy(e, t) {
                  const n = e[9];
                  t[16] !== t[3][3][16] && (e[2] = !0),
                    null === n ? (e[9] = [t]) : n.push(t);
                })(s, t);
              const c = t[19];
              null !== c && c.insertView(e), (t[2] |= 64);
            })(o, r, s, i);
            const c = Nl(i, s),
              d = r[11],
              _ = ha(d, s[7]);
            return (
              null !== _ &&
                (function Dy(e, t, n, r, o, i) {
                  (r[0] = o), (r[6] = t), ms(e, r, n, 1, o, i);
                })(o, s[6], d, r, _, c),
              t.attachToViewContainerRef(),
              Tc(Yu(s), i, t),
              t
            );
          }
          move(t, n) {
            return this.insert(t, n);
          }
          indexOf(t) {
            const n = Hp(this._lContainer);
            return null !== n ? n.indexOf(t) : -1;
          }
          remove(t) {
            const n = this._adjustIndex(t, -1),
              r = Rl(this._lContainer, n);
            r && (na(Yu(this._lContainer), n), hd(r[1], r));
          }
          detach(t) {
            const n = this._adjustIndex(t, -1),
              r = Rl(this._lContainer, n);
            return r && null != na(Yu(this._lContainer), n) ? new Ss(r) : null;
          }
          _adjustIndex(t, n = 0) {
            return t ?? this.length + n;
          }
        };
      function Hp(e) {
        return e[8];
      }
      function Yu(e) {
        return e[8] || (e[8] = []);
      }
      function $p(e, t) {
        let n;
        const r = t[e.index];
        if (Yt(r)) n = r;
        else {
          let o;
          if (8 & e.type) o = It(r);
          else {
            const i = t[11];
            o = i.createComment('');
            const s = M(e, t);
            Lo(
              i,
              ha(i, s),
              o,
              (function Ay(e, t) {
                return vt(e) ? e.nextSibling(t) : t.nextSibling;
              })(i, s),
              !1
            );
          }
          (t[e.index] = n = Sf(r, t, o, e)), Ea(t, n);
        }
        return new Up(n, e, t);
      }
      class qu {
        constructor(t) {
          (this.queryList = t), (this.matches = null);
        }
        clone() {
          return new qu(this.queryList);
        }
        setDirty() {
          this.queryList.setDirty();
        }
      }
      class Ku {
        constructor(t = []) {
          this.queries = t;
        }
        createEmbeddedView(t) {
          const n = t.queries;
          if (null !== n) {
            const r =
                null !== t.contentQueries ? t.contentQueries[0] : n.length,
              o = [];
            for (let i = 0; i < r; i++) {
              const s = n.getByIndex(i);
              o.push(this.queries[s.indexInDeclarationView].clone());
            }
            return new Ku(o);
          }
          return null;
        }
        insertView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        detachView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        dirtyQueriesWithMatches(t) {
          for (let n = 0; n < this.queries.length; n++)
            null !== Jp(t, n).matches && this.queries[n].setDirty();
        }
      }
      class Gp {
        constructor(t, n, r = null) {
          (this.predicate = t), (this.flags = n), (this.read = r);
        }
      }
      class Qu {
        constructor(t = []) {
          this.queries = t;
        }
        elementStart(t, n) {
          for (let r = 0; r < this.queries.length; r++)
            this.queries[r].elementStart(t, n);
        }
        elementEnd(t) {
          for (let n = 0; n < this.queries.length; n++)
            this.queries[n].elementEnd(t);
        }
        embeddedTView(t) {
          let n = null;
          for (let r = 0; r < this.length; r++) {
            const o = null !== n ? n.length : 0,
              i = this.getByIndex(r).embeddedTView(t, o);
            i &&
              ((i.indexInDeclarationView = r),
              null !== n ? n.push(i) : (n = [i]));
          }
          return null !== n ? new Qu(n) : null;
        }
        template(t, n) {
          for (let r = 0; r < this.queries.length; r++)
            this.queries[r].template(t, n);
        }
        getByIndex(t) {
          return this.queries[t];
        }
        get length() {
          return this.queries.length;
        }
        track(t) {
          this.queries.push(t);
        }
      }
      class Zu {
        constructor(t, n = -1) {
          (this.metadata = t),
            (this.matches = null),
            (this.indexInDeclarationView = -1),
            (this.crossesNgTemplate = !1),
            (this._appliesToNextNode = !0),
            (this._declarationNodeIndex = n);
        }
        elementStart(t, n) {
          this.isApplyingToNode(n) && this.matchTNode(t, n);
        }
        elementEnd(t) {
          this._declarationNodeIndex === t.index &&
            (this._appliesToNextNode = !1);
        }
        template(t, n) {
          this.elementStart(t, n);
        }
        embeddedTView(t, n) {
          return this.isApplyingToNode(t)
            ? ((this.crossesNgTemplate = !0),
              this.addMatch(-t.index, n),
              new Zu(this.metadata))
            : null;
        }
        isApplyingToNode(t) {
          if (this._appliesToNextNode && 1 != (1 & this.metadata.flags)) {
            const n = this._declarationNodeIndex;
            let r = t.parent;
            for (; null !== r && 8 & r.type && r.index !== n; ) r = r.parent;
            return n === (null !== r ? r.index : -1);
          }
          return this._appliesToNextNode;
        }
        matchTNode(t, n) {
          const r = this.metadata.predicate;
          if (Array.isArray(r))
            for (let o = 0; o < r.length; o++) {
              const i = r[o];
              this.matchTNodeWithReadOption(t, n, aE(n, i)),
                this.matchTNodeWithReadOption(t, n, Po(n, t, i, !1, !1));
            }
          else
            r === Fs
              ? 4 & n.type && this.matchTNodeWithReadOption(t, n, -1)
              : this.matchTNodeWithReadOption(t, n, Po(n, t, r, !1, !1));
        }
        matchTNodeWithReadOption(t, n, r) {
          if (null !== r) {
            const o = this.metadata.read;
            if (null !== o)
              if (o === As || o === Ba || (o === Fs && 4 & n.type))
                this.addMatch(n.index, -2);
              else {
                const i = Po(n, t, o, !1, !1);
                null !== i && this.addMatch(n.index, i);
              }
            else this.addMatch(n.index, r);
          }
        }
        addMatch(t, n) {
          null === this.matches
            ? (this.matches = [t, n])
            : this.matches.push(t, n);
        }
      }
      function aE(e, t) {
        const n = e.localNames;
        if (null !== n)
          for (let r = 0; r < n.length; r += 2) if (n[r] === t) return n[r + 1];
        return null;
      }
      function uE(e, t, n, r) {
        return -1 === n
          ? (function lE(e, t) {
              return 11 & e.type ? Ni(e, t) : 4 & e.type ? ka(e, t) : null;
            })(t, e)
          : -2 === n
          ? (function cE(e, t, n) {
              return n === As
                ? Ni(t, e)
                : n === Fs
                ? ka(t, e)
                : n === Ba
                ? $p(t, e)
                : void 0;
            })(e, t, r)
          : No(e, e[1], n, t);
      }
      function zp(e, t, n, r) {
        const o = t[19].queries[r];
        if (null === o.matches) {
          const i = e.data,
            s = n.matches,
            c = [];
          for (let d = 0; d < s.length; d += 2) {
            const _ = s[d];
            c.push(_ < 0 ? null : uE(t, i[_], s[d + 1], n.metadata.read));
          }
          o.matches = c;
        }
        return o.matches;
      }
      function Ju(e, t, n, r) {
        const o = e.queries.getByIndex(n),
          i = o.matches;
        if (null !== i) {
          const s = zp(e, t, o, n);
          for (let c = 0; c < i.length; c += 2) {
            const d = i[c];
            if (d > 0) r.push(s[c / 2]);
            else {
              const _ = i[c + 1],
                C = t[-d];
              for (let A = 10; A < C.length; A++) {
                const O = C[A];
                O[17] === O[3] && Ju(O[1], O, _, r);
              }
              if (null !== C[9]) {
                const A = C[9];
                for (let O = 0; O < A.length; O++) {
                  const B = A[O];
                  Ju(B[1], B, _, r);
                }
              }
            }
          }
        }
        return r;
      }
      function Wp(e) {
        const t = ne(),
          n = lt(),
          r = Ps();
        Gi(r + 1);
        const o = Jp(n, r);
        if (e.dirty && ut(t) === (2 == (2 & o.metadata.flags))) {
          if (null === o.matches) e.reset([]);
          else {
            const i = o.crossesNgTemplate ? Ju(n, t, r, []) : zp(n, t, o, r);
            e.reset(i, DC), e.notifyOnChanges();
          }
          return !0;
        }
        return !1;
      }
      function Yp(e, t, n) {
        const r = lt();
        r.firstCreatePass &&
          (Zp(r, new Gp(e, t, n), -1),
          2 == (2 & t) && (r.staticViewQueries = !0)),
          Qp(r, ne(), t);
      }
      function qp(e, t, n, r) {
        const o = lt();
        if (o.firstCreatePass) {
          const i = St();
          Zp(o, new Gp(t, n, r), i.index),
            (function fE(e, t) {
              const n = e.contentQueries || (e.contentQueries = []);
              t !== (n.length ? n[n.length - 1] : -1) &&
                n.push(e.queries.length - 1, t);
            })(o, e),
            2 == (2 & n) && (o.staticContentQueries = !0);
        }
        Qp(o, ne(), n);
      }
      function Kp() {
        return (function dE(e, t) {
          return e[19].queries[t].queryList;
        })(ne(), Ps());
      }
      function Qp(e, t, n) {
        const r = new Wu(4 == (4 & n));
        Cf(e, t, r, r.destroy),
          null === t[19] && (t[19] = new Ku()),
          t[19].queries.push(new qu(r));
      }
      function Zp(e, t, n) {
        null === e.queries && (e.queries = new Qu()),
          e.queries.track(new Zu(t, n));
      }
      function Jp(e, t) {
        return e.queries.getByIndex(t);
      }
      function Vi(e) {
        const t = dt(e) || Ft(e) || At(e);
        return null !== t && t.standalone;
      }
      function Ua(...e) {}
      const yg = new Ae('Application Initializer');
      let Ha = (() => {
        class e {
          constructor(n) {
            (this.appInits = n),
              (this.resolve = Ua),
              (this.reject = Ua),
              (this.initialized = !1),
              (this.done = !1),
              (this.donePromise = new Promise((r, o) => {
                (this.resolve = r), (this.reject = o);
              }));
          }
          runInitializers() {
            if (this.initialized) return;
            const n = [],
              r = () => {
                (this.done = !0), this.resolve();
              };
            if (this.appInits)
              for (let o = 0; o < this.appInits.length; o++) {
                const i = this.appInits[o]();
                if (Su(i)) n.push(i);
                else if (ih(i)) {
                  const s = new Promise((c, d) => {
                    i.subscribe({ complete: c, error: d });
                  });
                  n.push(s);
                }
              }
            Promise.all(n)
              .then(() => {
                r();
              })
              .catch(o => {
                this.reject(o);
              }),
              0 === n.length && r(),
              (this.initialized = !0);
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(qt(yg, 8));
          }),
          (e.ɵprov = ke({ token: e, factory: e.ɵfac, providedIn: 'root' })),
          e
        );
      })();
      const vg = new Ae('AppId', {
        providedIn: 'root',
        factory: function Dg() {
          return `${rc()}${rc()}${rc()}`;
        },
      });
      function rc() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      const _g = new Ae('Platform Initializer'),
        OE = new Ae('Platform ID', {
          providedIn: 'platform',
          factory: () => 'unknown',
        }),
        Cg = new Ae('appBootstrapListener');
      let PE = (() => {
        class e {
          log(n) {
            console.log(n);
          }
          warn(n) {
            console.warn(n);
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵprov = ke({ token: e, factory: e.ɵfac, providedIn: 'platform' })),
          e
        );
      })();
      const $a = new Ae('LocaleId', {
          providedIn: 'root',
          factory: () =>
            (function am(e, t = Ne.Default) {
              return qt(e, t);
            })($a, Ne.Optional | Ne.SkipSelf) ||
            (function NE() {
              return (typeof $localize < 'u' && $localize.locale) || Oi;
            })(),
        }),
        LE = new Ae('DefaultCurrencyCode', {
          providedIn: 'root',
          factory: () => 'USD',
        });
      class VE {
        constructor(t, n) {
          (this.ngModuleFactory = t), (this.componentFactories = n);
        }
      }
      let kE = (() => {
        class e {
          compileModuleSync(n) {
            return new $u(n);
          }
          compileModuleAsync(n) {
            return Promise.resolve(this.compileModuleSync(n));
          }
          compileModuleAndAllComponentsSync(n) {
            const r = this.compileModuleSync(n),
              i = Zr(Gt(n).declarations).reduce((s, c) => {
                const d = dt(c);
                return d && s.push(new Hu(d)), s;
              }, []);
            return new VE(r, i);
          }
          compileModuleAndAllComponentsAsync(n) {
            return Promise.resolve(this.compileModuleAndAllComponentsSync(n));
          }
          clearCache() {}
          clearCacheFor(n) {}
          getModuleId(n) {}
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵprov = ke({ token: e, factory: e.ɵfac, providedIn: 'root' })),
          e
        );
      })();
      const jE = (() => Promise.resolve(0))();
      function oc(e) {
        typeof Zone > 'u'
          ? jE.then(() => {
              e && e.apply(null, null);
            })
          : Zone.current.scheduleMicroTask('scheduleMicrotask', e);
      }
      class Yn {
        constructor({
          enableLongStackTrace: t = !1,
          shouldCoalesceEventChangeDetection: n = !1,
          shouldCoalesceRunChangeDetection: r = !1,
        }) {
          if (
            ((this.hasPendingMacrotasks = !1),
            (this.hasPendingMicrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new Lr(!1)),
            (this.onMicrotaskEmpty = new Lr(!1)),
            (this.onStable = new Lr(!1)),
            (this.onError = new Lr(!1)),
            typeof Zone > 'u')
          )
            throw new Error('In this configuration Angular requires Zone.js');
          Zone.assertZonePatched();
          const o = this;
          (o._nesting = 0),
            (o._outer = o._inner = Zone.current),
            Zone.TaskTrackingZoneSpec &&
              (o._inner = o._inner.fork(new Zone.TaskTrackingZoneSpec())),
            t &&
              Zone.longStackTraceZoneSpec &&
              (o._inner = o._inner.fork(Zone.longStackTraceZoneSpec)),
            (o.shouldCoalesceEventChangeDetection = !r && n),
            (o.shouldCoalesceRunChangeDetection = r),
            (o.lastRequestAnimationFrameId = -1),
            (o.nativeRequestAnimationFrame = (function UE() {
              let e = Ce.requestAnimationFrame,
                t = Ce.cancelAnimationFrame;
              if (typeof Zone < 'u' && e && t) {
                const n = e[Zone.__symbol__('OriginalDelegate')];
                n && (e = n);
                const r = t[Zone.__symbol__('OriginalDelegate')];
                r && (t = r);
              }
              return {
                nativeRequestAnimationFrame: e,
                nativeCancelAnimationFrame: t,
              };
            })().nativeRequestAnimationFrame),
            (function GE(e) {
              const t = () => {
                !(function $E(e) {
                  e.isCheckStableRunning ||
                    -1 !== e.lastRequestAnimationFrameId ||
                    ((e.lastRequestAnimationFrameId =
                      e.nativeRequestAnimationFrame.call(Ce, () => {
                        e.fakeTopEventTask ||
                          (e.fakeTopEventTask = Zone.root.scheduleEventTask(
                            'fakeTopEventTask',
                            () => {
                              (e.lastRequestAnimationFrameId = -1),
                                sc(e),
                                (e.isCheckStableRunning = !0),
                                ic(e),
                                (e.isCheckStableRunning = !1);
                            },
                            void 0,
                            () => {},
                            () => {}
                          )),
                          e.fakeTopEventTask.invoke();
                      })),
                    sc(e));
                })(e);
              };
              e._inner = e._inner.fork({
                name: 'angular',
                properties: { isAngularZone: !0 },
                onInvokeTask: (n, r, o, i, s, c) => {
                  try {
                    return Eg(e), n.invokeTask(o, i, s, c);
                  } finally {
                    ((e.shouldCoalesceEventChangeDetection &&
                      'eventTask' === i.type) ||
                      e.shouldCoalesceRunChangeDetection) &&
                      t(),
                      wg(e);
                  }
                },
                onInvoke: (n, r, o, i, s, c, d) => {
                  try {
                    return Eg(e), n.invoke(o, i, s, c, d);
                  } finally {
                    e.shouldCoalesceRunChangeDetection && t(), wg(e);
                  }
                },
                onHasTask: (n, r, o, i) => {
                  n.hasTask(o, i),
                    r === o &&
                      ('microTask' == i.change
                        ? ((e._hasPendingMicrotasks = i.microTask),
                          sc(e),
                          ic(e))
                        : 'macroTask' == i.change &&
                          (e.hasPendingMacrotasks = i.macroTask));
                },
                onHandleError: (n, r, o, i) => (
                  n.handleError(o, i),
                  e.runOutsideAngular(() => e.onError.emit(i)),
                  !1
                ),
              });
            })(o);
        }
        static isInAngularZone() {
          return typeof Zone < 'u' && !0 === Zone.current.get('isAngularZone');
        }
        static assertInAngularZone() {
          if (!Yn.isInAngularZone())
            throw new Error('Expected to be in Angular Zone, but it is not!');
        }
        static assertNotInAngularZone() {
          if (Yn.isInAngularZone())
            throw new Error('Expected to not be in Angular Zone, but it is!');
        }
        run(t, n, r) {
          return this._inner.run(t, n, r);
        }
        runTask(t, n, r, o) {
          const i = this._inner,
            s = i.scheduleEventTask('NgZoneEvent: ' + o, t, HE, Ua, Ua);
          try {
            return i.runTask(s, n, r);
          } finally {
            i.cancelTask(s);
          }
        }
        runGuarded(t, n, r) {
          return this._inner.runGuarded(t, n, r);
        }
        runOutsideAngular(t) {
          return this._outer.run(t);
        }
      }
      const HE = {};
      function ic(e) {
        if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable)
          try {
            e._nesting++, e.onMicrotaskEmpty.emit(null);
          } finally {
            if ((e._nesting--, !e.hasPendingMicrotasks))
              try {
                e.runOutsideAngular(() => e.onStable.emit(null));
              } finally {
                e.isStable = !0;
              }
          }
      }
      function sc(e) {
        e.hasPendingMicrotasks = !!(
          e._hasPendingMicrotasks ||
          ((e.shouldCoalesceEventChangeDetection ||
            e.shouldCoalesceRunChangeDetection) &&
            -1 !== e.lastRequestAnimationFrameId)
        );
      }
      function Eg(e) {
        e._nesting++,
          e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
      }
      function wg(e) {
        e._nesting--, ic(e);
      }
      class zE {
        constructor() {
          (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new Lr()),
            (this.onMicrotaskEmpty = new Lr()),
            (this.onStable = new Lr()),
            (this.onError = new Lr());
        }
        run(t, n, r) {
          return t.apply(n, r);
        }
        runGuarded(t, n, r) {
          return t.apply(n, r);
        }
        runOutsideAngular(t) {
          return t();
        }
        runTask(t, n, r, o) {
          return t.apply(n, r);
        }
      }
      const Mg = new Ae(''),
        bg = new Ae('');
      let ac,
        WE = (() => {
          class e {
            constructor(n, r, o) {
              (this._ngZone = n),
                (this.registry = r),
                (this._pendingCount = 0),
                (this._isZoneStable = !0),
                (this._didWork = !1),
                (this._callbacks = []),
                (this.taskTrackingZone = null),
                ac ||
                  ((function YE(e) {
                    ac = e;
                  })(o),
                  o.addToWindow(r)),
                this._watchAngularEvents(),
                n.run(() => {
                  this.taskTrackingZone =
                    typeof Zone > 'u'
                      ? null
                      : Zone.current.get('TaskTrackingZone');
                });
            }
            _watchAngularEvents() {
              this._ngZone.onUnstable.subscribe({
                next: () => {
                  (this._didWork = !0), (this._isZoneStable = !1);
                },
              }),
                this._ngZone.runOutsideAngular(() => {
                  this._ngZone.onStable.subscribe({
                    next: () => {
                      Yn.assertNotInAngularZone(),
                        oc(() => {
                          (this._isZoneStable = !0),
                            this._runCallbacksIfReady();
                        });
                    },
                  });
                });
            }
            increasePendingRequestCount() {
              return (
                (this._pendingCount += 1),
                (this._didWork = !0),
                this._pendingCount
              );
            }
            decreasePendingRequestCount() {
              if (((this._pendingCount -= 1), this._pendingCount < 0))
                throw new Error('pending async requests below zero');
              return this._runCallbacksIfReady(), this._pendingCount;
            }
            isStable() {
              return (
                this._isZoneStable &&
                0 === this._pendingCount &&
                !this._ngZone.hasPendingMacrotasks
              );
            }
            _runCallbacksIfReady() {
              if (this.isStable())
                oc(() => {
                  for (; 0 !== this._callbacks.length; ) {
                    let n = this._callbacks.pop();
                    clearTimeout(n.timeoutId), n.doneCb(this._didWork);
                  }
                  this._didWork = !1;
                });
              else {
                let n = this.getPendingTasks();
                (this._callbacks = this._callbacks.filter(
                  r =>
                    !r.updateCb ||
                    !r.updateCb(n) ||
                    (clearTimeout(r.timeoutId), !1)
                )),
                  (this._didWork = !0);
              }
            }
            getPendingTasks() {
              return this.taskTrackingZone
                ? this.taskTrackingZone.macroTasks.map(n => ({
                    source: n.source,
                    creationLocation: n.creationLocation,
                    data: n.data,
                  }))
                : [];
            }
            addCallback(n, r, o) {
              let i = -1;
              r &&
                r > 0 &&
                (i = setTimeout(() => {
                  (this._callbacks = this._callbacks.filter(
                    s => s.timeoutId !== i
                  )),
                    n(this._didWork, this.getPendingTasks());
                }, r)),
                this._callbacks.push({ doneCb: n, timeoutId: i, updateCb: o });
            }
            whenStable(n, r, o) {
              if (o && !this.taskTrackingZone)
                throw new Error(
                  'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?'
                );
              this.addCallback(n, r, o), this._runCallbacksIfReady();
            }
            getPendingRequestCount() {
              return this._pendingCount;
            }
            registerApplication(n) {
              this.registry.registerApplication(n, this);
            }
            unregisterApplication(n) {
              this.registry.unregisterApplication(n);
            }
            findProviders(n, r, o) {
              return [];
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)(qt(Yn), qt(Ig), qt(bg));
            }),
            (e.ɵprov = ke({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        Ig = (() => {
          class e {
            constructor() {
              this._applications = new Map();
            }
            registerApplication(n, r) {
              this._applications.set(n, r);
            }
            unregisterApplication(n) {
              this._applications.delete(n);
            }
            unregisterAllApplications() {
              this._applications.clear();
            }
            getTestability(n) {
              return this._applications.get(n) || null;
            }
            getAllTestabilities() {
              return Array.from(this._applications.values());
            }
            getAllRootElements() {
              return Array.from(this._applications.keys());
            }
            findTestabilityInTree(n, r = !0) {
              return ac?.findTestabilityInTree(this, n, r) ?? null;
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)();
            }),
            (e.ɵprov = ke({
              token: e,
              factory: e.ɵfac,
              providedIn: 'platform',
            })),
            e
          );
        })(),
        Do = null;
      const Ag = new Ae('AllowMultipleToken'),
        Sg = new Ae('PlatformOnDestroy');
      class QE {
        constructor(t, n) {
          (this.name = t), (this.token = n);
        }
      }
      function xg(e, t, n = []) {
        const r = `Platform: ${t}`,
          o = new Ae(r);
        return (i = []) => {
          let s = lc();
          if (!s || s.injector.get(Ag, !1)) {
            const c = [...n, ...i, { provide: o, useValue: !0 }];
            e
              ? e(c)
              : (function ZE(e) {
                  if (Do && !Do.get(Ag, !1)) throw new de(400, !1);
                  Do = e;
                  const t = e.get(Rg);
                  (function Tg(e) {
                    const t = e.get(_g, null);
                    t && t.forEach(n => n());
                  })(e);
                })(
                  (function Fg(e = [], t) {
                    return Fr.create({
                      name: t,
                      providers: [
                        { provide: Ul, useValue: 'platform' },
                        { provide: Sg, useValue: () => (Do = null) },
                        ...e,
                      ],
                    });
                  })(c, r)
                );
          }
          return (function XE(e) {
            const t = lc();
            if (!t) throw new de(401, !1);
            return t;
          })();
        };
      }
      function lc() {
        return Do?.get(Rg) ?? null;
      }
      let Rg = (() => {
        class e {
          constructor(n) {
            (this._injector = n),
              (this._modules = []),
              (this._destroyListeners = []),
              (this._destroyed = !1);
          }
          bootstrapModuleFactory(n, r) {
            const o = (function ew(e, t) {
                let n;
                return (
                  (n =
                    'noop' === e
                      ? new zE()
                      : ('zone.js' === e ? void 0 : e) || new Yn(t)),
                  n
                );
              })(
                r?.ngZone,
                (function Og(e) {
                  return {
                    enableLongStackTrace: !1,
                    shouldCoalesceEventChangeDetection:
                      !(!e || !e.ngZoneEventCoalescing) || !1,
                    shouldCoalesceRunChangeDetection:
                      !(!e || !e.ngZoneRunCoalescing) || !1,
                  };
                })(r)
              ),
              i = [{ provide: Yn, useValue: o }];
            return o.run(() => {
              const s = Fr.create({
                  providers: i,
                  parent: this.injector,
                  name: n.moduleType.name,
                }),
                c = n.create(s),
                d = c.injector.get(hs, null);
              if (!d) throw new de(402, !1);
              return (
                o.runOutsideAngular(() => {
                  const _ = o.onError.subscribe({
                    next: C => {
                      d.handleError(C);
                    },
                  });
                  c.onDestroy(() => {
                    za(this._modules, c), _.unsubscribe();
                  });
                }),
                (function Pg(e, t, n) {
                  try {
                    const r = n();
                    return Su(r)
                      ? r.catch(o => {
                          throw (
                            (t.runOutsideAngular(() => e.handleError(o)), o)
                          );
                        })
                      : r;
                  } catch (r) {
                    throw (t.runOutsideAngular(() => e.handleError(r)), r);
                  }
                })(d, o, () => {
                  const _ = c.injector.get(Ha);
                  return (
                    _.runInitializers(),
                    _.donePromise.then(
                      () => (
                        (function rp(e) {
                          X(e, 'Expected localeId to be defined'),
                            'string' == typeof e &&
                              (np = e.toLowerCase().replace(/_/g, '-'));
                        })(c.injector.get($a, Oi) || Oi),
                        this._moduleDoBootstrap(c),
                        c
                      )
                    )
                  );
                })
              );
            });
          }
          bootstrapModule(n, r = []) {
            const o = Ng({}, r);
            return (function qE(e, t, n) {
              const r = new $u(n);
              return Promise.resolve(r);
            })(0, 0, n).then(i => this.bootstrapModuleFactory(i, o));
          }
          _moduleDoBootstrap(n) {
            const r = n.injector.get(Ga);
            if (n._bootstrapComponents.length > 0)
              n._bootstrapComponents.forEach(o => r.bootstrap(o));
            else {
              if (!n.instance.ngDoBootstrap) throw new de(403, !1);
              n.instance.ngDoBootstrap(r);
            }
            this._modules.push(n);
          }
          onDestroy(n) {
            this._destroyListeners.push(n);
          }
          get injector() {
            return this._injector;
          }
          destroy() {
            if (this._destroyed) throw new de(404, !1);
            this._modules.slice().forEach(r => r.destroy()),
              this._destroyListeners.forEach(r => r()),
              this._injector.get(Sg, null)?.(),
              (this._destroyed = !0);
          }
          get destroyed() {
            return this._destroyed;
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(qt(Fr));
          }),
          (e.ɵprov = ke({ token: e, factory: e.ɵfac, providedIn: 'platform' })),
          e
        );
      })();
      function Ng(e, t) {
        return Array.isArray(t) ? t.reduce(Ng, e) : { ...e, ...t };
      }
      let Ga = (() => {
        class e {
          constructor(n, r, o, i) {
            (this._zone = n),
              (this._injector = r),
              (this._exceptionHandler = o),
              (this._initStatus = i),
              (this._bootstrapListeners = []),
              (this._views = []),
              (this._runningTick = !1),
              (this._stable = !0),
              (this._destroyed = !1),
              (this._destroyListeners = []),
              (this.componentTypes = []),
              (this.components = []),
              (this._onMicrotaskEmptySubscription =
                this._zone.onMicrotaskEmpty.subscribe({
                  next: () => {
                    this._zone.run(() => {
                      this.tick();
                    });
                  },
                }));
            const s = new le.y(d => {
                (this._stable =
                  this._zone.isStable &&
                  !this._zone.hasPendingMacrotasks &&
                  !this._zone.hasPendingMicrotasks),
                  this._zone.runOutsideAngular(() => {
                    d.next(this._stable), d.complete();
                  });
              }),
              c = new le.y(d => {
                let _;
                this._zone.runOutsideAngular(() => {
                  _ = this._zone.onStable.subscribe(() => {
                    Yn.assertNotInAngularZone(),
                      oc(() => {
                        !this._stable &&
                          !this._zone.hasPendingMacrotasks &&
                          !this._zone.hasPendingMicrotasks &&
                          ((this._stable = !0), d.next(!0));
                      });
                  });
                });
                const C = this._zone.onUnstable.subscribe(() => {
                  Yn.assertInAngularZone(),
                    this._stable &&
                      ((this._stable = !1),
                      this._zone.runOutsideAngular(() => {
                        d.next(!1);
                      }));
                });
                return () => {
                  _.unsubscribe(), C.unsubscribe();
                };
              });
            this.isStable = (0, ee.T)(s, c.pipe((0, j.B)()));
          }
          get destroyed() {
            return this._destroyed;
          }
          get injector() {
            return this._injector;
          }
          bootstrap(n, r) {
            const o = n instanceof Fp;
            if (!this._initStatus.done) throw (!o && Vi(n), new de(405, false));
            let i;
            (i = o ? n : this._injector.get(Is).resolveComponentFactory(n)),
              this.componentTypes.push(i.componentType);
            const s = (function KE(e) {
                return e.isBoundToModule;
              })(i)
                ? void 0
                : this._injector.get(Uo),
              d = i.create(Fr.NULL, [], r || i.selector, s),
              _ = d.location.nativeElement,
              C = d.injector.get(Mg, null);
            return (
              C?.registerApplication(_),
              d.onDestroy(() => {
                this.detachView(d.hostView),
                  za(this.components, d),
                  C?.unregisterApplication(_);
              }),
              this._loadComponent(d),
              d
            );
          }
          tick() {
            if (this._runningTick) throw new de(101, !1);
            try {
              this._runningTick = !0;
              for (let n of this._views) n.detectChanges();
            } catch (n) {
              this._zone.runOutsideAngular(() =>
                this._exceptionHandler.handleError(n)
              );
            } finally {
              this._runningTick = !1;
            }
          }
          attachView(n) {
            const r = n;
            this._views.push(r), r.attachToAppRef(this);
          }
          detachView(n) {
            const r = n;
            za(this._views, r), r.detachFromAppRef();
          }
          _loadComponent(n) {
            this.attachView(n.hostView),
              this.tick(),
              this.components.push(n),
              this._injector
                .get(Cg, [])
                .concat(this._bootstrapListeners)
                .forEach(o => o(n));
          }
          ngOnDestroy() {
            if (!this._destroyed)
              try {
                this._destroyListeners.forEach(n => n()),
                  this._views.slice().forEach(n => n.destroy()),
                  this._onMicrotaskEmptySubscription.unsubscribe();
              } finally {
                (this._destroyed = !0),
                  (this._views = []),
                  (this._bootstrapListeners = []),
                  (this._destroyListeners = []);
              }
          }
          onDestroy(n) {
            return (
              this._destroyListeners.push(n),
              () => za(this._destroyListeners, n)
            );
          }
          destroy() {
            if (this._destroyed) throw new de(406, !1);
            const n = this._injector;
            n.destroy && !n.destroyed && n.destroy();
          }
          get viewCount() {
            return this._views.length;
          }
          warnIfDestroyed() {}
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(qt(Yn), qt(Fr), qt(hs), qt(Ha));
          }),
          (e.ɵprov = ke({ token: e, factory: e.ɵfac, providedIn: 'root' })),
          e
        );
      })();
      function za(e, t) {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      let Vg = !0;
      function nw() {
        Vg = !1;
      }
      let rw = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = ow), e;
      })();
      function ow(e) {
        return (function iw(e, t, n) {
          if (jt(e) && !n) {
            const r = be(e.index, t);
            return new Ss(r, r);
          }
          return 47 & e.type ? new Ss(t[16], t) : null;
        })(St(), ne(), 16 == (16 & e));
      }
      class Hg {
        constructor() {}
        supports(t) {
          return Ds(t);
        }
        create(t) {
          return new dw(t);
        }
      }
      const cw = (e, t) => t;
      class dw {
        constructor(t) {
          (this.length = 0),
            (this._linkedRecords = null),
            (this._unlinkedRecords = null),
            (this._previousItHead = null),
            (this._itHead = null),
            (this._itTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._movesHead = null),
            (this._movesTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null),
            (this._identityChangesHead = null),
            (this._identityChangesTail = null),
            (this._trackByFn = t || cw);
        }
        forEachItem(t) {
          let n;
          for (n = this._itHead; null !== n; n = n._next) t(n);
        }
        forEachOperation(t) {
          let n = this._itHead,
            r = this._removalsHead,
            o = 0,
            i = null;
          for (; n || r; ) {
            const s = !r || (n && n.currentIndex < Gg(r, o, i)) ? n : r,
              c = Gg(s, o, i),
              d = s.currentIndex;
            if (s === r) o--, (r = r._nextRemoved);
            else if (((n = n._next), null == s.previousIndex)) o++;
            else {
              i || (i = []);
              const _ = c - o,
                C = d - o;
              if (_ != C) {
                for (let O = 0; O < _; O++) {
                  const B = O < i.length ? i[O] : (i[O] = 0),
                    Q = B + O;
                  C <= Q && Q < _ && (i[O] = B + 1);
                }
                i[s.previousIndex] = C - _;
              }
            }
            c !== d && t(s, c, d);
          }
        }
        forEachPreviousItem(t) {
          let n;
          for (n = this._previousItHead; null !== n; n = n._nextPrevious) t(n);
        }
        forEachAddedItem(t) {
          let n;
          for (n = this._additionsHead; null !== n; n = n._nextAdded) t(n);
        }
        forEachMovedItem(t) {
          let n;
          for (n = this._movesHead; null !== n; n = n._nextMoved) t(n);
        }
        forEachRemovedItem(t) {
          let n;
          for (n = this._removalsHead; null !== n; n = n._nextRemoved) t(n);
        }
        forEachIdentityChange(t) {
          let n;
          for (
            n = this._identityChangesHead;
            null !== n;
            n = n._nextIdentityChange
          )
            t(n);
        }
        diff(t) {
          if ((null == t && (t = []), !Ds(t))) throw new de(900, !1);
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let o,
            i,
            s,
            n = this._itHead,
            r = !1;
          if (Array.isArray(t)) {
            this.length = t.length;
            for (let c = 0; c < this.length; c++)
              (i = t[c]),
                (s = this._trackByFn(c, i)),
                null !== n && Object.is(n.trackById, s)
                  ? (r && (n = this._verifyReinsertion(n, i, s, c)),
                    Object.is(n.item, i) || this._addIdentityChange(n, i))
                  : ((n = this._mismatch(n, i, s, c)), (r = !0)),
                (n = n._next);
          } else
            (o = 0),
              (function CD(e, t) {
                if (Array.isArray(e))
                  for (let n = 0; n < e.length; n++) t(e[n]);
                else {
                  const n = e[ko()]();
                  let r;
                  for (; !(r = n.next()).done; ) t(r.value);
                }
              })(t, c => {
                (s = this._trackByFn(o, c)),
                  null !== n && Object.is(n.trackById, s)
                    ? (r && (n = this._verifyReinsertion(n, c, s, o)),
                      Object.is(n.item, c) || this._addIdentityChange(n, c))
                    : ((n = this._mismatch(n, c, s, o)), (r = !0)),
                  (n = n._next),
                  o++;
              }),
              (this.length = o);
          return this._truncate(n), (this.collection = t), this.isDirty;
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._movesHead ||
            null !== this._removalsHead ||
            null !== this._identityChangesHead
          );
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (
              t = this._previousItHead = this._itHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (t = this._additionsHead; null !== t; t = t._nextAdded)
              t.previousIndex = t.currentIndex;
            for (
              this._additionsHead = this._additionsTail = null,
                t = this._movesHead;
              null !== t;
              t = t._nextMoved
            )
              t.previousIndex = t.currentIndex;
            (this._movesHead = this._movesTail = null),
              (this._removalsHead = this._removalsTail = null),
              (this._identityChangesHead = this._identityChangesTail = null);
          }
        }
        _mismatch(t, n, r, o) {
          let i;
          return (
            null === t ? (i = this._itTail) : ((i = t._prev), this._remove(t)),
            null !==
            (t =
              null === this._unlinkedRecords
                ? null
                : this._unlinkedRecords.get(r, null))
              ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
                this._reinsertAfter(t, i, o))
              : null !==
                (t =
                  null === this._linkedRecords
                    ? null
                    : this._linkedRecords.get(r, o))
              ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
                this._moveAfter(t, i, o))
              : (t = this._addAfter(new fw(n, r), i, o)),
            t
          );
        }
        _verifyReinsertion(t, n, r, o) {
          let i =
            null === this._unlinkedRecords
              ? null
              : this._unlinkedRecords.get(r, null);
          return (
            null !== i
              ? (t = this._reinsertAfter(i, t._prev, o))
              : t.currentIndex != o &&
                ((t.currentIndex = o), this._addToMoves(t, o)),
            t
          );
        }
        _truncate(t) {
          for (; null !== t; ) {
            const n = t._next;
            this._addToRemovals(this._unlink(t)), (t = n);
          }
          null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
            null !== this._additionsTail &&
              (this._additionsTail._nextAdded = null),
            null !== this._movesTail && (this._movesTail._nextMoved = null),
            null !== this._itTail && (this._itTail._next = null),
            null !== this._removalsTail &&
              (this._removalsTail._nextRemoved = null),
            null !== this._identityChangesTail &&
              (this._identityChangesTail._nextIdentityChange = null);
        }
        _reinsertAfter(t, n, r) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
          const o = t._prevRemoved,
            i = t._nextRemoved;
          return (
            null === o ? (this._removalsHead = i) : (o._nextRemoved = i),
            null === i ? (this._removalsTail = o) : (i._prevRemoved = o),
            this._insertAfter(t, n, r),
            this._addToMoves(t, r),
            t
          );
        }
        _moveAfter(t, n, r) {
          return (
            this._unlink(t),
            this._insertAfter(t, n, r),
            this._addToMoves(t, r),
            t
          );
        }
        _addAfter(t, n, r) {
          return (
            this._insertAfter(t, n, r),
            (this._additionsTail =
              null === this._additionsTail
                ? (this._additionsHead = t)
                : (this._additionsTail._nextAdded = t)),
            t
          );
        }
        _insertAfter(t, n, r) {
          const o = null === n ? this._itHead : n._next;
          return (
            (t._next = o),
            (t._prev = n),
            null === o ? (this._itTail = t) : (o._prev = t),
            null === n ? (this._itHead = t) : (n._next = t),
            null === this._linkedRecords && (this._linkedRecords = new $g()),
            this._linkedRecords.put(t),
            (t.currentIndex = r),
            t
          );
        }
        _remove(t) {
          return this._addToRemovals(this._unlink(t));
        }
        _unlink(t) {
          null !== this._linkedRecords && this._linkedRecords.remove(t);
          const n = t._prev,
            r = t._next;
          return (
            null === n ? (this._itHead = r) : (n._next = r),
            null === r ? (this._itTail = n) : (r._prev = n),
            t
          );
        }
        _addToMoves(t, n) {
          return (
            t.previousIndex === n ||
              (this._movesTail =
                null === this._movesTail
                  ? (this._movesHead = t)
                  : (this._movesTail._nextMoved = t)),
            t
          );
        }
        _addToRemovals(t) {
          return (
            null === this._unlinkedRecords &&
              (this._unlinkedRecords = new $g()),
            this._unlinkedRecords.put(t),
            (t.currentIndex = null),
            (t._nextRemoved = null),
            null === this._removalsTail
              ? ((this._removalsTail = this._removalsHead = t),
                (t._prevRemoved = null))
              : ((t._prevRemoved = this._removalsTail),
                (this._removalsTail = this._removalsTail._nextRemoved = t)),
            t
          );
        }
        _addIdentityChange(t, n) {
          return (
            (t.item = n),
            (this._identityChangesTail =
              null === this._identityChangesTail
                ? (this._identityChangesHead = t)
                : (this._identityChangesTail._nextIdentityChange = t)),
            t
          );
        }
      }
      class fw {
        constructor(t, n) {
          (this.item = t),
            (this.trackById = n),
            (this.currentIndex = null),
            (this.previousIndex = null),
            (this._nextPrevious = null),
            (this._prev = null),
            (this._next = null),
            (this._prevDup = null),
            (this._nextDup = null),
            (this._prevRemoved = null),
            (this._nextRemoved = null),
            (this._nextAdded = null),
            (this._nextMoved = null),
            (this._nextIdentityChange = null);
        }
      }
      class hw {
        constructor() {
          (this._head = null), (this._tail = null);
        }
        add(t) {
          null === this._head
            ? ((this._head = this._tail = t),
              (t._nextDup = null),
              (t._prevDup = null))
            : ((this._tail._nextDup = t),
              (t._prevDup = this._tail),
              (t._nextDup = null),
              (this._tail = t));
        }
        get(t, n) {
          let r;
          for (r = this._head; null !== r; r = r._nextDup)
            if (
              (null === n || n <= r.currentIndex) &&
              Object.is(r.trackById, t)
            )
              return r;
          return null;
        }
        remove(t) {
          const n = t._prevDup,
            r = t._nextDup;
          return (
            null === n ? (this._head = r) : (n._nextDup = r),
            null === r ? (this._tail = n) : (r._prevDup = n),
            null === this._head
          );
        }
      }
      class $g {
        constructor() {
          this.map = new Map();
        }
        put(t) {
          const n = t.trackById;
          let r = this.map.get(n);
          r || ((r = new hw()), this.map.set(n, r)), r.add(t);
        }
        get(t, n) {
          const o = this.map.get(t);
          return o ? o.get(t, n) : null;
        }
        remove(t) {
          const n = t.trackById;
          return this.map.get(n).remove(t) && this.map.delete(n), t;
        }
        get isEmpty() {
          return 0 === this.map.size;
        }
        clear() {
          this.map.clear();
        }
      }
      function Gg(e, t, n) {
        const r = e.previousIndex;
        if (null === r) return r;
        let o = 0;
        return n && r < n.length && (o = n[r]), r + t + o;
      }
      class zg {
        constructor() {}
        supports(t) {
          return t instanceof Map || wu(t);
        }
        create() {
          return new pw();
        }
      }
      class pw {
        constructor() {
          (this._records = new Map()),
            (this._mapHead = null),
            (this._appendAfter = null),
            (this._previousMapHead = null),
            (this._changesHead = null),
            (this._changesTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null);
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._changesHead ||
            null !== this._removalsHead
          );
        }
        forEachItem(t) {
          let n;
          for (n = this._mapHead; null !== n; n = n._next) t(n);
        }
        forEachPreviousItem(t) {
          let n;
          for (n = this._previousMapHead; null !== n; n = n._nextPrevious) t(n);
        }
        forEachChangedItem(t) {
          let n;
          for (n = this._changesHead; null !== n; n = n._nextChanged) t(n);
        }
        forEachAddedItem(t) {
          let n;
          for (n = this._additionsHead; null !== n; n = n._nextAdded) t(n);
        }
        forEachRemovedItem(t) {
          let n;
          for (n = this._removalsHead; null !== n; n = n._nextRemoved) t(n);
        }
        diff(t) {
          if (t) {
            if (!(t instanceof Map || wu(t))) throw new de(900, !1);
          } else t = new Map();
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let n = this._mapHead;
          if (
            ((this._appendAfter = null),
            this._forEach(t, (r, o) => {
              if (n && n.key === o)
                this._maybeAddToChanges(n, r),
                  (this._appendAfter = n),
                  (n = n._next);
              else {
                const i = this._getOrCreateRecordForKey(o, r);
                n = this._insertBeforeOrAppend(n, i);
              }
            }),
            n)
          ) {
            n._prev && (n._prev._next = null), (this._removalsHead = n);
            for (let r = n; null !== r; r = r._nextRemoved)
              r === this._mapHead && (this._mapHead = null),
                this._records.delete(r.key),
                (r._nextRemoved = r._next),
                (r.previousValue = r.currentValue),
                (r.currentValue = null),
                (r._prev = null),
                (r._next = null);
          }
          return (
            this._changesTail && (this._changesTail._nextChanged = null),
            this._additionsTail && (this._additionsTail._nextAdded = null),
            this.isDirty
          );
        }
        _insertBeforeOrAppend(t, n) {
          if (t) {
            const r = t._prev;
            return (
              (n._next = t),
              (n._prev = r),
              (t._prev = n),
              r && (r._next = n),
              t === this._mapHead && (this._mapHead = n),
              (this._appendAfter = t),
              t
            );
          }
          return (
            this._appendAfter
              ? ((this._appendAfter._next = n), (n._prev = this._appendAfter))
              : (this._mapHead = n),
            (this._appendAfter = n),
            null
          );
        }
        _getOrCreateRecordForKey(t, n) {
          if (this._records.has(t)) {
            const o = this._records.get(t);
            this._maybeAddToChanges(o, n);
            const i = o._prev,
              s = o._next;
            return (
              i && (i._next = s),
              s && (s._prev = i),
              (o._next = null),
              (o._prev = null),
              o
            );
          }
          const r = new gw(t);
          return (
            this._records.set(t, r),
            (r.currentValue = n),
            this._addToAdditions(r),
            r
          );
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (
              this._previousMapHead = this._mapHead, t = this._previousMapHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (t = this._changesHead; null !== t; t = t._nextChanged)
              t.previousValue = t.currentValue;
            for (t = this._additionsHead; null != t; t = t._nextAdded)
              t.previousValue = t.currentValue;
            (this._changesHead = this._changesTail = null),
              (this._additionsHead = this._additionsTail = null),
              (this._removalsHead = null);
          }
        }
        _maybeAddToChanges(t, n) {
          Object.is(n, t.currentValue) ||
            ((t.previousValue = t.currentValue),
            (t.currentValue = n),
            this._addToChanges(t));
        }
        _addToAdditions(t) {
          null === this._additionsHead
            ? (this._additionsHead = this._additionsTail = t)
            : ((this._additionsTail._nextAdded = t), (this._additionsTail = t));
        }
        _addToChanges(t) {
          null === this._changesHead
            ? (this._changesHead = this._changesTail = t)
            : ((this._changesTail._nextChanged = t), (this._changesTail = t));
        }
        _forEach(t, n) {
          t instanceof Map
            ? t.forEach(n)
            : Object.keys(t).forEach(r => n(t[r], r));
        }
      }
      class gw {
        constructor(t) {
          (this.key = t),
            (this.previousValue = null),
            (this.currentValue = null),
            (this._nextPrevious = null),
            (this._next = null),
            (this._prev = null),
            (this._nextAdded = null),
            (this._nextRemoved = null),
            (this._nextChanged = null);
        }
      }
      function Wg() {
        return new hc([new Hg()]);
      }
      let hc = (() => {
        class e {
          constructor(n) {
            this.factories = n;
          }
          static create(n, r) {
            if (null != r) {
              const o = r.factories.slice();
              n = n.concat(o);
            }
            return new e(n);
          }
          static extend(n) {
            return {
              provide: e,
              useFactory: r => e.create(n, r || Wg()),
              deps: [[e, new as(), new ss()]],
            };
          }
          find(n) {
            const r = this.factories.find(o => o.supports(n));
            if (null != r) return r;
            throw new de(901, !1);
          }
        }
        return (e.ɵprov = ke({ token: e, providedIn: 'root', factory: Wg })), e;
      })();
      function Yg() {
        return new pc([new zg()]);
      }
      let pc = (() => {
        class e {
          constructor(n) {
            this.factories = n;
          }
          static create(n, r) {
            if (r) {
              const o = r.factories.slice();
              n = n.concat(o);
            }
            return new e(n);
          }
          static extend(n) {
            return {
              provide: e,
              useFactory: r => e.create(n, r || Yg()),
              deps: [[e, new as(), new ss()]],
            };
          }
          find(n) {
            const r = this.factories.find(o => o.supports(n));
            if (r) return r;
            throw new de(901, !1);
          }
        }
        return (e.ɵprov = ke({ token: e, providedIn: 'root', factory: Yg })), e;
      })();
      const vw = xg(null, 'core', []);
      let Dw = (() => {
        class e {
          constructor(n) {}
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(qt(Ga));
          }),
          (e.ɵmod = fn({ type: e })),
          (e.ɵinj = ot({})),
          e
        );
      })();
      function _w(e) {
        return 'boolean' == typeof e ? e : null != e && 'false' !== e;
      }
    },
    433: (Ke, pe, x) => {
      x.d(pe, {
        Wl: () => ae,
        NI: () => jt,
        u: () => Wr,
        cw: () => Ge,
        sg: () => Zn,
        u5: () => Xn,
        JJ: () => Xt,
        JL: () => Vn,
        UX: () => co,
        _Y: () => Ur,
      });
      var y = x(4650),
        I = x(6895),
        le = x(8306),
        ee = x(4742),
        j = x(8421),
        re = x(7669),
        se = x(5403),
        ue = x(3268),
        ye = x(1810),
        K = x(2076),
        J = x(4004);
      let je = (() => {
          class v {
            constructor(h, b) {
              (this._renderer = h),
                (this._elementRef = b),
                (this.onChange = z => {}),
                (this.onTouched = () => {});
            }
            setProperty(h, b) {
              this._renderer.setProperty(this._elementRef.nativeElement, h, b);
            }
            registerOnTouched(h) {
              this.onTouched = h;
            }
            registerOnChange(h) {
              this.onChange = h;
            }
            setDisabledState(h) {
              this.setProperty('disabled', h);
            }
          }
          return (
            (v.ɵfac = function (h) {
              return new (h || v)(y.Y36(y.Qsj), y.Y36(y.SBq));
            }),
            (v.ɵdir = y.lG2({ type: v })),
            v
          );
        })(),
        ve = (() => {
          class v extends je {}
          return (
            (v.ɵfac = (function () {
              let p;
              return function (b) {
                return (p || (p = y.n5z(v)))(b || v);
              };
            })()),
            (v.ɵdir = y.lG2({ type: v, features: [y.qOj] })),
            v
          );
        })();
      const de = new y.OlP('NgValueAccessor'),
        Te = { provide: de, useExisting: (0, y.Gpc)(() => ae), multi: !0 };
      let ae = (() => {
        class v extends ve {
          writeValue(h) {
            this.setProperty('checked', h);
          }
        }
        return (
          (v.ɵfac = (function () {
            let p;
            return function (b) {
              return (p || (p = y.n5z(v)))(b || v);
            };
          })()),
          (v.ɵdir = y.lG2({
            type: v,
            selectors: [
              ['input', 'type', 'checkbox', 'formControlName', ''],
              ['input', 'type', 'checkbox', 'formControl', ''],
              ['input', 'type', 'checkbox', 'ngModel', ''],
            ],
            hostBindings: function (h, b) {
              1 & h &&
                y.NdJ('change', function (Oe) {
                  return b.onChange(Oe.target.checked);
                })('blur', function () {
                  return b.onTouched();
                });
            },
            features: [y._Bn([Te]), y.qOj],
          })),
          v
        );
      })();
      const Ie = { provide: de, useExisting: (0, y.Gpc)(() => me), multi: !0 },
        rt = new y.OlP('CompositionEventMode');
      let me = (() => {
        class v extends je {
          constructor(h, b, z) {
            super(h, b),
              (this._compositionMode = z),
              (this._composing = !1),
              null == this._compositionMode &&
                (this._compositionMode = !(function Je() {
                  const v = (0, I.q)() ? (0, I.q)().getUserAgent() : '';
                  return /android (\d+)/.test(v.toLowerCase());
                })());
          }
          writeValue(h) {
            this.setProperty('value', h ?? '');
          }
          _handleInput(h) {
            (!this._compositionMode ||
              (this._compositionMode && !this._composing)) &&
              this.onChange(h);
          }
          _compositionStart() {
            this._composing = !0;
          }
          _compositionEnd(h) {
            (this._composing = !1), this._compositionMode && this.onChange(h);
          }
        }
        return (
          (v.ɵfac = function (h) {
            return new (h || v)(y.Y36(y.Qsj), y.Y36(y.SBq), y.Y36(rt, 8));
          }),
          (v.ɵdir = y.lG2({
            type: v,
            selectors: [
              ['input', 'formControlName', '', 3, 'type', 'checkbox'],
              ['textarea', 'formControlName', ''],
              ['input', 'formControl', '', 3, 'type', 'checkbox'],
              ['textarea', 'formControl', ''],
              ['input', 'ngModel', '', 3, 'type', 'checkbox'],
              ['textarea', 'ngModel', ''],
              ['', 'ngDefaultControl', ''],
            ],
            hostBindings: function (h, b) {
              1 & h &&
                y.NdJ('input', function (Oe) {
                  return b._handleInput(Oe.target.value);
                })('blur', function () {
                  return b.onTouched();
                })('compositionstart', function () {
                  return b._compositionStart();
                })('compositionend', function (Oe) {
                  return b._compositionEnd(Oe.target.value);
                });
            },
            features: [y._Bn([Ie]), y.qOj],
          })),
          v
        );
      })();
      const Ue = new y.OlP('NgValidators'),
        Me = new y.OlP('NgAsyncValidators');
      function k(v) {
        return null != v;
      }
      function ce(v) {
        const p = (0, y.QGY)(v) ? (0, K.D)(v) : v;
        return (0, y.CqO)(p), p;
      }
      function Le(v) {
        let p = {};
        return (
          v.forEach(h => {
            p = null != h ? { ...p, ...h } : p;
          }),
          0 === Object.keys(p).length ? null : p
        );
      }
      function Ze(v, p) {
        return p.map(h => h(v));
      }
      function st(v) {
        return v.map(p =>
          (function ke(v) {
            return !v.validate;
          })(p)
            ? p
            : h => p.validate(h)
        );
      }
      function tt(v) {
        return null != v
          ? (function ot(v) {
              if (!v) return null;
              const p = v.filter(k);
              return 0 == p.length
                ? null
                : function (h) {
                    return Le(Ze(h, p));
                  };
            })(st(v))
          : null;
      }
      function Et(v) {
        return null != v
          ? (function Ot(v) {
              if (!v) return null;
              const p = v.filter(k);
              return 0 == p.length
                ? null
                : function (h) {
                    return (function te(...v) {
                      const p = (0, re.jO)(v),
                        { args: h, keys: b } = (0, ee.D)(v),
                        z = new le.y(Oe => {
                          const { length: Tt } = h;
                          if (!Tt) return void Oe.complete();
                          const Kt = new Array(Tt);
                          let Mt = Tt,
                            on = Tt;
                          for (let qr = 0; qr < Tt; qr++) {
                            let wn = !1;
                            (0, j.Xf)(h[qr]).subscribe(
                              (0, se.x)(
                                Oe,
                                ln => {
                                  wn || ((wn = !0), on--), (Kt[qr] = ln);
                                },
                                () => Mt--,
                                void 0,
                                () => {
                                  (!Mt || !wn) &&
                                    (on || Oe.next(b ? (0, ye.n)(b, Kt) : Kt),
                                    Oe.complete());
                                }
                              )
                            );
                          }
                        });
                      return p ? z.pipe((0, ue.Z)(p)) : z;
                    })(Ze(h, p).map(ce)).pipe((0, J.U)(Le));
                  };
            })(st(v))
          : null;
      }
      function yt(v, p) {
        return null === v ? [p] : Array.isArray(v) ? [...v, p] : [v, p];
      }
      function Vr(v) {
        return v._rawValidators;
      }
      function vn(v) {
        return v._rawAsyncValidators;
      }
      function Zt(v) {
        return v ? (Array.isArray(v) ? v : [v]) : [];
      }
      function In(v, p) {
        return Array.isArray(v) ? v.includes(p) : v === p;
      }
      function Jt(v, p) {
        const h = Zt(p);
        return (
          Zt(v).forEach(z => {
            In(h, z) || h.push(z);
          }),
          h
        );
      }
      function Ne(v, p) {
        return Zt(p).filter(h => !In(v, h));
      }
      class cn {
        constructor() {
          (this._rawValidators = []),
            (this._rawAsyncValidators = []),
            (this._onDestroyCallbacks = []);
        }
        get value() {
          return this.control ? this.control.value : null;
        }
        get valid() {
          return this.control ? this.control.valid : null;
        }
        get invalid() {
          return this.control ? this.control.invalid : null;
        }
        get pending() {
          return this.control ? this.control.pending : null;
        }
        get disabled() {
          return this.control ? this.control.disabled : null;
        }
        get enabled() {
          return this.control ? this.control.enabled : null;
        }
        get errors() {
          return this.control ? this.control.errors : null;
        }
        get pristine() {
          return this.control ? this.control.pristine : null;
        }
        get dirty() {
          return this.control ? this.control.dirty : null;
        }
        get touched() {
          return this.control ? this.control.touched : null;
        }
        get status() {
          return this.control ? this.control.status : null;
        }
        get untouched() {
          return this.control ? this.control.untouched : null;
        }
        get statusChanges() {
          return this.control ? this.control.statusChanges : null;
        }
        get valueChanges() {
          return this.control ? this.control.valueChanges : null;
        }
        get path() {
          return null;
        }
        _setValidators(p) {
          (this._rawValidators = p || []),
            (this._composedValidatorFn = tt(this._rawValidators));
        }
        _setAsyncValidators(p) {
          (this._rawAsyncValidators = p || []),
            (this._composedAsyncValidatorFn = Et(this._rawAsyncValidators));
        }
        get validator() {
          return this._composedValidatorFn || null;
        }
        get asyncValidator() {
          return this._composedAsyncValidatorFn || null;
        }
        _registerOnDestroy(p) {
          this._onDestroyCallbacks.push(p);
        }
        _invokeOnDestroyCallbacks() {
          this._onDestroyCallbacks.forEach(p => p()),
            (this._onDestroyCallbacks = []);
        }
        reset(p) {
          this.control && this.control.reset(p);
        }
        hasError(p, h) {
          return !!this.control && this.control.hasError(p, h);
        }
        getError(p, h) {
          return this.control ? this.control.getError(p, h) : null;
        }
      }
      class ct extends cn {
        get formDirective() {
          return null;
        }
        get path() {
          return null;
        }
      }
      class wt extends cn {
        constructor() {
          super(...arguments),
            (this._parent = null),
            (this.name = null),
            (this.valueAccessor = null);
        }
      }
      class or {
        constructor(p) {
          this._cd = p;
        }
        get isTouched() {
          return !!this._cd?.control?.touched;
        }
        get isUntouched() {
          return !!this._cd?.control?.untouched;
        }
        get isPristine() {
          return !!this._cd?.control?.pristine;
        }
        get isDirty() {
          return !!this._cd?.control?.dirty;
        }
        get isValid() {
          return !!this._cd?.control?.valid;
        }
        get isInvalid() {
          return !!this._cd?.control?.invalid;
        }
        get isPending() {
          return !!this._cd?.control?.pending;
        }
        get isSubmitted() {
          return !!this._cd?.submitted;
        }
      }
      let Xt = (() => {
          class v extends or {
            constructor(h) {
              super(h);
            }
          }
          return (
            (v.ɵfac = function (h) {
              return new (h || v)(y.Y36(wt, 2));
            }),
            (v.ɵdir = y.lG2({
              type: v,
              selectors: [
                ['', 'formControlName', ''],
                ['', 'ngModel', ''],
                ['', 'formControl', ''],
              ],
              hostVars: 14,
              hostBindings: function (h, b) {
                2 & h &&
                  y.ekj('ng-untouched', b.isUntouched)(
                    'ng-touched',
                    b.isTouched
                  )('ng-pristine', b.isPristine)('ng-dirty', b.isDirty)(
                    'ng-valid',
                    b.isValid
                  )('ng-invalid', b.isInvalid)('ng-pending', b.isPending);
              },
              features: [y.qOj],
            })),
            v
          );
        })(),
        Vn = (() => {
          class v extends or {
            constructor(h) {
              super(h);
            }
          }
          return (
            (v.ɵfac = function (h) {
              return new (h || v)(y.Y36(ct, 10));
            }),
            (v.ɵdir = y.lG2({
              type: v,
              selectors: [
                ['', 'formGroupName', ''],
                ['', 'formArrayName', ''],
                ['', 'ngModelGroup', ''],
                ['', 'formGroup', ''],
                ['form', 3, 'ngNoForm', ''],
                ['', 'ngForm', ''],
              ],
              hostVars: 16,
              hostBindings: function (h, b) {
                2 & h &&
                  y.ekj('ng-untouched', b.isUntouched)(
                    'ng-touched',
                    b.isTouched
                  )('ng-pristine', b.isPristine)('ng-dirty', b.isDirty)(
                    'ng-valid',
                    b.isValid
                  )('ng-invalid', b.isInvalid)('ng-pending', b.isPending)(
                    'ng-submitted',
                    b.isSubmitted
                  );
              },
              features: [y.qOj],
            })),
            v
          );
        })();
      const Sn = 'VALID',
        fn = 'INVALID',
        hn = 'PENDING',
        Dt = 'DISABLED';
      function $t(v) {
        return (At(v) ? v.validators : v) || null;
      }
      function sr(v) {
        return Array.isArray(v) ? tt(v) : v || null;
      }
      function dt(v, p) {
        return (At(p) ? p.asyncValidators : v) || null;
      }
      function Ft(v) {
        return Array.isArray(v) ? Et(v) : v || null;
      }
      function At(v) {
        return null != v && !Array.isArray(v) && 'object' == typeof v;
      }
      class De {
        constructor(p, h) {
          (this._pendingDirty = !1),
            (this._hasOwnPendingAsyncValidator = !1),
            (this._pendingTouched = !1),
            (this._onCollectionChange = () => {}),
            (this._parent = null),
            (this.pristine = !0),
            (this.touched = !1),
            (this._onDisabledChange = []),
            (this._rawValidators = p),
            (this._rawAsyncValidators = h),
            (this._composedValidatorFn = sr(this._rawValidators)),
            (this._composedAsyncValidatorFn = Ft(this._rawAsyncValidators));
        }
        get validator() {
          return this._composedValidatorFn;
        }
        set validator(p) {
          this._rawValidators = this._composedValidatorFn = p;
        }
        get asyncValidator() {
          return this._composedAsyncValidatorFn;
        }
        set asyncValidator(p) {
          this._rawAsyncValidators = this._composedAsyncValidatorFn = p;
        }
        get parent() {
          return this._parent;
        }
        get valid() {
          return this.status === Sn;
        }
        get invalid() {
          return this.status === fn;
        }
        get pending() {
          return this.status == hn;
        }
        get disabled() {
          return this.status === Dt;
        }
        get enabled() {
          return this.status !== Dt;
        }
        get dirty() {
          return !this.pristine;
        }
        get untouched() {
          return !this.touched;
        }
        get updateOn() {
          return this._updateOn
            ? this._updateOn
            : this.parent
            ? this.parent.updateOn
            : 'change';
        }
        setValidators(p) {
          (this._rawValidators = p), (this._composedValidatorFn = sr(p));
        }
        setAsyncValidators(p) {
          (this._rawAsyncValidators = p),
            (this._composedAsyncValidatorFn = Ft(p));
        }
        addValidators(p) {
          this.setValidators(Jt(p, this._rawValidators));
        }
        addAsyncValidators(p) {
          this.setAsyncValidators(Jt(p, this._rawAsyncValidators));
        }
        removeValidators(p) {
          this.setValidators(Ne(p, this._rawValidators));
        }
        removeAsyncValidators(p) {
          this.setAsyncValidators(Ne(p, this._rawAsyncValidators));
        }
        hasValidator(p) {
          return In(this._rawValidators, p);
        }
        hasAsyncValidator(p) {
          return In(this._rawAsyncValidators, p);
        }
        clearValidators() {
          this.validator = null;
        }
        clearAsyncValidators() {
          this.asyncValidator = null;
        }
        markAsTouched(p = {}) {
          (this.touched = !0),
            this._parent && !p.onlySelf && this._parent.markAsTouched(p);
        }
        markAllAsTouched() {
          this.markAsTouched({ onlySelf: !0 }),
            this._forEachChild(p => p.markAllAsTouched());
        }
        markAsUntouched(p = {}) {
          (this.touched = !1),
            (this._pendingTouched = !1),
            this._forEachChild(h => {
              h.markAsUntouched({ onlySelf: !0 });
            }),
            this._parent && !p.onlySelf && this._parent._updateTouched(p);
        }
        markAsDirty(p = {}) {
          (this.pristine = !1),
            this._parent && !p.onlySelf && this._parent.markAsDirty(p);
        }
        markAsPristine(p = {}) {
          (this.pristine = !0),
            (this._pendingDirty = !1),
            this._forEachChild(h => {
              h.markAsPristine({ onlySelf: !0 });
            }),
            this._parent && !p.onlySelf && this._parent._updatePristine(p);
        }
        markAsPending(p = {}) {
          (this.status = hn),
            !1 !== p.emitEvent && this.statusChanges.emit(this.status),
            this._parent && !p.onlySelf && this._parent.markAsPending(p);
        }
        disable(p = {}) {
          const h = this._parentMarkedDirty(p.onlySelf);
          (this.status = Dt),
            (this.errors = null),
            this._forEachChild(b => {
              b.disable({ ...p, onlySelf: !0 });
            }),
            this._updateValue(),
            !1 !== p.emitEvent &&
              (this.valueChanges.emit(this.value),
              this.statusChanges.emit(this.status)),
            this._updateAncestors({ ...p, skipPristineCheck: h }),
            this._onDisabledChange.forEach(b => b(!0));
        }
        enable(p = {}) {
          const h = this._parentMarkedDirty(p.onlySelf);
          (this.status = Sn),
            this._forEachChild(b => {
              b.enable({ ...p, onlySelf: !0 });
            }),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: p.emitEvent,
            }),
            this._updateAncestors({ ...p, skipPristineCheck: h }),
            this._onDisabledChange.forEach(b => b(!1));
        }
        _updateAncestors(p) {
          this._parent &&
            !p.onlySelf &&
            (this._parent.updateValueAndValidity(p),
            p.skipPristineCheck || this._parent._updatePristine(),
            this._parent._updateTouched());
        }
        setParent(p) {
          this._parent = p;
        }
        getRawValue() {
          return this.value;
        }
        updateValueAndValidity(p = {}) {
          this._setInitialStatus(),
            this._updateValue(),
            this.enabled &&
              (this._cancelExistingSubscription(),
              (this.errors = this._runValidator()),
              (this.status = this._calculateStatus()),
              (this.status === Sn || this.status === hn) &&
                this._runAsyncValidator(p.emitEvent)),
            !1 !== p.emitEvent &&
              (this.valueChanges.emit(this.value),
              this.statusChanges.emit(this.status)),
            this._parent &&
              !p.onlySelf &&
              this._parent.updateValueAndValidity(p);
        }
        _updateTreeValidity(p = { emitEvent: !0 }) {
          this._forEachChild(h => h._updateTreeValidity(p)),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: p.emitEvent,
            });
        }
        _setInitialStatus() {
          this.status = this._allControlsDisabled() ? Dt : Sn;
        }
        _runValidator() {
          return this.validator ? this.validator(this) : null;
        }
        _runAsyncValidator(p) {
          if (this.asyncValidator) {
            (this.status = hn), (this._hasOwnPendingAsyncValidator = !0);
            const h = ce(this.asyncValidator(this));
            this._asyncValidationSubscription = h.subscribe(b => {
              (this._hasOwnPendingAsyncValidator = !1),
                this.setErrors(b, { emitEvent: p });
            });
          }
        }
        _cancelExistingSubscription() {
          this._asyncValidationSubscription &&
            (this._asyncValidationSubscription.unsubscribe(),
            (this._hasOwnPendingAsyncValidator = !1));
        }
        setErrors(p, h = {}) {
          (this.errors = p), this._updateControlsErrors(!1 !== h.emitEvent);
        }
        get(p) {
          let h = p;
          return null == h ||
            (Array.isArray(h) || (h = h.split('.')), 0 === h.length)
            ? null
            : h.reduce((b, z) => b && b._find(z), this);
        }
        getError(p, h) {
          const b = h ? this.get(h) : this;
          return b && b.errors ? b.errors[p] : null;
        }
        hasError(p, h) {
          return !!this.getError(p, h);
        }
        get root() {
          let p = this;
          for (; p._parent; ) p = p._parent;
          return p;
        }
        _updateControlsErrors(p) {
          (this.status = this._calculateStatus()),
            p && this.statusChanges.emit(this.status),
            this._parent && this._parent._updateControlsErrors(p);
        }
        _initObservables() {
          (this.valueChanges = new y.vpe()), (this.statusChanges = new y.vpe());
        }
        _calculateStatus() {
          return this._allControlsDisabled()
            ? Dt
            : this.errors
            ? fn
            : this._hasOwnPendingAsyncValidator ||
              this._anyControlsHaveStatus(hn)
            ? hn
            : this._anyControlsHaveStatus(fn)
            ? fn
            : Sn;
        }
        _anyControlsHaveStatus(p) {
          return this._anyControls(h => h.status === p);
        }
        _anyControlsDirty() {
          return this._anyControls(p => p.dirty);
        }
        _anyControlsTouched() {
          return this._anyControls(p => p.touched);
        }
        _updatePristine(p = {}) {
          (this.pristine = !this._anyControlsDirty()),
            this._parent && !p.onlySelf && this._parent._updatePristine(p);
        }
        _updateTouched(p = {}) {
          (this.touched = this._anyControlsTouched()),
            this._parent && !p.onlySelf && this._parent._updateTouched(p);
        }
        _registerOnCollectionChange(p) {
          this._onCollectionChange = p;
        }
        _setUpdateStrategy(p) {
          At(p) && null != p.updateOn && (this._updateOn = p.updateOn);
        }
        _parentMarkedDirty(p) {
          return (
            !p &&
            !(!this._parent || !this._parent.dirty) &&
            !this._parent._anyControlsDirty()
          );
        }
        _find(p) {
          return null;
        }
      }
      class Ge extends De {
        constructor(p, h, b) {
          super($t(h), dt(b, h)),
            (this.controls = p),
            this._initObservables(),
            this._setUpdateStrategy(h),
            this._setUpControls(),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: !!this.asyncValidator,
            });
        }
        registerControl(p, h) {
          return this.controls[p]
            ? this.controls[p]
            : ((this.controls[p] = h),
              h.setParent(this),
              h._registerOnCollectionChange(this._onCollectionChange),
              h);
        }
        addControl(p, h, b = {}) {
          this.registerControl(p, h),
            this.updateValueAndValidity({ emitEvent: b.emitEvent }),
            this._onCollectionChange();
        }
        removeControl(p, h = {}) {
          this.controls[p] &&
            this.controls[p]._registerOnCollectionChange(() => {}),
            delete this.controls[p],
            this.updateValueAndValidity({ emitEvent: h.emitEvent }),
            this._onCollectionChange();
        }
        setControl(p, h, b = {}) {
          this.controls[p] &&
            this.controls[p]._registerOnCollectionChange(() => {}),
            delete this.controls[p],
            h && this.registerControl(p, h),
            this.updateValueAndValidity({ emitEvent: b.emitEvent }),
            this._onCollectionChange();
        }
        contains(p) {
          return this.controls.hasOwnProperty(p) && this.controls[p].enabled;
        }
        setValue(p, h = {}) {
          (function Bt(v, p, h) {
            v._forEachChild((b, z) => {
              if (void 0 === h[z]) throw new y.vHH(1002, '');
            });
          })(this, 0, p),
            Object.keys(p).forEach(b => {
              (function Gt(v, p, h) {
                const b = v.controls;
                if (!(p ? Object.keys(b) : b).length) throw new y.vHH(1e3, '');
                if (!b[h]) throw new y.vHH(1001, '');
              })(this, !0, b),
                this.controls[b].setValue(p[b], {
                  onlySelf: !0,
                  emitEvent: h.emitEvent,
                });
            }),
            this.updateValueAndValidity(h);
        }
        patchValue(p, h = {}) {
          null != p &&
            (Object.keys(p).forEach(b => {
              const z = this.controls[b];
              z && z.patchValue(p[b], { onlySelf: !0, emitEvent: h.emitEvent });
            }),
            this.updateValueAndValidity(h));
        }
        reset(p = {}, h = {}) {
          this._forEachChild((b, z) => {
            b.reset(p[z], { onlySelf: !0, emitEvent: h.emitEvent });
          }),
            this._updatePristine(h),
            this._updateTouched(h),
            this.updateValueAndValidity(h);
        }
        getRawValue() {
          return this._reduceChildren(
            {},
            (p, h, b) => ((p[b] = h.getRawValue()), p)
          );
        }
        _syncPendingControls() {
          let p = this._reduceChildren(
            !1,
            (h, b) => !!b._syncPendingControls() || h
          );
          return p && this.updateValueAndValidity({ onlySelf: !0 }), p;
        }
        _forEachChild(p) {
          Object.keys(this.controls).forEach(h => {
            const b = this.controls[h];
            b && p(b, h);
          });
        }
        _setUpControls() {
          this._forEachChild(p => {
            p.setParent(this),
              p._registerOnCollectionChange(this._onCollectionChange);
          });
        }
        _updateValue() {
          this.value = this._reduceValue();
        }
        _anyControls(p) {
          for (const [h, b] of Object.entries(this.controls))
            if (this.contains(h) && p(b)) return !0;
          return !1;
        }
        _reduceValue() {
          return this._reduceChildren(
            {},
            (h, b, z) => ((b.enabled || this.disabled) && (h[z] = b.value), h)
          );
        }
        _reduceChildren(p, h) {
          let b = p;
          return (
            this._forEachChild((z, Oe) => {
              b = h(b, z, Oe);
            }),
            b
          );
        }
        _allControlsDisabled() {
          for (const p of Object.keys(this.controls))
            if (this.controls[p].enabled) return !1;
          return Object.keys(this.controls).length > 0 || this.disabled;
        }
        _find(p) {
          return this.controls.hasOwnProperty(p) ? this.controls[p] : null;
        }
      }
      function _e(v, p) {
        pn(v, p),
          p.valueAccessor.writeValue(v.value),
          v.disabled && p.valueAccessor.setDisabledState?.(!0),
          (function Tn(v, p) {
            p.valueAccessor.registerOnChange(h => {
              (v._pendingValue = h),
                (v._pendingChange = !0),
                (v._pendingDirty = !0),
                'change' === v.updateOn && Rt(v, p);
            });
          })(v, p),
          (function xn(v, p) {
            const h = (b, z) => {
              p.valueAccessor.writeValue(b), z && p.viewToModelUpdate(b);
            };
            v.registerOnChange(h),
              p._registerOnDestroy(() => {
                v._unregisterOnChange(h);
              });
          })(v, p),
          (function an(v, p) {
            p.valueAccessor.registerOnTouched(() => {
              (v._pendingTouched = !0),
                'blur' === v.updateOn && v._pendingChange && Rt(v, p),
                'submit' !== v.updateOn && v.markAsTouched();
            });
          })(v, p),
          (function Pe(v, p) {
            if (p.valueAccessor.setDisabledState) {
              const h = b => {
                p.valueAccessor.setDisabledState(b);
              };
              v.registerOnDisabledChange(h),
                p._registerOnDestroy(() => {
                  v._unregisterOnDisabledChange(h);
                });
            }
          })(v, p);
      }
      function qe(v, p, h = !0) {
        const b = () => {};
        p.valueAccessor &&
          (p.valueAccessor.registerOnChange(b),
          p.valueAccessor.registerOnTouched(b)),
          _n(v, p),
          v &&
            (p._invokeOnDestroyCallbacks(),
            v._registerOnCollectionChange(() => {}));
      }
      function _t(v, p) {
        v.forEach(h => {
          h.registerOnValidatorChange && h.registerOnValidatorChange(p);
        });
      }
      function pn(v, p) {
        const h = Vr(v);
        null !== p.validator
          ? v.setValidators(yt(h, p.validator))
          : 'function' == typeof h && v.setValidators([h]);
        const b = vn(v);
        null !== p.asyncValidator
          ? v.setAsyncValidators(yt(b, p.asyncValidator))
          : 'function' == typeof b && v.setAsyncValidators([b]);
        const z = () => v.updateValueAndValidity();
        _t(p._rawValidators, z), _t(p._rawAsyncValidators, z);
      }
      function _n(v, p) {
        let h = !1;
        if (null !== v) {
          if (null !== p.validator) {
            const z = Vr(v);
            if (Array.isArray(z) && z.length > 0) {
              const Oe = z.filter(Tt => Tt !== p.validator);
              Oe.length !== z.length && ((h = !0), v.setValidators(Oe));
            }
          }
          if (null !== p.asyncValidator) {
            const z = vn(v);
            if (Array.isArray(z) && z.length > 0) {
              const Oe = z.filter(Tt => Tt !== p.asyncValidator);
              Oe.length !== z.length && ((h = !0), v.setAsyncValidators(Oe));
            }
          }
        }
        const b = () => {};
        return _t(p._rawValidators, b), _t(p._rawAsyncValidators, b), h;
      }
      function Rt(v, p) {
        v._pendingDirty && v.markAsDirty(),
          v.setValue(v._pendingValue, { emitModelToViewChange: !1 }),
          p.viewToModelUpdate(v._pendingValue),
          (v._pendingChange = !1);
      }
      function Yt(v, p) {
        const h = v.indexOf(p);
        h > -1 && v.splice(h, 1);
      }
      function Rn(v) {
        return (
          'object' == typeof v &&
          null !== v &&
          2 === Object.keys(v).length &&
          'value' in v &&
          'disabled' in v
        );
      }
      const jt = class extends De {
        constructor(p = null, h, b) {
          super($t(h), dt(b, h)),
            (this.defaultValue = null),
            (this._onChange = []),
            (this._pendingChange = !1),
            this._applyFormState(p),
            this._setUpdateStrategy(h),
            this._initObservables(),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: !!this.asyncValidator,
            }),
            At(h) &&
              (h.nonNullable || h.initialValueIsDefault) &&
              (this.defaultValue = Rn(p) ? p.value : p);
        }
        setValue(p, h = {}) {
          (this.value = this._pendingValue = p),
            this._onChange.length &&
              !1 !== h.emitModelToViewChange &&
              this._onChange.forEach(b =>
                b(this.value, !1 !== h.emitViewToModelChange)
              ),
            this.updateValueAndValidity(h);
        }
        patchValue(p, h = {}) {
          this.setValue(p, h);
        }
        reset(p = this.defaultValue, h = {}) {
          this._applyFormState(p),
            this.markAsPristine(h),
            this.markAsUntouched(h),
            this.setValue(this.value, h),
            (this._pendingChange = !1);
        }
        _updateValue() {}
        _anyControls(p) {
          return !1;
        }
        _allControlsDisabled() {
          return this.disabled;
        }
        registerOnChange(p) {
          this._onChange.push(p);
        }
        _unregisterOnChange(p) {
          Yt(this._onChange, p);
        }
        registerOnDisabledChange(p) {
          this._onDisabledChange.push(p);
        }
        _unregisterOnDisabledChange(p) {
          Yt(this._onDisabledChange, p);
        }
        _forEachChild(p) {}
        _syncPendingControls() {
          return !(
            'submit' !== this.updateOn ||
            (this._pendingDirty && this.markAsDirty(),
            this._pendingTouched && this.markAsTouched(),
            !this._pendingChange) ||
            (this.setValue(this._pendingValue, {
              onlySelf: !0,
              emitModelToViewChange: !1,
            }),
            0)
          );
        }
        _applyFormState(p) {
          Rn(p)
            ? ((this.value = this._pendingValue = p.value),
              p.disabled
                ? this.disable({ onlySelf: !0, emitEvent: !1 })
                : this.enable({ onlySelf: !0, emitEvent: !1 }))
            : (this.value = this._pendingValue = p);
        }
      };
      let Ur = (() => {
          class v {}
          return (
            (v.ɵfac = function (h) {
              return new (h || v)();
            }),
            (v.ɵdir = y.lG2({
              type: v,
              selectors: [
                ['form', 3, 'ngNoForm', '', 3, 'ngNativeValidate', ''],
              ],
              hostAttrs: ['novalidate', ''],
            })),
            v
          );
        })(),
        Eo = (() => {
          class v {}
          return (
            (v.ɵfac = function (h) {
              return new (h || v)();
            }),
            (v.ɵmod = y.oAB({ type: v })),
            (v.ɵinj = y.cJS({})),
            v
          );
        })();
      const $r = new y.OlP('NgModelWithFormControlWarning'),
        Un = { provide: ct, useExisting: (0, y.Gpc)(() => Zn) };
      let Zn = (() => {
        class v extends ct {
          constructor(h, b) {
            super(),
              (this.validators = h),
              (this.asyncValidators = b),
              (this.submitted = !1),
              (this._onCollectionChange = () => this._updateDomValue()),
              (this.directives = []),
              (this.form = null),
              (this.ngSubmit = new y.vpe()),
              this._setValidators(h),
              this._setAsyncValidators(b);
          }
          ngOnChanges(h) {
            this._checkFormPresent(),
              h.hasOwnProperty('form') &&
                (this._updateValidators(),
                this._updateDomValue(),
                this._updateRegistrations(),
                (this._oldForm = this.form));
          }
          ngOnDestroy() {
            this.form &&
              (_n(this.form, this),
              this.form._onCollectionChange === this._onCollectionChange &&
                this.form._registerOnCollectionChange(() => {}));
          }
          get formDirective() {
            return this;
          }
          get control() {
            return this.form;
          }
          get path() {
            return [];
          }
          addControl(h) {
            const b = this.form.get(h.path);
            return (
              _e(b, h),
              b.updateValueAndValidity({ emitEvent: !1 }),
              this.directives.push(h),
              b
            );
          }
          getControl(h) {
            return this.form.get(h.path);
          }
          removeControl(h) {
            qe(h.control || null, h, !1),
              (function ar(v, p) {
                const h = v.indexOf(p);
                h > -1 && v.splice(h, 1);
              })(this.directives, h);
          }
          addFormGroup(h) {
            this._setUpFormContainer(h);
          }
          removeFormGroup(h) {
            this._cleanUpFormContainer(h);
          }
          getFormGroup(h) {
            return this.form.get(h.path);
          }
          addFormArray(h) {
            this._setUpFormContainer(h);
          }
          removeFormArray(h) {
            this._cleanUpFormContainer(h);
          }
          getFormArray(h) {
            return this.form.get(h.path);
          }
          updateModel(h, b) {
            this.form.get(h.path).setValue(b);
          }
          onSubmit(h) {
            return (
              (this.submitted = !0),
              (function Fn(v, p) {
                v._syncPendingControls(),
                  p.forEach(h => {
                    const b = h.control;
                    'submit' === b.updateOn &&
                      b._pendingChange &&
                      (h.viewToModelUpdate(b._pendingValue),
                      (b._pendingChange = !1));
                  });
              })(this.form, this.directives),
              this.ngSubmit.emit(h),
              !1
            );
          }
          onReset() {
            this.resetForm();
          }
          resetForm(h) {
            this.form.reset(h), (this.submitted = !1);
          }
          _updateDomValue() {
            this.directives.forEach(h => {
              const b = h.control,
                z = this.form.get(h.path);
              b !== z &&
                (qe(b || null, h),
                (v => v instanceof jt)(z) && (_e(z, h), (h.control = z)));
            }),
              this.form._updateTreeValidity({ emitEvent: !1 });
          }
          _setUpFormContainer(h) {
            const b = this.form.get(h.path);
            (function Cn(v, p) {
              pn(v, p);
            })(b, h),
              b.updateValueAndValidity({ emitEvent: !1 });
          }
          _cleanUpFormContainer(h) {
            if (this.form) {
              const b = this.form.get(h.path);
              b &&
                (function zt(v, p) {
                  return _n(v, p);
                })(b, h) &&
                b.updateValueAndValidity({ emitEvent: !1 });
            }
          }
          _updateRegistrations() {
            this.form._registerOnCollectionChange(this._onCollectionChange),
              this._oldForm &&
                this._oldForm._registerOnCollectionChange(() => {});
          }
          _updateValidators() {
            pn(this.form, this), this._oldForm && _n(this._oldForm, this);
          }
          _checkFormPresent() {}
        }
        return (
          (v.ɵfac = function (h) {
            return new (h || v)(y.Y36(Ue, 10), y.Y36(Me, 10));
          }),
          (v.ɵdir = y.lG2({
            type: v,
            selectors: [['', 'formGroup', '']],
            hostBindings: function (h, b) {
              1 & h &&
                y.NdJ('submit', function (Oe) {
                  return b.onSubmit(Oe);
                })('reset', function () {
                  return b.onReset();
                });
            },
            inputs: { form: ['formGroup', 'form'] },
            outputs: { ngSubmit: 'ngSubmit' },
            exportAs: ['ngForm'],
            features: [y._Bn([Un]), y.qOj, y.TTD],
          })),
          v
        );
      })();
      const so = { provide: wt, useExisting: (0, y.Gpc)(() => Wr) };
      let Wr = (() => {
          class v extends wt {
            constructor(h, b, z, Oe, Tt) {
              super(),
                (this._ngModelWarningConfig = Tt),
                (this._added = !1),
                (this.update = new y.vpe()),
                (this._ngModelWarningSent = !1),
                (this._parent = h),
                this._setValidators(b),
                this._setAsyncValidators(z),
                (this.valueAccessor = (function Bn(v, p) {
                  if (!p) return null;
                  let h, b, z;
                  return (
                    Array.isArray(p),
                    p.forEach(Oe => {
                      Oe.constructor === me
                        ? (h = Oe)
                        : (function wr(v) {
                            return Object.getPrototypeOf(v.constructor) === ve;
                          })(Oe)
                        ? (b = Oe)
                        : (z = Oe);
                    }),
                    z || b || h || null
                  );
                })(0, Oe));
            }
            set isDisabled(h) {}
            ngOnChanges(h) {
              this._added || this._setUpControl(),
                (function Er(v, p) {
                  if (!v.hasOwnProperty('model')) return !1;
                  const h = v.model;
                  return !!h.isFirstChange() || !Object.is(p, h.currentValue);
                })(h, this.viewModel) &&
                  ((this.viewModel = this.model),
                  this.formDirective.updateModel(this, this.model));
            }
            ngOnDestroy() {
              this.formDirective && this.formDirective.removeControl(this);
            }
            viewToModelUpdate(h) {
              (this.viewModel = h), this.update.emit(h);
            }
            get path() {
              return (function q(v, p) {
                return [...p.path, v];
              })(
                null == this.name ? this.name : this.name.toString(),
                this._parent
              );
            }
            get formDirective() {
              return this._parent ? this._parent.formDirective : null;
            }
            _checkParentType() {}
            _setUpControl() {
              this._checkParentType(),
                (this.control = this.formDirective.addControl(this)),
                (this._added = !0);
            }
          }
          return (
            (v._ngModelWarningSentOnce = !1),
            (v.ɵfac = function (h) {
              return new (h || v)(
                y.Y36(ct, 13),
                y.Y36(Ue, 10),
                y.Y36(Me, 10),
                y.Y36(de, 10),
                y.Y36($r, 8)
              );
            }),
            (v.ɵdir = y.lG2({
              type: v,
              selectors: [['', 'formControlName', '']],
              inputs: {
                name: ['formControlName', 'name'],
                isDisabled: ['disabled', 'isDisabled'],
                model: ['ngModel', 'model'],
              },
              outputs: { update: 'ngModelChange' },
              features: [y._Bn([so]), y.qOj, y.TTD],
            })),
            v
          );
        })(),
        Ln = (() => {
          class v {}
          return (
            (v.ɵfac = function (h) {
              return new (h || v)();
            }),
            (v.ɵmod = y.oAB({ type: v })),
            (v.ɵinj = y.cJS({ imports: [Eo] })),
            v
          );
        })(),
        Xn = (() => {
          class v {}
          return (
            (v.ɵfac = function (h) {
              return new (h || v)();
            }),
            (v.ɵmod = y.oAB({ type: v })),
            (v.ɵinj = y.cJS({ imports: [Ln] })),
            v
          );
        })(),
        co = (() => {
          class v {
            static withConfig(h) {
              return {
                ngModule: v,
                providers: [
                  { provide: $r, useValue: h.warnOnNgModelWithFormControl },
                ],
              };
            }
          }
          return (
            (v.ɵfac = function (h) {
              return new (h || v)();
            }),
            (v.ɵmod = y.oAB({ type: v })),
            (v.ɵinj = y.cJS({ imports: [Ln] })),
            v
          );
        })();
    },
    1481: (Ke, pe, x) => {
      x.d(pe, { Dx: () => ir, b2: () => or, q6: () => Ne });
      var y = x(6895),
        I = x(4650);
      class le extends y.w_ {
        constructor() {
          super(...arguments), (this.supportsDOMEvents = !0);
        }
      }
      class ee extends le {
        static makeCurrent() {
          (0, y.HT)(new ee());
        }
        onAndCancel(R, T, N) {
          return (
            R.addEventListener(T, N, !1),
            () => {
              R.removeEventListener(T, N, !1);
            }
          );
        }
        dispatchEvent(R, T) {
          R.dispatchEvent(T);
        }
        remove(R) {
          R.parentNode && R.parentNode.removeChild(R);
        }
        createElement(R, T) {
          return (T = T || this.getDefaultDocument()).createElement(R);
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument('fakeTitle');
        }
        getDefaultDocument() {
          return document;
        }
        isElementNode(R) {
          return R.nodeType === Node.ELEMENT_NODE;
        }
        isShadowRoot(R) {
          return R instanceof DocumentFragment;
        }
        getGlobalEventTarget(R, T) {
          return 'window' === T
            ? window
            : 'document' === T
            ? R
            : 'body' === T
            ? R.body
            : null;
        }
        getBaseHref(R) {
          const T = (function re() {
            return (
              (j = j || document.querySelector('base')),
              j ? j.getAttribute('href') : null
            );
          })();
          return null == T
            ? null
            : (function ue(L) {
                (se = se || document.createElement('a')),
                  se.setAttribute('href', L);
                const R = se.pathname;
                return '/' === R.charAt(0) ? R : `/${R}`;
              })(T);
        }
        resetBaseElement() {
          j = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        getCookie(R) {
          return (0, y.Mx)(document.cookie, R);
        }
      }
      let se,
        j = null;
      const ye = new I.OlP('TRANSITION_ID'),
        K = [
          {
            provide: I.ip1,
            useFactory: function te(L, R, T) {
              return () => {
                T.get(I.CZH).donePromise.then(() => {
                  const N = (0, y.q)(),
                    q = R.querySelectorAll(`style[ng-transition="${L}"]`);
                  for (let _e = 0; _e < q.length; _e++) N.remove(q[_e]);
                });
              };
            },
            deps: [ye, y.K0, I.zs3],
            multi: !0,
          },
        ];
      let je = (() => {
        class L {
          build() {
            return new XMLHttpRequest();
          }
        }
        return (
          (L.ɵfac = function (T) {
            return new (T || L)();
          }),
          (L.ɵprov = I.Yz7({ token: L, factory: L.ɵfac })),
          L
        );
      })();
      const ve = new I.OlP('EventManagerPlugins');
      let de = (() => {
        class L {
          constructor(T, N) {
            (this._zone = N),
              (this._eventNameToPlugin = new Map()),
              T.forEach(q => (q.manager = this)),
              (this._plugins = T.slice().reverse());
          }
          addEventListener(T, N, q) {
            return this._findPluginFor(N).addEventListener(T, N, q);
          }
          addGlobalEventListener(T, N, q) {
            return this._findPluginFor(N).addGlobalEventListener(T, N, q);
          }
          getZone() {
            return this._zone;
          }
          _findPluginFor(T) {
            const N = this._eventNameToPlugin.get(T);
            if (N) return N;
            const q = this._plugins;
            for (let _e = 0; _e < q.length; _e++) {
              const qe = q[_e];
              if (qe.supports(T)) return this._eventNameToPlugin.set(T, qe), qe;
            }
            throw new Error(`No event manager plugin found for event ${T}`);
          }
        }
        return (
          (L.ɵfac = function (T) {
            return new (T || L)(I.LFG(ve), I.LFG(I.R0b));
          }),
          (L.ɵprov = I.Yz7({ token: L, factory: L.ɵfac })),
          L
        );
      })();
      class Te {
        constructor(R) {
          this._doc = R;
        }
        addGlobalEventListener(R, T, N) {
          const q = (0, y.q)().getGlobalEventTarget(this._doc, R);
          if (!q)
            throw new Error(`Unsupported event target ${q} for event ${T}`);
          return this.addEventListener(q, T, N);
        }
      }
      let ae = (() => {
          class L {
            constructor() {
              this._stylesSet = new Set();
            }
            addStyles(T) {
              const N = new Set();
              T.forEach(q => {
                this._stylesSet.has(q) || (this._stylesSet.add(q), N.add(q));
              }),
                this.onStylesAdded(N);
            }
            onStylesAdded(T) {}
            getAllStyles() {
              return Array.from(this._stylesSet);
            }
          }
          return (
            (L.ɵfac = function (T) {
              return new (T || L)();
            }),
            (L.ɵprov = I.Yz7({ token: L, factory: L.ɵfac })),
            L
          );
        })(),
        Ie = (() => {
          class L extends ae {
            constructor(T) {
              super(),
                (this._doc = T),
                (this._hostNodes = new Map()),
                this._hostNodes.set(T.head, []);
            }
            _addStylesToHost(T, N, q) {
              T.forEach(_e => {
                const qe = this._doc.createElement('style');
                (qe.textContent = _e), q.push(N.appendChild(qe));
              });
            }
            addHost(T) {
              const N = [];
              this._addStylesToHost(this._stylesSet, T, N),
                this._hostNodes.set(T, N);
            }
            removeHost(T) {
              const N = this._hostNodes.get(T);
              N && N.forEach(Je), this._hostNodes.delete(T);
            }
            onStylesAdded(T) {
              this._hostNodes.forEach((N, q) => {
                this._addStylesToHost(T, q, N);
              });
            }
            ngOnDestroy() {
              this._hostNodes.forEach(T => T.forEach(Je));
            }
          }
          return (
            (L.ɵfac = function (T) {
              return new (T || L)(I.LFG(y.K0));
            }),
            (L.ɵprov = I.Yz7({ token: L, factory: L.ɵfac })),
            L
          );
        })();
      function Je(L) {
        (0, y.q)().remove(L);
      }
      const rt = {
          svg: 'http://www.w3.org/2000/svg',
          xhtml: 'http://www.w3.org/1999/xhtml',
          xlink: 'http://www.w3.org/1999/xlink',
          xml: 'http://www.w3.org/XML/1998/namespace',
          xmlns: 'http://www.w3.org/2000/xmlns/',
          math: 'http://www.w3.org/1998/MathML/',
        },
        me = /%COMP%/g;
      function V(L, R, T) {
        for (let N = 0; N < R.length; N++) {
          let q = R[N];
          Array.isArray(q) ? V(L, q, T) : ((q = q.replace(me, L)), T.push(q));
        }
        return T;
      }
      function U(L) {
        return R => {
          if ('__ngUnwrap__' === R) return L;
          !1 === L(R) && (R.preventDefault(), (R.returnValue = !1));
        };
      }
      let Y = (() => {
        class L {
          constructor(T, N, q) {
            (this.eventManager = T),
              (this.sharedStylesHost = N),
              (this.appId = q),
              (this.rendererByCompId = new Map()),
              (this.defaultRenderer = new W(T));
          }
          createRenderer(T, N) {
            if (!T || !N) return this.defaultRenderer;
            switch (N.encapsulation) {
              case I.ifc.Emulated: {
                let q = this.rendererByCompId.get(N.id);
                return (
                  q ||
                    ((q = new X(
                      this.eventManager,
                      this.sharedStylesHost,
                      N,
                      this.appId
                    )),
                    this.rendererByCompId.set(N.id, q)),
                  q.applyToHost(T),
                  q
                );
              }
              case 1:
              case I.ifc.ShadowDom:
                return new k(this.eventManager, this.sharedStylesHost, T, N);
              default:
                if (!this.rendererByCompId.has(N.id)) {
                  const q = V(N.id, N.styles, []);
                  this.sharedStylesHost.addStyles(q),
                    this.rendererByCompId.set(N.id, this.defaultRenderer);
                }
                return this.defaultRenderer;
            }
          }
          begin() {}
          end() {}
        }
        return (
          (L.ɵfac = function (T) {
            return new (T || L)(I.LFG(de), I.LFG(Ie), I.LFG(I.AFp));
          }),
          (L.ɵprov = I.Yz7({ token: L, factory: L.ɵfac })),
          L
        );
      })();
      class W {
        constructor(R) {
          (this.eventManager = R),
            (this.data = Object.create(null)),
            (this.destroyNode = null);
        }
        destroy() {}
        createElement(R, T) {
          return T
            ? document.createElementNS(rt[T] || T, R)
            : document.createElement(R);
        }
        createComment(R) {
          return document.createComment(R);
        }
        createText(R) {
          return document.createTextNode(R);
        }
        appendChild(R, T) {
          (nt(R) ? R.content : R).appendChild(T);
        }
        insertBefore(R, T, N) {
          R && (nt(R) ? R.content : R).insertBefore(T, N);
        }
        removeChild(R, T) {
          R && R.removeChild(T);
        }
        selectRootElement(R, T) {
          let N = 'string' == typeof R ? document.querySelector(R) : R;
          if (!N)
            throw new Error(`The selector "${R}" did not match any elements`);
          return T || (N.textContent = ''), N;
        }
        parentNode(R) {
          return R.parentNode;
        }
        nextSibling(R) {
          return R.nextSibling;
        }
        setAttribute(R, T, N, q) {
          if (q) {
            T = q + ':' + T;
            const _e = rt[q];
            _e ? R.setAttributeNS(_e, T, N) : R.setAttribute(T, N);
          } else R.setAttribute(T, N);
        }
        removeAttribute(R, T, N) {
          if (N) {
            const q = rt[N];
            q ? R.removeAttributeNS(q, T) : R.removeAttribute(`${N}:${T}`);
          } else R.removeAttribute(T);
        }
        addClass(R, T) {
          R.classList.add(T);
        }
        removeClass(R, T) {
          R.classList.remove(T);
        }
        setStyle(R, T, N, q) {
          q & (I.JOm.DashCase | I.JOm.Important)
            ? R.style.setProperty(T, N, q & I.JOm.Important ? 'important' : '')
            : (R.style[T] = N);
        }
        removeStyle(R, T, N) {
          N & I.JOm.DashCase ? R.style.removeProperty(T) : (R.style[T] = '');
        }
        setProperty(R, T, N) {
          R[T] = N;
        }
        setValue(R, T) {
          R.nodeValue = T;
        }
        listen(R, T, N) {
          return 'string' == typeof R
            ? this.eventManager.addGlobalEventListener(R, T, U(N))
            : this.eventManager.addEventListener(R, T, U(N));
        }
      }
      function nt(L) {
        return 'TEMPLATE' === L.tagName && void 0 !== L.content;
      }
      class X extends W {
        constructor(R, T, N, q) {
          super(R), (this.component = N);
          const _e = V(q + '-' + N.id, N.styles, []);
          T.addStyles(_e),
            (this.contentAttr = (function xe(L) {
              return '_ngcontent-%COMP%'.replace(me, L);
            })(q + '-' + N.id)),
            (this.hostAttr = (function He(L) {
              return '_nghost-%COMP%'.replace(me, L);
            })(q + '-' + N.id));
        }
        applyToHost(R) {
          super.setAttribute(R, this.hostAttr, '');
        }
        createElement(R, T) {
          const N = super.createElement(R, T);
          return super.setAttribute(N, this.contentAttr, ''), N;
        }
      }
      class k extends W {
        constructor(R, T, N, q) {
          super(R),
            (this.sharedStylesHost = T),
            (this.hostEl = N),
            (this.shadowRoot = N.attachShadow({ mode: 'open' })),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const _e = V(q.id, q.styles, []);
          for (let qe = 0; qe < _e.length; qe++) {
            const _t = document.createElement('style');
            (_t.textContent = _e[qe]), this.shadowRoot.appendChild(_t);
          }
        }
        nodeOrShadowRoot(R) {
          return R === this.hostEl ? this.shadowRoot : R;
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
        appendChild(R, T) {
          return super.appendChild(this.nodeOrShadowRoot(R), T);
        }
        insertBefore(R, T, N) {
          return super.insertBefore(this.nodeOrShadowRoot(R), T, N);
        }
        removeChild(R, T) {
          return super.removeChild(this.nodeOrShadowRoot(R), T);
        }
        parentNode(R) {
          return this.nodeOrShadowRoot(
            super.parentNode(this.nodeOrShadowRoot(R))
          );
        }
      }
      let ce = (() => {
        class L extends Te {
          constructor(T) {
            super(T);
          }
          supports(T) {
            return !0;
          }
          addEventListener(T, N, q) {
            return (
              T.addEventListener(N, q, !1),
              () => this.removeEventListener(T, N, q)
            );
          }
          removeEventListener(T, N, q) {
            return T.removeEventListener(N, q);
          }
        }
        return (
          (L.ɵfac = function (T) {
            return new (T || L)(I.LFG(y.K0));
          }),
          (L.ɵprov = I.Yz7({ token: L, factory: L.ɵfac })),
          L
        );
      })();
      const Le = ['alt', 'control', 'meta', 'shift'],
        ke = {
          '\b': 'Backspace',
          '\t': 'Tab',
          '\x7f': 'Delete',
          '\x1b': 'Escape',
          Del: 'Delete',
          Esc: 'Escape',
          Left: 'ArrowLeft',
          Right: 'ArrowRight',
          Up: 'ArrowUp',
          Down: 'ArrowDown',
          Menu: 'ContextMenu',
          Scroll: 'ScrollLock',
          Win: 'OS',
        },
        st = {
          A: '1',
          B: '2',
          C: '3',
          D: '4',
          E: '5',
          F: '6',
          G: '7',
          H: '8',
          I: '9',
          J: '*',
          K: '+',
          M: '-',
          N: '.',
          O: '/',
          '`': '0',
          '\x90': 'NumLock',
        },
        ot = {
          alt: L => L.altKey,
          control: L => L.ctrlKey,
          meta: L => L.metaKey,
          shift: L => L.shiftKey,
        };
      let tt = (() => {
        class L extends Te {
          constructor(T) {
            super(T);
          }
          supports(T) {
            return null != L.parseEventName(T);
          }
          addEventListener(T, N, q) {
            const _e = L.parseEventName(N),
              qe = L.eventCallback(_e.fullKey, q, this.manager.getZone());
            return this.manager
              .getZone()
              .runOutsideAngular(() =>
                (0, y.q)().onAndCancel(T, _e.domEventName, qe)
              );
          }
          static parseEventName(T) {
            const N = T.toLowerCase().split('.'),
              q = N.shift();
            if (0 === N.length || ('keydown' !== q && 'keyup' !== q))
              return null;
            const _e = L._normalizeKey(N.pop());
            let qe = '';
            if (
              (Le.forEach(Pe => {
                const pn = N.indexOf(Pe);
                pn > -1 && (N.splice(pn, 1), (qe += Pe + '.'));
              }),
              (qe += _e),
              0 != N.length || 0 === _e.length)
            )
              return null;
            const _t = {};
            return (_t.domEventName = q), (_t.fullKey = qe), _t;
          }
          static getEventFullKey(T) {
            let N = '',
              q = (function Ot(L) {
                let R = L.key;
                if (null == R) {
                  if (((R = L.keyIdentifier), null == R)) return 'Unidentified';
                  R.startsWith('U+') &&
                    ((R = String.fromCharCode(parseInt(R.substring(2), 16))),
                    3 === L.location && st.hasOwnProperty(R) && (R = st[R]));
                }
                return ke[R] || R;
              })(T);
            return (
              (q = q.toLowerCase()),
              ' ' === q ? (q = 'space') : '.' === q && (q = 'dot'),
              Le.forEach(_e => {
                _e != q && ot[_e](T) && (N += _e + '.');
              }),
              (N += q),
              N
            );
          }
          static eventCallback(T, N, q) {
            return _e => {
              L.getEventFullKey(_e) === T && q.runGuarded(() => N(_e));
            };
          }
          static _normalizeKey(T) {
            return 'esc' === T ? 'escape' : T;
          }
        }
        return (
          (L.ɵfac = function (T) {
            return new (T || L)(I.LFG(y.K0));
          }),
          (L.ɵprov = I.Yz7({ token: L, factory: L.ɵfac })),
          L
        );
      })();
      const Ne = (0, I.eFA)(I._c5, 'browser', [
          { provide: I.Lbi, useValue: y.bD },
          {
            provide: I.g9A,
            useValue: function vn() {
              ee.makeCurrent();
            },
            multi: !0,
          },
          {
            provide: y.K0,
            useFactory: function In() {
              return (0, I.RDi)(document), document;
            },
            deps: [],
          },
        ]),
        cn = new I.OlP(''),
        ct = [
          {
            provide: I.rWj,
            useClass: class J {
              addToWindow(R) {
                (I.dqk.getAngularTestability = (N, q = !0) => {
                  const _e = R.findTestabilityInTree(N, q);
                  if (null == _e)
                    throw new Error('Could not find testability for element.');
                  return _e;
                }),
                  (I.dqk.getAllAngularTestabilities = () =>
                    R.getAllTestabilities()),
                  (I.dqk.getAllAngularRootElements = () =>
                    R.getAllRootElements()),
                  I.dqk.frameworkStabilizers ||
                    (I.dqk.frameworkStabilizers = []),
                  I.dqk.frameworkStabilizers.push(N => {
                    const q = I.dqk.getAllAngularTestabilities();
                    let _e = q.length,
                      qe = !1;
                    const _t = function (Pe) {
                      (qe = qe || Pe), _e--, 0 == _e && N(qe);
                    };
                    q.forEach(function (Pe) {
                      Pe.whenStable(_t);
                    });
                  });
              }
              findTestabilityInTree(R, T, N) {
                return null == T
                  ? null
                  : R.getTestability(T) ??
                      (N
                        ? (0, y.q)().isShadowRoot(T)
                          ? this.findTestabilityInTree(R, T.host, !0)
                          : this.findTestabilityInTree(R, T.parentElement, !0)
                        : null);
              }
            },
            deps: [],
          },
          { provide: I.lri, useClass: I.dDg, deps: [I.R0b, I.eoX, I.rWj] },
          { provide: I.dDg, useClass: I.dDg, deps: [I.R0b, I.eoX, I.rWj] },
        ],
        wt = [
          { provide: I.zSh, useValue: 'root' },
          {
            provide: I.qLn,
            useFactory: function Zt() {
              return new I.qLn();
            },
            deps: [],
          },
          { provide: ve, useClass: ce, multi: !0, deps: [y.K0, I.R0b, I.Lbi] },
          { provide: ve, useClass: tt, multi: !0, deps: [y.K0] },
          { provide: Y, useClass: Y, deps: [de, Ie, I.AFp] },
          { provide: I.FYo, useExisting: Y },
          { provide: ae, useExisting: Ie },
          { provide: Ie, useClass: Ie, deps: [y.K0] },
          { provide: de, useClass: de, deps: [ve, I.R0b] },
          { provide: y.JF, useClass: je, deps: [] },
          [],
        ];
      let or = (() => {
          class L {
            constructor(T) {}
            static withServerTransition(T) {
              return {
                ngModule: L,
                providers: [
                  { provide: I.AFp, useValue: T.appId },
                  { provide: ye, useExisting: I.AFp },
                  K,
                ],
              };
            }
          }
          return (
            (L.ɵfac = function (T) {
              return new (T || L)(I.LFG(cn, 12));
            }),
            (L.ɵmod = I.oAB({ type: L })),
            (L.ɵinj = I.cJS({
              providers: [...wt, ...ct],
              imports: [y.ez, I.hGG],
            })),
            L
          );
        })(),
        ir = (() => {
          class L {
            constructor(T) {
              this._doc = T;
            }
            getTitle() {
              return this._doc.title;
            }
            setTitle(T) {
              this._doc.title = T || '';
            }
          }
          return (
            (L.ɵfac = function (T) {
              return new (T || L)(I.LFG(y.K0));
            }),
            (L.ɵprov = I.Yz7({
              token: L,
              factory: function (T) {
                let N = null;
                return (
                  (N = T
                    ? new T()
                    : (function Vn() {
                        return new ir((0, I.LFG)(y.K0));
                      })()),
                  N
                );
              },
              providedIn: 'root',
            })),
            L
          );
        })();
      typeof window < 'u' && window;
    },
    1868: (Ke, pe, x) => {
      x.d(pe, { Bz: () => Zs, lC: () => $n });
      var y = x(6895),
        I = x(4650),
        le = x(7669),
        ee = x(2076);
      function j(...u) {
        const l = (0, le.yG)(u);
        return (0, ee.D)(u, l);
      }
      var re = x(7579);
      class se extends re.x {
        constructor(l) {
          super(), (this._value = l);
        }
        get value() {
          return this.getValue();
        }
        _subscribe(l) {
          const a = super._subscribe(l);
          return !a.closed && l.next(this._value), a;
        }
        getValue() {
          const { hasError: l, thrownError: a, _value: f } = this;
          if (l) throw a;
          return this._throwIfClosed(), f;
        }
        next(l) {
          super.next((this._value = l));
        }
      }
      var ue = x(8306),
        ye = x(4742),
        te = x(4671),
        K = x(3268),
        J = x(1810),
        je = x(5403),
        ve = x(9672);
      function de(...u) {
        const l = (0, le.yG)(u),
          a = (0, le.jO)(u),
          { args: f, keys: D } = (0, ye.D)(u);
        if (0 === f.length) return (0, ee.D)([], l);
        const w = new ue.y(
          (function Te(u, l, a = te.y) {
            return f => {
              ae(
                l,
                () => {
                  const { length: D } = u,
                    w = new Array(D);
                  let S = D,
                    F = D;
                  for (let H = 0; H < D; H++)
                    ae(
                      l,
                      () => {
                        const fe = (0, ee.D)(u[H], l);
                        let Ae = !1;
                        fe.subscribe(
                          (0, je.x)(
                            f,
                            Se => {
                              (w[H] = Se),
                                Ae || ((Ae = !0), F--),
                                F || f.next(a(w.slice()));
                            },
                            () => {
                              --S || f.complete();
                            }
                          )
                        );
                      },
                      f
                    );
                },
                f
              );
            };
          })(f, l, D ? S => (0, J.n)(D, S) : te.y)
        );
        return a ? w.pipe((0, K.Z)(a)) : w;
      }
      function ae(u, l, a) {
        u ? (0, ve.f)(a, u, l) : l();
      }
      var Ie = x(576);
      function Je(u, l) {
        const a = (0, Ie.m)(u) ? u : () => u,
          f = D => D.error(a());
        return new ue.y(l ? D => l.schedule(f, 0, D) : f);
      }
      const me = (0, x(3888).d)(
        u =>
          function () {
            u(this),
              (this.name = 'EmptyError'),
              (this.message = 'no elements in sequence');
          }
      );
      var oe = x(8189);
      function Ue(...u) {
        return (function we() {
          return (0, oe.J)(1);
        })()((0, ee.D)(u, (0, le.yG)(u)));
      }
      var Me = x(8421);
      function xe(u) {
        return new ue.y(l => {
          (0, Me.Xf)(u()).subscribe(l);
        });
      }
      var He = x(727),
        V = x(4482);
      function U() {
        return (0, V.e)((u, l) => {
          let a = null;
          u._refCount++;
          const f = (0, je.x)(l, void 0, void 0, void 0, () => {
            if (!u || u._refCount <= 0 || 0 < --u._refCount)
              return void (a = null);
            const D = u._connection,
              w = a;
            (a = null),
              D && (!w || D === w) && D.unsubscribe(),
              l.unsubscribe();
          });
          u.subscribe(f), f.closed || (a = u.connect());
        });
      }
      class $ extends ue.y {
        constructor(l, a) {
          super(),
            (this.source = l),
            (this.subjectFactory = a),
            (this._subject = null),
            (this._refCount = 0),
            (this._connection = null),
            (0, V.A)(l) && (this.lift = l.lift);
        }
        _subscribe(l) {
          return this.getSubject().subscribe(l);
        }
        getSubject() {
          const l = this._subject;
          return (
            (!l || l.isStopped) && (this._subject = this.subjectFactory()),
            this._subject
          );
        }
        _teardown() {
          this._refCount = 0;
          const { _connection: l } = this;
          (this._subject = this._connection = null), l?.unsubscribe();
        }
        connect() {
          let l = this._connection;
          if (!l) {
            l = this._connection = new He.w0();
            const a = this.getSubject();
            l.add(
              this.source.subscribe(
                (0, je.x)(
                  a,
                  void 0,
                  () => {
                    this._teardown(), a.complete();
                  },
                  f => {
                    this._teardown(), a.error(f);
                  },
                  () => this._teardown()
                )
              )
            ),
              l.closed && ((this._connection = null), (l = He.w0.EMPTY));
          }
          return l;
        }
        refCount() {
          return U()(this);
        }
      }
      var Y = x(515);
      function ge(u, l, a, f, D) {
        return (w, S) => {
          let F = a,
            H = l,
            fe = 0;
          w.subscribe(
            (0, je.x)(
              S,
              Ae => {
                const Se = fe++;
                (H = F ? u(H, Ae, Se) : ((F = !0), Ae)), f && S.next(H);
              },
              D &&
                (() => {
                  F && S.next(H), S.complete();
                })
            )
          );
        };
      }
      function Ye(u, l) {
        return (0, V.e)(ge(u, l, arguments.length >= 2, !0));
      }
      function nt(u) {
        return (0, V.e)((l, a) => {
          let w,
            f = null,
            D = !1;
          (f = l.subscribe(
            (0, je.x)(a, void 0, void 0, S => {
              (w = (0, Me.Xf)(u(S, nt(u)(l)))),
                f ? (f.unsubscribe(), (f = null), w.subscribe(a)) : (D = !0);
            })
          )),
            D && (f.unsubscribe(), (f = null), w.subscribe(a));
        });
      }
      var X = x(5577);
      function k(u, l) {
        return (0, Ie.m)(l) ? (0, X.z)(u, l, 1) : (0, X.z)(u, 1);
      }
      var ce = x(9300);
      function Le(u) {
        return u <= 0
          ? () => Y.E
          : (0, V.e)((l, a) => {
              let f = [];
              l.subscribe(
                (0, je.x)(
                  a,
                  D => {
                    f.push(D), u < f.length && f.shift();
                  },
                  () => {
                    for (const D of f) a.next(D);
                    a.complete();
                  },
                  void 0,
                  () => {
                    f = null;
                  }
                )
              );
            });
      }
      function Ze(u = ke) {
        return (0, V.e)((l, a) => {
          let f = !1;
          l.subscribe(
            (0, je.x)(
              a,
              D => {
                (f = !0), a.next(D);
              },
              () => (f ? a.complete() : a.error(u()))
            )
          );
        });
      }
      function ke() {
        return new me();
      }
      function st(u) {
        return (0, V.e)((l, a) => {
          let f = !1;
          l.subscribe(
            (0, je.x)(
              a,
              D => {
                (f = !0), a.next(D);
              },
              () => {
                f || a.next(u), a.complete();
              }
            )
          );
        });
      }
      var tt = x(5698);
      function Ot(u, l) {
        const a = arguments.length >= 2;
        return f =>
          f.pipe(
            u ? (0, ce.h)((D, w) => u(D, w, f)) : te.y,
            (0, tt.q)(1),
            a ? st(l) : Ze(() => new me())
          );
      }
      function Et(u, l, a) {
        const f =
          (0, Ie.m)(u) || l || a ? { next: u, error: l, complete: a } : u;
        return f
          ? (0, V.e)((D, w) => {
              var S;
              null === (S = f.subscribe) || void 0 === S || S.call(f);
              let F = !0;
              D.subscribe(
                (0, je.x)(
                  w,
                  H => {
                    var fe;
                    null === (fe = f.next) || void 0 === fe || fe.call(f, H),
                      w.next(H);
                  },
                  () => {
                    var H;
                    (F = !1),
                      null === (H = f.complete) || void 0 === H || H.call(f),
                      w.complete();
                  },
                  H => {
                    var fe;
                    (F = !1),
                      null === (fe = f.error) || void 0 === fe || fe.call(f, H),
                      w.error(H);
                  },
                  () => {
                    var H, fe;
                    F &&
                      (null === (H = f.unsubscribe) ||
                        void 0 === H ||
                        H.call(f)),
                      null === (fe = f.finalize) || void 0 === fe || fe.call(f);
                  }
                )
              );
            })
          : te.y;
      }
      var yt = x(4004);
      function vn(u) {
        return (0, V.e)((l, a) => {
          try {
            l.subscribe(a);
          } finally {
            a.add(u);
          }
        });
      }
      var Zt = x(3900),
        In = x(1481);
      class Jt {
        constructor(l, a) {
          (this.id = l), (this.url = a);
        }
      }
      class Ne extends Jt {
        constructor(l, a, f = 'imperative', D = null) {
          super(l, a),
            (this.type = 0),
            (this.navigationTrigger = f),
            (this.restoredState = D);
        }
        toString() {
          return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class cn extends Jt {
        constructor(l, a, f) {
          super(l, a), (this.urlAfterRedirects = f), (this.type = 1);
        }
        toString() {
          return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
        }
      }
      class ct extends Jt {
        constructor(l, a, f) {
          super(l, a), (this.reason = f), (this.type = 2);
        }
        toString() {
          return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class wt extends Jt {
        constructor(l, a, f) {
          super(l, a), (this.error = f), (this.type = 3);
        }
        toString() {
          return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
        }
      }
      class or extends Jt {
        constructor(l, a, f, D) {
          super(l, a),
            (this.urlAfterRedirects = f),
            (this.state = D),
            (this.type = 4);
        }
        toString() {
          return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Go extends Jt {
        constructor(l, a, f, D) {
          super(l, a),
            (this.urlAfterRedirects = f),
            (this.state = D),
            (this.type = 7);
        }
        toString() {
          return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Dn extends Jt {
        constructor(l, a, f, D, w) {
          super(l, a),
            (this.urlAfterRedirects = f),
            (this.state = D),
            (this.shouldActivate = w),
            (this.type = 8);
        }
        toString() {
          return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
        }
      }
      class Xt extends Jt {
        constructor(l, a, f, D) {
          super(l, a),
            (this.urlAfterRedirects = f),
            (this.state = D),
            (this.type = 5);
        }
        toString() {
          return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Vn extends Jt {
        constructor(l, a, f, D) {
          super(l, a),
            (this.urlAfterRedirects = f),
            (this.state = D),
            (this.type = 6);
        }
        toString() {
          return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class ir {
        constructor(l) {
          (this.route = l), (this.type = 9);
        }
        toString() {
          return `RouteConfigLoadStart(path: ${this.route.path})`;
        }
      }
      class at {
        constructor(l) {
          (this.route = l), (this.type = 10);
        }
        toString() {
          return `RouteConfigLoadEnd(path: ${this.route.path})`;
        }
      }
      class Ce {
        constructor(l) {
          (this.snapshot = l), (this.type = 11);
        }
        toString() {
          return `ChildActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class Qe {
        constructor(l) {
          (this.snapshot = l), (this.type = 12);
        }
        toString() {
          return `ChildActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class _o {
        constructor(l) {
          (this.snapshot = l), (this.type = 13);
        }
        toString() {
          return `ActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class sn {
        constructor(l) {
          (this.snapshot = l), (this.type = 14);
        }
        toString() {
          return `ActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class $e {
        constructor(l, a, f) {
          (this.routerEvent = l),
            (this.position = a),
            (this.anchor = f),
            (this.type = 15);
        }
        toString() {
          return `Scroll(anchor: '${this.anchor}', position: '${
            this.position ? `${this.position[0]}, ${this.position[1]}` : null
          }')`;
        }
      }
      const Ve = 'primary';
      class qn {
        constructor(l) {
          this.params = l || {};
        }
        has(l) {
          return Object.prototype.hasOwnProperty.call(this.params, l);
        }
        get(l) {
          if (this.has(l)) {
            const a = this.params[l];
            return Array.isArray(a) ? a[0] : a;
          }
          return null;
        }
        getAll(l) {
          if (this.has(l)) {
            const a = this.params[l];
            return Array.isArray(a) ? a : [a];
          }
          return [];
        }
        get keys() {
          return Object.keys(this.params);
        }
      }
      function ht(u) {
        return new qn(u);
      }
      const dn = 'ngNavigationCancelingError';
      function it(u) {
        const l = Error('NavigationCancelingError: ' + u);
        return (l[dn] = !0), l;
      }
      function An(u, l, a) {
        const f = a.path.split('/');
        if (
          f.length > u.length ||
          ('full' === a.pathMatch && (l.hasChildren() || f.length < u.length))
        )
          return null;
        const D = {};
        for (let w = 0; w < f.length; w++) {
          const S = f[w],
            F = u[w];
          if (S.startsWith(':')) D[S.substring(1)] = F;
          else if (S !== F.path) return null;
        }
        return { consumed: u.slice(0, f.length), posParams: D };
      }
      function kt(u, l) {
        const a = u ? Object.keys(u) : void 0,
          f = l ? Object.keys(l) : void 0;
        if (!a || !f || a.length != f.length) return !1;
        let D;
        for (let w = 0; w < a.length; w++)
          if (((D = a[w]), !Kn(u[D], l[D]))) return !1;
        return !0;
      }
      function Kn(u, l) {
        if (Array.isArray(u) && Array.isArray(l)) {
          if (u.length !== l.length) return !1;
          const a = [...u].sort(),
            f = [...l].sort();
          return a.every((D, w) => f[w] === D);
        }
        return u === l;
      }
      function Sn(u) {
        return Array.prototype.concat.apply([], u);
      }
      function fn(u) {
        return u.length > 0 ? u[u.length - 1] : null;
      }
      function Dt(u, l) {
        for (const a in u) u.hasOwnProperty(a) && l(u[a], a);
      }
      function $t(u) {
        return (0, I.CqO)(u)
          ? u
          : (0, I.QGY)(u)
          ? (0, ee.D)(Promise.resolve(u))
          : j(u);
      }
      const dt = {
          exact: function Bt(u, l, a) {
            if (
              !qe(u.segments, l.segments) ||
              !R(u.segments, l.segments, a) ||
              u.numberOfChildren !== l.numberOfChildren
            )
              return !1;
            for (const f in l.children)
              if (!u.children[f] || !Bt(u.children[f], l.children[f], a))
                return !1;
            return !0;
          },
          subset: Ge,
        },
        Ft = {
          exact: function Gt(u, l) {
            return kt(u, l);
          },
          subset: function De(u, l) {
            return (
              Object.keys(l).length <= Object.keys(u).length &&
              Object.keys(l).every(a => Kn(u[a], l[a]))
            );
          },
          ignored: () => !0,
        };
      function At(u, l, a) {
        return (
          dt[a.paths](u.root, l.root, a.matrixParams) &&
          Ft[a.queryParams](u.queryParams, l.queryParams) &&
          !('exact' === a.fragment && u.fragment !== l.fragment)
        );
      }
      function Ge(u, l, a) {
        return L(u, l, l.segments, a);
      }
      function L(u, l, a, f) {
        if (u.segments.length > a.length) {
          const D = u.segments.slice(0, a.length);
          return !(!qe(D, a) || l.hasChildren() || !R(D, a, f));
        }
        if (u.segments.length === a.length) {
          if (!qe(u.segments, a) || !R(u.segments, a, f)) return !1;
          for (const D in l.children)
            if (!u.children[D] || !Ge(u.children[D], l.children[D], f))
              return !1;
          return !0;
        }
        {
          const D = a.slice(0, u.segments.length),
            w = a.slice(u.segments.length);
          return (
            !!(qe(u.segments, D) && R(u.segments, D, f) && u.children[Ve]) &&
            L(u.children[Ve], l, w, f)
          );
        }
      }
      function R(u, l, a) {
        return l.every((f, D) => Ft[a](u[D].parameters, f.parameters));
      }
      class T {
        constructor(l, a, f) {
          (this.root = l), (this.queryParams = a), (this.fragment = f);
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = ht(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return _n.serialize(this);
        }
      }
      class N {
        constructor(l, a) {
          (this.segments = l),
            (this.children = a),
            (this.parent = null),
            Dt(a, (f, D) => (f.parent = this));
        }
        hasChildren() {
          return this.numberOfChildren > 0;
        }
        get numberOfChildren() {
          return Object.keys(this.children).length;
        }
        toString() {
          return Tn(this);
        }
      }
      class q {
        constructor(l, a) {
          (this.path = l), (this.parameters = a);
        }
        get parameterMap() {
          return (
            this._parameterMap || (this._parameterMap = ht(this.parameters)),
            this._parameterMap
          );
        }
        toString() {
          return gt(this);
        }
      }
      function qe(u, l) {
        return u.length === l.length && u.every((a, f) => a.path === l[f].path);
      }
      class Pe {}
      class pn {
        parse(l) {
          const a = new Qn(l);
          return new T(
            a.parseRootSegment(),
            a.parseQueryParams(),
            a.parseFragment()
          );
        }
        serialize(l) {
          const a = `/${an(l.root, !0)}`,
            f = (function Er(u) {
              const l = Object.keys(u)
                .map(a => {
                  const f = u[a];
                  return Array.isArray(f)
                    ? f.map(D => `${xn(a)}=${xn(D)}`).join('&')
                    : `${xn(a)}=${xn(f)}`;
                })
                .filter(a => !!a);
              return l.length ? `?${l.join('&')}` : '';
            })(l.queryParams);
          return `${a}${f}${
            'string' == typeof l.fragment
              ? `#${(function Cn(u) {
                  return encodeURI(u);
                })(l.fragment)}`
              : ''
          }`;
        }
      }
      const _n = new pn();
      function Tn(u) {
        return u.segments.map(l => gt(l)).join('/');
      }
      function an(u, l) {
        if (!u.hasChildren()) return Tn(u);
        if (l) {
          const a = u.children[Ve] ? an(u.children[Ve], !1) : '',
            f = [];
          return (
            Dt(u.children, (D, w) => {
              w !== Ve && f.push(`${w}:${an(D, !1)}`);
            }),
            f.length > 0 ? `${a}(${f.join('//')})` : a
          );
        }
        {
          const a = (function _t(u, l) {
            let a = [];
            return (
              Dt(u.children, (f, D) => {
                D === Ve && (a = a.concat(l(f, D)));
              }),
              Dt(u.children, (f, D) => {
                D !== Ve && (a = a.concat(l(f, D)));
              }),
              a
            );
          })(u, (f, D) =>
            D === Ve ? [an(u.children[Ve], !1)] : [`${D}:${an(f, !1)}`]
          );
          return 1 === Object.keys(u.children).length && null != u.children[Ve]
            ? `${Tn(u)}/${a[0]}`
            : `${Tn(u)}/(${a.join('//')})`;
        }
      }
      function Rt(u) {
        return encodeURIComponent(u)
          .replace(/%40/g, '@')
          .replace(/%3A/gi, ':')
          .replace(/%24/g, '$')
          .replace(/%2C/gi, ',');
      }
      function xn(u) {
        return Rt(u).replace(/%3B/gi, ';');
      }
      function zt(u) {
        return Rt(u)
          .replace(/\(/g, '%28')
          .replace(/\)/g, '%29')
          .replace(/%26/gi, '&');
      }
      function En(u) {
        return decodeURIComponent(u);
      }
      function Br(u) {
        return En(u.replace(/\+/g, '%20'));
      }
      function gt(u) {
        return `${zt(u.path)}${(function zo(u) {
          return Object.keys(u)
            .map(l => `;${zt(l)}=${zt(u[l])}`)
            .join('');
        })(u.parameters)}`;
      }
      const wr = /^[^\/()?;=#]+/;
      function Fn(u) {
        const l = u.match(wr);
        return l ? l[0] : '';
      }
      const Bn = /^[^=?&#]+/,
        jn = /^[^&#]+/;
      class Qn {
        constructor(l) {
          (this.url = l), (this.remaining = l);
        }
        parseRootSegment() {
          return (
            this.consumeOptional('/'),
            '' === this.remaining ||
            this.peekStartsWith('?') ||
            this.peekStartsWith('#')
              ? new N([], {})
              : new N([], this.parseChildren())
          );
        }
        parseQueryParams() {
          const l = {};
          if (this.consumeOptional('?'))
            do {
              this.parseQueryParam(l);
            } while (this.consumeOptional('&'));
          return l;
        }
        parseFragment() {
          return this.consumeOptional('#')
            ? decodeURIComponent(this.remaining)
            : null;
        }
        parseChildren() {
          if ('' === this.remaining) return {};
          this.consumeOptional('/');
          const l = [];
          for (
            this.peekStartsWith('(') || l.push(this.parseSegment());
            this.peekStartsWith('/') &&
            !this.peekStartsWith('//') &&
            !this.peekStartsWith('/(');

          )
            this.capture('/'), l.push(this.parseSegment());
          let a = {};
          this.peekStartsWith('/(') &&
            (this.capture('/'), (a = this.parseParens(!0)));
          let f = {};
          return (
            this.peekStartsWith('(') && (f = this.parseParens(!1)),
            (l.length > 0 || Object.keys(a).length > 0) &&
              (f[Ve] = new N(l, a)),
            f
          );
        }
        parseSegment() {
          const l = Fn(this.remaining);
          if ('' === l && this.peekStartsWith(';'))
            throw new Error(
              `Empty path url segment cannot have parameters: '${this.remaining}'.`
            );
          return this.capture(l), new q(En(l), this.parseMatrixParams());
        }
        parseMatrixParams() {
          const l = {};
          for (; this.consumeOptional(';'); ) this.parseParam(l);
          return l;
        }
        parseParam(l) {
          const a = Fn(this.remaining);
          if (!a) return;
          this.capture(a);
          let f = '';
          if (this.consumeOptional('=')) {
            const D = Fn(this.remaining);
            D && ((f = D), this.capture(f));
          }
          l[En(a)] = En(f);
        }
        parseQueryParam(l) {
          const a = (function ar(u) {
            const l = u.match(Bn);
            return l ? l[0] : '';
          })(this.remaining);
          if (!a) return;
          this.capture(a);
          let f = '';
          if (this.consumeOptional('=')) {
            const S = (function Wt(u) {
              const l = u.match(jn);
              return l ? l[0] : '';
            })(this.remaining);
            S && ((f = S), this.capture(f));
          }
          const D = Br(a),
            w = Br(f);
          if (l.hasOwnProperty(D)) {
            let S = l[D];
            Array.isArray(S) || ((S = [S]), (l[D] = S)), S.push(w);
          } else l[D] = w;
        }
        parseParens(l) {
          const a = {};
          for (
            this.capture('(');
            !this.consumeOptional(')') && this.remaining.length > 0;

          ) {
            const f = Fn(this.remaining),
              D = this.remaining[f.length];
            if ('/' !== D && ')' !== D && ';' !== D)
              throw new Error(`Cannot parse url '${this.url}'`);
            let w;
            f.indexOf(':') > -1
              ? ((w = f.slice(0, f.indexOf(':'))),
                this.capture(w),
                this.capture(':'))
              : l && (w = Ve);
            const S = this.parseChildren();
            (a[w] = 1 === Object.keys(S).length ? S[Ve] : new N([], S)),
              this.consumeOptional('//');
          }
          return a;
        }
        peekStartsWith(l) {
          return this.remaining.startsWith(l);
        }
        consumeOptional(l) {
          return (
            !!this.peekStartsWith(l) &&
            ((this.remaining = this.remaining.substring(l.length)), !0)
          );
        }
        capture(l) {
          if (!this.consumeOptional(l)) throw new Error(`Expected "${l}".`);
        }
      }
      class Pt {
        constructor(l) {
          this._root = l;
        }
        get root() {
          return this._root.value;
        }
        parent(l) {
          const a = this.pathFromRoot(l);
          return a.length > 1 ? a[a.length - 2] : null;
        }
        children(l) {
          const a = Yt(l, this._root);
          return a ? a.children.map(f => f.value) : [];
        }
        firstChild(l) {
          const a = Yt(l, this._root);
          return a && a.children.length > 0 ? a.children[0].value : null;
        }
        siblings(l) {
          const a = Rn(l, this._root);
          return a.length < 2
            ? []
            : a[a.length - 2].children.map(D => D.value).filter(D => D !== l);
        }
        pathFromRoot(l) {
          return Rn(l, this._root).map(a => a.value);
        }
      }
      function Yt(u, l) {
        if (u === l.value) return l;
        for (const a of l.children) {
          const f = Yt(u, a);
          if (f) return f;
        }
        return null;
      }
      function Rn(u, l) {
        if (u === l.value) return [l];
        for (const a of l.children) {
          const f = Rn(u, a);
          if (f.length) return f.unshift(l), f;
        }
        return [];
      }
      class jt {
        constructor(l, a) {
          (this.value = l), (this.children = a);
        }
        toString() {
          return `TreeNode(${this.value})`;
        }
      }
      function On(u) {
        const l = {};
        return u && u.children.forEach(a => (l[a.value.outlet] = a)), l;
      }
      class nn extends Pt {
        constructor(l, a) {
          super(l), (this.snapshot = a), oo(this, l);
        }
        toString() {
          return this.snapshot.toString();
        }
      }
      function no(u, l) {
        const a = (function Wo(u, l) {
            const S = new ro([], {}, {}, '', {}, Ve, l, null, u.root, -1, {});
            return new rn('', new jt(S, []));
          })(u, l),
          f = new se([new q('', {})]),
          D = new se({}),
          w = new se({}),
          S = new se({}),
          F = new se(''),
          H = new lr(f, D, S, F, w, Ve, l, a.root);
        return (H.snapshot = a.root), new nn(new jt(H, []), a);
      }
      class lr {
        constructor(l, a, f, D, w, S, F, H) {
          (this.url = l),
            (this.params = a),
            (this.queryParams = f),
            (this.fragment = D),
            (this.data = w),
            (this.outlet = S),
            (this.component = F),
            (this._futureSnapshot = H);
        }
        get routeConfig() {
          return this._futureSnapshot.routeConfig;
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap ||
              (this._paramMap = this.params.pipe((0, yt.U)(l => ht(l)))),
            this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap ||
              (this._queryParamMap = this.queryParams.pipe(
                (0, yt.U)(l => ht(l))
              )),
            this._queryParamMap
          );
        }
        toString() {
          return this.snapshot
            ? this.snapshot.toString()
            : `Future(${this._futureSnapshot})`;
        }
      }
      function Co(u, l = 'emptyOnly') {
        const a = u.pathFromRoot;
        let f = 0;
        if ('always' !== l)
          for (f = a.length - 1; f >= 1; ) {
            const D = a[f],
              w = a[f - 1];
            if (D.routeConfig && '' === D.routeConfig.path) f--;
            else {
              if (w.component) break;
              f--;
            }
          }
        return (function Bi(u) {
          return u.reduce(
            (l, a) => ({
              params: { ...l.params, ...a.params },
              data: { ...l.data, ...a.data },
              resolve: {
                ...a.data,
                ...l.resolve,
                ...a.routeConfig?.data,
                ...a._resolvedData,
              },
            }),
            { params: {}, data: {}, resolve: {} }
          );
        })(a.slice(f));
      }
      class ro {
        constructor(l, a, f, D, w, S, F, H, fe, Ae, Se, bt) {
          (this.url = l),
            (this.params = a),
            (this.queryParams = f),
            (this.fragment = D),
            (this.data = w),
            (this.outlet = S),
            (this.component = F),
            (this.routeConfig = H),
            (this._urlSegment = fe),
            (this._lastPathIndex = Ae),
            (this._correctedLastPathIndex = bt ?? Ae),
            (this._resolve = Se);
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap || (this._paramMap = ht(this.params)), this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = ht(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return `Route(url:'${this.url
            .map(f => f.toString())
            .join('/')}', path:'${
            this.routeConfig ? this.routeConfig.path : ''
          }')`;
        }
      }
      class rn extends Pt {
        constructor(l, a) {
          super(a), (this.url = l), oo(this, a);
        }
        toString() {
          return io(this._root);
        }
      }
      function oo(u, l) {
        (l.value._routerState = u), l.children.forEach(a => oo(u, a));
      }
      function io(u) {
        const l =
          u.children.length > 0 ? ` { ${u.children.map(io).join(', ')} } ` : '';
        return `${u.value}${l}`;
      }
      function jr(u) {
        if (u.snapshot) {
          const l = u.snapshot,
            a = u._futureSnapshot;
          (u.snapshot = a),
            kt(l.queryParams, a.queryParams) ||
              u.queryParams.next(a.queryParams),
            l.fragment !== a.fragment && u.fragment.next(a.fragment),
            kt(l.params, a.params) || u.params.next(a.params),
            (function to(u, l) {
              if (u.length !== l.length) return !1;
              for (let a = 0; a < u.length; ++a) if (!kt(u[a], l[a])) return !1;
              return !0;
            })(l.url, a.url) || u.url.next(a.url),
            kt(l.data, a.data) || u.data.next(a.data);
        } else
          (u.snapshot = u._futureSnapshot), u.data.next(u._futureSnapshot.data);
      }
      function Ur(u, l) {
        const a =
          kt(u.params, l.params) &&
          (function _e(u, l) {
            return (
              qe(u, l) && u.every((a, f) => kt(a.parameters, l[f].parameters))
            );
          })(u.url, l.url);
        return (
          a &&
          !(!u.parent != !l.parent) &&
          (!u.parent || Ur(u.parent, l.parent))
        );
      }
      function ur(u, l, a) {
        if (a && u.shouldReuseRoute(l.value, a.value.snapshot)) {
          const f = a.value;
          f._futureSnapshot = l.value;
          const D = (function qo(u, l, a) {
            return l.children.map(f => {
              for (const D of a.children)
                if (u.shouldReuseRoute(f.value, D.value.snapshot))
                  return ur(u, f, D);
              return ur(u, f);
            });
          })(u, l, a);
          return new jt(f, D);
        }
        {
          if (u.shouldAttach(l.value)) {
            const w = u.retrieve(l.value);
            if (null !== w) {
              const S = w.route;
              return (
                (S.value._futureSnapshot = l.value),
                (S.children = l.children.map(F => ur(u, F))),
                S
              );
            }
          }
          const f = (function ji(u) {
              return new lr(
                new se(u.url),
                new se(u.params),
                new se(u.queryParams),
                new se(u.fragment),
                new se(u.data),
                u.outlet,
                u.component,
                u
              );
            })(l.value),
            D = l.children.map(w => ur(u, w));
          return new jt(f, D);
        }
      }
      function Hr(u) {
        return (
          'object' == typeof u && null != u && !u.outlets && !u.segmentPath
        );
      }
      function cr(u) {
        return 'object' == typeof u && null != u && u.outlets;
      }
      function Mr(u, l, a, f, D) {
        let w = {};
        if (
          (f &&
            Dt(f, (F, H) => {
              w[H] = Array.isArray(F) ? F.map(fe => `${fe}`) : `${F}`;
            }),
          u === l)
        )
          return new T(a, w, D);
        const S = dr(u, l, a);
        return new T(S, w, D);
      }
      function dr(u, l, a) {
        const f = {};
        return (
          Dt(u.children, (D, w) => {
            f[w] = D === l ? a : dr(D, l, a);
          }),
          new N(u.segments, f)
        );
      }
      class $r {
        constructor(l, a, f) {
          if (
            ((this.isAbsolute = l),
            (this.numberOfDoubleDots = a),
            (this.commands = f),
            l && f.length > 0 && Hr(f[0]))
          )
            throw new Error('Root segment cannot have matrix parameters');
          const D = f.find(cr);
          if (D && D !== fn(f))
            throw new Error('{outlets:{}} has to be the last command');
        }
        toRoot() {
          return (
            this.isAbsolute &&
            1 === this.commands.length &&
            '/' == this.commands[0]
          );
        }
      }
      class Gr {
        constructor(l, a, f) {
          (this.segmentGroup = l), (this.processChildren = a), (this.index = f);
        }
      }
      function fr(u, l, a) {
        if (
          (u || (u = new N([], {})), 0 === u.segments.length && u.hasChildren())
        )
          return br(u, l, a);
        const f = (function hr(u, l, a) {
            let f = 0,
              D = l;
            const w = { match: !1, pathIndex: 0, commandIndex: 0 };
            for (; D < u.segments.length; ) {
              if (f >= a.length) return w;
              const S = u.segments[D],
                F = a[f];
              if (cr(F)) break;
              const H = `${F}`,
                fe = f < a.length - 1 ? a[f + 1] : null;
              if (D > 0 && void 0 === H) break;
              if (H && fe && 'object' == typeof fe && void 0 === fe.outlets) {
                if (!Ir(H, fe, S)) return w;
                f += 2;
              } else {
                if (!Ir(H, {}, S)) return w;
                f++;
              }
              D++;
            }
            return { match: !0, pathIndex: D, commandIndex: f };
          })(u, l, a),
          D = a.slice(f.commandIndex);
        if (f.match && f.pathIndex < u.segments.length) {
          const w = new N(u.segments.slice(0, f.pathIndex), {});
          return (
            (w.children[Ve] = new N(u.segments.slice(f.pathIndex), u.children)),
            br(w, 0, D)
          );
        }
        return f.match && 0 === D.length
          ? new N(u.segments, {})
          : f.match && !u.hasChildren()
          ? Hn(u, l, a)
          : f.match
          ? br(u, 0, D)
          : Hn(u, l, a);
      }
      function br(u, l, a) {
        if (0 === a.length) return new N(u.segments, {});
        {
          const f = (function zr(u) {
              return cr(u[0]) ? u[0].outlets : { [Ve]: u };
            })(a),
            D = {};
          return (
            Dt(f, (w, S) => {
              'string' == typeof w && (w = [w]),
                null !== w && (D[S] = fr(u.children[S], l, w));
            }),
            Dt(u.children, (w, S) => {
              void 0 === f[S] && (D[S] = w);
            }),
            new N(u.segments, D)
          );
        }
      }
      function Hn(u, l, a) {
        const f = u.segments.slice(0, l);
        let D = 0;
        for (; D < a.length; ) {
          const w = a[D];
          if (cr(w)) {
            const H = so(w.outlets);
            return new N(f, H);
          }
          if (0 === D && Hr(a[0])) {
            f.push(new q(u.segments[l].path, Wr(a[0]))), D++;
            continue;
          }
          const S = cr(w) ? w.outlets[Ve] : `${w}`,
            F = D < a.length - 1 ? a[D + 1] : null;
          S && F && Hr(F)
            ? (f.push(new q(S, Wr(F))), (D += 2))
            : (f.push(new q(S, {})), D++);
        }
        return new N(f, {});
      }
      function so(u) {
        const l = {};
        return (
          Dt(u, (a, f) => {
            'string' == typeof a && (a = [a]),
              null !== a && (l[f] = Hn(new N([], {}), 0, a));
          }),
          l
        );
      }
      function Wr(u) {
        const l = {};
        return Dt(u, (a, f) => (l[f] = `${a}`)), l;
      }
      function Ir(u, l, a) {
        return u == a.path && kt(l, a.parameters);
      }
      class Yr {
        constructor() {
          (this.outlet = null),
            (this.route = null),
            (this.resolver = null),
            (this.injector = null),
            (this.children = new Ut()),
            (this.attachRef = null);
        }
      }
      class Ut {
        constructor() {
          this.contexts = new Map();
        }
        onChildOutletCreated(l, a) {
          const f = this.getOrCreateContext(l);
          (f.outlet = a), this.contexts.set(l, f);
        }
        onChildOutletDestroyed(l) {
          const a = this.getContext(l);
          a && ((a.outlet = null), (a.attachRef = null));
        }
        onOutletDeactivated() {
          const l = this.contexts;
          return (this.contexts = new Map()), l;
        }
        onOutletReAttached(l) {
          this.contexts = l;
        }
        getOrCreateContext(l) {
          let a = this.getContext(l);
          return a || ((a = new Yr()), this.contexts.set(l, a)), a;
        }
        getContext(l) {
          return this.contexts.get(l) || null;
        }
      }
      let $n = (() => {
        class u {
          constructor(a, f, D, w, S) {
            (this.parentContexts = a),
              (this.location = f),
              (this.changeDetector = w),
              (this.environmentInjector = S),
              (this.activated = null),
              (this._activatedRoute = null),
              (this.activateEvents = new I.vpe()),
              (this.deactivateEvents = new I.vpe()),
              (this.attachEvents = new I.vpe()),
              (this.detachEvents = new I.vpe()),
              (this.name = D || Ve),
              a.onChildOutletCreated(this.name, this);
          }
          ngOnDestroy() {
            this.parentContexts.onChildOutletDestroyed(this.name);
          }
          ngOnInit() {
            if (!this.activated) {
              const a = this.parentContexts.getContext(this.name);
              a &&
                a.route &&
                (a.attachRef
                  ? this.attach(a.attachRef, a.route)
                  : this.activateWith(a.route, a.injector));
            }
          }
          get isActivated() {
            return !!this.activated;
          }
          get component() {
            if (!this.activated) throw new Error('Outlet is not activated');
            return this.activated.instance;
          }
          get activatedRoute() {
            if (!this.activated) throw new Error('Outlet is not activated');
            return this._activatedRoute;
          }
          get activatedRouteData() {
            return this._activatedRoute
              ? this._activatedRoute.snapshot.data
              : {};
          }
          detach() {
            if (!this.activated) throw new Error('Outlet is not activated');
            this.location.detach();
            const a = this.activated;
            return (
              (this.activated = null),
              (this._activatedRoute = null),
              this.detachEvents.emit(a.instance),
              a
            );
          }
          attach(a, f) {
            (this.activated = a),
              (this._activatedRoute = f),
              this.location.insert(a.hostView),
              this.attachEvents.emit(a.instance);
          }
          deactivate() {
            if (this.activated) {
              const a = this.component;
              this.activated.destroy(),
                (this.activated = null),
                (this._activatedRoute = null),
                this.deactivateEvents.emit(a);
            }
          }
          activateWith(a, f) {
            if (this.isActivated)
              throw new Error('Cannot activate an already activated outlet');
            this._activatedRoute = a;
            const D = this.location,
              S = a._futureSnapshot.component,
              F = this.parentContexts.getOrCreateContext(this.name).children,
              H = new wo(a, F, D.injector);
            if (
              f &&
              (function ao(u) {
                return !!u.resolveComponentFactory;
              })(f)
            ) {
              const fe = f.resolveComponentFactory(S);
              this.activated = D.createComponent(fe, D.length, H);
            } else
              this.activated = D.createComponent(S, {
                index: D.length,
                injector: H,
                environmentInjector: f ?? this.environmentInjector,
              });
            this.changeDetector.markForCheck(),
              this.activateEvents.emit(this.activated.instance);
          }
        }
        return (
          (u.ɵfac = function (a) {
            return new (a || u)(
              I.Y36(Ut),
              I.Y36(I.s_b),
              I.$8M('name'),
              I.Y36(I.sBO),
              I.Y36(I.lqb)
            );
          }),
          (u.ɵdir = I.lG2({
            type: u,
            selectors: [['router-outlet']],
            outputs: {
              activateEvents: 'activate',
              deactivateEvents: 'deactivate',
              attachEvents: 'attach',
              detachEvents: 'detach',
            },
            exportAs: ['outlet'],
          })),
          u
        );
      })();
      class wo {
        constructor(l, a, f) {
          (this.route = l), (this.childContexts = a), (this.parent = f);
        }
        get(l, a) {
          return l === lr
            ? this.route
            : l === Ut
            ? this.childContexts
            : this.parent.get(l, a);
        }
      }
      let lo = (() => {
        class u {}
        return (
          (u.ɵfac = function (a) {
            return new (a || u)();
          }),
          (u.ɵcmp = I.Xpm({
            type: u,
            selectors: [['ng-component']],
            decls: 1,
            vars: 0,
            template: function (a, f) {
              1 & a && I._UZ(0, 'router-outlet');
            },
            dependencies: [$n],
            encapsulation: 2,
          })),
          u
        );
      })();
      function Mo(u, l) {
        return (
          u.providers &&
            !u._injector &&
            (u._injector = (0, I.MMx)(u.providers, l, `Route: ${u.path}`)),
          u._injector ?? l
        );
      }
      function g(u) {
        const l = u.children && u.children.map(g),
          a = l ? { ...u, children: l } : { ...u };
        return (
          !a.component &&
            !a.loadComponent &&
            (l || a.loadChildren) &&
            a.outlet &&
            a.outlet !== Ve &&
            (a.component = lo),
          a
        );
      }
      function E(u) {
        return u.outlet || Ve;
      }
      function m(u, l) {
        const a = u.filter(f => E(f) === l);
        return a.push(...u.filter(f => E(f) !== l)), a;
      }
      function M(u) {
        if (!u) return null;
        if (u.routeConfig?._injector) return u.routeConfig._injector;
        for (let l = u.parent; l; l = l.parent) {
          const a = l.routeConfig;
          if (a?._loadedInjector) return a._loadedInjector;
          if (a?._injector) return a._injector;
        }
        return null;
      }
      class G {
        constructor(l, a, f, D) {
          (this.routeReuseStrategy = l),
            (this.futureState = a),
            (this.currState = f),
            (this.forwardEvent = D);
        }
        activate(l) {
          const a = this.futureState._root,
            f = this.currState ? this.currState._root : null;
          this.deactivateChildRoutes(a, f, l),
            jr(this.futureState.root),
            this.activateChildRoutes(a, f, l);
        }
        deactivateChildRoutes(l, a, f) {
          const D = On(a);
          l.children.forEach(w => {
            const S = w.value.outlet;
            this.deactivateRoutes(w, D[S], f), delete D[S];
          }),
            Dt(D, (w, S) => {
              this.deactivateRouteAndItsChildren(w, f);
            });
        }
        deactivateRoutes(l, a, f) {
          const D = l.value,
            w = a ? a.value : null;
          if (D === w)
            if (D.component) {
              const S = f.getContext(D.outlet);
              S && this.deactivateChildRoutes(l, a, S.children);
            } else this.deactivateChildRoutes(l, a, f);
          else w && this.deactivateRouteAndItsChildren(a, f);
        }
        deactivateRouteAndItsChildren(l, a) {
          l.value.component &&
          this.routeReuseStrategy.shouldDetach(l.value.snapshot)
            ? this.detachAndStoreRouteSubtree(l, a)
            : this.deactivateRouteAndOutlet(l, a);
        }
        detachAndStoreRouteSubtree(l, a) {
          const f = a.getContext(l.value.outlet),
            D = f && l.value.component ? f.children : a,
            w = On(l);
          for (const S of Object.keys(w))
            this.deactivateRouteAndItsChildren(w[S], D);
          if (f && f.outlet) {
            const S = f.outlet.detach(),
              F = f.children.onOutletDeactivated();
            this.routeReuseStrategy.store(l.value.snapshot, {
              componentRef: S,
              route: l,
              contexts: F,
            });
          }
        }
        deactivateRouteAndOutlet(l, a) {
          const f = a.getContext(l.value.outlet),
            D = f && l.value.component ? f.children : a,
            w = On(l);
          for (const S of Object.keys(w))
            this.deactivateRouteAndItsChildren(w[S], D);
          f &&
            f.outlet &&
            (f.outlet.deactivate(),
            f.children.onOutletDeactivated(),
            (f.attachRef = null),
            (f.resolver = null),
            (f.route = null));
        }
        activateChildRoutes(l, a, f) {
          const D = On(a);
          l.children.forEach(w => {
            this.activateRoutes(w, D[w.value.outlet], f),
              this.forwardEvent(new sn(w.value.snapshot));
          }),
            l.children.length && this.forwardEvent(new Qe(l.value.snapshot));
        }
        activateRoutes(l, a, f) {
          const D = l.value,
            w = a ? a.value : null;
          if ((jr(D), D === w))
            if (D.component) {
              const S = f.getOrCreateContext(D.outlet);
              this.activateChildRoutes(l, a, S.children);
            } else this.activateChildRoutes(l, a, f);
          else if (D.component) {
            const S = f.getOrCreateContext(D.outlet);
            if (this.routeReuseStrategy.shouldAttach(D.snapshot)) {
              const F = this.routeReuseStrategy.retrieve(D.snapshot);
              this.routeReuseStrategy.store(D.snapshot, null),
                S.children.onOutletReAttached(F.contexts),
                (S.attachRef = F.componentRef),
                (S.route = F.route.value),
                S.outlet && S.outlet.attach(F.componentRef, F.route.value),
                jr(F.route.value),
                this.activateChildRoutes(l, null, S.children);
            } else {
              const F = M(D.snapshot),
                H = F?.get(I._Vd) ?? null;
              (S.attachRef = null),
                (S.route = D),
                (S.resolver = H),
                (S.injector = F),
                S.outlet && S.outlet.activateWith(D, S.injector),
                this.activateChildRoutes(l, null, S.children);
            }
          } else this.activateChildRoutes(l, null, f);
        }
      }
      function Z(u) {
        return 'function' == typeof u;
      }
      function ut(u) {
        return u instanceof T;
      }
      const ft = Symbol('INITIAL_VALUE');
      function Fe() {
        return (0, Zt.w)(u =>
          de(
            u.map(l =>
              l.pipe(
                (0, tt.q)(1),
                (function W(...u) {
                  const l = (0, le.yG)(u);
                  return (0, V.e)((a, f) => {
                    (l ? Ue(u, a, l) : Ue(u, a)).subscribe(f);
                  });
                })(ft)
              )
            )
          ).pipe(
            Ye((l, a) => {
              let f = !1;
              return a.reduce(
                (D, w, S) =>
                  D !== ft
                    ? D
                    : (w === ft && (f = !0),
                      f || (!1 !== w && S !== a.length - 1 && !ut(w)) ? D : w),
                l
              );
            }, ft),
            (0, ce.h)(l => l !== ft),
            (0, yt.U)(l => (ut(l) ? l : !0 === l)),
            (0, tt.q)(1)
          )
        );
      }
      const Jn = {
        matched: !1,
        consumedSegments: [],
        remainingSegments: [],
        parameters: {},
        positionalParamSegments: {},
      };
      function Nn(u, l, a) {
        if ('' === l.path)
          return 'full' === l.pathMatch && (u.hasChildren() || a.length > 0)
            ? { ...Jn }
            : {
                matched: !0,
                consumedSegments: [],
                remainingSegments: a,
                parameters: {},
                positionalParamSegments: {},
              };
        const D = (l.matcher || An)(a, u, l);
        if (!D) return { ...Jn };
        const w = {};
        Dt(D.posParams, (F, H) => {
          w[H] = F.path;
        });
        const S =
          D.consumed.length > 0
            ? { ...w, ...D.consumed[D.consumed.length - 1].parameters }
            : w;
        return {
          matched: !0,
          consumedSegments: D.consumed,
          remainingSegments: a.slice(D.consumed.length),
          parameters: S,
          positionalParamSegments: D.posParams ?? {},
        };
      }
      function Ln(u, l, a, f, D = 'corrected') {
        if (
          a.length > 0 &&
          (function Ar(u, l, a) {
            return a.some(f => Ao(u, l, f) && E(f) !== Ve);
          })(u, a, f)
        ) {
          const S = new N(
            l,
            (function co(u, l, a, f) {
              const D = {};
              (D[Ve] = f),
                (f._sourceSegment = u),
                (f._segmentIndexShift = l.length);
              for (const w of a)
                if ('' === w.path && E(w) !== Ve) {
                  const S = new N([], {});
                  (S._sourceSegment = u),
                    (S._segmentIndexShift = l.length),
                    (D[E(w)] = S);
                }
              return D;
            })(u, l, f, new N(a, u.children))
          );
          return (
            (S._sourceSegment = u),
            (S._segmentIndexShift = l.length),
            { segmentGroup: S, slicedSegments: [] }
          );
        }
        if (
          0 === a.length &&
          (function Io(u, l, a) {
            return a.some(f => Ao(u, l, f));
          })(u, a, f)
        ) {
          const S = new N(
            u.segments,
            (function Xn(u, l, a, f, D, w) {
              const S = {};
              for (const F of f)
                if (Ao(u, a, F) && !D[E(F)]) {
                  const H = new N([], {});
                  (H._sourceSegment = u),
                    (H._segmentIndexShift =
                      'legacy' === w ? u.segments.length : l.length),
                    (S[E(F)] = H);
                }
              return { ...D, ...S };
            })(u, l, a, f, u.children, D)
          );
          return (
            (S._sourceSegment = u),
            (S._segmentIndexShift = l.length),
            { segmentGroup: S, slicedSegments: a }
          );
        }
        const w = new N(u.segments, u.children);
        return (
          (w._sourceSegment = u),
          (w._segmentIndexShift = l.length),
          { segmentGroup: w, slicedSegments: a }
        );
      }
      function Ao(u, l, a) {
        return (
          (!(u.hasChildren() || l.length > 0) || 'full' !== a.pathMatch) &&
          '' === a.path
        );
      }
      function ne(u, l, a, f) {
        return (
          !!(E(u) === f || (f !== Ve && Ao(l, a, u))) &&
          ('**' === u.path || Nn(l, u, a).matched)
        );
      }
      function lt(u, l, a) {
        return 0 === l.length && !u.children[a];
      }
      class So {
        constructor(l) {
          this.segmentGroup = l || null;
        }
      }
      class Ui {
        constructor(l) {
          this.urlTree = l;
        }
      }
      function St(u) {
        return Je(new So(u));
      }
      function Xo(u) {
        return Je(new Ui(u));
      }
      class b {
        constructor(l, a, f, D, w) {
          (this.injector = l),
            (this.configLoader = a),
            (this.urlSerializer = f),
            (this.urlTree = D),
            (this.config = w),
            (this.allowRedirects = !0);
        }
        apply() {
          const l = Ln(this.urlTree.root, [], [], this.config).segmentGroup,
            a = new N(l.segments, l.children);
          return this.expandSegmentGroup(this.injector, this.config, a, Ve)
            .pipe(
              (0, yt.U)(w =>
                this.createUrlTree(
                  Oe(w),
                  this.urlTree.queryParams,
                  this.urlTree.fragment
                )
              )
            )
            .pipe(
              nt(w => {
                if (w instanceof Ui)
                  return (this.allowRedirects = !1), this.match(w.urlTree);
                throw w instanceof So ? this.noMatchError(w) : w;
              })
            );
        }
        match(l) {
          return this.expandSegmentGroup(this.injector, this.config, l.root, Ve)
            .pipe(
              (0, yt.U)(D =>
                this.createUrlTree(Oe(D), l.queryParams, l.fragment)
              )
            )
            .pipe(
              nt(D => {
                throw D instanceof So ? this.noMatchError(D) : D;
              })
            );
        }
        noMatchError(l) {
          return new Error(
            `Cannot match any routes. URL Segment: '${l.segmentGroup}'`
          );
        }
        createUrlTree(l, a, f) {
          const D = l.segments.length > 0 ? new N([], { [Ve]: l }) : l;
          return new T(D, a, f);
        }
        expandSegmentGroup(l, a, f, D) {
          return 0 === f.segments.length && f.hasChildren()
            ? this.expandChildren(l, a, f).pipe((0, yt.U)(w => new N([], w)))
            : this.expandSegment(l, f, a, f.segments, D, !0);
        }
        expandChildren(l, a, f) {
          const D = [];
          for (const w of Object.keys(f.children))
            'primary' === w ? D.unshift(w) : D.push(w);
          return (0, ee.D)(D).pipe(
            k(w => {
              const S = f.children[w],
                F = m(a, w);
              return this.expandSegmentGroup(l, F, S, w).pipe(
                (0, yt.U)(H => ({ segment: H, outlet: w }))
              );
            }),
            Ye((w, S) => ((w[S.outlet] = S.segment), w), {}),
            (function ot(u, l) {
              const a = arguments.length >= 2;
              return f =>
                f.pipe(
                  u ? (0, ce.h)((D, w) => u(D, w, f)) : te.y,
                  Le(1),
                  a ? st(l) : Ze(() => new me())
                );
            })()
          );
        }
        expandSegment(l, a, f, D, w, S) {
          return (0, ee.D)(f).pipe(
            k(F =>
              this.expandSegmentAgainstRoute(l, a, f, F, D, w, S).pipe(
                nt(fe => {
                  if (fe instanceof So) return j(null);
                  throw fe;
                })
              )
            ),
            Ot(F => !!F),
            nt((F, H) => {
              if (F instanceof me || 'EmptyError' === F.name)
                return lt(a, D, w) ? j(new N([], {})) : St(a);
              throw F;
            })
          );
        }
        expandSegmentAgainstRoute(l, a, f, D, w, S, F) {
          return ne(D, a, w, S)
            ? void 0 === D.redirectTo
              ? this.matchSegmentAgainstRoute(l, a, D, w, S)
              : F && this.allowRedirects
              ? this.expandSegmentAgainstRouteUsingRedirect(l, a, f, D, w, S)
              : St(a)
            : St(a);
        }
        expandSegmentAgainstRouteUsingRedirect(l, a, f, D, w, S) {
          return '**' === D.path
            ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(l, f, D, S)
            : this.expandRegularSegmentAgainstRouteUsingRedirect(
                l,
                a,
                f,
                D,
                w,
                S
              );
        }
        expandWildCardWithParamsAgainstRouteUsingRedirect(l, a, f, D) {
          const w = this.applyRedirectCommands([], f.redirectTo, {});
          return f.redirectTo.startsWith('/')
            ? Xo(w)
            : this.lineralizeSegments(f, w).pipe(
                (0, X.z)(S => {
                  const F = new N(S, {});
                  return this.expandSegment(l, F, a, S, D, !1);
                })
              );
        }
        expandRegularSegmentAgainstRouteUsingRedirect(l, a, f, D, w, S) {
          const {
            matched: F,
            consumedSegments: H,
            remainingSegments: fe,
            positionalParamSegments: Ae,
          } = Nn(a, D, w);
          if (!F) return St(a);
          const Se = this.applyRedirectCommands(H, D.redirectTo, Ae);
          return D.redirectTo.startsWith('/')
            ? Xo(Se)
            : this.lineralizeSegments(D, Se).pipe(
                (0, X.z)(bt =>
                  this.expandSegment(l, a, f, bt.concat(fe), S, !1)
                )
              );
        }
        matchSegmentAgainstRoute(l, a, f, D, w) {
          if ('**' === f.path)
            return (
              (l = Mo(f, l)),
              f.loadChildren
                ? (f._loadedRoutes
                    ? j({
                        routes: f._loadedRoutes,
                        injector: f._loadedInjector,
                      })
                    : this.configLoader.loadChildren(l, f)
                  ).pipe(
                    (0, yt.U)(
                      Se => (
                        (f._loadedRoutes = Se.routes),
                        (f._loadedInjector = Se.injector),
                        new N(D, {})
                      )
                    )
                  )
                : j(new N(D, {}))
            );
          const {
            matched: S,
            consumedSegments: F,
            remainingSegments: H,
          } = Nn(a, f, D);
          return S
            ? ((l = Mo(f, l)),
              this.getChildConfig(l, f, D).pipe(
                (0, X.z)(Ae => {
                  const Se = Ae.injector ?? l,
                    bt = Ae.routes,
                    { segmentGroup: Vt, slicedSegments: nr } = Ln(a, F, H, bt),
                    ui = new N(Vt.segments, Vt.children);
                  if (0 === nr.length && ui.hasChildren())
                    return this.expandChildren(Se, bt, ui).pipe(
                      (0, yt.U)(Sc => new N(F, Sc))
                    );
                  if (0 === bt.length && 0 === nr.length)
                    return j(new N(F, {}));
                  const ta = E(f) === w;
                  return this.expandSegment(
                    Se,
                    ui,
                    bt,
                    nr,
                    ta ? Ve : w,
                    !0
                  ).pipe(
                    (0, yt.U)(mr => new N(F.concat(mr.segments), mr.children))
                  );
                })
              ))
            : St(a);
        }
        getChildConfig(l, a, f) {
          return a.children
            ? j({ routes: a.children, injector: l })
            : a.loadChildren
            ? void 0 !== a._loadedRoutes
              ? j({ routes: a._loadedRoutes, injector: a._loadedInjector })
              : this.runCanLoadGuards(l, a, f).pipe(
                  (0, X.z)(D =>
                    D
                      ? this.configLoader.loadChildren(l, a).pipe(
                          Et(w => {
                            (a._loadedRoutes = w.routes),
                              (a._loadedInjector = w.injector);
                          })
                        )
                      : (function p(u) {
                          return Je(
                            it(
                              `Cannot load children because the guard of the route "path: '${u.path}'" returned false`
                            )
                          );
                        })(a)
                  )
                )
            : j({ routes: [], injector: l });
        }
        runCanLoadGuards(l, a, f) {
          const D = a.canLoad;
          return D && 0 !== D.length
            ? j(
                D.map(S => {
                  const F = l.get(S);
                  let H;
                  if (
                    (function mt(u) {
                      return u && Z(u.canLoad);
                    })(F)
                  )
                    H = F.canLoad(a, f);
                  else {
                    if (!Z(F)) throw new Error('Invalid CanLoad guard');
                    H = F(a, f);
                  }
                  return $t(H);
                })
              ).pipe(
                Fe(),
                Et(S => {
                  if (!ut(S)) return;
                  const F = it(
                    `Redirecting to "${this.urlSerializer.serialize(S)}"`
                  );
                  throw ((F.url = S), F);
                }),
                (0, yt.U)(S => !0 === S)
              )
            : j(!0);
        }
        lineralizeSegments(l, a) {
          let f = [],
            D = a.root;
          for (;;) {
            if (((f = f.concat(D.segments)), 0 === D.numberOfChildren))
              return j(f);
            if (D.numberOfChildren > 1 || !D.children[Ve])
              return Je(
                new Error(
                  `Only absolute redirects can have named outlets. redirectTo: '${l.redirectTo}'`
                )
              );
            D = D.children[Ve];
          }
        }
        applyRedirectCommands(l, a, f) {
          return this.applyRedirectCreatreUrlTree(
            a,
            this.urlSerializer.parse(a),
            l,
            f
          );
        }
        applyRedirectCreatreUrlTree(l, a, f, D) {
          const w = this.createSegmentGroup(l, a.root, f, D);
          return new T(
            w,
            this.createQueryParams(a.queryParams, this.urlTree.queryParams),
            a.fragment
          );
        }
        createQueryParams(l, a) {
          const f = {};
          return (
            Dt(l, (D, w) => {
              if ('string' == typeof D && D.startsWith(':')) {
                const F = D.substring(1);
                f[w] = a[F];
              } else f[w] = D;
            }),
            f
          );
        }
        createSegmentGroup(l, a, f, D) {
          const w = this.createSegments(l, a.segments, f, D);
          let S = {};
          return (
            Dt(a.children, (F, H) => {
              S[H] = this.createSegmentGroup(l, F, f, D);
            }),
            new N(w, S)
          );
        }
        createSegments(l, a, f, D) {
          return a.map(w =>
            w.path.startsWith(':')
              ? this.findPosParam(l, w, D)
              : this.findOrReturn(w, f)
          );
        }
        findPosParam(l, a, f) {
          const D = f[a.path.substring(1)];
          if (!D)
            throw new Error(
              `Cannot redirect to '${l}'. Cannot find '${a.path}'.`
            );
          return D;
        }
        findOrReturn(l, a) {
          let f = 0;
          for (const D of a) {
            if (D.path === l.path) return a.splice(f), D;
            f++;
          }
          return l;
        }
      }
      function Oe(u) {
        const l = {};
        for (const f of Object.keys(u.children)) {
          const w = Oe(u.children[f]);
          (w.segments.length > 0 || w.hasChildren()) && (l[f] = w);
        }
        return (function z(u) {
          if (1 === u.numberOfChildren && u.children[Ve]) {
            const l = u.children[Ve];
            return new N(u.segments.concat(l.segments), l.children);
          }
          return u;
        })(new N(u.segments, l));
      }
      class Kt {
        constructor(l) {
          (this.path = l), (this.route = this.path[this.path.length - 1]);
        }
      }
      class Mt {
        constructor(l, a) {
          (this.component = l), (this.route = a);
        }
      }
      function on(u, l, a) {
        const f = u._root;
        return ln(f, l ? l._root : null, a, [f.value]);
      }
      function wn(u, l, a) {
        return (M(l) ?? a).get(u);
      }
      function ln(
        u,
        l,
        a,
        f,
        D = { canDeactivateChecks: [], canActivateChecks: [] }
      ) {
        const w = On(l);
        return (
          u.children.forEach(S => {
            (function qa(
              u,
              l,
              a,
              f,
              D = { canDeactivateChecks: [], canActivateChecks: [] }
            ) {
              const w = u.value,
                S = l ? l.value : null,
                F = a ? a.getContext(u.value.outlet) : null;
              if (S && w.routeConfig === S.routeConfig) {
                const H = (function Os(u, l, a) {
                  if ('function' == typeof a) return a(u, l);
                  switch (a) {
                    case 'pathParamsChange':
                      return !qe(u.url, l.url);
                    case 'pathParamsOrQueryParamsChange':
                      return (
                        !qe(u.url, l.url) || !kt(u.queryParams, l.queryParams)
                      );
                    case 'always':
                      return !0;
                    case 'paramsOrQueryParamsChange':
                      return !Ur(u, l) || !kt(u.queryParams, l.queryParams);
                    default:
                      return !Ur(u, l);
                  }
                })(S, w, w.routeConfig.runGuardsAndResolvers);
                H
                  ? D.canActivateChecks.push(new Kt(f))
                  : ((w.data = S.data), (w._resolvedData = S._resolvedData)),
                  ln(u, l, w.component ? (F ? F.children : null) : a, f, D),
                  H &&
                    F &&
                    F.outlet &&
                    F.outlet.isActivated &&
                    D.canDeactivateChecks.push(new Mt(F.outlet.component, S));
              } else
                S && To(l, F, D),
                  D.canActivateChecks.push(new Kt(f)),
                  ln(u, null, w.component ? (F ? F.children : null) : a, f, D);
            })(S, w[S.value.outlet], a, f.concat([S.value]), D),
              delete w[S.value.outlet];
          }),
          Dt(w, (S, F) => To(S, a.getContext(F), D)),
          D
        );
      }
      function To(u, l, a) {
        const f = On(u),
          D = u.value;
        Dt(f, (w, S) => {
          To(w, D.component ? (l ? l.children.getContext(S) : null) : l, a);
        }),
          a.canDeactivateChecks.push(
            new Mt(
              D.component && l && l.outlet && l.outlet.isActivated
                ? l.outlet.component
                : null,
              D
            )
          );
      }
      class Ls {}
      function Wi(u) {
        return new ue.y(l => l.error(u));
      }
      class ti {
        constructor(l, a, f, D, w, S) {
          (this.rootComponentType = l),
            (this.config = a),
            (this.urlTree = f),
            (this.url = D),
            (this.paramsInheritanceStrategy = w),
            (this.relativeLinkResolution = S);
        }
        recognize() {
          const l = Ln(
              this.urlTree.root,
              [],
              [],
              this.config.filter(S => void 0 === S.redirectTo),
              this.relativeLinkResolution
            ).segmentGroup,
            a = this.processSegmentGroup(this.config, l, Ve);
          if (null === a) return null;
          const f = new ro(
              [],
              Object.freeze({}),
              Object.freeze({ ...this.urlTree.queryParams }),
              this.urlTree.fragment,
              {},
              Ve,
              this.rootComponentType,
              null,
              this.urlTree.root,
              -1,
              {}
            ),
            D = new jt(f, a),
            w = new rn(this.url, D);
          return this.inheritParamsAndData(w._root), w;
        }
        inheritParamsAndData(l) {
          const a = l.value,
            f = Co(a, this.paramsInheritanceStrategy);
          (a.params = Object.freeze(f.params)),
            (a.data = Object.freeze(f.data)),
            l.children.forEach(D => this.inheritParamsAndData(D));
        }
        processSegmentGroup(l, a, f) {
          return 0 === a.segments.length && a.hasChildren()
            ? this.processChildren(l, a)
            : this.processSegment(l, a, a.segments, f);
        }
        processChildren(l, a) {
          const f = [];
          for (const w of Object.keys(a.children)) {
            const S = a.children[w],
              F = m(l, w),
              H = this.processSegmentGroup(F, S, w);
            if (null === H) return null;
            f.push(...H);
          }
          const D = pr(f);
          return (
            (function Za(u) {
              u.sort((l, a) =>
                l.value.outlet === Ve
                  ? -1
                  : a.value.outlet === Ve
                  ? 1
                  : l.value.outlet.localeCompare(a.value.outlet)
              );
            })(D),
            D
          );
        }
        processSegment(l, a, f, D) {
          for (const w of l) {
            const S = this.processSegmentAgainstRoute(w, a, f, D);
            if (null !== S) return S;
          }
          return lt(a, f, D) ? [] : null;
        }
        processSegmentAgainstRoute(l, a, f, D) {
          if (l.redirectTo || !ne(l, a, f, D)) return null;
          let w,
            S = [],
            F = [];
          if ('**' === l.path) {
            const Vt = f.length > 0 ? fn(f).parameters : {},
              nr = ks(a) + f.length;
            w = new ro(
              f,
              Vt,
              Object.freeze({ ...this.urlTree.queryParams }),
              this.urlTree.fragment,
              js(l),
              E(l),
              l.component ?? l._loadedComponent ?? null,
              l,
              Yi(a),
              nr,
              Us(l),
              nr
            );
          } else {
            const Vt = Nn(a, l, f);
            if (!Vt.matched) return null;
            (S = Vt.consumedSegments), (F = Vt.remainingSegments);
            const nr = ks(a) + S.length;
            w = new ro(
              S,
              Vt.parameters,
              Object.freeze({ ...this.urlTree.queryParams }),
              this.urlTree.fragment,
              js(l),
              E(l),
              l.component ?? l._loadedComponent ?? null,
              l,
              Yi(a),
              nr,
              Us(l),
              nr
            );
          }
          const H = (function Ja(u) {
              return u.children
                ? u.children
                : u.loadChildren
                ? u._loadedRoutes
                : [];
            })(l),
            { segmentGroup: fe, slicedSegments: Ae } = Ln(
              a,
              S,
              F,
              H.filter(Vt => void 0 === Vt.redirectTo),
              this.relativeLinkResolution
            );
          if (0 === Ae.length && fe.hasChildren()) {
            const Vt = this.processChildren(H, fe);
            return null === Vt ? null : [new jt(w, Vt)];
          }
          if (0 === H.length && 0 === Ae.length) return [new jt(w, [])];
          const Se = E(l) === D,
            bt = this.processSegment(H, fe, Ae, Se ? Ve : D);
          return null === bt ? null : [new jt(w, bt)];
        }
      }
      function un(u) {
        const l = u.value.routeConfig;
        return l && '' === l.path && void 0 === l.redirectTo;
      }
      function pr(u) {
        const l = [],
          a = new Set();
        for (const f of u) {
          if (!un(f)) {
            l.push(f);
            continue;
          }
          const D = l.find(w => f.value.routeConfig === w.value.routeConfig);
          void 0 !== D ? (D.children.push(...f.children), a.add(D)) : l.push(f);
        }
        for (const f of a) {
          const D = pr(f.children);
          l.push(new jt(f.value, D));
        }
        return l.filter(f => !a.has(f));
      }
      function Yi(u) {
        let l = u;
        for (; l._sourceSegment; ) l = l._sourceSegment;
        return l;
      }
      function ks(u) {
        let l = u,
          a = l._segmentIndexShift ?? 0;
        for (; l._sourceSegment; )
          (l = l._sourceSegment), (a += l._segmentIndexShift ?? 0);
        return a - 1;
      }
      function js(u) {
        return u.data || {};
      }
      function Us(u) {
        return u.resolve || {};
      }
      const fo = Symbol('RouteTitle');
      function gr(u) {
        return 'string' == typeof u.title || null === u.title;
      }
      function Kr(u) {
        return (0, Zt.w)(l => {
          const a = u(l);
          return a ? (0, ee.D)(a).pipe((0, yt.U)(() => l)) : j(l);
        });
      }
      class xo extends class nl {
        shouldDetach(l) {
          return !1;
        }
        store(l, a) {}
        shouldAttach(l) {
          return !1;
        }
        retrieve(l) {
          return null;
        }
        shouldReuseRoute(l, a) {
          return l.routeConfig === a.routeConfig;
        }
      } {}
      const Ki = new I.OlP('ROUTES');
      let Qi = (() => {
        class u {
          constructor(a, f) {
            (this.injector = a),
              (this.compiler = f),
              (this.componentLoaders = new WeakMap()),
              (this.childrenLoaders = new WeakMap());
          }
          loadComponent(a) {
            if (this.componentLoaders.get(a))
              return this.componentLoaders.get(a);
            if (a._loadedComponent) return j(a._loadedComponent);
            this.onLoadStartListener && this.onLoadStartListener(a);
            const f = $t(a.loadComponent()).pipe(
                Et(w => {
                  this.onLoadEndListener && this.onLoadEndListener(a),
                    (a._loadedComponent = w);
                }),
                vn(() => {
                  this.componentLoaders.delete(a);
                })
              ),
              D = new $(f, () => new re.x()).pipe(U());
            return this.componentLoaders.set(a, D), D;
          }
          loadChildren(a, f) {
            if (this.childrenLoaders.get(f)) return this.childrenLoaders.get(f);
            if (f._loadedRoutes)
              return j({
                routes: f._loadedRoutes,
                injector: f._loadedInjector,
              });
            this.onLoadStartListener && this.onLoadStartListener(f);
            const w = this.loadModuleFactoryOrRoutes(f.loadChildren).pipe(
                (0, yt.U)(F => {
                  this.onLoadEndListener && this.onLoadEndListener(f);
                  let H,
                    fe,
                    Ae = !1;
                  Array.isArray(F)
                    ? (fe = F)
                    : ((H = F.create(a).injector),
                      (fe = Sn(H.get(Ki, [], I.XFs.Self | I.XFs.Optional))));
                  return { routes: fe.map(g), injector: H };
                }),
                vn(() => {
                  this.childrenLoaders.delete(f);
                })
              ),
              S = new $(w, () => new re.x()).pipe(U());
            return this.childrenLoaders.set(f, S), S;
          }
          loadModuleFactoryOrRoutes(a) {
            return $t(a()).pipe(
              (0, X.z)(f =>
                f instanceof I.YKP || Array.isArray(f)
                  ? j(f)
                  : (0, ee.D)(this.compiler.compileModuleAsync(f))
              )
            );
          }
        }
        return (
          (u.ɵfac = function (a) {
            return new (a || u)(I.LFG(I.zs3), I.LFG(I.Sil));
          }),
          (u.ɵprov = I.Yz7({ token: u, factory: u.ɵfac })),
          u
        );
      })();
      class bc {
        shouldProcessUrl(l) {
          return !0;
        }
        extract(l) {
          return l;
        }
        merge(l, a) {
          return l;
        }
      }
      function $s(u) {
        throw u;
      }
      function Zi(u, l, a) {
        return l.parse('/');
      }
      const si = {
          paths: 'exact',
          fragment: 'ignored',
          matrixParams: 'ignored',
          queryParams: 'exact',
        },
        Gs = {
          paths: 'subset',
          fragment: 'ignored',
          matrixParams: 'ignored',
          queryParams: 'subset',
        };
      let gn = (() => {
        class u {
          constructor(a, f, D, w, S, F, H) {
            (this.rootComponentType = a),
              (this.urlSerializer = f),
              (this.rootContexts = D),
              (this.location = w),
              (this.config = H),
              (this.lastSuccessfulNavigation = null),
              (this.currentNavigation = null),
              (this.disposed = !1),
              (this.navigationId = 0),
              (this.currentPageId = 0),
              (this.isNgZoneEnabled = !1),
              (this.events = new re.x()),
              (this.errorHandler = $s),
              (this.malformedUriErrorHandler = Zi),
              (this.navigated = !1),
              (this.lastSuccessfulId = -1),
              (this.afterPreactivation = () => j(void 0)),
              (this.urlHandlingStrategy = new bc()),
              (this.routeReuseStrategy = new xo()),
              (this.onSameUrlNavigation = 'ignore'),
              (this.paramsInheritanceStrategy = 'emptyOnly'),
              (this.urlUpdateStrategy = 'deferred'),
              (this.relativeLinkResolution = 'corrected'),
              (this.canceledNavigationResolution = 'replace'),
              (this.configLoader = S.get(Qi)),
              (this.configLoader.onLoadEndListener = bt =>
                this.triggerEvent(new at(bt))),
              (this.configLoader.onLoadStartListener = bt =>
                this.triggerEvent(new ir(bt))),
              (this.ngModule = S.get(I.h0i)),
              (this.console = S.get(I.c2e));
            const Se = S.get(I.R0b);
            (this.isNgZoneEnabled =
              Se instanceof I.R0b && I.R0b.isInAngularZone()),
              this.resetConfig(H),
              (this.currentUrlTree = (function sr() {
                return new T(new N([], {}), {}, null);
              })()),
              (this.rawUrlTree = this.currentUrlTree),
              (this.browserUrlTree = this.currentUrlTree),
              (this.routerState = no(
                this.currentUrlTree,
                this.rootComponentType
              )),
              (this.transitions = new se({
                id: 0,
                targetPageId: 0,
                currentUrlTree: this.currentUrlTree,
                currentRawUrl: this.currentUrlTree,
                extractedUrl: this.urlHandlingStrategy.extract(
                  this.currentUrlTree
                ),
                urlAfterRedirects: this.urlHandlingStrategy.extract(
                  this.currentUrlTree
                ),
                rawUrl: this.currentUrlTree,
                extras: {},
                resolve: null,
                reject: null,
                promise: Promise.resolve(!0),
                source: 'imperative',
                restoredState: null,
                currentSnapshot: this.routerState.snapshot,
                targetSnapshot: null,
                currentRouterState: this.routerState,
                targetRouterState: null,
                guards: { canActivateChecks: [], canDeactivateChecks: [] },
                guardsResult: null,
              })),
              (this.navigations = this.setupNavigations(this.transitions)),
              this.processNavigations();
          }
          get browserPageId() {
            return this.location.getState()?.ɵrouterPageId;
          }
          setupNavigations(a) {
            const f = this.events;
            return a.pipe(
              (0, ce.h)(D => 0 !== D.id),
              (0, yt.U)(D => ({
                ...D,
                extractedUrl: this.urlHandlingStrategy.extract(D.rawUrl),
              })),
              (0, Zt.w)(D => {
                let w = !1,
                  S = !1;
                return j(D).pipe(
                  Et(F => {
                    this.currentNavigation = {
                      id: F.id,
                      initialUrl: F.rawUrl,
                      extractedUrl: F.extractedUrl,
                      trigger: F.source,
                      extras: F.extras,
                      previousNavigation: this.lastSuccessfulNavigation
                        ? {
                            ...this.lastSuccessfulNavigation,
                            previousNavigation: null,
                          }
                        : null,
                    };
                  }),
                  (0, Zt.w)(F => {
                    const H = this.browserUrlTree.toString(),
                      fe =
                        !this.navigated ||
                        F.extractedUrl.toString() !== H ||
                        H !== this.currentUrlTree.toString();
                    if (
                      ('reload' === this.onSameUrlNavigation || fe) &&
                      this.urlHandlingStrategy.shouldProcessUrl(F.rawUrl)
                    )
                      return (
                        zs(F.source) && (this.browserUrlTree = F.extractedUrl),
                        j(F).pipe(
                          (0, Zt.w)(Se => {
                            const bt = this.transitions.getValue();
                            return (
                              f.next(
                                new Ne(
                                  Se.id,
                                  this.serializeUrl(Se.extractedUrl),
                                  Se.source,
                                  Se.restoredState
                                )
                              ),
                              bt !== this.transitions.getValue()
                                ? Y.E
                                : Promise.resolve(Se)
                            );
                          }),
                          (function Tt(u, l, a, f) {
                            return (0, Zt.w)(D =>
                              (function h(u, l, a, f, D) {
                                return new b(u, l, a, f, D).apply();
                              })(u, l, a, D.extractedUrl, f).pipe(
                                (0, yt.U)(w => ({ ...D, urlAfterRedirects: w }))
                              )
                            );
                          })(
                            this.ngModule.injector,
                            this.configLoader,
                            this.urlSerializer,
                            this.config
                          ),
                          Et(Se => {
                            this.currentNavigation = {
                              ...this.currentNavigation,
                              finalUrl: Se.urlAfterRedirects,
                            };
                          }),
                          (function Xa(u, l, a, f, D) {
                            return (0, X.z)(w =>
                              (function Vs(
                                u,
                                l,
                                a,
                                f,
                                D = 'emptyOnly',
                                w = 'legacy'
                              ) {
                                try {
                                  const S = new ti(
                                    u,
                                    l,
                                    a,
                                    f,
                                    D,
                                    w
                                  ).recognize();
                                  return null === S ? Wi(new Ls()) : j(S);
                                } catch (S) {
                                  return Wi(S);
                                }
                              })(
                                u,
                                l,
                                w.urlAfterRedirects,
                                a(w.urlAfterRedirects),
                                f,
                                D
                              ).pipe(
                                (0, yt.U)(S => ({ ...w, targetSnapshot: S }))
                              )
                            );
                          })(
                            this.rootComponentType,
                            this.config,
                            Se => this.serializeUrl(Se),
                            this.paramsInheritanceStrategy,
                            this.relativeLinkResolution
                          ),
                          Et(Se => {
                            if ('eager' === this.urlUpdateStrategy) {
                              if (!Se.extras.skipLocationChange) {
                                const Vt = this.urlHandlingStrategy.merge(
                                  Se.urlAfterRedirects,
                                  Se.rawUrl
                                );
                                this.setBrowserUrl(Vt, Se);
                              }
                              this.browserUrlTree = Se.urlAfterRedirects;
                            }
                            const bt = new or(
                              Se.id,
                              this.serializeUrl(Se.extractedUrl),
                              this.serializeUrl(Se.urlAfterRedirects),
                              Se.targetSnapshot
                            );
                            f.next(bt);
                          })
                        )
                      );
                    if (
                      fe &&
                      this.rawUrlTree &&
                      this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)
                    ) {
                      const {
                          id: bt,
                          extractedUrl: Vt,
                          source: nr,
                          restoredState: ui,
                          extras: ta,
                        } = F,
                        al = new Ne(bt, this.serializeUrl(Vt), nr, ui);
                      f.next(al);
                      const mr = no(Vt, this.rootComponentType).snapshot;
                      return j({
                        ...F,
                        targetSnapshot: mr,
                        urlAfterRedirects: Vt,
                        extras: {
                          ...ta,
                          skipLocationChange: !1,
                          replaceUrl: !1,
                        },
                      });
                    }
                    return (this.rawUrlTree = F.rawUrl), F.resolve(null), Y.E;
                  }),
                  Et(F => {
                    const H = new Go(
                      F.id,
                      this.serializeUrl(F.extractedUrl),
                      this.serializeUrl(F.urlAfterRedirects),
                      F.targetSnapshot
                    );
                    this.triggerEvent(H);
                  }),
                  (0, yt.U)(F => ({
                    ...F,
                    guards: on(
                      F.targetSnapshot,
                      F.currentSnapshot,
                      this.rootContexts
                    ),
                  })),
                  (function Ka(u, l) {
                    return (0, X.z)(a => {
                      const {
                        targetSnapshot: f,
                        currentSnapshot: D,
                        guards: {
                          canActivateChecks: w,
                          canDeactivateChecks: S,
                        },
                      } = a;
                      return 0 === S.length && 0 === w.length
                        ? j({ ...a, guardsResult: !0 })
                        : (function Hi(u, l, a, f) {
                            return (0, ee.D)(u).pipe(
                              (0, X.z)(D =>
                                (function ei(u, l, a, f, D) {
                                  const w =
                                    l && l.routeConfig
                                      ? l.routeConfig.canDeactivate
                                      : null;
                                  return w && 0 !== w.length
                                    ? j(
                                        w.map(F => {
                                          const H = wn(F, l, D);
                                          let fe;
                                          if (
                                            (function Nt(u) {
                                              return u && Z(u.canDeactivate);
                                            })(H)
                                          )
                                            fe = $t(
                                              H.canDeactivate(u, l, a, f)
                                            );
                                          else {
                                            if (!Z(H))
                                              throw new Error(
                                                'Invalid CanDeactivate guard'
                                              );
                                            fe = $t(H(u, l, a, f));
                                          }
                                          return fe.pipe(Ot());
                                        })
                                      ).pipe(Fe())
                                    : j(!0);
                                })(D.component, D.route, a, l, f)
                              ),
                              Ot(D => !0 !== D, !0)
                            );
                          })(S, f, D, u).pipe(
                            (0, X.z)(F =>
                              F &&
                              (function be(u) {
                                return 'boolean' == typeof u;
                              })(F)
                                ? (function $i(u, l, a, f) {
                                    return (0, ee.D)(l).pipe(
                                      k(D =>
                                        Ue(
                                          (function Gi(u, l) {
                                            return (
                                              null !== u && l && l(new Ce(u)),
                                              j(!0)
                                            );
                                          })(D.route.parent, f),
                                          (function Ps(u, l) {
                                            return (
                                              null !== u && l && l(new _o(u)),
                                              j(!0)
                                            );
                                          })(D.route, f),
                                          (function Ns(u, l, a) {
                                            const f = l[l.length - 1],
                                              w = l
                                                .slice(0, l.length - 1)
                                                .reverse()
                                                .map(S =>
                                                  (function qr(u) {
                                                    const l = u.routeConfig
                                                      ? u.routeConfig
                                                          .canActivateChild
                                                      : null;
                                                    return l && 0 !== l.length
                                                      ? { node: u, guards: l }
                                                      : null;
                                                  })(S)
                                                )
                                                .filter(S => null !== S)
                                                .map(S =>
                                                  xe(() =>
                                                    j(
                                                      S.guards.map(H => {
                                                        const fe = wn(
                                                          H,
                                                          S.node,
                                                          a
                                                        );
                                                        let Ae;
                                                        if (
                                                          (function Xe(u) {
                                                            return (
                                                              u &&
                                                              Z(
                                                                u.canActivateChild
                                                              )
                                                            );
                                                          })(fe)
                                                        )
                                                          Ae = $t(
                                                            fe.canActivateChild(
                                                              f,
                                                              u
                                                            )
                                                          );
                                                        else {
                                                          if (!Z(fe))
                                                            throw new Error(
                                                              'Invalid CanActivateChild guard'
                                                            );
                                                          Ae = $t(fe(f, u));
                                                        }
                                                        return Ae.pipe(Ot());
                                                      })
                                                    ).pipe(Fe())
                                                  )
                                                );
                                            return j(w).pipe(Fe());
                                          })(u, D.path, a),
                                          (function Qa(u, l, a) {
                                            const f = l.routeConfig
                                              ? l.routeConfig.canActivate
                                              : null;
                                            if (!f || 0 === f.length)
                                              return j(!0);
                                            const D = f.map(w =>
                                              xe(() => {
                                                const S = wn(w, l, a);
                                                let F;
                                                if (
                                                  (function Ct(u) {
                                                    return (
                                                      u && Z(u.canActivate)
                                                    );
                                                  })(S)
                                                )
                                                  F = $t(S.canActivate(l, u));
                                                else {
                                                  if (!Z(S))
                                                    throw new Error(
                                                      'Invalid CanActivate guard'
                                                    );
                                                  F = $t(S(l, u));
                                                }
                                                return F.pipe(Ot());
                                              })
                                            );
                                            return j(D).pipe(Fe());
                                          })(u, D.route, a)
                                        )
                                      ),
                                      Ot(D => !0 !== D, !0)
                                    );
                                  })(f, w, u, l)
                                : j(F)
                            ),
                            (0, yt.U)(F => ({ ...a, guardsResult: F }))
                          );
                    });
                  })(this.ngModule.injector, F => this.triggerEvent(F)),
                  Et(F => {
                    if (ut(F.guardsResult)) {
                      const fe = it(
                        `Redirecting to "${this.serializeUrl(F.guardsResult)}"`
                      );
                      throw ((fe.url = F.guardsResult), fe);
                    }
                    const H = new Dn(
                      F.id,
                      this.serializeUrl(F.extractedUrl),
                      this.serializeUrl(F.urlAfterRedirects),
                      F.targetSnapshot,
                      !!F.guardsResult
                    );
                    this.triggerEvent(H);
                  }),
                  (0, ce.h)(
                    F =>
                      !!F.guardsResult ||
                      (this.restoreHistory(F),
                      this.cancelNavigationTransition(F, ''),
                      !1)
                  ),
                  Kr(F => {
                    if (F.guards.canActivateChecks.length)
                      return j(F).pipe(
                        Et(H => {
                          const fe = new Xt(
                            H.id,
                            this.serializeUrl(H.extractedUrl),
                            this.serializeUrl(H.urlAfterRedirects),
                            H.targetSnapshot
                          );
                          this.triggerEvent(fe);
                        }),
                        (0, Zt.w)(H => {
                          let fe = !1;
                          return j(H).pipe(
                            (function ni(u, l) {
                              return (0, X.z)(a => {
                                const {
                                  targetSnapshot: f,
                                  guards: { canActivateChecks: D },
                                } = a;
                                if (!D.length) return j(a);
                                let w = 0;
                                return (0, ee.D)(D).pipe(
                                  k(S =>
                                    (function ri(u, l, a, f) {
                                      const D = u.routeConfig,
                                        w = u._resolve;
                                      return (
                                        void 0 !== D?.title &&
                                          !gr(D) &&
                                          (w[fo] = D.title),
                                        (function qi(u, l, a, f) {
                                          const D = (function Hs(u) {
                                            return [
                                              ...Object.keys(u),
                                              ...Object.getOwnPropertySymbols(
                                                u
                                              ),
                                            ];
                                          })(u);
                                          if (0 === D.length) return j({});
                                          const w = {};
                                          return (0, ee.D)(D).pipe(
                                            (0, X.z)(S =>
                                              (function el(u, l, a, f) {
                                                const D = wn(u, l, f);
                                                return $t(
                                                  D.resolve
                                                    ? D.resolve(l, a)
                                                    : D(l, a)
                                                );
                                              })(u[S], l, a, f).pipe(
                                                Ot(),
                                                Et(F => {
                                                  w[S] = F;
                                                })
                                              )
                                            ),
                                            Le(1),
                                            (function Vr(u) {
                                              return (0, yt.U)(() => u);
                                            })(w),
                                            nt(S =>
                                              S instanceof me ? Y.E : Je(S)
                                            )
                                          );
                                        })(w, u, l, f).pipe(
                                          (0, yt.U)(
                                            S => (
                                              (u._resolvedData = S),
                                              (u.data = Co(u, a).resolve),
                                              D &&
                                                gr(D) &&
                                                (u.data[fo] = D.title),
                                              null
                                            )
                                          )
                                        )
                                      );
                                    })(S.route, f, u, l)
                                  ),
                                  Et(() => w++),
                                  Le(1),
                                  (0, X.z)(S => (w === D.length ? j(a) : Y.E))
                                );
                              });
                            })(
                              this.paramsInheritanceStrategy,
                              this.ngModule.injector
                            ),
                            Et({
                              next: () => (fe = !0),
                              complete: () => {
                                fe ||
                                  (this.restoreHistory(H),
                                  this.cancelNavigationTransition(
                                    H,
                                    "At least one route resolver didn't emit any value."
                                  ));
                              },
                            })
                          );
                        }),
                        Et(H => {
                          const fe = new Vn(
                            H.id,
                            this.serializeUrl(H.extractedUrl),
                            this.serializeUrl(H.urlAfterRedirects),
                            H.targetSnapshot
                          );
                          this.triggerEvent(fe);
                        })
                      );
                  }),
                  Kr(() => this.afterPreactivation()),
                  Kr(F => {
                    const H = fe => {
                      const Ae = [];
                      fe.routeConfig?.loadComponent &&
                        !fe.routeConfig._loadedComponent &&
                        Ae.push(
                          this.configLoader.loadComponent(fe.routeConfig).pipe(
                            Et(Se => {
                              fe.component = Se;
                            }),
                            (0, yt.U)(() => {})
                          )
                        );
                      for (const Se of fe.children) Ae.push(...H(Se));
                      return Ae;
                    };
                    return de(H(F.targetSnapshot.root)).pipe(
                      st(),
                      (0, tt.q)(1)
                    );
                  }),
                  (0, yt.U)(F => {
                    const H = (function Yo(u, l, a) {
                      const f = ur(u, l._root, a ? a._root : void 0);
                      return new nn(f, l);
                    })(
                      this.routeReuseStrategy,
                      F.targetSnapshot,
                      F.currentRouterState
                    );
                    return { ...F, targetRouterState: H };
                  }),
                  Et(F => {
                    (this.currentUrlTree = F.urlAfterRedirects),
                      (this.rawUrlTree = this.urlHandlingStrategy.merge(
                        F.urlAfterRedirects,
                        F.rawUrl
                      )),
                      (this.routerState = F.targetRouterState),
                      'deferred' === this.urlUpdateStrategy &&
                        (F.extras.skipLocationChange ||
                          this.setBrowserUrl(this.rawUrlTree, F),
                        (this.browserUrlTree = F.urlAfterRedirects));
                  }),
                  ((u, l, a) =>
                    (0, yt.U)(
                      f => (
                        new G(
                          l,
                          f.targetRouterState,
                          f.currentRouterState,
                          a
                        ).activate(u),
                        f
                      )
                    ))(this.rootContexts, this.routeReuseStrategy, F =>
                    this.triggerEvent(F)
                  ),
                  Et({
                    next() {
                      w = !0;
                    },
                    complete() {
                      w = !0;
                    },
                  }),
                  vn(() => {
                    w ||
                      S ||
                      this.cancelNavigationTransition(
                        D,
                        `Navigation ID ${D.id} is not equal to the current navigation id ${this.navigationId}`
                      ),
                      this.currentNavigation?.id === D.id &&
                        (this.currentNavigation = null);
                  }),
                  nt(F => {
                    if (
                      ((S = !0),
                      (function kr(u) {
                        return u && u[dn];
                      })(F))
                    ) {
                      const H = ut(F.url);
                      H || ((this.navigated = !0), this.restoreHistory(D, !0));
                      const fe = new ct(
                        D.id,
                        this.serializeUrl(D.extractedUrl),
                        F.message
                      );
                      if ((f.next(fe), H)) {
                        const Ae = this.urlHandlingStrategy.merge(
                            F.url,
                            this.rawUrlTree
                          ),
                          Se = {
                            skipLocationChange: D.extras.skipLocationChange,
                            replaceUrl:
                              'eager' === this.urlUpdateStrategy ||
                              zs(D.source),
                          };
                        this.scheduleNavigation(Ae, 'imperative', null, Se, {
                          resolve: D.resolve,
                          reject: D.reject,
                          promise: D.promise,
                        });
                      } else D.resolve(!1);
                    } else {
                      this.restoreHistory(D, !0);
                      const H = new wt(
                        D.id,
                        this.serializeUrl(D.extractedUrl),
                        F
                      );
                      f.next(H);
                      try {
                        D.resolve(this.errorHandler(F));
                      } catch (fe) {
                        D.reject(fe);
                      }
                    }
                    return Y.E;
                  })
                );
              })
            );
          }
          resetRootComponentType(a) {
            (this.rootComponentType = a),
              (this.routerState.root.component = this.rootComponentType);
          }
          setTransition(a) {
            this.transitions.next({ ...this.transitions.value, ...a });
          }
          initialNavigation() {
            this.setUpLocationChangeListener(),
              0 === this.navigationId &&
                this.navigateByUrl(this.location.path(!0), { replaceUrl: !0 });
          }
          setUpLocationChangeListener() {
            this.locationSubscription ||
              (this.locationSubscription = this.location.subscribe(a => {
                const f = 'popstate' === a.type ? 'popstate' : 'hashchange';
                'popstate' === f &&
                  setTimeout(() => {
                    const D = { replaceUrl: !0 },
                      w = a.state?.navigationId ? a.state : null;
                    if (w) {
                      const F = { ...w };
                      delete F.navigationId,
                        delete F.ɵrouterPageId,
                        0 !== Object.keys(F).length && (D.state = F);
                    }
                    const S = this.parseUrl(a.url);
                    this.scheduleNavigation(S, f, w, D);
                  }, 0);
              }));
          }
          get url() {
            return this.serializeUrl(this.currentUrlTree);
          }
          getCurrentNavigation() {
            return this.currentNavigation;
          }
          triggerEvent(a) {
            this.events.next(a);
          }
          resetConfig(a) {
            (this.config = a.map(g)),
              (this.navigated = !1),
              (this.lastSuccessfulId = -1);
          }
          ngOnDestroy() {
            this.dispose();
          }
          dispose() {
            this.transitions.complete(),
              this.locationSubscription &&
                (this.locationSubscription.unsubscribe(),
                (this.locationSubscription = void 0)),
              (this.disposed = !0);
          }
          createUrlTree(a, f = {}) {
            const {
                relativeTo: D,
                queryParams: w,
                fragment: S,
                queryParamsHandling: F,
                preserveFragment: H,
              } = f,
              fe = D || this.routerState.root,
              Ae = H ? this.currentUrlTree.fragment : S;
            let Se = null;
            switch (F) {
              case 'merge':
                Se = { ...this.currentUrlTree.queryParams, ...w };
                break;
              case 'preserve':
                Se = this.currentUrlTree.queryParams;
                break;
              default:
                Se = w || null;
            }
            return (
              null !== Se && (Se = this.removeEmptyProps(Se)),
              (function Eo(u, l, a, f, D) {
                if (0 === a.length) return Mr(l.root, l.root, l.root, f, D);
                const w = (function Ko(u) {
                  if ('string' == typeof u[0] && 1 === u.length && '/' === u[0])
                    return new $r(!0, 0, u);
                  let l = 0,
                    a = !1;
                  const f = u.reduce((D, w, S) => {
                    if ('object' == typeof w && null != w) {
                      if (w.outlets) {
                        const F = {};
                        return (
                          Dt(w.outlets, (H, fe) => {
                            F[fe] = 'string' == typeof H ? H.split('/') : H;
                          }),
                          [...D, { outlets: F }]
                        );
                      }
                      if (w.segmentPath) return [...D, w.segmentPath];
                    }
                    return 'string' != typeof w
                      ? [...D, w]
                      : 0 === S
                      ? (w.split('/').forEach((F, H) => {
                          (0 == H && '.' === F) ||
                            (0 == H && '' === F
                              ? (a = !0)
                              : '..' === F
                              ? l++
                              : '' != F && D.push(F));
                        }),
                        D)
                      : [...D, w];
                  }, []);
                  return new $r(a, l, f);
                })(a);
                return w.toRoot()
                  ? Mr(l.root, l.root, new N([], {}), f, D)
                  : (function S(H) {
                      const fe = (function Un(u, l, a, f) {
                          return u.isAbsolute
                            ? new Gr(l.root, !0, 0)
                            : -1 === f
                            ? new Gr(a, a === l.root, 0)
                            : (function Zn(u, l, a) {
                                let f = u,
                                  D = l,
                                  w = a;
                                for (; w > D; ) {
                                  if (((w -= D), (f = f.parent), !f))
                                    throw new Error("Invalid number of '../'");
                                  D = f.segments.length;
                                }
                                return new Gr(f, !1, D - w);
                              })(
                                a,
                                f + (Hr(u.commands[0]) ? 0 : 1),
                                u.numberOfDoubleDots
                              );
                        })(w, l, u.snapshot?._urlSegment, H),
                        Ae = fe.processChildren
                          ? br(fe.segmentGroup, fe.index, w.commands)
                          : fr(fe.segmentGroup, fe.index, w.commands);
                      return Mr(l.root, fe.segmentGroup, Ae, f, D);
                    })(u.snapshot?._lastPathIndex);
              })(fe, this.currentUrlTree, a, Se, Ae ?? null)
            );
          }
          navigateByUrl(a, f = { skipLocationChange: !1 }) {
            const D = ut(a) ? a : this.parseUrl(a),
              w = this.urlHandlingStrategy.merge(D, this.rawUrlTree);
            return this.scheduleNavigation(w, 'imperative', null, f);
          }
          navigate(a, f = { skipLocationChange: !1 }) {
            return (
              (function ho(u) {
                for (let l = 0; l < u.length; l++) {
                  const a = u[l];
                  if (null == a)
                    throw new Error(
                      `The requested path contains ${a} segment at index ${l}`
                    );
                }
              })(a),
              this.navigateByUrl(this.createUrlTree(a, f), f)
            );
          }
          serializeUrl(a) {
            return this.urlSerializer.serialize(a);
          }
          parseUrl(a) {
            let f;
            try {
              f = this.urlSerializer.parse(a);
            } catch (D) {
              f = this.malformedUriErrorHandler(D, this.urlSerializer, a);
            }
            return f;
          }
          isActive(a, f) {
            let D;
            if (((D = !0 === f ? { ...si } : !1 === f ? { ...Gs } : f), ut(a)))
              return At(this.currentUrlTree, a, D);
            const w = this.parseUrl(a);
            return At(this.currentUrlTree, w, D);
          }
          removeEmptyProps(a) {
            return Object.keys(a).reduce((f, D) => {
              const w = a[D];
              return null != w && (f[D] = w), f;
            }, {});
          }
          processNavigations() {
            this.navigations.subscribe(
              a => {
                (this.navigated = !0),
                  (this.lastSuccessfulId = a.id),
                  (this.currentPageId = a.targetPageId),
                  this.events.next(
                    new cn(
                      a.id,
                      this.serializeUrl(a.extractedUrl),
                      this.serializeUrl(this.currentUrlTree)
                    )
                  ),
                  (this.lastSuccessfulNavigation = this.currentNavigation),
                  this.titleStrategy?.updateTitle(this.routerState.snapshot),
                  a.resolve(!0);
              },
              a => {
                this.console.warn(`Unhandled Navigation Error: ${a}`);
              }
            );
          }
          scheduleNavigation(a, f, D, w, S) {
            if (this.disposed) return Promise.resolve(!1);
            let F, H, fe;
            S
              ? ((F = S.resolve), (H = S.reject), (fe = S.promise))
              : (fe = new Promise((bt, Vt) => {
                  (F = bt), (H = Vt);
                }));
            const Ae = ++this.navigationId;
            let Se;
            return (
              'computed' === this.canceledNavigationResolution
                ? (0 === this.currentPageId && (D = this.location.getState()),
                  (Se =
                    D && D.ɵrouterPageId
                      ? D.ɵrouterPageId
                      : w.replaceUrl || w.skipLocationChange
                      ? this.browserPageId ?? 0
                      : (this.browserPageId ?? 0) + 1))
                : (Se = 0),
              this.setTransition({
                id: Ae,
                targetPageId: Se,
                source: f,
                restoredState: D,
                currentUrlTree: this.currentUrlTree,
                currentRawUrl: this.rawUrlTree,
                rawUrl: a,
                extras: w,
                resolve: F,
                reject: H,
                promise: fe,
                currentSnapshot: this.routerState.snapshot,
                currentRouterState: this.routerState,
              }),
              fe.catch(bt => Promise.reject(bt))
            );
          }
          setBrowserUrl(a, f) {
            const D = this.urlSerializer.serialize(a),
              w = {
                ...f.extras.state,
                ...this.generateNgRouterState(f.id, f.targetPageId),
              };
            this.location.isCurrentPathEqualTo(D) || f.extras.replaceUrl
              ? this.location.replaceState(D, '', w)
              : this.location.go(D, '', w);
          }
          restoreHistory(a, f = !1) {
            if ('computed' === this.canceledNavigationResolution) {
              const D = this.currentPageId - a.targetPageId;
              ('popstate' !== a.source &&
                'eager' !== this.urlUpdateStrategy &&
                this.currentUrlTree !== this.currentNavigation?.finalUrl) ||
              0 === D
                ? this.currentUrlTree === this.currentNavigation?.finalUrl &&
                  0 === D &&
                  (this.resetState(a),
                  (this.browserUrlTree = a.currentUrlTree),
                  this.resetUrlToCurrentUrlTree())
                : this.location.historyGo(D);
            } else
              'replace' === this.canceledNavigationResolution &&
                (f && this.resetState(a), this.resetUrlToCurrentUrlTree());
          }
          resetState(a) {
            (this.routerState = a.currentRouterState),
              (this.currentUrlTree = a.currentUrlTree),
              (this.rawUrlTree = this.urlHandlingStrategy.merge(
                this.currentUrlTree,
                a.rawUrl
              ));
          }
          resetUrlToCurrentUrlTree() {
            this.location.replaceState(
              this.urlSerializer.serialize(this.rawUrlTree),
              '',
              this.generateNgRouterState(
                this.lastSuccessfulId,
                this.currentPageId
              )
            );
          }
          cancelNavigationTransition(a, f) {
            const D = new ct(a.id, this.serializeUrl(a.extractedUrl), f);
            this.triggerEvent(D), a.resolve(!1);
          }
          generateNgRouterState(a, f) {
            return 'computed' === this.canceledNavigationResolution
              ? { navigationId: a, ɵrouterPageId: f }
              : { navigationId: a };
          }
        }
        return (
          (u.ɵfac = function (a) {
            I.$Z();
          }),
          (u.ɵprov = I.Yz7({ token: u, factory: u.ɵfac })),
          u
        );
      })();
      function zs(u) {
        return 'imperative' !== u;
      }
      class Ji {
        buildTitle(l) {
          let a,
            f = l.root;
          for (; void 0 !== f; )
            (a = this.getResolvedTitleForRoute(f) ?? a),
              (f = f.children.find(D => D.outlet === Ve));
          return a;
        }
        getResolvedTitleForRoute(l) {
          return l.data[fo];
        }
      }
      let Ws = (() => {
        class u extends Ji {
          constructor(a) {
            super(), (this.title = a);
          }
          updateTitle(a) {
            const f = this.buildTitle(a);
            void 0 !== f && this.title.setTitle(f);
          }
        }
        return (
          (u.ɵfac = function (a) {
            return new (a || u)(I.LFG(In.Dx));
          }),
          (u.ɵprov = I.Yz7({ token: u, factory: u.ɵfac, providedIn: 'root' })),
          u
        );
      })();
      class Ys {}
      class qs {
        preload(l, a) {
          return j(null);
        }
      }
      let po = (() => {
          class u {
            constructor(a, f, D, w, S) {
              (this.router = a),
                (this.injector = D),
                (this.preloadingStrategy = w),
                (this.loader = S);
            }
            setUpPreloading() {
              this.subscription = this.router.events
                .pipe(
                  (0, ce.h)(a => a instanceof cn),
                  k(() => this.preload())
                )
                .subscribe(() => {});
            }
            preload() {
              return this.processRoutes(this.injector, this.router.config);
            }
            ngOnDestroy() {
              this.subscription && this.subscription.unsubscribe();
            }
            processRoutes(a, f) {
              const D = [];
              for (const w of f) {
                w.providers &&
                  !w._injector &&
                  (w._injector = (0, I.MMx)(
                    w.providers,
                    a,
                    `Route: ${w.path}`
                  ));
                const S = w._injector ?? a,
                  F = w._loadedInjector ?? S;
                (w.loadChildren && !w._loadedRoutes) ||
                (w.loadComponent && !w._loadedComponent)
                  ? D.push(this.preloadConfig(S, w))
                  : (w.children || w._loadedRoutes) &&
                    D.push(
                      this.processRoutes(F, w.children ?? w._loadedRoutes)
                    );
              }
              return (0, ee.D)(D).pipe((0, oe.J)());
            }
            preloadConfig(a, f) {
              return this.preloadingStrategy.preload(f, () => {
                let D;
                D =
                  f.loadChildren && void 0 === f.canLoad
                    ? this.loader.loadChildren(a, f)
                    : j(null);
                const w = D.pipe(
                  (0, X.z)(S =>
                    null === S
                      ? j(void 0)
                      : ((f._loadedRoutes = S.routes),
                        (f._loadedInjector = S.injector),
                        this.processRoutes(S.injector ?? a, S.routes))
                  )
                );
                if (f.loadComponent && !f._loadedComponent) {
                  const S = this.loader.loadComponent(f);
                  return (0, ee.D)([w, S]).pipe((0, oe.J)());
                }
                return w;
              });
            }
          }
          return (
            (u.ɵfac = function (a) {
              return new (a || u)(
                I.LFG(gn),
                I.LFG(I.Sil),
                I.LFG(I.lqb),
                I.LFG(Ys),
                I.LFG(Qi)
              );
            }),
            (u.ɵprov = I.Yz7({ token: u, factory: u.ɵfac })),
            u
          );
        })(),
        Ro = (() => {
          class u {
            constructor(a, f, D = {}) {
              (this.router = a),
                (this.viewportScroller = f),
                (this.options = D),
                (this.lastId = 0),
                (this.lastSource = 'imperative'),
                (this.restoredId = 0),
                (this.store = {}),
                (D.scrollPositionRestoration =
                  D.scrollPositionRestoration || 'disabled'),
                (D.anchorScrolling = D.anchorScrolling || 'disabled');
            }
            init() {
              'disabled' !== this.options.scrollPositionRestoration &&
                this.viewportScroller.setHistoryScrollRestoration('manual'),
                (this.routerEventsSubscription = this.createScrollEvents()),
                (this.scrollEventsSubscription = this.consumeScrollEvents());
            }
            createScrollEvents() {
              return this.router.events.subscribe(a => {
                a instanceof Ne
                  ? ((this.store[this.lastId] =
                      this.viewportScroller.getScrollPosition()),
                    (this.lastSource = a.navigationTrigger),
                    (this.restoredId = a.restoredState
                      ? a.restoredState.navigationId
                      : 0))
                  : a instanceof cn &&
                    ((this.lastId = a.id),
                    this.scheduleScrollEvent(
                      a,
                      this.router.parseUrl(a.urlAfterRedirects).fragment
                    ));
              });
            }
            consumeScrollEvents() {
              return this.router.events.subscribe(a => {
                a instanceof $e &&
                  (a.position
                    ? 'top' === this.options.scrollPositionRestoration
                      ? this.viewportScroller.scrollToPosition([0, 0])
                      : 'enabled' === this.options.scrollPositionRestoration &&
                        this.viewportScroller.scrollToPosition(a.position)
                    : a.anchor && 'enabled' === this.options.anchorScrolling
                    ? this.viewportScroller.scrollToAnchor(a.anchor)
                    : 'disabled' !== this.options.scrollPositionRestoration &&
                      this.viewportScroller.scrollToPosition([0, 0]));
              });
            }
            scheduleScrollEvent(a, f) {
              this.router.triggerEvent(
                new $e(
                  a,
                  'popstate' === this.lastSource
                    ? this.store[this.restoredId]
                    : null,
                  f
                )
              );
            }
            ngOnDestroy() {
              this.routerEventsSubscription &&
                this.routerEventsSubscription.unsubscribe(),
                this.scrollEventsSubscription &&
                  this.scrollEventsSubscription.unsubscribe();
            }
          }
          return (
            (u.ɵfac = function (a) {
              I.$Z();
            }),
            (u.ɵprov = I.Yz7({ token: u, factory: u.ɵfac })),
            u
          );
        })();
      const tr = new I.OlP('ROUTER_CONFIGURATION'),
        Oo = new I.OlP('ROUTER_FORROOT_GUARD'),
        rl = [
          y.Ye,
          { provide: Pe, useClass: pn },
          {
            provide: gn,
            useFactory: function No(u, l, a, f, D, w, S = {}, F, H, fe, Ae) {
              const Se = new gn(null, u, l, a, f, D, Sn(w));
              return (
                fe && (Se.urlHandlingStrategy = fe),
                Ae && (Se.routeReuseStrategy = Ae),
                (Se.titleStrategy = H ?? F),
                (function il(u, l) {
                  u.errorHandler && (l.errorHandler = u.errorHandler),
                    u.malformedUriErrorHandler &&
                      (l.malformedUriErrorHandler = u.malformedUriErrorHandler),
                    u.onSameUrlNavigation &&
                      (l.onSameUrlNavigation = u.onSameUrlNavigation),
                    u.paramsInheritanceStrategy &&
                      (l.paramsInheritanceStrategy =
                        u.paramsInheritanceStrategy),
                    u.relativeLinkResolution &&
                      (l.relativeLinkResolution = u.relativeLinkResolution),
                    u.urlUpdateStrategy &&
                      (l.urlUpdateStrategy = u.urlUpdateStrategy),
                    u.canceledNavigationResolution &&
                      (l.canceledNavigationResolution =
                        u.canceledNavigationResolution);
                })(S, Se),
                Se
              );
            },
            deps: [
              Pe,
              Ut,
              y.Ye,
              I.zs3,
              I.Sil,
              Ki,
              tr,
              Ws,
              [Ji, new I.FiY()],
              [class Mc {}, new I.FiY()],
              [class tl {}, new I.FiY()],
            ],
          },
          Ut,
          {
            provide: lr,
            useFactory: function ea(u) {
              return u.routerState.root;
            },
            deps: [gn],
          },
          po,
          qs,
          class er {
            preload(l, a) {
              return a().pipe(nt(() => j(null)));
            }
          },
          { provide: tr, useValue: { enableTracing: !1 } },
          Qi,
        ];
      function Qs() {
        return new I.PXZ('Router', gn);
      }
      let Zs = (() => {
        class u {
          constructor(a, f) {}
          static forRoot(a, f) {
            return {
              ngModule: u,
              providers: [
                rl,
                Po(a),
                {
                  provide: Oo,
                  useFactory: ol,
                  deps: [[gn, new I.FiY(), new I.tp0()]],
                },
                { provide: tr, useValue: f || {} },
                {
                  provide: y.S$,
                  useFactory: Xs,
                  deps: [y.lw, [new I.tBr(y.mr), new I.FiY()], tr],
                },
                { provide: Ro, useFactory: Js, deps: [gn, y.EM, tr] },
                {
                  provide: Ys,
                  useExisting:
                    f && f.preloadingStrategy ? f.preloadingStrategy : qs,
                },
                { provide: I.PXZ, multi: !0, useFactory: Qs },
                [
                  li,
                  { provide: I.ip1, multi: !0, useFactory: go, deps: [li] },
                  { provide: Xi, useFactory: sl, deps: [li] },
                  { provide: I.tb, multi: !0, useExisting: Xi },
                ],
              ],
            };
          }
          static forChild(a) {
            return { ngModule: u, providers: [Po(a)] };
          }
        }
        return (
          (u.ɵfac = function (a) {
            return new (a || u)(I.LFG(Oo, 8), I.LFG(gn, 8));
          }),
          (u.ɵmod = I.oAB({ type: u })),
          (u.ɵinj = I.cJS({})),
          u
        );
      })();
      function Js(u, l, a) {
        return a.scrollOffset && l.setOffset(a.scrollOffset), new Ro(u, l, a);
      }
      function Xs(u, l, a = {}) {
        return a.useHash ? new y.Do(u, l) : new y.b0(u, l);
      }
      function ol(u) {
        return 'guarded';
      }
      function Po(u) {
        return [
          { provide: I.deG, multi: !0, useValue: u },
          { provide: Ki, multi: !0, useValue: u },
        ];
      }
      let li = (() => {
        class u {
          constructor(a) {
            (this.injector = a),
              (this.initNavigation = !1),
              (this.destroyed = !1),
              (this.resultOfPreactivationDone = new re.x());
          }
          appInitializer() {
            return this.injector.get(y.V_, Promise.resolve(null)).then(() => {
              if (this.destroyed) return Promise.resolve(!0);
              let f = null;
              const D = new Promise(F => (f = F)),
                w = this.injector.get(gn),
                S = this.injector.get(tr);
              return (
                'disabled' === S.initialNavigation
                  ? (w.setUpLocationChangeListener(), f(!0))
                  : 'enabledBlocking' === S.initialNavigation
                  ? ((w.afterPreactivation = () =>
                      this.initNavigation
                        ? j(void 0)
                        : ((this.initNavigation = !0),
                          f(!0),
                          this.resultOfPreactivationDone)),
                    w.initialNavigation())
                  : f(!0),
                D
              );
            });
          }
          bootstrapListener(a) {
            const f = this.injector.get(tr),
              D = this.injector.get(po),
              w = this.injector.get(Ro),
              S = this.injector.get(gn),
              F = this.injector.get(I.z2F);
            a === F.components[0] &&
              (('enabledNonBlocking' === f.initialNavigation ||
                void 0 === f.initialNavigation) &&
                S.initialNavigation(),
              D.setUpPreloading(),
              w.init(),
              S.resetRootComponentType(F.componentTypes[0]),
              this.resultOfPreactivationDone.next(void 0),
              this.resultOfPreactivationDone.complete());
          }
          ngOnDestroy() {
            this.destroyed = !0;
          }
        }
        return (
          (u.ɵfac = function (a) {
            return new (a || u)(I.LFG(I.zs3));
          }),
          (u.ɵprov = I.Yz7({ token: u, factory: u.ɵfac })),
          u
        );
      })();
      function go(u) {
        return u.appInitializer.bind(u);
      }
      function sl(u) {
        return u.bootstrapListener.bind(u);
      }
      const Xi = new I.OlP('Router Initializer');
    },
  },
  Ke => {
    Ke((Ke.s = 8416));
  },
]);
