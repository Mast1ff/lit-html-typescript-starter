import { UseragentCheck, browserTypes, deviceTypes } from './@types';

class UAC implements UseragentCheck {
    ua = window.navigator.userAgent.toLowerCase();

    appVer = window.navigator.appVersion;

    ver = this.appVer.toLowerCase();

    getBrowser() {
        let _browser: browserTypes = '';
        if (this.ua.indexOf('edge') !== -1) _browser = 'edge';
        else if (this.ua.indexOf('iemobile') !== -1) _browser = 'iemobile';
        else if (this.ua.indexOf('trident/7') !== -1) _browser = 'ie11';
        else if (this.ua.indexOf('msie') !== -1 && this.ua.indexOf('opera') === -1) {
            if (this.ver.indexOf('msie 6.') !== -1) _browser = 'ie6';
            else if (this.ver.indexOf('msie 7.') !== -1) _browser = 'ie7';
            else if (this.ver.indexOf('msie 8.') !== -1) _browser = 'ie8';
            else if (this.ver.indexOf('msie 9.') !== -1) _browser = 'ie9';
            else if (this.ver.indexOf('msie 10.') !== -1) _browser = 'ie10';
        } else if (this.ua.indexOf('chrome') !== -1 && this.ua.indexOf('edge') === -1) _browser = 'chrome';
        else if (this.ua.indexOf('safari') !== -1 && this.ua.indexOf('chrome') === -1) _browser = 'safari';
        else if (this.ua.indexOf('opera') !== -1) _browser = 'opera';
        else if (this.ua.indexOf('firefox') !== -1) _browser = 'firefox';
        else _browser = 'unknown_browser';
        return _browser;
    }

    getDevice() {
        let _device: deviceTypes = '';
        if (this.ua.indexOf('iphone') !== -1 || this.ua.indexOf('ipod') !== -1) _device = 'iphone';
        else if (this.ua.indexOf('ipad') !== -1) _device = 'ipad';
        else if (this.ua.indexOf('android') !== -1) _device = 'android';
        else if (this.ua.indexOf('windows') !== -1 && this.ua.indexOf('phone') !== -1) _device = 'windows_phone';
        else _device = '';
        return _device;
    }

    getIosVer() {
        const platform = window.navigator.platform;
        if (/iP(hone|od|ad)/.test(platform)) {
            const v = this.appVer.match(/OS (\d+)_(\d+)_?(\d+)?/);
            if (v !== null) {
                const versions = [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || '0', 10)];
                return versions[0];
            }
            return 0;
        }
        return 0;
    }

    browser = this.getBrowser();

    device = this.getDevice();

    iosVer = this.getIosVer();

    isIE = this.browser.substr(0, 2) === 'ie' && this.browser !== 'iemobile';

    isiOS = (this.device === 'iphone' || this.device === 'ipad');

    isAndroid = this.device === 'android';

    isMobile = (this.ua.indexOf('mobi') !== -1 || this.device === 'iphone' || (this.device === 'windows_phone' && this.ua.indexOf('wpdesktop') === -1));

    isTablet = (this.device === 'ipad' || (this.device === 'android' && !this.isMobile));

    isTouch = ('ontouchstart' in window);

    isModern = !(this.browser === 'ie6' || this.browser === 'ie7' || this.browser === 'ie8' || this.browser === 'ie9' || (this.iosVer > 0 && this.iosVer < 8));
}

export {
    UAC,
};
