'use strict';
(self.webpackChunkchatbot_management_app =
  self.webpackChunkchatbot_management_app || []).push([
  ['main'],
  {
    963: (et, ge, v) => {
      v.d(ge, { H: () => ne });
      var s = v(542),
        _ = v(5289),
        j = v(4650),
        X = v(9590);
      let ne = (() => {
        class A {
          constructor(q, fe) {
            (this.router = q),
              (this.broadcastService = fe),
              (this.isLocaleListPage = !1),
              q.events.subscribe(re => {
                re instanceof s.m2 && (this.currentUrl = re.url);
              });
          }
          ngOnInit() {
            (this.isLocaleListPage =
              '/' == this.currentUrl || '/locales' == this.currentUrl),
              this.broadcastService
                .on(_.T.SELECTED_LOCALE_EVENT)
                .subscribe(() => (this.isLocaleListPage = !1));
          }
          ngOnChanges() {
            (this.isLocaleListPage =
              '/' == this.currentUrl || '/locales' == this.currentUrl),
              this.broadcastService
                .on(_.T.SELECTED_LOCALE_EVENT)
                .subscribe(() => (this.isLocaleListPage = !1));
          }
        }
        return (
          (A.ɵfac = function (q) {
            return new (q || A)(j.Y36(s.F0), j.Y36(X.M));
          }),
          (A.ɵcmp = j.Xpm({
            type: A,
            selectors: [['app-base']],
            features: [j.TTD],
            decls: 5,
            vars: 1,
            consts: [
              [1, 'mfe-main-container'],
              [3, 'isLocaleListPage'],
              [1, 'mfe-base-container'],
            ],
            template: function (q, fe) {
              1 & q &&
                (j.TgZ(0, 'div', 0)(1, 'aside'),
                j._UZ(2, 'app-sidebar', 1),
                j.qZA(),
                j.TgZ(3, 'div', 2),
                j._UZ(4, 'router-outlet'),
                j.qZA()()),
                2 & q &&
                  (j.xp6(2), j.Q6J('isLocaleListPage', fe.isLocaleListPage));
            },
            styles: [
              '.mfe-main-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.mfe-main-container[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]{position:fixed;height:100vh;width:15%}@media screen and (max-width: 1500px){.mfe-main-container[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]{width:25%}}.mfe-main-container[_ngcontent-%COMP%]   .mfe-base-container[_ngcontent-%COMP%]{width:85%;margin-left:15%}@media screen and (max-width: 1500px){.mfe-main-container[_ngcontent-%COMP%]   .mfe-base-container[_ngcontent-%COMP%]{width:75%;margin-left:25%}}',
            ],
          })),
          A
        );
      })();
    },
    356: (et, ge, v) => {
      v.d(ge, { A: () => ot });
      var s = v(4650),
        _ = v(5289),
        j = v(542),
        X = v(4004),
        ne = v(319),
        A = (() => {
          return (
            ((k = A || (A = {})).SUCCESS = 'success'),
            (k.FAILED = 'failed'),
            (k.ALERT = 'alert'),
            (k.INFO = 'info'),
            A
          );
          var k;
        })(),
        K = v(9590),
        q = v(6895);
      function fe(k, ve) {
        1 & k &&
          (s.ynx(0),
          s.O4$(),
          s.TgZ(1, 'svg', 7),
          s._UZ(2, 'path', 8),
          s.qZA(),
          s.BQk());
      }
      function re(k, ve) {
        1 & k &&
          (s.ynx(0),
          s.O4$(),
          s.TgZ(1, 'svg', 7),
          s._UZ(2, 'path', 9),
          s.qZA(),
          s.BQk());
      }
      function oe(k, ve) {
        1 & k &&
          (s.ynx(0),
          s.O4$(),
          s.TgZ(1, 'svg', 7),
          s._UZ(2, 'path', 10),
          s.qZA(),
          s.BQk());
      }
      function ie(k, ve) {
        1 & k &&
          (s.ynx(0),
          s.O4$(),
          s.TgZ(1, 'svg', 7),
          s._UZ(2, 'path', 11),
          s.qZA(),
          s.BQk());
      }
      function Ge(k, ve) {
        if (1 & k) {
          const P = s.EpF();
          s.TgZ(0, 'div', 1)(1, 'p')(2, 'i'),
            s.ynx(3, 2),
            s.YNc(4, fe, 3, 0, 'ng-container', 3),
            s.YNc(5, re, 3, 0, 'ng-container', 3),
            s.YNc(6, oe, 3, 0, 'ng-container', 3),
            s.YNc(7, ie, 3, 0, 'ng-container', 3),
            s.BQk(),
            s.qZA(),
            s._uU(8),
            s.TgZ(9, 'span', 4),
            s.NdJ('click', function () {
              s.CHM(P);
              const rt = s.oxw();
              return s.KtG(rt.closeNotification());
            }),
            s.O4$(),
            s.TgZ(10, 'svg', 5),
            s._UZ(11, 'path', 6),
            s.qZA()()()();
        }
        if (2 & k) {
          const P = s.oxw();
          s.xp6(1),
            s.Tol(P.notificationType),
            s.xp6(2),
            s.Q6J('ngSwitch', P.notificationType),
            s.xp6(1),
            s.Q6J('ngSwitchCase', P.eNotificationType.SUCCESS),
            s.xp6(1),
            s.Q6J('ngSwitchCase', P.eNotificationType.FAILED),
            s.xp6(1),
            s.Q6J('ngSwitchCase', P.eNotificationType.ALERT),
            s.xp6(1),
            s.Q6J('ngSwitchCase', P.eNotificationType.INFO),
            s.xp6(1),
            s.hij(' ', P.notificationText, ' ');
        }
      }
      let we = (() => {
        class k {
          constructor(P) {
            (this.broadcastService = P),
              (this.notificationType = 'success'),
              (this.eNotificationType = A);
          }
          ngOnInit() {
            this.broadcastService
              .on(_.T.SHOW_NOTIFICATION_EVENT)
              .subscribe(P => {
                let W = P.payload;
                (this.notificationText = W.msg),
                  (this.notificationType = W.type);
              });
          }
          closeNotification() {
            this.broadcastService.dispatch(
              new ne.q(_.T.HIDE_NOTIFICATION_EVENT, {
                id: 'notification',
                data: { type: 'notification' },
              })
            );
          }
        }
        return (
          (k.ɵfac = function (P) {
            return new (P || k)(s.Y36(K.M));
          }),
          (k.ɵcmp = s.Xpm({
            type: k,
            selectors: [['notification-card']],
            decls: 1,
            vars: 1,
            consts: [
              ['class', 'card', 4, 'ngIf'],
              [1, 'card'],
              [3, 'ngSwitch'],
              [4, 'ngSwitchCase'],
              [1, 'cross-button', 3, 'click'],
              [
                'width',
                '9',
                'height',
                '8',
                'viewBox',
                '0 0 9 8',
                'fill',
                'none',
                'xmlns',
                'http://www.w3.org/2000/svg',
              ],
              [
                'd',
                'M7.82742 0.313988C7.7724 0.258848 7.70696 0.215087 7.63488 0.185226C7.5628 0.155364 7.48549 0.13999 7.40742 0.13999C7.32934 0.13999 7.25204 0.155364 7.17996 0.185226C7.10788 0.215087 7.04244 0.258848 6.98742 0.313988L4.05142 3.22871L1.11542 0.313988C1.07212 0.232417 1.01018 0.162105 0.934602 0.108713C0.859019 0.0553209 0.7719 0.0203397 0.680256 0.00658567C0.588612 -0.00716839 0.495005 0.000688747 0.406969 0.0295246C0.318932 0.0583604 0.238927 0.107369 0.173393 0.172606C0.107859 0.237843 0.0586264 0.317486 0.0296591 0.405123C0.000691885 0.49276 -0.00720106 0.585942 0.00661568 0.67717C0.0204324 0.768398 0.0555728 0.855123 0.109208 0.930363C0.162843 1.0056 0.233475 1.06726 0.315418 1.11036L3.20342 4.07286L0.267418 6.99554C0.161434 7.10877 0.103735 7.25852 0.106478 7.41326C0.109221 7.56799 0.17219 7.71563 0.282121 7.82506C0.392051 7.93449 0.540359 7.99718 0.6958 7.99991C0.851241 8.00264 1.00168 7.9452 1.11542 7.8397L4.05142 4.91701L6.98742 7.8397C7.10307 7.9323 7.2491 7.97895 7.39728 7.97063C7.54547 7.96231 7.6853 7.8996 7.78976 7.79463C7.89421 7.68966 7.95587 7.54988 7.96283 7.40229C7.96978 7.2547 7.92154 7.10979 7.82742 6.99554L4.89942 4.07286L7.82742 1.15018C7.88281 1.0954 7.92677 1.03026 7.95677 0.95851C7.98677 0.886756 8.00221 0.809803 8.00221 0.732082C8.00221 0.654362 7.98677 0.577409 7.95677 0.505654C7.92677 0.4339 7.88281 0.368761 7.82742 0.313988Z',
                'fill',
                '#4B6479',
              ],
              [
                'width',
                '28',
                'height',
                '28',
                'viewBox',
                '0 0 28 28',
                'fill',
                'none',
                'xmlns',
                'http://www.w3.org/2000/svg',
              ],
              [
                'd',
                'M14 0C6.26875 0 0 6.26875 0 14C0 21.7313 6.26875 28 14 28C21.7313 28 28 21.7313 28 14C28 6.26875 21.7313 0 14 0ZM20.0469 9.42813L13.4656 18.5531C13.3736 18.6815 13.2524 18.7861 13.1119 18.8583C12.9714 18.9305 12.8157 18.9681 12.6578 18.9681C12.4999 18.9681 12.3442 18.9305 12.2037 18.8583C12.0632 18.7861 11.942 18.6815 11.85 18.5531L7.95312 13.1531C7.83437 12.9875 7.95312 12.7563 8.15625 12.7563H9.62187C9.94063 12.7563 10.2437 12.9094 10.4312 13.1719L12.6562 16.2594L17.5688 9.44687C17.7563 9.1875 18.0562 9.03125 18.3781 9.03125H19.8438C20.0469 9.03125 20.1656 9.2625 20.0469 9.42813Z',
                'fill',
                '#01B2C0',
              ],
              [
                'd',
                'M14 0C6.26875 0 0 6.26875 0 14C0 21.7313 6.26875 28 14 28C21.7313 28 28 21.7313 28 14C28 6.26875 21.7313 0 14 0ZM19.1688 19.3188L17.1063 19.3094L14 15.6063L10.8969 19.3062L8.83125 19.3156C8.69375 19.3156 8.58125 19.2062 8.58125 19.0656C8.58125 19.0062 8.60312 18.95 8.64062 18.9031L12.7063 14.0594L8.64062 9.21875C8.60286 9.17295 8.58191 9.11561 8.58125 9.05625C8.58125 8.91875 8.69375 8.80625 8.83125 8.80625L10.8969 8.81563L14 12.5188L17.1031 8.81875L19.1656 8.80937C19.3031 8.80937 19.4156 8.91875 19.4156 9.05937C19.4156 9.11875 19.3938 9.175 19.3563 9.22188L15.2969 14.0625L19.3594 18.9062C19.3969 18.9531 19.4188 19.0094 19.4188 19.0688C19.4188 19.2063 19.3063 19.3188 19.1688 19.3188Z',
                'fill',
                '#DE350B',
              ],
              [
                'd',
                'M14 0C6.26875 0 0 6.26875 0 14C0 21.7312 6.26875 28 14 28C21.7312 28 28 21.7312 28 14C28 6.26875 21.7312 0 14 0ZM13 7.25C13 7.1125 13.1125 7 13.25 7H14.75C14.8875 7 15 7.1125 15 7.25V15.75C15 15.8875 14.8875 16 14.75 16H13.25C13.1125 16 13 15.8875 13 15.75V7.25ZM14 21C13.6075 20.992 13.2337 20.8304 12.959 20.55C12.6842 20.2696 12.5303 19.8926 12.5303 19.5C12.5303 19.1074 12.6842 18.7304 12.959 18.45C13.2337 18.1696 13.6075 18.008 14 18C14.3925 18.008 14.7663 18.1696 15.041 18.45C15.3158 18.7304 15.4697 19.1074 15.4697 19.5C15.4697 19.8926 15.3158 20.2696 15.041 20.55C14.7663 20.8304 14.3925 20.992 14 21Z',
                'fill',
                '#C24B00',
              ],
              [
                'd',
                'M14 0C6.26875 0 0 6.26875 0 14C0 21.7313 6.26875 28 14 28C21.7313 28 28 21.7313 28 14C28 6.26875 21.7313 0 14 0ZM15 20.75C15 20.8875 14.8875 21 14.75 21H13.25C13.1125 21 13 20.8875 13 20.75V12.25C13 12.1125 13.1125 12 13.25 12H14.75C14.8875 12 15 12.1125 15 12.25V20.75ZM14 10C13.6075 9.99199 13.2337 9.83043 12.959 9.55C12.6842 9.26957 12.5303 8.8926 12.5303 8.5C12.5303 8.1074 12.6842 7.73043 12.959 7.45C13.2337 7.16957 13.6075 7.00801 14 7C14.3925 7.00801 14.7663 7.16957 15.041 7.45C15.3158 7.73043 15.4697 8.1074 15.4697 8.5C15.4697 8.8926 15.3158 9.26957 15.041 9.55C14.7663 9.83043 14.3925 9.99199 14 10Z',
                'fill',
                '#01B2C0',
              ],
            ],
            template: function (P, W) {
              1 & P && s.YNc(0, Ge, 12, 8, 'div', 0),
                2 & P && s.Q6J('ngIf', W.notificationText);
            },
            dependencies: [q.O5, q.RF, q.n9],
            styles: [
              '.card[_ngcontent-%COMP%]{position:relative}.card[_ngcontent-%COMP%]   .success[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{animation:card-fade-in .1s 1 forwards;padding:20px 24px;background:#FFFFFF;box-shadow:0 0 8px #00000026;border-radius:4px;font-size:14px;display:flex;width:326px;align-items:center;gap:18px;justify-content:flex-start;position:fixed;left:40px;bottom:30px}.card[_ngcontent-%COMP%]   .failed[_ngcontent-%COMP%]{position:fixed;right:40px;top:30px;padding:20px 24px;background:#FFFFFF;box-shadow:0 0 8px #00000026;border-radius:4px;font-size:14px;display:flex;width:326px;align-items:center;gap:18px;justify-content:flex-start}.card[_ngcontent-%COMP%]   .cross-button[_ngcontent-%COMP%]{position:absolute;cursor:pointer;right:29px}@keyframes card-fade-in{0%{opacity:0}to{opacity:1}}',
            ],
          })),
          k
        );
      })();
      var ee = v(7420),
        Ee = v(4172),
        $ = v(1094);
      const ae = function (k, ve) {
        return { 'range-disabled': k, range: ve };
      };
      let $e = (() => {
        class k {
          constructor(P) {
            (this.broadcastService = P),
              (this.value = 1),
              (this.isDisabled = !1),
              (this.changedValue = new s.vpe());
          }
          ngOnInit() {}
          changeValue(P) {
            console.log(P.target.value),
              (this.isActive = P.target.checked),
              this.broadcastService.dispatch(
                new ne.q(_.T.RANGE_EMITTER, {
                  id: this.id,
                  data: {
                    type: 'range',
                    isActive: P.target.value,
                    configurationKey: this.configurationKey,
                  },
                })
              ),
              this.changedValue.emit({});
          }
        }
        return (
          (k.ɵfac = function (P) {
            return new (P || k)(s.Y36(K.M));
          }),
          (k.ɵcmp = s.Xpm({
            type: k,
            selectors: [['app-progressbar']],
            inputs: {
              value: 'value',
              isDisabled: 'isDisabled',
              id: 'id',
              configurationKey: 'configurationKey',
            },
            outputs: { changedValue: 'changedValue' },
            decls: 6,
            vars: 6,
            consts: [
              [1, 'progress-container'],
              [
                'type',
                'range',
                'id',
                'myRange',
                'min',
                '0',
                'max',
                '1',
                'step',
                '0.01',
                1,
                'range',
                3,
                'ngClass',
                'value',
                'disabled',
                'change',
              ],
              [1, 'max-value'],
              [1, 'min-value'],
            ],
            template: function (P, W) {
              1 & P &&
                (s.TgZ(0, 'div', 0)(1, 'input', 1),
                s.NdJ('change', function (dt) {
                  return W.changeValue(dt);
                }),
                s.qZA(),
                s.TgZ(2, 'div', 2),
                s._uU(3, ' 1 '),
                s.qZA(),
                s.TgZ(4, 'div', 3),
                s._uU(5, ' 0 '),
                s.qZA()()),
                2 & P &&
                  (s.xp6(1),
                  s.Q6J('ngClass', s.WLB(3, ae, W.isDisabled, !W.isDisabled))(
                    'value',
                    W.value
                  )('disabled', W.isDisabled));
            },
            dependencies: [q.mk],
            styles: [
              '.progress-container[_ngcontent-%COMP%]{position:relative}.progress-container[_ngcontent-%COMP%]   .range[_ngcontent-%COMP%], .progress-container[_ngcontent-%COMP%]   .range-disabled[_ngcontent-%COMP%]{width:-webkit-fill-available;-webkit-appearance:none;appearance:none;overflow:hidden;cursor:pointer}.progress-container[_ngcontent-%COMP%]   .max-value[_ngcontent-%COMP%], .progress-container[_ngcontent-%COMP%]   .min-value[_ngcontent-%COMP%]{position:absolute;color:#4b6479;top:30px;font-size:20px;line-height:16px}.progress-container[_ngcontent-%COMP%]   .max-value[_ngcontent-%COMP%]{left:98%}.progress-container[_ngcontent-%COMP%]   .min-value[_ngcontent-%COMP%]{left:0%}.range[_ngcontent-%COMP%]::-webkit-slider-runnable-track{height:30px;background:linear-gradient(to bottom,#01B2C0,#01B2C0) 100% 50%/100% 3px no-repeat transparent}.range-disabled[_ngcontent-%COMP%]::-webkit-slider-runnable-track{height:30px;background:linear-gradient(to bottom,#93A1AB,#93A1AB) 100% 50%/100% 3px no-repeat transparent}.range[_ngcontent-%COMP%]::-webkit-slider-thumb{position:relative;-webkit-appearance:none;appearance:none;height:13px;width:13px;background:#01B2C0;border-radius:50%;top:50%;margin-top:-6.5px;box-shadow:1px 0 0 -5px #bdc1cc,2px 0 0 -5px #bdc1cc,3px 0 0 -5px #bdc1cc,4px 0 0 -5px #bdc1cc,5px 0 0 -5px #bdc1cc,6px 0 0 -5px #bdc1cc,7px 0 0 -5px #bdc1cc,8px 0 0 -5px #bdc1cc,9px 0 0 -5px #bdc1cc,10px 0 0 -5px #bdc1cc,11px 0 0 -5px #bdc1cc,12px 0 0 -5px #bdc1cc,13px 0 0 -5px #bdc1cc,14px 0 0 -5px #bdc1cc,15px 0 0 -5px #bdc1cc,16px 0 0 -5px #bdc1cc,17px 0 0 -5px #bdc1cc,18px 0 0 -5px #bdc1cc,19px 0 0 -5px #bdc1cc,20px 0 0 -5px #bdc1cc,21px 0 0 -5px #bdc1cc,22px 0 0 -5px #bdc1cc,23px 0 0 -5px #bdc1cc,24px 0 0 -5px #bdc1cc,25px 0 0 -5px #bdc1cc,26px 0 0 -5px #bdc1cc,27px 0 0 -5px #bdc1cc,28px 0 0 -5px #bdc1cc,29px 0 0 -5px #bdc1cc,30px 0 0 -5px #bdc1cc,31px 0 0 -5px #bdc1cc,32px 0 0 -5px #bdc1cc,33px 0 0 -5px #bdc1cc,34px 0 0 -5px #bdc1cc,35px 0 0 -5px #bdc1cc,36px 0 0 -5px #bdc1cc,37px 0 0 -5px #bdc1cc,38px 0 0 -5px #bdc1cc,39px 0 0 -5px #bdc1cc,40px 0 0 -5px #bdc1cc,41px 0 0 -5px #bdc1cc,42px 0 0 -5px #bdc1cc,43px 0 0 -5px #bdc1cc,44px 0 0 -5px #bdc1cc,45px 0 0 -5px #bdc1cc,46px 0 0 -5px #bdc1cc,47px 0 0 -5px #bdc1cc,48px 0 0 -5px #bdc1cc,49px 0 0 -5px #bdc1cc,50px 0 0 -5px #bdc1cc,51px 0 0 -5px #bdc1cc,52px 0 0 -5px #bdc1cc,53px 0 0 -5px #bdc1cc,54px 0 0 -5px #bdc1cc,55px 0 0 -5px #bdc1cc,56px 0 0 -5px #bdc1cc,57px 0 0 -5px #bdc1cc,58px 0 0 -5px #bdc1cc,59px 0 0 -5px #bdc1cc,60px 0 0 -5px #bdc1cc,61px 0 0 -5px #bdc1cc,62px 0 0 -5px #bdc1cc,63px 0 0 -5px #bdc1cc,64px 0 0 -5px #bdc1cc,65px 0 0 -5px #bdc1cc,66px 0 0 -5px #bdc1cc,67px 0 0 -5px #bdc1cc,68px 0 0 -5px #bdc1cc,69px 0 0 -5px #bdc1cc,70px 0 0 -5px #bdc1cc,71px 0 0 -5px #bdc1cc,72px 0 0 -5px #bdc1cc,73px 0 0 -5px #bdc1cc,74px 0 0 -5px #bdc1cc,75px 0 0 -5px #bdc1cc,76px 0 0 -5px #bdc1cc,77px 0 0 -5px #bdc1cc,78px 0 0 -5px #bdc1cc,79px 0 0 -5px #bdc1cc,80px 0 0 -5px #bdc1cc,81px 0 0 -5px #bdc1cc,82px 0 0 -5px #bdc1cc,83px 0 0 -5px #bdc1cc,84px 0 0 -5px #bdc1cc,85px 0 0 -5px #bdc1cc,86px 0 0 -5px #bdc1cc,87px 0 0 -5px #bdc1cc,88px 0 0 -5px #bdc1cc,89px 0 0 -5px #bdc1cc,90px 0 0 -5px #bdc1cc,91px 0 0 -5px #bdc1cc,92px 0 0 -5px #bdc1cc,93px 0 0 -5px #bdc1cc,94px 0 0 -5px #bdc1cc,95px 0 0 -5px #bdc1cc,96px 0 0 -5px #bdc1cc,97px 0 0 -5px #bdc1cc,98px 0 0 -5px #bdc1cc,99px 0 0 -5px #bdc1cc,100px 0 0 -5px #bdc1cc,101px 0 0 -5px #bdc1cc,102px 0 0 -5px #bdc1cc,103px 0 0 -5px #bdc1cc,104px 0 0 -5px #bdc1cc,105px 0 0 -5px #bdc1cc,106px 0 0 -5px #bdc1cc,107px 0 0 -5px #bdc1cc,108px 0 0 -5px #bdc1cc,109px 0 0 -5px #bdc1cc,110px 0 0 -5px #bdc1cc,111px 0 0 -5px #bdc1cc,112px 0 0 -5px #bdc1cc,113px 0 0 -5px #bdc1cc,114px 0 0 -5px #bdc1cc,115px 0 0 -5px #bdc1cc,116px 0 0 -5px #bdc1cc,117px 0 0 -5px #bdc1cc,118px 0 0 -5px #bdc1cc,119px 0 0 -5px #bdc1cc,120px 0 0 -5px #bdc1cc,121px 0 0 -5px #bdc1cc,122px 0 0 -5px #bdc1cc,123px 0 0 -5px #bdc1cc,124px 0 0 -5px #bdc1cc,125px 0 0 -5px #bdc1cc,126px 0 0 -5px #bdc1cc,127px 0 0 -5px #bdc1cc,128px 0 0 -5px #bdc1cc,129px 0 0 -5px #bdc1cc,130px 0 0 -5px #bdc1cc,131px 0 0 -5px #bdc1cc,132px 0 0 -5px #bdc1cc,133px 0 0 -5px #bdc1cc,134px 0 0 -5px #bdc1cc,135px 0 0 -5px #bdc1cc,136px 0 0 -5px #bdc1cc,137px 0 0 -5px #bdc1cc,138px 0 0 -5px #bdc1cc,139px 0 0 -5px #bdc1cc,140px 0 0 -5px #bdc1cc,141px 0 0 -5px #bdc1cc,142px 0 0 -5px #bdc1cc,143px 0 0 -5px #bdc1cc,144px 0 0 -5px #bdc1cc,145px 0 0 -5px #bdc1cc,146px 0 0 -5px #bdc1cc,147px 0 0 -5px #bdc1cc,148px 0 0 -5px #bdc1cc,149px 0 0 -5px #bdc1cc,150px 0 0 -5px #bdc1cc,151px 0 0 -5px #bdc1cc,152px 0 0 -5px #bdc1cc,153px 0 0 -5px #bdc1cc,154px 0 0 -5px #bdc1cc,155px 0 0 -5px #bdc1cc,156px 0 0 -5px #bdc1cc,157px 0 0 -5px #bdc1cc,158px 0 0 -5px #bdc1cc,159px 0 0 -5px #bdc1cc,160px 0 0 -5px #bdc1cc,161px 0 0 -5px #bdc1cc,162px 0 0 -5px #bdc1cc,163px 0 0 -5px #bdc1cc,164px 0 0 -5px #bdc1cc,165px 0 0 -5px #bdc1cc,166px 0 0 -5px #bdc1cc,167px 0 0 -5px #bdc1cc,168px 0 0 -5px #bdc1cc,169px 0 0 -5px #bdc1cc,170px 0 0 -5px #bdc1cc,171px 0 0 -5px #bdc1cc,172px 0 0 -5px #bdc1cc,173px 0 0 -5px #bdc1cc,174px 0 0 -5px #bdc1cc,175px 0 0 -5px #bdc1cc,176px 0 0 -5px #bdc1cc,177px 0 0 -5px #bdc1cc,178px 0 0 -5px #bdc1cc,179px 0 0 -5px #bdc1cc,180px 0 0 -5px #bdc1cc,181px 0 0 -5px #bdc1cc,182px 0 0 -5px #bdc1cc,183px 0 0 -5px #bdc1cc,184px 0 0 -5px #bdc1cc,185px 0 0 -5px #bdc1cc,186px 0 0 -5px #bdc1cc,187px 0 0 -5px #bdc1cc,188px 0 0 -5px #bdc1cc,189px 0 0 -5px #bdc1cc,190px 0 0 -5px #bdc1cc,191px 0 0 -5px #bdc1cc,192px 0 0 -5px #bdc1cc,193px 0 0 -5px #bdc1cc,194px 0 0 -5px #bdc1cc,195px 0 0 -5px #bdc1cc,196px 0 0 -5px #bdc1cc,197px 0 0 -5px #bdc1cc,198px 0 0 -5px #bdc1cc,199px 0 0 -5px #bdc1cc,200px 0 0 -5px #bdc1cc,201px 0 0 -5px #bdc1cc,202px 0 0 -5px #bdc1cc,203px 0 0 -5px #bdc1cc,204px 0 0 -5px #bdc1cc,205px 0 0 -5px #bdc1cc,206px 0 0 -5px #bdc1cc,207px 0 0 -5px #bdc1cc,208px 0 0 -5px #bdc1cc,209px 0 0 -5px #bdc1cc,210px 0 0 -5px #bdc1cc,211px 0 0 -5px #bdc1cc,212px 0 0 -5px #bdc1cc,213px 0 0 -5px #bdc1cc,214px 0 0 -5px #bdc1cc,215px 0 0 -5px #bdc1cc,216px 0 0 -5px #bdc1cc,217px 0 0 -5px #bdc1cc,218px 0 0 -5px #bdc1cc,219px 0 0 -5px #bdc1cc,220px 0 0 -5px #bdc1cc,221px 0 0 -5px #bdc1cc,222px 0 0 -5px #bdc1cc,223px 0 0 -5px #bdc1cc,224px 0 0 -5px #bdc1cc,225px 0 0 -5px #bdc1cc,226px 0 0 -5px #bdc1cc,227px 0 0 -5px #bdc1cc,228px 0 0 -5px #bdc1cc,229px 0 0 -5px #bdc1cc,230px 0 0 -5px #bdc1cc,231px 0 0 -5px #bdc1cc,232px 0 0 -5px #bdc1cc,233px 0 0 -5px #bdc1cc,234px 0 0 -5px #bdc1cc,235px 0 0 -5px #bdc1cc,236px 0 0 -5px #bdc1cc,237px 0 0 -5px #bdc1cc,238px 0 0 -5px #bdc1cc,239px 0 0 -5px #bdc1cc,240px 0 0 -5px #bdc1cc,241px 0 0 -5px #bdc1cc,242px 0 0 -5px #bdc1cc,243px 0 0 -5px #bdc1cc,244px 0 0 -5px #bdc1cc,245px 0 0 -5px #bdc1cc,246px 0 0 -5px #bdc1cc,247px 0 0 -5px #bdc1cc,248px 0 0 -5px #bdc1cc,249px 0 0 -5px #bdc1cc,250px 0 0 -5px #bdc1cc,251px 0 0 -5px #bdc1cc,252px 0 0 -5px #bdc1cc,253px 0 0 -5px #bdc1cc,254px 0 0 -5px #bdc1cc,255px 0 0 -5px #bdc1cc,256px 0 0 -5px #bdc1cc,257px 0 0 -5px #bdc1cc,258px 0 0 -5px #bdc1cc,259px 0 0 -5px #bdc1cc,260px 0 0 -5px #bdc1cc,261px 0 0 -5px #bdc1cc,262px 0 0 -5px #bdc1cc,263px 0 0 -5px #bdc1cc,264px 0 0 -5px #bdc1cc,265px 0 0 -5px #bdc1cc,266px 0 0 -5px #bdc1cc,267px 0 0 -5px #bdc1cc,268px 0 0 -5px #bdc1cc,269px 0 0 -5px #bdc1cc,270px 0 0 -5px #bdc1cc,271px 0 0 -5px #bdc1cc,272px 0 0 -5px #bdc1cc,273px 0 0 -5px #bdc1cc,274px 0 0 -5px #bdc1cc,275px 0 0 -5px #bdc1cc,276px 0 0 -5px #bdc1cc,277px 0 0 -5px #bdc1cc,278px 0 0 -5px #bdc1cc,279px 0 0 -5px #bdc1cc,280px 0 0 -5px #bdc1cc,281px 0 0 -5px #bdc1cc,282px 0 0 -5px #bdc1cc,283px 0 0 -5px #bdc1cc,284px 0 0 -5px #bdc1cc,285px 0 0 -5px #bdc1cc,286px 0 0 -5px #bdc1cc,287px 0 0 -5px #bdc1cc,288px 0 0 -5px #bdc1cc,289px 0 0 -5px #bdc1cc,290px 0 0 -5px #bdc1cc,291px 0 0 -5px #bdc1cc,292px 0 0 -5px #bdc1cc,293px 0 0 -5px #bdc1cc,294px 0 0 -5px #bdc1cc,295px 0 0 -5px #bdc1cc,296px 0 0 -5px #bdc1cc,297px 0 0 -5px #bdc1cc,298px 0 0 -5px #bdc1cc,299px 0 0 -5px #bdc1cc,300px 0 0 -5px #bdc1cc,301px 0 0 -5px #bdc1cc,302px 0 0 -5px #bdc1cc,303px 0 0 -5px #bdc1cc,304px 0 0 -5px #bdc1cc,305px 0 0 -5px #bdc1cc,306px 0 0 -5px #bdc1cc,307px 0 0 -5px #bdc1cc,308px 0 0 -5px #bdc1cc,309px 0 0 -5px #bdc1cc,310px 0 0 -5px #bdc1cc,311px 0 0 -5px #bdc1cc,312px 0 0 -5px #bdc1cc,313px 0 0 -5px #bdc1cc,314px 0 0 -5px #bdc1cc,315px 0 0 -5px #bdc1cc,316px 0 0 -5px #bdc1cc,317px 0 0 -5px #bdc1cc,318px 0 0 -5px #bdc1cc,319px 0 0 -5px #bdc1cc,320px 0 0 -5px #bdc1cc,321px 0 0 -5px #bdc1cc,322px 0 0 -5px #bdc1cc,323px 0 0 -5px #bdc1cc,324px 0 0 -5px #bdc1cc,325px 0 0 -5px #bdc1cc,326px 0 0 -5px #bdc1cc,327px 0 0 -5px #bdc1cc,328px 0 0 -5px #bdc1cc,329px 0 0 -5px #bdc1cc,330px 0 0 -5px #bdc1cc,331px 0 0 -5px #bdc1cc,332px 0 0 -5px #bdc1cc,333px 0 0 -5px #bdc1cc,334px 0 0 -5px #bdc1cc,335px 0 0 -5px #bdc1cc,336px 0 0 -5px #bdc1cc,337px 0 0 -5px #bdc1cc,338px 0 0 -5px #bdc1cc,339px 0 0 -5px #bdc1cc,340px 0 0 -5px #bdc1cc,341px 0 0 -5px #bdc1cc,342px 0 0 -5px #bdc1cc,343px 0 0 -5px #bdc1cc,344px 0 0 -5px #bdc1cc,345px 0 0 -5px #bdc1cc,346px 0 0 -5px #bdc1cc,347px 0 0 -5px #bdc1cc,348px 0 0 -5px #bdc1cc,349px 0 0 -5px #bdc1cc,350px 0 0 -5px #bdc1cc,351px 0 0 -5px #bdc1cc,352px 0 0 -5px #bdc1cc,353px 0 0 -5px #bdc1cc,354px 0 0 -5px #bdc1cc,355px 0 0 -5px #bdc1cc,356px 0 0 -5px #bdc1cc,357px 0 0 -5px #bdc1cc,358px 0 0 -5px #bdc1cc,359px 0 0 -5px #bdc1cc,360px 0 0 -5px #bdc1cc,361px 0 0 -5px #bdc1cc,362px 0 0 -5px #bdc1cc,363px 0 0 -5px #bdc1cc,364px 0 0 -5px #bdc1cc,365px 0 0 -5px #bdc1cc,366px 0 0 -5px #bdc1cc,367px 0 0 -5px #bdc1cc,368px 0 0 -5px #bdc1cc,369px 0 0 -5px #bdc1cc,370px 0 0 -5px #bdc1cc,371px 0 0 -5px #bdc1cc,372px 0 0 -5px #bdc1cc,373px 0 0 -5px #bdc1cc,374px 0 0 -5px #bdc1cc,375px 0 0 -5px #bdc1cc,376px 0 0 -5px #bdc1cc,377px 0 0 -5px #bdc1cc,378px 0 0 -5px #bdc1cc,379px 0 0 -5px #bdc1cc,380px 0 0 -5px #bdc1cc,381px 0 0 -5px #bdc1cc,382px 0 0 -5px #bdc1cc,383px 0 0 -5px #bdc1cc,384px 0 0 -5px #bdc1cc,385px 0 0 -5px #bdc1cc,386px 0 0 -5px #bdc1cc,387px 0 0 -5px #bdc1cc,388px 0 0 -5px #bdc1cc,389px 0 0 -5px #bdc1cc,390px 0 0 -5px #bdc1cc,391px 0 0 -5px #bdc1cc,392px 0 0 -5px #bdc1cc,393px 0 0 -5px #bdc1cc,394px 0 0 -5px #bdc1cc,395px 0 0 -5px #bdc1cc,396px 0 0 -5px #bdc1cc,397px 0 0 -5px #bdc1cc,398px 0 0 -5px #bdc1cc,399px 0 0 -5px #bdc1cc,400px 0 0 -5px #bdc1cc,401px 0 0 -5px #bdc1cc,402px 0 0 -5px #bdc1cc,403px 0 0 -5px #bdc1cc,404px 0 0 -5px #bdc1cc,405px 0 0 -5px #bdc1cc,406px 0 0 -5px #bdc1cc,407px 0 0 -5px #bdc1cc,408px 0 0 -5px #bdc1cc,409px 0 0 -5px #bdc1cc,410px 0 0 -5px #bdc1cc,411px 0 0 -5px #bdc1cc,412px 0 0 -5px #bdc1cc,413px 0 0 -5px #bdc1cc,414px 0 0 -5px #bdc1cc,415px 0 0 -5px #bdc1cc,416px 0 0 -5px #bdc1cc,417px 0 0 -5px #bdc1cc,418px 0 0 -5px #bdc1cc,419px 0 0 -5px #bdc1cc,420px 0 0 -5px #bdc1cc,421px 0 0 -5px #bdc1cc,422px 0 0 -5px #bdc1cc,423px 0 0 -5px #bdc1cc,424px 0 0 -5px #bdc1cc,425px 0 0 -5px #bdc1cc,426px 0 0 -5px #bdc1cc,427px 0 0 -5px #bdc1cc,428px 0 0 -5px #bdc1cc,429px 0 0 -5px #bdc1cc,430px 0 0 -5px #bdc1cc,431px 0 0 -5px #bdc1cc,432px 0 0 -5px #bdc1cc,433px 0 0 -5px #bdc1cc,434px 0 0 -5px #bdc1cc,435px 0 0 -5px #bdc1cc,436px 0 0 -5px #bdc1cc,437px 0 0 -5px #bdc1cc,438px 0 0 -5px #bdc1cc,439px 0 0 -5px #bdc1cc,440px 0 0 -5px #bdc1cc,441px 0 0 -5px #bdc1cc,442px 0 0 -5px #bdc1cc,443px 0 0 -5px #bdc1cc,444px 0 0 -5px #bdc1cc,445px 0 0 -5px #bdc1cc,446px 0 0 -5px #bdc1cc,447px 0 0 -5px #bdc1cc,448px 0 0 -5px #bdc1cc,449px 0 0 -5px #bdc1cc,450px 0 0 -5px #bdc1cc,451px 0 0 -5px #bdc1cc,452px 0 0 -5px #bdc1cc,453px 0 0 -5px #bdc1cc,454px 0 0 -5px #bdc1cc,455px 0 0 -5px #bdc1cc,456px 0 0 -5px #bdc1cc,457px 0 0 -5px #bdc1cc,458px 0 0 -5px #bdc1cc,459px 0 0 -5px #bdc1cc,460px 0 0 -5px #bdc1cc,461px 0 0 -5px #bdc1cc,462px 0 0 -5px #bdc1cc,463px 0 0 -5px #bdc1cc,464px 0 0 -5px #bdc1cc,465px 0 0 -5px #bdc1cc,466px 0 0 -5px #bdc1cc,467px 0 0 -5px #bdc1cc,468px 0 0 -5px #bdc1cc,469px 0 0 -5px #bdc1cc,470px 0 0 -5px #bdc1cc,471px 0 0 -5px #bdc1cc,472px 0 0 -5px #bdc1cc,473px 0 0 -5px #bdc1cc,474px 0 0 -5px #bdc1cc,475px 0 0 -5px #bdc1cc,476px 0 0 -5px #bdc1cc,477px 0 0 -5px #bdc1cc,478px 0 0 -5px #bdc1cc,479px 0 0 -5px #bdc1cc,480px 0 0 -5px #bdc1cc,481px 0 0 -5px #bdc1cc,482px 0 0 -5px #bdc1cc,483px 0 0 -5px #bdc1cc,484px 0 0 -5px #bdc1cc,485px 0 0 -5px #bdc1cc,486px 0 0 -5px #bdc1cc,487px 0 0 -5px #bdc1cc,488px 0 0 -5px #bdc1cc,489px 0 0 -5px #bdc1cc,490px 0 0 -5px #bdc1cc,491px 0 0 -5px #bdc1cc,492px 0 0 -5px #bdc1cc,493px 0 0 -5px #bdc1cc,494px 0 0 -5px #bdc1cc,495px 0 0 -5px #bdc1cc,496px 0 0 -5px #bdc1cc,497px 0 0 -5px #bdc1cc,498px 0 0 -5px #bdc1cc,499px 0 0 -5px #bdc1cc,500px 0 0 -5px #bdc1cc,501px 0 0 -5px #bdc1cc,502px 0 0 -5px #bdc1cc,503px 0 0 -5px #bdc1cc,504px 0 0 -5px #bdc1cc,505px 0 0 -5px #bdc1cc,506px 0 0 -5px #bdc1cc,507px 0 0 -5px #bdc1cc,508px 0 0 -5px #bdc1cc,509px 0 0 -5px #bdc1cc,510px 0 0 -5px #bdc1cc,511px 0 0 -5px #bdc1cc,512px 0 0 -5px #bdc1cc,513px 0 0 -5px #bdc1cc,514px 0 0 -5px #bdc1cc,515px 0 0 -5px #bdc1cc,516px 0 0 -5px #bdc1cc,517px 0 0 -5px #bdc1cc,518px 0 0 -5px #bdc1cc,519px 0 0 -5px #bdc1cc,520px 0 0 -5px #bdc1cc,521px 0 0 -5px #bdc1cc,522px 0 0 -5px #bdc1cc,523px 0 0 -5px #bdc1cc,524px 0 0 -5px #bdc1cc,525px 0 0 -5px #bdc1cc,526px 0 0 -5px #bdc1cc,527px 0 0 -5px #bdc1cc,528px 0 0 -5px #bdc1cc,529px 0 0 -5px #bdc1cc,530px 0 0 -5px #bdc1cc,531px 0 0 -5px #bdc1cc,532px 0 0 -5px #bdc1cc,533px 0 0 -5px #bdc1cc,534px 0 0 -5px #bdc1cc,535px 0 0 -5px #bdc1cc,536px 0 0 -5px #bdc1cc,537px 0 0 -5px #bdc1cc,538px 0 0 -5px #bdc1cc,539px 0 0 -5px #bdc1cc,540px 0 0 -5px #bdc1cc,541px 0 0 -5px #bdc1cc,542px 0 0 -5px #bdc1cc,543px 0 0 -5px #bdc1cc,544px 0 0 -5px #bdc1cc,545px 0 0 -5px #bdc1cc,546px 0 0 -5px #bdc1cc,547px 0 0 -5px #bdc1cc,548px 0 0 -5px #bdc1cc,549px 0 0 -5px #bdc1cc,550px 0 0 -5px #bdc1cc,551px 0 0 -5px #bdc1cc,552px 0 0 -5px #bdc1cc,553px 0 0 -5px #bdc1cc,554px 0 0 -5px #bdc1cc,555px 0 0 -5px #bdc1cc,556px 0 0 -5px #bdc1cc,557px 0 0 -5px #bdc1cc,558px 0 0 -5px #bdc1cc,559px 0 0 -5px #bdc1cc,560px 0 0 -5px #bdc1cc,561px 0 0 -5px #bdc1cc,562px 0 0 -5px #bdc1cc,563px 0 0 -5px #bdc1cc,564px 0 0 -5px #bdc1cc,565px 0 0 -5px #bdc1cc,566px 0 0 -5px #bdc1cc,567px 0 0 -5px #bdc1cc,568px 0 0 -5px #bdc1cc,569px 0 0 -5px #bdc1cc,570px 0 0 -5px #bdc1cc,571px 0 0 -5px #bdc1cc,572px 0 0 -5px #bdc1cc,573px 0 0 -5px #bdc1cc,574px 0 0 -5px #bdc1cc,575px 0 0 -5px #bdc1cc,576px 0 0 -5px #bdc1cc,577px 0 0 -5px #bdc1cc,578px 0 0 -5px #bdc1cc,579px 0 0 -5px #bdc1cc,580px 0 0 -5px #bdc1cc,581px 0 0 -5px #bdc1cc,582px 0 0 -5px #bdc1cc,583px 0 0 -5px #bdc1cc,584px 0 0 -5px #bdc1cc,585px 0 0 -5px #bdc1cc,586px 0 0 -5px #bdc1cc,587px 0 0 -5px #bdc1cc,588px 0 0 -5px #bdc1cc,589px 0 0 -5px #bdc1cc,590px 0 0 -5px #bdc1cc,591px 0 0 -5px #bdc1cc,592px 0 0 -5px #bdc1cc,593px 0 0 -5px #bdc1cc,594px 0 0 -5px #bdc1cc,595px 0 0 -5px #bdc1cc,596px 0 0 -5px #bdc1cc,597px 0 0 -5px #bdc1cc,598px 0 0 -5px #bdc1cc,599px 0 0 -5px #bdc1cc,600px 0 0 -5px #bdc1cc,601px 0 0 -5px #bdc1cc,602px 0 0 -5px #bdc1cc,603px 0 0 -5px #bdc1cc,604px 0 0 -5px #bdc1cc,605px 0 0 -5px #bdc1cc,606px 0 0 -5px #bdc1cc,607px 0 0 -5px #bdc1cc,608px 0 0 -5px #bdc1cc,609px 0 0 -5px #bdc1cc,610px 0 0 -5px #bdc1cc,611px 0 0 -5px #bdc1cc,612px 0 0 -5px #bdc1cc,613px 0 0 -5px #bdc1cc,614px 0 0 -5px #bdc1cc,615px 0 0 -5px #bdc1cc,616px 0 0 -5px #bdc1cc,617px 0 0 -5px #bdc1cc,618px 0 0 -5px #bdc1cc,619px 0 0 -5px #bdc1cc,620px 0 0 -5px #bdc1cc,621px 0 0 -5px #bdc1cc,622px 0 0 -5px #bdc1cc,623px 0 0 -5px #bdc1cc,624px 0 0 -5px #bdc1cc,625px 0 0 -5px #bdc1cc,626px 0 0 -5px #bdc1cc,627px 0 0 -5px #bdc1cc,628px 0 0 -5px #bdc1cc,629px 0 0 -5px #bdc1cc,630px 0 0 -5px #bdc1cc,631px 0 0 -5px #bdc1cc,632px 0 0 -5px #bdc1cc,633px 0 0 -5px #bdc1cc,634px 0 0 -5px #bdc1cc,635px 0 0 -5px #bdc1cc,636px 0 0 -5px #bdc1cc,637px 0 0 -5px #bdc1cc,638px 0 0 -5px #bdc1cc,639px 0 0 -5px #bdc1cc,640px 0 0 -5px #bdc1cc,641px 0 0 -5px #bdc1cc,642px 0 0 -5px #bdc1cc,643px 0 0 -5px #bdc1cc,644px 0 0 -5px #bdc1cc,645px 0 0 -5px #bdc1cc,646px 0 0 -5px #bdc1cc,647px 0 0 -5px #bdc1cc,648px 0 0 -5px #bdc1cc,649px 0 0 -5px #bdc1cc,650px 0 0 -5px #bdc1cc,651px 0 0 -5px #bdc1cc,652px 0 0 -5px #bdc1cc,653px 0 0 -5px #bdc1cc,654px 0 0 -5px #bdc1cc,655px 0 0 -5px #bdc1cc,656px 0 0 -5px #bdc1cc,657px 0 0 -5px #bdc1cc,658px 0 0 -5px #bdc1cc,659px 0 0 -5px #bdc1cc,660px 0 0 -5px #bdc1cc,661px 0 0 -5px #bdc1cc,662px 0 0 -5px #bdc1cc,663px 0 0 -5px #bdc1cc,664px 0 0 -5px #bdc1cc,665px 0 0 -5px #bdc1cc,666px 0 0 -5px #bdc1cc,667px 0 0 -5px #bdc1cc,668px 0 0 -5px #bdc1cc,669px 0 0 -5px #bdc1cc,670px 0 0 -5px #bdc1cc,671px 0 0 -5px #bdc1cc,672px 0 0 -5px #bdc1cc,673px 0 0 -5px #bdc1cc,674px 0 0 -5px #bdc1cc,675px 0 0 -5px #bdc1cc,676px 0 0 -5px #bdc1cc,677px 0 0 -5px #bdc1cc,678px 0 0 -5px #bdc1cc,679px 0 0 -5px #bdc1cc,680px 0 0 -5px #bdc1cc,681px 0 0 -5px #bdc1cc,682px 0 0 -5px #bdc1cc,683px 0 0 -5px #bdc1cc,684px 0 0 -5px #bdc1cc,685px 0 0 -5px #bdc1cc,686px 0 0 -5px #bdc1cc,687px 0 0 -5px #bdc1cc,688px 0 0 -5px #bdc1cc,689px 0 0 -5px #bdc1cc,690px 0 0 -5px #bdc1cc,691px 0 0 -5px #bdc1cc,692px 0 0 -5px #bdc1cc,693px 0 0 -5px #bdc1cc,694px 0 0 -5px #bdc1cc,695px 0 0 -5px #bdc1cc,696px 0 0 -5px #bdc1cc,697px 0 0 -5px #bdc1cc,698px 0 0 -5px #bdc1cc,699px 0 0 -5px #bdc1cc,700px 0 0 -5px #bdc1cc,701px 0 0 -5px #bdc1cc,702px 0 0 -5px #bdc1cc,703px 0 0 -5px #bdc1cc,704px 0 0 -5px #bdc1cc,705px 0 0 -5px #bdc1cc,706px 0 0 -5px #bdc1cc,707px 0 0 -5px #bdc1cc,708px 0 0 -5px #bdc1cc,709px 0 0 -5px #bdc1cc,710px 0 0 -5px #bdc1cc,711px 0 0 -5px #bdc1cc,712px 0 0 -5px #bdc1cc,713px 0 0 -5px #bdc1cc,714px 0 0 -5px #bdc1cc,715px 0 0 -5px #bdc1cc,716px 0 0 -5px #bdc1cc,717px 0 0 -5px #bdc1cc,718px 0 0 -5px #bdc1cc,719px 0 0 -5px #bdc1cc,720px 0 0 -5px #bdc1cc,721px 0 0 -5px #bdc1cc,722px 0 0 -5px #bdc1cc,723px 0 0 -5px #bdc1cc,724px 0 0 -5px #bdc1cc,725px 0 0 -5px #bdc1cc,726px 0 0 -5px #bdc1cc,727px 0 0 -5px #bdc1cc,728px 0 0 -5px #bdc1cc,729px 0 0 -5px #bdc1cc,730px 0 0 -5px #bdc1cc,731px 0 0 -5px #bdc1cc,732px 0 0 -5px #bdc1cc,733px 0 0 -5px #bdc1cc,734px 0 0 -5px #bdc1cc,735px 0 0 -5px #bdc1cc,736px 0 0 -5px #bdc1cc,737px 0 0 -5px #bdc1cc,738px 0 0 -5px #bdc1cc,739px 0 0 -5px #bdc1cc,740px 0 0 -5px #bdc1cc,741px 0 0 -5px #bdc1cc,742px 0 0 -5px #bdc1cc,743px 0 0 -5px #bdc1cc,744px 0 0 -5px #bdc1cc,745px 0 0 -5px #bdc1cc,746px 0 0 -5px #bdc1cc,747px 0 0 -5px #bdc1cc,748px 0 0 -5px #bdc1cc,749px 0 0 -5px #bdc1cc,750px 0 0 -5px #bdc1cc,751px 0 0 -5px #bdc1cc,752px 0 0 -5px #bdc1cc,753px 0 0 -5px #bdc1cc,754px 0 0 -5px #bdc1cc,755px 0 0 -5px #bdc1cc,756px 0 0 -5px #bdc1cc,757px 0 0 -5px #bdc1cc,758px 0 0 -5px #bdc1cc,759px 0 0 -5px #bdc1cc,760px 0 0 -5px #bdc1cc,761px 0 0 -5px #bdc1cc,762px 0 0 -5px #bdc1cc,763px 0 0 -5px #bdc1cc,764px 0 0 -5px #bdc1cc,765px 0 0 -5px #bdc1cc,766px 0 0 -5px #bdc1cc,767px 0 0 -5px #bdc1cc,768px 0 0 -5px #bdc1cc,769px 0 0 -5px #bdc1cc,770px 0 0 -5px #bdc1cc,771px 0 0 -5px #bdc1cc,772px 0 0 -5px #bdc1cc,773px 0 0 -5px #bdc1cc,774px 0 0 -5px #bdc1cc,775px 0 0 -5px #bdc1cc,776px 0 0 -5px #bdc1cc,777px 0 0 -5px #bdc1cc,778px 0 0 -5px #bdc1cc,779px 0 0 -5px #bdc1cc,780px 0 0 -5px #bdc1cc,781px 0 0 -5px #bdc1cc,782px 0 0 -5px #bdc1cc,783px 0 0 -5px #bdc1cc,784px 0 0 -5px #bdc1cc,785px 0 0 -5px #bdc1cc,786px 0 0 -5px #bdc1cc,787px 0 0 -5px #bdc1cc,788px 0 0 -5px #bdc1cc,789px 0 0 -5px #bdc1cc,790px 0 0 -5px #bdc1cc,791px 0 0 -5px #bdc1cc,792px 0 0 -5px #bdc1cc,793px 0 0 -5px #bdc1cc,794px 0 0 -5px #bdc1cc,795px 0 0 -5px #bdc1cc,796px 0 0 -5px #bdc1cc,797px 0 0 -5px #bdc1cc,798px 0 0 -5px #bdc1cc,799px 0 0 -5px #bdc1cc,800px 0 0 -5px #bdc1cc,801px 0 0 -5px #bdc1cc,802px 0 0 -5px #bdc1cc,803px 0 0 -5px #bdc1cc,804px 0 0 -5px #bdc1cc,805px 0 0 -5px #bdc1cc,806px 0 0 -5px #bdc1cc,807px 0 0 -5px #bdc1cc,808px 0 0 -5px #bdc1cc,809px 0 0 -5px #bdc1cc,810px 0 0 -5px #bdc1cc,811px 0 0 -5px #bdc1cc,812px 0 0 -5px #bdc1cc,813px 0 0 -5px #bdc1cc,814px 0 0 -5px #bdc1cc,815px 0 0 -5px #bdc1cc,816px 0 0 -5px #bdc1cc,817px 0 0 -5px #bdc1cc,818px 0 0 -5px #bdc1cc,819px 0 0 -5px #bdc1cc,820px 0 0 -5px #bdc1cc,821px 0 0 -5px #bdc1cc,822px 0 0 -5px #bdc1cc,823px 0 0 -5px #bdc1cc,824px 0 0 -5px #bdc1cc,825px 0 0 -5px #bdc1cc,826px 0 0 -5px #bdc1cc,827px 0 0 -5px #bdc1cc,828px 0 0 -5px #bdc1cc,829px 0 0 -5px #bdc1cc,830px 0 0 -5px #bdc1cc,831px 0 0 -5px #bdc1cc,832px 0 0 -5px #bdc1cc,833px 0 0 -5px #bdc1cc,834px 0 0 -5px #bdc1cc,835px 0 0 -5px #bdc1cc,836px 0 0 -5px #bdc1cc,837px 0 0 -5px #bdc1cc,838px 0 0 -5px #bdc1cc,839px 0 0 -5px #bdc1cc,840px 0 0 -5px #bdc1cc,841px 0 0 -5px #bdc1cc,842px 0 0 -5px #bdc1cc,843px 0 0 -5px #bdc1cc,844px 0 0 -5px #bdc1cc,845px 0 0 -5px #bdc1cc,846px 0 0 -5px #bdc1cc,847px 0 0 -5px #bdc1cc,848px 0 0 -5px #bdc1cc,849px 0 0 -5px #bdc1cc,850px 0 0 -5px #bdc1cc,851px 0 0 -5px #bdc1cc,852px 0 0 -5px #bdc1cc,853px 0 0 -5px #bdc1cc,854px 0 0 -5px #bdc1cc,855px 0 0 -5px #bdc1cc,856px 0 0 -5px #bdc1cc,857px 0 0 -5px #bdc1cc,858px 0 0 -5px #bdc1cc,859px 0 0 -5px #bdc1cc,860px 0 0 -5px #bdc1cc,861px 0 0 -5px #bdc1cc,862px 0 0 -5px #bdc1cc,863px 0 0 -5px #bdc1cc,864px 0 0 -5px #bdc1cc,865px 0 0 -5px #bdc1cc,866px 0 0 -5px #bdc1cc,867px 0 0 -5px #bdc1cc,868px 0 0 -5px #bdc1cc,869px 0 0 -5px #bdc1cc,870px 0 0 -5px #bdc1cc,871px 0 0 -5px #bdc1cc,872px 0 0 -5px #bdc1cc,873px 0 0 -5px #bdc1cc,874px 0 0 -5px #bdc1cc,875px 0 0 -5px #bdc1cc,876px 0 0 -5px #bdc1cc,877px 0 0 -5px #bdc1cc,878px 0 0 -5px #bdc1cc,879px 0 0 -5px #bdc1cc,880px 0 0 -5px #bdc1cc,881px 0 0 -5px #bdc1cc,882px 0 0 -5px #bdc1cc,883px 0 0 -5px #bdc1cc,884px 0 0 -5px #bdc1cc,885px 0 0 -5px #bdc1cc,886px 0 0 -5px #bdc1cc,887px 0 0 -5px #bdc1cc,888px 0 0 -5px #bdc1cc,889px 0 0 -5px #bdc1cc,890px 0 0 -5px #bdc1cc,891px 0 0 -5px #bdc1cc,892px 0 0 -5px #bdc1cc,893px 0 0 -5px #bdc1cc,894px 0 0 -5px #bdc1cc,895px 0 0 -5px #bdc1cc,896px 0 0 -5px #bdc1cc,897px 0 0 -5px #bdc1cc,898px 0 0 -5px #bdc1cc,899px 0 0 -5px #bdc1cc,900px 0 0 -5px #bdc1cc,901px 0 0 -5px #bdc1cc,902px 0 0 -5px #bdc1cc,903px 0 0 -5px #bdc1cc,904px 0 0 -5px #bdc1cc,905px 0 0 -5px #bdc1cc,906px 0 0 -5px #bdc1cc,907px 0 0 -5px #bdc1cc,908px 0 0 -5px #bdc1cc,909px 0 0 -5px #bdc1cc,910px 0 0 -5px #bdc1cc,911px 0 0 -5px #bdc1cc,912px 0 0 -5px #bdc1cc,913px 0 0 -5px #bdc1cc,914px 0 0 -5px #bdc1cc,915px 0 0 -5px #bdc1cc,916px 0 0 -5px #bdc1cc,917px 0 0 -5px #bdc1cc,918px 0 0 -5px #bdc1cc,919px 0 0 -5px #bdc1cc,920px 0 0 -5px #bdc1cc,921px 0 0 -5px #bdc1cc,922px 0 0 -5px #bdc1cc,923px 0 0 -5px #bdc1cc,924px 0 0 -5px #bdc1cc,925px 0 0 -5px #bdc1cc,926px 0 0 -5px #bdc1cc,927px 0 0 -5px #bdc1cc,928px 0 0 -5px #bdc1cc,929px 0 0 -5px #bdc1cc,930px 0 0 -5px #bdc1cc,931px 0 0 -5px #bdc1cc,932px 0 0 -5px #bdc1cc,933px 0 0 -5px #bdc1cc,934px 0 0 -5px #bdc1cc,935px 0 0 -5px #bdc1cc,936px 0 0 -5px #bdc1cc,937px 0 0 -5px #bdc1cc,938px 0 0 -5px #bdc1cc,939px 0 0 -5px #bdc1cc,940px 0 0 -5px #bdc1cc,941px 0 0 -5px #bdc1cc,942px 0 0 -5px #bdc1cc,943px 0 0 -5px #bdc1cc,944px 0 0 -5px #bdc1cc,945px 0 0 -5px #bdc1cc,946px 0 0 -5px #bdc1cc,947px 0 0 -5px #bdc1cc,948px 0 0 -5px #bdc1cc,949px 0 0 -5px #bdc1cc,950px 0 0 -5px #bdc1cc,951px 0 0 -5px #bdc1cc,952px 0 0 -5px #bdc1cc,953px 0 0 -5px #bdc1cc,954px 0 0 -5px #bdc1cc,955px 0 0 -5px #bdc1cc,956px 0 0 -5px #bdc1cc,957px 0 0 -5px #bdc1cc,958px 0 0 -5px #bdc1cc,959px 0 0 -5px #bdc1cc,960px 0 0 -5px #bdc1cc,961px 0 0 -5px #bdc1cc,962px 0 0 -5px #bdc1cc,963px 0 0 -5px #bdc1cc,964px 0 0 -5px #bdc1cc,965px 0 0 -5px #bdc1cc,966px 0 0 -5px #bdc1cc,967px 0 0 -5px #bdc1cc,968px 0 0 -5px #bdc1cc,969px 0 0 -5px #bdc1cc,970px 0 0 -5px #bdc1cc,971px 0 0 -5px #bdc1cc,972px 0 0 -5px #bdc1cc,973px 0 0 -5px #bdc1cc,974px 0 0 -5px #bdc1cc,975px 0 0 -5px #bdc1cc,976px 0 0 -5px #bdc1cc,977px 0 0 -5px #bdc1cc,978px 0 0 -5px #bdc1cc,979px 0 0 -5px #bdc1cc,980px 0 0 -5px #bdc1cc,981px 0 0 -5px #bdc1cc,982px 0 0 -5px #bdc1cc,983px 0 0 -5px #bdc1cc,984px 0 0 -5px #bdc1cc,985px 0 0 -5px #bdc1cc,986px 0 0 -5px #bdc1cc,987px 0 0 -5px #bdc1cc,988px 0 0 -5px #bdc1cc,989px 0 0 -5px #bdc1cc,990px 0 0 -5px #bdc1cc,991px 0 0 -5px #bdc1cc,992px 0 0 -5px #bdc1cc,993px 0 0 -5px #bdc1cc,994px 0 0 -5px #bdc1cc,995px 0 0 -5px #bdc1cc,996px 0 0 -5px #bdc1cc,997px 0 0 -5px #bdc1cc,998px 0 0 -5px #bdc1cc,999px 0 0 -5px #bdc1cc,1000px 0 0 -5px #bdc1cc}.range-disabled[_ngcontent-%COMP%]::-webkit-slider-thumb{position:relative;-webkit-appearance:none;appearance:none;height:13px;width:13px;background:#93A1AB;border-radius:50%;top:50%;margin-top:-6.5px;box-shadow:1px 0 0 -5px #bdc1cc,2px 0 0 -5px #bdc1cc,3px 0 0 -5px #bdc1cc,4px 0 0 -5px #bdc1cc,5px 0 0 -5px #bdc1cc,6px 0 0 -5px #bdc1cc,7px 0 0 -5px #bdc1cc,8px 0 0 -5px #bdc1cc,9px 0 0 -5px #bdc1cc,10px 0 0 -5px #bdc1cc,11px 0 0 -5px #bdc1cc,12px 0 0 -5px #bdc1cc,13px 0 0 -5px #bdc1cc,14px 0 0 -5px #bdc1cc,15px 0 0 -5px #bdc1cc,16px 0 0 -5px #bdc1cc,17px 0 0 -5px #bdc1cc,18px 0 0 -5px #bdc1cc,19px 0 0 -5px #bdc1cc,20px 0 0 -5px #bdc1cc,21px 0 0 -5px #bdc1cc,22px 0 0 -5px #bdc1cc,23px 0 0 -5px #bdc1cc,24px 0 0 -5px #bdc1cc,25px 0 0 -5px #bdc1cc,26px 0 0 -5px #bdc1cc,27px 0 0 -5px #bdc1cc,28px 0 0 -5px #bdc1cc,29px 0 0 -5px #bdc1cc,30px 0 0 -5px #bdc1cc,31px 0 0 -5px #bdc1cc,32px 0 0 -5px #bdc1cc,33px 0 0 -5px #bdc1cc,34px 0 0 -5px #bdc1cc,35px 0 0 -5px #bdc1cc,36px 0 0 -5px #bdc1cc,37px 0 0 -5px #bdc1cc,38px 0 0 -5px #bdc1cc,39px 0 0 -5px #bdc1cc,40px 0 0 -5px #bdc1cc,41px 0 0 -5px #bdc1cc,42px 0 0 -5px #bdc1cc,43px 0 0 -5px #bdc1cc,44px 0 0 -5px #bdc1cc,45px 0 0 -5px #bdc1cc,46px 0 0 -5px #bdc1cc,47px 0 0 -5px #bdc1cc,48px 0 0 -5px #bdc1cc,49px 0 0 -5px #bdc1cc,50px 0 0 -5px #bdc1cc,51px 0 0 -5px #bdc1cc,52px 0 0 -5px #bdc1cc,53px 0 0 -5px #bdc1cc,54px 0 0 -5px #bdc1cc,55px 0 0 -5px #bdc1cc,56px 0 0 -5px #bdc1cc,57px 0 0 -5px #bdc1cc,58px 0 0 -5px #bdc1cc,59px 0 0 -5px #bdc1cc,60px 0 0 -5px #bdc1cc,61px 0 0 -5px #bdc1cc,62px 0 0 -5px #bdc1cc,63px 0 0 -5px #bdc1cc,64px 0 0 -5px #bdc1cc,65px 0 0 -5px #bdc1cc,66px 0 0 -5px #bdc1cc,67px 0 0 -5px #bdc1cc,68px 0 0 -5px #bdc1cc,69px 0 0 -5px #bdc1cc,70px 0 0 -5px #bdc1cc,71px 0 0 -5px #bdc1cc,72px 0 0 -5px #bdc1cc,73px 0 0 -5px #bdc1cc,74px 0 0 -5px #bdc1cc,75px 0 0 -5px #bdc1cc,76px 0 0 -5px #bdc1cc,77px 0 0 -5px #bdc1cc,78px 0 0 -5px #bdc1cc,79px 0 0 -5px #bdc1cc,80px 0 0 -5px #bdc1cc,81px 0 0 -5px #bdc1cc,82px 0 0 -5px #bdc1cc,83px 0 0 -5px #bdc1cc,84px 0 0 -5px #bdc1cc,85px 0 0 -5px #bdc1cc,86px 0 0 -5px #bdc1cc,87px 0 0 -5px #bdc1cc,88px 0 0 -5px #bdc1cc,89px 0 0 -5px #bdc1cc,90px 0 0 -5px #bdc1cc,91px 0 0 -5px #bdc1cc,92px 0 0 -5px #bdc1cc,93px 0 0 -5px #bdc1cc,94px 0 0 -5px #bdc1cc,95px 0 0 -5px #bdc1cc,96px 0 0 -5px #bdc1cc,97px 0 0 -5px #bdc1cc,98px 0 0 -5px #bdc1cc,99px 0 0 -5px #bdc1cc,100px 0 0 -5px #bdc1cc,101px 0 0 -5px #bdc1cc,102px 0 0 -5px #bdc1cc,103px 0 0 -5px #bdc1cc,104px 0 0 -5px #bdc1cc,105px 0 0 -5px #bdc1cc,106px 0 0 -5px #bdc1cc,107px 0 0 -5px #bdc1cc,108px 0 0 -5px #bdc1cc,109px 0 0 -5px #bdc1cc,110px 0 0 -5px #bdc1cc,111px 0 0 -5px #bdc1cc,112px 0 0 -5px #bdc1cc,113px 0 0 -5px #bdc1cc,114px 0 0 -5px #bdc1cc,115px 0 0 -5px #bdc1cc,116px 0 0 -5px #bdc1cc,117px 0 0 -5px #bdc1cc,118px 0 0 -5px #bdc1cc,119px 0 0 -5px #bdc1cc,120px 0 0 -5px #bdc1cc,121px 0 0 -5px #bdc1cc,122px 0 0 -5px #bdc1cc,123px 0 0 -5px #bdc1cc,124px 0 0 -5px #bdc1cc,125px 0 0 -5px #bdc1cc,126px 0 0 -5px #bdc1cc,127px 0 0 -5px #bdc1cc,128px 0 0 -5px #bdc1cc,129px 0 0 -5px #bdc1cc,130px 0 0 -5px #bdc1cc,131px 0 0 -5px #bdc1cc,132px 0 0 -5px #bdc1cc,133px 0 0 -5px #bdc1cc,134px 0 0 -5px #bdc1cc,135px 0 0 -5px #bdc1cc,136px 0 0 -5px #bdc1cc,137px 0 0 -5px #bdc1cc,138px 0 0 -5px #bdc1cc,139px 0 0 -5px #bdc1cc,140px 0 0 -5px #bdc1cc,141px 0 0 -5px #bdc1cc,142px 0 0 -5px #bdc1cc,143px 0 0 -5px #bdc1cc,144px 0 0 -5px #bdc1cc,145px 0 0 -5px #bdc1cc,146px 0 0 -5px #bdc1cc,147px 0 0 -5px #bdc1cc,148px 0 0 -5px #bdc1cc,149px 0 0 -5px #bdc1cc,150px 0 0 -5px #bdc1cc,151px 0 0 -5px #bdc1cc,152px 0 0 -5px #bdc1cc,153px 0 0 -5px #bdc1cc,154px 0 0 -5px #bdc1cc,155px 0 0 -5px #bdc1cc,156px 0 0 -5px #bdc1cc,157px 0 0 -5px #bdc1cc,158px 0 0 -5px #bdc1cc,159px 0 0 -5px #bdc1cc,160px 0 0 -5px #bdc1cc,161px 0 0 -5px #bdc1cc,162px 0 0 -5px #bdc1cc,163px 0 0 -5px #bdc1cc,164px 0 0 -5px #bdc1cc,165px 0 0 -5px #bdc1cc,166px 0 0 -5px #bdc1cc,167px 0 0 -5px #bdc1cc,168px 0 0 -5px #bdc1cc,169px 0 0 -5px #bdc1cc,170px 0 0 -5px #bdc1cc,171px 0 0 -5px #bdc1cc,172px 0 0 -5px #bdc1cc,173px 0 0 -5px #bdc1cc,174px 0 0 -5px #bdc1cc,175px 0 0 -5px #bdc1cc,176px 0 0 -5px #bdc1cc,177px 0 0 -5px #bdc1cc,178px 0 0 -5px #bdc1cc,179px 0 0 -5px #bdc1cc,180px 0 0 -5px #bdc1cc,181px 0 0 -5px #bdc1cc,182px 0 0 -5px #bdc1cc,183px 0 0 -5px #bdc1cc,184px 0 0 -5px #bdc1cc,185px 0 0 -5px #bdc1cc,186px 0 0 -5px #bdc1cc,187px 0 0 -5px #bdc1cc,188px 0 0 -5px #bdc1cc,189px 0 0 -5px #bdc1cc,190px 0 0 -5px #bdc1cc,191px 0 0 -5px #bdc1cc,192px 0 0 -5px #bdc1cc,193px 0 0 -5px #bdc1cc,194px 0 0 -5px #bdc1cc,195px 0 0 -5px #bdc1cc,196px 0 0 -5px #bdc1cc,197px 0 0 -5px #bdc1cc,198px 0 0 -5px #bdc1cc,199px 0 0 -5px #bdc1cc,200px 0 0 -5px #bdc1cc,201px 0 0 -5px #bdc1cc,202px 0 0 -5px #bdc1cc,203px 0 0 -5px #bdc1cc,204px 0 0 -5px #bdc1cc,205px 0 0 -5px #bdc1cc,206px 0 0 -5px #bdc1cc,207px 0 0 -5px #bdc1cc,208px 0 0 -5px #bdc1cc,209px 0 0 -5px #bdc1cc,210px 0 0 -5px #bdc1cc,211px 0 0 -5px #bdc1cc,212px 0 0 -5px #bdc1cc,213px 0 0 -5px #bdc1cc,214px 0 0 -5px #bdc1cc,215px 0 0 -5px #bdc1cc,216px 0 0 -5px #bdc1cc,217px 0 0 -5px #bdc1cc,218px 0 0 -5px #bdc1cc,219px 0 0 -5px #bdc1cc,220px 0 0 -5px #bdc1cc,221px 0 0 -5px #bdc1cc,222px 0 0 -5px #bdc1cc,223px 0 0 -5px #bdc1cc,224px 0 0 -5px #bdc1cc,225px 0 0 -5px #bdc1cc,226px 0 0 -5px #bdc1cc,227px 0 0 -5px #bdc1cc,228px 0 0 -5px #bdc1cc,229px 0 0 -5px #bdc1cc,230px 0 0 -5px #bdc1cc,231px 0 0 -5px #bdc1cc,232px 0 0 -5px #bdc1cc,233px 0 0 -5px #bdc1cc,234px 0 0 -5px #bdc1cc,235px 0 0 -5px #bdc1cc,236px 0 0 -5px #bdc1cc,237px 0 0 -5px #bdc1cc,238px 0 0 -5px #bdc1cc,239px 0 0 -5px #bdc1cc,240px 0 0 -5px #bdc1cc,241px 0 0 -5px #bdc1cc,242px 0 0 -5px #bdc1cc,243px 0 0 -5px #bdc1cc,244px 0 0 -5px #bdc1cc,245px 0 0 -5px #bdc1cc,246px 0 0 -5px #bdc1cc,247px 0 0 -5px #bdc1cc,248px 0 0 -5px #bdc1cc,249px 0 0 -5px #bdc1cc,250px 0 0 -5px #bdc1cc,251px 0 0 -5px #bdc1cc,252px 0 0 -5px #bdc1cc,253px 0 0 -5px #bdc1cc,254px 0 0 -5px #bdc1cc,255px 0 0 -5px #bdc1cc,256px 0 0 -5px #bdc1cc,257px 0 0 -5px #bdc1cc,258px 0 0 -5px #bdc1cc,259px 0 0 -5px #bdc1cc,260px 0 0 -5px #bdc1cc,261px 0 0 -5px #bdc1cc,262px 0 0 -5px #bdc1cc,263px 0 0 -5px #bdc1cc,264px 0 0 -5px #bdc1cc,265px 0 0 -5px #bdc1cc,266px 0 0 -5px #bdc1cc,267px 0 0 -5px #bdc1cc,268px 0 0 -5px #bdc1cc,269px 0 0 -5px #bdc1cc,270px 0 0 -5px #bdc1cc,271px 0 0 -5px #bdc1cc,272px 0 0 -5px #bdc1cc,273px 0 0 -5px #bdc1cc,274px 0 0 -5px #bdc1cc,275px 0 0 -5px #bdc1cc,276px 0 0 -5px #bdc1cc,277px 0 0 -5px #bdc1cc,278px 0 0 -5px #bdc1cc,279px 0 0 -5px #bdc1cc,280px 0 0 -5px #bdc1cc,281px 0 0 -5px #bdc1cc,282px 0 0 -5px #bdc1cc,283px 0 0 -5px #bdc1cc,284px 0 0 -5px #bdc1cc,285px 0 0 -5px #bdc1cc,286px 0 0 -5px #bdc1cc,287px 0 0 -5px #bdc1cc,288px 0 0 -5px #bdc1cc,289px 0 0 -5px #bdc1cc,290px 0 0 -5px #bdc1cc,291px 0 0 -5px #bdc1cc,292px 0 0 -5px #bdc1cc,293px 0 0 -5px #bdc1cc,294px 0 0 -5px #bdc1cc,295px 0 0 -5px #bdc1cc,296px 0 0 -5px #bdc1cc,297px 0 0 -5px #bdc1cc,298px 0 0 -5px #bdc1cc,299px 0 0 -5px #bdc1cc,300px 0 0 -5px #bdc1cc,301px 0 0 -5px #bdc1cc,302px 0 0 -5px #bdc1cc,303px 0 0 -5px #bdc1cc,304px 0 0 -5px #bdc1cc,305px 0 0 -5px #bdc1cc,306px 0 0 -5px #bdc1cc,307px 0 0 -5px #bdc1cc,308px 0 0 -5px #bdc1cc,309px 0 0 -5px #bdc1cc,310px 0 0 -5px #bdc1cc,311px 0 0 -5px #bdc1cc,312px 0 0 -5px #bdc1cc,313px 0 0 -5px #bdc1cc,314px 0 0 -5px #bdc1cc,315px 0 0 -5px #bdc1cc,316px 0 0 -5px #bdc1cc,317px 0 0 -5px #bdc1cc,318px 0 0 -5px #bdc1cc,319px 0 0 -5px #bdc1cc,320px 0 0 -5px #bdc1cc,321px 0 0 -5px #bdc1cc,322px 0 0 -5px #bdc1cc,323px 0 0 -5px #bdc1cc,324px 0 0 -5px #bdc1cc,325px 0 0 -5px #bdc1cc,326px 0 0 -5px #bdc1cc,327px 0 0 -5px #bdc1cc,328px 0 0 -5px #bdc1cc,329px 0 0 -5px #bdc1cc,330px 0 0 -5px #bdc1cc,331px 0 0 -5px #bdc1cc,332px 0 0 -5px #bdc1cc,333px 0 0 -5px #bdc1cc,334px 0 0 -5px #bdc1cc,335px 0 0 -5px #bdc1cc,336px 0 0 -5px #bdc1cc,337px 0 0 -5px #bdc1cc,338px 0 0 -5px #bdc1cc,339px 0 0 -5px #bdc1cc,340px 0 0 -5px #bdc1cc,341px 0 0 -5px #bdc1cc,342px 0 0 -5px #bdc1cc,343px 0 0 -5px #bdc1cc,344px 0 0 -5px #bdc1cc,345px 0 0 -5px #bdc1cc,346px 0 0 -5px #bdc1cc,347px 0 0 -5px #bdc1cc,348px 0 0 -5px #bdc1cc,349px 0 0 -5px #bdc1cc,350px 0 0 -5px #bdc1cc,351px 0 0 -5px #bdc1cc,352px 0 0 -5px #bdc1cc,353px 0 0 -5px #bdc1cc,354px 0 0 -5px #bdc1cc,355px 0 0 -5px #bdc1cc,356px 0 0 -5px #bdc1cc,357px 0 0 -5px #bdc1cc,358px 0 0 -5px #bdc1cc,359px 0 0 -5px #bdc1cc,360px 0 0 -5px #bdc1cc,361px 0 0 -5px #bdc1cc,362px 0 0 -5px #bdc1cc,363px 0 0 -5px #bdc1cc,364px 0 0 -5px #bdc1cc,365px 0 0 -5px #bdc1cc,366px 0 0 -5px #bdc1cc,367px 0 0 -5px #bdc1cc,368px 0 0 -5px #bdc1cc,369px 0 0 -5px #bdc1cc,370px 0 0 -5px #bdc1cc,371px 0 0 -5px #bdc1cc,372px 0 0 -5px #bdc1cc,373px 0 0 -5px #bdc1cc,374px 0 0 -5px #bdc1cc,375px 0 0 -5px #bdc1cc,376px 0 0 -5px #bdc1cc,377px 0 0 -5px #bdc1cc,378px 0 0 -5px #bdc1cc,379px 0 0 -5px #bdc1cc,380px 0 0 -5px #bdc1cc,381px 0 0 -5px #bdc1cc,382px 0 0 -5px #bdc1cc,383px 0 0 -5px #bdc1cc,384px 0 0 -5px #bdc1cc,385px 0 0 -5px #bdc1cc,386px 0 0 -5px #bdc1cc,387px 0 0 -5px #bdc1cc,388px 0 0 -5px #bdc1cc,389px 0 0 -5px #bdc1cc,390px 0 0 -5px #bdc1cc,391px 0 0 -5px #bdc1cc,392px 0 0 -5px #bdc1cc,393px 0 0 -5px #bdc1cc,394px 0 0 -5px #bdc1cc,395px 0 0 -5px #bdc1cc,396px 0 0 -5px #bdc1cc,397px 0 0 -5px #bdc1cc,398px 0 0 -5px #bdc1cc,399px 0 0 -5px #bdc1cc,400px 0 0 -5px #bdc1cc,401px 0 0 -5px #bdc1cc,402px 0 0 -5px #bdc1cc,403px 0 0 -5px #bdc1cc,404px 0 0 -5px #bdc1cc,405px 0 0 -5px #bdc1cc,406px 0 0 -5px #bdc1cc,407px 0 0 -5px #bdc1cc,408px 0 0 -5px #bdc1cc,409px 0 0 -5px #bdc1cc,410px 0 0 -5px #bdc1cc,411px 0 0 -5px #bdc1cc,412px 0 0 -5px #bdc1cc,413px 0 0 -5px #bdc1cc,414px 0 0 -5px #bdc1cc,415px 0 0 -5px #bdc1cc,416px 0 0 -5px #bdc1cc,417px 0 0 -5px #bdc1cc,418px 0 0 -5px #bdc1cc,419px 0 0 -5px #bdc1cc,420px 0 0 -5px #bdc1cc,421px 0 0 -5px #bdc1cc,422px 0 0 -5px #bdc1cc,423px 0 0 -5px #bdc1cc,424px 0 0 -5px #bdc1cc,425px 0 0 -5px #bdc1cc,426px 0 0 -5px #bdc1cc,427px 0 0 -5px #bdc1cc,428px 0 0 -5px #bdc1cc,429px 0 0 -5px #bdc1cc,430px 0 0 -5px #bdc1cc,431px 0 0 -5px #bdc1cc,432px 0 0 -5px #bdc1cc,433px 0 0 -5px #bdc1cc,434px 0 0 -5px #bdc1cc,435px 0 0 -5px #bdc1cc,436px 0 0 -5px #bdc1cc,437px 0 0 -5px #bdc1cc,438px 0 0 -5px #bdc1cc,439px 0 0 -5px #bdc1cc,440px 0 0 -5px #bdc1cc,441px 0 0 -5px #bdc1cc,442px 0 0 -5px #bdc1cc,443px 0 0 -5px #bdc1cc,444px 0 0 -5px #bdc1cc,445px 0 0 -5px #bdc1cc,446px 0 0 -5px #bdc1cc,447px 0 0 -5px #bdc1cc,448px 0 0 -5px #bdc1cc,449px 0 0 -5px #bdc1cc,450px 0 0 -5px #bdc1cc,451px 0 0 -5px #bdc1cc,452px 0 0 -5px #bdc1cc,453px 0 0 -5px #bdc1cc,454px 0 0 -5px #bdc1cc,455px 0 0 -5px #bdc1cc,456px 0 0 -5px #bdc1cc,457px 0 0 -5px #bdc1cc,458px 0 0 -5px #bdc1cc,459px 0 0 -5px #bdc1cc,460px 0 0 -5px #bdc1cc,461px 0 0 -5px #bdc1cc,462px 0 0 -5px #bdc1cc,463px 0 0 -5px #bdc1cc,464px 0 0 -5px #bdc1cc,465px 0 0 -5px #bdc1cc,466px 0 0 -5px #bdc1cc,467px 0 0 -5px #bdc1cc,468px 0 0 -5px #bdc1cc,469px 0 0 -5px #bdc1cc,470px 0 0 -5px #bdc1cc,471px 0 0 -5px #bdc1cc,472px 0 0 -5px #bdc1cc,473px 0 0 -5px #bdc1cc,474px 0 0 -5px #bdc1cc,475px 0 0 -5px #bdc1cc,476px 0 0 -5px #bdc1cc,477px 0 0 -5px #bdc1cc,478px 0 0 -5px #bdc1cc,479px 0 0 -5px #bdc1cc,480px 0 0 -5px #bdc1cc,481px 0 0 -5px #bdc1cc,482px 0 0 -5px #bdc1cc,483px 0 0 -5px #bdc1cc,484px 0 0 -5px #bdc1cc,485px 0 0 -5px #bdc1cc,486px 0 0 -5px #bdc1cc,487px 0 0 -5px #bdc1cc,488px 0 0 -5px #bdc1cc,489px 0 0 -5px #bdc1cc,490px 0 0 -5px #bdc1cc,491px 0 0 -5px #bdc1cc,492px 0 0 -5px #bdc1cc,493px 0 0 -5px #bdc1cc,494px 0 0 -5px #bdc1cc,495px 0 0 -5px #bdc1cc,496px 0 0 -5px #bdc1cc,497px 0 0 -5px #bdc1cc,498px 0 0 -5px #bdc1cc,499px 0 0 -5px #bdc1cc,500px 0 0 -5px #bdc1cc,501px 0 0 -5px #bdc1cc,502px 0 0 -5px #bdc1cc,503px 0 0 -5px #bdc1cc,504px 0 0 -5px #bdc1cc,505px 0 0 -5px #bdc1cc,506px 0 0 -5px #bdc1cc,507px 0 0 -5px #bdc1cc,508px 0 0 -5px #bdc1cc,509px 0 0 -5px #bdc1cc,510px 0 0 -5px #bdc1cc,511px 0 0 -5px #bdc1cc,512px 0 0 -5px #bdc1cc,513px 0 0 -5px #bdc1cc,514px 0 0 -5px #bdc1cc,515px 0 0 -5px #bdc1cc,516px 0 0 -5px #bdc1cc,517px 0 0 -5px #bdc1cc,518px 0 0 -5px #bdc1cc,519px 0 0 -5px #bdc1cc,520px 0 0 -5px #bdc1cc,521px 0 0 -5px #bdc1cc,522px 0 0 -5px #bdc1cc,523px 0 0 -5px #bdc1cc,524px 0 0 -5px #bdc1cc,525px 0 0 -5px #bdc1cc,526px 0 0 -5px #bdc1cc,527px 0 0 -5px #bdc1cc,528px 0 0 -5px #bdc1cc,529px 0 0 -5px #bdc1cc,530px 0 0 -5px #bdc1cc,531px 0 0 -5px #bdc1cc,532px 0 0 -5px #bdc1cc,533px 0 0 -5px #bdc1cc,534px 0 0 -5px #bdc1cc,535px 0 0 -5px #bdc1cc,536px 0 0 -5px #bdc1cc,537px 0 0 -5px #bdc1cc,538px 0 0 -5px #bdc1cc,539px 0 0 -5px #bdc1cc,540px 0 0 -5px #bdc1cc,541px 0 0 -5px #bdc1cc,542px 0 0 -5px #bdc1cc,543px 0 0 -5px #bdc1cc,544px 0 0 -5px #bdc1cc,545px 0 0 -5px #bdc1cc,546px 0 0 -5px #bdc1cc,547px 0 0 -5px #bdc1cc,548px 0 0 -5px #bdc1cc,549px 0 0 -5px #bdc1cc,550px 0 0 -5px #bdc1cc,551px 0 0 -5px #bdc1cc,552px 0 0 -5px #bdc1cc,553px 0 0 -5px #bdc1cc,554px 0 0 -5px #bdc1cc,555px 0 0 -5px #bdc1cc,556px 0 0 -5px #bdc1cc,557px 0 0 -5px #bdc1cc,558px 0 0 -5px #bdc1cc,559px 0 0 -5px #bdc1cc,560px 0 0 -5px #bdc1cc,561px 0 0 -5px #bdc1cc,562px 0 0 -5px #bdc1cc,563px 0 0 -5px #bdc1cc,564px 0 0 -5px #bdc1cc,565px 0 0 -5px #bdc1cc,566px 0 0 -5px #bdc1cc,567px 0 0 -5px #bdc1cc,568px 0 0 -5px #bdc1cc,569px 0 0 -5px #bdc1cc,570px 0 0 -5px #bdc1cc,571px 0 0 -5px #bdc1cc,572px 0 0 -5px #bdc1cc,573px 0 0 -5px #bdc1cc,574px 0 0 -5px #bdc1cc,575px 0 0 -5px #bdc1cc,576px 0 0 -5px #bdc1cc,577px 0 0 -5px #bdc1cc,578px 0 0 -5px #bdc1cc,579px 0 0 -5px #bdc1cc,580px 0 0 -5px #bdc1cc,581px 0 0 -5px #bdc1cc,582px 0 0 -5px #bdc1cc,583px 0 0 -5px #bdc1cc,584px 0 0 -5px #bdc1cc,585px 0 0 -5px #bdc1cc,586px 0 0 -5px #bdc1cc,587px 0 0 -5px #bdc1cc,588px 0 0 -5px #bdc1cc,589px 0 0 -5px #bdc1cc,590px 0 0 -5px #bdc1cc,591px 0 0 -5px #bdc1cc,592px 0 0 -5px #bdc1cc,593px 0 0 -5px #bdc1cc,594px 0 0 -5px #bdc1cc,595px 0 0 -5px #bdc1cc,596px 0 0 -5px #bdc1cc,597px 0 0 -5px #bdc1cc,598px 0 0 -5px #bdc1cc,599px 0 0 -5px #bdc1cc,600px 0 0 -5px #bdc1cc,601px 0 0 -5px #bdc1cc,602px 0 0 -5px #bdc1cc,603px 0 0 -5px #bdc1cc,604px 0 0 -5px #bdc1cc,605px 0 0 -5px #bdc1cc,606px 0 0 -5px #bdc1cc,607px 0 0 -5px #bdc1cc,608px 0 0 -5px #bdc1cc,609px 0 0 -5px #bdc1cc,610px 0 0 -5px #bdc1cc,611px 0 0 -5px #bdc1cc,612px 0 0 -5px #bdc1cc,613px 0 0 -5px #bdc1cc,614px 0 0 -5px #bdc1cc,615px 0 0 -5px #bdc1cc,616px 0 0 -5px #bdc1cc,617px 0 0 -5px #bdc1cc,618px 0 0 -5px #bdc1cc,619px 0 0 -5px #bdc1cc,620px 0 0 -5px #bdc1cc,621px 0 0 -5px #bdc1cc,622px 0 0 -5px #bdc1cc,623px 0 0 -5px #bdc1cc,624px 0 0 -5px #bdc1cc,625px 0 0 -5px #bdc1cc,626px 0 0 -5px #bdc1cc,627px 0 0 -5px #bdc1cc,628px 0 0 -5px #bdc1cc,629px 0 0 -5px #bdc1cc,630px 0 0 -5px #bdc1cc,631px 0 0 -5px #bdc1cc,632px 0 0 -5px #bdc1cc,633px 0 0 -5px #bdc1cc,634px 0 0 -5px #bdc1cc,635px 0 0 -5px #bdc1cc,636px 0 0 -5px #bdc1cc,637px 0 0 -5px #bdc1cc,638px 0 0 -5px #bdc1cc,639px 0 0 -5px #bdc1cc,640px 0 0 -5px #bdc1cc,641px 0 0 -5px #bdc1cc,642px 0 0 -5px #bdc1cc,643px 0 0 -5px #bdc1cc,644px 0 0 -5px #bdc1cc,645px 0 0 -5px #bdc1cc,646px 0 0 -5px #bdc1cc,647px 0 0 -5px #bdc1cc,648px 0 0 -5px #bdc1cc,649px 0 0 -5px #bdc1cc,650px 0 0 -5px #bdc1cc,651px 0 0 -5px #bdc1cc,652px 0 0 -5px #bdc1cc,653px 0 0 -5px #bdc1cc,654px 0 0 -5px #bdc1cc,655px 0 0 -5px #bdc1cc,656px 0 0 -5px #bdc1cc,657px 0 0 -5px #bdc1cc,658px 0 0 -5px #bdc1cc,659px 0 0 -5px #bdc1cc,660px 0 0 -5px #bdc1cc,661px 0 0 -5px #bdc1cc,662px 0 0 -5px #bdc1cc,663px 0 0 -5px #bdc1cc,664px 0 0 -5px #bdc1cc,665px 0 0 -5px #bdc1cc,666px 0 0 -5px #bdc1cc,667px 0 0 -5px #bdc1cc,668px 0 0 -5px #bdc1cc,669px 0 0 -5px #bdc1cc,670px 0 0 -5px #bdc1cc,671px 0 0 -5px #bdc1cc,672px 0 0 -5px #bdc1cc,673px 0 0 -5px #bdc1cc,674px 0 0 -5px #bdc1cc,675px 0 0 -5px #bdc1cc,676px 0 0 -5px #bdc1cc,677px 0 0 -5px #bdc1cc,678px 0 0 -5px #bdc1cc,679px 0 0 -5px #bdc1cc,680px 0 0 -5px #bdc1cc,681px 0 0 -5px #bdc1cc,682px 0 0 -5px #bdc1cc,683px 0 0 -5px #bdc1cc,684px 0 0 -5px #bdc1cc,685px 0 0 -5px #bdc1cc,686px 0 0 -5px #bdc1cc,687px 0 0 -5px #bdc1cc,688px 0 0 -5px #bdc1cc,689px 0 0 -5px #bdc1cc,690px 0 0 -5px #bdc1cc,691px 0 0 -5px #bdc1cc,692px 0 0 -5px #bdc1cc,693px 0 0 -5px #bdc1cc,694px 0 0 -5px #bdc1cc,695px 0 0 -5px #bdc1cc,696px 0 0 -5px #bdc1cc,697px 0 0 -5px #bdc1cc,698px 0 0 -5px #bdc1cc,699px 0 0 -5px #bdc1cc,700px 0 0 -5px #bdc1cc,701px 0 0 -5px #bdc1cc,702px 0 0 -5px #bdc1cc,703px 0 0 -5px #bdc1cc,704px 0 0 -5px #bdc1cc,705px 0 0 -5px #bdc1cc,706px 0 0 -5px #bdc1cc,707px 0 0 -5px #bdc1cc,708px 0 0 -5px #bdc1cc,709px 0 0 -5px #bdc1cc,710px 0 0 -5px #bdc1cc,711px 0 0 -5px #bdc1cc,712px 0 0 -5px #bdc1cc,713px 0 0 -5px #bdc1cc,714px 0 0 -5px #bdc1cc,715px 0 0 -5px #bdc1cc,716px 0 0 -5px #bdc1cc,717px 0 0 -5px #bdc1cc,718px 0 0 -5px #bdc1cc,719px 0 0 -5px #bdc1cc,720px 0 0 -5px #bdc1cc,721px 0 0 -5px #bdc1cc,722px 0 0 -5px #bdc1cc,723px 0 0 -5px #bdc1cc,724px 0 0 -5px #bdc1cc,725px 0 0 -5px #bdc1cc,726px 0 0 -5px #bdc1cc,727px 0 0 -5px #bdc1cc,728px 0 0 -5px #bdc1cc,729px 0 0 -5px #bdc1cc,730px 0 0 -5px #bdc1cc,731px 0 0 -5px #bdc1cc,732px 0 0 -5px #bdc1cc,733px 0 0 -5px #bdc1cc,734px 0 0 -5px #bdc1cc,735px 0 0 -5px #bdc1cc,736px 0 0 -5px #bdc1cc,737px 0 0 -5px #bdc1cc,738px 0 0 -5px #bdc1cc,739px 0 0 -5px #bdc1cc,740px 0 0 -5px #bdc1cc,741px 0 0 -5px #bdc1cc,742px 0 0 -5px #bdc1cc,743px 0 0 -5px #bdc1cc,744px 0 0 -5px #bdc1cc,745px 0 0 -5px #bdc1cc,746px 0 0 -5px #bdc1cc,747px 0 0 -5px #bdc1cc,748px 0 0 -5px #bdc1cc,749px 0 0 -5px #bdc1cc,750px 0 0 -5px #bdc1cc,751px 0 0 -5px #bdc1cc,752px 0 0 -5px #bdc1cc,753px 0 0 -5px #bdc1cc,754px 0 0 -5px #bdc1cc,755px 0 0 -5px #bdc1cc,756px 0 0 -5px #bdc1cc,757px 0 0 -5px #bdc1cc,758px 0 0 -5px #bdc1cc,759px 0 0 -5px #bdc1cc,760px 0 0 -5px #bdc1cc,761px 0 0 -5px #bdc1cc,762px 0 0 -5px #bdc1cc,763px 0 0 -5px #bdc1cc,764px 0 0 -5px #bdc1cc,765px 0 0 -5px #bdc1cc,766px 0 0 -5px #bdc1cc,767px 0 0 -5px #bdc1cc,768px 0 0 -5px #bdc1cc,769px 0 0 -5px #bdc1cc,770px 0 0 -5px #bdc1cc,771px 0 0 -5px #bdc1cc,772px 0 0 -5px #bdc1cc,773px 0 0 -5px #bdc1cc,774px 0 0 -5px #bdc1cc,775px 0 0 -5px #bdc1cc,776px 0 0 -5px #bdc1cc,777px 0 0 -5px #bdc1cc,778px 0 0 -5px #bdc1cc,779px 0 0 -5px #bdc1cc,780px 0 0 -5px #bdc1cc,781px 0 0 -5px #bdc1cc,782px 0 0 -5px #bdc1cc,783px 0 0 -5px #bdc1cc,784px 0 0 -5px #bdc1cc,785px 0 0 -5px #bdc1cc,786px 0 0 -5px #bdc1cc,787px 0 0 -5px #bdc1cc,788px 0 0 -5px #bdc1cc,789px 0 0 -5px #bdc1cc,790px 0 0 -5px #bdc1cc,791px 0 0 -5px #bdc1cc,792px 0 0 -5px #bdc1cc,793px 0 0 -5px #bdc1cc,794px 0 0 -5px #bdc1cc,795px 0 0 -5px #bdc1cc,796px 0 0 -5px #bdc1cc,797px 0 0 -5px #bdc1cc,798px 0 0 -5px #bdc1cc,799px 0 0 -5px #bdc1cc,800px 0 0 -5px #bdc1cc,801px 0 0 -5px #bdc1cc,802px 0 0 -5px #bdc1cc,803px 0 0 -5px #bdc1cc,804px 0 0 -5px #bdc1cc,805px 0 0 -5px #bdc1cc,806px 0 0 -5px #bdc1cc,807px 0 0 -5px #bdc1cc,808px 0 0 -5px #bdc1cc,809px 0 0 -5px #bdc1cc,810px 0 0 -5px #bdc1cc,811px 0 0 -5px #bdc1cc,812px 0 0 -5px #bdc1cc,813px 0 0 -5px #bdc1cc,814px 0 0 -5px #bdc1cc,815px 0 0 -5px #bdc1cc,816px 0 0 -5px #bdc1cc,817px 0 0 -5px #bdc1cc,818px 0 0 -5px #bdc1cc,819px 0 0 -5px #bdc1cc,820px 0 0 -5px #bdc1cc,821px 0 0 -5px #bdc1cc,822px 0 0 -5px #bdc1cc,823px 0 0 -5px #bdc1cc,824px 0 0 -5px #bdc1cc,825px 0 0 -5px #bdc1cc,826px 0 0 -5px #bdc1cc,827px 0 0 -5px #bdc1cc,828px 0 0 -5px #bdc1cc,829px 0 0 -5px #bdc1cc,830px 0 0 -5px #bdc1cc,831px 0 0 -5px #bdc1cc,832px 0 0 -5px #bdc1cc,833px 0 0 -5px #bdc1cc,834px 0 0 -5px #bdc1cc,835px 0 0 -5px #bdc1cc,836px 0 0 -5px #bdc1cc,837px 0 0 -5px #bdc1cc,838px 0 0 -5px #bdc1cc,839px 0 0 -5px #bdc1cc,840px 0 0 -5px #bdc1cc,841px 0 0 -5px #bdc1cc,842px 0 0 -5px #bdc1cc,843px 0 0 -5px #bdc1cc,844px 0 0 -5px #bdc1cc,845px 0 0 -5px #bdc1cc,846px 0 0 -5px #bdc1cc,847px 0 0 -5px #bdc1cc,848px 0 0 -5px #bdc1cc,849px 0 0 -5px #bdc1cc,850px 0 0 -5px #bdc1cc,851px 0 0 -5px #bdc1cc,852px 0 0 -5px #bdc1cc,853px 0 0 -5px #bdc1cc,854px 0 0 -5px #bdc1cc,855px 0 0 -5px #bdc1cc,856px 0 0 -5px #bdc1cc,857px 0 0 -5px #bdc1cc,858px 0 0 -5px #bdc1cc,859px 0 0 -5px #bdc1cc,860px 0 0 -5px #bdc1cc,861px 0 0 -5px #bdc1cc,862px 0 0 -5px #bdc1cc,863px 0 0 -5px #bdc1cc,864px 0 0 -5px #bdc1cc,865px 0 0 -5px #bdc1cc,866px 0 0 -5px #bdc1cc,867px 0 0 -5px #bdc1cc,868px 0 0 -5px #bdc1cc,869px 0 0 -5px #bdc1cc,870px 0 0 -5px #bdc1cc,871px 0 0 -5px #bdc1cc,872px 0 0 -5px #bdc1cc,873px 0 0 -5px #bdc1cc,874px 0 0 -5px #bdc1cc,875px 0 0 -5px #bdc1cc,876px 0 0 -5px #bdc1cc,877px 0 0 -5px #bdc1cc,878px 0 0 -5px #bdc1cc,879px 0 0 -5px #bdc1cc,880px 0 0 -5px #bdc1cc,881px 0 0 -5px #bdc1cc,882px 0 0 -5px #bdc1cc,883px 0 0 -5px #bdc1cc,884px 0 0 -5px #bdc1cc,885px 0 0 -5px #bdc1cc,886px 0 0 -5px #bdc1cc,887px 0 0 -5px #bdc1cc,888px 0 0 -5px #bdc1cc,889px 0 0 -5px #bdc1cc,890px 0 0 -5px #bdc1cc,891px 0 0 -5px #bdc1cc,892px 0 0 -5px #bdc1cc,893px 0 0 -5px #bdc1cc,894px 0 0 -5px #bdc1cc,895px 0 0 -5px #bdc1cc,896px 0 0 -5px #bdc1cc,897px 0 0 -5px #bdc1cc,898px 0 0 -5px #bdc1cc,899px 0 0 -5px #bdc1cc,900px 0 0 -5px #bdc1cc,901px 0 0 -5px #bdc1cc,902px 0 0 -5px #bdc1cc,903px 0 0 -5px #bdc1cc,904px 0 0 -5px #bdc1cc,905px 0 0 -5px #bdc1cc,906px 0 0 -5px #bdc1cc,907px 0 0 -5px #bdc1cc,908px 0 0 -5px #bdc1cc,909px 0 0 -5px #bdc1cc,910px 0 0 -5px #bdc1cc,911px 0 0 -5px #bdc1cc,912px 0 0 -5px #bdc1cc,913px 0 0 -5px #bdc1cc,914px 0 0 -5px #bdc1cc,915px 0 0 -5px #bdc1cc,916px 0 0 -5px #bdc1cc,917px 0 0 -5px #bdc1cc,918px 0 0 -5px #bdc1cc,919px 0 0 -5px #bdc1cc,920px 0 0 -5px #bdc1cc,921px 0 0 -5px #bdc1cc,922px 0 0 -5px #bdc1cc,923px 0 0 -5px #bdc1cc,924px 0 0 -5px #bdc1cc,925px 0 0 -5px #bdc1cc,926px 0 0 -5px #bdc1cc,927px 0 0 -5px #bdc1cc,928px 0 0 -5px #bdc1cc,929px 0 0 -5px #bdc1cc,930px 0 0 -5px #bdc1cc,931px 0 0 -5px #bdc1cc,932px 0 0 -5px #bdc1cc,933px 0 0 -5px #bdc1cc,934px 0 0 -5px #bdc1cc,935px 0 0 -5px #bdc1cc,936px 0 0 -5px #bdc1cc,937px 0 0 -5px #bdc1cc,938px 0 0 -5px #bdc1cc,939px 0 0 -5px #bdc1cc,940px 0 0 -5px #bdc1cc,941px 0 0 -5px #bdc1cc,942px 0 0 -5px #bdc1cc,943px 0 0 -5px #bdc1cc,944px 0 0 -5px #bdc1cc,945px 0 0 -5px #bdc1cc,946px 0 0 -5px #bdc1cc,947px 0 0 -5px #bdc1cc,948px 0 0 -5px #bdc1cc,949px 0 0 -5px #bdc1cc,950px 0 0 -5px #bdc1cc,951px 0 0 -5px #bdc1cc,952px 0 0 -5px #bdc1cc,953px 0 0 -5px #bdc1cc,954px 0 0 -5px #bdc1cc,955px 0 0 -5px #bdc1cc,956px 0 0 -5px #bdc1cc,957px 0 0 -5px #bdc1cc,958px 0 0 -5px #bdc1cc,959px 0 0 -5px #bdc1cc,960px 0 0 -5px #bdc1cc,961px 0 0 -5px #bdc1cc,962px 0 0 -5px #bdc1cc,963px 0 0 -5px #bdc1cc,964px 0 0 -5px #bdc1cc,965px 0 0 -5px #bdc1cc,966px 0 0 -5px #bdc1cc,967px 0 0 -5px #bdc1cc,968px 0 0 -5px #bdc1cc,969px 0 0 -5px #bdc1cc,970px 0 0 -5px #bdc1cc,971px 0 0 -5px #bdc1cc,972px 0 0 -5px #bdc1cc,973px 0 0 -5px #bdc1cc,974px 0 0 -5px #bdc1cc,975px 0 0 -5px #bdc1cc,976px 0 0 -5px #bdc1cc,977px 0 0 -5px #bdc1cc,978px 0 0 -5px #bdc1cc,979px 0 0 -5px #bdc1cc,980px 0 0 -5px #bdc1cc,981px 0 0 -5px #bdc1cc,982px 0 0 -5px #bdc1cc,983px 0 0 -5px #bdc1cc,984px 0 0 -5px #bdc1cc,985px 0 0 -5px #bdc1cc,986px 0 0 -5px #bdc1cc,987px 0 0 -5px #bdc1cc,988px 0 0 -5px #bdc1cc,989px 0 0 -5px #bdc1cc,990px 0 0 -5px #bdc1cc,991px 0 0 -5px #bdc1cc,992px 0 0 -5px #bdc1cc,993px 0 0 -5px #bdc1cc,994px 0 0 -5px #bdc1cc,995px 0 0 -5px #bdc1cc,996px 0 0 -5px #bdc1cc,997px 0 0 -5px #bdc1cc,998px 0 0 -5px #bdc1cc,999px 0 0 -5px #bdc1cc,1000px 0 0 -5px #bdc1cc}',
            ],
          })),
          k
        );
      })();
      var Ve = v(433);
      let Ie = (() => {
        class k {
          constructor(P) {
            this.broadcastService = P;
          }
          ngOnInit() {
            this.toggleBtn = new Ve.cw({ isChecked: new Ve.NI(this.isActive) });
          }
          onChange(P) {
            (this.isActive = P.target.checked),
              this.broadcastService.dispatch(
                new ne.q(_.T.TOGGLE_EVENT, {
                  data: {
                    configurationKey: this.id,
                    type: 'toggle',
                    isActive: this.isActive,
                  },
                  id: this.id,
                })
              );
          }
        }
        return (
          (k.ɵfac = function (P) {
            return new (P || k)(s.Y36(K.M));
          }),
          (k.ɵcmp = s.Xpm({
            type: k,
            selectors: [['app-toggle']],
            inputs: { isActive: 'isActive', meta: 'meta', id: 'id' },
            decls: 4,
            vars: 4,
            consts: [
              [3, 'formGroup'],
              [1, 'form', 3, 'for'],
              [
                'type',
                'checkbox',
                'formControlName',
                'isChecked',
                3,
                'id',
                'checked',
                'change',
              ],
              [1, 'slide'],
            ],
            template: function (P, W) {
              1 & P &&
                (s.TgZ(0, 'form', 0)(1, 'label', 1)(2, 'input', 2),
                s.NdJ('change', function (dt) {
                  return W.onChange(dt);
                }),
                s.qZA(),
                s._UZ(3, 'span', 3),
                s.qZA()()),
                2 & P &&
                  (s.Q6J('formGroup', W.toggleBtn),
                  s.xp6(1),
                  s.MGl('for', 'toggle-', W.id, ''),
                  s.xp6(1),
                  s.MGl('id', 'toggle-', W.id, ''),
                  s.Q6J('checked', W.isActive));
            },
            dependencies: [Ve._Y, Ve.Wl, Ve.JJ, Ve.JL, Ve.sg, Ve.u],
            styles: [
              '@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27pmO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27rWO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27rGO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27omO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}body[_ngcontent-%COMP%]{margin:0;font-family:Proxima Nova}html[_ngcontent-%COMP%]{line-height:1.15;-webkit-text-size-adjust:100%}body[_ngcontent-%COMP%]{margin:0}main[_ngcontent-%COMP%]{display:block}h1[_ngcontent-%COMP%]{font-size:2em;margin:.67em 0}hr[_ngcontent-%COMP%]{box-sizing:content-box;height:0;overflow:visible}pre[_ngcontent-%COMP%]{font-family:monospace,monospace;font-size:1em}a[_ngcontent-%COMP%]{background-color:transparent}abbr[title][_ngcontent-%COMP%]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b[_ngcontent-%COMP%], strong[_ngcontent-%COMP%]{font-weight:bolder}code[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], samp[_ngcontent-%COMP%]{font-family:monospace,monospace;font-size:1em}small[_ngcontent-%COMP%]{font-size:80%}sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%]{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub[_ngcontent-%COMP%]{bottom:-.25em}sup[_ngcontent-%COMP%]{top:-.5em}img[_ngcontent-%COMP%]{border-style:none}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{overflow:visible}button[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{text-transform:none}button[_ngcontent-%COMP%], [type=button][_ngcontent-%COMP%], [type=reset][_ngcontent-%COMP%], [type=submit][_ngcontent-%COMP%]{-webkit-appearance:button}button[_ngcontent-%COMP%]::-moz-focus-inner, [type=button][_ngcontent-%COMP%]::-moz-focus-inner, [type=reset][_ngcontent-%COMP%]::-moz-focus-inner, [type=submit][_ngcontent-%COMP%]::-moz-focus-inner{border-style:none;padding:0}button[_ngcontent-%COMP%]:-moz-focusring, [type=button][_ngcontent-%COMP%]:-moz-focusring, [type=reset][_ngcontent-%COMP%]:-moz-focusring, [type=submit][_ngcontent-%COMP%]:-moz-focusring{outline:1px dotted ButtonText}fieldset[_ngcontent-%COMP%]{padding:.35em .75em .625em}legend[_ngcontent-%COMP%]{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress[_ngcontent-%COMP%]{vertical-align:baseline}textarea[_ngcontent-%COMP%]{overflow:auto}[type=checkbox][_ngcontent-%COMP%], [type=radio][_ngcontent-%COMP%]{box-sizing:border-box;padding:0}[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, [type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button{height:auto}[type=search][_ngcontent-%COMP%]{-webkit-appearance:textfield;outline-offset:-2px}[type=search][_ngcontent-%COMP%]::-webkit-search-decoration{-webkit-appearance:none}[_ngcontent-%COMP%]::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details[_ngcontent-%COMP%]{display:block}summary[_ngcontent-%COMP%]{display:list-item}template[_ngcontent-%COMP%]{display:none}[hidden][_ngcontent-%COMP%]{display:none}.btn[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content;border:none;color:#fff;padding:12px 14px;width:150px;height:40px;background:#00838F;border-radius:4px}.btn-small[_ngcontent-%COMP%]{width:80px;height:30px;font-size:small;padding:8px 16px}.btn-small-outline[_ngcontent-%COMP%]{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-small-outline[_ngcontent-%COMP%]:hover{color:#fff;border:none}.btn-medium[_ngcontent-%COMP%]{width:120px;height:40px;font-size:medium;padding:8px 16px}.btn-medium-outline[_ngcontent-%COMP%]{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-medium-outline[_ngcontent-%COMP%]:hover{color:#fff;border:none}.btn-large[_ngcontent-%COMP%]{width:180px;height:50px;font-size:large;padding:4px 6px}.btn-large-outline[_ngcontent-%COMP%]{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-large-outline[_ngcontent-%COMP%]:hover{color:#fff;border:none}.btn-disabled[_ngcontent-%COMP%]{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04)}.btn-disabled[_ngcontent-%COMP%]:hover{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn[_ngcontent-%COMP%]:disabled{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn[_ngcontent-%COMP%]:disabled:hover{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn[_ngcontent-%COMP%]:hover{background:#29ABB9}.btn[_ngcontent-%COMP%]:active{background:#00838F}form[_ngcontent-%COMP%]{display:inherit}.form[_ngcontent-%COMP%]{position:relative;display:inline-block;width:44px;height:22px;cursor:pointer}.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{opacity:0;width:0;height:0}.slide[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0;background-color:#8d949a;border-radius:16px;transition:all .4s;-webkit-transition:all .4s;cursor:pointer}.slide[_ngcontent-%COMP%]:before{content:"";position:absolute;top:calc(50% - 9px);left:2px;height:18px;width:18px;background-color:#fff;border-radius:16px;transition:all .4s;-webkit-transition:all .4s}input[_ngcontent-%COMP%]:checked + .slide[_ngcontent-%COMP%]{background-color:#00838f}input[_ngcontent-%COMP%]:checked + .slide[_ngcontent-%COMP%]:before{transform:translate(22px)}',
            ],
          })),
          k
        );
      })();
      const Ce = ['svg'];
      function Le(k, ve) {
        1 & k &&
          (s.TgZ(0, 'div'),
          s.O4$(),
          s.TgZ(1, 'svg', 4),
          s._UZ(2, 'path', 5, 6),
          s.qZA()());
      }
      let Oe = (() => {
        class k {
          constructor(P) {
            this.broadcastService = P;
          }
          ngOnInit() {
            this.checkbox = new Ve.cw({ control: new Ve.NI(this.isActive) });
          }
          ngOnChanges(P) {
            this.isDisabled && this.isActive
              ? (this.svg?.nativeElement.setAttribute('fill', '#8D949A'),
                this.svg?.nativeElement.setAttribute('stroke', '#8D949A'))
              : (this.svg?.nativeElement.setAttribute('fill', '#FFFFFF'),
                this.svg?.nativeElement.setAttribute('stroke', '#FFFFFF'));
          }
          ngAfterViewInit() {
            this.isDisabled &&
              this.isActive &&
              (this.svg?.nativeElement.setAttribute('fill', '#8D949A'),
              this.svg?.nativeElement.setAttribute('stroke', '#8D949A'));
          }
          onChange(P) {
            (this.isActive = P.target.checked),
              this.broadcastService.dispatch(
                new ne.q(_.T.CHECKBOX_EVENT, {
                  id: this.id,
                  data: {
                    type: 'checkbox',
                    configurationKey: this.id,
                    isActive: this.isActive,
                    attributeConfigurationKey: this.attributeConfigurationKey,
                  },
                })
              );
          }
        }
        return (
          (k.ɵfac = function (P) {
            return new (P || k)(s.Y36(K.M));
          }),
          (k.ɵcmp = s.Xpm({
            type: k,
            selectors: [['phenom-checkbox']],
            viewQuery: function (P, W) {
              if ((1 & P && s.Gf(Ce, 5), 2 & P)) {
                let rt;
                s.iGM((rt = s.CRH())) && (W.svg = rt.first);
              }
            },
            inputs: {
              isActive: 'isActive',
              isDisabled: 'isDisabled',
              id: 'id',
              attributeConfigurationKey: 'attributeConfigurationKey',
            },
            features: [s.TTD],
            decls: 4,
            vars: 5,
            consts: [
              [1, 'check-container', 3, 'for'],
              ['type', 'checkbox', 3, 'id', 'checked', 'disabled', 'change'],
              [1, 'checkmark'],
              [4, 'ngIf'],
              [
                'id',
                'fill-this',
                'width',
                '11',
                'height',
                '9',
                'viewBox',
                '0 0 11 9',
                'fill',
                'none',
                'xmlns',
                'http://www.w3.org/2000/svg',
              ],
              [
                'd',
                'M1.91308 4.03516H1.91326C1.99256 4.03525 2.07081 4.05331 2.14213 4.08798C2.21341 4.12262 2.27591 4.17295 2.32497 4.2352L1.91308 4.03516ZM1.91308 4.03516H1.09394C0.890308 4.03516 0.776602 4.26975 0.902321 4.4292L0.902371 4.42927L4.11214 8.49567L4.11218 8.49573C4.32247 8.76188 4.72568 8.76114 4.93667 8.49617L4.93708 8.49566L10.6597 1.24398C10.6598 1.24378 10.66 1.24358 10.6602 1.24338C10.7884 1.08295 10.6699 0.85 10.4689 0.85H9.6498C9.48941 0.85 9.33668 0.9235 9.2376 1.05044C9.23751 1.05055 9.23742 1.05066 9.23734 1.05077L4.52403 7.02157M1.91308 4.03516L4.52403 7.02157M4.52403 7.02157L2.32506 4.23531L4.52403 7.02157Z',
                'fill',
                '#FFFFFF',
                'stroke',
                '#FFFFFF',
                'stroke-width',
                '0.3',
              ],
              ['svg', ''],
            ],
            template: function (P, W) {
              1 & P &&
                (s.TgZ(0, 'label', 0)(1, 'input', 1),
                s.NdJ('change', function (dt) {
                  return W.onChange(dt);
                }),
                s.qZA(),
                s.TgZ(2, 'span', 2),
                s.YNc(3, Le, 4, 0, 'div', 3),
                s.qZA()()),
                2 & P &&
                  (s.MGl('for', 'checkbox-', W.id, ''),
                  s.xp6(1),
                  s.MGl('id', 'checkbox-', W.id, ''),
                  s.Q6J('checked', W.isActive)('disabled', W.isDisabled),
                  s.xp6(2),
                  s.Q6J('ngIf', W.isActive));
            },
            dependencies: [q.O5],
            styles: [
              '@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27pmO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27rWO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27rGO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27omO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}body[_ngcontent-%COMP%]{margin:0;font-family:Proxima Nova}html[_ngcontent-%COMP%]{line-height:1.15;-webkit-text-size-adjust:100%}body[_ngcontent-%COMP%]{margin:0}main[_ngcontent-%COMP%]{display:block}h1[_ngcontent-%COMP%]{font-size:2em;margin:.67em 0}hr[_ngcontent-%COMP%]{box-sizing:content-box;height:0;overflow:visible}pre[_ngcontent-%COMP%]{font-family:monospace,monospace;font-size:1em}a[_ngcontent-%COMP%]{background-color:transparent}abbr[title][_ngcontent-%COMP%]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b[_ngcontent-%COMP%], strong[_ngcontent-%COMP%]{font-weight:bolder}code[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], samp[_ngcontent-%COMP%]{font-family:monospace,monospace;font-size:1em}small[_ngcontent-%COMP%]{font-size:80%}sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%]{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub[_ngcontent-%COMP%]{bottom:-.25em}sup[_ngcontent-%COMP%]{top:-.5em}img[_ngcontent-%COMP%]{border-style:none}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{overflow:visible}button[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{text-transform:none}button[_ngcontent-%COMP%], [type=button][_ngcontent-%COMP%], [type=reset][_ngcontent-%COMP%], [type=submit][_ngcontent-%COMP%]{-webkit-appearance:button}button[_ngcontent-%COMP%]::-moz-focus-inner, [type=button][_ngcontent-%COMP%]::-moz-focus-inner, [type=reset][_ngcontent-%COMP%]::-moz-focus-inner, [type=submit][_ngcontent-%COMP%]::-moz-focus-inner{border-style:none;padding:0}button[_ngcontent-%COMP%]:-moz-focusring, [type=button][_ngcontent-%COMP%]:-moz-focusring, [type=reset][_ngcontent-%COMP%]:-moz-focusring, [type=submit][_ngcontent-%COMP%]:-moz-focusring{outline:1px dotted ButtonText}fieldset[_ngcontent-%COMP%]{padding:.35em .75em .625em}legend[_ngcontent-%COMP%]{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress[_ngcontent-%COMP%]{vertical-align:baseline}textarea[_ngcontent-%COMP%]{overflow:auto}[type=checkbox][_ngcontent-%COMP%], [type=radio][_ngcontent-%COMP%]{box-sizing:border-box;padding:0}[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, [type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button{height:auto}[type=search][_ngcontent-%COMP%]{-webkit-appearance:textfield;outline-offset:-2px}[type=search][_ngcontent-%COMP%]::-webkit-search-decoration{-webkit-appearance:none}[_ngcontent-%COMP%]::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details[_ngcontent-%COMP%]{display:block}summary[_ngcontent-%COMP%]{display:list-item}template[_ngcontent-%COMP%]{display:none}[hidden][_ngcontent-%COMP%]{display:none}.btn[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content;border:none;color:#fff;padding:12px 14px;width:150px;height:40px;background:#00838F;border-radius:4px}.btn-small[_ngcontent-%COMP%]{width:80px;height:30px;font-size:small;padding:8px 16px}.btn-small-outline[_ngcontent-%COMP%]{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-small-outline[_ngcontent-%COMP%]:hover{color:#fff;border:none}.btn-medium[_ngcontent-%COMP%]{width:120px;height:40px;font-size:medium;padding:8px 16px}.btn-medium-outline[_ngcontent-%COMP%]{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-medium-outline[_ngcontent-%COMP%]:hover{color:#fff;border:none}.btn-large[_ngcontent-%COMP%]{width:180px;height:50px;font-size:large;padding:4px 6px}.btn-large-outline[_ngcontent-%COMP%]{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-large-outline[_ngcontent-%COMP%]:hover{color:#fff;border:none}.btn-disabled[_ngcontent-%COMP%]{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04)}.btn-disabled[_ngcontent-%COMP%]:hover{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn[_ngcontent-%COMP%]:disabled{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn[_ngcontent-%COMP%]:disabled:hover{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn[_ngcontent-%COMP%]:hover{background:#29ABB9}.btn[_ngcontent-%COMP%]:active{background:#00838F}.check-container[_ngcontent-%COMP%]{box-sizing:border-box;cursor:pointer}.check-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:none}.checkmark[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;box-sizing:border-box;height:16px;width:16px;border-radius:2px;background-color:#fff}.check-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] ~ .checkmark[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #C2C5C8}.check-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ .checkmark[_ngcontent-%COMP%]{background-color:#00838f;border:1px solid #00838F}.check-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled ~ .checkmark[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #C2C5C8;cursor:not-allowed}.check-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ .checkmark[_ngcontent-%COMP%]:after{display:block}',
            ],
          })),
          k
        );
      })();
      function Ae(k, ve) {
        1 & k &&
          (s.ynx(0),
          s.TgZ(1, 'span', 6),
          s._uU(2, 'Select a Locale'),
          s.qZA(),
          s.BQk());
      }
      function te(k, ve) {
        1 & k &&
          (s.ynx(0),
          s.TgZ(1, 'div', 10)(2, 'span', 11),
          s._uU(3, 'SID '),
          s.qZA()(),
          s.BQk());
      }
      function Pe(k, ve) {
        if (
          (1 & k &&
            (s.ynx(0),
            s.TgZ(1, 'div', 10)(2, 'span', 11),
            s._uU(3),
            s.qZA()(),
            s.BQk()),
          2 & k)
        ) {
          const P = s.oxw(3);
          s.xp6(3), s.hij('Phone Number: ', P.phnNumber, ' ');
        }
      }
      function G(k, ve) {
        if (
          (1 & k &&
            (s.ynx(0),
            s.TgZ(1, 'span', 7),
            s._uU(2),
            s.qZA(),
            s.TgZ(3, 'div', 8)(4, 'span', 9),
            s._uU(5),
            s.qZA(),
            s.YNc(6, te, 4, 0, 'ng-container', 2),
            s.YNc(7, Pe, 4, 1, 'ng-container', 2),
            s.qZA(),
            s.BQk()),
          2 & k)
        ) {
          const P = s.oxw(2);
          s.xp6(2),
            s.Oqu(P.experienceType),
            s.xp6(3),
            s.Oqu(P.botType),
            s.xp6(1),
            s.Q6J(
              'ngIf',
              'Employee Experience' === P.experienceType &&
                'SMS Bot' === P.botType
            ),
            s.xp6(1),
            s.Q6J('ngIf', 'SMS Bot' === P.botType);
        }
      }
      function Q(k, ve) {
        1 & k && (s.TgZ(0, 'button', 12), s._uU(1, ' Disconnect '), s.qZA());
      }
      function B(k, ve) {
        1 & k && s.GkF(0);
      }
      function ce(k, ve) {
        if (
          (1 & k &&
            (s.TgZ(0, 'section', 1),
            s.YNc(1, Ae, 3, 0, 'ng-container', 2),
            s.YNc(2, G, 8, 4, 'ng-container', 2),
            s.TgZ(3, 'div', 3)(4, 'button', 4),
            s._uU(5, ' Reset to default '),
            s.qZA(),
            s.YNc(6, Q, 2, 0, 'button', 5),
            s.qZA(),
            s.YNc(7, B, 1, 0, 'ng-container', 2),
            s.qZA()),
          2 & k)
        ) {
          const P = s.oxw();
          s.xp6(1),
            s.Q6J('ngIf', P.isLocaleListPage),
            s.xp6(1),
            s.Q6J('ngIf', !P.isLocaleListPage),
            s.xp6(4),
            s.Q6J(
              'ngIf',
              'candidate-facebook-bot' == P.pageId ||
                'employee-msteams-bot' == P.pageId
            ),
            s.xp6(1),
            s.Q6J('ngIf', P.meta.reset);
        }
      }
      let le = (() => {
          class k {
            constructor(P) {
              (this.broadcastService = P), (this.meta = {});
            }
            ngOnInit() {
              this.broadcastService
                .on(_.T.ACCORDION_EVENT_INIT)
                .subscribe(P => {
                  (this.pageId = P.payload.page),
                    P.payload.experienceType &&
                      P.payload.heading &&
                      ((this.experienceType = P.payload.experienceType),
                      (this.botType = P.payload.heading));
                });
            }
          }
          return (
            (k.ɵfac = function (P) {
              return new (P || k)(s.Y36(K.M));
            }),
            (k.ɵcmp = s.Xpm({
              type: k,
              selectors: [['app-header']],
              inputs: {
                experienceType: 'experienceType',
                botType: 'botType',
                phnNumber: 'phnNumber',
                isLocaleListPage: 'isLocaleListPage',
                meta: 'meta',
              },
              decls: 1,
              vars: 1,
              consts: [
                ['class', 'header', 4, 'ngIf'],
                [1, 'header'],
                [4, 'ngIf'],
                [1, 'reset-disconnect-buttons'],
                [1, 'reset-button'],
                ['class', 'disconnect-button', 4, 'ngIf'],
                [1, 'only-title'],
                ['id', 'experience-type', 1, 'experience-type'],
                [1, 'sms-bound'],
                ['id', 'bot-type', 1, 'bot-type'],
                [1, 'sms-pad'],
                [1, 'sms'],
                [1, 'disconnect-button'],
              ],
              template: function (P, W) {
                1 & P && s.YNc(0, ce, 8, 4, 'section', 0),
                  2 & P &&
                    s.Q6J('ngIf', W.isLocaleListPage || W.experienceType);
              },
              dependencies: [q.O5],
              styles: [
                '@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27pmO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27rWO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27rGO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27omO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}body[_ngcontent-%COMP%]{margin:0;font-family:Proxima Nova}html[_ngcontent-%COMP%]{line-height:1.15;-webkit-text-size-adjust:100%}body[_ngcontent-%COMP%]{margin:0}main[_ngcontent-%COMP%]{display:block}h1[_ngcontent-%COMP%]{font-size:2em;margin:.67em 0}hr[_ngcontent-%COMP%]{box-sizing:content-box;height:0;overflow:visible}pre[_ngcontent-%COMP%]{font-family:monospace,monospace;font-size:1em}a[_ngcontent-%COMP%]{background-color:transparent}abbr[title][_ngcontent-%COMP%]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b[_ngcontent-%COMP%], strong[_ngcontent-%COMP%]{font-weight:bolder}code[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], samp[_ngcontent-%COMP%]{font-family:monospace,monospace;font-size:1em}small[_ngcontent-%COMP%]{font-size:80%}sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%]{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub[_ngcontent-%COMP%]{bottom:-.25em}sup[_ngcontent-%COMP%]{top:-.5em}img[_ngcontent-%COMP%]{border-style:none}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{overflow:visible}button[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{text-transform:none}button[_ngcontent-%COMP%], [type=button][_ngcontent-%COMP%], [type=reset][_ngcontent-%COMP%], [type=submit][_ngcontent-%COMP%]{-webkit-appearance:button}button[_ngcontent-%COMP%]::-moz-focus-inner, [type=button][_ngcontent-%COMP%]::-moz-focus-inner, [type=reset][_ngcontent-%COMP%]::-moz-focus-inner, [type=submit][_ngcontent-%COMP%]::-moz-focus-inner{border-style:none;padding:0}button[_ngcontent-%COMP%]:-moz-focusring, [type=button][_ngcontent-%COMP%]:-moz-focusring, [type=reset][_ngcontent-%COMP%]:-moz-focusring, [type=submit][_ngcontent-%COMP%]:-moz-focusring{outline:1px dotted ButtonText}fieldset[_ngcontent-%COMP%]{padding:.35em .75em .625em}legend[_ngcontent-%COMP%]{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress[_ngcontent-%COMP%]{vertical-align:baseline}textarea[_ngcontent-%COMP%]{overflow:auto}[type=checkbox][_ngcontent-%COMP%], [type=radio][_ngcontent-%COMP%]{box-sizing:border-box;padding:0}[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, [type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button{height:auto}[type=search][_ngcontent-%COMP%]{-webkit-appearance:textfield;outline-offset:-2px}[type=search][_ngcontent-%COMP%]::-webkit-search-decoration{-webkit-appearance:none}[_ngcontent-%COMP%]::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details[_ngcontent-%COMP%]{display:block}summary[_ngcontent-%COMP%]{display:list-item}template[_ngcontent-%COMP%]{display:none}[hidden][_ngcontent-%COMP%]{display:none}.btn[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content;border:none;color:#fff;padding:12px 14px;width:150px;height:40px;background:#00838F;border-radius:4px}.btn-small[_ngcontent-%COMP%]{width:80px;height:30px;font-size:small;padding:8px 16px}.btn-small-outline[_ngcontent-%COMP%]{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-small-outline[_ngcontent-%COMP%]:hover{color:#fff;border:none}.btn-medium[_ngcontent-%COMP%]{width:120px;height:40px;font-size:medium;padding:8px 16px}.btn-medium-outline[_ngcontent-%COMP%]{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-medium-outline[_ngcontent-%COMP%]:hover{color:#fff;border:none}.btn-large[_ngcontent-%COMP%]{width:180px;height:50px;font-size:large;padding:4px 6px}.btn-large-outline[_ngcontent-%COMP%]{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-large-outline[_ngcontent-%COMP%]:hover{color:#fff;border:none}.btn-disabled[_ngcontent-%COMP%]{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04)}.btn-disabled[_ngcontent-%COMP%]:hover{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn[_ngcontent-%COMP%]:disabled{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn[_ngcontent-%COMP%]:disabled:hover{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn[_ngcontent-%COMP%]:hover{background:#29ABB9}.btn[_ngcontent-%COMP%]:active{background:#00838F}.header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;padding:16px 30px 20px 32px;gap:10px;background:#FFFFFF;box-shadow:inset 0 -1px #dfe3e6}.header[_ngcontent-%COMP%]   .only-title[_ngcontent-%COMP%]{font-family:Proxima Nova;font-style:normal;font-weight:500;font-size:24px;line-height:32px;color:#1c2024;margin-top:24px;margin-bottom:10px}.header[_ngcontent-%COMP%]   .experience-type[_ngcontent-%COMP%]{font-family:Proxima Nova;font-style:normal;font-weight:400;font-size:14px;line-height:20px;color:#4b6479;margin-bottom:20px}.header[_ngcontent-%COMP%]   .sms-bound[_ngcontent-%COMP%]{display:flex;align-items:center;gap:20px}.header[_ngcontent-%COMP%]   .sms-bound[_ngcontent-%COMP%]   .bot-type[_ngcontent-%COMP%]{font-family:Proxima Nova;font-style:normal;font-weight:500;font-size:24px;line-height:32px;color:#1c2024}.header[_ngcontent-%COMP%]   .sms-bound[_ngcontent-%COMP%]   .sms-pad[_ngcontent-%COMP%]{padding:1px 8px;background:#EFF8F8;border-radius:4px}.header[_ngcontent-%COMP%]   .sms-bound[_ngcontent-%COMP%]   .sms-pad[_ngcontent-%COMP%]   .sms[_ngcontent-%COMP%]{font-family:Proxima Nova;font-style:normal;font-weight:400;font-size:12px;line-height:20px;color:#006e78}.header[_ngcontent-%COMP%]   .reset-disconnect-buttons[_ngcontent-%COMP%]{display:flex;gap:10px;position:absolute;top:6%;right:5%}.header[_ngcontent-%COMP%]   .reset-disconnect-buttons[_ngcontent-%COMP%]   .reset-button[_ngcontent-%COMP%]{cursor:pointer;padding:4px 14px;border:#00838F 1px solid;background-color:#fff;border-radius:4px;font-family:Proxima Nova;font-style:normal;font-weight:400;font-size:16px;line-height:22px;color:#00838f}.header[_ngcontent-%COMP%]   .reset-disconnect-buttons[_ngcontent-%COMP%]   .disconnect-button[_ngcontent-%COMP%]{cursor:pointer;padding:4px 14px;border:#00838F 1px solid;background-color:#00838f;border-radius:4px;font-family:Proxima Nova;font-style:normal;font-weight:400;font-size:16px;line-height:22px;color:#fff}',
              ],
            })),
            k
          );
        })(),
        Ne = (() => {
          class k {
            constructor() {}
            ngOnInit() {}
          }
          return (
            (k.ɵfac = function (P) {
              return new (P || k)();
            }),
            (k.ɵcmp = s.Xpm({
              type: k,
              selectors: [['app-loader']],
              decls: 2,
              vars: 0,
              consts: [
                [1, 'loading-block'],
                [
                  'src',
                  'assets/images/loader-pp.gif',
                  'width',
                  '40px',
                  'height',
                  '40px',
                ],
              ],
              template: function (P, W) {
                1 & P && (s.TgZ(0, 'div', 0), s._UZ(1, 'img', 1), s.qZA());
              },
              styles: [
                '.loading-block[_ngcontent-%COMP%]{height:520px;line-height:520px;display:flex;align-items:center;justify-content:center}',
              ],
            })),
            k
          );
        })();
      const st = function (k) {
          return { 'border-color': k };
        },
        mt = function (k) {
          return { disabled: k };
        };
      let yt = (() => {
          class k {
            constructor(P) {
              (this.broadcastService = P), (this.change = new s.vpe());
            }
            ngOnInit() {}
            onChange(P) {
              (this.isActive = P.target.checked),
                this.broadcastService.dispatch(
                  new ne.q(_.T.RADIO_EMITTER, {
                    id: this.data.id,
                    data: {
                      type: 'radio',
                      isActive: this.data.version,
                      configurationKey: this.data.configurationKey,
                    },
                  })
                );
            }
          }
          return (
            (k.ɵfac = function (P) {
              return new (P || k)(s.Y36(K.M));
            }),
            (k.ɵcmp = s.Xpm({
              type: k,
              selectors: [['radio']],
              inputs: { data: 'data', isDisabled: 'isDisabled' },
              outputs: { change: 'change' },
              decls: 2,
              vars: 8,
              consts: [
                [1, 'label', 3, 'ngStyle'],
                [
                  'id',
                  'radio-button',
                  'type',
                  'radio',
                  'name',
                  'chatbot-flow-version',
                  1,
                  'checkbox',
                  3,
                  'ngClass',
                  'disabled',
                  'checked',
                  'change',
                ],
              ],
              template: function (P, W) {
                1 & P &&
                  (s.TgZ(0, 'label', 0)(1, 'input', 1),
                  s.NdJ('change', function (dt) {
                    return W.onChange(dt);
                  }),
                  s.qZA()()),
                  2 & P &&
                    (s.Q6J(
                      'ngStyle',
                      s.VKq(4, st, W.isDisabled ? '#93A1AB' : '#058EA0')
                    ),
                    s.xp6(1),
                    s.Q6J('ngClass', s.VKq(6, mt, W.isDisabled))(
                      'disabled',
                      W.isDisabled
                    )('checked', null == W.data ? null : W.data.isEnabled));
              },
              dependencies: [q.mk, q.PC],
              styles: [
                '.label[_ngcontent-%COMP%]{display:inline-block;border:#058EA0 .11em solid;height:16px;width:16px;border-radius:50%;position:relative;transition:all 1s;cursor:pointer}.checkbox[_ngcontent-%COMP%]{-webkit-appearance:none;appearance:none}.checkbox[_ngcontent-%COMP%]:before{display:block;content:"";width:8px;height:8px}.checkbox[_ngcontent-%COMP%]:checked:before{position:absolute;top:3px;left:3px;width:10px;height:10px;background:#058EA0;border-radius:50%;transition:all .1s}.checkbox[_ngcontent-%COMP%]:checked:disabled:before{position:absolute;top:3px;left:3px;width:10px;height:10px;background:#93A1AB;border-radius:50%;transition:all 1s}',
              ],
            })),
            k
          );
        })(),
        Ue = (() => {
          class k {
            constructor() {}
            toFormGroup(P) {
              const W = {};
              return (
                P.forEach(rt => {
                  W[rt.key] = rt.required
                    ? new Ve.NI(rt.value || '', Ve.kI.required)
                    : new Ve.NI(rt.value || '');
                }),
                new Ve.cw(W)
              );
            }
          }
          return (
            (k.ɵfac = function (P) {
              return new (P || k)();
            }),
            (k.ɵprov = s.Yz7({
              token: k,
              factory: k.ɵfac,
              providedIn: 'root',
            })),
            k
          );
        })();
      function jt(k, ve) {
        if (
          (1 & k &&
            (s.ynx(0),
            s.TgZ(1, 'span', 3),
            s._UZ(2, 'img', 4),
            s.qZA(),
            s.BQk()),
          2 & k)
        ) {
          const P = s.oxw();
          s.xp6(2), s.Q6J('src', P.icon, s.LSH);
        }
      }
      const an = function (k) {
        return { 'phenom-button-position-right': k };
      };
      let Tt = (() => {
        class k {
          constructor() {
            (this.type = 'button'), (this.onClick = new s.vpe());
          }
          ngOnInit() {}
          onButtonClick() {
            this.onClick.emit({ data: { label: this.label } });
          }
        }
        return (
          (k.ɵfac = function (P) {
            return new (P || k)();
          }),
          (k.ɵcmp = s.Xpm({
            type: k,
            selectors: [['app-button']],
            inputs: {
              type: 'type',
              label: 'label',
              icon: 'icon',
              iconPosition: ['iconPosotion', 'iconPosition'],
              buttonClass: 'buttonClass',
              isDisabled: 'isDisabled',
            },
            outputs: { onClick: 'onClick' },
            decls: 4,
            vars: 9,
            consts: [
              [
                1,
                'btn',
                'phenom-button',
                3,
                'type',
                'ngClass',
                'disabled',
                'click',
              ],
              [4, 'ngIf'],
              ['id', 'btn-text'],
              [1, 'icon'],
              ['height', '20px', 'alt', 'not_loaded', 3, 'src'],
            ],
            template: function (P, W) {
              1 & P &&
                (s.TgZ(0, 'button', 0),
                s.NdJ('click', function () {
                  return W.onButtonClick();
                }),
                s.YNc(1, jt, 3, 1, 'ng-container', 1),
                s.TgZ(2, 'span', 2),
                s._uU(3),
                s.qZA()()),
                2 & P &&
                  (s.Tol(W.buttonClass),
                  s.Q6J('type', W.type)(
                    'ngClass',
                    s.VKq(7, an, 'right' == W.iconPosition)
                  )('disabled', W.isDisabled),
                  s.xp6(1),
                  s.Q6J('ngIf', W.icon),
                  s.xp6(2),
                  s.Oqu(W.label));
            },
            dependencies: [q.mk, q.O5],
            styles: [
              '@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27pmO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27rWO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27rGO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27omO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}body[_ngcontent-%COMP%]{margin:0;font-family:Proxima Nova}html[_ngcontent-%COMP%]{line-height:1.15;-webkit-text-size-adjust:100%}body[_ngcontent-%COMP%]{margin:0}main[_ngcontent-%COMP%]{display:block}h1[_ngcontent-%COMP%]{font-size:2em;margin:.67em 0}hr[_ngcontent-%COMP%]{box-sizing:content-box;height:0;overflow:visible}pre[_ngcontent-%COMP%]{font-family:monospace,monospace;font-size:1em}a[_ngcontent-%COMP%]{background-color:transparent}abbr[title][_ngcontent-%COMP%]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b[_ngcontent-%COMP%], strong[_ngcontent-%COMP%]{font-weight:bolder}code[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], samp[_ngcontent-%COMP%]{font-family:monospace,monospace;font-size:1em}small[_ngcontent-%COMP%]{font-size:80%}sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%]{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub[_ngcontent-%COMP%]{bottom:-.25em}sup[_ngcontent-%COMP%]{top:-.5em}img[_ngcontent-%COMP%]{border-style:none}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{overflow:visible}button[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{text-transform:none}button[_ngcontent-%COMP%], [type=button][_ngcontent-%COMP%], [type=reset][_ngcontent-%COMP%], [type=submit][_ngcontent-%COMP%]{-webkit-appearance:button}button[_ngcontent-%COMP%]::-moz-focus-inner, [type=button][_ngcontent-%COMP%]::-moz-focus-inner, [type=reset][_ngcontent-%COMP%]::-moz-focus-inner, [type=submit][_ngcontent-%COMP%]::-moz-focus-inner{border-style:none;padding:0}button[_ngcontent-%COMP%]:-moz-focusring, [type=button][_ngcontent-%COMP%]:-moz-focusring, [type=reset][_ngcontent-%COMP%]:-moz-focusring, [type=submit][_ngcontent-%COMP%]:-moz-focusring{outline:1px dotted ButtonText}fieldset[_ngcontent-%COMP%]{padding:.35em .75em .625em}legend[_ngcontent-%COMP%]{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress[_ngcontent-%COMP%]{vertical-align:baseline}textarea[_ngcontent-%COMP%]{overflow:auto}[type=checkbox][_ngcontent-%COMP%], [type=radio][_ngcontent-%COMP%]{box-sizing:border-box;padding:0}[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, [type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button{height:auto}[type=search][_ngcontent-%COMP%]{-webkit-appearance:textfield;outline-offset:-2px}[type=search][_ngcontent-%COMP%]::-webkit-search-decoration{-webkit-appearance:none}[_ngcontent-%COMP%]::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details[_ngcontent-%COMP%]{display:block}summary[_ngcontent-%COMP%]{display:list-item}template[_ngcontent-%COMP%]{display:none}[hidden][_ngcontent-%COMP%]{display:none}.btn[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content;border:none;color:#fff;padding:12px 14px;width:150px;height:40px;background:#00838F;border-radius:4px}.btn-small[_ngcontent-%COMP%]{width:80px;height:30px;font-size:small;padding:8px 16px}.btn-small-outline[_ngcontent-%COMP%]{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-small-outline[_ngcontent-%COMP%]:hover{color:#fff;border:none}.btn-medium[_ngcontent-%COMP%]{width:120px;height:40px;font-size:medium;padding:8px 16px}.btn-medium-outline[_ngcontent-%COMP%]{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-medium-outline[_ngcontent-%COMP%]:hover{color:#fff;border:none}.btn-large[_ngcontent-%COMP%]{width:180px;height:50px;font-size:large;padding:4px 6px}.btn-large-outline[_ngcontent-%COMP%]{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-large-outline[_ngcontent-%COMP%]:hover{color:#fff;border:none}.btn-disabled[_ngcontent-%COMP%]{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04)}.btn-disabled[_ngcontent-%COMP%]:hover{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn[_ngcontent-%COMP%]:disabled{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn[_ngcontent-%COMP%]:disabled:hover{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn[_ngcontent-%COMP%]:hover{background:#29ABB9}.btn[_ngcontent-%COMP%]:active{background:#00838F}.phenom-button[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content;display:flex;cursor:pointer;align-items:center;justify-content:space-around}.phenom-button-position-right[_ngcontent-%COMP%]{flex-direction:row-reverse}',
            ],
          })),
          k
        );
      })();
      function Mt(k, ve) {
        1 & k && (s.ynx(0), s._UZ(1, 'app-button', 3), s.BQk()),
          2 & k &&
            (s.xp6(1), s.Q6J('label', 'Copy')('buttonClass', 'btn-small'));
      }
      const qt = function (k, ve) {
        return { 'p-input-box-valid': k, 'p-input-box-invalid': ve };
      };
      let Me = (() => {
        class k {
          constructor() {
            (this.isCopyEnabled = !1), (this.currentValue = new s.vpe());
          }
          ngOnInit() {}
          emitCurrentValue() {
            this.currentValue.emit({ id: this.id, value: this.control.value });
          }
        }
        return (
          (k.ɵfac = function (P) {
            return new (P || k)();
          }),
          (k.ɵcmp = s.Xpm({
            type: k,
            selectors: [['input-box']],
            inputs: {
              name: 'name',
              placeholder: 'placeholder',
              value: 'value',
              formControlName: 'formControlName',
              className: 'className',
              state: 'state',
              id: 'id',
              isCopyEnabled: 'isCopyEnabled',
              control: 'control',
            },
            outputs: { currentValue: 'currentValue' },
            features: [
              s._Bn([
                { provide: Ve.JU, useExisting: (0, s.Gpc)(() => k), multi: !0 },
              ]),
            ],
            decls: 3,
            vars: 9,
            consts: [
              [1, 'p-input-box', 'p-input-box-success'],
              [
                'type',
                'text',
                'autocomplete',
                'off',
                3,
                'id',
                'name',
                'placeholder',
                'formControl',
                'ngClass',
                'keyup',
              ],
              [4, 'ngIf'],
              [3, 'label', 'buttonClass'],
            ],
            template: function (P, W) {
              1 & P &&
                (s.TgZ(0, 'span', 0)(1, 'input', 1),
                s.NdJ('keyup', function () {
                  return W.emitCurrentValue();
                }),
                s.qZA(),
                s.YNc(2, Mt, 2, 2, 'ng-container', 2),
                s.qZA()),
                2 & P &&
                  (s.xp6(1),
                  s.Q6J('id', W.id)('name', W.name)(
                    'placeholder',
                    W.placeholder ? W.placeholder : ''
                  )('formControl', W.control)(
                    'ngClass',
                    s.WLB(6, qt, 'valid' == W.state, 'invalid' == W.state)
                  ),
                  s.xp6(1),
                  s.Q6J('ngIf', W.isCopyEnabled));
            },
            dependencies: [q.mk, q.O5, Ve.Fj, Ve.JJ, Ve.oH, Tt],
            styles: [
              '.p-input-box[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;color:#8c9ba5;box-sizing:border-box;min-width:240px;height:40px;padding:0 3px 0 12px;background:#FFFFFF;border:1px solid #DFE3E6;box-shadow:inset 0 0 0 1px #66717b40,inset 0 1px 2px #66717b36;border-radius:4px;outline:none;width:100%}.p-input-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:30px;color:#8c9ba5;width:-webkit-fill-available;border:none;outline:none;box-sizing:border-box;min-width:240px;border-radius:4px}.p-input-box[_ngcontent-%COMP%]:focus{outline:none}.p-input-box-invalid[_ngcontent-%COMP%]{border:1px solid #DE350B}.p-input-box-invalid[_ngcontent-%COMP%]:focus{border:1px solid #DE350B}.p-input-box-invalid[_ngcontent-%COMP%]:active{border:2px solid #DE350B}.p-input-box-invalid[_ngcontent-%COMP%]:hover{border:1px solid #DE350B}.p-input-box-valid[_ngcontent-%COMP%]{border:1px solid #36B37E}.p-input-box-valid[_ngcontent-%COMP%]:focus{border:1px solid #36B37E}.p-input-box-valid[_ngcontent-%COMP%]:active{border:2px solid #36B37E}.p-input-box-valid[_ngcontent-%COMP%]:hover{border:1px solid #36B37E}.p-input-box[_ngcontent-%COMP%]:disabled{background:rgba(21,41,53,.04);border:none;outline:none;cursor:not-allowed}',
            ],
          })),
          k
        );
      })();
      function pe(k, ve) {
        if (
          (1 & k &&
            (s.ynx(0),
            s.TgZ(1, 'div', 9)(2, 'label'),
            s._uU(3),
            s.qZA(),
            s._UZ(4, 'input-box', 10),
            s.qZA(),
            s.BQk()),
          2 & k)
        ) {
          const P = ve.$implicit,
            W = ve.index,
            rt = s.oxw(2);
          s.xp6(3),
            s.hij(' ', null == P ? null : P.label, ' '),
            s.xp6(1),
            s.Q6J('placeholder', null == P ? null : P.placeholder)(
              'control',
              rt.formControlList[W]
            )('isCopyEnabled', null == P ? null : P.isCopyEnabled);
        }
      }
      function Z(k, ve) {
        if (1 & k) {
          const P = s.EpF();
          s.TgZ(0, 'main', 1)(1, 'div', 2)(2, 'p', 3),
            s._uU(3),
            s.qZA(),
            s.TgZ(4, 'form', 4),
            s.NdJ('ngSubmit', function () {
              s.CHM(P);
              const rt = s.oxw();
              return s.KtG(rt.submitForm());
            }),
            s.TgZ(5, 'div', 5),
            s.YNc(6, pe, 5, 4, 'ng-container', 6),
            s.TgZ(7, 'footer', 7)(8, 'app-button', 8),
            s.NdJ('onClick', function () {
              s.CHM(P);
              const rt = s.oxw();
              return s.KtG(rt.submitForm());
            }),
            s.qZA()()()()()();
        }
        if (2 & k) {
          const P = s.oxw();
          s.xp6(3),
            s.hij(
              ' ',
              null == P.skeleton || null == P.skeleton.configurations
                ? null
                : P.skeleton.configurations.heading,
              ' '
            ),
            s.xp6(3),
            s.Q6J(
              'ngForOf',
              null == P.skeleton || null == P.skeleton.configurations
                ? null
                : P.skeleton.configurations.inputs
            ),
            s.xp6(2),
            s.Q6J(
              'label',
              null == P.skeleton ||
                null == P.skeleton.configurations ||
                null == P.skeleton.configurations.submitButton
                ? null
                : P.skeleton.configurations.submitButton.label
            )('buttonClass', '')(
              'isDisabled',
              'INVALID' == P.provisioningForm.status
            );
        }
      }
      let ke = (() => {
        class k {
          constructor(P, W) {
            (this.questionControlService = P),
              (this.sharedService = W),
              (this.isDataLoaded = !1),
              (this.formControlList = []);
          }
          ngOnInit() {
            this.getDashboardSchema(this.pageId);
          }
          getDashboardSchema(P) {
            this.addTranslation(),
              (this.provisioningForm = this.questionControlService.toFormGroup(
                this.skeleton?.configurations?.inputs
              )),
              (this.controlList = Object.keys(this.provisioningForm.controls)),
              this.controlList.forEach((W, rt) => {
                this.formControlList[rt] = this.provisioningForm.get(W);
              });
          }
          addTranslation() {
            this.sharedService
              .getI18nValues()
              .pipe((0, X.U)(P => P))
              .subscribe(P => {
                (this.skeleton.heading = P[this.skeleton.heading]),
                  (this.skeleton.configurations.submitButton.label = P[
                    this.skeleton.configurations.submitButton.label
                  ]
                    ? P[this.skeleton.configurations.submitButton.label]
                    : this.skeleton.configurations.submitButton.label),
                  (this.skeleton.configurations.heading = P[
                    this.skeleton.configurations.heading
                  ]
                    ? P[this.skeleton.configurations.heading]
                    : this.skeleton.configurations.heading),
                  (this.skeleton.configurations.inputs =
                    this.skeleton.configurations.inputs.map(
                      W => (
                        (this.isDataLoaded = !0),
                        (W.label = P[W.label] ? P[W.label] : W.label),
                        (W.placeholder = P[W.placeholder]
                          ? P[W.placeholder]
                          : W.placeholder),
                        W
                      )
                    ));
              });
          }
          submitForm() {
            console.log(this.provisioningForm.value),
              console.log(this.provisioningForm?.status);
          }
        }
        return (
          (k.ɵfac = function (P) {
            return new (P || k)(s.Y36(Ue), s.Y36(ee.F));
          }),
          (k.ɵcmp = s.Xpm({
            type: k,
            selectors: [['setup']],
            inputs: { pageId: 'pageId', skeleton: 'skeleton' },
            decls: 1,
            vars: 1,
            consts: [
              ['class', 'provision-container', 4, 'ngIf'],
              [1, 'provision-container'],
              [1, 'container-body'],
              [1, 'heading-block'],
              ['FormGroup', 'provisioningForm', 3, 'ngSubmit'],
              [1, 'form-block'],
              [4, 'ngFor', 'ngForOf'],
              [1, 'footer-block'],
              [3, 'label', 'buttonClass', 'isDisabled', 'onClick'],
              [1, 'input-block'],
              [3, 'placeholder', 'control', 'isCopyEnabled'],
            ],
            template: function (P, W) {
              1 & P && s.YNc(0, Z, 9, 5, 'main', 0),
                2 & P && s.Q6J('ngIf', W.isDataLoaded);
            },
            dependencies: [q.sg, q.O5, Me, Tt],
            styles: [
              '.provision-container[_ngcontent-%COMP%]{width:100%}.provision-container[_ngcontent-%COMP%]   .disabled-state[_ngcontent-%COMP%]{opacity:.6;cursor:not-allowed}@media screen and (max-width: 1500px){.provision-container[_ngcontent-%COMP%]{width:100%}}.provision-container[_ngcontent-%COMP%]   .container-body[_ngcontent-%COMP%]{width:85%;padding:32px}.provision-container[_ngcontent-%COMP%]   .container-body[_ngcontent-%COMP%]   .heading-block[_ngcontent-%COMP%]{padding:10px 0;box-shadow:inset 0 -1px #dfe3e6}.provision-container[_ngcontent-%COMP%]   .container-body[_ngcontent-%COMP%]   .form-block[_ngcontent-%COMP%]{width:98%;color:#152935;font-weight:400;font-size:13px;line-height:20px}.provision-container[_ngcontent-%COMP%]   .container-body[_ngcontent-%COMP%]   .form-block[_ngcontent-%COMP%]   .input-block[_ngcontent-%COMP%]{margin-bottom:24px;display:flex;flex-direction:column;gap:4px}.provision-container[_ngcontent-%COMP%]   .container-body[_ngcontent-%COMP%]   .footer-block[_ngcontent-%COMP%]{float:right}',
            ],
          })),
          k
        );
      })();
      var Ye = v(8246);
      function Ke(k, ve) {
        if (1 & k) {
          const P = s.EpF();
          s.TgZ(0, 'div', 1)(1, 'div', 2)(2, 'i', 3),
            s.ALo(3, 'safe'),
            s._uU(4, ' provisioningIcon '),
            s.qZA(),
            s.TgZ(5, 'span'),
            s._uU(6),
            s.qZA()(),
            s.TgZ(7, 'div', 4)(8, 'div', 5)(9, 'div'),
            s._uU(10),
            s.qZA(),
            s.TgZ(11, 'div')(12, 'app-button', 6),
            s.NdJ('onClick', function () {
              s.CHM(P);
              const rt = s.oxw();
              return s.KtG(rt.provisionChannel());
            }),
            s.qZA()()(),
            s._UZ(13, 'hr'),
            s.TgZ(14, 'div', 7)(15, 'i', 3),
            s.ALo(16, 'safe'),
            s._uU(17, ' Icon '),
            s.qZA(),
            s.TgZ(18, 'div'),
            s._uU(19),
            s.qZA()()()();
        }
        if (2 & k) {
          const P = s.oxw();
          s.xp6(2),
            s.Q6J('innerHtml', s.xi3(3, 7, P.skeleton.svg, 'html'), s.oJD),
            s.xp6(4),
            s.hij(' ', P.skeleton.heading, ' '),
            s.xp6(4),
            s.hij(' ', P.skeleton.subHeading, ' '),
            s.xp6(2),
            s.Q6J('label', P.skeleton.buttonText)(
              'buttonClass',
              'btn btn-small'
            ),
            s.xp6(3),
            s.Q6J(
              'innerHtml',
              s.xi3(16, 10, P.skeleton.infoSvg, 'html'),
              s.oJD
            ),
            s.xp6(4),
            s.hij(' ', P.skeleton.infoText, ' ');
        }
      }
      let gt = (() => {
        class k {
          constructor(P) {
            (this.httpService = P), (this.provisioned = new s.vpe());
          }
          ngOnInit() {}
          provisionChannel() {
            let P = {
              refNum: localStorage.getItem('refNum'),
              locale: localStorage.getItem('locale'),
              experienceType: localStorage.getItem('experienceType'),
              channel: localStorage.getItem('channel'),
              customerName: localStorage.getItem('customerName'),
            };
            console.log(P),
              this.httpService
                .httpPost(
                  'v1/customers/provision',
                  'chatbot_configurations_api',
                  P
                )
                .subscribe(W => {
                  this.provisioned.emit({ isProvisioned: !0 });
                });
          }
        }
        return (
          (k.ɵfac = function (P) {
            return new (P || k)(s.Y36(Ee.O));
          }),
          (k.ɵcmp = s.Xpm({
            type: k,
            selectors: [['provision']],
            inputs: { skeleton: 'skeleton' },
            outputs: { provisioned: 'provisioned' },
            decls: 1,
            vars: 1,
            consts: [
              ['class', 'provision', 4, 'ngIf'],
              [1, 'provision'],
              [1, 'header-section'],
              [3, 'innerHtml'],
              [1, 'card'],
              [1, 'card-header'],
              [1, 'custom', 3, 'label', 'buttonClass', 'onClick'],
              [1, 'card-body'],
            ],
            template: function (P, W) {
              1 & P && s.YNc(0, Ke, 20, 13, 'div', 0),
                2 & P && s.Q6J('ngIf', W.skeleton);
            },
            dependencies: [q.O5, Tt, Ye.y],
            styles: [
              '.provision[_ngcontent-%COMP%]{padding:10px 30px;margin-top:20px}.provision[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{border:1px solid #DFE3E6;margin:16px 0}.provision[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]{display:flex;align-items:flex-start;font-size:18px;gap:12px}.provision[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{margin-top:16px;margin-bottom:32px;padding:24px;box-sizing:border-box;width:100%;background:#FFFFFF;border:1px solid #DFE3E6;border-radius:6px;transition:1s all}.provision[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]{color:#414c54;display:flex;justify-content:space-between;align-items:center;font-weight:400;font-size:16px;line-height:20px}.provision[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{font-weight:400;font-size:14px;line-height:20px;color:#54616c;display:flex;align-items:center;gap:18px}',
            ],
          })),
          k
        );
      })();
      const ut = ['viewContainerRef'];
      function St(k, ve) {
        1 & k && (s.ynx(0), s._UZ(1, 'app-loader'), s.BQk());
      }
      function Ht(k, ve) {
        if (1 & k) {
          const P = s.EpF();
          s.ynx(0),
            s.TgZ(1, 'provision', 6),
            s.NdJ('provisioned', function (rt) {
              s.CHM(P);
              const dt = s.oxw(3);
              return s.KtG(dt.provision(rt));
            }),
            s.qZA(),
            s.BQk();
        }
        if (2 & k) {
          const P = s.oxw(3);
          s.xp6(1),
            s.Q6J(
              'skeleton',
              null == P.skeleton ? null : P.skeleton.provisioning
            );
        }
      }
      function tt(k, ve) {
        if ((1 & k && (s.ynx(0), s._UZ(1, 'setup', 8), s.BQk()), 2 & k)) {
          const P = s.oxw(4);
          s.xp6(1),
            s.Q6J('skeleton', null == P.skeleton ? null : P.skeleton.setup);
        }
      }
      function ln(k, ve) {
        if (
          (1 & k &&
            (s.ynx(0),
            s.TgZ(1, 'span', 16),
            s._UZ(2, 'app-toggle', 17),
            s.qZA(),
            s.BQk()),
          2 & k)
        ) {
          const P = s.oxw().$implicit;
          s.xp6(2),
            s.Q6J('id', P.configurationKey)('isActive', P[P.configurationKey]);
        }
      }
      const Dt = function (k) {
        return { 'd-i': k };
      };
      function kt(k, ve) {
        if ((1 & k && (s.TgZ(0, 'span', 18), s._uU(1), s.qZA()), 2 & k)) {
          const P = s.oxw().$implicit;
          s.Q6J('ngClass', s.VKq(2, Dt, P.configurationKey)),
            s.xp6(1),
            s.hij(' ', P.infoText, ' ');
        }
      }
      function Fn(k, ve) {
        if (
          (1 & k && (s.TgZ(0, 'span', 16), s._UZ(1, 'app-toggle', 17), s.qZA()),
          2 & k)
        ) {
          const P = s.oxw().$implicit;
          s.xp6(1),
            s.Q6J('id', P.configurationKey)('isActive', P[P.configurationKey]);
        }
      }
      function zo(k, ve) {
        if (
          (1 & k &&
            (s.TgZ(0, 'div', 27)(1, 'div'),
            s._UZ(2, 'radio', 28),
            s.qZA(),
            s.TgZ(3, 'div'),
            s._uU(4),
            s._UZ(5, 'br'),
            s._uU(6),
            s.qZA()()),
          2 & k)
        ) {
          const P = ve.$implicit,
            W = s.oxw(2).$implicit;
          s.xp6(2),
            s.Q6J('isDisabled', !W[W.configurationKey])('data', P),
            s.xp6(2),
            s.hij(' ', P.literal, ' '),
            s.xp6(2),
            s.hij(' ', P.infoText, ' ');
        }
      }
      function _n(k, ve) {
        if (
          (1 & k &&
            (s.ynx(0),
            s.TgZ(1, 'div', 25),
            s.YNc(2, zo, 7, 4, 'div', 26),
            s.qZA(),
            s.BQk()),
          2 & k)
        ) {
          const P = s.oxw().$implicit;
          s.xp6(2), s.Q6J('ngForOf', P.flows);
        }
      }
      function he(k, ve) {
        if (
          (1 & k && (s.ynx(0), s._UZ(1, 'phenom-checkbox', 35), s.BQk()), 2 & k)
        ) {
          const P = s.oxw().$implicit,
            W = s.oxw(2).$implicit;
          s.xp6(1),
            s.Q6J('attributeConfigurationKey', W.attributeConfigurationKey)(
              'id',
              P.configurationKey
            )('isDisabled', !W[W.configurationKey] || P.actions.disabled)(
              'isActive',
              P[P.configurationKey]
            );
        }
      }
      function U(k, ve) {
        if (
          (1 & k && (s.ynx(0), s._UZ(1, 'app-progressbar', 36), s.BQk()), 2 & k)
        ) {
          const P = s.oxw().$implicit,
            W = s.oxw(2).$implicit;
          s.xp6(1),
            s.Q6J('id', P.id)('configurationKey', P.configurationKey)(
              'isDisabled',
              !W[W.configurationKey] || P.actions.disabled
            )('value', P[P.configurationKey]);
        }
      }
      function H(k, ve) {
        if (
          (1 & k &&
            (s.ynx(0),
            s.TgZ(1, 'div', 13)(2, 'div', 31),
            s.YNc(3, he, 2, 4, 'ng-container', 14),
            s.YNc(4, U, 2, 4, 'ng-container', 14),
            s.qZA(),
            s.TgZ(5, 'div', 32)(6, 'span', 33),
            s._uU(7),
            s.qZA(),
            s.TgZ(8, 'span', 34),
            s._uU(9),
            s.qZA()()(),
            s.BQk()),
          2 & k)
        ) {
          const P = ve.$implicit;
          s.xp6(1),
            s.Q6J(
              'ngClass',
              'progress-bar' ==
                (null == P || null == P.actions ? null : P.actions.type)
                ? 'attribute-items-progress-bar'
                : 'attribute-items'
            ),
            s.xp6(2),
            s.Q6J('ngIf', 'checkbox' == P.actions.type),
            s.xp6(1),
            s.Q6J('ngIf', 'progress-bar' == P.actions.type),
            s.xp6(3),
            s.hij(' ', P.literal, ' '),
            s.xp6(2),
            s.hij(' ', P.infoText, ' ');
        }
      }
      function me(k, ve) {
        if (
          (1 & k &&
            (s.ynx(0),
            s.TgZ(1, 'div', 29)(2, 'div', 30),
            s._uU(3),
            s._UZ(4, 'br')(5, 'span'),
            s.qZA(),
            s.YNc(6, H, 10, 5, 'ng-container', 10),
            s.qZA(),
            s.BQk()),
          2 & k)
        ) {
          const P = s.oxw().$implicit;
          s.xp6(3),
            s.hij(' ', P.attributeHeading, ' '),
            s.xp6(3),
            s.Q6J('ngForOf', P.attributes);
        }
      }
      const Y = function (k) {
        return { 'disabled-state': k };
      };
      function Fe(k, ve) {
        if (
          (1 & k &&
            (s.TgZ(0, 'div', 20)(1, 'header', 21)(2, 'div', 22),
            s.YNc(3, Fn, 2, 2, 'span', 23),
            s.TgZ(4, 'p', 13),
            s._uU(5),
            s.qZA()(),
            s.TgZ(6, 'span', 24),
            s._uU(7),
            s.qZA()(),
            s.YNc(8, _n, 3, 1, 'ng-container', 14),
            s.YNc(9, me, 7, 2, 'ng-container', 14),
            s.qZA()),
          2 & k)
        ) {
          const P = ve.$implicit;
          s.Q6J('ngClass', s.VKq(7, Y, !P[P.configurationKey])),
            s.xp6(3),
            s.Q6J(
              'ngIf',
              'toggle' ==
                (null == P || null == P.actions ? null : P.actions.type)
            ),
            s.xp6(1),
            s.Q6J('ngClass', s.VKq(9, Dt, P.literal)),
            s.xp6(1),
            s.hij(' ', P.literal, ' '),
            s.xp6(2),
            s.hij(' ', P.infoText, ' '),
            s.xp6(1),
            s.Q6J('ngIf', P.flows),
            s.xp6(1),
            s.Q6J('ngIf', P.attributes);
        }
      }
      function It(k, ve) {
        if (
          (1 & k && (s.ynx(0), s.YNc(1, Fe, 10, 11, 'div', 19), s.BQk()), 2 & k)
        ) {
          const P = s.oxw().$implicit;
          s.xp6(1), s.Q6J('ngForOf', P.features);
        }
      }
      const wt = function (k, ve) {
        return { 'card card-one-item': k, 'disabled-state': ve };
      };
      function Re(k, ve) {
        if (
          (1 & k &&
            (s.TgZ(0, 'section')(1, 'header', 11),
            s._UZ(2, 'span', 12),
            s.ALo(3, 'safe'),
            s.TgZ(4, 'span'),
            s._uU(5),
            s.qZA()(),
            s.TgZ(6, 'div', 13),
            s.YNc(7, ln, 3, 2, 'ng-container', 14),
            s.YNc(8, kt, 2, 4, 'span', 15),
            s.YNc(9, It, 2, 1, 'ng-container', 14),
            s.qZA()()),
          2 & k)
        ) {
          const P = ve.$implicit;
          s.xp6(2),
            s.Q6J('innerHTML', s.xi3(3, 6, P.svg, 'html'), s.oJD),
            s.xp6(3),
            s.hij(' ', P.heading, ' '),
            s.xp6(1),
            s.Q6J(
              'ngClass',
              s.WLB(
                9,
                wt,
                P.configurationKey,
                P.configurationKey && !P[P.configurationKey]
              )
            ),
            s.xp6(1),
            s.Q6J(
              'ngIf',
              'toggle' ==
                (null == P || null == P.actions ? null : P.actions.type)
            ),
            s.xp6(1),
            s.Q6J('ngIf', P.infoText),
            s.xp6(1),
            s.Q6J('ngIf', P.features);
        }
      }
      function Vt(k, ve) {
        if (
          (1 & k &&
            (s.TgZ(0, 'section', 9),
            s.YNc(1, Re, 10, 12, 'section', 10),
            s.qZA()),
          2 & k)
        ) {
          const P = s.oxw(4);
          s.xp6(1),
            s.Q6J(
              'ngForOf',
              null == P.skeleton ? null : P.skeleton.configurations
            );
        }
      }
      function Xe(k, ve) {
        if (
          (1 & k &&
            (s.YNc(0, tt, 2, 1, 'ng-container', 1),
            s.YNc(1, Vt, 2, 1, 'ng-template', null, 7, s.W1O)),
          2 & k)
        ) {
          const P = s.MAs(2),
            W = s.oxw(3);
          s.Q6J(
            'ngIf',
            W.isCustomerIsProvisioned && !1 === W.configurations.isSetupDone
          )('ngIfElse', P);
        }
      }
      function un(k, ve) {
        if (
          (1 & k &&
            (s.TgZ(0, 'main', 0),
            s.YNc(1, Ht, 2, 1, 'ng-container', 1),
            s.YNc(2, Xe, 3, 2, 'ng-template', null, 5, s.W1O),
            s.qZA()),
          2 & k)
        ) {
          const P = s.MAs(3),
            W = s.oxw(2);
          s.xp6(1), s.Q6J('ngIf', !W.isCustomerIsProvisioned)('ngIfElse', P);
        }
      }
      function xt(k, ve) {
        1 & k && s.YNc(0, un, 4, 2, 'main', 4), 2 & k && s.Q6J('ngIf', !0);
      }
      function vt(k, ve) {}
      let ot = (() => {
        class k {
          constructor(P, W, rt, dt, at, Qe) {
            (this.broadcastService = P),
              (this.sharedService = W),
              (this.httpService = rt),
              (this.utilsService = dt),
              (this.route = at),
              (this.router = Qe),
              (this.finalstructure = {}),
              (this.isDataLoaded = !1),
              (this.disableAllChannels = !1),
              (this.routeSubscription = this.router.events.subscribe(Ct => {
                if (Ct instanceof j.m2) {
                  const $t = Ct.url.split('?')[0].split('/').length,
                    wn = Ct.url.split('?')[0].split('/');
                  (this.pageId = `/${wn[$t - 1]}`),
                    (this.experienceType = wn[$t - 2]),
                    localStorage.setItem('experienceType', this.experienceType);
                }
              }));
          }
          ngOnInit() {
            (this.isDataLoaded = !1),
              (this.refNum = localStorage.getItem('refNum')),
              (this.locale = localStorage.getItem('locale')),
              (this.experienceType = localStorage.getItem('experienceType')),
              console.log(this.experienceType, this.locale, this.refNum),
              this.getChatbotConfigurations(),
              this.broadcastService
                .on(_.T.SELECTED_LOCALE_EVENT)
                .pipe((0, X.U)(P => P.payload))
                .subscribe(({ locale: P }) => {
                  this.locale = P;
                }),
              this.broadcastService.on(_.T.CHECKBOX_EVENT).subscribe(P => {
                this.updateSkeleton(P?.payload),
                  this.updateChatbotConfigurations(P?.payload?.data);
              }),
              this.broadcastService.on(_.T.TOGGLE_EVENT).subscribe(P => {
                this.updateSkeleton(P?.payload),
                  this.updateChatbotConfigurations(P?.payload?.data);
              }),
              this.broadcastService.on(_.T.RADIO_EMITTER).subscribe(P => {
                this.updateSkeleton(P?.payload),
                  this.updateChatbotConfigurations(P?.payload?.data);
              }),
              this.broadcastService.on(_.T.RANGE_EMITTER).subscribe(P => {
                this.updateSkeleton(P?.payload),
                  this.updateChatbotConfigurations(P?.payload?.data);
              }),
              this.broadcastService
                .on(_.T.CLICKED_ON_LOCALE_DROPDOWN)
                .subscribe(() => {
                  this.getChatbotConfigurations();
                }),
              this.broadcastService
                .on(_.T.HIDE_NOTIFICATION_EVENT)
                .subscribe(() => {
                  const P = this.vcr.indexOf(this.ref.hostView);
                  -1 != P && this.vcr.remove(P);
                }),
              this.broadcastService.on(_.T.ACCORDION_EVENT).subscribe(P => {
                P.payload.page && this.getChatbotConfigurations();
              });
          }
          getChatbotConfigurations() {
            (this.isDataLoaded = !1), this.refreshLocalStorageValue();
            const P = this.utilsService.getChatbotConfigurationsPath(
              this.refNum,
              this.locale,
              this.experienceType,
              this.channel
            );
            this.httpService
              .httpGet(P, 'chatbot_configurations_api')
              .subscribe(W => {
                404 == W.statusCode
                  ? ((this.isCustomerIsProvisioned = !1),
                    (this.isDataLoaded = !0),
                    this.pageId &&
                      this.sharedService
                        .getDashboardSchemaFromLocale(`${this.pageId}`)
                        .subscribe(rt => {
                          this.skeleton = rt;
                        }))
                  : ((this.isCustomerIsProvisioned = !0),
                    (this.configurations = W),
                    this.pageId &&
                      this.sharedService
                        .getDashboardSchemaFromLocale(`${this.pageId}`)
                        .subscribe(rt => {
                          (this.skeleton = rt),
                            console.log(this.skeleton),
                            this.createFinalStructure(this.skeleton);
                        }));
              });
          }
          updateSkeleton({ data: W }) {
            this.skeleton.configurations.forEach(
              (dt, at) => (
                dt.features?.length &&
                  dt?.features.forEach((Qe, Ct) => {
                    'checkbox' == W?.type &&
                      Qe.attributes &&
                      Qe?.attributes?.forEach(($t, wn) => {
                        this.skeleton.configurations[at].features[
                          Ct
                        ].attributes[wn][W.configurationKey] = W.isActive;
                      }),
                      Object.keys(Qe)?.includes(W.configurationKey) &&
                        ((this.skeleton.configurations[at].features[Ct][
                          W.configurationKey
                        ] = W.isActive),
                        console.log(
                          this.skeleton.configurations[at].features[Ct]
                            .attributes
                        ),
                        console.log(
                          this.skeleton.configurations[at].features[Ct][
                            W.configurationKey
                          ]
                        ));
                  }),
                Object.keys(dt)?.includes(W.configurationKey) &&
                  ((this.disableAllChannels = W.isActive),
                  (this.skeleton.configurations[at][W.configurationKey] =
                    W.isActive)),
                dt
              )
            );
          }
          updateChatbotConfigurations({
            attributeConfigurationKey: P,
            configurationKey: W,
            isActive: rt,
          }) {
            this.refreshLocalStorageValue();
            const dt = this.utilsService.getChatbotConfigurationsPath(
              this.refNum,
              this.locale,
              this.experienceType,
              this.channel
            );
            let at,
              Qe = this.configurations[P];
            P
              ? rt
                ? (Qe?.includes(W) || Qe.push(W),
                  (at = { update: { [P]: Qe } }))
                : ((Qe = Qe.filter(Ct => Ct != W)),
                  (at = { update: { [P]: Qe } }))
              : (at = { update: { [W]: rt } }),
              (this.ref = this.vcr.createComponent(we)),
              this.httpService
                .httpPatch(dt, 'chatbot_configurations_api', at)
                .subscribe(Ct => {
                  this.broadcastService.dispatch(
                    new ne.q(_.T.SHOW_NOTIFICATION_EVENT, {
                      type: 'success',
                      msg: 'Configuration Updated Successfully.',
                    })
                  ),
                    setTimeout(() => {
                      const $t = this.vcr.indexOf(this.ref.hostView);
                      -1 != $t && this.vcr.remove($t);
                    }, 3e3);
                });
          }
          createFinalStructure(P) {
            this.sharedService.getI18nValues().subscribe(W => {
              let rt = P.configurations.map(
                dt => (
                  dt.features?.length &&
                    (dt.features = dt?.features.map(
                      at => (
                        at.attributes &&
                          at.attributes.map(Qe =>
                            Qe && at.attributeConfigurationKey
                              ? ((Qe[Qe?.configurationKey] =
                                  this.configurations[
                                    at.attributeConfigurationKey
                                  ]?.includes(Qe?.configurationKey)),
                                (Qe.literal = W[Qe.literal]
                                  ? W[Qe.literal]
                                  : Qe.literal),
                                (Qe.infoText = W[Qe.infoText]
                                  ? W[Qe.infoText]
                                  : Qe.infoText),
                                Qe)
                              : ((Qe[Qe?.configurationKey] =
                                  this.configurations[Qe.configurationKey]),
                                (Qe.literal = W[Qe.literal]),
                                (Qe.infoText = W[Qe.infoText]),
                                Qe)
                          ),
                        at.flows &&
                          (at.flows = at.flows.map(
                            Qe => (
                              (Qe.infoText = W[Qe.infoText]
                                ? W[Qe.infoText]
                                : Qe.infoText),
                              (Qe.literal = W[Qe.literal]
                                ? W[Qe.literal]
                                : Qe.literal),
                              this.configurations[Qe.configurationKey] &&
                                this.configurations[Qe.configurationKey] ==
                                  Qe.version &&
                                (Qe.isEnabled = !0),
                              Qe
                            )
                          )),
                        (at[at.configurationKey] =
                          this.configurations[at.configurationKey]),
                        (at.infoText = W[at.infoText]
                          ? W[at.infoText]
                          : at.infoText),
                        (at.attributeHeading = W[at.attributeHeading]
                          ? W[at.attributeHeading]
                          : at.attributeHeading),
                        (at.literal = W[at.literal]
                          ? W[at.literal]
                          : at.literal),
                        { ...at }
                      )
                    )),
                  (dt.heading = W[dt.heading] ? W[dt.heading] : dt.heading),
                  (dt.infoText = W[dt.infoText] ? W[dt.infoText] : dt.infoText),
                  dt.configurationKey &&
                    (dt[dt.configurationKey] =
                      this.configurations[dt.configurationKey]),
                  dt
                )
              );
              (P.configurations = rt), (this.isDataLoaded = !0);
            }),
              console.log(P);
          }
          refreshLocalStorageValue() {
            (this.refNum = localStorage.getItem('refNum')),
              (this.locale = localStorage.getItem('locale')),
              (this.channel = localStorage.getItem('channel')),
              (this.experienceType = localStorage.getItem('experienceType'));
          }
          checkIfCustomerisProvisioned() {
            this.refreshLocalStorageValue();
            const P = this.utilsService.getChatbotConfigurationsPath(
              this.refNum,
              this.locale,
              this.experienceType,
              this.channel
            );
            this.utilsService
              .checkIfCustomerIsProvisioned(P, this.pageId)
              .then(W => {
                404 !== W.status
                  ? (console.log('Provisioned'),
                    (this.isCustomerIsProvisioned = !0))
                  : (this.sharedService
                      .getDashboardSchema(this.pageId)
                      .subscribe(rt => {
                        this.configurationPageId = rt?.configurationPageId;
                      }),
                    console.log('Not Provisioned', this.configurationPageId),
                    (this.isCustomerIsProvisioned = !1));
              });
          }
          provision(P) {
            P.isProvisioned && this.getChatbotConfigurations();
          }
          ngOnDestroy() {
            this.routeSubscription.unsubscribe();
          }
        }
        return (
          (k.ɵfac = function (P) {
            return new (P || k)(
              s.Y36(K.M),
              s.Y36(ee.F),
              s.Y36(Ee.O),
              s.Y36($.F),
              s.Y36(j.gz),
              s.Y36(j.F0)
            );
          }),
          (k.ɵcmp = s.Xpm({
            type: k,
            selectors: [['configurations']],
            viewQuery: function (P, W) {
              if ((1 & P && s.Gf(ut, 5, s.s_b), 2 & P)) {
                let rt;
                s.iGM((rt = s.CRH())) && (W.vcr = rt.first);
              }
            },
            decls: 7,
            vars: 2,
            consts: [
              [1, 'configurations-container'],
              [4, 'ngIf', 'ngIfElse'],
              ['elseBlock', ''],
              ['viewContainerRef', ''],
              ['class', 'configurations-container', 4, 'ngIf'],
              ['configureBlock', ''],
              [3, 'skeleton', 'provisioned'],
              ['configurationBlock', ''],
              [3, 'skeleton'],
              [1, 'container-body'],
              [4, 'ngFor', 'ngForOf'],
              [1, 'config-heading'],
              [3, 'innerHTML'],
              [3, 'ngClass'],
              [4, 'ngIf'],
              ['class', 'section-infotext', 3, 'ngClass', 4, 'ngIf'],
              [1, 'section-toggle'],
              [3, 'id', 'isActive'],
              [1, 'section-infotext', 3, 'ngClass'],
              ['class', 'card', 3, 'ngClass', 4, 'ngFor', 'ngForOf'],
              [1, 'card', 3, 'ngClass'],
              [1, 'card-one-item'],
              [1, 'card-one-item-heading'],
              ['class', 'section-toggle', 4, 'ngIf'],
              [1, 'section-infotext'],
              [1, 'features-types'],
              ['class', 'features-types-section', 4, 'ngFor', 'ngForOf'],
              [1, 'features-types-section'],
              [3, 'isDisabled', 'data'],
              [1, 'attribute'],
              [1, 'attribute-heading'],
              [1, 'attribute-icon'],
              [1, 'attribute-items-heading'],
              [1, 'attribute-items-title'],
              [1, 'attribute-items-info-text'],
              [3, 'attributeConfigurationKey', 'id', 'isDisabled', 'isActive'],
              [3, 'id', 'configurationKey', 'isDisabled', 'value'],
            ],
            template: function (P, W) {
              if (
                (1 & P &&
                  (s.TgZ(0, 'div', 0),
                  s._UZ(1, 'app-header'),
                  s.YNc(2, St, 2, 0, 'ng-container', 1),
                  s.YNc(3, xt, 1, 1, 'ng-template', null, 2, s.W1O),
                  s.YNc(5, vt, 0, 0, 'ng-template', null, 3, s.W1O),
                  s.qZA()),
                2 & P)
              ) {
                const rt = s.MAs(4);
                s.xp6(2), s.Q6J('ngIf', !W.isDataLoaded)('ngIfElse', rt);
              }
            },
            dependencies: [
              q.mk,
              q.sg,
              q.O5,
              $e,
              Ie,
              Oe,
              le,
              Ne,
              yt,
              ke,
              gt,
              Ye.y,
            ],
            styles: [
              '.configurations-container[_ngcontent-%COMP%]{font-family:Proxima Nova;width:100%}.configurations-container[_ngcontent-%COMP%]   .disabled-state[_ngcontent-%COMP%]{opacity:.6;cursor:not-allowed}@media screen and (max-width: 1500px){.configurations-container[_ngcontent-%COMP%]{width:100%}}.configurations-container[_ngcontent-%COMP%]   .container-heading[_ngcontent-%COMP%]{padding:32px;border-bottom:1px solid #DFE3E6;background:#FFFFFF;box-shadow:inset 0 -1px #dfe3e6}.configurations-container[_ngcontent-%COMP%]   .container-heading[_ngcontent-%COMP%]   .candidate-experience[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:14px;line-height:20px;display:flex;align-items:center;color:#4b6479}.configurations-container[_ngcontent-%COMP%]   .container-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-style:normal;font-weight:500;font-size:24px;line-height:32px;color:#1c2024}.configurations-container[_ngcontent-%COMP%]   .container-body[_ngcontent-%COMP%]{width:85%;padding:32px}.configurations-container[_ngcontent-%COMP%]   .config-heading[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:12px;font-style:normal;font-weight:400;font-size:18px;line-height:28px;color:#1c2024}.configurations-container[_ngcontent-%COMP%]   .card-one-item[_ngcontent-%COMP%]   .card-one-item-heading[_ngcontent-%COMP%]{font-size:18px}.configurations-container[_ngcontent-%COMP%]   .section-toggle[_ngcontent-%COMP%]{margin-right:16px}.configurations-container[_ngcontent-%COMP%]   .d-f-c[_ngcontent-%COMP%]{display:flex;flex-direction:column}.configurations-container[_ngcontent-%COMP%]   .d-i[_ngcontent-%COMP%]{display:inline}.configurations-container[_ngcontent-%COMP%]   .section-infotext[_ngcontent-%COMP%]{margin-top:6px;display:inline-block;font-weight:400;font-size:14px;line-height:20px;color:#414c54}.card[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:32px;padding:24px;box-sizing:border-box;width:100%;background:#FFFFFF;border:1px solid #DFE3E6;border-radius:6px;transition:1s all}.card[_ngcontent-%COMP%]   .features-types[_ngcontent-%COMP%]{margin-top:20px}.card[_ngcontent-%COMP%]   .features-types[_ngcontent-%COMP%]   .features-types-section[_ngcontent-%COMP%]{font-size:14px;line-height:28px;color:#1c2024;display:flex;align-items:center;padding:5px 16px;gap:32px;height:80px;background:#FFFFFF;box-shadow:inset 0 1px #e8ecee;flex:none;order:1;flex-grow:1}.card[_ngcontent-%COMP%]   .attribute[_ngcontent-%COMP%]{width:100%;margin:24px auto 0}.card[_ngcontent-%COMP%]   .attribute[_ngcontent-%COMP%]   .attribute-heading[_ngcontent-%COMP%]{font-size:14px;display:flex;flex-direction:row;align-items:center;padding:14px 16px;background:#F7FAFB}.card[_ngcontent-%COMP%]   .attribute[_ngcontent-%COMP%]   .attribute-items[_ngcontent-%COMP%]{display:flex;padding:20px;align-items:center;box-shadow:inset 0 1px #dfe3e6}.card[_ngcontent-%COMP%]   .attribute[_ngcontent-%COMP%]   .attribute-items[_ngcontent-%COMP%]   .attribute-icon[_ngcontent-%COMP%]{padding:10px 30px}.card[_ngcontent-%COMP%]   .attribute[_ngcontent-%COMP%]   .attribute-items[_ngcontent-%COMP%]   .attribute-items-heading[_ngcontent-%COMP%]{display:flex;flex-direction:column}.card[_ngcontent-%COMP%]   .attribute[_ngcontent-%COMP%]   .attribute-items[_ngcontent-%COMP%]   .attribute-items-heading[_ngcontent-%COMP%]   .attribute-items-title[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:14px;line-height:20px;display:flex;align-items:center;color:#1c2024}.card[_ngcontent-%COMP%]   .attribute[_ngcontent-%COMP%]   .attribute-items[_ngcontent-%COMP%]   .attribute-items-heading[_ngcontent-%COMP%]   .attribute-items-info-text[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:12px;line-height:20px;color:#414c54}.card[_ngcontent-%COMP%]   .attribute[_ngcontent-%COMP%]   .attribute-items-progress-bar[_ngcontent-%COMP%]{display:flex;padding:20px;flex-direction:column-reverse}.card[_ngcontent-%COMP%]   .attribute[_ngcontent-%COMP%]   .attribute-items-progress-bar[_ngcontent-%COMP%]   .attribute-icon[_ngcontent-%COMP%]{padding:10px;width:50%}.card[_ngcontent-%COMP%]   .attribute[_ngcontent-%COMP%]   .attribute-items-progress-bar[_ngcontent-%COMP%]   .attribute-items-heading[_ngcontent-%COMP%]{display:flex;flex-direction:column}.card[_ngcontent-%COMP%]   .attribute[_ngcontent-%COMP%]   .attribute-items-progress-bar[_ngcontent-%COMP%]   .attribute-items-heading[_ngcontent-%COMP%]   .attribute-items-title[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:14px;line-height:20px;display:flex;align-items:center;color:#1c2024}.card[_ngcontent-%COMP%]   .attribute[_ngcontent-%COMP%]   .attribute-items-progress-bar[_ngcontent-%COMP%]   .attribute-items-heading[_ngcontent-%COMP%]   .attribute-items-info-text[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:12px;line-height:20px;color:#414c54}',
            ],
          })),
          k
        );
      })();
    },
    9960: (et, ge, v) => {
      v.d(ge, { g: () => ne });
      var s = v(4650),
        _ = v(542),
        j = v(2691),
        X = v(3485);
      let ne = (() => {
        class A {
          constructor(q) {
            (this.router = q), console.log(this.router.config);
          }
          ngOnInit() {}
        }
        return (
          (A.ɵfac = function (q) {
            return new (q || A)(s.Y36(_.F0));
          }),
          (A.ɵcmp = s.Xpm({
            type: A,
            selectors: [['locale-list']],
            decls: 5,
            vars: 1,
            consts: [
              [1, 'mfe-main-container'],
              [3, 'isLocaleListPage'],
              [1, 'mfe-base-container'],
            ],
            template: function (q, fe) {
              1 & q &&
                (s.TgZ(0, 'div', 0)(1, 'aside'),
                s._UZ(2, 'app-sidebar', 1),
                s.qZA(),
                s.TgZ(3, 'div', 2),
                s._UZ(4, 'locales'),
                s.qZA()()),
                2 & q && (s.xp6(2), s.Q6J('isLocaleListPage', !0));
            },
            dependencies: [j.k, X.K],
            styles: [
              '.mfe-main-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.mfe-main-container[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]{position:fixed;height:100vh;width:15%}@media screen and (max-width: 1500px){.mfe-main-container[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]{width:25%}}.mfe-main-container[_ngcontent-%COMP%]   .mfe-base-container[_ngcontent-%COMP%]{width:85%;margin-left:15%}@media screen and (max-width: 1500px){.mfe-main-container[_ngcontent-%COMP%]   .mfe-base-container[_ngcontent-%COMP%]{width:75%;margin-left:25%}}',
            ],
          })),
          A
        );
      })();
    },
    3485: (et, ge, v) => {
      v.d(ge, { K: () => we });
      var s = v(5289),
        _ = v(319),
        j = v(4650),
        X = v(1094),
        ne = v(9590),
        A = v(542),
        K = v(7420),
        q = v(6895);
      let fe = (() => {
        class ee {
          constructor() {
            this.onClickEvent = new j.vpe();
          }
          ngOnInit() {}
          onClick($) {
            this.onClickEvent.emit($);
          }
        }
        return (
          (ee.ɵfac = function ($) {
            return new ($ || ee)();
          }),
          (ee.ɵcmp = j.Xpm({
            type: ee,
            selectors: [['phenom-simple-card']],
            inputs: { text: 'text' },
            outputs: { onClickEvent: 'onClickEvent' },
            decls: 3,
            vars: 1,
            consts: [[1, 'phenom-simple-card', 3, 'click']],
            template: function ($, ae) {
              1 & $ &&
                (j.TgZ(0, 'div', 0),
                j.NdJ('click', function (Ve) {
                  return ae.onClick(Ve);
                }),
                j.TgZ(1, 'p'),
                j._uU(2),
                j.qZA()()),
                2 & $ && (j.xp6(2), j.hij(' ', ae.text, ''));
            },
            styles: [
              '@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27pmO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27rWO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27rGO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27omO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}body[_ngcontent-%COMP%]{margin:0;font-family:Proxima Nova}html[_ngcontent-%COMP%]{line-height:1.15;-webkit-text-size-adjust:100%}body[_ngcontent-%COMP%]{margin:0}main[_ngcontent-%COMP%]{display:block}h1[_ngcontent-%COMP%]{font-size:2em;margin:.67em 0}hr[_ngcontent-%COMP%]{box-sizing:content-box;height:0;overflow:visible}pre[_ngcontent-%COMP%]{font-family:monospace,monospace;font-size:1em}a[_ngcontent-%COMP%]{background-color:transparent}abbr[title][_ngcontent-%COMP%]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b[_ngcontent-%COMP%], strong[_ngcontent-%COMP%]{font-weight:bolder}code[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], samp[_ngcontent-%COMP%]{font-family:monospace,monospace;font-size:1em}small[_ngcontent-%COMP%]{font-size:80%}sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%]{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub[_ngcontent-%COMP%]{bottom:-.25em}sup[_ngcontent-%COMP%]{top:-.5em}img[_ngcontent-%COMP%]{border-style:none}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{overflow:visible}button[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{text-transform:none}button[_ngcontent-%COMP%], [type=button][_ngcontent-%COMP%], [type=reset][_ngcontent-%COMP%], [type=submit][_ngcontent-%COMP%]{-webkit-appearance:button}button[_ngcontent-%COMP%]::-moz-focus-inner, [type=button][_ngcontent-%COMP%]::-moz-focus-inner, [type=reset][_ngcontent-%COMP%]::-moz-focus-inner, [type=submit][_ngcontent-%COMP%]::-moz-focus-inner{border-style:none;padding:0}button[_ngcontent-%COMP%]:-moz-focusring, [type=button][_ngcontent-%COMP%]:-moz-focusring, [type=reset][_ngcontent-%COMP%]:-moz-focusring, [type=submit][_ngcontent-%COMP%]:-moz-focusring{outline:1px dotted ButtonText}fieldset[_ngcontent-%COMP%]{padding:.35em .75em .625em}legend[_ngcontent-%COMP%]{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress[_ngcontent-%COMP%]{vertical-align:baseline}textarea[_ngcontent-%COMP%]{overflow:auto}[type=checkbox][_ngcontent-%COMP%], [type=radio][_ngcontent-%COMP%]{box-sizing:border-box;padding:0}[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, [type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button{height:auto}[type=search][_ngcontent-%COMP%]{-webkit-appearance:textfield;outline-offset:-2px}[type=search][_ngcontent-%COMP%]::-webkit-search-decoration{-webkit-appearance:none}[_ngcontent-%COMP%]::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details[_ngcontent-%COMP%]{display:block}summary[_ngcontent-%COMP%]{display:list-item}template[_ngcontent-%COMP%]{display:none}[hidden][_ngcontent-%COMP%]{display:none}.btn[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content;border:none;color:#fff;padding:12px 14px;width:150px;height:40px;background:#00838F;border-radius:4px}.btn-small[_ngcontent-%COMP%]{width:80px;height:30px;font-size:small;padding:8px 16px}.btn-small-outline[_ngcontent-%COMP%]{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-small-outline[_ngcontent-%COMP%]:hover{color:#fff;border:none}.btn-medium[_ngcontent-%COMP%]{width:120px;height:40px;font-size:medium;padding:8px 16px}.btn-medium-outline[_ngcontent-%COMP%]{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-medium-outline[_ngcontent-%COMP%]:hover{color:#fff;border:none}.btn-large[_ngcontent-%COMP%]{width:180px;height:50px;font-size:large;padding:4px 6px}.btn-large-outline[_ngcontent-%COMP%]{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-large-outline[_ngcontent-%COMP%]:hover{color:#fff;border:none}.btn-disabled[_ngcontent-%COMP%]{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04)}.btn-disabled[_ngcontent-%COMP%]:hover{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn[_ngcontent-%COMP%]:disabled{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn[_ngcontent-%COMP%]:disabled:hover{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn[_ngcontent-%COMP%]:hover{background:#29ABB9}.btn[_ngcontent-%COMP%]:active{background:#00838F}.phenom-simple-card[_ngcontent-%COMP%]{background-color:#fff;border-radius:8px;box-shadow:0 0 8px #00000026;width:20%;margin:24px 24px 24px 32px;font-size:16px;padding:20px;cursor:pointer;color:#152935;display:inline-block}',
            ],
          })),
          ee
        );
      })();
      var re = v(433);
      let oe = (() => {
          class ee {
            constructor() {
              (this.enteredSearchValue = ''),
                (this.searchTextChanged = new j.vpe());
            }
            ngOnInit() {}
            onSearchTextChanged() {
              this.searchTextChanged.emit(this.enteredSearchValue);
            }
          }
          return (
            (ee.ɵfac = function ($) {
              return new ($ || ee)();
            }),
            (ee.ɵcmp = j.Xpm({
              type: ee,
              selectors: [['app-searchbox']],
              outputs: { searchTextChanged: 'searchTextChanged' },
              decls: 6,
              vars: 1,
              consts: [
                [1, 'searchbar'],
                [1, 'text'],
                [
                  'type',
                  'text',
                  'placeholder',
                  'Search locale',
                  3,
                  'ngModel',
                  'ngModelChange',
                  'input',
                ],
                [1, 'logo'],
                [
                  'width',
                  '16',
                  'height',
                  '16',
                  'viewBox',
                  '0 0 16 16',
                  'fill',
                  'none',
                  'xmlns',
                  'http://www.w3.org/2000/svg',
                ],
                [
                  'd',
                  'M14.9043 14.1687L11.377 10.6414C11.3141 10.5785 11.232 10.5457 11.1445 10.5457H10.8629C11.8008 9.53125 12.375 8.17773 12.375 6.6875C12.375 3.5457 9.8293 1 6.6875 1C3.5457 1 1 3.5457 1 6.6875C1 9.8293 3.5457 12.375 6.6875 12.375C8.17773 12.375 9.53125 11.8008 10.5457 10.8656V11.1445C10.5457 11.232 10.5813 11.3141 10.6414 11.377L14.1687 14.9043C14.2973 15.0328 14.5051 15.0328 14.6336 14.9043L14.9043 14.6336C15.0328 14.5051 15.0328 14.2973 14.9043 14.1687ZM6.6875 11.5C4.02695 11.5 1.875 9.34805 1.875 6.6875C1.875 4.02695 4.02695 1.875 6.6875 1.875C9.34805 1.875 11.5 4.02695 11.5 6.6875C11.5 9.34805 9.34805 11.5 6.6875 11.5Z',
                  'fill',
                  '#8C9BA5',
                  'stroke',
                  '#8C9BA5',
                  'stroke-width',
                  '0.2',
                ],
              ],
              template: function ($, ae) {
                1 & $ &&
                  (j.TgZ(0, 'div', 0)(1, 'p', 1)(2, 'input', 2),
                  j.NdJ('ngModelChange', function (Ve) {
                    return (ae.enteredSearchValue = Ve);
                  })('input', function () {
                    return ae.onSearchTextChanged();
                  }),
                  j.qZA()(),
                  j.TgZ(3, 'span', 3),
                  j.O4$(),
                  j.TgZ(4, 'svg', 4),
                  j._UZ(5, 'path', 5),
                  j.qZA()()()),
                  2 & $ && (j.xp6(2), j.Q6J('ngModel', ae.enteredSearchValue));
              },
              dependencies: [re.Fj, re.JJ, re.On],
              styles: [
                '@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27pmO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27rWO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27rGO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27omO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}body[_ngcontent-%COMP%]{margin:0;font-family:Proxima Nova}html[_ngcontent-%COMP%]{line-height:1.15;-webkit-text-size-adjust:100%}body[_ngcontent-%COMP%]{margin:0}main[_ngcontent-%COMP%]{display:block}h1[_ngcontent-%COMP%]{font-size:2em;margin:.67em 0}hr[_ngcontent-%COMP%]{box-sizing:content-box;height:0;overflow:visible}pre[_ngcontent-%COMP%]{font-family:monospace,monospace;font-size:1em}a[_ngcontent-%COMP%]{background-color:transparent}abbr[title][_ngcontent-%COMP%]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b[_ngcontent-%COMP%], strong[_ngcontent-%COMP%]{font-weight:bolder}code[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], samp[_ngcontent-%COMP%]{font-family:monospace,monospace;font-size:1em}small[_ngcontent-%COMP%]{font-size:80%}sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%]{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub[_ngcontent-%COMP%]{bottom:-.25em}sup[_ngcontent-%COMP%]{top:-.5em}img[_ngcontent-%COMP%]{border-style:none}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{overflow:visible}button[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{text-transform:none}button[_ngcontent-%COMP%], [type=button][_ngcontent-%COMP%], [type=reset][_ngcontent-%COMP%], [type=submit][_ngcontent-%COMP%]{-webkit-appearance:button}button[_ngcontent-%COMP%]::-moz-focus-inner, [type=button][_ngcontent-%COMP%]::-moz-focus-inner, [type=reset][_ngcontent-%COMP%]::-moz-focus-inner, [type=submit][_ngcontent-%COMP%]::-moz-focus-inner{border-style:none;padding:0}button[_ngcontent-%COMP%]:-moz-focusring, [type=button][_ngcontent-%COMP%]:-moz-focusring, [type=reset][_ngcontent-%COMP%]:-moz-focusring, [type=submit][_ngcontent-%COMP%]:-moz-focusring{outline:1px dotted ButtonText}fieldset[_ngcontent-%COMP%]{padding:.35em .75em .625em}legend[_ngcontent-%COMP%]{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress[_ngcontent-%COMP%]{vertical-align:baseline}textarea[_ngcontent-%COMP%]{overflow:auto}[type=checkbox][_ngcontent-%COMP%], [type=radio][_ngcontent-%COMP%]{box-sizing:border-box;padding:0}[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, [type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button{height:auto}[type=search][_ngcontent-%COMP%]{-webkit-appearance:textfield;outline-offset:-2px}[type=search][_ngcontent-%COMP%]::-webkit-search-decoration{-webkit-appearance:none}[_ngcontent-%COMP%]::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details[_ngcontent-%COMP%]{display:block}summary[_ngcontent-%COMP%]{display:list-item}template[_ngcontent-%COMP%]{display:none}[hidden][_ngcontent-%COMP%]{display:none}.btn[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content;border:none;color:#fff;padding:12px 14px;width:150px;height:40px;background:#00838F;border-radius:4px}.btn-small[_ngcontent-%COMP%]{width:80px;height:30px;font-size:small;padding:8px 16px}.btn-small-outline[_ngcontent-%COMP%]{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-small-outline[_ngcontent-%COMP%]:hover{color:#fff;border:none}.btn-medium[_ngcontent-%COMP%]{width:120px;height:40px;font-size:medium;padding:8px 16px}.btn-medium-outline[_ngcontent-%COMP%]{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-medium-outline[_ngcontent-%COMP%]:hover{color:#fff;border:none}.btn-large[_ngcontent-%COMP%]{width:180px;height:50px;font-size:large;padding:4px 6px}.btn-large-outline[_ngcontent-%COMP%]{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-large-outline[_ngcontent-%COMP%]:hover{color:#fff;border:none}.btn-disabled[_ngcontent-%COMP%]{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04)}.btn-disabled[_ngcontent-%COMP%]:hover{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn[_ngcontent-%COMP%]:disabled{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn[_ngcontent-%COMP%]:disabled:hover{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn[_ngcontent-%COMP%]:hover{background:#29ABB9}.btn[_ngcontent-%COMP%]:active{background:#00838F}.searchbar[_ngcontent-%COMP%]{padding:0 10px;display:flex;justify-content:space-between;align-items:center;border:#EAECEE solid 1px;width:25%;border-radius:4px}.searchbar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{color:#8c9ba5;border:none;width:100%}.searchbar[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-family:Proxima Nova;font-size:14px;line-height:20px;width:90%}.searchbar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .searchbar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus-within{outline:none}',
              ],
            })),
            ee
          );
        })(),
        ie = (() => {
          class ee {
            transform($, ae, $e = !1) {
              return $
                ? ae
                  ? ($e || (ae = ae.toLowerCase()),
                    $.filter(function (Ve) {
                      return $e
                        ? JSON.stringify(Ve).includes(ae)
                        : JSON.stringify(Ve).toLowerCase().includes(ae);
                    }))
                  : $
                : null;
            }
          }
          return (
            (ee.ɵfac = function ($) {
              return new ($ || ee)();
            }),
            (ee.ɵpipe = j.Yjl({ name: 'searchFilter', type: ee, pure: !0 })),
            ee
          );
        })();
      function Ge(ee, Ee) {
        if (1 & ee) {
          const $ = j.EpF();
          j.ynx(0),
            j.TgZ(1, 'phenom-simple-card', 4),
            j.NdJ('click', function () {
              const Ve = j.CHM($).$implicit,
                Ie = j.oxw();
              return j.KtG(Ie.getSelectedLocale(Ve));
            }),
            j.qZA(),
            j.BQk();
        }
        if (2 & ee) {
          const $ = Ee.$implicit;
          j.xp6(1), j.Q6J('text', $.displayText);
        }
      }
      let we = (() => {
        class ee {
          constructor($, ae, $e, Ve) {
            (this.utilsService = $),
              (this.broadcastService = ae),
              (this.router = $e),
              (this.sharedService = Ve),
              (this.searchText = ''),
              $e.events.subscribe();
          }
          onSearchTextEntered($) {
            this.searchText = $;
          }
          ngOnInit() {
            (this.refNum = localStorage.getItem('refNum')),
              this.utilsService.getDistinctLocale(this.refNum, 'cx').then($ => {
                (this.locales = $.locales),
                  localStorage.setItem('customerName', $.customerName);
              });
          }
          getSelectedLocale($) {
            this.broadcastService.dispatch(
              new _.q(s.T.SELECTED_LOCALE_EVENT, $)
            ),
              localStorage.setItem('locale', $.locale);
          }
        }
        return (
          (ee.ɵfac = function ($) {
            return new ($ || ee)(
              j.Y36(X.F),
              j.Y36(ne.M),
              j.Y36(A.F0),
              j.Y36(K.F)
            );
          }),
          (ee.ɵcmp = j.Xpm({
            type: ee,
            selectors: [['locales']],
            decls: 5,
            vars: 4,
            consts: [
              [1, 'locale-container'],
              [1, 'regions'],
              [3, 'searchTextChanged'],
              [4, 'ngFor', 'ngForOf'],
              [3, 'text', 'click'],
            ],
            template: function ($, ae) {
              1 & $ &&
                (j.TgZ(0, 'div', 0)(1, 'section', 1)(2, 'app-searchbox', 2),
                j.NdJ('searchTextChanged', function (Ve) {
                  return ae.onSearchTextEntered(Ve);
                }),
                j.qZA(),
                j.YNc(3, Ge, 2, 1, 'ng-container', 3),
                j.ALo(4, 'searchFilter'),
                j.qZA()()),
                2 & $ &&
                  (j.xp6(3),
                  j.Q6J('ngForOf', j.xi3(4, 1, ae.locales, ae.searchText)));
            },
            dependencies: [q.sg, fe, oe, ie],
            styles: [
              '@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27pmO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27rWO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27rGO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27omO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}body[_ngcontent-%COMP%]{margin:0;font-family:Proxima Nova}html[_ngcontent-%COMP%]{line-height:1.15;-webkit-text-size-adjust:100%}body[_ngcontent-%COMP%]{margin:0}main[_ngcontent-%COMP%]{display:block}h1[_ngcontent-%COMP%]{font-size:2em;margin:.67em 0}hr[_ngcontent-%COMP%]{box-sizing:content-box;height:0;overflow:visible}pre[_ngcontent-%COMP%]{font-family:monospace,monospace;font-size:1em}a[_ngcontent-%COMP%]{background-color:transparent}abbr[title][_ngcontent-%COMP%]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b[_ngcontent-%COMP%], strong[_ngcontent-%COMP%]{font-weight:bolder}code[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], samp[_ngcontent-%COMP%]{font-family:monospace,monospace;font-size:1em}small[_ngcontent-%COMP%]{font-size:80%}sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%]{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub[_ngcontent-%COMP%]{bottom:-.25em}sup[_ngcontent-%COMP%]{top:-.5em}img[_ngcontent-%COMP%]{border-style:none}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{overflow:visible}button[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{text-transform:none}button[_ngcontent-%COMP%], [type=button][_ngcontent-%COMP%], [type=reset][_ngcontent-%COMP%], [type=submit][_ngcontent-%COMP%]{-webkit-appearance:button}button[_ngcontent-%COMP%]::-moz-focus-inner, [type=button][_ngcontent-%COMP%]::-moz-focus-inner, [type=reset][_ngcontent-%COMP%]::-moz-focus-inner, [type=submit][_ngcontent-%COMP%]::-moz-focus-inner{border-style:none;padding:0}button[_ngcontent-%COMP%]:-moz-focusring, [type=button][_ngcontent-%COMP%]:-moz-focusring, [type=reset][_ngcontent-%COMP%]:-moz-focusring, [type=submit][_ngcontent-%COMP%]:-moz-focusring{outline:1px dotted ButtonText}fieldset[_ngcontent-%COMP%]{padding:.35em .75em .625em}legend[_ngcontent-%COMP%]{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress[_ngcontent-%COMP%]{vertical-align:baseline}textarea[_ngcontent-%COMP%]{overflow:auto}[type=checkbox][_ngcontent-%COMP%], [type=radio][_ngcontent-%COMP%]{box-sizing:border-box;padding:0}[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, [type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button{height:auto}[type=search][_ngcontent-%COMP%]{-webkit-appearance:textfield;outline-offset:-2px}[type=search][_ngcontent-%COMP%]::-webkit-search-decoration{-webkit-appearance:none}[_ngcontent-%COMP%]::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details[_ngcontent-%COMP%]{display:block}summary[_ngcontent-%COMP%]{display:list-item}template[_ngcontent-%COMP%]{display:none}[hidden][_ngcontent-%COMP%]{display:none}.btn[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content;border:none;color:#fff;padding:12px 14px;width:150px;height:40px;background:#00838F;border-radius:4px}.btn-small[_ngcontent-%COMP%]{width:80px;height:30px;font-size:small;padding:8px 16px}.btn-small-outline[_ngcontent-%COMP%]{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-small-outline[_ngcontent-%COMP%]:hover{color:#fff;border:none}.btn-medium[_ngcontent-%COMP%]{width:120px;height:40px;font-size:medium;padding:8px 16px}.btn-medium-outline[_ngcontent-%COMP%]{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-medium-outline[_ngcontent-%COMP%]:hover{color:#fff;border:none}.btn-large[_ngcontent-%COMP%]{width:180px;height:50px;font-size:large;padding:4px 6px}.btn-large-outline[_ngcontent-%COMP%]{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-large-outline[_ngcontent-%COMP%]:hover{color:#fff;border:none}.btn-disabled[_ngcontent-%COMP%]{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04)}.btn-disabled[_ngcontent-%COMP%]:hover{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn[_ngcontent-%COMP%]:disabled{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn[_ngcontent-%COMP%]:disabled:hover{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn[_ngcontent-%COMP%]:hover{background:#29ABB9}.btn[_ngcontent-%COMP%]:active{background:#00838F}div[_ngcontent-%COMP%]{margin-top:24px;margin-left:32px}',
            ],
          })),
          ee
        );
      })();
    },
    2691: (et, ge, v) => {
      v.d(ge, { k: () => we });
      var s = v(5289),
        _ = (() => {
          return (
            ((ee = _ || (_ = {})).WEB = 'web'),
            (ee.SMS = 'sms'),
            (ee.WHATSAPP = 'whatsapp'),
            (ee.MSTEAMS = 'msteams'),
            (ee.FACEBOOK = 'facebook'),
            _
          );
          var ee;
        })(),
        j = v(542),
        X = v(4004),
        ne = v(963),
        A = v(4650),
        K = v(9590),
        q = v(1094),
        fe = v(7420);
      function re(ee, Ee) {
        1 & ee && (A.ynx(0), A._UZ(1, 'div', 4), A.BQk());
      }
      function oe(ee, Ee) {
        if (
          (1 & ee && (A.ynx(0), A._UZ(1, 'app-accordion', 7), A.BQk()), 2 & ee)
        ) {
          const $ = Ee.$implicit,
            ae = A.oxw(3);
          A.xp6(1),
            A.Q6J('id', $.experienceType)('svg', $.svg)(
              'defaultPageId',
              ae.defaultAccordionItem
            )('experienceType', $.heading)('pages', $.channels);
        }
      }
      function ie(ee, Ee) {
        if (
          (1 & ee &&
            (A._UZ(0, 'app-dropdown', 5)(1, 'span'),
            A.YNc(2, oe, 2, 5, 'ng-container', 6)),
          2 & ee)
        ) {
          const $ = A.oxw(2);
          A.Q6J('listOfLocales', $.locales)('id', 'drop2'),
            A.xp6(2),
            A.Q6J('ngForOf', $.data);
        }
      }
      function Ge(ee, Ee) {
        if (
          (1 & ee &&
            (A.TgZ(0, 'section', 1),
            A.YNc(1, re, 2, 0, 'ng-container', 2),
            A.YNc(2, ie, 3, 3, 'ng-template', null, 3, A.W1O),
            A.qZA()),
          2 & ee)
        ) {
          const $ = A.MAs(3),
            ae = A.oxw();
          A.xp6(1), A.Q6J('ngIf', ae.isLocaleListPage)('ngIfElse', $);
        }
      }
      let we = (() => {
        class ee {
          constructor($, ae, $e, Ve, Ie) {
            if (
              ((this.broadcastService = $),
              (this.router = ae),
              (this.utilsService = $e),
              (this.sharedService = Ve),
              (this.route = Ie),
              (this.isDataLoaded = !1),
              (this.data = [
                {
                  heading: 'CMP_CANDIDATE_EXPERIENCE',
                  experienceType: 'cx',
                  svg: "<svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M12.75 0.75H1.25C0.973437 0.75 0.75 0.973437 0.75 1.25V12.75C0.75 13.0266 0.973437 13.25 1.25 13.25H12.75C13.0266 13.25 13.25 13.0266 13.25 12.75V1.25C13.25 0.973437 13.0266 0.75 12.75 0.75ZM1.875 1.875H4V12.125H1.875V1.875ZM12.125 12.125H5V5H12.125V12.125ZM5 4V1.875H12.125V4H5Z' fill='#1C2024'/></svg>",
                  channels: [
                    {
                      pageId: 'career-site-bot',
                      channel: 'web',
                      heading: 'CMP_CAREERS_SITE_BOT',
                    },
                    {
                      pageId: 'candidate-facebook-bot',
                      channel: 'facebook',
                      heading: 'CMP_FACEBOOK_BOT',
                    },
                    {
                      pageId: 'candidate-sms-bot',
                      channel: 'sms',
                      heading: 'CMP_SMS_BOT',
                    },
                  ],
                },
                {
                  heading: 'CMP_EMPLOYEE_EXPERIENCE',
                  experienceType: 'ex',
                  svg: "<svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M10.75 4.125C10.75 4.05625 10.6938 4 10.625 4H4.625C4.55625 4 4.5 4.05625 4.5 4.125V4.875C4.5 4.94375 4.55625 5 4.625 5H10.625C10.6938 5 10.75 4.94375 10.75 4.875V4.125ZM10.625 6.25H4.625C4.55625 6.25 4.5 6.30625 4.5 6.375V7.125C4.5 7.19375 4.55625 7.25 4.625 7.25H10.625C10.6938 7.25 10.75 7.19375 10.75 7.125V6.375C10.75 6.30625 10.6938 6.25 10.625 6.25ZM7.5 8.5H4.625C4.55625 8.5 4.5 8.55625 4.5 8.625V9.375C4.5 9.44375 4.55625 9.5 4.625 9.5H7.5C7.56875 9.5 7.625 9.44375 7.625 9.375V8.625C7.625 8.55625 7.56875 8.5 7.5 8.5ZM6.75 13.3125H3.25V2.3125H12V7.6875C12 7.75625 12.0563 7.8125 12.125 7.8125H13C13.0688 7.8125 13.125 7.75625 13.125 7.6875V1.6875C13.125 1.41094 12.9016 1.1875 12.625 1.1875H2.625C2.34844 1.1875 2.125 1.41094 2.125 1.6875V13.9375C2.125 14.2141 2.34844 14.4375 2.625 14.4375H6.75C6.81875 14.4375 6.875 14.3813 6.875 14.3125V13.4375C6.875 13.3687 6.81875 13.3125 6.75 13.3125ZM12.325 12.15C12.7781 11.7391 13.0625 11.1453 13.0625 10.4844C13.0625 9.24219 12.0547 8.23438 10.8125 8.23438C9.57031 8.23438 8.5625 9.24219 8.5625 10.4844C8.5625 11.1453 8.84688 11.7391 9.3 12.15C8.40938 12.6578 7.79688 13.5984 7.75 14.6828C7.74688 14.7531 7.80469 14.8125 7.875 14.8125H8.62656C8.69219 14.8125 8.74688 14.7609 8.75156 14.6938C8.8125 13.6125 9.71406 12.75 10.8125 12.75C11.9109 12.75 12.8125 13.6125 12.8734 14.6938C12.8766 14.7594 12.9313 14.8125 12.9984 14.8125H13.75C13.8219 14.8125 13.8781 14.7531 13.875 14.6828C13.8297 13.5969 13.2156 12.6578 12.325 12.15ZM10.8125 9.23438C11.5031 9.23438 12.0625 9.79375 12.0625 10.4844C12.0625 11.175 11.5031 11.7344 10.8125 11.7344C10.1219 11.7344 9.5625 11.175 9.5625 10.4844C9.5625 9.79375 10.1219 9.23438 10.8125 9.23438Z' fill='#1C2024'/></svg>",
                  channels: [
                    {
                      channel: 'web',
                      heading: 'CMP_EMPLOYEE_SITE',
                      pageId: 'employee-site-bot',
                    },
                    {
                      pageId: 'employee-msteams-bot',
                      channel: 'msteams',
                      heading: 'CMP_MS_TEAMS_BOT',
                    },
                    {
                      pageId: 'employee-sms-bot',
                      channel: 'sms',
                      heading: 'CMP_SMS_BOT',
                    },
                  ],
                },
                {
                  heading: 'CMP_RECRUITER_EXPERIENCE',
                  experienceType: 'rx',
                  svg: "<svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M13.75 1.75H2.25C1.97344 1.75 1.75 1.97344 1.75 2.25V13.75C1.75 14.0266 1.97344 14.25 2.25 14.25H13.75C14.0266 14.25 14.25 14.0266 14.25 13.75V2.25C14.25 1.97344 14.0266 1.75 13.75 1.75ZM13.125 13.125H2.875V2.875H13.125V13.125ZM7.6875 6.25H10.5625C10.6313 6.25 10.6875 6.19375 10.6875 6.125V5.375C10.6875 5.30625 10.6313 5.25 10.5625 5.25H7.6875C7.61875 5.25 7.5625 5.30625 7.5625 5.375V6.125C7.5625 6.19375 7.61875 6.25 7.6875 6.25ZM7.6875 8.5H10.5625C10.6313 8.5 10.6875 8.44375 10.6875 8.375V7.625C10.6875 7.55625 10.6313 7.5 10.5625 7.5H7.6875C7.61875 7.5 7.5625 7.55625 7.5625 7.625V8.375C7.5625 8.44375 7.61875 8.5 7.6875 8.5ZM7.6875 10.75H10.5625C10.6313 10.75 10.6875 10.6938 10.6875 10.625V9.875C10.6875 9.80625 10.6313 9.75 10.5625 9.75H7.6875C7.61875 9.75 7.5625 9.80625 7.5625 9.875V10.625C7.5625 10.6938 7.61875 10.75 7.6875 10.75ZM5.3125 5.75C5.3125 5.91576 5.37835 6.07473 5.49556 6.19194C5.61277 6.30915 5.77174 6.375 5.9375 6.375C6.10326 6.375 6.26223 6.30915 6.37944 6.19194C6.49665 6.07473 6.5625 5.91576 6.5625 5.75C6.5625 5.58424 6.49665 5.42527 6.37944 5.30806C6.26223 5.19085 6.10326 5.125 5.9375 5.125C5.77174 5.125 5.61277 5.19085 5.49556 5.30806C5.37835 5.42527 5.3125 5.58424 5.3125 5.75ZM5.3125 8C5.3125 8.16576 5.37835 8.32473 5.49556 8.44194C5.61277 8.55915 5.77174 8.625 5.9375 8.625C6.10326 8.625 6.26223 8.55915 6.37944 8.44194C6.49665 8.32473 6.5625 8.16576 6.5625 8C6.5625 7.83424 6.49665 7.67527 6.37944 7.55806C6.26223 7.44085 6.10326 7.375 5.9375 7.375C5.77174 7.375 5.61277 7.44085 5.49556 7.55806C5.37835 7.67527 5.3125 7.83424 5.3125 8ZM5.3125 10.25C5.3125 10.4158 5.37835 10.5747 5.49556 10.6919C5.61277 10.8092 5.77174 10.875 5.9375 10.875C6.10326 10.875 6.26223 10.8092 6.37944 10.6919C6.49665 10.5747 6.5625 10.4158 6.5625 10.25C6.5625 10.0842 6.49665 9.92527 6.37944 9.80806C6.26223 9.69085 6.10326 9.625 5.9375 9.625C5.77174 9.625 5.61277 9.69085 5.49556 9.80806C5.37835 9.92527 5.3125 10.0842 5.3125 10.25Z' fill='#1C2024'/></svg>",
                  channels: [
                    {
                      pageId: 'rx-msteams-bot',
                      channel: 'msteams',
                      heading: 'CMP_MS_TEAMS_BOT',
                    },
                  ],
                },
              ]),
              (this.routeSubscription = ae.events.subscribe(Ce => {
                if (Ce instanceof j.m2) {
                  let Le = Ce.url.split('?')[0].split('/');
                  (this.defaultAccordionItem = Le.pop()),
                    (this.currentExperienceType = Le.pop()),
                    ('/' == this.defaultAccordionItem ||
                      '/locales' == this.defaultAccordionItem ||
                      'locales' == this.defaultAccordionItem) &&
                      (this.isLocaleListPage = !0);
                }
              })),
              (this.defaultAccordionItem = 'career-site-bot'),
              (this.currentExperienceType = 'cx'),
              localStorage.getItem('channel'))
            ) {
              let Ce = localStorage.getItem('channel');
              Object.keys(_).includes(`${Ce}`) &&
                localStorage.setItem('channel', this.defaultAccordionItem);
            }
          }
          ngOnInit() {
            this.loadLocales(),
              localStorage.getItem('channel') ||
                (this.data[0]?.channels[0]?.channel &&
                  localStorage.setItem(
                    'channel',
                    this.data[0]?.channels[0]?.channel
                  )),
              console.log(this.data[0].channels[0].channel),
              this.addTranslation(),
              (this.refNum = localStorage.getItem('refNum')),
              this.broadcastService
                .on(s.T.SELECTED_LOCALE_EVENT)
                .subscribe($ => {
                  let ae = location.pathname;
                  (ae = ae.replace('locales', '')),
                    (ae = ae.slice(1)),
                    console.log(ae),
                    this.router.config.push({
                      path: `${ae}configuration/:exp/:pageId`,
                      component: ne.H,
                      loadChildren: () =>
                        v
                          .e('common')
                          .then(v.bind(v, 6154))
                          .then($e => $e.ConfigurationsModule),
                    }),
                    console.log(this.router.config),
                    this.router.navigate([
                      `${ae}/configuration/${this.data[0].experienceType}/${this.data[0].channels[0].pageId}`,
                    ]);
                }),
              this.broadcastService.on(s.T.ACCORDION_EVENT).subscribe($ => {
                if (
                  ($.payload.channel &&
                    localStorage.setItem('channel', $.payload.channel),
                  $?.payload?.selectedPageId)
                ) {
                  console.log($.payload),
                    localStorage.setItem(
                      'experienceType',
                      $.payload.accordionId
                    ),
                    $.payload.channel &&
                      localStorage.setItem('channel', $.payload.channel);
                  let ae = location.pathname;
                  (ae = ae.replace('locales', '')), (ae = ae.slice(1));
                  let $e = ae.split('/');
                  ($e = $e.slice(0, $e.length - 2)),
                    $e.push($.payload.accordionId),
                    $e.push($.payload.selectedPageId),
                    (ae = $e.join('/')),
                    console.log(ae),
                    (this.parentMfe = 'dashboard')
                      ? (this.router.config.push(
                          { path: `${ae}` },
                          { path: `mfe-dashboard/${ae}` },
                          { path: `${location.pathname}/mfe-dashboard/${ae}` }
                        ),
                        console.log(this.router.config),
                        ae.includes('mfe-dashboard')
                          ? this.router.navigate([`${ae}`])
                          : this.router.navigate([
                              `${location.pathname}/mfe-dashboard/${ae}`,
                            ]))
                      : (this.router.config.push({
                          path: `${ae}`,
                          component: ne.H,
                          loadChildren: () =>
                            v
                              .e('common')
                              .then(v.bind(v, 6154))
                              .then(Ve => Ve.ConfigurationsModule),
                        }),
                        console.log(this.router.config),
                        this.router.navigate(
                          [
                            `../../${$.payload.accordionId}/${$?.payload?.selectedPageId}`,
                          ],
                          { relativeTo: this.route }
                        ));
                }
              });
          }
          loadLocales() {
            (this.areLocalesLoaded = !1),
              (this.refNum = localStorage.getItem('refNum')),
              this.utilsService.getDistinctLocale(this.refNum, 'cx').then($ => {
                ($.locales = this.utilsService.getDropdownFormatList(
                  $.locales,
                  'displayText'
                )),
                  (this.locales = $.locales),
                  (this.areLocalesLoaded = !0),
                  localStorage.getItem('locale') ||
                    localStorage.setItem('locale', this.locales[0].locale);
              });
          }
          addTranslation() {
            this.sharedService
              .getI18nValues()
              .pipe((0, X.U)($ => $))
              .subscribe($ => {
                this.data = this.data.map(
                  ae => (
                    (ae.channels = ae.channels.map(
                      $e => (
                        ($e.heading = $[$e?.heading]
                          ? $[$e?.heading]
                          : $e?.heading),
                        (this.isDataLoaded = !0),
                        $e
                      )
                    )),
                    (ae.heading = $[ae?.heading]
                      ? $[ae?.heading]
                      : ae?.heading),
                    ae
                  )
                );
              });
          }
        }
        return (
          (ee.ɵfac = function ($) {
            return new ($ || ee)(
              A.Y36(K.M),
              A.Y36(j.F0),
              A.Y36(q.F),
              A.Y36(fe.F),
              A.Y36(j.gz)
            );
          }),
          (ee.ɵcmp = A.Xpm({
            type: ee,
            selectors: [['app-sidebar']],
            inputs: {
              isLocaleListPage: 'isLocaleListPage',
              parentMfe: 'parentMfe',
              refNum: 'refNum',
            },
            decls: 1,
            vars: 1,
            consts: [
              ['class', 'sidebar-container', 4, 'ngIf'],
              [1, 'sidebar-container'],
              [4, 'ngIf', 'ngIfElse'],
              ['others', ''],
              [1, 'button'],
              [3, 'listOfLocales', 'id'],
              [4, 'ngFor', 'ngForOf'],
              [3, 'id', 'svg', 'defaultPageId', 'experienceType', 'pages'],
            ],
            template: function ($, ae) {
              1 & $ && A.YNc(0, Ge, 4, 2, 'section', 0),
                2 & $ && A.Q6J('ngIf', ae.isDataLoaded && ae.areLocalesLoaded);
            },
            styles: [
              '@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27pmO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27rWO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27rGO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27omO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}body[_ngcontent-%COMP%]{margin:0;font-family:Proxima Nova}html[_ngcontent-%COMP%]{line-height:1.15;-webkit-text-size-adjust:100%}body[_ngcontent-%COMP%]{margin:0}main[_ngcontent-%COMP%]{display:block}h1[_ngcontent-%COMP%]{font-size:2em;margin:.67em 0}hr[_ngcontent-%COMP%]{box-sizing:content-box;height:0;overflow:visible}pre[_ngcontent-%COMP%]{font-family:monospace,monospace;font-size:1em}a[_ngcontent-%COMP%]{background-color:transparent}abbr[title][_ngcontent-%COMP%]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b[_ngcontent-%COMP%], strong[_ngcontent-%COMP%]{font-weight:bolder}code[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], samp[_ngcontent-%COMP%]{font-family:monospace,monospace;font-size:1em}small[_ngcontent-%COMP%]{font-size:80%}sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%]{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub[_ngcontent-%COMP%]{bottom:-.25em}sup[_ngcontent-%COMP%]{top:-.5em}img[_ngcontent-%COMP%]{border-style:none}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{overflow:visible}button[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{text-transform:none}button[_ngcontent-%COMP%], [type=button][_ngcontent-%COMP%], [type=reset][_ngcontent-%COMP%], [type=submit][_ngcontent-%COMP%]{-webkit-appearance:button}button[_ngcontent-%COMP%]::-moz-focus-inner, [type=button][_ngcontent-%COMP%]::-moz-focus-inner, [type=reset][_ngcontent-%COMP%]::-moz-focus-inner, [type=submit][_ngcontent-%COMP%]::-moz-focus-inner{border-style:none;padding:0}button[_ngcontent-%COMP%]:-moz-focusring, [type=button][_ngcontent-%COMP%]:-moz-focusring, [type=reset][_ngcontent-%COMP%]:-moz-focusring, [type=submit][_ngcontent-%COMP%]:-moz-focusring{outline:1px dotted ButtonText}fieldset[_ngcontent-%COMP%]{padding:.35em .75em .625em}legend[_ngcontent-%COMP%]{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress[_ngcontent-%COMP%]{vertical-align:baseline}textarea[_ngcontent-%COMP%]{overflow:auto}[type=checkbox][_ngcontent-%COMP%], [type=radio][_ngcontent-%COMP%]{box-sizing:border-box;padding:0}[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, [type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button{height:auto}[type=search][_ngcontent-%COMP%]{-webkit-appearance:textfield;outline-offset:-2px}[type=search][_ngcontent-%COMP%]::-webkit-search-decoration{-webkit-appearance:none}[_ngcontent-%COMP%]::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details[_ngcontent-%COMP%]{display:block}summary[_ngcontent-%COMP%]{display:list-item}template[_ngcontent-%COMP%]{display:none}[hidden][_ngcontent-%COMP%]{display:none}.btn[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content;border:none;color:#fff;padding:12px 14px;width:150px;height:40px;background:#00838F;border-radius:4px}.btn-small[_ngcontent-%COMP%]{width:80px;height:30px;font-size:small;padding:8px 16px}.btn-small-outline[_ngcontent-%COMP%]{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-small-outline[_ngcontent-%COMP%]:hover{color:#fff;border:none}.btn-medium[_ngcontent-%COMP%]{width:120px;height:40px;font-size:medium;padding:8px 16px}.btn-medium-outline[_ngcontent-%COMP%]{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-medium-outline[_ngcontent-%COMP%]:hover{color:#fff;border:none}.btn-large[_ngcontent-%COMP%]{width:180px;height:50px;font-size:large;padding:4px 6px}.btn-large-outline[_ngcontent-%COMP%]{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-large-outline[_ngcontent-%COMP%]:hover{color:#fff;border:none}.btn-disabled[_ngcontent-%COMP%]{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04)}.btn-disabled[_ngcontent-%COMP%]:hover{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn[_ngcontent-%COMP%]:disabled{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn[_ngcontent-%COMP%]:disabled:hover{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn[_ngcontent-%COMP%]:hover{background:#29ABB9}.btn[_ngcontent-%COMP%]:active{background:#00838F}.sidebar-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px;width:100%;height:100vh;left:0px;background:#FFFFFF;box-shadow:inset -1px 0 #dfe3e6}app-accordion[_ngcontent-%COMP%], app-dropdown[_ngcontent-%COMP%]{position:relative;right:1px}.button[_ngcontent-%COMP%]{position:relative;right:1px;height:60px;background-color:#e0ffff}span[_ngcontent-%COMP%]{height:8px}',
            ],
          })),
          ee
        );
      })();
    },
    5289: (et, ge, v) => {
      v.d(ge, { T: () => s });
      var s = (() => {
        return (
          ((_ = s || (s = {})).CLICKED_ON_NOTIFICATION =
            'CLICKED_ON_NOTIFICATION'),
          (_.SOCKET_EVENT = 'SOCKET_EVENT'),
          (_.TOGGLE_EVENT = 'TOGGLE_EVENT'),
          (_.CHECKBOX_EVENT = 'CHECKBOX_EVENT'),
          (_.RANGE_EMITTER = 'RANGE_EMITTER'),
          (_.RADIO_EMITTER = 'RADIO_EMITTER'),
          (_.CLICKED_ON_LOCALE_DROPDOWN = 'CLICKED_ON_LOCALE_DROPDOWN'),
          (_.ACCORDION_EVENT_INIT = 'ACCORDION_EVENT_INIT'),
          (_.ACCORDION_EVENT = 'ACCORDION_EVENT'),
          (_.SELECTED_PAGE = 'SELECTED_PAGE'),
          (_.DROPDOWN_EVENT = 'DROPDOWN_EVENT'),
          (_.SELECTED_LOCALE_EVENT = 'SELECTED_LOCALE_EVENT'),
          (_.AVAILABLE_LOCALES_EVENT = 'AVAILABLE_LOCALES_EVENT'),
          (_.SHOW_NOTIFICATION_EVENT = 'SHOW_NOTIFICATION_EVENT'),
          (_.HIDE_NOTIFICATION_EVENT = 'HIDE_NOTIFICATION_EVENT'),
          s
        );
        var _;
      })();
    },
    8246: (et, ge, v) => {
      v.d(ge, { y: () => j });
      var s = v(4650),
        _ = v(1481);
      let j = (() => {
        class X {
          constructor(A) {
            this.sanitizer = A;
          }
          transform(A, K) {
            switch (K) {
              case 'html':
                return this.sanitizer.bypassSecurityTrustHtml(A);
              case 'style':
                return this.sanitizer.bypassSecurityTrustStyle(A);
              case 'script':
                return this.sanitizer.bypassSecurityTrustScript(A);
              case 'url':
                return this.sanitizer.bypassSecurityTrustUrl(A);
              case 'resourceUrl':
                return this.sanitizer.bypassSecurityTrustResourceUrl(A);
              default:
                throw new Error(`Invalid safe type specified: ${K}`);
            }
          }
        }
        return (
          (X.ɵfac = function (A) {
            return new (A || X)(s.Y36(_.H7, 16));
          }),
          (X.ɵpipe = s.Yjl({ name: 'safe', type: X, pure: !0 })),
          X
        );
      })();
    },
    319: (et, ge, v) => {
      v.d(ge, { q: () => s });
      class s {
        constructor(j, X) {
          (this.type = j), (this.payload = X);
        }
      }
    },
    9590: (et, ge, v) => {
      v.d(ge, { M: () => A });
      var s = v(7579),
        _ = v(8306),
        j = v(3099),
        X = v(9300),
        ne = v(4650);
      let A = (() => {
        class K {
          constructor() {
            (this.eventBroker = new s.x()),
              (this.observable = new _.y(fe => {}).pipe((0, j.B)()));
          }
          on(fe) {
            return this.eventBroker.pipe((0, X.h)(re => re.type === fe));
          }
          dispatch(fe) {
            this.eventBroker.next(fe);
          }
        }
        return (
          (K.ɵfac = function (fe) {
            return new (fe || K)();
          }),
          (K.ɵprov = ne.Yz7({ token: K, factory: K.ɵfac, providedIn: 'root' })),
          K
        );
      })();
    },
    4172: (et, ge, v) => {
      v.d(ge, { O: () => A });
      var s = v(529),
        _ = v(4004),
        j = (() => {
          return (
            ((K = j || (j = {})).HTTP_GET = 'GET'),
            (K.HTTP_POST = 'POST'),
            (K.HTTP_PUT = 'PUT'),
            (K.HTTP_DELETE = 'DELETE'),
            (K.HTTP_PATCH = 'PATCH'),
            j
          );
          var K;
        })(),
        X = v(2340),
        ne = v(4650);
      let A = (() => {
        class K {
          constructor(fe) {
            this.httpClient = fe;
          }
          httpPost(fe, re, oe) {
            var Ge = {
              type: 'api',
              service: re,
              api: fe,
              authConfig: { token: 'local' },
              request_object: oe,
            };
            return (
              (Ge.request_type = j.HTTP_POST),
              this.cmpHubPostAPI(X.N.testingRestApi, Ge)
            );
          }
          httpPatch(fe, re, oe) {
            var Ge = {
              type: 'api',
              service: re,
              api: fe,
              authConfig: { token: 'local' },
              request_object: oe,
            };
            return (
              (Ge.request_type = j.HTTP_PATCH),
              this.cmpHubPostAPI(X.N.testingRestApi, Ge)
            );
          }
          httpGet(fe, re, oe) {
            var Ge = {
              type: 'api',
              service: re,
              api: fe,
              authConfig: { token: 'local' },
              request_object: oe,
            };
            return (
              (Ge.request_type = j.HTTP_GET),
              this.cmpHubPostAPI(X.N.testingRestApi, Ge)
            );
          }
          httpDelete(fe, re, oe) {
            var Ge = {
              type: 'api',
              service: re,
              api: fe,
              authConfig: { token: 'local' },
              request_object: oe,
            };
            return (
              (Ge.request_type = j.HTTP_DELETE),
              this.cmpHubPostAPI(X.N.testingRestApi, Ge)
            );
          }
          cmpHubPostAPI(fe, re) {
            new s.WM()
              .set('content-type', 'application/json')
              .set('Access-Control-Allow-Origin', '*');
            let ie = re || {},
              Ge = fe;
            return (
              (ie.token = 'local'),
              this.httpClient.post(Ge, ie).pipe(
                (0, _.U)(we => {
                  if (we.data) {
                    let ee = we.data ? we.data : {};
                    return (
                      (ee.requestObject = ie?.request_object),
                      (ee.productRequestObject = ie?.request_object),
                      ee
                    );
                  }
                  if (we.error) return we.error.response;
                })
              )
            );
          }
        }
        return (
          (K.ɵfac = function (fe) {
            return new (fe || K)(ne.LFG(s.eN));
          }),
          (K.ɵprov = ne.Yz7({ token: K, factory: K.ɵfac, providedIn: 'root' })),
          K
        );
      })();
    },
    1094: (et, ge, v) => {
      v.d(ge, { F: () => j });
      var s = v(4650),
        _ = v(4172);
      let j = (() => {
        class X {
          constructor(A) {
            this.httpService = A;
          }
          formatLocale(A) {
            return A.toUpperCase().split('_').join(' | ');
          }
          checkIfCustomerIsProvisioned(A, K) {
            return new Promise((q, fe) => {
              A &&
                K &&
                this.httpService
                  .httpGet(A, 'chatbot_configurations_api')
                  .subscribe(re => {
                    q(re);
                  });
            });
          }
          getRequiredSkeleton() {}
          getDistinctLocalesPath(A, K) {
            return `v1/customers/${A}/${K}/distinct-locales`;
          }
          getChatbotConfigurationsPath(A, K, q, fe) {
            return `v1/configurations/${A}/${K}/${q}/${fe}`;
          }
          getDropdownFormatList(A, K) {
            return A.map(q => ((q.item = q[K]), { listItem: q, ...q })), A;
          }
          getDisplayText(A, K) {
            return `${A} ${this.formatLocale(K)}`;
          }
          getDistinctLocale(A, K) {
            let q = this.getDistinctLocalesPath(A, K);
            return new Promise((fe, re) => {
              this.httpService
                .httpGet(q, 'chatbot_configurations_api')
                .subscribe(oe => {
                  oe.locales.map(Ge => {
                    Ge.displayText = this.getDisplayText(
                      oe.customerName,
                      Ge.locale
                    );
                  }),
                    fe(oe);
                });
            });
          }
        }
        return (
          (X.ɵfac = function (A) {
            return new (A || X)(s.LFG(_.O));
          }),
          (X.ɵprov = s.Yz7({ token: X, factory: X.ɵfac, providedIn: 'root' })),
          X
        );
      })();
    },
    613: (et, ge, v) => {
      v.d(ge, { m: () => Le });
      var s = v(6895),
        _ = v(433),
        j = v(529),
        X = v(5289),
        ne = v(319),
        A = v(4650),
        K = v(9590);
      const q = function (Oe) {
        return { 'selected-item': Oe };
      };
      function fe(Oe, Ae) {
        if (1 & Oe) {
          const te = A.EpF();
          A.TgZ(0, 'li', 12),
            A.NdJ('click', function () {
              const Q = A.CHM(te).$implicit,
                B = A.oxw(3);
              return A.KtG(B.selectOption(Q));
            }),
            A._uU(1),
            A.qZA();
        }
        if (2 & Oe) {
          const te = Ae.$implicit,
            Pe = A.oxw(3);
          A.Q6J('id', te.locale)('ngClass', A.VKq(3, q, te.item == Pe.title)),
            A.xp6(1),
            A.hij(' ', te.item, ' ');
        }
      }
      function re(Oe, Ae) {
        if (
          (1 & Oe && (A.TgZ(0, 'ul'), A.YNc(1, fe, 2, 5, 'li', 11), A.qZA()),
          2 & Oe)
        ) {
          const te = A.oxw(2);
          A.xp6(1), A.Q6J('ngForOf', te.listOfLocales);
        }
      }
      function oe(Oe, Ae) {
        if (
          (1 & Oe &&
            (A.O4$(),
            A.kcU(),
            A.TgZ(0, 'section', 9),
            A.YNc(1, re, 2, 1, 'ul', 10),
            A.qZA()),
          2 & Oe)
        ) {
          const te = A.oxw();
          A.xp6(1), A.Q6J('ngIf', te.listOfLocales.length);
        }
      }
      const ie = function (Oe) {
        return { transform: Oe };
      };
      let Ge = (() => {
        class Oe {
          constructor(te) {
            (this.broadcastService = te),
              (this.listOfLocales = [
                {
                  locale: 'es_us',
                  regionName: 'United States',
                  displayText: 'Phenom People ES | US',
                  item: 'Phenom People ES | US',
                },
                {
                  locale: 'fr_ca',
                  regionName: 'Canadian French',
                  displayText: 'Phenom People FR | CA',
                  item: 'Phenom People FR | CA',
                },
                {
                  locale: 'ts_ts',
                  regionName: 'Test Locale 1',
                  displayText: 'Phenom People TS | TS',
                  item: 'Phenom People TS | TS',
                },
                {
                  locale: 'ts_ts2',
                  regionName: 'Test Locale 2',
                  displayText: 'Phenom People TS | TS2',
                  item: 'Phenom People TS | TS2',
                },
                {
                  locale: 'en_global',
                  regionName: 'Global',
                  displayText: 'Phenom People EN | GLOBAL',
                  item: 'Phenom People EN | GLOBAL',
                },
                {
                  locale: 'fr_us',
                  regionName: 'United States',
                  displayText: 'Phenom People FR | US',
                  item: 'Phenom People FR | US',
                },
              ]),
              (this.isDropdownListVisible = !1),
              (this.testing = !1);
          }
          onWindowClick(te) {
            'dropdown' != te.id &&
              this.isDropdownListVisible &&
              (this.isDropdownListVisible = !this.isDropdownListVisible);
          }
          ngOnInit() {
            (this.locale = localStorage.getItem('locale')),
              this.listOfLocales?.forEach(te => {
                te.locale == this.locale && (this.title = te.item);
              }),
              (this.selectedItem = new _.cw({
                name: new _.NI(this.title, [_.kI.required]),
              })),
              this.broadcastService.on(X.T.DROPDOWN_EVENT).subscribe(te => {
                this.isDropdownListVisible =
                  te.payload.data.id == this.id && !this.isDropdownListVisible;
              });
          }
          ngOnChanges() {
            (this.title = this.listOfLocales
              ? this.listOfLocales[0]?.item
              : ''),
              (this.selectedItem = new _.cw({
                name: new _.NI(this.title, [_.kI.required]),
              })),
              this.broadcastService.on(X.T.DROPDOWN_EVENT).subscribe(te => {
                this.isDropdownListVisible =
                  te.payload.data.id == this.id && !this.isDropdownListVisible;
              });
          }
          selectOption(te) {
            (this.isDropdownListVisible = !this.isDropdownListVisible),
              (this.title = te.item),
              this.selectedItem.patchValue({ name: te.item }),
              localStorage.setItem('locale', te?.locale),
              this.broadcastService.dispatch(
                new ne.q(X.T.CLICKED_ON_LOCALE_DROPDOWN, {
                  name: X.T.CLICKED_ON_LOCALE_DROPDOWN,
                  data: { selectedItem: te },
                })
              ),
              localStorage.setItem('locale', te?.locale);
          }
          onTitleClick() {
            (this.isDropdownListVisible = !this.isDropdownListVisible),
              (this.testing = !0);
          }
          check() {
            this.testing = !0;
          }
        }
        return (
          (Oe.ɵfac = function (te) {
            return new (te || Oe)(A.Y36(K.M));
          }),
          (Oe.ɵcmp = A.Xpm({
            type: Oe,
            selectors: [['app-dropdown']],
            hostBindings: function (te, Pe) {
              1 & te &&
                A.NdJ(
                  'click',
                  function (Q) {
                    return Pe.onWindowClick(Q.target);
                  },
                  !1,
                  A.Jf7
                );
            },
            inputs: { id: 'id', listOfLocales: 'listOfLocales' },
            features: [A.TTD],
            decls: 10,
            vars: 7,
            consts: [
              [1, 'mfe-dropdown', 3, 'id'],
              [3, 'formGroup', 'ngSubmit'],
              ['type', 'hidden', 'formControlName', 'name'],
              ['id', 'dropdown', 1, 'mfe-dropdown-title', 3, 'click'],
              ['id', 'dropdown-title'],
              [3, 'ngStyle'],
              [
                'width',
                '10',
                'height',
                '6',
                'viewBox',
                '0 0 10 6',
                'fill',
                'none',
                'xmlns',
                'http://www.w3.org/2000/svg',
              ],
              [
                'd',
                'M9.3594 0H8.4805C8.42073 0 8.36448 0.0292969 8.32932 0.0773438L5.00003 4.66641L1.67073 0.0773438C1.63557 0.0292969 1.57932 0 1.51956 0H0.640651C0.564479 0 0.519948 0.0867189 0.564479 0.148828L4.69651 5.84531C4.84651 6.05156 5.15354 6.05156 5.30237 5.84531L9.4344 0.148828C9.48011 0.0867189 9.43557 0 9.3594 0V0Z',
                'fill',
                '#1C2024',
              ],
              ['class', 'mfe-dropdown-menu', 4, 'ngIf'],
              [1, 'mfe-dropdown-menu'],
              [4, 'ngIf'],
              [3, 'id', 'ngClass', 'click', 4, 'ngFor', 'ngForOf'],
              [3, 'id', 'ngClass', 'click'],
            ],
            template: function (te, Pe) {
              1 & te &&
                (A.TgZ(0, 'main', 0)(1, 'form', 1),
                A.NdJ('ngSubmit', function () {
                  return Pe.selectOption;
                }),
                A._UZ(2, 'input', 2),
                A.TgZ(3, 'p', 3),
                A.NdJ('click', function () {
                  return Pe.onTitleClick();
                }),
                A.TgZ(4, 'span', 4),
                A._uU(5),
                A.qZA(),
                A.TgZ(6, 'span', 5),
                A.O4$(),
                A.TgZ(7, 'svg', 6),
                A._UZ(8, 'path', 7),
                A.qZA()()(),
                A.YNc(9, oe, 2, 1, 'section', 8),
                A.qZA()()),
                2 & te &&
                  (A.Q6J('id', Pe.id),
                  A.xp6(1),
                  A.Q6J('formGroup', Pe.selectedItem),
                  A.xp6(4),
                  A.Oqu(Pe.title),
                  A.xp6(1),
                  A.Q6J(
                    'ngStyle',
                    A.VKq(
                      5,
                      ie,
                      Pe.isDropdownListVisible
                        ? 'rotate(180deg)'
                        : 'rotate(0deg)'
                    )
                  ),
                  A.xp6(3),
                  A.Q6J('ngIf', Pe.isDropdownListVisible));
            },
            dependencies: [
              s.mk,
              s.sg,
              s.O5,
              s.PC,
              _._Y,
              _.Fj,
              _.JJ,
              _.JL,
              _.sg,
              _.u,
            ],
            styles: [
              '@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27pmO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27rWO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27rGO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27omO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}body[_ngcontent-%COMP%]{margin:0;font-family:Proxima Nova}html[_ngcontent-%COMP%]{line-height:1.15;-webkit-text-size-adjust:100%}body[_ngcontent-%COMP%]{margin:0}main[_ngcontent-%COMP%]{display:block}h1[_ngcontent-%COMP%]{font-size:2em;margin:.67em 0}hr[_ngcontent-%COMP%]{box-sizing:content-box;height:0;overflow:visible}pre[_ngcontent-%COMP%]{font-family:monospace,monospace;font-size:1em}a[_ngcontent-%COMP%]{background-color:transparent}abbr[title][_ngcontent-%COMP%]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b[_ngcontent-%COMP%], strong[_ngcontent-%COMP%]{font-weight:bolder}code[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], samp[_ngcontent-%COMP%]{font-family:monospace,monospace;font-size:1em}small[_ngcontent-%COMP%]{font-size:80%}sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%]{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub[_ngcontent-%COMP%]{bottom:-.25em}sup[_ngcontent-%COMP%]{top:-.5em}img[_ngcontent-%COMP%]{border-style:none}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{overflow:visible}button[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{text-transform:none}button[_ngcontent-%COMP%], [type=button][_ngcontent-%COMP%], [type=reset][_ngcontent-%COMP%], [type=submit][_ngcontent-%COMP%]{-webkit-appearance:button}button[_ngcontent-%COMP%]::-moz-focus-inner, [type=button][_ngcontent-%COMP%]::-moz-focus-inner, [type=reset][_ngcontent-%COMP%]::-moz-focus-inner, [type=submit][_ngcontent-%COMP%]::-moz-focus-inner{border-style:none;padding:0}button[_ngcontent-%COMP%]:-moz-focusring, [type=button][_ngcontent-%COMP%]:-moz-focusring, [type=reset][_ngcontent-%COMP%]:-moz-focusring, [type=submit][_ngcontent-%COMP%]:-moz-focusring{outline:1px dotted ButtonText}fieldset[_ngcontent-%COMP%]{padding:.35em .75em .625em}legend[_ngcontent-%COMP%]{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress[_ngcontent-%COMP%]{vertical-align:baseline}textarea[_ngcontent-%COMP%]{overflow:auto}[type=checkbox][_ngcontent-%COMP%], [type=radio][_ngcontent-%COMP%]{box-sizing:border-box;padding:0}[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, [type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button{height:auto}[type=search][_ngcontent-%COMP%]{-webkit-appearance:textfield;outline-offset:-2px}[type=search][_ngcontent-%COMP%]::-webkit-search-decoration{-webkit-appearance:none}[_ngcontent-%COMP%]::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details[_ngcontent-%COMP%]{display:block}summary[_ngcontent-%COMP%]{display:list-item}template[_ngcontent-%COMP%]{display:none}[hidden][_ngcontent-%COMP%]{display:none}.btn[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content;border:none;color:#fff;padding:12px 14px;width:150px;height:40px;background:#00838F;border-radius:4px}.btn-small[_ngcontent-%COMP%]{width:80px;height:30px;font-size:small;padding:8px 16px}.btn-small-outline[_ngcontent-%COMP%]{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-small-outline[_ngcontent-%COMP%]:hover{color:#fff;border:none}.btn-medium[_ngcontent-%COMP%]{width:120px;height:40px;font-size:medium;padding:8px 16px}.btn-medium-outline[_ngcontent-%COMP%]{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-medium-outline[_ngcontent-%COMP%]:hover{color:#fff;border:none}.btn-large[_ngcontent-%COMP%]{width:180px;height:50px;font-size:large;padding:4px 6px}.btn-large-outline[_ngcontent-%COMP%]{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-large-outline[_ngcontent-%COMP%]:hover{color:#fff;border:none}.btn-disabled[_ngcontent-%COMP%]{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04)}.btn-disabled[_ngcontent-%COMP%]:hover{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn[_ngcontent-%COMP%]:disabled{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn[_ngcontent-%COMP%]:disabled:hover{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn[_ngcontent-%COMP%]:hover{background:#29ABB9}.btn[_ngcontent-%COMP%]:active{background:#00838F}.mfe-dropdown[_ngcontent-%COMP%]{cursor:pointer;font-family:Proxima Nova}.mfe-dropdown[_ngcontent-%COMP%]   .mfe-dropdown-title[_ngcontent-%COMP%]{margin:0;border:1px solid #FFFFFF;padding:12px 16px;font-style:normal;font-weight:400;font-size:14px;line-height:24px;background:#FFFFFF;box-shadow:inset 0 -1px #edf0f1;display:flex;justify-content:space-between;align-items:center}.mfe-dropdown[_ngcontent-%COMP%]   .mfe-dropdown-menu[_ngcontent-%COMP%]{position:absolute;left:10px;z-index:1;width:92%;padding:4px;margin:-15px auto;background:#FFFFFF;box-shadow:0 0 8px #00000026;border-radius:2px;max-height:224px}.mfe-dropdown[_ngcontent-%COMP%]   .mfe-dropdown-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{width:98%;overflow-y:scroll;max-height:224px;padding:0;margin:0}.mfe-dropdown[_ngcontent-%COMP%]   .mfe-dropdown-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none;font-style:normal;font-weight:400;font-size:14px;line-height:20px;color:#4b6479;padding:12px 16px}.mfe-dropdown[_ngcontent-%COMP%]   .mfe-dropdown-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background:#F7F9FA;color:#00838f}.mfe-dropdown[_ngcontent-%COMP%]   .mfe-dropdown-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%]{color:#00838f}[_ngcontent-%COMP%]::-webkit-scrollbar{width:5px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#FFFFFF}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#bdc1cc;width:5px;border-radius:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#555}',
            ],
          })),
          Oe
        );
      })();
      var we = v(542),
        ee = v(8246);
      const Ee = function (Oe) {
          return { background: Oe };
        },
        $ = function (Oe) {
          return { color: Oe };
        };
      function ae(Oe, Ae) {
        if (1 & Oe) {
          const te = A.EpF();
          A.ynx(0),
            A.TgZ(1, 'div', 9),
            A.NdJ('click', function () {
              const Q = A.CHM(te).$implicit,
                B = A.oxw(2);
              return A.KtG(B.onBotCardClick(Q));
            }),
            A.TgZ(2, 'span', 10),
            A._uU(3),
            A.qZA()(),
            A.BQk();
        }
        if (2 & Oe) {
          const te = Ae.$implicit,
            Pe = A.oxw(2);
          A.xp6(1),
            A.s9C('id', te.pageId),
            A.Q6J(
              'ngStyle',
              A.VKq(
                5,
                Ee,
                Pe.id === Pe.currentOpenAccordion &&
                  te.pageId === Pe.defaultPageId
                  ? '#F7F9FA'
                  : '#FFFFFF'
              )
            ),
            A.xp6(1),
            A.s9C('id', te.pageId),
            A.Q6J(
              'ngStyle',
              A.VKq(
                7,
                $,
                Pe.id === Pe.currentOpenAccordion &&
                  te.pageId === Pe.defaultPageId
                  ? '#00838F'
                  : '#4B6479'
              )
            ),
            A.xp6(1),
            A.Oqu(te.heading);
        }
      }
      function $e(Oe, Ae) {
        if (
          (1 & Oe &&
            (A.O4$(),
            A.kcU(),
            A.TgZ(0, 'div', 7),
            A.YNc(1, ae, 4, 9, 'ng-container', 8),
            A.qZA()),
          2 & Oe)
        ) {
          const te = A.oxw();
          A.xp6(1), A.Q6J('ngForOf', te.pages);
        }
      }
      const Ve = function (Oe) {
        return { transform: Oe };
      };
      let Ie = (() => {
        class Oe {
          constructor(te, Pe, G) {
            (this.broadcastService = te),
              (this.pages = [
                { pageId: 'career-site-bot', heading: 'Career Site Bot' },
                { pageId: 'sms-bot', heading: 'SMS Bot' },
                { pageId: 'facebook-bot', heading: 'Facebook Bot' },
                { pageId: 'whatsapp-bot', heading: 'Whatsapp Bot' },
              ]),
              (this.isShowPages = !1),
              (this.id = ''),
              (this.selectedPageId = ''),
              console.log('accordion comp loaded'),
              console.log(this.defaultPageId),
              (this.currentOpenAccordion = Pe?.url?.split('/')[1]);
          }
          ngOnChanges() {
            (this.isShowPages = this.isShowPages),
              this.broadcastService.dispatch(
                new ne.q(X.T.ACCORDION_EVENT_INIT, {
                  accordionId: this.id,
                  isAccordionOpen: this.isShowPages,
                  experienceType: this.experienceType,
                  page: this.defaultPageId,
                  heading: this.pages.filter(
                    te => te.pageId == this.defaultPageId
                  )[0]?.heading,
                  channel: this.defaultPageId,
                })
              );
          }
          ngOnInit() {
            (this.currentOpenAccordion =
              localStorage.getItem('experienceType')),
              (this.selectedPageId = this.pages.some(
                te => te.pageId === this.defaultPageId
              )
                ? this.defaultPageId
                : ''),
              this.id === this.currentOpenAccordion &&
                this.defaultPageId === this.selectedPageId &&
                ((this.isShowPages = !0),
                this.isShowPages &&
                  this.broadcastService.dispatch(
                    new ne.q(X.T.ACCORDION_EVENT_INIT, {
                      accordionId: this.id,
                      isAccordionOpen: this.isShowPages,
                      experienceType: this.experienceType,
                      page: this.defaultPageId,
                      heading: this.pages.filter(
                        te => te.pageId == this.defaultPageId
                      )[0]?.heading,
                      channel: this.defaultPageId,
                    })
                  )),
              this.broadcastService.on(X.T.ACCORDION_EVENT).subscribe(te => {
                (this.accordionData = te.payload),
                  this.accordionData.accordionId === this.id
                    ? (this.isShowPages = !this.isShowPages)
                    : ((this.isShowPages = !1), (this.selectedPageId = ''));
              });
          }
          onClick() {
            this.broadcastService.dispatch(
              new ne.q(X.T.ACCORDION_EVENT, {
                accordionId: this.id,
                isAccordionOpen: this.isShowPages,
              })
            );
          }
          onBotCardClick(te) {
            (this.isShowPages = !this.isShowPages),
              (this.selectedPageId = te.pageId),
              (this.currentOpenAccordion = this.id),
              this.broadcastService.dispatch(
                new ne.q(X.T.ACCORDION_EVENT, {
                  selectedPageId: this.selectedPageId,
                  accordionId: this.id,
                  isAccordionOpen: this.isShowPages,
                  experienceType: this.experienceType,
                  heading: te.heading,
                  channel: te.channel,
                  page: this.defaultPageId,
                })
              );
          }
        }
        return (
          (Oe.ɵfac = function (te) {
            return new (te || Oe)(A.Y36(K.M), A.Y36(we.F0), A.Y36(we.gz));
          }),
          (Oe.ɵcmp = A.Xpm({
            type: Oe,
            selectors: [['app-accordion']],
            inputs: {
              pages: 'pages',
              experienceType: 'experienceType',
              defaultPageId: 'defaultPageId',
              svg: 'svg',
              isShowPages: 'isShowPages',
              id: 'id',
            },
            features: [A.TTD],
            decls: 9,
            vars: 9,
            consts: [
              ['id', 'accordion', 1, 'section', 3, 'click'],
              [1, 'group-1'],
              [3, 'innerHTML'],
              [1, 'title'],
              [
                'width',
                '10',
                'height',
                '6',
                'viewBox',
                '0 0 10 6',
                'fill',
                'none',
                'xmlns',
                'http://www.w3.org/2000/svg',
                1,
                'svg2',
                3,
                'ngStyle',
              ],
              [
                'd',
                'M9.43561 5.85117L5.30358 0.154688C5.15358 -0.0515625 4.84655 -0.0515625 4.69772 0.154688L0.564516 5.85117C0.554345 5.86518 0.548252 5.88173 0.546912 5.899C0.545572 5.91626 0.549038 5.93355 0.556926 5.94896C0.564814 5.96438 0.576816 5.9773 0.5916 5.98631C0.606385 5.99532 0.623375 6.00006 0.640688 6H1.51959C1.57936 6 1.63561 5.9707 1.67077 5.92266L5.00006 1.33359L8.32936 5.92266C8.36452 5.9707 8.42077 6 8.48053 6H9.35944C9.43561 6 9.48014 5.91328 9.43561 5.85117Z',
                'fill',
                '#1C2024',
              ],
              ['id', 'accodion-item', 'class', 'accodion-container', 4, 'ngIf'],
              ['id', 'accodion-item', 1, 'accodion-container'],
              [4, 'ngFor', 'ngForOf'],
              [1, 'botcard', 3, 'id', 'ngStyle', 'click'],
              [1, 'botcard-title', 3, 'id', 'ngStyle'],
            ],
            template: function (te, Pe) {
              1 & te &&
                (A.TgZ(0, 'div', 0),
                A.NdJ('click', function () {
                  return Pe.onClick();
                }),
                A.TgZ(1, 'div', 1),
                A._UZ(2, 'span', 2),
                A.ALo(3, 'safe'),
                A.TgZ(4, 'span', 3),
                A._uU(5),
                A.qZA()(),
                A.O4$(),
                A.TgZ(6, 'svg', 4),
                A._UZ(7, 'path', 5),
                A.qZA()(),
                A.YNc(8, $e, 2, 1, 'div', 6)),
                2 & te &&
                  (A.xp6(2),
                  A.Q6J('innerHTML', A.xi3(3, 4, Pe.svg, 'html'), A.oJD),
                  A.xp6(3),
                  A.Oqu(Pe.experienceType),
                  A.xp6(1),
                  A.Q6J(
                    'ngStyle',
                    A.VKq(7, Ve, Pe.isShowPages ? '' : 'rotate(90deg)')
                  ),
                  A.xp6(2),
                  A.Q6J('ngIf', Pe.isShowPages));
            },
            dependencies: [s.sg, s.O5, s.PC, ee.y],
            styles: [
              '@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27pmO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27rWO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27rGO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27omO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}body[_ngcontent-%COMP%]{margin:0;font-family:Proxima Nova}html[_ngcontent-%COMP%]{line-height:1.15;-webkit-text-size-adjust:100%}body[_ngcontent-%COMP%]{margin:0}main[_ngcontent-%COMP%]{display:block}h1[_ngcontent-%COMP%]{font-size:2em;margin:.67em 0}hr[_ngcontent-%COMP%]{box-sizing:content-box;height:0;overflow:visible}pre[_ngcontent-%COMP%]{font-family:monospace,monospace;font-size:1em}a[_ngcontent-%COMP%]{background-color:transparent}abbr[title][_ngcontent-%COMP%]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b[_ngcontent-%COMP%], strong[_ngcontent-%COMP%]{font-weight:bolder}code[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], samp[_ngcontent-%COMP%]{font-family:monospace,monospace;font-size:1em}small[_ngcontent-%COMP%]{font-size:80%}sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%]{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub[_ngcontent-%COMP%]{bottom:-.25em}sup[_ngcontent-%COMP%]{top:-.5em}img[_ngcontent-%COMP%]{border-style:none}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{overflow:visible}button[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{text-transform:none}button[_ngcontent-%COMP%], [type=button][_ngcontent-%COMP%], [type=reset][_ngcontent-%COMP%], [type=submit][_ngcontent-%COMP%]{-webkit-appearance:button}button[_ngcontent-%COMP%]::-moz-focus-inner, [type=button][_ngcontent-%COMP%]::-moz-focus-inner, [type=reset][_ngcontent-%COMP%]::-moz-focus-inner, [type=submit][_ngcontent-%COMP%]::-moz-focus-inner{border-style:none;padding:0}button[_ngcontent-%COMP%]:-moz-focusring, [type=button][_ngcontent-%COMP%]:-moz-focusring, [type=reset][_ngcontent-%COMP%]:-moz-focusring, [type=submit][_ngcontent-%COMP%]:-moz-focusring{outline:1px dotted ButtonText}fieldset[_ngcontent-%COMP%]{padding:.35em .75em .625em}legend[_ngcontent-%COMP%]{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress[_ngcontent-%COMP%]{vertical-align:baseline}textarea[_ngcontent-%COMP%]{overflow:auto}[type=checkbox][_ngcontent-%COMP%], [type=radio][_ngcontent-%COMP%]{box-sizing:border-box;padding:0}[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, [type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button{height:auto}[type=search][_ngcontent-%COMP%]{-webkit-appearance:textfield;outline-offset:-2px}[type=search][_ngcontent-%COMP%]::-webkit-search-decoration{-webkit-appearance:none}[_ngcontent-%COMP%]::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details[_ngcontent-%COMP%]{display:block}summary[_ngcontent-%COMP%]{display:list-item}template[_ngcontent-%COMP%]{display:none}[hidden][_ngcontent-%COMP%]{display:none}.btn[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content;border:none;color:#fff;padding:12px 14px;width:150px;height:40px;background:#00838F;border-radius:4px}.btn-small[_ngcontent-%COMP%]{width:80px;height:30px;font-size:small;padding:8px 16px}.btn-small-outline[_ngcontent-%COMP%]{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-small-outline[_ngcontent-%COMP%]:hover{color:#fff;border:none}.btn-medium[_ngcontent-%COMP%]{width:120px;height:40px;font-size:medium;padding:8px 16px}.btn-medium-outline[_ngcontent-%COMP%]{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-medium-outline[_ngcontent-%COMP%]:hover{color:#fff;border:none}.btn-large[_ngcontent-%COMP%]{width:180px;height:50px;font-size:large;padding:4px 6px}.btn-large-outline[_ngcontent-%COMP%]{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-large-outline[_ngcontent-%COMP%]:hover{color:#fff;border:none}.btn-disabled[_ngcontent-%COMP%]{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04)}.btn-disabled[_ngcontent-%COMP%]:hover{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn[_ngcontent-%COMP%]:disabled{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn[_ngcontent-%COMP%]:disabled:hover{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn[_ngcontent-%COMP%]:hover{background:#29ABB9}.btn[_ngcontent-%COMP%]:active{background:#00838F}*[_ngcontent-%COMP%]{cursor:pointer;font-family:Proxima Nova}.section[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;background:#FFFFFF}.section[_ngcontent-%COMP%]   .group-1[_ngcontent-%COMP%]{display:flex;align-items:flex-start;padding:14.75px 25.75px}.section[_ngcontent-%COMP%]   .group-1[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:14px;padding:0 10px;color:#1c2024}.section[_ngcontent-%COMP%]   .svg2[_ngcontent-%COMP%]{position:absolute;right:25.55px;top:21px}.accodion-container[_ngcontent-%COMP%]{display:flex;position:relative;flex-direction:column;background:#FFFFFF;margin-top:4px}.botcard[_ngcontent-%COMP%]{position:relative;padding:9px 24px 9px 8px;margin:0 48px;background:#FFFFFF;border-radius:4px}.botcard-title[_ngcontent-%COMP%]{position:relative;font-style:normal;font-weight:400;font-size:14px;line-height:22px;color:#4b6479}',
            ],
          })),
          Oe
        );
      })();
      var Ce = v(2691);
      let Le = (() => {
        class Oe {}
        return (
          (Oe.ɵfac = function (te) {
            return new (te || Oe)();
          }),
          (Oe.ɵmod = A.oAB({ type: Oe })),
          (Oe.ɵinj = A.cJS({ imports: [s.ez, _.u5, _.UX, j.JF] })),
          Oe
        );
      })();
      A.B6R(Ce.k, [s.sg, s.O5, Ie, Ge], []);
    },
    7420: (et, ge, v) => {
      v.d(ge, { F: () => ne });
      var s = v(2340),
        _ = v(4650),
        j = v(529),
        X = v(4172);
      let ne = (() => {
        class A {
          constructor(q, fe) {
            (this.httpClient = q), (this.httpService = fe);
          }
          getDashboardSchema(q) {
            return this.httpService.httpGet(
              `${s.N.dashboardSchema}${q}`,
              'chatbot_management_api'
            );
          }
          getDashboardSchemaFromLocale(q) {
            return this.httpClient.get(`${s.N.dashboardSchema}${q}.json`);
          }
          getI18nValues() {
            return this.httpClient.get(
              'https://api.npoint.io/abcca999b018210fb3fd'
            );
          }
        }
        return (
          (A.ɵfac = function (q) {
            return new (q || A)(_.LFG(j.eN), _.LFG(X.O));
          }),
          (A.ɵprov = _.Yz7({ token: A, factory: A.ɵfac, providedIn: 'root' })),
          A
        );
      })();
    },
    2340: (et, ge, v) => {
      v.d(ge, { N: () => s });
      const s = {
        production: !0,
        authenticationProxy:
          'https://qa-chatbot-authentication.phenompro.com/bot_auth',
        testingRestApi:
          'https://dev-chatbot-authentication.phenompro.com/bot_auth',
        dashboardSchema: 'https://cdn-bot.phenompeople.com/dashboard/dev/json',
      };
    },
    2987: (et, ge, v) => {
      var s = v(1481),
        _ = v(4650),
        j = v(6895),
        X = v(529),
        ne = v(7579);
      const A = { now: () => (A.delegate || Date).now(), delegate: void 0 };
      class K extends ne.x {
        constructor(pe = 1 / 0, Z = 1 / 0, ke = A) {
          super(),
            (this._bufferSize = pe),
            (this._windowTime = Z),
            (this._timestampProvider = ke),
            (this._buffer = []),
            (this._infiniteTimeWindow = !0),
            (this._infiniteTimeWindow = Z === 1 / 0),
            (this._bufferSize = Math.max(1, pe)),
            (this._windowTime = Math.max(1, Z));
        }
        next(pe) {
          const {
            isStopped: Z,
            _buffer: ke,
            _infiniteTimeWindow: Ye,
            _timestampProvider: Ke,
            _windowTime: gt,
          } = this;
          Z || (ke.push(pe), !Ye && ke.push(Ke.now() + gt)),
            this._trimBuffer(),
            super.next(pe);
        }
        _subscribe(pe) {
          this._throwIfClosed(), this._trimBuffer();
          const Z = this._innerSubscribe(pe),
            { _infiniteTimeWindow: ke, _buffer: Ye } = this,
            Ke = Ye.slice();
          for (let gt = 0; gt < Ke.length && !pe.closed; gt += ke ? 1 : 2)
            pe.next(Ke[gt]);
          return this._checkFinalizedStatuses(pe), Z;
        }
        _trimBuffer() {
          const {
              _bufferSize: pe,
              _timestampProvider: Z,
              _buffer: ke,
              _infiniteTimeWindow: Ye,
            } = this,
            Ke = (Ye ? 1 : 2) * pe;
          if (
            (pe < 1 / 0 && Ke < ke.length && ke.splice(0, ke.length - Ke), !Ye)
          ) {
            const gt = Z.now();
            let ut = 0;
            for (let St = 1; St < ke.length && ke[St] <= gt; St += 2) ut = St;
            ut && ke.splice(0, ut + 1);
          }
        }
      }
      var q = v(6451),
        fe = v(3900),
        re = v(4004);
      const oe = {
        schedule(Me, pe) {
          const Z = setTimeout(Me, pe);
          return () => clearTimeout(Z);
        },
        scheduleBeforeRender(Me) {
          if (typeof window > 'u') return oe.schedule(Me, 0);
          if (typeof window.requestAnimationFrame > 'u')
            return oe.schedule(Me, 16);
          const pe = window.requestAnimationFrame(Me);
          return () => window.cancelAnimationFrame(pe);
        },
      };
      let Ee;
      function Ce(Me, pe, Z) {
        let ke = Z;
        return (
          (function Ge(Me) {
            return !!Me && Me.nodeType === Node.ELEMENT_NODE;
          })(Me) &&
            pe.some(
              (Ye, Ke) =>
                !(
                  '*' === Ye ||
                  !(function $(Me, pe) {
                    if (!Ee) {
                      const Z = Element.prototype;
                      Ee =
                        Z.matches ||
                        Z.matchesSelector ||
                        Z.mozMatchesSelector ||
                        Z.msMatchesSelector ||
                        Z.oMatchesSelector ||
                        Z.webkitMatchesSelector;
                    }
                    return Me.nodeType === Node.ELEMENT_NODE && Ee.call(Me, pe);
                  })(Me, Ye) ||
                  ((ke = Ke), 0)
                )
            ),
          ke
        );
      }
      class Oe {
        constructor(pe, Z) {
          this.componentFactory = Z.get(_._Vd).resolveComponentFactory(pe);
        }
        create(pe) {
          return new Ae(this.componentFactory, pe);
        }
      }
      class Ae {
        constructor(pe, Z) {
          (this.componentFactory = pe),
            (this.injector = Z),
            (this.eventEmitters = new K(1)),
            (this.events = this.eventEmitters.pipe(
              (0, fe.w)(ke => (0, q.T)(...ke))
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
              this.componentFactory.inputs.map(({ propName: ke }) => ke)
            )),
            (this.ngZone = this.injector.get(_.R0b)),
            (this.elementZone =
              typeof Zone > 'u' ? null : this.ngZone.run(() => Zone.current));
        }
        connect(pe) {
          this.runInZone(() => {
            if (null !== this.scheduledDestroyFn)
              return (
                this.scheduledDestroyFn(), void (this.scheduledDestroyFn = null)
              );
            null === this.componentRef && this.initializeComponent(pe);
          });
        }
        disconnect() {
          this.runInZone(() => {
            null === this.componentRef ||
              null !== this.scheduledDestroyFn ||
              (this.scheduledDestroyFn = oe.schedule(() => {
                null !== this.componentRef &&
                  (this.componentRef.destroy(),
                  (this.componentRef = null),
                  (this.viewChangeDetectorRef = null));
              }, 10));
          });
        }
        getInputValue(pe) {
          return this.runInZone(() =>
            null === this.componentRef
              ? this.initialInputValues.get(pe)
              : this.componentRef.instance[pe]
          );
        }
        setInputValue(pe, Z) {
          this.runInZone(() => {
            null !== this.componentRef
              ? ((function ae(Me, pe) {
                  return Me === pe || (Me != Me && pe != pe);
                })(Z, this.getInputValue(pe)) &&
                  (void 0 !== Z || !this.unchangedInputs.has(pe))) ||
                (this.recordInputChange(pe, Z),
                this.unchangedInputs.delete(pe),
                (this.hasInputChanges = !0),
                (this.componentRef.instance[pe] = Z),
                this.scheduleDetectChanges())
              : this.initialInputValues.set(pe, Z);
          });
        }
        initializeComponent(pe) {
          const Z = _.zs3.create({ providers: [], parent: this.injector }),
            ke = (function Ie(Me, pe) {
              const Z = Me.childNodes,
                ke = pe.map(() => []);
              let Ye = -1;
              pe.some((Ke, gt) => '*' === Ke && ((Ye = gt), !0));
              for (let Ke = 0, gt = Z.length; Ke < gt; ++Ke) {
                const ut = Z[Ke],
                  St = Ce(ut, pe, Ye);
                -1 !== St && ke[St].push(ut);
              }
              return ke;
            })(pe, this.componentFactory.ngContentSelectors);
          (this.componentRef = this.componentFactory.create(Z, ke, pe)),
            (this.viewChangeDetectorRef = this.componentRef.injector.get(
              _.sBO
            )),
            (this.implementsOnChanges = (function we(Me) {
              return 'function' == typeof Me;
            })(this.componentRef.instance.ngOnChanges)),
            this.initializeInputs(),
            this.initializeOutputs(this.componentRef),
            this.detectChanges(),
            this.injector.get(_.z2F).attachView(this.componentRef.hostView);
        }
        initializeInputs() {
          this.componentFactory.inputs.forEach(({ propName: pe }) => {
            this.initialInputValues.has(pe) &&
              this.setInputValue(pe, this.initialInputValues.get(pe));
          }),
            this.initialInputValues.clear();
        }
        initializeOutputs(pe) {
          const Z = this.componentFactory.outputs.map(
            ({ propName: ke, templateName: Ye }) =>
              pe.instance[ke].pipe((0, re.U)(gt => ({ name: Ye, value: gt })))
          );
          this.eventEmitters.next(Z);
        }
        callNgOnChanges(pe) {
          if (!this.implementsOnChanges || null === this.inputChanges) return;
          const Z = this.inputChanges;
          (this.inputChanges = null), pe.instance.ngOnChanges(Z);
        }
        markViewForCheck(pe) {
          this.hasInputChanges &&
            ((this.hasInputChanges = !1), pe.markForCheck());
        }
        scheduleDetectChanges() {
          this.scheduledChangeDetectionFn ||
            (this.scheduledChangeDetectionFn = oe.scheduleBeforeRender(() => {
              (this.scheduledChangeDetectionFn = null), this.detectChanges();
            }));
        }
        recordInputChange(pe, Z) {
          if (!this.implementsOnChanges) return;
          null === this.inputChanges && (this.inputChanges = {});
          const ke = this.inputChanges[pe];
          if (ke) return void (ke.currentValue = Z);
          const Ye = this.unchangedInputs.has(pe),
            Ke = Ye ? void 0 : this.getInputValue(pe);
          this.inputChanges[pe] = new _.WD2(Ke, Z, Ye);
        }
        detectChanges() {
          null !== this.componentRef &&
            (this.callNgOnChanges(this.componentRef),
            this.markViewForCheck(this.viewChangeDetectorRef),
            this.componentRef.changeDetectorRef.detectChanges());
        }
        runInZone(pe) {
          return this.elementZone && Zone.current !== this.elementZone
            ? this.ngZone.run(pe)
            : pe();
        }
      }
      class te extends HTMLElement {
        constructor() {
          super(...arguments), (this.ngElementEventsSubscription = null);
        }
      }
      function Pe(Me, pe) {
        const Z = (function Ve(Me, pe) {
            return pe.get(_._Vd).resolveComponentFactory(Me).inputs;
          })(Me, pe.injector),
          ke = pe.strategyFactory || new Oe(Me, pe.injector),
          Ye = (function $e(Me) {
            const pe = {};
            return (
              Me.forEach(({ propName: Z, templateName: ke }) => {
                pe[
                  (function ie(Me) {
                    return Me.replace(/[A-Z]/g, pe => `-${pe.toLowerCase()}`);
                  })(ke)
                ] = Z;
              }),
              pe
            );
          })(Z);
        class Ke extends te {
          constructor(ut) {
            super(), (this.injector = ut);
          }
          get ngElementStrategy() {
            if (!this._ngElementStrategy) {
              const ut = (this._ngElementStrategy = ke.create(
                this.injector || pe.injector
              ));
              Z.forEach(({ propName: St }) => {
                if (!this.hasOwnProperty(St)) return;
                const Ht = this[St];
                delete this[St], ut.setInputValue(St, Ht);
              });
            }
            return this._ngElementStrategy;
          }
          attributeChangedCallback(ut, St, Ht, tt) {
            this.ngElementStrategy.setInputValue(Ye[ut], Ht);
          }
          connectedCallback() {
            let ut = !1;
            this.ngElementStrategy.events &&
              (this.subscribeToEvents(), (ut = !0)),
              this.ngElementStrategy.connect(this),
              ut || this.subscribeToEvents();
          }
          disconnectedCallback() {
            this._ngElementStrategy && this._ngElementStrategy.disconnect(),
              this.ngElementEventsSubscription &&
                (this.ngElementEventsSubscription.unsubscribe(),
                (this.ngElementEventsSubscription = null));
          }
          subscribeToEvents() {
            this.ngElementEventsSubscription =
              this.ngElementStrategy.events.subscribe(ut => {
                const St = new CustomEvent(ut.name, { detail: ut.value });
                this.dispatchEvent(St);
              });
          }
        }
        return (
          (Ke.observedAttributes = Object.keys(Ye)),
          Z.forEach(({ propName: gt }) => {
            Object.defineProperty(Ke.prototype, gt, {
              get() {
                return this.ngElementStrategy.getInputValue(gt);
              },
              set(ut) {
                this.ngElementStrategy.setInputValue(gt, ut);
              },
              configurable: !0,
              enumerable: !0,
            });
          }),
          Ke
        );
      }
      var Q = v(433),
        B = v(542),
        ce = v(963),
        le = v(2691),
        Ne = v(356);
      let st = (() => {
        class Me {
          constructor(Z, ke) {
            (this.router = Z), (this.activatedRoute = ke);
            let Ye = location.pathname;
            (Ye = '/' == Ye[0] ? Ye.slice(1) : Ye),
              console.log(`currentUrl => ${Ye}`),
              Ye.includes('mfe-dashboard')
                ? (this.router.config.push({
                    path: `${Ye}`,
                    children: [{ path: '**' }],
                  }),
                  this.router.navigate([`${Ye}`]))
                : (this.router.config.push(
                    { path: `${Ye}mfe-dashboard`, children: [{ path: '**' }] },
                    { path: `${Ye}/mfe-dashboard`, children: [{ path: '**' }] }
                  ),
                  localStorage.setItem('channel', 'web'),
                  localStorage.setItem('experienceType', 'cx'),
                  this.router.navigate([
                    `${Ye}/mfe-dashboard/cx/career-site-bot`,
                  ]));
          }
          ngOnInit() {
            this.refNum && localStorage.setItem('refNum', this.refNum);
            let Z = location.pathname;
            (Z = '/' == Z[0] ? Z.slice(1) : Z),
              console.log(`currentUrl => ${Z}`),
              Z.includes('mfe-dashboard')
                ? (this.router.config.push({
                    path: `${Z}`,
                    children: [{ path: '**' }],
                  }),
                  this.router.navigate([`${Z}`]))
                : (this.router.config.push(
                    { path: `${Z}mfe-dashboard`, children: [{ path: '**' }] },
                    { path: `${Z}/mfe-dashboard`, children: [{ path: '**' }] }
                  ),
                  localStorage.setItem('channel', 'web'),
                  localStorage.setItem('experienceType', 'cx'),
                  this.router.navigate([
                    `${Z}/mfe-dashboard/cx/career-site-bot`,
                  ]));
          }
          ngOnDestroy() {
            localStorage.setItem('channel', 'web'),
              localStorage.setItem('experienceType', 'cx'),
              console.log('destroyed');
          }
        }
        return (
          (Me.ɵfac = function (Z) {
            return new (Z || Me)(_.Y36(B.F0), _.Y36(B.gz));
          }),
          (Me.ɵcmp = _.Xpm({
            type: Me,
            selectors: [['dashboard']],
            inputs: { refNum: 'refNum' },
            decls: 5,
            vars: 2,
            consts: [
              [1, 'mfe-main-container'],
              [3, 'parentMfe', 'refNum'],
              [1, 'mfe-base-container'],
            ],
            template: function (Z, ke) {
              1 & Z &&
                (_.TgZ(0, 'div', 0)(1, 'aside'),
                _._UZ(2, 'app-sidebar', 1),
                _.qZA(),
                _.TgZ(3, 'div', 2),
                _._UZ(4, 'configurations'),
                _.qZA()()),
                2 & Z &&
                  (_.xp6(2),
                  _.Q6J('parentMfe', 'dashboard')('refNum', ke.refNum));
            },
            dependencies: [le.k, Ne.A],
            styles: [
              '.mfe-main-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.mfe-main-container[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]{position:fixed;height:100vh;width:15%}@media screen and (max-width: 1500px){.mfe-main-container[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]{width:25%}}.mfe-main-container[_ngcontent-%COMP%]   .mfe-base-container[_ngcontent-%COMP%]{width:85%;margin-left:15%}@media screen and (max-width: 1500px){.mfe-main-container[_ngcontent-%COMP%]   .mfe-base-container[_ngcontent-%COMP%]{width:75%;margin-left:25%}}',
            ],
          })),
          Me
        );
      })();
      var mt = v(9960);
      const yt = [
        { path: '', redirectTo: '/locales', pathMatch: 'full' },
        {
          path: 'locales',
          component: mt.g,
          children: [
            {
              path: '',
              loadChildren: () =>
                Promise.all([
                  v.e('common'),
                  v.e('src_app_pages_locale-list_locale-list_module_ts'),
                ])
                  .then(v.bind(v, 4972))
                  .then(Me => Me.LocaleListModule),
            },
          ],
        },
        {
          path: ':mfe/configuration/:experience/:channel',
          component: ce.H,
          children: [
            {
              path: '',
              loadChildren: () =>
                v
                  .e('common')
                  .then(v.bind(v, 6154))
                  .then(
                    Me => (console.log('MFE ROUTE'), Me.ConfigurationsModule)
                  ),
            },
          ],
        },
        {
          path: 'configuration/:experience/:channel',
          component: ce.H,
          children: [
            {
              path: '',
              loadChildren: () =>
                v
                  .e('common')
                  .then(v.bind(v, 6154))
                  .then(
                    Me => (console.log('Normal ROUTE'), Me.ConfigurationsModule)
                  ),
            },
          ],
        },
        {
          path: 'configuration/:experience/:channel',
          component: ce.H,
          children: [
            {
              path: '',
              loadChildren: () =>
                Promise.all([
                  v.e('common'),
                  v.e('src_app_pages_locale-list_locale-list_module_ts'),
                ])
                  .then(v.bind(v, 4972))
                  .then(
                    Me => (console.log('Normal ROUTE'), Me.LocaleListModule)
                  ),
            },
          ],
        },
        {
          path: 'mfe-config/:experience/:channel',
          component: st,
          children: [
            {
              path: '',
              loadChildren: () =>
                v
                  .e('src_app_pages_dashboard_dashboard-routing_module_ts')
                  .then(v.bind(v, 9366))
                  .then(
                    Me => (
                      console.log('Normal ROUTE'), Me.DashboardRoutingModule
                    )
                  ),
            },
          ],
        },
      ];
      let Ue = (() => {
        class Me {
          constructor(Z) {
            this.router = Z;
            let ke = location.pathname;
            if (ke.includes('/locale'))
              '/' == ke[0] && (ke = ke.slice(1)),
                this.router.config.push({
                  path: `${ke}`,
                  component: mt.g,
                  loadChildren: () =>
                    v
                      .e('common')
                      .then(v.bind(v, 6154))
                      .then(
                        Ye => (
                          console.log('Normal ROUTE'), Ye.ConfigurationsModule
                        )
                      ),
                }),
                this.router.navigate([
                  `/${this.router.config[this.router.config.length - 1]?.path}`,
                ]);
            else if (ke.includes('/configuration')) {
              '/' == ke[0] && (ke = ke.slice(1));
              let Ye = ke?.split('/')?.pop();
              Ye && localStorage.setItem('channel', Ye);
              let Ke = ke.split('/');
              Ke = Ke.slice(0, Ke.length - 2);
              let gt = Ke.join('/');
              console.log(ke),
                this.router.config.push({
                  path: `${gt}/:exp/:pageId`,
                  component: ce.H,
                  loadChildren: () =>
                    v
                      .e('common')
                      .then(v.bind(v, 6154))
                      .then(
                        ut => (
                          console.log('Normal ROUTE'), ut.ConfigurationsModule
                        )
                      ),
                }),
                this.router.navigate([`${ke}`]);
            } else
              (ke = (location.pathname + '/locales').slice(1)),
                (ke = ke.replace('//', '/')),
                this.router.config.push({
                  path: `${ke}`,
                  component: mt.g,
                  loadChildren: () =>
                    v
                      .e('common')
                      .then(v.bind(v, 6154))
                      .then(
                        Ye => (
                          console.log('Normal ROUTE'), Ye.ConfigurationsModule
                        )
                      ),
                }),
                this.router.navigate([`${ke}`]);
          }
        }
        return (
          (Me.ɵfac = function (Z) {
            return new (Z || Me)(_.LFG(B.F0));
          }),
          (Me.ɵmod = _.oAB({ type: Me })),
          (Me.ɵinj = _.cJS({ imports: [B.Bz.forRoot(yt), j.ez, B.Bz] })),
          Me
        );
      })();
      var jt = v(7420);
      let an = (() => {
        class Me {
          constructor(Z, ke) {
            (this.sharedService = Z),
              (this.router = ke),
              (this.title = 'chatbot-management-app');
          }
          ngOnInit() {
            let Z = location.pathname;
            switch (
              (this.refNum && this.setRefNum(this.refNum),
              console.log('I am inside app comp.', Z),
              this.bundleName)
            ) {
              case 'locale':
                console.log('inside switch', this.bundleName),
                  Z.includes('/locale')
                    ? ('/' == Z[0] && (Z = Z.slice(1)),
                      this.router.config.push({
                        path: `${Z}`,
                        component: ce.H,
                        loadChildren: () =>
                          v
                            .e('common')
                            .then(v.bind(v, 5321))
                            .then(Ke => Ke.LocalesModule),
                      }),
                      this.router.navigate([
                        `/${
                          this.router.config[this.router.config.length - 1]
                            ?.path
                        }`,
                      ]))
                    : ((Z = (location.pathname + '/locales').slice(1)),
                      (Z = Z.replace('//', '/')),
                      this.router.config.push({
                        path: `${Z}`,
                        component: ce.H,
                        loadChildren: () =>
                          v
                            .e('common')
                            .then(v.bind(v, 5321))
                            .then(
                              Ke => (
                                console.log('Normal ROUTE'), Ke.LocalesModule
                              )
                            ),
                      }),
                      this.router.navigate([`${Z}`]));
                break;
              case 'configurations':
                '/' == Z[0] && (Z = Z.slice(1));
                let ke = Z.split('/');
                ke = ke.slice(0, ke.length - 2);
                let Ye = ke.join('/');
                if ((console.log(Ye), Z.includes('configuration'))) {
                  let Ke = Z?.split('/')?.pop();
                  Ke &&
                    localStorage.getItem('channel') &&
                    localStorage.setItem('channel', Ke),
                    console.log(Z),
                    this.router.config.push({
                      path: `${Ye}/:exp/:pageId`,
                      component: ce.H,
                      loadChildren: () =>
                        v
                          .e('common')
                          .then(v.bind(v, 6154))
                          .then(
                            gt => (
                              console.log('Normal ROUTE'),
                              gt.ConfigurationsModule
                            )
                          ),
                    }),
                    console.log(this.router.config),
                    Z
                      ? this.router.navigate([`${Z}`])
                      : (localStorage.setItem('channel', 'career-site-bot'),
                        this.router.navigate([`${Ye}/cx/career-site-bot`]));
                } else
                  console.log('oldRoute', Z),
                    console.log('currentUrl', Ye),
                    this.router.config.push({
                      path: `${Z}/configuration/:exp/:pageId`,
                      component: ce.H,
                      loadChildren: () =>
                        v
                          .e('common')
                          .then(v.bind(v, 6154))
                          .then(
                            Ke => (
                              console.log('Normal ROUTE'),
                              Ke.ConfigurationsModule
                            )
                          ),
                    }),
                    console.log(this.router.config),
                    this.router.navigate([
                      `${Z}/configuration/cx/career-site-bot`,
                    ]);
            }
          }
          ngOnChanges() {
            console.log('inside changes');
            let Z = location.pathname;
            switch (
              (console.log('I am inside app comp.', Z),
              this.refNum && this.setRefNum(this.refNum),
              this.bundleName)
            ) {
              case 'locale':
                console.log('inside switch', this.bundleName),
                  Z.includes('/locale')
                    ? ('/' == Z[0] && (Z = Z.slice(1)),
                      this.router.config.push({
                        path: `${Z}`,
                        component: ce.H,
                        loadChildren: () =>
                          v
                            .e('common')
                            .then(v.bind(v, 5321))
                            .then(Ke => Ke.LocalesModule),
                      }),
                      this.router.navigate([
                        `/${
                          this.router.config[this.router.config.length - 1]
                            ?.path
                        }`,
                      ]))
                    : ((Z = (location.pathname + '/locales').slice(1)),
                      (Z = Z.replace('//', '/')),
                      this.router.config.push({
                        path: `${Z}`,
                        component: ce.H,
                        loadChildren: () =>
                          v
                            .e('common')
                            .then(v.bind(v, 5321))
                            .then(
                              Ke => (
                                console.log('Normal ROUTE'), Ke.LocalesModule
                              )
                            ),
                      }),
                      this.router.navigate([`${Z}`]));
                break;
              case 'configurations':
                '/' == Z[0] && (Z = Z.slice(1));
                let ke = Z.split('/');
                ke = ke.slice(0, ke.length - 2);
                let Ye = ke.join('/');
                if ((console.log(Ye), Z.includes('configuration'))) {
                  let Ke = Z?.split('/')?.pop();
                  Ke &&
                    localStorage.getItem('channel') &&
                    localStorage.setItem('channel', Ke),
                    console.log(Z),
                    this.router.config.push({
                      path: `${Ye}/:exp/:pageId`,
                      component: ce.H,
                      loadChildren: () =>
                        v
                          .e('common')
                          .then(v.bind(v, 6154))
                          .then(
                            gt => (
                              console.log('Normal ROUTE'),
                              gt.ConfigurationsModule
                            )
                          ),
                    }),
                    console.log(this.router.config),
                    Z
                      ? this.router.navigate([`${Z}`])
                      : (localStorage.setItem('channel', 'career-site-bot'),
                        this.router.navigate([`${Ye}/cx/career-site-bot`]));
                } else
                  console.log('oldRoute', Z),
                    console.log('currentUrl', Ye),
                    this.router.config.push({
                      path: `${Z}/configuration/:exp/:pageId`,
                      component: ce.H,
                      loadChildren: () =>
                        v
                          .e('common')
                          .then(v.bind(v, 6154))
                          .then(
                            Ke => (
                              console.log('Normal ROUTE'),
                              Ke.ConfigurationsModule
                            )
                          ),
                    }),
                    console.log(this.router.config),
                    this.router.navigate([
                      `${Z}/configuration/cx/career-site-bot`,
                    ]);
            }
          }
          setRefNum(Z) {
            localStorage.setItem('refNum', Z);
          }
          ngOnDestroy() {
            localStorage.setItem('mfe-state', location.pathname);
          }
        }
        return (
          (Me.ɵfac = function (Z) {
            return new (Z || Me)(_.Y36(jt.F), _.Y36(B.F0));
          }),
          (Me.ɵcmp = _.Xpm({
            type: Me,
            selectors: [['chatbot-management-app']],
            inputs: { refNum: 'refNum', bundleName: 'bundleName' },
            features: [_.TTD],
            decls: 1,
            vars: 0,
            template: function (Z, ke) {
              1 & Z && _._UZ(0, 'router-outlet');
            },
            dependencies: [B.lC],
            styles: [
              '@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27pmO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27rWO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27rGO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27omO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */body{margin:0;font-family:Proxima Nova}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}.btn{width:-moz-fit-content;width:fit-content;border:none;color:#fff;padding:12px 14px;width:150px;height:40px;background:#00838F;border-radius:4px}.btn-small{width:80px;height:30px;font-size:small;padding:8px 16px}.btn-small-outline{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-small-outline:hover{color:#fff;border:none}.btn-medium{width:120px;height:40px;font-size:medium;padding:8px 16px}.btn-medium-outline{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-medium-outline:hover{color:#fff;border:none}.btn-large{width:180px;height:50px;font-size:large;padding:4px 6px}.btn-large-outline{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-large-outline:hover{color:#fff;border:none}.btn-disabled{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04)}.btn-disabled:hover{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn:disabled{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn:disabled:hover{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn:hover{background:#29ABB9}.btn:active{background:#00838F}\n',
            ],
            encapsulation: 2,
          })),
          Me
        );
      })();
      var Tt = v(613);
      let Mt = (() => {
        class Me {
          constructor(Z, ke) {
            (this.injector = Z), (this.router = ke);
            const Ye = Pe(an, { injector: Z }),
              Ke = Pe(mt.g, { injector: Z }),
              gt = Pe(st, { injector: Z });
            customElements.define('chatbot-management-app', Ye),
              customElements.define('p-locales', Ke),
              customElements.define('dash-mfe', gt);
          }
          ngDoBootstrap(Z) {
            document.querySelector('chatbot-management-app') && Z.bootstrap(an);
          }
        }
        return (
          (Me.ɵfac = function (Z) {
            return new (Z || Me)(_.LFG(_.zs3), _.LFG(B.F0));
          }),
          (Me.ɵmod = _.oAB({ type: Me })),
          (Me.ɵinj = _.cJS({
            imports: [s.b2, Ue, j.ez, Tt.m, X.JF, B.Bz, Q.u5, Q.UX],
          })),
          Me
        );
      })();
      _.B6R(ce.H, [B.lC, le.k], []),
        v(2340).N.production && (0, _.G48)(),
        s
          .q6()
          .bootstrapModule(Mt)
          .catch(Me => console.error(Me));
    },
    8306: (et, ge, v) => {
      v.d(ge, { y: () => re });
      var s = v(2961),
        _ = v(727),
        j = v(8822),
        X = v(4671);
      var K = v(2416),
        q = v(576),
        fe = v(2806);
      let re = (() => {
        class we {
          constructor(Ee) {
            Ee && (this._subscribe = Ee);
          }
          lift(Ee) {
            const $ = new we();
            return ($.source = this), ($.operator = Ee), $;
          }
          subscribe(Ee, $, ae) {
            const $e = (function Ge(we) {
              return (
                (we && we instanceof s.Lv) ||
                ((function ie(we) {
                  return (
                    we &&
                    (0, q.m)(we.next) &&
                    (0, q.m)(we.error) &&
                    (0, q.m)(we.complete)
                  );
                })(we) &&
                  (0, _.Nn)(we))
              );
            })(Ee)
              ? Ee
              : new s.Hp(Ee, $, ae);
            return (
              (0, fe.x)(() => {
                const { operator: Ve, source: Ie } = this;
                $e.add(
                  Ve
                    ? Ve.call($e, Ie)
                    : Ie
                    ? this._subscribe($e)
                    : this._trySubscribe($e)
                );
              }),
              $e
            );
          }
          _trySubscribe(Ee) {
            try {
              return this._subscribe(Ee);
            } catch ($) {
              Ee.error($);
            }
          }
          forEach(Ee, $) {
            return new ($ = oe($))((ae, $e) => {
              const Ve = new s.Hp({
                next: Ie => {
                  try {
                    Ee(Ie);
                  } catch (Ce) {
                    $e(Ce), Ve.unsubscribe();
                  }
                },
                error: $e,
                complete: ae,
              });
              this.subscribe(Ve);
            });
          }
          _subscribe(Ee) {
            var $;
            return null === ($ = this.source) || void 0 === $
              ? void 0
              : $.subscribe(Ee);
          }
          [j.L]() {
            return this;
          }
          pipe(...Ee) {
            return (function A(we) {
              return 0 === we.length
                ? X.y
                : 1 === we.length
                ? we[0]
                : function (Ee) {
                    return we.reduce(($, ae) => ae($), Ee);
                  };
            })(Ee)(this);
          }
          toPromise(Ee) {
            return new (Ee = oe(Ee))(($, ae) => {
              let $e;
              this.subscribe(
                Ve => ($e = Ve),
                Ve => ae(Ve),
                () => $($e)
              );
            });
          }
        }
        return (we.create = ee => new we(ee)), we;
      })();
      function oe(we) {
        var ee;
        return null !== (ee = we ?? K.v.Promise) && void 0 !== ee
          ? ee
          : Promise;
      }
    },
    7579: (et, ge, v) => {
      v.d(ge, { x: () => K });
      var s = v(8306),
        _ = v(727);
      const X = (0, v(3888).d)(
        fe =>
          function () {
            fe(this),
              (this.name = 'ObjectUnsubscribedError'),
              (this.message = 'object unsubscribed');
          }
      );
      var ne = v(8737),
        A = v(2806);
      let K = (() => {
        class fe extends s.y {
          constructor() {
            super(),
              (this.closed = !1),
              (this.currentObservers = null),
              (this.observers = []),
              (this.isStopped = !1),
              (this.hasError = !1),
              (this.thrownError = null);
          }
          lift(oe) {
            const ie = new q(this, this);
            return (ie.operator = oe), ie;
          }
          _throwIfClosed() {
            if (this.closed) throw new X();
          }
          next(oe) {
            (0, A.x)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                this.currentObservers ||
                  (this.currentObservers = Array.from(this.observers));
                for (const ie of this.currentObservers) ie.next(oe);
              }
            });
          }
          error(oe) {
            (0, A.x)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                (this.hasError = this.isStopped = !0), (this.thrownError = oe);
                const { observers: ie } = this;
                for (; ie.length; ) ie.shift().error(oe);
              }
            });
          }
          complete() {
            (0, A.x)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                this.isStopped = !0;
                const { observers: oe } = this;
                for (; oe.length; ) oe.shift().complete();
              }
            });
          }
          unsubscribe() {
            (this.isStopped = this.closed = !0),
              (this.observers = this.currentObservers = null);
          }
          get observed() {
            var oe;
            return (
              (null === (oe = this.observers) || void 0 === oe
                ? void 0
                : oe.length) > 0
            );
          }
          _trySubscribe(oe) {
            return this._throwIfClosed(), super._trySubscribe(oe);
          }
          _subscribe(oe) {
            return (
              this._throwIfClosed(),
              this._checkFinalizedStatuses(oe),
              this._innerSubscribe(oe)
            );
          }
          _innerSubscribe(oe) {
            const { hasError: ie, isStopped: Ge, observers: we } = this;
            return ie || Ge
              ? _.Lc
              : ((this.currentObservers = null),
                we.push(oe),
                new _.w0(() => {
                  (this.currentObservers = null), (0, ne.P)(we, oe);
                }));
          }
          _checkFinalizedStatuses(oe) {
            const { hasError: ie, thrownError: Ge, isStopped: we } = this;
            ie ? oe.error(Ge) : we && oe.complete();
          }
          asObservable() {
            const oe = new s.y();
            return (oe.source = this), oe;
          }
        }
        return (fe.create = (re, oe) => new q(re, oe)), fe;
      })();
      class q extends K {
        constructor(re, oe) {
          super(), (this.destination = re), (this.source = oe);
        }
        next(re) {
          var oe, ie;
          null ===
            (ie =
              null === (oe = this.destination) || void 0 === oe
                ? void 0
                : oe.next) ||
            void 0 === ie ||
            ie.call(oe, re);
        }
        error(re) {
          var oe, ie;
          null ===
            (ie =
              null === (oe = this.destination) || void 0 === oe
                ? void 0
                : oe.error) ||
            void 0 === ie ||
            ie.call(oe, re);
        }
        complete() {
          var re, oe;
          null ===
            (oe =
              null === (re = this.destination) || void 0 === re
                ? void 0
                : re.complete) ||
            void 0 === oe ||
            oe.call(re);
        }
        _subscribe(re) {
          var oe, ie;
          return null !==
            (ie =
              null === (oe = this.source) || void 0 === oe
                ? void 0
                : oe.subscribe(re)) && void 0 !== ie
            ? ie
            : _.Lc;
        }
      }
    },
    2961: (et, ge, v) => {
      v.d(ge, { Hp: () => Ee, Lv: () => ie });
      var s = v(576),
        _ = v(727),
        j = v(2416),
        X = v(7849);
      function ne() {}
      const A = fe('C', void 0, void 0);
      function fe(Ie, Ce, Le) {
        return { kind: Ie, value: Ce, error: Le };
      }
      var re = v(3410),
        oe = v(2806);
      class ie extends _.w0 {
        constructor(Ce) {
          super(),
            (this.isStopped = !1),
            Ce
              ? ((this.destination = Ce), (0, _.Nn)(Ce) && Ce.add(this))
              : (this.destination = Ve);
        }
        static create(Ce, Le, Oe) {
          return new Ee(Ce, Le, Oe);
        }
        next(Ce) {
          this.isStopped
            ? $e(
                (function q(Ie) {
                  return fe('N', Ie, void 0);
                })(Ce),
                this
              )
            : this._next(Ce);
        }
        error(Ce) {
          this.isStopped
            ? $e(
                (function K(Ie) {
                  return fe('E', void 0, Ie);
                })(Ce),
                this
              )
            : ((this.isStopped = !0), this._error(Ce));
        }
        complete() {
          this.isStopped
            ? $e(A, this)
            : ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed ||
            ((this.isStopped = !0),
            super.unsubscribe(),
            (this.destination = null));
        }
        _next(Ce) {
          this.destination.next(Ce);
        }
        _error(Ce) {
          try {
            this.destination.error(Ce);
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
      const Ge = Function.prototype.bind;
      function we(Ie, Ce) {
        return Ge.call(Ie, Ce);
      }
      class ee {
        constructor(Ce) {
          this.partialObserver = Ce;
        }
        next(Ce) {
          const { partialObserver: Le } = this;
          if (Le.next)
            try {
              Le.next(Ce);
            } catch (Oe) {
              $(Oe);
            }
        }
        error(Ce) {
          const { partialObserver: Le } = this;
          if (Le.error)
            try {
              Le.error(Ce);
            } catch (Oe) {
              $(Oe);
            }
          else $(Ce);
        }
        complete() {
          const { partialObserver: Ce } = this;
          if (Ce.complete)
            try {
              Ce.complete();
            } catch (Le) {
              $(Le);
            }
        }
      }
      class Ee extends ie {
        constructor(Ce, Le, Oe) {
          let Ae;
          if ((super(), (0, s.m)(Ce) || !Ce))
            Ae = {
              next: Ce ?? void 0,
              error: Le ?? void 0,
              complete: Oe ?? void 0,
            };
          else {
            let te;
            this && j.v.useDeprecatedNextContext
              ? ((te = Object.create(Ce)),
                (te.unsubscribe = () => this.unsubscribe()),
                (Ae = {
                  next: Ce.next && we(Ce.next, te),
                  error: Ce.error && we(Ce.error, te),
                  complete: Ce.complete && we(Ce.complete, te),
                }))
              : (Ae = Ce);
          }
          this.destination = new ee(Ae);
        }
      }
      function $(Ie) {
        j.v.useDeprecatedSynchronousErrorHandling
          ? (0, oe.O)(Ie)
          : (0, X.h)(Ie);
      }
      function $e(Ie, Ce) {
        const { onStoppedNotification: Le } = j.v;
        Le && re.z.setTimeout(() => Le(Ie, Ce));
      }
      const Ve = {
        closed: !0,
        next: ne,
        error: function ae(Ie) {
          throw Ie;
        },
        complete: ne,
      };
    },
    727: (et, ge, v) => {
      v.d(ge, { Lc: () => A, w0: () => ne, Nn: () => K });
      var s = v(576);
      const j = (0, v(3888).d)(
        fe =>
          function (oe) {
            fe(this),
              (this.message = oe
                ? `${oe.length} errors occurred during unsubscription:\n${oe
                    .map((ie, Ge) => `${Ge + 1}) ${ie.toString()}`)
                    .join('\n  ')}`
                : ''),
              (this.name = 'UnsubscriptionError'),
              (this.errors = oe);
          }
      );
      var X = v(8737);
      class ne {
        constructor(re) {
          (this.initialTeardown = re),
            (this.closed = !1),
            (this._parentage = null),
            (this._finalizers = null);
        }
        unsubscribe() {
          let re;
          if (!this.closed) {
            this.closed = !0;
            const { _parentage: oe } = this;
            if (oe)
              if (((this._parentage = null), Array.isArray(oe)))
                for (const we of oe) we.remove(this);
              else oe.remove(this);
            const { initialTeardown: ie } = this;
            if ((0, s.m)(ie))
              try {
                ie();
              } catch (we) {
                re = we instanceof j ? we.errors : [we];
              }
            const { _finalizers: Ge } = this;
            if (Ge) {
              this._finalizers = null;
              for (const we of Ge)
                try {
                  q(we);
                } catch (ee) {
                  (re = re ?? []),
                    ee instanceof j
                      ? (re = [...re, ...ee.errors])
                      : re.push(ee);
                }
            }
            if (re) throw new j(re);
          }
        }
        add(re) {
          var oe;
          if (re && re !== this)
            if (this.closed) q(re);
            else {
              if (re instanceof ne) {
                if (re.closed || re._hasParent(this)) return;
                re._addParent(this);
              }
              (this._finalizers =
                null !== (oe = this._finalizers) && void 0 !== oe
                  ? oe
                  : []).push(re);
            }
        }
        _hasParent(re) {
          const { _parentage: oe } = this;
          return oe === re || (Array.isArray(oe) && oe.includes(re));
        }
        _addParent(re) {
          const { _parentage: oe } = this;
          this._parentage = Array.isArray(oe)
            ? (oe.push(re), oe)
            : oe
            ? [oe, re]
            : re;
        }
        _removeParent(re) {
          const { _parentage: oe } = this;
          oe === re
            ? (this._parentage = null)
            : Array.isArray(oe) && (0, X.P)(oe, re);
        }
        remove(re) {
          const { _finalizers: oe } = this;
          oe && (0, X.P)(oe, re), re instanceof ne && re._removeParent(this);
        }
      }
      ne.EMPTY = (() => {
        const fe = new ne();
        return (fe.closed = !0), fe;
      })();
      const A = ne.EMPTY;
      function K(fe) {
        return (
          fe instanceof ne ||
          (fe &&
            'closed' in fe &&
            (0, s.m)(fe.remove) &&
            (0, s.m)(fe.add) &&
            (0, s.m)(fe.unsubscribe))
        );
      }
      function q(fe) {
        (0, s.m)(fe) ? fe() : fe.unsubscribe();
      }
    },
    2416: (et, ge, v) => {
      v.d(ge, { v: () => s });
      const s = {
        onUnhandledError: null,
        onStoppedNotification: null,
        Promise: void 0,
        useDeprecatedSynchronousErrorHandling: !1,
        useDeprecatedNextContext: !1,
      };
    },
    515: (et, ge, v) => {
      v.d(ge, { E: () => _ });
      const _ = new (v(8306).y)(ne => ne.complete());
    },
    2076: (et, ge, v) => {
      v.d(ge, { D: () => Oe });
      var s = v(8421),
        _ = v(9672),
        j = v(4482),
        X = v(5403);
      function ne(Ae, te = 0) {
        return (0, j.e)((Pe, G) => {
          Pe.subscribe(
            (0, X.x)(
              G,
              Q => (0, _.f)(G, Ae, () => G.next(Q), te),
              () => (0, _.f)(G, Ae, () => G.complete(), te),
              Q => (0, _.f)(G, Ae, () => G.error(Q), te)
            )
          );
        });
      }
      function A(Ae, te = 0) {
        return (0, j.e)((Pe, G) => {
          G.add(Ae.schedule(() => Pe.subscribe(G), te));
        });
      }
      var fe = v(8306),
        oe = v(2202),
        ie = v(576);
      function we(Ae, te) {
        if (!Ae) throw new Error('Iterable cannot be null');
        return new fe.y(Pe => {
          (0, _.f)(Pe, te, () => {
            const G = Ae[Symbol.asyncIterator]();
            (0, _.f)(
              Pe,
              te,
              () => {
                G.next().then(Q => {
                  Q.done ? Pe.complete() : Pe.next(Q.value);
                });
              },
              0,
              !0
            );
          });
        });
      }
      var ee = v(3670),
        Ee = v(8239),
        $ = v(1144),
        ae = v(6495),
        $e = v(2206),
        Ve = v(4532),
        Ie = v(3260);
      function Oe(Ae, te) {
        return te
          ? (function Le(Ae, te) {
              if (null != Ae) {
                if ((0, ee.c)(Ae))
                  return (function K(Ae, te) {
                    return (0, s.Xf)(Ae).pipe(A(te), ne(te));
                  })(Ae, te);
                if ((0, $.z)(Ae))
                  return (function re(Ae, te) {
                    return new fe.y(Pe => {
                      let G = 0;
                      return te.schedule(function () {
                        G === Ae.length
                          ? Pe.complete()
                          : (Pe.next(Ae[G++]), Pe.closed || this.schedule());
                      });
                    });
                  })(Ae, te);
                if ((0, Ee.t)(Ae))
                  return (function q(Ae, te) {
                    return (0, s.Xf)(Ae).pipe(A(te), ne(te));
                  })(Ae, te);
                if ((0, $e.D)(Ae)) return we(Ae, te);
                if ((0, ae.T)(Ae))
                  return (function Ge(Ae, te) {
                    return new fe.y(Pe => {
                      let G;
                      return (
                        (0, _.f)(Pe, te, () => {
                          (G = Ae[oe.h]()),
                            (0, _.f)(
                              Pe,
                              te,
                              () => {
                                let Q, B;
                                try {
                                  ({ value: Q, done: B } = G.next());
                                } catch (ce) {
                                  return void Pe.error(ce);
                                }
                                B ? Pe.complete() : Pe.next(Q);
                              },
                              0,
                              !0
                            );
                        }),
                        () => (0, ie.m)(G?.return) && G.return()
                      );
                    });
                  })(Ae, te);
                if ((0, Ie.L)(Ae))
                  return (function Ce(Ae, te) {
                    return we((0, Ie.Q)(Ae), te);
                  })(Ae, te);
              }
              throw (0, Ve.z)(Ae);
            })(Ae, te)
          : (0, s.Xf)(Ae);
      }
    },
    8421: (et, ge, v) => {
      v.d(ge, { Xf: () => Ge });
      var s = v(655),
        _ = v(1144),
        j = v(8239),
        X = v(8306),
        ne = v(3670),
        A = v(2206),
        K = v(4532),
        q = v(6495),
        fe = v(3260),
        re = v(576),
        oe = v(7849),
        ie = v(8822);
      function Ge(Ie) {
        if (Ie instanceof X.y) return Ie;
        if (null != Ie) {
          if ((0, ne.c)(Ie))
            return (function we(Ie) {
              return new X.y(Ce => {
                const Le = Ie[ie.L]();
                if ((0, re.m)(Le.subscribe)) return Le.subscribe(Ce);
                throw new TypeError(
                  'Provided object does not correctly implement Symbol.observable'
                );
              });
            })(Ie);
          if ((0, _.z)(Ie))
            return (function ee(Ie) {
              return new X.y(Ce => {
                for (let Le = 0; Le < Ie.length && !Ce.closed; Le++)
                  Ce.next(Ie[Le]);
                Ce.complete();
              });
            })(Ie);
          if ((0, j.t)(Ie))
            return (function Ee(Ie) {
              return new X.y(Ce => {
                Ie.then(
                  Le => {
                    Ce.closed || (Ce.next(Le), Ce.complete());
                  },
                  Le => Ce.error(Le)
                ).then(null, oe.h);
              });
            })(Ie);
          if ((0, A.D)(Ie)) return ae(Ie);
          if ((0, q.T)(Ie))
            return (function $(Ie) {
              return new X.y(Ce => {
                for (const Le of Ie) if ((Ce.next(Le), Ce.closed)) return;
                Ce.complete();
              });
            })(Ie);
          if ((0, fe.L)(Ie))
            return (function $e(Ie) {
              return ae((0, fe.Q)(Ie));
            })(Ie);
        }
        throw (0, K.z)(Ie);
      }
      function ae(Ie) {
        return new X.y(Ce => {
          (function Ve(Ie, Ce) {
            var Le, Oe, Ae, te;
            return (0, s.mG)(this, void 0, void 0, function* () {
              try {
                for (Le = (0, s.KL)(Ie); !(Oe = yield Le.next()).done; )
                  if ((Ce.next(Oe.value), Ce.closed)) return;
              } catch (Pe) {
                Ae = { error: Pe };
              } finally {
                try {
                  Oe && !Oe.done && (te = Le.return) && (yield te.call(Le));
                } finally {
                  if (Ae) throw Ae.error;
                }
              }
              Ce.complete();
            });
          })(Ie, Ce).catch(Le => Ce.error(Le));
        });
      }
    },
    6451: (et, ge, v) => {
      v.d(ge, { T: () => A });
      var s = v(8189),
        _ = v(8421),
        j = v(515),
        X = v(7669),
        ne = v(2076);
      function A(...K) {
        const q = (0, X.yG)(K),
          fe = (0, X._6)(K, 1 / 0),
          re = K;
        return re.length
          ? 1 === re.length
            ? (0, _.Xf)(re[0])
            : (0, s.J)(fe)((0, ne.D)(re, q))
          : j.E;
      }
    },
    9646: (et, ge, v) => {
      v.d(ge, { of: () => j });
      var s = v(7669),
        _ = v(2076);
      function j(...X) {
        const ne = (0, s.yG)(X);
        return (0, _.D)(X, ne);
      }
    },
    5403: (et, ge, v) => {
      v.d(ge, { x: () => _ });
      var s = v(2961);
      function _(X, ne, A, K, q) {
        return new j(X, ne, A, K, q);
      }
      class j extends s.Lv {
        constructor(ne, A, K, q, fe, re) {
          super(ne),
            (this.onFinalize = fe),
            (this.shouldUnsubscribe = re),
            (this._next = A
              ? function (oe) {
                  try {
                    A(oe);
                  } catch (ie) {
                    ne.error(ie);
                  }
                }
              : super._next),
            (this._error = q
              ? function (oe) {
                  try {
                    q(oe);
                  } catch (ie) {
                    ne.error(ie);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : super._error),
            (this._complete = K
              ? function () {
                  try {
                    K();
                  } catch (oe) {
                    ne.error(oe);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : super._complete);
        }
        unsubscribe() {
          var ne;
          if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            const { closed: A } = this;
            super.unsubscribe(),
              !A &&
                (null === (ne = this.onFinalize) ||
                  void 0 === ne ||
                  ne.call(this));
          }
        }
      }
    },
    4351: (et, ge, v) => {
      v.d(ge, { b: () => j });
      var s = v(5577),
        _ = v(576);
      function j(X, ne) {
        return (0, _.m)(ne) ? (0, s.z)(X, ne, 1) : (0, s.z)(X, 1);
      }
    },
    9300: (et, ge, v) => {
      v.d(ge, { h: () => j });
      var s = v(4482),
        _ = v(5403);
      function j(X, ne) {
        return (0, s.e)((A, K) => {
          let q = 0;
          A.subscribe((0, _.x)(K, fe => X.call(ne, fe, q++) && K.next(fe)));
        });
      }
    },
    4004: (et, ge, v) => {
      v.d(ge, { U: () => j });
      var s = v(4482),
        _ = v(5403);
      function j(X, ne) {
        return (0, s.e)((A, K) => {
          let q = 0;
          A.subscribe(
            (0, _.x)(K, fe => {
              K.next(X.call(ne, fe, q++));
            })
          );
        });
      }
    },
    8189: (et, ge, v) => {
      v.d(ge, { J: () => j });
      var s = v(5577),
        _ = v(4671);
      function j(X = 1 / 0) {
        return (0, s.z)(_.y, X);
      }
    },
    5577: (et, ge, v) => {
      v.d(ge, { z: () => q });
      var s = v(4004),
        _ = v(8421),
        j = v(4482),
        X = v(9672),
        ne = v(5403),
        K = v(576);
      function q(fe, re, oe = 1 / 0) {
        return (0, K.m)(re)
          ? q(
              (ie, Ge) =>
                (0, s.U)((we, ee) => re(ie, we, Ge, ee))((0, _.Xf)(fe(ie, Ge))),
              oe
            )
          : ('number' == typeof re && (oe = re),
            (0, j.e)((ie, Ge) =>
              (function A(fe, re, oe, ie, Ge, we, ee, Ee) {
                const $ = [];
                let ae = 0,
                  $e = 0,
                  Ve = !1;
                const Ie = () => {
                    Ve && !$.length && !ae && re.complete();
                  },
                  Ce = Oe => (ae < ie ? Le(Oe) : $.push(Oe)),
                  Le = Oe => {
                    we && re.next(Oe), ae++;
                    let Ae = !1;
                    (0, _.Xf)(oe(Oe, $e++)).subscribe(
                      (0, ne.x)(
                        re,
                        te => {
                          Ge?.(te), we ? Ce(te) : re.next(te);
                        },
                        () => {
                          Ae = !0;
                        },
                        void 0,
                        () => {
                          if (Ae)
                            try {
                              for (ae--; $.length && ae < ie; ) {
                                const te = $.shift();
                                ee ? (0, X.f)(re, ee, () => Le(te)) : Le(te);
                              }
                              Ie();
                            } catch (te) {
                              re.error(te);
                            }
                        }
                      )
                    );
                  };
                return (
                  fe.subscribe(
                    (0, ne.x)(re, Ce, () => {
                      (Ve = !0), Ie();
                    })
                  ),
                  () => {
                    Ee?.();
                  }
                );
              })(ie, Ge, fe, oe)
            ));
      }
    },
    3099: (et, ge, v) => {
      v.d(ge, { B: () => A });
      var s = v(2076),
        _ = v(5698),
        j = v(7579),
        X = v(2961),
        ne = v(4482);
      function A(q = {}) {
        const {
          connector: fe = () => new j.x(),
          resetOnError: re = !0,
          resetOnComplete: oe = !0,
          resetOnRefCountZero: ie = !0,
        } = q;
        return Ge => {
          let we = null,
            ee = null,
            Ee = null,
            $ = 0,
            ae = !1,
            $e = !1;
          const Ve = () => {
              ee?.unsubscribe(), (ee = null);
            },
            Ie = () => {
              Ve(), (we = Ee = null), (ae = $e = !1);
            },
            Ce = () => {
              const Le = we;
              Ie(), Le?.unsubscribe();
            };
          return (0, ne.e)((Le, Oe) => {
            $++, !$e && !ae && Ve();
            const Ae = (Ee = Ee ?? fe());
            Oe.add(() => {
              $--, 0 === $ && !$e && !ae && (ee = K(Ce, ie));
            }),
              Ae.subscribe(Oe),
              we ||
                ((we = new X.Hp({
                  next: te => Ae.next(te),
                  error: te => {
                    ($e = !0), Ve(), (ee = K(Ie, re, te)), Ae.error(te);
                  },
                  complete: () => {
                    (ae = !0), Ve(), (ee = K(Ie, oe)), Ae.complete();
                  },
                })),
                (0, s.D)(Le).subscribe(we));
          })(Ge);
        };
      }
      function K(q, fe, ...re) {
        return !0 === fe
          ? (q(), null)
          : !1 === fe
          ? null
          : fe(...re)
              .pipe((0, _.q)(1))
              .subscribe(() => q());
      }
    },
    3900: (et, ge, v) => {
      v.d(ge, { w: () => X });
      var s = v(8421),
        _ = v(4482),
        j = v(5403);
      function X(ne, A) {
        return (0, _.e)((K, q) => {
          let fe = null,
            re = 0,
            oe = !1;
          const ie = () => oe && !fe && q.complete();
          K.subscribe(
            (0, j.x)(
              q,
              Ge => {
                fe?.unsubscribe();
                let we = 0;
                const ee = re++;
                (0, s.Xf)(ne(Ge, ee)).subscribe(
                  (fe = (0, j.x)(
                    q,
                    Ee => q.next(A ? A(Ge, Ee, ee, we++) : Ee),
                    () => {
                      (fe = null), ie();
                    }
                  ))
                );
              },
              () => {
                (oe = !0), ie();
              }
            )
          );
        });
      }
    },
    5698: (et, ge, v) => {
      v.d(ge, { q: () => X });
      var s = v(515),
        _ = v(4482),
        j = v(5403);
      function X(ne) {
        return ne <= 0
          ? () => s.E
          : (0, _.e)((A, K) => {
              let q = 0;
              A.subscribe(
                (0, j.x)(K, fe => {
                  ++q <= ne && (K.next(fe), ne <= q && K.complete());
                })
              );
            });
      }
    },
    3410: (et, ge, v) => {
      v.d(ge, { z: () => s });
      const s = {
        setTimeout(_, j, ...X) {
          const { delegate: ne } = s;
          return ne?.setTimeout
            ? ne.setTimeout(_, j, ...X)
            : setTimeout(_, j, ...X);
        },
        clearTimeout(_) {
          const { delegate: j } = s;
          return (j?.clearTimeout || clearTimeout)(_);
        },
        delegate: void 0,
      };
    },
    2202: (et, ge, v) => {
      v.d(ge, { h: () => _ });
      const _ = (function s() {
        return 'function' == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : '@@iterator';
      })();
    },
    8822: (et, ge, v) => {
      v.d(ge, { L: () => s });
      const s =
        ('function' == typeof Symbol && Symbol.observable) || '@@observable';
    },
    7669: (et, ge, v) => {
      v.d(ge, { _6: () => A, jO: () => X, yG: () => ne });
      var s = v(576);
      function j(K) {
        return K[K.length - 1];
      }
      function X(K) {
        return (0, s.m)(j(K)) ? K.pop() : void 0;
      }
      function ne(K) {
        return (function _(K) {
          return K && (0, s.m)(K.schedule);
        })(j(K))
          ? K.pop()
          : void 0;
      }
      function A(K, q) {
        return 'number' == typeof j(K) ? K.pop() : q;
      }
    },
    4742: (et, ge, v) => {
      v.d(ge, { D: () => ne });
      const { isArray: s } = Array,
        { getPrototypeOf: _, prototype: j, keys: X } = Object;
      function ne(K) {
        if (1 === K.length) {
          const q = K[0];
          if (s(q)) return { args: q, keys: null };
          if (
            (function A(K) {
              return K && 'object' == typeof K && _(K) === j;
            })(q)
          ) {
            const fe = X(q);
            return { args: fe.map(re => q[re]), keys: fe };
          }
        }
        return { args: K, keys: null };
      }
    },
    8737: (et, ge, v) => {
      function s(_, j) {
        if (_) {
          const X = _.indexOf(j);
          0 <= X && _.splice(X, 1);
        }
      }
      v.d(ge, { P: () => s });
    },
    3888: (et, ge, v) => {
      function s(_) {
        const X = _(ne => {
          Error.call(ne), (ne.stack = new Error().stack);
        });
        return (
          (X.prototype = Object.create(Error.prototype)),
          (X.prototype.constructor = X),
          X
        );
      }
      v.d(ge, { d: () => s });
    },
    1810: (et, ge, v) => {
      function s(_, j) {
        return _.reduce((X, ne, A) => ((X[ne] = j[A]), X), {});
      }
      v.d(ge, { n: () => s });
    },
    2806: (et, ge, v) => {
      v.d(ge, { O: () => X, x: () => j });
      var s = v(2416);
      let _ = null;
      function j(ne) {
        if (s.v.useDeprecatedSynchronousErrorHandling) {
          const A = !_;
          if ((A && (_ = { errorThrown: !1, error: null }), ne(), A)) {
            const { errorThrown: K, error: q } = _;
            if (((_ = null), K)) throw q;
          }
        } else ne();
      }
      function X(ne) {
        s.v.useDeprecatedSynchronousErrorHandling &&
          _ &&
          ((_.errorThrown = !0), (_.error = ne));
      }
    },
    9672: (et, ge, v) => {
      function s(_, j, X, ne = 0, A = !1) {
        const K = j.schedule(function () {
          X(), A ? _.add(this.schedule(null, ne)) : this.unsubscribe();
        }, ne);
        if ((_.add(K), !A)) return K;
      }
      v.d(ge, { f: () => s });
    },
    4671: (et, ge, v) => {
      function s(_) {
        return _;
      }
      v.d(ge, { y: () => s });
    },
    1144: (et, ge, v) => {
      v.d(ge, { z: () => s });
      const s = _ => _ && 'number' == typeof _.length && 'function' != typeof _;
    },
    2206: (et, ge, v) => {
      v.d(ge, { D: () => _ });
      var s = v(576);
      function _(j) {
        return Symbol.asyncIterator && (0, s.m)(j?.[Symbol.asyncIterator]);
      }
    },
    576: (et, ge, v) => {
      function s(_) {
        return 'function' == typeof _;
      }
      v.d(ge, { m: () => s });
    },
    3670: (et, ge, v) => {
      v.d(ge, { c: () => j });
      var s = v(8822),
        _ = v(576);
      function j(X) {
        return (0, _.m)(X[s.L]);
      }
    },
    6495: (et, ge, v) => {
      v.d(ge, { T: () => j });
      var s = v(2202),
        _ = v(576);
      function j(X) {
        return (0, _.m)(X?.[s.h]);
      }
    },
    8239: (et, ge, v) => {
      v.d(ge, { t: () => _ });
      var s = v(576);
      function _(j) {
        return (0, s.m)(j?.then);
      }
    },
    3260: (et, ge, v) => {
      v.d(ge, { L: () => X, Q: () => j });
      var s = v(655),
        _ = v(576);
      function j(ne) {
        return (0, s.FC)(this, arguments, function* () {
          const K = ne.getReader();
          try {
            for (;;) {
              const { value: q, done: fe } = yield (0, s.qq)(K.read());
              if (fe) return yield (0, s.qq)(void 0);
              yield yield (0, s.qq)(q);
            }
          } finally {
            K.releaseLock();
          }
        });
      }
      function X(ne) {
        return (0, _.m)(ne?.getReader);
      }
    },
    4482: (et, ge, v) => {
      v.d(ge, { A: () => _, e: () => j });
      var s = v(576);
      function _(X) {
        return (0, s.m)(X?.lift);
      }
      function j(X) {
        return ne => {
          if (_(ne))
            return ne.lift(function (A) {
              try {
                return X(A, this);
              } catch (K) {
                this.error(K);
              }
            });
          throw new TypeError('Unable to lift unknown Observable type');
        };
      }
    },
    3268: (et, ge, v) => {
      v.d(ge, { Z: () => X });
      var s = v(4004);
      const { isArray: _ } = Array;
      function X(ne) {
        return (0, s.U)(A =>
          (function j(ne, A) {
            return _(A) ? ne(...A) : ne(A);
          })(ne, A)
        );
      }
    },
    7849: (et, ge, v) => {
      v.d(ge, { h: () => j });
      var s = v(2416),
        _ = v(3410);
      function j(X) {
        _.z.setTimeout(() => {
          const { onUnhandledError: ne } = s.v;
          if (!ne) throw X;
          ne(X);
        });
      }
    },
    4532: (et, ge, v) => {
      function s(_) {
        return new TypeError(
          `You provided ${
            null !== _ && 'object' == typeof _ ? 'an invalid object' : `'${_}'`
          } where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`
        );
      }
      v.d(ge, { z: () => s });
    },
    655: (et, ge, v) => {
      function q(G, Q, B, ce) {
        return new (B || (B = Promise))(function (Ne, st) {
          function mt(jt) {
            try {
              Ue(ce.next(jt));
            } catch (an) {
              st(an);
            }
          }
          function yt(jt) {
            try {
              Ue(ce.throw(jt));
            } catch (an) {
              st(an);
            }
          }
          function Ue(jt) {
            jt.done
              ? Ne(jt.value)
              : (function le(Ne) {
                  return Ne instanceof B
                    ? Ne
                    : new B(function (st) {
                        st(Ne);
                      });
                })(jt.value).then(mt, yt);
          }
          Ue((ce = ce.apply(G, Q || [])).next());
        });
      }
      function $(G) {
        return this instanceof $ ? ((this.v = G), this) : new $(G);
      }
      function ae(G, Q, B) {
        if (!Symbol.asyncIterator)
          throw new TypeError('Symbol.asyncIterator is not defined.');
        var le,
          ce = B.apply(G, Q || []),
          Ne = [];
        return (
          (le = {}),
          st('next'),
          st('throw'),
          st('return'),
          (le[Symbol.asyncIterator] = function () {
            return this;
          }),
          le
        );
        function st(Tt) {
          ce[Tt] &&
            (le[Tt] = function (Mt) {
              return new Promise(function (qt, Me) {
                Ne.push([Tt, Mt, qt, Me]) > 1 || mt(Tt, Mt);
              });
            });
        }
        function mt(Tt, Mt) {
          try {
            !(function yt(Tt) {
              Tt.value instanceof $
                ? Promise.resolve(Tt.value.v).then(Ue, jt)
                : an(Ne[0][2], Tt);
            })(ce[Tt](Mt));
          } catch (qt) {
            an(Ne[0][3], qt);
          }
        }
        function Ue(Tt) {
          mt('next', Tt);
        }
        function jt(Tt) {
          mt('throw', Tt);
        }
        function an(Tt, Mt) {
          Tt(Mt), Ne.shift(), Ne.length && mt(Ne[0][0], Ne[0][1]);
        }
      }
      function Ve(G) {
        if (!Symbol.asyncIterator)
          throw new TypeError('Symbol.asyncIterator is not defined.');
        var B,
          Q = G[Symbol.asyncIterator];
        return Q
          ? Q.call(G)
          : ((G = (function ie(G) {
              var Q = 'function' == typeof Symbol && Symbol.iterator,
                B = Q && G[Q],
                ce = 0;
              if (B) return B.call(G);
              if (G && 'number' == typeof G.length)
                return {
                  next: function () {
                    return (
                      G && ce >= G.length && (G = void 0),
                      { value: G && G[ce++], done: !G }
                    );
                  },
                };
              throw new TypeError(
                Q
                  ? 'Object is not iterable.'
                  : 'Symbol.iterator is not defined.'
              );
            })(G)),
            (B = {}),
            ce('next'),
            ce('throw'),
            ce('return'),
            (B[Symbol.asyncIterator] = function () {
              return this;
            }),
            B);
        function ce(Ne) {
          B[Ne] =
            G[Ne] &&
            function (st) {
              return new Promise(function (mt, yt) {
                !(function le(Ne, st, mt, yt) {
                  Promise.resolve(yt).then(function (Ue) {
                    Ne({ value: Ue, done: mt });
                  }, st);
                })(mt, yt, (st = G[Ne](st)).done, st.value);
              });
            };
        }
      }
      v.d(ge, { FC: () => ae, KL: () => Ve, mG: () => q, qq: () => $ });
    },
    6895: (et, ge, v) => {
      v.d(ge, {
        Do: () => Ie,
        EM: () => hr,
        HT: () => ne,
        JF: () => Zt,
        K0: () => K,
        Mx: () => Zr,
        O5: () => oo,
        PC: () => cr,
        RF: () => on,
        S$: () => $,
        V_: () => re,
        Ye: () => Ce,
        b0: () => Ve,
        bD: () => Jo,
        ez: () => Fo,
        lw: () => q,
        mk: () => Oo,
        mr: () => $e,
        n9: () => Ln,
        q: () => j,
        sg: () => fo,
        w_: () => A,
      });
      var s = v(4650);
      let _ = null;
      function j() {
        return _;
      }
      function ne(m) {
        _ || (_ = m);
      }
      class A {}
      const K = new s.OlP('DocumentToken');
      let q = (() => {
        class m {
          historyGo(x) {
            throw new Error('Not implemented');
          }
        }
        return (
          (m.ɵfac = function (x) {
            return new (x || m)();
          }),
          (m.ɵprov = s.Yz7({
            token: m,
            factory: function () {
              return (function fe() {
                return (0, s.LFG)(oe);
              })();
            },
            providedIn: 'platform',
          })),
          m
        );
      })();
      const re = new s.OlP('Location Initialized');
      let oe = (() => {
        class m extends q {
          constructor(x) {
            super(), (this._doc = x), this._init();
          }
          _init() {
            (this.location = window.location), (this._history = window.history);
          }
          getBaseHrefFromDOM() {
            return j().getBaseHref(this._doc);
          }
          onPopState(x) {
            const E = j().getGlobalEventTarget(this._doc, 'window');
            return (
              E.addEventListener('popstate', x, !1),
              () => E.removeEventListener('popstate', x)
            );
          }
          onHashChange(x) {
            const E = j().getGlobalEventTarget(this._doc, 'window');
            return (
              E.addEventListener('hashchange', x, !1),
              () => E.removeEventListener('hashchange', x)
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
          set pathname(x) {
            this.location.pathname = x;
          }
          pushState(x, E, V) {
            ie() ? this._history.pushState(x, E, V) : (this.location.hash = V);
          }
          replaceState(x, E, V) {
            ie()
              ? this._history.replaceState(x, E, V)
              : (this.location.hash = V);
          }
          forward() {
            this._history.forward();
          }
          back() {
            this._history.back();
          }
          historyGo(x = 0) {
            this._history.go(x);
          }
          getState() {
            return this._history.state;
          }
        }
        return (
          (m.ɵfac = function (x) {
            return new (x || m)(s.LFG(K));
          }),
          (m.ɵprov = s.Yz7({
            token: m,
            factory: function () {
              return (function Ge() {
                return new oe((0, s.LFG)(K));
              })();
            },
            providedIn: 'platform',
          })),
          m
        );
      })();
      function ie() {
        return !!window.history.pushState;
      }
      function we(m, M) {
        if (0 == m.length) return M;
        if (0 == M.length) return m;
        let x = 0;
        return (
          m.endsWith('/') && x++,
          M.startsWith('/') && x++,
          2 == x ? m + M.substring(1) : 1 == x ? m + M : m + '/' + M
        );
      }
      function ee(m) {
        const M = m.match(/#|\?|$/),
          x = (M && M.index) || m.length;
        return m.slice(0, x - ('/' === m[x - 1] ? 1 : 0)) + m.slice(x);
      }
      function Ee(m) {
        return m && '?' !== m[0] ? '?' + m : m;
      }
      let $ = (() => {
        class m {
          historyGo(x) {
            throw new Error('Not implemented');
          }
        }
        return (
          (m.ɵfac = function (x) {
            return new (x || m)();
          }),
          (m.ɵprov = s.Yz7({
            token: m,
            factory: function () {
              return (function ae() {
                const m = (0, s.LFG)(K).location;
                return new Ve((0, s.LFG)(q), (m && m.origin) || '');
              })();
            },
            providedIn: 'root',
          })),
          m
        );
      })();
      const $e = new s.OlP('appBaseHref');
      let Ve = (() => {
          class m extends $ {
            constructor(x, E) {
              if (
                (super(),
                (this._platformLocation = x),
                (this._removeListenerFns = []),
                null == E && (E = this._platformLocation.getBaseHrefFromDOM()),
                null == E)
              )
                throw new Error(
                  'No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.'
                );
              this._baseHref = E;
            }
            ngOnDestroy() {
              for (; this._removeListenerFns.length; )
                this._removeListenerFns.pop()();
            }
            onPopState(x) {
              this._removeListenerFns.push(
                this._platformLocation.onPopState(x),
                this._platformLocation.onHashChange(x)
              );
            }
            getBaseHref() {
              return this._baseHref;
            }
            prepareExternalUrl(x) {
              return we(this._baseHref, x);
            }
            path(x = !1) {
              const E =
                  this._platformLocation.pathname +
                  Ee(this._platformLocation.search),
                V = this._platformLocation.hash;
              return V && x ? `${E}${V}` : E;
            }
            pushState(x, E, V, ue) {
              const ye = this.prepareExternalUrl(V + Ee(ue));
              this._platformLocation.pushState(x, E, ye);
            }
            replaceState(x, E, V, ue) {
              const ye = this.prepareExternalUrl(V + Ee(ue));
              this._platformLocation.replaceState(x, E, ye);
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
            historyGo(x = 0) {
              this._platformLocation.historyGo?.(x);
            }
          }
          return (
            (m.ɵfac = function (x) {
              return new (x || m)(s.LFG(q), s.LFG($e, 8));
            }),
            (m.ɵprov = s.Yz7({ token: m, factory: m.ɵfac })),
            m
          );
        })(),
        Ie = (() => {
          class m extends $ {
            constructor(x, E) {
              super(),
                (this._platformLocation = x),
                (this._baseHref = ''),
                (this._removeListenerFns = []),
                null != E && (this._baseHref = E);
            }
            ngOnDestroy() {
              for (; this._removeListenerFns.length; )
                this._removeListenerFns.pop()();
            }
            onPopState(x) {
              this._removeListenerFns.push(
                this._platformLocation.onPopState(x),
                this._platformLocation.onHashChange(x)
              );
            }
            getBaseHref() {
              return this._baseHref;
            }
            path(x = !1) {
              let E = this._platformLocation.hash;
              return null == E && (E = '#'), E.length > 0 ? E.substring(1) : E;
            }
            prepareExternalUrl(x) {
              const E = we(this._baseHref, x);
              return E.length > 0 ? '#' + E : E;
            }
            pushState(x, E, V, ue) {
              let ye = this.prepareExternalUrl(V + Ee(ue));
              0 == ye.length && (ye = this._platformLocation.pathname),
                this._platformLocation.pushState(x, E, ye);
            }
            replaceState(x, E, V, ue) {
              let ye = this.prepareExternalUrl(V + Ee(ue));
              0 == ye.length && (ye = this._platformLocation.pathname),
                this._platformLocation.replaceState(x, E, ye);
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
            historyGo(x = 0) {
              this._platformLocation.historyGo?.(x);
            }
          }
          return (
            (m.ɵfac = function (x) {
              return new (x || m)(s.LFG(q), s.LFG($e, 8));
            }),
            (m.ɵprov = s.Yz7({ token: m, factory: m.ɵfac })),
            m
          );
        })(),
        Ce = (() => {
          class m {
            constructor(x) {
              (this._subject = new s.vpe()),
                (this._urlChangeListeners = []),
                (this._urlChangeSubscription = null),
                (this._locationStrategy = x);
              const E = this._locationStrategy.getBaseHref();
              (this._baseHref = ee(Ae(E))),
                this._locationStrategy.onPopState(V => {
                  this._subject.emit({
                    url: this.path(!0),
                    pop: !0,
                    state: V.state,
                    type: V.type,
                  });
                });
            }
            ngOnDestroy() {
              this._urlChangeSubscription?.unsubscribe(),
                (this._urlChangeListeners = []);
            }
            path(x = !1) {
              return this.normalize(this._locationStrategy.path(x));
            }
            getState() {
              return this._locationStrategy.getState();
            }
            isCurrentPathEqualTo(x, E = '') {
              return this.path() == this.normalize(x + Ee(E));
            }
            normalize(x) {
              return m.stripTrailingSlash(
                (function Oe(m, M) {
                  return m && M.startsWith(m) ? M.substring(m.length) : M;
                })(this._baseHref, Ae(x))
              );
            }
            prepareExternalUrl(x) {
              return (
                x && '/' !== x[0] && (x = '/' + x),
                this._locationStrategy.prepareExternalUrl(x)
              );
            }
            go(x, E = '', V = null) {
              this._locationStrategy.pushState(V, '', x, E),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(x + Ee(E)),
                  V
                );
            }
            replaceState(x, E = '', V = null) {
              this._locationStrategy.replaceState(V, '', x, E),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(x + Ee(E)),
                  V
                );
            }
            forward() {
              this._locationStrategy.forward();
            }
            back() {
              this._locationStrategy.back();
            }
            historyGo(x = 0) {
              this._locationStrategy.historyGo?.(x);
            }
            onUrlChange(x) {
              return (
                this._urlChangeListeners.push(x),
                this._urlChangeSubscription ||
                  (this._urlChangeSubscription = this.subscribe(E => {
                    this._notifyUrlChangeListeners(E.url, E.state);
                  })),
                () => {
                  const E = this._urlChangeListeners.indexOf(x);
                  this._urlChangeListeners.splice(E, 1),
                    0 === this._urlChangeListeners.length &&
                      (this._urlChangeSubscription?.unsubscribe(),
                      (this._urlChangeSubscription = null));
                }
              );
            }
            _notifyUrlChangeListeners(x = '', E) {
              this._urlChangeListeners.forEach(V => V(x, E));
            }
            subscribe(x, E, V) {
              return this._subject.subscribe({
                next: x,
                error: E,
                complete: V,
              });
            }
          }
          return (
            (m.normalizeQueryParams = Ee),
            (m.joinWithSlash = we),
            (m.stripTrailingSlash = ee),
            (m.ɵfac = function (x) {
              return new (x || m)(s.LFG($));
            }),
            (m.ɵprov = s.Yz7({
              token: m,
              factory: function () {
                return (function Le() {
                  return new Ce((0, s.LFG)($));
                })();
              },
              providedIn: 'root',
            })),
            m
          );
        })();
      function Ae(m) {
        return m.replace(/\/index.html$/, '');
      }
      function Zr(m, M) {
        M = encodeURIComponent(M);
        for (const x of m.split(';')) {
          const E = x.indexOf('='),
            [V, ue] = -1 == E ? [x, ''] : [x.slice(0, E), x.slice(E + 1)];
          if (V.trim() === M) return decodeURIComponent(ue);
        }
        return null;
      }
      let Oo = (() => {
        class m {
          constructor(x, E, V, ue) {
            (this._iterableDiffers = x),
              (this._keyValueDiffers = E),
              (this._ngEl = V),
              (this._renderer = ue),
              (this._iterableDiffer = null),
              (this._keyValueDiffer = null),
              (this._initialClasses = []),
              (this._rawClass = null);
          }
          set klass(x) {
            this._removeClasses(this._initialClasses),
              (this._initialClasses =
                'string' == typeof x ? x.split(/\s+/) : []),
              this._applyClasses(this._initialClasses),
              this._applyClasses(this._rawClass);
          }
          set ngClass(x) {
            this._removeClasses(this._rawClass),
              this._applyClasses(this._initialClasses),
              (this._iterableDiffer = null),
              (this._keyValueDiffer = null),
              (this._rawClass = 'string' == typeof x ? x.split(/\s+/) : x),
              this._rawClass &&
                ((0, s.sIi)(this._rawClass)
                  ? (this._iterableDiffer = this._iterableDiffers
                      .find(this._rawClass)
                      .create())
                  : (this._keyValueDiffer = this._keyValueDiffers
                      .find(this._rawClass)
                      .create()));
          }
          ngDoCheck() {
            if (this._iterableDiffer) {
              const x = this._iterableDiffer.diff(this._rawClass);
              x && this._applyIterableChanges(x);
            } else if (this._keyValueDiffer) {
              const x = this._keyValueDiffer.diff(this._rawClass);
              x && this._applyKeyValueChanges(x);
            }
          }
          _applyKeyValueChanges(x) {
            x.forEachAddedItem(E => this._toggleClass(E.key, E.currentValue)),
              x.forEachChangedItem(E =>
                this._toggleClass(E.key, E.currentValue)
              ),
              x.forEachRemovedItem(E => {
                E.previousValue && this._toggleClass(E.key, !1);
              });
          }
          _applyIterableChanges(x) {
            x.forEachAddedItem(E => {
              if ('string' != typeof E.item)
                throw new Error(
                  `NgClass can only toggle CSS classes expressed as strings, got ${(0,
                  s.AaK)(E.item)}`
                );
              this._toggleClass(E.item, !0);
            }),
              x.forEachRemovedItem(E => this._toggleClass(E.item, !1));
          }
          _applyClasses(x) {
            x &&
              (Array.isArray(x) || x instanceof Set
                ? x.forEach(E => this._toggleClass(E, !0))
                : Object.keys(x).forEach(E => this._toggleClass(E, !!x[E])));
          }
          _removeClasses(x) {
            x &&
              (Array.isArray(x) || x instanceof Set
                ? x.forEach(E => this._toggleClass(E, !1))
                : Object.keys(x).forEach(E => this._toggleClass(E, !1)));
          }
          _toggleClass(x, E) {
            (x = x.trim()) &&
              x.split(/\s+/g).forEach(V => {
                E
                  ? this._renderer.addClass(this._ngEl.nativeElement, V)
                  : this._renderer.removeClass(this._ngEl.nativeElement, V);
              });
          }
        }
        return (
          (m.ɵfac = function (x) {
            return new (x || m)(
              s.Y36(s.ZZ4),
              s.Y36(s.aQg),
              s.Y36(s.SBq),
              s.Y36(s.Qsj)
            );
          }),
          (m.ɵdir = s.lG2({
            type: m,
            selectors: [['', 'ngClass', '']],
            inputs: { klass: ['class', 'klass'], ngClass: 'ngClass' },
          })),
          m
        );
      })();
      class Yn {
        constructor(M, x, E, V) {
          (this.$implicit = M),
            (this.ngForOf = x),
            (this.index = E),
            (this.count = V);
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
      let fo = (() => {
        class m {
          constructor(x, E, V) {
            (this._viewContainer = x),
              (this._template = E),
              (this._differs = V),
              (this._ngForOf = null),
              (this._ngForOfDirty = !0),
              (this._differ = null);
          }
          set ngForOf(x) {
            (this._ngForOf = x), (this._ngForOfDirty = !0);
          }
          set ngForTrackBy(x) {
            this._trackByFn = x;
          }
          get ngForTrackBy() {
            return this._trackByFn;
          }
          set ngForTemplate(x) {
            x && (this._template = x);
          }
          ngDoCheck() {
            if (this._ngForOfDirty) {
              this._ngForOfDirty = !1;
              const x = this._ngForOf;
              !this._differ &&
                x &&
                (this._differ = this._differs
                  .find(x)
                  .create(this.ngForTrackBy));
            }
            if (this._differ) {
              const x = this._differ.diff(this._ngForOf);
              x && this._applyChanges(x);
            }
          }
          _applyChanges(x) {
            const E = this._viewContainer;
            x.forEachOperation((V, ue, ye) => {
              if (null == V.previousIndex)
                E.createEmbeddedView(
                  this._template,
                  new Yn(V.item, this._ngForOf, -1, -1),
                  null === ye ? void 0 : ye
                );
              else if (null == ye) E.remove(null === ue ? void 0 : ue);
              else if (null !== ue) {
                const ze = E.get(ue);
                E.move(ze, ye), Kn(ze, V);
              }
            });
            for (let V = 0, ue = E.length; V < ue; V++) {
              const ze = E.get(V).context;
              (ze.index = V), (ze.count = ue), (ze.ngForOf = this._ngForOf);
            }
            x.forEachIdentityChange(V => {
              Kn(E.get(V.currentIndex), V);
            });
          }
          static ngTemplateContextGuard(x, E) {
            return !0;
          }
        }
        return (
          (m.ɵfac = function (x) {
            return new (x || m)(s.Y36(s.s_b), s.Y36(s.Rgc), s.Y36(s.ZZ4));
          }),
          (m.ɵdir = s.lG2({
            type: m,
            selectors: [['', 'ngFor', '', 'ngForOf', '']],
            inputs: {
              ngForOf: 'ngForOf',
              ngForTrackBy: 'ngForTrackBy',
              ngForTemplate: 'ngForTemplate',
            },
          })),
          m
        );
      })();
      function Kn(m, M) {
        m.context.$implicit = M.item;
      }
      let oo = (() => {
        class m {
          constructor(x, E) {
            (this._viewContainer = x),
              (this._context = new nn()),
              (this._thenTemplateRef = null),
              (this._elseTemplateRef = null),
              (this._thenViewRef = null),
              (this._elseViewRef = null),
              (this._thenTemplateRef = E);
          }
          set ngIf(x) {
            (this._context.$implicit = this._context.ngIf = x),
              this._updateView();
          }
          set ngIfThen(x) {
            gn('ngIfThen', x),
              (this._thenTemplateRef = x),
              (this._thenViewRef = null),
              this._updateView();
          }
          set ngIfElse(x) {
            gn('ngIfElse', x),
              (this._elseTemplateRef = x),
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
          static ngTemplateContextGuard(x, E) {
            return !0;
          }
        }
        return (
          (m.ɵfac = function (x) {
            return new (x || m)(s.Y36(s.s_b), s.Y36(s.Rgc));
          }),
          (m.ɵdir = s.lG2({
            type: m,
            selectors: [['', 'ngIf', '']],
            inputs: {
              ngIf: 'ngIf',
              ngIfThen: 'ngIfThen',
              ngIfElse: 'ngIfElse',
            },
          })),
          m
        );
      })();
      class nn {
        constructor() {
          (this.$implicit = null), (this.ngIf = null);
        }
      }
      function gn(m, M) {
        if (M && !M.createEmbeddedView)
          throw new Error(
            `${m} must be a TemplateRef, but received '${(0, s.AaK)(M)}'.`
          );
      }
      class zn {
        constructor(M, x) {
          (this._viewContainerRef = M),
            (this._templateRef = x),
            (this._created = !1);
        }
        create() {
          (this._created = !0),
            this._viewContainerRef.createEmbeddedView(this._templateRef);
        }
        destroy() {
          (this._created = !1), this._viewContainerRef.clear();
        }
        enforceState(M) {
          M && !this._created
            ? this.create()
            : !M && this._created && this.destroy();
        }
      }
      let on = (() => {
          class m {
            constructor() {
              (this._defaultUsed = !1),
                (this._caseCount = 0),
                (this._lastCaseCheckIndex = 0),
                (this._lastCasesMatched = !1);
            }
            set ngSwitch(x) {
              (this._ngSwitch = x),
                0 === this._caseCount && this._updateDefaultCases(!0);
            }
            _addCase() {
              return this._caseCount++;
            }
            _addDefault(x) {
              this._defaultViews || (this._defaultViews = []),
                this._defaultViews.push(x);
            }
            _matchCase(x) {
              const E = x == this._ngSwitch;
              return (
                (this._lastCasesMatched = this._lastCasesMatched || E),
                this._lastCaseCheckIndex++,
                this._lastCaseCheckIndex === this._caseCount &&
                  (this._updateDefaultCases(!this._lastCasesMatched),
                  (this._lastCaseCheckIndex = 0),
                  (this._lastCasesMatched = !1)),
                E
              );
            }
            _updateDefaultCases(x) {
              if (this._defaultViews && x !== this._defaultUsed) {
                this._defaultUsed = x;
                for (let E = 0; E < this._defaultViews.length; E++)
                  this._defaultViews[E].enforceState(x);
              }
            }
          }
          return (
            (m.ɵfac = function (x) {
              return new (x || m)();
            }),
            (m.ɵdir = s.lG2({
              type: m,
              selectors: [['', 'ngSwitch', '']],
              inputs: { ngSwitch: 'ngSwitch' },
            })),
            m
          );
        })(),
        Ln = (() => {
          class m {
            constructor(x, E, V) {
              (this.ngSwitch = V), V._addCase(), (this._view = new zn(x, E));
            }
            ngDoCheck() {
              this._view.enforceState(
                this.ngSwitch._matchCase(this.ngSwitchCase)
              );
            }
          }
          return (
            (m.ɵfac = function (x) {
              return new (x || m)(s.Y36(s.s_b), s.Y36(s.Rgc), s.Y36(on, 9));
            }),
            (m.ɵdir = s.lG2({
              type: m,
              selectors: [['', 'ngSwitchCase', '']],
              inputs: { ngSwitchCase: 'ngSwitchCase' },
            })),
            m
          );
        })(),
        cr = (() => {
          class m {
            constructor(x, E, V) {
              (this._ngEl = x),
                (this._differs = E),
                (this._renderer = V),
                (this._ngStyle = null),
                (this._differ = null);
            }
            set ngStyle(x) {
              (this._ngStyle = x),
                !this._differ &&
                  x &&
                  (this._differ = this._differs.find(x).create());
            }
            ngDoCheck() {
              if (this._differ) {
                const x = this._differ.diff(this._ngStyle);
                x && this._applyChanges(x);
              }
            }
            _setStyle(x, E) {
              const [V, ue] = x.split('.');
              null != (E = null != E && ue ? `${E}${ue}` : E)
                ? this._renderer.setStyle(this._ngEl.nativeElement, V, E)
                : this._renderer.removeStyle(this._ngEl.nativeElement, V);
            }
            _applyChanges(x) {
              x.forEachRemovedItem(E => this._setStyle(E.key, null)),
                x.forEachAddedItem(E => this._setStyle(E.key, E.currentValue)),
                x.forEachChangedItem(E =>
                  this._setStyle(E.key, E.currentValue)
                );
            }
          }
          return (
            (m.ɵfac = function (x) {
              return new (x || m)(s.Y36(s.SBq), s.Y36(s.aQg), s.Y36(s.Qsj));
            }),
            (m.ɵdir = s.lG2({
              type: m,
              selectors: [['', 'ngStyle', '']],
              inputs: { ngStyle: 'ngStyle' },
            })),
            m
          );
        })(),
        Fo = (() => {
          class m {}
          return (
            (m.ɵfac = function (x) {
              return new (x || m)();
            }),
            (m.ɵmod = s.oAB({ type: m })),
            (m.ɵinj = s.cJS({})),
            m
          );
        })();
      const Jo = 'browser';
      let hr = (() => {
        class m {}
        return (
          (m.ɵprov = (0, s.Yz7)({
            token: m,
            providedIn: 'root',
            factory: () => new Qr((0, s.LFG)(K), window),
          })),
          m
        );
      })();
      class Qr {
        constructor(M, x) {
          (this.document = M), (this.window = x), (this.offset = () => [0, 0]);
        }
        setOffset(M) {
          this.offset = Array.isArray(M) ? () => M : M;
        }
        getScrollPosition() {
          return this.supportsScrolling()
            ? [this.window.pageXOffset, this.window.pageYOffset]
            : [0, 0];
        }
        scrollToPosition(M) {
          this.supportsScrolling() && this.window.scrollTo(M[0], M[1]);
        }
        scrollToAnchor(M) {
          if (!this.supportsScrolling()) return;
          const x = (function Gn(m, M) {
            const x = m.getElementById(M) || m.getElementsByName(M)[0];
            if (x) return x;
            if (
              'function' == typeof m.createTreeWalker &&
              m.body &&
              (m.body.createShadowRoot || m.body.attachShadow)
            ) {
              const E = m.createTreeWalker(m.body, NodeFilter.SHOW_ELEMENT);
              let V = E.currentNode;
              for (; V; ) {
                const ue = V.shadowRoot;
                if (ue) {
                  const ye =
                    ue.getElementById(M) || ue.querySelector(`[name="${M}"]`);
                  if (ye) return ye;
                }
                V = E.nextNode();
              }
            }
            return null;
          })(this.document, M);
          x && (this.scrollToElement(x), x.focus());
        }
        setHistoryScrollRestoration(M) {
          if (this.supportScrollRestoration()) {
            const x = this.window.history;
            x && x.scrollRestoration && (x.scrollRestoration = M);
          }
        }
        scrollToElement(M) {
          const x = M.getBoundingClientRect(),
            E = x.left + this.window.pageXOffset,
            V = x.top + this.window.pageYOffset,
            ue = this.offset();
          this.window.scrollTo(E - ue[0], V - ue[1]);
        }
        supportScrollRestoration() {
          try {
            if (!this.supportsScrolling()) return !1;
            const M =
              Lt(this.window.history) ||
              Lt(Object.getPrototypeOf(this.window.history));
            return !(!M || (!M.writable && !M.set));
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
      function Lt(m) {
        return Object.getOwnPropertyDescriptor(m, 'scrollRestoration');
      }
      class Zt {}
    },
    529: (et, ge, v) => {
      v.d(ge, { JF: () => Fn, WM: () => re, eN: () => le });
      var s = v(6895),
        _ = v(4650),
        j = v(9646),
        X = v(8306),
        ne = v(4351),
        A = v(9300),
        K = v(4004);
      class q {}
      class fe {}
      class re {
        constructor(U) {
          (this.normalizedNames = new Map()),
            (this.lazyUpdate = null),
            U
              ? (this.lazyInit =
                  'string' == typeof U
                    ? () => {
                        (this.headers = new Map()),
                          U.split('\n').forEach(H => {
                            const me = H.indexOf(':');
                            if (me > 0) {
                              const Y = H.slice(0, me),
                                Fe = Y.toLowerCase(),
                                It = H.slice(me + 1).trim();
                              this.maybeSetNormalizedName(Y, Fe),
                                this.headers.has(Fe)
                                  ? this.headers.get(Fe).push(It)
                                  : this.headers.set(Fe, [It]);
                            }
                          });
                      }
                    : () => {
                        (this.headers = new Map()),
                          Object.keys(U).forEach(H => {
                            let me = U[H];
                            const Y = H.toLowerCase();
                            'string' == typeof me && (me = [me]),
                              me.length > 0 &&
                                (this.headers.set(Y, me),
                                this.maybeSetNormalizedName(H, Y));
                          });
                      })
              : (this.headers = new Map());
        }
        has(U) {
          return this.init(), this.headers.has(U.toLowerCase());
        }
        get(U) {
          this.init();
          const H = this.headers.get(U.toLowerCase());
          return H && H.length > 0 ? H[0] : null;
        }
        keys() {
          return this.init(), Array.from(this.normalizedNames.values());
        }
        getAll(U) {
          return this.init(), this.headers.get(U.toLowerCase()) || null;
        }
        append(U, H) {
          return this.clone({ name: U, value: H, op: 'a' });
        }
        set(U, H) {
          return this.clone({ name: U, value: H, op: 's' });
        }
        delete(U, H) {
          return this.clone({ name: U, value: H, op: 'd' });
        }
        maybeSetNormalizedName(U, H) {
          this.normalizedNames.has(H) || this.normalizedNames.set(H, U);
        }
        init() {
          this.lazyInit &&
            (this.lazyInit instanceof re
              ? this.copyFrom(this.lazyInit)
              : this.lazyInit(),
            (this.lazyInit = null),
            this.lazyUpdate &&
              (this.lazyUpdate.forEach(U => this.applyUpdate(U)),
              (this.lazyUpdate = null)));
        }
        copyFrom(U) {
          U.init(),
            Array.from(U.headers.keys()).forEach(H => {
              this.headers.set(H, U.headers.get(H)),
                this.normalizedNames.set(H, U.normalizedNames.get(H));
            });
        }
        clone(U) {
          const H = new re();
          return (
            (H.lazyInit =
              this.lazyInit && this.lazyInit instanceof re
                ? this.lazyInit
                : this),
            (H.lazyUpdate = (this.lazyUpdate || []).concat([U])),
            H
          );
        }
        applyUpdate(U) {
          const H = U.name.toLowerCase();
          switch (U.op) {
            case 'a':
            case 's':
              let me = U.value;
              if (('string' == typeof me && (me = [me]), 0 === me.length))
                return;
              this.maybeSetNormalizedName(U.name, H);
              const Y = ('a' === U.op ? this.headers.get(H) : void 0) || [];
              Y.push(...me), this.headers.set(H, Y);
              break;
            case 'd':
              const Fe = U.value;
              if (Fe) {
                let It = this.headers.get(H);
                if (!It) return;
                (It = It.filter(wt => -1 === Fe.indexOf(wt))),
                  0 === It.length
                    ? (this.headers.delete(H), this.normalizedNames.delete(H))
                    : this.headers.set(H, It);
              } else this.headers.delete(H), this.normalizedNames.delete(H);
          }
        }
        forEach(U) {
          this.init(),
            Array.from(this.normalizedNames.keys()).forEach(H =>
              U(this.normalizedNames.get(H), this.headers.get(H))
            );
        }
      }
      class oe {
        encodeKey(U) {
          return ee(U);
        }
        encodeValue(U) {
          return ee(U);
        }
        decodeKey(U) {
          return decodeURIComponent(U);
        }
        decodeValue(U) {
          return decodeURIComponent(U);
        }
      }
      const Ge = /%(\d[a-f0-9])/gi,
        we = {
          40: '@',
          '3A': ':',
          24: '$',
          '2C': ',',
          '3B': ';',
          '3D': '=',
          '3F': '?',
          '2F': '/',
        };
      function ee(he) {
        return encodeURIComponent(he).replace(Ge, (U, H) => we[H] ?? U);
      }
      function Ee(he) {
        return `${he}`;
      }
      class $ {
        constructor(U = {}) {
          if (
            ((this.updates = null),
            (this.cloneFrom = null),
            (this.encoder = U.encoder || new oe()),
            U.fromString)
          ) {
            if (U.fromObject)
              throw new Error('Cannot specify both fromString and fromObject.');
            this.map = (function ie(he, U) {
              const H = new Map();
              return (
                he.length > 0 &&
                  he
                    .replace(/^\?/, '')
                    .split('&')
                    .forEach(Y => {
                      const Fe = Y.indexOf('='),
                        [It, wt] =
                          -1 == Fe
                            ? [U.decodeKey(Y), '']
                            : [
                                U.decodeKey(Y.slice(0, Fe)),
                                U.decodeValue(Y.slice(Fe + 1)),
                              ],
                        Re = H.get(It) || [];
                      Re.push(wt), H.set(It, Re);
                    }),
                H
              );
            })(U.fromString, this.encoder);
          } else
            U.fromObject
              ? ((this.map = new Map()),
                Object.keys(U.fromObject).forEach(H => {
                  const me = U.fromObject[H],
                    Y = Array.isArray(me) ? me.map(Ee) : [Ee(me)];
                  this.map.set(H, Y);
                }))
              : (this.map = null);
        }
        has(U) {
          return this.init(), this.map.has(U);
        }
        get(U) {
          this.init();
          const H = this.map.get(U);
          return H ? H[0] : null;
        }
        getAll(U) {
          return this.init(), this.map.get(U) || null;
        }
        keys() {
          return this.init(), Array.from(this.map.keys());
        }
        append(U, H) {
          return this.clone({ param: U, value: H, op: 'a' });
        }
        appendAll(U) {
          const H = [];
          return (
            Object.keys(U).forEach(me => {
              const Y = U[me];
              Array.isArray(Y)
                ? Y.forEach(Fe => {
                    H.push({ param: me, value: Fe, op: 'a' });
                  })
                : H.push({ param: me, value: Y, op: 'a' });
            }),
            this.clone(H)
          );
        }
        set(U, H) {
          return this.clone({ param: U, value: H, op: 's' });
        }
        delete(U, H) {
          return this.clone({ param: U, value: H, op: 'd' });
        }
        toString() {
          return (
            this.init(),
            this.keys()
              .map(U => {
                const H = this.encoder.encodeKey(U);
                return this.map
                  .get(U)
                  .map(me => H + '=' + this.encoder.encodeValue(me))
                  .join('&');
              })
              .filter(U => '' !== U)
              .join('&')
          );
        }
        clone(U) {
          const H = new $({ encoder: this.encoder });
          return (
            (H.cloneFrom = this.cloneFrom || this),
            (H.updates = (this.updates || []).concat(U)),
            H
          );
        }
        init() {
          null === this.map && (this.map = new Map()),
            null !== this.cloneFrom &&
              (this.cloneFrom.init(),
              this.cloneFrom
                .keys()
                .forEach(U => this.map.set(U, this.cloneFrom.map.get(U))),
              this.updates.forEach(U => {
                switch (U.op) {
                  case 'a':
                  case 's':
                    const H =
                      ('a' === U.op ? this.map.get(U.param) : void 0) || [];
                    H.push(Ee(U.value)), this.map.set(U.param, H);
                    break;
                  case 'd':
                    if (void 0 === U.value) {
                      this.map.delete(U.param);
                      break;
                    }
                    {
                      let me = this.map.get(U.param) || [];
                      const Y = me.indexOf(Ee(U.value));
                      -1 !== Y && me.splice(Y, 1),
                        me.length > 0
                          ? this.map.set(U.param, me)
                          : this.map.delete(U.param);
                    }
                }
              }),
              (this.cloneFrom = this.updates = null));
        }
      }
      class $e {
        constructor() {
          this.map = new Map();
        }
        set(U, H) {
          return this.map.set(U, H), this;
        }
        get(U) {
          return (
            this.map.has(U) || this.map.set(U, U.defaultValue()),
            this.map.get(U)
          );
        }
        delete(U) {
          return this.map.delete(U), this;
        }
        has(U) {
          return this.map.has(U);
        }
        keys() {
          return this.map.keys();
        }
      }
      function Ie(he) {
        return typeof ArrayBuffer < 'u' && he instanceof ArrayBuffer;
      }
      function Ce(he) {
        return typeof Blob < 'u' && he instanceof Blob;
      }
      function Le(he) {
        return typeof FormData < 'u' && he instanceof FormData;
      }
      class Ae {
        constructor(U, H, me, Y) {
          let Fe;
          if (
            ((this.url = H),
            (this.body = null),
            (this.reportProgress = !1),
            (this.withCredentials = !1),
            (this.responseType = 'json'),
            (this.method = U.toUpperCase()),
            (function Ve(he) {
              switch (he) {
                case 'DELETE':
                case 'GET':
                case 'HEAD':
                case 'OPTIONS':
                case 'JSONP':
                  return !1;
                default:
                  return !0;
              }
            })(this.method) || Y
              ? ((this.body = void 0 !== me ? me : null), (Fe = Y))
              : (Fe = me),
            Fe &&
              ((this.reportProgress = !!Fe.reportProgress),
              (this.withCredentials = !!Fe.withCredentials),
              Fe.responseType && (this.responseType = Fe.responseType),
              Fe.headers && (this.headers = Fe.headers),
              Fe.context && (this.context = Fe.context),
              Fe.params && (this.params = Fe.params)),
            this.headers || (this.headers = new re()),
            this.context || (this.context = new $e()),
            this.params)
          ) {
            const It = this.params.toString();
            if (0 === It.length) this.urlWithParams = H;
            else {
              const wt = H.indexOf('?');
              this.urlWithParams =
                H + (-1 === wt ? '?' : wt < H.length - 1 ? '&' : '') + It;
            }
          } else (this.params = new $()), (this.urlWithParams = H);
        }
        serializeBody() {
          return null === this.body
            ? null
            : Ie(this.body) ||
              Ce(this.body) ||
              Le(this.body) ||
              (function Oe(he) {
                return (
                  typeof URLSearchParams < 'u' && he instanceof URLSearchParams
                );
              })(this.body) ||
              'string' == typeof this.body
            ? this.body
            : this.body instanceof $
            ? this.body.toString()
            : 'object' == typeof this.body ||
              'boolean' == typeof this.body ||
              Array.isArray(this.body)
            ? JSON.stringify(this.body)
            : this.body.toString();
        }
        detectContentTypeHeader() {
          return null === this.body || Le(this.body)
            ? null
            : Ce(this.body)
            ? this.body.type || null
            : Ie(this.body)
            ? null
            : 'string' == typeof this.body
            ? 'text/plain'
            : this.body instanceof $
            ? 'application/x-www-form-urlencoded;charset=UTF-8'
            : 'object' == typeof this.body ||
              'number' == typeof this.body ||
              'boolean' == typeof this.body
            ? 'application/json'
            : null;
        }
        clone(U = {}) {
          const H = U.method || this.method,
            me = U.url || this.url,
            Y = U.responseType || this.responseType,
            Fe = void 0 !== U.body ? U.body : this.body,
            It =
              void 0 !== U.withCredentials
                ? U.withCredentials
                : this.withCredentials,
            wt =
              void 0 !== U.reportProgress
                ? U.reportProgress
                : this.reportProgress;
          let Re = U.headers || this.headers,
            Vt = U.params || this.params;
          const Xe = U.context ?? this.context;
          return (
            void 0 !== U.setHeaders &&
              (Re = Object.keys(U.setHeaders).reduce(
                (un, xt) => un.set(xt, U.setHeaders[xt]),
                Re
              )),
            U.setParams &&
              (Vt = Object.keys(U.setParams).reduce(
                (un, xt) => un.set(xt, U.setParams[xt]),
                Vt
              )),
            new Ae(H, me, Fe, {
              params: Vt,
              headers: Re,
              context: Xe,
              reportProgress: wt,
              responseType: Y,
              withCredentials: It,
            })
          );
        }
      }
      var te = (() => (
        ((te = te || {})[(te.Sent = 0)] = 'Sent'),
        (te[(te.UploadProgress = 1)] = 'UploadProgress'),
        (te[(te.ResponseHeader = 2)] = 'ResponseHeader'),
        (te[(te.DownloadProgress = 3)] = 'DownloadProgress'),
        (te[(te.Response = 4)] = 'Response'),
        (te[(te.User = 5)] = 'User'),
        te
      ))();
      class Pe {
        constructor(U, H = 200, me = 'OK') {
          (this.headers = U.headers || new re()),
            (this.status = void 0 !== U.status ? U.status : H),
            (this.statusText = U.statusText || me),
            (this.url = U.url || null),
            (this.ok = this.status >= 200 && this.status < 300);
        }
      }
      class G extends Pe {
        constructor(U = {}) {
          super(U), (this.type = te.ResponseHeader);
        }
        clone(U = {}) {
          return new G({
            headers: U.headers || this.headers,
            status: void 0 !== U.status ? U.status : this.status,
            statusText: U.statusText || this.statusText,
            url: U.url || this.url || void 0,
          });
        }
      }
      class Q extends Pe {
        constructor(U = {}) {
          super(U),
            (this.type = te.Response),
            (this.body = void 0 !== U.body ? U.body : null);
        }
        clone(U = {}) {
          return new Q({
            body: void 0 !== U.body ? U.body : this.body,
            headers: U.headers || this.headers,
            status: void 0 !== U.status ? U.status : this.status,
            statusText: U.statusText || this.statusText,
            url: U.url || this.url || void 0,
          });
        }
      }
      class B extends Pe {
        constructor(U) {
          super(U, 0, 'Unknown Error'),
            (this.name = 'HttpErrorResponse'),
            (this.ok = !1),
            (this.message =
              this.status >= 200 && this.status < 300
                ? `Http failure during parsing for ${U.url || '(unknown url)'}`
                : `Http failure response for ${U.url || '(unknown url)'}: ${
                    U.status
                  } ${U.statusText}`),
            (this.error = U.error || null);
        }
      }
      function ce(he, U) {
        return {
          body: U,
          headers: he.headers,
          context: he.context,
          observe: he.observe,
          params: he.params,
          reportProgress: he.reportProgress,
          responseType: he.responseType,
          withCredentials: he.withCredentials,
        };
      }
      let le = (() => {
        class he {
          constructor(H) {
            this.handler = H;
          }
          request(H, me, Y = {}) {
            let Fe;
            if (H instanceof Ae) Fe = H;
            else {
              let Re, Vt;
              (Re = Y.headers instanceof re ? Y.headers : new re(Y.headers)),
                Y.params &&
                  (Vt =
                    Y.params instanceof $
                      ? Y.params
                      : new $({ fromObject: Y.params })),
                (Fe = new Ae(H, me, void 0 !== Y.body ? Y.body : null, {
                  headers: Re,
                  context: Y.context,
                  params: Vt,
                  reportProgress: Y.reportProgress,
                  responseType: Y.responseType || 'json',
                  withCredentials: Y.withCredentials,
                }));
            }
            const It = (0, j.of)(Fe).pipe(
              (0, ne.b)(Re => this.handler.handle(Re))
            );
            if (H instanceof Ae || 'events' === Y.observe) return It;
            const wt = It.pipe((0, A.h)(Re => Re instanceof Q));
            switch (Y.observe || 'body') {
              case 'body':
                switch (Fe.responseType) {
                  case 'arraybuffer':
                    return wt.pipe(
                      (0, K.U)(Re => {
                        if (
                          null !== Re.body &&
                          !(Re.body instanceof ArrayBuffer)
                        )
                          throw new Error('Response is not an ArrayBuffer.');
                        return Re.body;
                      })
                    );
                  case 'blob':
                    return wt.pipe(
                      (0, K.U)(Re => {
                        if (null !== Re.body && !(Re.body instanceof Blob))
                          throw new Error('Response is not a Blob.');
                        return Re.body;
                      })
                    );
                  case 'text':
                    return wt.pipe(
                      (0, K.U)(Re => {
                        if (null !== Re.body && 'string' != typeof Re.body)
                          throw new Error('Response is not a string.');
                        return Re.body;
                      })
                    );
                  default:
                    return wt.pipe((0, K.U)(Re => Re.body));
                }
              case 'response':
                return wt;
              default:
                throw new Error(
                  `Unreachable: unhandled observe type ${Y.observe}}`
                );
            }
          }
          delete(H, me = {}) {
            return this.request('DELETE', H, me);
          }
          get(H, me = {}) {
            return this.request('GET', H, me);
          }
          head(H, me = {}) {
            return this.request('HEAD', H, me);
          }
          jsonp(H, me) {
            return this.request('JSONP', H, {
              params: new $().append(me, 'JSONP_CALLBACK'),
              observe: 'body',
              responseType: 'json',
            });
          }
          options(H, me = {}) {
            return this.request('OPTIONS', H, me);
          }
          patch(H, me, Y = {}) {
            return this.request('PATCH', H, ce(Y, me));
          }
          post(H, me, Y = {}) {
            return this.request('POST', H, ce(Y, me));
          }
          put(H, me, Y = {}) {
            return this.request('PUT', H, ce(Y, me));
          }
        }
        return (
          (he.ɵfac = function (H) {
            return new (H || he)(_.LFG(q));
          }),
          (he.ɵprov = _.Yz7({ token: he, factory: he.ɵfac })),
          he
        );
      })();
      class Ne {
        constructor(U, H) {
          (this.next = U), (this.interceptor = H);
        }
        handle(U) {
          return this.interceptor.intercept(U, this.next);
        }
      }
      const st = new _.OlP('HTTP_INTERCEPTORS');
      let mt = (() => {
        class he {
          intercept(H, me) {
            return me.handle(H);
          }
        }
        return (
          (he.ɵfac = function (H) {
            return new (H || he)();
          }),
          (he.ɵprov = _.Yz7({ token: he, factory: he.ɵfac })),
          he
        );
      })();
      const Z = /^\)\]\}',?\n/;
      let Ye = (() => {
        class he {
          constructor(H) {
            this.xhrFactory = H;
          }
          handle(H) {
            if ('JSONP' === H.method)
              throw new Error(
                'Attempted to construct Jsonp request without HttpClientJsonpModule installed.'
              );
            return new X.y(me => {
              const Y = this.xhrFactory.build();
              if (
                (Y.open(H.method, H.urlWithParams),
                H.withCredentials && (Y.withCredentials = !0),
                H.headers.forEach((vt, ot) =>
                  Y.setRequestHeader(vt, ot.join(','))
                ),
                H.headers.has('Accept') ||
                  Y.setRequestHeader(
                    'Accept',
                    'application/json, text/plain, */*'
                  ),
                !H.headers.has('Content-Type'))
              ) {
                const vt = H.detectContentTypeHeader();
                null !== vt && Y.setRequestHeader('Content-Type', vt);
              }
              if (H.responseType) {
                const vt = H.responseType.toLowerCase();
                Y.responseType = 'json' !== vt ? vt : 'text';
              }
              const Fe = H.serializeBody();
              let It = null;
              const wt = () => {
                  if (null !== It) return It;
                  const vt = Y.statusText || 'OK',
                    ot = new re(Y.getAllResponseHeaders()),
                    k =
                      (function ke(he) {
                        return 'responseURL' in he && he.responseURL
                          ? he.responseURL
                          : /^X-Request-URL:/m.test(he.getAllResponseHeaders())
                          ? he.getResponseHeader('X-Request-URL')
                          : null;
                      })(Y) || H.url;
                  return (
                    (It = new G({
                      headers: ot,
                      status: Y.status,
                      statusText: vt,
                      url: k,
                    })),
                    It
                  );
                },
                Re = () => {
                  let {
                      headers: vt,
                      status: ot,
                      statusText: k,
                      url: ve,
                    } = wt(),
                    P = null;
                  204 !== ot &&
                    (P = typeof Y.response > 'u' ? Y.responseText : Y.response),
                    0 === ot && (ot = P ? 200 : 0);
                  let W = ot >= 200 && ot < 300;
                  if ('json' === H.responseType && 'string' == typeof P) {
                    const rt = P;
                    P = P.replace(Z, '');
                    try {
                      P = '' !== P ? JSON.parse(P) : null;
                    } catch (dt) {
                      (P = rt), W && ((W = !1), (P = { error: dt, text: P }));
                    }
                  }
                  W
                    ? (me.next(
                        new Q({
                          body: P,
                          headers: vt,
                          status: ot,
                          statusText: k,
                          url: ve || void 0,
                        })
                      ),
                      me.complete())
                    : me.error(
                        new B({
                          error: P,
                          headers: vt,
                          status: ot,
                          statusText: k,
                          url: ve || void 0,
                        })
                      );
                },
                Vt = vt => {
                  const { url: ot } = wt(),
                    k = new B({
                      error: vt,
                      status: Y.status || 0,
                      statusText: Y.statusText || 'Unknown Error',
                      url: ot || void 0,
                    });
                  me.error(k);
                };
              let Xe = !1;
              const un = vt => {
                  Xe || (me.next(wt()), (Xe = !0));
                  let ot = { type: te.DownloadProgress, loaded: vt.loaded };
                  vt.lengthComputable && (ot.total = vt.total),
                    'text' === H.responseType &&
                      !!Y.responseText &&
                      (ot.partialText = Y.responseText),
                    me.next(ot);
                },
                xt = vt => {
                  let ot = { type: te.UploadProgress, loaded: vt.loaded };
                  vt.lengthComputable && (ot.total = vt.total), me.next(ot);
                };
              return (
                Y.addEventListener('load', Re),
                Y.addEventListener('error', Vt),
                Y.addEventListener('timeout', Vt),
                Y.addEventListener('abort', Vt),
                H.reportProgress &&
                  (Y.addEventListener('progress', un),
                  null !== Fe &&
                    Y.upload &&
                    Y.upload.addEventListener('progress', xt)),
                Y.send(Fe),
                me.next({ type: te.Sent }),
                () => {
                  Y.removeEventListener('error', Vt),
                    Y.removeEventListener('abort', Vt),
                    Y.removeEventListener('load', Re),
                    Y.removeEventListener('timeout', Vt),
                    H.reportProgress &&
                      (Y.removeEventListener('progress', un),
                      null !== Fe &&
                        Y.upload &&
                        Y.upload.removeEventListener('progress', xt)),
                    Y.readyState !== Y.DONE && Y.abort();
                }
              );
            });
          }
        }
        return (
          (he.ɵfac = function (H) {
            return new (H || he)(_.LFG(s.JF));
          }),
          (he.ɵprov = _.Yz7({ token: he, factory: he.ɵfac })),
          he
        );
      })();
      const Ke = new _.OlP('XSRF_COOKIE_NAME'),
        gt = new _.OlP('XSRF_HEADER_NAME');
      class ut {}
      let St = (() => {
          class he {
            constructor(H, me, Y) {
              (this.doc = H),
                (this.platform = me),
                (this.cookieName = Y),
                (this.lastCookieString = ''),
                (this.lastToken = null),
                (this.parseCount = 0);
            }
            getToken() {
              if ('server' === this.platform) return null;
              const H = this.doc.cookie || '';
              return (
                H !== this.lastCookieString &&
                  (this.parseCount++,
                  (this.lastToken = (0, s.Mx)(H, this.cookieName)),
                  (this.lastCookieString = H)),
                this.lastToken
              );
            }
          }
          return (
            (he.ɵfac = function (H) {
              return new (H || he)(_.LFG(s.K0), _.LFG(_.Lbi), _.LFG(Ke));
            }),
            (he.ɵprov = _.Yz7({ token: he, factory: he.ɵfac })),
            he
          );
        })(),
        Ht = (() => {
          class he {
            constructor(H, me) {
              (this.tokenService = H), (this.headerName = me);
            }
            intercept(H, me) {
              const Y = H.url.toLowerCase();
              if (
                'GET' === H.method ||
                'HEAD' === H.method ||
                Y.startsWith('http://') ||
                Y.startsWith('https://')
              )
                return me.handle(H);
              const Fe = this.tokenService.getToken();
              return (
                null !== Fe &&
                  !H.headers.has(this.headerName) &&
                  (H = H.clone({
                    headers: H.headers.set(this.headerName, Fe),
                  })),
                me.handle(H)
              );
            }
          }
          return (
            (he.ɵfac = function (H) {
              return new (H || he)(_.LFG(ut), _.LFG(gt));
            }),
            (he.ɵprov = _.Yz7({ token: he, factory: he.ɵfac })),
            he
          );
        })(),
        tt = (() => {
          class he {
            constructor(H, me) {
              (this.backend = H), (this.injector = me), (this.chain = null);
            }
            handle(H) {
              if (null === this.chain) {
                const me = this.injector.get(st, []);
                this.chain = me.reduceRight(
                  (Y, Fe) => new Ne(Y, Fe),
                  this.backend
                );
              }
              return this.chain.handle(H);
            }
          }
          return (
            (he.ɵfac = function (H) {
              return new (H || he)(_.LFG(fe), _.LFG(_.zs3));
            }),
            (he.ɵprov = _.Yz7({ token: he, factory: he.ɵfac })),
            he
          );
        })(),
        kt = (() => {
          class he {
            static disable() {
              return {
                ngModule: he,
                providers: [{ provide: Ht, useClass: mt }],
              };
            }
            static withOptions(H = {}) {
              return {
                ngModule: he,
                providers: [
                  H.cookieName ? { provide: Ke, useValue: H.cookieName } : [],
                  H.headerName ? { provide: gt, useValue: H.headerName } : [],
                ],
              };
            }
          }
          return (
            (he.ɵfac = function (H) {
              return new (H || he)();
            }),
            (he.ɵmod = _.oAB({ type: he })),
            (he.ɵinj = _.cJS({
              providers: [
                Ht,
                { provide: st, useExisting: Ht, multi: !0 },
                { provide: ut, useClass: St },
                { provide: Ke, useValue: 'XSRF-TOKEN' },
                { provide: gt, useValue: 'X-XSRF-TOKEN' },
              ],
            })),
            he
          );
        })(),
        Fn = (() => {
          class he {}
          return (
            (he.ɵfac = function (H) {
              return new (H || he)();
            }),
            (he.ɵmod = _.oAB({ type: he })),
            (he.ɵinj = _.cJS({
              providers: [
                le,
                { provide: q, useClass: tt },
                Ye,
                { provide: fe, useExisting: Ye },
              ],
              imports: [
                kt.withOptions({
                  cookieName: 'XSRF-TOKEN',
                  headerName: 'X-XSRF-TOKEN',
                }),
              ],
            })),
            he
          );
        })();
    },
    4650: (et, ge, v) => {
      v.d(ge, {
        $8M: () => l,
        $Z: () => cp,
        AFp: () => T0,
        ALo: () => qh,
        AaK: () => q,
        B6R: () => P,
        BQk: () => Ic,
        CHM: () => mr,
        CRH: () => c0,
        CZH: () => $c,
        CqO: () => ff,
        D6c: () => E_,
        EJc: () => HC,
        EiD: () => od,
        EpF: () => df,
        F4k: () => pf,
        FYo: () => Uh,
        FiY: () => ls,
        G48: () => a_,
        Gf: () => r0,
        GfV: () => Bh,
        GkF: () => Al,
        Gpc: () => oe,
        JOm: () => Lo,
        JVY: () => Bg,
        Jf7: () => pd,
        KtG: () => ei,
        L6k: () => jg,
        LAX: () => $g,
        LFG: () => mn,
        LSH: () => Ca,
        Lbi: () => UC,
        MAs: () => uf,
        MGl: () => Tc,
        MMx: () => Yl,
        NdJ: () => Tl,
        O4$: () => Ki,
        OlP: () => Ze,
        Oqu: () => kl,
        PXZ: () => n_,
        Q6J: () => El,
        QGY: () => Il,
        QP$: () => Bi,
        Qsj: () => Ty,
        R0b: () => no,
        RDi: () => Or,
        Rgc: () => Ns,
        SBq: () => Is,
        Sil: () => zC,
        Suo: () => s0,
        TTD: () => Ko,
        TgZ: () => Oc,
        Tol: () => Nf,
        VKq: () => $h,
        W1O: () => d0,
        WD2: () => io,
        WLB: () => zh,
        XFs: () => tt,
        Xpm: () => ve,
        Y36: () => _i,
        YKP: () => Lh,
        YNc: () => lf,
        Yjl: () => wn,
        Yz7: () => Mt,
        ZZ4: () => xu,
        _Bn: () => Rh,
        _UZ: () => Pl,
        _Vd: () => As,
        _c5: () => M_,
        _uU: () => jf,
        aQg: () => bu,
        c2e: () => BC,
        cJS: () => Me,
        cg1: () => Ll,
        dDg: () => QC,
        deG: () => We,
        dqk: () => Y,
        eBb: () => Hg,
        eFA: () => $0,
        ekj: () => Nl,
        eoX: () => U0,
        g9A: () => F0,
        h0i: () => $r,
        hGG: () => w_,
        hM9: () => jy,
        hij: () => Fc,
        iGM: () => o0,
        ifc: () => me,
        ip1: () => I0,
        kL8: () => ch,
        kcU: () => qi,
        lG2: () => $t,
        lqb: () => bi,
        lri: () => L0,
        mCW: () => fs,
        n5z: () => ns,
        oAB: () => at,
        oJD: () => rd,
        oxw: () => xf,
        pB0: () => zg,
        q3G: () => xn,
        qLn: () => ms,
        qOj: () => vl,
        qZA: () => Pc,
        qzn: () => gi,
        rWj: () => V0,
        s9C: () => Fl,
        sBO: () => l_,
        sIi: () => vs,
        s_b: () => Bc,
        soG: () => zc,
        tBr: () => ac,
        tb: () => N0,
        tp0: () => us,
        uIk: () => wl,
        vHH: () => ee,
        vpe: () => $o,
        wAp: () => pt,
        xi3: () => Jh,
        xp6: () => Ud,
        yhl: () => Ku,
        ynx: () => Ac,
        z2F: () => Gc,
        z3N: () => tr,
        zSh: () => Ha,
        zs3: () => Vo,
      });
      var s = v(7579),
        _ = v(727),
        j = v(8306),
        X = v(6451),
        ne = v(3099);
      function A(e) {
        for (let t in e) if (e[t] === A) return t;
        throw Error('Could not find renamed property on target object.');
      }
      function K(e, t) {
        for (const n in t)
          t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]);
      }
      function q(e) {
        if ('string' == typeof e) return e;
        if (Array.isArray(e)) return '[' + e.map(q).join(', ') + ']';
        if (null == e) return '' + e;
        if (e.overriddenName) return `${e.overriddenName}`;
        if (e.name) return `${e.name}`;
        const t = e.toString();
        if (null == t) return '' + t;
        const n = t.indexOf('\n');
        return -1 === n ? t : t.substring(0, n);
      }
      function fe(e, t) {
        return null == e || '' === e
          ? null === t
            ? ''
            : t
          : null == t || '' === t
          ? e
          : e + ' ' + t;
      }
      const re = A({ __forward_ref__: A });
      function oe(e) {
        return (
          (e.__forward_ref__ = oe),
          (e.toString = function () {
            return q(this());
          }),
          e
        );
      }
      function ie(e) {
        return Ge(e) ? e() : e;
      }
      function Ge(e) {
        return (
          'function' == typeof e &&
          e.hasOwnProperty(re) &&
          e.__forward_ref__ === oe
        );
      }
      class ee extends Error {
        constructor(t, n) {
          super(
            (function Ee(e, t) {
              return `NG0${Math.abs(e)}${t ? ': ' + t.trim() : ''}`;
            })(t, n)
          ),
            (this.code = t);
        }
      }
      function $(e) {
        return 'string' == typeof e ? e : null == e ? '' : String(e);
      }
      function Ce(e, t) {
        throw new ee(-201, !1);
      }
      function yt(e, t) {
        null == e &&
          (function Ue(e, t, n, o) {
            throw new Error(
              `ASSERTION ERROR: ${e}` +
                (null == o ? '' : ` [Expected=> ${n} ${o} ${t} <=Actual]`)
            );
          })(t, e, null, '!=');
      }
      function Mt(e) {
        return {
          token: e.token,
          providedIn: e.providedIn || null,
          factory: e.factory,
          value: void 0,
        };
      }
      function Me(e) {
        return { providers: e.providers || [], imports: e.imports || [] };
      }
      function pe(e) {
        return Z(e, gt) || Z(e, St);
      }
      function Z(e, t) {
        return e.hasOwnProperty(t) ? e[t] : null;
      }
      function Ke(e) {
        return e && (e.hasOwnProperty(ut) || e.hasOwnProperty(Ht))
          ? e[ut]
          : null;
      }
      const gt = A({ ɵprov: A }),
        ut = A({ ɵinj: A }),
        St = A({ ngInjectableDef: A }),
        Ht = A({ ngInjectorDef: A });
      var tt = (() => (
        ((tt = tt || {})[(tt.Default = 0)] = 'Default'),
        (tt[(tt.Host = 1)] = 'Host'),
        (tt[(tt.Self = 2)] = 'Self'),
        (tt[(tt.SkipSelf = 4)] = 'SkipSelf'),
        (tt[(tt.Optional = 8)] = 'Optional'),
        tt
      ))();
      let ln;
      function kt(e) {
        const t = ln;
        return (ln = e), t;
      }
      function Fn(e, t, n) {
        const o = pe(e);
        return o && 'root' == o.providedIn
          ? void 0 === o.value
            ? (o.value = o.factory())
            : o.value
          : n & tt.Optional
          ? null
          : void 0 !== t
          ? t
          : void Ce(q(e));
      }
      function _n(e) {
        return { toString: e }.toString();
      }
      var he = (() => (
          ((he = he || {})[(he.OnPush = 0)] = 'OnPush'),
          (he[(he.Default = 1)] = 'Default'),
          he
        ))(),
        me = (() => {
          return (
            ((e = me || (me = {}))[(e.Emulated = 0)] = 'Emulated'),
            (e[(e.None = 2)] = 'None'),
            (e[(e.ShadowDom = 3)] = 'ShadowDom'),
            me
          );
          var e;
        })();
      const Y = (() =>
          (typeof globalThis < 'u' && globalThis) ||
          (typeof global < 'u' && global) ||
          (typeof window < 'u' && window) ||
          (typeof self < 'u' &&
            typeof WorkerGlobalScope < 'u' &&
            self instanceof WorkerGlobalScope &&
            self))(),
        wt = {},
        Re = [],
        Vt = A({ ɵcmp: A }),
        Xe = A({ ɵdir: A }),
        un = A({ ɵpipe: A }),
        xt = A({ ɵmod: A }),
        vt = A({ ɵfac: A }),
        ot = A({ __NG_ELEMENT_ID__: A });
      let k = 0;
      function ve(e) {
        return _n(() => {
          const n = !0 === e.standalone,
            o = {},
            r = {
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
              declaredInputs: o,
              inputs: null,
              outputs: null,
              exportAs: e.exportAs || null,
              onPush: e.changeDetection === he.OnPush,
              directiveDefs: null,
              pipeDefs: null,
              standalone: n,
              dependencies: (n && e.dependencies) || null,
              getStandaloneInjector: null,
              selectors: e.selectors || Re,
              viewQuery: e.viewQuery || null,
              features: e.features || null,
              data: e.data || {},
              encapsulation: e.encapsulation || me.Emulated,
              id: 'c' + k++,
              styles: e.styles || Re,
              _: null,
              setInput: null,
              schemas: e.schemas || null,
              tView: null,
            },
            i = e.dependencies,
            c = e.features;
          return (
            (r.inputs = Ct(e.inputs, o)),
            (r.outputs = Ct(e.outputs)),
            c && c.forEach(d => d(r)),
            (r.directiveDefs = i
              ? () => ('function' == typeof i ? i() : i).map(W).filter(rt)
              : null),
            (r.pipeDefs = i
              ? () => ('function' == typeof i ? i() : i).map(Wt).filter(rt)
              : null),
            r
          );
        });
      }
      function P(e, t, n) {
        const o = e.ɵcmp;
        (o.directiveDefs = () => ('function' == typeof t ? t() : t).map(W)),
          (o.pipeDefs = () => ('function' == typeof n ? n() : n).map(Wt));
      }
      function W(e) {
        return Pt(e) || Qt(e);
      }
      function rt(e) {
        return null !== e;
      }
      const dt = {};
      function at(e) {
        return _n(() => {
          const t = {
            type: e.type,
            bootstrap: e.bootstrap || Re,
            declarations: e.declarations || Re,
            imports: e.imports || Re,
            exports: e.exports || Re,
            transitiveCompileScopes: null,
            schemas: e.schemas || null,
            id: e.id || null,
          };
          return null != e.id && (dt[e.id] = e.type), t;
        });
      }
      function Ct(e, t) {
        if (null == e) return wt;
        const n = {};
        for (const o in e)
          if (e.hasOwnProperty(o)) {
            let r = e[o],
              i = r;
            Array.isArray(r) && ((i = r[1]), (r = r[0])),
              (n[r] = o),
              t && (t[r] = i);
          }
        return n;
      }
      const $t = ve;
      function wn(e) {
        return {
          type: e.type,
          name: e.name,
          factory: null,
          pure: !1 !== e.pure,
          standalone: !0 === e.standalone,
          onDestroy: e.type.prototype.ngOnDestroy || null,
        };
      }
      function Pt(e) {
        return e[Vt] || null;
      }
      function Qt(e) {
        return e[Xe] || null;
      }
      function Wt(e) {
        return e[un] || null;
      }
      function en(e, t) {
        const n = e[xt] || null;
        if (!n && !0 === t)
          throw new Error(`Type ${q(e)} does not have '\u0275mod' property.`);
        return n;
      }
      function nn(e) {
        return Array.isArray(e) && 'object' == typeof e[1];
      }
      function gn(e) {
        return Array.isArray(e) && !0 === e[1];
      }
      function zn(e) {
        return 0 != (8 & e.flags);
      }
      function on(e) {
        return 2 == (2 & e.flags);
      }
      function Ln(e) {
        return 1 == (1 & e.flags);
      }
      function vn(e) {
        return null !== e.template;
      }
      function sr(e) {
        return 0 != (256 & e[2]);
      }
      function qn(e, t) {
        return e.hasOwnProperty(vt) ? e[vt] : null;
      }
      class io {
        constructor(t, n, o) {
          (this.previousValue = t),
            (this.currentValue = n),
            (this.firstChange = o);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      function Ko() {
        return xo;
      }
      function xo(e) {
        return e.type.prototype.ngOnChanges && (e.setInput = bo), So;
      }
      function So() {
        const e = dr(this),
          t = e?.current;
        if (t) {
          const n = e.previous;
          if (n === wt) e.previous = t;
          else for (let o in t) n[o] = t[o];
          (e.current = null), this.ngOnChanges(t);
        }
      }
      function bo(e, t, n, o) {
        const r =
            dr(e) ||
            (function qo(e, t) {
              return (e[Jn] = t);
            })(e, { previous: wt, current: null }),
          i = r.current || (r.current = {}),
          c = r.previous,
          d = this.declaredInputs[n],
          p = c[d];
        (i[d] = new io(p && p.currentValue, t, c === wt)), (e[o] = t);
      }
      Ko.ngInherit = !0;
      const Jn = '__ngSimpleChanges__';
      function dr(e) {
        return e[Jn] || null;
      }
      let Jr;
      function Or(e) {
        Jr = e;
      }
      function hr() {
        return void 0 !== Jr ? Jr : typeof document < 'u' ? document : void 0;
      }
      function Lt(e) {
        return !!e.listen;
      }
      const Gn = { createRenderer: (e, t) => hr() };
      function Zt(e) {
        for (; Array.isArray(e); ) e = e[0];
        return e;
      }
      function x(e, t) {
        return Zt(t[e]);
      }
      function E(e, t) {
        return Zt(t[e.index]);
      }
      function ue(e, t) {
        return e.data[t];
      }
      function ye(e, t) {
        return e[t];
      }
      function ze(e, t) {
        const n = t[e];
        return nn(n) ? n : n[0];
      }
      function Ot(e) {
        return 4 == (4 & e[2]);
      }
      function Rt(e) {
        return 64 == (64 & e[2]);
      }
      function bt(e, t) {
        return null == t ? null : e[t];
      }
      function rn(e) {
        e[18] = 0;
      }
      function At(e, t) {
        e[5] += t;
        let n = e,
          o = e[3];
        for (
          ;
          null !== o && ((1 === t && 1 === n[5]) || (-1 === t && 0 === n[5]));

        )
          (o[5] += t), (n = o), (o = o[3]);
      }
      const qe = { lFrame: Us(null), bindingsEnabled: !0 };
      function No() {
        return qe.bindingsEnabled;
      }
      function _e() {
        return qe.lFrame.lView;
      }
      function Et() {
        return qe.lFrame.tView;
      }
      function mr(e) {
        return (qe.lFrame.contextLView = e), e[8];
      }
      function ei(e) {
        return (qe.lFrame.contextLView = null), e;
      }
      function Yt() {
        let e = ti();
        for (; null !== e && 64 === e.type; ) e = e.parent;
        return e;
      }
      function ti() {
        return qe.lFrame.currentTNode;
      }
      function g(e, t) {
        const n = qe.lFrame;
        (n.currentTNode = e), (n.isParent = t);
      }
      function h() {
        return qe.lFrame.isParent;
      }
      function O() {
        qe.lFrame.isParent = !1;
      }
      function zt() {
        const e = qe.lFrame;
        let t = e.bindingRootIndex;
        return (
          -1 === t && (t = e.bindingRootIndex = e.tView.bindingStartIndex), t
        );
      }
      function Vn() {
        return qe.lFrame.bindingIndex++;
      }
      function On(e) {
        const t = qe.lFrame,
          n = t.bindingIndex;
        return (t.bindingIndex = t.bindingIndex + e), n;
      }
      function Ir(e, t) {
        const n = qe.lFrame;
        (n.bindingIndex = n.bindingRootIndex = e), zi(t);
      }
      function zi(e) {
        qe.lFrame.currentDirectiveIndex = e;
      }
      function Ls() {
        return qe.lFrame.currentQueryIndex;
      }
      function Zi(e) {
        qe.lFrame.currentQueryIndex = e;
      }
      function Jc(e) {
        const t = e[1];
        return 2 === t.type ? t.declTNode : 1 === t.type ? e[6] : null;
      }
      function Vs(e, t, n) {
        if (n & tt.SkipSelf) {
          let r = t,
            i = e;
          for (
            ;
            !((r = r.parent),
            null !== r ||
              n & tt.Host ||
              ((r = Jc(i)), null === r || ((i = i[15]), 10 & r.type)));

          );
          if (null === r) return !1;
          (t = r), (e = i);
        }
        const o = (qe.lFrame = Wi());
        return (o.currentTNode = t), (o.lView = e), !0;
      }
      function ni(e) {
        const t = Wi(),
          n = e[1];
        (qe.lFrame = t),
          (t.currentTNode = n.firstChild),
          (t.lView = e),
          (t.tView = n),
          (t.contextLView = e),
          (t.bindingIndex = n.bindingStartIndex),
          (t.inI18n = !1);
      }
      function Wi() {
        const e = qe.lFrame,
          t = null === e ? null : e.child;
        return null === t ? Us(e) : t;
      }
      function Us(e) {
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
      function Yi() {
        const e = qe.lFrame;
        return (
          (qe.lFrame = e.parent), (e.currentTNode = null), (e.lView = null), e
        );
      }
      const Bs = Yi;
      function oi() {
        const e = Yi();
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
      function Pn() {
        return qe.lFrame.selectedIndex;
      }
      function yo(e) {
        qe.lFrame.selectedIndex = e;
      }
      function sn() {
        const e = qe.lFrame;
        return ue(e.tView, e.selectedIndex);
      }
      function Ki() {
        qe.lFrame.currentNamespace = 'svg';
      }
      function qi() {
        !(function Hs() {
          qe.lFrame.currentNamespace = null;
        })();
      }
      function xr(e, t) {
        for (let n = t.directiveStart, o = t.directiveEnd; n < o; n++) {
          const i = e.data[n].type.prototype,
            {
              ngAfterContentInit: c,
              ngAfterContentChecked: d,
              ngAfterViewInit: p,
              ngAfterViewChecked: C,
              ngOnDestroy: D,
            } = i;
          c && (e.contentHooks || (e.contentHooks = [])).push(-n, c),
            d &&
              ((e.contentHooks || (e.contentHooks = [])).push(n, d),
              (e.contentCheckHooks || (e.contentCheckHooks = [])).push(n, d)),
            p && (e.viewHooks || (e.viewHooks = [])).push(-n, p),
            C &&
              ((e.viewHooks || (e.viewHooks = [])).push(n, C),
              (e.viewCheckHooks || (e.viewCheckHooks = [])).push(n, C)),
            null != D && (e.destroyHooks || (e.destroyHooks = [])).push(n, D);
        }
      }
      function ri(e, t, n) {
        zs(e, t, 3, n);
      }
      function ii(e, t, n, o) {
        (3 & e[2]) === n && zs(e, t, n, o);
      }
      function Ji(e, t) {
        let n = e[2];
        (3 & n) === t && ((n &= 2047), (n += 1), (e[2] = n));
      }
      function zs(e, t, n, o) {
        const i = o ?? -1,
          c = t.length - 1;
        let d = 0;
        for (let p = void 0 !== o ? 65535 & e[18] : 0; p < c; p++)
          if ('number' == typeof t[p + 1]) {
            if (((d = t[p]), null != o && d >= o)) break;
          } else
            t[p] < 0 && (e[18] += 65536),
              (d < i || -1 == i) &&
                (ta(e, n, t, p), (e[18] = (4294901760 & e[18]) + p + 2)),
              p++;
      }
      function ta(e, t, n, o) {
        const r = n[o] < 0,
          i = n[o + 1],
          d = e[r ? -n[o] : n[o]];
        if (r) {
          if (e[2] >> 11 < e[18] >> 16 && (3 & e[2]) === t) {
            e[2] += 2048;
            try {
              i.call(d);
            } finally {
            }
          }
        } else
          try {
            i.call(d);
          } finally {
          }
      }
      class Xo {
        constructor(t, n, o) {
          (this.factory = t),
            (this.resolving = !1),
            (this.canSeeViewProviders = n),
            (this.injectImpl = o);
        }
      }
      function ci(e, t, n) {
        const o = Lt(e);
        let r = 0;
        for (; r < n.length; ) {
          const i = n[r];
          if ('number' == typeof i) {
            if (0 !== i) break;
            r++;
            const c = n[r++],
              d = n[r++],
              p = n[r++];
            o ? e.setAttribute(t, d, p, c) : t.setAttributeNS(c, d, p);
          } else {
            const c = i,
              d = n[++r];
            es(c)
              ? o && e.setProperty(t, c, d)
              : o
              ? e.setAttribute(t, c, d)
              : t.setAttribute(c, d),
              r++;
          }
        }
        return r;
      }
      function Gs(e) {
        return 3 === e || 4 === e || 6 === e;
      }
      function es(e) {
        return 64 === e.charCodeAt(0);
      }
      function ai(e, t) {
        if (null !== t && 0 !== t.length)
          if (null === e || 0 === e.length) e = t.slice();
          else {
            let n = -1;
            for (let o = 0; o < t.length; o++) {
              const r = t[o];
              'number' == typeof r
                ? (n = r)
                : 0 === n ||
                  Zs(e, n, r, null, -1 === n || 2 === n ? t[++o] : null);
            }
          }
        return e;
      }
      function Zs(e, t, n, o, r) {
        let i = 0,
          c = e.length;
        if (-1 === t) c = -1;
        else
          for (; i < e.length; ) {
            const d = e[i++];
            if ('number' == typeof d) {
              if (d === t) {
                c = -1;
                break;
              }
              if (d > t) {
                c = i - 1;
                break;
              }
            }
          }
        for (; i < e.length; ) {
          const d = e[i];
          if ('number' == typeof d) break;
          if (d === n) {
            if (null === o) return void (null !== r && (e[i + 1] = r));
            if (o === e[i + 1]) return void (e[i + 2] = r);
          }
          i++, null !== o && i++, null !== r && i++;
        }
        -1 !== c && (e.splice(c, 0, t), (i = c + 1)),
          e.splice(i++, 0, n),
          null !== o && e.splice(i++, 0, o),
          null !== r && e.splice(i++, 0, r);
      }
      function An(e) {
        return -1 !== e;
      }
      function br(e) {
        return 32767 & e;
      }
      function Ro(e, t) {
        let n = (function Ws(e) {
            return e >> 16;
          })(e),
          o = t;
        for (; n > 0; ) (o = o[15]), n--;
        return o;
      }
      let Sr = !0;
      function li(e) {
        const t = Sr;
        return (Sr = e), t;
      }
      let Ks = 0;
      const ao = {};
      function yr(e, t) {
        const n = Js(e, t);
        if (-1 !== n) return n;
        const o = t[1];
        o.firstCreatePass &&
          ((e.injectorIndex = t.length),
          Fr(o.data, e),
          Fr(t, null),
          Fr(o.blueprint, null));
        const r = lo(e, t),
          i = e.injectorIndex;
        if (An(r)) {
          const c = br(r),
            d = Ro(r, t),
            p = d[1].data;
          for (let C = 0; C < 8; C++) t[i + C] = d[c + C] | p[c + C];
        }
        return (t[i + 8] = r), i;
      }
      function Fr(e, t) {
        e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
      }
      function Js(e, t) {
        return -1 === e.injectorIndex ||
          (e.parent && e.parent.injectorIndex === e.injectorIndex) ||
          null === t[e.injectorIndex + 8]
          ? -1
          : e.injectorIndex;
      }
      function lo(e, t) {
        if (e.parent && -1 !== e.parent.injectorIndex)
          return e.parent.injectorIndex;
        let n = 0,
          o = null,
          r = t;
        for (; null !== r; ) {
          if (((o = u(r)), null === o)) return -1;
          if ((n++, (r = r[15]), -1 !== o.injectorIndex))
            return o.injectorIndex | (n << 16);
        }
        return -1;
      }
      function Nr(e, t, n) {
        !(function qs(e, t, n) {
          let o;
          'string' == typeof n
            ? (o = n.charCodeAt(0) || 0)
            : n.hasOwnProperty(ot) && (o = n[ot]),
            null == o && (o = n[ot] = Ks++);
          const r = 255 & o;
          t.data[e + (r >> 5)] |= 1 << r;
        })(e, t, n);
      }
      function Qs(e, t, n) {
        if (n & tt.Optional) return e;
        Ce();
      }
      function Xs(e, t, n, o) {
        if (
          (n & tt.Optional && void 0 === o && (o = null),
          0 == (n & (tt.Self | tt.Host)))
        ) {
          const r = e[9],
            i = kt(void 0);
          try {
            return r ? r.get(t, o, n & tt.Optional) : Fn(t, o, n & tt.Optional);
          } finally {
            kt(i);
          }
        }
        return Qs(o, 0, n);
      }
      function ec(e, t, n, o = tt.Default, r) {
        if (null !== e) {
          if (1024 & t[2]) {
            const c = (function Tu(e, t, n, o, r) {
              let i = e,
                c = t;
              for (
                ;
                null !== i && null !== c && 1024 & c[2] && !(256 & c[2]);

              ) {
                const d = tc(i, c, n, o | tt.Self, ao);
                if (d !== ao) return d;
                let p = i.parent;
                if (!p) {
                  const C = c[21];
                  if (C) {
                    const D = C.get(n, ao, o);
                    if (D !== ao) return D;
                  }
                  (p = u(c)), (c = c[15]);
                }
                i = p;
              }
              return r;
            })(e, t, n, o, ao);
            if (c !== ao) return c;
          }
          const i = tc(e, t, n, o, ao);
          if (i !== ao) return i;
        }
        return Xs(t, n, o, r);
      }
      function tc(e, t, n, o, r) {
        const i = (function sa(e) {
          if ('string' == typeof e) return e.charCodeAt(0) || 0;
          const t = e.hasOwnProperty(ot) ? e[ot] : void 0;
          return 'number' == typeof t ? (t >= 0 ? 255 & t : ca) : t;
        })(n);
        if ('function' == typeof i) {
          if (!Vs(t, e, o)) return o & tt.Host ? Qs(r, 0, o) : Xs(t, n, o, r);
          try {
            const c = i(o);
            if (null != c || o & tt.Optional) return c;
            Ce();
          } finally {
            Bs();
          }
        } else if ('number' == typeof i) {
          let c = null,
            d = Js(e, t),
            p = -1,
            C = o & tt.Host ? t[16][6] : null;
          for (
            (-1 === d || o & tt.SkipSelf) &&
            ((p = -1 === d ? lo(e, t) : t[d + 8]),
            -1 !== p && ui(o, !1)
              ? ((c = t[1]), (d = br(p)), (t = Ro(p, t)))
              : (d = -1));
            -1 !== d;

          ) {
            const D = t[1];
            if (nc(i, d, D.data)) {
              const I = ia(d, t, n, c, o, C);
              if (I !== ao) return I;
            }
            (p = t[d + 8]),
              -1 !== p && ui(o, t[1].data[d + 8] === C) && nc(i, d, t)
                ? ((c = D), (d = br(p)), (t = Ro(p, t)))
                : (d = -1);
          }
        }
        return r;
      }
      function ia(e, t, n, o, r, i) {
        const c = t[1],
          d = c.data[e + 8],
          D = Rr(
            d,
            c,
            n,
            null == o ? on(d) && Sr : o != c && 0 != (3 & d.type),
            r & tt.Host && i === d
          );
        return null !== D ? kr(t, c, D, d) : ao;
      }
      function Rr(e, t, n, o, r) {
        const i = e.providerIndexes,
          c = t.data,
          d = 1048575 & i,
          p = e.directiveStart,
          D = i >> 20,
          L = r ? d + D : e.directiveEnd;
        for (let J = o ? d : d + D; J < L; J++) {
          const be = c[J];
          if ((J < p && n === be) || (J >= p && be.type === n)) return J;
        }
        if (r) {
          const J = c[p];
          if (J && vn(J) && J.type === n) return p;
        }
        return null;
      }
      function kr(e, t, n, o) {
        let r = e[n];
        const i = t.data;
        if (
          (function na(e) {
            return e instanceof Xo;
          })(r)
        ) {
          const c = r;
          c.resolving &&
            (function $e(e, t) {
              const n = t ? `. Dependency path: ${t.join(' > ')} > ${e}` : '';
              throw new ee(
                -200,
                `Circular dependency in DI detected for ${e}${n}`
              );
            })(
              (function ae(e) {
                return 'function' == typeof e
                  ? e.name || e.toString()
                  : 'object' == typeof e &&
                    null != e &&
                    'function' == typeof e.type
                  ? e.type.name || e.type.toString()
                  : $(e);
              })(i[n])
            );
          const d = li(c.canSeeViewProviders);
          c.resolving = !0;
          const p = c.injectImpl ? kt(c.injectImpl) : null;
          Vs(e, o, tt.Default);
          try {
            (r = e[n] = c.factory(void 0, i, e, o)),
              t.firstCreatePass &&
                n >= o.directiveStart &&
                (function ea(e, t, n) {
                  const {
                    ngOnChanges: o,
                    ngOnInit: r,
                    ngDoCheck: i,
                  } = t.type.prototype;
                  if (o) {
                    const c = xo(t);
                    (n.preOrderHooks || (n.preOrderHooks = [])).push(e, c),
                      (
                        n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                      ).push(e, c);
                  }
                  r &&
                    (n.preOrderHooks || (n.preOrderHooks = [])).push(0 - e, r),
                    i &&
                      ((n.preOrderHooks || (n.preOrderHooks = [])).push(e, i),
                      (
                        n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                      ).push(e, i));
                })(n, i[n], t);
          } finally {
            null !== p && kt(p), li(d), (c.resolving = !1), Bs();
          }
        }
        return r;
      }
      function nc(e, t, n) {
        return !!(n[t + (e >> 5)] & (1 << e));
      }
      function ui(e, t) {
        return !(e & tt.Self || (e & tt.Host && t));
      }
      class Cr {
        constructor(t, n) {
          (this._tNode = t), (this._lView = n);
        }
        get(t, n, o) {
          return ec(this._tNode, this._lView, t, o, n);
        }
      }
      function ca() {
        return new Cr(Yt(), _e());
      }
      function ns(e) {
        return _n(() => {
          const t = e.prototype.constructor,
            n = t[vt] || os(t),
            o = Object.prototype;
          let r = Object.getPrototypeOf(e.prototype).constructor;
          for (; r && r !== o; ) {
            const i = r[vt] || os(r);
            if (i && i !== n) return i;
            r = Object.getPrototypeOf(r);
          }
          return i => new i();
        });
      }
      function os(e) {
        return Ge(e)
          ? () => {
              const t = os(ie(e));
              return t && t();
            }
          : qn(e);
      }
      function u(e) {
        const t = e[1],
          n = t.type;
        return 2 === n ? t.declTNode : 1 === n ? e[6] : null;
      }
      function l(e) {
        return (function ra(e, t) {
          if ('class' === t) return e.classes;
          if ('style' === t) return e.styles;
          const n = e.attrs;
          if (n) {
            const o = n.length;
            let r = 0;
            for (; r < o; ) {
              const i = n[r];
              if (Gs(i)) break;
              if (0 === i) r += 2;
              else if ('number' == typeof i)
                for (r++; r < o && 'string' == typeof n[r]; ) r++;
              else {
                if (i === t) return n[r + 1];
                r += 2;
              }
            }
          }
          return null;
        })(Yt(), e);
      }
      const f = '__parameters__';
      function F(e, t, n) {
        return _n(() => {
          const o = (function S(e) {
            return function (...n) {
              if (e) {
                const o = e(...n);
                for (const r in o) this[r] = o[r];
              }
            };
          })(t);
          function r(...i) {
            if (this instanceof r) return o.apply(this, i), this;
            const c = new r(...i);
            return (d.annotation = c), d;
            function d(p, C, D) {
              const I = p.hasOwnProperty(f)
                ? p[f]
                : Object.defineProperty(p, f, { value: [] })[f];
              for (; I.length <= D; ) I.push(null);
              return (I[D] = I[D] || []).push(c), p;
            }
          }
          return (
            n && (r.prototype = Object.create(n.prototype)),
            (r.prototype.ngMetadataName = e),
            (r.annotationCls = r),
            r
          );
        });
      }
      class Ze {
        constructor(t, n) {
          (this._desc = t),
            (this.ngMetadataName = 'InjectionToken'),
            (this.ɵprov = void 0),
            'number' == typeof n
              ? (this.__NG_ELEMENT_ID__ = n)
              : void 0 !== n &&
                (this.ɵprov = Mt({
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
      const We = new Ze('AnalyzeForEntryComponents');
      function Xn(e, t) {
        void 0 === t && (t = e);
        for (let n = 0; n < e.length; n++) {
          let o = e[n];
          Array.isArray(o)
            ? (t === e && (t = e.slice(0, n)), Xn(o, t))
            : t !== e && t.push(o);
        }
        return t;
      }
      function er(e, t) {
        e.forEach(n => (Array.isArray(n) ? er(n, t) : t(n)));
      }
      function Fu(e, t, n) {
        t >= e.length ? e.push(n) : e.splice(t, 0, n);
      }
      function rc(e, t) {
        return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
      }
      function eo(e, t, n) {
        let o = pi(e, t);
        return (
          o >= 0
            ? (e[1 | o] = n)
            : ((o = ~o),
              (function lg(e, t, n, o) {
                let r = e.length;
                if (r == t) e.push(n, o);
                else if (1 === r) e.push(o, e[0]), (e[0] = n);
                else {
                  for (r--, e.push(e[r - 1], e[r]); r > t; )
                    (e[r] = e[r - 2]), r--;
                  (e[t] = n), (e[t + 1] = o);
                }
              })(e, o, t, n)),
          o
        );
      }
      function ua(e, t) {
        const n = pi(e, t);
        if (n >= 0) return e[1 | n];
      }
      function pi(e, t) {
        return (function ku(e, t, n) {
          let o = 0,
            r = e.length >> n;
          for (; r !== o; ) {
            const i = o + ((r - o) >> 1),
              c = e[i << n];
            if (t === c) return i << n;
            c > t ? (r = i) : (o = i + 1);
          }
          return ~(r << n);
        })(e, t, 1);
      }
      const ss = {},
        pa = '__NG_DI_FLAG__',
        sc = 'ngTempTokenPath',
        xg = /\n/gm,
        Lu = '__source';
      let cs;
      function cc(e) {
        const t = cs;
        return (cs = e), t;
      }
      function yg(e, t = tt.Default) {
        if (void 0 === cs) throw new ee(-203, !1);
        return null === cs
          ? Fn(e, void 0, t)
          : cs.get(e, t & tt.Optional ? null : void 0, t);
      }
      function mn(e, t = tt.Default) {
        return (
          (function Dt() {
            return ln;
          })() || yg
        )(ie(e), t);
      }
      function fa(e) {
        const t = [];
        for (let n = 0; n < e.length; n++) {
          const o = ie(e[n]);
          if (Array.isArray(o)) {
            if (0 === o.length) throw new ee(900, !1);
            let r,
              i = tt.Default;
            for (let c = 0; c < o.length; c++) {
              const d = o[c],
                p = _g(d);
              'number' == typeof p
                ? -1 === p
                  ? (r = d.token)
                  : (i |= p)
                : (r = d);
            }
            t.push(mn(r, i));
          } else t.push(mn(o));
        }
        return t;
      }
      function as(e, t) {
        return (e[pa] = t), (e.prototype[pa] = t), e;
      }
      function _g(e) {
        return e[pa];
      }
      const ac = as(
          F('Inject', e => ({ token: e })),
          -1
        ),
        ls = as(F('Optional'), 8),
        us = as(F('SkipSelf'), 4);
      let dc, pc;
      function hi(e) {
        return (
          (function ha() {
            if (void 0 === dc && ((dc = null), Y.trustedTypes))
              try {
                dc = Y.trustedTypes.createPolicy('angular', {
                  createHTML: e => e,
                  createScript: e => e,
                  createScriptURL: e => e,
                });
              } catch {}
            return dc;
          })()?.createHTML(e) || e
        );
      }
      function Zu(e) {
        return (
          (function ga() {
            if (void 0 === pc && ((pc = null), Y.trustedTypes))
              try {
                pc = Y.trustedTypes.createPolicy('angular#unsafe-bypass', {
                  createHTML: e => e,
                  createScript: e => e,
                  createScriptURL: e => e,
                });
              } catch {}
            return pc;
          })()?.createHTML(e) || e
        );
      }
      class Lr {
        constructor(t) {
          this.changingThisBreaksApplicationSecurity = t;
        }
        toString() {
          return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`;
        }
      }
      class Rg extends Lr {
        getTypeName() {
          return 'HTML';
        }
      }
      class kg extends Lr {
        getTypeName() {
          return 'Style';
        }
      }
      class Lg extends Lr {
        getTypeName() {
          return 'Script';
        }
      }
      class Vg extends Lr {
        getTypeName() {
          return 'URL';
        }
      }
      class Ug extends Lr {
        getTypeName() {
          return 'ResourceURL';
        }
      }
      function tr(e) {
        return e instanceof Lr ? e.changingThisBreaksApplicationSecurity : e;
      }
      function gi(e, t) {
        const n = Ku(e);
        if (null != n && n !== t) {
          if ('ResourceURL' === n && 'URL' === t) return !0;
          throw new Error(
            `Required a safe ${t}, got a ${n} (see https://g.co/ng/security#xss)`
          );
        }
        return n === t;
      }
      function Ku(e) {
        return (e instanceof Lr && e.getTypeName()) || null;
      }
      function Bg(e) {
        return new Rg(e);
      }
      function jg(e) {
        return new kg(e);
      }
      function Hg(e) {
        return new Lg(e);
      }
      function $g(e) {
        return new Vg(e);
      }
      function zg(e) {
        return new Ug(e);
      }
      class Gg {
        constructor(t) {
          this.inertDocumentHelper = t;
        }
        getInertBodyElement(t) {
          t = '<body><remove></remove>' + t;
          try {
            const n = new window.DOMParser().parseFromString(
              hi(t),
              'text/html'
            ).body;
            return null === n
              ? this.inertDocumentHelper.getInertBodyElement(t)
              : (n.removeChild(n.firstChild), n);
          } catch {
            return null;
          }
        }
      }
      class Zg {
        constructor(t) {
          if (
            ((this.defaultDoc = t),
            (this.inertDocument =
              this.defaultDoc.implementation.createHTMLDocument(
                'sanitization-inert'
              )),
            null == this.inertDocument.body)
          ) {
            const n = this.inertDocument.createElement('html');
            this.inertDocument.appendChild(n);
            const o = this.inertDocument.createElement('body');
            n.appendChild(o);
          }
        }
        getInertBodyElement(t) {
          const n = this.inertDocument.createElement('template');
          if ('content' in n) return (n.innerHTML = hi(t)), n;
          const o = this.inertDocument.createElement('body');
          return (
            (o.innerHTML = hi(t)),
            this.defaultDoc.documentMode && this.stripCustomNsAttrs(o),
            o
          );
        }
        stripCustomNsAttrs(t) {
          const n = t.attributes;
          for (let r = n.length - 1; 0 < r; r--) {
            const c = n.item(r).name;
            ('xmlns:ns1' === c || 0 === c.indexOf('ns1:')) &&
              t.removeAttribute(c);
          }
          let o = t.firstChild;
          for (; o; )
            o.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(o),
              (o = o.nextSibling);
        }
      }
      const Yg =
          /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi,
        Kg =
          /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
      function fs(e) {
        return (e = String(e)).match(Yg) || e.match(Kg) ? e : 'unsafe:' + e;
      }
      function ko(e) {
        const t = {};
        for (const n of e.split(',')) t[n] = !0;
        return t;
      }
      function hs(...e) {
        const t = {};
        for (const n of e)
          for (const o in n) n.hasOwnProperty(o) && (t[o] = !0);
        return t;
      }
      const Qu = ko('area,br,col,hr,img,wbr'),
        Xu = ko('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr'),
        ed = ko('rp,rt'),
        ma = hs(
          Qu,
          hs(
            Xu,
            ko(
              'address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul'
            )
          ),
          hs(
            ed,
            ko(
              'a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video'
            )
          ),
          hs(ed, Xu)
        ),
        xa = ko('background,cite,href,itemtype,longdesc,poster,src,xlink:href'),
        ba = ko('srcset'),
        td = hs(
          xa,
          ba,
          ko(
            'abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width'
          ),
          ko(
            'aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext'
          )
        ),
        qg = ko('script,style,template');
      class Jg {
        constructor() {
          (this.sanitizedSomething = !1), (this.buf = []);
        }
        sanitizeChildren(t) {
          let n = t.firstChild,
            o = !0;
          for (; n; )
            if (
              (n.nodeType === Node.ELEMENT_NODE
                ? (o = this.startElement(n))
                : n.nodeType === Node.TEXT_NODE
                ? this.chars(n.nodeValue)
                : (this.sanitizedSomething = !0),
              o && n.firstChild)
            )
              n = n.firstChild;
            else
              for (; n; ) {
                n.nodeType === Node.ELEMENT_NODE && this.endElement(n);
                let r = this.checkClobberedElement(n, n.nextSibling);
                if (r) {
                  n = r;
                  break;
                }
                n = this.checkClobberedElement(n, n.parentNode);
              }
          return this.buf.join('');
        }
        startElement(t) {
          const n = t.nodeName.toLowerCase();
          if (!ma.hasOwnProperty(n))
            return (this.sanitizedSomething = !0), !qg.hasOwnProperty(n);
          this.buf.push('<'), this.buf.push(n);
          const o = t.attributes;
          for (let r = 0; r < o.length; r++) {
            const i = o.item(r),
              c = i.name,
              d = c.toLowerCase();
            if (!td.hasOwnProperty(d)) {
              this.sanitizedSomething = !0;
              continue;
            }
            let p = i.value;
            xa[d] && (p = fs(p)),
              ba[d] &&
                ((e = p),
                (p = (e = String(e))
                  .split(',')
                  .map(t => fs(t.trim()))
                  .join(', '))),
              this.buf.push(' ', c, '="', nd(p), '"');
          }
          var e;
          return this.buf.push('>'), !0;
        }
        endElement(t) {
          const n = t.nodeName.toLowerCase();
          ma.hasOwnProperty(n) &&
            !Qu.hasOwnProperty(n) &&
            (this.buf.push('</'), this.buf.push(n), this.buf.push('>'));
        }
        chars(t) {
          this.buf.push(nd(t));
        }
        checkClobberedElement(t, n) {
          if (
            n &&
            (t.compareDocumentPosition(n) &
              Node.DOCUMENT_POSITION_CONTAINED_BY) ===
              Node.DOCUMENT_POSITION_CONTAINED_BY
          )
            throw new Error(
              `Failed to sanitize html because the element is clobbered: ${t.outerHTML}`
            );
          return n;
        }
      }
      const Qg = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        Xg = /([^\#-~ |!])/g;
      function nd(e) {
        return e
          .replace(/&/g, '&amp;')
          .replace(Qg, function (t) {
            return (
              '&#' +
              (1024 * (t.charCodeAt(0) - 55296) +
                (t.charCodeAt(1) - 56320) +
                65536) +
              ';'
            );
          })
          .replace(Xg, function (t) {
            return '&#' + t.charCodeAt(0) + ';';
          })
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
      }
      let fc;
      function od(e, t) {
        let n = null;
        try {
          fc =
            fc ||
            (function qu(e) {
              const t = new Zg(e);
              return (function Wg() {
                try {
                  return !!new window.DOMParser().parseFromString(
                    hi(''),
                    'text/html'
                  );
                } catch {
                  return !1;
                }
              })()
                ? new Gg(t)
                : t;
            })(e);
          let o = t ? String(t) : '';
          n = fc.getInertBodyElement(o);
          let r = 5,
            i = o;
          do {
            if (0 === r)
              throw new Error(
                'Failed to sanitize html because the input is unstable'
              );
            r--, (o = i), (i = n.innerHTML), (n = fc.getInertBodyElement(o));
          } while (o !== i);
          return hi(new Jg().sanitizeChildren(ya(n) || n));
        } finally {
          if (n) {
            const o = ya(n) || n;
            for (; o.firstChild; ) o.removeChild(o.firstChild);
          }
        }
      }
      function ya(e) {
        return 'content' in e &&
          (function em(e) {
            return (
              e.nodeType === Node.ELEMENT_NODE && 'TEMPLATE' === e.nodeName
            );
          })(e)
          ? e.content
          : null;
      }
      var xn = (() => (
        ((xn = xn || {})[(xn.NONE = 0)] = 'NONE'),
        (xn[(xn.HTML = 1)] = 'HTML'),
        (xn[(xn.STYLE = 2)] = 'STYLE'),
        (xn[(xn.SCRIPT = 3)] = 'SCRIPT'),
        (xn[(xn.URL = 4)] = 'URL'),
        (xn[(xn.RESOURCE_URL = 5)] = 'RESOURCE_URL'),
        xn
      ))();
      function rd(e) {
        const t = gs();
        return t
          ? Zu(t.sanitize(xn.HTML, e) || '')
          : gi(e, 'HTML')
          ? Zu(tr(e))
          : od(hr(), $(e));
      }
      function Ca(e) {
        const t = gs();
        return t
          ? t.sanitize(xn.URL, e) || ''
          : gi(e, 'URL')
          ? tr(e)
          : fs($(e));
      }
      function gs() {
        const e = _e();
        return e && e[12];
      }
      function va(e) {
        return e.ngOriginalError;
      }
      class ms {
        constructor() {
          this._console = console;
        }
        handleError(t) {
          const n = this._findOriginalError(t);
          this._console.error('ERROR', t),
            n && this._console.error('ORIGINAL ERROR', n);
        }
        _findOriginalError(t) {
          let n = t && va(t);
          for (; n && va(n); ) n = va(n);
          return n || null;
        }
      }
      const Da = new Map();
      let gm = 0;
      const wa = '__ngContext__';
      function Tn(e, t) {
        nn(t)
          ? ((e[wa] = t[20]),
            (function xm(e) {
              Da.set(e[20], e);
            })(t))
          : (e[wa] = t);
      }
      function xs(e) {
        const t = e[wa];
        return 'number' == typeof t
          ? (function cd(e) {
              return Da.get(e) || null;
            })(t)
          : t || null;
      }
      function Ea(e) {
        const t = xs(e);
        return t ? (nn(t) ? t : t.lView) : null;
      }
      const Em = (() =>
        (
          (typeof requestAnimationFrame < 'u' && requestAnimationFrame) ||
          setTimeout
        ).bind(Y))();
      function pd(e) {
        return e.ownerDocument.defaultView;
      }
      function nr(e) {
        return e instanceof Function ? e() : e;
      }
      var Lo = (() => (
        ((Lo = Lo || {})[(Lo.Important = 1)] = 'Important'),
        (Lo[(Lo.DashCase = 2)] = 'DashCase'),
        Lo
      ))();
      function Pa(e, t) {
        return undefined(e, t);
      }
      function bs(e) {
        const t = e[3];
        return gn(t) ? t[3] : t;
      }
      function Aa(e) {
        return xd(e[13]);
      }
      function Ia(e) {
        return xd(e[4]);
      }
      function xd(e) {
        for (; null !== e && !gn(e); ) e = e[4];
        return e;
      }
      function xi(e, t, n, o, r) {
        if (null != o) {
          let i,
            c = !1;
          gn(o) ? (i = o) : nn(o) && ((c = !0), (o = o[0]));
          const d = Zt(o);
          0 === e && null !== n
            ? null == r
              ? Dd(t, n, d)
              : Vr(t, n, d, r || null, !0)
            : 1 === e && null !== n
            ? Vr(t, n, d, r || null, !0)
            : 2 === e
            ? (function Td(e, t, n) {
                const o = hc(e, t);
                o &&
                  (function Bm(e, t, n, o) {
                    Lt(e) ? e.removeChild(t, n, o) : t.removeChild(n);
                  })(e, o, t, n);
              })(t, d, c)
            : 3 === e && t.destroyNode(d),
            null != i &&
              (function $m(e, t, n, o, r) {
                const i = n[7];
                i !== Zt(n) && xi(t, e, o, i, r);
                for (let d = 10; d < n.length; d++) {
                  const p = n[d];
                  ys(p[1], p, e, t, o, i);
                }
              })(t, e, i, n, r);
        }
      }
      function Sa(e, t, n) {
        if (Lt(e)) return e.createElement(t, n);
        {
          const o =
            null !== n
              ? (function Er(e) {
                  const t = e.toLowerCase();
                  return 'svg' === t
                    ? 'http://www.w3.org/2000/svg'
                    : 'math' === t
                    ? 'http://www.w3.org/1998/MathML/'
                    : null;
                })(n)
              : null;
          return null === o ? e.createElement(t) : e.createElementNS(o, t);
        }
      }
      function yd(e, t) {
        const n = e[9],
          o = n.indexOf(t),
          r = t[3];
        512 & t[2] && ((t[2] &= -513), At(r, -1)), n.splice(o, 1);
      }
      function Fa(e, t) {
        if (e.length <= 10) return;
        const n = 10 + t,
          o = e[n];
        if (o) {
          const r = o[17];
          null !== r && r !== e && yd(r, o), t > 0 && (e[n - 1][4] = o[4]);
          const i = rc(e, 10 + t);
          !(function Sm(e, t) {
            ys(e, t, t[11], 2, null, null), (t[0] = null), (t[6] = null);
          })(o[1], o);
          const c = i[19];
          null !== c && c.detachView(i[1]),
            (o[3] = null),
            (o[4] = null),
            (o[2] &= -65);
        }
        return o;
      }
      function Cd(e, t) {
        if (!(128 & t[2])) {
          const n = t[11];
          Lt(n) && n.destroyNode && ys(e, t, n, 3, null, null),
            (function Rm(e) {
              let t = e[13];
              if (!t) return Na(e[1], e);
              for (; t; ) {
                let n = null;
                if (nn(t)) n = t[13];
                else {
                  const o = t[10];
                  o && (n = o);
                }
                if (!n) {
                  for (; t && !t[4] && t !== e; )
                    nn(t) && Na(t[1], t), (t = t[3]);
                  null === t && (t = e), nn(t) && Na(t[1], t), (n = t && t[4]);
                }
                t = n;
              }
            })(t);
        }
      }
      function Na(e, t) {
        if (!(128 & t[2])) {
          (t[2] &= -65),
            (t[2] |= 128),
            (function Um(e, t) {
              let n;
              if (null != e && null != (n = e.destroyHooks))
                for (let o = 0; o < n.length; o += 2) {
                  const r = t[n[o]];
                  if (!(r instanceof Xo)) {
                    const i = n[o + 1];
                    if (Array.isArray(i))
                      for (let c = 0; c < i.length; c += 2) {
                        const d = r[i[c]],
                          p = i[c + 1];
                        try {
                          p.call(d);
                        } finally {
                        }
                      }
                    else
                      try {
                        i.call(r);
                      } finally {
                      }
                  }
                }
            })(e, t),
            (function Vm(e, t) {
              const n = e.cleanup,
                o = t[7];
              let r = -1;
              if (null !== n)
                for (let i = 0; i < n.length - 1; i += 2)
                  if ('string' == typeof n[i]) {
                    const c = n[i + 1],
                      d = 'function' == typeof c ? c(t) : Zt(t[c]),
                      p = o[(r = n[i + 2])],
                      C = n[i + 3];
                    'boolean' == typeof C
                      ? d.removeEventListener(n[i], p, C)
                      : C >= 0
                      ? o[(r = C)]()
                      : o[(r = -C)].unsubscribe(),
                      (i += 2);
                  } else {
                    const c = o[(r = n[i + 1])];
                    n[i].call(c);
                  }
              if (null !== o) {
                for (let i = r + 1; i < o.length; i++) o[i]();
                t[7] = null;
              }
            })(e, t),
            1 === t[1].type && Lt(t[11]) && t[11].destroy();
          const n = t[17];
          if (null !== n && gn(t[3])) {
            n !== t[3] && yd(n, t);
            const o = t[19];
            null !== o && o.detachView(e);
          }
          !(function bm(e) {
            Da.delete(e[20]);
          })(t);
        }
      }
      function _d(e, t, n) {
        return (function vd(e, t, n) {
          let o = t;
          for (; null !== o && 40 & o.type; ) o = (t = o).parent;
          if (null === o) return n[0];
          if (2 & o.flags) {
            const r = e.data[o.directiveStart].encapsulation;
            if (r === me.None || r === me.Emulated) return null;
          }
          return E(o, n);
        })(e, t.parent, n);
      }
      function Vr(e, t, n, o, r) {
        Lt(e)
          ? e.insertBefore(t, n, o, r)
          : (wd(t) ? t.content : t).insertBefore(n, o, r);
      }
      function Dd(e, t, n) {
        Lt(e) ? e.appendChild(t, n) : (wd(t) ? t.content : t).appendChild(n);
      }
      function Md(e, t, n, o, r) {
        null !== o ? Vr(e, t, n, o, r) : Dd(e, t, n);
      }
      function wd(e) {
        return 'TEMPLATE' === e.tagName && void 0 !== e.content;
      }
      function hc(e, t) {
        return Lt(e) ? e.parentNode(t) : t.parentNode;
      }
      let Pd = function Od(e, t, n) {
        return 40 & e.type ? E(e, n) : null;
      };
      function gc(e, t, n, o) {
        const r = _d(e, o, t),
          i = t[11],
          d = (function Ed(e, t, n) {
            return Pd(e, t, n);
          })(o.parent || t[6], o, t);
        if (null != r)
          if (Array.isArray(n))
            for (let p = 0; p < n.length; p++) Md(i, r, n[p], d, !1);
          else Md(i, r, n, d, !1);
      }
      function mc(e, t) {
        if (null !== t) {
          const n = t.type;
          if (3 & n) return E(t, e);
          if (4 & n) return ka(-1, e[t.index]);
          if (8 & n) {
            const o = t.child;
            if (null !== o) return mc(e, o);
            {
              const r = e[t.index];
              return gn(r) ? ka(-1, r) : Zt(r);
            }
          }
          if (32 & n) return Pa(t, e)() || Zt(e[t.index]);
          {
            const o = Id(e, t);
            return null !== o
              ? Array.isArray(o)
                ? o[0]
                : mc(bs(e[16]), o)
              : mc(e, t.next);
          }
        }
        return null;
      }
      function Id(e, t) {
        return null !== t ? e[16][6].projection[t.projection] : null;
      }
      function ka(e, t) {
        const n = 10 + e + 1;
        if (n < t.length) {
          const o = t[n],
            r = o[1].firstChild;
          if (null !== r) return mc(o, r);
        }
        return t[7];
      }
      function La(e, t, n, o, r, i, c) {
        for (; null != n; ) {
          const d = o[n.index],
            p = n.type;
          if (
            (c && 0 === t && (d && Tn(Zt(d), o), (n.flags |= 4)),
            64 != (64 & n.flags))
          )
            if (8 & p) La(e, t, n.child, o, r, i, !1), xi(t, e, r, d, i);
            else if (32 & p) {
              const C = Pa(n, o);
              let D;
              for (; (D = C()); ) xi(t, e, r, D, i);
              xi(t, e, r, d, i);
            } else 16 & p ? Sd(e, t, o, n, r, i) : xi(t, e, r, d, i);
          n = c ? n.projectionNext : n.next;
        }
      }
      function ys(e, t, n, o, r, i) {
        La(n, o, e.firstChild, t, r, i, !1);
      }
      function Sd(e, t, n, o, r, i) {
        const c = n[16],
          p = c[6].projection[o.projection];
        if (Array.isArray(p))
          for (let C = 0; C < p.length; C++) xi(t, e, r, p[C], i);
        else La(e, t, p, c[3], r, i, !0);
      }
      function Fd(e, t, n) {
        Lt(e) ? e.setAttribute(t, 'style', n) : (t.style.cssText = n);
      }
      function Va(e, t, n) {
        Lt(e)
          ? '' === n
            ? e.removeAttribute(t, 'class')
            : e.setAttribute(t, 'class', n)
          : (t.className = n);
      }
      function Nd(e, t, n) {
        let o = e.length;
        for (;;) {
          const r = e.indexOf(t, n);
          if (-1 === r) return r;
          if (0 === r || e.charCodeAt(r - 1) <= 32) {
            const i = t.length;
            if (r + i === o || e.charCodeAt(r + i) <= 32) return r;
          }
          n = r + 1;
        }
      }
      const Rd = 'ng-template';
      function Gm(e, t, n) {
        let o = 0;
        for (; o < e.length; ) {
          let r = e[o++];
          if (n && 'class' === r) {
            if (((r = e[o]), -1 !== Nd(r.toLowerCase(), t, 0))) return !0;
          } else if (1 === r) {
            for (; o < e.length && 'string' == typeof (r = e[o++]); )
              if (r.toLowerCase() === t) return !0;
            return !1;
          }
        }
        return !1;
      }
      function kd(e) {
        return 4 === e.type && e.value !== Rd;
      }
      function Zm(e, t, n) {
        return t === (4 !== e.type || n ? e.value : Rd);
      }
      function Wm(e, t, n) {
        let o = 4;
        const r = e.attrs || [],
          i = (function qm(e) {
            for (let t = 0; t < e.length; t++) if (Gs(e[t])) return t;
            return e.length;
          })(r);
        let c = !1;
        for (let d = 0; d < t.length; d++) {
          const p = t[d];
          if ('number' != typeof p) {
            if (!c)
              if (4 & o) {
                if (
                  ((o = 2 | (1 & o)),
                  ('' !== p && !Zm(e, p, n)) || ('' === p && 1 === t.length))
                ) {
                  if (vo(o)) return !1;
                  c = !0;
                }
              } else {
                const C = 8 & o ? p : t[++d];
                if (8 & o && null !== e.attrs) {
                  if (!Gm(e.attrs, C, n)) {
                    if (vo(o)) return !1;
                    c = !0;
                  }
                  continue;
                }
                const I = Ym(8 & o ? 'class' : p, r, kd(e), n);
                if (-1 === I) {
                  if (vo(o)) return !1;
                  c = !0;
                  continue;
                }
                if ('' !== C) {
                  let L;
                  L = I > i ? '' : r[I + 1].toLowerCase();
                  const J = 8 & o ? L : null;
                  if ((J && -1 !== Nd(J, C, 0)) || (2 & o && C !== L)) {
                    if (vo(o)) return !1;
                    c = !0;
                  }
                }
              }
          } else {
            if (!c && !vo(o) && !vo(p)) return !1;
            if (c && vo(p)) continue;
            (c = !1), (o = p | (1 & o));
          }
        }
        return vo(o) || c;
      }
      function vo(e) {
        return 0 == (1 & e);
      }
      function Ym(e, t, n, o) {
        if (null === t) return -1;
        let r = 0;
        if (o || !n) {
          let i = !1;
          for (; r < t.length; ) {
            const c = t[r];
            if (c === e) return r;
            if (3 === c || 6 === c) i = !0;
            else {
              if (1 === c || 2 === c) {
                let d = t[++r];
                for (; 'string' == typeof d; ) d = t[++r];
                continue;
              }
              if (4 === c) break;
              if (0 === c) {
                r += 4;
                continue;
              }
            }
            r += i ? 1 : 2;
          }
          return -1;
        }
        return (function Jm(e, t) {
          let n = e.indexOf(4);
          if (n > -1)
            for (n++; n < e.length; ) {
              const o = e[n];
              if ('number' == typeof o) return -1;
              if (o === t) return n;
              n++;
            }
          return -1;
        })(t, e);
      }
      function Ld(e, t, n = !1) {
        for (let o = 0; o < t.length; o++) if (Wm(e, t[o], n)) return !0;
        return !1;
      }
      function Vd(e, t) {
        return e ? ':not(' + t.trim() + ')' : t;
      }
      function Xm(e) {
        let t = e[0],
          n = 1,
          o = 2,
          r = '',
          i = !1;
        for (; n < e.length; ) {
          let c = e[n];
          if ('string' == typeof c)
            if (2 & o) {
              const d = e[++n];
              r += '[' + c + (d.length > 0 ? '="' + d + '"' : '') + ']';
            } else 8 & o ? (r += '.' + c) : 4 & o && (r += ' ' + c);
          else
            '' !== r && !vo(c) && ((t += Vd(i, r)), (r = '')),
              (o = c),
              (i = i || !vo(o));
          n++;
        }
        return '' !== r && (t += Vd(i, r)), t;
      }
      const _t = {};
      function Ud(e) {
        Bd(Et(), _e(), Pn() + e, !1);
      }
      function Bd(e, t, n, o) {
        if (!o)
          if (3 == (3 & t[2])) {
            const i = e.preOrderCheckHooks;
            null !== i && ri(t, i, n);
          } else {
            const i = e.preOrderHooks;
            null !== i && ii(t, i, 0, n);
          }
        yo(n);
      }
      const zd = new Ze('ENVIRONMENT_INITIALIZER'),
        Gd = new Ze('INJECTOR_DEF_TYPES');
      function cx(...e) {
        return { ɵproviders: Zd(0, e) };
      }
      function Zd(e, ...t) {
        const n = [],
          o = new Set();
        let r;
        return (
          er(t, i => {
            const c = i;
            Ua(c, n, [], o) && (r || (r = []), r.push(c));
          }),
          void 0 !== r && Wd(r, n),
          n
        );
      }
      function Wd(e, t) {
        for (let n = 0; n < e.length; n++) {
          const { providers: r } = e[n];
          er(r, i => {
            t.push(i);
          });
        }
      }
      function Ua(e, t, n, o) {
        if (!(e = ie(e))) return !1;
        let r = null,
          i = Ke(e);
        const c = !i && Pt(e);
        if (i || c) {
          if (c && !c.standalone) return !1;
          r = e;
        } else {
          const p = e.ngModule;
          if (((i = Ke(p)), !i)) return !1;
          r = p;
        }
        const d = o.has(r);
        if (c) {
          if (d) return !1;
          if ((o.add(r), c.dependencies)) {
            const p =
              'function' == typeof c.dependencies
                ? c.dependencies()
                : c.dependencies;
            for (const C of p) Ua(C, t, n, o);
          }
        } else {
          if (!i) return !1;
          {
            if (null != i.imports && !d) {
              let C;
              o.add(r);
              try {
                er(i.imports, D => {
                  Ua(D, t, n, o) && (C || (C = []), C.push(D));
                });
              } finally {
              }
              void 0 !== C && Wd(C, t);
            }
            if (!d) {
              const C = qn(r) || (() => new r());
              t.push(
                { provide: r, useFactory: C, deps: Re },
                { provide: Gd, useValue: r, multi: !0 },
                { provide: zd, useValue: () => mn(r), multi: !0 }
              );
            }
            const p = i.providers;
            null == p ||
              d ||
              er(p, D => {
                t.push(D);
              });
          }
        }
        return r !== e && void 0 !== e.providers;
      }
      const ax = A({ provide: String, useValue: A });
      function Ba(e) {
        return null !== e && 'object' == typeof e && ax in e;
      }
      function Ur(e) {
        return 'function' == typeof e;
      }
      const ja = new Ze('INJECTOR', -1);
      class qd {
        get(t, n = ss) {
          if (n === ss) {
            const o = new Error(`NullInjectorError: No provider for ${q(t)}!`);
            throw ((o.name = 'NullInjectorError'), o);
          }
          return n;
        }
      }
      const Ha = new Ze('Set Injector scope.'),
        xc = {},
        ux = {};
      let $a;
      function za() {
        return void 0 === $a && ($a = new qd()), $a;
      }
      class bi {}
      class Jd extends bi {
        constructor(t, n, o, r) {
          super(),
            (this.parent = n),
            (this.source = o),
            (this.scopes = r),
            (this.records = new Map()),
            (this._ngOnDestroyHooks = new Set()),
            (this._onDestroyHooks = []),
            (this._destroyed = !1),
            Za(t, c => this.processProvider(c)),
            this.records.set(ja, yi(void 0, this)),
            r.has('environment') && this.records.set(bi, yi(void 0, this));
          const i = this.records.get(Ha);
          null != i && 'string' == typeof i.value && this.scopes.add(i.value),
            (this.injectorDefTypes = new Set(this.get(Gd.multi, Re, tt.Self)));
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
        get(t, n = ss, o = tt.Default) {
          this.assertNotDestroyed();
          const r = cc(this),
            i = kt(void 0);
          try {
            if (!(o & tt.SkipSelf)) {
              let d = this.records.get(t);
              if (void 0 === d) {
                const p =
                  (function gx(e) {
                    return (
                      'function' == typeof e ||
                      ('object' == typeof e && e instanceof Ze)
                    );
                  })(t) && pe(t);
                (d = p && this.injectableDefInScope(p) ? yi(Ga(t), xc) : null),
                  this.records.set(t, d);
              }
              if (null != d) return this.hydrate(t, d);
            }
            return (o & tt.Self ? za() : this.parent).get(
              t,
              (n = o & tt.Optional && n === ss ? null : n)
            );
          } catch (c) {
            if ('NullInjectorError' === c.name) {
              if (((c[sc] = c[sc] || []).unshift(q(t)), r)) throw c;
              return (function vg(e, t, n, o) {
                const r = e[sc];
                throw (
                  (t[Lu] && r.unshift(t[Lu]),
                  (e.message = (function Dg(e, t, n, o = null) {
                    e =
                      e && '\n' === e.charAt(0) && '\u0275' == e.charAt(1)
                        ? e.slice(2)
                        : e;
                    let r = q(t);
                    if (Array.isArray(t)) r = t.map(q).join(' -> ');
                    else if ('object' == typeof t) {
                      let i = [];
                      for (let c in t)
                        if (t.hasOwnProperty(c)) {
                          let d = t[c];
                          i.push(
                            c +
                              ':' +
                              ('string' == typeof d ? JSON.stringify(d) : q(d))
                          );
                        }
                      r = `{${i.join(', ')}}`;
                    }
                    return `${n}${o ? '(' + o + ')' : ''}[${r}]: ${e.replace(
                      xg,
                      '\n  '
                    )}`;
                  })('\n' + e.message, r, n, o)),
                  (e.ngTokenPath = r),
                  (e[sc] = null),
                  e)
                );
              })(c, t, 'R3InjectorError', this.source);
            }
            throw c;
          } finally {
            kt(i), cc(r);
          }
        }
        resolveInjectorInitializers() {
          const t = cc(this),
            n = kt(void 0);
          try {
            const o = this.get(zd.multi, Re, tt.Self);
            for (const r of o) r();
          } finally {
            cc(t), kt(n);
          }
        }
        toString() {
          const t = [],
            n = this.records;
          for (const o of n.keys()) t.push(q(o));
          return `R3Injector[${t.join(', ')}]`;
        }
        assertNotDestroyed() {
          if (this._destroyed) throw new ee(205, !1);
        }
        processProvider(t) {
          let n = Ur((t = ie(t))) ? t : ie(t && t.provide);
          const o = (function px(e) {
            return Ba(e) ? yi(void 0, e.useValue) : yi(Qd(e), xc);
          })(t);
          if (Ur(t) || !0 !== t.multi) this.records.get(n);
          else {
            let r = this.records.get(n);
            r ||
              ((r = yi(void 0, xc, !0)),
              (r.factory = () => fa(r.multi)),
              this.records.set(n, r)),
              (n = t),
              r.multi.push(t);
          }
          this.records.set(n, o);
        }
        hydrate(t, n) {
          return (
            n.value === xc && ((n.value = ux), (n.value = n.factory())),
            'object' == typeof n.value &&
              n.value &&
              (function hx(e) {
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
          const n = ie(t.providedIn);
          return 'string' == typeof n
            ? 'any' === n || this.scopes.has(n)
            : this.injectorDefTypes.has(n);
        }
      }
      function Ga(e) {
        const t = pe(e),
          n = null !== t ? t.factory : qn(e);
        if (null !== n) return n;
        if (e instanceof Ze) throw new ee(204, !1);
        if (e instanceof Function)
          return (function dx(e) {
            const t = e.length;
            if (t > 0)
              throw (
                ((function is(e, t) {
                  const n = [];
                  for (let o = 0; o < e; o++) n.push(t);
                  return n;
                })(t, '?'),
                new ee(204, !1))
              );
            const n = (function ke(e) {
              const t = e && (e[gt] || e[St]);
              if (t) {
                const n = (function Ye(e) {
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
        throw new ee(204, !1);
      }
      function Qd(e, t, n) {
        let o;
        if (Ur(e)) {
          const r = ie(e);
          return qn(r) || Ga(r);
        }
        if (Ba(e)) o = () => ie(e.useValue);
        else if (
          (function Kd(e) {
            return !(!e || !e.useFactory);
          })(e)
        )
          o = () => e.useFactory(...fa(e.deps || []));
        else if (
          (function Yd(e) {
            return !(!e || !e.useExisting);
          })(e)
        )
          o = () => mn(ie(e.useExisting));
        else {
          const r = ie(e && (e.useClass || e.provide));
          if (
            !(function fx(e) {
              return !!e.deps;
            })(e)
          )
            return qn(r) || Ga(r);
          o = () => new r(...fa(e.deps));
        }
        return o;
      }
      function yi(e, t, n = !1) {
        return { factory: e, value: t, multi: n ? [] : void 0 };
      }
      function mx(e) {
        return !!e.ɵproviders;
      }
      function Za(e, t) {
        for (const n of e)
          Array.isArray(n) ? Za(n, t) : mx(n) ? Za(n.ɵproviders, t) : t(n);
      }
      function Xd(e, t = null, n = null, o) {
        const r = ep(e, t, n, o);
        return r.resolveInjectorInitializers(), r;
      }
      function ep(e, t = null, n = null, o, r = new Set()) {
        const i = [n || Re, cx(e)];
        return (
          (o = o || ('object' == typeof e ? void 0 : q(e))),
          new Jd(i, t || za(), o || null, r)
        );
      }
      let Vo = (() => {
        class e {
          static create(n, o) {
            if (Array.isArray(n)) return Xd({ name: '' }, o, n, '');
            {
              const r = n.name ?? '';
              return Xd({ name: r }, n.parent, n.providers, r);
            }
          }
        }
        return (
          (e.THROW_IF_NOT_FOUND = ss),
          (e.NULL = new qd()),
          (e.ɵprov = Mt({
            token: e,
            providedIn: 'any',
            factory: () => mn(ja),
          })),
          (e.__NG_ELEMENT_ID__ = -1),
          e
        );
      })();
      function _i(e, t = tt.Default) {
        const n = _e();
        return null === n ? mn(e, t) : ec(Yt(), n, ie(e), t);
      }
      function cp() {
        throw new Error('invalid');
      }
      function yc(e, t) {
        return (e << 17) | (t << 2);
      }
      function Do(e) {
        return (e >> 17) & 32767;
      }
      function el(e) {
        return 2 | e;
      }
      function or(e) {
        return (131068 & e) >> 2;
      }
      function tl(e, t) {
        return (-131069 & e) | (t << 2);
      }
      function nl(e) {
        return 1 | e;
      }
      function _p(e, t) {
        const n = e.contentQueries;
        if (null !== n)
          for (let o = 0; o < n.length; o += 2) {
            const r = n[o],
              i = n[o + 1];
            if (-1 !== i) {
              const c = e.data[i];
              Zi(r), c.contentQueries(2, t[i], i);
            }
          }
      }
      function Cs(e, t, n, o, r, i, c, d, p, C, D) {
        const I = t.blueprint.slice();
        return (
          (I[0] = r),
          (I[2] = 76 | o),
          (null !== D || (e && 1024 & e[2])) && (I[2] |= 1024),
          rn(I),
          (I[3] = I[15] = e),
          (I[8] = n),
          (I[10] = c || (e && e[10])),
          (I[11] = d || (e && e[11])),
          (I[12] = p || (e && e[12]) || null),
          (I[9] = C || (e && e[9]) || null),
          (I[6] = i),
          (I[20] = (function mm() {
            return gm++;
          })()),
          (I[21] = D),
          (I[16] = 2 == t.type ? e[16] : I),
          I
        );
      }
      function vi(e, t, n, o, r) {
        let i = e.data[t];
        if (null === i)
          (i = (function dl(e, t, n, o, r) {
            const i = ti(),
              c = h(),
              p = (e.data[t] = (function Yx(e, t, n, o, r, i) {
                return {
                  type: n,
                  index: o,
                  insertBeforeIndex: null,
                  injectorIndex: t ? t.injectorIndex : -1,
                  directiveStart: -1,
                  directiveEnd: -1,
                  directiveStylingLast: -1,
                  propertyBindings: null,
                  flags: 0,
                  providerIndexes: 0,
                  value: r,
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
              })(0, c ? i : i && i.parent, n, t, o, r));
            return (
              null === e.firstChild && (e.firstChild = p),
              null !== i &&
                (c
                  ? null == i.child && null !== p.parent && (i.child = p)
                  : null === i.next && (i.next = p)),
              p
            );
          })(e, t, n, o, r)),
            (function Kc() {
              return qe.lFrame.inI18n;
            })() && (i.flags |= 64);
        else if (64 & i.type) {
          (i.type = n), (i.value = o), (i.attrs = r);
          const c = (function b() {
            const e = qe.lFrame,
              t = e.currentTNode;
            return e.isParent ? t : t.parent;
          })();
          i.injectorIndex = null === c ? -1 : c.injectorIndex;
        }
        return g(i, !0), i;
      }
      function Di(e, t, n, o) {
        if (0 === n) return -1;
        const r = t.length;
        for (let i = 0; i < n; i++)
          t.push(o), e.blueprint.push(o), e.data.push(null);
        return r;
      }
      function _s(e, t, n) {
        ni(t);
        try {
          const o = e.viewQuery;
          null !== o && Cl(1, o, n);
          const r = e.template;
          null !== r && vp(e, t, r, 1, n),
            e.firstCreatePass && (e.firstCreatePass = !1),
            e.staticContentQueries && _p(e, t),
            e.staticViewQueries && Cl(2, e.viewQuery, n);
          const i = e.components;
          null !== i &&
            (function Gx(e, t) {
              for (let n = 0; n < t.length; n++) p1(e, t[n]);
            })(t, i);
        } catch (o) {
          throw (
            (e.firstCreatePass &&
              ((e.incompleteFirstPass = !0), (e.firstCreatePass = !1)),
            o)
          );
        } finally {
          (t[2] &= -5), oi();
        }
      }
      function Mi(e, t, n, o) {
        const r = t[2];
        if (128 != (128 & r)) {
          ni(t);
          try {
            rn(t),
              (function Qo(e) {
                return (qe.lFrame.bindingIndex = e);
              })(e.bindingStartIndex),
              null !== n && vp(e, t, n, 2, o);
            const c = 3 == (3 & r);
            if (c) {
              const C = e.preOrderCheckHooks;
              null !== C && ri(t, C, null);
            } else {
              const C = e.preOrderHooks;
              null !== C && ii(t, C, 0, null), Ji(t, 0);
            }
            if (
              ((function u1(e) {
                for (let t = Aa(e); null !== t; t = Ia(t)) {
                  if (!t[2]) continue;
                  const n = t[9];
                  for (let o = 0; o < n.length; o++) {
                    const r = n[o],
                      i = r[3];
                    0 == (512 & r[2]) && At(i, 1), (r[2] |= 512);
                  }
                }
              })(t),
              (function l1(e) {
                for (let t = Aa(e); null !== t; t = Ia(t))
                  for (let n = 10; n < t.length; n++) {
                    const o = t[n],
                      r = o[1];
                    Rt(o) && Mi(r, o, r.template, o[8]);
                  }
              })(t),
              null !== e.contentQueries && _p(e, t),
              c)
            ) {
              const C = e.contentCheckHooks;
              null !== C && ri(t, C);
            } else {
              const C = e.contentHooks;
              null !== C && ii(t, C, 1), Ji(t, 1);
            }
            !(function $x(e, t) {
              const n = e.hostBindingOpCodes;
              if (null !== n)
                try {
                  for (let o = 0; o < n.length; o++) {
                    const r = n[o];
                    if (r < 0) yo(~r);
                    else {
                      const i = r,
                        c = n[++o],
                        d = n[++o];
                      Ir(c, i), d(2, t[i]);
                    }
                  }
                } finally {
                  yo(-1);
                }
            })(e, t);
            const d = e.components;
            null !== d &&
              (function zx(e, t) {
                for (let n = 0; n < t.length; n++) d1(e, t[n]);
              })(t, d);
            const p = e.viewQuery;
            if ((null !== p && Cl(2, p, o), c)) {
              const C = e.viewCheckHooks;
              null !== C && ri(t, C);
            } else {
              const C = e.viewHooks;
              null !== C && ii(t, C, 2), Ji(t, 2);
            }
            !0 === e.firstUpdatePass && (e.firstUpdatePass = !1),
              (t[2] &= -41),
              512 & t[2] && ((t[2] &= -513), At(t[3], -1));
          } finally {
            oi();
          }
        }
      }
      function Zx(e, t, n, o) {
        const r = t[10],
          c = Ot(t);
        try {
          !c && r.begin && r.begin(), c && _s(e, t, o), Mi(e, t, n, o);
        } finally {
          !c && r.end && r.end();
        }
      }
      function vp(e, t, n, o, r) {
        const i = Pn(),
          c = 2 & o;
        try {
          yo(-1), c && t.length > 22 && Bd(e, t, 22, !1), n(o, r);
        } finally {
          yo(i);
        }
      }
      function Dp(e, t, n) {
        if (zn(t)) {
          const r = t.directiveEnd;
          for (let i = t.directiveStart; i < r; i++) {
            const c = e.data[i];
            c.contentQueries && c.contentQueries(1, n[i], i);
          }
        }
      }
      function pl(e, t, n) {
        !No() ||
          ((function t1(e, t, n, o) {
            const r = n.directiveStart,
              i = n.directiveEnd;
            e.firstCreatePass || yr(n, t), Tn(o, t);
            const c = n.initialInputs;
            for (let d = r; d < i; d++) {
              const p = e.data[d],
                C = vn(p);
              C && s1(t, n, p);
              const D = kr(t, e, d, n);
              Tn(D, t),
                null !== c && c1(0, d - r, D, p, 0, c),
                C && (ze(n.index, t)[8] = D);
            }
          })(e, t, n, E(n, t)),
          128 == (128 & n.flags) &&
            (function n1(e, t, n) {
              const o = n.directiveStart,
                r = n.directiveEnd,
                i = n.index,
                c = (function qc() {
                  return qe.lFrame.currentDirectiveIndex;
                })();
              try {
                yo(i);
                for (let d = o; d < r; d++) {
                  const p = e.data[d],
                    C = t[d];
                  zi(d),
                    (null !== p.hostBindings ||
                      0 !== p.hostVars ||
                      null !== p.hostAttrs) &&
                      Ip(p, C);
                }
              } finally {
                yo(-1), zi(c);
              }
            })(e, t, n));
      }
      function fl(e, t, n = E) {
        const o = t.localNames;
        if (null !== o) {
          let r = t.index + 1;
          for (let i = 0; i < o.length; i += 2) {
            const c = o[i + 1],
              d = -1 === c ? n(t, e) : e[c];
            e[r++] = d;
          }
        }
      }
      function Mp(e) {
        const t = e.tView;
        return null === t || t.incompleteFirstPass
          ? (e.tView = vc(
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
      function vc(e, t, n, o, r, i, c, d, p, C) {
        const D = 22 + o,
          I = D + r,
          L = (function Wx(e, t) {
            const n = [];
            for (let o = 0; o < t; o++) n.push(o < e ? null : _t);
            return n;
          })(D, I),
          J = 'function' == typeof C ? C() : C;
        return (L[1] = {
          type: e,
          blueprint: L,
          template: n,
          queries: null,
          viewQuery: d,
          declTNode: t,
          data: L.slice().fill(null, D),
          bindingStartIndex: D,
          expandoStartIndex: I,
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
          pipeRegistry: 'function' == typeof c ? c() : c,
          firstChild: null,
          schemas: p,
          consts: J,
          incompleteFirstPass: !1,
        });
      }
      function Op(e, t, n, o) {
        const r = kp(t);
        null === n
          ? r.push(o)
          : (r.push(n), e.firstCreatePass && Lp(e).push(o, r.length - 1));
      }
      function Pp(e, t, n) {
        for (let o in e)
          if (e.hasOwnProperty(o)) {
            const r = e[o];
            (n = null === n ? {} : n).hasOwnProperty(o)
              ? n[o].push(t, r)
              : (n[o] = [t, r]);
          }
        return n;
      }
      function to(e, t, n, o, r, i, c, d) {
        const p = E(t, n);
        let D,
          C = t.inputs;
        !d && null != C && (D = C[o])
          ? (Bp(e, n, D, o, r),
            on(t) &&
              (function Jx(e, t) {
                const n = ze(t, e);
                16 & n[2] || (n[2] |= 32);
              })(n, t.index))
          : 3 & t.type &&
            ((o = (function qx(e) {
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
            })(o)),
            (r = null != c ? c(r, t.value || '', o) : r),
            Lt(i)
              ? i.setProperty(p, o, r)
              : es(o) || (p.setProperty ? p.setProperty(o, r) : (p[o] = r)));
      }
      function hl(e, t, n, o) {
        let r = !1;
        if (No()) {
          const i = (function o1(e, t, n) {
              const o = e.directiveRegistry;
              let r = null;
              if (o)
                for (let i = 0; i < o.length; i++) {
                  const c = o[i];
                  Ld(n, c.selectors, !1) &&
                    (r || (r = []),
                    Nr(yr(n, t), e, c.type),
                    vn(c) ? (Tp(e, n), r.unshift(c)) : r.push(c));
                }
              return r;
            })(e, t, n),
            c = null === o ? null : { '': -1 };
          if (null !== i) {
            (r = !0), Sp(n, e.data.length, i.length);
            for (let D = 0; D < i.length; D++) {
              const I = i[D];
              I.providersResolver && I.providersResolver(I);
            }
            let d = !1,
              p = !1,
              C = Di(e, t, i.length, null);
            for (let D = 0; D < i.length; D++) {
              const I = i[D];
              (n.mergedAttrs = ai(n.mergedAttrs, I.hostAttrs)),
                Fp(e, n, t, C, I),
                i1(C, I, c),
                null !== I.contentQueries && (n.flags |= 8),
                (null !== I.hostBindings ||
                  null !== I.hostAttrs ||
                  0 !== I.hostVars) &&
                  (n.flags |= 128);
              const L = I.type.prototype;
              !d &&
                (L.ngOnChanges || L.ngOnInit || L.ngDoCheck) &&
                ((e.preOrderHooks || (e.preOrderHooks = [])).push(n.index),
                (d = !0)),
                !p &&
                  (L.ngOnChanges || L.ngDoCheck) &&
                  ((e.preOrderCheckHooks || (e.preOrderCheckHooks = [])).push(
                    n.index
                  ),
                  (p = !0)),
                C++;
            }
            !(function Kx(e, t) {
              const o = t.directiveEnd,
                r = e.data,
                i = t.attrs,
                c = [];
              let d = null,
                p = null;
              for (let C = t.directiveStart; C < o; C++) {
                const D = r[C],
                  I = D.inputs,
                  L = null === i || kd(t) ? null : a1(I, i);
                c.push(L), (d = Pp(I, C, d)), (p = Pp(D.outputs, C, p));
              }
              null !== d &&
                (d.hasOwnProperty('class') && (t.flags |= 16),
                d.hasOwnProperty('style') && (t.flags |= 32)),
                (t.initialInputs = c),
                (t.inputs = d),
                (t.outputs = p);
            })(e, n);
          }
          c &&
            (function r1(e, t, n) {
              if (t) {
                const o = (e.localNames = []);
                for (let r = 0; r < t.length; r += 2) {
                  const i = n[t[r + 1]];
                  if (null == i) throw new ee(-301, !1);
                  o.push(t[r], i);
                }
              }
            })(n, o, c);
        }
        return (n.mergedAttrs = ai(n.mergedAttrs, n.attrs)), r;
      }
      function Ap(e, t, n, o, r, i) {
        const c = i.hostBindings;
        if (c) {
          let d = e.hostBindingOpCodes;
          null === d && (d = e.hostBindingOpCodes = []);
          const p = ~t.index;
          (function e1(e) {
            let t = e.length;
            for (; t > 0; ) {
              const n = e[--t];
              if ('number' == typeof n && n < 0) return n;
            }
            return 0;
          })(d) != p && d.push(p),
            d.push(o, r, c);
        }
      }
      function Ip(e, t) {
        null !== e.hostBindings && e.hostBindings(1, t);
      }
      function Tp(e, t) {
        (t.flags |= 2), (e.components || (e.components = [])).push(t.index);
      }
      function i1(e, t, n) {
        if (n) {
          if (t.exportAs)
            for (let o = 0; o < t.exportAs.length; o++) n[t.exportAs[o]] = e;
          vn(t) && (n[''] = e);
        }
      }
      function Sp(e, t, n) {
        (e.flags |= 1),
          (e.directiveStart = t),
          (e.directiveEnd = t + n),
          (e.providerIndexes = t);
      }
      function Fp(e, t, n, o, r) {
        e.data[o] = r;
        const i = r.factory || (r.factory = qn(r.type)),
          c = new Xo(i, vn(r), _i);
        (e.blueprint[o] = c),
          (n[o] = c),
          Ap(e, t, 0, o, Di(e, n, r.hostVars, _t), r);
      }
      function s1(e, t, n) {
        const o = E(t, e),
          r = Mp(n),
          i = e[10],
          c = Dc(
            e,
            Cs(
              e,
              r,
              null,
              n.onPush ? 32 : 16,
              o,
              t,
              i,
              i.createRenderer(o, n),
              null,
              null,
              null
            )
          );
        e[t.index] = c;
      }
      function Uo(e, t, n, o, r, i) {
        const c = E(e, t);
        !(function gl(e, t, n, o, r, i, c) {
          if (null == i)
            Lt(e) ? e.removeAttribute(t, r, n) : t.removeAttribute(r);
          else {
            const d = null == c ? $(i) : c(i, o || '', r);
            Lt(e)
              ? e.setAttribute(t, r, d, n)
              : n
              ? t.setAttributeNS(n, r, d)
              : t.setAttribute(r, d);
          }
        })(t[11], c, i, e.value, n, o, r);
      }
      function c1(e, t, n, o, r, i) {
        const c = i[t];
        if (null !== c) {
          const d = o.setInput;
          for (let p = 0; p < c.length; ) {
            const C = c[p++],
              D = c[p++],
              I = c[p++];
            null !== d ? o.setInput(n, I, C, D) : (n[D] = I);
          }
        }
      }
      function a1(e, t) {
        let n = null,
          o = 0;
        for (; o < t.length; ) {
          const r = t[o];
          if (0 !== r)
            if (5 !== r) {
              if ('number' == typeof r) break;
              e.hasOwnProperty(r) &&
                (null === n && (n = []), n.push(r, e[r], t[o + 1])),
                (o += 2);
            } else o += 2;
          else o += 4;
        }
        return n;
      }
      function Np(e, t, n, o) {
        return new Array(e, !0, !1, t, null, 0, o, n, null, null);
      }
      function d1(e, t) {
        const n = ze(t, e);
        if (Rt(n)) {
          const o = n[1];
          48 & n[2] ? Mi(o, n, o.template, n[8]) : n[5] > 0 && ml(n);
        }
      }
      function ml(e) {
        for (let o = Aa(e); null !== o; o = Ia(o))
          for (let r = 10; r < o.length; r++) {
            const i = o[r];
            if (512 & i[2]) {
              const c = i[1];
              Mi(c, i, c.template, i[8]);
            } else i[5] > 0 && ml(i);
          }
        const n = e[1].components;
        if (null !== n)
          for (let o = 0; o < n.length; o++) {
            const r = ze(n[o], e);
            Rt(r) && r[5] > 0 && ml(r);
          }
      }
      function p1(e, t) {
        const n = ze(t, e),
          o = n[1];
        (function f1(e, t) {
          for (let n = t.length; n < e.blueprint.length; n++)
            t.push(e.blueprint[n]);
        })(o, n),
          _s(o, n, n[8]);
      }
      function Dc(e, t) {
        return e[13] ? (e[14][4] = t) : (e[13] = t), (e[14] = t), t;
      }
      function xl(e) {
        for (; e; ) {
          e[2] |= 32;
          const t = bs(e);
          if (sr(e) && !t) return e;
          e = t;
        }
        return null;
      }
      function Rp(e) {
        !(function bl(e) {
          for (let t = 0; t < e.components.length; t++) {
            const n = e.components[t],
              o = Ea(n);
            if (null !== o) {
              const r = o[1];
              Zx(r, o, r.template, n);
            }
          }
        })(e[8]);
      }
      function Cl(e, t, n) {
        Zi(0), t(e, n);
      }
      const g1 = (() => Promise.resolve(null))();
      function kp(e) {
        return e[7] || (e[7] = []);
      }
      function Lp(e) {
        return e.cleanup || (e.cleanup = []);
      }
      function Up(e, t) {
        const n = e[9],
          o = n ? n.get(ms, null) : null;
        o && o.handleError(t);
      }
      function Bp(e, t, n, o, r) {
        for (let i = 0; i < n.length; ) {
          const c = n[i++],
            d = n[i++],
            p = t[c],
            C = e.data[c];
          null !== C.setInput ? C.setInput(p, r, o, d) : (p[d] = r);
        }
      }
      function rr(e, t, n) {
        const o = x(t, e);
        !(function bd(e, t, n) {
          Lt(e) ? e.setValue(t, n) : (t.textContent = n);
        })(e[11], o, n);
      }
      function Mc(e, t, n) {
        let o = n ? e.styles : null,
          r = n ? e.classes : null,
          i = 0;
        if (null !== t)
          for (let c = 0; c < t.length; c++) {
            const d = t[c];
            'number' == typeof d
              ? (i = d)
              : 1 == i
              ? (r = fe(r, d))
              : 2 == i && (o = fe(o, d + ': ' + t[++c] + ';'));
          }
        n ? (e.styles = o) : (e.stylesWithoutHost = o),
          n ? (e.classes = r) : (e.classesWithoutHost = r);
      }
      function E1() {
        const e = Yt();
        xr(_e()[1], e);
      }
      function vl(e) {
        let t = (function Qp(e) {
            return Object.getPrototypeOf(e.prototype).constructor;
          })(e.type),
          n = !0;
        const o = [e];
        for (; t; ) {
          let r;
          if (vn(e)) r = t.ɵcmp || t.ɵdir;
          else {
            if (t.ɵcmp) throw new ee(903, !1);
            r = t.ɵdir;
          }
          if (r) {
            if (n) {
              o.push(r);
              const c = e;
              (c.inputs = Dl(e.inputs)),
                (c.declaredInputs = Dl(e.declaredInputs)),
                (c.outputs = Dl(e.outputs));
              const d = r.hostBindings;
              d && I1(e, d);
              const p = r.viewQuery,
                C = r.contentQueries;
              if (
                (p && P1(e, p),
                C && A1(e, C),
                K(e.inputs, r.inputs),
                K(e.declaredInputs, r.declaredInputs),
                K(e.outputs, r.outputs),
                vn(r) && r.data.animation)
              ) {
                const D = e.data;
                D.animation = (D.animation || []).concat(r.data.animation);
              }
            }
            const i = r.features;
            if (i)
              for (let c = 0; c < i.length; c++) {
                const d = i[c];
                d && d.ngInherit && d(e), d === vl && (n = !1);
              }
          }
          t = Object.getPrototypeOf(t);
        }
        !(function O1(e) {
          let t = 0,
            n = null;
          for (let o = e.length - 1; o >= 0; o--) {
            const r = e[o];
            (r.hostVars = t += r.hostVars),
              (r.hostAttrs = ai(r.hostAttrs, (n = ai(n, r.hostAttrs))));
          }
        })(o);
      }
      function Dl(e) {
        return e === wt ? {} : e === Re ? [] : e;
      }
      function P1(e, t) {
        const n = e.viewQuery;
        e.viewQuery = n
          ? (o, r) => {
              t(o, r), n(o, r);
            }
          : t;
      }
      function A1(e, t) {
        const n = e.contentQueries;
        e.contentQueries = n
          ? (o, r, i) => {
              t(o, r, i), n(o, r, i);
            }
          : t;
      }
      function I1(e, t) {
        const n = e.hostBindings;
        e.hostBindings = n
          ? (o, r) => {
              t(o, r), n(o, r);
            }
          : t;
      }
      let wc = null;
      function Br() {
        if (!wc) {
          const e = Y.Symbol;
          if (e && e.iterator) wc = e.iterator;
          else {
            const t = Object.getOwnPropertyNames(Map.prototype);
            for (let n = 0; n < t.length; ++n) {
              const o = t[n];
              'entries' !== o &&
                'size' !== o &&
                Map.prototype[o] === Map.prototype.entries &&
                (wc = o);
            }
          }
        }
        return wc;
      }
      function vs(e) {
        return (
          !!Ml(e) && (Array.isArray(e) || (!(e instanceof Map) && Br() in e))
        );
      }
      function Ml(e) {
        return null !== e && ('function' == typeof e || 'object' == typeof e);
      }
      function Bo(e, t, n) {
        return (e[t] = n);
      }
      function Sn(e, t, n) {
        return !Object.is(e[t], n) && ((e[t] = n), !0);
      }
      function wl(e, t, n, o) {
        const r = _e();
        return Sn(r, Vn(), t) && (Et(), Uo(sn(), r, e, t, n, o)), wl;
      }
      function Ei(e, t, n, o) {
        return Sn(e, Vn(), n) ? t + $(n) + o : _t;
      }
      function lf(e, t, n, o, r, i, c, d) {
        const p = _e(),
          C = Et(),
          D = e + 22,
          I = C.firstCreatePass
            ? (function L1(e, t, n, o, r, i, c, d, p) {
                const C = t.consts,
                  D = vi(t, e, 4, c || null, bt(C, d));
                hl(t, n, D, bt(C, p)), xr(t, D);
                const I = (D.tViews = vc(
                  2,
                  D,
                  o,
                  r,
                  i,
                  t.directiveRegistry,
                  t.pipeRegistry,
                  null,
                  t.schemas,
                  C
                ));
                return (
                  null !== t.queries &&
                    (t.queries.template(t, D),
                    (I.queries = t.queries.embeddedTView(D))),
                  D
                );
              })(D, C, p, t, n, o, r, i, c)
            : C.data[D];
        g(I, !1);
        const L = p[11].createComment('');
        gc(C, p, L, I),
          Tn(L, p),
          Dc(p, (p[D] = Np(L, p, L, I))),
          Ln(I) && pl(C, p, I),
          null != c && fl(p, I, d);
      }
      function uf(e) {
        return ye(
          (function nt() {
            return qe.lFrame.contextLView;
          })(),
          22 + e
        );
      }
      function El(e, t, n) {
        const o = _e();
        return Sn(o, Vn(), t) && to(Et(), sn(), o, e, t, o[11], n, !1), El;
      }
      function Ol(e, t, n, o, r) {
        const c = r ? 'class' : 'style';
        Bp(e, n, t.inputs[c], c, o);
      }
      function Oc(e, t, n, o) {
        const r = _e(),
          i = Et(),
          c = 22 + e,
          d = r[11],
          p = (r[c] = Sa(
            d,
            t,
            (function $s() {
              return qe.lFrame.currentNamespace;
            })()
          )),
          C = i.firstCreatePass
            ? (function U1(e, t, n, o, r, i, c) {
                const d = t.consts,
                  C = vi(t, e, 2, r, bt(d, i));
                return (
                  hl(t, n, C, bt(d, c)),
                  null !== C.attrs && Mc(C, C.attrs, !1),
                  null !== C.mergedAttrs && Mc(C, C.mergedAttrs, !0),
                  null !== t.queries && t.queries.elementStart(t, C),
                  C
                );
              })(c, i, r, 0, t, n, o)
            : i.data[c];
        g(C, !0);
        const D = C.mergedAttrs;
        null !== D && ci(d, p, D);
        const I = C.classes;
        null !== I && Va(d, p, I);
        const L = C.styles;
        return (
          null !== L && Fd(d, p, L),
          64 != (64 & C.flags) && gc(i, r, p, C),
          0 ===
            (function Wn() {
              return qe.lFrame.elementDepthCount;
            })() && Tn(p, r),
          (function co() {
            qe.lFrame.elementDepthCount++;
          })(),
          Ln(C) && (pl(i, r, C), Dp(i, C, r)),
          null !== o && fl(r, C),
          Oc
        );
      }
      function Pc() {
        let e = Yt();
        h() ? O() : ((e = e.parent), g(e, !1));
        const t = e;
        !(function gr() {
          qe.lFrame.elementDepthCount--;
        })();
        const n = Et();
        return (
          n.firstCreatePass && (xr(n, e), zn(e) && n.queries.elementEnd(e)),
          null != t.classesWithoutHost &&
            (function Qi(e) {
              return 0 != (16 & e.flags);
            })(t) &&
            Ol(n, t, _e(), t.classesWithoutHost, !0),
          null != t.stylesWithoutHost &&
            (function Xi(e) {
              return 0 != (32 & e.flags);
            })(t) &&
            Ol(n, t, _e(), t.stylesWithoutHost, !1),
          Pc
        );
      }
      function Pl(e, t, n, o) {
        return Oc(e, t, n, o), Pc(), Pl;
      }
      function Ac(e, t, n) {
        const o = _e(),
          r = Et(),
          i = e + 22,
          c = r.firstCreatePass
            ? (function B1(e, t, n, o, r) {
                const i = t.consts,
                  c = bt(i, o),
                  d = vi(t, e, 8, 'ng-container', c);
                return (
                  null !== c && Mc(d, c, !0),
                  hl(t, n, d, bt(i, r)),
                  null !== t.queries && t.queries.elementStart(t, d),
                  d
                );
              })(i, r, o, t, n)
            : r.data[i];
        g(c, !0);
        const d = (o[i] = o[11].createComment(''));
        return (
          gc(r, o, d, c),
          Tn(d, o),
          Ln(c) && (pl(r, o, c), Dp(r, c, o)),
          null != n && fl(o, c),
          Ac
        );
      }
      function Ic() {
        let e = Yt();
        const t = Et();
        return (
          h() ? O() : ((e = e.parent), g(e, !1)),
          t.firstCreatePass && (xr(t, e), zn(e) && t.queries.elementEnd(e)),
          Ic
        );
      }
      function Al(e, t, n) {
        return Ac(e, t, n), Ic(), Al;
      }
      function df() {
        return _e();
      }
      function Il(e) {
        return !!e && 'function' == typeof e.then;
      }
      function pf(e) {
        return !!e && 'function' == typeof e.subscribe;
      }
      const ff = pf;
      function Tl(e, t, n, o) {
        const r = _e(),
          i = Et(),
          c = Yt();
        return (
          (function gf(e, t, n, o, r, i, c, d) {
            const p = Ln(o),
              D = e.firstCreatePass && Lp(e),
              I = t[8],
              L = kp(t);
            let J = !0;
            if (3 & o.type || d) {
              const He = E(o, t),
                Je = d ? d(He) : He,
                ft = L.length,
                De = d ? ct => d(Zt(ct[o.index])) : o.index;
              if (Lt(n)) {
                let ct = null;
                if (
                  (!d &&
                    p &&
                    (ct = (function j1(e, t, n, o) {
                      const r = e.cleanup;
                      if (null != r)
                        for (let i = 0; i < r.length - 1; i += 2) {
                          const c = r[i];
                          if (c === n && r[i + 1] === o) {
                            const d = t[7],
                              p = r[i + 2];
                            return d.length > p ? d[p] : null;
                          }
                          'string' == typeof c && (i += 2);
                        }
                      return null;
                    })(e, t, r, o.index)),
                  null !== ct)
                )
                  ((ct.__ngLastListenerFn__ || ct).__ngNextListenerFn__ = i),
                    (ct.__ngLastListenerFn__ = i),
                    (J = !1);
                else {
                  i = Sl(o, t, I, i, !1);
                  const Ft = n.listen(Je, r, i);
                  L.push(i, Ft), D && D.push(r, De, ft, ft + 1);
                }
              } else
                (i = Sl(o, t, I, i, !0)),
                  Je.addEventListener(r, i, c),
                  L.push(i),
                  D && D.push(r, De, ft, c);
            } else i = Sl(o, t, I, i, !1);
            const be = o.outputs;
            let Se;
            if (J && null !== be && (Se = be[r])) {
              const He = Se.length;
              if (He)
                for (let Je = 0; Je < He; Je += 2) {
                  const Jt = t[Se[Je]][Se[Je + 1]].subscribe(i),
                    Gr = L.length;
                  L.push(i, Jt), D && D.push(r, o.index, Gr, -(Gr + 1));
                }
            }
          })(i, r, r[11], c, e, t, !!n, o),
          Tl
        );
      }
      function mf(e, t, n, o) {
        try {
          return !1 !== n(o);
        } catch (r) {
          return Up(e, r), !1;
        }
      }
      function Sl(e, t, n, o, r) {
        return function i(c) {
          if (c === Function) return o;
          xl(2 & e.flags ? ze(e.index, t) : t);
          let p = mf(t, 0, o, c),
            C = i.__ngNextListenerFn__;
          for (; C; ) (p = mf(t, 0, C, c) && p), (C = C.__ngNextListenerFn__);
          return r && !1 === p && (c.preventDefault(), (c.returnValue = !1)), p;
        };
      }
      function xf(e = 1) {
        return (function Qc(e) {
          return (qe.lFrame.contextLView = (function Xc(e, t) {
            for (; e > 0; ) (t = t[15]), e--;
            return t;
          })(e, qe.lFrame.contextLView))[8];
        })(e);
      }
      function Fl(e, t, n) {
        return Tc(e, '', t, '', n), Fl;
      }
      function Tc(e, t, n, o, r) {
        const i = _e(),
          c = Ei(i, t, n, o);
        return c !== _t && to(Et(), sn(), i, e, c, i[11], r, !1), Tc;
      }
      function Ef(e, t, n, o, r) {
        const i = e[n + 1],
          c = null === t;
        let d = o ? Do(i) : or(i),
          p = !1;
        for (; 0 !== d && (!1 === p || c); ) {
          const D = e[d + 1];
          W1(e[d], t) && ((p = !0), (e[d + 1] = o ? nl(D) : el(D))),
            (d = o ? Do(D) : or(D));
        }
        p && (e[n + 1] = o ? el(i) : nl(i));
      }
      function W1(e, t) {
        return (
          null === e ||
          null == t ||
          (Array.isArray(e) ? e[1] : e) === t ||
          (!(!Array.isArray(e) || 'string' != typeof t) && pi(e, t) >= 0)
        );
      }
      const Cn = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };
      function Of(e) {
        return e.substring(Cn.key, Cn.keyEnd);
      }
      function Pf(e, t) {
        const n = Cn.textEnd;
        return n === t
          ? -1
          : ((t = Cn.keyEnd =
              (function J1(e, t, n) {
                for (; t < n && e.charCodeAt(t) > 32; ) t++;
                return t;
              })(e, (Cn.key = t), n)),
            Ni(e, t, n));
      }
      function Ni(e, t, n) {
        for (; t < n && e.charCodeAt(t) <= 32; ) t++;
        return t;
      }
      function Nl(e, t) {
        return (
          (function wo(e, t, n, o) {
            const r = _e(),
              i = Et(),
              c = On(2);
            i.firstUpdatePass && kf(i, e, c, o),
              t !== _t &&
                Sn(r, c, t) &&
                Vf(
                  i,
                  i.data[Pn()],
                  r,
                  r[11],
                  e,
                  (r[c + 1] = (function cb(e, t) {
                    return (
                      null == e ||
                        ('string' == typeof t
                          ? (e += t)
                          : 'object' == typeof e && (e = q(tr(e)))),
                      e
                    );
                  })(t, n)),
                  o,
                  c
                );
          })(e, t, null, !0),
          Nl
        );
      }
      function Nf(e) {
        !(function Eo(e, t, n, o) {
          const r = Et(),
            i = On(2);
          r.firstUpdatePass && kf(r, null, i, o);
          const c = _e();
          if (n !== _t && Sn(c, i, n)) {
            const d = r.data[Pn()];
            if (Bf(d, o) && !Rf(r, i)) {
              let p = o ? d.classesWithoutHost : d.stylesWithoutHost;
              null !== p && (n = fe(p, n || '')), Ol(r, d, c, n, o);
            } else
              !(function sb(e, t, n, o, r, i, c, d) {
                r === _t && (r = Re);
                let p = 0,
                  C = 0,
                  D = 0 < r.length ? r[0] : null,
                  I = 0 < i.length ? i[0] : null;
                for (; null !== D || null !== I; ) {
                  const L = p < r.length ? r[p + 1] : void 0,
                    J = C < i.length ? i[C + 1] : void 0;
                  let Se,
                    be = null;
                  D === I
                    ? ((p += 2), (C += 2), L !== J && ((be = I), (Se = J)))
                    : null === I || (null !== D && D < I)
                    ? ((p += 2), (be = D))
                    : ((C += 2), (be = I), (Se = J)),
                    null !== be && Vf(e, t, n, o, be, Se, c, d),
                    (D = p < r.length ? r[p] : null),
                    (I = C < i.length ? i[C] : null);
                }
              })(
                r,
                d,
                c,
                c[11],
                c[i + 1],
                (c[i + 1] = (function ib(e, t, n) {
                  if (null == n || '' === n) return Re;
                  const o = [],
                    r = tr(n);
                  if (Array.isArray(r))
                    for (let i = 0; i < r.length; i++) e(o, r[i], !0);
                  else if ('object' == typeof r)
                    for (const i in r) r.hasOwnProperty(i) && e(o, i, r[i]);
                  else 'string' == typeof r && t(o, r);
                  return o;
                })(e, t, n)),
                o,
                i
              );
          }
        })(eo, Ho, e, !0);
      }
      function Ho(e, t) {
        for (
          let n = (function K1(e) {
            return (
              (function If(e) {
                (Cn.key = 0),
                  (Cn.keyEnd = 0),
                  (Cn.value = 0),
                  (Cn.valueEnd = 0),
                  (Cn.textEnd = e.length);
              })(e),
              Pf(e, Ni(e, 0, Cn.textEnd))
            );
          })(t);
          n >= 0;
          n = Pf(t, n)
        )
          eo(e, Of(t), !0);
      }
      function Rf(e, t) {
        return t >= e.expandoStartIndex;
      }
      function kf(e, t, n, o) {
        const r = e.data;
        if (null === r[n + 1]) {
          const i = r[Pn()],
            c = Rf(e, n);
          Bf(i, o) && null === t && !c && (t = !1),
            (t = (function tb(e, t, n, o) {
              const r = (function Gi(e) {
                const t = qe.lFrame.currentDirectiveIndex;
                return -1 === t ? null : e[t];
              })(e);
              let i = o ? t.residualClasses : t.residualStyles;
              if (null === r)
                0 === (o ? t.classBindings : t.styleBindings) &&
                  ((n = Ms((n = Rl(null, e, t, n, o)), t.attrs, o)),
                  (i = null));
              else {
                const c = t.directiveStylingLast;
                if (-1 === c || e[c] !== r)
                  if (((n = Rl(r, e, t, n, o)), null === i)) {
                    let p = (function nb(e, t, n) {
                      const o = n ? t.classBindings : t.styleBindings;
                      if (0 !== or(o)) return e[Do(o)];
                    })(e, t, o);
                    void 0 !== p &&
                      Array.isArray(p) &&
                      ((p = Rl(null, e, t, p[1], o)),
                      (p = Ms(p, t.attrs, o)),
                      (function ob(e, t, n, o) {
                        e[Do(n ? t.classBindings : t.styleBindings)] = o;
                      })(e, t, o, p));
                  } else
                    i = (function rb(e, t, n) {
                      let o;
                      const r = t.directiveEnd;
                      for (let i = 1 + t.directiveStylingLast; i < r; i++)
                        o = Ms(o, e[i].hostAttrs, n);
                      return Ms(o, t.attrs, n);
                    })(e, t, o);
              }
              return (
                void 0 !== i &&
                  (o ? (t.residualClasses = i) : (t.residualStyles = i)),
                n
              );
            })(r, i, t, o)),
            (function G1(e, t, n, o, r, i) {
              let c = i ? t.classBindings : t.styleBindings,
                d = Do(c),
                p = or(c);
              e[o] = n;
              let D,
                C = !1;
              if (Array.isArray(n)) {
                const I = n;
                (D = I[1]), (null === D || pi(I, D) > 0) && (C = !0);
              } else D = n;
              if (r)
                if (0 !== p) {
                  const L = Do(e[d + 1]);
                  (e[o + 1] = yc(L, d)),
                    0 !== L && (e[L + 1] = tl(e[L + 1], o)),
                    (e[d + 1] = (function Fx(e, t) {
                      return (131071 & e) | (t << 17);
                    })(e[d + 1], o));
                } else
                  (e[o + 1] = yc(d, 0)),
                    0 !== d && (e[d + 1] = tl(e[d + 1], o)),
                    (d = o);
              else
                (e[o + 1] = yc(p, 0)),
                  0 === d ? (d = o) : (e[p + 1] = tl(e[p + 1], o)),
                  (p = o);
              C && (e[o + 1] = el(e[o + 1])),
                Ef(e, D, o, !0),
                Ef(e, D, o, !1),
                (function Z1(e, t, n, o, r) {
                  const i = r ? e.residualClasses : e.residualStyles;
                  null != i &&
                    'string' == typeof t &&
                    pi(i, t) >= 0 &&
                    (n[o + 1] = nl(n[o + 1]));
                })(t, D, e, o, i),
                (c = yc(d, p)),
                i ? (t.classBindings = c) : (t.styleBindings = c);
            })(r, i, t, n, c, o);
        }
      }
      function Rl(e, t, n, o, r) {
        let i = null;
        const c = n.directiveEnd;
        let d = n.directiveStylingLast;
        for (
          -1 === d ? (d = n.directiveStart) : d++;
          d < c && ((i = t[d]), (o = Ms(o, i.hostAttrs, r)), i !== e);

        )
          d++;
        return null !== e && (n.directiveStylingLast = d), o;
      }
      function Ms(e, t, n) {
        const o = n ? 1 : 2;
        let r = -1;
        if (null !== t)
          for (let i = 0; i < t.length; i++) {
            const c = t[i];
            'number' == typeof c
              ? (r = c)
              : r === o &&
                (Array.isArray(e) || (e = void 0 === e ? [] : ['', e]),
                eo(e, c, !!n || t[++i]));
          }
        return void 0 === e ? null : e;
      }
      function Vf(e, t, n, o, r, i, c, d) {
        if (!(3 & t.type)) return;
        const p = e.data,
          C = p[d + 1];
        Sc(
          (function fp(e) {
            return 1 == (1 & e);
          })(C)
            ? Uf(p, t, n, r, or(C), c)
            : void 0
        ) ||
          (Sc(i) ||
            ((function pp(e) {
              return 2 == (2 & e);
            })(C) &&
              (i = Uf(p, null, n, r, d, c))),
          (function zm(e, t, n, o, r) {
            const i = Lt(e);
            if (t)
              r
                ? i
                  ? e.addClass(n, o)
                  : n.classList.add(o)
                : i
                ? e.removeClass(n, o)
                : n.classList.remove(o);
            else {
              let c = -1 === o.indexOf('-') ? void 0 : Lo.DashCase;
              if (null == r)
                i ? e.removeStyle(n, o, c) : n.style.removeProperty(o);
              else {
                const d = 'string' == typeof r && r.endsWith('!important');
                d && ((r = r.slice(0, -10)), (c |= Lo.Important)),
                  i
                    ? e.setStyle(n, o, r, c)
                    : n.style.setProperty(o, r, d ? 'important' : '');
              }
            }
          })(o, c, x(Pn(), n), r, i));
      }
      function Uf(e, t, n, o, r, i) {
        const c = null === t;
        let d;
        for (; r > 0; ) {
          const p = e[r],
            C = Array.isArray(p),
            D = C ? p[1] : p,
            I = null === D;
          let L = n[r + 1];
          L === _t && (L = I ? Re : void 0);
          let J = I ? ua(L, o) : D === o ? L : void 0;
          if ((C && !Sc(J) && (J = ua(p, o)), Sc(J) && ((d = J), c))) return d;
          const be = e[r + 1];
          r = c ? Do(be) : or(be);
        }
        if (null !== t) {
          let p = i ? t.residualClasses : t.residualStyles;
          null != p && (d = ua(p, o));
        }
        return d;
      }
      function Sc(e) {
        return void 0 !== e;
      }
      function Bf(e, t) {
        return 0 != (e.flags & (t ? 16 : 32));
      }
      function jf(e, t = '') {
        const n = _e(),
          o = Et(),
          r = e + 22,
          i = o.firstCreatePass ? vi(o, r, 1, t, null) : o.data[r],
          c = (n[r] = (function Ta(e, t) {
            return Lt(e) ? e.createText(t) : e.createTextNode(t);
          })(n[11], t));
        gc(o, n, c, i), g(i, !1);
      }
      function kl(e) {
        return Fc('', e, ''), kl;
      }
      function Fc(e, t, n) {
        const o = _e(),
          r = Ei(o, e, t, n);
        return r !== _t && rr(o, Pn(), r), Fc;
      }
      const Hr = void 0;
      var Ob = [
        'en',
        [['a', 'p'], ['AM', 'PM'], Hr],
        [['AM', 'PM'], Hr, Hr],
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
        Hr,
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
        Hr,
        [
          ['B', 'A'],
          ['BC', 'AD'],
          ['Before Christ', 'Anno Domini'],
        ],
        0,
        [6, 0],
        ['M/d/yy', 'MMM d, y', 'MMMM d, y', 'EEEE, MMMM d, y'],
        ['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
        ['{1}, {0}', Hr, "{1} 'at' {0}", Hr],
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
        function Eb(e) {
          const n = Math.floor(Math.abs(e)),
            o = e.toString().replace(/^[^.]*\.?/, '').length;
          return 1 === n && 0 === o ? 1 : 5;
        },
      ];
      let Ri = {};
      function Ll(e) {
        const t = (function Pb(e) {
          return e.toLowerCase().replace(/_/g, '-');
        })(e);
        let n = ah(t);
        if (n) return n;
        const o = t.split('-')[0];
        if (((n = ah(o)), n)) return n;
        if ('en' === o) return Ob;
        throw new Error(`Missing locale data for the locale "${e}".`);
      }
      function ch(e) {
        return Ll(e)[pt.PluralCase];
      }
      function ah(e) {
        return (
          e in Ri ||
            (Ri[e] =
              Y.ng &&
              Y.ng.common &&
              Y.ng.common.locales &&
              Y.ng.common.locales[e]),
          Ri[e]
        );
      }
      var pt = (() => (
        ((pt = pt || {})[(pt.LocaleId = 0)] = 'LocaleId'),
        (pt[(pt.DayPeriodsFormat = 1)] = 'DayPeriodsFormat'),
        (pt[(pt.DayPeriodsStandalone = 2)] = 'DayPeriodsStandalone'),
        (pt[(pt.DaysFormat = 3)] = 'DaysFormat'),
        (pt[(pt.DaysStandalone = 4)] = 'DaysStandalone'),
        (pt[(pt.MonthsFormat = 5)] = 'MonthsFormat'),
        (pt[(pt.MonthsStandalone = 6)] = 'MonthsStandalone'),
        (pt[(pt.Eras = 7)] = 'Eras'),
        (pt[(pt.FirstDayOfWeek = 8)] = 'FirstDayOfWeek'),
        (pt[(pt.WeekendRange = 9)] = 'WeekendRange'),
        (pt[(pt.DateFormat = 10)] = 'DateFormat'),
        (pt[(pt.TimeFormat = 11)] = 'TimeFormat'),
        (pt[(pt.DateTimeFormat = 12)] = 'DateTimeFormat'),
        (pt[(pt.NumberSymbols = 13)] = 'NumberSymbols'),
        (pt[(pt.NumberFormats = 14)] = 'NumberFormats'),
        (pt[(pt.CurrencyCode = 15)] = 'CurrencyCode'),
        (pt[(pt.CurrencySymbol = 16)] = 'CurrencySymbol'),
        (pt[(pt.CurrencyName = 17)] = 'CurrencyName'),
        (pt[(pt.Currencies = 18)] = 'Currencies'),
        (pt[(pt.Directionality = 19)] = 'Directionality'),
        (pt[(pt.PluralCase = 20)] = 'PluralCase'),
        (pt[(pt.ExtraData = 21)] = 'ExtraData'),
        pt
      ))();
      const ki = 'en-US';
      let lh = ki;
      function Bl(e, t, n, o, r) {
        if (((e = ie(e)), Array.isArray(e)))
          for (let i = 0; i < e.length; i++) Bl(e[i], t, n, o, r);
        else {
          const i = Et(),
            c = _e();
          let d = Ur(e) ? e : ie(e.provide),
            p = Qd(e);
          const C = Yt(),
            D = 1048575 & C.providerIndexes,
            I = C.directiveStart,
            L = C.providerIndexes >> 20;
          if (Ur(e) || !e.multi) {
            const J = new Xo(p, r, _i),
              be = Hl(d, t, r ? D : D + L, I);
            -1 === be
              ? (Nr(yr(C, c), i, d),
                jl(i, e, t.length),
                t.push(d),
                C.directiveStart++,
                C.directiveEnd++,
                r && (C.providerIndexes += 1048576),
                n.push(J),
                c.push(J))
              : ((n[be] = J), (c[be] = J));
          } else {
            const J = Hl(d, t, D + L, I),
              be = Hl(d, t, D, D + L),
              Se = J >= 0 && n[J],
              He = be >= 0 && n[be];
            if ((r && !He) || (!r && !Se)) {
              Nr(yr(C, c), i, d);
              const Je = (function wy(e, t, n, o, r) {
                const i = new Xo(e, n, _i);
                return (
                  (i.multi = []),
                  (i.index = t),
                  (i.componentProviders = 0),
                  Nh(i, r, o && !n),
                  i
                );
              })(r ? My : Dy, n.length, r, o, p);
              !r && He && (n[be].providerFactory = Je),
                jl(i, e, t.length, 0),
                t.push(d),
                C.directiveStart++,
                C.directiveEnd++,
                r && (C.providerIndexes += 1048576),
                n.push(Je),
                c.push(Je);
            } else jl(i, e, J > -1 ? J : be, Nh(n[r ? be : J], p, !r && o));
            !r && o && He && n[be].componentProviders++;
          }
        }
      }
      function jl(e, t, n, o) {
        const r = Ur(t),
          i = (function lx(e) {
            return !!e.useClass;
          })(t);
        if (r || i) {
          const p = (i ? ie(t.useClass) : t).prototype.ngOnDestroy;
          if (p) {
            const C = e.destroyHooks || (e.destroyHooks = []);
            if (!r && t.multi) {
              const D = C.indexOf(n);
              -1 === D ? C.push(n, [o, p]) : C[D + 1].push(o, p);
            } else C.push(n, p);
          }
        }
      }
      function Nh(e, t, n) {
        return n && e.componentProviders++, e.multi.push(t) - 1;
      }
      function Hl(e, t, n, o) {
        for (let r = n; r < o; r++) if (t[r] === e) return r;
        return -1;
      }
      function Dy(e, t, n, o) {
        return $l(this.multi, []);
      }
      function My(e, t, n, o) {
        const r = this.multi;
        let i;
        if (this.providerFactory) {
          const c = this.providerFactory.componentProviders,
            d = kr(n, n[1], this.providerFactory.index, o);
          (i = d.slice(0, c)), $l(r, i);
          for (let p = c; p < d.length; p++) i.push(d[p]);
        } else (i = []), $l(r, i);
        return i;
      }
      function $l(e, t) {
        for (let n = 0; n < e.length; n++) t.push((0, e[n])());
        return t;
      }
      function Rh(e, t = []) {
        return n => {
          n.providersResolver = (o, r) =>
            (function vy(e, t, n) {
              const o = Et();
              if (o.firstCreatePass) {
                const r = vn(e);
                Bl(n, o.data, o.blueprint, r, !0),
                  Bl(t, o.data, o.blueprint, r, !1);
              }
            })(o, r ? r(e) : e, t);
        };
      }
      class Oy {
        resolveComponentFactory(t) {
          throw (function Ey(e) {
            const t = Error(
              `No component factory found for ${q(
                e
              )}. Did you add it to @NgModule.entryComponents?`
            );
            return (t.ngComponent = e), t;
          })(t);
        }
      }
      let As = (() => {
        class e {}
        return (e.NULL = new Oy()), e;
      })();
      class $r {}
      class Lh {}
      class Vh {}
      function Ay() {
        return Vi(Yt(), _e());
      }
      function Vi(e, t) {
        return new Is(E(e, t));
      }
      let Is = (() => {
        class e {
          constructor(n) {
            this.nativeElement = n;
          }
        }
        return (e.__NG_ELEMENT_ID__ = Ay), e;
      })();
      function Iy(e) {
        return e instanceof Is ? e.nativeElement : e;
      }
      class Uh {}
      let Ty = (() => {
          class e {}
          return (
            (e.__NG_ELEMENT_ID__ = () =>
              (function Fy() {
                const e = _e(),
                  n = ze(Yt().index, e);
                return (function Sy(e) {
                  return e[11];
                })(nn(n) ? n : e);
              })()),
            e
          );
        })(),
        Ny = (() => {
          class e {}
          return (
            (e.ɵprov = Mt({
              token: e,
              providedIn: 'root',
              factory: () => null,
            })),
            e
          );
        })();
      class Bh {
        constructor(t) {
          (this.full = t),
            (this.major = t.split('.')[0]),
            (this.minor = t.split('.')[1]),
            (this.patch = t.split('.').slice(2).join('.'));
        }
      }
      const Ry = new Bh('14.0.3'),
        zl = {};
      function Vc(e, t, n, o, r = !1) {
        for (; null !== n; ) {
          const i = t[n.index];
          if ((null !== i && o.push(Zt(i)), gn(i)))
            for (let d = 10; d < i.length; d++) {
              const p = i[d],
                C = p[1].firstChild;
              null !== C && Vc(p[1], p, C, o);
            }
          const c = n.type;
          if (8 & c) Vc(e, t, n.child, o);
          else if (32 & c) {
            const d = Pa(n, t);
            let p;
            for (; (p = d()); ) o.push(p);
          } else if (16 & c) {
            const d = Id(t, n);
            if (Array.isArray(d)) o.push(...d);
            else {
              const p = bs(t[16]);
              Vc(p[1], p, d, o, !0);
            }
          }
          n = r ? n.projectionNext : n.next;
        }
        return o;
      }
      class Ts {
        constructor(t, n) {
          (this._lView = t),
            (this._cdRefInjectingView = n),
            (this._appRef = null),
            (this._attachedToViewContainer = !1);
        }
        get rootNodes() {
          const t = this._lView,
            n = t[1];
          return Vc(n, t, n.firstChild, []);
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
            if (gn(t)) {
              const n = t[8],
                o = n ? n.indexOf(this) : -1;
              o > -1 && (Fa(t, o), rc(n, o));
            }
            this._attachedToViewContainer = !1;
          }
          Cd(this._lView[1], this._lView);
        }
        onDestroy(t) {
          Op(this._lView[1], this._lView, null, t);
        }
        markForCheck() {
          xl(this._cdRefInjectingView || this._lView);
        }
        detach() {
          this._lView[2] &= -65;
        }
        reattach() {
          this._lView[2] |= 64;
        }
        detectChanges() {
          !(function yl(e, t, n) {
            const o = t[10];
            o.begin && o.begin();
            try {
              Mi(e, t, e.template, n);
            } catch (r) {
              throw (Up(t, r), r);
            } finally {
              o.end && o.end();
            }
          })(this._lView[1], this._lView, this.context);
        }
        checkNoChanges() {}
        attachToViewContainerRef() {
          if (this._appRef) throw new ee(902, !1);
          this._attachedToViewContainer = !0;
        }
        detachFromAppRef() {
          (this._appRef = null),
            (function Nm(e, t) {
              ys(e, t, t[11], 2, null, null);
            })(this._lView[1], this._lView);
        }
        attachToAppRef(t) {
          if (this._attachedToViewContainer) throw new ee(902, !1);
          this._appRef = t;
        }
      }
      class ky extends Ts {
        constructor(t) {
          super(t), (this._view = t);
        }
        detectChanges() {
          Rp(this._view);
        }
        checkNoChanges() {}
        get context() {
          return null;
        }
      }
      class Gl extends As {
        constructor(t) {
          super(), (this.ngModule = t);
        }
        resolveComponentFactory(t) {
          const n = Pt(t);
          return new Zl(n, this.ngModule);
        }
      }
      function jh(e) {
        const t = [];
        for (let n in e)
          e.hasOwnProperty(n) && t.push({ propName: e[n], templateName: n });
        return t;
      }
      class Vy {
        constructor(t, n) {
          (this.injector = t), (this.parentInjector = n);
        }
        get(t, n, o) {
          const r = this.injector.get(t, zl, o);
          return r !== zl || n === zl ? r : this.parentInjector.get(t, n, o);
        }
      }
      class Zl extends Vh {
        constructor(t, n) {
          super(),
            (this.componentDef = t),
            (this.ngModule = n),
            (this.componentType = t.type),
            (this.selector = (function ex(e) {
              return e.map(Xm).join(',');
            })(t.selectors)),
            (this.ngContentSelectors = t.ngContentSelectors
              ? t.ngContentSelectors
              : []),
            (this.isBoundToModule = !!n);
        }
        get inputs() {
          return jh(this.componentDef.inputs);
        }
        get outputs() {
          return jh(this.componentDef.outputs);
        }
        create(t, n, o, r) {
          let i = (r = r || this.ngModule) instanceof bi ? r : r?.injector;
          i &&
            null !== this.componentDef.getStandaloneInjector &&
            (i = this.componentDef.getStandaloneInjector(i) || i);
          const c = i ? new Vy(t, i) : t,
            d = c.get(Uh, Gn),
            p = c.get(Ny, null),
            C = d.createRenderer(null, this.componentDef),
            D = this.componentDef.selectors[0][0] || 'div',
            I = o
              ? (function Ep(e, t, n) {
                  if (Lt(e)) return e.selectRootElement(t, n === me.ShadowDom);
                  let o = 'string' == typeof t ? e.querySelector(t) : t;
                  return (o.textContent = ''), o;
                })(C, o, this.componentDef.encapsulation)
              : Sa(
                  d.createRenderer(null, this.componentDef),
                  D,
                  (function Ly(e) {
                    const t = e.toLowerCase();
                    return 'svg' === t ? 'svg' : 'math' === t ? 'math' : null;
                  })(D)
                ),
            L = this.componentDef.onPush ? 288 : 272,
            J = (function Jp(e, t) {
              return {
                components: [],
                scheduler: e || Em,
                clean: g1,
                playerHandler: t || null,
                flags: 0,
              };
            })(),
            be = vc(0, null, null, 1, 0, null, null, null, null, null),
            Se = Cs(null, be, J, L, null, null, d, C, p, c, null);
          let He, Je;
          ni(Se);
          try {
            const ft = (function Kp(e, t, n, o, r, i) {
              const c = n[1];
              n[22] = e;
              const p = vi(c, 22, 2, '#host', null),
                C = (p.mergedAttrs = t.hostAttrs);
              null !== C &&
                (Mc(p, C, !0),
                null !== e &&
                  (ci(r, e, C),
                  null !== p.classes && Va(r, e, p.classes),
                  null !== p.styles && Fd(r, e, p.styles)));
              const D = o.createRenderer(e, t),
                I = Cs(
                  n,
                  Mp(t),
                  null,
                  t.onPush ? 32 : 16,
                  n[22],
                  p,
                  o,
                  D,
                  i || null,
                  null,
                  null
                );
              return (
                c.firstCreatePass &&
                  (Nr(yr(p, n), c, t.type), Tp(c, p), Sp(p, n.length, 1)),
                Dc(n, I),
                (n[22] = I)
              );
            })(I, this.componentDef, Se, d, C);
            if (I)
              if (o) ci(C, I, ['ng-version', Ry.full]);
              else {
                const { attrs: De, classes: ct } = (function tx(e) {
                  const t = [],
                    n = [];
                  let o = 1,
                    r = 2;
                  for (; o < e.length; ) {
                    let i = e[o];
                    if ('string' == typeof i)
                      2 === r
                        ? '' !== i && t.push(i, e[++o])
                        : 8 === r && n.push(i);
                    else {
                      if (!vo(r)) break;
                      r = i;
                    }
                    o++;
                  }
                  return { attrs: t, classes: n };
                })(this.componentDef.selectors[0]);
                De && ci(C, I, De),
                  ct && ct.length > 0 && Va(C, I, ct.join(' '));
              }
            if (((Je = ue(be, 22)), void 0 !== n)) {
              const De = (Je.projection = []);
              for (let ct = 0; ct < this.ngContentSelectors.length; ct++) {
                const Ft = n[ct];
                De.push(null != Ft ? Array.from(Ft) : null);
              }
            }
            (He = (function qp(e, t, n, o, r) {
              const i = n[1],
                c = (function Xx(e, t, n) {
                  const o = Yt();
                  e.firstCreatePass &&
                    (n.providersResolver && n.providersResolver(n),
                    Fp(e, o, t, Di(e, t, 1, null), n));
                  const r = kr(t, e, o.directiveStart, o);
                  Tn(r, t);
                  const i = E(o, t);
                  return i && Tn(i, t), r;
                })(i, n, t);
              if ((o.components.push(c), (e[8] = c), null !== r))
                for (const p of r) p(c, t);
              if (t.contentQueries) {
                const p = Yt();
                t.contentQueries(1, c, p.directiveStart);
              }
              const d = Yt();
              return (
                !i.firstCreatePass ||
                  (null === t.hostBindings && null === t.hostAttrs) ||
                  (yo(d.index),
                  Ap(n[1], d, 0, d.directiveStart, d.directiveEnd, t),
                  Ip(t, c)),
                c
              );
            })(ft, this.componentDef, Se, J, [E1])),
              _s(be, Se, null);
          } finally {
            oi();
          }
          return new By(this.componentType, He, Vi(Je, Se), Se, Je);
        }
      }
      class By extends class Py {} {
        constructor(t, n, o, r, i) {
          super(),
            (this.location = o),
            (this._rootLView = r),
            (this._tNode = i),
            (this.instance = n),
            (this.hostView = this.changeDetectorRef = new ky(r)),
            (this.componentType = t);
        }
        get injector() {
          return new Cr(this._tNode, this._rootLView);
        }
        destroy() {
          this.hostView.destroy();
        }
        onDestroy(t) {
          this.hostView.onDestroy(t);
        }
      }
      function jy(e, t) {
        return new Hh(e, t ?? null);
      }
      class Hh extends $r {
        constructor(t, n) {
          super(),
            (this._parent = n),
            (this._bootstrapComponents = []),
            (this.injector = this),
            (this.destroyCbs = []),
            (this.componentFactoryResolver = new Gl(this));
          const o = en(t);
          (this._bootstrapComponents = nr(o.bootstrap)),
            (this._r3Injector = ep(
              t,
              n,
              [
                { provide: $r, useValue: this },
                { provide: As, useValue: this.componentFactoryResolver },
              ],
              q(t),
              new Set(['environment'])
            )),
            this._r3Injector.resolveInjectorInitializers(),
            (this.instance = this.get(t));
        }
        get(t, n = Vo.THROW_IF_NOT_FOUND, o = tt.Default) {
          return t === Vo || t === $r || t === ja
            ? this
            : this._r3Injector.get(t, n, o);
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
      class Wl extends Lh {
        constructor(t) {
          super(), (this.moduleType = t);
        }
        create(t) {
          return new Hh(this.moduleType, t);
        }
      }
      class Hy extends $r {
        constructor(t, n, o) {
          super(),
            (this.componentFactoryResolver = new Gl(this)),
            (this.instance = null);
          const r = new Jd(
            [
              ...t,
              { provide: $r, useValue: this },
              { provide: As, useValue: this.componentFactoryResolver },
            ],
            n || za(),
            o,
            new Set(['environment'])
          );
          (this.injector = r), r.resolveInjectorInitializers();
        }
        destroy() {
          this.injector.destroy();
        }
        onDestroy(t) {
          this.injector.onDestroy(t);
        }
      }
      function Yl(e, t = null, n = null) {
        return new Hy(e, t, n).injector;
      }
      function $h(e, t, n, o) {
        return (function Gh(e, t, n, o, r, i) {
          const c = t + n;
          return Sn(e, c, r)
            ? Bo(e, c + 1, i ? o.call(i, r) : o(r))
            : Ss(e, c + 1);
        })(_e(), zt(), e, t, n, o);
      }
      function zh(e, t, n, o, r) {
        return Zh(_e(), zt(), e, t, n, o, r);
      }
      function Ss(e, t) {
        const n = e[t];
        return n === _t ? void 0 : n;
      }
      function Zh(e, t, n, o, r, i, c) {
        const d = t + n;
        return (function jr(e, t, n, o) {
          const r = Sn(e, t, n);
          return Sn(e, t + 1, o) || r;
        })(e, d, r, i)
          ? Bo(e, d + 2, c ? o.call(c, r, i) : o(r, i))
          : Ss(e, d + 2);
      }
      function qh(e, t) {
        const n = Et();
        let o;
        const r = e + 22;
        n.firstCreatePass
          ? ((o = (function eC(e, t) {
              if (t)
                for (let n = t.length - 1; n >= 0; n--) {
                  const o = t[n];
                  if (e === o.name) return o;
                }
            })(t, n.pipeRegistry)),
            (n.data[r] = o),
            o.onDestroy &&
              (n.destroyHooks || (n.destroyHooks = [])).push(r, o.onDestroy))
          : (o = n.data[r]);
        const i = o.factory || (o.factory = qn(o.type)),
          c = kt(_i);
        try {
          const d = li(!1),
            p = i();
          return (
            li(d),
            (function V1(e, t, n, o) {
              n >= e.data.length &&
                ((e.data[n] = null), (e.blueprint[n] = null)),
                (t[n] = o);
            })(n, _e(), r, p),
            p
          );
        } finally {
          kt(c);
        }
      }
      function Jh(e, t, n, o) {
        const r = e + 22,
          i = _e(),
          c = ye(i, r);
        return (function Fs(e, t) {
          return e[1].data[t].pure;
        })(i, r)
          ? Zh(i, zt(), t, c.transform, n, o, c)
          : c.transform(n, o);
      }
      function Kl(e) {
        return t => {
          setTimeout(e, void 0, t);
        };
      }
      const $o = class iC extends s.x {
        constructor(t = !1) {
          super(), (this.__isAsync = t);
        }
        emit(t) {
          super.next(t);
        }
        subscribe(t, n, o) {
          let r = t,
            i = n || (() => null),
            c = o;
          if (t && 'object' == typeof t) {
            const p = t;
            (r = p.next?.bind(p)),
              (i = p.error?.bind(p)),
              (c = p.complete?.bind(p));
          }
          this.__isAsync && ((i = Kl(i)), r && (r = Kl(r)), c && (c = Kl(c)));
          const d = super.subscribe({ next: r, error: i, complete: c });
          return t instanceof _.w0 && t.add(d), d;
        }
      };
      function sC() {
        return this._results[Br()]();
      }
      class ql {
        constructor(t = !1) {
          (this._emitDistinctChangesOnly = t),
            (this.dirty = !0),
            (this._results = []),
            (this._changesDetected = !1),
            (this._changes = null),
            (this.length = 0),
            (this.first = void 0),
            (this.last = void 0);
          const n = Br(),
            o = ql.prototype;
          o[n] || (o[n] = sC);
        }
        get changes() {
          return this._changes || (this._changes = new $o());
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
          const o = this;
          o.dirty = !1;
          const r = Xn(t);
          (this._changesDetected = !(function cg(e, t, n) {
            if (e.length !== t.length) return !1;
            for (let o = 0; o < e.length; o++) {
              let r = e[o],
                i = t[o];
              if ((n && ((r = n(r)), (i = n(i))), i !== r)) return !1;
            }
            return !0;
          })(o._results, r, n)) &&
            ((o._results = r),
            (o.length = r.length),
            (o.last = r[this.length - 1]),
            (o.first = r[0]));
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
      let Ns = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = lC), e;
      })();
      const cC = Ns,
        aC = class extends cC {
          constructor(t, n, o) {
            super(),
              (this._declarationLView = t),
              (this._declarationTContainer = n),
              (this.elementRef = o);
          }
          createEmbeddedView(t, n) {
            const o = this._declarationTContainer.tViews,
              r = Cs(
                this._declarationLView,
                o,
                t,
                16,
                null,
                o.declTNode,
                null,
                null,
                null,
                null,
                n || null
              );
            r[17] = this._declarationLView[this._declarationTContainer.index];
            const c = this._declarationLView[19];
            return (
              null !== c && (r[19] = c.createEmbeddedView(o)),
              _s(o, r, t),
              new Ts(r)
            );
          }
        };
      function lC() {
        return Uc(Yt(), _e());
      }
      function Uc(e, t) {
        return 4 & e.type ? new aC(t, e, Vi(e, t)) : null;
      }
      let Bc = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = uC), e;
      })();
      function uC() {
        return e0(Yt(), _e());
      }
      const dC = Bc,
        Qh = class extends dC {
          constructor(t, n, o) {
            super(),
              (this._lContainer = t),
              (this._hostTNode = n),
              (this._hostLView = o);
          }
          get element() {
            return Vi(this._hostTNode, this._hostLView);
          }
          get injector() {
            return new Cr(this._hostTNode, this._hostLView);
          }
          get parentInjector() {
            const t = lo(this._hostTNode, this._hostLView);
            if (An(t)) {
              const n = Ro(t, this._hostLView),
                o = br(t);
              return new Cr(n[1].data[o + 8], n);
            }
            return new Cr(null, this._hostLView);
          }
          clear() {
            for (; this.length > 0; ) this.remove(this.length - 1);
          }
          get(t) {
            const n = Xh(this._lContainer);
            return (null !== n && n[t]) || null;
          }
          get length() {
            return this._lContainer.length - 10;
          }
          createEmbeddedView(t, n, o) {
            let r, i;
            'number' == typeof o
              ? (r = o)
              : null != o && ((r = o.index), (i = o.injector));
            const c = t.createEmbeddedView(n || {}, i);
            return this.insert(c, r), c;
          }
          createComponent(t, n, o, r, i) {
            const c =
              t &&
              !(function rs(e) {
                return 'function' == typeof e;
              })(t);
            let d;
            if (c) d = n;
            else {
              const I = n || {};
              (d = I.index),
                (o = I.injector),
                (r = I.projectableNodes),
                (i = I.environmentInjector || I.ngModuleRef);
            }
            const p = c ? t : new Zl(Pt(t)),
              C = o || this.parentInjector;
            if (!i && null == p.ngModule) {
              const L = (c ? C : this.parentInjector).get(bi, null);
              L && (i = L);
            }
            const D = p.create(C, r, void 0, i);
            return this.insert(D.hostView, d), D;
          }
          insert(t, n) {
            const o = t._lView,
              r = o[1];
            if (
              (function Bt(e) {
                return gn(e[3]);
              })(o)
            ) {
              const D = this.indexOf(t);
              if (-1 !== D) this.detach(D);
              else {
                const I = o[3],
                  L = new Qh(I, I[6], I[3]);
                L.detach(L.indexOf(t));
              }
            }
            const i = this._adjustIndex(n),
              c = this._lContainer;
            !(function km(e, t, n, o) {
              const r = 10 + o,
                i = n.length;
              o > 0 && (n[r - 1][4] = t),
                o < i - 10
                  ? ((t[4] = n[r]), Fu(n, 10 + o, t))
                  : (n.push(t), (t[4] = null)),
                (t[3] = n);
              const c = t[17];
              null !== c &&
                n !== c &&
                (function Lm(e, t) {
                  const n = e[9];
                  t[16] !== t[3][3][16] && (e[2] = !0),
                    null === n ? (e[9] = [t]) : n.push(t);
                })(c, t);
              const d = t[19];
              null !== d && d.insertView(e), (t[2] |= 64);
            })(r, o, c, i);
            const d = ka(i, c),
              p = o[11],
              C = hc(p, c[7]);
            return (
              null !== C &&
                (function Fm(e, t, n, o, r, i) {
                  (o[0] = r), (o[6] = t), ys(e, o, n, 1, r, i);
                })(r, c[6], p, o, C, d),
              t.attachToViewContainerRef(),
              Fu(Jl(c), i, t),
              t
            );
          }
          move(t, n) {
            return this.insert(t, n);
          }
          indexOf(t) {
            const n = Xh(this._lContainer);
            return null !== n ? n.indexOf(t) : -1;
          }
          remove(t) {
            const n = this._adjustIndex(t, -1),
              o = Fa(this._lContainer, n);
            o && (rc(Jl(this._lContainer), n), Cd(o[1], o));
          }
          detach(t) {
            const n = this._adjustIndex(t, -1),
              o = Fa(this._lContainer, n);
            return o && null != rc(Jl(this._lContainer), n) ? new Ts(o) : null;
          }
          _adjustIndex(t, n = 0) {
            return t ?? this.length + n;
          }
        };
      function Xh(e) {
        return e[8];
      }
      function Jl(e) {
        return e[8] || (e[8] = []);
      }
      function e0(e, t) {
        let n;
        const o = t[e.index];
        if (gn(o)) n = o;
        else {
          let r;
          if (8 & e.type) r = Zt(o);
          else {
            const i = t[11];
            r = i.createComment('');
            const c = E(e, t);
            Vr(
              i,
              hc(i, c),
              r,
              (function jm(e, t) {
                return Lt(e) ? e.nextSibling(t) : t.nextSibling;
              })(i, c),
              !1
            );
          }
          (t[e.index] = n = Np(o, t, r, e)), Dc(t, n);
        }
        return new Qh(n, e, t);
      }
      class Ql {
        constructor(t) {
          (this.queryList = t), (this.matches = null);
        }
        clone() {
          return new Ql(this.queryList);
        }
        setDirty() {
          this.queryList.setDirty();
        }
      }
      class Xl {
        constructor(t = []) {
          this.queries = t;
        }
        createEmbeddedView(t) {
          const n = t.queries;
          if (null !== n) {
            const o =
                null !== t.contentQueries ? t.contentQueries[0] : n.length,
              r = [];
            for (let i = 0; i < o; i++) {
              const c = n.getByIndex(i);
              r.push(this.queries[c.indexInDeclarationView].clone());
            }
            return new Xl(r);
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
            null !== u0(t, n).matches && this.queries[n].setDirty();
        }
      }
      class t0 {
        constructor(t, n, o = null) {
          (this.predicate = t), (this.flags = n), (this.read = o);
        }
      }
      class eu {
        constructor(t = []) {
          this.queries = t;
        }
        elementStart(t, n) {
          for (let o = 0; o < this.queries.length; o++)
            this.queries[o].elementStart(t, n);
        }
        elementEnd(t) {
          for (let n = 0; n < this.queries.length; n++)
            this.queries[n].elementEnd(t);
        }
        embeddedTView(t) {
          let n = null;
          for (let o = 0; o < this.length; o++) {
            const r = null !== n ? n.length : 0,
              i = this.getByIndex(o).embeddedTView(t, r);
            i &&
              ((i.indexInDeclarationView = o),
              null !== n ? n.push(i) : (n = [i]));
          }
          return null !== n ? new eu(n) : null;
        }
        template(t, n) {
          for (let o = 0; o < this.queries.length; o++)
            this.queries[o].template(t, n);
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
      class tu {
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
              new tu(this.metadata))
            : null;
        }
        isApplyingToNode(t) {
          if (this._appliesToNextNode && 1 != (1 & this.metadata.flags)) {
            const n = this._declarationNodeIndex;
            let o = t.parent;
            for (; null !== o && 8 & o.type && o.index !== n; ) o = o.parent;
            return n === (null !== o ? o.index : -1);
          }
          return this._appliesToNextNode;
        }
        matchTNode(t, n) {
          const o = this.metadata.predicate;
          if (Array.isArray(o))
            for (let r = 0; r < o.length; r++) {
              const i = o[r];
              this.matchTNodeWithReadOption(t, n, hC(n, i)),
                this.matchTNodeWithReadOption(t, n, Rr(n, t, i, !1, !1));
            }
          else
            o === Ns
              ? 4 & n.type && this.matchTNodeWithReadOption(t, n, -1)
              : this.matchTNodeWithReadOption(t, n, Rr(n, t, o, !1, !1));
        }
        matchTNodeWithReadOption(t, n, o) {
          if (null !== o) {
            const r = this.metadata.read;
            if (null !== r)
              if (r === Is || r === Bc || (r === Ns && 4 & n.type))
                this.addMatch(n.index, -2);
              else {
                const i = Rr(n, t, r, !1, !1);
                null !== i && this.addMatch(n.index, i);
              }
            else this.addMatch(n.index, o);
          }
        }
        addMatch(t, n) {
          null === this.matches
            ? (this.matches = [t, n])
            : this.matches.push(t, n);
        }
      }
      function hC(e, t) {
        const n = e.localNames;
        if (null !== n)
          for (let o = 0; o < n.length; o += 2) if (n[o] === t) return n[o + 1];
        return null;
      }
      function mC(e, t, n, o) {
        return -1 === n
          ? (function gC(e, t) {
              return 11 & e.type ? Vi(e, t) : 4 & e.type ? Uc(e, t) : null;
            })(t, e)
          : -2 === n
          ? (function xC(e, t, n) {
              return n === Is
                ? Vi(t, e)
                : n === Ns
                ? Uc(t, e)
                : n === Bc
                ? e0(t, e)
                : void 0;
            })(e, t, o)
          : kr(e, e[1], n, t);
      }
      function n0(e, t, n, o) {
        const r = t[19].queries[o];
        if (null === r.matches) {
          const i = e.data,
            c = n.matches,
            d = [];
          for (let p = 0; p < c.length; p += 2) {
            const C = c[p];
            d.push(C < 0 ? null : mC(t, i[C], c[p + 1], n.metadata.read));
          }
          r.matches = d;
        }
        return r.matches;
      }
      function nu(e, t, n, o) {
        const r = e.queries.getByIndex(n),
          i = r.matches;
        if (null !== i) {
          const c = n0(e, t, r, n);
          for (let d = 0; d < i.length; d += 2) {
            const p = i[d];
            if (p > 0) o.push(c[d / 2]);
            else {
              const C = i[d + 1],
                D = t[-p];
              for (let I = 10; I < D.length; I++) {
                const L = D[I];
                L[17] === L[3] && nu(L[1], L, C, o);
              }
              if (null !== D[9]) {
                const I = D[9];
                for (let L = 0; L < I.length; L++) {
                  const J = I[L];
                  nu(J[1], J, C, o);
                }
              }
            }
          }
        }
        return o;
      }
      function o0(e) {
        const t = _e(),
          n = Et(),
          o = Ls();
        Zi(o + 1);
        const r = u0(n, o);
        if (e.dirty && Ot(t) === (2 == (2 & r.metadata.flags))) {
          if (null === r.matches) e.reset([]);
          else {
            const i = r.crossesNgTemplate ? nu(n, t, o, []) : n0(n, t, r, o);
            e.reset(i, Iy), e.notifyOnChanges();
          }
          return !0;
        }
        return !1;
      }
      function r0(e, t, n) {
        const o = Et();
        o.firstCreatePass &&
          (l0(o, new t0(e, t, n), -1),
          2 == (2 & t) && (o.staticViewQueries = !0)),
          a0(o, _e(), t);
      }
      function s0(e, t, n, o) {
        const r = Et();
        if (r.firstCreatePass) {
          const i = Yt();
          l0(r, new t0(t, n, o), i.index),
            (function yC(e, t) {
              const n = e.contentQueries || (e.contentQueries = []);
              t !== (n.length ? n[n.length - 1] : -1) &&
                n.push(e.queries.length - 1, t);
            })(r, e),
            2 == (2 & n) && (r.staticContentQueries = !0);
        }
        a0(r, _e(), n);
      }
      function c0() {
        return (function bC(e, t) {
          return e[19].queries[t].queryList;
        })(_e(), Ls());
      }
      function a0(e, t, n) {
        const o = new ql(4 == (4 & n));
        Op(e, t, o, o.destroy),
          null === t[19] && (t[19] = new Xl()),
          t[19].queries.push(new Ql(o));
      }
      function l0(e, t, n) {
        null === e.queries && (e.queries = new eu()),
          e.queries.track(new tu(t, n));
      }
      function u0(e, t) {
        return e.queries.getByIndex(t);
      }
      function d0(e, t) {
        return Uc(e, t);
      }
      function Bi(e) {
        const t = Pt(e) || Qt(e) || Wt(e);
        return null !== t && t.standalone;
      }
      function Hc(...e) {}
      const I0 = new Ze('Application Initializer');
      let $c = (() => {
        class e {
          constructor(n) {
            (this.appInits = n),
              (this.resolve = Hc),
              (this.reject = Hc),
              (this.initialized = !1),
              (this.done = !1),
              (this.donePromise = new Promise((o, r) => {
                (this.resolve = o), (this.reject = r);
              }));
          }
          runInitializers() {
            if (this.initialized) return;
            const n = [],
              o = () => {
                (this.done = !0), this.resolve();
              };
            if (this.appInits)
              for (let r = 0; r < this.appInits.length; r++) {
                const i = this.appInits[r]();
                if (Il(i)) n.push(i);
                else if (ff(i)) {
                  const c = new Promise((d, p) => {
                    i.subscribe({ complete: d, error: p });
                  });
                  n.push(c);
                }
              }
            Promise.all(n)
              .then(() => {
                o();
              })
              .catch(r => {
                this.reject(r);
              }),
              0 === n.length && o(),
              (this.initialized = !0);
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(mn(I0, 8));
          }),
          (e.ɵprov = Mt({ token: e, factory: e.ɵfac, providedIn: 'root' })),
          e
        );
      })();
      const T0 = new Ze('AppId', {
        providedIn: 'root',
        factory: function S0() {
          return `${cu()}${cu()}${cu()}`;
        },
      });
      function cu() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      const F0 = new Ze('Platform Initializer'),
        UC = new Ze('Platform ID', {
          providedIn: 'platform',
          factory: () => 'unknown',
        }),
        N0 = new Ze('appBootstrapListener');
      let BC = (() => {
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
          (e.ɵprov = Mt({ token: e, factory: e.ɵfac, providedIn: 'platform' })),
          e
        );
      })();
      const zc = new Ze('LocaleId', {
          providedIn: 'root',
          factory: () =>
            (function Cg(e, t = tt.Default) {
              return mn(e, t);
            })(zc, tt.Optional | tt.SkipSelf) ||
            (function jC() {
              return (typeof $localize < 'u' && $localize.locale) || ki;
            })(),
        }),
        HC = new Ze('DefaultCurrencyCode', {
          providedIn: 'root',
          factory: () => 'USD',
        });
      class $C {
        constructor(t, n) {
          (this.ngModuleFactory = t), (this.componentFactories = n);
        }
      }
      let zC = (() => {
        class e {
          compileModuleSync(n) {
            return new Wl(n);
          }
          compileModuleAsync(n) {
            return Promise.resolve(this.compileModuleSync(n));
          }
          compileModuleAndAllComponentsSync(n) {
            const o = this.compileModuleSync(n),
              i = nr(en(n).declarations).reduce((c, d) => {
                const p = Pt(d);
                return p && c.push(new Zl(p)), c;
              }, []);
            return new $C(o, i);
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
          (e.ɵprov = Mt({ token: e, factory: e.ɵfac, providedIn: 'root' })),
          e
        );
      })();
      const ZC = (() => Promise.resolve(0))();
      function au(e) {
        typeof Zone > 'u'
          ? ZC.then(() => {
              e && e.apply(null, null);
            })
          : Zone.current.scheduleMicroTask('scheduleMicrotask', e);
      }
      class no {
        constructor({
          enableLongStackTrace: t = !1,
          shouldCoalesceEventChangeDetection: n = !1,
          shouldCoalesceRunChangeDetection: o = !1,
        }) {
          if (
            ((this.hasPendingMacrotasks = !1),
            (this.hasPendingMicrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new $o(!1)),
            (this.onMicrotaskEmpty = new $o(!1)),
            (this.onStable = new $o(!1)),
            (this.onError = new $o(!1)),
            typeof Zone > 'u')
          )
            throw new Error('In this configuration Angular requires Zone.js');
          Zone.assertZonePatched();
          const r = this;
          (r._nesting = 0),
            (r._outer = r._inner = Zone.current),
            Zone.TaskTrackingZoneSpec &&
              (r._inner = r._inner.fork(new Zone.TaskTrackingZoneSpec())),
            t &&
              Zone.longStackTraceZoneSpec &&
              (r._inner = r._inner.fork(Zone.longStackTraceZoneSpec)),
            (r.shouldCoalesceEventChangeDetection = !o && n),
            (r.shouldCoalesceRunChangeDetection = o),
            (r.lastRequestAnimationFrameId = -1),
            (r.nativeRequestAnimationFrame = (function WC() {
              let e = Y.requestAnimationFrame,
                t = Y.cancelAnimationFrame;
              if (typeof Zone < 'u' && e && t) {
                const n = e[Zone.__symbol__('OriginalDelegate')];
                n && (e = n);
                const o = t[Zone.__symbol__('OriginalDelegate')];
                o && (t = o);
              }
              return {
                nativeRequestAnimationFrame: e,
                nativeCancelAnimationFrame: t,
              };
            })().nativeRequestAnimationFrame),
            (function qC(e) {
              const t = () => {
                !(function KC(e) {
                  e.isCheckStableRunning ||
                    -1 !== e.lastRequestAnimationFrameId ||
                    ((e.lastRequestAnimationFrameId =
                      e.nativeRequestAnimationFrame.call(Y, () => {
                        e.fakeTopEventTask ||
                          (e.fakeTopEventTask = Zone.root.scheduleEventTask(
                            'fakeTopEventTask',
                            () => {
                              (e.lastRequestAnimationFrameId = -1),
                                uu(e),
                                (e.isCheckStableRunning = !0),
                                lu(e),
                                (e.isCheckStableRunning = !1);
                            },
                            void 0,
                            () => {},
                            () => {}
                          )),
                          e.fakeTopEventTask.invoke();
                      })),
                    uu(e));
                })(e);
              };
              e._inner = e._inner.fork({
                name: 'angular',
                properties: { isAngularZone: !0 },
                onInvokeTask: (n, o, r, i, c, d) => {
                  try {
                    return R0(e), n.invokeTask(r, i, c, d);
                  } finally {
                    ((e.shouldCoalesceEventChangeDetection &&
                      'eventTask' === i.type) ||
                      e.shouldCoalesceRunChangeDetection) &&
                      t(),
                      k0(e);
                  }
                },
                onInvoke: (n, o, r, i, c, d, p) => {
                  try {
                    return R0(e), n.invoke(r, i, c, d, p);
                  } finally {
                    e.shouldCoalesceRunChangeDetection && t(), k0(e);
                  }
                },
                onHasTask: (n, o, r, i) => {
                  n.hasTask(r, i),
                    o === r &&
                      ('microTask' == i.change
                        ? ((e._hasPendingMicrotasks = i.microTask),
                          uu(e),
                          lu(e))
                        : 'macroTask' == i.change &&
                          (e.hasPendingMacrotasks = i.macroTask));
                },
                onHandleError: (n, o, r, i) => (
                  n.handleError(r, i),
                  e.runOutsideAngular(() => e.onError.emit(i)),
                  !1
                ),
              });
            })(r);
        }
        static isInAngularZone() {
          return typeof Zone < 'u' && !0 === Zone.current.get('isAngularZone');
        }
        static assertInAngularZone() {
          if (!no.isInAngularZone())
            throw new Error('Expected to be in Angular Zone, but it is not!');
        }
        static assertNotInAngularZone() {
          if (no.isInAngularZone())
            throw new Error('Expected to not be in Angular Zone, but it is!');
        }
        run(t, n, o) {
          return this._inner.run(t, n, o);
        }
        runTask(t, n, o, r) {
          const i = this._inner,
            c = i.scheduleEventTask('NgZoneEvent: ' + r, t, YC, Hc, Hc);
          try {
            return i.runTask(c, n, o);
          } finally {
            i.cancelTask(c);
          }
        }
        runGuarded(t, n, o) {
          return this._inner.runGuarded(t, n, o);
        }
        runOutsideAngular(t) {
          return this._outer.run(t);
        }
      }
      const YC = {};
      function lu(e) {
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
      function uu(e) {
        e.hasPendingMicrotasks = !!(
          e._hasPendingMicrotasks ||
          ((e.shouldCoalesceEventChangeDetection ||
            e.shouldCoalesceRunChangeDetection) &&
            -1 !== e.lastRequestAnimationFrameId)
        );
      }
      function R0(e) {
        e._nesting++,
          e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
      }
      function k0(e) {
        e._nesting--, lu(e);
      }
      class JC {
        constructor() {
          (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new $o()),
            (this.onMicrotaskEmpty = new $o()),
            (this.onStable = new $o()),
            (this.onError = new $o());
        }
        run(t, n, o) {
          return t.apply(n, o);
        }
        runGuarded(t, n, o) {
          return t.apply(n, o);
        }
        runOutsideAngular(t) {
          return t();
        }
        runTask(t, n, o, r) {
          return t.apply(n, o);
        }
      }
      const L0 = new Ze(''),
        V0 = new Ze('');
      let du,
        QC = (() => {
          class e {
            constructor(n, o, r) {
              (this._ngZone = n),
                (this.registry = o),
                (this._pendingCount = 0),
                (this._isZoneStable = !0),
                (this._didWork = !1),
                (this._callbacks = []),
                (this.taskTrackingZone = null),
                du ||
                  ((function XC(e) {
                    du = e;
                  })(r),
                  r.addToWindow(o)),
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
                      no.assertNotInAngularZone(),
                        au(() => {
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
                au(() => {
                  for (; 0 !== this._callbacks.length; ) {
                    let n = this._callbacks.pop();
                    clearTimeout(n.timeoutId), n.doneCb(this._didWork);
                  }
                  this._didWork = !1;
                });
              else {
                let n = this.getPendingTasks();
                (this._callbacks = this._callbacks.filter(
                  o =>
                    !o.updateCb ||
                    !o.updateCb(n) ||
                    (clearTimeout(o.timeoutId), !1)
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
            addCallback(n, o, r) {
              let i = -1;
              o &&
                o > 0 &&
                (i = setTimeout(() => {
                  (this._callbacks = this._callbacks.filter(
                    c => c.timeoutId !== i
                  )),
                    n(this._didWork, this.getPendingTasks());
                }, o)),
                this._callbacks.push({ doneCb: n, timeoutId: i, updateCb: r });
            }
            whenStable(n, o, r) {
              if (r && !this.taskTrackingZone)
                throw new Error(
                  'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?'
                );
              this.addCallback(n, o, r), this._runCallbacksIfReady();
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
            findProviders(n, o, r) {
              return [];
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)(mn(no), mn(U0), mn(V0));
            }),
            (e.ɵprov = Mt({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        U0 = (() => {
          class e {
            constructor() {
              this._applications = new Map();
            }
            registerApplication(n, o) {
              this._applications.set(n, o);
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
            findTestabilityInTree(n, o = !0) {
              return du?.findTestabilityInTree(this, n, o) ?? null;
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)();
            }),
            (e.ɵprov = Mt({
              token: e,
              factory: e.ɵfac,
              providedIn: 'platform',
            })),
            e
          );
        })(),
        Dr = null;
      const B0 = new Ze('AllowMultipleToken'),
        j0 = new Ze('PlatformOnDestroy');
      class n_ {
        constructor(t, n) {
          (this.name = t), (this.token = n);
        }
      }
      function $0(e, t, n = []) {
        const o = `Platform: ${t}`,
          r = new Ze(o);
        return (i = []) => {
          let c = pu();
          if (!c || c.injector.get(B0, !1)) {
            const d = [...n, ...i, { provide: r, useValue: !0 }];
            e
              ? e(d)
              : (function o_(e) {
                  if (Dr && !Dr.get(B0, !1)) throw new ee(400, !1);
                  Dr = e;
                  const t = e.get(G0);
                  (function H0(e) {
                    const t = e.get(F0, null);
                    t && t.forEach(n => n());
                  })(e);
                })(
                  (function z0(e = [], t) {
                    return Vo.create({
                      name: t,
                      providers: [
                        { provide: Ha, useValue: 'platform' },
                        { provide: j0, useValue: () => (Dr = null) },
                        ...e,
                      ],
                    });
                  })(d, o)
                );
          }
          return (function i_(e) {
            const t = pu();
            if (!t) throw new ee(401, !1);
            return t;
          })();
        };
      }
      function pu() {
        return Dr?.get(G0) ?? null;
      }
      let G0 = (() => {
        class e {
          constructor(n) {
            (this._injector = n),
              (this._modules = []),
              (this._destroyListeners = []),
              (this._destroyed = !1);
          }
          bootstrapModuleFactory(n, o) {
            const r = (function s_(e, t) {
                let n;
                return (
                  (n =
                    'noop' === e
                      ? new JC()
                      : ('zone.js' === e ? void 0 : e) || new no(t)),
                  n
                );
              })(
                o?.ngZone,
                (function Z0(e) {
                  return {
                    enableLongStackTrace: !1,
                    shouldCoalesceEventChangeDetection:
                      !(!e || !e.ngZoneEventCoalescing) || !1,
                    shouldCoalesceRunChangeDetection:
                      !(!e || !e.ngZoneRunCoalescing) || !1,
                  };
                })(o)
              ),
              i = [{ provide: no, useValue: r }];
            return r.run(() => {
              const c = Vo.create({
                  providers: i,
                  parent: this.injector,
                  name: n.moduleType.name,
                }),
                d = n.create(c),
                p = d.injector.get(ms, null);
              if (!p) throw new ee(402, !1);
              return (
                r.runOutsideAngular(() => {
                  const C = r.onError.subscribe({
                    next: D => {
                      p.handleError(D);
                    },
                  });
                  d.onDestroy(() => {
                    Zc(this._modules, d), C.unsubscribe();
                  });
                }),
                (function W0(e, t, n) {
                  try {
                    const o = n();
                    return Il(o)
                      ? o.catch(r => {
                          throw (
                            (t.runOutsideAngular(() => e.handleError(r)), r)
                          );
                        })
                      : o;
                  } catch (o) {
                    throw (t.runOutsideAngular(() => e.handleError(o)), o);
                  }
                })(p, r, () => {
                  const C = d.injector.get($c);
                  return (
                    C.runInitializers(),
                    C.donePromise.then(
                      () => (
                        (function uh(e) {
                          yt(e, 'Expected localeId to be defined'),
                            'string' == typeof e &&
                              (lh = e.toLowerCase().replace(/_/g, '-'));
                        })(d.injector.get(zc, ki) || ki),
                        this._moduleDoBootstrap(d),
                        d
                      )
                    )
                  );
                })
              );
            });
          }
          bootstrapModule(n, o = []) {
            const r = Y0({}, o);
            return (function e_(e, t, n) {
              const o = new Wl(n);
              return Promise.resolve(o);
            })(0, 0, n).then(i => this.bootstrapModuleFactory(i, r));
          }
          _moduleDoBootstrap(n) {
            const o = n.injector.get(Gc);
            if (n._bootstrapComponents.length > 0)
              n._bootstrapComponents.forEach(r => o.bootstrap(r));
            else {
              if (!n.instance.ngDoBootstrap) throw new ee(403, !1);
              n.instance.ngDoBootstrap(o);
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
            if (this._destroyed) throw new ee(404, !1);
            this._modules.slice().forEach(o => o.destroy()),
              this._destroyListeners.forEach(o => o()),
              this._injector.get(j0, null)?.(),
              (this._destroyed = !0);
          }
          get destroyed() {
            return this._destroyed;
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(mn(Vo));
          }),
          (e.ɵprov = Mt({ token: e, factory: e.ɵfac, providedIn: 'platform' })),
          e
        );
      })();
      function Y0(e, t) {
        return Array.isArray(t) ? t.reduce(Y0, e) : { ...e, ...t };
      }
      let Gc = (() => {
        class e {
          constructor(n, o, r, i) {
            (this._zone = n),
              (this._injector = o),
              (this._exceptionHandler = r),
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
            const c = new j.y(p => {
                (this._stable =
                  this._zone.isStable &&
                  !this._zone.hasPendingMacrotasks &&
                  !this._zone.hasPendingMicrotasks),
                  this._zone.runOutsideAngular(() => {
                    p.next(this._stable), p.complete();
                  });
              }),
              d = new j.y(p => {
                let C;
                this._zone.runOutsideAngular(() => {
                  C = this._zone.onStable.subscribe(() => {
                    no.assertNotInAngularZone(),
                      au(() => {
                        !this._stable &&
                          !this._zone.hasPendingMacrotasks &&
                          !this._zone.hasPendingMicrotasks &&
                          ((this._stable = !0), p.next(!0));
                      });
                  });
                });
                const D = this._zone.onUnstable.subscribe(() => {
                  no.assertInAngularZone(),
                    this._stable &&
                      ((this._stable = !1),
                      this._zone.runOutsideAngular(() => {
                        p.next(!1);
                      }));
                });
                return () => {
                  C.unsubscribe(), D.unsubscribe();
                };
              });
            this.isStable = (0, X.T)(c, d.pipe((0, ne.B)()));
          }
          get destroyed() {
            return this._destroyed;
          }
          get injector() {
            return this._injector;
          }
          bootstrap(n, o) {
            const r = n instanceof Vh;
            if (!this._initStatus.done) throw (!r && Bi(n), new ee(405, false));
            let i;
            (i = r ? n : this._injector.get(As).resolveComponentFactory(n)),
              this.componentTypes.push(i.componentType);
            const c = (function t_(e) {
                return e.isBoundToModule;
              })(i)
                ? void 0
                : this._injector.get($r),
              p = i.create(Vo.NULL, [], o || i.selector, c),
              C = p.location.nativeElement,
              D = p.injector.get(L0, null);
            return (
              D?.registerApplication(C),
              p.onDestroy(() => {
                this.detachView(p.hostView),
                  Zc(this.components, p),
                  D?.unregisterApplication(C);
              }),
              this._loadComponent(p),
              p
            );
          }
          tick() {
            if (this._runningTick) throw new ee(101, !1);
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
            const o = n;
            this._views.push(o), o.attachToAppRef(this);
          }
          detachView(n) {
            const o = n;
            Zc(this._views, o), o.detachFromAppRef();
          }
          _loadComponent(n) {
            this.attachView(n.hostView),
              this.tick(),
              this.components.push(n),
              this._injector
                .get(N0, [])
                .concat(this._bootstrapListeners)
                .forEach(r => r(n));
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
              () => Zc(this._destroyListeners, n)
            );
          }
          destroy() {
            if (this._destroyed) throw new ee(406, !1);
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
            return new (n || e)(mn(no), mn(Vo), mn(ms), mn($c));
          }),
          (e.ɵprov = Mt({ token: e, factory: e.ɵfac, providedIn: 'root' })),
          e
        );
      })();
      function Zc(e, t) {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      let q0 = !0;
      function a_() {
        q0 = !1;
      }
      let l_ = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = u_), e;
      })();
      function u_(e) {
        return (function d_(e, t, n) {
          if (on(e) && !n) {
            const o = ze(e.index, t);
            return new Ts(o, o);
          }
          return 47 & e.type ? new Ts(t[16], t) : null;
        })(Yt(), _e(), 16 == (16 & e));
      }
      class tg {
        constructor() {}
        supports(t) {
          return vs(t);
        }
        create(t) {
          return new x_(t);
        }
      }
      const m_ = (e, t) => t;
      class x_ {
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
            (this._trackByFn = t || m_);
        }
        forEachItem(t) {
          let n;
          for (n = this._itHead; null !== n; n = n._next) t(n);
        }
        forEachOperation(t) {
          let n = this._itHead,
            o = this._removalsHead,
            r = 0,
            i = null;
          for (; n || o; ) {
            const c = !o || (n && n.currentIndex < og(o, r, i)) ? n : o,
              d = og(c, r, i),
              p = c.currentIndex;
            if (c === o) r--, (o = o._nextRemoved);
            else if (((n = n._next), null == c.previousIndex)) r++;
            else {
              i || (i = []);
              const C = d - r,
                D = p - r;
              if (C != D) {
                for (let L = 0; L < C; L++) {
                  const J = L < i.length ? i[L] : (i[L] = 0),
                    be = J + L;
                  D <= be && be < C && (i[L] = J + 1);
                }
                i[c.previousIndex] = D - C;
              }
            }
            d !== p && t(c, d, p);
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
          if ((null == t && (t = []), !vs(t))) throw new ee(900, !1);
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let r,
            i,
            c,
            n = this._itHead,
            o = !1;
          if (Array.isArray(t)) {
            this.length = t.length;
            for (let d = 0; d < this.length; d++)
              (i = t[d]),
                (c = this._trackByFn(d, i)),
                null !== n && Object.is(n.trackById, c)
                  ? (o && (n = this._verifyReinsertion(n, i, c, d)),
                    Object.is(n.item, i) || this._addIdentityChange(n, i))
                  : ((n = this._mismatch(n, i, c, d)), (o = !0)),
                (n = n._next);
          } else
            (r = 0),
              (function R1(e, t) {
                if (Array.isArray(e))
                  for (let n = 0; n < e.length; n++) t(e[n]);
                else {
                  const n = e[Br()]();
                  let o;
                  for (; !(o = n.next()).done; ) t(o.value);
                }
              })(t, d => {
                (c = this._trackByFn(r, d)),
                  null !== n && Object.is(n.trackById, c)
                    ? (o && (n = this._verifyReinsertion(n, d, c, r)),
                      Object.is(n.item, d) || this._addIdentityChange(n, d))
                    : ((n = this._mismatch(n, d, c, r)), (o = !0)),
                  (n = n._next),
                  r++;
              }),
              (this.length = r);
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
        _mismatch(t, n, o, r) {
          let i;
          return (
            null === t ? (i = this._itTail) : ((i = t._prev), this._remove(t)),
            null !==
            (t =
              null === this._unlinkedRecords
                ? null
                : this._unlinkedRecords.get(o, null))
              ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
                this._reinsertAfter(t, i, r))
              : null !==
                (t =
                  null === this._linkedRecords
                    ? null
                    : this._linkedRecords.get(o, r))
              ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
                this._moveAfter(t, i, r))
              : (t = this._addAfter(new b_(n, o), i, r)),
            t
          );
        }
        _verifyReinsertion(t, n, o, r) {
          let i =
            null === this._unlinkedRecords
              ? null
              : this._unlinkedRecords.get(o, null);
          return (
            null !== i
              ? (t = this._reinsertAfter(i, t._prev, r))
              : t.currentIndex != r &&
                ((t.currentIndex = r), this._addToMoves(t, r)),
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
        _reinsertAfter(t, n, o) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
          const r = t._prevRemoved,
            i = t._nextRemoved;
          return (
            null === r ? (this._removalsHead = i) : (r._nextRemoved = i),
            null === i ? (this._removalsTail = r) : (i._prevRemoved = r),
            this._insertAfter(t, n, o),
            this._addToMoves(t, o),
            t
          );
        }
        _moveAfter(t, n, o) {
          return (
            this._unlink(t),
            this._insertAfter(t, n, o),
            this._addToMoves(t, o),
            t
          );
        }
        _addAfter(t, n, o) {
          return (
            this._insertAfter(t, n, o),
            (this._additionsTail =
              null === this._additionsTail
                ? (this._additionsHead = t)
                : (this._additionsTail._nextAdded = t)),
            t
          );
        }
        _insertAfter(t, n, o) {
          const r = null === n ? this._itHead : n._next;
          return (
            (t._next = r),
            (t._prev = n),
            null === r ? (this._itTail = t) : (r._prev = t),
            null === n ? (this._itHead = t) : (n._next = t),
            null === this._linkedRecords && (this._linkedRecords = new ng()),
            this._linkedRecords.put(t),
            (t.currentIndex = o),
            t
          );
        }
        _remove(t) {
          return this._addToRemovals(this._unlink(t));
        }
        _unlink(t) {
          null !== this._linkedRecords && this._linkedRecords.remove(t);
          const n = t._prev,
            o = t._next;
          return (
            null === n ? (this._itHead = o) : (n._next = o),
            null === o ? (this._itTail = n) : (o._prev = n),
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
              (this._unlinkedRecords = new ng()),
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
      class b_ {
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
      class y_ {
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
          let o;
          for (o = this._head; null !== o; o = o._nextDup)
            if (
              (null === n || n <= o.currentIndex) &&
              Object.is(o.trackById, t)
            )
              return o;
          return null;
        }
        remove(t) {
          const n = t._prevDup,
            o = t._nextDup;
          return (
            null === n ? (this._head = o) : (n._nextDup = o),
            null === o ? (this._tail = n) : (o._prevDup = n),
            null === this._head
          );
        }
      }
      class ng {
        constructor() {
          this.map = new Map();
        }
        put(t) {
          const n = t.trackById;
          let o = this.map.get(n);
          o || ((o = new y_()), this.map.set(n, o)), o.add(t);
        }
        get(t, n) {
          const r = this.map.get(t);
          return r ? r.get(t, n) : null;
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
      function og(e, t, n) {
        const o = e.previousIndex;
        if (null === o) return o;
        let r = 0;
        return n && o < n.length && (r = n[o]), o + t + r;
      }
      class rg {
        constructor() {}
        supports(t) {
          return t instanceof Map || Ml(t);
        }
        create() {
          return new C_();
        }
      }
      class C_ {
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
            if (!(t instanceof Map || Ml(t))) throw new ee(900, !1);
          } else t = new Map();
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let n = this._mapHead;
          if (
            ((this._appendAfter = null),
            this._forEach(t, (o, r) => {
              if (n && n.key === r)
                this._maybeAddToChanges(n, o),
                  (this._appendAfter = n),
                  (n = n._next);
              else {
                const i = this._getOrCreateRecordForKey(r, o);
                n = this._insertBeforeOrAppend(n, i);
              }
            }),
            n)
          ) {
            n._prev && (n._prev._next = null), (this._removalsHead = n);
            for (let o = n; null !== o; o = o._nextRemoved)
              o === this._mapHead && (this._mapHead = null),
                this._records.delete(o.key),
                (o._nextRemoved = o._next),
                (o.previousValue = o.currentValue),
                (o.currentValue = null),
                (o._prev = null),
                (o._next = null);
          }
          return (
            this._changesTail && (this._changesTail._nextChanged = null),
            this._additionsTail && (this._additionsTail._nextAdded = null),
            this.isDirty
          );
        }
        _insertBeforeOrAppend(t, n) {
          if (t) {
            const o = t._prev;
            return (
              (n._next = t),
              (n._prev = o),
              (t._prev = n),
              o && (o._next = n),
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
            const r = this._records.get(t);
            this._maybeAddToChanges(r, n);
            const i = r._prev,
              c = r._next;
            return (
              i && (i._next = c),
              c && (c._prev = i),
              (r._next = null),
              (r._prev = null),
              r
            );
          }
          const o = new __(t);
          return (
            this._records.set(t, o),
            (o.currentValue = n),
            this._addToAdditions(o),
            o
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
            : Object.keys(t).forEach(o => n(t[o], o));
        }
      }
      class __ {
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
      function ig() {
        return new xu([new tg()]);
      }
      let xu = (() => {
        class e {
          constructor(n) {
            this.factories = n;
          }
          static create(n, o) {
            if (null != o) {
              const r = o.factories.slice();
              n = n.concat(r);
            }
            return new e(n);
          }
          static extend(n) {
            return {
              provide: e,
              useFactory: o => e.create(n, o || ig()),
              deps: [[e, new us(), new ls()]],
            };
          }
          find(n) {
            const o = this.factories.find(r => r.supports(n));
            if (null != o) return o;
            throw new ee(901, !1);
          }
        }
        return (e.ɵprov = Mt({ token: e, providedIn: 'root', factory: ig })), e;
      })();
      function sg() {
        return new bu([new rg()]);
      }
      let bu = (() => {
        class e {
          constructor(n) {
            this.factories = n;
          }
          static create(n, o) {
            if (o) {
              const r = o.factories.slice();
              n = n.concat(r);
            }
            return new e(n);
          }
          static extend(n) {
            return {
              provide: e,
              useFactory: o => e.create(n, o || sg()),
              deps: [[e, new us(), new ls()]],
            };
          }
          find(n) {
            const o = this.factories.find(r => r.supports(n));
            if (o) return o;
            throw new ee(901, !1);
          }
        }
        return (e.ɵprov = Mt({ token: e, providedIn: 'root', factory: sg })), e;
      })();
      const M_ = $0(null, 'core', []);
      let w_ = (() => {
        class e {
          constructor(n) {}
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(mn(Gc));
          }),
          (e.ɵmod = at({ type: e })),
          (e.ɵinj = Me({})),
          e
        );
      })();
      function E_(e) {
        return 'boolean' == typeof e ? e : null != e && 'false' !== e;
      }
    },
    433: (et, ge, v) => {
      v.d(ge, {
        Wl: () => $,
        Fj: () => Ie,
        NI: () => on,
        oH: () => To,
        u: () => qo,
        cw: () => lt,
        sg: () => io,
        u5: () => co,
        JU: () => ee,
        JJ: () => he,
        JL: () => U,
        On: () => Ao,
        UX: () => gr,
        kI: () => Pe,
        _Y: () => Zo,
      });
      var s = v(4650),
        _ = v(6895),
        j = v(8306),
        X = v(4742),
        ne = v(8421),
        A = v(7669),
        K = v(5403),
        q = v(3268),
        fe = v(1810),
        oe = v(2076),
        ie = v(4004);
      let Ge = (() => {
          class b {
            constructor(h, O) {
              (this._renderer = h),
                (this._elementRef = O),
                (this.onChange = de => {}),
                (this.onTouched = () => {});
            }
            setProperty(h, O) {
              this._renderer.setProperty(this._elementRef.nativeElement, h, O);
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
            (b.ɵfac = function (h) {
              return new (h || b)(s.Y36(s.Qsj), s.Y36(s.SBq));
            }),
            (b.ɵdir = s.lG2({ type: b })),
            b
          );
        })(),
        we = (() => {
          class b extends Ge {}
          return (
            (b.ɵfac = (function () {
              let g;
              return function (O) {
                return (g || (g = s.n5z(b)))(O || b);
              };
            })()),
            (b.ɵdir = s.lG2({ type: b, features: [s.qOj] })),
            b
          );
        })();
      const ee = new s.OlP('NgValueAccessor'),
        Ee = { provide: ee, useExisting: (0, s.Gpc)(() => $), multi: !0 };
      let $ = (() => {
        class b extends we {
          writeValue(h) {
            this.setProperty('checked', h);
          }
        }
        return (
          (b.ɵfac = (function () {
            let g;
            return function (O) {
              return (g || (g = s.n5z(b)))(O || b);
            };
          })()),
          (b.ɵdir = s.lG2({
            type: b,
            selectors: [
              ['input', 'type', 'checkbox', 'formControlName', ''],
              ['input', 'type', 'checkbox', 'formControl', ''],
              ['input', 'type', 'checkbox', 'ngModel', ''],
            ],
            hostBindings: function (h, O) {
              1 & h &&
                s.NdJ('change', function (nt) {
                  return O.onChange(nt.target.checked);
                })('blur', function () {
                  return O.onTouched();
                });
            },
            features: [s._Bn([Ee]), s.qOj],
          })),
          b
        );
      })();
      const ae = { provide: ee, useExisting: (0, s.Gpc)(() => Ie), multi: !0 },
        Ve = new s.OlP('CompositionEventMode');
      let Ie = (() => {
        class b extends Ge {
          constructor(h, O, de) {
            super(h, O),
              (this._compositionMode = de),
              (this._composing = !1),
              null == this._compositionMode &&
                (this._compositionMode = !(function $e() {
                  const b = (0, _.q)() ? (0, _.q)().getUserAgent() : '';
                  return /android (\d+)/.test(b.toLowerCase());
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
          (b.ɵfac = function (h) {
            return new (h || b)(s.Y36(s.Qsj), s.Y36(s.SBq), s.Y36(Ve, 8));
          }),
          (b.ɵdir = s.lG2({
            type: b,
            selectors: [
              ['input', 'formControlName', '', 3, 'type', 'checkbox'],
              ['textarea', 'formControlName', ''],
              ['input', 'formControl', '', 3, 'type', 'checkbox'],
              ['textarea', 'formControl', ''],
              ['input', 'ngModel', '', 3, 'type', 'checkbox'],
              ['textarea', 'ngModel', ''],
              ['', 'ngDefaultControl', ''],
            ],
            hostBindings: function (h, O) {
              1 & h &&
                s.NdJ('input', function (nt) {
                  return O._handleInput(nt.target.value);
                })('blur', function () {
                  return O.onTouched();
                })('compositionstart', function () {
                  return O._compositionStart();
                })('compositionend', function (nt) {
                  return O._compositionEnd(nt.target.value);
                });
            },
            features: [s._Bn([ae]), s.qOj],
          })),
          b
        );
      })();
      function Ce(b) {
        return (
          null == b ||
          (('string' == typeof b || Array.isArray(b)) && 0 === b.length)
        );
      }
      function Le(b) {
        return null != b && 'number' == typeof b.length;
      }
      const Oe = new s.OlP('NgValidators'),
        Ae = new s.OlP('NgAsyncValidators'),
        te =
          /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      class Pe {
        static min(g) {
          return (function G(b) {
            return g => {
              if (Ce(g.value) || Ce(b)) return null;
              const h = parseFloat(g.value);
              return !isNaN(h) && h < b
                ? { min: { min: b, actual: g.value } }
                : null;
            };
          })(g);
        }
        static max(g) {
          return (function Q(b) {
            return g => {
              if (Ce(g.value) || Ce(b)) return null;
              const h = parseFloat(g.value);
              return !isNaN(h) && h > b
                ? { max: { max: b, actual: g.value } }
                : null;
            };
          })(g);
        }
        static required(g) {
          return (function B(b) {
            return Ce(b.value) ? { required: !0 } : null;
          })(g);
        }
        static requiredTrue(g) {
          return (function ce(b) {
            return !0 === b.value ? null : { required: !0 };
          })(g);
        }
        static email(g) {
          return (function le(b) {
            return Ce(b.value) || te.test(b.value) ? null : { email: !0 };
          })(g);
        }
        static minLength(g) {
          return (function Ne(b) {
            return g =>
              Ce(g.value) || !Le(g.value)
                ? null
                : g.value.length < b
                ? {
                    minlength: {
                      requiredLength: b,
                      actualLength: g.value.length,
                    },
                  }
                : null;
          })(g);
        }
        static maxLength(g) {
          return (function st(b) {
            return g =>
              Le(g.value) && g.value.length > b
                ? {
                    maxlength: {
                      requiredLength: b,
                      actualLength: g.value.length,
                    },
                  }
                : null;
          })(g);
        }
        static pattern(g) {
          return (function mt(b) {
            if (!b) return yt;
            let g, h;
            return (
              'string' == typeof b
                ? ((h = ''),
                  '^' !== b.charAt(0) && (h += '^'),
                  (h += b),
                  '$' !== b.charAt(b.length - 1) && (h += '$'),
                  (g = new RegExp(h)))
                : ((h = b.toString()), (g = b)),
              O => {
                if (Ce(O.value)) return null;
                const de = O.value;
                return g.test(de)
                  ? null
                  : { pattern: { requiredPattern: h, actualValue: de } };
              }
            );
          })(g);
        }
        static nullValidator(g) {
          return null;
        }
        static compose(g) {
          return Me(g);
        }
        static composeAsync(g) {
          return Z(g);
        }
      }
      function yt(b) {
        return null;
      }
      function Ue(b) {
        return null != b;
      }
      function jt(b) {
        const g = (0, s.QGY)(b) ? (0, oe.D)(b) : b;
        return (0, s.CqO)(g), g;
      }
      function an(b) {
        let g = {};
        return (
          b.forEach(h => {
            g = null != h ? { ...g, ...h } : g;
          }),
          0 === Object.keys(g).length ? null : g
        );
      }
      function Tt(b, g) {
        return g.map(h => h(b));
      }
      function qt(b) {
        return b.map(g =>
          (function Mt(b) {
            return !b.validate;
          })(g)
            ? g
            : h => g.validate(h)
        );
      }
      function Me(b) {
        if (!b) return null;
        const g = b.filter(Ue);
        return 0 == g.length
          ? null
          : function (h) {
              return an(Tt(h, g));
            };
      }
      function pe(b) {
        return null != b ? Me(qt(b)) : null;
      }
      function Z(b) {
        if (!b) return null;
        const g = b.filter(Ue);
        return 0 == g.length
          ? null
          : function (h) {
              return (function re(...b) {
                const g = (0, A.jO)(b),
                  { args: h, keys: O } = (0, X.D)(b),
                  de = new j.y(nt => {
                    const { length: Kt } = h;
                    if (!Kt) return void nt.complete();
                    const bn = new Array(Kt);
                    let zt = Kt,
                      Mn = Kt;
                    for (let Qo = 0; Qo < Kt; Qo++) {
                      let Vn = !1;
                      (0, ne.Xf)(h[Qo]).subscribe(
                        (0, K.x)(
                          nt,
                          On => {
                            Vn || ((Vn = !0), Mn--), (bn[Qo] = On);
                          },
                          () => zt--,
                          void 0,
                          () => {
                            (!zt || !Vn) &&
                              (Mn || nt.next(O ? (0, fe.n)(O, bn) : bn),
                              nt.complete());
                          }
                        )
                      );
                    }
                  });
                return g ? de.pipe((0, q.Z)(g)) : de;
              })(Tt(h, g).map(jt)).pipe((0, ie.U)(an));
            };
      }
      function ke(b) {
        return null != b ? Z(qt(b)) : null;
      }
      function Ye(b, g) {
        return null === b ? [g] : Array.isArray(b) ? [...b, g] : [b, g];
      }
      function Ke(b) {
        return b._rawValidators;
      }
      function gt(b) {
        return b._rawAsyncValidators;
      }
      function ut(b) {
        return b ? (Array.isArray(b) ? b : [b]) : [];
      }
      function St(b, g) {
        return Array.isArray(b) ? b.includes(g) : b === g;
      }
      function Ht(b, g) {
        const h = ut(g);
        return (
          ut(b).forEach(de => {
            St(h, de) || h.push(de);
          }),
          h
        );
      }
      function tt(b, g) {
        return ut(g).filter(h => !St(b, h));
      }
      class ln {
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
        _setValidators(g) {
          (this._rawValidators = g || []),
            (this._composedValidatorFn = pe(this._rawValidators));
        }
        _setAsyncValidators(g) {
          (this._rawAsyncValidators = g || []),
            (this._composedAsyncValidatorFn = ke(this._rawAsyncValidators));
        }
        get validator() {
          return this._composedValidatorFn || null;
        }
        get asyncValidator() {
          return this._composedAsyncValidatorFn || null;
        }
        _registerOnDestroy(g) {
          this._onDestroyCallbacks.push(g);
        }
        _invokeOnDestroyCallbacks() {
          this._onDestroyCallbacks.forEach(g => g()),
            (this._onDestroyCallbacks = []);
        }
        reset(g) {
          this.control && this.control.reset(g);
        }
        hasError(g, h) {
          return !!this.control && this.control.hasError(g, h);
        }
        getError(g, h) {
          return this.control ? this.control.getError(g, h) : null;
        }
      }
      class Dt extends ln {
        get formDirective() {
          return null;
        }
        get path() {
          return null;
        }
      }
      class kt extends ln {
        constructor() {
          super(...arguments),
            (this._parent = null),
            (this.name = null),
            (this.valueAccessor = null);
        }
      }
      class Fn {
        constructor(g) {
          this._cd = g;
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
      let he = (() => {
          class b extends Fn {
            constructor(h) {
              super(h);
            }
          }
          return (
            (b.ɵfac = function (h) {
              return new (h || b)(s.Y36(kt, 2));
            }),
            (b.ɵdir = s.lG2({
              type: b,
              selectors: [
                ['', 'formControlName', ''],
                ['', 'ngModel', ''],
                ['', 'formControl', ''],
              ],
              hostVars: 14,
              hostBindings: function (h, O) {
                2 & h &&
                  s.ekj('ng-untouched', O.isUntouched)(
                    'ng-touched',
                    O.isTouched
                  )('ng-pristine', O.isPristine)('ng-dirty', O.isDirty)(
                    'ng-valid',
                    O.isValid
                  )('ng-invalid', O.isInvalid)('ng-pending', O.isPending);
              },
              features: [s.qOj],
            })),
            b
          );
        })(),
        U = (() => {
          class b extends Fn {
            constructor(h) {
              super(h);
            }
          }
          return (
            (b.ɵfac = function (h) {
              return new (h || b)(s.Y36(Dt, 10));
            }),
            (b.ɵdir = s.lG2({
              type: b,
              selectors: [
                ['', 'formGroupName', ''],
                ['', 'formArrayName', ''],
                ['', 'ngModelGroup', ''],
                ['', 'formGroup', ''],
                ['form', 3, 'ngNoForm', ''],
                ['', 'ngForm', ''],
              ],
              hostVars: 16,
              hostBindings: function (h, O) {
                2 & h &&
                  s.ekj('ng-untouched', O.isUntouched)(
                    'ng-touched',
                    O.isTouched
                  )('ng-pristine', O.isPristine)('ng-dirty', O.isDirty)(
                    'ng-valid',
                    O.isValid
                  )('ng-invalid', O.isInvalid)('ng-pending', O.isPending)(
                    'ng-submitted',
                    O.isSubmitted
                  );
              },
              features: [s.qOj],
            })),
            b
          );
        })();
      const dt = 'VALID',
        at = 'INVALID',
        Qe = 'PENDING',
        Ct = 'DISABLED';
      function $t(b) {
        return (Wt(b) ? b.validators : b) || null;
      }
      function wn(b) {
        return Array.isArray(b) ? pe(b) : b || null;
      }
      function Pt(b, g) {
        return (Wt(g) ? g.asyncValidators : b) || null;
      }
      function Qt(b) {
        return Array.isArray(b) ? ke(b) : b || null;
      }
      function Wt(b) {
        return null != b && !Array.isArray(b) && 'object' == typeof b;
      }
      class Be {
        constructor(g, h) {
          (this._pendingDirty = !1),
            (this._hasOwnPendingAsyncValidator = !1),
            (this._pendingTouched = !1),
            (this._onCollectionChange = () => {}),
            (this._parent = null),
            (this.pristine = !0),
            (this.touched = !1),
            (this._onDisabledChange = []),
            (this._rawValidators = g),
            (this._rawAsyncValidators = h),
            (this._composedValidatorFn = wn(this._rawValidators)),
            (this._composedAsyncValidatorFn = Qt(this._rawAsyncValidators));
        }
        get validator() {
          return this._composedValidatorFn;
        }
        set validator(g) {
          this._rawValidators = this._composedValidatorFn = g;
        }
        get asyncValidator() {
          return this._composedAsyncValidatorFn;
        }
        set asyncValidator(g) {
          this._rawAsyncValidators = this._composedAsyncValidatorFn = g;
        }
        get parent() {
          return this._parent;
        }
        get valid() {
          return this.status === dt;
        }
        get invalid() {
          return this.status === at;
        }
        get pending() {
          return this.status == Qe;
        }
        get disabled() {
          return this.status === Ct;
        }
        get enabled() {
          return this.status !== Ct;
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
        setValidators(g) {
          (this._rawValidators = g), (this._composedValidatorFn = wn(g));
        }
        setAsyncValidators(g) {
          (this._rawAsyncValidators = g),
            (this._composedAsyncValidatorFn = Qt(g));
        }
        addValidators(g) {
          this.setValidators(Ht(g, this._rawValidators));
        }
        addAsyncValidators(g) {
          this.setAsyncValidators(Ht(g, this._rawAsyncValidators));
        }
        removeValidators(g) {
          this.setValidators(tt(g, this._rawValidators));
        }
        removeAsyncValidators(g) {
          this.setAsyncValidators(tt(g, this._rawAsyncValidators));
        }
        hasValidator(g) {
          return St(this._rawValidators, g);
        }
        hasAsyncValidator(g) {
          return St(this._rawAsyncValidators, g);
        }
        clearValidators() {
          this.validator = null;
        }
        clearAsyncValidators() {
          this.asyncValidator = null;
        }
        markAsTouched(g = {}) {
          (this.touched = !0),
            this._parent && !g.onlySelf && this._parent.markAsTouched(g);
        }
        markAllAsTouched() {
          this.markAsTouched({ onlySelf: !0 }),
            this._forEachChild(g => g.markAllAsTouched());
        }
        markAsUntouched(g = {}) {
          (this.touched = !1),
            (this._pendingTouched = !1),
            this._forEachChild(h => {
              h.markAsUntouched({ onlySelf: !0 });
            }),
            this._parent && !g.onlySelf && this._parent._updateTouched(g);
        }
        markAsDirty(g = {}) {
          (this.pristine = !1),
            this._parent && !g.onlySelf && this._parent.markAsDirty(g);
        }
        markAsPristine(g = {}) {
          (this.pristine = !0),
            (this._pendingDirty = !1),
            this._forEachChild(h => {
              h.markAsPristine({ onlySelf: !0 });
            }),
            this._parent && !g.onlySelf && this._parent._updatePristine(g);
        }
        markAsPending(g = {}) {
          (this.status = Qe),
            !1 !== g.emitEvent && this.statusChanges.emit(this.status),
            this._parent && !g.onlySelf && this._parent.markAsPending(g);
        }
        disable(g = {}) {
          const h = this._parentMarkedDirty(g.onlySelf);
          (this.status = Ct),
            (this.errors = null),
            this._forEachChild(O => {
              O.disable({ ...g, onlySelf: !0 });
            }),
            this._updateValue(),
            !1 !== g.emitEvent &&
              (this.valueChanges.emit(this.value),
              this.statusChanges.emit(this.status)),
            this._updateAncestors({ ...g, skipPristineCheck: h }),
            this._onDisabledChange.forEach(O => O(!0));
        }
        enable(g = {}) {
          const h = this._parentMarkedDirty(g.onlySelf);
          (this.status = dt),
            this._forEachChild(O => {
              O.enable({ ...g, onlySelf: !0 });
            }),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: g.emitEvent,
            }),
            this._updateAncestors({ ...g, skipPristineCheck: h }),
            this._onDisabledChange.forEach(O => O(!1));
        }
        _updateAncestors(g) {
          this._parent &&
            !g.onlySelf &&
            (this._parent.updateValueAndValidity(g),
            g.skipPristineCheck || this._parent._updatePristine(),
            this._parent._updateTouched());
        }
        setParent(g) {
          this._parent = g;
        }
        getRawValue() {
          return this.value;
        }
        updateValueAndValidity(g = {}) {
          this._setInitialStatus(),
            this._updateValue(),
            this.enabled &&
              (this._cancelExistingSubscription(),
              (this.errors = this._runValidator()),
              (this.status = this._calculateStatus()),
              (this.status === dt || this.status === Qe) &&
                this._runAsyncValidator(g.emitEvent)),
            !1 !== g.emitEvent &&
              (this.valueChanges.emit(this.value),
              this.statusChanges.emit(this.status)),
            this._parent &&
              !g.onlySelf &&
              this._parent.updateValueAndValidity(g);
        }
        _updateTreeValidity(g = { emitEvent: !0 }) {
          this._forEachChild(h => h._updateTreeValidity(g)),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: g.emitEvent,
            });
        }
        _setInitialStatus() {
          this.status = this._allControlsDisabled() ? Ct : dt;
        }
        _runValidator() {
          return this.validator ? this.validator(this) : null;
        }
        _runAsyncValidator(g) {
          if (this.asyncValidator) {
            (this.status = Qe), (this._hasOwnPendingAsyncValidator = !0);
            const h = jt(this.asyncValidator(this));
            this._asyncValidationSubscription = h.subscribe(O => {
              (this._hasOwnPendingAsyncValidator = !1),
                this.setErrors(O, { emitEvent: g });
            });
          }
        }
        _cancelExistingSubscription() {
          this._asyncValidationSubscription &&
            (this._asyncValidationSubscription.unsubscribe(),
            (this._hasOwnPendingAsyncValidator = !1));
        }
        setErrors(g, h = {}) {
          (this.errors = g), this._updateControlsErrors(!1 !== h.emitEvent);
        }
        get(g) {
          let h = g;
          return null == h ||
            (Array.isArray(h) || (h = h.split('.')), 0 === h.length)
            ? null
            : h.reduce((O, de) => O && O._find(de), this);
        }
        getError(g, h) {
          const O = h ? this.get(h) : this;
          return O && O.errors ? O.errors[g] : null;
        }
        hasError(g, h) {
          return !!this.getError(g, h);
        }
        get root() {
          let g = this;
          for (; g._parent; ) g = g._parent;
          return g;
        }
        _updateControlsErrors(g) {
          (this.status = this._calculateStatus()),
            g && this.statusChanges.emit(this.status),
            this._parent && this._parent._updateControlsErrors(g);
        }
        _initObservables() {
          (this.valueChanges = new s.vpe()), (this.statusChanges = new s.vpe());
        }
        _calculateStatus() {
          return this._allControlsDisabled()
            ? Ct
            : this.errors
            ? at
            : this._hasOwnPendingAsyncValidator ||
              this._anyControlsHaveStatus(Qe)
            ? Qe
            : this._anyControlsHaveStatus(at)
            ? at
            : dt;
        }
        _anyControlsHaveStatus(g) {
          return this._anyControls(h => h.status === g);
        }
        _anyControlsDirty() {
          return this._anyControls(g => g.dirty);
        }
        _anyControlsTouched() {
          return this._anyControls(g => g.touched);
        }
        _updatePristine(g = {}) {
          (this.pristine = !this._anyControlsDirty()),
            this._parent && !g.onlySelf && this._parent._updatePristine(g);
        }
        _updateTouched(g = {}) {
          (this.touched = this._anyControlsTouched()),
            this._parent && !g.onlySelf && this._parent._updateTouched(g);
        }
        _registerOnCollectionChange(g) {
          this._onCollectionChange = g;
        }
        _setUpdateStrategy(g) {
          Wt(g) && null != g.updateOn && (this._updateOn = g.updateOn);
        }
        _parentMarkedDirty(g) {
          return (
            !g &&
            !(!this._parent || !this._parent.dirty) &&
            !this._parent._anyControlsDirty()
          );
        }
        _find(g) {
          return null;
        }
      }
      class lt extends Be {
        constructor(g, h, O) {
          super($t(h), Pt(O, h)),
            (this.controls = g),
            this._initObservables(),
            this._setUpdateStrategy(h),
            this._setUpControls(),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: !!this.asyncValidator,
            });
        }
        registerControl(g, h) {
          return this.controls[g]
            ? this.controls[g]
            : ((this.controls[g] = h),
              h.setParent(this),
              h._registerOnCollectionChange(this._onCollectionChange),
              h);
        }
        addControl(g, h, O = {}) {
          this.registerControl(g, h),
            this.updateValueAndValidity({ emitEvent: O.emitEvent }),
            this._onCollectionChange();
        }
        removeControl(g, h = {}) {
          this.controls[g] &&
            this.controls[g]._registerOnCollectionChange(() => {}),
            delete this.controls[g],
            this.updateValueAndValidity({ emitEvent: h.emitEvent }),
            this._onCollectionChange();
        }
        setControl(g, h, O = {}) {
          this.controls[g] &&
            this.controls[g]._registerOnCollectionChange(() => {}),
            delete this.controls[g],
            h && this.registerControl(g, h),
            this.updateValueAndValidity({ emitEvent: O.emitEvent }),
            this._onCollectionChange();
        }
        contains(g) {
          return this.controls.hasOwnProperty(g) && this.controls[g].enabled;
        }
        setValue(g, h = {}) {
          (function tn(b, g, h) {
            b._forEachChild((O, de) => {
              if (void 0 === h[de]) throw new s.vHH(1002, '');
            });
          })(this, 0, g),
            Object.keys(g).forEach(O => {
              (function en(b, g, h) {
                const O = b.controls;
                if (!(g ? Object.keys(O) : O).length) throw new s.vHH(1e3, '');
                if (!O[h]) throw new s.vHH(1001, '');
              })(this, !0, O),
                this.controls[O].setValue(g[O], {
                  onlySelf: !0,
                  emitEvent: h.emitEvent,
                });
            }),
            this.updateValueAndValidity(h);
        }
        patchValue(g, h = {}) {
          null != g &&
            (Object.keys(g).forEach(O => {
              const de = this.controls[O];
              de &&
                de.patchValue(g[O], { onlySelf: !0, emitEvent: h.emitEvent });
            }),
            this.updateValueAndValidity(h));
        }
        reset(g = {}, h = {}) {
          this._forEachChild((O, de) => {
            O.reset(g[de], { onlySelf: !0, emitEvent: h.emitEvent });
          }),
            this._updatePristine(h),
            this._updateTouched(h),
            this.updateValueAndValidity(h);
        }
        getRawValue() {
          return this._reduceChildren(
            {},
            (g, h, O) => ((g[O] = h.getRawValue()), g)
          );
        }
        _syncPendingControls() {
          let g = this._reduceChildren(
            !1,
            (h, O) => !!O._syncPendingControls() || h
          );
          return g && this.updateValueAndValidity({ onlySelf: !0 }), g;
        }
        _forEachChild(g) {
          Object.keys(this.controls).forEach(h => {
            const O = this.controls[h];
            O && g(O, h);
          });
        }
        _setUpControls() {
          this._forEachChild(g => {
            g.setParent(this),
              g._registerOnCollectionChange(this._onCollectionChange);
          });
        }
        _updateValue() {
          this.value = this._reduceValue();
        }
        _anyControls(g) {
          for (const [h, O] of Object.entries(this.controls))
            if (this.contains(h) && g(O)) return !0;
          return !1;
        }
        _reduceValue() {
          return this._reduceChildren(
            {},
            (h, O, de) => ((O.enabled || this.disabled) && (h[de] = O.value), h)
          );
        }
        _reduceChildren(g, h) {
          let O = g;
          return (
            this._forEachChild((de, nt) => {
              O = h(O, de, nt);
            }),
            O
          );
        }
        _allControlsDisabled() {
          for (const g of Object.keys(this.controls))
            if (this.controls[g].enabled) return !1;
          return Object.keys(this.controls).length > 0 || this.disabled;
        }
        _find(g) {
          return this.controls.hasOwnProperty(g) ? this.controls[g] : null;
        }
      }
      function xe(b, g) {
        return [...g.path, b];
      }
      function je(b, g) {
        In(b, g),
          g.valueAccessor.writeValue(b.value),
          b.disabled && g.valueAccessor.setDisabledState?.(!0),
          (function jn(b, g) {
            g.valueAccessor.registerOnChange(h => {
              (b._pendingValue = h),
                (b._pendingChange = !0),
                (b._pendingDirty = !0),
                'change' === b.updateOn && Xt(b, g);
            });
          })(b, g),
          (function Hn(b, g) {
            const h = (O, de) => {
              g.valueAccessor.writeValue(O), de && g.viewToModelUpdate(O);
            };
            b.registerOnChange(h),
              g._registerOnDestroy(() => {
                b._unregisterOnChange(h);
              });
          })(b, g),
          (function En(b, g) {
            g.valueAccessor.registerOnTouched(() => {
              (b._pendingTouched = !0),
                'blur' === b.updateOn && b._pendingChange && Xt(b, g),
                'submit' !== b.updateOn && b.markAsTouched();
            });
          })(b, g),
          (function it(b, g) {
            if (g.valueAccessor.setDisabledState) {
              const h = O => {
                g.valueAccessor.setDisabledState(O);
              };
              b.registerOnDisabledChange(h),
                g._registerOnDestroy(() => {
                  b._unregisterOnDisabledChange(h);
                });
            }
          })(b, g);
      }
      function ht(b, g, h = !0) {
        const O = () => {};
        g.valueAccessor &&
          (g.valueAccessor.registerOnChange(O),
          g.valueAccessor.registerOnTouched(O)),
          Nn(b, g),
          b &&
            (g._invokeOnDestroyCallbacks(),
            b._registerOnCollectionChange(() => {}));
      }
      function Ut(b, g) {
        b.forEach(h => {
          h.registerOnValidatorChange && h.registerOnValidatorChange(g);
        });
      }
      function In(b, g) {
        const h = Ke(b);
        null !== g.validator
          ? b.setValidators(Ye(h, g.validator))
          : 'function' == typeof h && b.setValidators([h]);
        const O = gt(b);
        null !== g.asyncValidator
          ? b.setAsyncValidators(Ye(O, g.asyncValidator))
          : 'function' == typeof O && b.setAsyncValidators([O]);
        const de = () => b.updateValueAndValidity();
        Ut(g._rawValidators, de), Ut(g._rawAsyncValidators, de);
      }
      function Nn(b, g) {
        let h = !1;
        if (null !== b) {
          if (null !== g.validator) {
            const de = Ke(b);
            if (Array.isArray(de) && de.length > 0) {
              const nt = de.filter(Kt => Kt !== g.validator);
              nt.length !== de.length && ((h = !0), b.setValidators(nt));
            }
          }
          if (null !== g.asyncValidator) {
            const de = gt(b);
            if (Array.isArray(de) && de.length > 0) {
              const nt = de.filter(Kt => Kt !== g.asyncValidator);
              nt.length !== de.length && ((h = !0), b.setAsyncValidators(nt));
            }
          }
        }
        const O = () => {};
        return Ut(g._rawValidators, O), Ut(g._rawAsyncValidators, O), h;
      }
      function Xt(b, g) {
        b._pendingDirty && b.markAsDirty(),
          b.setValue(b._pendingValue, { emitModelToViewChange: !1 }),
          g.viewToModelUpdate(b._pendingValue),
          (b._pendingChange = !1);
      }
      function Oo(b, g) {
        if (!b.hasOwnProperty('model')) return !1;
        const h = b.model;
        return !!h.isFirstChange() || !Object.is(g, h.currentValue);
      }
      function Yn(b, g) {
        if (!g) return null;
        let h, O, de;
        return (
          Array.isArray(g),
          g.forEach(nt => {
            nt.constructor === Ie
              ? (h = nt)
              : (function Po(b) {
                  return Object.getPrototypeOf(b.constructor) === we;
                })(nt)
              ? (O = nt)
              : (de = nt);
          }),
          de || O || h || null
        );
      }
      function gn(b, g) {
        const h = b.indexOf(g);
        h > -1 && b.splice(h, 1);
      }
      function zn(b) {
        return (
          'object' == typeof b &&
          null !== b &&
          2 === Object.keys(b).length &&
          'value' in b &&
          'disabled' in b
        );
      }
      const on = class extends Be {
          constructor(g = null, h, O) {
            super($t(h), Pt(O, h)),
              (this.defaultValue = null),
              (this._onChange = []),
              (this._pendingChange = !1),
              this._applyFormState(g),
              this._setUpdateStrategy(h),
              this._initObservables(),
              this.updateValueAndValidity({
                onlySelf: !0,
                emitEvent: !!this.asyncValidator,
              }),
              Wt(h) &&
                (h.nonNullable || h.initialValueIsDefault) &&
                (this.defaultValue = zn(g) ? g.value : g);
          }
          setValue(g, h = {}) {
            (this.value = this._pendingValue = g),
              this._onChange.length &&
                !1 !== h.emitModelToViewChange &&
                this._onChange.forEach(O =>
                  O(this.value, !1 !== h.emitViewToModelChange)
                ),
              this.updateValueAndValidity(h);
          }
          patchValue(g, h = {}) {
            this.setValue(g, h);
          }
          reset(g = this.defaultValue, h = {}) {
            this._applyFormState(g),
              this.markAsPristine(h),
              this.markAsUntouched(h),
              this.setValue(this.value, h),
              (this._pendingChange = !1);
          }
          _updateValue() {}
          _anyControls(g) {
            return !1;
          }
          _allControlsDisabled() {
            return this.disabled;
          }
          registerOnChange(g) {
            this._onChange.push(g);
          }
          _unregisterOnChange(g) {
            gn(this._onChange, g);
          }
          registerOnDisabledChange(g) {
            this._onDisabledChange.push(g);
          }
          _unregisterOnDisabledChange(g) {
            gn(this._onDisabledChange, g);
          }
          _forEachChild(g) {}
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
          _applyFormState(g) {
            zn(g)
              ? ((this.value = this._pendingValue = g.value),
                g.disabled
                  ? this.disable({ onlySelf: !0, emitEvent: !1 })
                  : this.enable({ onlySelf: !0, emitEvent: !1 }))
              : (this.value = this._pendingValue = g);
          }
        },
        lr = { provide: kt, useExisting: (0, s.Gpc)(() => Ao) },
        ur = (() => Promise.resolve(null))();
      let Ao = (() => {
          class b extends kt {
            constructor(h, O, de, nt, Kt) {
              super(),
                (this._changeDetectorRef = Kt),
                (this.control = new on()),
                (this._registered = !1),
                (this.update = new s.vpe()),
                (this._parent = h),
                this._setValidators(O),
                this._setAsyncValidators(de),
                (this.valueAccessor = Yn(0, nt));
            }
            ngOnChanges(h) {
              if ((this._checkForErrors(), !this._registered || 'name' in h)) {
                if (
                  this._registered &&
                  (this._checkName(), this.formDirective)
                ) {
                  const O = h.name.previousValue;
                  this.formDirective.removeControl({
                    name: O,
                    path: this._getPath(O),
                  });
                }
                this._setUpControl();
              }
              'isDisabled' in h && this._updateDisabled(h),
                Oo(h, this.viewModel) &&
                  (this._updateValue(this.model),
                  (this.viewModel = this.model));
            }
            ngOnDestroy() {
              this.formDirective && this.formDirective.removeControl(this);
            }
            get path() {
              return this._getPath(this.name);
            }
            get formDirective() {
              return this._parent ? this._parent.formDirective : null;
            }
            viewToModelUpdate(h) {
              (this.viewModel = h), this.update.emit(h);
            }
            _setUpControl() {
              this._setUpdateStrategy(),
                this._isStandalone()
                  ? this._setUpStandalone()
                  : this.formDirective.addControl(this),
                (this._registered = !0);
            }
            _setUpdateStrategy() {
              this.options &&
                null != this.options.updateOn &&
                (this.control._updateOn = this.options.updateOn);
            }
            _isStandalone() {
              return (
                !this._parent || !(!this.options || !this.options.standalone)
              );
            }
            _setUpStandalone() {
              je(this.control, this),
                this.control.updateValueAndValidity({ emitEvent: !1 });
            }
            _checkForErrors() {
              this._isStandalone() || this._checkParentType(),
                this._checkName();
            }
            _checkParentType() {}
            _checkName() {
              this.options &&
                this.options.name &&
                (this.name = this.options.name),
                this._isStandalone();
            }
            _updateValue(h) {
              ur.then(() => {
                this.control.setValue(h, { emitViewToModelChange: !1 }),
                  this._changeDetectorRef?.markForCheck();
              });
            }
            _updateDisabled(h) {
              const O = h.isDisabled.currentValue,
                de = 0 !== O && (0, s.D6c)(O);
              ur.then(() => {
                de && !this.control.disabled
                  ? this.control.disable()
                  : !de && this.control.disabled && this.control.enable(),
                  this._changeDetectorRef?.markForCheck();
              });
            }
            _getPath(h) {
              return this._parent ? xe(h, this._parent) : [h];
            }
          }
          return (
            (b.ɵfac = function (h) {
              return new (h || b)(
                s.Y36(Dt, 9),
                s.Y36(Oe, 10),
                s.Y36(Ae, 10),
                s.Y36(ee, 10),
                s.Y36(s.sBO, 8)
              );
            }),
            (b.ɵdir = s.lG2({
              type: b,
              selectors: [
                [
                  '',
                  'ngModel',
                  '',
                  3,
                  'formControlName',
                  '',
                  3,
                  'formControl',
                  '',
                ],
              ],
              inputs: {
                name: 'name',
                isDisabled: ['disabled', 'isDisabled'],
                model: ['ngModel', 'model'],
                options: ['ngModelOptions', 'options'],
              },
              outputs: { update: 'ngModelChange' },
              exportAs: ['ngModel'],
              features: [s._Bn([lr]), s.qOj, s.TTD],
            })),
            b
          );
        })(),
        Zo = (() => {
          class b {}
          return (
            (b.ɵfac = function (h) {
              return new (h || b)();
            }),
            (b.ɵdir = s.lG2({
              type: b,
              selectors: [
                ['form', 3, 'ngNoForm', '', 3, 'ngNativeValidate', ''],
              ],
              hostAttrs: ['novalidate', ''],
            })),
            b
          );
        })(),
        Mr = (() => {
          class b {}
          return (
            (b.ɵfac = function (h) {
              return new (h || b)();
            }),
            (b.ɵmod = s.oAB({ type: b })),
            (b.ɵinj = s.cJS({})),
            b
          );
        })();
      const Yo = new s.OlP('NgModelWithFormControlWarning'),
        qr = { provide: kt, useExisting: (0, s.Gpc)(() => To) };
      let To = (() => {
        class b extends kt {
          constructor(h, O, de, nt) {
            super(),
              (this._ngModelWarningConfig = nt),
              (this.update = new s.vpe()),
              (this._ngModelWarningSent = !1),
              this._setValidators(h),
              this._setAsyncValidators(O),
              (this.valueAccessor = Yn(0, de));
          }
          set isDisabled(h) {}
          ngOnChanges(h) {
            if (this._isControlChanged(h)) {
              const O = h.form.previousValue;
              O && ht(O, this, !1),
                je(this.form, this),
                this.form.updateValueAndValidity({ emitEvent: !1 });
            }
            Oo(h, this.viewModel) &&
              (this.form.setValue(this.model), (this.viewModel = this.model));
          }
          ngOnDestroy() {
            this.form && ht(this.form, this, !1);
          }
          get path() {
            return [];
          }
          get control() {
            return this.form;
          }
          viewToModelUpdate(h) {
            (this.viewModel = h), this.update.emit(h);
          }
          _isControlChanged(h) {
            return h.hasOwnProperty('form');
          }
        }
        return (
          (b._ngModelWarningSentOnce = !1),
          (b.ɵfac = function (h) {
            return new (h || b)(
              s.Y36(Oe, 10),
              s.Y36(Ae, 10),
              s.Y36(ee, 10),
              s.Y36(Yo, 8)
            );
          }),
          (b.ɵdir = s.lG2({
            type: b,
            selectors: [['', 'formControl', '']],
            inputs: {
              form: ['formControl', 'form'],
              isDisabled: ['disabled', 'isDisabled'],
              model: ['ngModel', 'model'],
            },
            outputs: { update: 'ngModelChange' },
            exportAs: ['ngForm'],
            features: [s._Bn([qr]), s.qOj, s.TTD],
          })),
          b
        );
      })();
      const qn = { provide: Dt, useExisting: (0, s.Gpc)(() => io) };
      let io = (() => {
        class b extends Dt {
          constructor(h, O) {
            super(),
              (this.validators = h),
              (this.asyncValidators = O),
              (this.submitted = !1),
              (this._onCollectionChange = () => this._updateDomValue()),
              (this.directives = []),
              (this.form = null),
              (this.ngSubmit = new s.vpe()),
              this._setValidators(h),
              this._setAsyncValidators(O);
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
              (Nn(this.form, this),
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
            const O = this.form.get(h.path);
            return (
              je(O, h),
              O.updateValueAndValidity({ emitEvent: !1 }),
              this.directives.push(h),
              O
            );
          }
          getControl(h) {
            return this.form.get(h.path);
          }
          removeControl(h) {
            ht(h.control || null, h, !1),
              (function fo(b, g) {
                const h = b.indexOf(g);
                h > -1 && b.splice(h, 1);
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
          updateModel(h, O) {
            this.form.get(h.path).setValue(O);
          }
          onSubmit(h) {
            return (
              (this.submitted = !0),
              (function $n(b, g) {
                b._syncPendingControls(),
                  g.forEach(h => {
                    const O = h.control;
                    'submit' === O.updateOn &&
                      O._pendingChange &&
                      (h.viewToModelUpdate(O._pendingValue),
                      (O._pendingChange = !1));
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
              const O = h.control,
                de = this.form.get(h.path);
              O !== de &&
                (ht(O || null, h),
                (b => b instanceof on)(de) && (je(de, h), (h.control = de)));
            }),
              this.form._updateTreeValidity({ emitEvent: !1 });
          }
          _setUpFormContainer(h) {
            const O = this.form.get(h.path);
            (function Rn(b, g) {
              In(b, g);
            })(O, h),
              O.updateValueAndValidity({ emitEvent: !1 });
          }
          _cleanUpFormContainer(h) {
            if (this.form) {
              const O = this.form.get(h.path);
              O &&
                (function fn(b, g) {
                  return Nn(b, g);
                })(O, h) &&
                O.updateValueAndValidity({ emitEvent: !1 });
            }
          }
          _updateRegistrations() {
            this.form._registerOnCollectionChange(this._onCollectionChange),
              this._oldForm &&
                this._oldForm._registerOnCollectionChange(() => {});
          }
          _updateValidators() {
            In(this.form, this), this._oldForm && Nn(this._oldForm, this);
          }
          _checkFormPresent() {}
        }
        return (
          (b.ɵfac = function (h) {
            return new (h || b)(s.Y36(Oe, 10), s.Y36(Ae, 10));
          }),
          (b.ɵdir = s.lG2({
            type: b,
            selectors: [['', 'formGroup', '']],
            hostBindings: function (h, O) {
              1 & h &&
                s.NdJ('submit', function (nt) {
                  return O.onSubmit(nt);
                })('reset', function () {
                  return O.onReset();
                });
            },
            inputs: { form: ['formGroup', 'form'] },
            outputs: { ngSubmit: 'ngSubmit' },
            exportAs: ['ngForm'],
            features: [s._Bn([qn]), s.qOj, s.TTD],
          })),
          b
        );
      })();
      const dr = { provide: kt, useExisting: (0, s.Gpc)(() => qo) };
      let qo = (() => {
          class b extends kt {
            constructor(h, O, de, nt, Kt) {
              super(),
                (this._ngModelWarningConfig = Kt),
                (this._added = !1),
                (this.update = new s.vpe()),
                (this._ngModelWarningSent = !1),
                (this._parent = h),
                this._setValidators(O),
                this._setAsyncValidators(de),
                (this.valueAccessor = Yn(0, nt));
            }
            set isDisabled(h) {}
            ngOnChanges(h) {
              this._added || this._setUpControl(),
                Oo(h, this.viewModel) &&
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
              return xe(
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
            (b._ngModelWarningSentOnce = !1),
            (b.ɵfac = function (h) {
              return new (h || b)(
                s.Y36(Dt, 13),
                s.Y36(Oe, 10),
                s.Y36(Ae, 10),
                s.Y36(ee, 10),
                s.Y36(Yo, 8)
              );
            }),
            (b.ɵdir = s.lG2({
              type: b,
              selectors: [['', 'formControlName', '']],
              inputs: {
                name: ['formControlName', 'name'],
                isDisabled: ['disabled', 'isDisabled'],
                model: ['ngModel', 'model'],
              },
              outputs: { update: 'ngModelChange' },
              features: [s._Bn([dr]), s.qOj, s.TTD],
            })),
            b
          );
        })(),
        Wn = (() => {
          class b {}
          return (
            (b.ɵfac = function (h) {
              return new (h || b)();
            }),
            (b.ɵmod = s.oAB({ type: b })),
            (b.ɵinj = s.cJS({ imports: [Mr] })),
            b
          );
        })(),
        co = (() => {
          class b {}
          return (
            (b.ɵfac = function (h) {
              return new (h || b)();
            }),
            (b.ɵmod = s.oAB({ type: b })),
            (b.ɵinj = s.cJS({ imports: [Wn] })),
            b
          );
        })(),
        gr = (() => {
          class b {
            static withConfig(h) {
              return {
                ngModule: b,
                providers: [
                  { provide: Yo, useValue: h.warnOnNgModelWithFormControl },
                ],
              };
            }
          }
          return (
            (b.ɵfac = function (h) {
              return new (h || b)();
            }),
            (b.ɵmod = s.oAB({ type: b })),
            (b.ɵinj = s.cJS({ imports: [Wn] })),
            b
          );
        })();
    },
    1481: (et, ge, v) => {
      v.d(ge, { Dx: () => H, H7: () => en, b2: () => Fn, q6: () => tt });
      var s = v(6895),
        _ = v(4650);
      class j extends s.w_ {
        constructor() {
          super(...arguments), (this.supportsDOMEvents = !0);
        }
      }
      class X extends j {
        static makeCurrent() {
          (0, s.HT)(new X());
        }
        onAndCancel(N, T, R) {
          return (
            N.addEventListener(T, R, !1),
            () => {
              N.removeEventListener(T, R, !1);
            }
          );
        }
        dispatchEvent(N, T) {
          N.dispatchEvent(T);
        }
        remove(N) {
          N.parentNode && N.parentNode.removeChild(N);
        }
        createElement(N, T) {
          return (T = T || this.getDefaultDocument()).createElement(N);
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument('fakeTitle');
        }
        getDefaultDocument() {
          return document;
        }
        isElementNode(N) {
          return N.nodeType === Node.ELEMENT_NODE;
        }
        isShadowRoot(N) {
          return N instanceof DocumentFragment;
        }
        getGlobalEventTarget(N, T) {
          return 'window' === T
            ? window
            : 'document' === T
            ? N
            : 'body' === T
            ? N.body
            : null;
        }
        getBaseHref(N) {
          const T = (function A() {
            return (
              (ne = ne || document.querySelector('base')),
              ne ? ne.getAttribute('href') : null
            );
          })();
          return null == T
            ? null
            : (function q(z) {
                (K = K || document.createElement('a')),
                  K.setAttribute('href', z);
                const N = K.pathname;
                return '/' === N.charAt(0) ? N : `/${N}`;
              })(T);
        }
        resetBaseElement() {
          ne = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        getCookie(N) {
          return (0, s.Mx)(document.cookie, N);
        }
      }
      let K,
        ne = null;
      const fe = new _.OlP('TRANSITION_ID'),
        oe = [
          {
            provide: _.ip1,
            useFactory: function re(z, N, T) {
              return () => {
                T.get(_.CZH).donePromise.then(() => {
                  const R = (0, s.q)(),
                    xe = N.querySelectorAll(`style[ng-transition="${z}"]`);
                  for (let je = 0; je < xe.length; je++) R.remove(xe[je]);
                });
              };
            },
            deps: [fe, s.K0, _.zs3],
            multi: !0,
          },
        ];
      let Ge = (() => {
        class z {
          build() {
            return new XMLHttpRequest();
          }
        }
        return (
          (z.ɵfac = function (T) {
            return new (T || z)();
          }),
          (z.ɵprov = _.Yz7({ token: z, factory: z.ɵfac })),
          z
        );
      })();
      const we = new _.OlP('EventManagerPlugins');
      let ee = (() => {
        class z {
          constructor(T, R) {
            (this._zone = R),
              (this._eventNameToPlugin = new Map()),
              T.forEach(xe => (xe.manager = this)),
              (this._plugins = T.slice().reverse());
          }
          addEventListener(T, R, xe) {
            return this._findPluginFor(R).addEventListener(T, R, xe);
          }
          addGlobalEventListener(T, R, xe) {
            return this._findPluginFor(R).addGlobalEventListener(T, R, xe);
          }
          getZone() {
            return this._zone;
          }
          _findPluginFor(T) {
            const R = this._eventNameToPlugin.get(T);
            if (R) return R;
            const xe = this._plugins;
            for (let je = 0; je < xe.length; je++) {
              const ht = xe[je];
              if (ht.supports(T)) return this._eventNameToPlugin.set(T, ht), ht;
            }
            throw new Error(`No event manager plugin found for event ${T}`);
          }
        }
        return (
          (z.ɵfac = function (T) {
            return new (T || z)(_.LFG(we), _.LFG(_.R0b));
          }),
          (z.ɵprov = _.Yz7({ token: z, factory: z.ɵfac })),
          z
        );
      })();
      class Ee {
        constructor(N) {
          this._doc = N;
        }
        addGlobalEventListener(N, T, R) {
          const xe = (0, s.q)().getGlobalEventTarget(this._doc, N);
          if (!xe)
            throw new Error(`Unsupported event target ${xe} for event ${T}`);
          return this.addEventListener(xe, T, R);
        }
      }
      let $ = (() => {
          class z {
            constructor() {
              this._stylesSet = new Set();
            }
            addStyles(T) {
              const R = new Set();
              T.forEach(xe => {
                this._stylesSet.has(xe) || (this._stylesSet.add(xe), R.add(xe));
              }),
                this.onStylesAdded(R);
            }
            onStylesAdded(T) {}
            getAllStyles() {
              return Array.from(this._stylesSet);
            }
          }
          return (
            (z.ɵfac = function (T) {
              return new (T || z)();
            }),
            (z.ɵprov = _.Yz7({ token: z, factory: z.ɵfac })),
            z
          );
        })(),
        ae = (() => {
          class z extends $ {
            constructor(T) {
              super(),
                (this._doc = T),
                (this._hostNodes = new Map()),
                this._hostNodes.set(T.head, []);
            }
            _addStylesToHost(T, R, xe) {
              T.forEach(je => {
                const ht = this._doc.createElement('style');
                (ht.textContent = je), xe.push(R.appendChild(ht));
              });
            }
            addHost(T) {
              const R = [];
              this._addStylesToHost(this._stylesSet, T, R),
                this._hostNodes.set(T, R);
            }
            removeHost(T) {
              const R = this._hostNodes.get(T);
              R && R.forEach($e), this._hostNodes.delete(T);
            }
            onStylesAdded(T) {
              this._hostNodes.forEach((R, xe) => {
                this._addStylesToHost(T, xe, R);
              });
            }
            ngOnDestroy() {
              this._hostNodes.forEach(T => T.forEach($e));
            }
          }
          return (
            (z.ɵfac = function (T) {
              return new (T || z)(_.LFG(s.K0));
            }),
            (z.ɵprov = _.Yz7({ token: z, factory: z.ɵfac })),
            z
          );
        })();
      function $e(z) {
        (0, s.q)().remove(z);
      }
      const Ve = {
          svg: 'http://www.w3.org/2000/svg',
          xhtml: 'http://www.w3.org/1999/xhtml',
          xlink: 'http://www.w3.org/1999/xlink',
          xml: 'http://www.w3.org/XML/1998/namespace',
          xmlns: 'http://www.w3.org/2000/xmlns/',
          math: 'http://www.w3.org/1998/MathML/',
        },
        Ie = /%COMP%/g;
      function G(z, N, T) {
        for (let R = 0; R < N.length; R++) {
          let xe = N[R];
          Array.isArray(xe)
            ? G(z, xe, T)
            : ((xe = xe.replace(Ie, z)), T.push(xe));
        }
        return T;
      }
      function Q(z) {
        return N => {
          if ('__ngUnwrap__' === N) return z;
          !1 === z(N) && (N.preventDefault(), (N.returnValue = !1));
        };
      }
      let ce = (() => {
        class z {
          constructor(T, R, xe) {
            (this.eventManager = T),
              (this.sharedStylesHost = R),
              (this.appId = xe),
              (this.rendererByCompId = new Map()),
              (this.defaultRenderer = new le(T));
          }
          createRenderer(T, R) {
            if (!T || !R) return this.defaultRenderer;
            switch (R.encapsulation) {
              case _.ifc.Emulated: {
                let xe = this.rendererByCompId.get(R.id);
                return (
                  xe ||
                    ((xe = new yt(
                      this.eventManager,
                      this.sharedStylesHost,
                      R,
                      this.appId
                    )),
                    this.rendererByCompId.set(R.id, xe)),
                  xe.applyToHost(T),
                  xe
                );
              }
              case 1:
              case _.ifc.ShadowDom:
                return new Ue(this.eventManager, this.sharedStylesHost, T, R);
              default:
                if (!this.rendererByCompId.has(R.id)) {
                  const xe = G(R.id, R.styles, []);
                  this.sharedStylesHost.addStyles(xe),
                    this.rendererByCompId.set(R.id, this.defaultRenderer);
                }
                return this.defaultRenderer;
            }
          }
          begin() {}
          end() {}
        }
        return (
          (z.ɵfac = function (T) {
            return new (T || z)(_.LFG(ee), _.LFG(ae), _.LFG(_.AFp));
          }),
          (z.ɵprov = _.Yz7({ token: z, factory: z.ɵfac })),
          z
        );
      })();
      class le {
        constructor(N) {
          (this.eventManager = N),
            (this.data = Object.create(null)),
            (this.destroyNode = null);
        }
        destroy() {}
        createElement(N, T) {
          return T
            ? document.createElementNS(Ve[T] || T, N)
            : document.createElement(N);
        }
        createComment(N) {
          return document.createComment(N);
        }
        createText(N) {
          return document.createTextNode(N);
        }
        appendChild(N, T) {
          (mt(N) ? N.content : N).appendChild(T);
        }
        insertBefore(N, T, R) {
          N && (mt(N) ? N.content : N).insertBefore(T, R);
        }
        removeChild(N, T) {
          N && N.removeChild(T);
        }
        selectRootElement(N, T) {
          let R = 'string' == typeof N ? document.querySelector(N) : N;
          if (!R)
            throw new Error(`The selector "${N}" did not match any elements`);
          return T || (R.textContent = ''), R;
        }
        parentNode(N) {
          return N.parentNode;
        }
        nextSibling(N) {
          return N.nextSibling;
        }
        setAttribute(N, T, R, xe) {
          if (xe) {
            T = xe + ':' + T;
            const je = Ve[xe];
            je ? N.setAttributeNS(je, T, R) : N.setAttribute(T, R);
          } else N.setAttribute(T, R);
        }
        removeAttribute(N, T, R) {
          if (R) {
            const xe = Ve[R];
            xe ? N.removeAttributeNS(xe, T) : N.removeAttribute(`${R}:${T}`);
          } else N.removeAttribute(T);
        }
        addClass(N, T) {
          N.classList.add(T);
        }
        removeClass(N, T) {
          N.classList.remove(T);
        }
        setStyle(N, T, R, xe) {
          xe & (_.JOm.DashCase | _.JOm.Important)
            ? N.style.setProperty(T, R, xe & _.JOm.Important ? 'important' : '')
            : (N.style[T] = R);
        }
        removeStyle(N, T, R) {
          R & _.JOm.DashCase ? N.style.removeProperty(T) : (N.style[T] = '');
        }
        setProperty(N, T, R) {
          N[T] = R;
        }
        setValue(N, T) {
          N.nodeValue = T;
        }
        listen(N, T, R) {
          return 'string' == typeof N
            ? this.eventManager.addGlobalEventListener(N, T, Q(R))
            : this.eventManager.addEventListener(N, T, Q(R));
        }
      }
      function mt(z) {
        return 'TEMPLATE' === z.tagName && void 0 !== z.content;
      }
      class yt extends le {
        constructor(N, T, R, xe) {
          super(N), (this.component = R);
          const je = G(xe + '-' + R.id, R.styles, []);
          T.addStyles(je),
            (this.contentAttr = (function te(z) {
              return '_ngcontent-%COMP%'.replace(Ie, z);
            })(xe + '-' + R.id)),
            (this.hostAttr = (function Pe(z) {
              return '_nghost-%COMP%'.replace(Ie, z);
            })(xe + '-' + R.id));
        }
        applyToHost(N) {
          super.setAttribute(N, this.hostAttr, '');
        }
        createElement(N, T) {
          const R = super.createElement(N, T);
          return super.setAttribute(R, this.contentAttr, ''), R;
        }
      }
      class Ue extends le {
        constructor(N, T, R, xe) {
          super(N),
            (this.sharedStylesHost = T),
            (this.hostEl = R),
            (this.shadowRoot = R.attachShadow({ mode: 'open' })),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const je = G(xe.id, xe.styles, []);
          for (let ht = 0; ht < je.length; ht++) {
            const Ut = document.createElement('style');
            (Ut.textContent = je[ht]), this.shadowRoot.appendChild(Ut);
          }
        }
        nodeOrShadowRoot(N) {
          return N === this.hostEl ? this.shadowRoot : N;
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
        appendChild(N, T) {
          return super.appendChild(this.nodeOrShadowRoot(N), T);
        }
        insertBefore(N, T, R) {
          return super.insertBefore(this.nodeOrShadowRoot(N), T, R);
        }
        removeChild(N, T) {
          return super.removeChild(this.nodeOrShadowRoot(N), T);
        }
        parentNode(N) {
          return this.nodeOrShadowRoot(
            super.parentNode(this.nodeOrShadowRoot(N))
          );
        }
      }
      let jt = (() => {
        class z extends Ee {
          constructor(T) {
            super(T);
          }
          supports(T) {
            return !0;
          }
          addEventListener(T, R, xe) {
            return (
              T.addEventListener(R, xe, !1),
              () => this.removeEventListener(T, R, xe)
            );
          }
          removeEventListener(T, R, xe) {
            return T.removeEventListener(R, xe);
          }
        }
        return (
          (z.ɵfac = function (T) {
            return new (T || z)(_.LFG(s.K0));
          }),
          (z.ɵprov = _.Yz7({ token: z, factory: z.ɵfac })),
          z
        );
      })();
      const an = ['alt', 'control', 'meta', 'shift'],
        Mt = {
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
        qt = {
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
        Me = {
          alt: z => z.altKey,
          control: z => z.ctrlKey,
          meta: z => z.metaKey,
          shift: z => z.shiftKey,
        };
      let pe = (() => {
        class z extends Ee {
          constructor(T) {
            super(T);
          }
          supports(T) {
            return null != z.parseEventName(T);
          }
          addEventListener(T, R, xe) {
            const je = z.parseEventName(R),
              ht = z.eventCallback(je.fullKey, xe, this.manager.getZone());
            return this.manager
              .getZone()
              .runOutsideAngular(() =>
                (0, s.q)().onAndCancel(T, je.domEventName, ht)
              );
          }
          static parseEventName(T) {
            const R = T.toLowerCase().split('.'),
              xe = R.shift();
            if (0 === R.length || ('keydown' !== xe && 'keyup' !== xe))
              return null;
            const je = z._normalizeKey(R.pop());
            let ht = '';
            if (
              (an.forEach(it => {
                const In = R.indexOf(it);
                In > -1 && (R.splice(In, 1), (ht += it + '.'));
              }),
              (ht += je),
              0 != R.length || 0 === je.length)
            )
              return null;
            const Ut = {};
            return (Ut.domEventName = xe), (Ut.fullKey = ht), Ut;
          }
          static getEventFullKey(T) {
            let R = '',
              xe = (function Z(z) {
                let N = z.key;
                if (null == N) {
                  if (((N = z.keyIdentifier), null == N)) return 'Unidentified';
                  N.startsWith('U+') &&
                    ((N = String.fromCharCode(parseInt(N.substring(2), 16))),
                    3 === z.location && qt.hasOwnProperty(N) && (N = qt[N]));
                }
                return Mt[N] || N;
              })(T);
            return (
              (xe = xe.toLowerCase()),
              ' ' === xe ? (xe = 'space') : '.' === xe && (xe = 'dot'),
              an.forEach(je => {
                je != xe && Me[je](T) && (R += je + '.');
              }),
              (R += xe),
              R
            );
          }
          static eventCallback(T, R, xe) {
            return je => {
              z.getEventFullKey(je) === T && xe.runGuarded(() => R(je));
            };
          }
          static _normalizeKey(T) {
            return 'esc' === T ? 'escape' : T;
          }
        }
        return (
          (z.ɵfac = function (T) {
            return new (T || z)(_.LFG(s.K0));
          }),
          (z.ɵprov = _.Yz7({ token: z, factory: z.ɵfac })),
          z
        );
      })();
      const tt = (0, _.eFA)(_._c5, 'browser', [
          { provide: _.Lbi, useValue: s.bD },
          {
            provide: _.g9A,
            useValue: function gt() {
              X.makeCurrent();
            },
            multi: !0,
          },
          {
            provide: s.K0,
            useFactory: function St() {
              return (0, _.RDi)(document), document;
            },
            deps: [],
          },
        ]),
        ln = new _.OlP(''),
        Dt = [
          {
            provide: _.rWj,
            useClass: class ie {
              addToWindow(N) {
                (_.dqk.getAngularTestability = (R, xe = !0) => {
                  const je = N.findTestabilityInTree(R, xe);
                  if (null == je)
                    throw new Error('Could not find testability for element.');
                  return je;
                }),
                  (_.dqk.getAllAngularTestabilities = () =>
                    N.getAllTestabilities()),
                  (_.dqk.getAllAngularRootElements = () =>
                    N.getAllRootElements()),
                  _.dqk.frameworkStabilizers ||
                    (_.dqk.frameworkStabilizers = []),
                  _.dqk.frameworkStabilizers.push(R => {
                    const xe = _.dqk.getAllAngularTestabilities();
                    let je = xe.length,
                      ht = !1;
                    const Ut = function (it) {
                      (ht = ht || it), je--, 0 == je && R(ht);
                    };
                    xe.forEach(function (it) {
                      it.whenStable(Ut);
                    });
                  });
              }
              findTestabilityInTree(N, T, R) {
                return null == T
                  ? null
                  : N.getTestability(T) ??
                      (R
                        ? (0, s.q)().isShadowRoot(T)
                          ? this.findTestabilityInTree(N, T.host, !0)
                          : this.findTestabilityInTree(N, T.parentElement, !0)
                        : null);
              }
            },
            deps: [],
          },
          { provide: _.lri, useClass: _.dDg, deps: [_.R0b, _.eoX, _.rWj] },
          { provide: _.dDg, useClass: _.dDg, deps: [_.R0b, _.eoX, _.rWj] },
        ],
        kt = [
          { provide: _.zSh, useValue: 'root' },
          {
            provide: _.qLn,
            useFactory: function ut() {
              return new _.qLn();
            },
            deps: [],
          },
          { provide: we, useClass: jt, multi: !0, deps: [s.K0, _.R0b, _.Lbi] },
          { provide: we, useClass: pe, multi: !0, deps: [s.K0] },
          { provide: ce, useClass: ce, deps: [ee, ae, _.AFp] },
          { provide: _.FYo, useExisting: ce },
          { provide: $, useExisting: ae },
          { provide: ae, useClass: ae, deps: [s.K0] },
          { provide: ee, useClass: ee, deps: [we, _.R0b] },
          { provide: s.JF, useClass: Ge, deps: [] },
          [],
        ];
      let Fn = (() => {
          class z {
            constructor(T) {}
            static withServerTransition(T) {
              return {
                ngModule: z,
                providers: [
                  { provide: _.AFp, useValue: T.appId },
                  { provide: fe, useExisting: _.AFp },
                  oe,
                ],
              };
            }
          }
          return (
            (z.ɵfac = function (T) {
              return new (T || z)(_.LFG(ln, 12));
            }),
            (z.ɵmod = _.oAB({ type: z })),
            (z.ɵinj = _.cJS({
              providers: [...kt, ...Dt],
              imports: [s.ez, _.hGG],
            })),
            z
          );
        })(),
        H = (() => {
          class z {
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
            (z.ɵfac = function (T) {
              return new (T || z)(_.LFG(s.K0));
            }),
            (z.ɵprov = _.Yz7({
              token: z,
              factory: function (T) {
                let R = null;
                return (
                  (R = T
                    ? new T()
                    : (function U() {
                        return new H((0, _.LFG)(s.K0));
                      })()),
                  R
                );
              },
              providedIn: 'root',
            })),
            z
          );
        })();
      typeof window < 'u' && window;
      let en = (() => {
          class z {}
          return (
            (z.ɵfac = function (T) {
              return new (T || z)();
            }),
            (z.ɵprov = _.Yz7({
              token: z,
              factory: function (T) {
                let R = null;
                return (R = T ? new (T || z)() : _.LFG(Be)), R;
              },
              providedIn: 'root',
            })),
            z
          );
        })(),
        Be = (() => {
          class z extends en {
            constructor(T) {
              super(), (this._doc = T);
            }
            sanitize(T, R) {
              if (null == R) return null;
              switch (T) {
                case _.q3G.NONE:
                  return R;
                case _.q3G.HTML:
                  return (0, _.qzn)(R, 'HTML')
                    ? (0, _.z3N)(R)
                    : (0, _.EiD)(this._doc, String(R)).toString();
                case _.q3G.STYLE:
                  return (0, _.qzn)(R, 'Style') ? (0, _.z3N)(R) : R;
                case _.q3G.SCRIPT:
                  if ((0, _.qzn)(R, 'Script')) return (0, _.z3N)(R);
                  throw new Error('unsafe value used in a script context');
                case _.q3G.URL:
                  return (
                    (0, _.yhl)(R),
                    (0, _.qzn)(R, 'URL') ? (0, _.z3N)(R) : (0, _.mCW)(String(R))
                  );
                case _.q3G.RESOURCE_URL:
                  if ((0, _.qzn)(R, 'ResourceURL')) return (0, _.z3N)(R);
                  throw new Error(
                    'unsafe value used in a resource URL context (see https://g.co/ng/security#xss)'
                  );
                default:
                  throw new Error(
                    `Unexpected SecurityContext ${T} (see https://g.co/ng/security#xss)`
                  );
              }
            }
            bypassSecurityTrustHtml(T) {
              return (0, _.JVY)(T);
            }
            bypassSecurityTrustStyle(T) {
              return (0, _.L6k)(T);
            }
            bypassSecurityTrustScript(T) {
              return (0, _.eBb)(T);
            }
            bypassSecurityTrustUrl(T) {
              return (0, _.LAX)(T);
            }
            bypassSecurityTrustResourceUrl(T) {
              return (0, _.pB0)(T);
            }
          }
          return (
            (z.ɵfac = function (T) {
              return new (T || z)(_.LFG(s.K0));
            }),
            (z.ɵprov = _.Yz7({
              token: z,
              factory: function (T) {
                let R = null;
                return (
                  (R = T
                    ? new T()
                    : (function tn(z) {
                        return new Be(z.get(s.K0));
                      })(_.LFG(_.zs3))),
                  R
                );
              },
              providedIn: 'root',
            })),
            z
          );
        })();
    },
    542: (et, ge, v) => {
      v.d(ge, {
        gz: () => ro,
        m2: () => ln,
        F0: () => An,
        Bz: () => Xs,
        lC: () => Qn,
      });
      var s = v(6895),
        _ = v(4650),
        j = v(7579);
      class X extends j.x {
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
      var ne = v(8306),
        A = v(4742),
        K = v(2076),
        q = v(4671),
        fe = v(3268),
        re = v(7669),
        oe = v(1810),
        ie = v(5403),
        Ge = v(9672);
      function we(...u) {
        const l = (0, re.yG)(u),
          a = (0, re.jO)(u),
          { args: f, keys: y } = (0, A.D)(u);
        if (0 === f.length) return (0, K.D)([], l);
        const w = new ne.y(
          (function ee(u, l, a = q.y) {
            return f => {
              Ee(
                l,
                () => {
                  const { length: y } = u,
                    w = new Array(y);
                  let S = y,
                    F = y;
                  for (let se = 0; se < y; se++)
                    Ee(
                      l,
                      () => {
                        const Te = (0, K.D)(u[se], l);
                        let Ze = !1;
                        Te.subscribe(
                          (0, ie.x)(
                            f,
                            We => {
                              (w[se] = We),
                                Ze || ((Ze = !0), F--),
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
          })(f, l, y ? S => (0, oe.n)(y, S) : q.y)
        );
        return a ? w.pipe((0, fe.Z)(a)) : w;
      }
      function Ee(u, l, a) {
        u ? (0, Ge.f)(a, u, l) : l();
      }
      var $ = v(576);
      function ae(u, l) {
        const a = (0, $.m)(u) ? u : () => u,
          f = y => y.error(a());
        return new ne.y(l ? y => l.schedule(f, 0, y) : f);
      }
      const Ve = (0, v(3888).d)(
        u =>
          function () {
            u(this),
              (this.name = 'EmptyError'),
              (this.message = 'no elements in sequence');
          }
      );
      var Ie = v(8189);
      function Le(...u) {
        return (function Ce() {
          return (0, Ie.J)(1);
        })()((0, K.D)(u, (0, re.yG)(u)));
      }
      var Oe = v(8421);
      function Ae(u) {
        return new ne.y(l => {
          (0, Oe.Xf)(u()).subscribe(l);
        });
      }
      var te = v(727),
        Pe = v(4482);
      function G() {
        return (0, Pe.e)((u, l) => {
          let a = null;
          u._refCount++;
          const f = (0, ie.x)(l, void 0, void 0, void 0, () => {
            if (!u || u._refCount <= 0 || 0 < --u._refCount)
              return void (a = null);
            const y = u._connection,
              w = a;
            (a = null),
              y && (!w || y === w) && y.unsubscribe(),
              l.unsubscribe();
          });
          u.subscribe(f), f.closed || (a = u.connect());
        });
      }
      class Q extends ne.y {
        constructor(l, a) {
          super(),
            (this.source = l),
            (this.subjectFactory = a),
            (this._subject = null),
            (this._refCount = 0),
            (this._connection = null),
            (0, Pe.A)(l) && (this.lift = l.lift);
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
            l = this._connection = new te.w0();
            const a = this.getSubject();
            l.add(
              this.source.subscribe(
                (0, ie.x)(
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
              l.closed && ((this._connection = null), (l = te.w0.EMPTY));
          }
          return l;
        }
        refCount() {
          return G()(this);
        }
      }
      var B = v(9646),
        ce = v(515);
      function Ne(u, l, a, f, y) {
        return (w, S) => {
          let F = a,
            se = l,
            Te = 0;
          w.subscribe(
            (0, ie.x)(
              S,
              Ze => {
                const We = Te++;
                (se = F ? u(se, Ze, We) : ((F = !0), Ze)), f && S.next(se);
              },
              y &&
                (() => {
                  F && S.next(se), S.complete();
                })
            )
          );
        };
      }
      function st(u, l) {
        return (0, Pe.e)(Ne(u, l, arguments.length >= 2, !0));
      }
      function mt(u) {
        return (0, Pe.e)((l, a) => {
          let w,
            f = null,
            y = !1;
          (f = l.subscribe(
            (0, ie.x)(a, void 0, void 0, S => {
              (w = (0, Oe.Xf)(u(S, mt(u)(l)))),
                f ? (f.unsubscribe(), (f = null), w.subscribe(a)) : (y = !0);
            })
          )),
            y && (f.unsubscribe(), (f = null), w.subscribe(a));
        });
      }
      var yt = v(9300);
      function Ue(u) {
        return u <= 0
          ? () => ce.E
          : (0, Pe.e)((l, a) => {
              let f = [];
              l.subscribe(
                (0, ie.x)(
                  a,
                  y => {
                    f.push(y), u < f.length && f.shift();
                  },
                  () => {
                    for (const y of f) a.next(y);
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
      function jt(u = an) {
        return (0, Pe.e)((l, a) => {
          let f = !1;
          l.subscribe(
            (0, ie.x)(
              a,
              y => {
                (f = !0), a.next(y);
              },
              () => (f ? a.complete() : a.error(u()))
            )
          );
        });
      }
      function an() {
        return new Ve();
      }
      function Tt(u) {
        return (0, Pe.e)((l, a) => {
          let f = !1;
          l.subscribe(
            (0, ie.x)(
              a,
              y => {
                (f = !0), a.next(y);
              },
              () => {
                f || a.next(u), a.complete();
              }
            )
          );
        });
      }
      var qt = v(5698);
      function Me(u, l) {
        const a = arguments.length >= 2;
        return f =>
          f.pipe(
            u ? (0, yt.h)((y, w) => u(y, w, f)) : q.y,
            (0, qt.q)(1),
            a ? Tt(l) : jt(() => new Ve())
          );
      }
      function pe(u, l, a) {
        const f =
          (0, $.m)(u) || l || a ? { next: u, error: l, complete: a } : u;
        return f
          ? (0, Pe.e)((y, w) => {
              var S;
              null === (S = f.subscribe) || void 0 === S || S.call(f);
              let F = !0;
              y.subscribe(
                (0, ie.x)(
                  w,
                  se => {
                    var Te;
                    null === (Te = f.next) || void 0 === Te || Te.call(f, se),
                      w.next(se);
                  },
                  () => {
                    var se;
                    (F = !1),
                      null === (se = f.complete) || void 0 === se || se.call(f),
                      w.complete();
                  },
                  se => {
                    var Te;
                    (F = !1),
                      null === (Te = f.error) ||
                        void 0 === Te ||
                        Te.call(f, se),
                      w.error(se);
                  },
                  () => {
                    var se, Te;
                    F &&
                      (null === (se = f.unsubscribe) ||
                        void 0 === se ||
                        se.call(f)),
                      null === (Te = f.finalize) || void 0 === Te || Te.call(f);
                  }
                )
              );
            })
          : q.y;
      }
      var Z = v(4004);
      function Ye(u) {
        return (0, Pe.e)((l, a) => {
          try {
            l.subscribe(a);
          } finally {
            a.add(u);
          }
        });
      }
      var Ke = v(3900),
        gt = v(4351),
        ut = v(5577),
        St = v(1481);
      class Ht {
        constructor(l, a) {
          (this.id = l), (this.url = a);
        }
      }
      class tt extends Ht {
        constructor(l, a, f = 'imperative', y = null) {
          super(l, a),
            (this.type = 0),
            (this.navigationTrigger = f),
            (this.restoredState = y);
        }
        toString() {
          return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class ln extends Ht {
        constructor(l, a, f) {
          super(l, a), (this.urlAfterRedirects = f), (this.type = 1);
        }
        toString() {
          return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
        }
      }
      class Dt extends Ht {
        constructor(l, a, f) {
          super(l, a), (this.reason = f), (this.type = 2);
        }
        toString() {
          return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class kt extends Ht {
        constructor(l, a, f) {
          super(l, a), (this.error = f), (this.type = 3);
        }
        toString() {
          return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
        }
      }
      class Fn extends Ht {
        constructor(l, a, f, y) {
          super(l, a),
            (this.urlAfterRedirects = f),
            (this.state = y),
            (this.type = 4);
        }
        toString() {
          return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class zo extends Ht {
        constructor(l, a, f, y) {
          super(l, a),
            (this.urlAfterRedirects = f),
            (this.state = y),
            (this.type = 7);
        }
        toString() {
          return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class _n extends Ht {
        constructor(l, a, f, y, w) {
          super(l, a),
            (this.urlAfterRedirects = f),
            (this.state = y),
            (this.shouldActivate = w),
            (this.type = 8);
        }
        toString() {
          return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
        }
      }
      class he extends Ht {
        constructor(l, a, f, y) {
          super(l, a),
            (this.urlAfterRedirects = f),
            (this.state = y),
            (this.type = 5);
        }
        toString() {
          return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class U extends Ht {
        constructor(l, a, f, y) {
          super(l, a),
            (this.urlAfterRedirects = f),
            (this.state = y),
            (this.type = 6);
        }
        toString() {
          return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class H {
        constructor(l) {
          (this.route = l), (this.type = 9);
        }
        toString() {
          return `RouteConfigLoadStart(path: ${this.route.path})`;
        }
      }
      class me {
        constructor(l) {
          (this.route = l), (this.type = 10);
        }
        toString() {
          return `RouteConfigLoadEnd(path: ${this.route.path})`;
        }
      }
      class Y {
        constructor(l) {
          (this.snapshot = l), (this.type = 11);
        }
        toString() {
          return `ChildActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class Fe {
        constructor(l) {
          (this.snapshot = l), (this.type = 12);
        }
        toString() {
          return `ChildActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class It {
        constructor(l) {
          (this.snapshot = l), (this.type = 13);
        }
        toString() {
          return `ActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class wt {
        constructor(l) {
          (this.snapshot = l), (this.type = 14);
        }
        toString() {
          return `ActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class Re {
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
      const Xe = 'primary';
      class un {
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
      function xt(u) {
        return new un(u);
      }
      const vt = 'ngNavigationCancelingError';
      function ot(u) {
        const l = Error('NavigationCancelingError: ' + u);
        return (l[vt] = !0), l;
      }
      function ve(u, l, a) {
        const f = a.path.split('/');
        if (
          f.length > u.length ||
          ('full' === a.pathMatch && (l.hasChildren() || f.length < u.length))
        )
          return null;
        const y = {};
        for (let w = 0; w < f.length; w++) {
          const S = f[w],
            F = u[w];
          if (S.startsWith(':')) y[S.substring(1)] = F;
          else if (S !== F.path) return null;
        }
        return { consumed: u.slice(0, f.length), posParams: y };
      }
      function W(u, l) {
        const a = u ? Object.keys(u) : void 0,
          f = l ? Object.keys(l) : void 0;
        if (!a || !f || a.length != f.length) return !1;
        let y;
        for (let w = 0; w < a.length; w++)
          if (((y = a[w]), !rt(u[y], l[y]))) return !1;
        return !0;
      }
      function rt(u, l) {
        if (Array.isArray(u) && Array.isArray(l)) {
          if (u.length !== l.length) return !1;
          const a = [...u].sort(),
            f = [...l].sort();
          return a.every((y, w) => f[w] === y);
        }
        return u === l;
      }
      function dt(u) {
        return Array.prototype.concat.apply([], u);
      }
      function at(u) {
        return u.length > 0 ? u[u.length - 1] : null;
      }
      function Ct(u, l) {
        for (const a in u) u.hasOwnProperty(a) && l(u[a], a);
      }
      function $t(u) {
        return (0, _.CqO)(u)
          ? u
          : (0, _.QGY)(u)
          ? (0, K.D)(Promise.resolve(u))
          : (0, B.of)(u);
      }
      const Pt = {
          exact: function tn(u, l, a) {
            if (
              !ht(u.segments, l.segments) ||
              !N(u.segments, l.segments, a) ||
              u.numberOfChildren !== l.numberOfChildren
            )
              return !1;
            for (const f in l.children)
              if (!u.children[f] || !tn(u.children[f], l.children[f], a))
                return !1;
            return !0;
          },
          subset: lt,
        },
        Qt = {
          exact: function en(u, l) {
            return W(u, l);
          },
          subset: function Be(u, l) {
            return (
              Object.keys(l).length <= Object.keys(u).length &&
              Object.keys(l).every(a => rt(u[a], l[a]))
            );
          },
          ignored: () => !0,
        };
      function Wt(u, l, a) {
        return (
          Pt[a.paths](u.root, l.root, a.matrixParams) &&
          Qt[a.queryParams](u.queryParams, l.queryParams) &&
          !('exact' === a.fragment && u.fragment !== l.fragment)
        );
      }
      function lt(u, l, a) {
        return z(u, l, l.segments, a);
      }
      function z(u, l, a, f) {
        if (u.segments.length > a.length) {
          const y = u.segments.slice(0, a.length);
          return !(!ht(y, a) || l.hasChildren() || !N(y, a, f));
        }
        if (u.segments.length === a.length) {
          if (!ht(u.segments, a) || !N(u.segments, a, f)) return !1;
          for (const y in l.children)
            if (!u.children[y] || !lt(u.children[y], l.children[y], f))
              return !1;
          return !0;
        }
        {
          const y = a.slice(0, u.segments.length),
            w = a.slice(u.segments.length);
          return (
            !!(ht(u.segments, y) && N(u.segments, y, f) && u.children[Xe]) &&
            z(u.children[Xe], l, w, f)
          );
        }
      }
      function N(u, l, a) {
        return l.every((f, y) => Qt[a](u[y].parameters, f.parameters));
      }
      class T {
        constructor(l, a, f) {
          (this.root = l), (this.queryParams = a), (this.fragment = f);
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = xt(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return Nn.serialize(this);
        }
      }
      class R {
        constructor(l, a) {
          (this.segments = l),
            (this.children = a),
            (this.parent = null),
            Ct(a, (f, y) => (f.parent = this));
        }
        hasChildren() {
          return this.numberOfChildren > 0;
        }
        get numberOfChildren() {
          return Object.keys(this.children).length;
        }
        toString() {
          return jn(this);
        }
      }
      class xe {
        constructor(l, a) {
          (this.path = l), (this.parameters = a);
        }
        get parameterMap() {
          return (
            this._parameterMap || (this._parameterMap = xt(this.parameters)),
            this._parameterMap
          );
        }
        toString() {
          return Nt(this);
        }
      }
      function ht(u, l) {
        return u.length === l.length && u.every((a, f) => a.path === l[f].path);
      }
      class it {}
      class In {
        parse(l) {
          const a = new oo(l);
          return new T(
            a.parseRootSegment(),
            a.parseQueryParams(),
            a.parseFragment()
          );
        }
        serialize(l) {
          const a = `/${En(l.root, !0)}`,
            f = (function Oo(u) {
              const l = Object.keys(u)
                .map(a => {
                  const f = u[a];
                  return Array.isArray(f)
                    ? f.map(y => `${Hn(a)}=${Hn(y)}`).join('&')
                    : `${Hn(a)}=${Hn(f)}`;
                })
                .filter(a => !!a);
              return l.length ? `?${l.join('&')}` : '';
            })(l.queryParams);
          return `${a}${f}${
            'string' == typeof l.fragment
              ? `#${(function Rn(u) {
                  return encodeURI(u);
                })(l.fragment)}`
              : ''
          }`;
        }
      }
      const Nn = new In();
      function jn(u) {
        return u.segments.map(l => Nt(l)).join('/');
      }
      function En(u, l) {
        if (!u.hasChildren()) return jn(u);
        if (l) {
          const a = u.children[Xe] ? En(u.children[Xe], !1) : '',
            f = [];
          return (
            Ct(u.children, (y, w) => {
              w !== Xe && f.push(`${w}:${En(y, !1)}`);
            }),
            f.length > 0 ? `${a}(${f.join('//')})` : a
          );
        }
        {
          const a = (function Ut(u, l) {
            let a = [];
            return (
              Ct(u.children, (f, y) => {
                y === Xe && (a = a.concat(l(f, y)));
              }),
              Ct(u.children, (f, y) => {
                y !== Xe && (a = a.concat(l(f, y)));
              }),
              a
            );
          })(u, (f, y) =>
            y === Xe ? [En(u.children[Xe], !1)] : [`${y}:${En(f, !1)}`]
          );
          return 1 === Object.keys(u.children).length && null != u.children[Xe]
            ? `${jn(u)}/${a[0]}`
            : `${jn(u)}/(${a.join('//')})`;
        }
      }
      function Xt(u) {
        return encodeURIComponent(u)
          .replace(/%40/g, '@')
          .replace(/%3A/gi, ':')
          .replace(/%24/g, '$')
          .replace(/%2C/gi, ',');
      }
      function Hn(u) {
        return Xt(u).replace(/%3B/gi, ';');
      }
      function fn(u) {
        return Xt(u)
          .replace(/\(/g, '%28')
          .replace(/\)/g, '%29')
          .replace(/%26/gi, '&');
      }
      function kn(u) {
        return decodeURIComponent(u);
      }
      function Go(u) {
        return kn(u.replace(/\+/g, '%20'));
      }
      function Nt(u) {
        return `${fn(u.path)}${(function Zr(u) {
          return Object.keys(u)
            .map(l => `;${fn(l)}=${fn(u[l])}`)
            .join('');
        })(u.parameters)}`;
      }
      const Po = /^[^\/()?;=#]+/;
      function $n(u) {
        const l = u.match(Po);
        return l ? l[0] : '';
      }
      const Yn = /^[^=?&#]+/,
        Kn = /^[^&#]+/;
      class oo {
        constructor(l) {
          (this.url = l), (this.remaining = l);
        }
        parseRootSegment() {
          return (
            this.consumeOptional('/'),
            '' === this.remaining ||
            this.peekStartsWith('?') ||
            this.peekStartsWith('#')
              ? new R([], {})
              : new R([], this.parseChildren())
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
              (f[Xe] = new R(l, a)),
            f
          );
        }
        parseSegment() {
          const l = $n(this.remaining);
          if ('' === l && this.peekStartsWith(';'))
            throw new Error(
              `Empty path url segment cannot have parameters: '${this.remaining}'.`
            );
          return this.capture(l), new xe(kn(l), this.parseMatrixParams());
        }
        parseMatrixParams() {
          const l = {};
          for (; this.consumeOptional(';'); ) this.parseParam(l);
          return l;
        }
        parseParam(l) {
          const a = $n(this.remaining);
          if (!a) return;
          this.capture(a);
          let f = '';
          if (this.consumeOptional('=')) {
            const y = $n(this.remaining);
            y && ((f = y), this.capture(f));
          }
          l[kn(a)] = kn(f);
        }
        parseQueryParam(l) {
          const a = (function fo(u) {
            const l = u.match(Yn);
            return l ? l[0] : '';
          })(this.remaining);
          if (!a) return;
          this.capture(a);
          let f = '';
          if (this.consumeOptional('=')) {
            const S = (function hn(u) {
              const l = u.match(Kn);
              return l ? l[0] : '';
            })(this.remaining);
            S && ((f = S), this.capture(f));
          }
          const y = Go(a),
            w = Go(f);
          if (l.hasOwnProperty(y)) {
            let S = l[y];
            Array.isArray(S) || ((S = [S]), (l[y] = S)), S.push(w);
          } else l[y] = w;
        }
        parseParens(l) {
          const a = {};
          for (
            this.capture('(');
            !this.consumeOptional(')') && this.remaining.length > 0;

          ) {
            const f = $n(this.remaining),
              y = this.remaining[f.length];
            if ('/' !== y && ')' !== y && ';' !== y)
              throw new Error(`Cannot parse url '${this.url}'`);
            let w;
            f.indexOf(':') > -1
              ? ((w = f.slice(0, f.indexOf(':'))),
                this.capture(w),
                this.capture(':'))
              : l && (w = Xe);
            const S = this.parseChildren();
            (a[w] = 1 === Object.keys(S).length ? S[Xe] : new R([], S)),
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
      class nn {
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
          const a = gn(l, this._root);
          return a ? a.children.map(f => f.value) : [];
        }
        firstChild(l) {
          const a = gn(l, this._root);
          return a && a.children.length > 0 ? a.children[0].value : null;
        }
        siblings(l) {
          const a = zn(l, this._root);
          return a.length < 2
            ? []
            : a[a.length - 2].children.map(y => y.value).filter(y => y !== l);
        }
        pathFromRoot(l) {
          return zn(l, this._root).map(a => a.value);
        }
      }
      function gn(u, l) {
        if (u === l.value) return l;
        for (const a of l.children) {
          const f = gn(u, a);
          if (f) return f;
        }
        return null;
      }
      function zn(u, l) {
        if (u === l.value) return [l];
        for (const a of l.children) {
          const f = zn(u, a);
          if (f.length) return f.unshift(l), f;
        }
        return [];
      }
      class on {
        constructor(l, a) {
          (this.value = l), (this.children = a);
        }
        toString() {
          return `TreeNode(${this.value})`;
        }
      }
      function Ln(u) {
        const l = {};
        return u && u.children.forEach(a => (l[a.value.outlet] = a)), l;
      }
      class vn extends nn {
        constructor(l, a) {
          super(l), (this.snapshot = a), lr(this, l);
        }
        toString() {
          return this.snapshot.toString();
        }
      }
      function sr(u, l) {
        const a = (function Wr(u, l) {
            const S = new ar([], {}, {}, '', {}, Xe, l, null, u.root, -1, {});
            return new Dn('', new on(S, []));
          })(u, l),
          f = new X([new xe('', {})]),
          y = new X({}),
          w = new X({}),
          S = new X({}),
          F = new X(''),
          se = new ro(f, y, S, F, w, Xe, l, a.root);
        return (se.snapshot = a.root), new vn(new on(se, []), a);
      }
      class ro {
        constructor(l, a, f, y, w, S, F, se) {
          (this.url = l),
            (this.params = a),
            (this.queryParams = f),
            (this.fragment = y),
            (this.data = w),
            (this.outlet = S),
            (this.component = F),
            (this._futureSnapshot = se);
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
              (this._paramMap = this.params.pipe((0, Z.U)(l => xt(l)))),
            this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap ||
              (this._queryParamMap = this.queryParams.pipe(
                (0, Z.U)(l => xt(l))
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
      function cr(u, l = 'emptyOnly') {
        const a = u.pathFromRoot;
        let f = 0;
        if ('always' !== l)
          for (f = a.length - 1; f >= 1; ) {
            const y = a[f],
              w = a[f - 1];
            if (y.routeConfig && '' === y.routeConfig.path) f--;
            else {
              if (w.component) break;
              f--;
            }
          }
        return (function Hi(u) {
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
      class ar {
        constructor(l, a, f, y, w, S, F, se, Te, Ze, We, Gt) {
          (this.url = l),
            (this.params = a),
            (this.queryParams = f),
            (this.fragment = y),
            (this.data = w),
            (this.outlet = S),
            (this.component = F),
            (this.routeConfig = se),
            (this._urlSegment = Te),
            (this._lastPathIndex = Ze),
            (this._correctedLastPathIndex = Gt ?? Ze),
            (this._resolve = We);
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
            this._paramMap || (this._paramMap = xt(this.params)), this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = xt(this.queryParams)),
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
      class Dn extends nn {
        constructor(l, a) {
          super(a), (this.url = l), lr(this, a);
        }
        toString() {
          return ur(this._root);
        }
      }
      function lr(u, l) {
        (l.value._routerState = u), l.children.forEach(a => lr(u, a));
      }
      function ur(u) {
        const l =
          u.children.length > 0 ? ` { ${u.children.map(ur).join(', ')} } ` : '';
        return `${u.value}${l}`;
      }
      function Ao(u) {
        if (u.snapshot) {
          const l = u.snapshot,
            a = u._futureSnapshot;
          (u.snapshot = a),
            W(l.queryParams, a.queryParams) ||
              u.queryParams.next(a.queryParams),
            l.fragment !== a.fragment && u.fragment.next(a.fragment),
            W(l.params, a.params) || u.params.next(a.params),
            (function P(u, l) {
              if (u.length !== l.length) return !1;
              for (let a = 0; a < u.length; ++a) if (!W(u[a], l[a])) return !1;
              return !0;
            })(l.url, a.url) || u.url.next(a.url),
            W(l.data, a.data) || u.data.next(a.data);
        } else
          (u.snapshot = u._futureSnapshot), u.data.next(u._futureSnapshot.data);
      }
      function Zo(u, l) {
        const a =
          W(u.params, l.params) &&
          (function je(u, l) {
            return (
              ht(u, l) && u.every((a, f) => W(a.parameters, l[f].parameters))
            );
          })(u.url, l.url);
        return (
          a &&
          !(!u.parent != !l.parent) &&
          (!u.parent || Zo(u.parent, l.parent))
        );
      }
      function ho(u, l, a) {
        if (a && u.shouldReuseRoute(l.value, a.value.snapshot)) {
          const f = a.value;
          f._futureSnapshot = l.value;
          const y = (function Kr(u, l, a) {
            return l.children.map(f => {
              for (const y of a.children)
                if (u.shouldReuseRoute(f.value, y.value.snapshot))
                  return ho(u, f, y);
              return ho(u, f);
            });
          })(u, l, a);
          return new on(f, y);
        }
        {
          if (u.shouldAttach(l.value)) {
            const w = u.retrieve(l.value);
            if (null !== w) {
              const S = w.route;
              return (
                (S.value._futureSnapshot = l.value),
                (S.children = l.children.map(F => ho(u, F))),
                S
              );
            }
          }
          const f = (function $i(u) {
              return new ro(
                new X(u.url),
                new X(u.params),
                new X(u.queryParams),
                new X(u.fragment),
                new X(u.data),
                u.outlet,
                u.component,
                u
              );
            })(l.value),
            y = l.children.map(w => ho(u, w));
          return new on(f, y);
        }
      }
      function Wo(u) {
        return (
          'object' == typeof u && null != u && !u.outlets && !u.segmentPath
        );
      }
      function go(u) {
        return 'object' == typeof u && null != u && u.outlets;
      }
      function Io(u, l, a, f, y) {
        let w = {};
        if (
          (f &&
            Ct(f, (F, se) => {
              w[se] = Array.isArray(F) ? F.map(Te => `${Te}`) : `${F}`;
            }),
          u === l)
        )
          return new T(a, w, y);
        const S = mo(u, l, a);
        return new T(S, w, y);
      }
      function mo(u, l, a) {
        const f = {};
        return (
          Ct(u.children, (y, w) => {
            f[w] = y === l ? a : mo(y, l, a);
          }),
          new R(u.segments, f)
        );
      }
      class Yo {
        constructor(l, a, f) {
          if (
            ((this.isAbsolute = l),
            (this.numberOfDoubleDots = a),
            (this.commands = f),
            l && f.length > 0 && Wo(f[0]))
          )
            throw new Error('Root segment cannot have matrix parameters');
          const y = f.find(go);
          if (y && y !== at(f))
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
      class To {
        constructor(l, a, f) {
          (this.segmentGroup = l), (this.processChildren = a), (this.index = f);
        }
      }
      function xo(u, l, a) {
        if (
          (u || (u = new R([], {})), 0 === u.segments.length && u.hasChildren())
        )
          return So(u, l, a);
        const f = (function bo(u, l, a) {
            let f = 0,
              y = l;
            const w = { match: !1, pathIndex: 0, commandIndex: 0 };
            for (; y < u.segments.length; ) {
              if (f >= a.length) return w;
              const S = u.segments[y],
                F = a[f];
              if (go(F)) break;
              const se = `${F}`,
                Te = f < a.length - 1 ? a[f + 1] : null;
              if (y > 0 && void 0 === se) break;
              if (se && Te && 'object' == typeof Te && void 0 === Te.outlets) {
                if (!Fo(se, Te, S)) return w;
                f += 2;
              } else {
                if (!Fo(se, {}, S)) return w;
                f++;
              }
              y++;
            }
            return { match: !0, pathIndex: y, commandIndex: f };
          })(u, l, a),
          y = a.slice(f.commandIndex);
        if (f.match && f.pathIndex < u.segments.length) {
          const w = new R(u.segments.slice(0, f.pathIndex), {});
          return (
            (w.children[Xe] = new R(u.segments.slice(f.pathIndex), u.children)),
            So(w, 0, y)
          );
        }
        return f.match && 0 === y.length
          ? new R(u.segments, {})
          : f.match && !u.hasChildren()
          ? Jn(u, l, a)
          : f.match
          ? So(u, 0, y)
          : Jn(u, l, a);
      }
      function So(u, l, a) {
        if (0 === a.length) return new R(u.segments, {});
        {
          const f = (function Ko(u) {
              return go(u[0]) ? u[0].outlets : { [Xe]: u };
            })(a),
            y = {};
          return (
            Ct(f, (w, S) => {
              'string' == typeof w && (w = [w]),
                null !== w && (y[S] = xo(u.children[S], l, w));
            }),
            Ct(u.children, (w, S) => {
              void 0 === f[S] && (y[S] = w);
            }),
            new R(u.segments, y)
          );
        }
      }
      function Jn(u, l, a) {
        const f = u.segments.slice(0, l);
        let y = 0;
        for (; y < a.length; ) {
          const w = a[y];
          if (go(w)) {
            const se = dr(w.outlets);
            return new R(f, se);
          }
          if (0 === y && Wo(a[0])) {
            f.push(new xe(u.segments[l].path, qo(a[0]))), y++;
            continue;
          }
          const S = go(w) ? w.outlets[Xe] : `${w}`,
            F = y < a.length - 1 ? a[y + 1] : null;
          S && F && Wo(F)
            ? (f.push(new xe(S, qo(F))), (y += 2))
            : (f.push(new xe(S, {})), y++);
        }
        return new R(f, {});
      }
      function dr(u) {
        const l = {};
        return (
          Ct(u, (a, f) => {
            'string' == typeof a && (a = [a]),
              null !== a && (l[f] = Jn(new R([], {}), 0, a));
          }),
          l
        );
      }
      function qo(u) {
        const l = {};
        return Ct(u, (a, f) => (l[f] = `${a}`)), l;
      }
      function Fo(u, l, a) {
        return u == a.path && W(l, a.parameters);
      }
      class Jo {
        constructor() {
          (this.outlet = null),
            (this.route = null),
            (this.resolver = null),
            (this.injector = null),
            (this.children = new dn()),
            (this.attachRef = null);
        }
      }
      class dn {
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
          return a || ((a = new Jo()), this.contexts.set(l, a)), a;
        }
        getContext(l) {
          return this.contexts.get(l) || null;
        }
      }
      let Qn = (() => {
        class u {
          constructor(a, f, y, w, S) {
            (this.parentContexts = a),
              (this.location = f),
              (this.changeDetector = w),
              (this.environmentInjector = S),
              (this.activated = null),
              (this._activatedRoute = null),
              (this.activateEvents = new _.vpe()),
              (this.deactivateEvents = new _.vpe()),
              (this.attachEvents = new _.vpe()),
              (this.detachEvents = new _.vpe()),
              (this.name = y || Xe),
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
            const y = this.location,
              S = a._futureSnapshot.component,
              F = this.parentContexts.getOrCreateContext(this.name).children,
              se = new wr(a, F, y.injector);
            if (
              f &&
              (function pr(u) {
                return !!u.resolveComponentFactory;
              })(f)
            ) {
              const Te = f.resolveComponentFactory(S);
              this.activated = y.createComponent(Te, y.length, se);
            } else
              this.activated = y.createComponent(S, {
                index: y.length,
                injector: se,
                environmentInjector: f ?? this.environmentInjector,
              });
            this.changeDetector.markForCheck(),
              this.activateEvents.emit(this.activated.instance);
          }
        }
        return (
          (u.ɵfac = function (a) {
            return new (a || u)(
              _.Y36(dn),
              _.Y36(_.s_b),
              _.$8M('name'),
              _.Y36(_.sBO),
              _.Y36(_.lqb)
            );
          }),
          (u.ɵdir = _.lG2({
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
      class wr {
        constructor(l, a, f) {
          (this.route = l), (this.childContexts = a), (this.parent = f);
        }
        get(l, a) {
          return l === ro
            ? this.route
            : l === dn
            ? this.childContexts
            : this.parent.get(l, a);
        }
      }
      let fr = (() => {
        class u {}
        return (
          (u.ɵfac = function (a) {
            return new (a || u)();
          }),
          (u.ɵcmp = _.Xpm({
            type: u,
            selectors: [['ng-component']],
            decls: 1,
            vars: 0,
            template: function (a, f) {
              1 & a && _._UZ(0, 'router-outlet');
            },
            dependencies: [Qn],
            encapsulation: 2,
          })),
          u
        );
      })();
      function Er(u, l) {
        return (
          u.providers &&
            !u._injector &&
            (u._injector = (0, _.MMx)(u.providers, l, `Route: ${u.path}`)),
          u._injector ?? l
        );
      }
      function m(u) {
        const l = u.children && u.children.map(m),
          a = l ? { ...u, children: l } : { ...u };
        return (
          !a.component &&
            !a.loadComponent &&
            (l || a.loadChildren) &&
            a.outlet &&
            a.outlet !== Xe &&
            (a.component = fr),
          a
        );
      }
      function M(u) {
        return u.outlet || Xe;
      }
      function x(u, l) {
        const a = u.filter(f => M(f) === l);
        return a.push(...u.filter(f => M(f) !== l)), a;
      }
      function E(u) {
        if (!u) return null;
        if (u.routeConfig?._injector) return u.routeConfig._injector;
        for (let l = u.parent; l; l = l.parent) {
          const a = l.routeConfig;
          if (a?._loadedInjector) return a._loadedInjector;
          if (a?._injector) return a._injector;
        }
        return null;
      }
      class ue {
        constructor(l, a, f, y) {
          (this.routeReuseStrategy = l),
            (this.futureState = a),
            (this.currState = f),
            (this.forwardEvent = y);
        }
        activate(l) {
          const a = this.futureState._root,
            f = this.currState ? this.currState._root : null;
          this.deactivateChildRoutes(a, f, l),
            Ao(this.futureState.root),
            this.activateChildRoutes(a, f, l);
        }
        deactivateChildRoutes(l, a, f) {
          const y = Ln(a);
          l.children.forEach(w => {
            const S = w.value.outlet;
            this.deactivateRoutes(w, y[S], f), delete y[S];
          }),
            Ct(y, (w, S) => {
              this.deactivateRouteAndItsChildren(w, f);
            });
        }
        deactivateRoutes(l, a, f) {
          const y = l.value,
            w = a ? a.value : null;
          if (y === w)
            if (y.component) {
              const S = f.getContext(y.outlet);
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
            y = f && l.value.component ? f.children : a,
            w = Ln(l);
          for (const S of Object.keys(w))
            this.deactivateRouteAndItsChildren(w[S], y);
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
            y = f && l.value.component ? f.children : a,
            w = Ln(l);
          for (const S of Object.keys(w))
            this.deactivateRouteAndItsChildren(w[S], y);
          f &&
            f.outlet &&
            (f.outlet.deactivate(),
            f.children.onOutletDeactivated(),
            (f.attachRef = null),
            (f.resolver = null),
            (f.route = null));
        }
        activateChildRoutes(l, a, f) {
          const y = Ln(a);
          l.children.forEach(w => {
            this.activateRoutes(w, y[w.value.outlet], f),
              this.forwardEvent(new wt(w.value.snapshot));
          }),
            l.children.length && this.forwardEvent(new Fe(l.value.snapshot));
        }
        activateRoutes(l, a, f) {
          const y = l.value,
            w = a ? a.value : null;
          if ((Ao(y), y === w))
            if (y.component) {
              const S = f.getOrCreateContext(y.outlet);
              this.activateChildRoutes(l, a, S.children);
            } else this.activateChildRoutes(l, a, f);
          else if (y.component) {
            const S = f.getOrCreateContext(y.outlet);
            if (this.routeReuseStrategy.shouldAttach(y.snapshot)) {
              const F = this.routeReuseStrategy.retrieve(y.snapshot);
              this.routeReuseStrategy.store(y.snapshot, null),
                S.children.onOutletReAttached(F.contexts),
                (S.attachRef = F.componentRef),
                (S.route = F.route.value),
                S.outlet && S.outlet.attach(F.componentRef, F.route.value),
                Ao(F.route.value),
                this.activateChildRoutes(l, null, S.children);
            } else {
              const F = E(y.snapshot),
                se = F?.get(_._Vd) ?? null;
              (S.attachRef = null),
                (S.route = y),
                (S.resolver = se),
                (S.injector = F),
                S.outlet && S.outlet.activateWith(y, S.injector),
                this.activateChildRoutes(l, null, S.children);
            }
          } else this.activateChildRoutes(l, null, f);
        }
      }
      function ye(u) {
        return 'function' == typeof u;
      }
      function Ot(u) {
        return u instanceof T;
      }
      const At = Symbol('INITIAL_VALUE');
      function qe() {
        return (0, Ke.w)(u =>
          we(
            u.map(l =>
              l.pipe(
                (0, qt.q)(1),
                (function le(...u) {
                  const l = (0, re.yG)(u);
                  return (0, Pe.e)((a, f) => {
                    (l ? Le(u, a, l) : Le(u, a)).subscribe(f);
                  });
                })(At)
              )
            )
          ).pipe(
            st((l, a) => {
              let f = !1;
              return a.reduce(
                (y, w, S) =>
                  y !== At
                    ? y
                    : (w === At && (f = !0),
                      f || (!1 !== w && S !== a.length - 1 && !Ot(w)) ? y : w),
                l
              );
            }, At),
            (0, yt.h)(l => l !== At),
            (0, Z.U)(l => (Ot(l) ? l : !0 === l)),
            (0, qt.q)(1)
          )
        );
      }
      const so = {
        matched: !1,
        consumedSegments: [],
        remainingSegments: [],
        parameters: {},
        positionalParamSegments: {},
      };
      function Zn(u, l, a) {
        if ('' === l.path)
          return 'full' === l.pathMatch && (u.hasChildren() || a.length > 0)
            ? { ...so }
            : {
                matched: !0,
                consumedSegments: [],
                remainingSegments: a,
                parameters: {},
                positionalParamSegments: {},
              };
        const y = (l.matcher || ve)(a, u, l);
        if (!y) return { ...so };
        const w = {};
        Ct(y.posParams, (F, se) => {
          w[se] = F.path;
        });
        const S =
          y.consumed.length > 0
            ? { ...w, ...y.consumed[y.consumed.length - 1].parameters }
            : w;
        return {
          matched: !0,
          consumedSegments: y.consumed,
          remainingSegments: a.slice(y.consumed.length),
          parameters: S,
          positionalParamSegments: y.posParams ?? {},
        };
      }
      function Wn(u, l, a, f, y = 'corrected') {
        if (
          a.length > 0 &&
          (function No(u, l, a) {
            return a.some(f => Ar(u, l, f) && M(f) !== Xe);
          })(u, a, f)
        ) {
          const S = new R(
            l,
            (function gr(u, l, a, f) {
              const y = {};
              (y[Xe] = f),
                (f._sourceSegment = u),
                (f._segmentIndexShift = l.length);
              for (const w of a)
                if ('' === w.path && M(w) !== Xe) {
                  const S = new R([], {});
                  (S._sourceSegment = u),
                    (S._segmentIndexShift = l.length),
                    (y[M(w)] = S);
                }
              return y;
            })(u, l, f, new R(a, u.children))
          );
          return (
            (S._sourceSegment = u),
            (S._segmentIndexShift = l.length),
            { segmentGroup: S, slicedSegments: [] }
          );
        }
        if (
          0 === a.length &&
          (function Pr(u, l, a) {
            return a.some(f => Ar(u, l, f));
          })(u, a, f)
        ) {
          const S = new R(
            u.segments,
            (function co(u, l, a, f, y, w) {
              const S = {};
              for (const F of f)
                if (Ar(u, a, F) && !y[M(F)]) {
                  const se = new R([], {});
                  (se._sourceSegment = u),
                    (se._segmentIndexShift =
                      'legacy' === w ? u.segments.length : l.length),
                    (S[M(F)] = se);
                }
              return { ...y, ...S };
            })(u, l, a, f, u.children, y)
          );
          return (
            (S._sourceSegment = u),
            (S._segmentIndexShift = l.length),
            { segmentGroup: S, slicedSegments: a }
          );
        }
        const w = new R(u.segments, u.children);
        return (
          (w._sourceSegment = u),
          (w._segmentIndexShift = l.length),
          { segmentGroup: w, slicedSegments: a }
        );
      }
      function Ar(u, l, a) {
        return (
          (!(u.hasChildren() || l.length > 0) || 'full' !== a.pathMatch) &&
          '' === a.path
        );
      }
      function _e(u, l, a, f) {
        return (
          !!(M(u) === f || (f !== Xe && Ar(l, a, u))) &&
          ('**' === u.path || Zn(l, u, a).matched)
        );
      }
      function Et(u, l, a) {
        return 0 === l.length && !u.children[a];
      }
      class mr {
        constructor(l) {
          this.segmentGroup = l || null;
        }
      }
      class ei {
        constructor(l) {
          this.urlTree = l;
        }
      }
      function Yt(u) {
        return ae(new mr(u));
      }
      function ti(u) {
        return ae(new ei(u));
      }
      class O {
        constructor(l, a, f, y, w) {
          (this.injector = l),
            (this.configLoader = a),
            (this.urlSerializer = f),
            (this.urlTree = y),
            (this.config = w),
            (this.allowRedirects = !0);
        }
        apply() {
          const l = Wn(this.urlTree.root, [], [], this.config).segmentGroup,
            a = new R(l.segments, l.children);
          return this.expandSegmentGroup(this.injector, this.config, a, Xe)
            .pipe(
              (0, Z.U)(w =>
                this.createUrlTree(
                  nt(w),
                  this.urlTree.queryParams,
                  this.urlTree.fragment
                )
              )
            )
            .pipe(
              mt(w => {
                if (w instanceof ei)
                  return (this.allowRedirects = !1), this.match(w.urlTree);
                throw w instanceof mr ? this.noMatchError(w) : w;
              })
            );
        }
        match(l) {
          return this.expandSegmentGroup(this.injector, this.config, l.root, Xe)
            .pipe(
              (0, Z.U)(y =>
                this.createUrlTree(nt(y), l.queryParams, l.fragment)
              )
            )
            .pipe(
              mt(y => {
                throw y instanceof mr ? this.noMatchError(y) : y;
              })
            );
        }
        noMatchError(l) {
          return new Error(
            `Cannot match any routes. URL Segment: '${l.segmentGroup}'`
          );
        }
        createUrlTree(l, a, f) {
          const y = l.segments.length > 0 ? new R([], { [Xe]: l }) : l;
          return new T(y, a, f);
        }
        expandSegmentGroup(l, a, f, y) {
          return 0 === f.segments.length && f.hasChildren()
            ? this.expandChildren(l, a, f).pipe((0, Z.U)(w => new R([], w)))
            : this.expandSegment(l, f, a, f.segments, y, !0);
        }
        expandChildren(l, a, f) {
          const y = [];
          for (const w of Object.keys(f.children))
            'primary' === w ? y.unshift(w) : y.push(w);
          return (0, K.D)(y).pipe(
            (0, gt.b)(w => {
              const S = f.children[w],
                F = x(a, w);
              return this.expandSegmentGroup(l, F, S, w).pipe(
                (0, Z.U)(se => ({ segment: se, outlet: w }))
              );
            }),
            st((w, S) => ((w[S.outlet] = S.segment), w), {}),
            (function Mt(u, l) {
              const a = arguments.length >= 2;
              return f =>
                f.pipe(
                  u ? (0, yt.h)((y, w) => u(y, w, f)) : q.y,
                  Ue(1),
                  a ? Tt(l) : jt(() => new Ve())
                );
            })()
          );
        }
        expandSegment(l, a, f, y, w, S) {
          return (0, K.D)(f).pipe(
            (0, gt.b)(F =>
              this.expandSegmentAgainstRoute(l, a, f, F, y, w, S).pipe(
                mt(Te => {
                  if (Te instanceof mr) return (0, B.of)(null);
                  throw Te;
                })
              )
            ),
            Me(F => !!F),
            mt((F, se) => {
              if (F instanceof Ve || 'EmptyError' === F.name)
                return Et(a, y, w) ? (0, B.of)(new R([], {})) : Yt(a);
              throw F;
            })
          );
        }
        expandSegmentAgainstRoute(l, a, f, y, w, S, F) {
          return _e(y, a, w, S)
            ? void 0 === y.redirectTo
              ? this.matchSegmentAgainstRoute(l, a, y, w, S)
              : F && this.allowRedirects
              ? this.expandSegmentAgainstRouteUsingRedirect(l, a, f, y, w, S)
              : Yt(a)
            : Yt(a);
        }
        expandSegmentAgainstRouteUsingRedirect(l, a, f, y, w, S) {
          return '**' === y.path
            ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(l, f, y, S)
            : this.expandRegularSegmentAgainstRouteUsingRedirect(
                l,
                a,
                f,
                y,
                w,
                S
              );
        }
        expandWildCardWithParamsAgainstRouteUsingRedirect(l, a, f, y) {
          const w = this.applyRedirectCommands([], f.redirectTo, {});
          return f.redirectTo.startsWith('/')
            ? ti(w)
            : this.lineralizeSegments(f, w).pipe(
                (0, ut.z)(S => {
                  const F = new R(S, {});
                  return this.expandSegment(l, F, a, S, y, !1);
                })
              );
        }
        expandRegularSegmentAgainstRouteUsingRedirect(l, a, f, y, w, S) {
          const {
            matched: F,
            consumedSegments: se,
            remainingSegments: Te,
            positionalParamSegments: Ze,
          } = Zn(a, y, w);
          if (!F) return Yt(a);
          const We = this.applyRedirectCommands(se, y.redirectTo, Ze);
          return y.redirectTo.startsWith('/')
            ? ti(We)
            : this.lineralizeSegments(y, We).pipe(
                (0, ut.z)(Gt =>
                  this.expandSegment(l, a, f, Gt.concat(Te), S, !1)
                )
              );
        }
        matchSegmentAgainstRoute(l, a, f, y, w) {
          if ('**' === f.path)
            return (
              (l = Er(f, l)),
              f.loadChildren
                ? (f._loadedRoutes
                    ? (0, B.of)({
                        routes: f._loadedRoutes,
                        injector: f._loadedInjector,
                      })
                    : this.configLoader.loadChildren(l, f)
                  ).pipe(
                    (0, Z.U)(
                      We => (
                        (f._loadedRoutes = We.routes),
                        (f._loadedInjector = We.injector),
                        new R(y, {})
                      )
                    )
                  )
                : (0, B.of)(new R(y, {}))
            );
          const {
            matched: S,
            consumedSegments: F,
            remainingSegments: se,
          } = Zn(a, f, y);
          return S
            ? ((l = Er(f, l)),
              this.getChildConfig(l, f, y).pipe(
                (0, ut.z)(Ze => {
                  const We = Ze.injector ?? l,
                    Gt = Ze.routes,
                    { segmentGroup: cn, slicedSegments: uo } = Wn(a, F, se, Gt),
                    di = new R(cn.segments, cn.children);
                  if (0 === uo.length && di.hasChildren())
                    return this.expandChildren(We, Gt, di).pipe(
                      (0, Z.U)(Su => new R(F, Su))
                    );
                  if (0 === Gt.length && 0 === uo.length)
                    return (0, B.of)(new R(F, {}));
                  const oc = M(f) === w;
                  return this.expandSegment(
                    We,
                    di,
                    Gt,
                    uo,
                    oc ? Xe : w,
                    !0
                  ).pipe(
                    (0, Z.U)(_o => new R(F.concat(_o.segments), _o.children))
                  );
                })
              ))
            : Yt(a);
        }
        getChildConfig(l, a, f) {
          return a.children
            ? (0, B.of)({ routes: a.children, injector: l })
            : a.loadChildren
            ? void 0 !== a._loadedRoutes
              ? (0, B.of)({
                  routes: a._loadedRoutes,
                  injector: a._loadedInjector,
                })
              : this.runCanLoadGuards(l, a, f).pipe(
                  (0, ut.z)(y =>
                    y
                      ? this.configLoader.loadChildren(l, a).pipe(
                          pe(w => {
                            (a._loadedRoutes = w.routes),
                              (a._loadedInjector = w.injector);
                          })
                        )
                      : (function g(u) {
                          return ae(
                            ot(
                              `Cannot load children because the guard of the route "path: '${u.path}'" returned false`
                            )
                          );
                        })(a)
                  )
                )
            : (0, B.of)({ routes: [], injector: l });
        }
        runCanLoadGuards(l, a, f) {
          const y = a.canLoad;
          if (!y || 0 === y.length) return (0, B.of)(!0);
          const w = y.map(S => {
            const F = l.get(S);
            let se;
            if (
              (function Rt(u) {
                return u && ye(u.canLoad);
              })(F)
            )
              se = F.canLoad(a, f);
            else {
              if (!ye(F)) throw new Error('Invalid CanLoad guard');
              se = F(a, f);
            }
            return $t(se);
          });
          return (0, B.of)(w).pipe(
            qe(),
            pe(S => {
              if (!Ot(S)) return;
              const F = ot(
                `Redirecting to "${this.urlSerializer.serialize(S)}"`
              );
              throw ((F.url = S), F);
            }),
            (0, Z.U)(S => !0 === S)
          );
        }
        lineralizeSegments(l, a) {
          let f = [],
            y = a.root;
          for (;;) {
            if (((f = f.concat(y.segments)), 0 === y.numberOfChildren))
              return (0, B.of)(f);
            if (y.numberOfChildren > 1 || !y.children[Xe])
              return ae(
                new Error(
                  `Only absolute redirects can have named outlets. redirectTo: '${l.redirectTo}'`
                )
              );
            y = y.children[Xe];
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
        applyRedirectCreatreUrlTree(l, a, f, y) {
          const w = this.createSegmentGroup(l, a.root, f, y);
          return new T(
            w,
            this.createQueryParams(a.queryParams, this.urlTree.queryParams),
            a.fragment
          );
        }
        createQueryParams(l, a) {
          const f = {};
          return (
            Ct(l, (y, w) => {
              if ('string' == typeof y && y.startsWith(':')) {
                const F = y.substring(1);
                f[w] = a[F];
              } else f[w] = y;
            }),
            f
          );
        }
        createSegmentGroup(l, a, f, y) {
          const w = this.createSegments(l, a.segments, f, y);
          let S = {};
          return (
            Ct(a.children, (F, se) => {
              S[se] = this.createSegmentGroup(l, F, f, y);
            }),
            new R(w, S)
          );
        }
        createSegments(l, a, f, y) {
          return a.map(w =>
            w.path.startsWith(':')
              ? this.findPosParam(l, w, y)
              : this.findOrReturn(w, f)
          );
        }
        findPosParam(l, a, f) {
          const y = f[a.path.substring(1)];
          if (!y)
            throw new Error(
              `Cannot redirect to '${l}'. Cannot find '${a.path}'.`
            );
          return y;
        }
        findOrReturn(l, a) {
          let f = 0;
          for (const y of a) {
            if (y.path === l.path) return a.splice(f), y;
            f++;
          }
          return l;
        }
      }
      function nt(u) {
        const l = {};
        for (const f of Object.keys(u.children)) {
          const w = nt(u.children[f]);
          (w.segments.length > 0 || w.hasChildren()) && (l[f] = w);
        }
        return (function de(u) {
          if (1 === u.numberOfChildren && u.children[Xe]) {
            const l = u.children[Xe];
            return new R(u.segments.concat(l.segments), l.children);
          }
          return u;
        })(new R(u.segments, l));
      }
      class bn {
        constructor(l) {
          (this.path = l), (this.route = this.path[this.path.length - 1]);
        }
      }
      class zt {
        constructor(l, a) {
          (this.component = l), (this.route = a);
        }
      }
      function Mn(u, l, a) {
        const f = u._root;
        return On(f, l ? l._root : null, a, [f.value]);
      }
      function Vn(u, l, a) {
        return (E(l) ?? a).get(u);
      }
      function On(
        u,
        l,
        a,
        f,
        y = { canDeactivateChecks: [], canActivateChecks: [] }
      ) {
        const w = Ln(l);
        return (
          u.children.forEach(S => {
            (function Kc(
              u,
              l,
              a,
              f,
              y = { canDeactivateChecks: [], canActivateChecks: [] }
            ) {
              const w = u.value,
                S = l ? l.value : null,
                F = a ? a.getContext(u.value.outlet) : null;
              if (S && w.routeConfig === S.routeConfig) {
                const se = (function ks(u, l, a) {
                  if ('function' == typeof a) return a(u, l);
                  switch (a) {
                    case 'pathParamsChange':
                      return !ht(u.url, l.url);
                    case 'pathParamsOrQueryParamsChange':
                      return (
                        !ht(u.url, l.url) || !W(u.queryParams, l.queryParams)
                      );
                    case 'always':
                      return !0;
                    case 'paramsOrQueryParamsChange':
                      return !Zo(u, l) || !W(u.queryParams, l.queryParams);
                    default:
                      return !Zo(u, l);
                  }
                })(S, w, w.routeConfig.runGuardsAndResolvers);
                se
                  ? y.canActivateChecks.push(new bn(f))
                  : ((w.data = S.data), (w._resolvedData = S._resolvedData)),
                  On(u, l, w.component ? (F ? F.children : null) : a, f, y),
                  se &&
                    F &&
                    F.outlet &&
                    F.outlet.isActivated &&
                    y.canDeactivateChecks.push(new zt(F.outlet.component, S));
              } else
                S && Ir(l, F, y),
                  y.canActivateChecks.push(new bn(f)),
                  On(u, null, w.component ? (F ? F.children : null) : a, f, y);
            })(S, w[S.value.outlet], a, f.concat([S.value]), y),
              delete w[S.value.outlet];
          }),
          Ct(w, (S, F) => Ir(S, a.getContext(F), y)),
          y
        );
      }
      function Ir(u, l, a) {
        const f = Ln(u),
          y = u.value;
        Ct(f, (w, S) => {
          Ir(w, y.component ? (l ? l.children.getContext(S) : null) : l, a);
        }),
          a.canDeactivateChecks.push(
            new zt(
              y.component && l && l.outlet && l.outlet.isActivated
                ? l.outlet.component
                : null,
              y
            )
          );
      }
      class Us {}
      function Yi(u) {
        return new ne.y(l => l.error(u));
      }
      class oi {
        constructor(l, a, f, y, w, S) {
          (this.rootComponentType = l),
            (this.config = a),
            (this.urlTree = f),
            (this.url = y),
            (this.paramsInheritanceStrategy = w),
            (this.relativeLinkResolution = S);
        }
        recognize() {
          const l = Wn(
              this.urlTree.root,
              [],
              [],
              this.config.filter(S => void 0 === S.redirectTo),
              this.relativeLinkResolution
            ).segmentGroup,
            a = this.processSegmentGroup(this.config, l, Xe);
          if (null === a) return null;
          const f = new ar(
              [],
              Object.freeze({}),
              Object.freeze({ ...this.urlTree.queryParams }),
              this.urlTree.fragment,
              {},
              Xe,
              this.rootComponentType,
              null,
              this.urlTree.root,
              -1,
              {}
            ),
            y = new on(f, a),
            w = new Dn(this.url, y);
          return this.inheritParamsAndData(w._root), w;
        }
        inheritParamsAndData(l) {
          const a = l.value,
            f = cr(a, this.paramsInheritanceStrategy);
          (a.params = Object.freeze(f.params)),
            (a.data = Object.freeze(f.data)),
            l.children.forEach(y => this.inheritParamsAndData(y));
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
              F = x(l, w),
              se = this.processSegmentGroup(F, S, w);
            if (null === se) return null;
            f.push(...se);
          }
          const y = yo(f);
          return (
            (function Qc(u) {
              u.sort((l, a) =>
                l.value.outlet === Xe
                  ? -1
                  : a.value.outlet === Xe
                  ? 1
                  : l.value.outlet.localeCompare(a.value.outlet)
              );
            })(y),
            y
          );
        }
        processSegment(l, a, f, y) {
          for (const w of l) {
            const S = this.processSegmentAgainstRoute(w, a, f, y);
            if (null !== S) return S;
          }
          return Et(a, f, y) ? [] : null;
        }
        processSegmentAgainstRoute(l, a, f, y) {
          if (l.redirectTo || !_e(l, a, f, y)) return null;
          let w,
            S = [],
            F = [];
          if ('**' === l.path) {
            const cn = f.length > 0 ? at(f).parameters : {},
              uo = js(a) + f.length;
            w = new ar(
              f,
              cn,
              Object.freeze({ ...this.urlTree.queryParams }),
              this.urlTree.fragment,
              Hs(l),
              M(l),
              l.component ?? l._loadedComponent ?? null,
              l,
              Ki(a),
              uo,
              $s(l),
              uo
            );
          } else {
            const cn = Zn(a, l, f);
            if (!cn.matched) return null;
            (S = cn.consumedSegments), (F = cn.remainingSegments);
            const uo = js(a) + S.length;
            w = new ar(
              S,
              cn.parameters,
              Object.freeze({ ...this.urlTree.queryParams }),
              this.urlTree.fragment,
              Hs(l),
              M(l),
              l.component ?? l._loadedComponent ?? null,
              l,
              Ki(a),
              uo,
              $s(l),
              uo
            );
          }
          const se = (function Xc(u) {
              return u.children
                ? u.children
                : u.loadChildren
                ? u._loadedRoutes
                : [];
            })(l),
            { segmentGroup: Te, slicedSegments: Ze } = Wn(
              a,
              S,
              F,
              se.filter(cn => void 0 === cn.redirectTo),
              this.relativeLinkResolution
            );
          if (0 === Ze.length && Te.hasChildren()) {
            const cn = this.processChildren(se, Te);
            return null === cn ? null : [new on(w, cn)];
          }
          if (0 === se.length && 0 === Ze.length) return [new on(w, [])];
          const We = M(l) === y,
            Gt = this.processSegment(se, Te, Ze, We ? Xe : y);
          return null === Gt ? null : [new on(w, Gt)];
        }
      }
      function Pn(u) {
        const l = u.value.routeConfig;
        return l && '' === l.path && void 0 === l.redirectTo;
      }
      function yo(u) {
        const l = [],
          a = new Set();
        for (const f of u) {
          if (!Pn(f)) {
            l.push(f);
            continue;
          }
          const y = l.find(w => f.value.routeConfig === w.value.routeConfig);
          void 0 !== y ? (y.children.push(...f.children), a.add(y)) : l.push(f);
        }
        for (const f of a) {
          const y = yo(f.children);
          l.push(new on(f.value, y));
        }
        return l.filter(f => !a.has(f));
      }
      function Ki(u) {
        let l = u;
        for (; l._sourceSegment; ) l = l._sourceSegment;
        return l;
      }
      function js(u) {
        let l = u,
          a = l._segmentIndexShift ?? 0;
        for (; l._sourceSegment; )
          (l = l._sourceSegment), (a += l._segmentIndexShift ?? 0);
        return a - 1;
      }
      function Hs(u) {
        return u.data || {};
      }
      function $s(u) {
        return u.resolve || {};
      }
      const xr = Symbol('RouteTitle');
      function Co(u) {
        return 'string' == typeof u.title || null === u.title;
      }
      function Xo(u) {
        return (0, Ke.w)(l => {
          const a = u(l);
          return a ? (0, K.D)(a).pipe((0, Z.U)(() => l)) : (0, B.of)(l);
        });
      }
      class Tr extends class oa {
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
      const Qi = new _.OlP('ROUTES');
      let Xi = (() => {
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
            if (a._loadedComponent) return (0, B.of)(a._loadedComponent);
            this.onLoadStartListener && this.onLoadStartListener(a);
            const f = $t(a.loadComponent()).pipe(
                pe(w => {
                  this.onLoadEndListener && this.onLoadEndListener(a),
                    (a._loadedComponent = w);
                }),
                Ye(() => {
                  this.componentLoaders.delete(a);
                })
              ),
              y = new Q(f, () => new j.x()).pipe(G());
            return this.componentLoaders.set(a, y), y;
          }
          loadChildren(a, f) {
            if (this.childrenLoaders.get(f)) return this.childrenLoaders.get(f);
            if (f._loadedRoutes)
              return (0, B.of)({
                routes: f._loadedRoutes,
                injector: f._loadedInjector,
              });
            this.onLoadStartListener && this.onLoadStartListener(f);
            const w = this.loadModuleFactoryOrRoutes(f.loadChildren).pipe(
                (0, Z.U)(F => {
                  this.onLoadEndListener && this.onLoadEndListener(f);
                  let se,
                    Te,
                    Ze = !1;
                  Array.isArray(F)
                    ? (Te = F)
                    : ((se = F.create(a).injector),
                      (Te = dt(se.get(Qi, [], _.XFs.Self | _.XFs.Optional))));
                  return { routes: Te.map(m), injector: se };
                }),
                Ye(() => {
                  this.childrenLoaders.delete(f);
                })
              ),
              S = new Q(w, () => new j.x()).pipe(G());
            return this.childrenLoaders.set(f, S), S;
          }
          loadModuleFactoryOrRoutes(a) {
            return $t(a()).pipe(
              (0, ut.z)(f =>
                f instanceof _.YKP || Array.isArray(f)
                  ? (0, B.of)(f)
                  : (0, K.D)(this.compiler.compileModuleAsync(f))
              )
            );
          }
        }
        return (
          (u.ɵfac = function (a) {
            return new (a || u)(_.LFG(_.zs3), _.LFG(_.Sil));
          }),
          (u.ɵprov = _.Yz7({ token: u, factory: u.ɵfac })),
          u
        );
      })();
      class Au {
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
      function Gs(u) {
        throw u;
      }
      function es(u, l, a) {
        return l.parse('/');
      }
      const ai = {
          paths: 'exact',
          fragment: 'ignored',
          matrixParams: 'ignored',
          queryParams: 'exact',
        },
        Zs = {
          paths: 'subset',
          fragment: 'ignored',
          matrixParams: 'ignored',
          queryParams: 'subset',
        };
      let An = (() => {
        class u {
          constructor(a, f, y, w, S, F, se) {
            (this.rootComponentType = a),
              (this.urlSerializer = f),
              (this.rootContexts = y),
              (this.location = w),
              (this.config = se),
              (this.lastSuccessfulNavigation = null),
              (this.currentNavigation = null),
              (this.disposed = !1),
              (this.navigationId = 0),
              (this.currentPageId = 0),
              (this.isNgZoneEnabled = !1),
              (this.events = new j.x()),
              (this.errorHandler = Gs),
              (this.malformedUriErrorHandler = es),
              (this.navigated = !1),
              (this.lastSuccessfulId = -1),
              (this.afterPreactivation = () => (0, B.of)(void 0)),
              (this.urlHandlingStrategy = new Au()),
              (this.routeReuseStrategy = new Tr()),
              (this.onSameUrlNavigation = 'ignore'),
              (this.paramsInheritanceStrategy = 'emptyOnly'),
              (this.urlUpdateStrategy = 'deferred'),
              (this.relativeLinkResolution = 'corrected'),
              (this.canceledNavigationResolution = 'replace'),
              (this.configLoader = S.get(Xi)),
              (this.configLoader.onLoadEndListener = Gt =>
                this.triggerEvent(new me(Gt))),
              (this.configLoader.onLoadStartListener = Gt =>
                this.triggerEvent(new H(Gt))),
              (this.ngModule = S.get(_.h0i)),
              (this.console = S.get(_.c2e));
            const We = S.get(_.R0b);
            (this.isNgZoneEnabled =
              We instanceof _.R0b && _.R0b.isInAngularZone()),
              this.resetConfig(se),
              (this.currentUrlTree = (function wn() {
                return new T(new R([], {}), {}, null);
              })()),
              (this.rawUrlTree = this.currentUrlTree),
              (this.browserUrlTree = this.currentUrlTree),
              (this.routerState = sr(
                this.currentUrlTree,
                this.rootComponentType
              )),
              (this.transitions = new X({
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
              (0, yt.h)(y => 0 !== y.id),
              (0, Z.U)(y => ({
                ...y,
                extractedUrl: this.urlHandlingStrategy.extract(y.rawUrl),
              })),
              (0, Ke.w)(y => {
                let w = !1,
                  S = !1;
                return (0, B.of)(y).pipe(
                  pe(F => {
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
                  (0, Ke.w)(F => {
                    const se = this.browserUrlTree.toString(),
                      Te =
                        !this.navigated ||
                        F.extractedUrl.toString() !== se ||
                        se !== this.currentUrlTree.toString();
                    if (
                      ('reload' === this.onSameUrlNavigation || Te) &&
                      this.urlHandlingStrategy.shouldProcessUrl(F.rawUrl)
                    )
                      return (
                        Ws(F.source) && (this.browserUrlTree = F.extractedUrl),
                        (0, B.of)(F).pipe(
                          (0, Ke.w)(We => {
                            const Gt = this.transitions.getValue();
                            return (
                              f.next(
                                new tt(
                                  We.id,
                                  this.serializeUrl(We.extractedUrl),
                                  We.source,
                                  We.restoredState
                                )
                              ),
                              Gt !== this.transitions.getValue()
                                ? ce.E
                                : Promise.resolve(We)
                            );
                          }),
                          (function Kt(u, l, a, f) {
                            return (0, Ke.w)(y =>
                              (function h(u, l, a, f, y) {
                                return new O(u, l, a, f, y).apply();
                              })(u, l, a, y.extractedUrl, f).pipe(
                                (0, Z.U)(w => ({ ...y, urlAfterRedirects: w }))
                              )
                            );
                          })(
                            this.ngModule.injector,
                            this.configLoader,
                            this.urlSerializer,
                            this.config
                          ),
                          pe(We => {
                            this.currentNavigation = {
                              ...this.currentNavigation,
                              finalUrl: We.urlAfterRedirects,
                            };
                          }),
                          (function ea(u, l, a, f, y) {
                            return (0, ut.z)(w =>
                              (function Bs(
                                u,
                                l,
                                a,
                                f,
                                y = 'emptyOnly',
                                w = 'legacy'
                              ) {
                                try {
                                  const S = new oi(
                                    u,
                                    l,
                                    a,
                                    f,
                                    y,
                                    w
                                  ).recognize();
                                  return null === S
                                    ? Yi(new Us())
                                    : (0, B.of)(S);
                                } catch (S) {
                                  return Yi(S);
                                }
                              })(
                                u,
                                l,
                                w.urlAfterRedirects,
                                a(w.urlAfterRedirects),
                                f,
                                y
                              ).pipe(
                                (0, Z.U)(S => ({ ...w, targetSnapshot: S }))
                              )
                            );
                          })(
                            this.rootComponentType,
                            this.config,
                            We => this.serializeUrl(We),
                            this.paramsInheritanceStrategy,
                            this.relativeLinkResolution
                          ),
                          pe(We => {
                            if ('eager' === this.urlUpdateStrategy) {
                              if (!We.extras.skipLocationChange) {
                                const cn = this.urlHandlingStrategy.merge(
                                  We.urlAfterRedirects,
                                  We.rawUrl
                                );
                                this.setBrowserUrl(cn, We);
                              }
                              this.browserUrlTree = We.urlAfterRedirects;
                            }
                            const Gt = new Fn(
                              We.id,
                              this.serializeUrl(We.extractedUrl),
                              this.serializeUrl(We.urlAfterRedirects),
                              We.targetSnapshot
                            );
                            f.next(Gt);
                          })
                        )
                      );
                    if (
                      Te &&
                      this.rawUrlTree &&
                      this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)
                    ) {
                      const {
                          id: Gt,
                          extractedUrl: cn,
                          source: uo,
                          restoredState: di,
                          extras: oc,
                        } = F,
                        aa = new tt(Gt, this.serializeUrl(cn), uo, di);
                      f.next(aa);
                      const _o = sr(cn, this.rootComponentType).snapshot;
                      return (0, B.of)({
                        ...F,
                        targetSnapshot: _o,
                        urlAfterRedirects: cn,
                        extras: {
                          ...oc,
                          skipLocationChange: !1,
                          replaceUrl: !1,
                        },
                      });
                    }
                    return (this.rawUrlTree = F.rawUrl), F.resolve(null), ce.E;
                  }),
                  pe(F => {
                    const se = new zo(
                      F.id,
                      this.serializeUrl(F.extractedUrl),
                      this.serializeUrl(F.urlAfterRedirects),
                      F.targetSnapshot
                    );
                    this.triggerEvent(se);
                  }),
                  (0, Z.U)(F => ({
                    ...F,
                    guards: Mn(
                      F.targetSnapshot,
                      F.currentSnapshot,
                      this.rootContexts
                    ),
                  })),
                  (function qc(u, l) {
                    return (0, ut.z)(a => {
                      const {
                        targetSnapshot: f,
                        currentSnapshot: y,
                        guards: {
                          canActivateChecks: w,
                          canDeactivateChecks: S,
                        },
                      } = a;
                      return 0 === S.length && 0 === w.length
                        ? (0, B.of)({ ...a, guardsResult: !0 })
                        : (function zi(u, l, a, f) {
                            return (0, K.D)(u).pipe(
                              (0, ut.z)(y =>
                                (function ni(u, l, a, f, y) {
                                  const w =
                                    l && l.routeConfig
                                      ? l.routeConfig.canDeactivate
                                      : null;
                                  if (!w || 0 === w.length)
                                    return (0, B.of)(!0);
                                  const S = w.map(F => {
                                    const se = Vn(F, l, y);
                                    let Te;
                                    if (
                                      (function rn(u) {
                                        return u && ye(u.canDeactivate);
                                      })(se)
                                    )
                                      Te = $t(se.canDeactivate(u, l, a, f));
                                    else {
                                      if (!ye(se))
                                        throw new Error(
                                          'Invalid CanDeactivate guard'
                                        );
                                      Te = $t(se(u, l, a, f));
                                    }
                                    return Te.pipe(Me());
                                  });
                                  return (0, B.of)(S).pipe(qe());
                                })(y.component, y.route, a, l, f)
                              ),
                              Me(y => !0 !== y, !0)
                            );
                          })(S, f, y, u).pipe(
                            (0, ut.z)(F =>
                              F &&
                              (function ze(u) {
                                return 'boolean' == typeof u;
                              })(F)
                                ? (function Gi(u, l, a, f) {
                                    return (0, K.D)(l).pipe(
                                      (0, gt.b)(y =>
                                        Le(
                                          (function Zi(u, l) {
                                            return (
                                              null !== u && l && l(new Y(u)),
                                              (0, B.of)(!0)
                                            );
                                          })(y.route.parent, f),
                                          (function Ls(u, l) {
                                            return (
                                              null !== u && l && l(new It(u)),
                                              (0, B.of)(!0)
                                            );
                                          })(y.route, f),
                                          (function Vs(u, l, a) {
                                            const f = l[l.length - 1],
                                              w = l
                                                .slice(0, l.length - 1)
                                                .reverse()
                                                .map(S =>
                                                  (function Qo(u) {
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
                                                  Ae(() => {
                                                    const F = S.guards.map(
                                                      se => {
                                                        const Te = Vn(
                                                          se,
                                                          S.node,
                                                          a
                                                        );
                                                        let Ze;
                                                        if (
                                                          (function bt(u) {
                                                            return (
                                                              u &&
                                                              ye(
                                                                u.canActivateChild
                                                              )
                                                            );
                                                          })(Te)
                                                        )
                                                          Ze = $t(
                                                            Te.canActivateChild(
                                                              f,
                                                              u
                                                            )
                                                          );
                                                        else {
                                                          if (!ye(Te))
                                                            throw new Error(
                                                              'Invalid CanActivateChild guard'
                                                            );
                                                          Ze = $t(Te(f, u));
                                                        }
                                                        return Ze.pipe(Me());
                                                      }
                                                    );
                                                    return (0, B.of)(F).pipe(
                                                      qe()
                                                    );
                                                  })
                                                );
                                            return (0, B.of)(w).pipe(qe());
                                          })(u, y.path, a),
                                          (function Jc(u, l, a) {
                                            const f = l.routeConfig
                                              ? l.routeConfig.canActivate
                                              : null;
                                            if (!f || 0 === f.length)
                                              return (0, B.of)(!0);
                                            const y = f.map(w =>
                                              Ae(() => {
                                                const S = Vn(w, l, a);
                                                let F;
                                                if (
                                                  (function Bt(u) {
                                                    return (
                                                      u && ye(u.canActivate)
                                                    );
                                                  })(S)
                                                )
                                                  F = $t(S.canActivate(l, u));
                                                else {
                                                  if (!ye(S))
                                                    throw new Error(
                                                      'Invalid CanActivate guard'
                                                    );
                                                  F = $t(S(l, u));
                                                }
                                                return F.pipe(Me());
                                              })
                                            );
                                            return (0, B.of)(y).pipe(qe());
                                          })(u, y.route, a)
                                        )
                                      ),
                                      Me(y => !0 !== y, !0)
                                    );
                                  })(f, w, u, l)
                                : (0, B.of)(F)
                            ),
                            (0, Z.U)(F => ({ ...a, guardsResult: F }))
                          );
                    });
                  })(this.ngModule.injector, F => this.triggerEvent(F)),
                  pe(F => {
                    if (Ot(F.guardsResult)) {
                      const Te = ot(
                        `Redirecting to "${this.serializeUrl(F.guardsResult)}"`
                      );
                      throw ((Te.url = F.guardsResult), Te);
                    }
                    const se = new _n(
                      F.id,
                      this.serializeUrl(F.extractedUrl),
                      this.serializeUrl(F.urlAfterRedirects),
                      F.targetSnapshot,
                      !!F.guardsResult
                    );
                    this.triggerEvent(se);
                  }),
                  (0, yt.h)(
                    F =>
                      !!F.guardsResult ||
                      (this.restoreHistory(F),
                      this.cancelNavigationTransition(F, ''),
                      !1)
                  ),
                  Xo(F => {
                    if (F.guards.canActivateChecks.length)
                      return (0, B.of)(F).pipe(
                        pe(se => {
                          const Te = new he(
                            se.id,
                            this.serializeUrl(se.extractedUrl),
                            this.serializeUrl(se.urlAfterRedirects),
                            se.targetSnapshot
                          );
                          this.triggerEvent(Te);
                        }),
                        (0, Ke.w)(se => {
                          let Te = !1;
                          return (0, B.of)(se).pipe(
                            (function ri(u, l) {
                              return (0, ut.z)(a => {
                                const {
                                  targetSnapshot: f,
                                  guards: { canActivateChecks: y },
                                } = a;
                                if (!y.length) return (0, B.of)(a);
                                let w = 0;
                                return (0, K.D)(y).pipe(
                                  (0, gt.b)(S =>
                                    (function ii(u, l, a, f) {
                                      const y = u.routeConfig,
                                        w = u._resolve;
                                      return (
                                        void 0 !== y?.title &&
                                          !Co(y) &&
                                          (w[xr] = y.title),
                                        (function Ji(u, l, a, f) {
                                          const y = (function zs(u) {
                                            return [
                                              ...Object.keys(u),
                                              ...Object.getOwnPropertySymbols(
                                                u
                                              ),
                                            ];
                                          })(u);
                                          if (0 === y.length)
                                            return (0, B.of)({});
                                          const w = {};
                                          return (0, K.D)(y).pipe(
                                            (0, ut.z)(S =>
                                              (function ta(u, l, a, f) {
                                                const y = Vn(u, l, f);
                                                return $t(
                                                  y.resolve
                                                    ? y.resolve(l, a)
                                                    : y(l, a)
                                                );
                                              })(u[S], l, a, f).pipe(
                                                Me(),
                                                pe(F => {
                                                  w[S] = F;
                                                })
                                              )
                                            ),
                                            Ue(1),
                                            (function ke(u) {
                                              return (0, Z.U)(() => u);
                                            })(w),
                                            mt(S =>
                                              S instanceof Ve ? ce.E : ae(S)
                                            )
                                          );
                                        })(w, u, l, f).pipe(
                                          (0, Z.U)(
                                            S => (
                                              (u._resolvedData = S),
                                              (u.data = cr(u, a).resolve),
                                              y &&
                                                Co(y) &&
                                                (u.data[xr] = y.title),
                                              null
                                            )
                                          )
                                        )
                                      );
                                    })(S.route, f, u, l)
                                  ),
                                  pe(() => w++),
                                  Ue(1),
                                  (0, ut.z)(S =>
                                    w === y.length ? (0, B.of)(a) : ce.E
                                  )
                                );
                              });
                            })(
                              this.paramsInheritanceStrategy,
                              this.ngModule.injector
                            ),
                            pe({
                              next: () => (Te = !0),
                              complete: () => {
                                Te ||
                                  (this.restoreHistory(se),
                                  this.cancelNavigationTransition(
                                    se,
                                    "At least one route resolver didn't emit any value."
                                  ));
                              },
                            })
                          );
                        }),
                        pe(se => {
                          const Te = new U(
                            se.id,
                            this.serializeUrl(se.extractedUrl),
                            this.serializeUrl(se.urlAfterRedirects),
                            se.targetSnapshot
                          );
                          this.triggerEvent(Te);
                        })
                      );
                  }),
                  Xo(() => this.afterPreactivation()),
                  Xo(F => {
                    const se = Te => {
                      const Ze = [];
                      Te.routeConfig?.loadComponent &&
                        !Te.routeConfig._loadedComponent &&
                        Ze.push(
                          this.configLoader.loadComponent(Te.routeConfig).pipe(
                            pe(We => {
                              Te.component = We;
                            }),
                            (0, Z.U)(() => {})
                          )
                        );
                      for (const We of Te.children) Ze.push(...se(We));
                      return Ze;
                    };
                    return we(se(F.targetSnapshot.root)).pipe(
                      Tt(),
                      (0, qt.q)(1)
                    );
                  }),
                  (0, Z.U)(F => {
                    const se = (function Yr(u, l, a) {
                      const f = ho(u, l._root, a ? a._root : void 0);
                      return new vn(f, l);
                    })(
                      this.routeReuseStrategy,
                      F.targetSnapshot,
                      F.currentRouterState
                    );
                    return { ...F, targetRouterState: se };
                  }),
                  pe(F => {
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
                    (0, Z.U)(
                      f => (
                        new ue(
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
                  pe({
                    next() {
                      w = !0;
                    },
                    complete() {
                      w = !0;
                    },
                  }),
                  Ye(() => {
                    w ||
                      S ||
                      this.cancelNavigationTransition(
                        y,
                        `Navigation ID ${y.id} is not equal to the current navigation id ${this.navigationId}`
                      ),
                      this.currentNavigation?.id === y.id &&
                        (this.currentNavigation = null);
                  }),
                  mt(F => {
                    if (
                      ((S = !0),
                      (function k(u) {
                        return u && u[vt];
                      })(F))
                    ) {
                      const se = Ot(F.url);
                      se || ((this.navigated = !0), this.restoreHistory(y, !0));
                      const Te = new Dt(
                        y.id,
                        this.serializeUrl(y.extractedUrl),
                        F.message
                      );
                      if ((f.next(Te), se)) {
                        const Ze = this.urlHandlingStrategy.merge(
                            F.url,
                            this.rawUrlTree
                          ),
                          We = {
                            skipLocationChange: y.extras.skipLocationChange,
                            replaceUrl:
                              'eager' === this.urlUpdateStrategy ||
                              Ws(y.source),
                          };
                        this.scheduleNavigation(Ze, 'imperative', null, We, {
                          resolve: y.resolve,
                          reject: y.reject,
                          promise: y.promise,
                        });
                      } else y.resolve(!1);
                    } else {
                      this.restoreHistory(y, !0);
                      const se = new kt(
                        y.id,
                        this.serializeUrl(y.extractedUrl),
                        F
                      );
                      f.next(se);
                      try {
                        y.resolve(this.errorHandler(F));
                      } catch (Te) {
                        y.reject(Te);
                      }
                    }
                    return ce.E;
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
                    const y = { replaceUrl: !0 },
                      w = a.state?.navigationId ? a.state : null;
                    if (w) {
                      const F = { ...w };
                      delete F.navigationId,
                        delete F.ɵrouterPageId,
                        0 !== Object.keys(F).length && (y.state = F);
                    }
                    const S = this.parseUrl(a.url);
                    this.scheduleNavigation(S, f, w, y);
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
            (this.config = a.map(m)),
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
                relativeTo: y,
                queryParams: w,
                fragment: S,
                queryParamsHandling: F,
                preserveFragment: se,
              } = f,
              Te = y || this.routerState.root,
              Ze = se ? this.currentUrlTree.fragment : S;
            let We = null;
            switch (F) {
              case 'merge':
                We = { ...this.currentUrlTree.queryParams, ...w };
                break;
              case 'preserve':
                We = this.currentUrlTree.queryParams;
                break;
              default:
                We = w || null;
            }
            return (
              null !== We && (We = this.removeEmptyProps(We)),
              (function Mr(u, l, a, f, y) {
                if (0 === a.length) return Io(l.root, l.root, l.root, f, y);
                const w = (function qr(u) {
                  if ('string' == typeof u[0] && 1 === u.length && '/' === u[0])
                    return new Yo(!0, 0, u);
                  let l = 0,
                    a = !1;
                  const f = u.reduce((y, w, S) => {
                    if ('object' == typeof w && null != w) {
                      if (w.outlets) {
                        const F = {};
                        return (
                          Ct(w.outlets, (se, Te) => {
                            F[Te] = 'string' == typeof se ? se.split('/') : se;
                          }),
                          [...y, { outlets: F }]
                        );
                      }
                      if (w.segmentPath) return [...y, w.segmentPath];
                    }
                    return 'string' != typeof w
                      ? [...y, w]
                      : 0 === S
                      ? (w.split('/').forEach((F, se) => {
                          (0 == se && '.' === F) ||
                            (0 == se && '' === F
                              ? (a = !0)
                              : '..' === F
                              ? l++
                              : '' != F && y.push(F));
                        }),
                        y)
                      : [...y, w];
                  }, []);
                  return new Yo(a, l, f);
                })(a);
                return w.toRoot()
                  ? Io(l.root, l.root, new R([], {}), f, y)
                  : (function S(se) {
                      const Te = (function qn(u, l, a, f) {
                          return u.isAbsolute
                            ? new To(l.root, !0, 0)
                            : -1 === f
                            ? new To(a, a === l.root, 0)
                            : (function io(u, l, a) {
                                let f = u,
                                  y = l,
                                  w = a;
                                for (; w > y; ) {
                                  if (((w -= y), (f = f.parent), !f))
                                    throw new Error("Invalid number of '../'");
                                  y = f.segments.length;
                                }
                                return new To(f, !1, y - w);
                              })(
                                a,
                                f + (Wo(u.commands[0]) ? 0 : 1),
                                u.numberOfDoubleDots
                              );
                        })(w, l, u.snapshot?._urlSegment, se),
                        Ze = Te.processChildren
                          ? So(Te.segmentGroup, Te.index, w.commands)
                          : xo(Te.segmentGroup, Te.index, w.commands);
                      return Io(l.root, Te.segmentGroup, Ze, f, y);
                    })(u.snapshot?._lastPathIndex);
              })(Te, this.currentUrlTree, a, We, Ze ?? null)
            );
          }
          navigateByUrl(a, f = { skipLocationChange: !1 }) {
            const y = Ot(a) ? a : this.parseUrl(a),
              w = this.urlHandlingStrategy.merge(y, this.rawUrlTree);
            return this.scheduleNavigation(w, 'imperative', null, f);
          }
          navigate(a, f = { skipLocationChange: !1 }) {
            return (
              (function br(u) {
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
            } catch (y) {
              f = this.malformedUriErrorHandler(y, this.urlSerializer, a);
            }
            return f;
          }
          isActive(a, f) {
            let y;
            if (((y = !0 === f ? { ...ai } : !1 === f ? { ...Zs } : f), Ot(a)))
              return Wt(this.currentUrlTree, a, y);
            const w = this.parseUrl(a);
            return Wt(this.currentUrlTree, w, y);
          }
          removeEmptyProps(a) {
            return Object.keys(a).reduce((f, y) => {
              const w = a[y];
              return null != w && (f[y] = w), f;
            }, {});
          }
          processNavigations() {
            this.navigations.subscribe(
              a => {
                (this.navigated = !0),
                  (this.lastSuccessfulId = a.id),
                  (this.currentPageId = a.targetPageId),
                  this.events.next(
                    new ln(
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
          scheduleNavigation(a, f, y, w, S) {
            if (this.disposed) return Promise.resolve(!1);
            let F, se, Te;
            S
              ? ((F = S.resolve), (se = S.reject), (Te = S.promise))
              : (Te = new Promise((Gt, cn) => {
                  (F = Gt), (se = cn);
                }));
            const Ze = ++this.navigationId;
            let We;
            return (
              'computed' === this.canceledNavigationResolution
                ? (0 === this.currentPageId && (y = this.location.getState()),
                  (We =
                    y && y.ɵrouterPageId
                      ? y.ɵrouterPageId
                      : w.replaceUrl || w.skipLocationChange
                      ? this.browserPageId ?? 0
                      : (this.browserPageId ?? 0) + 1))
                : (We = 0),
              this.setTransition({
                id: Ze,
                targetPageId: We,
                source: f,
                restoredState: y,
                currentUrlTree: this.currentUrlTree,
                currentRawUrl: this.rawUrlTree,
                rawUrl: a,
                extras: w,
                resolve: F,
                reject: se,
                promise: Te,
                currentSnapshot: this.routerState.snapshot,
                currentRouterState: this.routerState,
              }),
              Te.catch(Gt => Promise.reject(Gt))
            );
          }
          setBrowserUrl(a, f) {
            const y = this.urlSerializer.serialize(a),
              w = {
                ...f.extras.state,
                ...this.generateNgRouterState(f.id, f.targetPageId),
              };
            this.location.isCurrentPathEqualTo(y) || f.extras.replaceUrl
              ? this.location.replaceState(y, '', w)
              : this.location.go(y, '', w);
          }
          restoreHistory(a, f = !1) {
            if ('computed' === this.canceledNavigationResolution) {
              const y = this.currentPageId - a.targetPageId;
              ('popstate' !== a.source &&
                'eager' !== this.urlUpdateStrategy &&
                this.currentUrlTree !== this.currentNavigation?.finalUrl) ||
              0 === y
                ? this.currentUrlTree === this.currentNavigation?.finalUrl &&
                  0 === y &&
                  (this.resetState(a),
                  (this.browserUrlTree = a.currentUrlTree),
                  this.resetUrlToCurrentUrlTree())
                : this.location.historyGo(y);
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
            const y = new Dt(a.id, this.serializeUrl(a.extractedUrl), f);
            this.triggerEvent(y), a.resolve(!1);
          }
          generateNgRouterState(a, f) {
            return 'computed' === this.canceledNavigationResolution
              ? { navigationId: a, ɵrouterPageId: f }
              : { navigationId: a };
          }
        }
        return (
          (u.ɵfac = function (a) {
            _.$Z();
          }),
          (u.ɵprov = _.Yz7({ token: u, factory: u.ɵfac })),
          u
        );
      })();
      function Ws(u) {
        return 'imperative' !== u;
      }
      class ts {
        buildTitle(l) {
          let a,
            f = l.root;
          for (; void 0 !== f; )
            (a = this.getResolvedTitleForRoute(f) ?? a),
              (f = f.children.find(y => y.outlet === Xe));
          return a;
        }
        getResolvedTitleForRoute(l) {
          return l.data[xr];
        }
      }
      let Ys = (() => {
        class u extends ts {
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
            return new (a || u)(_.LFG(St.Dx));
          }),
          (u.ɵprov = _.Yz7({ token: u, factory: u.ɵfac, providedIn: 'root' })),
          u
        );
      })();
      class Ks {}
      class qs {
        preload(l, a) {
          return (0, B.of)(null);
        }
      }
      let yr = (() => {
          class u {
            constructor(a, f, y, w, S) {
              (this.router = a),
                (this.injector = y),
                (this.preloadingStrategy = w),
                (this.loader = S);
            }
            setUpPreloading() {
              this.subscription = this.router.events
                .pipe(
                  (0, yt.h)(a => a instanceof ln),
                  (0, gt.b)(() => this.preload())
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
              const y = [];
              for (const w of f) {
                w.providers &&
                  !w._injector &&
                  (w._injector = (0, _.MMx)(
                    w.providers,
                    a,
                    `Route: ${w.path}`
                  ));
                const S = w._injector ?? a,
                  F = w._loadedInjector ?? S;
                (w.loadChildren && !w._loadedRoutes) ||
                (w.loadComponent && !w._loadedComponent)
                  ? y.push(this.preloadConfig(S, w))
                  : (w.children || w._loadedRoutes) &&
                    y.push(
                      this.processRoutes(F, w.children ?? w._loadedRoutes)
                    );
              }
              return (0, K.D)(y).pipe((0, Ie.J)());
            }
            preloadConfig(a, f) {
              return this.preloadingStrategy.preload(f, () => {
                let y;
                y =
                  f.loadChildren && void 0 === f.canLoad
                    ? this.loader.loadChildren(a, f)
                    : (0, B.of)(null);
                const w = y.pipe(
                  (0, ut.z)(S =>
                    null === S
                      ? (0, B.of)(void 0)
                      : ((f._loadedRoutes = S.routes),
                        (f._loadedInjector = S.injector),
                        this.processRoutes(S.injector ?? a, S.routes))
                  )
                );
                if (f.loadComponent && !f._loadedComponent) {
                  const S = this.loader.loadComponent(f);
                  return (0, K.D)([w, S]).pipe((0, Ie.J)());
                }
                return w;
              });
            }
          }
          return (
            (u.ɵfac = function (a) {
              return new (a || u)(
                _.LFG(An),
                _.LFG(_.Sil),
                _.LFG(_.lqb),
                _.LFG(Ks),
                _.LFG(Xi)
              );
            }),
            (u.ɵprov = _.Yz7({ token: u, factory: u.ɵfac })),
            u
          );
        })(),
        Fr = (() => {
          class u {
            constructor(a, f, y = {}) {
              (this.router = a),
                (this.viewportScroller = f),
                (this.options = y),
                (this.lastId = 0),
                (this.lastSource = 'imperative'),
                (this.restoredId = 0),
                (this.store = {}),
                (y.scrollPositionRestoration =
                  y.scrollPositionRestoration || 'disabled'),
                (y.anchorScrolling = y.anchorScrolling || 'disabled');
            }
            init() {
              'disabled' !== this.options.scrollPositionRestoration &&
                this.viewportScroller.setHistoryScrollRestoration('manual'),
                (this.routerEventsSubscription = this.createScrollEvents()),
                (this.scrollEventsSubscription = this.consumeScrollEvents());
            }
            createScrollEvents() {
              return this.router.events.subscribe(a => {
                a instanceof tt
                  ? ((this.store[this.lastId] =
                      this.viewportScroller.getScrollPosition()),
                    (this.lastSource = a.navigationTrigger),
                    (this.restoredId = a.restoredState
                      ? a.restoredState.navigationId
                      : 0))
                  : a instanceof ln &&
                    ((this.lastId = a.id),
                    this.scheduleScrollEvent(
                      a,
                      this.router.parseUrl(a.urlAfterRedirects).fragment
                    ));
              });
            }
            consumeScrollEvents() {
              return this.router.events.subscribe(a => {
                a instanceof Re &&
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
                new Re(
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
              _.$Z();
            }),
            (u.ɵprov = _.Yz7({ token: u, factory: u.ɵfac })),
            u
          );
        })();
      const lo = new _.OlP('ROUTER_CONFIGURATION'),
        Nr = new _.OlP('ROUTER_FORROOT_GUARD'),
        ra = [
          s.Ye,
          { provide: it, useClass: In },
          {
            provide: An,
            useFactory: function kr(u, l, a, f, y, w, S = {}, F, se, Te, Ze) {
              const We = new An(null, u, l, a, f, y, dt(w));
              return (
                Te && (We.urlHandlingStrategy = Te),
                Ze && (We.routeReuseStrategy = Ze),
                (We.titleStrategy = se ?? F),
                (function sa(u, l) {
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
                })(S, We),
                We
              );
            },
            deps: [
              it,
              dn,
              s.Ye,
              _.zs3,
              _.Sil,
              Qi,
              lo,
              Ys,
              [ts, new _.FiY()],
              [class Pu {}, new _.FiY()],
              [class na {}, new _.FiY()],
            ],
          },
          dn,
          {
            provide: ro,
            useFactory: function nc(u) {
              return u.routerState.root;
            },
            deps: [An],
          },
          yr,
          qs,
          class ao {
            preload(l, a) {
              return a().pipe(mt(() => (0, B.of)(null)));
            }
          },
          { provide: lo, useValue: { enableTracing: !1 } },
          Xi,
        ];
      function Qs() {
        return new _.PXZ('Router', An);
      }
      let Xs = (() => {
        class u {
          constructor(a, f) {}
          static forRoot(a, f) {
            return {
              ngModule: u,
              providers: [
                ra,
                Rr(a),
                {
                  provide: Nr,
                  useFactory: ia,
                  deps: [[An, new _.FiY(), new _.tp0()]],
                },
                { provide: lo, useValue: f || {} },
                {
                  provide: s.S$,
                  useFactory: tc,
                  deps: [s.lw, [new _.tBr(s.mr), new _.FiY()], lo],
                },
                { provide: Fr, useFactory: ec, deps: [An, s.EM, lo] },
                {
                  provide: Ks,
                  useExisting:
                    f && f.preloadingStrategy ? f.preloadingStrategy : qs,
                },
                { provide: _.PXZ, multi: !0, useFactory: Qs },
                [
                  ui,
                  { provide: _.ip1, multi: !0, useFactory: Cr, deps: [ui] },
                  { provide: ns, useFactory: ca, deps: [ui] },
                  { provide: _.tb, multi: !0, useExisting: ns },
                ],
              ],
            };
          }
          static forChild(a) {
            return { ngModule: u, providers: [Rr(a)] };
          }
        }
        return (
          (u.ɵfac = function (a) {
            return new (a || u)(_.LFG(Nr, 8), _.LFG(An, 8));
          }),
          (u.ɵmod = _.oAB({ type: u })),
          (u.ɵinj = _.cJS({})),
          u
        );
      })();
      function ec(u, l, a) {
        return a.scrollOffset && l.setOffset(a.scrollOffset), new Fr(u, l, a);
      }
      function tc(u, l, a = {}) {
        return a.useHash ? new s.Do(u, l) : new s.b0(u, l);
      }
      function ia(u) {
        return 'guarded';
      }
      function Rr(u) {
        return [
          { provide: _.deG, multi: !0, useValue: u },
          { provide: Qi, multi: !0, useValue: u },
        ];
      }
      let ui = (() => {
        class u {
          constructor(a) {
            (this.injector = a),
              (this.initNavigation = !1),
              (this.destroyed = !1),
              (this.resultOfPreactivationDone = new j.x());
          }
          appInitializer() {
            return this.injector.get(s.V_, Promise.resolve(null)).then(() => {
              if (this.destroyed) return Promise.resolve(!0);
              let f = null;
              const y = new Promise(F => (f = F)),
                w = this.injector.get(An),
                S = this.injector.get(lo);
              return (
                'disabled' === S.initialNavigation
                  ? (w.setUpLocationChangeListener(), f(!0))
                  : 'enabledBlocking' === S.initialNavigation
                  ? ((w.afterPreactivation = () =>
                      this.initNavigation
                        ? (0, B.of)(void 0)
                        : ((this.initNavigation = !0),
                          f(!0),
                          this.resultOfPreactivationDone)),
                    w.initialNavigation())
                  : f(!0),
                y
              );
            });
          }
          bootstrapListener(a) {
            const f = this.injector.get(lo),
              y = this.injector.get(yr),
              w = this.injector.get(Fr),
              S = this.injector.get(An),
              F = this.injector.get(_.z2F);
            a === F.components[0] &&
              (('enabledNonBlocking' === f.initialNavigation ||
                void 0 === f.initialNavigation) &&
                S.initialNavigation(),
              y.setUpPreloading(),
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
            return new (a || u)(_.LFG(_.zs3));
          }),
          (u.ɵprov = _.Yz7({ token: u, factory: u.ɵfac })),
          u
        );
      })();
      function Cr(u) {
        return u.appInitializer.bind(u);
      }
      function ca(u) {
        return u.bootstrapListener.bind(u);
      }
      const ns = new _.OlP('Router Initializer');
    },
  },
  et => {
    et((et.s = 2987));
  },
]);
(() => {
  'use strict';
  var e,
    m = {},
    v = {};
  function t(e) {
    var n = v[e];
    if (void 0 !== n) return n.exports;
    var r = (v[e] = { exports: {} });
    return m[e](r, r.exports, t), r.exports;
  }
  (t.m = m),
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
      var e = { runtime: 0 };
      (t.f.j = (o, u) => {
        var i = t.o(e, o) ? e[o] : void 0;
        if (0 !== i)
          if (i) u.push(i[2]);
          else if ('runtime' != o) {
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
  ['polyfills'],
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
  ['common'],
  {
    6154: (M, c, o) => {
      o.r(c), o.d(c, { ConfigurationsModule: () => d });
      var l = o(6895),
        r = o(613),
        a = o(542),
        s = o(356),
        t = o(4650),
        u = o(9590);
      const m = [{ path: '', component: s.A }];
      let g = (() => {
        class n {
          constructor(i, f) {
            (this.router = i),
              (this.broadcastService = f),
              (this.data = [
                {
                  heading: 'CMP_CANDIDATE_EXPERIENCE',
                  experienceType: 'cx',
                  channels: [
                    {
                      pageId: 'career-site-bot',
                      channel: 'career-site-bot',
                      heading: 'CMP_CAREERS_SITE_BOT',
                    },
                    {
                      pageId: 'facebook-bot',
                      channel: 'facebook',
                      heading: 'CMP_FACEBOOK_BOT',
                    },
                    {
                      pageId: 'msteams-bot',
                      channel: 'msteams',
                      heading: 'CMP_MS_TEAMS_BOT',
                    },
                    {
                      pageId: 'sms-bot',
                      channel: 'sms',
                      heading: 'CMP_SMS_BOT',
                    },
                  ],
                },
                {
                  heading: 'CMP_EMPLOYEE_EXPERIENCE',
                  experienceType: 'ex',
                  channels: [
                    {
                      channel: 'career-site-bot',
                      heading: 'CMP_EMPLOYEE_SITE',
                      pageId: 'employee-site-bot',
                    },
                    {
                      pageId: 'facebook-bot',
                      channel: 'facebook',
                      heading: 'CMP_FACEBOOK_BOT',
                    },
                    {
                      pageId: 'msteams-bot',
                      channel: 'msteams',
                      heading: 'CMP_MS_TEAMS_BOT',
                    },
                    {
                      pageId: 'sms-bot',
                      channel: 'sms',
                      heading: 'CMP_SMS_BOT',
                    },
                  ],
                },
              ]),
              console.log(this.router.config),
              console.log('in config routing module');
          }
        }
        return (
          (n.ɵfac = function (i) {
            return new (i || n)(t.LFG(a.F0), t.LFG(u.M));
          }),
          (n.ɵmod = t.oAB({ type: n })),
          (n.ɵinj = t.cJS({ imports: [l.ez, a.Bz.forChild(m), l.ez, a.Bz] })),
          n
        );
      })();
      var e = o(529);
      let d = (() => {
        class n {
          constructor() {
            console.log('config module');
          }
        }
        return (
          (n.ɵfac = function (i) {
            return new (i || n)();
          }),
          (n.ɵmod = t.oAB({ type: n })),
          (n.ɵinj = t.cJS({ imports: [l.ez, r.m, g, a.Bz, e.JF] })),
          n
        );
      })();
    },
    5321: (M, c, o) => {
      o.r(c), o.d(c, { LocalesModule: () => g });
      var l = o(6895),
        r = o(542),
        a = o(3485),
        s = o(4650);
      const t = [{ path: '', component: a.K }];
      let u = (() => {
        class e {}
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵmod = s.oAB({ type: e })),
          (e.ɵinj = s.cJS({ imports: [r.Bz.forChild(t), r.Bz] })),
          e
        );
      })();
      var m = o(613);
      let g = (() => {
        class e {}
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵmod = s.oAB({ type: e })),
          (e.ɵinj = s.cJS({ imports: [l.ez, m.m, u] })),
          e
        );
      })();
    },
  },
]);
('use strict');
(self.webpackChunkchatbot_management_app =
  self.webpackChunkchatbot_management_app || []).push([
  ['src_app_pages_dashboard_dashboard-routing_module_ts'],
  {
    9366: (u, d, o) => {
      o.r(d), o.d(d, { DashboardRoutingModule: () => l });
      var s = o(542),
        t = o(4650);
      const n = [
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        {
          path: 'dashboard',
          loadChildren: () =>
            Promise.all([
              o.e('common'),
              o.e('src_app_pages_dashboard_dashboard_module_ts'),
            ])
              .then(o.bind(o, 1659))
              .then(a => (console.log('Normal ROUTE'), a.DashboardModule)),
        },
        {
          path: 'dashboard/:exp/:channel',
          loadChildren: () =>
            Promise.all([
              o.e('common'),
              o.e('src_app_pages_dashboard_dashboard_module_ts'),
            ])
              .then(o.bind(o, 1659))
              .then(a => (console.log('Normal ROUTE'), a.DashboardModule)),
        },
      ];
      let l = (() => {
        class a {
          constructor() {}
        }
        return (
          (a.ɵfac = function (r) {
            return new (r || a)();
          }),
          (a.ɵmod = t.oAB({ type: a })),
          (a.ɵinj = t.cJS({ imports: [s.Bz.forChild(n), s.Bz] })),
          a
        );
      })();
    },
  },
]);
('use strict');
(self.webpackChunkchatbot_management_app =
  self.webpackChunkchatbot_management_app || []).push([
  ['src_app_pages_dashboard_dashboard_module_ts'],
  {
    1659: (D, _, a) => {
      a.r(_), a.d(_, { DashboardModule: () => l });
      var n = a(6895),
        u = a(613),
        r = a(9366),
        t = a(6154),
        d = a(433),
        s = a(4650);
      let l = (() => {
        class o {}
        return (
          (o.ɵfac = function (M) {
            return new (M || o)();
          }),
          (o.ɵmod = s.oAB({ type: o })),
          (o.ɵinj = s.cJS({
            imports: [
              n.ez,
              u.m,
              r.DashboardRoutingModule,
              t.ConfigurationsModule,
              d.u5,
              d.UX,
            ],
          })),
          o
        );
      })();
    },
  },
]);
('use strict');
(self.webpackChunkchatbot_management_app =
  self.webpackChunkchatbot_management_app || []).push([
  ['src_app_pages_locale-list_locale-list_module_ts'],
  {
    4972: (h, s, t) => {
      t.r(s), t.d(s, { LocaleListModule: () => r });
      var n = t(6895),
        u = t(613),
        d = t(5321),
        c = t(542),
        m = t(9960),
        l = t(4650);
      const i = [
        { path: '', redirectTo: '/locales', pathMatch: 'full' },
        { path: 'locales', component: m.g },
      ];
      let L = (() => {
          class o {}
          return (
            (o.ɵfac = function (e) {
              return new (e || o)();
            }),
            (o.ɵmod = l.oAB({ type: o })),
            (o.ɵinj = l.cJS({ imports: [c.Bz.forChild(i), c.Bz] })),
            o
          );
        })(),
        r = (() => {
          class o {}
          return (
            (o.ɵfac = function (e) {
              return new (e || o)();
            }),
            (o.ɵmod = l.oAB({ type: o })),
            (o.ɵinj = l.cJS({ imports: [n.ez, u.m, d.LocalesModule, L] })),
            o
          );
        })();
    },
  },
]);
