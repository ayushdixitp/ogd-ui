'use strict';
(self.webpackChunkchatbot_management_app =
  self.webpackChunkchatbot_management_app || []).push([
  ['main'],
  {
    963: (Xe, ge, v) => {
      v.d(ge, { H: () => ee });
      var s = v(542),
        C = v(5289),
        H = v(4650),
        Q = v(9590);
      let ee = (() => {
        class I {
          constructor(Y, fe) {
            (this.router = Y),
              (this.broadcastService = fe),
              (this.isLocaleListPage = !1),
              Y.events.subscribe(ne => {
                ne instanceof s.m2 && (this.currentUrl = ne.url);
              });
          }
          ngOnInit() {
            (this.isLocaleListPage =
              '/' == this.currentUrl || '/locales' == this.currentUrl),
              this.broadcastService
                .on(C.T.SELECTED_LOCALE_EVENT)
                .subscribe(() => (this.isLocaleListPage = !1));
          }
          ngOnChanges() {
            (this.isLocaleListPage =
              '/' == this.currentUrl || '/locales' == this.currentUrl),
              this.broadcastService
                .on(C.T.SELECTED_LOCALE_EVENT)
                .subscribe(() => (this.isLocaleListPage = !1));
          }
        }
        return (
          (I.ɵfac = function (Y) {
            return new (Y || I)(H.Y36(s.F0), H.Y36(Q.M));
          }),
          (I.ɵcmp = H.Xpm({
            type: I,
            selectors: [['app-base']],
            features: [H.TTD],
            decls: 5,
            vars: 1,
            consts: [
              [1, 'mfe-main-container'],
              [3, 'isLocaleListPage'],
              [1, 'mfe-base-container'],
            ],
            template: function (Y, fe) {
              1 & Y &&
                (H.TgZ(0, 'div', 0)(1, 'aside'),
                H._UZ(2, 'app-sidebar', 1),
                H.qZA(),
                H.TgZ(3, 'div', 2),
                H._UZ(4, 'router-outlet'),
                H.qZA()()),
                2 & Y &&
                  (H.xp6(2), H.Q6J('isLocaleListPage', fe.isLocaleListPage));
            },
            styles: [
              '.mfe-main-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.mfe-main-container[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]{position:fixed;height:100vh;width:15%}@media screen and (max-width: 1500px){.mfe-main-container[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]{width:25%}}.mfe-main-container[_ngcontent-%COMP%]   .mfe-base-container[_ngcontent-%COMP%]{width:85%;margin-left:15%}@media screen and (max-width: 1500px){.mfe-main-container[_ngcontent-%COMP%]   .mfe-base-container[_ngcontent-%COMP%]{width:75%;margin-left:25%}}',
            ],
          })),
          I
        );
      })();
    },
    356: (Xe, ge, v) => {
      v.d(ge, { A: () => vn });
      var s = v(4650),
        C = v(5289),
        H = v(542),
        Q = v(4004),
        ee = v(319),
        I = (() => {
          return (
            ((R = I || (I = {})).SUCCESS = 'success'),
            (R.FAILED = 'failed'),
            (R.ALERT = 'alert'),
            (R.INFO = 'info'),
            I
          );
          var R;
        })(),
        B = v(9590),
        Y = v(6895);
      function fe(R, Ce) {
        1 & R &&
          (s.ynx(0),
          s.O4$(),
          s.TgZ(1, 'svg', 8),
          s._UZ(2, 'path', 9),
          s.qZA(),
          s.BQk());
      }
      function ne(R, Ce) {
        1 & R &&
          (s.ynx(0),
          s.O4$(),
          s.TgZ(1, 'svg', 8),
          s._UZ(2, 'path', 10),
          s.qZA(),
          s.BQk());
      }
      function te(R, Ce) {
        1 & R &&
          (s.ynx(0),
          s.O4$(),
          s.TgZ(1, 'svg', 8),
          s._UZ(2, 'path', 11),
          s.qZA(),
          s.BQk());
      }
      function oe(R, Ce) {
        1 & R &&
          (s.ynx(0),
          s.O4$(),
          s.TgZ(1, 'svg', 8),
          s._UZ(2, 'path', 12),
          s.qZA(),
          s.BQk());
      }
      function Ze(R, Ce) {
        if (1 & R) {
          const P = s.EpF();
          s.TgZ(0, 'div', 1)(1, 'p')(2, 'i'),
            s.ynx(3, 2),
            s.YNc(4, fe, 3, 0, 'ng-container', 3),
            s.YNc(5, ne, 3, 0, 'ng-container', 3),
            s.YNc(6, te, 3, 0, 'ng-container', 3),
            s.YNc(7, oe, 3, 0, 'ng-container', 3),
            s.BQk(),
            s.qZA(),
            s.TgZ(8, 'span', 4),
            s._uU(9),
            s.qZA(),
            s.TgZ(10, 'span', 5),
            s.NdJ('click', function () {
              s.CHM(P);
              const Je = s.oxw();
              return s.KtG(Je.closeNotification());
            }),
            s.O4$(),
            s.TgZ(11, 'svg', 6),
            s._UZ(12, 'path', 7),
            s.qZA()()()();
        }
        if (2 & R) {
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
            s.xp6(2),
            s.hij(' ', P.notificationText, ' ');
        }
      }
      let Ee = (() => {
        class R {
          constructor(P) {
            (this.broadcastService = P),
              (this.notificationType = 'success'),
              (this.eNotificationType = I);
          }
          ngOnInit() {
            this.broadcastService
              .on(C.T.SHOW_NOTIFICATION_EVENT)
              .subscribe(P => {
                let Z = P.payload;
                (this.notificationText = Z.msg),
                  (this.notificationType = Z.type);
              });
          }
          closeNotification() {
            this.broadcastService.dispatch(
              new ee.q(C.T.HIDE_NOTIFICATION_EVENT, {
                id: 'notification',
                data: { type: 'notification' },
              })
            );
          }
        }
        return (
          (R.ɵfac = function (P) {
            return new (P || R)(s.Y36(B.M));
          }),
          (R.ɵcmp = s.Xpm({
            type: R,
            selectors: [['notification-card']],
            decls: 1,
            vars: 1,
            consts: [
              ['class', 'card', 4, 'ngIf'],
              [1, 'card'],
              [3, 'ngSwitch'],
              [4, 'ngSwitchCase'],
              [1, 'notification-text'],
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
            template: function (P, Z) {
              1 & P && s.YNc(0, Ze, 13, 8, 'div', 0),
                2 & P && s.Q6J('ngIf', Z.notificationText);
            },
            dependencies: [Y.O5, Y.RF, Y.n9],
            styles: [
              '.card[_ngcontent-%COMP%]{position:relative;z-index:1000}.card[_ngcontent-%COMP%]   .notification-text[_ngcontent-%COMP%]{width:80%}.card[_ngcontent-%COMP%]   .success[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{animation:card-fade-in .1s 1 forwards;padding:20px 24px;background:#FFFFFF;box-shadow:0 0 8px #00000026;border-radius:4px;font-size:14px;display:flex;width:max-content;align-items:center;gap:18px;justify-content:flex-start;position:fixed;left:40px;bottom:30px}.card[_ngcontent-%COMP%]   .failed[_ngcontent-%COMP%]{position:fixed;right:40px;top:30px;padding:20px 24px;background:#FFFFFF;box-shadow:0 0 8px #00000026;border-radius:4px;font-size:14px;display:flex;width:326px;align-items:center;gap:18px;justify-content:flex-start}.card[_ngcontent-%COMP%]   .cross-button[_ngcontent-%COMP%]{position:absolute;cursor:pointer;right:29px}@keyframes card-fade-in{0%{opacity:0}to{opacity:1}}',
            ],
          })),
          R
        );
      })();
      var de = v(7420),
        ye = v(4172),
        K = v(1094);
      const ie = function (R, Ce) {
        return { 'range-disabled': R, range: Ce };
      };
      let Ae = (() => {
        class R {
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
                new ee.q(C.T.RANGE_EMITTER, {
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
          (R.ɵfac = function (P) {
            return new (P || R)(s.Y36(B.M));
          }),
          (R.ɵcmp = s.Xpm({
            type: R,
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
            template: function (P, Z) {
              1 & P &&
                (s.TgZ(0, 'div', 0)(1, 'input', 1),
                s.NdJ('change', function (ut) {
                  return Z.changeValue(ut);
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
                  s.Q6J('ngClass', s.WLB(3, ie, Z.isDisabled, !Z.isDisabled))(
                    'value',
                    Z.value
                  )('disabled', Z.isDisabled));
            },
            dependencies: [Y.mk],
            styles: [
              '.progress-container[_ngcontent-%COMP%]{position:relative}.progress-container[_ngcontent-%COMP%]   .range[_ngcontent-%COMP%], .progress-container[_ngcontent-%COMP%]   .range-disabled[_ngcontent-%COMP%]{width:-webkit-fill-available;-webkit-appearance:none;appearance:none;overflow:hidden;cursor:pointer}.progress-container[_ngcontent-%COMP%]   .max-value[_ngcontent-%COMP%], .progress-container[_ngcontent-%COMP%]   .min-value[_ngcontent-%COMP%]{position:absolute;color:#4b6479;top:30px;font-size:20px;line-height:16px}.progress-container[_ngcontent-%COMP%]   .max-value[_ngcontent-%COMP%]{left:98%}.progress-container[_ngcontent-%COMP%]   .min-value[_ngcontent-%COMP%]{left:0%}.range[_ngcontent-%COMP%]::-webkit-slider-runnable-track{height:30px;background:linear-gradient(to bottom,#01B2C0,#01B2C0) 100% 50%/100% 3px no-repeat transparent}.range-disabled[_ngcontent-%COMP%]::-webkit-slider-runnable-track{height:30px;background:linear-gradient(to bottom,#93A1AB,#93A1AB) 100% 50%/100% 3px no-repeat transparent}.range[_ngcontent-%COMP%]::-webkit-slider-thumb{position:relative;-webkit-appearance:none;appearance:none;height:13px;width:13px;background:#01B2C0;border-radius:50%;top:50%;margin-top:-6.5px;box-shadow:1px 0 0 -5px #bdc1cc,2px 0 0 -5px #bdc1cc,3px 0 0 -5px #bdc1cc,4px 0 0 -5px #bdc1cc,5px 0 0 -5px #bdc1cc,6px 0 0 -5px #bdc1cc,7px 0 0 -5px #bdc1cc,8px 0 0 -5px #bdc1cc,9px 0 0 -5px #bdc1cc,10px 0 0 -5px #bdc1cc,11px 0 0 -5px #bdc1cc,12px 0 0 -5px #bdc1cc,13px 0 0 -5px #bdc1cc,14px 0 0 -5px #bdc1cc,15px 0 0 -5px #bdc1cc,16px 0 0 -5px #bdc1cc,17px 0 0 -5px #bdc1cc,18px 0 0 -5px #bdc1cc,19px 0 0 -5px #bdc1cc,20px 0 0 -5px #bdc1cc,21px 0 0 -5px #bdc1cc,22px 0 0 -5px #bdc1cc,23px 0 0 -5px #bdc1cc,24px 0 0 -5px #bdc1cc,25px 0 0 -5px #bdc1cc,26px 0 0 -5px #bdc1cc,27px 0 0 -5px #bdc1cc,28px 0 0 -5px #bdc1cc,29px 0 0 -5px #bdc1cc,30px 0 0 -5px #bdc1cc,31px 0 0 -5px #bdc1cc,32px 0 0 -5px #bdc1cc,33px 0 0 -5px #bdc1cc,34px 0 0 -5px #bdc1cc,35px 0 0 -5px #bdc1cc,36px 0 0 -5px #bdc1cc,37px 0 0 -5px #bdc1cc,38px 0 0 -5px #bdc1cc,39px 0 0 -5px #bdc1cc,40px 0 0 -5px #bdc1cc,41px 0 0 -5px #bdc1cc,42px 0 0 -5px #bdc1cc,43px 0 0 -5px #bdc1cc,44px 0 0 -5px #bdc1cc,45px 0 0 -5px #bdc1cc,46px 0 0 -5px #bdc1cc,47px 0 0 -5px #bdc1cc,48px 0 0 -5px #bdc1cc,49px 0 0 -5px #bdc1cc,50px 0 0 -5px #bdc1cc,51px 0 0 -5px #bdc1cc,52px 0 0 -5px #bdc1cc,53px 0 0 -5px #bdc1cc,54px 0 0 -5px #bdc1cc,55px 0 0 -5px #bdc1cc,56px 0 0 -5px #bdc1cc,57px 0 0 -5px #bdc1cc,58px 0 0 -5px #bdc1cc,59px 0 0 -5px #bdc1cc,60px 0 0 -5px #bdc1cc,61px 0 0 -5px #bdc1cc,62px 0 0 -5px #bdc1cc,63px 0 0 -5px #bdc1cc,64px 0 0 -5px #bdc1cc,65px 0 0 -5px #bdc1cc,66px 0 0 -5px #bdc1cc,67px 0 0 -5px #bdc1cc,68px 0 0 -5px #bdc1cc,69px 0 0 -5px #bdc1cc,70px 0 0 -5px #bdc1cc,71px 0 0 -5px #bdc1cc,72px 0 0 -5px #bdc1cc,73px 0 0 -5px #bdc1cc,74px 0 0 -5px #bdc1cc,75px 0 0 -5px #bdc1cc,76px 0 0 -5px #bdc1cc,77px 0 0 -5px #bdc1cc,78px 0 0 -5px #bdc1cc,79px 0 0 -5px #bdc1cc,80px 0 0 -5px #bdc1cc,81px 0 0 -5px #bdc1cc,82px 0 0 -5px #bdc1cc,83px 0 0 -5px #bdc1cc,84px 0 0 -5px #bdc1cc,85px 0 0 -5px #bdc1cc,86px 0 0 -5px #bdc1cc,87px 0 0 -5px #bdc1cc,88px 0 0 -5px #bdc1cc,89px 0 0 -5px #bdc1cc,90px 0 0 -5px #bdc1cc,91px 0 0 -5px #bdc1cc,92px 0 0 -5px #bdc1cc,93px 0 0 -5px #bdc1cc,94px 0 0 -5px #bdc1cc,95px 0 0 -5px #bdc1cc,96px 0 0 -5px #bdc1cc,97px 0 0 -5px #bdc1cc,98px 0 0 -5px #bdc1cc,99px 0 0 -5px #bdc1cc,100px 0 0 -5px #bdc1cc,101px 0 0 -5px #bdc1cc,102px 0 0 -5px #bdc1cc,103px 0 0 -5px #bdc1cc,104px 0 0 -5px #bdc1cc,105px 0 0 -5px #bdc1cc,106px 0 0 -5px #bdc1cc,107px 0 0 -5px #bdc1cc,108px 0 0 -5px #bdc1cc,109px 0 0 -5px #bdc1cc,110px 0 0 -5px #bdc1cc,111px 0 0 -5px #bdc1cc,112px 0 0 -5px #bdc1cc,113px 0 0 -5px #bdc1cc,114px 0 0 -5px #bdc1cc,115px 0 0 -5px #bdc1cc,116px 0 0 -5px #bdc1cc,117px 0 0 -5px #bdc1cc,118px 0 0 -5px #bdc1cc,119px 0 0 -5px #bdc1cc,120px 0 0 -5px #bdc1cc,121px 0 0 -5px #bdc1cc,122px 0 0 -5px #bdc1cc,123px 0 0 -5px #bdc1cc,124px 0 0 -5px #bdc1cc,125px 0 0 -5px #bdc1cc,126px 0 0 -5px #bdc1cc,127px 0 0 -5px #bdc1cc,128px 0 0 -5px #bdc1cc,129px 0 0 -5px #bdc1cc,130px 0 0 -5px #bdc1cc,131px 0 0 -5px #bdc1cc,132px 0 0 -5px #bdc1cc,133px 0 0 -5px #bdc1cc,134px 0 0 -5px #bdc1cc,135px 0 0 -5px #bdc1cc,136px 0 0 -5px #bdc1cc,137px 0 0 -5px #bdc1cc,138px 0 0 -5px #bdc1cc,139px 0 0 -5px #bdc1cc,140px 0 0 -5px #bdc1cc,141px 0 0 -5px #bdc1cc,142px 0 0 -5px #bdc1cc,143px 0 0 -5px #bdc1cc,144px 0 0 -5px #bdc1cc,145px 0 0 -5px #bdc1cc,146px 0 0 -5px #bdc1cc,147px 0 0 -5px #bdc1cc,148px 0 0 -5px #bdc1cc,149px 0 0 -5px #bdc1cc,150px 0 0 -5px #bdc1cc,151px 0 0 -5px #bdc1cc,152px 0 0 -5px #bdc1cc,153px 0 0 -5px #bdc1cc,154px 0 0 -5px #bdc1cc,155px 0 0 -5px #bdc1cc,156px 0 0 -5px #bdc1cc,157px 0 0 -5px #bdc1cc,158px 0 0 -5px #bdc1cc,159px 0 0 -5px #bdc1cc,160px 0 0 -5px #bdc1cc,161px 0 0 -5px #bdc1cc,162px 0 0 -5px #bdc1cc,163px 0 0 -5px #bdc1cc,164px 0 0 -5px #bdc1cc,165px 0 0 -5px #bdc1cc,166px 0 0 -5px #bdc1cc,167px 0 0 -5px #bdc1cc,168px 0 0 -5px #bdc1cc,169px 0 0 -5px #bdc1cc,170px 0 0 -5px #bdc1cc,171px 0 0 -5px #bdc1cc,172px 0 0 -5px #bdc1cc,173px 0 0 -5px #bdc1cc,174px 0 0 -5px #bdc1cc,175px 0 0 -5px #bdc1cc,176px 0 0 -5px #bdc1cc,177px 0 0 -5px #bdc1cc,178px 0 0 -5px #bdc1cc,179px 0 0 -5px #bdc1cc,180px 0 0 -5px #bdc1cc,181px 0 0 -5px #bdc1cc,182px 0 0 -5px #bdc1cc,183px 0 0 -5px #bdc1cc,184px 0 0 -5px #bdc1cc,185px 0 0 -5px #bdc1cc,186px 0 0 -5px #bdc1cc,187px 0 0 -5px #bdc1cc,188px 0 0 -5px #bdc1cc,189px 0 0 -5px #bdc1cc,190px 0 0 -5px #bdc1cc,191px 0 0 -5px #bdc1cc,192px 0 0 -5px #bdc1cc,193px 0 0 -5px #bdc1cc,194px 0 0 -5px #bdc1cc,195px 0 0 -5px #bdc1cc,196px 0 0 -5px #bdc1cc,197px 0 0 -5px #bdc1cc,198px 0 0 -5px #bdc1cc,199px 0 0 -5px #bdc1cc,200px 0 0 -5px #bdc1cc,201px 0 0 -5px #bdc1cc,202px 0 0 -5px #bdc1cc,203px 0 0 -5px #bdc1cc,204px 0 0 -5px #bdc1cc,205px 0 0 -5px #bdc1cc,206px 0 0 -5px #bdc1cc,207px 0 0 -5px #bdc1cc,208px 0 0 -5px #bdc1cc,209px 0 0 -5px #bdc1cc,210px 0 0 -5px #bdc1cc,211px 0 0 -5px #bdc1cc,212px 0 0 -5px #bdc1cc,213px 0 0 -5px #bdc1cc,214px 0 0 -5px #bdc1cc,215px 0 0 -5px #bdc1cc,216px 0 0 -5px #bdc1cc,217px 0 0 -5px #bdc1cc,218px 0 0 -5px #bdc1cc,219px 0 0 -5px #bdc1cc,220px 0 0 -5px #bdc1cc,221px 0 0 -5px #bdc1cc,222px 0 0 -5px #bdc1cc,223px 0 0 -5px #bdc1cc,224px 0 0 -5px #bdc1cc,225px 0 0 -5px #bdc1cc,226px 0 0 -5px #bdc1cc,227px 0 0 -5px #bdc1cc,228px 0 0 -5px #bdc1cc,229px 0 0 -5px #bdc1cc,230px 0 0 -5px #bdc1cc,231px 0 0 -5px #bdc1cc,232px 0 0 -5px #bdc1cc,233px 0 0 -5px #bdc1cc,234px 0 0 -5px #bdc1cc,235px 0 0 -5px #bdc1cc,236px 0 0 -5px #bdc1cc,237px 0 0 -5px #bdc1cc,238px 0 0 -5px #bdc1cc,239px 0 0 -5px #bdc1cc,240px 0 0 -5px #bdc1cc,241px 0 0 -5px #bdc1cc,242px 0 0 -5px #bdc1cc,243px 0 0 -5px #bdc1cc,244px 0 0 -5px #bdc1cc,245px 0 0 -5px #bdc1cc,246px 0 0 -5px #bdc1cc,247px 0 0 -5px #bdc1cc,248px 0 0 -5px #bdc1cc,249px 0 0 -5px #bdc1cc,250px 0 0 -5px #bdc1cc,251px 0 0 -5px #bdc1cc,252px 0 0 -5px #bdc1cc,253px 0 0 -5px #bdc1cc,254px 0 0 -5px #bdc1cc,255px 0 0 -5px #bdc1cc,256px 0 0 -5px #bdc1cc,257px 0 0 -5px #bdc1cc,258px 0 0 -5px #bdc1cc,259px 0 0 -5px #bdc1cc,260px 0 0 -5px #bdc1cc,261px 0 0 -5px #bdc1cc,262px 0 0 -5px #bdc1cc,263px 0 0 -5px #bdc1cc,264px 0 0 -5px #bdc1cc,265px 0 0 -5px #bdc1cc,266px 0 0 -5px #bdc1cc,267px 0 0 -5px #bdc1cc,268px 0 0 -5px #bdc1cc,269px 0 0 -5px #bdc1cc,270px 0 0 -5px #bdc1cc,271px 0 0 -5px #bdc1cc,272px 0 0 -5px #bdc1cc,273px 0 0 -5px #bdc1cc,274px 0 0 -5px #bdc1cc,275px 0 0 -5px #bdc1cc,276px 0 0 -5px #bdc1cc,277px 0 0 -5px #bdc1cc,278px 0 0 -5px #bdc1cc,279px 0 0 -5px #bdc1cc,280px 0 0 -5px #bdc1cc,281px 0 0 -5px #bdc1cc,282px 0 0 -5px #bdc1cc,283px 0 0 -5px #bdc1cc,284px 0 0 -5px #bdc1cc,285px 0 0 -5px #bdc1cc,286px 0 0 -5px #bdc1cc,287px 0 0 -5px #bdc1cc,288px 0 0 -5px #bdc1cc,289px 0 0 -5px #bdc1cc,290px 0 0 -5px #bdc1cc,291px 0 0 -5px #bdc1cc,292px 0 0 -5px #bdc1cc,293px 0 0 -5px #bdc1cc,294px 0 0 -5px #bdc1cc,295px 0 0 -5px #bdc1cc,296px 0 0 -5px #bdc1cc,297px 0 0 -5px #bdc1cc,298px 0 0 -5px #bdc1cc,299px 0 0 -5px #bdc1cc,300px 0 0 -5px #bdc1cc,301px 0 0 -5px #bdc1cc,302px 0 0 -5px #bdc1cc,303px 0 0 -5px #bdc1cc,304px 0 0 -5px #bdc1cc,305px 0 0 -5px #bdc1cc,306px 0 0 -5px #bdc1cc,307px 0 0 -5px #bdc1cc,308px 0 0 -5px #bdc1cc,309px 0 0 -5px #bdc1cc,310px 0 0 -5px #bdc1cc,311px 0 0 -5px #bdc1cc,312px 0 0 -5px #bdc1cc,313px 0 0 -5px #bdc1cc,314px 0 0 -5px #bdc1cc,315px 0 0 -5px #bdc1cc,316px 0 0 -5px #bdc1cc,317px 0 0 -5px #bdc1cc,318px 0 0 -5px #bdc1cc,319px 0 0 -5px #bdc1cc,320px 0 0 -5px #bdc1cc,321px 0 0 -5px #bdc1cc,322px 0 0 -5px #bdc1cc,323px 0 0 -5px #bdc1cc,324px 0 0 -5px #bdc1cc,325px 0 0 -5px #bdc1cc,326px 0 0 -5px #bdc1cc,327px 0 0 -5px #bdc1cc,328px 0 0 -5px #bdc1cc,329px 0 0 -5px #bdc1cc,330px 0 0 -5px #bdc1cc,331px 0 0 -5px #bdc1cc,332px 0 0 -5px #bdc1cc,333px 0 0 -5px #bdc1cc,334px 0 0 -5px #bdc1cc,335px 0 0 -5px #bdc1cc,336px 0 0 -5px #bdc1cc,337px 0 0 -5px #bdc1cc,338px 0 0 -5px #bdc1cc,339px 0 0 -5px #bdc1cc,340px 0 0 -5px #bdc1cc,341px 0 0 -5px #bdc1cc,342px 0 0 -5px #bdc1cc,343px 0 0 -5px #bdc1cc,344px 0 0 -5px #bdc1cc,345px 0 0 -5px #bdc1cc,346px 0 0 -5px #bdc1cc,347px 0 0 -5px #bdc1cc,348px 0 0 -5px #bdc1cc,349px 0 0 -5px #bdc1cc,350px 0 0 -5px #bdc1cc,351px 0 0 -5px #bdc1cc,352px 0 0 -5px #bdc1cc,353px 0 0 -5px #bdc1cc,354px 0 0 -5px #bdc1cc,355px 0 0 -5px #bdc1cc,356px 0 0 -5px #bdc1cc,357px 0 0 -5px #bdc1cc,358px 0 0 -5px #bdc1cc,359px 0 0 -5px #bdc1cc,360px 0 0 -5px #bdc1cc,361px 0 0 -5px #bdc1cc,362px 0 0 -5px #bdc1cc,363px 0 0 -5px #bdc1cc,364px 0 0 -5px #bdc1cc,365px 0 0 -5px #bdc1cc,366px 0 0 -5px #bdc1cc,367px 0 0 -5px #bdc1cc,368px 0 0 -5px #bdc1cc,369px 0 0 -5px #bdc1cc,370px 0 0 -5px #bdc1cc,371px 0 0 -5px #bdc1cc,372px 0 0 -5px #bdc1cc,373px 0 0 -5px #bdc1cc,374px 0 0 -5px #bdc1cc,375px 0 0 -5px #bdc1cc,376px 0 0 -5px #bdc1cc,377px 0 0 -5px #bdc1cc,378px 0 0 -5px #bdc1cc,379px 0 0 -5px #bdc1cc,380px 0 0 -5px #bdc1cc,381px 0 0 -5px #bdc1cc,382px 0 0 -5px #bdc1cc,383px 0 0 -5px #bdc1cc,384px 0 0 -5px #bdc1cc,385px 0 0 -5px #bdc1cc,386px 0 0 -5px #bdc1cc,387px 0 0 -5px #bdc1cc,388px 0 0 -5px #bdc1cc,389px 0 0 -5px #bdc1cc,390px 0 0 -5px #bdc1cc,391px 0 0 -5px #bdc1cc,392px 0 0 -5px #bdc1cc,393px 0 0 -5px #bdc1cc,394px 0 0 -5px #bdc1cc,395px 0 0 -5px #bdc1cc,396px 0 0 -5px #bdc1cc,397px 0 0 -5px #bdc1cc,398px 0 0 -5px #bdc1cc,399px 0 0 -5px #bdc1cc,400px 0 0 -5px #bdc1cc,401px 0 0 -5px #bdc1cc,402px 0 0 -5px #bdc1cc,403px 0 0 -5px #bdc1cc,404px 0 0 -5px #bdc1cc,405px 0 0 -5px #bdc1cc,406px 0 0 -5px #bdc1cc,407px 0 0 -5px #bdc1cc,408px 0 0 -5px #bdc1cc,409px 0 0 -5px #bdc1cc,410px 0 0 -5px #bdc1cc,411px 0 0 -5px #bdc1cc,412px 0 0 -5px #bdc1cc,413px 0 0 -5px #bdc1cc,414px 0 0 -5px #bdc1cc,415px 0 0 -5px #bdc1cc,416px 0 0 -5px #bdc1cc,417px 0 0 -5px #bdc1cc,418px 0 0 -5px #bdc1cc,419px 0 0 -5px #bdc1cc,420px 0 0 -5px #bdc1cc,421px 0 0 -5px #bdc1cc,422px 0 0 -5px #bdc1cc,423px 0 0 -5px #bdc1cc,424px 0 0 -5px #bdc1cc,425px 0 0 -5px #bdc1cc,426px 0 0 -5px #bdc1cc,427px 0 0 -5px #bdc1cc,428px 0 0 -5px #bdc1cc,429px 0 0 -5px #bdc1cc,430px 0 0 -5px #bdc1cc,431px 0 0 -5px #bdc1cc,432px 0 0 -5px #bdc1cc,433px 0 0 -5px #bdc1cc,434px 0 0 -5px #bdc1cc,435px 0 0 -5px #bdc1cc,436px 0 0 -5px #bdc1cc,437px 0 0 -5px #bdc1cc,438px 0 0 -5px #bdc1cc,439px 0 0 -5px #bdc1cc,440px 0 0 -5px #bdc1cc,441px 0 0 -5px #bdc1cc,442px 0 0 -5px #bdc1cc,443px 0 0 -5px #bdc1cc,444px 0 0 -5px #bdc1cc,445px 0 0 -5px #bdc1cc,446px 0 0 -5px #bdc1cc,447px 0 0 -5px #bdc1cc,448px 0 0 -5px #bdc1cc,449px 0 0 -5px #bdc1cc,450px 0 0 -5px #bdc1cc,451px 0 0 -5px #bdc1cc,452px 0 0 -5px #bdc1cc,453px 0 0 -5px #bdc1cc,454px 0 0 -5px #bdc1cc,455px 0 0 -5px #bdc1cc,456px 0 0 -5px #bdc1cc,457px 0 0 -5px #bdc1cc,458px 0 0 -5px #bdc1cc,459px 0 0 -5px #bdc1cc,460px 0 0 -5px #bdc1cc,461px 0 0 -5px #bdc1cc,462px 0 0 -5px #bdc1cc,463px 0 0 -5px #bdc1cc,464px 0 0 -5px #bdc1cc,465px 0 0 -5px #bdc1cc,466px 0 0 -5px #bdc1cc,467px 0 0 -5px #bdc1cc,468px 0 0 -5px #bdc1cc,469px 0 0 -5px #bdc1cc,470px 0 0 -5px #bdc1cc,471px 0 0 -5px #bdc1cc,472px 0 0 -5px #bdc1cc,473px 0 0 -5px #bdc1cc,474px 0 0 -5px #bdc1cc,475px 0 0 -5px #bdc1cc,476px 0 0 -5px #bdc1cc,477px 0 0 -5px #bdc1cc,478px 0 0 -5px #bdc1cc,479px 0 0 -5px #bdc1cc,480px 0 0 -5px #bdc1cc,481px 0 0 -5px #bdc1cc,482px 0 0 -5px #bdc1cc,483px 0 0 -5px #bdc1cc,484px 0 0 -5px #bdc1cc,485px 0 0 -5px #bdc1cc,486px 0 0 -5px #bdc1cc,487px 0 0 -5px #bdc1cc,488px 0 0 -5px #bdc1cc,489px 0 0 -5px #bdc1cc,490px 0 0 -5px #bdc1cc,491px 0 0 -5px #bdc1cc,492px 0 0 -5px #bdc1cc,493px 0 0 -5px #bdc1cc,494px 0 0 -5px #bdc1cc,495px 0 0 -5px #bdc1cc,496px 0 0 -5px #bdc1cc,497px 0 0 -5px #bdc1cc,498px 0 0 -5px #bdc1cc,499px 0 0 -5px #bdc1cc,500px 0 0 -5px #bdc1cc,501px 0 0 -5px #bdc1cc,502px 0 0 -5px #bdc1cc,503px 0 0 -5px #bdc1cc,504px 0 0 -5px #bdc1cc,505px 0 0 -5px #bdc1cc,506px 0 0 -5px #bdc1cc,507px 0 0 -5px #bdc1cc,508px 0 0 -5px #bdc1cc,509px 0 0 -5px #bdc1cc,510px 0 0 -5px #bdc1cc,511px 0 0 -5px #bdc1cc,512px 0 0 -5px #bdc1cc,513px 0 0 -5px #bdc1cc,514px 0 0 -5px #bdc1cc,515px 0 0 -5px #bdc1cc,516px 0 0 -5px #bdc1cc,517px 0 0 -5px #bdc1cc,518px 0 0 -5px #bdc1cc,519px 0 0 -5px #bdc1cc,520px 0 0 -5px #bdc1cc,521px 0 0 -5px #bdc1cc,522px 0 0 -5px #bdc1cc,523px 0 0 -5px #bdc1cc,524px 0 0 -5px #bdc1cc,525px 0 0 -5px #bdc1cc,526px 0 0 -5px #bdc1cc,527px 0 0 -5px #bdc1cc,528px 0 0 -5px #bdc1cc,529px 0 0 -5px #bdc1cc,530px 0 0 -5px #bdc1cc,531px 0 0 -5px #bdc1cc,532px 0 0 -5px #bdc1cc,533px 0 0 -5px #bdc1cc,534px 0 0 -5px #bdc1cc,535px 0 0 -5px #bdc1cc,536px 0 0 -5px #bdc1cc,537px 0 0 -5px #bdc1cc,538px 0 0 -5px #bdc1cc,539px 0 0 -5px #bdc1cc,540px 0 0 -5px #bdc1cc,541px 0 0 -5px #bdc1cc,542px 0 0 -5px #bdc1cc,543px 0 0 -5px #bdc1cc,544px 0 0 -5px #bdc1cc,545px 0 0 -5px #bdc1cc,546px 0 0 -5px #bdc1cc,547px 0 0 -5px #bdc1cc,548px 0 0 -5px #bdc1cc,549px 0 0 -5px #bdc1cc,550px 0 0 -5px #bdc1cc,551px 0 0 -5px #bdc1cc,552px 0 0 -5px #bdc1cc,553px 0 0 -5px #bdc1cc,554px 0 0 -5px #bdc1cc,555px 0 0 -5px #bdc1cc,556px 0 0 -5px #bdc1cc,557px 0 0 -5px #bdc1cc,558px 0 0 -5px #bdc1cc,559px 0 0 -5px #bdc1cc,560px 0 0 -5px #bdc1cc,561px 0 0 -5px #bdc1cc,562px 0 0 -5px #bdc1cc,563px 0 0 -5px #bdc1cc,564px 0 0 -5px #bdc1cc,565px 0 0 -5px #bdc1cc,566px 0 0 -5px #bdc1cc,567px 0 0 -5px #bdc1cc,568px 0 0 -5px #bdc1cc,569px 0 0 -5px #bdc1cc,570px 0 0 -5px #bdc1cc,571px 0 0 -5px #bdc1cc,572px 0 0 -5px #bdc1cc,573px 0 0 -5px #bdc1cc,574px 0 0 -5px #bdc1cc,575px 0 0 -5px #bdc1cc,576px 0 0 -5px #bdc1cc,577px 0 0 -5px #bdc1cc,578px 0 0 -5px #bdc1cc,579px 0 0 -5px #bdc1cc,580px 0 0 -5px #bdc1cc,581px 0 0 -5px #bdc1cc,582px 0 0 -5px #bdc1cc,583px 0 0 -5px #bdc1cc,584px 0 0 -5px #bdc1cc,585px 0 0 -5px #bdc1cc,586px 0 0 -5px #bdc1cc,587px 0 0 -5px #bdc1cc,588px 0 0 -5px #bdc1cc,589px 0 0 -5px #bdc1cc,590px 0 0 -5px #bdc1cc,591px 0 0 -5px #bdc1cc,592px 0 0 -5px #bdc1cc,593px 0 0 -5px #bdc1cc,594px 0 0 -5px #bdc1cc,595px 0 0 -5px #bdc1cc,596px 0 0 -5px #bdc1cc,597px 0 0 -5px #bdc1cc,598px 0 0 -5px #bdc1cc,599px 0 0 -5px #bdc1cc,600px 0 0 -5px #bdc1cc,601px 0 0 -5px #bdc1cc,602px 0 0 -5px #bdc1cc,603px 0 0 -5px #bdc1cc,604px 0 0 -5px #bdc1cc,605px 0 0 -5px #bdc1cc,606px 0 0 -5px #bdc1cc,607px 0 0 -5px #bdc1cc,608px 0 0 -5px #bdc1cc,609px 0 0 -5px #bdc1cc,610px 0 0 -5px #bdc1cc,611px 0 0 -5px #bdc1cc,612px 0 0 -5px #bdc1cc,613px 0 0 -5px #bdc1cc,614px 0 0 -5px #bdc1cc,615px 0 0 -5px #bdc1cc,616px 0 0 -5px #bdc1cc,617px 0 0 -5px #bdc1cc,618px 0 0 -5px #bdc1cc,619px 0 0 -5px #bdc1cc,620px 0 0 -5px #bdc1cc,621px 0 0 -5px #bdc1cc,622px 0 0 -5px #bdc1cc,623px 0 0 -5px #bdc1cc,624px 0 0 -5px #bdc1cc,625px 0 0 -5px #bdc1cc,626px 0 0 -5px #bdc1cc,627px 0 0 -5px #bdc1cc,628px 0 0 -5px #bdc1cc,629px 0 0 -5px #bdc1cc,630px 0 0 -5px #bdc1cc,631px 0 0 -5px #bdc1cc,632px 0 0 -5px #bdc1cc,633px 0 0 -5px #bdc1cc,634px 0 0 -5px #bdc1cc,635px 0 0 -5px #bdc1cc,636px 0 0 -5px #bdc1cc,637px 0 0 -5px #bdc1cc,638px 0 0 -5px #bdc1cc,639px 0 0 -5px #bdc1cc,640px 0 0 -5px #bdc1cc,641px 0 0 -5px #bdc1cc,642px 0 0 -5px #bdc1cc,643px 0 0 -5px #bdc1cc,644px 0 0 -5px #bdc1cc,645px 0 0 -5px #bdc1cc,646px 0 0 -5px #bdc1cc,647px 0 0 -5px #bdc1cc,648px 0 0 -5px #bdc1cc,649px 0 0 -5px #bdc1cc,650px 0 0 -5px #bdc1cc,651px 0 0 -5px #bdc1cc,652px 0 0 -5px #bdc1cc,653px 0 0 -5px #bdc1cc,654px 0 0 -5px #bdc1cc,655px 0 0 -5px #bdc1cc,656px 0 0 -5px #bdc1cc,657px 0 0 -5px #bdc1cc,658px 0 0 -5px #bdc1cc,659px 0 0 -5px #bdc1cc,660px 0 0 -5px #bdc1cc,661px 0 0 -5px #bdc1cc,662px 0 0 -5px #bdc1cc,663px 0 0 -5px #bdc1cc,664px 0 0 -5px #bdc1cc,665px 0 0 -5px #bdc1cc,666px 0 0 -5px #bdc1cc,667px 0 0 -5px #bdc1cc,668px 0 0 -5px #bdc1cc,669px 0 0 -5px #bdc1cc,670px 0 0 -5px #bdc1cc,671px 0 0 -5px #bdc1cc,672px 0 0 -5px #bdc1cc,673px 0 0 -5px #bdc1cc,674px 0 0 -5px #bdc1cc,675px 0 0 -5px #bdc1cc,676px 0 0 -5px #bdc1cc,677px 0 0 -5px #bdc1cc,678px 0 0 -5px #bdc1cc,679px 0 0 -5px #bdc1cc,680px 0 0 -5px #bdc1cc,681px 0 0 -5px #bdc1cc,682px 0 0 -5px #bdc1cc,683px 0 0 -5px #bdc1cc,684px 0 0 -5px #bdc1cc,685px 0 0 -5px #bdc1cc,686px 0 0 -5px #bdc1cc,687px 0 0 -5px #bdc1cc,688px 0 0 -5px #bdc1cc,689px 0 0 -5px #bdc1cc,690px 0 0 -5px #bdc1cc,691px 0 0 -5px #bdc1cc,692px 0 0 -5px #bdc1cc,693px 0 0 -5px #bdc1cc,694px 0 0 -5px #bdc1cc,695px 0 0 -5px #bdc1cc,696px 0 0 -5px #bdc1cc,697px 0 0 -5px #bdc1cc,698px 0 0 -5px #bdc1cc,699px 0 0 -5px #bdc1cc,700px 0 0 -5px #bdc1cc,701px 0 0 -5px #bdc1cc,702px 0 0 -5px #bdc1cc,703px 0 0 -5px #bdc1cc,704px 0 0 -5px #bdc1cc,705px 0 0 -5px #bdc1cc,706px 0 0 -5px #bdc1cc,707px 0 0 -5px #bdc1cc,708px 0 0 -5px #bdc1cc,709px 0 0 -5px #bdc1cc,710px 0 0 -5px #bdc1cc,711px 0 0 -5px #bdc1cc,712px 0 0 -5px #bdc1cc,713px 0 0 -5px #bdc1cc,714px 0 0 -5px #bdc1cc,715px 0 0 -5px #bdc1cc,716px 0 0 -5px #bdc1cc,717px 0 0 -5px #bdc1cc,718px 0 0 -5px #bdc1cc,719px 0 0 -5px #bdc1cc,720px 0 0 -5px #bdc1cc,721px 0 0 -5px #bdc1cc,722px 0 0 -5px #bdc1cc,723px 0 0 -5px #bdc1cc,724px 0 0 -5px #bdc1cc,725px 0 0 -5px #bdc1cc,726px 0 0 -5px #bdc1cc,727px 0 0 -5px #bdc1cc,728px 0 0 -5px #bdc1cc,729px 0 0 -5px #bdc1cc,730px 0 0 -5px #bdc1cc,731px 0 0 -5px #bdc1cc,732px 0 0 -5px #bdc1cc,733px 0 0 -5px #bdc1cc,734px 0 0 -5px #bdc1cc,735px 0 0 -5px #bdc1cc,736px 0 0 -5px #bdc1cc,737px 0 0 -5px #bdc1cc,738px 0 0 -5px #bdc1cc,739px 0 0 -5px #bdc1cc,740px 0 0 -5px #bdc1cc,741px 0 0 -5px #bdc1cc,742px 0 0 -5px #bdc1cc,743px 0 0 -5px #bdc1cc,744px 0 0 -5px #bdc1cc,745px 0 0 -5px #bdc1cc,746px 0 0 -5px #bdc1cc,747px 0 0 -5px #bdc1cc,748px 0 0 -5px #bdc1cc,749px 0 0 -5px #bdc1cc,750px 0 0 -5px #bdc1cc,751px 0 0 -5px #bdc1cc,752px 0 0 -5px #bdc1cc,753px 0 0 -5px #bdc1cc,754px 0 0 -5px #bdc1cc,755px 0 0 -5px #bdc1cc,756px 0 0 -5px #bdc1cc,757px 0 0 -5px #bdc1cc,758px 0 0 -5px #bdc1cc,759px 0 0 -5px #bdc1cc,760px 0 0 -5px #bdc1cc,761px 0 0 -5px #bdc1cc,762px 0 0 -5px #bdc1cc,763px 0 0 -5px #bdc1cc,764px 0 0 -5px #bdc1cc,765px 0 0 -5px #bdc1cc,766px 0 0 -5px #bdc1cc,767px 0 0 -5px #bdc1cc,768px 0 0 -5px #bdc1cc,769px 0 0 -5px #bdc1cc,770px 0 0 -5px #bdc1cc,771px 0 0 -5px #bdc1cc,772px 0 0 -5px #bdc1cc,773px 0 0 -5px #bdc1cc,774px 0 0 -5px #bdc1cc,775px 0 0 -5px #bdc1cc,776px 0 0 -5px #bdc1cc,777px 0 0 -5px #bdc1cc,778px 0 0 -5px #bdc1cc,779px 0 0 -5px #bdc1cc,780px 0 0 -5px #bdc1cc,781px 0 0 -5px #bdc1cc,782px 0 0 -5px #bdc1cc,783px 0 0 -5px #bdc1cc,784px 0 0 -5px #bdc1cc,785px 0 0 -5px #bdc1cc,786px 0 0 -5px #bdc1cc,787px 0 0 -5px #bdc1cc,788px 0 0 -5px #bdc1cc,789px 0 0 -5px #bdc1cc,790px 0 0 -5px #bdc1cc,791px 0 0 -5px #bdc1cc,792px 0 0 -5px #bdc1cc,793px 0 0 -5px #bdc1cc,794px 0 0 -5px #bdc1cc,795px 0 0 -5px #bdc1cc,796px 0 0 -5px #bdc1cc,797px 0 0 -5px #bdc1cc,798px 0 0 -5px #bdc1cc,799px 0 0 -5px #bdc1cc,800px 0 0 -5px #bdc1cc,801px 0 0 -5px #bdc1cc,802px 0 0 -5px #bdc1cc,803px 0 0 -5px #bdc1cc,804px 0 0 -5px #bdc1cc,805px 0 0 -5px #bdc1cc,806px 0 0 -5px #bdc1cc,807px 0 0 -5px #bdc1cc,808px 0 0 -5px #bdc1cc,809px 0 0 -5px #bdc1cc,810px 0 0 -5px #bdc1cc,811px 0 0 -5px #bdc1cc,812px 0 0 -5px #bdc1cc,813px 0 0 -5px #bdc1cc,814px 0 0 -5px #bdc1cc,815px 0 0 -5px #bdc1cc,816px 0 0 -5px #bdc1cc,817px 0 0 -5px #bdc1cc,818px 0 0 -5px #bdc1cc,819px 0 0 -5px #bdc1cc,820px 0 0 -5px #bdc1cc,821px 0 0 -5px #bdc1cc,822px 0 0 -5px #bdc1cc,823px 0 0 -5px #bdc1cc,824px 0 0 -5px #bdc1cc,825px 0 0 -5px #bdc1cc,826px 0 0 -5px #bdc1cc,827px 0 0 -5px #bdc1cc,828px 0 0 -5px #bdc1cc,829px 0 0 -5px #bdc1cc,830px 0 0 -5px #bdc1cc,831px 0 0 -5px #bdc1cc,832px 0 0 -5px #bdc1cc,833px 0 0 -5px #bdc1cc,834px 0 0 -5px #bdc1cc,835px 0 0 -5px #bdc1cc,836px 0 0 -5px #bdc1cc,837px 0 0 -5px #bdc1cc,838px 0 0 -5px #bdc1cc,839px 0 0 -5px #bdc1cc,840px 0 0 -5px #bdc1cc,841px 0 0 -5px #bdc1cc,842px 0 0 -5px #bdc1cc,843px 0 0 -5px #bdc1cc,844px 0 0 -5px #bdc1cc,845px 0 0 -5px #bdc1cc,846px 0 0 -5px #bdc1cc,847px 0 0 -5px #bdc1cc,848px 0 0 -5px #bdc1cc,849px 0 0 -5px #bdc1cc,850px 0 0 -5px #bdc1cc,851px 0 0 -5px #bdc1cc,852px 0 0 -5px #bdc1cc,853px 0 0 -5px #bdc1cc,854px 0 0 -5px #bdc1cc,855px 0 0 -5px #bdc1cc,856px 0 0 -5px #bdc1cc,857px 0 0 -5px #bdc1cc,858px 0 0 -5px #bdc1cc,859px 0 0 -5px #bdc1cc,860px 0 0 -5px #bdc1cc,861px 0 0 -5px #bdc1cc,862px 0 0 -5px #bdc1cc,863px 0 0 -5px #bdc1cc,864px 0 0 -5px #bdc1cc,865px 0 0 -5px #bdc1cc,866px 0 0 -5px #bdc1cc,867px 0 0 -5px #bdc1cc,868px 0 0 -5px #bdc1cc,869px 0 0 -5px #bdc1cc,870px 0 0 -5px #bdc1cc,871px 0 0 -5px #bdc1cc,872px 0 0 -5px #bdc1cc,873px 0 0 -5px #bdc1cc,874px 0 0 -5px #bdc1cc,875px 0 0 -5px #bdc1cc,876px 0 0 -5px #bdc1cc,877px 0 0 -5px #bdc1cc,878px 0 0 -5px #bdc1cc,879px 0 0 -5px #bdc1cc,880px 0 0 -5px #bdc1cc,881px 0 0 -5px #bdc1cc,882px 0 0 -5px #bdc1cc,883px 0 0 -5px #bdc1cc,884px 0 0 -5px #bdc1cc,885px 0 0 -5px #bdc1cc,886px 0 0 -5px #bdc1cc,887px 0 0 -5px #bdc1cc,888px 0 0 -5px #bdc1cc,889px 0 0 -5px #bdc1cc,890px 0 0 -5px #bdc1cc,891px 0 0 -5px #bdc1cc,892px 0 0 -5px #bdc1cc,893px 0 0 -5px #bdc1cc,894px 0 0 -5px #bdc1cc,895px 0 0 -5px #bdc1cc,896px 0 0 -5px #bdc1cc,897px 0 0 -5px #bdc1cc,898px 0 0 -5px #bdc1cc,899px 0 0 -5px #bdc1cc,900px 0 0 -5px #bdc1cc,901px 0 0 -5px #bdc1cc,902px 0 0 -5px #bdc1cc,903px 0 0 -5px #bdc1cc,904px 0 0 -5px #bdc1cc,905px 0 0 -5px #bdc1cc,906px 0 0 -5px #bdc1cc,907px 0 0 -5px #bdc1cc,908px 0 0 -5px #bdc1cc,909px 0 0 -5px #bdc1cc,910px 0 0 -5px #bdc1cc,911px 0 0 -5px #bdc1cc,912px 0 0 -5px #bdc1cc,913px 0 0 -5px #bdc1cc,914px 0 0 -5px #bdc1cc,915px 0 0 -5px #bdc1cc,916px 0 0 -5px #bdc1cc,917px 0 0 -5px #bdc1cc,918px 0 0 -5px #bdc1cc,919px 0 0 -5px #bdc1cc,920px 0 0 -5px #bdc1cc,921px 0 0 -5px #bdc1cc,922px 0 0 -5px #bdc1cc,923px 0 0 -5px #bdc1cc,924px 0 0 -5px #bdc1cc,925px 0 0 -5px #bdc1cc,926px 0 0 -5px #bdc1cc,927px 0 0 -5px #bdc1cc,928px 0 0 -5px #bdc1cc,929px 0 0 -5px #bdc1cc,930px 0 0 -5px #bdc1cc,931px 0 0 -5px #bdc1cc,932px 0 0 -5px #bdc1cc,933px 0 0 -5px #bdc1cc,934px 0 0 -5px #bdc1cc,935px 0 0 -5px #bdc1cc,936px 0 0 -5px #bdc1cc,937px 0 0 -5px #bdc1cc,938px 0 0 -5px #bdc1cc,939px 0 0 -5px #bdc1cc,940px 0 0 -5px #bdc1cc,941px 0 0 -5px #bdc1cc,942px 0 0 -5px #bdc1cc,943px 0 0 -5px #bdc1cc,944px 0 0 -5px #bdc1cc,945px 0 0 -5px #bdc1cc,946px 0 0 -5px #bdc1cc,947px 0 0 -5px #bdc1cc,948px 0 0 -5px #bdc1cc,949px 0 0 -5px #bdc1cc,950px 0 0 -5px #bdc1cc,951px 0 0 -5px #bdc1cc,952px 0 0 -5px #bdc1cc,953px 0 0 -5px #bdc1cc,954px 0 0 -5px #bdc1cc,955px 0 0 -5px #bdc1cc,956px 0 0 -5px #bdc1cc,957px 0 0 -5px #bdc1cc,958px 0 0 -5px #bdc1cc,959px 0 0 -5px #bdc1cc,960px 0 0 -5px #bdc1cc,961px 0 0 -5px #bdc1cc,962px 0 0 -5px #bdc1cc,963px 0 0 -5px #bdc1cc,964px 0 0 -5px #bdc1cc,965px 0 0 -5px #bdc1cc,966px 0 0 -5px #bdc1cc,967px 0 0 -5px #bdc1cc,968px 0 0 -5px #bdc1cc,969px 0 0 -5px #bdc1cc,970px 0 0 -5px #bdc1cc,971px 0 0 -5px #bdc1cc,972px 0 0 -5px #bdc1cc,973px 0 0 -5px #bdc1cc,974px 0 0 -5px #bdc1cc,975px 0 0 -5px #bdc1cc,976px 0 0 -5px #bdc1cc,977px 0 0 -5px #bdc1cc,978px 0 0 -5px #bdc1cc,979px 0 0 -5px #bdc1cc,980px 0 0 -5px #bdc1cc,981px 0 0 -5px #bdc1cc,982px 0 0 -5px #bdc1cc,983px 0 0 -5px #bdc1cc,984px 0 0 -5px #bdc1cc,985px 0 0 -5px #bdc1cc,986px 0 0 -5px #bdc1cc,987px 0 0 -5px #bdc1cc,988px 0 0 -5px #bdc1cc,989px 0 0 -5px #bdc1cc,990px 0 0 -5px #bdc1cc,991px 0 0 -5px #bdc1cc,992px 0 0 -5px #bdc1cc,993px 0 0 -5px #bdc1cc,994px 0 0 -5px #bdc1cc,995px 0 0 -5px #bdc1cc,996px 0 0 -5px #bdc1cc,997px 0 0 -5px #bdc1cc,998px 0 0 -5px #bdc1cc,999px 0 0 -5px #bdc1cc,1000px 0 0 -5px #bdc1cc}.range-disabled[_ngcontent-%COMP%]::-webkit-slider-thumb{position:relative;-webkit-appearance:none;appearance:none;height:13px;width:13px;background:#93A1AB;border-radius:50%;top:50%;margin-top:-6.5px;box-shadow:1px 0 0 -5px #bdc1cc,2px 0 0 -5px #bdc1cc,3px 0 0 -5px #bdc1cc,4px 0 0 -5px #bdc1cc,5px 0 0 -5px #bdc1cc,6px 0 0 -5px #bdc1cc,7px 0 0 -5px #bdc1cc,8px 0 0 -5px #bdc1cc,9px 0 0 -5px #bdc1cc,10px 0 0 -5px #bdc1cc,11px 0 0 -5px #bdc1cc,12px 0 0 -5px #bdc1cc,13px 0 0 -5px #bdc1cc,14px 0 0 -5px #bdc1cc,15px 0 0 -5px #bdc1cc,16px 0 0 -5px #bdc1cc,17px 0 0 -5px #bdc1cc,18px 0 0 -5px #bdc1cc,19px 0 0 -5px #bdc1cc,20px 0 0 -5px #bdc1cc,21px 0 0 -5px #bdc1cc,22px 0 0 -5px #bdc1cc,23px 0 0 -5px #bdc1cc,24px 0 0 -5px #bdc1cc,25px 0 0 -5px #bdc1cc,26px 0 0 -5px #bdc1cc,27px 0 0 -5px #bdc1cc,28px 0 0 -5px #bdc1cc,29px 0 0 -5px #bdc1cc,30px 0 0 -5px #bdc1cc,31px 0 0 -5px #bdc1cc,32px 0 0 -5px #bdc1cc,33px 0 0 -5px #bdc1cc,34px 0 0 -5px #bdc1cc,35px 0 0 -5px #bdc1cc,36px 0 0 -5px #bdc1cc,37px 0 0 -5px #bdc1cc,38px 0 0 -5px #bdc1cc,39px 0 0 -5px #bdc1cc,40px 0 0 -5px #bdc1cc,41px 0 0 -5px #bdc1cc,42px 0 0 -5px #bdc1cc,43px 0 0 -5px #bdc1cc,44px 0 0 -5px #bdc1cc,45px 0 0 -5px #bdc1cc,46px 0 0 -5px #bdc1cc,47px 0 0 -5px #bdc1cc,48px 0 0 -5px #bdc1cc,49px 0 0 -5px #bdc1cc,50px 0 0 -5px #bdc1cc,51px 0 0 -5px #bdc1cc,52px 0 0 -5px #bdc1cc,53px 0 0 -5px #bdc1cc,54px 0 0 -5px #bdc1cc,55px 0 0 -5px #bdc1cc,56px 0 0 -5px #bdc1cc,57px 0 0 -5px #bdc1cc,58px 0 0 -5px #bdc1cc,59px 0 0 -5px #bdc1cc,60px 0 0 -5px #bdc1cc,61px 0 0 -5px #bdc1cc,62px 0 0 -5px #bdc1cc,63px 0 0 -5px #bdc1cc,64px 0 0 -5px #bdc1cc,65px 0 0 -5px #bdc1cc,66px 0 0 -5px #bdc1cc,67px 0 0 -5px #bdc1cc,68px 0 0 -5px #bdc1cc,69px 0 0 -5px #bdc1cc,70px 0 0 -5px #bdc1cc,71px 0 0 -5px #bdc1cc,72px 0 0 -5px #bdc1cc,73px 0 0 -5px #bdc1cc,74px 0 0 -5px #bdc1cc,75px 0 0 -5px #bdc1cc,76px 0 0 -5px #bdc1cc,77px 0 0 -5px #bdc1cc,78px 0 0 -5px #bdc1cc,79px 0 0 -5px #bdc1cc,80px 0 0 -5px #bdc1cc,81px 0 0 -5px #bdc1cc,82px 0 0 -5px #bdc1cc,83px 0 0 -5px #bdc1cc,84px 0 0 -5px #bdc1cc,85px 0 0 -5px #bdc1cc,86px 0 0 -5px #bdc1cc,87px 0 0 -5px #bdc1cc,88px 0 0 -5px #bdc1cc,89px 0 0 -5px #bdc1cc,90px 0 0 -5px #bdc1cc,91px 0 0 -5px #bdc1cc,92px 0 0 -5px #bdc1cc,93px 0 0 -5px #bdc1cc,94px 0 0 -5px #bdc1cc,95px 0 0 -5px #bdc1cc,96px 0 0 -5px #bdc1cc,97px 0 0 -5px #bdc1cc,98px 0 0 -5px #bdc1cc,99px 0 0 -5px #bdc1cc,100px 0 0 -5px #bdc1cc,101px 0 0 -5px #bdc1cc,102px 0 0 -5px #bdc1cc,103px 0 0 -5px #bdc1cc,104px 0 0 -5px #bdc1cc,105px 0 0 -5px #bdc1cc,106px 0 0 -5px #bdc1cc,107px 0 0 -5px #bdc1cc,108px 0 0 -5px #bdc1cc,109px 0 0 -5px #bdc1cc,110px 0 0 -5px #bdc1cc,111px 0 0 -5px #bdc1cc,112px 0 0 -5px #bdc1cc,113px 0 0 -5px #bdc1cc,114px 0 0 -5px #bdc1cc,115px 0 0 -5px #bdc1cc,116px 0 0 -5px #bdc1cc,117px 0 0 -5px #bdc1cc,118px 0 0 -5px #bdc1cc,119px 0 0 -5px #bdc1cc,120px 0 0 -5px #bdc1cc,121px 0 0 -5px #bdc1cc,122px 0 0 -5px #bdc1cc,123px 0 0 -5px #bdc1cc,124px 0 0 -5px #bdc1cc,125px 0 0 -5px #bdc1cc,126px 0 0 -5px #bdc1cc,127px 0 0 -5px #bdc1cc,128px 0 0 -5px #bdc1cc,129px 0 0 -5px #bdc1cc,130px 0 0 -5px #bdc1cc,131px 0 0 -5px #bdc1cc,132px 0 0 -5px #bdc1cc,133px 0 0 -5px #bdc1cc,134px 0 0 -5px #bdc1cc,135px 0 0 -5px #bdc1cc,136px 0 0 -5px #bdc1cc,137px 0 0 -5px #bdc1cc,138px 0 0 -5px #bdc1cc,139px 0 0 -5px #bdc1cc,140px 0 0 -5px #bdc1cc,141px 0 0 -5px #bdc1cc,142px 0 0 -5px #bdc1cc,143px 0 0 -5px #bdc1cc,144px 0 0 -5px #bdc1cc,145px 0 0 -5px #bdc1cc,146px 0 0 -5px #bdc1cc,147px 0 0 -5px #bdc1cc,148px 0 0 -5px #bdc1cc,149px 0 0 -5px #bdc1cc,150px 0 0 -5px #bdc1cc,151px 0 0 -5px #bdc1cc,152px 0 0 -5px #bdc1cc,153px 0 0 -5px #bdc1cc,154px 0 0 -5px #bdc1cc,155px 0 0 -5px #bdc1cc,156px 0 0 -5px #bdc1cc,157px 0 0 -5px #bdc1cc,158px 0 0 -5px #bdc1cc,159px 0 0 -5px #bdc1cc,160px 0 0 -5px #bdc1cc,161px 0 0 -5px #bdc1cc,162px 0 0 -5px #bdc1cc,163px 0 0 -5px #bdc1cc,164px 0 0 -5px #bdc1cc,165px 0 0 -5px #bdc1cc,166px 0 0 -5px #bdc1cc,167px 0 0 -5px #bdc1cc,168px 0 0 -5px #bdc1cc,169px 0 0 -5px #bdc1cc,170px 0 0 -5px #bdc1cc,171px 0 0 -5px #bdc1cc,172px 0 0 -5px #bdc1cc,173px 0 0 -5px #bdc1cc,174px 0 0 -5px #bdc1cc,175px 0 0 -5px #bdc1cc,176px 0 0 -5px #bdc1cc,177px 0 0 -5px #bdc1cc,178px 0 0 -5px #bdc1cc,179px 0 0 -5px #bdc1cc,180px 0 0 -5px #bdc1cc,181px 0 0 -5px #bdc1cc,182px 0 0 -5px #bdc1cc,183px 0 0 -5px #bdc1cc,184px 0 0 -5px #bdc1cc,185px 0 0 -5px #bdc1cc,186px 0 0 -5px #bdc1cc,187px 0 0 -5px #bdc1cc,188px 0 0 -5px #bdc1cc,189px 0 0 -5px #bdc1cc,190px 0 0 -5px #bdc1cc,191px 0 0 -5px #bdc1cc,192px 0 0 -5px #bdc1cc,193px 0 0 -5px #bdc1cc,194px 0 0 -5px #bdc1cc,195px 0 0 -5px #bdc1cc,196px 0 0 -5px #bdc1cc,197px 0 0 -5px #bdc1cc,198px 0 0 -5px #bdc1cc,199px 0 0 -5px #bdc1cc,200px 0 0 -5px #bdc1cc,201px 0 0 -5px #bdc1cc,202px 0 0 -5px #bdc1cc,203px 0 0 -5px #bdc1cc,204px 0 0 -5px #bdc1cc,205px 0 0 -5px #bdc1cc,206px 0 0 -5px #bdc1cc,207px 0 0 -5px #bdc1cc,208px 0 0 -5px #bdc1cc,209px 0 0 -5px #bdc1cc,210px 0 0 -5px #bdc1cc,211px 0 0 -5px #bdc1cc,212px 0 0 -5px #bdc1cc,213px 0 0 -5px #bdc1cc,214px 0 0 -5px #bdc1cc,215px 0 0 -5px #bdc1cc,216px 0 0 -5px #bdc1cc,217px 0 0 -5px #bdc1cc,218px 0 0 -5px #bdc1cc,219px 0 0 -5px #bdc1cc,220px 0 0 -5px #bdc1cc,221px 0 0 -5px #bdc1cc,222px 0 0 -5px #bdc1cc,223px 0 0 -5px #bdc1cc,224px 0 0 -5px #bdc1cc,225px 0 0 -5px #bdc1cc,226px 0 0 -5px #bdc1cc,227px 0 0 -5px #bdc1cc,228px 0 0 -5px #bdc1cc,229px 0 0 -5px #bdc1cc,230px 0 0 -5px #bdc1cc,231px 0 0 -5px #bdc1cc,232px 0 0 -5px #bdc1cc,233px 0 0 -5px #bdc1cc,234px 0 0 -5px #bdc1cc,235px 0 0 -5px #bdc1cc,236px 0 0 -5px #bdc1cc,237px 0 0 -5px #bdc1cc,238px 0 0 -5px #bdc1cc,239px 0 0 -5px #bdc1cc,240px 0 0 -5px #bdc1cc,241px 0 0 -5px #bdc1cc,242px 0 0 -5px #bdc1cc,243px 0 0 -5px #bdc1cc,244px 0 0 -5px #bdc1cc,245px 0 0 -5px #bdc1cc,246px 0 0 -5px #bdc1cc,247px 0 0 -5px #bdc1cc,248px 0 0 -5px #bdc1cc,249px 0 0 -5px #bdc1cc,250px 0 0 -5px #bdc1cc,251px 0 0 -5px #bdc1cc,252px 0 0 -5px #bdc1cc,253px 0 0 -5px #bdc1cc,254px 0 0 -5px #bdc1cc,255px 0 0 -5px #bdc1cc,256px 0 0 -5px #bdc1cc,257px 0 0 -5px #bdc1cc,258px 0 0 -5px #bdc1cc,259px 0 0 -5px #bdc1cc,260px 0 0 -5px #bdc1cc,261px 0 0 -5px #bdc1cc,262px 0 0 -5px #bdc1cc,263px 0 0 -5px #bdc1cc,264px 0 0 -5px #bdc1cc,265px 0 0 -5px #bdc1cc,266px 0 0 -5px #bdc1cc,267px 0 0 -5px #bdc1cc,268px 0 0 -5px #bdc1cc,269px 0 0 -5px #bdc1cc,270px 0 0 -5px #bdc1cc,271px 0 0 -5px #bdc1cc,272px 0 0 -5px #bdc1cc,273px 0 0 -5px #bdc1cc,274px 0 0 -5px #bdc1cc,275px 0 0 -5px #bdc1cc,276px 0 0 -5px #bdc1cc,277px 0 0 -5px #bdc1cc,278px 0 0 -5px #bdc1cc,279px 0 0 -5px #bdc1cc,280px 0 0 -5px #bdc1cc,281px 0 0 -5px #bdc1cc,282px 0 0 -5px #bdc1cc,283px 0 0 -5px #bdc1cc,284px 0 0 -5px #bdc1cc,285px 0 0 -5px #bdc1cc,286px 0 0 -5px #bdc1cc,287px 0 0 -5px #bdc1cc,288px 0 0 -5px #bdc1cc,289px 0 0 -5px #bdc1cc,290px 0 0 -5px #bdc1cc,291px 0 0 -5px #bdc1cc,292px 0 0 -5px #bdc1cc,293px 0 0 -5px #bdc1cc,294px 0 0 -5px #bdc1cc,295px 0 0 -5px #bdc1cc,296px 0 0 -5px #bdc1cc,297px 0 0 -5px #bdc1cc,298px 0 0 -5px #bdc1cc,299px 0 0 -5px #bdc1cc,300px 0 0 -5px #bdc1cc,301px 0 0 -5px #bdc1cc,302px 0 0 -5px #bdc1cc,303px 0 0 -5px #bdc1cc,304px 0 0 -5px #bdc1cc,305px 0 0 -5px #bdc1cc,306px 0 0 -5px #bdc1cc,307px 0 0 -5px #bdc1cc,308px 0 0 -5px #bdc1cc,309px 0 0 -5px #bdc1cc,310px 0 0 -5px #bdc1cc,311px 0 0 -5px #bdc1cc,312px 0 0 -5px #bdc1cc,313px 0 0 -5px #bdc1cc,314px 0 0 -5px #bdc1cc,315px 0 0 -5px #bdc1cc,316px 0 0 -5px #bdc1cc,317px 0 0 -5px #bdc1cc,318px 0 0 -5px #bdc1cc,319px 0 0 -5px #bdc1cc,320px 0 0 -5px #bdc1cc,321px 0 0 -5px #bdc1cc,322px 0 0 -5px #bdc1cc,323px 0 0 -5px #bdc1cc,324px 0 0 -5px #bdc1cc,325px 0 0 -5px #bdc1cc,326px 0 0 -5px #bdc1cc,327px 0 0 -5px #bdc1cc,328px 0 0 -5px #bdc1cc,329px 0 0 -5px #bdc1cc,330px 0 0 -5px #bdc1cc,331px 0 0 -5px #bdc1cc,332px 0 0 -5px #bdc1cc,333px 0 0 -5px #bdc1cc,334px 0 0 -5px #bdc1cc,335px 0 0 -5px #bdc1cc,336px 0 0 -5px #bdc1cc,337px 0 0 -5px #bdc1cc,338px 0 0 -5px #bdc1cc,339px 0 0 -5px #bdc1cc,340px 0 0 -5px #bdc1cc,341px 0 0 -5px #bdc1cc,342px 0 0 -5px #bdc1cc,343px 0 0 -5px #bdc1cc,344px 0 0 -5px #bdc1cc,345px 0 0 -5px #bdc1cc,346px 0 0 -5px #bdc1cc,347px 0 0 -5px #bdc1cc,348px 0 0 -5px #bdc1cc,349px 0 0 -5px #bdc1cc,350px 0 0 -5px #bdc1cc,351px 0 0 -5px #bdc1cc,352px 0 0 -5px #bdc1cc,353px 0 0 -5px #bdc1cc,354px 0 0 -5px #bdc1cc,355px 0 0 -5px #bdc1cc,356px 0 0 -5px #bdc1cc,357px 0 0 -5px #bdc1cc,358px 0 0 -5px #bdc1cc,359px 0 0 -5px #bdc1cc,360px 0 0 -5px #bdc1cc,361px 0 0 -5px #bdc1cc,362px 0 0 -5px #bdc1cc,363px 0 0 -5px #bdc1cc,364px 0 0 -5px #bdc1cc,365px 0 0 -5px #bdc1cc,366px 0 0 -5px #bdc1cc,367px 0 0 -5px #bdc1cc,368px 0 0 -5px #bdc1cc,369px 0 0 -5px #bdc1cc,370px 0 0 -5px #bdc1cc,371px 0 0 -5px #bdc1cc,372px 0 0 -5px #bdc1cc,373px 0 0 -5px #bdc1cc,374px 0 0 -5px #bdc1cc,375px 0 0 -5px #bdc1cc,376px 0 0 -5px #bdc1cc,377px 0 0 -5px #bdc1cc,378px 0 0 -5px #bdc1cc,379px 0 0 -5px #bdc1cc,380px 0 0 -5px #bdc1cc,381px 0 0 -5px #bdc1cc,382px 0 0 -5px #bdc1cc,383px 0 0 -5px #bdc1cc,384px 0 0 -5px #bdc1cc,385px 0 0 -5px #bdc1cc,386px 0 0 -5px #bdc1cc,387px 0 0 -5px #bdc1cc,388px 0 0 -5px #bdc1cc,389px 0 0 -5px #bdc1cc,390px 0 0 -5px #bdc1cc,391px 0 0 -5px #bdc1cc,392px 0 0 -5px #bdc1cc,393px 0 0 -5px #bdc1cc,394px 0 0 -5px #bdc1cc,395px 0 0 -5px #bdc1cc,396px 0 0 -5px #bdc1cc,397px 0 0 -5px #bdc1cc,398px 0 0 -5px #bdc1cc,399px 0 0 -5px #bdc1cc,400px 0 0 -5px #bdc1cc,401px 0 0 -5px #bdc1cc,402px 0 0 -5px #bdc1cc,403px 0 0 -5px #bdc1cc,404px 0 0 -5px #bdc1cc,405px 0 0 -5px #bdc1cc,406px 0 0 -5px #bdc1cc,407px 0 0 -5px #bdc1cc,408px 0 0 -5px #bdc1cc,409px 0 0 -5px #bdc1cc,410px 0 0 -5px #bdc1cc,411px 0 0 -5px #bdc1cc,412px 0 0 -5px #bdc1cc,413px 0 0 -5px #bdc1cc,414px 0 0 -5px #bdc1cc,415px 0 0 -5px #bdc1cc,416px 0 0 -5px #bdc1cc,417px 0 0 -5px #bdc1cc,418px 0 0 -5px #bdc1cc,419px 0 0 -5px #bdc1cc,420px 0 0 -5px #bdc1cc,421px 0 0 -5px #bdc1cc,422px 0 0 -5px #bdc1cc,423px 0 0 -5px #bdc1cc,424px 0 0 -5px #bdc1cc,425px 0 0 -5px #bdc1cc,426px 0 0 -5px #bdc1cc,427px 0 0 -5px #bdc1cc,428px 0 0 -5px #bdc1cc,429px 0 0 -5px #bdc1cc,430px 0 0 -5px #bdc1cc,431px 0 0 -5px #bdc1cc,432px 0 0 -5px #bdc1cc,433px 0 0 -5px #bdc1cc,434px 0 0 -5px #bdc1cc,435px 0 0 -5px #bdc1cc,436px 0 0 -5px #bdc1cc,437px 0 0 -5px #bdc1cc,438px 0 0 -5px #bdc1cc,439px 0 0 -5px #bdc1cc,440px 0 0 -5px #bdc1cc,441px 0 0 -5px #bdc1cc,442px 0 0 -5px #bdc1cc,443px 0 0 -5px #bdc1cc,444px 0 0 -5px #bdc1cc,445px 0 0 -5px #bdc1cc,446px 0 0 -5px #bdc1cc,447px 0 0 -5px #bdc1cc,448px 0 0 -5px #bdc1cc,449px 0 0 -5px #bdc1cc,450px 0 0 -5px #bdc1cc,451px 0 0 -5px #bdc1cc,452px 0 0 -5px #bdc1cc,453px 0 0 -5px #bdc1cc,454px 0 0 -5px #bdc1cc,455px 0 0 -5px #bdc1cc,456px 0 0 -5px #bdc1cc,457px 0 0 -5px #bdc1cc,458px 0 0 -5px #bdc1cc,459px 0 0 -5px #bdc1cc,460px 0 0 -5px #bdc1cc,461px 0 0 -5px #bdc1cc,462px 0 0 -5px #bdc1cc,463px 0 0 -5px #bdc1cc,464px 0 0 -5px #bdc1cc,465px 0 0 -5px #bdc1cc,466px 0 0 -5px #bdc1cc,467px 0 0 -5px #bdc1cc,468px 0 0 -5px #bdc1cc,469px 0 0 -5px #bdc1cc,470px 0 0 -5px #bdc1cc,471px 0 0 -5px #bdc1cc,472px 0 0 -5px #bdc1cc,473px 0 0 -5px #bdc1cc,474px 0 0 -5px #bdc1cc,475px 0 0 -5px #bdc1cc,476px 0 0 -5px #bdc1cc,477px 0 0 -5px #bdc1cc,478px 0 0 -5px #bdc1cc,479px 0 0 -5px #bdc1cc,480px 0 0 -5px #bdc1cc,481px 0 0 -5px #bdc1cc,482px 0 0 -5px #bdc1cc,483px 0 0 -5px #bdc1cc,484px 0 0 -5px #bdc1cc,485px 0 0 -5px #bdc1cc,486px 0 0 -5px #bdc1cc,487px 0 0 -5px #bdc1cc,488px 0 0 -5px #bdc1cc,489px 0 0 -5px #bdc1cc,490px 0 0 -5px #bdc1cc,491px 0 0 -5px #bdc1cc,492px 0 0 -5px #bdc1cc,493px 0 0 -5px #bdc1cc,494px 0 0 -5px #bdc1cc,495px 0 0 -5px #bdc1cc,496px 0 0 -5px #bdc1cc,497px 0 0 -5px #bdc1cc,498px 0 0 -5px #bdc1cc,499px 0 0 -5px #bdc1cc,500px 0 0 -5px #bdc1cc,501px 0 0 -5px #bdc1cc,502px 0 0 -5px #bdc1cc,503px 0 0 -5px #bdc1cc,504px 0 0 -5px #bdc1cc,505px 0 0 -5px #bdc1cc,506px 0 0 -5px #bdc1cc,507px 0 0 -5px #bdc1cc,508px 0 0 -5px #bdc1cc,509px 0 0 -5px #bdc1cc,510px 0 0 -5px #bdc1cc,511px 0 0 -5px #bdc1cc,512px 0 0 -5px #bdc1cc,513px 0 0 -5px #bdc1cc,514px 0 0 -5px #bdc1cc,515px 0 0 -5px #bdc1cc,516px 0 0 -5px #bdc1cc,517px 0 0 -5px #bdc1cc,518px 0 0 -5px #bdc1cc,519px 0 0 -5px #bdc1cc,520px 0 0 -5px #bdc1cc,521px 0 0 -5px #bdc1cc,522px 0 0 -5px #bdc1cc,523px 0 0 -5px #bdc1cc,524px 0 0 -5px #bdc1cc,525px 0 0 -5px #bdc1cc,526px 0 0 -5px #bdc1cc,527px 0 0 -5px #bdc1cc,528px 0 0 -5px #bdc1cc,529px 0 0 -5px #bdc1cc,530px 0 0 -5px #bdc1cc,531px 0 0 -5px #bdc1cc,532px 0 0 -5px #bdc1cc,533px 0 0 -5px #bdc1cc,534px 0 0 -5px #bdc1cc,535px 0 0 -5px #bdc1cc,536px 0 0 -5px #bdc1cc,537px 0 0 -5px #bdc1cc,538px 0 0 -5px #bdc1cc,539px 0 0 -5px #bdc1cc,540px 0 0 -5px #bdc1cc,541px 0 0 -5px #bdc1cc,542px 0 0 -5px #bdc1cc,543px 0 0 -5px #bdc1cc,544px 0 0 -5px #bdc1cc,545px 0 0 -5px #bdc1cc,546px 0 0 -5px #bdc1cc,547px 0 0 -5px #bdc1cc,548px 0 0 -5px #bdc1cc,549px 0 0 -5px #bdc1cc,550px 0 0 -5px #bdc1cc,551px 0 0 -5px #bdc1cc,552px 0 0 -5px #bdc1cc,553px 0 0 -5px #bdc1cc,554px 0 0 -5px #bdc1cc,555px 0 0 -5px #bdc1cc,556px 0 0 -5px #bdc1cc,557px 0 0 -5px #bdc1cc,558px 0 0 -5px #bdc1cc,559px 0 0 -5px #bdc1cc,560px 0 0 -5px #bdc1cc,561px 0 0 -5px #bdc1cc,562px 0 0 -5px #bdc1cc,563px 0 0 -5px #bdc1cc,564px 0 0 -5px #bdc1cc,565px 0 0 -5px #bdc1cc,566px 0 0 -5px #bdc1cc,567px 0 0 -5px #bdc1cc,568px 0 0 -5px #bdc1cc,569px 0 0 -5px #bdc1cc,570px 0 0 -5px #bdc1cc,571px 0 0 -5px #bdc1cc,572px 0 0 -5px #bdc1cc,573px 0 0 -5px #bdc1cc,574px 0 0 -5px #bdc1cc,575px 0 0 -5px #bdc1cc,576px 0 0 -5px #bdc1cc,577px 0 0 -5px #bdc1cc,578px 0 0 -5px #bdc1cc,579px 0 0 -5px #bdc1cc,580px 0 0 -5px #bdc1cc,581px 0 0 -5px #bdc1cc,582px 0 0 -5px #bdc1cc,583px 0 0 -5px #bdc1cc,584px 0 0 -5px #bdc1cc,585px 0 0 -5px #bdc1cc,586px 0 0 -5px #bdc1cc,587px 0 0 -5px #bdc1cc,588px 0 0 -5px #bdc1cc,589px 0 0 -5px #bdc1cc,590px 0 0 -5px #bdc1cc,591px 0 0 -5px #bdc1cc,592px 0 0 -5px #bdc1cc,593px 0 0 -5px #bdc1cc,594px 0 0 -5px #bdc1cc,595px 0 0 -5px #bdc1cc,596px 0 0 -5px #bdc1cc,597px 0 0 -5px #bdc1cc,598px 0 0 -5px #bdc1cc,599px 0 0 -5px #bdc1cc,600px 0 0 -5px #bdc1cc,601px 0 0 -5px #bdc1cc,602px 0 0 -5px #bdc1cc,603px 0 0 -5px #bdc1cc,604px 0 0 -5px #bdc1cc,605px 0 0 -5px #bdc1cc,606px 0 0 -5px #bdc1cc,607px 0 0 -5px #bdc1cc,608px 0 0 -5px #bdc1cc,609px 0 0 -5px #bdc1cc,610px 0 0 -5px #bdc1cc,611px 0 0 -5px #bdc1cc,612px 0 0 -5px #bdc1cc,613px 0 0 -5px #bdc1cc,614px 0 0 -5px #bdc1cc,615px 0 0 -5px #bdc1cc,616px 0 0 -5px #bdc1cc,617px 0 0 -5px #bdc1cc,618px 0 0 -5px #bdc1cc,619px 0 0 -5px #bdc1cc,620px 0 0 -5px #bdc1cc,621px 0 0 -5px #bdc1cc,622px 0 0 -5px #bdc1cc,623px 0 0 -5px #bdc1cc,624px 0 0 -5px #bdc1cc,625px 0 0 -5px #bdc1cc,626px 0 0 -5px #bdc1cc,627px 0 0 -5px #bdc1cc,628px 0 0 -5px #bdc1cc,629px 0 0 -5px #bdc1cc,630px 0 0 -5px #bdc1cc,631px 0 0 -5px #bdc1cc,632px 0 0 -5px #bdc1cc,633px 0 0 -5px #bdc1cc,634px 0 0 -5px #bdc1cc,635px 0 0 -5px #bdc1cc,636px 0 0 -5px #bdc1cc,637px 0 0 -5px #bdc1cc,638px 0 0 -5px #bdc1cc,639px 0 0 -5px #bdc1cc,640px 0 0 -5px #bdc1cc,641px 0 0 -5px #bdc1cc,642px 0 0 -5px #bdc1cc,643px 0 0 -5px #bdc1cc,644px 0 0 -5px #bdc1cc,645px 0 0 -5px #bdc1cc,646px 0 0 -5px #bdc1cc,647px 0 0 -5px #bdc1cc,648px 0 0 -5px #bdc1cc,649px 0 0 -5px #bdc1cc,650px 0 0 -5px #bdc1cc,651px 0 0 -5px #bdc1cc,652px 0 0 -5px #bdc1cc,653px 0 0 -5px #bdc1cc,654px 0 0 -5px #bdc1cc,655px 0 0 -5px #bdc1cc,656px 0 0 -5px #bdc1cc,657px 0 0 -5px #bdc1cc,658px 0 0 -5px #bdc1cc,659px 0 0 -5px #bdc1cc,660px 0 0 -5px #bdc1cc,661px 0 0 -5px #bdc1cc,662px 0 0 -5px #bdc1cc,663px 0 0 -5px #bdc1cc,664px 0 0 -5px #bdc1cc,665px 0 0 -5px #bdc1cc,666px 0 0 -5px #bdc1cc,667px 0 0 -5px #bdc1cc,668px 0 0 -5px #bdc1cc,669px 0 0 -5px #bdc1cc,670px 0 0 -5px #bdc1cc,671px 0 0 -5px #bdc1cc,672px 0 0 -5px #bdc1cc,673px 0 0 -5px #bdc1cc,674px 0 0 -5px #bdc1cc,675px 0 0 -5px #bdc1cc,676px 0 0 -5px #bdc1cc,677px 0 0 -5px #bdc1cc,678px 0 0 -5px #bdc1cc,679px 0 0 -5px #bdc1cc,680px 0 0 -5px #bdc1cc,681px 0 0 -5px #bdc1cc,682px 0 0 -5px #bdc1cc,683px 0 0 -5px #bdc1cc,684px 0 0 -5px #bdc1cc,685px 0 0 -5px #bdc1cc,686px 0 0 -5px #bdc1cc,687px 0 0 -5px #bdc1cc,688px 0 0 -5px #bdc1cc,689px 0 0 -5px #bdc1cc,690px 0 0 -5px #bdc1cc,691px 0 0 -5px #bdc1cc,692px 0 0 -5px #bdc1cc,693px 0 0 -5px #bdc1cc,694px 0 0 -5px #bdc1cc,695px 0 0 -5px #bdc1cc,696px 0 0 -5px #bdc1cc,697px 0 0 -5px #bdc1cc,698px 0 0 -5px #bdc1cc,699px 0 0 -5px #bdc1cc,700px 0 0 -5px #bdc1cc,701px 0 0 -5px #bdc1cc,702px 0 0 -5px #bdc1cc,703px 0 0 -5px #bdc1cc,704px 0 0 -5px #bdc1cc,705px 0 0 -5px #bdc1cc,706px 0 0 -5px #bdc1cc,707px 0 0 -5px #bdc1cc,708px 0 0 -5px #bdc1cc,709px 0 0 -5px #bdc1cc,710px 0 0 -5px #bdc1cc,711px 0 0 -5px #bdc1cc,712px 0 0 -5px #bdc1cc,713px 0 0 -5px #bdc1cc,714px 0 0 -5px #bdc1cc,715px 0 0 -5px #bdc1cc,716px 0 0 -5px #bdc1cc,717px 0 0 -5px #bdc1cc,718px 0 0 -5px #bdc1cc,719px 0 0 -5px #bdc1cc,720px 0 0 -5px #bdc1cc,721px 0 0 -5px #bdc1cc,722px 0 0 -5px #bdc1cc,723px 0 0 -5px #bdc1cc,724px 0 0 -5px #bdc1cc,725px 0 0 -5px #bdc1cc,726px 0 0 -5px #bdc1cc,727px 0 0 -5px #bdc1cc,728px 0 0 -5px #bdc1cc,729px 0 0 -5px #bdc1cc,730px 0 0 -5px #bdc1cc,731px 0 0 -5px #bdc1cc,732px 0 0 -5px #bdc1cc,733px 0 0 -5px #bdc1cc,734px 0 0 -5px #bdc1cc,735px 0 0 -5px #bdc1cc,736px 0 0 -5px #bdc1cc,737px 0 0 -5px #bdc1cc,738px 0 0 -5px #bdc1cc,739px 0 0 -5px #bdc1cc,740px 0 0 -5px #bdc1cc,741px 0 0 -5px #bdc1cc,742px 0 0 -5px #bdc1cc,743px 0 0 -5px #bdc1cc,744px 0 0 -5px #bdc1cc,745px 0 0 -5px #bdc1cc,746px 0 0 -5px #bdc1cc,747px 0 0 -5px #bdc1cc,748px 0 0 -5px #bdc1cc,749px 0 0 -5px #bdc1cc,750px 0 0 -5px #bdc1cc,751px 0 0 -5px #bdc1cc,752px 0 0 -5px #bdc1cc,753px 0 0 -5px #bdc1cc,754px 0 0 -5px #bdc1cc,755px 0 0 -5px #bdc1cc,756px 0 0 -5px #bdc1cc,757px 0 0 -5px #bdc1cc,758px 0 0 -5px #bdc1cc,759px 0 0 -5px #bdc1cc,760px 0 0 -5px #bdc1cc,761px 0 0 -5px #bdc1cc,762px 0 0 -5px #bdc1cc,763px 0 0 -5px #bdc1cc,764px 0 0 -5px #bdc1cc,765px 0 0 -5px #bdc1cc,766px 0 0 -5px #bdc1cc,767px 0 0 -5px #bdc1cc,768px 0 0 -5px #bdc1cc,769px 0 0 -5px #bdc1cc,770px 0 0 -5px #bdc1cc,771px 0 0 -5px #bdc1cc,772px 0 0 -5px #bdc1cc,773px 0 0 -5px #bdc1cc,774px 0 0 -5px #bdc1cc,775px 0 0 -5px #bdc1cc,776px 0 0 -5px #bdc1cc,777px 0 0 -5px #bdc1cc,778px 0 0 -5px #bdc1cc,779px 0 0 -5px #bdc1cc,780px 0 0 -5px #bdc1cc,781px 0 0 -5px #bdc1cc,782px 0 0 -5px #bdc1cc,783px 0 0 -5px #bdc1cc,784px 0 0 -5px #bdc1cc,785px 0 0 -5px #bdc1cc,786px 0 0 -5px #bdc1cc,787px 0 0 -5px #bdc1cc,788px 0 0 -5px #bdc1cc,789px 0 0 -5px #bdc1cc,790px 0 0 -5px #bdc1cc,791px 0 0 -5px #bdc1cc,792px 0 0 -5px #bdc1cc,793px 0 0 -5px #bdc1cc,794px 0 0 -5px #bdc1cc,795px 0 0 -5px #bdc1cc,796px 0 0 -5px #bdc1cc,797px 0 0 -5px #bdc1cc,798px 0 0 -5px #bdc1cc,799px 0 0 -5px #bdc1cc,800px 0 0 -5px #bdc1cc,801px 0 0 -5px #bdc1cc,802px 0 0 -5px #bdc1cc,803px 0 0 -5px #bdc1cc,804px 0 0 -5px #bdc1cc,805px 0 0 -5px #bdc1cc,806px 0 0 -5px #bdc1cc,807px 0 0 -5px #bdc1cc,808px 0 0 -5px #bdc1cc,809px 0 0 -5px #bdc1cc,810px 0 0 -5px #bdc1cc,811px 0 0 -5px #bdc1cc,812px 0 0 -5px #bdc1cc,813px 0 0 -5px #bdc1cc,814px 0 0 -5px #bdc1cc,815px 0 0 -5px #bdc1cc,816px 0 0 -5px #bdc1cc,817px 0 0 -5px #bdc1cc,818px 0 0 -5px #bdc1cc,819px 0 0 -5px #bdc1cc,820px 0 0 -5px #bdc1cc,821px 0 0 -5px #bdc1cc,822px 0 0 -5px #bdc1cc,823px 0 0 -5px #bdc1cc,824px 0 0 -5px #bdc1cc,825px 0 0 -5px #bdc1cc,826px 0 0 -5px #bdc1cc,827px 0 0 -5px #bdc1cc,828px 0 0 -5px #bdc1cc,829px 0 0 -5px #bdc1cc,830px 0 0 -5px #bdc1cc,831px 0 0 -5px #bdc1cc,832px 0 0 -5px #bdc1cc,833px 0 0 -5px #bdc1cc,834px 0 0 -5px #bdc1cc,835px 0 0 -5px #bdc1cc,836px 0 0 -5px #bdc1cc,837px 0 0 -5px #bdc1cc,838px 0 0 -5px #bdc1cc,839px 0 0 -5px #bdc1cc,840px 0 0 -5px #bdc1cc,841px 0 0 -5px #bdc1cc,842px 0 0 -5px #bdc1cc,843px 0 0 -5px #bdc1cc,844px 0 0 -5px #bdc1cc,845px 0 0 -5px #bdc1cc,846px 0 0 -5px #bdc1cc,847px 0 0 -5px #bdc1cc,848px 0 0 -5px #bdc1cc,849px 0 0 -5px #bdc1cc,850px 0 0 -5px #bdc1cc,851px 0 0 -5px #bdc1cc,852px 0 0 -5px #bdc1cc,853px 0 0 -5px #bdc1cc,854px 0 0 -5px #bdc1cc,855px 0 0 -5px #bdc1cc,856px 0 0 -5px #bdc1cc,857px 0 0 -5px #bdc1cc,858px 0 0 -5px #bdc1cc,859px 0 0 -5px #bdc1cc,860px 0 0 -5px #bdc1cc,861px 0 0 -5px #bdc1cc,862px 0 0 -5px #bdc1cc,863px 0 0 -5px #bdc1cc,864px 0 0 -5px #bdc1cc,865px 0 0 -5px #bdc1cc,866px 0 0 -5px #bdc1cc,867px 0 0 -5px #bdc1cc,868px 0 0 -5px #bdc1cc,869px 0 0 -5px #bdc1cc,870px 0 0 -5px #bdc1cc,871px 0 0 -5px #bdc1cc,872px 0 0 -5px #bdc1cc,873px 0 0 -5px #bdc1cc,874px 0 0 -5px #bdc1cc,875px 0 0 -5px #bdc1cc,876px 0 0 -5px #bdc1cc,877px 0 0 -5px #bdc1cc,878px 0 0 -5px #bdc1cc,879px 0 0 -5px #bdc1cc,880px 0 0 -5px #bdc1cc,881px 0 0 -5px #bdc1cc,882px 0 0 -5px #bdc1cc,883px 0 0 -5px #bdc1cc,884px 0 0 -5px #bdc1cc,885px 0 0 -5px #bdc1cc,886px 0 0 -5px #bdc1cc,887px 0 0 -5px #bdc1cc,888px 0 0 -5px #bdc1cc,889px 0 0 -5px #bdc1cc,890px 0 0 -5px #bdc1cc,891px 0 0 -5px #bdc1cc,892px 0 0 -5px #bdc1cc,893px 0 0 -5px #bdc1cc,894px 0 0 -5px #bdc1cc,895px 0 0 -5px #bdc1cc,896px 0 0 -5px #bdc1cc,897px 0 0 -5px #bdc1cc,898px 0 0 -5px #bdc1cc,899px 0 0 -5px #bdc1cc,900px 0 0 -5px #bdc1cc,901px 0 0 -5px #bdc1cc,902px 0 0 -5px #bdc1cc,903px 0 0 -5px #bdc1cc,904px 0 0 -5px #bdc1cc,905px 0 0 -5px #bdc1cc,906px 0 0 -5px #bdc1cc,907px 0 0 -5px #bdc1cc,908px 0 0 -5px #bdc1cc,909px 0 0 -5px #bdc1cc,910px 0 0 -5px #bdc1cc,911px 0 0 -5px #bdc1cc,912px 0 0 -5px #bdc1cc,913px 0 0 -5px #bdc1cc,914px 0 0 -5px #bdc1cc,915px 0 0 -5px #bdc1cc,916px 0 0 -5px #bdc1cc,917px 0 0 -5px #bdc1cc,918px 0 0 -5px #bdc1cc,919px 0 0 -5px #bdc1cc,920px 0 0 -5px #bdc1cc,921px 0 0 -5px #bdc1cc,922px 0 0 -5px #bdc1cc,923px 0 0 -5px #bdc1cc,924px 0 0 -5px #bdc1cc,925px 0 0 -5px #bdc1cc,926px 0 0 -5px #bdc1cc,927px 0 0 -5px #bdc1cc,928px 0 0 -5px #bdc1cc,929px 0 0 -5px #bdc1cc,930px 0 0 -5px #bdc1cc,931px 0 0 -5px #bdc1cc,932px 0 0 -5px #bdc1cc,933px 0 0 -5px #bdc1cc,934px 0 0 -5px #bdc1cc,935px 0 0 -5px #bdc1cc,936px 0 0 -5px #bdc1cc,937px 0 0 -5px #bdc1cc,938px 0 0 -5px #bdc1cc,939px 0 0 -5px #bdc1cc,940px 0 0 -5px #bdc1cc,941px 0 0 -5px #bdc1cc,942px 0 0 -5px #bdc1cc,943px 0 0 -5px #bdc1cc,944px 0 0 -5px #bdc1cc,945px 0 0 -5px #bdc1cc,946px 0 0 -5px #bdc1cc,947px 0 0 -5px #bdc1cc,948px 0 0 -5px #bdc1cc,949px 0 0 -5px #bdc1cc,950px 0 0 -5px #bdc1cc,951px 0 0 -5px #bdc1cc,952px 0 0 -5px #bdc1cc,953px 0 0 -5px #bdc1cc,954px 0 0 -5px #bdc1cc,955px 0 0 -5px #bdc1cc,956px 0 0 -5px #bdc1cc,957px 0 0 -5px #bdc1cc,958px 0 0 -5px #bdc1cc,959px 0 0 -5px #bdc1cc,960px 0 0 -5px #bdc1cc,961px 0 0 -5px #bdc1cc,962px 0 0 -5px #bdc1cc,963px 0 0 -5px #bdc1cc,964px 0 0 -5px #bdc1cc,965px 0 0 -5px #bdc1cc,966px 0 0 -5px #bdc1cc,967px 0 0 -5px #bdc1cc,968px 0 0 -5px #bdc1cc,969px 0 0 -5px #bdc1cc,970px 0 0 -5px #bdc1cc,971px 0 0 -5px #bdc1cc,972px 0 0 -5px #bdc1cc,973px 0 0 -5px #bdc1cc,974px 0 0 -5px #bdc1cc,975px 0 0 -5px #bdc1cc,976px 0 0 -5px #bdc1cc,977px 0 0 -5px #bdc1cc,978px 0 0 -5px #bdc1cc,979px 0 0 -5px #bdc1cc,980px 0 0 -5px #bdc1cc,981px 0 0 -5px #bdc1cc,982px 0 0 -5px #bdc1cc,983px 0 0 -5px #bdc1cc,984px 0 0 -5px #bdc1cc,985px 0 0 -5px #bdc1cc,986px 0 0 -5px #bdc1cc,987px 0 0 -5px #bdc1cc,988px 0 0 -5px #bdc1cc,989px 0 0 -5px #bdc1cc,990px 0 0 -5px #bdc1cc,991px 0 0 -5px #bdc1cc,992px 0 0 -5px #bdc1cc,993px 0 0 -5px #bdc1cc,994px 0 0 -5px #bdc1cc,995px 0 0 -5px #bdc1cc,996px 0 0 -5px #bdc1cc,997px 0 0 -5px #bdc1cc,998px 0 0 -5px #bdc1cc,999px 0 0 -5px #bdc1cc,1000px 0 0 -5px #bdc1cc}',
            ],
          })),
          R
        );
      })();
      var Ne = v(433);
      let Te = (() => {
        class R {
          constructor(P) {
            this.broadcastService = P;
          }
          ngOnInit() {
            this.toggleBtn = new Ne.cw({ isChecked: new Ne.NI(this.isActive) });
          }
          onChange(P) {
            (this.isActive = P.target.checked),
              this.broadcastService.dispatch(
                new ee.q(C.T.TOGGLE_EVENT, {
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
          (R.ɵfac = function (P) {
            return new (P || R)(s.Y36(B.M));
          }),
          (R.ɵcmp = s.Xpm({
            type: R,
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
            template: function (P, Z) {
              1 & P &&
                (s.TgZ(0, 'form', 0)(1, 'label', 1)(2, 'input', 2),
                s.NdJ('change', function (ut) {
                  return Z.onChange(ut);
                }),
                s.qZA(),
                s._UZ(3, 'span', 3),
                s.qZA()()),
                2 & P &&
                  (s.Q6J('formGroup', Z.toggleBtn),
                  s.xp6(1),
                  s.MGl('for', 'toggle-', Z.id, ''),
                  s.xp6(1),
                  s.MGl('id', 'toggle-', Z.id, ''),
                  s.Q6J('checked', Z.isActive));
            },
            dependencies: [Ne._Y, Ne.Wl, Ne.JJ, Ne.JL, Ne.sg, Ne.u],
            styles: [
              '@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27pmO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27rWO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27rGO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27omO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}body[_ngcontent-%COMP%]{margin:0;font-family:Proxima Nova}[type=checkbox][_ngcontent-%COMP%], [type=radio][_ngcontent-%COMP%]{left:0px;box-sizing:border-box;padding:0}html[_ngcontent-%COMP%]{line-height:1.15;-webkit-text-size-adjust:100%}body[_ngcontent-%COMP%]{margin:0;background-color:#fff}main[_ngcontent-%COMP%]{display:block}h1[_ngcontent-%COMP%]{font-size:2em;margin:.67em 0}hr[_ngcontent-%COMP%]{box-sizing:content-box;height:0;overflow:visible}pre[_ngcontent-%COMP%]{font-family:monospace,monospace;font-size:1em}a[_ngcontent-%COMP%]{background-color:transparent}abbr[title][_ngcontent-%COMP%]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b[_ngcontent-%COMP%], strong[_ngcontent-%COMP%]{font-weight:bolder}code[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], samp[_ngcontent-%COMP%]{font-family:monospace,monospace;font-size:1em}small[_ngcontent-%COMP%]{font-size:80%}sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%]{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub[_ngcontent-%COMP%]{bottom:-.25em}sup[_ngcontent-%COMP%]{top:-.5em}img[_ngcontent-%COMP%]{border-style:none}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{overflow:visible}button[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{text-transform:none}button[_ngcontent-%COMP%], [type=button][_ngcontent-%COMP%], [type=reset][_ngcontent-%COMP%], [type=submit][_ngcontent-%COMP%]{-webkit-appearance:button}button[_ngcontent-%COMP%]::-moz-focus-inner, [type=button][_ngcontent-%COMP%]::-moz-focus-inner, [type=reset][_ngcontent-%COMP%]::-moz-focus-inner, [type=submit][_ngcontent-%COMP%]::-moz-focus-inner{border-style:none;padding:0}button[_ngcontent-%COMP%]:-moz-focusring, [type=button][_ngcontent-%COMP%]:-moz-focusring, [type=reset][_ngcontent-%COMP%]:-moz-focusring, [type=submit][_ngcontent-%COMP%]:-moz-focusring{outline:1px dotted ButtonText}fieldset[_ngcontent-%COMP%]{padding:.35em .75em .625em}legend[_ngcontent-%COMP%]{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress[_ngcontent-%COMP%]{vertical-align:baseline}textarea[_ngcontent-%COMP%]{overflow:auto}[type=checkbox][_ngcontent-%COMP%], [type=radio][_ngcontent-%COMP%]{box-sizing:border-box;padding:0}[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, [type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button{height:auto}[type=search][_ngcontent-%COMP%]{-webkit-appearance:textfield;outline-offset:-2px}[type=search][_ngcontent-%COMP%]::-webkit-search-decoration{-webkit-appearance:none}[_ngcontent-%COMP%]::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details[_ngcontent-%COMP%]{display:block}summary[_ngcontent-%COMP%]{display:list-item}template[_ngcontent-%COMP%]{display:none}[hidden][_ngcontent-%COMP%]{display:none}.btn[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content;border:none;color:#fff;padding:12px 14px;width:150px;height:40px;background:#00838F;border-radius:4px}.btn-small[_ngcontent-%COMP%]{width:80px;height:30px;font-size:small;padding:8px 16px}.btn-small-outline[_ngcontent-%COMP%]{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-small-outline[_ngcontent-%COMP%]:hover{color:#fff;border:none}.btn-medium[_ngcontent-%COMP%]{width:120px;height:40px;font-size:medium;padding:8px 16px}.btn-medium-outline[_ngcontent-%COMP%]{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-medium-outline[_ngcontent-%COMP%]:hover{color:#fff;border:none}.btn-large[_ngcontent-%COMP%]{width:180px;height:50px;font-size:large;padding:4px 6px}.btn-large-outline[_ngcontent-%COMP%]{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-large-outline[_ngcontent-%COMP%]:hover{color:#fff;border:none}.btn-disabled[_ngcontent-%COMP%]{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04)}.btn-disabled[_ngcontent-%COMP%]:hover{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn[_ngcontent-%COMP%]:disabled{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn[_ngcontent-%COMP%]:disabled:hover{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn[_ngcontent-%COMP%]:hover{background:#29ABB9}.btn[_ngcontent-%COMP%]:active{background:#00838F}form[_ngcontent-%COMP%]{display:inherit}.form[_ngcontent-%COMP%]{position:relative;display:inline-block;width:44px;height:22px;cursor:pointer}.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{opacity:0;width:0;height:0}.slide[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0;background-color:#8d949a;border-radius:16px;transition:all .4s;-webkit-transition:all .4s;cursor:pointer}.slide[_ngcontent-%COMP%]:before{content:"";position:absolute;top:calc(50% - 9px);left:2px;height:18px;width:18px;background-color:#fff;border-radius:16px;transition:all .4s;-webkit-transition:all .4s}input[_ngcontent-%COMP%]:checked + .slide[_ngcontent-%COMP%]{background-color:#00838f}input[_ngcontent-%COMP%]:checked + .slide[_ngcontent-%COMP%]:before{transform:translate(22px)}',
            ],
          })),
          R
        );
      })();
      const ve = ['svg'];
      function Le(R, Ce) {
        1 & R &&
          (s.TgZ(0, 'div'),
          s.O4$(),
          s.TgZ(1, 'svg', 4),
          s._UZ(2, 'path', 5, 6),
          s.qZA()());
      }
      let we = (() => {
        class R {
          constructor(P) {
            this.broadcastService = P;
          }
          ngOnInit() {
            this.checkbox = new Ne.cw({ control: new Ne.NI(this.isActive) });
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
                new ee.q(C.T.CHECKBOX_EVENT, {
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
          (R.ɵfac = function (P) {
            return new (P || R)(s.Y36(B.M));
          }),
          (R.ɵcmp = s.Xpm({
            type: R,
            selectors: [['phenom-checkbox']],
            viewQuery: function (P, Z) {
              if ((1 & P && s.Gf(ve, 5), 2 & P)) {
                let Je;
                s.iGM((Je = s.CRH())) && (Z.svg = Je.first);
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
            template: function (P, Z) {
              1 & P &&
                (s.TgZ(0, 'label', 0)(1, 'input', 1),
                s.NdJ('change', function (ut) {
                  return Z.onChange(ut);
                }),
                s.qZA(),
                s.TgZ(2, 'span', 2),
                s.YNc(3, Le, 4, 0, 'div', 3),
                s.qZA()()),
                2 & P &&
                  (s.MGl('for', 'checkbox-', Z.id, ''),
                  s.xp6(1),
                  s.MGl('id', 'checkbox-', Z.id, ''),
                  s.Q6J('checked', Z.isActive)('disabled', Z.isDisabled),
                  s.xp6(2),
                  s.Q6J('ngIf', Z.isActive));
            },
            dependencies: [Y.O5],
            styles: [
              '@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27pmO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27rWO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27rGO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27omO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}body[_ngcontent-%COMP%]{margin:0;font-family:Proxima Nova}[type=checkbox][_ngcontent-%COMP%], [type=radio][_ngcontent-%COMP%]{left:0px;box-sizing:border-box;padding:0}html[_ngcontent-%COMP%]{line-height:1.15;-webkit-text-size-adjust:100%}body[_ngcontent-%COMP%]{margin:0;background-color:#fff}main[_ngcontent-%COMP%]{display:block}h1[_ngcontent-%COMP%]{font-size:2em;margin:.67em 0}hr[_ngcontent-%COMP%]{box-sizing:content-box;height:0;overflow:visible}pre[_ngcontent-%COMP%]{font-family:monospace,monospace;font-size:1em}a[_ngcontent-%COMP%]{background-color:transparent}abbr[title][_ngcontent-%COMP%]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b[_ngcontent-%COMP%], strong[_ngcontent-%COMP%]{font-weight:bolder}code[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], samp[_ngcontent-%COMP%]{font-family:monospace,monospace;font-size:1em}small[_ngcontent-%COMP%]{font-size:80%}sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%]{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub[_ngcontent-%COMP%]{bottom:-.25em}sup[_ngcontent-%COMP%]{top:-.5em}img[_ngcontent-%COMP%]{border-style:none}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{overflow:visible}button[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{text-transform:none}button[_ngcontent-%COMP%], [type=button][_ngcontent-%COMP%], [type=reset][_ngcontent-%COMP%], [type=submit][_ngcontent-%COMP%]{-webkit-appearance:button}button[_ngcontent-%COMP%]::-moz-focus-inner, [type=button][_ngcontent-%COMP%]::-moz-focus-inner, [type=reset][_ngcontent-%COMP%]::-moz-focus-inner, [type=submit][_ngcontent-%COMP%]::-moz-focus-inner{border-style:none;padding:0}button[_ngcontent-%COMP%]:-moz-focusring, [type=button][_ngcontent-%COMP%]:-moz-focusring, [type=reset][_ngcontent-%COMP%]:-moz-focusring, [type=submit][_ngcontent-%COMP%]:-moz-focusring{outline:1px dotted ButtonText}fieldset[_ngcontent-%COMP%]{padding:.35em .75em .625em}legend[_ngcontent-%COMP%]{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress[_ngcontent-%COMP%]{vertical-align:baseline}textarea[_ngcontent-%COMP%]{overflow:auto}[type=checkbox][_ngcontent-%COMP%], [type=radio][_ngcontent-%COMP%]{box-sizing:border-box;padding:0}[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, [type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button{height:auto}[type=search][_ngcontent-%COMP%]{-webkit-appearance:textfield;outline-offset:-2px}[type=search][_ngcontent-%COMP%]::-webkit-search-decoration{-webkit-appearance:none}[_ngcontent-%COMP%]::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details[_ngcontent-%COMP%]{display:block}summary[_ngcontent-%COMP%]{display:list-item}template[_ngcontent-%COMP%]{display:none}[hidden][_ngcontent-%COMP%]{display:none}.btn[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content;border:none;color:#fff;padding:12px 14px;width:150px;height:40px;background:#00838F;border-radius:4px}.btn-small[_ngcontent-%COMP%]{width:80px;height:30px;font-size:small;padding:8px 16px}.btn-small-outline[_ngcontent-%COMP%]{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-small-outline[_ngcontent-%COMP%]:hover{color:#fff;border:none}.btn-medium[_ngcontent-%COMP%]{width:120px;height:40px;font-size:medium;padding:8px 16px}.btn-medium-outline[_ngcontent-%COMP%]{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-medium-outline[_ngcontent-%COMP%]:hover{color:#fff;border:none}.btn-large[_ngcontent-%COMP%]{width:180px;height:50px;font-size:large;padding:4px 6px}.btn-large-outline[_ngcontent-%COMP%]{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-large-outline[_ngcontent-%COMP%]:hover{color:#fff;border:none}.btn-disabled[_ngcontent-%COMP%]{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04)}.btn-disabled[_ngcontent-%COMP%]:hover{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn[_ngcontent-%COMP%]:disabled{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn[_ngcontent-%COMP%]:disabled:hover{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn[_ngcontent-%COMP%]:hover{background:#29ABB9}.btn[_ngcontent-%COMP%]:active{background:#00838F}.check-container[_ngcontent-%COMP%]{box-sizing:border-box;cursor:pointer}.check-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:none}.checkmark[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;box-sizing:border-box;height:16px;width:16px;border-radius:2px;background-color:#fff}.check-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] ~ .checkmark[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #C2C5C8}.check-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ .checkmark[_ngcontent-%COMP%]{background-color:#00838f;border:1px solid #00838F}.check-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled ~ .checkmark[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #C2C5C8;cursor:not-allowed}.check-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ .checkmark[_ngcontent-%COMP%]:after{display:block}',
            ],
          })),
          R
        );
      })();
      function Ie(R, Ce) {
        1 & R &&
          (s.ynx(0),
          s.TgZ(1, 'span', 6),
          s._uU(2, 'Select a Locale'),
          s.qZA(),
          s.BQk());
      }
      function X(R, Ce) {
        1 & R &&
          (s.ynx(0),
          s.TgZ(1, 'div', 10)(2, 'span', 11),
          s._uU(3, 'SID '),
          s.qZA()(),
          s.BQk());
      }
      function Pe(R, Ce) {
        if (
          (1 & R &&
            (s.ynx(0),
            s.TgZ(1, 'div', 10)(2, 'span', 11),
            s._uU(3),
            s.qZA()(),
            s.BQk()),
          2 & R)
        ) {
          const P = s.oxw(3);
          s.xp6(3), s.hij('Phone Number: ', P.phnNumber, ' ');
        }
      }
      function G(R, Ce) {
        if (
          (1 & R &&
            (s.ynx(0),
            s.TgZ(1, 'span', 7),
            s._uU(2),
            s.qZA(),
            s.TgZ(3, 'div', 8)(4, 'span', 9),
            s._uU(5),
            s.qZA(),
            s.YNc(6, X, 4, 0, 'ng-container', 2),
            s.YNc(7, Pe, 4, 1, 'ng-container', 2),
            s.qZA(),
            s.BQk()),
          2 & R)
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
      function J(R, Ce) {
        1 & R && (s.TgZ(0, 'button', 12), s._uU(1, ' Disconnect '), s.qZA());
      }
      function j(R, Ce) {
        1 & R && s.GkF(0);
      }
      function le(R, Ce) {
        if (
          (1 & R &&
            (s.TgZ(0, 'section', 1),
            s.YNc(1, Ie, 3, 0, 'ng-container', 2),
            s.YNc(2, G, 8, 4, 'ng-container', 2),
            s.TgZ(3, 'div', 3)(4, 'button', 4),
            s._uU(5, ' Reset to default '),
            s.qZA(),
            s.YNc(6, J, 2, 0, 'button', 5),
            s.qZA(),
            s.YNc(7, j, 1, 0, 'ng-container', 2),
            s.qZA()),
          2 & R)
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
      let se = (() => {
          class R {
            constructor(P) {
              (this.broadcastService = P), (this.meta = {});
            }
            ngOnInit() {
              this.broadcastService
                .on(C.T.ACCORDION_EVENT_INIT)
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
            (R.ɵfac = function (P) {
              return new (P || R)(s.Y36(B.M));
            }),
            (R.ɵcmp = s.Xpm({
              type: R,
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
                ['class', 'mfe-header', 4, 'ngIf'],
                [1, 'mfe-header'],
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
              template: function (P, Z) {
                1 & P && s.YNc(0, le, 8, 4, 'section', 0),
                  2 & P &&
                    s.Q6J('ngIf', Z.isLocaleListPage || Z.experienceType);
              },
              dependencies: [Y.O5],
              styles: [
                '@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27pmO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27rWO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27rGO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27omO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}body[_ngcontent-%COMP%]{margin:0;font-family:Proxima Nova}[type=checkbox][_ngcontent-%COMP%], [type=radio][_ngcontent-%COMP%]{left:0px;box-sizing:border-box;padding:0}html[_ngcontent-%COMP%]{line-height:1.15;-webkit-text-size-adjust:100%}body[_ngcontent-%COMP%]{margin:0;background-color:#fff}main[_ngcontent-%COMP%]{display:block}h1[_ngcontent-%COMP%]{font-size:2em;margin:.67em 0}hr[_ngcontent-%COMP%]{box-sizing:content-box;height:0;overflow:visible}pre[_ngcontent-%COMP%]{font-family:monospace,monospace;font-size:1em}a[_ngcontent-%COMP%]{background-color:transparent}abbr[title][_ngcontent-%COMP%]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b[_ngcontent-%COMP%], strong[_ngcontent-%COMP%]{font-weight:bolder}code[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], samp[_ngcontent-%COMP%]{font-family:monospace,monospace;font-size:1em}small[_ngcontent-%COMP%]{font-size:80%}sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%]{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub[_ngcontent-%COMP%]{bottom:-.25em}sup[_ngcontent-%COMP%]{top:-.5em}img[_ngcontent-%COMP%]{border-style:none}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{overflow:visible}button[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{text-transform:none}button[_ngcontent-%COMP%], [type=button][_ngcontent-%COMP%], [type=reset][_ngcontent-%COMP%], [type=submit][_ngcontent-%COMP%]{-webkit-appearance:button}button[_ngcontent-%COMP%]::-moz-focus-inner, [type=button][_ngcontent-%COMP%]::-moz-focus-inner, [type=reset][_ngcontent-%COMP%]::-moz-focus-inner, [type=submit][_ngcontent-%COMP%]::-moz-focus-inner{border-style:none;padding:0}button[_ngcontent-%COMP%]:-moz-focusring, [type=button][_ngcontent-%COMP%]:-moz-focusring, [type=reset][_ngcontent-%COMP%]:-moz-focusring, [type=submit][_ngcontent-%COMP%]:-moz-focusring{outline:1px dotted ButtonText}fieldset[_ngcontent-%COMP%]{padding:.35em .75em .625em}legend[_ngcontent-%COMP%]{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress[_ngcontent-%COMP%]{vertical-align:baseline}textarea[_ngcontent-%COMP%]{overflow:auto}[type=checkbox][_ngcontent-%COMP%], [type=radio][_ngcontent-%COMP%]{box-sizing:border-box;padding:0}[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, [type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button{height:auto}[type=search][_ngcontent-%COMP%]{-webkit-appearance:textfield;outline-offset:-2px}[type=search][_ngcontent-%COMP%]::-webkit-search-decoration{-webkit-appearance:none}[_ngcontent-%COMP%]::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details[_ngcontent-%COMP%]{display:block}summary[_ngcontent-%COMP%]{display:list-item}template[_ngcontent-%COMP%]{display:none}[hidden][_ngcontent-%COMP%]{display:none}.btn[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content;border:none;color:#fff;padding:12px 14px;width:150px;height:40px;background:#00838F;border-radius:4px}.btn-small[_ngcontent-%COMP%]{width:80px;height:30px;font-size:small;padding:8px 16px}.btn-small-outline[_ngcontent-%COMP%]{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-small-outline[_ngcontent-%COMP%]:hover{color:#fff;border:none}.btn-medium[_ngcontent-%COMP%]{width:120px;height:40px;font-size:medium;padding:8px 16px}.btn-medium-outline[_ngcontent-%COMP%]{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-medium-outline[_ngcontent-%COMP%]:hover{color:#fff;border:none}.btn-large[_ngcontent-%COMP%]{width:180px;height:50px;font-size:large;padding:4px 6px}.btn-large-outline[_ngcontent-%COMP%]{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-large-outline[_ngcontent-%COMP%]:hover{color:#fff;border:none}.btn-disabled[_ngcontent-%COMP%]{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04)}.btn-disabled[_ngcontent-%COMP%]:hover{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn[_ngcontent-%COMP%]:disabled{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn[_ngcontent-%COMP%]:disabled:hover{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn[_ngcontent-%COMP%]:hover{background:#29ABB9}.btn[_ngcontent-%COMP%]:active{background:#00838F}.mfe-header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;padding:16px 30px 20px 32px;gap:10px;background:#FFFFFF;box-shadow:inset 0 -1px #dfe3e6;position:relative;left:1%}.mfe-header[_ngcontent-%COMP%]   .only-title[_ngcontent-%COMP%]{font-family:Proxima Nova;font-style:normal;font-weight:500;font-size:24px;line-height:32px;color:#1c2024;margin-top:24px;margin-bottom:10px}.mfe-header[_ngcontent-%COMP%]   .experience-type[_ngcontent-%COMP%]{font-family:Proxima Nova;font-style:normal;font-weight:400;font-size:14px;line-height:20px;color:#4b6479;margin-bottom:20px}.mfe-header[_ngcontent-%COMP%]   .sms-bound[_ngcontent-%COMP%]{display:flex;align-items:center;gap:20px}.mfe-header[_ngcontent-%COMP%]   .sms-bound[_ngcontent-%COMP%]   .bot-type[_ngcontent-%COMP%]{font-family:Proxima Nova;font-style:normal;font-weight:500;font-size:24px;line-height:32px;color:#1c2024}.mfe-header[_ngcontent-%COMP%]   .sms-bound[_ngcontent-%COMP%]   .sms-pad[_ngcontent-%COMP%]{padding:1px 8px;background:#EFF8F8;border-radius:4px}.mfe-header[_ngcontent-%COMP%]   .sms-bound[_ngcontent-%COMP%]   .sms-pad[_ngcontent-%COMP%]   .sms[_ngcontent-%COMP%]{font-family:Proxima Nova;font-style:normal;font-weight:400;font-size:12px;line-height:20px;color:#006e78}.mfe-header[_ngcontent-%COMP%]   .reset-disconnect-buttons[_ngcontent-%COMP%]{display:flex;gap:10px;position:absolute;bottom:30%;right:5%}.mfe-header[_ngcontent-%COMP%]   .reset-disconnect-buttons[_ngcontent-%COMP%]   .reset-button[_ngcontent-%COMP%]{cursor:pointer;padding:4px 14px;border:#00838F 1px solid;background-color:#fff;border-radius:4px;font-family:Proxima Nova;font-style:normal;font-weight:400;font-size:16px;line-height:22px;color:#00838f}.mfe-header[_ngcontent-%COMP%]   .reset-disconnect-buttons[_ngcontent-%COMP%]   .disconnect-button[_ngcontent-%COMP%]{cursor:pointer;padding:4px 14px;border:#00838F 1px solid;background-color:#00838f;border-radius:4px;font-family:Proxima Nova;font-style:normal;font-weight:400;font-size:16px;line-height:22px;color:#fff}',
              ],
            })),
            R
          );
        })(),
        ke = (() => {
          class R {
            constructor() {}
            ngOnInit() {}
          }
          return (
            (R.ɵfac = function (P) {
              return new (P || R)();
            }),
            (R.ɵcmp = s.Xpm({
              type: R,
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
              template: function (P, Z) {
                1 & P && (s.TgZ(0, 'div', 0), s._UZ(1, 'img', 1), s.qZA());
              },
              styles: [
                '.loading-block[_ngcontent-%COMP%]{height:520px;line-height:520px;display:flex;align-items:center;justify-content:center}',
              ],
            })),
            R
          );
        })();
      const it = function (R) {
          return { 'border-color': R };
        },
        gt = function (R) {
          return { disabled: R };
        };
      let _t = (() => {
          class R {
            constructor(P) {
              (this.broadcastService = P), (this.change = new s.vpe());
            }
            ngOnInit() {}
            onChange(P) {
              (this.isActive = P.target.checked),
                this.broadcastService.dispatch(
                  new ee.q(C.T.RADIO_EMITTER, {
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
            (R.ɵfac = function (P) {
              return new (P || R)(s.Y36(B.M));
            }),
            (R.ɵcmp = s.Xpm({
              type: R,
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
              template: function (P, Z) {
                1 & P &&
                  (s.TgZ(0, 'label', 0)(1, 'input', 1),
                  s.NdJ('change', function (ut) {
                    return Z.onChange(ut);
                  }),
                  s.qZA()()),
                  2 & P &&
                    (s.Q6J(
                      'ngStyle',
                      s.VKq(4, it, Z.isDisabled ? '#93A1AB' : '#058EA0')
                    ),
                    s.xp6(1),
                    s.Q6J('ngClass', s.VKq(6, gt, Z.isDisabled))(
                      'disabled',
                      Z.isDisabled
                    )('checked', null == Z.data ? null : Z.data.isEnabled));
              },
              dependencies: [Y.mk, Y.PC],
              styles: [
                '.label[_ngcontent-%COMP%]{display:inline-block;border:#058EA0 .11em solid;height:16px;width:16px;border-radius:50%;position:relative;transition:all 1s;cursor:pointer}.checkbox[_ngcontent-%COMP%]{left:-.1em;top:-.1em;-webkit-appearance:none;appearance:none}.checkbox[_ngcontent-%COMP%]:before{display:block;content:"";width:8px;height:8px}.checkbox[_ngcontent-%COMP%]:checked:before{position:absolute;top:3px;left:3px;width:10px;height:10px;background:#058EA0;border-radius:50%;transition:all .1s}.checkbox[_ngcontent-%COMP%]:checked:disabled:before{position:absolute;top:3px;left:3px;width:10px;height:10px;background:#93A1AB;border-radius:50%;transition:all 1s}',
              ],
            })),
            R
          );
        })(),
        Be = (() => {
          class R {
            constructor() {}
            toFormGroup(P) {
              const Z = {};
              return (
                P.forEach(Je => {
                  Z[Je.key] = Je.required
                    ? new Ne.NI(Je.value || '', Ne.kI.required)
                    : new Ne.NI(Je.value || '');
                }),
                new Ne.cw(Z)
              );
            }
          }
          return (
            (R.ɵfac = function (P) {
              return new (P || R)();
            }),
            (R.ɵprov = s.Yz7({
              token: R,
              factory: R.ɵfac,
              providedIn: 'root',
            })),
            R
          );
        })();
      function jt(R, Ce) {
        if (
          (1 & R &&
            (s.ynx(0),
            s.TgZ(1, 'span', 3),
            s._UZ(2, 'img', 4),
            s.qZA(),
            s.BQk()),
          2 & R)
        ) {
          const P = s.oxw();
          s.xp6(2), s.Q6J('src', P.icon, s.LSH);
        }
      }
      const cn = function (R) {
        return { 'phenom-button-position-right': R };
      };
      let Tt = (() => {
        class R {
          constructor() {
            (this.type = 'button'), (this.onClick = new s.vpe());
          }
          ngOnInit() {}
          onButtonClick() {
            this.onClick.emit({ data: { label: this.label } });
          }
        }
        return (
          (R.ɵfac = function (P) {
            return new (P || R)();
          }),
          (R.ɵcmp = s.Xpm({
            type: R,
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
            template: function (P, Z) {
              1 & P &&
                (s.TgZ(0, 'button', 0),
                s.NdJ('click', function () {
                  return Z.onButtonClick();
                }),
                s.YNc(1, jt, 3, 1, 'ng-container', 1),
                s.TgZ(2, 'span', 2),
                s._uU(3),
                s.qZA()()),
                2 & P &&
                  (s.Tol(Z.buttonClass),
                  s.Q6J('type', Z.type)(
                    'ngClass',
                    s.VKq(7, cn, 'right' == Z.iconPosition)
                  )('disabled', Z.isDisabled),
                  s.xp6(1),
                  s.Q6J('ngIf', Z.icon),
                  s.xp6(2),
                  s.Oqu(Z.label));
            },
            dependencies: [Y.mk, Y.O5],
            styles: [
              '@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27pmO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27rWO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27rGO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27omO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}body[_ngcontent-%COMP%]{margin:0;font-family:Proxima Nova}[type=checkbox][_ngcontent-%COMP%], [type=radio][_ngcontent-%COMP%]{left:0px;box-sizing:border-box;padding:0}html[_ngcontent-%COMP%]{line-height:1.15;-webkit-text-size-adjust:100%}body[_ngcontent-%COMP%]{margin:0;background-color:#fff}main[_ngcontent-%COMP%]{display:block}h1[_ngcontent-%COMP%]{font-size:2em;margin:.67em 0}hr[_ngcontent-%COMP%]{box-sizing:content-box;height:0;overflow:visible}pre[_ngcontent-%COMP%]{font-family:monospace,monospace;font-size:1em}a[_ngcontent-%COMP%]{background-color:transparent}abbr[title][_ngcontent-%COMP%]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b[_ngcontent-%COMP%], strong[_ngcontent-%COMP%]{font-weight:bolder}code[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], samp[_ngcontent-%COMP%]{font-family:monospace,monospace;font-size:1em}small[_ngcontent-%COMP%]{font-size:80%}sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%]{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub[_ngcontent-%COMP%]{bottom:-.25em}sup[_ngcontent-%COMP%]{top:-.5em}img[_ngcontent-%COMP%]{border-style:none}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{overflow:visible}button[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{text-transform:none}button[_ngcontent-%COMP%], [type=button][_ngcontent-%COMP%], [type=reset][_ngcontent-%COMP%], [type=submit][_ngcontent-%COMP%]{-webkit-appearance:button}button[_ngcontent-%COMP%]::-moz-focus-inner, [type=button][_ngcontent-%COMP%]::-moz-focus-inner, [type=reset][_ngcontent-%COMP%]::-moz-focus-inner, [type=submit][_ngcontent-%COMP%]::-moz-focus-inner{border-style:none;padding:0}button[_ngcontent-%COMP%]:-moz-focusring, [type=button][_ngcontent-%COMP%]:-moz-focusring, [type=reset][_ngcontent-%COMP%]:-moz-focusring, [type=submit][_ngcontent-%COMP%]:-moz-focusring{outline:1px dotted ButtonText}fieldset[_ngcontent-%COMP%]{padding:.35em .75em .625em}legend[_ngcontent-%COMP%]{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress[_ngcontent-%COMP%]{vertical-align:baseline}textarea[_ngcontent-%COMP%]{overflow:auto}[type=checkbox][_ngcontent-%COMP%], [type=radio][_ngcontent-%COMP%]{box-sizing:border-box;padding:0}[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, [type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button{height:auto}[type=search][_ngcontent-%COMP%]{-webkit-appearance:textfield;outline-offset:-2px}[type=search][_ngcontent-%COMP%]::-webkit-search-decoration{-webkit-appearance:none}[_ngcontent-%COMP%]::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details[_ngcontent-%COMP%]{display:block}summary[_ngcontent-%COMP%]{display:list-item}template[_ngcontent-%COMP%]{display:none}[hidden][_ngcontent-%COMP%]{display:none}.btn[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content;border:none;color:#fff;padding:12px 14px;width:150px;height:40px;background:#00838F;border-radius:4px}.btn-small[_ngcontent-%COMP%]{width:80px;height:30px;font-size:small;padding:8px 16px}.btn-small-outline[_ngcontent-%COMP%]{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-small-outline[_ngcontent-%COMP%]:hover{color:#fff;border:none}.btn-medium[_ngcontent-%COMP%]{width:120px;height:40px;font-size:medium;padding:8px 16px}.btn-medium-outline[_ngcontent-%COMP%]{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-medium-outline[_ngcontent-%COMP%]:hover{color:#fff;border:none}.btn-large[_ngcontent-%COMP%]{width:180px;height:50px;font-size:large;padding:4px 6px}.btn-large-outline[_ngcontent-%COMP%]{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-large-outline[_ngcontent-%COMP%]:hover{color:#fff;border:none}.btn-disabled[_ngcontent-%COMP%]{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04)}.btn-disabled[_ngcontent-%COMP%]:hover{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn[_ngcontent-%COMP%]:disabled{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn[_ngcontent-%COMP%]:disabled:hover{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn[_ngcontent-%COMP%]:hover{background:#29ABB9}.btn[_ngcontent-%COMP%]:active{background:#00838F}.phenom-button[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content;display:flex;cursor:pointer;align-items:center;justify-content:space-around}.phenom-button-position-right[_ngcontent-%COMP%]{flex-direction:row-reverse}',
            ],
          })),
          R
        );
      })();
      function Mt(R, Ce) {
        1 & R && (s.ynx(0), s._UZ(1, 'app-button', 3), s.BQk()),
          2 & R &&
            (s.xp6(1), s.Q6J('label', 'Copy')('buttonClass', 'btn-small'));
      }
      const qt = function (R, Ce) {
        return { 'p-input-box-valid': R, 'p-input-box-invalid': Ce };
      };
      let Oe = (() => {
        class R {
          constructor() {
            (this.isCopyEnabled = !1), (this.currentValue = new s.vpe());
          }
          ngOnInit() {}
          emitCurrentValue() {
            this.currentValue.emit({ id: this.id, value: this.control.value });
          }
        }
        return (
          (R.ɵfac = function (P) {
            return new (P || R)();
          }),
          (R.ɵcmp = s.Xpm({
            type: R,
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
                { provide: Ne.JU, useExisting: (0, s.Gpc)(() => R), multi: !0 },
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
                1,
                'input-field',
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
            template: function (P, Z) {
              1 & P &&
                (s.TgZ(0, 'span', 0)(1, 'input', 1),
                s.NdJ('keyup', function () {
                  return Z.emitCurrentValue();
                }),
                s.qZA(),
                s.YNc(2, Mt, 2, 2, 'ng-container', 2),
                s.qZA()),
                2 & P &&
                  (s.xp6(1),
                  s.Q6J('id', Z.id)('name', Z.name)(
                    'placeholder',
                    Z.placeholder ? Z.placeholder : ''
                  )('formControl', Z.control)(
                    'ngClass',
                    s.WLB(6, qt, 'valid' == Z.state, 'invalid' == Z.state)
                  ),
                  s.xp6(1),
                  s.Q6J('ngIf', Z.isCopyEnabled));
            },
            dependencies: [Y.mk, Y.O5, Ne.Fj, Ne.JJ, Ne.oH, Tt],
            styles: [
              '.p-input-box{display:flex;justify-content:space-between;align-items:center;color:#8c9ba5;margin:0;box-sizing:border-box;min-width:240px;height:40px;padding:0 3px 0 12px;background:#FFFFFF;border:1px solid #DFE3E6;box-shadow:inset 0 0 0 1px #66717b40,inset 0 1px 2px #66717b36;border-radius:4px;outline:none;width:100%}.p-input-box .input-field{margin:0!important;height:30px;color:#8c9ba5;width:-webkit-fill-available;border:none;outline:none;box-sizing:border-box;min-width:240px;border-radius:4px}.p-input-box:focus{outline:none}.p-input-box-invalid{border:1px solid #DE350B}.p-input-box-invalid:focus{border:1px solid #DE350B}.p-input-box-invalid:active{border:2px solid #DE350B}.p-input-box-invalid:hover{border:1px solid #DE350B}.p-input-box-valid{border:1px solid #36B37E}.p-input-box-valid:focus{border:1px solid #36B37E}.p-input-box-valid:active{border:2px solid #36B37E}.p-input-box-valid:hover{border:1px solid #36B37E}.p-input-box:disabled{background:rgba(21,41,53,.04);border:none;outline:none;cursor:not-allowed}\n',
            ],
            encapsulation: 2,
          })),
          R
        );
      })();
      function pe(R, Ce) {
        if (
          (1 & R &&
            (s.ynx(0),
            s.TgZ(1, 'div', 9)(2, 'label'),
            s._uU(3),
            s.qZA(),
            s._UZ(4, 'input-box', 10),
            s.qZA(),
            s.BQk()),
          2 & R)
        ) {
          const P = Ce.$implicit,
            Z = Ce.index,
            Je = s.oxw(2);
          s.xp6(3),
            s.hij(' ', null == P ? null : P.label, ' '),
            s.xp6(1),
            s.Q6J('placeholder', null == P ? null : P.placeholder)(
              'control',
              Je.formControlList[Z]
            )('isCopyEnabled', null == P ? null : P.isCopyEnabled);
        }
      }
      function ce(R, Ce) {
        if (1 & R) {
          const P = s.EpF();
          s.TgZ(0, 'main', 1)(1, 'div', 2)(2, 'p', 3),
            s._uU(3),
            s.qZA(),
            s.TgZ(4, 'form', 4),
            s.NdJ('ngSubmit', function () {
              s.CHM(P);
              const Je = s.oxw();
              return s.KtG(Je.submitForm());
            }),
            s.TgZ(5, 'div', 5),
            s.YNc(6, pe, 5, 4, 'ng-container', 6),
            s.TgZ(7, 'footer', 7)(8, 'app-button', 8),
            s.NdJ('onClick', function () {
              s.CHM(P);
              const Je = s.oxw();
              return s.KtG(Je.submitForm());
            }),
            s.qZA()()()()()();
        }
        if (2 & R) {
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
      let He = (() => {
        class R {
          constructor(P, Z) {
            (this.questionControlService = P),
              (this.sharedService = Z),
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
              this.controlList.forEach((Z, Je) => {
                this.formControlList[Je] = this.provisioningForm.get(Z);
              });
          }
          addTranslation() {
            this.sharedService
              .getI18nValues()
              .pipe((0, Q.U)(P => P))
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
                      Z => (
                        (this.isDataLoaded = !0),
                        (Z.label = P[Z.label] ? P[Z.label] : Z.label),
                        (Z.placeholder = P[Z.placeholder]
                          ? P[Z.placeholder]
                          : Z.placeholder),
                        Z
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
          (R.ɵfac = function (P) {
            return new (P || R)(s.Y36(Be), s.Y36(de.F));
          }),
          (R.ɵcmp = s.Xpm({
            type: R,
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
            template: function (P, Z) {
              1 & P && s.YNc(0, ce, 9, 5, 'main', 0),
                2 & P && s.Q6J('ngIf', Z.isDataLoaded);
            },
            dependencies: [Y.sg, Y.O5, Oe, Tt],
            styles: [
              '.provision-container[_ngcontent-%COMP%]{width:100%}.provision-container[_ngcontent-%COMP%]   .disabled-state[_ngcontent-%COMP%]{opacity:.6;cursor:not-allowed}@media screen and (max-width: 1500px){.provision-container[_ngcontent-%COMP%]{width:100%}}.provision-container[_ngcontent-%COMP%]   .container-body[_ngcontent-%COMP%]{width:85%;padding:32px}.provision-container[_ngcontent-%COMP%]   .container-body[_ngcontent-%COMP%]   .heading-block[_ngcontent-%COMP%]{padding:10px 0;box-shadow:inset 0 -1px #dfe3e6}.provision-container[_ngcontent-%COMP%]   .container-body[_ngcontent-%COMP%]   .form-block[_ngcontent-%COMP%]{width:98%;color:#152935;font-weight:400;font-size:13px;line-height:20px}.provision-container[_ngcontent-%COMP%]   .container-body[_ngcontent-%COMP%]   .form-block[_ngcontent-%COMP%]   .input-block[_ngcontent-%COMP%]{margin-bottom:24px;display:flex;flex-direction:column;gap:4px}.provision-container[_ngcontent-%COMP%]   .container-body[_ngcontent-%COMP%]   .footer-block[_ngcontent-%COMP%]{float:right}',
            ],
          })),
          R
        );
      })();
      var rt = v(8246);
      function ft(R, Ce) {
        if (1 & R) {
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
              const Je = s.oxw();
              return s.KtG(Je.provisionChannel());
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
        if (2 & R) {
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
      let xt = (() => {
        class R {
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
            this.httpService
              .httpPost(
                'v1/customers/provision',
                'chatbot_configurations_api',
                P
              )
              .subscribe({
                next: Z => {
                  this.provisioned.emit(
                    404 == Z.statusCode
                      ? { isProvisioned: !1 }
                      : { isProvisioned: !0 }
                  );
                },
                error: Z => {
                  console.log(Z);
                },
              });
          }
        }
        return (
          (R.ɵfac = function (P) {
            return new (P || R)(s.Y36(ye.O));
          }),
          (R.ɵcmp = s.Xpm({
            type: R,
            selectors: [['provision']],
            inputs: { skeleton: 'skeleton' },
            outputs: { provisioned: 'provisioned' },
            decls: 1,
            vars: 1,
            consts: [
              ['class', 'mfe-provision', 4, 'ngIf'],
              [1, 'mfe-provision'],
              [1, 'mfe-header-section'],
              [3, 'innerHtml'],
              [1, 'mfe-card'],
              [1, 'mfe-card-header'],
              [1, 'custom', 3, 'label', 'buttonClass', 'onClick'],
              [1, 'mfe-card-body'],
            ],
            template: function (P, Z) {
              1 & P && s.YNc(0, ft, 20, 13, 'div', 0),
                2 & P && s.Q6J('ngIf', Z.skeleton);
            },
            dependencies: [Y.O5, Tt, rt.y],
            styles: [
              '.mfe-provision[_ngcontent-%COMP%]{padding:10px 30px;margin-top:20px}.mfe-provision[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{border:1px solid #DFE3E6;margin:16px 0}.mfe-provision[_ngcontent-%COMP%]   .mfe-header-section[_ngcontent-%COMP%]{display:flex;align-items:flex-start;font-size:18px;gap:12px}.mfe-provision[_ngcontent-%COMP%]   .mfe-card[_ngcontent-%COMP%]{margin-top:16px;margin-bottom:32px;padding:24px;box-sizing:border-box;width:100%;background:#FFFFFF;border:1px solid #DFE3E6;border-radius:6px;transition:1s all}.mfe-provision[_ngcontent-%COMP%]   .mfe-card[_ngcontent-%COMP%]   .mfe-card-header[_ngcontent-%COMP%]{color:#414c54;display:flex;justify-content:space-between;align-items:center;font-weight:400;font-size:16px;line-height:20px}.mfe-provision[_ngcontent-%COMP%]   .mfe-card[_ngcontent-%COMP%]   .mfe-card-body[_ngcontent-%COMP%]{font-weight:400;font-size:14px;line-height:20px;color:#54616c;display:flex;align-items:center;gap:18px}',
            ],
          })),
          R
        );
      })();
      const lt = ['viewContainerRef'];
      function St(R, Ce) {
        1 & R && (s.ynx(0), s._UZ(1, 'app-loader'), s.BQk());
      }
      function Ht(R, Ce) {
        if (1 & R) {
          const P = s.EpF();
          s.ynx(0),
            s.TgZ(1, 'provision', 6),
            s.NdJ('provisioned', function (Je) {
              s.CHM(P);
              const ut = s.oxw(3);
              return s.KtG(ut.provision(Je));
            }),
            s.qZA(),
            s.BQk();
        }
        if (2 & R) {
          const P = s.oxw(3);
          s.xp6(1),
            s.Q6J(
              'skeleton',
              null == P.skeleton ? null : P.skeleton.provisioning
            );
        }
      }
      function et(R, Ce) {
        if ((1 & R && (s.ynx(0), s._UZ(1, 'setup', 8), s.BQk()), 2 & R)) {
          const P = s.oxw(4);
          s.xp6(1),
            s.Q6J('skeleton', null == P.skeleton ? null : P.skeleton.setup);
        }
      }
      function an(R, Ce) {
        if (
          (1 & R &&
            (s.ynx(0),
            s.TgZ(1, 'span', 16),
            s._UZ(2, 'app-toggle', 17),
            s.qZA(),
            s.BQk()),
          2 & R)
        ) {
          const P = s.oxw().$implicit;
          s.xp6(2),
            s.Q6J('id', P.configurationKey)('isActive', P[P.configurationKey]);
        }
      }
      const Dt = function (R) {
        return { 'd-i': R };
      };
      function kt(R, Ce) {
        if ((1 & R && (s.TgZ(0, 'span', 18), s._uU(1), s.qZA()), 2 & R)) {
          const P = s.oxw().$implicit;
          s.Q6J('ngClass', s.VKq(2, Dt, P.configurationKey)),
            s.xp6(1),
            s.hij(' ', P.infoText, ' ');
        }
      }
      function Fn(R, Ce) {
        if (
          (1 & R && (s.TgZ(0, 'span', 16), s._UZ(1, 'app-toggle', 17), s.qZA()),
          2 & R)
        ) {
          const P = s.oxw(2).$implicit;
          s.xp6(1),
            s.Q6J('id', P.configurationKey)('isActive', P[P.configurationKey]);
        }
      }
      function zo(R, Ce) {
        if (
          (1 & R &&
            (s.TgZ(0, 'div', 27)(1, 'div'),
            s._UZ(2, 'radio', 28),
            s.qZA(),
            s.TgZ(3, 'div'),
            s._uU(4),
            s._UZ(5, 'br'),
            s._uU(6),
            s.qZA()()),
          2 & R)
        ) {
          const P = Ce.$implicit,
            Z = s.oxw(3).$implicit;
          s.xp6(2),
            s.Q6J('isDisabled', !Z[Z.configurationKey])('data', P),
            s.xp6(2),
            s.hij(' ', P.literal, ' '),
            s.xp6(2),
            s.hij(' ', P.infoText, ' ');
        }
      }
      function Cn(R, Ce) {
        if (
          (1 & R &&
            (s.ynx(0),
            s.TgZ(1, 'div', 25),
            s.YNc(2, zo, 7, 4, 'div', 26),
            s.qZA(),
            s.BQk()),
          2 & R)
        ) {
          const P = s.oxw(2).$implicit;
          s.xp6(2), s.Q6J('ngForOf', P.flows);
        }
      }
      function he(R, Ce) {
        if (
          (1 & R && (s.ynx(0), s._UZ(1, 'phenom-checkbox', 35), s.BQk()), 2 & R)
        ) {
          const P = s.oxw().$implicit,
            Z = s.oxw(3).$implicit;
          s.xp6(1),
            s.Q6J('attributeConfigurationKey', Z.attributeConfigurationKey)(
              'id',
              P.configurationKey
            )('isDisabled', !Z[Z.configurationKey] || P.actions.disabled)(
              'isActive',
              P[P.configurationKey]
            );
        }
      }
      function U(R, Ce) {
        if (
          (1 & R && (s.ynx(0), s._UZ(1, 'app-progressbar', 36), s.BQk()), 2 & R)
        ) {
          const P = s.oxw().$implicit,
            Z = s.oxw(3).$implicit;
          s.xp6(1),
            s.Q6J('id', P.id)('configurationKey', P.configurationKey)(
              'isDisabled',
              !Z[Z.configurationKey] || P.actions.disabled
            )('value', P[P.configurationKey]);
        }
      }
      function $(R, Ce) {
        if (
          (1 & R &&
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
          2 & R)
        ) {
          const P = Ce.$implicit;
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
      function me(R, Ce) {
        if (
          (1 & R &&
            (s.ynx(0),
            s.TgZ(1, 'div', 29)(2, 'div', 30),
            s._uU(3),
            s._UZ(4, 'br')(5, 'span'),
            s.qZA(),
            s.YNc(6, $, 10, 5, 'ng-container', 10),
            s.qZA(),
            s.BQk()),
          2 & R)
        ) {
          const P = s.oxw(2).$implicit;
          s.xp6(3),
            s.hij(' ', P.attributeHeading, ' '),
            s.xp6(3),
            s.Q6J('ngForOf', P.attributes);
        }
      }
      const W = function (R) {
        return { 'disabled-state': R };
      };
      function Re(R, Ce) {
        if (
          (1 & R &&
            (s.TgZ(0, 'div', 20)(1, 'header', 21)(2, 'div', 22),
            s.YNc(3, Fn, 2, 2, 'span', 23),
            s.TgZ(4, 'p', 13),
            s._uU(5),
            s.qZA()(),
            s.TgZ(6, 'span', 24),
            s._uU(7),
            s.qZA()(),
            s.YNc(8, Cn, 3, 1, 'ng-container', 14),
            s.YNc(9, me, 7, 2, 'ng-container', 14),
            s.qZA()),
          2 & R)
        ) {
          const P = s.oxw().$implicit;
          s.Q6J('ngClass', s.VKq(7, W, !P[P.configurationKey])),
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
      function It(R, Ce) {
        if (
          (1 & R && (s.ynx(0), s.YNc(1, Re, 10, 11, 'div', 19), s.BQk()), 2 & R)
        ) {
          const P = Ce.$implicit,
            Z = s.oxw(7);
          s.xp6(1),
            s.Q6J('ngIf', Z.checkRoleAccess(null == P ? null : P.isInternal));
        }
      }
      function wt(R, Ce) {
        if (
          (1 & R && (s.ynx(0), s.YNc(1, It, 2, 1, 'ng-container', 10), s.BQk()),
          2 & R)
        ) {
          const P = s.oxw().$implicit;
          s.xp6(1), s.Q6J('ngForOf', P.features);
        }
      }
      const Ve = function (R, Ce) {
        return { 'card card-one-item': R, 'disabled-state': Ce };
      };
      function Vt(R, Ce) {
        if (
          (1 & R &&
            (s.TgZ(0, 'section')(1, 'header', 11),
            s._UZ(2, 'span', 12),
            s.ALo(3, 'safe'),
            s.TgZ(4, 'span'),
            s._uU(5),
            s.qZA()(),
            s.TgZ(6, 'div', 13),
            s.YNc(7, an, 3, 2, 'ng-container', 14),
            s.YNc(8, kt, 2, 4, 'span', 15),
            s.YNc(9, wt, 2, 1, 'ng-container', 14),
            s.qZA()()),
          2 & R)
        ) {
          const P = Ce.$implicit;
          s.xp6(2),
            s.Q6J('innerHTML', s.xi3(3, 6, P.svg, 'html'), s.oJD),
            s.xp6(3),
            s.hij(' ', P.heading, ' '),
            s.xp6(1),
            s.Q6J(
              'ngClass',
              s.WLB(
                9,
                Ve,
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
      function Qe(R, Ce) {
        if (
          (1 & R &&
            (s.TgZ(0, 'section', 9),
            s.YNc(1, Vt, 10, 12, 'section', 10),
            s.qZA()),
          2 & R)
        ) {
          const P = s.oxw(4);
          s.xp6(1),
            s.Q6J(
              'ngForOf',
              null == P.skeleton ? null : P.skeleton.configurations
            );
        }
      }
      function ln(R, Ce) {
        if (
          (1 & R &&
            (s.YNc(0, et, 2, 1, 'ng-container', 1),
            s.YNc(1, Qe, 2, 1, 'ng-template', null, 7, s.W1O)),
          2 & R)
        ) {
          const P = s.MAs(2),
            Z = s.oxw(3);
          s.Q6J(
            'ngIf',
            Z.isCustomerIsProvisioned && !1 === Z.configurations.isSetupDone
          )('ngIfElse', P);
        }
      }
      function mt(R, Ce) {
        if (
          (1 & R &&
            (s.TgZ(0, 'main', 0),
            s.YNc(1, Ht, 2, 1, 'ng-container', 1),
            s.YNc(2, ln, 3, 2, 'ng-template', null, 5, s.W1O),
            s.qZA()),
          2 & R)
        ) {
          const P = s.MAs(3),
            Z = s.oxw(2);
          s.xp6(1), s.Q6J('ngIf', !Z.isCustomerIsProvisioned)('ngIfElse', P);
        }
      }
      function vt(R, Ce) {
        1 & R && s.YNc(0, mt, 4, 2, 'main', 4), 2 & R && s.Q6J('ngIf', !0);
      }
      function nt(R, Ce) {}
      let vn = (() => {
        class R {
          constructor(P, Z, Je, ut, ct, Ue) {
            (this.broadcastService = P),
              (this.sharedService = Z),
              (this.httpService = Je),
              (this.utilsService = ut),
              (this.route = ct),
              (this.router = Ue),
              (this.finalstructure = {}),
              (this.isDataLoaded = !1),
              (this.disableAllChannels = !1),
              (this.routeSubscription = this.router.events.subscribe(Ot => {
                if (Ot instanceof H.m2) {
                  const bn = Ot.url.split('?')[0].split('/').length,
                    Ct = Ot.url.split('?')[0].split('/');
                  (this.pageId = `/${Ct[bn - 1]}`),
                    (this.experienceType = Ct[bn - 2]),
                    localStorage.setItem('experienceType', this.experienceType);
                }
              }));
          }
          ngOnInit() {
            (this.roleAccess = localStorage.getItem('roleAccess')),
              this.setupAllEventListener(),
              (this.isDataLoaded = !1),
              this.refreshLocalStorageValue(),
              this.experienceType &&
                this.locale &&
                this.refNum &&
                this.channel &&
                this.getChatbotConfigurations();
          }
          setRole(P) {
            localStorage.setItem('role', P);
          }
          setupAllEventListener() {
            this.broadcastService.on(C.T.LOCALES_LOADED_EVENT).subscribe(() => {
              this.getChatbotConfigurations();
            }),
              this.broadcastService
                .on(C.T.SELECTED_LOCALE_EVENT)
                .pipe((0, Q.U)(P => P.payload))
                .subscribe(({ locale: P }) => {
                  this.locale = P;
                }),
              this.broadcastService.on(C.T.CHECKBOX_EVENT).subscribe(P => {
                this.updateSkeleton(P?.payload),
                  this.updateChatbotConfigurations(P?.payload?.data);
              }),
              this.broadcastService.on(C.T.TOGGLE_EVENT).subscribe(P => {
                this.updateSkeleton(P?.payload),
                  this.updateChatbotConfigurations(P?.payload?.data);
              }),
              this.broadcastService.on(C.T.RADIO_EMITTER).subscribe(P => {
                this.updateSkeleton(P?.payload),
                  this.updateChatbotConfigurations(P?.payload?.data);
              }),
              this.broadcastService.on(C.T.RANGE_EMITTER).subscribe(P => {
                this.updateSkeleton(P?.payload),
                  this.updateChatbotConfigurations(P?.payload?.data);
              }),
              this.broadcastService
                .on(C.T.CLICKED_ON_LOCALE_DROPDOWN)
                .subscribe(() => {
                  this.getChatbotConfigurations();
                }),
              this.broadcastService
                .on(C.T.HIDE_NOTIFICATION_EVENT)
                .subscribe(() => {
                  const P = this.vcr.indexOf(this.ref.hostView);
                  -1 != P && this.vcr.remove(P);
                }),
              this.broadcastService.on(C.T.ACCORDION_EVENT).subscribe(P => {
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
              .subscribe(Z => {
                404 == Z.statusCode
                  ? ((this.isCustomerIsProvisioned = !1),
                    (this.isDataLoaded = !0),
                    this.pageId
                      ? this.sharedService
                          .getDashboardSchemaFromLocale(`${this.pageId}`)
                          .subscribe(Je => {
                            this.skeleton = Je;
                          })
                      : this.sharedService
                          .getDashboardSchemaFromLocale('/career-site-bot')
                          .subscribe(Je => {
                            (this.skeleton = Je),
                              this.createFinalStructure(this.skeleton);
                          }))
                  : ((this.isCustomerIsProvisioned = !0),
                    (this.configurations = Z),
                    this.pageId
                      ? this.sharedService
                          .getDashboardSchemaFromLocale(`${this.pageId}`)
                          .subscribe(Je => {
                            (this.skeleton = Je),
                              console.log(this.skeleton),
                              this.createFinalStructure(this.skeleton);
                          })
                      : this.sharedService
                          .getDashboardSchemaFromLocale('/career-site-bot')
                          .subscribe(Je => {
                            (this.skeleton = Je),
                              this.createFinalStructure(this.skeleton);
                          }));
              });
          }
          updateSkeleton({ data: Z }) {
            this.skeleton.configurations.forEach(
              (ut, ct) => (
                ut.features?.length &&
                  ut?.features.forEach((Ue, Ot) => {
                    'checkbox' == Z?.type &&
                      Ue.attributes &&
                      Ue?.attributes?.forEach((bn, Ct) => {
                        this.skeleton.configurations[ct].features[
                          Ot
                        ].attributes[Ct][Z.configurationKey] = Z.isActive;
                      }),
                      Object.keys(Ue)?.includes(Z.configurationKey) &&
                        ((this.skeleton.configurations[ct].features[Ot][
                          Z.configurationKey
                        ] = Z.isActive),
                        console.log(
                          this.skeleton.configurations[ct].features[Ot]
                            .attributes
                        ),
                        console.log(
                          this.skeleton.configurations[ct].features[Ot][
                            Z.configurationKey
                          ]
                        ));
                  }),
                Object.keys(ut)?.includes(Z.configurationKey) &&
                  ((this.disableAllChannels = Z.isActive),
                  (this.skeleton.configurations[ct][Z.configurationKey] =
                    Z.isActive)),
                ut
              )
            );
          }
          updateChatbotConfigurations({
            attributeConfigurationKey: P,
            configurationKey: Z,
            isActive: Je,
          }) {
            this.refreshLocalStorageValue();
            const ut = this.utilsService.getChatbotConfigurationsPath(
              this.refNum,
              this.locale,
              this.experienceType,
              this.channel
            );
            let ct,
              Ue = this.configurations[P];
            if (
              (P
                ? Je
                  ? (Ue?.includes(Z) || Ue.push(Z),
                    (ct = { update: { [P]: Ue } }))
                  : ((Ue = Ue.filter(Ot => Ot != Z)),
                    (ct = { update: { [P]: Ue } }))
                : (ct = { update: { [Z]: Je } }),
              this.ref)
            ) {
              const Ot = this.vcr.indexOf(this.ref.hostView);
              -1 != Ot && this.vcr.remove(Ot);
            }
            (this.ref = this.vcr.createComponent(Ee)),
              this.httpService
                .httpPatch(ut, 'chatbot_configurations_api', ct)
                .subscribe(Ot => {
                  this.broadcastService.dispatch(
                    new ee.q(C.T.SHOW_NOTIFICATION_EVENT, {
                      type: 'success',
                      msg: 'Configuration Updated Successfully.',
                    })
                  ),
                    setTimeout(() => {
                      const bn = this.vcr.indexOf(this.ref.hostView);
                      -1 != bn && this.vcr.remove(bn);
                    }, 3e3);
                });
          }
          createFinalStructure(P) {
            this.sharedService.getI18nValues().subscribe(Z => {
              let Je = P.configurations.map(
                ut => (
                  ut.features?.length &&
                    (ut.features = ut?.features.map(
                      ct => (
                        ct.attributes &&
                          ct.attributes.map(Ue =>
                            Ue && ct.attributeConfigurationKey
                              ? ((Ue[Ue?.configurationKey] =
                                  this.configurations[
                                    ct.attributeConfigurationKey
                                  ]?.includes(Ue?.configurationKey)),
                                (Ue.literal = Z[Ue.literal]
                                  ? Z[Ue.literal]
                                  : Ue.literal),
                                (Ue.infoText = Z[Ue.infoText]
                                  ? Z[Ue.infoText]
                                  : Ue.infoText),
                                Ue)
                              : ((Ue[Ue?.configurationKey] =
                                  this.configurations[Ue.configurationKey]),
                                (Ue.literal = Z[Ue.literal]
                                  ? Z[Ue.literal]
                                  : Ue.literal),
                                (Ue.infoText = Z[Ue.infoText]
                                  ? Z[Ue.infoText]
                                  : Ue.infoText),
                                Ue)
                          ),
                        ct.flows &&
                          (ct.flows = ct.flows.map(
                            Ue => (
                              (Ue.infoText = Z[Ue.infoText]
                                ? Z[Ue.infoText]
                                : Ue.infoText),
                              (Ue.literal = Z[Ue.literal]
                                ? Z[Ue.literal]
                                : Ue.literal),
                              this.configurations[Ue.configurationKey] &&
                                this.configurations[Ue.configurationKey] ==
                                  Ue.version &&
                                (Ue.isEnabled = !0),
                              Ue
                            )
                          )),
                        (ct[ct.configurationKey] =
                          this.configurations[ct.configurationKey]),
                        (ct.infoText = Z[ct.infoText]
                          ? Z[ct.infoText]
                          : ct.infoText),
                        (ct.attributeHeading = Z[ct.attributeHeading]
                          ? Z[ct.attributeHeading]
                          : ct.attributeHeading),
                        (ct.literal = Z[ct.literal]
                          ? Z[ct.literal]
                          : ct.literal),
                        { ...ct }
                      )
                    )),
                  (ut.heading = Z[ut.heading] ? Z[ut.heading] : ut.heading),
                  (ut.infoText = Z[ut.infoText] ? Z[ut.infoText] : ut.infoText),
                  ut.configurationKey &&
                    (ut[ut.configurationKey] =
                      this.configurations[ut.configurationKey]),
                  ut
                )
              );
              (P.configurations = Je), (this.isDataLoaded = !0);
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
              .then(Z => {
                404 !== Z.status
                  ? (console.log('Provisioned'),
                    (this.isCustomerIsProvisioned = !0))
                  : (this.sharedService
                      .getDashboardSchema(this.pageId)
                      .subscribe(Je => {
                        this.configurationPageId = Je?.configurationPageId;
                      }),
                    console.log('Not Provisioned', this.configurationPageId),
                    (this.isCustomerIsProvisioned = !1));
              });
          }
          provision(P) {
            (this.ref = this.vcr.createComponent(Ee)),
              this.broadcastService.dispatch(
                new ee.q(C.T.SHOW_NOTIFICATION_EVENT, {
                  type: 'failed',
                  msg: 'Something went wrong.',
                })
              ),
              setTimeout(() => {
                const Z = this.vcr.indexOf(this.ref.hostView);
                -1 != Z && this.vcr.remove(Z);
              }, 3e3);
          }
          checkRoleAccess(P) {
            return !P || 'internal' == this.roleAccess;
          }
          ngOnDestroy() {
            this.routeSubscription.unsubscribe();
          }
        }
        return (
          (R.ɵfac = function (P) {
            return new (P || R)(
              s.Y36(B.M),
              s.Y36(de.F),
              s.Y36(ye.O),
              s.Y36(K.F),
              s.Y36(H.gz),
              s.Y36(H.F0)
            );
          }),
          (R.ɵcmp = s.Xpm({
            type: R,
            selectors: [['configurations']],
            viewQuery: function (P, Z) {
              if ((1 & P && s.Gf(lt, 5, s.s_b), 2 & P)) {
                let Je;
                s.iGM((Je = s.CRH())) && (Z.vcr = Je.first);
              }
            },
            inputs: { roleAccess: 'roleAccess' },
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
              ['class', 'card', 3, 'ngClass', 4, 'ngIf'],
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
            template: function (P, Z) {
              if (
                (1 & P &&
                  (s.TgZ(0, 'div', 0),
                  s._UZ(1, 'app-header'),
                  s.YNc(2, St, 2, 0, 'ng-container', 1),
                  s.YNc(3, vt, 1, 1, 'ng-template', null, 2, s.W1O),
                  s.YNc(5, nt, 0, 0, 'ng-template', null, 3, s.W1O),
                  s.qZA()),
                2 & P)
              ) {
                const Je = s.MAs(4);
                s.xp6(2), s.Q6J('ngIf', !Z.isDataLoaded)('ngIfElse', Je);
              }
            },
            dependencies: [
              Y.mk,
              Y.sg,
              Y.O5,
              Ae,
              Te,
              we,
              se,
              ke,
              _t,
              He,
              xt,
              rt.y,
            ],
            styles: [
              '.configurations-container[_ngcontent-%COMP%]{font-family:Proxima Nova;min-height:72vh;width:100%}.configurations-container[_ngcontent-%COMP%]   .disabled-state[_ngcontent-%COMP%]{opacity:.6;cursor:not-allowed}@media screen and (max-width: 1500px){.configurations-container[_ngcontent-%COMP%]{width:100%}}.configurations-container[_ngcontent-%COMP%]   .container-heading[_ngcontent-%COMP%]{padding:32px;border-bottom:1px solid #DFE3E6;background:#FFFFFF;box-shadow:inset 0 -1px #dfe3e6}.configurations-container[_ngcontent-%COMP%]   .container-heading[_ngcontent-%COMP%]   .candidate-experience[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:14px;line-height:20px;display:flex;align-items:center;color:#4b6479}.configurations-container[_ngcontent-%COMP%]   .container-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-style:normal;font-weight:500;font-size:24px;line-height:32px;color:#1c2024}.configurations-container[_ngcontent-%COMP%]   .container-body[_ngcontent-%COMP%]{width:85%;padding:32px}.configurations-container[_ngcontent-%COMP%]   .config-heading[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:12px;font-style:normal;font-weight:400;font-size:18px;line-height:28px;color:#1c2024}.configurations-container[_ngcontent-%COMP%]   .card-one-item[_ngcontent-%COMP%]   .card-one-item-heading[_ngcontent-%COMP%]{font-size:18px}.configurations-container[_ngcontent-%COMP%]   .section-toggle[_ngcontent-%COMP%]{margin-right:16px}.configurations-container[_ngcontent-%COMP%]   .d-f-c[_ngcontent-%COMP%]{display:flex;flex-direction:column}.configurations-container[_ngcontent-%COMP%]   .d-i[_ngcontent-%COMP%]{display:inline}.configurations-container[_ngcontent-%COMP%]   .section-infotext[_ngcontent-%COMP%]{margin-top:6px;display:inline-block;font-weight:400;font-size:14px;line-height:20px;color:#414c54}.card[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:32px;padding:24px;box-sizing:border-box;width:100%;background:#FFFFFF;border:1px solid #DFE3E6;border-radius:6px;transition:1s all}.card[_ngcontent-%COMP%]   .features-types[_ngcontent-%COMP%]{margin-top:20px}.card[_ngcontent-%COMP%]   .features-types[_ngcontent-%COMP%]   .features-types-section[_ngcontent-%COMP%]{font-size:14px;line-height:28px;color:#1c2024;display:flex;align-items:center;padding:5px 16px;gap:32px;height:80px;background:#FFFFFF;box-shadow:inset 0 1px #e8ecee;flex:none;order:1;flex-grow:1}.card[_ngcontent-%COMP%]   .attribute[_ngcontent-%COMP%]{width:100%;margin:24px auto 0}.card[_ngcontent-%COMP%]   .attribute[_ngcontent-%COMP%]   .attribute-heading[_ngcontent-%COMP%]{font-size:14px;display:flex;flex-direction:row;align-items:center;padding:14px 16px;background:#F7FAFB}.card[_ngcontent-%COMP%]   .attribute[_ngcontent-%COMP%]   .attribute-items[_ngcontent-%COMP%]{display:flex;padding:20px;align-items:center;box-shadow:inset 0 1px #dfe3e6}.card[_ngcontent-%COMP%]   .attribute[_ngcontent-%COMP%]   .attribute-items[_ngcontent-%COMP%]   .attribute-icon[_ngcontent-%COMP%]{padding:10px 30px}.card[_ngcontent-%COMP%]   .attribute[_ngcontent-%COMP%]   .attribute-items[_ngcontent-%COMP%]   .attribute-items-heading[_ngcontent-%COMP%]{display:flex;flex-direction:column}.card[_ngcontent-%COMP%]   .attribute[_ngcontent-%COMP%]   .attribute-items[_ngcontent-%COMP%]   .attribute-items-heading[_ngcontent-%COMP%]   .attribute-items-title[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:14px;line-height:20px;display:flex;align-items:center;color:#1c2024}.card[_ngcontent-%COMP%]   .attribute[_ngcontent-%COMP%]   .attribute-items[_ngcontent-%COMP%]   .attribute-items-heading[_ngcontent-%COMP%]   .attribute-items-info-text[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:12px;line-height:20px;color:#414c54}.card[_ngcontent-%COMP%]   .attribute[_ngcontent-%COMP%]   .attribute-items-progress-bar[_ngcontent-%COMP%]{display:flex;padding:20px;flex-direction:column-reverse}.card[_ngcontent-%COMP%]   .attribute[_ngcontent-%COMP%]   .attribute-items-progress-bar[_ngcontent-%COMP%]   .attribute-icon[_ngcontent-%COMP%]{padding:10px;width:50%}.card[_ngcontent-%COMP%]   .attribute[_ngcontent-%COMP%]   .attribute-items-progress-bar[_ngcontent-%COMP%]   .attribute-items-heading[_ngcontent-%COMP%]{display:flex;flex-direction:column}.card[_ngcontent-%COMP%]   .attribute[_ngcontent-%COMP%]   .attribute-items-progress-bar[_ngcontent-%COMP%]   .attribute-items-heading[_ngcontent-%COMP%]   .attribute-items-title[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:14px;line-height:20px;display:flex;align-items:center;color:#1c2024}.card[_ngcontent-%COMP%]   .attribute[_ngcontent-%COMP%]   .attribute-items-progress-bar[_ngcontent-%COMP%]   .attribute-items-heading[_ngcontent-%COMP%]   .attribute-items-info-text[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:12px;line-height:20px;color:#414c54}',
            ],
          })),
          R
        );
      })();
    },
    9960: (Xe, ge, v) => {
      v.d(ge, { g: () => ee });
      var s = v(4650),
        C = v(542),
        H = v(2691),
        Q = v(3485);
      let ee = (() => {
        class I {
          constructor(Y) {
            (this.router = Y), console.log(this.router.config);
          }
          ngOnInit() {}
        }
        return (
          (I.ɵfac = function (Y) {
            return new (Y || I)(s.Y36(C.F0));
          }),
          (I.ɵcmp = s.Xpm({
            type: I,
            selectors: [['locale-list']],
            decls: 5,
            vars: 1,
            consts: [
              [1, 'mfe-main-container'],
              [3, 'isLocaleListPage'],
              [1, 'mfe-base-container'],
            ],
            template: function (Y, fe) {
              1 & Y &&
                (s.TgZ(0, 'div', 0)(1, 'aside'),
                s._UZ(2, 'app-sidebar', 1),
                s.qZA(),
                s.TgZ(3, 'div', 2),
                s._UZ(4, 'locales'),
                s.qZA()()),
                2 & Y && (s.xp6(2), s.Q6J('isLocaleListPage', !0));
            },
            dependencies: [H.k, Q.K],
            styles: [
              '.mfe-main-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;background-color:#fff}.mfe-main-container[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]{position:fixed;height:100vh;width:15%}@media screen and (max-width: 1500px){.mfe-main-container[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]{width:25%}}.mfe-main-container[_ngcontent-%COMP%]   .mfe-base-container[_ngcontent-%COMP%]{width:85%;margin-left:15%}@media screen and (max-width: 1500px){.mfe-main-container[_ngcontent-%COMP%]   .mfe-base-container[_ngcontent-%COMP%]{width:75%;margin-left:25%}}',
            ],
          })),
          I
        );
      })();
    },
    3485: (Xe, ge, v) => {
      v.d(ge, { K: () => Ee });
      var s = v(5289),
        C = v(319),
        H = v(4650),
        Q = v(1094),
        ee = v(9590),
        I = v(542),
        B = v(7420),
        Y = v(6895);
      let fe = (() => {
        class de {
          constructor() {
            this.onClickEvent = new H.vpe();
          }
          ngOnInit() {}
          onClick(K) {
            this.onClickEvent.emit(K);
          }
        }
        return (
          (de.ɵfac = function (K) {
            return new (K || de)();
          }),
          (de.ɵcmp = H.Xpm({
            type: de,
            selectors: [['phenom-simple-card']],
            inputs: { text: 'text' },
            outputs: { onClickEvent: 'onClickEvent' },
            decls: 3,
            vars: 1,
            consts: [[1, 'phenom-simple-card', 3, 'click']],
            template: function (K, ie) {
              1 & K &&
                (H.TgZ(0, 'div', 0),
                H.NdJ('click', function (Ne) {
                  return ie.onClick(Ne);
                }),
                H.TgZ(1, 'p'),
                H._uU(2),
                H.qZA()()),
                2 & K && (H.xp6(2), H.hij(' ', ie.text, ''));
            },
            styles: [
              '@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27pmO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27rWO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27rGO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27omO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}body[_ngcontent-%COMP%]{margin:0;font-family:Proxima Nova}[type=checkbox][_ngcontent-%COMP%], [type=radio][_ngcontent-%COMP%]{left:0px;box-sizing:border-box;padding:0}html[_ngcontent-%COMP%]{line-height:1.15;-webkit-text-size-adjust:100%}body[_ngcontent-%COMP%]{margin:0;background-color:#fff}main[_ngcontent-%COMP%]{display:block}h1[_ngcontent-%COMP%]{font-size:2em;margin:.67em 0}hr[_ngcontent-%COMP%]{box-sizing:content-box;height:0;overflow:visible}pre[_ngcontent-%COMP%]{font-family:monospace,monospace;font-size:1em}a[_ngcontent-%COMP%]{background-color:transparent}abbr[title][_ngcontent-%COMP%]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b[_ngcontent-%COMP%], strong[_ngcontent-%COMP%]{font-weight:bolder}code[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], samp[_ngcontent-%COMP%]{font-family:monospace,monospace;font-size:1em}small[_ngcontent-%COMP%]{font-size:80%}sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%]{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub[_ngcontent-%COMP%]{bottom:-.25em}sup[_ngcontent-%COMP%]{top:-.5em}img[_ngcontent-%COMP%]{border-style:none}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{overflow:visible}button[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{text-transform:none}button[_ngcontent-%COMP%], [type=button][_ngcontent-%COMP%], [type=reset][_ngcontent-%COMP%], [type=submit][_ngcontent-%COMP%]{-webkit-appearance:button}button[_ngcontent-%COMP%]::-moz-focus-inner, [type=button][_ngcontent-%COMP%]::-moz-focus-inner, [type=reset][_ngcontent-%COMP%]::-moz-focus-inner, [type=submit][_ngcontent-%COMP%]::-moz-focus-inner{border-style:none;padding:0}button[_ngcontent-%COMP%]:-moz-focusring, [type=button][_ngcontent-%COMP%]:-moz-focusring, [type=reset][_ngcontent-%COMP%]:-moz-focusring, [type=submit][_ngcontent-%COMP%]:-moz-focusring{outline:1px dotted ButtonText}fieldset[_ngcontent-%COMP%]{padding:.35em .75em .625em}legend[_ngcontent-%COMP%]{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress[_ngcontent-%COMP%]{vertical-align:baseline}textarea[_ngcontent-%COMP%]{overflow:auto}[type=checkbox][_ngcontent-%COMP%], [type=radio][_ngcontent-%COMP%]{box-sizing:border-box;padding:0}[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, [type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button{height:auto}[type=search][_ngcontent-%COMP%]{-webkit-appearance:textfield;outline-offset:-2px}[type=search][_ngcontent-%COMP%]::-webkit-search-decoration{-webkit-appearance:none}[_ngcontent-%COMP%]::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details[_ngcontent-%COMP%]{display:block}summary[_ngcontent-%COMP%]{display:list-item}template[_ngcontent-%COMP%]{display:none}[hidden][_ngcontent-%COMP%]{display:none}.btn[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content;border:none;color:#fff;padding:12px 14px;width:150px;height:40px;background:#00838F;border-radius:4px}.btn-small[_ngcontent-%COMP%]{width:80px;height:30px;font-size:small;padding:8px 16px}.btn-small-outline[_ngcontent-%COMP%]{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-small-outline[_ngcontent-%COMP%]:hover{color:#fff;border:none}.btn-medium[_ngcontent-%COMP%]{width:120px;height:40px;font-size:medium;padding:8px 16px}.btn-medium-outline[_ngcontent-%COMP%]{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-medium-outline[_ngcontent-%COMP%]:hover{color:#fff;border:none}.btn-large[_ngcontent-%COMP%]{width:180px;height:50px;font-size:large;padding:4px 6px}.btn-large-outline[_ngcontent-%COMP%]{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-large-outline[_ngcontent-%COMP%]:hover{color:#fff;border:none}.btn-disabled[_ngcontent-%COMP%]{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04)}.btn-disabled[_ngcontent-%COMP%]:hover{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn[_ngcontent-%COMP%]:disabled{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn[_ngcontent-%COMP%]:disabled:hover{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn[_ngcontent-%COMP%]:hover{background:#29ABB9}.btn[_ngcontent-%COMP%]:active{background:#00838F}.phenom-simple-card[_ngcontent-%COMP%]{background-color:#fff;border-radius:8px;box-shadow:0 0 8px #00000026;width:20%;margin:24px 24px 24px 32px;font-size:16px;padding:20px;cursor:pointer;color:#152935;display:inline-block}',
            ],
          })),
          de
        );
      })();
      var ne = v(433);
      let te = (() => {
          class de {
            constructor() {
              (this.enteredSearchValue = ''),
                (this.searchTextChanged = new H.vpe());
            }
            ngOnInit() {}
            onSearchTextChanged() {
              this.searchTextChanged.emit(this.enteredSearchValue);
            }
          }
          return (
            (de.ɵfac = function (K) {
              return new (K || de)();
            }),
            (de.ɵcmp = H.Xpm({
              type: de,
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
              template: function (K, ie) {
                1 & K &&
                  (H.TgZ(0, 'div', 0)(1, 'p', 1)(2, 'input', 2),
                  H.NdJ('ngModelChange', function (Ne) {
                    return (ie.enteredSearchValue = Ne);
                  })('input', function () {
                    return ie.onSearchTextChanged();
                  }),
                  H.qZA()(),
                  H.TgZ(3, 'span', 3),
                  H.O4$(),
                  H.TgZ(4, 'svg', 4),
                  H._UZ(5, 'path', 5),
                  H.qZA()()()),
                  2 & K && (H.xp6(2), H.Q6J('ngModel', ie.enteredSearchValue));
              },
              dependencies: [ne.Fj, ne.JJ, ne.On],
              styles: [
                '@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27pmO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27rWO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27rGO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27omO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}body[_ngcontent-%COMP%]{margin:0;font-family:Proxima Nova}[type=checkbox][_ngcontent-%COMP%], [type=radio][_ngcontent-%COMP%]{left:0px;box-sizing:border-box;padding:0}html[_ngcontent-%COMP%]{line-height:1.15;-webkit-text-size-adjust:100%}body[_ngcontent-%COMP%]{margin:0;background-color:#fff}main[_ngcontent-%COMP%]{display:block}h1[_ngcontent-%COMP%]{font-size:2em;margin:.67em 0}hr[_ngcontent-%COMP%]{box-sizing:content-box;height:0;overflow:visible}pre[_ngcontent-%COMP%]{font-family:monospace,monospace;font-size:1em}a[_ngcontent-%COMP%]{background-color:transparent}abbr[title][_ngcontent-%COMP%]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b[_ngcontent-%COMP%], strong[_ngcontent-%COMP%]{font-weight:bolder}code[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], samp[_ngcontent-%COMP%]{font-family:monospace,monospace;font-size:1em}small[_ngcontent-%COMP%]{font-size:80%}sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%]{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub[_ngcontent-%COMP%]{bottom:-.25em}sup[_ngcontent-%COMP%]{top:-.5em}img[_ngcontent-%COMP%]{border-style:none}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{overflow:visible}button[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{text-transform:none}button[_ngcontent-%COMP%], [type=button][_ngcontent-%COMP%], [type=reset][_ngcontent-%COMP%], [type=submit][_ngcontent-%COMP%]{-webkit-appearance:button}button[_ngcontent-%COMP%]::-moz-focus-inner, [type=button][_ngcontent-%COMP%]::-moz-focus-inner, [type=reset][_ngcontent-%COMP%]::-moz-focus-inner, [type=submit][_ngcontent-%COMP%]::-moz-focus-inner{border-style:none;padding:0}button[_ngcontent-%COMP%]:-moz-focusring, [type=button][_ngcontent-%COMP%]:-moz-focusring, [type=reset][_ngcontent-%COMP%]:-moz-focusring, [type=submit][_ngcontent-%COMP%]:-moz-focusring{outline:1px dotted ButtonText}fieldset[_ngcontent-%COMP%]{padding:.35em .75em .625em}legend[_ngcontent-%COMP%]{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress[_ngcontent-%COMP%]{vertical-align:baseline}textarea[_ngcontent-%COMP%]{overflow:auto}[type=checkbox][_ngcontent-%COMP%], [type=radio][_ngcontent-%COMP%]{box-sizing:border-box;padding:0}[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, [type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button{height:auto}[type=search][_ngcontent-%COMP%]{-webkit-appearance:textfield;outline-offset:-2px}[type=search][_ngcontent-%COMP%]::-webkit-search-decoration{-webkit-appearance:none}[_ngcontent-%COMP%]::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details[_ngcontent-%COMP%]{display:block}summary[_ngcontent-%COMP%]{display:list-item}template[_ngcontent-%COMP%]{display:none}[hidden][_ngcontent-%COMP%]{display:none}.btn[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content;border:none;color:#fff;padding:12px 14px;width:150px;height:40px;background:#00838F;border-radius:4px}.btn-small[_ngcontent-%COMP%]{width:80px;height:30px;font-size:small;padding:8px 16px}.btn-small-outline[_ngcontent-%COMP%]{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-small-outline[_ngcontent-%COMP%]:hover{color:#fff;border:none}.btn-medium[_ngcontent-%COMP%]{width:120px;height:40px;font-size:medium;padding:8px 16px}.btn-medium-outline[_ngcontent-%COMP%]{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-medium-outline[_ngcontent-%COMP%]:hover{color:#fff;border:none}.btn-large[_ngcontent-%COMP%]{width:180px;height:50px;font-size:large;padding:4px 6px}.btn-large-outline[_ngcontent-%COMP%]{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-large-outline[_ngcontent-%COMP%]:hover{color:#fff;border:none}.btn-disabled[_ngcontent-%COMP%]{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04)}.btn-disabled[_ngcontent-%COMP%]:hover{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn[_ngcontent-%COMP%]:disabled{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn[_ngcontent-%COMP%]:disabled:hover{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn[_ngcontent-%COMP%]:hover{background:#29ABB9}.btn[_ngcontent-%COMP%]:active{background:#00838F}.searchbar[_ngcontent-%COMP%]{padding:0 10px;display:flex;justify-content:space-between;align-items:center;border:#EAECEE solid 1px;width:25%;border-radius:4px}.searchbar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{color:#8c9ba5;border:none;width:100%}.searchbar[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-family:Proxima Nova;font-size:14px;line-height:20px;width:90%}.searchbar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .searchbar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus-within{outline:none}',
              ],
            })),
            de
          );
        })(),
        oe = (() => {
          class de {
            transform(K, ie, Ae = !1) {
              return K
                ? ie
                  ? (Ae || (ie = ie.toLowerCase()),
                    K.filter(function (Ne) {
                      return Ae
                        ? JSON.stringify(Ne).includes(ie)
                        : JSON.stringify(Ne).toLowerCase().includes(ie);
                    }))
                  : K
                : null;
            }
          }
          return (
            (de.ɵfac = function (K) {
              return new (K || de)();
            }),
            (de.ɵpipe = H.Yjl({ name: 'searchFilter', type: de, pure: !0 })),
            de
          );
        })();
      function Ze(de, ye) {
        if (1 & de) {
          const K = H.EpF();
          H.ynx(0),
            H.TgZ(1, 'phenom-simple-card', 4),
            H.NdJ('click', function () {
              const Ne = H.CHM(K).$implicit,
                Te = H.oxw();
              return H.KtG(Te.getSelectedLocale(Ne));
            }),
            H.qZA(),
            H.BQk();
        }
        if (2 & de) {
          const K = ye.$implicit;
          H.xp6(1), H.Q6J('text', K.displayText);
        }
      }
      let Ee = (() => {
        class de {
          constructor(K, ie, Ae, Ne) {
            (this.utilsService = K),
              (this.broadcastService = ie),
              (this.router = Ae),
              (this.sharedService = Ne),
              (this.searchText = ''),
              Ae.events.subscribe();
          }
          onSearchTextEntered(K) {
            this.searchText = K;
          }
          ngOnInit() {
            (this.refNum = localStorage.getItem('refNum')),
              this.utilsService.getDistinctLocale(this.refNum, 'cx').then(K => {
                (this.locales = K.locales),
                  localStorage.setItem('customerName', K.customerName);
              });
          }
          getSelectedLocale(K) {
            this.broadcastService.dispatch(
              new C.q(s.T.SELECTED_LOCALE_EVENT, K)
            ),
              localStorage.setItem('locale', K.locale);
          }
        }
        return (
          (de.ɵfac = function (K) {
            return new (K || de)(
              H.Y36(Q.F),
              H.Y36(ee.M),
              H.Y36(I.F0),
              H.Y36(B.F)
            );
          }),
          (de.ɵcmp = H.Xpm({
            type: de,
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
            template: function (K, ie) {
              1 & K &&
                (H.TgZ(0, 'div', 0)(1, 'section', 1)(2, 'app-searchbox', 2),
                H.NdJ('searchTextChanged', function (Ne) {
                  return ie.onSearchTextEntered(Ne);
                }),
                H.qZA(),
                H.YNc(3, Ze, 2, 1, 'ng-container', 3),
                H.ALo(4, 'searchFilter'),
                H.qZA()()),
                2 & K &&
                  (H.xp6(3),
                  H.Q6J('ngForOf', H.xi3(4, 1, ie.locales, ie.searchText)));
            },
            dependencies: [Y.sg, fe, te, oe],
            styles: [
              '@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27pmO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27rWO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27rGO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27omO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}body[_ngcontent-%COMP%]{margin:0;font-family:Proxima Nova}[type=checkbox][_ngcontent-%COMP%], [type=radio][_ngcontent-%COMP%]{left:0px;box-sizing:border-box;padding:0}html[_ngcontent-%COMP%]{line-height:1.15;-webkit-text-size-adjust:100%}body[_ngcontent-%COMP%]{margin:0;background-color:#fff}main[_ngcontent-%COMP%]{display:block}h1[_ngcontent-%COMP%]{font-size:2em;margin:.67em 0}hr[_ngcontent-%COMP%]{box-sizing:content-box;height:0;overflow:visible}pre[_ngcontent-%COMP%]{font-family:monospace,monospace;font-size:1em}a[_ngcontent-%COMP%]{background-color:transparent}abbr[title][_ngcontent-%COMP%]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b[_ngcontent-%COMP%], strong[_ngcontent-%COMP%]{font-weight:bolder}code[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], samp[_ngcontent-%COMP%]{font-family:monospace,monospace;font-size:1em}small[_ngcontent-%COMP%]{font-size:80%}sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%]{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub[_ngcontent-%COMP%]{bottom:-.25em}sup[_ngcontent-%COMP%]{top:-.5em}img[_ngcontent-%COMP%]{border-style:none}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{overflow:visible}button[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{text-transform:none}button[_ngcontent-%COMP%], [type=button][_ngcontent-%COMP%], [type=reset][_ngcontent-%COMP%], [type=submit][_ngcontent-%COMP%]{-webkit-appearance:button}button[_ngcontent-%COMP%]::-moz-focus-inner, [type=button][_ngcontent-%COMP%]::-moz-focus-inner, [type=reset][_ngcontent-%COMP%]::-moz-focus-inner, [type=submit][_ngcontent-%COMP%]::-moz-focus-inner{border-style:none;padding:0}button[_ngcontent-%COMP%]:-moz-focusring, [type=button][_ngcontent-%COMP%]:-moz-focusring, [type=reset][_ngcontent-%COMP%]:-moz-focusring, [type=submit][_ngcontent-%COMP%]:-moz-focusring{outline:1px dotted ButtonText}fieldset[_ngcontent-%COMP%]{padding:.35em .75em .625em}legend[_ngcontent-%COMP%]{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress[_ngcontent-%COMP%]{vertical-align:baseline}textarea[_ngcontent-%COMP%]{overflow:auto}[type=checkbox][_ngcontent-%COMP%], [type=radio][_ngcontent-%COMP%]{box-sizing:border-box;padding:0}[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, [type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button{height:auto}[type=search][_ngcontent-%COMP%]{-webkit-appearance:textfield;outline-offset:-2px}[type=search][_ngcontent-%COMP%]::-webkit-search-decoration{-webkit-appearance:none}[_ngcontent-%COMP%]::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details[_ngcontent-%COMP%]{display:block}summary[_ngcontent-%COMP%]{display:list-item}template[_ngcontent-%COMP%]{display:none}[hidden][_ngcontent-%COMP%]{display:none}.btn[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content;border:none;color:#fff;padding:12px 14px;width:150px;height:40px;background:#00838F;border-radius:4px}.btn-small[_ngcontent-%COMP%]{width:80px;height:30px;font-size:small;padding:8px 16px}.btn-small-outline[_ngcontent-%COMP%]{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-small-outline[_ngcontent-%COMP%]:hover{color:#fff;border:none}.btn-medium[_ngcontent-%COMP%]{width:120px;height:40px;font-size:medium;padding:8px 16px}.btn-medium-outline[_ngcontent-%COMP%]{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-medium-outline[_ngcontent-%COMP%]:hover{color:#fff;border:none}.btn-large[_ngcontent-%COMP%]{width:180px;height:50px;font-size:large;padding:4px 6px}.btn-large-outline[_ngcontent-%COMP%]{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-large-outline[_ngcontent-%COMP%]:hover{color:#fff;border:none}.btn-disabled[_ngcontent-%COMP%]{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04)}.btn-disabled[_ngcontent-%COMP%]:hover{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn[_ngcontent-%COMP%]:disabled{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn[_ngcontent-%COMP%]:disabled:hover{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn[_ngcontent-%COMP%]:hover{background:#29ABB9}.btn[_ngcontent-%COMP%]:active{background:#00838F}div[_ngcontent-%COMP%]{margin-top:24px;margin-left:32px}',
            ],
          })),
          de
        );
      })();
    },
    2691: (Xe, ge, v) => {
      v.d(ge, { k: () => de });
      var s = v(5289),
        C = (() => {
          return (
            ((ye = C || (C = {})).WEB = 'web'),
            (ye.SMS = 'sms'),
            (ye.WHATSAPP = 'whatsapp'),
            (ye.MSTEAMS = 'msteams'),
            (ye.FACEBOOK = 'facebook'),
            C
          );
          var ye;
        })(),
        H = v(542),
        Q = v(4004),
        ee = v(963),
        I = v(319),
        B = v(4650),
        Y = v(9590),
        fe = v(1094),
        ne = v(7420);
      function te(ye, K) {
        1 & ye && (B.ynx(0), B._UZ(1, 'div', 4), B.BQk());
      }
      function oe(ye, K) {
        if (
          (1 & ye && (B.ynx(0), B._UZ(1, 'app-accordion', 7), B.BQk()), 2 & ye)
        ) {
          const ie = K.$implicit,
            Ae = B.oxw(3);
          B.xp6(1),
            B.Q6J('id', ie.experienceType)('svg', ie.svg)(
              'defaultPageId',
              Ae.defaultAccordionItem
            )('experienceType', ie.heading)('pages', ie.channels);
        }
      }
      function Ze(ye, K) {
        if (
          (1 & ye &&
            (B._UZ(0, 'app-dropdown', 5)(1, 'span'),
            B.YNc(2, oe, 2, 5, 'ng-container', 6)),
          2 & ye)
        ) {
          const ie = B.oxw(2);
          B.Q6J('listOfLocales', ie.locales)('id', 'drop2'),
            B.xp6(2),
            B.Q6J('ngForOf', ie.data);
        }
      }
      function Ee(ye, K) {
        if (
          (1 & ye &&
            (B.TgZ(0, 'section', 1),
            B.YNc(1, te, 2, 0, 'ng-container', 2),
            B.YNc(2, Ze, 3, 3, 'ng-template', null, 3, B.W1O),
            B.qZA()),
          2 & ye)
        ) {
          const ie = B.MAs(3),
            Ae = B.oxw();
          B.xp6(1), B.Q6J('ngIf', Ae.isLocaleListPage)('ngIfElse', ie);
        }
      }
      let de = (() => {
        class ye {
          constructor(ie, Ae, Ne, Te, ve) {
            if (
              ((this.broadcastService = ie),
              (this.router = Ae),
              (this.utilsService = Ne),
              (this.sharedService = Te),
              (this.route = ve),
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
              (this.routeSubscription = Ae.events.subscribe(Le => {
                if (Le instanceof H.m2) {
                  let we = Le.url.split('?')[0].split('/');
                  (this.defaultAccordionItem = we.pop()),
                    (this.currentExperienceType = we.pop()),
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
              let Le = localStorage.getItem('channel');
              Object.keys(C).includes(`${Le}`) &&
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
                .subscribe(ie => {
                  let Ae = location.pathname;
                  (Ae = Ae.replace('locales', '')),
                    (Ae = Ae.slice(1)),
                    console.log(Ae),
                    this.router.config.push({
                      path: `${Ae}configuration/:exp/:pageId`,
                      component: ee.H,
                      loadChildren: () =>
                        v
                          .e('common')
                          .then(v.bind(v, 6154))
                          .then(Ne => Ne.ConfigurationsModule),
                    }),
                    console.log(this.router.config),
                    this.router.navigate([
                      `${Ae}/configuration/${this.data[0].experienceType}/${this.data[0].channels[0].pageId}`,
                    ]);
                }),
              this.broadcastService.on(s.T.ACCORDION_EVENT).subscribe(ie => {
                if (
                  (ie.payload.channel &&
                    localStorage.setItem('channel', ie.payload.channel),
                  ie?.payload?.selectedPageId)
                ) {
                  console.log(ie.payload),
                    localStorage.setItem(
                      'experienceType',
                      ie.payload.accordionId
                    ),
                    ie.payload.channel &&
                      localStorage.setItem('channel', ie.payload.channel);
                  let Ae = location.pathname;
                  (Ae = Ae.replace('locales', '')), (Ae = Ae.slice(1));
                  let Ne = Ae.split('/');
                  (Ne = Ne.slice(0, Ne.length - 2)),
                    Ne.push(ie.payload.accordionId),
                    Ne.push(ie.payload.selectedPageId),
                    (Ae = Ne.join('/')),
                    console.log(Ae),
                    (this.parentMfe = 'dashboard')
                      ? (this.router.config.push(
                          { path: `${Ae}` },
                          { path: `mfe-dashboard/${Ae}` },
                          { path: `${location.pathname}/mfe-dashboard/${Ae}` }
                        ),
                        console.log(this.router.config),
                        Ae.includes('mfe-dashboard')
                          ? this.router.navigate([`${Ae}`])
                          : this.router.navigate([
                              `${location.pathname}/mfe-dashboard/${Ae}`,
                            ]))
                      : (this.router.config.push({
                          path: `${Ae}`,
                          component: ee.H,
                          loadChildren: () =>
                            v
                              .e('common')
                              .then(v.bind(v, 6154))
                              .then(Te => Te.ConfigurationsModule),
                        }),
                        console.log(this.router.config),
                        this.router.navigate(
                          [
                            `../../${ie.payload.accordionId}/${ie?.payload?.selectedPageId}`,
                          ],
                          { relativeTo: this.route }
                        ));
                }
              });
          }
          loadLocales() {
            (this.areLocalesLoaded = !1),
              (this.refNum = localStorage.getItem('refNum')),
              this.utilsService
                .getDistinctLocale(this.refNum, 'cx')
                .then(ie => {
                  (ie.locales = this.utilsService.getDropdownFormatList(
                    ie.locales,
                    'displayText'
                  )),
                    (this.locales = ie.locales),
                    (this.areLocalesLoaded = !0),
                    localStorage.getItem('locale')
                      ? localStorage.getItem('locale') !=
                          this.locales[0].locale &&
                        (localStorage.setItem('locale', this.locales[0].locale),
                        this.broadcastService.dispatch(
                          new I.q(s.T.LOCALES_LOADED_EVENT)
                        ))
                      : (localStorage.setItem('locale', this.locales[0].locale),
                        this.broadcastService.dispatch(
                          new I.q(s.T.LOCALES_LOADED_EVENT)
                        ));
                });
          }
          addTranslation() {
            this.sharedService
              .getI18nValues()
              .pipe((0, Q.U)(ie => ie))
              .subscribe(ie => {
                this.data = this.data.map(
                  Ae => (
                    (Ae.channels = Ae.channels.map(
                      Ne => (
                        (Ne.heading = ie[Ne?.heading]
                          ? ie[Ne?.heading]
                          : Ne?.heading),
                        (this.isDataLoaded = !0),
                        Ne
                      )
                    )),
                    (Ae.heading = ie[Ae?.heading]
                      ? ie[Ae?.heading]
                      : Ae?.heading),
                    Ae
                  )
                );
              });
          }
        }
        return (
          (ye.ɵfac = function (ie) {
            return new (ie || ye)(
              B.Y36(Y.M),
              B.Y36(H.F0),
              B.Y36(fe.F),
              B.Y36(ne.F),
              B.Y36(H.gz)
            );
          }),
          (ye.ɵcmp = B.Xpm({
            type: ye,
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
            template: function (ie, Ae) {
              1 & ie && B.YNc(0, Ee, 4, 2, 'section', 0),
                2 & ie && B.Q6J('ngIf', Ae.isDataLoaded && Ae.areLocalesLoaded);
            },
            styles: [
              '@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27pmO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27rWO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27rGO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27omO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}body[_ngcontent-%COMP%]{margin:0;font-family:Proxima Nova}[type=checkbox][_ngcontent-%COMP%], [type=radio][_ngcontent-%COMP%]{left:0px;box-sizing:border-box;padding:0}html[_ngcontent-%COMP%]{line-height:1.15;-webkit-text-size-adjust:100%}body[_ngcontent-%COMP%]{margin:0;background-color:#fff}main[_ngcontent-%COMP%]{display:block}h1[_ngcontent-%COMP%]{font-size:2em;margin:.67em 0}hr[_ngcontent-%COMP%]{box-sizing:content-box;height:0;overflow:visible}pre[_ngcontent-%COMP%]{font-family:monospace,monospace;font-size:1em}a[_ngcontent-%COMP%]{background-color:transparent}abbr[title][_ngcontent-%COMP%]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b[_ngcontent-%COMP%], strong[_ngcontent-%COMP%]{font-weight:bolder}code[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], samp[_ngcontent-%COMP%]{font-family:monospace,monospace;font-size:1em}small[_ngcontent-%COMP%]{font-size:80%}sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%]{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub[_ngcontent-%COMP%]{bottom:-.25em}sup[_ngcontent-%COMP%]{top:-.5em}img[_ngcontent-%COMP%]{border-style:none}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{overflow:visible}button[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{text-transform:none}button[_ngcontent-%COMP%], [type=button][_ngcontent-%COMP%], [type=reset][_ngcontent-%COMP%], [type=submit][_ngcontent-%COMP%]{-webkit-appearance:button}button[_ngcontent-%COMP%]::-moz-focus-inner, [type=button][_ngcontent-%COMP%]::-moz-focus-inner, [type=reset][_ngcontent-%COMP%]::-moz-focus-inner, [type=submit][_ngcontent-%COMP%]::-moz-focus-inner{border-style:none;padding:0}button[_ngcontent-%COMP%]:-moz-focusring, [type=button][_ngcontent-%COMP%]:-moz-focusring, [type=reset][_ngcontent-%COMP%]:-moz-focusring, [type=submit][_ngcontent-%COMP%]:-moz-focusring{outline:1px dotted ButtonText}fieldset[_ngcontent-%COMP%]{padding:.35em .75em .625em}legend[_ngcontent-%COMP%]{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress[_ngcontent-%COMP%]{vertical-align:baseline}textarea[_ngcontent-%COMP%]{overflow:auto}[type=checkbox][_ngcontent-%COMP%], [type=radio][_ngcontent-%COMP%]{box-sizing:border-box;padding:0}[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, [type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button{height:auto}[type=search][_ngcontent-%COMP%]{-webkit-appearance:textfield;outline-offset:-2px}[type=search][_ngcontent-%COMP%]::-webkit-search-decoration{-webkit-appearance:none}[_ngcontent-%COMP%]::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details[_ngcontent-%COMP%]{display:block}summary[_ngcontent-%COMP%]{display:list-item}template[_ngcontent-%COMP%]{display:none}[hidden][_ngcontent-%COMP%]{display:none}.btn[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content;border:none;color:#fff;padding:12px 14px;width:150px;height:40px;background:#00838F;border-radius:4px}.btn-small[_ngcontent-%COMP%]{width:80px;height:30px;font-size:small;padding:8px 16px}.btn-small-outline[_ngcontent-%COMP%]{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-small-outline[_ngcontent-%COMP%]:hover{color:#fff;border:none}.btn-medium[_ngcontent-%COMP%]{width:120px;height:40px;font-size:medium;padding:8px 16px}.btn-medium-outline[_ngcontent-%COMP%]{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-medium-outline[_ngcontent-%COMP%]:hover{color:#fff;border:none}.btn-large[_ngcontent-%COMP%]{width:180px;height:50px;font-size:large;padding:4px 6px}.btn-large-outline[_ngcontent-%COMP%]{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-large-outline[_ngcontent-%COMP%]:hover{color:#fff;border:none}.btn-disabled[_ngcontent-%COMP%]{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04)}.btn-disabled[_ngcontent-%COMP%]:hover{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn[_ngcontent-%COMP%]:disabled{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn[_ngcontent-%COMP%]:disabled:hover{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn[_ngcontent-%COMP%]:hover{background:#29ABB9}.btn[_ngcontent-%COMP%]:active{background:#00838F}.sidebar-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px;width:100%;height:100vh;left:0px;background:#FFFFFF;box-shadow:inset -1px 0 #dfe3e6}app-accordion[_ngcontent-%COMP%], app-dropdown[_ngcontent-%COMP%]{position:relative;right:1px}.button[_ngcontent-%COMP%]{position:relative;right:1px;height:60px;background-color:#e0ffff}span[_ngcontent-%COMP%]{height:8px}',
            ],
          })),
          ye
        );
      })();
    },
    5289: (Xe, ge, v) => {
      v.d(ge, { T: () => s });
      var s = (() => {
        return (
          ((C = s || (s = {})).CLICKED_ON_NOTIFICATION =
            'CLICKED_ON_NOTIFICATION'),
          (C.SOCKET_EVENT = 'SOCKET_EVENT'),
          (C.TOGGLE_EVENT = 'TOGGLE_EVENT'),
          (C.CHECKBOX_EVENT = 'CHECKBOX_EVENT'),
          (C.RANGE_EMITTER = 'RANGE_EMITTER'),
          (C.RADIO_EMITTER = 'RADIO_EMITTER'),
          (C.CLICKED_ON_LOCALE_DROPDOWN = 'CLICKED_ON_LOCALE_DROPDOWN'),
          (C.ACCORDION_EVENT_INIT = 'ACCORDION_EVENT_INIT'),
          (C.ACCORDION_EVENT = 'ACCORDION_EVENT'),
          (C.SELECTED_PAGE = 'SELECTED_PAGE'),
          (C.DROPDOWN_EVENT = 'DROPDOWN_EVENT'),
          (C.SELECTED_LOCALE_EVENT = 'SELECTED_LOCALE_EVENT'),
          (C.AVAILABLE_LOCALES_EVENT = 'AVAILABLE_LOCALES_EVENT'),
          (C.SHOW_NOTIFICATION_EVENT = 'SHOW_NOTIFICATION_EVENT'),
          (C.HIDE_NOTIFICATION_EVENT = 'HIDE_NOTIFICATION_EVENT'),
          (C.LOCALES_LOADED_EVENT = 'LOCALES_LOADED_EVENT'),
          s
        );
        var C;
      })();
    },
    8246: (Xe, ge, v) => {
      v.d(ge, { y: () => H });
      var s = v(4650),
        C = v(1481);
      let H = (() => {
        class Q {
          constructor(I) {
            this.sanitizer = I;
          }
          transform(I, B) {
            switch (B) {
              case 'html':
                return this.sanitizer.bypassSecurityTrustHtml(I);
              case 'style':
                return this.sanitizer.bypassSecurityTrustStyle(I);
              case 'script':
                return this.sanitizer.bypassSecurityTrustScript(I);
              case 'url':
                return this.sanitizer.bypassSecurityTrustUrl(I);
              case 'resourceUrl':
                return this.sanitizer.bypassSecurityTrustResourceUrl(I);
              default:
                throw new Error(`Invalid safe type specified: ${B}`);
            }
          }
        }
        return (
          (Q.ɵfac = function (I) {
            return new (I || Q)(s.Y36(C.H7, 16));
          }),
          (Q.ɵpipe = s.Yjl({ name: 'safe', type: Q, pure: !0 })),
          Q
        );
      })();
    },
    319: (Xe, ge, v) => {
      v.d(ge, { q: () => s });
      class s {
        constructor(H, Q) {
          (this.type = H), (this.payload = Q);
        }
      }
    },
    9590: (Xe, ge, v) => {
      v.d(ge, { M: () => I });
      var s = v(7579),
        C = v(8306),
        H = v(3099),
        Q = v(9300),
        ee = v(4650);
      let I = (() => {
        class B {
          constructor() {
            (this.eventBroker = new s.x()),
              (this.observable = new C.y(fe => {}).pipe((0, H.B)()));
          }
          on(fe) {
            return this.eventBroker.pipe((0, Q.h)(ne => ne.type === fe));
          }
          dispatch(fe) {
            this.eventBroker.next(fe);
          }
        }
        return (
          (B.ɵfac = function (fe) {
            return new (fe || B)();
          }),
          (B.ɵprov = ee.Yz7({ token: B, factory: B.ɵfac, providedIn: 'root' })),
          B
        );
      })();
    },
    4172: (Xe, ge, v) => {
      v.d(ge, { O: () => I });
      var s = v(529),
        C = v(4004),
        H = (() => {
          return (
            ((B = H || (H = {})).HTTP_GET = 'GET'),
            (B.HTTP_POST = 'POST'),
            (B.HTTP_PUT = 'PUT'),
            (B.HTTP_DELETE = 'DELETE'),
            (B.HTTP_PATCH = 'PATCH'),
            H
          );
          var B;
        })(),
        Q = v(2340),
        ee = v(4650);
      let I = (() => {
        class B {
          constructor(fe) {
            this.httpClient = fe;
          }
          httpPost(fe, ne, te) {
            var Ze = {
              type: 'api',
              service: ne,
              api: fe,
              authConfig: { token: 'local' },
              request_object: te,
            };
            return (
              (Ze.request_type = H.HTTP_POST),
              this.cmpHubPostAPI(Q.N.testingRestApi, Ze)
            );
          }
          httpPatch(fe, ne, te) {
            var Ze = {
              type: 'api',
              service: ne,
              api: fe,
              authConfig: { token: 'local' },
              request_object: te,
            };
            return (
              (Ze.request_type = H.HTTP_PATCH),
              this.cmpHubPostAPI(Q.N.testingRestApi, Ze)
            );
          }
          httpGet(fe, ne, te) {
            var Ze = {
              type: 'api',
              service: ne,
              api: fe,
              authConfig: { token: 'local' },
              request_object: te,
            };
            return (
              (Ze.request_type = H.HTTP_GET),
              this.cmpHubPostAPI(Q.N.testingRestApi, Ze)
            );
          }
          httpDelete(fe, ne, te) {
            var Ze = {
              type: 'api',
              service: ne,
              api: fe,
              authConfig: { token: 'local' },
              request_object: te,
            };
            return (
              (Ze.request_type = H.HTTP_DELETE),
              this.cmpHubPostAPI(Q.N.testingRestApi, Ze)
            );
          }
          cmpHubPostAPI(fe, ne) {
            new s.WM()
              .set('content-type', 'application/json')
              .set('Access-Control-Allow-Origin', '*');
            let oe = ne || {},
              Ze = fe;
            return (
              (oe.token = 'local'),
              this.httpClient.post(Ze, oe).pipe(
                (0, C.U)(Ee => {
                  if (Ee.data) {
                    let de = Ee.data ? Ee.data : {};
                    return (
                      (de.requestObject = oe?.request_object),
                      (de.productRequestObject = oe?.request_object),
                      de
                    );
                  }
                  if (Ee.error) return Ee.error.response;
                })
              )
            );
          }
        }
        return (
          (B.ɵfac = function (fe) {
            return new (fe || B)(ee.LFG(s.eN));
          }),
          (B.ɵprov = ee.Yz7({ token: B, factory: B.ɵfac, providedIn: 'root' })),
          B
        );
      })();
    },
    1094: (Xe, ge, v) => {
      v.d(ge, { F: () => H });
      var s = v(4650),
        C = v(4172);
      let H = (() => {
        class Q {
          constructor(I) {
            this.httpService = I;
          }
          formatLocale(I) {
            return I.toUpperCase().split('_').join(' | ');
          }
          checkIfCustomerIsProvisioned(I, B) {
            return new Promise((Y, fe) => {
              I &&
                B &&
                this.httpService
                  .httpGet(I, 'chatbot_configurations_api')
                  .subscribe(ne => {
                    Y(ne);
                  });
            });
          }
          getRequiredSkeleton() {}
          getDistinctLocalesPath(I, B) {
            return `v1/customers/${I}/${B}/distinct-locales`;
          }
          getChatbotConfigurationsPath(I, B, Y, fe) {
            return `v1/configurations/${I}/${B}/${Y}/${fe}`;
          }
          getDropdownFormatList(I, B) {
            return I.map(Y => ((Y.item = Y[B]), { listItem: Y, ...Y })), I;
          }
          getDisplayText(I, B) {
            return `${I} ${this.formatLocale(B)}`;
          }
          getDistinctLocale(I, B) {
            let Y = this.getDistinctLocalesPath(I, B);
            return new Promise((fe, ne) => {
              this.httpService
                .httpGet(Y, 'chatbot_configurations_api')
                .subscribe(te => {
                  te.locales.map(Ze => {
                    Ze.displayText = this.getDisplayText(
                      te.customerName,
                      Ze.locale
                    );
                  }),
                    fe(te);
                });
            });
          }
        }
        return (
          (Q.ɵfac = function (I) {
            return new (I || Q)(s.LFG(C.O));
          }),
          (Q.ɵprov = s.Yz7({ token: Q, factory: Q.ɵfac, providedIn: 'root' })),
          Q
        );
      })();
    },
    613: (Xe, ge, v) => {
      v.d(ge, { m: () => Le });
      var s = v(6895),
        C = v(433),
        H = v(529),
        Q = v(5289),
        ee = v(319),
        I = v(4650),
        B = v(9590);
      const Y = function (we) {
        return { 'selected-item': we };
      };
      function fe(we, Ie) {
        if (1 & we) {
          const X = I.EpF();
          I.TgZ(0, 'li', 12),
            I.NdJ('click', function () {
              const J = I.CHM(X).$implicit,
                j = I.oxw(3);
              return I.KtG(j.selectOption(J));
            }),
            I._uU(1),
            I.qZA();
        }
        if (2 & we) {
          const X = Ie.$implicit,
            Pe = I.oxw(3);
          I.Q6J('id', X.locale)('ngClass', I.VKq(3, Y, X.item == Pe.title)),
            I.xp6(1),
            I.hij(' ', X.item, ' ');
        }
      }
      function ne(we, Ie) {
        if (
          (1 & we && (I.TgZ(0, 'ul'), I.YNc(1, fe, 2, 5, 'li', 11), I.qZA()),
          2 & we)
        ) {
          const X = I.oxw(2);
          I.xp6(1), I.Q6J('ngForOf', X.listOfLocales);
        }
      }
      function te(we, Ie) {
        if (
          (1 & we &&
            (I.O4$(),
            I.kcU(),
            I.TgZ(0, 'section', 9),
            I.YNc(1, ne, 2, 1, 'ul', 10),
            I.qZA()),
          2 & we)
        ) {
          const X = I.oxw();
          I.xp6(1), I.Q6J('ngIf', X.listOfLocales.length);
        }
      }
      const oe = function (we) {
        return { transform: we };
      };
      let Ze = (() => {
        class we {
          constructor(X) {
            (this.broadcastService = X),
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
          onWindowClick(X) {
            'dropdown' != X.id &&
              this.isDropdownListVisible &&
              (this.isDropdownListVisible = !this.isDropdownListVisible);
          }
          ngOnInit() {
            (this.locale = localStorage.getItem('locale')),
              this.listOfLocales?.forEach(X => {
                X.locale == this.locale && (this.title = X.item);
              }),
              (this.selectedItem = new C.cw({
                name: new C.NI(this.title, [C.kI.required]),
              })),
              this.broadcastService.on(Q.T.DROPDOWN_EVENT).subscribe(X => {
                this.isDropdownListVisible =
                  X.payload.data.id == this.id && !this.isDropdownListVisible;
              });
          }
          ngOnChanges() {
            (this.title = this.listOfLocales
              ? this.listOfLocales[0]?.item
              : ''),
              (this.selectedItem = new C.cw({
                name: new C.NI(this.title, [C.kI.required]),
              })),
              this.broadcastService.on(Q.T.DROPDOWN_EVENT).subscribe(X => {
                this.isDropdownListVisible =
                  X.payload.data.id == this.id && !this.isDropdownListVisible;
              });
          }
          selectOption(X) {
            (this.isDropdownListVisible = !this.isDropdownListVisible),
              (this.title = X.item),
              this.selectedItem.patchValue({ name: X.item }),
              localStorage.setItem('locale', X?.locale),
              this.broadcastService.dispatch(
                new ee.q(Q.T.CLICKED_ON_LOCALE_DROPDOWN, {
                  name: Q.T.CLICKED_ON_LOCALE_DROPDOWN,
                  data: { selectedItem: X },
                })
              ),
              localStorage.setItem('locale', X?.locale);
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
          (we.ɵfac = function (X) {
            return new (X || we)(I.Y36(B.M));
          }),
          (we.ɵcmp = I.Xpm({
            type: we,
            selectors: [['app-dropdown']],
            hostBindings: function (X, Pe) {
              1 & X &&
                I.NdJ(
                  'click',
                  function (J) {
                    return Pe.onWindowClick(J.target);
                  },
                  !1,
                  I.Jf7
                );
            },
            inputs: { id: 'id', listOfLocales: 'listOfLocales' },
            features: [I.TTD],
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
            template: function (X, Pe) {
              1 & X &&
                (I.TgZ(0, 'main', 0)(1, 'form', 1),
                I.NdJ('ngSubmit', function () {
                  return Pe.selectOption;
                }),
                I._UZ(2, 'input', 2),
                I.TgZ(3, 'p', 3),
                I.NdJ('click', function () {
                  return Pe.onTitleClick();
                }),
                I.TgZ(4, 'span', 4),
                I._uU(5),
                I.qZA(),
                I.TgZ(6, 'span', 5),
                I.O4$(),
                I.TgZ(7, 'svg', 6),
                I._UZ(8, 'path', 7),
                I.qZA()()(),
                I.YNc(9, te, 2, 1, 'section', 8),
                I.qZA()()),
                2 & X &&
                  (I.Q6J('id', Pe.id),
                  I.xp6(1),
                  I.Q6J('formGroup', Pe.selectedItem),
                  I.xp6(4),
                  I.Oqu(Pe.title),
                  I.xp6(1),
                  I.Q6J(
                    'ngStyle',
                    I.VKq(
                      5,
                      oe,
                      Pe.isDropdownListVisible
                        ? 'rotate(180deg)'
                        : 'rotate(0deg)'
                    )
                  ),
                  I.xp6(3),
                  I.Q6J('ngIf', Pe.isDropdownListVisible));
            },
            dependencies: [
              s.mk,
              s.sg,
              s.O5,
              s.PC,
              C._Y,
              C.Fj,
              C.JJ,
              C.JL,
              C.sg,
              C.u,
            ],
            styles: [
              '@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27pmO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27rWO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27rGO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27omO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}body[_ngcontent-%COMP%]{margin:0;font-family:Proxima Nova}[type=checkbox][_ngcontent-%COMP%], [type=radio][_ngcontent-%COMP%]{left:0px;box-sizing:border-box;padding:0}html[_ngcontent-%COMP%]{line-height:1.15;-webkit-text-size-adjust:100%}body[_ngcontent-%COMP%]{margin:0;background-color:#fff}main[_ngcontent-%COMP%]{display:block}h1[_ngcontent-%COMP%]{font-size:2em;margin:.67em 0}hr[_ngcontent-%COMP%]{box-sizing:content-box;height:0;overflow:visible}pre[_ngcontent-%COMP%]{font-family:monospace,monospace;font-size:1em}a[_ngcontent-%COMP%]{background-color:transparent}abbr[title][_ngcontent-%COMP%]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b[_ngcontent-%COMP%], strong[_ngcontent-%COMP%]{font-weight:bolder}code[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], samp[_ngcontent-%COMP%]{font-family:monospace,monospace;font-size:1em}small[_ngcontent-%COMP%]{font-size:80%}sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%]{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub[_ngcontent-%COMP%]{bottom:-.25em}sup[_ngcontent-%COMP%]{top:-.5em}img[_ngcontent-%COMP%]{border-style:none}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{overflow:visible}button[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{text-transform:none}button[_ngcontent-%COMP%], [type=button][_ngcontent-%COMP%], [type=reset][_ngcontent-%COMP%], [type=submit][_ngcontent-%COMP%]{-webkit-appearance:button}button[_ngcontent-%COMP%]::-moz-focus-inner, [type=button][_ngcontent-%COMP%]::-moz-focus-inner, [type=reset][_ngcontent-%COMP%]::-moz-focus-inner, [type=submit][_ngcontent-%COMP%]::-moz-focus-inner{border-style:none;padding:0}button[_ngcontent-%COMP%]:-moz-focusring, [type=button][_ngcontent-%COMP%]:-moz-focusring, [type=reset][_ngcontent-%COMP%]:-moz-focusring, [type=submit][_ngcontent-%COMP%]:-moz-focusring{outline:1px dotted ButtonText}fieldset[_ngcontent-%COMP%]{padding:.35em .75em .625em}legend[_ngcontent-%COMP%]{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress[_ngcontent-%COMP%]{vertical-align:baseline}textarea[_ngcontent-%COMP%]{overflow:auto}[type=checkbox][_ngcontent-%COMP%], [type=radio][_ngcontent-%COMP%]{box-sizing:border-box;padding:0}[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, [type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button{height:auto}[type=search][_ngcontent-%COMP%]{-webkit-appearance:textfield;outline-offset:-2px}[type=search][_ngcontent-%COMP%]::-webkit-search-decoration{-webkit-appearance:none}[_ngcontent-%COMP%]::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details[_ngcontent-%COMP%]{display:block}summary[_ngcontent-%COMP%]{display:list-item}template[_ngcontent-%COMP%]{display:none}[hidden][_ngcontent-%COMP%]{display:none}.btn[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content;border:none;color:#fff;padding:12px 14px;width:150px;height:40px;background:#00838F;border-radius:4px}.btn-small[_ngcontent-%COMP%]{width:80px;height:30px;font-size:small;padding:8px 16px}.btn-small-outline[_ngcontent-%COMP%]{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-small-outline[_ngcontent-%COMP%]:hover{color:#fff;border:none}.btn-medium[_ngcontent-%COMP%]{width:120px;height:40px;font-size:medium;padding:8px 16px}.btn-medium-outline[_ngcontent-%COMP%]{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-medium-outline[_ngcontent-%COMP%]:hover{color:#fff;border:none}.btn-large[_ngcontent-%COMP%]{width:180px;height:50px;font-size:large;padding:4px 6px}.btn-large-outline[_ngcontent-%COMP%]{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-large-outline[_ngcontent-%COMP%]:hover{color:#fff;border:none}.btn-disabled[_ngcontent-%COMP%]{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04)}.btn-disabled[_ngcontent-%COMP%]:hover{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn[_ngcontent-%COMP%]:disabled{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn[_ngcontent-%COMP%]:disabled:hover{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn[_ngcontent-%COMP%]:hover{background:#29ABB9}.btn[_ngcontent-%COMP%]:active{background:#00838F}.mfe-dropdown[_ngcontent-%COMP%]{cursor:pointer;font-family:Proxima Nova}.mfe-dropdown[_ngcontent-%COMP%]   .mfe-dropdown-title[_ngcontent-%COMP%]{margin:0;border:1px solid #FFFFFF;padding:12px 16px;font-style:normal;font-weight:400;font-size:14px;line-height:24px;background:#FFFFFF;box-shadow:inset 0 -1px #edf0f1;display:flex;justify-content:space-between;align-items:center}.mfe-dropdown[_ngcontent-%COMP%]   .mfe-dropdown-menu[_ngcontent-%COMP%]{position:absolute;left:10px;z-index:1;width:92%;padding:4px;margin:-15px auto;background:#FFFFFF;box-shadow:0 0 8px #00000026;border-radius:2px;max-height:224px}.mfe-dropdown[_ngcontent-%COMP%]   .mfe-dropdown-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{width:98%;overflow-y:scroll;max-height:224px;padding:0;margin:0}.mfe-dropdown[_ngcontent-%COMP%]   .mfe-dropdown-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none;font-style:normal;font-weight:400;font-size:14px;line-height:20px;color:#4b6479;padding:12px 16px}.mfe-dropdown[_ngcontent-%COMP%]   .mfe-dropdown-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background:#F7F9FA;color:#00838f}.mfe-dropdown[_ngcontent-%COMP%]   .mfe-dropdown-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%]{color:#00838f}[_ngcontent-%COMP%]::-webkit-scrollbar{width:5px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#FFFFFF}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#bdc1cc;width:5px;border-radius:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#555}',
            ],
          })),
          we
        );
      })();
      var Ee = v(542),
        de = v(8246);
      const ye = function (we) {
          return { background: we };
        },
        K = function (we) {
          return { color: we };
        };
      function ie(we, Ie) {
        if (1 & we) {
          const X = I.EpF();
          I.ynx(0),
            I.TgZ(1, 'div', 9),
            I.NdJ('click', function () {
              const J = I.CHM(X).$implicit,
                j = I.oxw(2);
              return I.KtG(j.onBotCardClick(J));
            }),
            I.TgZ(2, 'span', 10),
            I._uU(3),
            I.qZA()(),
            I.BQk();
        }
        if (2 & we) {
          const X = Ie.$implicit,
            Pe = I.oxw(2);
          I.xp6(1),
            I.s9C('id', X.pageId),
            I.Q6J(
              'ngStyle',
              I.VKq(
                5,
                ye,
                Pe.id === Pe.currentOpenAccordion &&
                  X.pageId === Pe.defaultPageId
                  ? '#F7F9FA'
                  : '#FFFFFF'
              )
            ),
            I.xp6(1),
            I.s9C('id', X.pageId),
            I.Q6J(
              'ngStyle',
              I.VKq(
                7,
                K,
                Pe.id === Pe.currentOpenAccordion &&
                  X.pageId === Pe.defaultPageId
                  ? '#00838F'
                  : '#4B6479'
              )
            ),
            I.xp6(1),
            I.Oqu(X.heading);
        }
      }
      function Ae(we, Ie) {
        if (
          (1 & we &&
            (I.O4$(),
            I.kcU(),
            I.TgZ(0, 'div', 7),
            I.YNc(1, ie, 4, 9, 'ng-container', 8),
            I.qZA()),
          2 & we)
        ) {
          const X = I.oxw();
          I.xp6(1), I.Q6J('ngForOf', X.pages);
        }
      }
      const Ne = function (we) {
        return { transform: we };
      };
      let Te = (() => {
        class we {
          constructor(X, Pe, G) {
            (this.broadcastService = X),
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
                new ee.q(Q.T.ACCORDION_EVENT_INIT, {
                  accordionId: this.id,
                  isAccordionOpen: this.isShowPages,
                  experienceType: this.experienceType,
                  page: this.defaultPageId,
                  heading: this.pages.filter(
                    X => X.pageId == this.defaultPageId
                  )[0]?.heading,
                  channel: this.defaultPageId,
                })
              );
          }
          ngOnInit() {
            (this.currentOpenAccordion =
              localStorage.getItem('experienceType')),
              (this.selectedPageId = this.pages.some(
                X => X.pageId === this.defaultPageId
              )
                ? this.defaultPageId
                : ''),
              this.id === this.currentOpenAccordion &&
                this.defaultPageId === this.selectedPageId &&
                ((this.isShowPages = !0),
                this.isShowPages &&
                  this.broadcastService.dispatch(
                    new ee.q(Q.T.ACCORDION_EVENT_INIT, {
                      accordionId: this.id,
                      isAccordionOpen: this.isShowPages,
                      experienceType: this.experienceType,
                      page: this.defaultPageId,
                      heading: this.pages.filter(
                        X => X.pageId == this.defaultPageId
                      )[0]?.heading,
                      channel: this.defaultPageId,
                    })
                  )),
              this.broadcastService.on(Q.T.ACCORDION_EVENT).subscribe(X => {
                (this.accordionData = X.payload),
                  this.accordionData.accordionId === this.id
                    ? (this.isShowPages = !this.isShowPages)
                    : ((this.isShowPages = !1), (this.selectedPageId = ''));
              });
          }
          onClick() {
            this.broadcastService.dispatch(
              new ee.q(Q.T.ACCORDION_EVENT, {
                accordionId: this.id,
                isAccordionOpen: this.isShowPages,
              })
            );
          }
          onBotCardClick(X) {
            (this.isShowPages = !this.isShowPages),
              (this.selectedPageId = X.pageId),
              (this.currentOpenAccordion = this.id),
              this.broadcastService.dispatch(
                new ee.q(Q.T.ACCORDION_EVENT, {
                  selectedPageId: this.selectedPageId,
                  accordionId: this.id,
                  isAccordionOpen: this.isShowPages,
                  experienceType: this.experienceType,
                  heading: X.heading,
                  channel: X.channel,
                  page: this.defaultPageId,
                })
              );
          }
        }
        return (
          (we.ɵfac = function (X) {
            return new (X || we)(I.Y36(B.M), I.Y36(Ee.F0), I.Y36(Ee.gz));
          }),
          (we.ɵcmp = I.Xpm({
            type: we,
            selectors: [['app-accordion']],
            inputs: {
              pages: 'pages',
              experienceType: 'experienceType',
              defaultPageId: 'defaultPageId',
              svg: 'svg',
              isShowPages: 'isShowPages',
              id: 'id',
            },
            features: [I.TTD],
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
            template: function (X, Pe) {
              1 & X &&
                (I.TgZ(0, 'div', 0),
                I.NdJ('click', function () {
                  return Pe.onClick();
                }),
                I.TgZ(1, 'div', 1),
                I._UZ(2, 'span', 2),
                I.ALo(3, 'safe'),
                I.TgZ(4, 'span', 3),
                I._uU(5),
                I.qZA()(),
                I.O4$(),
                I.TgZ(6, 'svg', 4),
                I._UZ(7, 'path', 5),
                I.qZA()(),
                I.YNc(8, Ae, 2, 1, 'div', 6)),
                2 & X &&
                  (I.xp6(2),
                  I.Q6J('innerHTML', I.xi3(3, 4, Pe.svg, 'html'), I.oJD),
                  I.xp6(3),
                  I.Oqu(Pe.experienceType),
                  I.xp6(1),
                  I.Q6J(
                    'ngStyle',
                    I.VKq(7, Ne, Pe.isShowPages ? '' : 'rotate(90deg)')
                  ),
                  I.xp6(2),
                  I.Q6J('ngIf', Pe.isShowPages));
            },
            dependencies: [s.sg, s.O5, s.PC, de.y],
            styles: [
              '@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27pmO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27rWO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27rGO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27omO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}body[_ngcontent-%COMP%]{margin:0;font-family:Proxima Nova}[type=checkbox][_ngcontent-%COMP%], [type=radio][_ngcontent-%COMP%]{left:0px;box-sizing:border-box;padding:0}html[_ngcontent-%COMP%]{line-height:1.15;-webkit-text-size-adjust:100%}body[_ngcontent-%COMP%]{margin:0;background-color:#fff}main[_ngcontent-%COMP%]{display:block}h1[_ngcontent-%COMP%]{font-size:2em;margin:.67em 0}hr[_ngcontent-%COMP%]{box-sizing:content-box;height:0;overflow:visible}pre[_ngcontent-%COMP%]{font-family:monospace,monospace;font-size:1em}a[_ngcontent-%COMP%]{background-color:transparent}abbr[title][_ngcontent-%COMP%]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b[_ngcontent-%COMP%], strong[_ngcontent-%COMP%]{font-weight:bolder}code[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], samp[_ngcontent-%COMP%]{font-family:monospace,monospace;font-size:1em}small[_ngcontent-%COMP%]{font-size:80%}sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%]{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub[_ngcontent-%COMP%]{bottom:-.25em}sup[_ngcontent-%COMP%]{top:-.5em}img[_ngcontent-%COMP%]{border-style:none}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{overflow:visible}button[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{text-transform:none}button[_ngcontent-%COMP%], [type=button][_ngcontent-%COMP%], [type=reset][_ngcontent-%COMP%], [type=submit][_ngcontent-%COMP%]{-webkit-appearance:button}button[_ngcontent-%COMP%]::-moz-focus-inner, [type=button][_ngcontent-%COMP%]::-moz-focus-inner, [type=reset][_ngcontent-%COMP%]::-moz-focus-inner, [type=submit][_ngcontent-%COMP%]::-moz-focus-inner{border-style:none;padding:0}button[_ngcontent-%COMP%]:-moz-focusring, [type=button][_ngcontent-%COMP%]:-moz-focusring, [type=reset][_ngcontent-%COMP%]:-moz-focusring, [type=submit][_ngcontent-%COMP%]:-moz-focusring{outline:1px dotted ButtonText}fieldset[_ngcontent-%COMP%]{padding:.35em .75em .625em}legend[_ngcontent-%COMP%]{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress[_ngcontent-%COMP%]{vertical-align:baseline}textarea[_ngcontent-%COMP%]{overflow:auto}[type=checkbox][_ngcontent-%COMP%], [type=radio][_ngcontent-%COMP%]{box-sizing:border-box;padding:0}[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, [type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button{height:auto}[type=search][_ngcontent-%COMP%]{-webkit-appearance:textfield;outline-offset:-2px}[type=search][_ngcontent-%COMP%]::-webkit-search-decoration{-webkit-appearance:none}[_ngcontent-%COMP%]::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details[_ngcontent-%COMP%]{display:block}summary[_ngcontent-%COMP%]{display:list-item}template[_ngcontent-%COMP%]{display:none}[hidden][_ngcontent-%COMP%]{display:none}.btn[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content;border:none;color:#fff;padding:12px 14px;width:150px;height:40px;background:#00838F;border-radius:4px}.btn-small[_ngcontent-%COMP%]{width:80px;height:30px;font-size:small;padding:8px 16px}.btn-small-outline[_ngcontent-%COMP%]{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-small-outline[_ngcontent-%COMP%]:hover{color:#fff;border:none}.btn-medium[_ngcontent-%COMP%]{width:120px;height:40px;font-size:medium;padding:8px 16px}.btn-medium-outline[_ngcontent-%COMP%]{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-medium-outline[_ngcontent-%COMP%]:hover{color:#fff;border:none}.btn-large[_ngcontent-%COMP%]{width:180px;height:50px;font-size:large;padding:4px 6px}.btn-large-outline[_ngcontent-%COMP%]{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-large-outline[_ngcontent-%COMP%]:hover{color:#fff;border:none}.btn-disabled[_ngcontent-%COMP%]{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04)}.btn-disabled[_ngcontent-%COMP%]:hover{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn[_ngcontent-%COMP%]:disabled{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn[_ngcontent-%COMP%]:disabled:hover{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn[_ngcontent-%COMP%]:hover{background:#29ABB9}.btn[_ngcontent-%COMP%]:active{background:#00838F}*[_ngcontent-%COMP%]{cursor:pointer;font-family:Proxima Nova}.section[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;background:#FFFFFF}.section[_ngcontent-%COMP%]   .group-1[_ngcontent-%COMP%]{display:flex;align-items:flex-start;padding:14.75px 25.75px}.section[_ngcontent-%COMP%]   .group-1[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:14px;padding:0 10px;color:#1c2024}.section[_ngcontent-%COMP%]   .svg2[_ngcontent-%COMP%]{position:absolute;right:25.55px;top:21px}.accodion-container[_ngcontent-%COMP%]{display:flex;position:relative;flex-direction:column;background:#FFFFFF;margin-top:4px}.botcard[_ngcontent-%COMP%]{position:relative;padding:9px 24px 9px 8px;margin:0 48px;background:#FFFFFF;border-radius:4px}.botcard-title[_ngcontent-%COMP%]{position:relative;font-style:normal;font-weight:400;font-size:14px;line-height:22px;color:#4b6479}',
            ],
          })),
          we
        );
      })();
      var ve = v(2691);
      let Le = (() => {
        class we {}
        return (
          (we.ɵfac = function (X) {
            return new (X || we)();
          }),
          (we.ɵmod = I.oAB({ type: we })),
          (we.ɵinj = I.cJS({ imports: [s.ez, C.u5, C.UX, H.JF] })),
          we
        );
      })();
      I.B6R(ve.k, [s.sg, s.O5, Te, Ze], []);
    },
    7420: (Xe, ge, v) => {
      v.d(ge, { F: () => ee });
      var s = v(2340),
        C = v(4650),
        H = v(529),
        Q = v(4172);
      let ee = (() => {
        class I {
          constructor(Y, fe) {
            (this.httpClient = Y), (this.httpService = fe);
          }
          getDashboardSchema(Y) {
            return this.httpService.httpGet(
              `${s.N.dashboardSchema}${Y}`,
              'chatbot_management_api'
            );
          }
          getDashboardSchemaFromLocale(Y) {
            const fe = `${s.N.dashboardSchema}${Y}.json?v=${Date.now()}`;
            return this.httpClient.get(fe);
          }
          getI18nValues() {
            return this.httpClient.get(
              'https://api.npoint.io/abcca999b018210fb3fd'
            );
          }
        }
        return (
          (I.ɵfac = function (Y) {
            return new (Y || I)(C.LFG(H.eN), C.LFG(Q.O));
          }),
          (I.ɵprov = C.Yz7({ token: I, factory: I.ɵfac, providedIn: 'root' })),
          I
        );
      })();
    },
    2340: (Xe, ge, v) => {
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
    2987: (Xe, ge, v) => {
      var s = v(1481),
        C = v(4650),
        H = v(6895),
        Q = v(529),
        ee = v(7579);
      const I = { now: () => (I.delegate || Date).now(), delegate: void 0 };
      class B extends ee.x {
        constructor(pe = 1 / 0, ce = 1 / 0, He = I) {
          super(),
            (this._bufferSize = pe),
            (this._windowTime = ce),
            (this._timestampProvider = He),
            (this._buffer = []),
            (this._infiniteTimeWindow = !0),
            (this._infiniteTimeWindow = ce === 1 / 0),
            (this._bufferSize = Math.max(1, pe)),
            (this._windowTime = Math.max(1, ce));
        }
        next(pe) {
          const {
            isStopped: ce,
            _buffer: He,
            _infiniteTimeWindow: rt,
            _timestampProvider: ft,
            _windowTime: xt,
          } = this;
          ce || (He.push(pe), !rt && He.push(ft.now() + xt)),
            this._trimBuffer(),
            super.next(pe);
        }
        _subscribe(pe) {
          this._throwIfClosed(), this._trimBuffer();
          const ce = this._innerSubscribe(pe),
            { _infiniteTimeWindow: He, _buffer: rt } = this,
            ft = rt.slice();
          for (let xt = 0; xt < ft.length && !pe.closed; xt += He ? 1 : 2)
            pe.next(ft[xt]);
          return this._checkFinalizedStatuses(pe), ce;
        }
        _trimBuffer() {
          const {
              _bufferSize: pe,
              _timestampProvider: ce,
              _buffer: He,
              _infiniteTimeWindow: rt,
            } = this,
            ft = (rt ? 1 : 2) * pe;
          if (
            (pe < 1 / 0 && ft < He.length && He.splice(0, He.length - ft), !rt)
          ) {
            const xt = ce.now();
            let lt = 0;
            for (let St = 1; St < He.length && He[St] <= xt; St += 2) lt = St;
            lt && He.splice(0, lt + 1);
          }
        }
      }
      var Y = v(6451),
        fe = v(3900),
        ne = v(4004);
      const te = {
        schedule(Oe, pe) {
          const ce = setTimeout(Oe, pe);
          return () => clearTimeout(ce);
        },
        scheduleBeforeRender(Oe) {
          if (typeof window > 'u') return te.schedule(Oe, 0);
          if (typeof window.requestAnimationFrame > 'u')
            return te.schedule(Oe, 16);
          const pe = window.requestAnimationFrame(Oe);
          return () => window.cancelAnimationFrame(pe);
        },
      };
      let ye;
      function ve(Oe, pe, ce) {
        let He = ce;
        return (
          (function Ze(Oe) {
            return !!Oe && Oe.nodeType === Node.ELEMENT_NODE;
          })(Oe) &&
            pe.some(
              (rt, ft) =>
                !(
                  '*' === rt ||
                  !(function K(Oe, pe) {
                    if (!ye) {
                      const ce = Element.prototype;
                      ye =
                        ce.matches ||
                        ce.matchesSelector ||
                        ce.mozMatchesSelector ||
                        ce.msMatchesSelector ||
                        ce.oMatchesSelector ||
                        ce.webkitMatchesSelector;
                    }
                    return Oe.nodeType === Node.ELEMENT_NODE && ye.call(Oe, pe);
                  })(Oe, rt) ||
                  ((He = ft), 0)
                )
            ),
          He
        );
      }
      class we {
        constructor(pe, ce) {
          this.componentFactory = ce.get(C._Vd).resolveComponentFactory(pe);
        }
        create(pe) {
          return new Ie(this.componentFactory, pe);
        }
      }
      class Ie {
        constructor(pe, ce) {
          (this.componentFactory = pe),
            (this.injector = ce),
            (this.eventEmitters = new B(1)),
            (this.events = this.eventEmitters.pipe(
              (0, fe.w)(He => (0, Y.T)(...He))
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
              this.componentFactory.inputs.map(({ propName: He }) => He)
            )),
            (this.ngZone = this.injector.get(C.R0b)),
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
              (this.scheduledDestroyFn = te.schedule(() => {
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
        setInputValue(pe, ce) {
          this.runInZone(() => {
            null !== this.componentRef
              ? ((function ie(Oe, pe) {
                  return Oe === pe || (Oe != Oe && pe != pe);
                })(ce, this.getInputValue(pe)) &&
                  (void 0 !== ce || !this.unchangedInputs.has(pe))) ||
                (this.recordInputChange(pe, ce),
                this.unchangedInputs.delete(pe),
                (this.hasInputChanges = !0),
                (this.componentRef.instance[pe] = ce),
                this.scheduleDetectChanges())
              : this.initialInputValues.set(pe, ce);
          });
        }
        initializeComponent(pe) {
          const ce = C.zs3.create({ providers: [], parent: this.injector }),
            He = (function Te(Oe, pe) {
              const ce = Oe.childNodes,
                He = pe.map(() => []);
              let rt = -1;
              pe.some((ft, xt) => '*' === ft && ((rt = xt), !0));
              for (let ft = 0, xt = ce.length; ft < xt; ++ft) {
                const lt = ce[ft],
                  St = ve(lt, pe, rt);
                -1 !== St && He[St].push(lt);
              }
              return He;
            })(pe, this.componentFactory.ngContentSelectors);
          (this.componentRef = this.componentFactory.create(ce, He, pe)),
            (this.viewChangeDetectorRef = this.componentRef.injector.get(
              C.sBO
            )),
            (this.implementsOnChanges = (function Ee(Oe) {
              return 'function' == typeof Oe;
            })(this.componentRef.instance.ngOnChanges)),
            this.initializeInputs(),
            this.initializeOutputs(this.componentRef),
            this.detectChanges(),
            this.injector.get(C.z2F).attachView(this.componentRef.hostView);
        }
        initializeInputs() {
          this.componentFactory.inputs.forEach(({ propName: pe }) => {
            this.initialInputValues.has(pe) &&
              this.setInputValue(pe, this.initialInputValues.get(pe));
          }),
            this.initialInputValues.clear();
        }
        initializeOutputs(pe) {
          const ce = this.componentFactory.outputs.map(
            ({ propName: He, templateName: rt }) =>
              pe.instance[He].pipe((0, ne.U)(xt => ({ name: rt, value: xt })))
          );
          this.eventEmitters.next(ce);
        }
        callNgOnChanges(pe) {
          if (!this.implementsOnChanges || null === this.inputChanges) return;
          const ce = this.inputChanges;
          (this.inputChanges = null), pe.instance.ngOnChanges(ce);
        }
        markViewForCheck(pe) {
          this.hasInputChanges &&
            ((this.hasInputChanges = !1), pe.markForCheck());
        }
        scheduleDetectChanges() {
          this.scheduledChangeDetectionFn ||
            (this.scheduledChangeDetectionFn = te.scheduleBeforeRender(() => {
              (this.scheduledChangeDetectionFn = null), this.detectChanges();
            }));
        }
        recordInputChange(pe, ce) {
          if (!this.implementsOnChanges) return;
          null === this.inputChanges && (this.inputChanges = {});
          const He = this.inputChanges[pe];
          if (He) return void (He.currentValue = ce);
          const rt = this.unchangedInputs.has(pe),
            ft = rt ? void 0 : this.getInputValue(pe);
          this.inputChanges[pe] = new C.WD2(ft, ce, rt);
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
      class X extends HTMLElement {
        constructor() {
          super(...arguments), (this.ngElementEventsSubscription = null);
        }
      }
      function Pe(Oe, pe) {
        const ce = (function Ne(Oe, pe) {
            return pe.get(C._Vd).resolveComponentFactory(Oe).inputs;
          })(Oe, pe.injector),
          He = pe.strategyFactory || new we(Oe, pe.injector),
          rt = (function Ae(Oe) {
            const pe = {};
            return (
              Oe.forEach(({ propName: ce, templateName: He }) => {
                pe[
                  (function oe(Oe) {
                    return Oe.replace(/[A-Z]/g, pe => `-${pe.toLowerCase()}`);
                  })(He)
                ] = ce;
              }),
              pe
            );
          })(ce);
        class ft extends X {
          constructor(lt) {
            super(), (this.injector = lt);
          }
          get ngElementStrategy() {
            if (!this._ngElementStrategy) {
              const lt = (this._ngElementStrategy = He.create(
                this.injector || pe.injector
              ));
              ce.forEach(({ propName: St }) => {
                if (!this.hasOwnProperty(St)) return;
                const Ht = this[St];
                delete this[St], lt.setInputValue(St, Ht);
              });
            }
            return this._ngElementStrategy;
          }
          attributeChangedCallback(lt, St, Ht, et) {
            this.ngElementStrategy.setInputValue(rt[lt], Ht);
          }
          connectedCallback() {
            let lt = !1;
            this.ngElementStrategy.events &&
              (this.subscribeToEvents(), (lt = !0)),
              this.ngElementStrategy.connect(this),
              lt || this.subscribeToEvents();
          }
          disconnectedCallback() {
            this._ngElementStrategy && this._ngElementStrategy.disconnect(),
              this.ngElementEventsSubscription &&
                (this.ngElementEventsSubscription.unsubscribe(),
                (this.ngElementEventsSubscription = null));
          }
          subscribeToEvents() {
            this.ngElementEventsSubscription =
              this.ngElementStrategy.events.subscribe(lt => {
                const St = new CustomEvent(lt.name, { detail: lt.value });
                this.dispatchEvent(St);
              });
          }
        }
        return (
          (ft.observedAttributes = Object.keys(rt)),
          ce.forEach(({ propName: xt }) => {
            Object.defineProperty(ft.prototype, xt, {
              get() {
                return this.ngElementStrategy.getInputValue(xt);
              },
              set(lt) {
                this.ngElementStrategy.setInputValue(xt, lt);
              },
              configurable: !0,
              enumerable: !0,
            });
          }),
          ft
        );
      }
      var J = v(433),
        j = v(542),
        le = v(963),
        se = v(2691),
        ke = v(356);
      let it = (() => {
        class Oe {
          constructor(ce, He) {
            (this.router = ce), (this.activatedRoute = He);
            let rt = location.pathname;
            (rt = '/' == rt[0] ? rt.slice(1) : rt),
              console.log(`currentUrl => ${rt}`),
              rt.includes('mfe-dashboard')
                ? (this.router.config.push({
                    path: `${rt}`,
                    children: [{ path: '**' }],
                  }),
                  this.router.navigate([`${rt}`]))
                : (this.router.config.push(
                    { path: `${rt}mfe-dashboard`, children: [{ path: '**' }] },
                    { path: `${rt}/mfe-dashboard`, children: [{ path: '**' }] }
                  ),
                  localStorage.setItem('channel', 'web'),
                  localStorage.setItem('experienceType', 'cx'),
                  this.router.navigate([
                    `${rt}/mfe-dashboard/cx/career-site-bot`,
                  ]));
          }
          ngOnInit() {
            this.refNum && localStorage.setItem('refNum', this.refNum),
              this.roleAccess &&
                localStorage.setItem('roleAccess', this.roleAccess);
            let ce = location.pathname;
            (ce = '/' == ce[0] ? ce.slice(1) : ce),
              console.log(`currentUrl => ${ce}`),
              ce.includes('mfe-dashboard')
                ? (this.router.config.push({
                    path: `${ce}`,
                    children: [{ path: '**' }],
                  }),
                  this.router.navigate([`${ce}`]))
                : (this.router.config.push(
                    { path: `${ce}mfe-dashboard`, children: [{ path: '**' }] },
                    { path: `${ce}/mfe-dashboard`, children: [{ path: '**' }] }
                  ),
                  localStorage.setItem('channel', 'web'),
                  localStorage.setItem('experienceType', 'cx'),
                  this.router.navigate([
                    `${ce}/mfe-dashboard/cx/career-site-bot`,
                  ]));
          }
          ngOnDestroy() {
            localStorage.setItem('channel', 'web'),
              localStorage.setItem('experienceType', 'cx'),
              console.log('destroyed');
          }
        }
        return (
          (Oe.ɵfac = function (ce) {
            return new (ce || Oe)(C.Y36(j.F0), C.Y36(j.gz));
          }),
          (Oe.ɵcmp = C.Xpm({
            type: Oe,
            selectors: [['dashboard']],
            inputs: { refNum: 'refNum', roleAccess: 'roleAccess' },
            decls: 5,
            vars: 2,
            consts: [
              [1, 'mfe-main-container'],
              [1, 'aside'],
              [3, 'parentMfe', 'refNum'],
              [1, 'mfe-base-container'],
            ],
            template: function (ce, He) {
              1 & ce &&
                (C.TgZ(0, 'div', 0)(1, 'aside', 1),
                C._UZ(2, 'app-sidebar', 2),
                C.qZA(),
                C.TgZ(3, 'div', 3),
                C._UZ(4, 'configurations'),
                C.qZA()()),
                2 & ce &&
                  (C.xp6(2),
                  C.Q6J('parentMfe', 'dashboard')('refNum', He.refNum));
            },
            dependencies: [se.k, ke.A],
            styles: [
              '.mfe-main-container[_ngcontent-%COMP%]{display:flex;background-color:#fff;justify-content:space-between}.mfe-main-container[_ngcontent-%COMP%]   .aside[_ngcontent-%COMP%]{position:fixed;height:100vh;width:15%}@media screen and (max-width: 1500px){.mfe-main-container[_ngcontent-%COMP%]   .aside[_ngcontent-%COMP%]{width:25%;position:fixed;height:100vh}}.mfe-main-container[_ngcontent-%COMP%]   .mfe-base-container[_ngcontent-%COMP%]{width:85%;margin-left:15%}@media screen and (max-width: 1500px){.mfe-main-container[_ngcontent-%COMP%]   .mfe-base-container[_ngcontent-%COMP%]{width:75%;margin-left:25%}}',
            ],
          })),
          Oe
        );
      })();
      var gt = v(9960);
      const _t = [
        {
          path: 'locales',
          component: gt.g,
          children: [
            {
              path: '',
              loadChildren: () =>
                v
                  .e('src_app_pages_locale-list_locale-list_module_ts')
                  .then(v.bind(v, 2895))
                  .then(Oe => Oe.LocaleListModule),
            },
          ],
        },
        {
          path: ':mfe/configuration/:experience/:channel',
          component: le.H,
          children: [
            {
              path: '',
              loadChildren: () =>
                v
                  .e('common')
                  .then(v.bind(v, 6154))
                  .then(
                    Oe => (console.log('MFE ROUTE'), Oe.ConfigurationsModule)
                  ),
            },
          ],
        },
        {
          path: 'configuration/:experience/:channel',
          component: le.H,
          children: [
            {
              path: '',
              loadChildren: () =>
                v
                  .e('common')
                  .then(v.bind(v, 6154))
                  .then(
                    Oe => (console.log('Normal ROUTE'), Oe.ConfigurationsModule)
                  ),
            },
          ],
        },
        {
          path: 'configuration/:experience/:channel',
          component: le.H,
          children: [
            {
              path: '',
              loadChildren: () =>
                v
                  .e('src_app_pages_locale-list_locale-list_module_ts')
                  .then(v.bind(v, 2895))
                  .then(
                    Oe => (console.log('Normal ROUTE'), Oe.LocaleListModule)
                  ),
            },
          ],
        },
        {
          path: 'mfe-config/:experience/:channel',
          component: it,
          children: [
            {
              path: '',
              loadChildren: () =>
                Promise.all([
                  v.e('common'),
                  v.e('src_app_pages_dashboard_dashboard_module_ts'),
                ])
                  .then(v.bind(v, 5617))
                  .then(
                    Oe => (console.log('Normal ROUTE'), Oe.DashboardModule)
                  ),
            },
          ],
        },
      ];
      let Be = (() => {
        class Oe {
          constructor(ce) {
            this.router = ce;
            let He = location.pathname;
            if (He.includes('/locale'))
              '/' == He[0] && (He = He.slice(1)),
                this.router.config.push({
                  path: `${He}`,
                  component: gt.g,
                  loadChildren: () =>
                    v
                      .e('common')
                      .then(v.bind(v, 6154))
                      .then(
                        rt => (
                          console.log('Normal ROUTE'), rt.ConfigurationsModule
                        )
                      ),
                }),
                this.router.navigate([
                  `/${this.router.config[this.router.config.length - 1]?.path}`,
                ]);
            else if (He.includes('/configuration')) {
              '/' == He[0] && (He = He.slice(1));
              let rt = He?.split('/')?.pop();
              rt && localStorage.setItem('channel', rt);
              let ft = He.split('/');
              ft = ft.slice(0, ft.length - 2);
              let xt = ft.join('/');
              console.log(He),
                this.router.config.push({
                  path: `${xt}/:exp/:pageId`,
                  component: le.H,
                  loadChildren: () =>
                    v
                      .e('common')
                      .then(v.bind(v, 6154))
                      .then(
                        lt => (
                          console.log('Normal ROUTE'), lt.ConfigurationsModule
                        )
                      ),
                }),
                this.router.navigate([`${He}`]);
            } else
              (He = location.pathname.slice(1)),
                (He = He.replace('//', '/')),
                this.router.config.push({
                  path: `${He}`,
                  component: gt.g,
                  loadChildren: () =>
                    v
                      .e('common')
                      .then(v.bind(v, 6154))
                      .then(
                        rt => (
                          console.log('Normal ROUTE'), rt.ConfigurationsModule
                        )
                      ),
                }),
                this.router.navigate([`${He}`]);
          }
        }
        return (
          (Oe.ɵfac = function (ce) {
            return new (ce || Oe)(C.LFG(j.F0));
          }),
          (Oe.ɵmod = C.oAB({ type: Oe })),
          (Oe.ɵinj = C.cJS({ imports: [j.Bz.forRoot(_t), j.Bz] })),
          Oe
        );
      })();
      var jt = v(7420);
      let cn = (() => {
        class Oe {
          constructor(ce, He) {
            (this.sharedService = ce),
              (this.router = He),
              (this.title = 'chatbot-management-app');
          }
          ngOnInit() {
            location,
              this.refNum && this.setRefNum(this.refNum),
              this.roleAccess && this.setRole(this.roleAccess);
          }
          ngOnChanges() {
            console.log('inside changes');
            let ce = location.pathname;
            console.log('I am inside app comp.', ce),
              this.refNum && this.setRefNum(this.refNum);
          }
          setRefNum(ce) {
            localStorage.setItem('refNum', ce);
          }
          setRole(ce) {
            localStorage.setItem('roleAccess', ce);
          }
          ngOnDestroy() {
            localStorage.setItem('mfe-state', location.pathname);
          }
        }
        return (
          (Oe.ɵfac = function (ce) {
            return new (ce || Oe)(C.Y36(jt.F), C.Y36(j.F0));
          }),
          (Oe.ɵcmp = C.Xpm({
            type: Oe,
            selectors: [['chatbot-management-app']],
            inputs: { refNum: 'refNum', roleAccess: 'roleAccess' },
            features: [C.TTD],
            decls: 1,
            vars: 0,
            template: function (ce, He) {
              1 & ce && C._UZ(0, 'router-outlet');
            },
            dependencies: [j.lC],
            styles: [
              '@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27pmO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27rWO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27rGO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=FwZc7-Am2FI_-VOxaLDvvq27omO7&skey=96867d716c89840e&v=v19) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */body{margin:0;font-family:Proxima Nova}[type=checkbox],[type=radio]{left:0px;box-sizing:border-box;padding:0}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0;background-color:#fff}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}.btn{width:-moz-fit-content;width:fit-content;border:none;color:#fff;padding:12px 14px;width:150px;height:40px;background:#00838F;border-radius:4px}.btn-small{width:80px;height:30px;font-size:small;padding:8px 16px}.btn-small-outline{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-small-outline:hover{color:#fff;border:none}.btn-medium{width:120px;height:40px;font-size:medium;padding:8px 16px}.btn-medium-outline{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-medium-outline:hover{color:#fff;border:none}.btn-large{width:180px;height:50px;font-size:large;padding:4px 6px}.btn-large-outline{color:#00838f;background-color:#fff;border:1px solid #00838F}.btn-large-outline:hover{color:#fff;border:none}.btn-disabled{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04)}.btn-disabled:hover{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn:disabled{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn:disabled:hover{text-align:center;color:#8c9ba5;background:rgba(21,41,53,.04);cursor:not-allowed}.btn:hover{background:#29ABB9}.btn:active{background:#00838F}\n',
            ],
            encapsulation: 2,
          })),
          Oe
        );
      })();
      var Tt = v(613);
      let Mt = (() => {
        class Oe {
          constructor(ce, He) {
            (this.injector = ce), (this.router = He);
            const rt = Pe(cn, { injector: ce }),
              ft = Pe(gt.g, { injector: ce }),
              xt = Pe(it, { injector: ce });
            customElements.define('chatbot-management-app', rt),
              customElements.define('p-locales', ft),
              customElements.define('dash-mfe', xt);
          }
          ngDoBootstrap(ce) {
            document.querySelector('chatbot-management-app') &&
              ce.bootstrap(cn);
          }
        }
        return (
          (Oe.ɵfac = function (ce) {
            return new (ce || Oe)(C.LFG(C.zs3), C.LFG(j.F0));
          }),
          (Oe.ɵmod = C.oAB({ type: Oe })),
          (Oe.ɵinj = C.cJS({
            imports: [s.b2, Be, H.ez, Tt.m, Q.JF, j.Bz, J.u5, J.UX],
          })),
          Oe
        );
      })();
      C.B6R(le.H, [j.lC, se.k], []),
        v(2340).N.production && (0, C.G48)(),
        s
          .q6()
          .bootstrapModule(Mt)
          .catch(Oe => console.error(Oe));
    },
    8306: (Xe, ge, v) => {
      v.d(ge, { y: () => ne });
      var s = v(2961),
        C = v(727),
        H = v(8822),
        Q = v(4671);
      var B = v(2416),
        Y = v(576),
        fe = v(2806);
      let ne = (() => {
        class Ee {
          constructor(ye) {
            ye && (this._subscribe = ye);
          }
          lift(ye) {
            const K = new Ee();
            return (K.source = this), (K.operator = ye), K;
          }
          subscribe(ye, K, ie) {
            const Ae = (function Ze(Ee) {
              return (
                (Ee && Ee instanceof s.Lv) ||
                ((function oe(Ee) {
                  return (
                    Ee &&
                    (0, Y.m)(Ee.next) &&
                    (0, Y.m)(Ee.error) &&
                    (0, Y.m)(Ee.complete)
                  );
                })(Ee) &&
                  (0, C.Nn)(Ee))
              );
            })(ye)
              ? ye
              : new s.Hp(ye, K, ie);
            return (
              (0, fe.x)(() => {
                const { operator: Ne, source: Te } = this;
                Ae.add(
                  Ne
                    ? Ne.call(Ae, Te)
                    : Te
                    ? this._subscribe(Ae)
                    : this._trySubscribe(Ae)
                );
              }),
              Ae
            );
          }
          _trySubscribe(ye) {
            try {
              return this._subscribe(ye);
            } catch (K) {
              ye.error(K);
            }
          }
          forEach(ye, K) {
            return new (K = te(K))((ie, Ae) => {
              const Ne = new s.Hp({
                next: Te => {
                  try {
                    ye(Te);
                  } catch (ve) {
                    Ae(ve), Ne.unsubscribe();
                  }
                },
                error: Ae,
                complete: ie,
              });
              this.subscribe(Ne);
            });
          }
          _subscribe(ye) {
            var K;
            return null === (K = this.source) || void 0 === K
              ? void 0
              : K.subscribe(ye);
          }
          [H.L]() {
            return this;
          }
          pipe(...ye) {
            return (function I(Ee) {
              return 0 === Ee.length
                ? Q.y
                : 1 === Ee.length
                ? Ee[0]
                : function (ye) {
                    return Ee.reduce((K, ie) => ie(K), ye);
                  };
            })(ye)(this);
          }
          toPromise(ye) {
            return new (ye = te(ye))((K, ie) => {
              let Ae;
              this.subscribe(
                Ne => (Ae = Ne),
                Ne => ie(Ne),
                () => K(Ae)
              );
            });
          }
        }
        return (Ee.create = de => new Ee(de)), Ee;
      })();
      function te(Ee) {
        var de;
        return null !== (de = Ee ?? B.v.Promise) && void 0 !== de
          ? de
          : Promise;
      }
    },
    7579: (Xe, ge, v) => {
      v.d(ge, { x: () => B });
      var s = v(8306),
        C = v(727);
      const Q = (0, v(3888).d)(
        fe =>
          function () {
            fe(this),
              (this.name = 'ObjectUnsubscribedError'),
              (this.message = 'object unsubscribed');
          }
      );
      var ee = v(8737),
        I = v(2806);
      let B = (() => {
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
          lift(te) {
            const oe = new Y(this, this);
            return (oe.operator = te), oe;
          }
          _throwIfClosed() {
            if (this.closed) throw new Q();
          }
          next(te) {
            (0, I.x)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                this.currentObservers ||
                  (this.currentObservers = Array.from(this.observers));
                for (const oe of this.currentObservers) oe.next(te);
              }
            });
          }
          error(te) {
            (0, I.x)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                (this.hasError = this.isStopped = !0), (this.thrownError = te);
                const { observers: oe } = this;
                for (; oe.length; ) oe.shift().error(te);
              }
            });
          }
          complete() {
            (0, I.x)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                this.isStopped = !0;
                const { observers: te } = this;
                for (; te.length; ) te.shift().complete();
              }
            });
          }
          unsubscribe() {
            (this.isStopped = this.closed = !0),
              (this.observers = this.currentObservers = null);
          }
          get observed() {
            var te;
            return (
              (null === (te = this.observers) || void 0 === te
                ? void 0
                : te.length) > 0
            );
          }
          _trySubscribe(te) {
            return this._throwIfClosed(), super._trySubscribe(te);
          }
          _subscribe(te) {
            return (
              this._throwIfClosed(),
              this._checkFinalizedStatuses(te),
              this._innerSubscribe(te)
            );
          }
          _innerSubscribe(te) {
            const { hasError: oe, isStopped: Ze, observers: Ee } = this;
            return oe || Ze
              ? C.Lc
              : ((this.currentObservers = null),
                Ee.push(te),
                new C.w0(() => {
                  (this.currentObservers = null), (0, ee.P)(Ee, te);
                }));
          }
          _checkFinalizedStatuses(te) {
            const { hasError: oe, thrownError: Ze, isStopped: Ee } = this;
            oe ? te.error(Ze) : Ee && te.complete();
          }
          asObservable() {
            const te = new s.y();
            return (te.source = this), te;
          }
        }
        return (fe.create = (ne, te) => new Y(ne, te)), fe;
      })();
      class Y extends B {
        constructor(ne, te) {
          super(), (this.destination = ne), (this.source = te);
        }
        next(ne) {
          var te, oe;
          null ===
            (oe =
              null === (te = this.destination) || void 0 === te
                ? void 0
                : te.next) ||
            void 0 === oe ||
            oe.call(te, ne);
        }
        error(ne) {
          var te, oe;
          null ===
            (oe =
              null === (te = this.destination) || void 0 === te
                ? void 0
                : te.error) ||
            void 0 === oe ||
            oe.call(te, ne);
        }
        complete() {
          var ne, te;
          null ===
            (te =
              null === (ne = this.destination) || void 0 === ne
                ? void 0
                : ne.complete) ||
            void 0 === te ||
            te.call(ne);
        }
        _subscribe(ne) {
          var te, oe;
          return null !==
            (oe =
              null === (te = this.source) || void 0 === te
                ? void 0
                : te.subscribe(ne)) && void 0 !== oe
            ? oe
            : C.Lc;
        }
      }
    },
    2961: (Xe, ge, v) => {
      v.d(ge, { Hp: () => ye, Lv: () => oe });
      var s = v(576),
        C = v(727),
        H = v(2416),
        Q = v(7849);
      function ee() {}
      const I = fe('C', void 0, void 0);
      function fe(Te, ve, Le) {
        return { kind: Te, value: ve, error: Le };
      }
      var ne = v(3410),
        te = v(2806);
      class oe extends C.w0 {
        constructor(ve) {
          super(),
            (this.isStopped = !1),
            ve
              ? ((this.destination = ve), (0, C.Nn)(ve) && ve.add(this))
              : (this.destination = Ne);
        }
        static create(ve, Le, we) {
          return new ye(ve, Le, we);
        }
        next(ve) {
          this.isStopped
            ? Ae(
                (function Y(Te) {
                  return fe('N', Te, void 0);
                })(ve),
                this
              )
            : this._next(ve);
        }
        error(ve) {
          this.isStopped
            ? Ae(
                (function B(Te) {
                  return fe('E', void 0, Te);
                })(ve),
                this
              )
            : ((this.isStopped = !0), this._error(ve));
        }
        complete() {
          this.isStopped
            ? Ae(I, this)
            : ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed ||
            ((this.isStopped = !0),
            super.unsubscribe(),
            (this.destination = null));
        }
        _next(ve) {
          this.destination.next(ve);
        }
        _error(ve) {
          try {
            this.destination.error(ve);
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
      const Ze = Function.prototype.bind;
      function Ee(Te, ve) {
        return Ze.call(Te, ve);
      }
      class de {
        constructor(ve) {
          this.partialObserver = ve;
        }
        next(ve) {
          const { partialObserver: Le } = this;
          if (Le.next)
            try {
              Le.next(ve);
            } catch (we) {
              K(we);
            }
        }
        error(ve) {
          const { partialObserver: Le } = this;
          if (Le.error)
            try {
              Le.error(ve);
            } catch (we) {
              K(we);
            }
          else K(ve);
        }
        complete() {
          const { partialObserver: ve } = this;
          if (ve.complete)
            try {
              ve.complete();
            } catch (Le) {
              K(Le);
            }
        }
      }
      class ye extends oe {
        constructor(ve, Le, we) {
          let Ie;
          if ((super(), (0, s.m)(ve) || !ve))
            Ie = {
              next: ve ?? void 0,
              error: Le ?? void 0,
              complete: we ?? void 0,
            };
          else {
            let X;
            this && H.v.useDeprecatedNextContext
              ? ((X = Object.create(ve)),
                (X.unsubscribe = () => this.unsubscribe()),
                (Ie = {
                  next: ve.next && Ee(ve.next, X),
                  error: ve.error && Ee(ve.error, X),
                  complete: ve.complete && Ee(ve.complete, X),
                }))
              : (Ie = ve);
          }
          this.destination = new de(Ie);
        }
      }
      function K(Te) {
        H.v.useDeprecatedSynchronousErrorHandling
          ? (0, te.O)(Te)
          : (0, Q.h)(Te);
      }
      function Ae(Te, ve) {
        const { onStoppedNotification: Le } = H.v;
        Le && ne.z.setTimeout(() => Le(Te, ve));
      }
      const Ne = {
        closed: !0,
        next: ee,
        error: function ie(Te) {
          throw Te;
        },
        complete: ee,
      };
    },
    727: (Xe, ge, v) => {
      v.d(ge, { Lc: () => I, w0: () => ee, Nn: () => B });
      var s = v(576);
      const H = (0, v(3888).d)(
        fe =>
          function (te) {
            fe(this),
              (this.message = te
                ? `${te.length} errors occurred during unsubscription:\n${te
                    .map((oe, Ze) => `${Ze + 1}) ${oe.toString()}`)
                    .join('\n  ')}`
                : ''),
              (this.name = 'UnsubscriptionError'),
              (this.errors = te);
          }
      );
      var Q = v(8737);
      class ee {
        constructor(ne) {
          (this.initialTeardown = ne),
            (this.closed = !1),
            (this._parentage = null),
            (this._finalizers = null);
        }
        unsubscribe() {
          let ne;
          if (!this.closed) {
            this.closed = !0;
            const { _parentage: te } = this;
            if (te)
              if (((this._parentage = null), Array.isArray(te)))
                for (const Ee of te) Ee.remove(this);
              else te.remove(this);
            const { initialTeardown: oe } = this;
            if ((0, s.m)(oe))
              try {
                oe();
              } catch (Ee) {
                ne = Ee instanceof H ? Ee.errors : [Ee];
              }
            const { _finalizers: Ze } = this;
            if (Ze) {
              this._finalizers = null;
              for (const Ee of Ze)
                try {
                  Y(Ee);
                } catch (de) {
                  (ne = ne ?? []),
                    de instanceof H
                      ? (ne = [...ne, ...de.errors])
                      : ne.push(de);
                }
            }
            if (ne) throw new H(ne);
          }
        }
        add(ne) {
          var te;
          if (ne && ne !== this)
            if (this.closed) Y(ne);
            else {
              if (ne instanceof ee) {
                if (ne.closed || ne._hasParent(this)) return;
                ne._addParent(this);
              }
              (this._finalizers =
                null !== (te = this._finalizers) && void 0 !== te
                  ? te
                  : []).push(ne);
            }
        }
        _hasParent(ne) {
          const { _parentage: te } = this;
          return te === ne || (Array.isArray(te) && te.includes(ne));
        }
        _addParent(ne) {
          const { _parentage: te } = this;
          this._parentage = Array.isArray(te)
            ? (te.push(ne), te)
            : te
            ? [te, ne]
            : ne;
        }
        _removeParent(ne) {
          const { _parentage: te } = this;
          te === ne
            ? (this._parentage = null)
            : Array.isArray(te) && (0, Q.P)(te, ne);
        }
        remove(ne) {
          const { _finalizers: te } = this;
          te && (0, Q.P)(te, ne), ne instanceof ee && ne._removeParent(this);
        }
      }
      ee.EMPTY = (() => {
        const fe = new ee();
        return (fe.closed = !0), fe;
      })();
      const I = ee.EMPTY;
      function B(fe) {
        return (
          fe instanceof ee ||
          (fe &&
            'closed' in fe &&
            (0, s.m)(fe.remove) &&
            (0, s.m)(fe.add) &&
            (0, s.m)(fe.unsubscribe))
        );
      }
      function Y(fe) {
        (0, s.m)(fe) ? fe() : fe.unsubscribe();
      }
    },
    2416: (Xe, ge, v) => {
      v.d(ge, { v: () => s });
      const s = {
        onUnhandledError: null,
        onStoppedNotification: null,
        Promise: void 0,
        useDeprecatedSynchronousErrorHandling: !1,
        useDeprecatedNextContext: !1,
      };
    },
    515: (Xe, ge, v) => {
      v.d(ge, { E: () => C });
      const C = new (v(8306).y)(ee => ee.complete());
    },
    2076: (Xe, ge, v) => {
      v.d(ge, { D: () => we });
      var s = v(8421),
        C = v(9672),
        H = v(4482),
        Q = v(5403);
      function ee(Ie, X = 0) {
        return (0, H.e)((Pe, G) => {
          Pe.subscribe(
            (0, Q.x)(
              G,
              J => (0, C.f)(G, Ie, () => G.next(J), X),
              () => (0, C.f)(G, Ie, () => G.complete(), X),
              J => (0, C.f)(G, Ie, () => G.error(J), X)
            )
          );
        });
      }
      function I(Ie, X = 0) {
        return (0, H.e)((Pe, G) => {
          G.add(Ie.schedule(() => Pe.subscribe(G), X));
        });
      }
      var fe = v(8306),
        te = v(2202),
        oe = v(576);
      function Ee(Ie, X) {
        if (!Ie) throw new Error('Iterable cannot be null');
        return new fe.y(Pe => {
          (0, C.f)(Pe, X, () => {
            const G = Ie[Symbol.asyncIterator]();
            (0, C.f)(
              Pe,
              X,
              () => {
                G.next().then(J => {
                  J.done ? Pe.complete() : Pe.next(J.value);
                });
              },
              0,
              !0
            );
          });
        });
      }
      var de = v(3670),
        ye = v(8239),
        K = v(1144),
        ie = v(6495),
        Ae = v(2206),
        Ne = v(4532),
        Te = v(3260);
      function we(Ie, X) {
        return X
          ? (function Le(Ie, X) {
              if (null != Ie) {
                if ((0, de.c)(Ie))
                  return (function B(Ie, X) {
                    return (0, s.Xf)(Ie).pipe(I(X), ee(X));
                  })(Ie, X);
                if ((0, K.z)(Ie))
                  return (function ne(Ie, X) {
                    return new fe.y(Pe => {
                      let G = 0;
                      return X.schedule(function () {
                        G === Ie.length
                          ? Pe.complete()
                          : (Pe.next(Ie[G++]), Pe.closed || this.schedule());
                      });
                    });
                  })(Ie, X);
                if ((0, ye.t)(Ie))
                  return (function Y(Ie, X) {
                    return (0, s.Xf)(Ie).pipe(I(X), ee(X));
                  })(Ie, X);
                if ((0, Ae.D)(Ie)) return Ee(Ie, X);
                if ((0, ie.T)(Ie))
                  return (function Ze(Ie, X) {
                    return new fe.y(Pe => {
                      let G;
                      return (
                        (0, C.f)(Pe, X, () => {
                          (G = Ie[te.h]()),
                            (0, C.f)(
                              Pe,
                              X,
                              () => {
                                let J, j;
                                try {
                                  ({ value: J, done: j } = G.next());
                                } catch (le) {
                                  return void Pe.error(le);
                                }
                                j ? Pe.complete() : Pe.next(J);
                              },
                              0,
                              !0
                            );
                        }),
                        () => (0, oe.m)(G?.return) && G.return()
                      );
                    });
                  })(Ie, X);
                if ((0, Te.L)(Ie))
                  return (function ve(Ie, X) {
                    return Ee((0, Te.Q)(Ie), X);
                  })(Ie, X);
              }
              throw (0, Ne.z)(Ie);
            })(Ie, X)
          : (0, s.Xf)(Ie);
      }
    },
    8421: (Xe, ge, v) => {
      v.d(ge, { Xf: () => Ze });
      var s = v(655),
        C = v(1144),
        H = v(8239),
        Q = v(8306),
        ee = v(3670),
        I = v(2206),
        B = v(4532),
        Y = v(6495),
        fe = v(3260),
        ne = v(576),
        te = v(7849),
        oe = v(8822);
      function Ze(Te) {
        if (Te instanceof Q.y) return Te;
        if (null != Te) {
          if ((0, ee.c)(Te))
            return (function Ee(Te) {
              return new Q.y(ve => {
                const Le = Te[oe.L]();
                if ((0, ne.m)(Le.subscribe)) return Le.subscribe(ve);
                throw new TypeError(
                  'Provided object does not correctly implement Symbol.observable'
                );
              });
            })(Te);
          if ((0, C.z)(Te))
            return (function de(Te) {
              return new Q.y(ve => {
                for (let Le = 0; Le < Te.length && !ve.closed; Le++)
                  ve.next(Te[Le]);
                ve.complete();
              });
            })(Te);
          if ((0, H.t)(Te))
            return (function ye(Te) {
              return new Q.y(ve => {
                Te.then(
                  Le => {
                    ve.closed || (ve.next(Le), ve.complete());
                  },
                  Le => ve.error(Le)
                ).then(null, te.h);
              });
            })(Te);
          if ((0, I.D)(Te)) return ie(Te);
          if ((0, Y.T)(Te))
            return (function K(Te) {
              return new Q.y(ve => {
                for (const Le of Te) if ((ve.next(Le), ve.closed)) return;
                ve.complete();
              });
            })(Te);
          if ((0, fe.L)(Te))
            return (function Ae(Te) {
              return ie((0, fe.Q)(Te));
            })(Te);
        }
        throw (0, B.z)(Te);
      }
      function ie(Te) {
        return new Q.y(ve => {
          (function Ne(Te, ve) {
            var Le, we, Ie, X;
            return (0, s.mG)(this, void 0, void 0, function* () {
              try {
                for (Le = (0, s.KL)(Te); !(we = yield Le.next()).done; )
                  if ((ve.next(we.value), ve.closed)) return;
              } catch (Pe) {
                Ie = { error: Pe };
              } finally {
                try {
                  we && !we.done && (X = Le.return) && (yield X.call(Le));
                } finally {
                  if (Ie) throw Ie.error;
                }
              }
              ve.complete();
            });
          })(Te, ve).catch(Le => ve.error(Le));
        });
      }
    },
    6451: (Xe, ge, v) => {
      v.d(ge, { T: () => I });
      var s = v(8189),
        C = v(8421),
        H = v(515),
        Q = v(7669),
        ee = v(2076);
      function I(...B) {
        const Y = (0, Q.yG)(B),
          fe = (0, Q._6)(B, 1 / 0),
          ne = B;
        return ne.length
          ? 1 === ne.length
            ? (0, C.Xf)(ne[0])
            : (0, s.J)(fe)((0, ee.D)(ne, Y))
          : H.E;
      }
    },
    9646: (Xe, ge, v) => {
      v.d(ge, { of: () => H });
      var s = v(7669),
        C = v(2076);
      function H(...Q) {
        const ee = (0, s.yG)(Q);
        return (0, C.D)(Q, ee);
      }
    },
    5403: (Xe, ge, v) => {
      v.d(ge, { x: () => C });
      var s = v(2961);
      function C(Q, ee, I, B, Y) {
        return new H(Q, ee, I, B, Y);
      }
      class H extends s.Lv {
        constructor(ee, I, B, Y, fe, ne) {
          super(ee),
            (this.onFinalize = fe),
            (this.shouldUnsubscribe = ne),
            (this._next = I
              ? function (te) {
                  try {
                    I(te);
                  } catch (oe) {
                    ee.error(oe);
                  }
                }
              : super._next),
            (this._error = Y
              ? function (te) {
                  try {
                    Y(te);
                  } catch (oe) {
                    ee.error(oe);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : super._error),
            (this._complete = B
              ? function () {
                  try {
                    B();
                  } catch (te) {
                    ee.error(te);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : super._complete);
        }
        unsubscribe() {
          var ee;
          if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            const { closed: I } = this;
            super.unsubscribe(),
              !I &&
                (null === (ee = this.onFinalize) ||
                  void 0 === ee ||
                  ee.call(this));
          }
        }
      }
    },
    4351: (Xe, ge, v) => {
      v.d(ge, { b: () => H });
      var s = v(5577),
        C = v(576);
      function H(Q, ee) {
        return (0, C.m)(ee) ? (0, s.z)(Q, ee, 1) : (0, s.z)(Q, 1);
      }
    },
    9300: (Xe, ge, v) => {
      v.d(ge, { h: () => H });
      var s = v(4482),
        C = v(5403);
      function H(Q, ee) {
        return (0, s.e)((I, B) => {
          let Y = 0;
          I.subscribe((0, C.x)(B, fe => Q.call(ee, fe, Y++) && B.next(fe)));
        });
      }
    },
    4004: (Xe, ge, v) => {
      v.d(ge, { U: () => H });
      var s = v(4482),
        C = v(5403);
      function H(Q, ee) {
        return (0, s.e)((I, B) => {
          let Y = 0;
          I.subscribe(
            (0, C.x)(B, fe => {
              B.next(Q.call(ee, fe, Y++));
            })
          );
        });
      }
    },
    8189: (Xe, ge, v) => {
      v.d(ge, { J: () => H });
      var s = v(5577),
        C = v(4671);
      function H(Q = 1 / 0) {
        return (0, s.z)(C.y, Q);
      }
    },
    5577: (Xe, ge, v) => {
      v.d(ge, { z: () => Y });
      var s = v(4004),
        C = v(8421),
        H = v(4482),
        Q = v(9672),
        ee = v(5403),
        B = v(576);
      function Y(fe, ne, te = 1 / 0) {
        return (0, B.m)(ne)
          ? Y(
              (oe, Ze) =>
                (0, s.U)((Ee, de) => ne(oe, Ee, Ze, de))((0, C.Xf)(fe(oe, Ze))),
              te
            )
          : ('number' == typeof ne && (te = ne),
            (0, H.e)((oe, Ze) =>
              (function I(fe, ne, te, oe, Ze, Ee, de, ye) {
                const K = [];
                let ie = 0,
                  Ae = 0,
                  Ne = !1;
                const Te = () => {
                    Ne && !K.length && !ie && ne.complete();
                  },
                  ve = we => (ie < oe ? Le(we) : K.push(we)),
                  Le = we => {
                    Ee && ne.next(we), ie++;
                    let Ie = !1;
                    (0, C.Xf)(te(we, Ae++)).subscribe(
                      (0, ee.x)(
                        ne,
                        X => {
                          Ze?.(X), Ee ? ve(X) : ne.next(X);
                        },
                        () => {
                          Ie = !0;
                        },
                        void 0,
                        () => {
                          if (Ie)
                            try {
                              for (ie--; K.length && ie < oe; ) {
                                const X = K.shift();
                                de ? (0, Q.f)(ne, de, () => Le(X)) : Le(X);
                              }
                              Te();
                            } catch (X) {
                              ne.error(X);
                            }
                        }
                      )
                    );
                  };
                return (
                  fe.subscribe(
                    (0, ee.x)(ne, ve, () => {
                      (Ne = !0), Te();
                    })
                  ),
                  () => {
                    ye?.();
                  }
                );
              })(oe, Ze, fe, te)
            ));
      }
    },
    3099: (Xe, ge, v) => {
      v.d(ge, { B: () => I });
      var s = v(2076),
        C = v(5698),
        H = v(7579),
        Q = v(2961),
        ee = v(4482);
      function I(Y = {}) {
        const {
          connector: fe = () => new H.x(),
          resetOnError: ne = !0,
          resetOnComplete: te = !0,
          resetOnRefCountZero: oe = !0,
        } = Y;
        return Ze => {
          let Ee = null,
            de = null,
            ye = null,
            K = 0,
            ie = !1,
            Ae = !1;
          const Ne = () => {
              de?.unsubscribe(), (de = null);
            },
            Te = () => {
              Ne(), (Ee = ye = null), (ie = Ae = !1);
            },
            ve = () => {
              const Le = Ee;
              Te(), Le?.unsubscribe();
            };
          return (0, ee.e)((Le, we) => {
            K++, !Ae && !ie && Ne();
            const Ie = (ye = ye ?? fe());
            we.add(() => {
              K--, 0 === K && !Ae && !ie && (de = B(ve, oe));
            }),
              Ie.subscribe(we),
              Ee ||
                ((Ee = new Q.Hp({
                  next: X => Ie.next(X),
                  error: X => {
                    (Ae = !0), Ne(), (de = B(Te, ne, X)), Ie.error(X);
                  },
                  complete: () => {
                    (ie = !0), Ne(), (de = B(Te, te)), Ie.complete();
                  },
                })),
                (0, s.D)(Le).subscribe(Ee));
          })(Ze);
        };
      }
      function B(Y, fe, ...ne) {
        return !0 === fe
          ? (Y(), null)
          : !1 === fe
          ? null
          : fe(...ne)
              .pipe((0, C.q)(1))
              .subscribe(() => Y());
      }
    },
    3900: (Xe, ge, v) => {
      v.d(ge, { w: () => Q });
      var s = v(8421),
        C = v(4482),
        H = v(5403);
      function Q(ee, I) {
        return (0, C.e)((B, Y) => {
          let fe = null,
            ne = 0,
            te = !1;
          const oe = () => te && !fe && Y.complete();
          B.subscribe(
            (0, H.x)(
              Y,
              Ze => {
                fe?.unsubscribe();
                let Ee = 0;
                const de = ne++;
                (0, s.Xf)(ee(Ze, de)).subscribe(
                  (fe = (0, H.x)(
                    Y,
                    ye => Y.next(I ? I(Ze, ye, de, Ee++) : ye),
                    () => {
                      (fe = null), oe();
                    }
                  ))
                );
              },
              () => {
                (te = !0), oe();
              }
            )
          );
        });
      }
    },
    5698: (Xe, ge, v) => {
      v.d(ge, { q: () => Q });
      var s = v(515),
        C = v(4482),
        H = v(5403);
      function Q(ee) {
        return ee <= 0
          ? () => s.E
          : (0, C.e)((I, B) => {
              let Y = 0;
              I.subscribe(
                (0, H.x)(B, fe => {
                  ++Y <= ee && (B.next(fe), ee <= Y && B.complete());
                })
              );
            });
      }
    },
    3410: (Xe, ge, v) => {
      v.d(ge, { z: () => s });
      const s = {
        setTimeout(C, H, ...Q) {
          const { delegate: ee } = s;
          return ee?.setTimeout
            ? ee.setTimeout(C, H, ...Q)
            : setTimeout(C, H, ...Q);
        },
        clearTimeout(C) {
          const { delegate: H } = s;
          return (H?.clearTimeout || clearTimeout)(C);
        },
        delegate: void 0,
      };
    },
    2202: (Xe, ge, v) => {
      v.d(ge, { h: () => C });
      const C = (function s() {
        return 'function' == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : '@@iterator';
      })();
    },
    8822: (Xe, ge, v) => {
      v.d(ge, { L: () => s });
      const s =
        ('function' == typeof Symbol && Symbol.observable) || '@@observable';
    },
    7669: (Xe, ge, v) => {
      v.d(ge, { _6: () => I, jO: () => Q, yG: () => ee });
      var s = v(576);
      function H(B) {
        return B[B.length - 1];
      }
      function Q(B) {
        return (0, s.m)(H(B)) ? B.pop() : void 0;
      }
      function ee(B) {
        return (function C(B) {
          return B && (0, s.m)(B.schedule);
        })(H(B))
          ? B.pop()
          : void 0;
      }
      function I(B, Y) {
        return 'number' == typeof H(B) ? B.pop() : Y;
      }
    },
    4742: (Xe, ge, v) => {
      v.d(ge, { D: () => ee });
      const { isArray: s } = Array,
        { getPrototypeOf: C, prototype: H, keys: Q } = Object;
      function ee(B) {
        if (1 === B.length) {
          const Y = B[0];
          if (s(Y)) return { args: Y, keys: null };
          if (
            (function I(B) {
              return B && 'object' == typeof B && C(B) === H;
            })(Y)
          ) {
            const fe = Q(Y);
            return { args: fe.map(ne => Y[ne]), keys: fe };
          }
        }
        return { args: B, keys: null };
      }
    },
    8737: (Xe, ge, v) => {
      function s(C, H) {
        if (C) {
          const Q = C.indexOf(H);
          0 <= Q && C.splice(Q, 1);
        }
      }
      v.d(ge, { P: () => s });
    },
    3888: (Xe, ge, v) => {
      function s(C) {
        const Q = C(ee => {
          Error.call(ee), (ee.stack = new Error().stack);
        });
        return (
          (Q.prototype = Object.create(Error.prototype)),
          (Q.prototype.constructor = Q),
          Q
        );
      }
      v.d(ge, { d: () => s });
    },
    1810: (Xe, ge, v) => {
      function s(C, H) {
        return C.reduce((Q, ee, I) => ((Q[ee] = H[I]), Q), {});
      }
      v.d(ge, { n: () => s });
    },
    2806: (Xe, ge, v) => {
      v.d(ge, { O: () => Q, x: () => H });
      var s = v(2416);
      let C = null;
      function H(ee) {
        if (s.v.useDeprecatedSynchronousErrorHandling) {
          const I = !C;
          if ((I && (C = { errorThrown: !1, error: null }), ee(), I)) {
            const { errorThrown: B, error: Y } = C;
            if (((C = null), B)) throw Y;
          }
        } else ee();
      }
      function Q(ee) {
        s.v.useDeprecatedSynchronousErrorHandling &&
          C &&
          ((C.errorThrown = !0), (C.error = ee));
      }
    },
    9672: (Xe, ge, v) => {
      function s(C, H, Q, ee = 0, I = !1) {
        const B = H.schedule(function () {
          Q(), I ? C.add(this.schedule(null, ee)) : this.unsubscribe();
        }, ee);
        if ((C.add(B), !I)) return B;
      }
      v.d(ge, { f: () => s });
    },
    4671: (Xe, ge, v) => {
      function s(C) {
        return C;
      }
      v.d(ge, { y: () => s });
    },
    1144: (Xe, ge, v) => {
      v.d(ge, { z: () => s });
      const s = C => C && 'number' == typeof C.length && 'function' != typeof C;
    },
    2206: (Xe, ge, v) => {
      v.d(ge, { D: () => C });
      var s = v(576);
      function C(H) {
        return Symbol.asyncIterator && (0, s.m)(H?.[Symbol.asyncIterator]);
      }
    },
    576: (Xe, ge, v) => {
      function s(C) {
        return 'function' == typeof C;
      }
      v.d(ge, { m: () => s });
    },
    3670: (Xe, ge, v) => {
      v.d(ge, { c: () => H });
      var s = v(8822),
        C = v(576);
      function H(Q) {
        return (0, C.m)(Q[s.L]);
      }
    },
    6495: (Xe, ge, v) => {
      v.d(ge, { T: () => H });
      var s = v(2202),
        C = v(576);
      function H(Q) {
        return (0, C.m)(Q?.[s.h]);
      }
    },
    8239: (Xe, ge, v) => {
      v.d(ge, { t: () => C });
      var s = v(576);
      function C(H) {
        return (0, s.m)(H?.then);
      }
    },
    3260: (Xe, ge, v) => {
      v.d(ge, { L: () => Q, Q: () => H });
      var s = v(655),
        C = v(576);
      function H(ee) {
        return (0, s.FC)(this, arguments, function* () {
          const B = ee.getReader();
          try {
            for (;;) {
              const { value: Y, done: fe } = yield (0, s.qq)(B.read());
              if (fe) return yield (0, s.qq)(void 0);
              yield yield (0, s.qq)(Y);
            }
          } finally {
            B.releaseLock();
          }
        });
      }
      function Q(ee) {
        return (0, C.m)(ee?.getReader);
      }
    },
    4482: (Xe, ge, v) => {
      v.d(ge, { A: () => C, e: () => H });
      var s = v(576);
      function C(Q) {
        return (0, s.m)(Q?.lift);
      }
      function H(Q) {
        return ee => {
          if (C(ee))
            return ee.lift(function (I) {
              try {
                return Q(I, this);
              } catch (B) {
                this.error(B);
              }
            });
          throw new TypeError('Unable to lift unknown Observable type');
        };
      }
    },
    3268: (Xe, ge, v) => {
      v.d(ge, { Z: () => Q });
      var s = v(4004);
      const { isArray: C } = Array;
      function Q(ee) {
        return (0, s.U)(I =>
          (function H(ee, I) {
            return C(I) ? ee(...I) : ee(I);
          })(ee, I)
        );
      }
    },
    7849: (Xe, ge, v) => {
      v.d(ge, { h: () => H });
      var s = v(2416),
        C = v(3410);
      function H(Q) {
        C.z.setTimeout(() => {
          const { onUnhandledError: ee } = s.v;
          if (!ee) throw Q;
          ee(Q);
        });
      }
    },
    4532: (Xe, ge, v) => {
      function s(C) {
        return new TypeError(
          `You provided ${
            null !== C && 'object' == typeof C ? 'an invalid object' : `'${C}'`
          } where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`
        );
      }
      v.d(ge, { z: () => s });
    },
    655: (Xe, ge, v) => {
      function Y(G, J, j, le) {
        return new (j || (j = Promise))(function (ke, it) {
          function gt(jt) {
            try {
              Be(le.next(jt));
            } catch (cn) {
              it(cn);
            }
          }
          function _t(jt) {
            try {
              Be(le.throw(jt));
            } catch (cn) {
              it(cn);
            }
          }
          function Be(jt) {
            jt.done
              ? ke(jt.value)
              : (function se(ke) {
                  return ke instanceof j
                    ? ke
                    : new j(function (it) {
                        it(ke);
                      });
                })(jt.value).then(gt, _t);
          }
          Be((le = le.apply(G, J || [])).next());
        });
      }
      function K(G) {
        return this instanceof K ? ((this.v = G), this) : new K(G);
      }
      function ie(G, J, j) {
        if (!Symbol.asyncIterator)
          throw new TypeError('Symbol.asyncIterator is not defined.');
        var se,
          le = j.apply(G, J || []),
          ke = [];
        return (
          (se = {}),
          it('next'),
          it('throw'),
          it('return'),
          (se[Symbol.asyncIterator] = function () {
            return this;
          }),
          se
        );
        function it(Tt) {
          le[Tt] &&
            (se[Tt] = function (Mt) {
              return new Promise(function (qt, Oe) {
                ke.push([Tt, Mt, qt, Oe]) > 1 || gt(Tt, Mt);
              });
            });
        }
        function gt(Tt, Mt) {
          try {
            !(function _t(Tt) {
              Tt.value instanceof K
                ? Promise.resolve(Tt.value.v).then(Be, jt)
                : cn(ke[0][2], Tt);
            })(le[Tt](Mt));
          } catch (qt) {
            cn(ke[0][3], qt);
          }
        }
        function Be(Tt) {
          gt('next', Tt);
        }
        function jt(Tt) {
          gt('throw', Tt);
        }
        function cn(Tt, Mt) {
          Tt(Mt), ke.shift(), ke.length && gt(ke[0][0], ke[0][1]);
        }
      }
      function Ne(G) {
        if (!Symbol.asyncIterator)
          throw new TypeError('Symbol.asyncIterator is not defined.');
        var j,
          J = G[Symbol.asyncIterator];
        return J
          ? J.call(G)
          : ((G = (function oe(G) {
              var J = 'function' == typeof Symbol && Symbol.iterator,
                j = J && G[J],
                le = 0;
              if (j) return j.call(G);
              if (G && 'number' == typeof G.length)
                return {
                  next: function () {
                    return (
                      G && le >= G.length && (G = void 0),
                      { value: G && G[le++], done: !G }
                    );
                  },
                };
              throw new TypeError(
                J
                  ? 'Object is not iterable.'
                  : 'Symbol.iterator is not defined.'
              );
            })(G)),
            (j = {}),
            le('next'),
            le('throw'),
            le('return'),
            (j[Symbol.asyncIterator] = function () {
              return this;
            }),
            j);
        function le(ke) {
          j[ke] =
            G[ke] &&
            function (it) {
              return new Promise(function (gt, _t) {
                !(function se(ke, it, gt, _t) {
                  Promise.resolve(_t).then(function (Be) {
                    ke({ value: Be, done: gt });
                  }, it);
                })(gt, _t, (it = G[ke](it)).done, it.value);
              });
            };
        }
      }
      v.d(ge, { FC: () => ie, KL: () => Ne, mG: () => Y, qq: () => K });
    },
    6895: (Xe, ge, v) => {
      v.d(ge, {
        Do: () => Te,
        EM: () => hr,
        HT: () => ee,
        JF: () => Gt,
        K0: () => B,
        Mx: () => Zr,
        O5: () => oo,
        PC: () => cr,
        RF: () => nn,
        S$: () => K,
        V_: () => ne,
        Ye: () => ve,
        b0: () => Ne,
        bD: () => Jo,
        ez: () => Fo,
        lw: () => Y,
        mk: () => Oo,
        mr: () => Ae,
        n9: () => Ln,
        q: () => H,
        sg: () => fo,
        w_: () => I,
      });
      var s = v(4650);
      let C = null;
      function H() {
        return C;
      }
      function ee(m) {
        C || (C = m);
      }
      class I {}
      const B = new s.OlP('DocumentToken');
      let Y = (() => {
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
                return (0, s.LFG)(te);
              })();
            },
            providedIn: 'platform',
          })),
          m
        );
      })();
      const ne = new s.OlP('Location Initialized');
      let te = (() => {
        class m extends Y {
          constructor(x) {
            super(), (this._doc = x), this._init();
          }
          _init() {
            (this.location = window.location), (this._history = window.history);
          }
          getBaseHrefFromDOM() {
            return H().getBaseHref(this._doc);
          }
          onPopState(x) {
            const E = H().getGlobalEventTarget(this._doc, 'window');
            return (
              E.addEventListener('popstate', x, !1),
              () => E.removeEventListener('popstate', x)
            );
          }
          onHashChange(x) {
            const E = H().getGlobalEventTarget(this._doc, 'window');
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
            oe() ? this._history.pushState(x, E, V) : (this.location.hash = V);
          }
          replaceState(x, E, V) {
            oe()
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
            return new (x || m)(s.LFG(B));
          }),
          (m.ɵprov = s.Yz7({
            token: m,
            factory: function () {
              return (function Ze() {
                return new te((0, s.LFG)(B));
              })();
            },
            providedIn: 'platform',
          })),
          m
        );
      })();
      function oe() {
        return !!window.history.pushState;
      }
      function Ee(m, M) {
        if (0 == m.length) return M;
        if (0 == M.length) return m;
        let x = 0;
        return (
          m.endsWith('/') && x++,
          M.startsWith('/') && x++,
          2 == x ? m + M.substring(1) : 1 == x ? m + M : m + '/' + M
        );
      }
      function de(m) {
        const M = m.match(/#|\?|$/),
          x = (M && M.index) || m.length;
        return m.slice(0, x - ('/' === m[x - 1] ? 1 : 0)) + m.slice(x);
      }
      function ye(m) {
        return m && '?' !== m[0] ? '?' + m : m;
      }
      let K = (() => {
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
              return (function ie() {
                const m = (0, s.LFG)(B).location;
                return new Ne((0, s.LFG)(Y), (m && m.origin) || '');
              })();
            },
            providedIn: 'root',
          })),
          m
        );
      })();
      const Ae = new s.OlP('appBaseHref');
      let Ne = (() => {
          class m extends K {
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
              return Ee(this._baseHref, x);
            }
            path(x = !1) {
              const E =
                  this._platformLocation.pathname +
                  ye(this._platformLocation.search),
                V = this._platformLocation.hash;
              return V && x ? `${E}${V}` : E;
            }
            pushState(x, E, V, ae) {
              const _e = this.prepareExternalUrl(V + ye(ae));
              this._platformLocation.pushState(x, E, _e);
            }
            replaceState(x, E, V, ae) {
              const _e = this.prepareExternalUrl(V + ye(ae));
              this._platformLocation.replaceState(x, E, _e);
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
              return new (x || m)(s.LFG(Y), s.LFG(Ae, 8));
            }),
            (m.ɵprov = s.Yz7({ token: m, factory: m.ɵfac })),
            m
          );
        })(),
        Te = (() => {
          class m extends K {
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
              const E = Ee(this._baseHref, x);
              return E.length > 0 ? '#' + E : E;
            }
            pushState(x, E, V, ae) {
              let _e = this.prepareExternalUrl(V + ye(ae));
              0 == _e.length && (_e = this._platformLocation.pathname),
                this._platformLocation.pushState(x, E, _e);
            }
            replaceState(x, E, V, ae) {
              let _e = this.prepareExternalUrl(V + ye(ae));
              0 == _e.length && (_e = this._platformLocation.pathname),
                this._platformLocation.replaceState(x, E, _e);
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
              return new (x || m)(s.LFG(Y), s.LFG(Ae, 8));
            }),
            (m.ɵprov = s.Yz7({ token: m, factory: m.ɵfac })),
            m
          );
        })(),
        ve = (() => {
          class m {
            constructor(x) {
              (this._subject = new s.vpe()),
                (this._urlChangeListeners = []),
                (this._urlChangeSubscription = null),
                (this._locationStrategy = x);
              const E = this._locationStrategy.getBaseHref();
              (this._baseHref = de(Ie(E))),
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
              return this.path() == this.normalize(x + ye(E));
            }
            normalize(x) {
              return m.stripTrailingSlash(
                (function we(m, M) {
                  return m && M.startsWith(m) ? M.substring(m.length) : M;
                })(this._baseHref, Ie(x))
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
                  this.prepareExternalUrl(x + ye(E)),
                  V
                );
            }
            replaceState(x, E = '', V = null) {
              this._locationStrategy.replaceState(V, '', x, E),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(x + ye(E)),
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
            (m.normalizeQueryParams = ye),
            (m.joinWithSlash = Ee),
            (m.stripTrailingSlash = de),
            (m.ɵfac = function (x) {
              return new (x || m)(s.LFG(K));
            }),
            (m.ɵprov = s.Yz7({
              token: m,
              factory: function () {
                return (function Le() {
                  return new ve((0, s.LFG)(K));
                })();
              },
              providedIn: 'root',
            })),
            m
          );
        })();
      function Ie(m) {
        return m.replace(/\/index.html$/, '');
      }
      function Zr(m, M) {
        M = encodeURIComponent(M);
        for (const x of m.split(';')) {
          const E = x.indexOf('='),
            [V, ae] = -1 == E ? [x, ''] : [x.slice(0, E), x.slice(E + 1)];
          if (V.trim() === M) return decodeURIComponent(ae);
        }
        return null;
      }
      let Oo = (() => {
        class m {
          constructor(x, E, V, ae) {
            (this._iterableDiffers = x),
              (this._keyValueDiffers = E),
              (this._ngEl = V),
              (this._renderer = ae),
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
            x.forEachOperation((V, ae, _e) => {
              if (null == V.previousIndex)
                E.createEmbeddedView(
                  this._template,
                  new Yn(V.item, this._ngForOf, -1, -1),
                  null === _e ? void 0 : _e
                );
              else if (null == _e) E.remove(null === ae ? void 0 : ae);
              else if (null !== ae) {
                const Ge = E.get(ae);
                E.move(Ge, _e), qn(Ge, V);
              }
            });
            for (let V = 0, ae = E.length; V < ae; V++) {
              const Ge = E.get(V).context;
              (Ge.index = V), (Ge.count = ae), (Ge.ngForOf = this._ngForOf);
            }
            x.forEachIdentityChange(V => {
              qn(E.get(V.currentIndex), V);
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
      function qn(m, M) {
        m.context.$implicit = M.item;
      }
      let oo = (() => {
        class m {
          constructor(x, E) {
            (this._viewContainer = x),
              (this._context = new tn()),
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
            hn('ngIfThen', x),
              (this._thenTemplateRef = x),
              (this._thenViewRef = null),
              this._updateView();
          }
          set ngIfElse(x) {
            hn('ngIfElse', x),
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
      class tn {
        constructor() {
          (this.$implicit = null), (this.ngIf = null);
        }
      }
      function hn(m, M) {
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
      let nn = (() => {
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
              return new (x || m)(s.Y36(s.s_b), s.Y36(s.Rgc), s.Y36(nn, 9));
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
              const [V, ae] = x.split('.');
              null != (E = null != E && ae ? `${E}${ae}` : E)
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
            factory: () => new Qr((0, s.LFG)(B), window),
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
                const ae = V.shadowRoot;
                if (ae) {
                  const _e =
                    ae.getElementById(M) || ae.querySelector(`[name="${M}"]`);
                  if (_e) return _e;
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
            ae = this.offset();
          this.window.scrollTo(E - ae[0], V - ae[1]);
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
      class Gt {}
    },
    529: (Xe, ge, v) => {
      v.d(ge, { JF: () => Fn, WM: () => ne, eN: () => se });
      var s = v(6895),
        C = v(4650),
        H = v(9646),
        Q = v(8306),
        ee = v(4351),
        I = v(9300),
        B = v(4004);
      class Y {}
      class fe {}
      class ne {
        constructor(U) {
          (this.normalizedNames = new Map()),
            (this.lazyUpdate = null),
            U
              ? (this.lazyInit =
                  'string' == typeof U
                    ? () => {
                        (this.headers = new Map()),
                          U.split('\n').forEach($ => {
                            const me = $.indexOf(':');
                            if (me > 0) {
                              const W = $.slice(0, me),
                                Re = W.toLowerCase(),
                                It = $.slice(me + 1).trim();
                              this.maybeSetNormalizedName(W, Re),
                                this.headers.has(Re)
                                  ? this.headers.get(Re).push(It)
                                  : this.headers.set(Re, [It]);
                            }
                          });
                      }
                    : () => {
                        (this.headers = new Map()),
                          Object.keys(U).forEach($ => {
                            let me = U[$];
                            const W = $.toLowerCase();
                            'string' == typeof me && (me = [me]),
                              me.length > 0 &&
                                (this.headers.set(W, me),
                                this.maybeSetNormalizedName($, W));
                          });
                      })
              : (this.headers = new Map());
        }
        has(U) {
          return this.init(), this.headers.has(U.toLowerCase());
        }
        get(U) {
          this.init();
          const $ = this.headers.get(U.toLowerCase());
          return $ && $.length > 0 ? $[0] : null;
        }
        keys() {
          return this.init(), Array.from(this.normalizedNames.values());
        }
        getAll(U) {
          return this.init(), this.headers.get(U.toLowerCase()) || null;
        }
        append(U, $) {
          return this.clone({ name: U, value: $, op: 'a' });
        }
        set(U, $) {
          return this.clone({ name: U, value: $, op: 's' });
        }
        delete(U, $) {
          return this.clone({ name: U, value: $, op: 'd' });
        }
        maybeSetNormalizedName(U, $) {
          this.normalizedNames.has($) || this.normalizedNames.set($, U);
        }
        init() {
          this.lazyInit &&
            (this.lazyInit instanceof ne
              ? this.copyFrom(this.lazyInit)
              : this.lazyInit(),
            (this.lazyInit = null),
            this.lazyUpdate &&
              (this.lazyUpdate.forEach(U => this.applyUpdate(U)),
              (this.lazyUpdate = null)));
        }
        copyFrom(U) {
          U.init(),
            Array.from(U.headers.keys()).forEach($ => {
              this.headers.set($, U.headers.get($)),
                this.normalizedNames.set($, U.normalizedNames.get($));
            });
        }
        clone(U) {
          const $ = new ne();
          return (
            ($.lazyInit =
              this.lazyInit && this.lazyInit instanceof ne
                ? this.lazyInit
                : this),
            ($.lazyUpdate = (this.lazyUpdate || []).concat([U])),
            $
          );
        }
        applyUpdate(U) {
          const $ = U.name.toLowerCase();
          switch (U.op) {
            case 'a':
            case 's':
              let me = U.value;
              if (('string' == typeof me && (me = [me]), 0 === me.length))
                return;
              this.maybeSetNormalizedName(U.name, $);
              const W = ('a' === U.op ? this.headers.get($) : void 0) || [];
              W.push(...me), this.headers.set($, W);
              break;
            case 'd':
              const Re = U.value;
              if (Re) {
                let It = this.headers.get($);
                if (!It) return;
                (It = It.filter(wt => -1 === Re.indexOf(wt))),
                  0 === It.length
                    ? (this.headers.delete($), this.normalizedNames.delete($))
                    : this.headers.set($, It);
              } else this.headers.delete($), this.normalizedNames.delete($);
          }
        }
        forEach(U) {
          this.init(),
            Array.from(this.normalizedNames.keys()).forEach($ =>
              U(this.normalizedNames.get($), this.headers.get($))
            );
        }
      }
      class te {
        encodeKey(U) {
          return de(U);
        }
        encodeValue(U) {
          return de(U);
        }
        decodeKey(U) {
          return decodeURIComponent(U);
        }
        decodeValue(U) {
          return decodeURIComponent(U);
        }
      }
      const Ze = /%(\d[a-f0-9])/gi,
        Ee = {
          40: '@',
          '3A': ':',
          24: '$',
          '2C': ',',
          '3B': ';',
          '3D': '=',
          '3F': '?',
          '2F': '/',
        };
      function de(he) {
        return encodeURIComponent(he).replace(Ze, (U, $) => Ee[$] ?? U);
      }
      function ye(he) {
        return `${he}`;
      }
      class K {
        constructor(U = {}) {
          if (
            ((this.updates = null),
            (this.cloneFrom = null),
            (this.encoder = U.encoder || new te()),
            U.fromString)
          ) {
            if (U.fromObject)
              throw new Error('Cannot specify both fromString and fromObject.');
            this.map = (function oe(he, U) {
              const $ = new Map();
              return (
                he.length > 0 &&
                  he
                    .replace(/^\?/, '')
                    .split('&')
                    .forEach(W => {
                      const Re = W.indexOf('='),
                        [It, wt] =
                          -1 == Re
                            ? [U.decodeKey(W), '']
                            : [
                                U.decodeKey(W.slice(0, Re)),
                                U.decodeValue(W.slice(Re + 1)),
                              ],
                        Ve = $.get(It) || [];
                      Ve.push(wt), $.set(It, Ve);
                    }),
                $
              );
            })(U.fromString, this.encoder);
          } else
            U.fromObject
              ? ((this.map = new Map()),
                Object.keys(U.fromObject).forEach($ => {
                  const me = U.fromObject[$],
                    W = Array.isArray(me) ? me.map(ye) : [ye(me)];
                  this.map.set($, W);
                }))
              : (this.map = null);
        }
        has(U) {
          return this.init(), this.map.has(U);
        }
        get(U) {
          this.init();
          const $ = this.map.get(U);
          return $ ? $[0] : null;
        }
        getAll(U) {
          return this.init(), this.map.get(U) || null;
        }
        keys() {
          return this.init(), Array.from(this.map.keys());
        }
        append(U, $) {
          return this.clone({ param: U, value: $, op: 'a' });
        }
        appendAll(U) {
          const $ = [];
          return (
            Object.keys(U).forEach(me => {
              const W = U[me];
              Array.isArray(W)
                ? W.forEach(Re => {
                    $.push({ param: me, value: Re, op: 'a' });
                  })
                : $.push({ param: me, value: W, op: 'a' });
            }),
            this.clone($)
          );
        }
        set(U, $) {
          return this.clone({ param: U, value: $, op: 's' });
        }
        delete(U, $) {
          return this.clone({ param: U, value: $, op: 'd' });
        }
        toString() {
          return (
            this.init(),
            this.keys()
              .map(U => {
                const $ = this.encoder.encodeKey(U);
                return this.map
                  .get(U)
                  .map(me => $ + '=' + this.encoder.encodeValue(me))
                  .join('&');
              })
              .filter(U => '' !== U)
              .join('&')
          );
        }
        clone(U) {
          const $ = new K({ encoder: this.encoder });
          return (
            ($.cloneFrom = this.cloneFrom || this),
            ($.updates = (this.updates || []).concat(U)),
            $
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
                    const $ =
                      ('a' === U.op ? this.map.get(U.param) : void 0) || [];
                    $.push(ye(U.value)), this.map.set(U.param, $);
                    break;
                  case 'd':
                    if (void 0 === U.value) {
                      this.map.delete(U.param);
                      break;
                    }
                    {
                      let me = this.map.get(U.param) || [];
                      const W = me.indexOf(ye(U.value));
                      -1 !== W && me.splice(W, 1),
                        me.length > 0
                          ? this.map.set(U.param, me)
                          : this.map.delete(U.param);
                    }
                }
              }),
              (this.cloneFrom = this.updates = null));
        }
      }
      class Ae {
        constructor() {
          this.map = new Map();
        }
        set(U, $) {
          return this.map.set(U, $), this;
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
      function Te(he) {
        return typeof ArrayBuffer < 'u' && he instanceof ArrayBuffer;
      }
      function ve(he) {
        return typeof Blob < 'u' && he instanceof Blob;
      }
      function Le(he) {
        return typeof FormData < 'u' && he instanceof FormData;
      }
      class Ie {
        constructor(U, $, me, W) {
          let Re;
          if (
            ((this.url = $),
            (this.body = null),
            (this.reportProgress = !1),
            (this.withCredentials = !1),
            (this.responseType = 'json'),
            (this.method = U.toUpperCase()),
            (function Ne(he) {
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
            })(this.method) || W
              ? ((this.body = void 0 !== me ? me : null), (Re = W))
              : (Re = me),
            Re &&
              ((this.reportProgress = !!Re.reportProgress),
              (this.withCredentials = !!Re.withCredentials),
              Re.responseType && (this.responseType = Re.responseType),
              Re.headers && (this.headers = Re.headers),
              Re.context && (this.context = Re.context),
              Re.params && (this.params = Re.params)),
            this.headers || (this.headers = new ne()),
            this.context || (this.context = new Ae()),
            this.params)
          ) {
            const It = this.params.toString();
            if (0 === It.length) this.urlWithParams = $;
            else {
              const wt = $.indexOf('?');
              this.urlWithParams =
                $ + (-1 === wt ? '?' : wt < $.length - 1 ? '&' : '') + It;
            }
          } else (this.params = new K()), (this.urlWithParams = $);
        }
        serializeBody() {
          return null === this.body
            ? null
            : Te(this.body) ||
              ve(this.body) ||
              Le(this.body) ||
              (function we(he) {
                return (
                  typeof URLSearchParams < 'u' && he instanceof URLSearchParams
                );
              })(this.body) ||
              'string' == typeof this.body
            ? this.body
            : this.body instanceof K
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
            : ve(this.body)
            ? this.body.type || null
            : Te(this.body)
            ? null
            : 'string' == typeof this.body
            ? 'text/plain'
            : this.body instanceof K
            ? 'application/x-www-form-urlencoded;charset=UTF-8'
            : 'object' == typeof this.body ||
              'number' == typeof this.body ||
              'boolean' == typeof this.body
            ? 'application/json'
            : null;
        }
        clone(U = {}) {
          const $ = U.method || this.method,
            me = U.url || this.url,
            W = U.responseType || this.responseType,
            Re = void 0 !== U.body ? U.body : this.body,
            It =
              void 0 !== U.withCredentials
                ? U.withCredentials
                : this.withCredentials,
            wt =
              void 0 !== U.reportProgress
                ? U.reportProgress
                : this.reportProgress;
          let Ve = U.headers || this.headers,
            Vt = U.params || this.params;
          const Qe = U.context ?? this.context;
          return (
            void 0 !== U.setHeaders &&
              (Ve = Object.keys(U.setHeaders).reduce(
                (ln, mt) => ln.set(mt, U.setHeaders[mt]),
                Ve
              )),
            U.setParams &&
              (Vt = Object.keys(U.setParams).reduce(
                (ln, mt) => ln.set(mt, U.setParams[mt]),
                Vt
              )),
            new Ie($, me, Re, {
              params: Vt,
              headers: Ve,
              context: Qe,
              reportProgress: wt,
              responseType: W,
              withCredentials: It,
            })
          );
        }
      }
      var X = (() => (
        ((X = X || {})[(X.Sent = 0)] = 'Sent'),
        (X[(X.UploadProgress = 1)] = 'UploadProgress'),
        (X[(X.ResponseHeader = 2)] = 'ResponseHeader'),
        (X[(X.DownloadProgress = 3)] = 'DownloadProgress'),
        (X[(X.Response = 4)] = 'Response'),
        (X[(X.User = 5)] = 'User'),
        X
      ))();
      class Pe {
        constructor(U, $ = 200, me = 'OK') {
          (this.headers = U.headers || new ne()),
            (this.status = void 0 !== U.status ? U.status : $),
            (this.statusText = U.statusText || me),
            (this.url = U.url || null),
            (this.ok = this.status >= 200 && this.status < 300);
        }
      }
      class G extends Pe {
        constructor(U = {}) {
          super(U), (this.type = X.ResponseHeader);
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
      class J extends Pe {
        constructor(U = {}) {
          super(U),
            (this.type = X.Response),
            (this.body = void 0 !== U.body ? U.body : null);
        }
        clone(U = {}) {
          return new J({
            body: void 0 !== U.body ? U.body : this.body,
            headers: U.headers || this.headers,
            status: void 0 !== U.status ? U.status : this.status,
            statusText: U.statusText || this.statusText,
            url: U.url || this.url || void 0,
          });
        }
      }
      class j extends Pe {
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
      function le(he, U) {
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
      let se = (() => {
        class he {
          constructor($) {
            this.handler = $;
          }
          request($, me, W = {}) {
            let Re;
            if ($ instanceof Ie) Re = $;
            else {
              let Ve, Vt;
              (Ve = W.headers instanceof ne ? W.headers : new ne(W.headers)),
                W.params &&
                  (Vt =
                    W.params instanceof K
                      ? W.params
                      : new K({ fromObject: W.params })),
                (Re = new Ie($, me, void 0 !== W.body ? W.body : null, {
                  headers: Ve,
                  context: W.context,
                  params: Vt,
                  reportProgress: W.reportProgress,
                  responseType: W.responseType || 'json',
                  withCredentials: W.withCredentials,
                }));
            }
            const It = (0, H.of)(Re).pipe(
              (0, ee.b)(Ve => this.handler.handle(Ve))
            );
            if ($ instanceof Ie || 'events' === W.observe) return It;
            const wt = It.pipe((0, I.h)(Ve => Ve instanceof J));
            switch (W.observe || 'body') {
              case 'body':
                switch (Re.responseType) {
                  case 'arraybuffer':
                    return wt.pipe(
                      (0, B.U)(Ve => {
                        if (
                          null !== Ve.body &&
                          !(Ve.body instanceof ArrayBuffer)
                        )
                          throw new Error('Response is not an ArrayBuffer.');
                        return Ve.body;
                      })
                    );
                  case 'blob':
                    return wt.pipe(
                      (0, B.U)(Ve => {
                        if (null !== Ve.body && !(Ve.body instanceof Blob))
                          throw new Error('Response is not a Blob.');
                        return Ve.body;
                      })
                    );
                  case 'text':
                    return wt.pipe(
                      (0, B.U)(Ve => {
                        if (null !== Ve.body && 'string' != typeof Ve.body)
                          throw new Error('Response is not a string.');
                        return Ve.body;
                      })
                    );
                  default:
                    return wt.pipe((0, B.U)(Ve => Ve.body));
                }
              case 'response':
                return wt;
              default:
                throw new Error(
                  `Unreachable: unhandled observe type ${W.observe}}`
                );
            }
          }
          delete($, me = {}) {
            return this.request('DELETE', $, me);
          }
          get($, me = {}) {
            return this.request('GET', $, me);
          }
          head($, me = {}) {
            return this.request('HEAD', $, me);
          }
          jsonp($, me) {
            return this.request('JSONP', $, {
              params: new K().append(me, 'JSONP_CALLBACK'),
              observe: 'body',
              responseType: 'json',
            });
          }
          options($, me = {}) {
            return this.request('OPTIONS', $, me);
          }
          patch($, me, W = {}) {
            return this.request('PATCH', $, le(W, me));
          }
          post($, me, W = {}) {
            return this.request('POST', $, le(W, me));
          }
          put($, me, W = {}) {
            return this.request('PUT', $, le(W, me));
          }
        }
        return (
          (he.ɵfac = function ($) {
            return new ($ || he)(C.LFG(Y));
          }),
          (he.ɵprov = C.Yz7({ token: he, factory: he.ɵfac })),
          he
        );
      })();
      class ke {
        constructor(U, $) {
          (this.next = U), (this.interceptor = $);
        }
        handle(U) {
          return this.interceptor.intercept(U, this.next);
        }
      }
      const it = new C.OlP('HTTP_INTERCEPTORS');
      let gt = (() => {
        class he {
          intercept($, me) {
            return me.handle($);
          }
        }
        return (
          (he.ɵfac = function ($) {
            return new ($ || he)();
          }),
          (he.ɵprov = C.Yz7({ token: he, factory: he.ɵfac })),
          he
        );
      })();
      const ce = /^\)\]\}',?\n/;
      let rt = (() => {
        class he {
          constructor($) {
            this.xhrFactory = $;
          }
          handle($) {
            if ('JSONP' === $.method)
              throw new Error(
                'Attempted to construct Jsonp request without HttpClientJsonpModule installed.'
              );
            return new Q.y(me => {
              const W = this.xhrFactory.build();
              if (
                (W.open($.method, $.urlWithParams),
                $.withCredentials && (W.withCredentials = !0),
                $.headers.forEach((vt, nt) =>
                  W.setRequestHeader(vt, nt.join(','))
                ),
                $.headers.has('Accept') ||
                  W.setRequestHeader(
                    'Accept',
                    'application/json, text/plain, */*'
                  ),
                !$.headers.has('Content-Type'))
              ) {
                const vt = $.detectContentTypeHeader();
                null !== vt && W.setRequestHeader('Content-Type', vt);
              }
              if ($.responseType) {
                const vt = $.responseType.toLowerCase();
                W.responseType = 'json' !== vt ? vt : 'text';
              }
              const Re = $.serializeBody();
              let It = null;
              const wt = () => {
                  if (null !== It) return It;
                  const vt = W.statusText || 'OK',
                    nt = new ne(W.getAllResponseHeaders()),
                    vn =
                      (function He(he) {
                        return 'responseURL' in he && he.responseURL
                          ? he.responseURL
                          : /^X-Request-URL:/m.test(he.getAllResponseHeaders())
                          ? he.getResponseHeader('X-Request-URL')
                          : null;
                      })(W) || $.url;
                  return (
                    (It = new G({
                      headers: nt,
                      status: W.status,
                      statusText: vt,
                      url: vn,
                    })),
                    It
                  );
                },
                Ve = () => {
                  let {
                      headers: vt,
                      status: nt,
                      statusText: vn,
                      url: R,
                    } = wt(),
                    Ce = null;
                  204 !== nt &&
                    (Ce =
                      typeof W.response > 'u' ? W.responseText : W.response),
                    0 === nt && (nt = Ce ? 200 : 0);
                  let P = nt >= 200 && nt < 300;
                  if ('json' === $.responseType && 'string' == typeof Ce) {
                    const Z = Ce;
                    Ce = Ce.replace(ce, '');
                    try {
                      Ce = '' !== Ce ? JSON.parse(Ce) : null;
                    } catch (Je) {
                      (Ce = Z), P && ((P = !1), (Ce = { error: Je, text: Ce }));
                    }
                  }
                  P
                    ? (me.next(
                        new J({
                          body: Ce,
                          headers: vt,
                          status: nt,
                          statusText: vn,
                          url: R || void 0,
                        })
                      ),
                      me.complete())
                    : me.error(
                        new j({
                          error: Ce,
                          headers: vt,
                          status: nt,
                          statusText: vn,
                          url: R || void 0,
                        })
                      );
                },
                Vt = vt => {
                  const { url: nt } = wt(),
                    vn = new j({
                      error: vt,
                      status: W.status || 0,
                      statusText: W.statusText || 'Unknown Error',
                      url: nt || void 0,
                    });
                  me.error(vn);
                };
              let Qe = !1;
              const ln = vt => {
                  Qe || (me.next(wt()), (Qe = !0));
                  let nt = { type: X.DownloadProgress, loaded: vt.loaded };
                  vt.lengthComputable && (nt.total = vt.total),
                    'text' === $.responseType &&
                      !!W.responseText &&
                      (nt.partialText = W.responseText),
                    me.next(nt);
                },
                mt = vt => {
                  let nt = { type: X.UploadProgress, loaded: vt.loaded };
                  vt.lengthComputable && (nt.total = vt.total), me.next(nt);
                };
              return (
                W.addEventListener('load', Ve),
                W.addEventListener('error', Vt),
                W.addEventListener('timeout', Vt),
                W.addEventListener('abort', Vt),
                $.reportProgress &&
                  (W.addEventListener('progress', ln),
                  null !== Re &&
                    W.upload &&
                    W.upload.addEventListener('progress', mt)),
                W.send(Re),
                me.next({ type: X.Sent }),
                () => {
                  W.removeEventListener('error', Vt),
                    W.removeEventListener('abort', Vt),
                    W.removeEventListener('load', Ve),
                    W.removeEventListener('timeout', Vt),
                    $.reportProgress &&
                      (W.removeEventListener('progress', ln),
                      null !== Re &&
                        W.upload &&
                        W.upload.removeEventListener('progress', mt)),
                    W.readyState !== W.DONE && W.abort();
                }
              );
            });
          }
        }
        return (
          (he.ɵfac = function ($) {
            return new ($ || he)(C.LFG(s.JF));
          }),
          (he.ɵprov = C.Yz7({ token: he, factory: he.ɵfac })),
          he
        );
      })();
      const ft = new C.OlP('XSRF_COOKIE_NAME'),
        xt = new C.OlP('XSRF_HEADER_NAME');
      class lt {}
      let St = (() => {
          class he {
            constructor($, me, W) {
              (this.doc = $),
                (this.platform = me),
                (this.cookieName = W),
                (this.lastCookieString = ''),
                (this.lastToken = null),
                (this.parseCount = 0);
            }
            getToken() {
              if ('server' === this.platform) return null;
              const $ = this.doc.cookie || '';
              return (
                $ !== this.lastCookieString &&
                  (this.parseCount++,
                  (this.lastToken = (0, s.Mx)($, this.cookieName)),
                  (this.lastCookieString = $)),
                this.lastToken
              );
            }
          }
          return (
            (he.ɵfac = function ($) {
              return new ($ || he)(C.LFG(s.K0), C.LFG(C.Lbi), C.LFG(ft));
            }),
            (he.ɵprov = C.Yz7({ token: he, factory: he.ɵfac })),
            he
          );
        })(),
        Ht = (() => {
          class he {
            constructor($, me) {
              (this.tokenService = $), (this.headerName = me);
            }
            intercept($, me) {
              const W = $.url.toLowerCase();
              if (
                'GET' === $.method ||
                'HEAD' === $.method ||
                W.startsWith('http://') ||
                W.startsWith('https://')
              )
                return me.handle($);
              const Re = this.tokenService.getToken();
              return (
                null !== Re &&
                  !$.headers.has(this.headerName) &&
                  ($ = $.clone({
                    headers: $.headers.set(this.headerName, Re),
                  })),
                me.handle($)
              );
            }
          }
          return (
            (he.ɵfac = function ($) {
              return new ($ || he)(C.LFG(lt), C.LFG(xt));
            }),
            (he.ɵprov = C.Yz7({ token: he, factory: he.ɵfac })),
            he
          );
        })(),
        et = (() => {
          class he {
            constructor($, me) {
              (this.backend = $), (this.injector = me), (this.chain = null);
            }
            handle($) {
              if (null === this.chain) {
                const me = this.injector.get(it, []);
                this.chain = me.reduceRight(
                  (W, Re) => new ke(W, Re),
                  this.backend
                );
              }
              return this.chain.handle($);
            }
          }
          return (
            (he.ɵfac = function ($) {
              return new ($ || he)(C.LFG(fe), C.LFG(C.zs3));
            }),
            (he.ɵprov = C.Yz7({ token: he, factory: he.ɵfac })),
            he
          );
        })(),
        kt = (() => {
          class he {
            static disable() {
              return {
                ngModule: he,
                providers: [{ provide: Ht, useClass: gt }],
              };
            }
            static withOptions($ = {}) {
              return {
                ngModule: he,
                providers: [
                  $.cookieName ? { provide: ft, useValue: $.cookieName } : [],
                  $.headerName ? { provide: xt, useValue: $.headerName } : [],
                ],
              };
            }
          }
          return (
            (he.ɵfac = function ($) {
              return new ($ || he)();
            }),
            (he.ɵmod = C.oAB({ type: he })),
            (he.ɵinj = C.cJS({
              providers: [
                Ht,
                { provide: it, useExisting: Ht, multi: !0 },
                { provide: lt, useClass: St },
                { provide: ft, useValue: 'XSRF-TOKEN' },
                { provide: xt, useValue: 'X-XSRF-TOKEN' },
              ],
            })),
            he
          );
        })(),
        Fn = (() => {
          class he {}
          return (
            (he.ɵfac = function ($) {
              return new ($ || he)();
            }),
            (he.ɵmod = C.oAB({ type: he })),
            (he.ɵinj = C.cJS({
              providers: [
                se,
                { provide: Y, useClass: et },
                rt,
                { provide: fe, useExisting: rt },
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
    4650: (Xe, ge, v) => {
      v.d(ge, {
        $8M: () => l,
        $Z: () => cp,
        AFp: () => T0,
        ALo: () => Kh,
        AaK: () => Y,
        B6R: () => Ce,
        BQk: () => Ic,
        CHM: () => mr,
        CRH: () => c0,
        CZH: () => $c,
        CqO: () => ff,
        D6c: () => EC,
        EJc: () => Hy,
        EiD: () => od,
        EpF: () => df,
        F4k: () => pf,
        FYo: () => Uh,
        FiY: () => ls,
        G48: () => aC,
        Gf: () => r0,
        GfV: () => Bh,
        GkF: () => Al,
        Gpc: () => te,
        JOm: () => Lo,
        JVY: () => Bg,
        Jf7: () => pd,
        KtG: () => ei,
        L6k: () => jg,
        LAX: () => $g,
        LFG: () => gn,
        LSH: () => ya,
        Lbi: () => Uy,
        MAs: () => uf,
        MGl: () => Tc,
        MMx: () => Yl,
        NdJ: () => Tl,
        O4$: () => qi,
        OlP: () => We,
        Oqu: () => kl,
        PXZ: () => nC,
        Q6J: () => El,
        QGY: () => Il,
        QP$: () => Bi,
        Qsj: () => T_,
        R0b: () => no,
        RDi: () => Or,
        Rgc: () => Ns,
        SBq: () => Is,
        Sil: () => zy,
        Suo: () => s0,
        TTD: () => qo,
        TgZ: () => Oc,
        Tol: () => Nf,
        VKq: () => $h,
        W1O: () => d0,
        WD2: () => io,
        WLB: () => zh,
        XFs: () => et,
        Xpm: () => R,
        Y36: () => Ci,
        YKP: () => Lh,
        YNc: () => lf,
        Yjl: () => bn,
        Yz7: () => Mt,
        ZZ4: () => xu,
        _Bn: () => Rh,
        _UZ: () => Pl,
        _Vd: () => As,
        _c5: () => MC,
        _uU: () => jf,
        aQg: () => bu,
        c2e: () => By,
        cJS: () => Oe,
        cg1: () => Ll,
        dDg: () => Qy,
        deG: () => Ye,
        dqk: () => W,
        eBb: () => Hg,
        eFA: () => $0,
        ekj: () => Nl,
        eoX: () => U0,
        g9A: () => F0,
        h0i: () => $r,
        hGG: () => wC,
        hM9: () => j_,
        hij: () => Fc,
        iGM: () => o0,
        ifc: () => me,
        ip1: () => I0,
        kL8: () => ch,
        kcU: () => Ki,
        lG2: () => Ot,
        lqb: () => bi,
        lri: () => L0,
        mCW: () => fs,
        n5z: () => ns,
        oAB: () => ut,
        oJD: () => rd,
        oxw: () => xf,
        pB0: () => zg,
        q3G: () => mn,
        qLn: () => ms,
        qOj: () => vl,
        qZA: () => Pc,
        qzn: () => gi,
        rWj: () => V0,
        s9C: () => Fl,
        sBO: () => lC,
        sIi: () => vs,
        s_b: () => Bc,
        soG: () => zc,
        tBr: () => ac,
        tb: () => N0,
        tp0: () => us,
        uIk: () => wl,
        vHH: () => de,
        vpe: () => $o,
        wAp: () => dt,
        xi3: () => Jh,
        xp6: () => Ud,
        yhl: () => qu,
        ynx: () => Ac,
        z2F: () => Gc,
        z3N: () => tr,
        zSh: () => Ha,
        zs3: () => Vo,
      });
      var s = v(7579),
        C = v(727),
        H = v(8306),
        Q = v(6451),
        ee = v(3099);
      function I(e) {
        for (let t in e) if (e[t] === I) return t;
        throw Error('Could not find renamed property on target object.');
      }
      function B(e, t) {
        for (const n in t)
          t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]);
      }
      function Y(e) {
        if ('string' == typeof e) return e;
        if (Array.isArray(e)) return '[' + e.map(Y).join(', ') + ']';
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
      const ne = I({ __forward_ref__: I });
      function te(e) {
        return (
          (e.__forward_ref__ = te),
          (e.toString = function () {
            return Y(this());
          }),
          e
        );
      }
      function oe(e) {
        return Ze(e) ? e() : e;
      }
      function Ze(e) {
        return (
          'function' == typeof e &&
          e.hasOwnProperty(ne) &&
          e.__forward_ref__ === te
        );
      }
      class de extends Error {
        constructor(t, n) {
          super(
            (function ye(e, t) {
              return `NG0${Math.abs(e)}${t ? ': ' + t.trim() : ''}`;
            })(t, n)
          ),
            (this.code = t);
        }
      }
      function K(e) {
        return 'string' == typeof e ? e : null == e ? '' : String(e);
      }
      function ve(e, t) {
        throw new de(-201, !1);
      }
      function _t(e, t) {
        null == e &&
          (function Be(e, t, n, o) {
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
      function Oe(e) {
        return { providers: e.providers || [], imports: e.imports || [] };
      }
      function pe(e) {
        return ce(e, xt) || ce(e, St);
      }
      function ce(e, t) {
        return e.hasOwnProperty(t) ? e[t] : null;
      }
      function ft(e) {
        return e && (e.hasOwnProperty(lt) || e.hasOwnProperty(Ht))
          ? e[lt]
          : null;
      }
      const xt = I({ ɵprov: I }),
        lt = I({ ɵinj: I }),
        St = I({ ngInjectableDef: I }),
        Ht = I({ ngInjectorDef: I });
      var et = (() => (
        ((et = et || {})[(et.Default = 0)] = 'Default'),
        (et[(et.Host = 1)] = 'Host'),
        (et[(et.Self = 2)] = 'Self'),
        (et[(et.SkipSelf = 4)] = 'SkipSelf'),
        (et[(et.Optional = 8)] = 'Optional'),
        et
      ))();
      let an;
      function kt(e) {
        const t = an;
        return (an = e), t;
      }
      function Fn(e, t, n) {
        const o = pe(e);
        return o && 'root' == o.providedIn
          ? void 0 === o.value
            ? (o.value = o.factory())
            : o.value
          : n & et.Optional
          ? null
          : void 0 !== t
          ? t
          : void ve(Y(e));
      }
      function Cn(e) {
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
      const W = (() =>
          (typeof globalThis < 'u' && globalThis) ||
          (typeof global < 'u' && global) ||
          (typeof window < 'u' && window) ||
          (typeof self < 'u' &&
            typeof WorkerGlobalScope < 'u' &&
            self instanceof WorkerGlobalScope &&
            self))(),
        wt = {},
        Ve = [],
        Vt = I({ ɵcmp: I }),
        Qe = I({ ɵdir: I }),
        ln = I({ ɵpipe: I }),
        mt = I({ ɵmod: I }),
        vt = I({ ɵfac: I }),
        nt = I({ __NG_ELEMENT_ID__: I });
      let vn = 0;
      function R(e) {
        return Cn(() => {
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
              selectors: e.selectors || Ve,
              viewQuery: e.viewQuery || null,
              features: e.features || null,
              data: e.data || {},
              encapsulation: e.encapsulation || me.Emulated,
              id: 'c' + vn++,
              styles: e.styles || Ve,
              _: null,
              setInput: null,
              schemas: e.schemas || null,
              tView: null,
            },
            i = e.dependencies,
            c = e.features;
          return (
            (r.inputs = Ue(e.inputs, o)),
            (r.outputs = Ue(e.outputs)),
            c && c.forEach(d => d(r)),
            (r.directiveDefs = i
              ? () => ('function' == typeof i ? i() : i).map(P).filter(Z)
              : null),
            (r.pipeDefs = i
              ? () => ('function' == typeof i ? i() : i).map(Zt).filter(Z)
              : null),
            r
          );
        });
      }
      function Ce(e, t, n) {
        const o = e.ɵcmp;
        (o.directiveDefs = () => ('function' == typeof t ? t() : t).map(P)),
          (o.pipeDefs = () => ('function' == typeof n ? n() : n).map(Zt));
      }
      function P(e) {
        return Ct(e) || Jt(e);
      }
      function Z(e) {
        return null !== e;
      }
      const Je = {};
      function ut(e) {
        return Cn(() => {
          const t = {
            type: e.type,
            bootstrap: e.bootstrap || Ve,
            declarations: e.declarations || Ve,
            imports: e.imports || Ve,
            exports: e.exports || Ve,
            transitiveCompileScopes: null,
            schemas: e.schemas || null,
            id: e.id || null,
          };
          return null != e.id && (Je[e.id] = e.type), t;
        });
      }
      function Ue(e, t) {
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
      const Ot = R;
      function bn(e) {
        return {
          type: e.type,
          name: e.name,
          factory: null,
          pure: !1 !== e.pure,
          standalone: !0 === e.standalone,
          onDestroy: e.type.prototype.ngOnDestroy || null,
        };
      }
      function Ct(e) {
        return e[Vt] || null;
      }
      function Jt(e) {
        return e[Qe] || null;
      }
      function Zt(e) {
        return e[ln] || null;
      }
      function Xt(e, t) {
        const n = e[mt] || null;
        if (!n && !0 === t)
          throw new Error(`Type ${Y(e)} does not have '\u0275mod' property.`);
        return n;
      }
      function tn(e) {
        return Array.isArray(e) && 'object' == typeof e[1];
      }
      function hn(e) {
        return Array.isArray(e) && !0 === e[1];
      }
      function zn(e) {
        return 0 != (8 & e.flags);
      }
      function nn(e) {
        return 2 == (2 & e.flags);
      }
      function Ln(e) {
        return 1 == (1 & e.flags);
      }
      function Dn(e) {
        return null !== e.template;
      }
      function sr(e) {
        return 0 != (256 & e[2]);
      }
      function Kn(e, t) {
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
      function qo() {
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
            (function Ko(e, t) {
              return (e[Jn] = t);
            })(e, { previous: wt, current: null }),
          i = r.current || (r.current = {}),
          c = r.previous,
          d = this.declaredInputs[n],
          p = c[d];
        (i[d] = new io(p && p.currentValue, t, c === wt)), (e[o] = t);
      }
      qo.ngInherit = !0;
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
      function Gt(e) {
        for (; Array.isArray(e); ) e = e[0];
        return e;
      }
      function x(e, t) {
        return Gt(t[e]);
      }
      function E(e, t) {
        return Gt(t[e.index]);
      }
      function ae(e, t) {
        return e.data[t];
      }
      function _e(e, t) {
        return e[t];
      }
      function Ge(e, t) {
        const n = t[e];
        return tn(n) ? n : n[0];
      }
      function Pt(e) {
        return 4 == (4 & e[2]);
      }
      function Rt(e) {
        return 64 == (64 & e[2]);
      }
      function bt(e, t) {
        return null == t ? null : e[t];
      }
      function on(e) {
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
      function De() {
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
      function Wt() {
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
      function $t() {
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
        if (n & et.SkipSelf) {
          let r = t,
            i = e;
          for (
            ;
            !((r = r.parent),
            null !== r ||
              n & et.Host ||
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
      function _o(e) {
        qe.lFrame.selectedIndex = e;
      }
      function rn() {
        const e = qe.lFrame;
        return ae(e.tView, e.selectedIndex);
      }
      function qi() {
        qe.lFrame.currentNamespace = 'svg';
      }
      function Ki() {
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
              ngAfterViewChecked: y,
              ngOnDestroy: D,
            } = i;
          c && (e.contentHooks || (e.contentHooks = [])).push(-n, c),
            d &&
              ((e.contentHooks || (e.contentHooks = [])).push(n, d),
              (e.contentCheckHooks || (e.contentCheckHooks = [])).push(n, d)),
            p && (e.viewHooks || (e.viewHooks = [])).push(-n, p),
            y &&
              ((e.viewHooks || (e.viewHooks = [])).push(n, y),
              (e.viewCheckHooks || (e.viewCheckHooks = [])).push(n, y)),
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
      let qs = 0;
      const ao = {};
      function _r(e, t) {
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
          for (let y = 0; y < 8; y++) t[i + y] = d[c + y] | p[c + y];
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
        !(function Ks(e, t, n) {
          let o;
          'string' == typeof n
            ? (o = n.charCodeAt(0) || 0)
            : n.hasOwnProperty(nt) && (o = n[nt]),
            null == o && (o = n[nt] = qs++);
          const r = 255 & o;
          t.data[e + (r >> 5)] |= 1 << r;
        })(e, t, n);
      }
      function Qs(e, t, n) {
        if (n & et.Optional) return e;
        ve();
      }
      function Xs(e, t, n, o) {
        if (
          (n & et.Optional && void 0 === o && (o = null),
          0 == (n & (et.Self | et.Host)))
        ) {
          const r = e[9],
            i = kt(void 0);
          try {
            return r ? r.get(t, o, n & et.Optional) : Fn(t, o, n & et.Optional);
          } finally {
            kt(i);
          }
        }
        return Qs(o, 0, n);
      }
      function ec(e, t, n, o = et.Default, r) {
        if (null !== e) {
          if (1024 & t[2]) {
            const c = (function Tu(e, t, n, o, r) {
              let i = e,
                c = t;
              for (
                ;
                null !== i && null !== c && 1024 & c[2] && !(256 & c[2]);

              ) {
                const d = tc(i, c, n, o | et.Self, ao);
                if (d !== ao) return d;
                let p = i.parent;
                if (!p) {
                  const y = c[21];
                  if (y) {
                    const D = y.get(n, ao, o);
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
          const t = e.hasOwnProperty(nt) ? e[nt] : void 0;
          return 'number' == typeof t ? (t >= 0 ? 255 & t : ca) : t;
        })(n);
        if ('function' == typeof i) {
          if (!Vs(t, e, o)) return o & et.Host ? Qs(r, 0, o) : Xs(t, n, o, r);
          try {
            const c = i(o);
            if (null != c || o & et.Optional) return c;
            ve();
          } finally {
            Bs();
          }
        } else if ('number' == typeof i) {
          let c = null,
            d = Js(e, t),
            p = -1,
            y = o & et.Host ? t[16][6] : null;
          for (
            (-1 === d || o & et.SkipSelf) &&
            ((p = -1 === d ? lo(e, t) : t[d + 8]),
            -1 !== p && ui(o, !1)
              ? ((c = t[1]), (d = br(p)), (t = Ro(p, t)))
              : (d = -1));
            -1 !== d;

          ) {
            const D = t[1];
            if (nc(i, d, D.data)) {
              const A = ia(d, t, n, c, o, y);
              if (A !== ao) return A;
            }
            (p = t[d + 8]),
              -1 !== p && ui(o, t[1].data[d + 8] === y) && nc(i, d, t)
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
            null == o ? nn(d) && Sr : o != c && 0 != (3 & d.type),
            r & et.Host && i === d
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
        for (let q = o ? d : d + D; q < L; q++) {
          const be = c[q];
          if ((q < p && n === be) || (q >= p && be.type === n)) return q;
        }
        if (r) {
          const q = c[p];
          if (q && Dn(q) && q.type === n) return p;
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
            (function Ae(e, t) {
              const n = t ? `. Dependency path: ${t.join(' > ')} > ${e}` : '';
              throw new de(
                -200,
                `Circular dependency in DI detected for ${e}${n}`
              );
            })(
              (function ie(e) {
                return 'function' == typeof e
                  ? e.name || e.toString()
                  : 'object' == typeof e &&
                    null != e &&
                    'function' == typeof e.type
                  ? e.type.name || e.type.toString()
                  : K(e);
              })(i[n])
            );
          const d = li(c.canSeeViewProviders);
          c.resolving = !0;
          const p = c.injectImpl ? kt(c.injectImpl) : null;
          Vs(e, o, et.Default);
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
        return !(e & et.Self || (e & et.Host && t));
      }
      class yr {
        constructor(t, n) {
          (this._tNode = t), (this._lView = n);
        }
        get(t, n, o) {
          return ec(this._tNode, this._lView, t, o, n);
        }
      }
      function ca() {
        return new yr(Wt(), De());
      }
      function ns(e) {
        return Cn(() => {
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
        return Ze(e)
          ? () => {
              const t = os(oe(e));
              return t && t();
            }
          : Kn(e);
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
        })(Wt(), e);
      }
      const f = '__parameters__';
      function F(e, t, n) {
        return Cn(() => {
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
            function d(p, y, D) {
              const A = p.hasOwnProperty(f)
                ? p[f]
                : Object.defineProperty(p, f, { value: [] })[f];
              for (; A.length <= D; ) A.push(null);
              return (A[D] = A[D] || []).push(c), p;
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
      class We {
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
      const Ye = new We('AnalyzeForEntryComponents');
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
      function _g(e, t = et.Default) {
        if (void 0 === cs) throw new de(-203, !1);
        return null === cs
          ? Fn(e, void 0, t)
          : cs.get(e, t & et.Optional ? null : void 0, t);
      }
      function gn(e, t = et.Default) {
        return (
          (function Dt() {
            return an;
          })() || _g
        )(oe(e), t);
      }
      function fa(e) {
        const t = [];
        for (let n = 0; n < e.length; n++) {
          const o = oe(e[n]);
          if (Array.isArray(o)) {
            if (0 === o.length) throw new de(900, !1);
            let r,
              i = et.Default;
            for (let c = 0; c < o.length; c++) {
              const d = o[c],
                p = Cg(d);
              'number' == typeof p
                ? -1 === p
                  ? (r = d.token)
                  : (i |= p)
                : (r = d);
            }
            t.push(gn(r, i));
          } else t.push(gn(o));
        }
        return t;
      }
      function as(e, t) {
        return (e[pa] = t), (e.prototype[pa] = t), e;
      }
      function Cg(e) {
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
            if (void 0 === dc && ((dc = null), W.trustedTypes))
              try {
                dc = W.trustedTypes.createPolicy('angular', {
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
            if (void 0 === pc && ((pc = null), W.trustedTypes))
              try {
                pc = W.trustedTypes.createPolicy('angular#unsafe-bypass', {
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
        const n = qu(e);
        if (null != n && n !== t) {
          if ('ResourceURL' === n && 'URL' === t) return !0;
          throw new Error(
            `Required a safe ${t}, got a ${n} (see https://g.co/ng/security#xss)`
          );
        }
        return n === t;
      }
      function qu(e) {
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
        qg =
          /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
      function fs(e) {
        return (e = String(e)).match(Yg) || e.match(qg) ? e : 'unsafe:' + e;
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
        Kg = ko('script,style,template');
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
            return (this.sanitizedSomething = !0), !Kg.hasOwnProperty(n);
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
            (function Ku(e) {
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
          return hi(new Jg().sanitizeChildren(_a(n) || n));
        } finally {
          if (n) {
            const o = _a(n) || n;
            for (; o.firstChild; ) o.removeChild(o.firstChild);
          }
        }
      }
      function _a(e) {
        return 'content' in e &&
          (function em(e) {
            return (
              e.nodeType === Node.ELEMENT_NODE && 'TEMPLATE' === e.nodeName
            );
          })(e)
          ? e.content
          : null;
      }
      var mn = (() => (
        ((mn = mn || {})[(mn.NONE = 0)] = 'NONE'),
        (mn[(mn.HTML = 1)] = 'HTML'),
        (mn[(mn.STYLE = 2)] = 'STYLE'),
        (mn[(mn.SCRIPT = 3)] = 'SCRIPT'),
        (mn[(mn.URL = 4)] = 'URL'),
        (mn[(mn.RESOURCE_URL = 5)] = 'RESOURCE_URL'),
        mn
      ))();
      function rd(e) {
        const t = gs();
        return t
          ? Zu(t.sanitize(mn.HTML, e) || '')
          : gi(e, 'HTML')
          ? Zu(tr(e))
          : od(hr(), K(e));
      }
      function ya(e) {
        const t = gs();
        return t
          ? t.sanitize(mn.URL, e) || ''
          : gi(e, 'URL')
          ? tr(e)
          : fs(K(e));
      }
      function gs() {
        const e = De();
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
        tn(t)
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
        return t ? (tn(t) ? t : t.lView) : null;
      }
      const Em = (() =>
        (
          (typeof requestAnimationFrame < 'u' && requestAnimationFrame) ||
          setTimeout
        ).bind(W))();
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
        return hn(t) ? t[3] : t;
      }
      function Aa(e) {
        return xd(e[13]);
      }
      function Ia(e) {
        return xd(e[4]);
      }
      function xd(e) {
        for (; null !== e && !hn(e); ) e = e[4];
        return e;
      }
      function xi(e, t, n, o, r) {
        if (null != o) {
          let i,
            c = !1;
          hn(o) ? (i = o) : tn(o) && ((c = !0), (o = o[0]));
          const d = Gt(o);
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
                i !== Gt(n) && xi(t, e, o, i, r);
                for (let d = 10; d < n.length; d++) {
                  const p = n[d];
                  _s(p[1], p, e, t, o, i);
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
      function _d(e, t) {
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
          null !== r && r !== e && _d(r, o), t > 0 && (e[n - 1][4] = o[4]);
          const i = rc(e, 10 + t);
          !(function Sm(e, t) {
            _s(e, t, t[11], 2, null, null), (t[0] = null), (t[6] = null);
          })(o[1], o);
          const c = i[19];
          null !== c && c.detachView(i[1]),
            (o[3] = null),
            (o[4] = null),
            (o[2] &= -65);
        }
        return o;
      }
      function yd(e, t) {
        if (!(128 & t[2])) {
          const n = t[11];
          Lt(n) && n.destroyNode && _s(e, t, n, 3, null, null),
            (function Rm(e) {
              let t = e[13];
              if (!t) return Na(e[1], e);
              for (; t; ) {
                let n = null;
                if (tn(t)) n = t[13];
                else {
                  const o = t[10];
                  o && (n = o);
                }
                if (!n) {
                  for (; t && !t[4] && t !== e; )
                    tn(t) && Na(t[1], t), (t = t[3]);
                  null === t && (t = e), tn(t) && Na(t[1], t), (n = t && t[4]);
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
                      d = 'function' == typeof c ? c(t) : Gt(t[c]),
                      p = o[(r = n[i + 2])],
                      y = n[i + 3];
                    'boolean' == typeof y
                      ? d.removeEventListener(n[i], p, y)
                      : y >= 0
                      ? o[(r = y)]()
                      : o[(r = -y)].unsubscribe(),
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
          if (null !== n && hn(t[3])) {
            n !== t[3] && _d(n, t);
            const o = t[19];
            null !== o && o.detachView(e);
          }
          !(function bm(e) {
            Da.delete(e[20]);
          })(t);
        }
      }
      function Cd(e, t, n) {
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
        const r = Cd(e, o, t),
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
              return hn(r) ? ka(-1, r) : Gt(r);
            }
          }
          if (32 & n) return Pa(t, e)() || Gt(e[t.index]);
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
            (c && 0 === t && (d && Tn(Gt(d), o), (n.flags |= 4)),
            64 != (64 & n.flags))
          )
            if (8 & p) La(e, t, n.child, o, r, i, !1), xi(t, e, r, d, i);
            else if (32 & p) {
              const y = Pa(n, o);
              let D;
              for (; (D = y()); ) xi(t, e, r, D, i);
              xi(t, e, r, d, i);
            } else 16 & p ? Sd(e, t, o, n, r, i) : xi(t, e, r, d, i);
          n = c ? n.projectionNext : n.next;
        }
      }
      function _s(e, t, n, o, r, i) {
        La(n, o, e.firstChild, t, r, i, !1);
      }
      function Sd(e, t, n, o, r, i) {
        const c = n[16],
          p = c[6].projection[o.projection];
        if (Array.isArray(p))
          for (let y = 0; y < p.length; y++) xi(t, e, r, p[y], i);
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
          i = (function Km(e) {
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
                const y = 8 & o ? p : t[++d];
                if (8 & o && null !== e.attrs) {
                  if (!Gm(e.attrs, y, n)) {
                    if (vo(o)) return !1;
                    c = !0;
                  }
                  continue;
                }
                const A = Ym(8 & o ? 'class' : p, r, kd(e), n);
                if (-1 === A) {
                  if (vo(o)) return !1;
                  c = !0;
                  continue;
                }
                if ('' !== y) {
                  let L;
                  L = A > i ? '' : r[A + 1].toLowerCase();
                  const q = 8 & o ? L : null;
                  if ((q && -1 !== Nd(q, y, 0)) || (2 & o && y !== L)) {
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
      const yt = {};
      function Ud(e) {
        Bd(Et(), De(), Pn() + e, !1);
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
        _o(n);
      }
      const zd = new We('ENVIRONMENT_INITIALIZER'),
        Gd = new We('INJECTOR_DEF_TYPES');
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
        if (!(e = oe(e))) return !1;
        let r = null,
          i = ft(e);
        const c = !i && Ct(e);
        if (i || c) {
          if (c && !c.standalone) return !1;
          r = e;
        } else {
          const p = e.ngModule;
          if (((i = ft(p)), !i)) return !1;
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
            for (const y of p) Ua(y, t, n, o);
          }
        } else {
          if (!i) return !1;
          {
            if (null != i.imports && !d) {
              let y;
              o.add(r);
              try {
                er(i.imports, D => {
                  Ua(D, t, n, o) && (y || (y = []), y.push(D));
                });
              } finally {
              }
              void 0 !== y && Wd(y, t);
            }
            if (!d) {
              const y = Kn(r) || (() => new r());
              t.push(
                { provide: r, useFactory: y, deps: Ve },
                { provide: Gd, useValue: r, multi: !0 },
                { provide: zd, useValue: () => gn(r), multi: !0 }
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
      const ax = I({ provide: String, useValue: I });
      function Ba(e) {
        return null !== e && 'object' == typeof e && ax in e;
      }
      function Ur(e) {
        return 'function' == typeof e;
      }
      const ja = new We('INJECTOR', -1);
      class Kd {
        get(t, n = ss) {
          if (n === ss) {
            const o = new Error(`NullInjectorError: No provider for ${Y(t)}!`);
            throw ((o.name = 'NullInjectorError'), o);
          }
          return n;
        }
      }
      const Ha = new We('Set Injector scope.'),
        xc = {},
        ux = {};
      let $a;
      function za() {
        return void 0 === $a && ($a = new Kd()), $a;
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
            this.records.set(ja, _i(void 0, this)),
            r.has('environment') && this.records.set(bi, _i(void 0, this));
          const i = this.records.get(Ha);
          null != i && 'string' == typeof i.value && this.scopes.add(i.value),
            (this.injectorDefTypes = new Set(this.get(Gd.multi, Ve, et.Self)));
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
        get(t, n = ss, o = et.Default) {
          this.assertNotDestroyed();
          const r = cc(this),
            i = kt(void 0);
          try {
            if (!(o & et.SkipSelf)) {
              let d = this.records.get(t);
              if (void 0 === d) {
                const p =
                  (function gx(e) {
                    return (
                      'function' == typeof e ||
                      ('object' == typeof e && e instanceof We)
                    );
                  })(t) && pe(t);
                (d = p && this.injectableDefInScope(p) ? _i(Ga(t), xc) : null),
                  this.records.set(t, d);
              }
              if (null != d) return this.hydrate(t, d);
            }
            return (o & et.Self ? za() : this.parent).get(
              t,
              (n = o & et.Optional && n === ss ? null : n)
            );
          } catch (c) {
            if ('NullInjectorError' === c.name) {
              if (((c[sc] = c[sc] || []).unshift(Y(t)), r)) throw c;
              return (function vg(e, t, n, o) {
                const r = e[sc];
                throw (
                  (t[Lu] && r.unshift(t[Lu]),
                  (e.message = (function Dg(e, t, n, o = null) {
                    e =
                      e && '\n' === e.charAt(0) && '\u0275' == e.charAt(1)
                        ? e.slice(2)
                        : e;
                    let r = Y(t);
                    if (Array.isArray(t)) r = t.map(Y).join(' -> ');
                    else if ('object' == typeof t) {
                      let i = [];
                      for (let c in t)
                        if (t.hasOwnProperty(c)) {
                          let d = t[c];
                          i.push(
                            c +
                              ':' +
                              ('string' == typeof d ? JSON.stringify(d) : Y(d))
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
            const o = this.get(zd.multi, Ve, et.Self);
            for (const r of o) r();
          } finally {
            cc(t), kt(n);
          }
        }
        toString() {
          const t = [],
            n = this.records;
          for (const o of n.keys()) t.push(Y(o));
          return `R3Injector[${t.join(', ')}]`;
        }
        assertNotDestroyed() {
          if (this._destroyed) throw new de(205, !1);
        }
        processProvider(t) {
          let n = Ur((t = oe(t))) ? t : oe(t && t.provide);
          const o = (function px(e) {
            return Ba(e) ? _i(void 0, e.useValue) : _i(Qd(e), xc);
          })(t);
          if (Ur(t) || !0 !== t.multi) this.records.get(n);
          else {
            let r = this.records.get(n);
            r ||
              ((r = _i(void 0, xc, !0)),
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
          const n = oe(t.providedIn);
          return 'string' == typeof n
            ? 'any' === n || this.scopes.has(n)
            : this.injectorDefTypes.has(n);
        }
      }
      function Ga(e) {
        const t = pe(e),
          n = null !== t ? t.factory : Kn(e);
        if (null !== n) return n;
        if (e instanceof We) throw new de(204, !1);
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
                new de(204, !1))
              );
            const n = (function He(e) {
              const t = e && (e[xt] || e[St]);
              if (t) {
                const n = (function rt(e) {
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
      function Qd(e, t, n) {
        let o;
        if (Ur(e)) {
          const r = oe(e);
          return Kn(r) || Ga(r);
        }
        if (Ba(e)) o = () => oe(e.useValue);
        else if (
          (function qd(e) {
            return !(!e || !e.useFactory);
          })(e)
        )
          o = () => e.useFactory(...fa(e.deps || []));
        else if (
          (function Yd(e) {
            return !(!e || !e.useExisting);
          })(e)
        )
          o = () => gn(oe(e.useExisting));
        else {
          const r = oe(e && (e.useClass || e.provide));
          if (
            !(function fx(e) {
              return !!e.deps;
            })(e)
          )
            return Kn(r) || Ga(r);
          o = () => new r(...fa(e.deps));
        }
        return o;
      }
      function _i(e, t, n = !1) {
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
        const i = [n || Ve, cx(e)];
        return (
          (o = o || ('object' == typeof e ? void 0 : Y(e))),
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
          (e.NULL = new Kd()),
          (e.ɵprov = Mt({
            token: e,
            providedIn: 'any',
            factory: () => gn(ja),
          })),
          (e.__NG_ELEMENT_ID__ = -1),
          e
        );
      })();
      function Ci(e, t = et.Default) {
        const n = De();
        return null === n ? gn(e, t) : ec(Wt(), n, oe(e), t);
      }
      function cp() {
        throw new Error('invalid');
      }
      function _c(e, t) {
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
      function Cp(e, t) {
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
      function ys(e, t, n, o, r, i, c, d, p, y, D) {
        const A = t.blueprint.slice();
        return (
          (A[0] = r),
          (A[2] = 76 | o),
          (null !== D || (e && 1024 & e[2])) && (A[2] |= 1024),
          on(A),
          (A[3] = A[15] = e),
          (A[8] = n),
          (A[10] = c || (e && e[10])),
          (A[11] = d || (e && e[11])),
          (A[12] = p || (e && e[12]) || null),
          (A[9] = y || (e && e[9]) || null),
          (A[6] = i),
          (A[20] = (function mm() {
            return gm++;
          })()),
          (A[21] = D),
          (A[16] = 2 == t.type ? e[16] : A),
          A
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
            (function qc() {
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
      function Cs(e, t, n) {
        ni(t);
        try {
          const o = e.viewQuery;
          null !== o && yl(1, o, n);
          const r = e.template;
          null !== r && vp(e, t, r, 1, n),
            e.firstCreatePass && (e.firstCreatePass = !1),
            e.staticContentQueries && Cp(e, t),
            e.staticViewQueries && yl(2, e.viewQuery, n);
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
            on(t),
              (function Qo(e) {
                return (qe.lFrame.bindingIndex = e);
              })(e.bindingStartIndex),
              null !== n && vp(e, t, n, 2, o);
            const c = 3 == (3 & r);
            if (c) {
              const y = e.preOrderCheckHooks;
              null !== y && ri(t, y, null);
            } else {
              const y = e.preOrderHooks;
              null !== y && ii(t, y, 0, null), Ji(t, 0);
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
              null !== e.contentQueries && Cp(e, t),
              c)
            ) {
              const y = e.contentCheckHooks;
              null !== y && ri(t, y);
            } else {
              const y = e.contentHooks;
              null !== y && ii(t, y, 1), Ji(t, 1);
            }
            !(function $x(e, t) {
              const n = e.hostBindingOpCodes;
              if (null !== n)
                try {
                  for (let o = 0; o < n.length; o++) {
                    const r = n[o];
                    if (r < 0) _o(~r);
                    else {
                      const i = r,
                        c = n[++o],
                        d = n[++o];
                      Ir(c, i), d(2, t[i]);
                    }
                  }
                } finally {
                  _o(-1);
                }
            })(e, t);
            const d = e.components;
            null !== d &&
              (function zx(e, t) {
                for (let n = 0; n < t.length; n++) d1(e, t[n]);
              })(t, d);
            const p = e.viewQuery;
            if ((null !== p && yl(2, p, o), c)) {
              const y = e.viewCheckHooks;
              null !== y && ri(t, y);
            } else {
              const y = e.viewHooks;
              null !== y && ii(t, y, 2), Ji(t, 2);
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
          c = Pt(t);
        try {
          !c && r.begin && r.begin(), c && Cs(e, t, o), Mi(e, t, n, o);
        } finally {
          !c && r.end && r.end();
        }
      }
      function vp(e, t, n, o, r) {
        const i = Pn(),
          c = 2 & o;
        try {
          _o(-1), c && t.length > 22 && Bd(e, t, 22, !1), n(o, r);
        } finally {
          _o(i);
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
            e.firstCreatePass || _r(n, t), Tn(o, t);
            const c = n.initialInputs;
            for (let d = r; d < i; d++) {
              const p = e.data[d],
                y = Dn(p);
              y && s1(t, n, p);
              const D = kr(t, e, d, n);
              Tn(D, t),
                null !== c && c1(0, d - r, D, p, 0, c),
                y && (Ge(n.index, t)[8] = D);
            }
          })(e, t, n, E(n, t)),
          128 == (128 & n.flags) &&
            (function n1(e, t, n) {
              const o = n.directiveStart,
                r = n.directiveEnd,
                i = n.index,
                c = (function Kc() {
                  return qe.lFrame.currentDirectiveIndex;
                })();
              try {
                _o(i);
                for (let d = o; d < r; d++) {
                  const p = e.data[d],
                    y = t[d];
                  zi(d),
                    (null !== p.hostBindings ||
                      0 !== p.hostVars ||
                      null !== p.hostAttrs) &&
                      Ip(p, y);
                }
              } finally {
                _o(-1), zi(c);
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
      function vc(e, t, n, o, r, i, c, d, p, y) {
        const D = 22 + o,
          A = D + r,
          L = (function Wx(e, t) {
            const n = [];
            for (let o = 0; o < t; o++) n.push(o < e ? null : yt);
            return n;
          })(D, A),
          q = 'function' == typeof y ? y() : y;
        return (L[1] = {
          type: e,
          blueprint: L,
          template: n,
          queries: null,
          viewQuery: d,
          declTNode: t,
          data: L.slice().fill(null, D),
          bindingStartIndex: D,
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
          pipeRegistry: 'function' == typeof c ? c() : c,
          firstChild: null,
          schemas: p,
          consts: q,
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
          y = t.inputs;
        !d && null != y && (D = y[o])
          ? (Bp(e, n, D, o, r),
            nn(t) &&
              (function Jx(e, t) {
                const n = Ge(t, e);
                16 & n[2] || (n[2] |= 32);
              })(n, t.index))
          : 3 & t.type &&
            ((o = (function Kx(e) {
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
                    Nr(_r(n, t), e, c.type),
                    Dn(c) ? (Tp(e, n), r.unshift(c)) : r.push(c));
                }
              return r;
            })(e, t, n),
            c = null === o ? null : { '': -1 };
          if (null !== i) {
            (r = !0), Sp(n, e.data.length, i.length);
            for (let D = 0; D < i.length; D++) {
              const A = i[D];
              A.providersResolver && A.providersResolver(A);
            }
            let d = !1,
              p = !1,
              y = Di(e, t, i.length, null);
            for (let D = 0; D < i.length; D++) {
              const A = i[D];
              (n.mergedAttrs = ai(n.mergedAttrs, A.hostAttrs)),
                Fp(e, n, t, y, A),
                i1(y, A, c),
                null !== A.contentQueries && (n.flags |= 8),
                (null !== A.hostBindings ||
                  null !== A.hostAttrs ||
                  0 !== A.hostVars) &&
                  (n.flags |= 128);
              const L = A.type.prototype;
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
                y++;
            }
            !(function qx(e, t) {
              const o = t.directiveEnd,
                r = e.data,
                i = t.attrs,
                c = [];
              let d = null,
                p = null;
              for (let y = t.directiveStart; y < o; y++) {
                const D = r[y],
                  A = D.inputs,
                  L = null === i || kd(t) ? null : a1(A, i);
                c.push(L), (d = Pp(A, y, d)), (p = Pp(D.outputs, y, p));
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
                  if (null == i) throw new de(-301, !1);
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
          Dn(t) && (n[''] = e);
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
        const i = r.factory || (r.factory = Kn(r.type)),
          c = new Xo(i, Dn(r), Ci);
        (e.blueprint[o] = c),
          (n[o] = c),
          Ap(e, t, 0, o, Di(e, n, r.hostVars, yt), r);
      }
      function s1(e, t, n) {
        const o = E(t, e),
          r = Mp(n),
          i = e[10],
          c = Dc(
            e,
            ys(
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
            const d = null == c ? K(i) : c(i, o || '', r);
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
            const y = c[p++],
              D = c[p++],
              A = c[p++];
            null !== d ? o.setInput(n, A, y, D) : (n[D] = A);
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
        const n = Ge(t, e);
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
            const r = Ge(n[o], e);
            Rt(r) && r[5] > 0 && ml(r);
          }
      }
      function p1(e, t) {
        const n = Ge(t, e),
          o = n[1];
        (function f1(e, t) {
          for (let n = t.length; n < e.blueprint.length; n++)
            t.push(e.blueprint[n]);
        })(o, n),
          Cs(o, n, n[8]);
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
      function yl(e, t, n) {
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
            y = e.data[c];
          null !== y.setInput ? y.setInput(p, r, o, d) : (p[d] = r);
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
        const e = Wt();
        xr(De()[1], e);
      }
      function vl(e) {
        let t = (function Qp(e) {
            return Object.getPrototypeOf(e.prototype).constructor;
          })(e.type),
          n = !0;
        const o = [e];
        for (; t; ) {
          let r;
          if (Dn(e)) r = t.ɵcmp || t.ɵdir;
          else {
            if (t.ɵcmp) throw new de(903, !1);
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
                y = r.contentQueries;
              if (
                (p && P1(e, p),
                y && A1(e, y),
                B(e.inputs, r.inputs),
                B(e.declaredInputs, r.declaredInputs),
                B(e.outputs, r.outputs),
                Dn(r) && r.data.animation)
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
        return e === wt ? {} : e === Ve ? [] : e;
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
          const e = W.Symbol;
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
        const r = De();
        return Sn(r, Vn(), t) && (Et(), Uo(rn(), r, e, t, n, o)), wl;
      }
      function Ei(e, t, n, o) {
        return Sn(e, Vn(), n) ? t + K(n) + o : yt;
      }
      function lf(e, t, n, o, r, i, c, d) {
        const p = De(),
          y = Et(),
          D = e + 22,
          A = y.firstCreatePass
            ? (function L1(e, t, n, o, r, i, c, d, p) {
                const y = t.consts,
                  D = vi(t, e, 4, c || null, bt(y, d));
                hl(t, n, D, bt(y, p)), xr(t, D);
                const A = (D.tViews = vc(
                  2,
                  D,
                  o,
                  r,
                  i,
                  t.directiveRegistry,
                  t.pipeRegistry,
                  null,
                  t.schemas,
                  y
                ));
                return (
                  null !== t.queries &&
                    (t.queries.template(t, D),
                    (A.queries = t.queries.embeddedTView(D))),
                  D
                );
              })(D, y, p, t, n, o, r, i, c)
            : y.data[D];
        g(A, !1);
        const L = p[11].createComment('');
        gc(y, p, L, A),
          Tn(L, p),
          Dc(p, (p[D] = Np(L, p, L, A))),
          Ln(A) && pl(y, p, A),
          null != c && fl(p, A, d);
      }
      function uf(e) {
        return _e(
          (function tt() {
            return qe.lFrame.contextLView;
          })(),
          22 + e
        );
      }
      function El(e, t, n) {
        const o = De();
        return Sn(o, Vn(), t) && to(Et(), rn(), o, e, t, o[11], n, !1), El;
      }
      function Ol(e, t, n, o, r) {
        const c = r ? 'class' : 'style';
        Bp(e, n, t.inputs[c], c, o);
      }
      function Oc(e, t, n, o) {
        const r = De(),
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
          y = i.firstCreatePass
            ? (function U1(e, t, n, o, r, i, c) {
                const d = t.consts,
                  y = vi(t, e, 2, r, bt(d, i));
                return (
                  hl(t, n, y, bt(d, c)),
                  null !== y.attrs && Mc(y, y.attrs, !1),
                  null !== y.mergedAttrs && Mc(y, y.mergedAttrs, !0),
                  null !== t.queries && t.queries.elementStart(t, y),
                  y
                );
              })(c, i, r, 0, t, n, o)
            : i.data[c];
        g(y, !0);
        const D = y.mergedAttrs;
        null !== D && ci(d, p, D);
        const A = y.classes;
        null !== A && Va(d, p, A);
        const L = y.styles;
        return (
          null !== L && Fd(d, p, L),
          64 != (64 & y.flags) && gc(i, r, p, y),
          0 ===
            (function Wn() {
              return qe.lFrame.elementDepthCount;
            })() && Tn(p, r),
          (function co() {
            qe.lFrame.elementDepthCount++;
          })(),
          Ln(y) && (pl(i, r, y), Dp(i, y, r)),
          null !== o && fl(r, y),
          Oc
        );
      }
      function Pc() {
        let e = Wt();
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
            Ol(n, t, De(), t.classesWithoutHost, !0),
          null != t.stylesWithoutHost &&
            (function Xi(e) {
              return 0 != (32 & e.flags);
            })(t) &&
            Ol(n, t, De(), t.stylesWithoutHost, !1),
          Pc
        );
      }
      function Pl(e, t, n, o) {
        return Oc(e, t, n, o), Pc(), Pl;
      }
      function Ac(e, t, n) {
        const o = De(),
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
        let e = Wt();
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
        return De();
      }
      function Il(e) {
        return !!e && 'function' == typeof e.then;
      }
      function pf(e) {
        return !!e && 'function' == typeof e.subscribe;
      }
      const ff = pf;
      function Tl(e, t, n, o) {
        const r = De(),
          i = Et(),
          c = Wt();
        return (
          (function gf(e, t, n, o, r, i, c, d) {
            const p = Ln(o),
              D = e.firstCreatePass && Lp(e),
              A = t[8],
              L = kp(t);
            let q = !0;
            if (3 & o.type || d) {
              const ze = E(o, t),
                Ke = d ? d(ze) : ze,
                pt = L.length,
                Me = d ? st => d(Gt(st[o.index])) : o.index;
              if (Lt(n)) {
                let st = null;
                if (
                  (!d &&
                    p &&
                    (st = (function j1(e, t, n, o) {
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
                  null !== st)
                )
                  ((st.__ngLastListenerFn__ || st).__ngNextListenerFn__ = i),
                    (st.__ngLastListenerFn__ = i),
                    (q = !1);
                else {
                  i = Sl(o, t, A, i, !1);
                  const Ft = n.listen(Ke, r, i);
                  L.push(i, Ft), D && D.push(r, Me, pt, pt + 1);
                }
              } else
                (i = Sl(o, t, A, i, !0)),
                  Ke.addEventListener(r, i, c),
                  L.push(i),
                  D && D.push(r, Me, pt, c);
            } else i = Sl(o, t, A, i, !1);
            const be = o.outputs;
            let Fe;
            if (q && null !== be && (Fe = be[r])) {
              const ze = Fe.length;
              if (ze)
                for (let Ke = 0; Ke < ze; Ke += 2) {
                  const Kt = t[Fe[Ke]][Fe[Ke + 1]].subscribe(i),
                    Gr = L.length;
                  L.push(i, Kt), D && D.push(r, o.index, Gr, -(Gr + 1));
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
          xl(2 & e.flags ? Ge(e.index, t) : t);
          let p = mf(t, 0, o, c),
            y = i.__ngNextListenerFn__;
          for (; y; ) (p = mf(t, 0, y, c) && p), (y = y.__ngNextListenerFn__);
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
        const i = De(),
          c = Ei(i, t, n, o);
        return c !== yt && to(Et(), rn(), i, e, c, i[11], r, !1), Tc;
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
      const yn = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };
      function Of(e) {
        return e.substring(yn.key, yn.keyEnd);
      }
      function Pf(e, t) {
        const n = yn.textEnd;
        return n === t
          ? -1
          : ((t = yn.keyEnd =
              (function J1(e, t, n) {
                for (; t < n && e.charCodeAt(t) > 32; ) t++;
                return t;
              })(e, (yn.key = t), n)),
            Ni(e, t, n));
      }
      function Ni(e, t, n) {
        for (; t < n && e.charCodeAt(t) <= 32; ) t++;
        return t;
      }
      function Nl(e, t) {
        return (
          (function wo(e, t, n, o) {
            const r = De(),
              i = Et(),
              c = On(2);
            i.firstUpdatePass && kf(i, e, c, o),
              t !== yt &&
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
                          : 'object' == typeof e && (e = Y(tr(e)))),
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
          const c = De();
          if (n !== yt && Sn(c, i, n)) {
            const d = r.data[Pn()];
            if (Bf(d, o) && !Rf(r, i)) {
              let p = o ? d.classesWithoutHost : d.stylesWithoutHost;
              null !== p && (n = fe(p, n || '')), Ol(r, d, c, n, o);
            } else
              !(function sb(e, t, n, o, r, i, c, d) {
                r === yt && (r = Ve);
                let p = 0,
                  y = 0,
                  D = 0 < r.length ? r[0] : null,
                  A = 0 < i.length ? i[0] : null;
                for (; null !== D || null !== A; ) {
                  const L = p < r.length ? r[p + 1] : void 0,
                    q = y < i.length ? i[y + 1] : void 0;
                  let Fe,
                    be = null;
                  D === A
                    ? ((p += 2), (y += 2), L !== q && ((be = A), (Fe = q)))
                    : null === A || (null !== D && D < A)
                    ? ((p += 2), (be = D))
                    : ((y += 2), (be = A), (Fe = q)),
                    null !== be && Vf(e, t, n, o, be, Fe, c, d),
                    (D = p < r.length ? r[p] : null),
                    (A = y < i.length ? i[y] : null);
                }
              })(
                r,
                d,
                c,
                c[11],
                c[i + 1],
                (c[i + 1] = (function ib(e, t, n) {
                  if (null == n || '' === n) return Ve;
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
          let n = (function q1(e) {
            return (
              (function If(e) {
                (yn.key = 0),
                  (yn.keyEnd = 0),
                  (yn.value = 0),
                  (yn.valueEnd = 0),
                  (yn.textEnd = e.length);
              })(e),
              Pf(e, Ni(e, 0, yn.textEnd))
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
                y = !1;
              if (Array.isArray(n)) {
                const A = n;
                (D = A[1]), (null === D || pi(A, D) > 0) && (y = !0);
              } else D = n;
              if (r)
                if (0 !== p) {
                  const L = Do(e[d + 1]);
                  (e[o + 1] = _c(L, d)),
                    0 !== L && (e[L + 1] = tl(e[L + 1], o)),
                    (e[d + 1] = (function Fx(e, t) {
                      return (131071 & e) | (t << 17);
                    })(e[d + 1], o));
                } else
                  (e[o + 1] = _c(d, 0)),
                    0 !== d && (e[d + 1] = tl(e[d + 1], o)),
                    (d = o);
              else
                (e[o + 1] = _c(p, 0)),
                  0 === d ? (d = o) : (e[p + 1] = tl(e[p + 1], o)),
                  (p = o);
              y && (e[o + 1] = el(e[o + 1])),
                Ef(e, D, o, !0),
                Ef(e, D, o, !1),
                (function Z1(e, t, n, o, r) {
                  const i = r ? e.residualClasses : e.residualStyles;
                  null != i &&
                    'string' == typeof t &&
                    pi(i, t) >= 0 &&
                    (n[o + 1] = nl(n[o + 1]));
                })(t, D, e, o, i),
                (c = _c(d, p)),
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
          y = p[d + 1];
        Sc(
          (function fp(e) {
            return 1 == (1 & e);
          })(y)
            ? Uf(p, t, n, r, or(y), c)
            : void 0
        ) ||
          (Sc(i) ||
            ((function pp(e) {
              return 2 == (2 & e);
            })(y) &&
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
            y = Array.isArray(p),
            D = y ? p[1] : p,
            A = null === D;
          let L = n[r + 1];
          L === yt && (L = A ? Ve : void 0);
          let q = A ? ua(L, o) : D === o ? L : void 0;
          if ((y && !Sc(q) && (q = ua(p, o)), Sc(q) && ((d = q), c))) return d;
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
        const n = De(),
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
        const o = De(),
          r = Ei(o, e, t, n);
        return r !== yt && rr(o, Pn(), r), Fc;
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
        return Ll(e)[dt.PluralCase];
      }
      function ah(e) {
        return (
          e in Ri ||
            (Ri[e] =
              W.ng &&
              W.ng.common &&
              W.ng.common.locales &&
              W.ng.common.locales[e]),
          Ri[e]
        );
      }
      var dt = (() => (
        ((dt = dt || {})[(dt.LocaleId = 0)] = 'LocaleId'),
        (dt[(dt.DayPeriodsFormat = 1)] = 'DayPeriodsFormat'),
        (dt[(dt.DayPeriodsStandalone = 2)] = 'DayPeriodsStandalone'),
        (dt[(dt.DaysFormat = 3)] = 'DaysFormat'),
        (dt[(dt.DaysStandalone = 4)] = 'DaysStandalone'),
        (dt[(dt.MonthsFormat = 5)] = 'MonthsFormat'),
        (dt[(dt.MonthsStandalone = 6)] = 'MonthsStandalone'),
        (dt[(dt.Eras = 7)] = 'Eras'),
        (dt[(dt.FirstDayOfWeek = 8)] = 'FirstDayOfWeek'),
        (dt[(dt.WeekendRange = 9)] = 'WeekendRange'),
        (dt[(dt.DateFormat = 10)] = 'DateFormat'),
        (dt[(dt.TimeFormat = 11)] = 'TimeFormat'),
        (dt[(dt.DateTimeFormat = 12)] = 'DateTimeFormat'),
        (dt[(dt.NumberSymbols = 13)] = 'NumberSymbols'),
        (dt[(dt.NumberFormats = 14)] = 'NumberFormats'),
        (dt[(dt.CurrencyCode = 15)] = 'CurrencyCode'),
        (dt[(dt.CurrencySymbol = 16)] = 'CurrencySymbol'),
        (dt[(dt.CurrencyName = 17)] = 'CurrencyName'),
        (dt[(dt.Currencies = 18)] = 'Currencies'),
        (dt[(dt.Directionality = 19)] = 'Directionality'),
        (dt[(dt.PluralCase = 20)] = 'PluralCase'),
        (dt[(dt.ExtraData = 21)] = 'ExtraData'),
        dt
      ))();
      const ki = 'en-US';
      let lh = ki;
      function Bl(e, t, n, o, r) {
        if (((e = oe(e)), Array.isArray(e)))
          for (let i = 0; i < e.length; i++) Bl(e[i], t, n, o, r);
        else {
          const i = Et(),
            c = De();
          let d = Ur(e) ? e : oe(e.provide),
            p = Qd(e);
          const y = Wt(),
            D = 1048575 & y.providerIndexes,
            A = y.directiveStart,
            L = y.providerIndexes >> 20;
          if (Ur(e) || !e.multi) {
            const q = new Xo(p, r, Ci),
              be = Hl(d, t, r ? D : D + L, A);
            -1 === be
              ? (Nr(_r(y, c), i, d),
                jl(i, e, t.length),
                t.push(d),
                y.directiveStart++,
                y.directiveEnd++,
                r && (y.providerIndexes += 1048576),
                n.push(q),
                c.push(q))
              : ((n[be] = q), (c[be] = q));
          } else {
            const q = Hl(d, t, D + L, A),
              be = Hl(d, t, D, D + L),
              Fe = q >= 0 && n[q],
              ze = be >= 0 && n[be];
            if ((r && !ze) || (!r && !Fe)) {
              Nr(_r(y, c), i, d);
              const Ke = (function w_(e, t, n, o, r) {
                const i = new Xo(e, n, Ci);
                return (
                  (i.multi = []),
                  (i.index = t),
                  (i.componentProviders = 0),
                  Nh(i, r, o && !n),
                  i
                );
              })(r ? M_ : D_, n.length, r, o, p);
              !r && ze && (n[be].providerFactory = Ke),
                jl(i, e, t.length, 0),
                t.push(d),
                y.directiveStart++,
                y.directiveEnd++,
                r && (y.providerIndexes += 1048576),
                n.push(Ke),
                c.push(Ke);
            } else jl(i, e, q > -1 ? q : be, Nh(n[r ? be : q], p, !r && o));
            !r && o && ze && n[be].componentProviders++;
          }
        }
      }
      function jl(e, t, n, o) {
        const r = Ur(t),
          i = (function lx(e) {
            return !!e.useClass;
          })(t);
        if (r || i) {
          const p = (i ? oe(t.useClass) : t).prototype.ngOnDestroy;
          if (p) {
            const y = e.destroyHooks || (e.destroyHooks = []);
            if (!r && t.multi) {
              const D = y.indexOf(n);
              -1 === D ? y.push(n, [o, p]) : y[D + 1].push(o, p);
            } else y.push(n, p);
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
      function D_(e, t, n, o) {
        return $l(this.multi, []);
      }
      function M_(e, t, n, o) {
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
            (function v_(e, t, n) {
              const o = Et();
              if (o.firstCreatePass) {
                const r = Dn(e);
                Bl(n, o.data, o.blueprint, r, !0),
                  Bl(t, o.data, o.blueprint, r, !1);
              }
            })(o, r ? r(e) : e, t);
        };
      }
      class O_ {
        resolveComponentFactory(t) {
          throw (function E_(e) {
            const t = Error(
              `No component factory found for ${Y(
                e
              )}. Did you add it to @NgModule.entryComponents?`
            );
            return (t.ngComponent = e), t;
          })(t);
        }
      }
      let As = (() => {
        class e {}
        return (e.NULL = new O_()), e;
      })();
      class $r {}
      class Lh {}
      class Vh {}
      function A_() {
        return Vi(Wt(), De());
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
        return (e.__NG_ELEMENT_ID__ = A_), e;
      })();
      function I_(e) {
        return e instanceof Is ? e.nativeElement : e;
      }
      class Uh {}
      let T_ = (() => {
          class e {}
          return (
            (e.__NG_ELEMENT_ID__ = () =>
              (function F_() {
                const e = De(),
                  n = Ge(Wt().index, e);
                return (function S_(e) {
                  return e[11];
                })(tn(n) ? n : e);
              })()),
            e
          );
        })(),
        N_ = (() => {
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
      const R_ = new Bh('14.0.3'),
        zl = {};
      function Vc(e, t, n, o, r = !1) {
        for (; null !== n; ) {
          const i = t[n.index];
          if ((null !== i && o.push(Gt(i)), hn(i)))
            for (let d = 10; d < i.length; d++) {
              const p = i[d],
                y = p[1].firstChild;
              null !== y && Vc(p[1], p, y, o);
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
            if (hn(t)) {
              const n = t[8],
                o = n ? n.indexOf(this) : -1;
              o > -1 && (Fa(t, o), rc(n, o));
            }
            this._attachedToViewContainer = !1;
          }
          yd(this._lView[1], this._lView);
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
          !(function _l(e, t, n) {
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
          if (this._appRef) throw new de(902, !1);
          this._attachedToViewContainer = !0;
        }
        detachFromAppRef() {
          (this._appRef = null),
            (function Nm(e, t) {
              _s(e, t, t[11], 2, null, null);
            })(this._lView[1], this._lView);
        }
        attachToAppRef(t) {
          if (this._attachedToViewContainer) throw new de(902, !1);
          this._appRef = t;
        }
      }
      class k_ extends Ts {
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
          const n = Ct(t);
          return new Zl(n, this.ngModule);
        }
      }
      function jh(e) {
        const t = [];
        for (let n in e)
          e.hasOwnProperty(n) && t.push({ propName: e[n], templateName: n });
        return t;
      }
      class V_ {
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
          const c = i ? new V_(t, i) : t,
            d = c.get(Uh, Gn),
            p = c.get(N_, null),
            y = d.createRenderer(null, this.componentDef),
            D = this.componentDef.selectors[0][0] || 'div',
            A = o
              ? (function Ep(e, t, n) {
                  if (Lt(e)) return e.selectRootElement(t, n === me.ShadowDom);
                  let o = 'string' == typeof t ? e.querySelector(t) : t;
                  return (o.textContent = ''), o;
                })(y, o, this.componentDef.encapsulation)
              : Sa(
                  d.createRenderer(null, this.componentDef),
                  D,
                  (function L_(e) {
                    const t = e.toLowerCase();
                    return 'svg' === t ? 'svg' : 'math' === t ? 'math' : null;
                  })(D)
                ),
            L = this.componentDef.onPush ? 288 : 272,
            q = (function Jp(e, t) {
              return {
                components: [],
                scheduler: e || Em,
                clean: g1,
                playerHandler: t || null,
                flags: 0,
              };
            })(),
            be = vc(0, null, null, 1, 0, null, null, null, null, null),
            Fe = ys(null, be, q, L, null, null, d, y, p, c, null);
          let ze, Ke;
          ni(Fe);
          try {
            const pt = (function qp(e, t, n, o, r, i) {
              const c = n[1];
              n[22] = e;
              const p = vi(c, 22, 2, '#host', null),
                y = (p.mergedAttrs = t.hostAttrs);
              null !== y &&
                (Mc(p, y, !0),
                null !== e &&
                  (ci(r, e, y),
                  null !== p.classes && Va(r, e, p.classes),
                  null !== p.styles && Fd(r, e, p.styles)));
              const D = o.createRenderer(e, t),
                A = ys(
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
                  (Nr(_r(p, n), c, t.type), Tp(c, p), Sp(p, n.length, 1)),
                Dc(n, A),
                (n[22] = A)
              );
            })(A, this.componentDef, Fe, d, y);
            if (A)
              if (o) ci(y, A, ['ng-version', R_.full]);
              else {
                const { attrs: Me, classes: st } = (function tx(e) {
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
                Me && ci(y, A, Me),
                  st && st.length > 0 && Va(y, A, st.join(' '));
              }
            if (((Ke = ae(be, 22)), void 0 !== n)) {
              const Me = (Ke.projection = []);
              for (let st = 0; st < this.ngContentSelectors.length; st++) {
                const Ft = n[st];
                Me.push(null != Ft ? Array.from(Ft) : null);
              }
            }
            (ze = (function Kp(e, t, n, o, r) {
              const i = n[1],
                c = (function Xx(e, t, n) {
                  const o = Wt();
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
                const p = Wt();
                t.contentQueries(1, c, p.directiveStart);
              }
              const d = Wt();
              return (
                !i.firstCreatePass ||
                  (null === t.hostBindings && null === t.hostAttrs) ||
                  (_o(d.index),
                  Ap(n[1], d, 0, d.directiveStart, d.directiveEnd, t),
                  Ip(t, c)),
                c
              );
            })(pt, this.componentDef, Fe, q, [E1])),
              Cs(be, Fe, null);
          } finally {
            oi();
          }
          return new B_(this.componentType, ze, Vi(Ke, Fe), Fe, Ke);
        }
      }
      class B_ extends class P_ {} {
        constructor(t, n, o, r, i) {
          super(),
            (this.location = o),
            (this._rootLView = r),
            (this._tNode = i),
            (this.instance = n),
            (this.hostView = this.changeDetectorRef = new k_(r)),
            (this.componentType = t);
        }
        get injector() {
          return new yr(this._tNode, this._rootLView);
        }
        destroy() {
          this.hostView.destroy();
        }
        onDestroy(t) {
          this.hostView.onDestroy(t);
        }
      }
      function j_(e, t) {
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
          const o = Xt(t);
          (this._bootstrapComponents = nr(o.bootstrap)),
            (this._r3Injector = ep(
              t,
              n,
              [
                { provide: $r, useValue: this },
                { provide: As, useValue: this.componentFactoryResolver },
              ],
              Y(t),
              new Set(['environment'])
            )),
            this._r3Injector.resolveInjectorInitializers(),
            (this.instance = this.get(t));
        }
        get(t, n = Vo.THROW_IF_NOT_FOUND, o = et.Default) {
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
      class H_ extends $r {
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
        return new H_(e, t, n).injector;
      }
      function $h(e, t, n, o) {
        return (function Gh(e, t, n, o, r, i) {
          const c = t + n;
          return Sn(e, c, r)
            ? Bo(e, c + 1, i ? o.call(i, r) : o(r))
            : Ss(e, c + 1);
        })(De(), $t(), e, t, n, o);
      }
      function zh(e, t, n, o, r) {
        return Zh(De(), $t(), e, t, n, o, r);
      }
      function Ss(e, t) {
        const n = e[t];
        return n === yt ? void 0 : n;
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
      function Kh(e, t) {
        const n = Et();
        let o;
        const r = e + 22;
        n.firstCreatePass
          ? ((o = (function ey(e, t) {
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
        const i = o.factory || (o.factory = Kn(o.type)),
          c = kt(Ci);
        try {
          const d = li(!1),
            p = i();
          return (
            li(d),
            (function V1(e, t, n, o) {
              n >= e.data.length &&
                ((e.data[n] = null), (e.blueprint[n] = null)),
                (t[n] = o);
            })(n, De(), r, p),
            p
          );
        } finally {
          kt(c);
        }
      }
      function Jh(e, t, n, o) {
        const r = e + 22,
          i = De(),
          c = _e(i, r);
        return (function Fs(e, t) {
          return e[1].data[t].pure;
        })(i, r)
          ? Zh(i, $t(), t, c.transform, n, o, c)
          : c.transform(n, o);
      }
      function ql(e) {
        return t => {
          setTimeout(e, void 0, t);
        };
      }
      const $o = class iy extends s.x {
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
          this.__isAsync && ((i = ql(i)), r && (r = ql(r)), c && (c = ql(c)));
          const d = super.subscribe({ next: r, error: i, complete: c });
          return t instanceof C.w0 && t.add(d), d;
        }
      };
      function sy() {
        return this._results[Br()]();
      }
      class Kl {
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
            o = Kl.prototype;
          o[n] || (o[n] = sy);
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
        return (e.__NG_ELEMENT_ID__ = ly), e;
      })();
      const cy = Ns,
        ay = class extends cy {
          constructor(t, n, o) {
            super(),
              (this._declarationLView = t),
              (this._declarationTContainer = n),
              (this.elementRef = o);
          }
          createEmbeddedView(t, n) {
            const o = this._declarationTContainer.tViews,
              r = ys(
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
              Cs(o, r, t),
              new Ts(r)
            );
          }
        };
      function ly() {
        return Uc(Wt(), De());
      }
      function Uc(e, t) {
        return 4 & e.type ? new ay(t, e, Vi(e, t)) : null;
      }
      let Bc = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = uy), e;
      })();
      function uy() {
        return e0(Wt(), De());
      }
      const dy = Bc,
        Qh = class extends dy {
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
            return new yr(this._hostTNode, this._hostLView);
          }
          get parentInjector() {
            const t = lo(this._hostTNode, this._hostLView);
            if (An(t)) {
              const n = Ro(t, this._hostLView),
                o = br(t);
              return new yr(n[1].data[o + 8], n);
            }
            return new yr(null, this._hostLView);
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
              const A = n || {};
              (d = A.index),
                (o = A.injector),
                (r = A.projectableNodes),
                (i = A.environmentInjector || A.ngModuleRef);
            }
            const p = c ? t : new Zl(Ct(t)),
              y = o || this.parentInjector;
            if (!i && null == p.ngModule) {
              const L = (c ? y : this.parentInjector).get(bi, null);
              L && (i = L);
            }
            const D = p.create(y, r, void 0, i);
            return this.insert(D.hostView, d), D;
          }
          insert(t, n) {
            const o = t._lView,
              r = o[1];
            if (
              (function Bt(e) {
                return hn(e[3]);
              })(o)
            ) {
              const D = this.indexOf(t);
              if (-1 !== D) this.detach(D);
              else {
                const A = o[3],
                  L = new Qh(A, A[6], A[3]);
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
              y = hc(p, c[7]);
            return (
              null !== y &&
                (function Fm(e, t, n, o, r, i) {
                  (o[0] = r), (o[6] = t), _s(e, o, n, 1, r, i);
                })(r, c[6], p, o, y, d),
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
            o && (rc(Jl(this._lContainer), n), yd(o[1], o));
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
        if (hn(o)) n = o;
        else {
          let r;
          if (8 & e.type) r = Gt(o);
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
              this.matchTNodeWithReadOption(t, n, hy(n, i)),
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
      function hy(e, t) {
        const n = e.localNames;
        if (null !== n)
          for (let o = 0; o < n.length; o += 2) if (n[o] === t) return n[o + 1];
        return null;
      }
      function my(e, t, n, o) {
        return -1 === n
          ? (function gy(e, t) {
              return 11 & e.type ? Vi(e, t) : 4 & e.type ? Uc(e, t) : null;
            })(t, e)
          : -2 === n
          ? (function xy(e, t, n) {
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
            const y = c[p];
            d.push(y < 0 ? null : my(t, i[y], c[p + 1], n.metadata.read));
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
              const y = i[d + 1],
                D = t[-p];
              for (let A = 10; A < D.length; A++) {
                const L = D[A];
                L[17] === L[3] && nu(L[1], L, y, o);
              }
              if (null !== D[9]) {
                const A = D[9];
                for (let L = 0; L < A.length; L++) {
                  const q = A[L];
                  nu(q[1], q, y, o);
                }
              }
            }
          }
        }
        return o;
      }
      function o0(e) {
        const t = De(),
          n = Et(),
          o = Ls();
        Zi(o + 1);
        const r = u0(n, o);
        if (e.dirty && Pt(t) === (2 == (2 & r.metadata.flags))) {
          if (null === r.matches) e.reset([]);
          else {
            const i = r.crossesNgTemplate ? nu(n, t, o, []) : n0(n, t, r, o);
            e.reset(i, I_), e.notifyOnChanges();
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
          a0(o, De(), t);
      }
      function s0(e, t, n, o) {
        const r = Et();
        if (r.firstCreatePass) {
          const i = Wt();
          l0(r, new t0(t, n, o), i.index),
            (function _y(e, t) {
              const n = e.contentQueries || (e.contentQueries = []);
              t !== (n.length ? n[n.length - 1] : -1) &&
                n.push(e.queries.length - 1, t);
            })(r, e),
            2 == (2 & n) && (r.staticContentQueries = !0);
        }
        a0(r, De(), n);
      }
      function c0() {
        return (function by(e, t) {
          return e[19].queries[t].queryList;
        })(De(), Ls());
      }
      function a0(e, t, n) {
        const o = new Kl(4 == (4 & n));
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
        const t = Ct(e) || Jt(e) || Zt(e);
        return null !== t && t.standalone;
      }
      function Hc(...e) {}
      const I0 = new We('Application Initializer');
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
            return new (n || e)(gn(I0, 8));
          }),
          (e.ɵprov = Mt({ token: e, factory: e.ɵfac, providedIn: 'root' })),
          e
        );
      })();
      const T0 = new We('AppId', {
        providedIn: 'root',
        factory: function S0() {
          return `${cu()}${cu()}${cu()}`;
        },
      });
      function cu() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      const F0 = new We('Platform Initializer'),
        Uy = new We('Platform ID', {
          providedIn: 'platform',
          factory: () => 'unknown',
        }),
        N0 = new We('appBootstrapListener');
      let By = (() => {
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
      const zc = new We('LocaleId', {
          providedIn: 'root',
          factory: () =>
            (function yg(e, t = et.Default) {
              return gn(e, t);
            })(zc, et.Optional | et.SkipSelf) ||
            (function jy() {
              return (typeof $localize < 'u' && $localize.locale) || ki;
            })(),
        }),
        Hy = new We('DefaultCurrencyCode', {
          providedIn: 'root',
          factory: () => 'USD',
        });
      class $y {
        constructor(t, n) {
          (this.ngModuleFactory = t), (this.componentFactories = n);
        }
      }
      let zy = (() => {
        class e {
          compileModuleSync(n) {
            return new Wl(n);
          }
          compileModuleAsync(n) {
            return Promise.resolve(this.compileModuleSync(n));
          }
          compileModuleAndAllComponentsSync(n) {
            const o = this.compileModuleSync(n),
              i = nr(Xt(n).declarations).reduce((c, d) => {
                const p = Ct(d);
                return p && c.push(new Zl(p)), c;
              }, []);
            return new $y(o, i);
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
      const Zy = (() => Promise.resolve(0))();
      function au(e) {
        typeof Zone > 'u'
          ? Zy.then(() => {
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
            (r.nativeRequestAnimationFrame = (function Wy() {
              let e = W.requestAnimationFrame,
                t = W.cancelAnimationFrame;
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
            (function Ky(e) {
              const t = () => {
                !(function qy(e) {
                  e.isCheckStableRunning ||
                    -1 !== e.lastRequestAnimationFrameId ||
                    ((e.lastRequestAnimationFrameId =
                      e.nativeRequestAnimationFrame.call(W, () => {
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
            c = i.scheduleEventTask('NgZoneEvent: ' + r, t, Yy, Hc, Hc);
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
      const Yy = {};
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
      class Jy {
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
      const L0 = new We(''),
        V0 = new We('');
      let du,
        Qy = (() => {
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
                  ((function Xy(e) {
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
              return new (n || e)(gn(no), gn(U0), gn(V0));
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
      const B0 = new We('AllowMultipleToken'),
        j0 = new We('PlatformOnDestroy');
      class nC {
        constructor(t, n) {
          (this.name = t), (this.token = n);
        }
      }
      function $0(e, t, n = []) {
        const o = `Platform: ${t}`,
          r = new We(o);
        return (i = []) => {
          let c = pu();
          if (!c || c.injector.get(B0, !1)) {
            const d = [...n, ...i, { provide: r, useValue: !0 }];
            e
              ? e(d)
              : (function oC(e) {
                  if (Dr && !Dr.get(B0, !1)) throw new de(400, !1);
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
          return (function iC(e) {
            const t = pu();
            if (!t) throw new de(401, !1);
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
            const r = (function sC(e, t) {
                let n;
                return (
                  (n =
                    'noop' === e
                      ? new Jy()
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
              if (!p) throw new de(402, !1);
              return (
                r.runOutsideAngular(() => {
                  const y = r.onError.subscribe({
                    next: D => {
                      p.handleError(D);
                    },
                  });
                  d.onDestroy(() => {
                    Zc(this._modules, d), y.unsubscribe();
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
                  const y = d.injector.get($c);
                  return (
                    y.runInitializers(),
                    y.donePromise.then(
                      () => (
                        (function uh(e) {
                          _t(e, 'Expected localeId to be defined'),
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
            return (function eC(e, t, n) {
              const o = new Wl(n);
              return Promise.resolve(o);
            })(0, 0, n).then(i => this.bootstrapModuleFactory(i, r));
          }
          _moduleDoBootstrap(n) {
            const o = n.injector.get(Gc);
            if (n._bootstrapComponents.length > 0)
              n._bootstrapComponents.forEach(r => o.bootstrap(r));
            else {
              if (!n.instance.ngDoBootstrap) throw new de(403, !1);
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
            if (this._destroyed) throw new de(404, !1);
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
            return new (n || e)(gn(Vo));
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
            const c = new H.y(p => {
                (this._stable =
                  this._zone.isStable &&
                  !this._zone.hasPendingMacrotasks &&
                  !this._zone.hasPendingMicrotasks),
                  this._zone.runOutsideAngular(() => {
                    p.next(this._stable), p.complete();
                  });
              }),
              d = new H.y(p => {
                let y;
                this._zone.runOutsideAngular(() => {
                  y = this._zone.onStable.subscribe(() => {
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
                  y.unsubscribe(), D.unsubscribe();
                };
              });
            this.isStable = (0, Q.T)(c, d.pipe((0, ee.B)()));
          }
          get destroyed() {
            return this._destroyed;
          }
          get injector() {
            return this._injector;
          }
          bootstrap(n, o) {
            const r = n instanceof Vh;
            if (!this._initStatus.done) throw (!r && Bi(n), new de(405, false));
            let i;
            (i = r ? n : this._injector.get(As).resolveComponentFactory(n)),
              this.componentTypes.push(i.componentType);
            const c = (function tC(e) {
                return e.isBoundToModule;
              })(i)
                ? void 0
                : this._injector.get($r),
              p = i.create(Vo.NULL, [], o || i.selector, c),
              y = p.location.nativeElement,
              D = p.injector.get(L0, null);
            return (
              D?.registerApplication(y),
              p.onDestroy(() => {
                this.detachView(p.hostView),
                  Zc(this.components, p),
                  D?.unregisterApplication(y);
              }),
              this._loadComponent(p),
              p
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
            return new (n || e)(gn(no), gn(Vo), gn(ms), gn($c));
          }),
          (e.ɵprov = Mt({ token: e, factory: e.ɵfac, providedIn: 'root' })),
          e
        );
      })();
      function Zc(e, t) {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      let K0 = !0;
      function aC() {
        K0 = !1;
      }
      let lC = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = uC), e;
      })();
      function uC(e) {
        return (function dC(e, t, n) {
          if (nn(e) && !n) {
            const o = Ge(e.index, t);
            return new Ts(o, o);
          }
          return 47 & e.type ? new Ts(t[16], t) : null;
        })(Wt(), De(), 16 == (16 & e));
      }
      class tg {
        constructor() {}
        supports(t) {
          return vs(t);
        }
        create(t) {
          return new xC(t);
        }
      }
      const mC = (e, t) => t;
      class xC {
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
            (this._trackByFn = t || mC);
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
              const y = d - r,
                D = p - r;
              if (y != D) {
                for (let L = 0; L < y; L++) {
                  const q = L < i.length ? i[L] : (i[L] = 0),
                    be = q + L;
                  D <= be && be < y && (i[L] = q + 1);
                }
                i[c.previousIndex] = D - y;
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
          if ((null == t && (t = []), !vs(t))) throw new de(900, !1);
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
              : (t = this._addAfter(new bC(n, o), i, r)),
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
      class bC {
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
      class _C {
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
          o || ((o = new _C()), this.map.set(n, o)), o.add(t);
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
          return new yC();
        }
      }
      class yC {
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
            if (!(t instanceof Map || Ml(t))) throw new de(900, !1);
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
          const o = new CC(t);
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
      class CC {
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
            throw new de(901, !1);
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
            throw new de(901, !1);
          }
        }
        return (e.ɵprov = Mt({ token: e, providedIn: 'root', factory: sg })), e;
      })();
      const MC = $0(null, 'core', []);
      let wC = (() => {
        class e {
          constructor(n) {}
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(gn(Gc));
          }),
          (e.ɵmod = ut({ type: e })),
          (e.ɵinj = Oe({})),
          e
        );
      })();
      function EC(e) {
        return 'boolean' == typeof e ? e : null != e && 'false' !== e;
      }
    },
    433: (Xe, ge, v) => {
      v.d(ge, {
        Wl: () => K,
        Fj: () => Te,
        NI: () => nn,
        oH: () => To,
        u: () => Ko,
        cw: () => at,
        sg: () => io,
        u5: () => co,
        JU: () => de,
        JJ: () => he,
        JL: () => U,
        On: () => Ao,
        UX: () => gr,
        kI: () => Pe,
        _Y: () => Zo,
      });
      var s = v(4650),
        C = v(6895),
        H = v(8306),
        Q = v(4742),
        ee = v(8421),
        I = v(7669),
        B = v(5403),
        Y = v(3268),
        fe = v(1810),
        te = v(2076),
        oe = v(4004);
      let Ze = (() => {
          class b {
            constructor(h, O) {
              (this._renderer = h),
                (this._elementRef = O),
                (this.onChange = ue => {}),
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
        Ee = (() => {
          class b extends Ze {}
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
      const de = new s.OlP('NgValueAccessor'),
        ye = { provide: de, useExisting: (0, s.Gpc)(() => K), multi: !0 };
      let K = (() => {
        class b extends Ee {
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
                s.NdJ('change', function (tt) {
                  return O.onChange(tt.target.checked);
                })('blur', function () {
                  return O.onTouched();
                });
            },
            features: [s._Bn([ye]), s.qOj],
          })),
          b
        );
      })();
      const ie = { provide: de, useExisting: (0, s.Gpc)(() => Te), multi: !0 },
        Ne = new s.OlP('CompositionEventMode');
      let Te = (() => {
        class b extends Ze {
          constructor(h, O, ue) {
            super(h, O),
              (this._compositionMode = ue),
              (this._composing = !1),
              null == this._compositionMode &&
                (this._compositionMode = !(function Ae() {
                  const b = (0, C.q)() ? (0, C.q)().getUserAgent() : '';
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
            return new (h || b)(s.Y36(s.Qsj), s.Y36(s.SBq), s.Y36(Ne, 8));
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
                s.NdJ('input', function (tt) {
                  return O._handleInput(tt.target.value);
                })('blur', function () {
                  return O.onTouched();
                })('compositionstart', function () {
                  return O._compositionStart();
                })('compositionend', function (tt) {
                  return O._compositionEnd(tt.target.value);
                });
            },
            features: [s._Bn([ie]), s.qOj],
          })),
          b
        );
      })();
      function ve(b) {
        return (
          null == b ||
          (('string' == typeof b || Array.isArray(b)) && 0 === b.length)
        );
      }
      function Le(b) {
        return null != b && 'number' == typeof b.length;
      }
      const we = new s.OlP('NgValidators'),
        Ie = new s.OlP('NgAsyncValidators'),
        X =
          /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      class Pe {
        static min(g) {
          return (function G(b) {
            return g => {
              if (ve(g.value) || ve(b)) return null;
              const h = parseFloat(g.value);
              return !isNaN(h) && h < b
                ? { min: { min: b, actual: g.value } }
                : null;
            };
          })(g);
        }
        static max(g) {
          return (function J(b) {
            return g => {
              if (ve(g.value) || ve(b)) return null;
              const h = parseFloat(g.value);
              return !isNaN(h) && h > b
                ? { max: { max: b, actual: g.value } }
                : null;
            };
          })(g);
        }
        static required(g) {
          return (function j(b) {
            return ve(b.value) ? { required: !0 } : null;
          })(g);
        }
        static requiredTrue(g) {
          return (function le(b) {
            return !0 === b.value ? null : { required: !0 };
          })(g);
        }
        static email(g) {
          return (function se(b) {
            return ve(b.value) || X.test(b.value) ? null : { email: !0 };
          })(g);
        }
        static minLength(g) {
          return (function ke(b) {
            return g =>
              ve(g.value) || !Le(g.value)
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
          return (function it(b) {
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
          return (function gt(b) {
            if (!b) return _t;
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
                if (ve(O.value)) return null;
                const ue = O.value;
                return g.test(ue)
                  ? null
                  : { pattern: { requiredPattern: h, actualValue: ue } };
              }
            );
          })(g);
        }
        static nullValidator(g) {
          return null;
        }
        static compose(g) {
          return Oe(g);
        }
        static composeAsync(g) {
          return ce(g);
        }
      }
      function _t(b) {
        return null;
      }
      function Be(b) {
        return null != b;
      }
      function jt(b) {
        const g = (0, s.QGY)(b) ? (0, te.D)(b) : b;
        return (0, s.CqO)(g), g;
      }
      function cn(b) {
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
      function Oe(b) {
        if (!b) return null;
        const g = b.filter(Be);
        return 0 == g.length
          ? null
          : function (h) {
              return cn(Tt(h, g));
            };
      }
      function pe(b) {
        return null != b ? Oe(qt(b)) : null;
      }
      function ce(b) {
        if (!b) return null;
        const g = b.filter(Be);
        return 0 == g.length
          ? null
          : function (h) {
              return (function ne(...b) {
                const g = (0, I.jO)(b),
                  { args: h, keys: O } = (0, Q.D)(b),
                  ue = new H.y(tt => {
                    const { length: Yt } = h;
                    if (!Yt) return void tt.complete();
                    const xn = new Array(Yt);
                    let $t = Yt,
                      wn = Yt;
                    for (let Qo = 0; Qo < Yt; Qo++) {
                      let Vn = !1;
                      (0, ee.Xf)(h[Qo]).subscribe(
                        (0, B.x)(
                          tt,
                          On => {
                            Vn || ((Vn = !0), wn--), (xn[Qo] = On);
                          },
                          () => $t--,
                          void 0,
                          () => {
                            (!$t || !Vn) &&
                              (wn || tt.next(O ? (0, fe.n)(O, xn) : xn),
                              tt.complete());
                          }
                        )
                      );
                    }
                  });
                return g ? ue.pipe((0, Y.Z)(g)) : ue;
              })(Tt(h, g).map(jt)).pipe((0, oe.U)(cn));
            };
      }
      function He(b) {
        return null != b ? ce(qt(b)) : null;
      }
      function rt(b, g) {
        return null === b ? [g] : Array.isArray(b) ? [...b, g] : [b, g];
      }
      function ft(b) {
        return b._rawValidators;
      }
      function xt(b) {
        return b._rawAsyncValidators;
      }
      function lt(b) {
        return b ? (Array.isArray(b) ? b : [b]) : [];
      }
      function St(b, g) {
        return Array.isArray(b) ? b.includes(g) : b === g;
      }
      function Ht(b, g) {
        const h = lt(g);
        return (
          lt(b).forEach(ue => {
            St(h, ue) || h.push(ue);
          }),
          h
        );
      }
      function et(b, g) {
        return lt(g).filter(h => !St(b, h));
      }
      class an {
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
            (this._composedAsyncValidatorFn = He(this._rawAsyncValidators));
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
      class Dt extends an {
        get formDirective() {
          return null;
        }
        get path() {
          return null;
        }
      }
      class kt extends an {
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
      const Je = 'VALID',
        ut = 'INVALID',
        ct = 'PENDING',
        Ue = 'DISABLED';
      function Ot(b) {
        return (Zt(b) ? b.validators : b) || null;
      }
      function bn(b) {
        return Array.isArray(b) ? pe(b) : b || null;
      }
      function Ct(b, g) {
        return (Zt(g) ? g.asyncValidators : b) || null;
      }
      function Jt(b) {
        return Array.isArray(b) ? He(b) : b || null;
      }
      function Zt(b) {
        return null != b && !Array.isArray(b) && 'object' == typeof b;
      }
      class je {
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
            (this._composedValidatorFn = bn(this._rawValidators)),
            (this._composedAsyncValidatorFn = Jt(this._rawAsyncValidators));
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
          return this.status === Je;
        }
        get invalid() {
          return this.status === ut;
        }
        get pending() {
          return this.status == ct;
        }
        get disabled() {
          return this.status === Ue;
        }
        get enabled() {
          return this.status !== Ue;
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
          (this._rawValidators = g), (this._composedValidatorFn = bn(g));
        }
        setAsyncValidators(g) {
          (this._rawAsyncValidators = g),
            (this._composedAsyncValidatorFn = Jt(g));
        }
        addValidators(g) {
          this.setValidators(Ht(g, this._rawValidators));
        }
        addAsyncValidators(g) {
          this.setAsyncValidators(Ht(g, this._rawAsyncValidators));
        }
        removeValidators(g) {
          this.setValidators(et(g, this._rawValidators));
        }
        removeAsyncValidators(g) {
          this.setAsyncValidators(et(g, this._rawAsyncValidators));
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
          (this.status = ct),
            !1 !== g.emitEvent && this.statusChanges.emit(this.status),
            this._parent && !g.onlySelf && this._parent.markAsPending(g);
        }
        disable(g = {}) {
          const h = this._parentMarkedDirty(g.onlySelf);
          (this.status = Ue),
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
          (this.status = Je),
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
              (this.status === Je || this.status === ct) &&
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
          this.status = this._allControlsDisabled() ? Ue : Je;
        }
        _runValidator() {
          return this.validator ? this.validator(this) : null;
        }
        _runAsyncValidator(g) {
          if (this.asyncValidator) {
            (this.status = ct), (this._hasOwnPendingAsyncValidator = !0);
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
            : h.reduce((O, ue) => O && O._find(ue), this);
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
            ? Ue
            : this.errors
            ? ut
            : this._hasOwnPendingAsyncValidator ||
              this._anyControlsHaveStatus(ct)
            ? ct
            : this._anyControlsHaveStatus(ut)
            ? ut
            : Je;
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
          Zt(g) && null != g.updateOn && (this._updateOn = g.updateOn);
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
      class at extends je {
        constructor(g, h, O) {
          super(Ot(h), Ct(O, h)),
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
          (function en(b, g, h) {
            b._forEachChild((O, ue) => {
              if (void 0 === h[ue]) throw new s.vHH(1002, '');
            });
          })(this, 0, g),
            Object.keys(g).forEach(O => {
              (function Xt(b, g, h) {
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
              const ue = this.controls[O];
              ue &&
                ue.patchValue(g[O], { onlySelf: !0, emitEvent: h.emitEvent });
            }),
            this.updateValueAndValidity(h));
        }
        reset(g = {}, h = {}) {
          this._forEachChild((O, ue) => {
            O.reset(g[ue], { onlySelf: !0, emitEvent: h.emitEvent });
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
            (h, O, ue) => ((O.enabled || this.disabled) && (h[ue] = O.value), h)
          );
        }
        _reduceChildren(g, h) {
          let O = g;
          return (
            this._forEachChild((ue, tt) => {
              O = h(O, ue, tt);
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
      function $e(b, g) {
        In(b, g),
          g.valueAccessor.writeValue(b.value),
          b.disabled && g.valueAccessor.setDisabledState?.(!0),
          (function jn(b, g) {
            g.valueAccessor.registerOnChange(h => {
              (b._pendingValue = h),
                (b._pendingChange = !0),
                (b._pendingDirty = !0),
                'change' === b.updateOn && Qt(b, g);
            });
          })(b, g),
          (function Hn(b, g) {
            const h = (O, ue) => {
              g.valueAccessor.writeValue(O), ue && g.viewToModelUpdate(O);
            };
            b.registerOnChange(h),
              g._registerOnDestroy(() => {
                b._unregisterOnChange(h);
              });
          })(b, g),
          (function En(b, g) {
            g.valueAccessor.registerOnTouched(() => {
              (b._pendingTouched = !0),
                'blur' === b.updateOn && b._pendingChange && Qt(b, g),
                'submit' !== b.updateOn && b.markAsTouched();
            });
          })(b, g),
          (function ot(b, g) {
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
        const h = ft(b);
        null !== g.validator
          ? b.setValidators(rt(h, g.validator))
          : 'function' == typeof h && b.setValidators([h]);
        const O = xt(b);
        null !== g.asyncValidator
          ? b.setAsyncValidators(rt(O, g.asyncValidator))
          : 'function' == typeof O && b.setAsyncValidators([O]);
        const ue = () => b.updateValueAndValidity();
        Ut(g._rawValidators, ue), Ut(g._rawAsyncValidators, ue);
      }
      function Nn(b, g) {
        let h = !1;
        if (null !== b) {
          if (null !== g.validator) {
            const ue = ft(b);
            if (Array.isArray(ue) && ue.length > 0) {
              const tt = ue.filter(Yt => Yt !== g.validator);
              tt.length !== ue.length && ((h = !0), b.setValidators(tt));
            }
          }
          if (null !== g.asyncValidator) {
            const ue = xt(b);
            if (Array.isArray(ue) && ue.length > 0) {
              const tt = ue.filter(Yt => Yt !== g.asyncValidator);
              tt.length !== ue.length && ((h = !0), b.setAsyncValidators(tt));
            }
          }
        }
        const O = () => {};
        return Ut(g._rawValidators, O), Ut(g._rawAsyncValidators, O), h;
      }
      function Qt(b, g) {
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
        let h, O, ue;
        return (
          Array.isArray(g),
          g.forEach(tt => {
            tt.constructor === Te
              ? (h = tt)
              : (function Po(b) {
                  return Object.getPrototypeOf(b.constructor) === Ee;
                })(tt)
              ? (O = tt)
              : (ue = tt);
          }),
          ue || O || h || null
        );
      }
      function hn(b, g) {
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
      const nn = class extends je {
          constructor(g = null, h, O) {
            super(Ot(h), Ct(O, h)),
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
              Zt(h) &&
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
            hn(this._onChange, g);
          }
          registerOnDisabledChange(g) {
            this._onDisabledChange.push(g);
          }
          _unregisterOnDisabledChange(g) {
            hn(this._onDisabledChange, g);
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
            constructor(h, O, ue, tt, Yt) {
              super(),
                (this._changeDetectorRef = Yt),
                (this.control = new nn()),
                (this._registered = !1),
                (this.update = new s.vpe()),
                (this._parent = h),
                this._setValidators(O),
                this._setAsyncValidators(ue),
                (this.valueAccessor = Yn(0, tt));
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
              $e(this.control, this),
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
                ue = 0 !== O && (0, s.D6c)(O);
              ur.then(() => {
                ue && !this.control.disabled
                  ? this.control.disable()
                  : !ue && this.control.disabled && this.control.enable(),
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
                s.Y36(we, 10),
                s.Y36(Ie, 10),
                s.Y36(de, 10),
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
        Kr = { provide: kt, useExisting: (0, s.Gpc)(() => To) };
      let To = (() => {
        class b extends kt {
          constructor(h, O, ue, tt) {
            super(),
              (this._ngModelWarningConfig = tt),
              (this.update = new s.vpe()),
              (this._ngModelWarningSent = !1),
              this._setValidators(h),
              this._setAsyncValidators(O),
              (this.valueAccessor = Yn(0, ue));
          }
          set isDisabled(h) {}
          ngOnChanges(h) {
            if (this._isControlChanged(h)) {
              const O = h.form.previousValue;
              O && ht(O, this, !1),
                $e(this.form, this),
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
              s.Y36(we, 10),
              s.Y36(Ie, 10),
              s.Y36(de, 10),
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
            features: [s._Bn([Kr]), s.qOj, s.TTD],
          })),
          b
        );
      })();
      const Kn = { provide: Dt, useExisting: (0, s.Gpc)(() => io) };
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
              $e(O, h),
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
                ue = this.form.get(h.path);
              O !== ue &&
                (ht(O || null, h),
                (b => b instanceof nn)(ue) && ($e(ue, h), (h.control = ue)));
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
                (function pn(b, g) {
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
            return new (h || b)(s.Y36(we, 10), s.Y36(Ie, 10));
          }),
          (b.ɵdir = s.lG2({
            type: b,
            selectors: [['', 'formGroup', '']],
            hostBindings: function (h, O) {
              1 & h &&
                s.NdJ('submit', function (tt) {
                  return O.onSubmit(tt);
                })('reset', function () {
                  return O.onReset();
                });
            },
            inputs: { form: ['formGroup', 'form'] },
            outputs: { ngSubmit: 'ngSubmit' },
            exportAs: ['ngForm'],
            features: [s._Bn([Kn]), s.qOj, s.TTD],
          })),
          b
        );
      })();
      const dr = { provide: kt, useExisting: (0, s.Gpc)(() => Ko) };
      let Ko = (() => {
          class b extends kt {
            constructor(h, O, ue, tt, Yt) {
              super(),
                (this._ngModelWarningConfig = Yt),
                (this._added = !1),
                (this.update = new s.vpe()),
                (this._ngModelWarningSent = !1),
                (this._parent = h),
                this._setValidators(O),
                this._setAsyncValidators(ue),
                (this.valueAccessor = Yn(0, tt));
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
                s.Y36(we, 10),
                s.Y36(Ie, 10),
                s.Y36(de, 10),
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
    1481: (Xe, ge, v) => {
      v.d(ge, { Dx: () => $, H7: () => Xt, b2: () => Fn, q6: () => et });
      var s = v(6895),
        C = v(4650);
      class H extends s.w_ {
        constructor() {
          super(...arguments), (this.supportsDOMEvents = !0);
        }
      }
      class Q extends H {
        static makeCurrent() {
          (0, s.HT)(new Q());
        }
        onAndCancel(N, T, k) {
          return (
            N.addEventListener(T, k, !1),
            () => {
              N.removeEventListener(T, k, !1);
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
          const T = (function I() {
            return (
              (ee = ee || document.querySelector('base')),
              ee ? ee.getAttribute('href') : null
            );
          })();
          return null == T
            ? null
            : (function Y(z) {
                (B = B || document.createElement('a')),
                  B.setAttribute('href', z);
                const N = B.pathname;
                return '/' === N.charAt(0) ? N : `/${N}`;
              })(T);
        }
        resetBaseElement() {
          ee = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        getCookie(N) {
          return (0, s.Mx)(document.cookie, N);
        }
      }
      let B,
        ee = null;
      const fe = new C.OlP('TRANSITION_ID'),
        te = [
          {
            provide: C.ip1,
            useFactory: function ne(z, N, T) {
              return () => {
                T.get(C.CZH).donePromise.then(() => {
                  const k = (0, s.q)(),
                    xe = N.querySelectorAll(`style[ng-transition="${z}"]`);
                  for (let $e = 0; $e < xe.length; $e++) k.remove(xe[$e]);
                });
              };
            },
            deps: [fe, s.K0, C.zs3],
            multi: !0,
          },
        ];
      let Ze = (() => {
        class z {
          build() {
            return new XMLHttpRequest();
          }
        }
        return (
          (z.ɵfac = function (T) {
            return new (T || z)();
          }),
          (z.ɵprov = C.Yz7({ token: z, factory: z.ɵfac })),
          z
        );
      })();
      const Ee = new C.OlP('EventManagerPlugins');
      let de = (() => {
        class z {
          constructor(T, k) {
            (this._zone = k),
              (this._eventNameToPlugin = new Map()),
              T.forEach(xe => (xe.manager = this)),
              (this._plugins = T.slice().reverse());
          }
          addEventListener(T, k, xe) {
            return this._findPluginFor(k).addEventListener(T, k, xe);
          }
          addGlobalEventListener(T, k, xe) {
            return this._findPluginFor(k).addGlobalEventListener(T, k, xe);
          }
          getZone() {
            return this._zone;
          }
          _findPluginFor(T) {
            const k = this._eventNameToPlugin.get(T);
            if (k) return k;
            const xe = this._plugins;
            for (let $e = 0; $e < xe.length; $e++) {
              const ht = xe[$e];
              if (ht.supports(T)) return this._eventNameToPlugin.set(T, ht), ht;
            }
            throw new Error(`No event manager plugin found for event ${T}`);
          }
        }
        return (
          (z.ɵfac = function (T) {
            return new (T || z)(C.LFG(Ee), C.LFG(C.R0b));
          }),
          (z.ɵprov = C.Yz7({ token: z, factory: z.ɵfac })),
          z
        );
      })();
      class ye {
        constructor(N) {
          this._doc = N;
        }
        addGlobalEventListener(N, T, k) {
          const xe = (0, s.q)().getGlobalEventTarget(this._doc, N);
          if (!xe)
            throw new Error(`Unsupported event target ${xe} for event ${T}`);
          return this.addEventListener(xe, T, k);
        }
      }
      let K = (() => {
          class z {
            constructor() {
              this._stylesSet = new Set();
            }
            addStyles(T) {
              const k = new Set();
              T.forEach(xe => {
                this._stylesSet.has(xe) || (this._stylesSet.add(xe), k.add(xe));
              }),
                this.onStylesAdded(k);
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
            (z.ɵprov = C.Yz7({ token: z, factory: z.ɵfac })),
            z
          );
        })(),
        ie = (() => {
          class z extends K {
            constructor(T) {
              super(),
                (this._doc = T),
                (this._hostNodes = new Map()),
                this._hostNodes.set(T.head, []);
            }
            _addStylesToHost(T, k, xe) {
              T.forEach($e => {
                const ht = this._doc.createElement('style');
                (ht.textContent = $e), xe.push(k.appendChild(ht));
              });
            }
            addHost(T) {
              const k = [];
              this._addStylesToHost(this._stylesSet, T, k),
                this._hostNodes.set(T, k);
            }
            removeHost(T) {
              const k = this._hostNodes.get(T);
              k && k.forEach(Ae), this._hostNodes.delete(T);
            }
            onStylesAdded(T) {
              this._hostNodes.forEach((k, xe) => {
                this._addStylesToHost(T, xe, k);
              });
            }
            ngOnDestroy() {
              this._hostNodes.forEach(T => T.forEach(Ae));
            }
          }
          return (
            (z.ɵfac = function (T) {
              return new (T || z)(C.LFG(s.K0));
            }),
            (z.ɵprov = C.Yz7({ token: z, factory: z.ɵfac })),
            z
          );
        })();
      function Ae(z) {
        (0, s.q)().remove(z);
      }
      const Ne = {
          svg: 'http://www.w3.org/2000/svg',
          xhtml: 'http://www.w3.org/1999/xhtml',
          xlink: 'http://www.w3.org/1999/xlink',
          xml: 'http://www.w3.org/XML/1998/namespace',
          xmlns: 'http://www.w3.org/2000/xmlns/',
          math: 'http://www.w3.org/1998/MathML/',
        },
        Te = /%COMP%/g;
      function G(z, N, T) {
        for (let k = 0; k < N.length; k++) {
          let xe = N[k];
          Array.isArray(xe)
            ? G(z, xe, T)
            : ((xe = xe.replace(Te, z)), T.push(xe));
        }
        return T;
      }
      function J(z) {
        return N => {
          if ('__ngUnwrap__' === N) return z;
          !1 === z(N) && (N.preventDefault(), (N.returnValue = !1));
        };
      }
      let le = (() => {
        class z {
          constructor(T, k, xe) {
            (this.eventManager = T),
              (this.sharedStylesHost = k),
              (this.appId = xe),
              (this.rendererByCompId = new Map()),
              (this.defaultRenderer = new se(T));
          }
          createRenderer(T, k) {
            if (!T || !k) return this.defaultRenderer;
            switch (k.encapsulation) {
              case C.ifc.Emulated: {
                let xe = this.rendererByCompId.get(k.id);
                return (
                  xe ||
                    ((xe = new _t(
                      this.eventManager,
                      this.sharedStylesHost,
                      k,
                      this.appId
                    )),
                    this.rendererByCompId.set(k.id, xe)),
                  xe.applyToHost(T),
                  xe
                );
              }
              case 1:
              case C.ifc.ShadowDom:
                return new Be(this.eventManager, this.sharedStylesHost, T, k);
              default:
                if (!this.rendererByCompId.has(k.id)) {
                  const xe = G(k.id, k.styles, []);
                  this.sharedStylesHost.addStyles(xe),
                    this.rendererByCompId.set(k.id, this.defaultRenderer);
                }
                return this.defaultRenderer;
            }
          }
          begin() {}
          end() {}
        }
        return (
          (z.ɵfac = function (T) {
            return new (T || z)(C.LFG(de), C.LFG(ie), C.LFG(C.AFp));
          }),
          (z.ɵprov = C.Yz7({ token: z, factory: z.ɵfac })),
          z
        );
      })();
      class se {
        constructor(N) {
          (this.eventManager = N),
            (this.data = Object.create(null)),
            (this.destroyNode = null);
        }
        destroy() {}
        createElement(N, T) {
          return T
            ? document.createElementNS(Ne[T] || T, N)
            : document.createElement(N);
        }
        createComment(N) {
          return document.createComment(N);
        }
        createText(N) {
          return document.createTextNode(N);
        }
        appendChild(N, T) {
          (gt(N) ? N.content : N).appendChild(T);
        }
        insertBefore(N, T, k) {
          N && (gt(N) ? N.content : N).insertBefore(T, k);
        }
        removeChild(N, T) {
          N && N.removeChild(T);
        }
        selectRootElement(N, T) {
          let k = 'string' == typeof N ? document.querySelector(N) : N;
          if (!k)
            throw new Error(`The selector "${N}" did not match any elements`);
          return T || (k.textContent = ''), k;
        }
        parentNode(N) {
          return N.parentNode;
        }
        nextSibling(N) {
          return N.nextSibling;
        }
        setAttribute(N, T, k, xe) {
          if (xe) {
            T = xe + ':' + T;
            const $e = Ne[xe];
            $e ? N.setAttributeNS($e, T, k) : N.setAttribute(T, k);
          } else N.setAttribute(T, k);
        }
        removeAttribute(N, T, k) {
          if (k) {
            const xe = Ne[k];
            xe ? N.removeAttributeNS(xe, T) : N.removeAttribute(`${k}:${T}`);
          } else N.removeAttribute(T);
        }
        addClass(N, T) {
          N.classList.add(T);
        }
        removeClass(N, T) {
          N.classList.remove(T);
        }
        setStyle(N, T, k, xe) {
          xe & (C.JOm.DashCase | C.JOm.Important)
            ? N.style.setProperty(T, k, xe & C.JOm.Important ? 'important' : '')
            : (N.style[T] = k);
        }
        removeStyle(N, T, k) {
          k & C.JOm.DashCase ? N.style.removeProperty(T) : (N.style[T] = '');
        }
        setProperty(N, T, k) {
          N[T] = k;
        }
        setValue(N, T) {
          N.nodeValue = T;
        }
        listen(N, T, k) {
          return 'string' == typeof N
            ? this.eventManager.addGlobalEventListener(N, T, J(k))
            : this.eventManager.addEventListener(N, T, J(k));
        }
      }
      function gt(z) {
        return 'TEMPLATE' === z.tagName && void 0 !== z.content;
      }
      class _t extends se {
        constructor(N, T, k, xe) {
          super(N), (this.component = k);
          const $e = G(xe + '-' + k.id, k.styles, []);
          T.addStyles($e),
            (this.contentAttr = (function X(z) {
              return '_ngcontent-%COMP%'.replace(Te, z);
            })(xe + '-' + k.id)),
            (this.hostAttr = (function Pe(z) {
              return '_nghost-%COMP%'.replace(Te, z);
            })(xe + '-' + k.id));
        }
        applyToHost(N) {
          super.setAttribute(N, this.hostAttr, '');
        }
        createElement(N, T) {
          const k = super.createElement(N, T);
          return super.setAttribute(k, this.contentAttr, ''), k;
        }
      }
      class Be extends se {
        constructor(N, T, k, xe) {
          super(N),
            (this.sharedStylesHost = T),
            (this.hostEl = k),
            (this.shadowRoot = k.attachShadow({ mode: 'open' })),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const $e = G(xe.id, xe.styles, []);
          for (let ht = 0; ht < $e.length; ht++) {
            const Ut = document.createElement('style');
            (Ut.textContent = $e[ht]), this.shadowRoot.appendChild(Ut);
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
        insertBefore(N, T, k) {
          return super.insertBefore(this.nodeOrShadowRoot(N), T, k);
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
        class z extends ye {
          constructor(T) {
            super(T);
          }
          supports(T) {
            return !0;
          }
          addEventListener(T, k, xe) {
            return (
              T.addEventListener(k, xe, !1),
              () => this.removeEventListener(T, k, xe)
            );
          }
          removeEventListener(T, k, xe) {
            return T.removeEventListener(k, xe);
          }
        }
        return (
          (z.ɵfac = function (T) {
            return new (T || z)(C.LFG(s.K0));
          }),
          (z.ɵprov = C.Yz7({ token: z, factory: z.ɵfac })),
          z
        );
      })();
      const cn = ['alt', 'control', 'meta', 'shift'],
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
        Oe = {
          alt: z => z.altKey,
          control: z => z.ctrlKey,
          meta: z => z.metaKey,
          shift: z => z.shiftKey,
        };
      let pe = (() => {
        class z extends ye {
          constructor(T) {
            super(T);
          }
          supports(T) {
            return null != z.parseEventName(T);
          }
          addEventListener(T, k, xe) {
            const $e = z.parseEventName(k),
              ht = z.eventCallback($e.fullKey, xe, this.manager.getZone());
            return this.manager
              .getZone()
              .runOutsideAngular(() =>
                (0, s.q)().onAndCancel(T, $e.domEventName, ht)
              );
          }
          static parseEventName(T) {
            const k = T.toLowerCase().split('.'),
              xe = k.shift();
            if (0 === k.length || ('keydown' !== xe && 'keyup' !== xe))
              return null;
            const $e = z._normalizeKey(k.pop());
            let ht = '';
            if (
              (cn.forEach(ot => {
                const In = k.indexOf(ot);
                In > -1 && (k.splice(In, 1), (ht += ot + '.'));
              }),
              (ht += $e),
              0 != k.length || 0 === $e.length)
            )
              return null;
            const Ut = {};
            return (Ut.domEventName = xe), (Ut.fullKey = ht), Ut;
          }
          static getEventFullKey(T) {
            let k = '',
              xe = (function ce(z) {
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
              cn.forEach($e => {
                $e != xe && Oe[$e](T) && (k += $e + '.');
              }),
              (k += xe),
              k
            );
          }
          static eventCallback(T, k, xe) {
            return $e => {
              z.getEventFullKey($e) === T && xe.runGuarded(() => k($e));
            };
          }
          static _normalizeKey(T) {
            return 'esc' === T ? 'escape' : T;
          }
        }
        return (
          (z.ɵfac = function (T) {
            return new (T || z)(C.LFG(s.K0));
          }),
          (z.ɵprov = C.Yz7({ token: z, factory: z.ɵfac })),
          z
        );
      })();
      const et = (0, C.eFA)(C._c5, 'browser', [
          { provide: C.Lbi, useValue: s.bD },
          {
            provide: C.g9A,
            useValue: function xt() {
              Q.makeCurrent();
            },
            multi: !0,
          },
          {
            provide: s.K0,
            useFactory: function St() {
              return (0, C.RDi)(document), document;
            },
            deps: [],
          },
        ]),
        an = new C.OlP(''),
        Dt = [
          {
            provide: C.rWj,
            useClass: class oe {
              addToWindow(N) {
                (C.dqk.getAngularTestability = (k, xe = !0) => {
                  const $e = N.findTestabilityInTree(k, xe);
                  if (null == $e)
                    throw new Error('Could not find testability for element.');
                  return $e;
                }),
                  (C.dqk.getAllAngularTestabilities = () =>
                    N.getAllTestabilities()),
                  (C.dqk.getAllAngularRootElements = () =>
                    N.getAllRootElements()),
                  C.dqk.frameworkStabilizers ||
                    (C.dqk.frameworkStabilizers = []),
                  C.dqk.frameworkStabilizers.push(k => {
                    const xe = C.dqk.getAllAngularTestabilities();
                    let $e = xe.length,
                      ht = !1;
                    const Ut = function (ot) {
                      (ht = ht || ot), $e--, 0 == $e && k(ht);
                    };
                    xe.forEach(function (ot) {
                      ot.whenStable(Ut);
                    });
                  });
              }
              findTestabilityInTree(N, T, k) {
                return null == T
                  ? null
                  : N.getTestability(T) ??
                      (k
                        ? (0, s.q)().isShadowRoot(T)
                          ? this.findTestabilityInTree(N, T.host, !0)
                          : this.findTestabilityInTree(N, T.parentElement, !0)
                        : null);
              }
            },
            deps: [],
          },
          { provide: C.lri, useClass: C.dDg, deps: [C.R0b, C.eoX, C.rWj] },
          { provide: C.dDg, useClass: C.dDg, deps: [C.R0b, C.eoX, C.rWj] },
        ],
        kt = [
          { provide: C.zSh, useValue: 'root' },
          {
            provide: C.qLn,
            useFactory: function lt() {
              return new C.qLn();
            },
            deps: [],
          },
          { provide: Ee, useClass: jt, multi: !0, deps: [s.K0, C.R0b, C.Lbi] },
          { provide: Ee, useClass: pe, multi: !0, deps: [s.K0] },
          { provide: le, useClass: le, deps: [de, ie, C.AFp] },
          { provide: C.FYo, useExisting: le },
          { provide: K, useExisting: ie },
          { provide: ie, useClass: ie, deps: [s.K0] },
          { provide: de, useClass: de, deps: [Ee, C.R0b] },
          { provide: s.JF, useClass: Ze, deps: [] },
          [],
        ];
      let Fn = (() => {
          class z {
            constructor(T) {}
            static withServerTransition(T) {
              return {
                ngModule: z,
                providers: [
                  { provide: C.AFp, useValue: T.appId },
                  { provide: fe, useExisting: C.AFp },
                  te,
                ],
              };
            }
          }
          return (
            (z.ɵfac = function (T) {
              return new (T || z)(C.LFG(an, 12));
            }),
            (z.ɵmod = C.oAB({ type: z })),
            (z.ɵinj = C.cJS({
              providers: [...kt, ...Dt],
              imports: [s.ez, C.hGG],
            })),
            z
          );
        })(),
        $ = (() => {
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
              return new (T || z)(C.LFG(s.K0));
            }),
            (z.ɵprov = C.Yz7({
              token: z,
              factory: function (T) {
                let k = null;
                return (
                  (k = T
                    ? new T()
                    : (function U() {
                        return new $((0, C.LFG)(s.K0));
                      })()),
                  k
                );
              },
              providedIn: 'root',
            })),
            z
          );
        })();
      typeof window < 'u' && window;
      let Xt = (() => {
          class z {}
          return (
            (z.ɵfac = function (T) {
              return new (T || z)();
            }),
            (z.ɵprov = C.Yz7({
              token: z,
              factory: function (T) {
                let k = null;
                return (k = T ? new (T || z)() : C.LFG(je)), k;
              },
              providedIn: 'root',
            })),
            z
          );
        })(),
        je = (() => {
          class z extends Xt {
            constructor(T) {
              super(), (this._doc = T);
            }
            sanitize(T, k) {
              if (null == k) return null;
              switch (T) {
                case C.q3G.NONE:
                  return k;
                case C.q3G.HTML:
                  return (0, C.qzn)(k, 'HTML')
                    ? (0, C.z3N)(k)
                    : (0, C.EiD)(this._doc, String(k)).toString();
                case C.q3G.STYLE:
                  return (0, C.qzn)(k, 'Style') ? (0, C.z3N)(k) : k;
                case C.q3G.SCRIPT:
                  if ((0, C.qzn)(k, 'Script')) return (0, C.z3N)(k);
                  throw new Error('unsafe value used in a script context');
                case C.q3G.URL:
                  return (
                    (0, C.yhl)(k),
                    (0, C.qzn)(k, 'URL') ? (0, C.z3N)(k) : (0, C.mCW)(String(k))
                  );
                case C.q3G.RESOURCE_URL:
                  if ((0, C.qzn)(k, 'ResourceURL')) return (0, C.z3N)(k);
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
              return (0, C.JVY)(T);
            }
            bypassSecurityTrustStyle(T) {
              return (0, C.L6k)(T);
            }
            bypassSecurityTrustScript(T) {
              return (0, C.eBb)(T);
            }
            bypassSecurityTrustUrl(T) {
              return (0, C.LAX)(T);
            }
            bypassSecurityTrustResourceUrl(T) {
              return (0, C.pB0)(T);
            }
          }
          return (
            (z.ɵfac = function (T) {
              return new (T || z)(C.LFG(s.K0));
            }),
            (z.ɵprov = C.Yz7({
              token: z,
              factory: function (T) {
                let k = null;
                return (
                  (k = T
                    ? new T()
                    : (function en(z) {
                        return new je(z.get(s.K0));
                      })(C.LFG(C.zs3))),
                  k
                );
              },
              providedIn: 'root',
            })),
            z
          );
        })();
    },
    542: (Xe, ge, v) => {
      v.d(ge, {
        gz: () => ro,
        m2: () => an,
        F0: () => An,
        Bz: () => Xs,
        lC: () => Qn,
      });
      var s = v(6895),
        C = v(4650),
        H = v(7579);
      class Q extends H.x {
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
      var ee = v(8306),
        I = v(4742),
        B = v(2076),
        Y = v(4671),
        fe = v(3268),
        ne = v(7669),
        te = v(1810),
        oe = v(5403),
        Ze = v(9672);
      function Ee(...u) {
        const l = (0, ne.yG)(u),
          a = (0, ne.jO)(u),
          { args: f, keys: _ } = (0, I.D)(u);
        if (0 === f.length) return (0, B.D)([], l);
        const w = new ee.y(
          (function de(u, l, a = Y.y) {
            return f => {
              ye(
                l,
                () => {
                  const { length: _ } = u,
                    w = new Array(_);
                  let S = _,
                    F = _;
                  for (let re = 0; re < _; re++)
                    ye(
                      l,
                      () => {
                        const Se = (0, B.D)(u[re], l);
                        let We = !1;
                        Se.subscribe(
                          (0, oe.x)(
                            f,
                            Ye => {
                              (w[re] = Ye),
                                We || ((We = !0), F--),
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
          })(f, l, _ ? S => (0, te.n)(_, S) : Y.y)
        );
        return a ? w.pipe((0, fe.Z)(a)) : w;
      }
      function ye(u, l, a) {
        u ? (0, Ze.f)(a, u, l) : l();
      }
      var K = v(576);
      function ie(u, l) {
        const a = (0, K.m)(u) ? u : () => u,
          f = _ => _.error(a());
        return new ee.y(l ? _ => l.schedule(f, 0, _) : f);
      }
      const Ne = (0, v(3888).d)(
        u =>
          function () {
            u(this),
              (this.name = 'EmptyError'),
              (this.message = 'no elements in sequence');
          }
      );
      var Te = v(8189);
      function Le(...u) {
        return (function ve() {
          return (0, Te.J)(1);
        })()((0, B.D)(u, (0, ne.yG)(u)));
      }
      var we = v(8421);
      function Ie(u) {
        return new ee.y(l => {
          (0, we.Xf)(u()).subscribe(l);
        });
      }
      var X = v(727),
        Pe = v(4482);
      function G() {
        return (0, Pe.e)((u, l) => {
          let a = null;
          u._refCount++;
          const f = (0, oe.x)(l, void 0, void 0, void 0, () => {
            if (!u || u._refCount <= 0 || 0 < --u._refCount)
              return void (a = null);
            const _ = u._connection,
              w = a;
            (a = null),
              _ && (!w || _ === w) && _.unsubscribe(),
              l.unsubscribe();
          });
          u.subscribe(f), f.closed || (a = u.connect());
        });
      }
      class J extends ee.y {
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
            l = this._connection = new X.w0();
            const a = this.getSubject();
            l.add(
              this.source.subscribe(
                (0, oe.x)(
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
              l.closed && ((this._connection = null), (l = X.w0.EMPTY));
          }
          return l;
        }
        refCount() {
          return G()(this);
        }
      }
      var j = v(9646),
        le = v(515);
      function ke(u, l, a, f, _) {
        return (w, S) => {
          let F = a,
            re = l,
            Se = 0;
          w.subscribe(
            (0, oe.x)(
              S,
              We => {
                const Ye = Se++;
                (re = F ? u(re, We, Ye) : ((F = !0), We)), f && S.next(re);
              },
              _ &&
                (() => {
                  F && S.next(re), S.complete();
                })
            )
          );
        };
      }
      function it(u, l) {
        return (0, Pe.e)(ke(u, l, arguments.length >= 2, !0));
      }
      function gt(u) {
        return (0, Pe.e)((l, a) => {
          let w,
            f = null,
            _ = !1;
          (f = l.subscribe(
            (0, oe.x)(a, void 0, void 0, S => {
              (w = (0, we.Xf)(u(S, gt(u)(l)))),
                f ? (f.unsubscribe(), (f = null), w.subscribe(a)) : (_ = !0);
            })
          )),
            _ && (f.unsubscribe(), (f = null), w.subscribe(a));
        });
      }
      var _t = v(9300);
      function Be(u) {
        return u <= 0
          ? () => le.E
          : (0, Pe.e)((l, a) => {
              let f = [];
              l.subscribe(
                (0, oe.x)(
                  a,
                  _ => {
                    f.push(_), u < f.length && f.shift();
                  },
                  () => {
                    for (const _ of f) a.next(_);
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
      function jt(u = cn) {
        return (0, Pe.e)((l, a) => {
          let f = !1;
          l.subscribe(
            (0, oe.x)(
              a,
              _ => {
                (f = !0), a.next(_);
              },
              () => (f ? a.complete() : a.error(u()))
            )
          );
        });
      }
      function cn() {
        return new Ne();
      }
      function Tt(u) {
        return (0, Pe.e)((l, a) => {
          let f = !1;
          l.subscribe(
            (0, oe.x)(
              a,
              _ => {
                (f = !0), a.next(_);
              },
              () => {
                f || a.next(u), a.complete();
              }
            )
          );
        });
      }
      var qt = v(5698);
      function Oe(u, l) {
        const a = arguments.length >= 2;
        return f =>
          f.pipe(
            u ? (0, _t.h)((_, w) => u(_, w, f)) : Y.y,
            (0, qt.q)(1),
            a ? Tt(l) : jt(() => new Ne())
          );
      }
      function pe(u, l, a) {
        const f =
          (0, K.m)(u) || l || a ? { next: u, error: l, complete: a } : u;
        return f
          ? (0, Pe.e)((_, w) => {
              var S;
              null === (S = f.subscribe) || void 0 === S || S.call(f);
              let F = !0;
              _.subscribe(
                (0, oe.x)(
                  w,
                  re => {
                    var Se;
                    null === (Se = f.next) || void 0 === Se || Se.call(f, re),
                      w.next(re);
                  },
                  () => {
                    var re;
                    (F = !1),
                      null === (re = f.complete) || void 0 === re || re.call(f),
                      w.complete();
                  },
                  re => {
                    var Se;
                    (F = !1),
                      null === (Se = f.error) ||
                        void 0 === Se ||
                        Se.call(f, re),
                      w.error(re);
                  },
                  () => {
                    var re, Se;
                    F &&
                      (null === (re = f.unsubscribe) ||
                        void 0 === re ||
                        re.call(f)),
                      null === (Se = f.finalize) || void 0 === Se || Se.call(f);
                  }
                )
              );
            })
          : Y.y;
      }
      var ce = v(4004);
      function rt(u) {
        return (0, Pe.e)((l, a) => {
          try {
            l.subscribe(a);
          } finally {
            a.add(u);
          }
        });
      }
      var ft = v(3900),
        xt = v(4351),
        lt = v(5577),
        St = v(1481);
      class Ht {
        constructor(l, a) {
          (this.id = l), (this.url = a);
        }
      }
      class et extends Ht {
        constructor(l, a, f = 'imperative', _ = null) {
          super(l, a),
            (this.type = 0),
            (this.navigationTrigger = f),
            (this.restoredState = _);
        }
        toString() {
          return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class an extends Ht {
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
        constructor(l, a, f, _) {
          super(l, a),
            (this.urlAfterRedirects = f),
            (this.state = _),
            (this.type = 4);
        }
        toString() {
          return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class zo extends Ht {
        constructor(l, a, f, _) {
          super(l, a),
            (this.urlAfterRedirects = f),
            (this.state = _),
            (this.type = 7);
        }
        toString() {
          return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Cn extends Ht {
        constructor(l, a, f, _, w) {
          super(l, a),
            (this.urlAfterRedirects = f),
            (this.state = _),
            (this.shouldActivate = w),
            (this.type = 8);
        }
        toString() {
          return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
        }
      }
      class he extends Ht {
        constructor(l, a, f, _) {
          super(l, a),
            (this.urlAfterRedirects = f),
            (this.state = _),
            (this.type = 5);
        }
        toString() {
          return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class U extends Ht {
        constructor(l, a, f, _) {
          super(l, a),
            (this.urlAfterRedirects = f),
            (this.state = _),
            (this.type = 6);
        }
        toString() {
          return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class $ {
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
      class W {
        constructor(l) {
          (this.snapshot = l), (this.type = 11);
        }
        toString() {
          return `ChildActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class Re {
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
      class Ve {
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
      const Qe = 'primary';
      class ln {
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
      function mt(u) {
        return new ln(u);
      }
      const vt = 'ngNavigationCancelingError';
      function nt(u) {
        const l = Error('NavigationCancelingError: ' + u);
        return (l[vt] = !0), l;
      }
      function R(u, l, a) {
        const f = a.path.split('/');
        if (
          f.length > u.length ||
          ('full' === a.pathMatch && (l.hasChildren() || f.length < u.length))
        )
          return null;
        const _ = {};
        for (let w = 0; w < f.length; w++) {
          const S = f[w],
            F = u[w];
          if (S.startsWith(':')) _[S.substring(1)] = F;
          else if (S !== F.path) return null;
        }
        return { consumed: u.slice(0, f.length), posParams: _ };
      }
      function P(u, l) {
        const a = u ? Object.keys(u) : void 0,
          f = l ? Object.keys(l) : void 0;
        if (!a || !f || a.length != f.length) return !1;
        let _;
        for (let w = 0; w < a.length; w++)
          if (((_ = a[w]), !Z(u[_], l[_]))) return !1;
        return !0;
      }
      function Z(u, l) {
        if (Array.isArray(u) && Array.isArray(l)) {
          if (u.length !== l.length) return !1;
          const a = [...u].sort(),
            f = [...l].sort();
          return a.every((_, w) => f[w] === _);
        }
        return u === l;
      }
      function Je(u) {
        return Array.prototype.concat.apply([], u);
      }
      function ut(u) {
        return u.length > 0 ? u[u.length - 1] : null;
      }
      function Ue(u, l) {
        for (const a in u) u.hasOwnProperty(a) && l(u[a], a);
      }
      function Ot(u) {
        return (0, C.CqO)(u)
          ? u
          : (0, C.QGY)(u)
          ? (0, B.D)(Promise.resolve(u))
          : (0, j.of)(u);
      }
      const Ct = {
          exact: function en(u, l, a) {
            if (
              !ht(u.segments, l.segments) ||
              !N(u.segments, l.segments, a) ||
              u.numberOfChildren !== l.numberOfChildren
            )
              return !1;
            for (const f in l.children)
              if (!u.children[f] || !en(u.children[f], l.children[f], a))
                return !1;
            return !0;
          },
          subset: at,
        },
        Jt = {
          exact: function Xt(u, l) {
            return P(u, l);
          },
          subset: function je(u, l) {
            return (
              Object.keys(l).length <= Object.keys(u).length &&
              Object.keys(l).every(a => Z(u[a], l[a]))
            );
          },
          ignored: () => !0,
        };
      function Zt(u, l, a) {
        return (
          Ct[a.paths](u.root, l.root, a.matrixParams) &&
          Jt[a.queryParams](u.queryParams, l.queryParams) &&
          !('exact' === a.fragment && u.fragment !== l.fragment)
        );
      }
      function at(u, l, a) {
        return z(u, l, l.segments, a);
      }
      function z(u, l, a, f) {
        if (u.segments.length > a.length) {
          const _ = u.segments.slice(0, a.length);
          return !(!ht(_, a) || l.hasChildren() || !N(_, a, f));
        }
        if (u.segments.length === a.length) {
          if (!ht(u.segments, a) || !N(u.segments, a, f)) return !1;
          for (const _ in l.children)
            if (!u.children[_] || !at(u.children[_], l.children[_], f))
              return !1;
          return !0;
        }
        {
          const _ = a.slice(0, u.segments.length),
            w = a.slice(u.segments.length);
          return (
            !!(ht(u.segments, _) && N(u.segments, _, f) && u.children[Qe]) &&
            z(u.children[Qe], l, w, f)
          );
        }
      }
      function N(u, l, a) {
        return l.every((f, _) => Jt[a](u[_].parameters, f.parameters));
      }
      class T {
        constructor(l, a, f) {
          (this.root = l), (this.queryParams = a), (this.fragment = f);
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = mt(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return Nn.serialize(this);
        }
      }
      class k {
        constructor(l, a) {
          (this.segments = l),
            (this.children = a),
            (this.parent = null),
            Ue(a, (f, _) => (f.parent = this));
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
            this._parameterMap || (this._parameterMap = mt(this.parameters)),
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
      class ot {}
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
                    ? f.map(_ => `${Hn(a)}=${Hn(_)}`).join('&')
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
          const a = u.children[Qe] ? En(u.children[Qe], !1) : '',
            f = [];
          return (
            Ue(u.children, (_, w) => {
              w !== Qe && f.push(`${w}:${En(_, !1)}`);
            }),
            f.length > 0 ? `${a}(${f.join('//')})` : a
          );
        }
        {
          const a = (function Ut(u, l) {
            let a = [];
            return (
              Ue(u.children, (f, _) => {
                _ === Qe && (a = a.concat(l(f, _)));
              }),
              Ue(u.children, (f, _) => {
                _ !== Qe && (a = a.concat(l(f, _)));
              }),
              a
            );
          })(u, (f, _) =>
            _ === Qe ? [En(u.children[Qe], !1)] : [`${_}:${En(f, !1)}`]
          );
          return 1 === Object.keys(u.children).length && null != u.children[Qe]
            ? `${jn(u)}/${a[0]}`
            : `${jn(u)}/(${a.join('//')})`;
        }
      }
      function Qt(u) {
        return encodeURIComponent(u)
          .replace(/%40/g, '@')
          .replace(/%3A/gi, ':')
          .replace(/%24/g, '$')
          .replace(/%2C/gi, ',');
      }
      function Hn(u) {
        return Qt(u).replace(/%3B/gi, ';');
      }
      function pn(u) {
        return Qt(u)
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
        return `${pn(u.path)}${(function Zr(u) {
          return Object.keys(u)
            .map(l => `;${pn(l)}=${pn(u[l])}`)
            .join('');
        })(u.parameters)}`;
      }
      const Po = /^[^\/()?;=#]+/;
      function $n(u) {
        const l = u.match(Po);
        return l ? l[0] : '';
      }
      const Yn = /^[^=?&#]+/,
        qn = /^[^&#]+/;
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
              ? new k([], {})
              : new k([], this.parseChildren())
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
              (f[Qe] = new k(l, a)),
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
            const _ = $n(this.remaining);
            _ && ((f = _), this.capture(f));
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
            const S = (function fn(u) {
              const l = u.match(qn);
              return l ? l[0] : '';
            })(this.remaining);
            S && ((f = S), this.capture(f));
          }
          const _ = Go(a),
            w = Go(f);
          if (l.hasOwnProperty(_)) {
            let S = l[_];
            Array.isArray(S) || ((S = [S]), (l[_] = S)), S.push(w);
          } else l[_] = w;
        }
        parseParens(l) {
          const a = {};
          for (
            this.capture('(');
            !this.consumeOptional(')') && this.remaining.length > 0;

          ) {
            const f = $n(this.remaining),
              _ = this.remaining[f.length];
            if ('/' !== _ && ')' !== _ && ';' !== _)
              throw new Error(`Cannot parse url '${this.url}'`);
            let w;
            f.indexOf(':') > -1
              ? ((w = f.slice(0, f.indexOf(':'))),
                this.capture(w),
                this.capture(':'))
              : l && (w = Qe);
            const S = this.parseChildren();
            (a[w] = 1 === Object.keys(S).length ? S[Qe] : new k([], S)),
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
      class tn {
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
          const a = hn(l, this._root);
          return a ? a.children.map(f => f.value) : [];
        }
        firstChild(l) {
          const a = hn(l, this._root);
          return a && a.children.length > 0 ? a.children[0].value : null;
        }
        siblings(l) {
          const a = zn(l, this._root);
          return a.length < 2
            ? []
            : a[a.length - 2].children.map(_ => _.value).filter(_ => _ !== l);
        }
        pathFromRoot(l) {
          return zn(l, this._root).map(a => a.value);
        }
      }
      function hn(u, l) {
        if (u === l.value) return l;
        for (const a of l.children) {
          const f = hn(u, a);
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
      class nn {
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
      class Dn extends tn {
        constructor(l, a) {
          super(l), (this.snapshot = a), lr(this, l);
        }
        toString() {
          return this.snapshot.toString();
        }
      }
      function sr(u, l) {
        const a = (function Wr(u, l) {
            const S = new ar([], {}, {}, '', {}, Qe, l, null, u.root, -1, {});
            return new Mn('', new nn(S, []));
          })(u, l),
          f = new Q([new xe('', {})]),
          _ = new Q({}),
          w = new Q({}),
          S = new Q({}),
          F = new Q(''),
          re = new ro(f, _, S, F, w, Qe, l, a.root);
        return (re.snapshot = a.root), new Dn(new nn(re, []), a);
      }
      class ro {
        constructor(l, a, f, _, w, S, F, re) {
          (this.url = l),
            (this.params = a),
            (this.queryParams = f),
            (this.fragment = _),
            (this.data = w),
            (this.outlet = S),
            (this.component = F),
            (this._futureSnapshot = re);
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
              (this._paramMap = this.params.pipe((0, ce.U)(l => mt(l)))),
            this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap ||
              (this._queryParamMap = this.queryParams.pipe(
                (0, ce.U)(l => mt(l))
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
            const _ = a[f],
              w = a[f - 1];
            if (_.routeConfig && '' === _.routeConfig.path) f--;
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
        constructor(l, a, f, _, w, S, F, re, Se, We, Ye, zt) {
          (this.url = l),
            (this.params = a),
            (this.queryParams = f),
            (this.fragment = _),
            (this.data = w),
            (this.outlet = S),
            (this.component = F),
            (this.routeConfig = re),
            (this._urlSegment = Se),
            (this._lastPathIndex = We),
            (this._correctedLastPathIndex = zt ?? We),
            (this._resolve = Ye);
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
            this._paramMap || (this._paramMap = mt(this.params)), this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = mt(this.queryParams)),
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
      class Mn extends tn {
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
            P(l.queryParams, a.queryParams) ||
              u.queryParams.next(a.queryParams),
            l.fragment !== a.fragment && u.fragment.next(a.fragment),
            P(l.params, a.params) || u.params.next(a.params),
            (function Ce(u, l) {
              if (u.length !== l.length) return !1;
              for (let a = 0; a < u.length; ++a) if (!P(u[a], l[a])) return !1;
              return !0;
            })(l.url, a.url) || u.url.next(a.url),
            P(l.data, a.data) || u.data.next(a.data);
        } else
          (u.snapshot = u._futureSnapshot), u.data.next(u._futureSnapshot.data);
      }
      function Zo(u, l) {
        const a =
          P(u.params, l.params) &&
          (function $e(u, l) {
            return (
              ht(u, l) && u.every((a, f) => P(a.parameters, l[f].parameters))
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
          const _ = (function qr(u, l, a) {
            return l.children.map(f => {
              for (const _ of a.children)
                if (u.shouldReuseRoute(f.value, _.value.snapshot))
                  return ho(u, f, _);
              return ho(u, f);
            });
          })(u, l, a);
          return new nn(f, _);
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
                new Q(u.url),
                new Q(u.params),
                new Q(u.queryParams),
                new Q(u.fragment),
                new Q(u.data),
                u.outlet,
                u.component,
                u
              );
            })(l.value),
            _ = l.children.map(w => ho(u, w));
          return new nn(f, _);
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
      function Io(u, l, a, f, _) {
        let w = {};
        if (
          (f &&
            Ue(f, (F, re) => {
              w[re] = Array.isArray(F) ? F.map(Se => `${Se}`) : `${F}`;
            }),
          u === l)
        )
          return new T(a, w, _);
        const S = mo(u, l, a);
        return new T(S, w, _);
      }
      function mo(u, l, a) {
        const f = {};
        return (
          Ue(u.children, (_, w) => {
            f[w] = _ === l ? a : mo(_, l, a);
          }),
          new k(u.segments, f)
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
          const _ = f.find(go);
          if (_ && _ !== ut(f))
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
          (u || (u = new k([], {})), 0 === u.segments.length && u.hasChildren())
        )
          return So(u, l, a);
        const f = (function bo(u, l, a) {
            let f = 0,
              _ = l;
            const w = { match: !1, pathIndex: 0, commandIndex: 0 };
            for (; _ < u.segments.length; ) {
              if (f >= a.length) return w;
              const S = u.segments[_],
                F = a[f];
              if (go(F)) break;
              const re = `${F}`,
                Se = f < a.length - 1 ? a[f + 1] : null;
              if (_ > 0 && void 0 === re) break;
              if (re && Se && 'object' == typeof Se && void 0 === Se.outlets) {
                if (!Fo(re, Se, S)) return w;
                f += 2;
              } else {
                if (!Fo(re, {}, S)) return w;
                f++;
              }
              _++;
            }
            return { match: !0, pathIndex: _, commandIndex: f };
          })(u, l, a),
          _ = a.slice(f.commandIndex);
        if (f.match && f.pathIndex < u.segments.length) {
          const w = new k(u.segments.slice(0, f.pathIndex), {});
          return (
            (w.children[Qe] = new k(u.segments.slice(f.pathIndex), u.children)),
            So(w, 0, _)
          );
        }
        return f.match && 0 === _.length
          ? new k(u.segments, {})
          : f.match && !u.hasChildren()
          ? Jn(u, l, a)
          : f.match
          ? So(u, 0, _)
          : Jn(u, l, a);
      }
      function So(u, l, a) {
        if (0 === a.length) return new k(u.segments, {});
        {
          const f = (function qo(u) {
              return go(u[0]) ? u[0].outlets : { [Qe]: u };
            })(a),
            _ = {};
          return (
            Ue(f, (w, S) => {
              'string' == typeof w && (w = [w]),
                null !== w && (_[S] = xo(u.children[S], l, w));
            }),
            Ue(u.children, (w, S) => {
              void 0 === f[S] && (_[S] = w);
            }),
            new k(u.segments, _)
          );
        }
      }
      function Jn(u, l, a) {
        const f = u.segments.slice(0, l);
        let _ = 0;
        for (; _ < a.length; ) {
          const w = a[_];
          if (go(w)) {
            const re = dr(w.outlets);
            return new k(f, re);
          }
          if (0 === _ && Wo(a[0])) {
            f.push(new xe(u.segments[l].path, Ko(a[0]))), _++;
            continue;
          }
          const S = go(w) ? w.outlets[Qe] : `${w}`,
            F = _ < a.length - 1 ? a[_ + 1] : null;
          S && F && Wo(F)
            ? (f.push(new xe(S, Ko(F))), (_ += 2))
            : (f.push(new xe(S, {})), _++);
        }
        return new k(f, {});
      }
      function dr(u) {
        const l = {};
        return (
          Ue(u, (a, f) => {
            'string' == typeof a && (a = [a]),
              null !== a && (l[f] = Jn(new k([], {}), 0, a));
          }),
          l
        );
      }
      function Ko(u) {
        const l = {};
        return Ue(u, (a, f) => (l[f] = `${a}`)), l;
      }
      function Fo(u, l, a) {
        return u == a.path && P(l, a.parameters);
      }
      class Jo {
        constructor() {
          (this.outlet = null),
            (this.route = null),
            (this.resolver = null),
            (this.injector = null),
            (this.children = new un()),
            (this.attachRef = null);
        }
      }
      class un {
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
          constructor(a, f, _, w, S) {
            (this.parentContexts = a),
              (this.location = f),
              (this.changeDetector = w),
              (this.environmentInjector = S),
              (this.activated = null),
              (this._activatedRoute = null),
              (this.activateEvents = new C.vpe()),
              (this.deactivateEvents = new C.vpe()),
              (this.attachEvents = new C.vpe()),
              (this.detachEvents = new C.vpe()),
              (this.name = _ || Qe),
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
            const _ = this.location,
              S = a._futureSnapshot.component,
              F = this.parentContexts.getOrCreateContext(this.name).children,
              re = new wr(a, F, _.injector);
            if (
              f &&
              (function pr(u) {
                return !!u.resolveComponentFactory;
              })(f)
            ) {
              const Se = f.resolveComponentFactory(S);
              this.activated = _.createComponent(Se, _.length, re);
            } else
              this.activated = _.createComponent(S, {
                index: _.length,
                injector: re,
                environmentInjector: f ?? this.environmentInjector,
              });
            this.changeDetector.markForCheck(),
              this.activateEvents.emit(this.activated.instance);
          }
        }
        return (
          (u.ɵfac = function (a) {
            return new (a || u)(
              C.Y36(un),
              C.Y36(C.s_b),
              C.$8M('name'),
              C.Y36(C.sBO),
              C.Y36(C.lqb)
            );
          }),
          (u.ɵdir = C.lG2({
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
            : l === un
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
          (u.ɵcmp = C.Xpm({
            type: u,
            selectors: [['ng-component']],
            decls: 1,
            vars: 0,
            template: function (a, f) {
              1 & a && C._UZ(0, 'router-outlet');
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
            (u._injector = (0, C.MMx)(u.providers, l, `Route: ${u.path}`)),
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
            a.outlet !== Qe &&
            (a.component = fr),
          a
        );
      }
      function M(u) {
        return u.outlet || Qe;
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
      class ae {
        constructor(l, a, f, _) {
          (this.routeReuseStrategy = l),
            (this.futureState = a),
            (this.currState = f),
            (this.forwardEvent = _);
        }
        activate(l) {
          const a = this.futureState._root,
            f = this.currState ? this.currState._root : null;
          this.deactivateChildRoutes(a, f, l),
            Ao(this.futureState.root),
            this.activateChildRoutes(a, f, l);
        }
        deactivateChildRoutes(l, a, f) {
          const _ = Ln(a);
          l.children.forEach(w => {
            const S = w.value.outlet;
            this.deactivateRoutes(w, _[S], f), delete _[S];
          }),
            Ue(_, (w, S) => {
              this.deactivateRouteAndItsChildren(w, f);
            });
        }
        deactivateRoutes(l, a, f) {
          const _ = l.value,
            w = a ? a.value : null;
          if (_ === w)
            if (_.component) {
              const S = f.getContext(_.outlet);
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
            _ = f && l.value.component ? f.children : a,
            w = Ln(l);
          for (const S of Object.keys(w))
            this.deactivateRouteAndItsChildren(w[S], _);
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
            _ = f && l.value.component ? f.children : a,
            w = Ln(l);
          for (const S of Object.keys(w))
            this.deactivateRouteAndItsChildren(w[S], _);
          f &&
            f.outlet &&
            (f.outlet.deactivate(),
            f.children.onOutletDeactivated(),
            (f.attachRef = null),
            (f.resolver = null),
            (f.route = null));
        }
        activateChildRoutes(l, a, f) {
          const _ = Ln(a);
          l.children.forEach(w => {
            this.activateRoutes(w, _[w.value.outlet], f),
              this.forwardEvent(new wt(w.value.snapshot));
          }),
            l.children.length && this.forwardEvent(new Re(l.value.snapshot));
        }
        activateRoutes(l, a, f) {
          const _ = l.value,
            w = a ? a.value : null;
          if ((Ao(_), _ === w))
            if (_.component) {
              const S = f.getOrCreateContext(_.outlet);
              this.activateChildRoutes(l, a, S.children);
            } else this.activateChildRoutes(l, a, f);
          else if (_.component) {
            const S = f.getOrCreateContext(_.outlet);
            if (this.routeReuseStrategy.shouldAttach(_.snapshot)) {
              const F = this.routeReuseStrategy.retrieve(_.snapshot);
              this.routeReuseStrategy.store(_.snapshot, null),
                S.children.onOutletReAttached(F.contexts),
                (S.attachRef = F.componentRef),
                (S.route = F.route.value),
                S.outlet && S.outlet.attach(F.componentRef, F.route.value),
                Ao(F.route.value),
                this.activateChildRoutes(l, null, S.children);
            } else {
              const F = E(_.snapshot),
                re = F?.get(C._Vd) ?? null;
              (S.attachRef = null),
                (S.route = _),
                (S.resolver = re),
                (S.injector = F),
                S.outlet && S.outlet.activateWith(_, S.injector),
                this.activateChildRoutes(l, null, S.children);
            }
          } else this.activateChildRoutes(l, null, f);
        }
      }
      function _e(u) {
        return 'function' == typeof u;
      }
      function Pt(u) {
        return u instanceof T;
      }
      const At = Symbol('INITIAL_VALUE');
      function qe() {
        return (0, ft.w)(u =>
          Ee(
            u.map(l =>
              l.pipe(
                (0, qt.q)(1),
                (function se(...u) {
                  const l = (0, ne.yG)(u);
                  return (0, Pe.e)((a, f) => {
                    (l ? Le(u, a, l) : Le(u, a)).subscribe(f);
                  });
                })(At)
              )
            )
          ).pipe(
            it((l, a) => {
              let f = !1;
              return a.reduce(
                (_, w, S) =>
                  _ !== At
                    ? _
                    : (w === At && (f = !0),
                      f || (!1 !== w && S !== a.length - 1 && !Pt(w)) ? _ : w),
                l
              );
            }, At),
            (0, _t.h)(l => l !== At),
            (0, ce.U)(l => (Pt(l) ? l : !0 === l)),
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
        const _ = (l.matcher || R)(a, u, l);
        if (!_) return { ...so };
        const w = {};
        Ue(_.posParams, (F, re) => {
          w[re] = F.path;
        });
        const S =
          _.consumed.length > 0
            ? { ...w, ..._.consumed[_.consumed.length - 1].parameters }
            : w;
        return {
          matched: !0,
          consumedSegments: _.consumed,
          remainingSegments: a.slice(_.consumed.length),
          parameters: S,
          positionalParamSegments: _.posParams ?? {},
        };
      }
      function Wn(u, l, a, f, _ = 'corrected') {
        if (
          a.length > 0 &&
          (function No(u, l, a) {
            return a.some(f => Ar(u, l, f) && M(f) !== Qe);
          })(u, a, f)
        ) {
          const S = new k(
            l,
            (function gr(u, l, a, f) {
              const _ = {};
              (_[Qe] = f),
                (f._sourceSegment = u),
                (f._segmentIndexShift = l.length);
              for (const w of a)
                if ('' === w.path && M(w) !== Qe) {
                  const S = new k([], {});
                  (S._sourceSegment = u),
                    (S._segmentIndexShift = l.length),
                    (_[M(w)] = S);
                }
              return _;
            })(u, l, f, new k(a, u.children))
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
          const S = new k(
            u.segments,
            (function co(u, l, a, f, _, w) {
              const S = {};
              for (const F of f)
                if (Ar(u, a, F) && !_[M(F)]) {
                  const re = new k([], {});
                  (re._sourceSegment = u),
                    (re._segmentIndexShift =
                      'legacy' === w ? u.segments.length : l.length),
                    (S[M(F)] = re);
                }
              return { ..._, ...S };
            })(u, l, a, f, u.children, _)
          );
          return (
            (S._sourceSegment = u),
            (S._segmentIndexShift = l.length),
            { segmentGroup: S, slicedSegments: a }
          );
        }
        const w = new k(u.segments, u.children);
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
      function De(u, l, a, f) {
        return (
          !!(M(u) === f || (f !== Qe && Ar(l, a, u))) &&
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
      function Wt(u) {
        return ie(new mr(u));
      }
      function ti(u) {
        return ie(new ei(u));
      }
      class O {
        constructor(l, a, f, _, w) {
          (this.injector = l),
            (this.configLoader = a),
            (this.urlSerializer = f),
            (this.urlTree = _),
            (this.config = w),
            (this.allowRedirects = !0);
        }
        apply() {
          const l = Wn(this.urlTree.root, [], [], this.config).segmentGroup,
            a = new k(l.segments, l.children);
          return this.expandSegmentGroup(this.injector, this.config, a, Qe)
            .pipe(
              (0, ce.U)(w =>
                this.createUrlTree(
                  tt(w),
                  this.urlTree.queryParams,
                  this.urlTree.fragment
                )
              )
            )
            .pipe(
              gt(w => {
                if (w instanceof ei)
                  return (this.allowRedirects = !1), this.match(w.urlTree);
                throw w instanceof mr ? this.noMatchError(w) : w;
              })
            );
        }
        match(l) {
          return this.expandSegmentGroup(this.injector, this.config, l.root, Qe)
            .pipe(
              (0, ce.U)(_ =>
                this.createUrlTree(tt(_), l.queryParams, l.fragment)
              )
            )
            .pipe(
              gt(_ => {
                throw _ instanceof mr ? this.noMatchError(_) : _;
              })
            );
        }
        noMatchError(l) {
          return new Error(
            `Cannot match any routes. URL Segment: '${l.segmentGroup}'`
          );
        }
        createUrlTree(l, a, f) {
          const _ = l.segments.length > 0 ? new k([], { [Qe]: l }) : l;
          return new T(_, a, f);
        }
        expandSegmentGroup(l, a, f, _) {
          return 0 === f.segments.length && f.hasChildren()
            ? this.expandChildren(l, a, f).pipe((0, ce.U)(w => new k([], w)))
            : this.expandSegment(l, f, a, f.segments, _, !0);
        }
        expandChildren(l, a, f) {
          const _ = [];
          for (const w of Object.keys(f.children))
            'primary' === w ? _.unshift(w) : _.push(w);
          return (0, B.D)(_).pipe(
            (0, xt.b)(w => {
              const S = f.children[w],
                F = x(a, w);
              return this.expandSegmentGroup(l, F, S, w).pipe(
                (0, ce.U)(re => ({ segment: re, outlet: w }))
              );
            }),
            it((w, S) => ((w[S.outlet] = S.segment), w), {}),
            (function Mt(u, l) {
              const a = arguments.length >= 2;
              return f =>
                f.pipe(
                  u ? (0, _t.h)((_, w) => u(_, w, f)) : Y.y,
                  Be(1),
                  a ? Tt(l) : jt(() => new Ne())
                );
            })()
          );
        }
        expandSegment(l, a, f, _, w, S) {
          return (0, B.D)(f).pipe(
            (0, xt.b)(F =>
              this.expandSegmentAgainstRoute(l, a, f, F, _, w, S).pipe(
                gt(Se => {
                  if (Se instanceof mr) return (0, j.of)(null);
                  throw Se;
                })
              )
            ),
            Oe(F => !!F),
            gt((F, re) => {
              if (F instanceof Ne || 'EmptyError' === F.name)
                return Et(a, _, w) ? (0, j.of)(new k([], {})) : Wt(a);
              throw F;
            })
          );
        }
        expandSegmentAgainstRoute(l, a, f, _, w, S, F) {
          return De(_, a, w, S)
            ? void 0 === _.redirectTo
              ? this.matchSegmentAgainstRoute(l, a, _, w, S)
              : F && this.allowRedirects
              ? this.expandSegmentAgainstRouteUsingRedirect(l, a, f, _, w, S)
              : Wt(a)
            : Wt(a);
        }
        expandSegmentAgainstRouteUsingRedirect(l, a, f, _, w, S) {
          return '**' === _.path
            ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(l, f, _, S)
            : this.expandRegularSegmentAgainstRouteUsingRedirect(
                l,
                a,
                f,
                _,
                w,
                S
              );
        }
        expandWildCardWithParamsAgainstRouteUsingRedirect(l, a, f, _) {
          const w = this.applyRedirectCommands([], f.redirectTo, {});
          return f.redirectTo.startsWith('/')
            ? ti(w)
            : this.lineralizeSegments(f, w).pipe(
                (0, lt.z)(S => {
                  const F = new k(S, {});
                  return this.expandSegment(l, F, a, S, _, !1);
                })
              );
        }
        expandRegularSegmentAgainstRouteUsingRedirect(l, a, f, _, w, S) {
          const {
            matched: F,
            consumedSegments: re,
            remainingSegments: Se,
            positionalParamSegments: We,
          } = Zn(a, _, w);
          if (!F) return Wt(a);
          const Ye = this.applyRedirectCommands(re, _.redirectTo, We);
          return _.redirectTo.startsWith('/')
            ? ti(Ye)
            : this.lineralizeSegments(_, Ye).pipe(
                (0, lt.z)(zt =>
                  this.expandSegment(l, a, f, zt.concat(Se), S, !1)
                )
              );
        }
        matchSegmentAgainstRoute(l, a, f, _, w) {
          if ('**' === f.path)
            return (
              (l = Er(f, l)),
              f.loadChildren
                ? (f._loadedRoutes
                    ? (0, j.of)({
                        routes: f._loadedRoutes,
                        injector: f._loadedInjector,
                      })
                    : this.configLoader.loadChildren(l, f)
                  ).pipe(
                    (0, ce.U)(
                      Ye => (
                        (f._loadedRoutes = Ye.routes),
                        (f._loadedInjector = Ye.injector),
                        new k(_, {})
                      )
                    )
                  )
                : (0, j.of)(new k(_, {}))
            );
          const {
            matched: S,
            consumedSegments: F,
            remainingSegments: re,
          } = Zn(a, f, _);
          return S
            ? ((l = Er(f, l)),
              this.getChildConfig(l, f, _).pipe(
                (0, lt.z)(We => {
                  const Ye = We.injector ?? l,
                    zt = We.routes,
                    { segmentGroup: sn, slicedSegments: uo } = Wn(a, F, re, zt),
                    di = new k(sn.segments, sn.children);
                  if (0 === uo.length && di.hasChildren())
                    return this.expandChildren(Ye, zt, di).pipe(
                      (0, ce.U)(Su => new k(F, Su))
                    );
                  if (0 === zt.length && 0 === uo.length)
                    return (0, j.of)(new k(F, {}));
                  const oc = M(f) === w;
                  return this.expandSegment(
                    Ye,
                    di,
                    zt,
                    uo,
                    oc ? Qe : w,
                    !0
                  ).pipe(
                    (0, ce.U)(Co => new k(F.concat(Co.segments), Co.children))
                  );
                })
              ))
            : Wt(a);
        }
        getChildConfig(l, a, f) {
          return a.children
            ? (0, j.of)({ routes: a.children, injector: l })
            : a.loadChildren
            ? void 0 !== a._loadedRoutes
              ? (0, j.of)({
                  routes: a._loadedRoutes,
                  injector: a._loadedInjector,
                })
              : this.runCanLoadGuards(l, a, f).pipe(
                  (0, lt.z)(_ =>
                    _
                      ? this.configLoader.loadChildren(l, a).pipe(
                          pe(w => {
                            (a._loadedRoutes = w.routes),
                              (a._loadedInjector = w.injector);
                          })
                        )
                      : (function g(u) {
                          return ie(
                            nt(
                              `Cannot load children because the guard of the route "path: '${u.path}'" returned false`
                            )
                          );
                        })(a)
                  )
                )
            : (0, j.of)({ routes: [], injector: l });
        }
        runCanLoadGuards(l, a, f) {
          const _ = a.canLoad;
          if (!_ || 0 === _.length) return (0, j.of)(!0);
          const w = _.map(S => {
            const F = l.get(S);
            let re;
            if (
              (function Rt(u) {
                return u && _e(u.canLoad);
              })(F)
            )
              re = F.canLoad(a, f);
            else {
              if (!_e(F)) throw new Error('Invalid CanLoad guard');
              re = F(a, f);
            }
            return Ot(re);
          });
          return (0, j.of)(w).pipe(
            qe(),
            pe(S => {
              if (!Pt(S)) return;
              const F = nt(
                `Redirecting to "${this.urlSerializer.serialize(S)}"`
              );
              throw ((F.url = S), F);
            }),
            (0, ce.U)(S => !0 === S)
          );
        }
        lineralizeSegments(l, a) {
          let f = [],
            _ = a.root;
          for (;;) {
            if (((f = f.concat(_.segments)), 0 === _.numberOfChildren))
              return (0, j.of)(f);
            if (_.numberOfChildren > 1 || !_.children[Qe])
              return ie(
                new Error(
                  `Only absolute redirects can have named outlets. redirectTo: '${l.redirectTo}'`
                )
              );
            _ = _.children[Qe];
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
        applyRedirectCreatreUrlTree(l, a, f, _) {
          const w = this.createSegmentGroup(l, a.root, f, _);
          return new T(
            w,
            this.createQueryParams(a.queryParams, this.urlTree.queryParams),
            a.fragment
          );
        }
        createQueryParams(l, a) {
          const f = {};
          return (
            Ue(l, (_, w) => {
              if ('string' == typeof _ && _.startsWith(':')) {
                const F = _.substring(1);
                f[w] = a[F];
              } else f[w] = _;
            }),
            f
          );
        }
        createSegmentGroup(l, a, f, _) {
          const w = this.createSegments(l, a.segments, f, _);
          let S = {};
          return (
            Ue(a.children, (F, re) => {
              S[re] = this.createSegmentGroup(l, F, f, _);
            }),
            new k(w, S)
          );
        }
        createSegments(l, a, f, _) {
          return a.map(w =>
            w.path.startsWith(':')
              ? this.findPosParam(l, w, _)
              : this.findOrReturn(w, f)
          );
        }
        findPosParam(l, a, f) {
          const _ = f[a.path.substring(1)];
          if (!_)
            throw new Error(
              `Cannot redirect to '${l}'. Cannot find '${a.path}'.`
            );
          return _;
        }
        findOrReturn(l, a) {
          let f = 0;
          for (const _ of a) {
            if (_.path === l.path) return a.splice(f), _;
            f++;
          }
          return l;
        }
      }
      function tt(u) {
        const l = {};
        for (const f of Object.keys(u.children)) {
          const w = tt(u.children[f]);
          (w.segments.length > 0 || w.hasChildren()) && (l[f] = w);
        }
        return (function ue(u) {
          if (1 === u.numberOfChildren && u.children[Qe]) {
            const l = u.children[Qe];
            return new k(u.segments.concat(l.segments), l.children);
          }
          return u;
        })(new k(u.segments, l));
      }
      class xn {
        constructor(l) {
          (this.path = l), (this.route = this.path[this.path.length - 1]);
        }
      }
      class $t {
        constructor(l, a) {
          (this.component = l), (this.route = a);
        }
      }
      function wn(u, l, a) {
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
        _ = { canDeactivateChecks: [], canActivateChecks: [] }
      ) {
        const w = Ln(l);
        return (
          u.children.forEach(S => {
            (function qc(
              u,
              l,
              a,
              f,
              _ = { canDeactivateChecks: [], canActivateChecks: [] }
            ) {
              const w = u.value,
                S = l ? l.value : null,
                F = a ? a.getContext(u.value.outlet) : null;
              if (S && w.routeConfig === S.routeConfig) {
                const re = (function ks(u, l, a) {
                  if ('function' == typeof a) return a(u, l);
                  switch (a) {
                    case 'pathParamsChange':
                      return !ht(u.url, l.url);
                    case 'pathParamsOrQueryParamsChange':
                      return (
                        !ht(u.url, l.url) || !P(u.queryParams, l.queryParams)
                      );
                    case 'always':
                      return !0;
                    case 'paramsOrQueryParamsChange':
                      return !Zo(u, l) || !P(u.queryParams, l.queryParams);
                    default:
                      return !Zo(u, l);
                  }
                })(S, w, w.routeConfig.runGuardsAndResolvers);
                re
                  ? _.canActivateChecks.push(new xn(f))
                  : ((w.data = S.data), (w._resolvedData = S._resolvedData)),
                  On(u, l, w.component ? (F ? F.children : null) : a, f, _),
                  re &&
                    F &&
                    F.outlet &&
                    F.outlet.isActivated &&
                    _.canDeactivateChecks.push(new $t(F.outlet.component, S));
              } else
                S && Ir(l, F, _),
                  _.canActivateChecks.push(new xn(f)),
                  On(u, null, w.component ? (F ? F.children : null) : a, f, _);
            })(S, w[S.value.outlet], a, f.concat([S.value]), _),
              delete w[S.value.outlet];
          }),
          Ue(w, (S, F) => Ir(S, a.getContext(F), _)),
          _
        );
      }
      function Ir(u, l, a) {
        const f = Ln(u),
          _ = u.value;
        Ue(f, (w, S) => {
          Ir(w, _.component ? (l ? l.children.getContext(S) : null) : l, a);
        }),
          a.canDeactivateChecks.push(
            new $t(
              _.component && l && l.outlet && l.outlet.isActivated
                ? l.outlet.component
                : null,
              _
            )
          );
      }
      class Us {}
      function Yi(u) {
        return new ee.y(l => l.error(u));
      }
      class oi {
        constructor(l, a, f, _, w, S) {
          (this.rootComponentType = l),
            (this.config = a),
            (this.urlTree = f),
            (this.url = _),
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
            a = this.processSegmentGroup(this.config, l, Qe);
          if (null === a) return null;
          const f = new ar(
              [],
              Object.freeze({}),
              Object.freeze({ ...this.urlTree.queryParams }),
              this.urlTree.fragment,
              {},
              Qe,
              this.rootComponentType,
              null,
              this.urlTree.root,
              -1,
              {}
            ),
            _ = new nn(f, a),
            w = new Mn(this.url, _);
          return this.inheritParamsAndData(w._root), w;
        }
        inheritParamsAndData(l) {
          const a = l.value,
            f = cr(a, this.paramsInheritanceStrategy);
          (a.params = Object.freeze(f.params)),
            (a.data = Object.freeze(f.data)),
            l.children.forEach(_ => this.inheritParamsAndData(_));
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
              re = this.processSegmentGroup(F, S, w);
            if (null === re) return null;
            f.push(...re);
          }
          const _ = _o(f);
          return (
            (function Qc(u) {
              u.sort((l, a) =>
                l.value.outlet === Qe
                  ? -1
                  : a.value.outlet === Qe
                  ? 1
                  : l.value.outlet.localeCompare(a.value.outlet)
              );
            })(_),
            _
          );
        }
        processSegment(l, a, f, _) {
          for (const w of l) {
            const S = this.processSegmentAgainstRoute(w, a, f, _);
            if (null !== S) return S;
          }
          return Et(a, f, _) ? [] : null;
        }
        processSegmentAgainstRoute(l, a, f, _) {
          if (l.redirectTo || !De(l, a, f, _)) return null;
          let w,
            S = [],
            F = [];
          if ('**' === l.path) {
            const sn = f.length > 0 ? ut(f).parameters : {},
              uo = js(a) + f.length;
            w = new ar(
              f,
              sn,
              Object.freeze({ ...this.urlTree.queryParams }),
              this.urlTree.fragment,
              Hs(l),
              M(l),
              l.component ?? l._loadedComponent ?? null,
              l,
              qi(a),
              uo,
              $s(l),
              uo
            );
          } else {
            const sn = Zn(a, l, f);
            if (!sn.matched) return null;
            (S = sn.consumedSegments), (F = sn.remainingSegments);
            const uo = js(a) + S.length;
            w = new ar(
              S,
              sn.parameters,
              Object.freeze({ ...this.urlTree.queryParams }),
              this.urlTree.fragment,
              Hs(l),
              M(l),
              l.component ?? l._loadedComponent ?? null,
              l,
              qi(a),
              uo,
              $s(l),
              uo
            );
          }
          const re = (function Xc(u) {
              return u.children
                ? u.children
                : u.loadChildren
                ? u._loadedRoutes
                : [];
            })(l),
            { segmentGroup: Se, slicedSegments: We } = Wn(
              a,
              S,
              F,
              re.filter(sn => void 0 === sn.redirectTo),
              this.relativeLinkResolution
            );
          if (0 === We.length && Se.hasChildren()) {
            const sn = this.processChildren(re, Se);
            return null === sn ? null : [new nn(w, sn)];
          }
          if (0 === re.length && 0 === We.length) return [new nn(w, [])];
          const Ye = M(l) === _,
            zt = this.processSegment(re, Se, We, Ye ? Qe : _);
          return null === zt ? null : [new nn(w, zt)];
        }
      }
      function Pn(u) {
        const l = u.value.routeConfig;
        return l && '' === l.path && void 0 === l.redirectTo;
      }
      function _o(u) {
        const l = [],
          a = new Set();
        for (const f of u) {
          if (!Pn(f)) {
            l.push(f);
            continue;
          }
          const _ = l.find(w => f.value.routeConfig === w.value.routeConfig);
          void 0 !== _ ? (_.children.push(...f.children), a.add(_)) : l.push(f);
        }
        for (const f of a) {
          const _ = _o(f.children);
          l.push(new nn(f.value, _));
        }
        return l.filter(f => !a.has(f));
      }
      function qi(u) {
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
      function yo(u) {
        return 'string' == typeof u.title || null === u.title;
      }
      function Xo(u) {
        return (0, ft.w)(l => {
          const a = u(l);
          return a ? (0, B.D)(a).pipe((0, ce.U)(() => l)) : (0, j.of)(l);
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
      const Qi = new C.OlP('ROUTES');
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
            if (a._loadedComponent) return (0, j.of)(a._loadedComponent);
            this.onLoadStartListener && this.onLoadStartListener(a);
            const f = Ot(a.loadComponent()).pipe(
                pe(w => {
                  this.onLoadEndListener && this.onLoadEndListener(a),
                    (a._loadedComponent = w);
                }),
                rt(() => {
                  this.componentLoaders.delete(a);
                })
              ),
              _ = new J(f, () => new H.x()).pipe(G());
            return this.componentLoaders.set(a, _), _;
          }
          loadChildren(a, f) {
            if (this.childrenLoaders.get(f)) return this.childrenLoaders.get(f);
            if (f._loadedRoutes)
              return (0, j.of)({
                routes: f._loadedRoutes,
                injector: f._loadedInjector,
              });
            this.onLoadStartListener && this.onLoadStartListener(f);
            const w = this.loadModuleFactoryOrRoutes(f.loadChildren).pipe(
                (0, ce.U)(F => {
                  this.onLoadEndListener && this.onLoadEndListener(f);
                  let re,
                    Se,
                    We = !1;
                  Array.isArray(F)
                    ? (Se = F)
                    : ((re = F.create(a).injector),
                      (Se = Je(re.get(Qi, [], C.XFs.Self | C.XFs.Optional))));
                  return { routes: Se.map(m), injector: re };
                }),
                rt(() => {
                  this.childrenLoaders.delete(f);
                })
              ),
              S = new J(w, () => new H.x()).pipe(G());
            return this.childrenLoaders.set(f, S), S;
          }
          loadModuleFactoryOrRoutes(a) {
            return Ot(a()).pipe(
              (0, lt.z)(f =>
                f instanceof C.YKP || Array.isArray(f)
                  ? (0, j.of)(f)
                  : (0, B.D)(this.compiler.compileModuleAsync(f))
              )
            );
          }
        }
        return (
          (u.ɵfac = function (a) {
            return new (a || u)(C.LFG(C.zs3), C.LFG(C.Sil));
          }),
          (u.ɵprov = C.Yz7({ token: u, factory: u.ɵfac })),
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
          constructor(a, f, _, w, S, F, re) {
            (this.rootComponentType = a),
              (this.urlSerializer = f),
              (this.rootContexts = _),
              (this.location = w),
              (this.config = re),
              (this.lastSuccessfulNavigation = null),
              (this.currentNavigation = null),
              (this.disposed = !1),
              (this.navigationId = 0),
              (this.currentPageId = 0),
              (this.isNgZoneEnabled = !1),
              (this.events = new H.x()),
              (this.errorHandler = Gs),
              (this.malformedUriErrorHandler = es),
              (this.navigated = !1),
              (this.lastSuccessfulId = -1),
              (this.afterPreactivation = () => (0, j.of)(void 0)),
              (this.urlHandlingStrategy = new Au()),
              (this.routeReuseStrategy = new Tr()),
              (this.onSameUrlNavigation = 'ignore'),
              (this.paramsInheritanceStrategy = 'emptyOnly'),
              (this.urlUpdateStrategy = 'deferred'),
              (this.relativeLinkResolution = 'corrected'),
              (this.canceledNavigationResolution = 'replace'),
              (this.configLoader = S.get(Xi)),
              (this.configLoader.onLoadEndListener = zt =>
                this.triggerEvent(new me(zt))),
              (this.configLoader.onLoadStartListener = zt =>
                this.triggerEvent(new $(zt))),
              (this.ngModule = S.get(C.h0i)),
              (this.console = S.get(C.c2e));
            const Ye = S.get(C.R0b);
            (this.isNgZoneEnabled =
              Ye instanceof C.R0b && C.R0b.isInAngularZone()),
              this.resetConfig(re),
              (this.currentUrlTree = (function bn() {
                return new T(new k([], {}), {}, null);
              })()),
              (this.rawUrlTree = this.currentUrlTree),
              (this.browserUrlTree = this.currentUrlTree),
              (this.routerState = sr(
                this.currentUrlTree,
                this.rootComponentType
              )),
              (this.transitions = new Q({
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
              (0, _t.h)(_ => 0 !== _.id),
              (0, ce.U)(_ => ({
                ..._,
                extractedUrl: this.urlHandlingStrategy.extract(_.rawUrl),
              })),
              (0, ft.w)(_ => {
                let w = !1,
                  S = !1;
                return (0, j.of)(_).pipe(
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
                  (0, ft.w)(F => {
                    const re = this.browserUrlTree.toString(),
                      Se =
                        !this.navigated ||
                        F.extractedUrl.toString() !== re ||
                        re !== this.currentUrlTree.toString();
                    if (
                      ('reload' === this.onSameUrlNavigation || Se) &&
                      this.urlHandlingStrategy.shouldProcessUrl(F.rawUrl)
                    )
                      return (
                        Ws(F.source) && (this.browserUrlTree = F.extractedUrl),
                        (0, j.of)(F).pipe(
                          (0, ft.w)(Ye => {
                            const zt = this.transitions.getValue();
                            return (
                              f.next(
                                new et(
                                  Ye.id,
                                  this.serializeUrl(Ye.extractedUrl),
                                  Ye.source,
                                  Ye.restoredState
                                )
                              ),
                              zt !== this.transitions.getValue()
                                ? le.E
                                : Promise.resolve(Ye)
                            );
                          }),
                          (function Yt(u, l, a, f) {
                            return (0, ft.w)(_ =>
                              (function h(u, l, a, f, _) {
                                return new O(u, l, a, f, _).apply();
                              })(u, l, a, _.extractedUrl, f).pipe(
                                (0, ce.U)(w => ({ ..._, urlAfterRedirects: w }))
                              )
                            );
                          })(
                            this.ngModule.injector,
                            this.configLoader,
                            this.urlSerializer,
                            this.config
                          ),
                          pe(Ye => {
                            this.currentNavigation = {
                              ...this.currentNavigation,
                              finalUrl: Ye.urlAfterRedirects,
                            };
                          }),
                          (function ea(u, l, a, f, _) {
                            return (0, lt.z)(w =>
                              (function Bs(
                                u,
                                l,
                                a,
                                f,
                                _ = 'emptyOnly',
                                w = 'legacy'
                              ) {
                                try {
                                  const S = new oi(
                                    u,
                                    l,
                                    a,
                                    f,
                                    _,
                                    w
                                  ).recognize();
                                  return null === S
                                    ? Yi(new Us())
                                    : (0, j.of)(S);
                                } catch (S) {
                                  return Yi(S);
                                }
                              })(
                                u,
                                l,
                                w.urlAfterRedirects,
                                a(w.urlAfterRedirects),
                                f,
                                _
                              ).pipe(
                                (0, ce.U)(S => ({ ...w, targetSnapshot: S }))
                              )
                            );
                          })(
                            this.rootComponentType,
                            this.config,
                            Ye => this.serializeUrl(Ye),
                            this.paramsInheritanceStrategy,
                            this.relativeLinkResolution
                          ),
                          pe(Ye => {
                            if ('eager' === this.urlUpdateStrategy) {
                              if (!Ye.extras.skipLocationChange) {
                                const sn = this.urlHandlingStrategy.merge(
                                  Ye.urlAfterRedirects,
                                  Ye.rawUrl
                                );
                                this.setBrowserUrl(sn, Ye);
                              }
                              this.browserUrlTree = Ye.urlAfterRedirects;
                            }
                            const zt = new Fn(
                              Ye.id,
                              this.serializeUrl(Ye.extractedUrl),
                              this.serializeUrl(Ye.urlAfterRedirects),
                              Ye.targetSnapshot
                            );
                            f.next(zt);
                          })
                        )
                      );
                    if (
                      Se &&
                      this.rawUrlTree &&
                      this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)
                    ) {
                      const {
                          id: zt,
                          extractedUrl: sn,
                          source: uo,
                          restoredState: di,
                          extras: oc,
                        } = F,
                        aa = new et(zt, this.serializeUrl(sn), uo, di);
                      f.next(aa);
                      const Co = sr(sn, this.rootComponentType).snapshot;
                      return (0, j.of)({
                        ...F,
                        targetSnapshot: Co,
                        urlAfterRedirects: sn,
                        extras: {
                          ...oc,
                          skipLocationChange: !1,
                          replaceUrl: !1,
                        },
                      });
                    }
                    return (this.rawUrlTree = F.rawUrl), F.resolve(null), le.E;
                  }),
                  pe(F => {
                    const re = new zo(
                      F.id,
                      this.serializeUrl(F.extractedUrl),
                      this.serializeUrl(F.urlAfterRedirects),
                      F.targetSnapshot
                    );
                    this.triggerEvent(re);
                  }),
                  (0, ce.U)(F => ({
                    ...F,
                    guards: wn(
                      F.targetSnapshot,
                      F.currentSnapshot,
                      this.rootContexts
                    ),
                  })),
                  (function Kc(u, l) {
                    return (0, lt.z)(a => {
                      const {
                        targetSnapshot: f,
                        currentSnapshot: _,
                        guards: {
                          canActivateChecks: w,
                          canDeactivateChecks: S,
                        },
                      } = a;
                      return 0 === S.length && 0 === w.length
                        ? (0, j.of)({ ...a, guardsResult: !0 })
                        : (function zi(u, l, a, f) {
                            return (0, B.D)(u).pipe(
                              (0, lt.z)(_ =>
                                (function ni(u, l, a, f, _) {
                                  const w =
                                    l && l.routeConfig
                                      ? l.routeConfig.canDeactivate
                                      : null;
                                  if (!w || 0 === w.length)
                                    return (0, j.of)(!0);
                                  const S = w.map(F => {
                                    const re = Vn(F, l, _);
                                    let Se;
                                    if (
                                      (function on(u) {
                                        return u && _e(u.canDeactivate);
                                      })(re)
                                    )
                                      Se = Ot(re.canDeactivate(u, l, a, f));
                                    else {
                                      if (!_e(re))
                                        throw new Error(
                                          'Invalid CanDeactivate guard'
                                        );
                                      Se = Ot(re(u, l, a, f));
                                    }
                                    return Se.pipe(Oe());
                                  });
                                  return (0, j.of)(S).pipe(qe());
                                })(_.component, _.route, a, l, f)
                              ),
                              Oe(_ => !0 !== _, !0)
                            );
                          })(S, f, _, u).pipe(
                            (0, lt.z)(F =>
                              F &&
                              (function Ge(u) {
                                return 'boolean' == typeof u;
                              })(F)
                                ? (function Gi(u, l, a, f) {
                                    return (0, B.D)(l).pipe(
                                      (0, xt.b)(_ =>
                                        Le(
                                          (function Zi(u, l) {
                                            return (
                                              null !== u && l && l(new W(u)),
                                              (0, j.of)(!0)
                                            );
                                          })(_.route.parent, f),
                                          (function Ls(u, l) {
                                            return (
                                              null !== u && l && l(new It(u)),
                                              (0, j.of)(!0)
                                            );
                                          })(_.route, f),
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
                                                  Ie(() => {
                                                    const F = S.guards.map(
                                                      re => {
                                                        const Se = Vn(
                                                          re,
                                                          S.node,
                                                          a
                                                        );
                                                        let We;
                                                        if (
                                                          (function bt(u) {
                                                            return (
                                                              u &&
                                                              _e(
                                                                u.canActivateChild
                                                              )
                                                            );
                                                          })(Se)
                                                        )
                                                          We = Ot(
                                                            Se.canActivateChild(
                                                              f,
                                                              u
                                                            )
                                                          );
                                                        else {
                                                          if (!_e(Se))
                                                            throw new Error(
                                                              'Invalid CanActivateChild guard'
                                                            );
                                                          We = Ot(Se(f, u));
                                                        }
                                                        return We.pipe(Oe());
                                                      }
                                                    );
                                                    return (0, j.of)(F).pipe(
                                                      qe()
                                                    );
                                                  })
                                                );
                                            return (0, j.of)(w).pipe(qe());
                                          })(u, _.path, a),
                                          (function Jc(u, l, a) {
                                            const f = l.routeConfig
                                              ? l.routeConfig.canActivate
                                              : null;
                                            if (!f || 0 === f.length)
                                              return (0, j.of)(!0);
                                            const _ = f.map(w =>
                                              Ie(() => {
                                                const S = Vn(w, l, a);
                                                let F;
                                                if (
                                                  (function Bt(u) {
                                                    return (
                                                      u && _e(u.canActivate)
                                                    );
                                                  })(S)
                                                )
                                                  F = Ot(S.canActivate(l, u));
                                                else {
                                                  if (!_e(S))
                                                    throw new Error(
                                                      'Invalid CanActivate guard'
                                                    );
                                                  F = Ot(S(l, u));
                                                }
                                                return F.pipe(Oe());
                                              })
                                            );
                                            return (0, j.of)(_).pipe(qe());
                                          })(u, _.route, a)
                                        )
                                      ),
                                      Oe(_ => !0 !== _, !0)
                                    );
                                  })(f, w, u, l)
                                : (0, j.of)(F)
                            ),
                            (0, ce.U)(F => ({ ...a, guardsResult: F }))
                          );
                    });
                  })(this.ngModule.injector, F => this.triggerEvent(F)),
                  pe(F => {
                    if (Pt(F.guardsResult)) {
                      const Se = nt(
                        `Redirecting to "${this.serializeUrl(F.guardsResult)}"`
                      );
                      throw ((Se.url = F.guardsResult), Se);
                    }
                    const re = new Cn(
                      F.id,
                      this.serializeUrl(F.extractedUrl),
                      this.serializeUrl(F.urlAfterRedirects),
                      F.targetSnapshot,
                      !!F.guardsResult
                    );
                    this.triggerEvent(re);
                  }),
                  (0, _t.h)(
                    F =>
                      !!F.guardsResult ||
                      (this.restoreHistory(F),
                      this.cancelNavigationTransition(F, ''),
                      !1)
                  ),
                  Xo(F => {
                    if (F.guards.canActivateChecks.length)
                      return (0, j.of)(F).pipe(
                        pe(re => {
                          const Se = new he(
                            re.id,
                            this.serializeUrl(re.extractedUrl),
                            this.serializeUrl(re.urlAfterRedirects),
                            re.targetSnapshot
                          );
                          this.triggerEvent(Se);
                        }),
                        (0, ft.w)(re => {
                          let Se = !1;
                          return (0, j.of)(re).pipe(
                            (function ri(u, l) {
                              return (0, lt.z)(a => {
                                const {
                                  targetSnapshot: f,
                                  guards: { canActivateChecks: _ },
                                } = a;
                                if (!_.length) return (0, j.of)(a);
                                let w = 0;
                                return (0, B.D)(_).pipe(
                                  (0, xt.b)(S =>
                                    (function ii(u, l, a, f) {
                                      const _ = u.routeConfig,
                                        w = u._resolve;
                                      return (
                                        void 0 !== _?.title &&
                                          !yo(_) &&
                                          (w[xr] = _.title),
                                        (function Ji(u, l, a, f) {
                                          const _ = (function zs(u) {
                                            return [
                                              ...Object.keys(u),
                                              ...Object.getOwnPropertySymbols(
                                                u
                                              ),
                                            ];
                                          })(u);
                                          if (0 === _.length)
                                            return (0, j.of)({});
                                          const w = {};
                                          return (0, B.D)(_).pipe(
                                            (0, lt.z)(S =>
                                              (function ta(u, l, a, f) {
                                                const _ = Vn(u, l, f);
                                                return Ot(
                                                  _.resolve
                                                    ? _.resolve(l, a)
                                                    : _(l, a)
                                                );
                                              })(u[S], l, a, f).pipe(
                                                Oe(),
                                                pe(F => {
                                                  w[S] = F;
                                                })
                                              )
                                            ),
                                            Be(1),
                                            (function He(u) {
                                              return (0, ce.U)(() => u);
                                            })(w),
                                            gt(S =>
                                              S instanceof Ne ? le.E : ie(S)
                                            )
                                          );
                                        })(w, u, l, f).pipe(
                                          (0, ce.U)(
                                            S => (
                                              (u._resolvedData = S),
                                              (u.data = cr(u, a).resolve),
                                              _ &&
                                                yo(_) &&
                                                (u.data[xr] = _.title),
                                              null
                                            )
                                          )
                                        )
                                      );
                                    })(S.route, f, u, l)
                                  ),
                                  pe(() => w++),
                                  Be(1),
                                  (0, lt.z)(S =>
                                    w === _.length ? (0, j.of)(a) : le.E
                                  )
                                );
                              });
                            })(
                              this.paramsInheritanceStrategy,
                              this.ngModule.injector
                            ),
                            pe({
                              next: () => (Se = !0),
                              complete: () => {
                                Se ||
                                  (this.restoreHistory(re),
                                  this.cancelNavigationTransition(
                                    re,
                                    "At least one route resolver didn't emit any value."
                                  ));
                              },
                            })
                          );
                        }),
                        pe(re => {
                          const Se = new U(
                            re.id,
                            this.serializeUrl(re.extractedUrl),
                            this.serializeUrl(re.urlAfterRedirects),
                            re.targetSnapshot
                          );
                          this.triggerEvent(Se);
                        })
                      );
                  }),
                  Xo(() => this.afterPreactivation()),
                  Xo(F => {
                    const re = Se => {
                      const We = [];
                      Se.routeConfig?.loadComponent &&
                        !Se.routeConfig._loadedComponent &&
                        We.push(
                          this.configLoader.loadComponent(Se.routeConfig).pipe(
                            pe(Ye => {
                              Se.component = Ye;
                            }),
                            (0, ce.U)(() => {})
                          )
                        );
                      for (const Ye of Se.children) We.push(...re(Ye));
                      return We;
                    };
                    return Ee(re(F.targetSnapshot.root)).pipe(
                      Tt(),
                      (0, qt.q)(1)
                    );
                  }),
                  (0, ce.U)(F => {
                    const re = (function Yr(u, l, a) {
                      const f = ho(u, l._root, a ? a._root : void 0);
                      return new Dn(f, l);
                    })(
                      this.routeReuseStrategy,
                      F.targetSnapshot,
                      F.currentRouterState
                    );
                    return { ...F, targetRouterState: re };
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
                    (0, ce.U)(
                      f => (
                        new ae(
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
                  rt(() => {
                    w ||
                      S ||
                      this.cancelNavigationTransition(
                        _,
                        `Navigation ID ${_.id} is not equal to the current navigation id ${this.navigationId}`
                      ),
                      this.currentNavigation?.id === _.id &&
                        (this.currentNavigation = null);
                  }),
                  gt(F => {
                    if (
                      ((S = !0),
                      (function vn(u) {
                        return u && u[vt];
                      })(F))
                    ) {
                      const re = Pt(F.url);
                      re || ((this.navigated = !0), this.restoreHistory(_, !0));
                      const Se = new Dt(
                        _.id,
                        this.serializeUrl(_.extractedUrl),
                        F.message
                      );
                      if ((f.next(Se), re)) {
                        const We = this.urlHandlingStrategy.merge(
                            F.url,
                            this.rawUrlTree
                          ),
                          Ye = {
                            skipLocationChange: _.extras.skipLocationChange,
                            replaceUrl:
                              'eager' === this.urlUpdateStrategy ||
                              Ws(_.source),
                          };
                        this.scheduleNavigation(We, 'imperative', null, Ye, {
                          resolve: _.resolve,
                          reject: _.reject,
                          promise: _.promise,
                        });
                      } else _.resolve(!1);
                    } else {
                      this.restoreHistory(_, !0);
                      const re = new kt(
                        _.id,
                        this.serializeUrl(_.extractedUrl),
                        F
                      );
                      f.next(re);
                      try {
                        _.resolve(this.errorHandler(F));
                      } catch (Se) {
                        _.reject(Se);
                      }
                    }
                    return le.E;
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
                    const _ = { replaceUrl: !0 },
                      w = a.state?.navigationId ? a.state : null;
                    if (w) {
                      const F = { ...w };
                      delete F.navigationId,
                        delete F.ɵrouterPageId,
                        0 !== Object.keys(F).length && (_.state = F);
                    }
                    const S = this.parseUrl(a.url);
                    this.scheduleNavigation(S, f, w, _);
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
                relativeTo: _,
                queryParams: w,
                fragment: S,
                queryParamsHandling: F,
                preserveFragment: re,
              } = f,
              Se = _ || this.routerState.root,
              We = re ? this.currentUrlTree.fragment : S;
            let Ye = null;
            switch (F) {
              case 'merge':
                Ye = { ...this.currentUrlTree.queryParams, ...w };
                break;
              case 'preserve':
                Ye = this.currentUrlTree.queryParams;
                break;
              default:
                Ye = w || null;
            }
            return (
              null !== Ye && (Ye = this.removeEmptyProps(Ye)),
              (function Mr(u, l, a, f, _) {
                if (0 === a.length) return Io(l.root, l.root, l.root, f, _);
                const w = (function Kr(u) {
                  if ('string' == typeof u[0] && 1 === u.length && '/' === u[0])
                    return new Yo(!0, 0, u);
                  let l = 0,
                    a = !1;
                  const f = u.reduce((_, w, S) => {
                    if ('object' == typeof w && null != w) {
                      if (w.outlets) {
                        const F = {};
                        return (
                          Ue(w.outlets, (re, Se) => {
                            F[Se] = 'string' == typeof re ? re.split('/') : re;
                          }),
                          [..._, { outlets: F }]
                        );
                      }
                      if (w.segmentPath) return [..._, w.segmentPath];
                    }
                    return 'string' != typeof w
                      ? [..._, w]
                      : 0 === S
                      ? (w.split('/').forEach((F, re) => {
                          (0 == re && '.' === F) ||
                            (0 == re && '' === F
                              ? (a = !0)
                              : '..' === F
                              ? l++
                              : '' != F && _.push(F));
                        }),
                        _)
                      : [..._, w];
                  }, []);
                  return new Yo(a, l, f);
                })(a);
                return w.toRoot()
                  ? Io(l.root, l.root, new k([], {}), f, _)
                  : (function S(re) {
                      const Se = (function Kn(u, l, a, f) {
                          return u.isAbsolute
                            ? new To(l.root, !0, 0)
                            : -1 === f
                            ? new To(a, a === l.root, 0)
                            : (function io(u, l, a) {
                                let f = u,
                                  _ = l,
                                  w = a;
                                for (; w > _; ) {
                                  if (((w -= _), (f = f.parent), !f))
                                    throw new Error("Invalid number of '../'");
                                  _ = f.segments.length;
                                }
                                return new To(f, !1, _ - w);
                              })(
                                a,
                                f + (Wo(u.commands[0]) ? 0 : 1),
                                u.numberOfDoubleDots
                              );
                        })(w, l, u.snapshot?._urlSegment, re),
                        We = Se.processChildren
                          ? So(Se.segmentGroup, Se.index, w.commands)
                          : xo(Se.segmentGroup, Se.index, w.commands);
                      return Io(l.root, Se.segmentGroup, We, f, _);
                    })(u.snapshot?._lastPathIndex);
              })(Se, this.currentUrlTree, a, Ye, We ?? null)
            );
          }
          navigateByUrl(a, f = { skipLocationChange: !1 }) {
            const _ = Pt(a) ? a : this.parseUrl(a),
              w = this.urlHandlingStrategy.merge(_, this.rawUrlTree);
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
            } catch (_) {
              f = this.malformedUriErrorHandler(_, this.urlSerializer, a);
            }
            return f;
          }
          isActive(a, f) {
            let _;
            if (((_ = !0 === f ? { ...ai } : !1 === f ? { ...Zs } : f), Pt(a)))
              return Zt(this.currentUrlTree, a, _);
            const w = this.parseUrl(a);
            return Zt(this.currentUrlTree, w, _);
          }
          removeEmptyProps(a) {
            return Object.keys(a).reduce((f, _) => {
              const w = a[_];
              return null != w && (f[_] = w), f;
            }, {});
          }
          processNavigations() {
            this.navigations.subscribe(
              a => {
                (this.navigated = !0),
                  (this.lastSuccessfulId = a.id),
                  (this.currentPageId = a.targetPageId),
                  this.events.next(
                    new an(
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
          scheduleNavigation(a, f, _, w, S) {
            if (this.disposed) return Promise.resolve(!1);
            let F, re, Se;
            S
              ? ((F = S.resolve), (re = S.reject), (Se = S.promise))
              : (Se = new Promise((zt, sn) => {
                  (F = zt), (re = sn);
                }));
            const We = ++this.navigationId;
            let Ye;
            return (
              'computed' === this.canceledNavigationResolution
                ? (0 === this.currentPageId && (_ = this.location.getState()),
                  (Ye =
                    _ && _.ɵrouterPageId
                      ? _.ɵrouterPageId
                      : w.replaceUrl || w.skipLocationChange
                      ? this.browserPageId ?? 0
                      : (this.browserPageId ?? 0) + 1))
                : (Ye = 0),
              this.setTransition({
                id: We,
                targetPageId: Ye,
                source: f,
                restoredState: _,
                currentUrlTree: this.currentUrlTree,
                currentRawUrl: this.rawUrlTree,
                rawUrl: a,
                extras: w,
                resolve: F,
                reject: re,
                promise: Se,
                currentSnapshot: this.routerState.snapshot,
                currentRouterState: this.routerState,
              }),
              Se.catch(zt => Promise.reject(zt))
            );
          }
          setBrowserUrl(a, f) {
            const _ = this.urlSerializer.serialize(a),
              w = {
                ...f.extras.state,
                ...this.generateNgRouterState(f.id, f.targetPageId),
              };
            this.location.isCurrentPathEqualTo(_) || f.extras.replaceUrl
              ? this.location.replaceState(_, '', w)
              : this.location.go(_, '', w);
          }
          restoreHistory(a, f = !1) {
            if ('computed' === this.canceledNavigationResolution) {
              const _ = this.currentPageId - a.targetPageId;
              ('popstate' !== a.source &&
                'eager' !== this.urlUpdateStrategy &&
                this.currentUrlTree !== this.currentNavigation?.finalUrl) ||
              0 === _
                ? this.currentUrlTree === this.currentNavigation?.finalUrl &&
                  0 === _ &&
                  (this.resetState(a),
                  (this.browserUrlTree = a.currentUrlTree),
                  this.resetUrlToCurrentUrlTree())
                : this.location.historyGo(_);
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
            const _ = new Dt(a.id, this.serializeUrl(a.extractedUrl), f);
            this.triggerEvent(_), a.resolve(!1);
          }
          generateNgRouterState(a, f) {
            return 'computed' === this.canceledNavigationResolution
              ? { navigationId: a, ɵrouterPageId: f }
              : { navigationId: a };
          }
        }
        return (
          (u.ɵfac = function (a) {
            C.$Z();
          }),
          (u.ɵprov = C.Yz7({ token: u, factory: u.ɵfac })),
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
              (f = f.children.find(_ => _.outlet === Qe));
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
            return new (a || u)(C.LFG(St.Dx));
          }),
          (u.ɵprov = C.Yz7({ token: u, factory: u.ɵfac, providedIn: 'root' })),
          u
        );
      })();
      class qs {}
      class Ks {
        preload(l, a) {
          return (0, j.of)(null);
        }
      }
      let _r = (() => {
          class u {
            constructor(a, f, _, w, S) {
              (this.router = a),
                (this.injector = _),
                (this.preloadingStrategy = w),
                (this.loader = S);
            }
            setUpPreloading() {
              this.subscription = this.router.events
                .pipe(
                  (0, _t.h)(a => a instanceof an),
                  (0, xt.b)(() => this.preload())
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
              const _ = [];
              for (const w of f) {
                w.providers &&
                  !w._injector &&
                  (w._injector = (0, C.MMx)(
                    w.providers,
                    a,
                    `Route: ${w.path}`
                  ));
                const S = w._injector ?? a,
                  F = w._loadedInjector ?? S;
                (w.loadChildren && !w._loadedRoutes) ||
                (w.loadComponent && !w._loadedComponent)
                  ? _.push(this.preloadConfig(S, w))
                  : (w.children || w._loadedRoutes) &&
                    _.push(
                      this.processRoutes(F, w.children ?? w._loadedRoutes)
                    );
              }
              return (0, B.D)(_).pipe((0, Te.J)());
            }
            preloadConfig(a, f) {
              return this.preloadingStrategy.preload(f, () => {
                let _;
                _ =
                  f.loadChildren && void 0 === f.canLoad
                    ? this.loader.loadChildren(a, f)
                    : (0, j.of)(null);
                const w = _.pipe(
                  (0, lt.z)(S =>
                    null === S
                      ? (0, j.of)(void 0)
                      : ((f._loadedRoutes = S.routes),
                        (f._loadedInjector = S.injector),
                        this.processRoutes(S.injector ?? a, S.routes))
                  )
                );
                if (f.loadComponent && !f._loadedComponent) {
                  const S = this.loader.loadComponent(f);
                  return (0, B.D)([w, S]).pipe((0, Te.J)());
                }
                return w;
              });
            }
          }
          return (
            (u.ɵfac = function (a) {
              return new (a || u)(
                C.LFG(An),
                C.LFG(C.Sil),
                C.LFG(C.lqb),
                C.LFG(qs),
                C.LFG(Xi)
              );
            }),
            (u.ɵprov = C.Yz7({ token: u, factory: u.ɵfac })),
            u
          );
        })(),
        Fr = (() => {
          class u {
            constructor(a, f, _ = {}) {
              (this.router = a),
                (this.viewportScroller = f),
                (this.options = _),
                (this.lastId = 0),
                (this.lastSource = 'imperative'),
                (this.restoredId = 0),
                (this.store = {}),
                (_.scrollPositionRestoration =
                  _.scrollPositionRestoration || 'disabled'),
                (_.anchorScrolling = _.anchorScrolling || 'disabled');
            }
            init() {
              'disabled' !== this.options.scrollPositionRestoration &&
                this.viewportScroller.setHistoryScrollRestoration('manual'),
                (this.routerEventsSubscription = this.createScrollEvents()),
                (this.scrollEventsSubscription = this.consumeScrollEvents());
            }
            createScrollEvents() {
              return this.router.events.subscribe(a => {
                a instanceof et
                  ? ((this.store[this.lastId] =
                      this.viewportScroller.getScrollPosition()),
                    (this.lastSource = a.navigationTrigger),
                    (this.restoredId = a.restoredState
                      ? a.restoredState.navigationId
                      : 0))
                  : a instanceof an &&
                    ((this.lastId = a.id),
                    this.scheduleScrollEvent(
                      a,
                      this.router.parseUrl(a.urlAfterRedirects).fragment
                    ));
              });
            }
            consumeScrollEvents() {
              return this.router.events.subscribe(a => {
                a instanceof Ve &&
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
                new Ve(
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
              C.$Z();
            }),
            (u.ɵprov = C.Yz7({ token: u, factory: u.ɵfac })),
            u
          );
        })();
      const lo = new C.OlP('ROUTER_CONFIGURATION'),
        Nr = new C.OlP('ROUTER_FORROOT_GUARD'),
        ra = [
          s.Ye,
          { provide: ot, useClass: In },
          {
            provide: An,
            useFactory: function kr(u, l, a, f, _, w, S = {}, F, re, Se, We) {
              const Ye = new An(null, u, l, a, f, _, Je(w));
              return (
                Se && (Ye.urlHandlingStrategy = Se),
                We && (Ye.routeReuseStrategy = We),
                (Ye.titleStrategy = re ?? F),
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
                })(S, Ye),
                Ye
              );
            },
            deps: [
              ot,
              un,
              s.Ye,
              C.zs3,
              C.Sil,
              Qi,
              lo,
              Ys,
              [ts, new C.FiY()],
              [class Pu {}, new C.FiY()],
              [class na {}, new C.FiY()],
            ],
          },
          un,
          {
            provide: ro,
            useFactory: function nc(u) {
              return u.routerState.root;
            },
            deps: [An],
          },
          _r,
          Ks,
          class ao {
            preload(l, a) {
              return a().pipe(gt(() => (0, j.of)(null)));
            }
          },
          { provide: lo, useValue: { enableTracing: !1 } },
          Xi,
        ];
      function Qs() {
        return new C.PXZ('Router', An);
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
                  deps: [[An, new C.FiY(), new C.tp0()]],
                },
                { provide: lo, useValue: f || {} },
                {
                  provide: s.S$,
                  useFactory: tc,
                  deps: [s.lw, [new C.tBr(s.mr), new C.FiY()], lo],
                },
                { provide: Fr, useFactory: ec, deps: [An, s.EM, lo] },
                {
                  provide: qs,
                  useExisting:
                    f && f.preloadingStrategy ? f.preloadingStrategy : Ks,
                },
                { provide: C.PXZ, multi: !0, useFactory: Qs },
                [
                  ui,
                  { provide: C.ip1, multi: !0, useFactory: yr, deps: [ui] },
                  { provide: ns, useFactory: ca, deps: [ui] },
                  { provide: C.tb, multi: !0, useExisting: ns },
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
            return new (a || u)(C.LFG(Nr, 8), C.LFG(An, 8));
          }),
          (u.ɵmod = C.oAB({ type: u })),
          (u.ɵinj = C.cJS({})),
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
          { provide: C.deG, multi: !0, useValue: u },
          { provide: Qi, multi: !0, useValue: u },
        ];
      }
      let ui = (() => {
        class u {
          constructor(a) {
            (this.injector = a),
              (this.initNavigation = !1),
              (this.destroyed = !1),
              (this.resultOfPreactivationDone = new H.x());
          }
          appInitializer() {
            return this.injector.get(s.V_, Promise.resolve(null)).then(() => {
              if (this.destroyed) return Promise.resolve(!0);
              let f = null;
              const _ = new Promise(F => (f = F)),
                w = this.injector.get(An),
                S = this.injector.get(lo);
              return (
                'disabled' === S.initialNavigation
                  ? (w.setUpLocationChangeListener(), f(!0))
                  : 'enabledBlocking' === S.initialNavigation
                  ? ((w.afterPreactivation = () =>
                      this.initNavigation
                        ? (0, j.of)(void 0)
                        : ((this.initNavigation = !0),
                          f(!0),
                          this.resultOfPreactivationDone)),
                    w.initialNavigation())
                  : f(!0),
                _
              );
            });
          }
          bootstrapListener(a) {
            const f = this.injector.get(lo),
              _ = this.injector.get(_r),
              w = this.injector.get(Fr),
              S = this.injector.get(An),
              F = this.injector.get(C.z2F);
            a === F.components[0] &&
              (('enabledNonBlocking' === f.initialNavigation ||
                void 0 === f.initialNavigation) &&
                S.initialNavigation(),
              _.setUpPreloading(),
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
            return new (a || u)(C.LFG(C.zs3));
          }),
          (u.ɵprov = C.Yz7({ token: u, factory: u.ɵfac })),
          u
        );
      })();
      function yr(u) {
        return u.appInitializer.bind(u);
      }
      function ca(u) {
        return u.bootstrapListener.bind(u);
      }
      const ns = new C.OlP('Router Initializer');
    },
  },
  Xe => {
    Xe((Xe.s = 2987));
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
    6154: (M, i, n) => {
      n.r(i), n.d(i, { ConfigurationsModule: () => m });
      var s = n(6895),
        r = n(613),
        a = n(542),
        d = n(356),
        e = n(4650),
        g = n(9590);
      const l = [{ path: '', component: d.A }];
      let h = (() => {
        class o {
          constructor(t, C) {
            (this.router = t),
              (this.broadcastService = C),
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
          (o.ɵfac = function (t) {
            return new (t || o)(e.LFG(a.F0), e.LFG(g.M));
          }),
          (o.ɵmod = e.oAB({ type: o })),
          (o.ɵinj = e.cJS({ imports: [s.ez, a.Bz.forChild(l), s.ez, a.Bz] })),
          o
        );
      })();
      var u = n(529);
      let m = (() => {
        class o {
          constructor() {
            console.log('config module');
          }
        }
        return (
          (o.ɵfac = function (t) {
            return new (t || o)();
          }),
          (o.ɵmod = e.oAB({ type: o })),
          (o.ɵinj = e.cJS({ imports: [s.ez, r.m, h, a.Bz, u.JF] })),
          o
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
    5617: (i, s, a) => {
      a.r(s), a.d(s, { DashboardModule: () => f });
      var h = a(6895),
        e = a(613),
        l = a(542),
        d = a(4650);
      const u = [
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        {
          path: 'dashboard',
          loadChildren: () =>
            Promise.resolve()
              .then(a.bind(a, 5617))
              .then(o => (console.log('Normal ROUTE'), o.DashboardModule)),
        },
        {
          path: 'dashboard/:exp/:channel',
          loadChildren: () =>
            Promise.resolve()
              .then(a.bind(a, 5617))
              .then(o => (console.log('Normal ROUTE'), o.DashboardModule)),
        },
      ];
      let m = (() => {
        class o {}
        return (
          (o.ɵfac = function (t) {
            return new (t || o)();
          }),
          (o.ɵmod = d.oAB({ type: o })),
          (o.ɵinj = d.cJS({ imports: [l.Bz.forChild(u), l.Bz] })),
          o
        );
      })();
      var c = a(6154),
        r = a(433);
      let f = (() => {
        class o {}
        return (
          (o.ɵfac = function (t) {
            return new (t || o)();
          }),
          (o.ɵmod = d.oAB({ type: o })),
          (o.ɵinj = d.cJS({
            imports: [h.ez, e.m, m, c.ConfigurationsModule, r.u5, r.UX],
          })),
          o
        );
      })();
    },
  },
]);
