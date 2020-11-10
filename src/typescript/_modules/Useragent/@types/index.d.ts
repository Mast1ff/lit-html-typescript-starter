export = UAC;
export as namespace UAC;

declare namespace UAC {
    interface UseragentCheck {
        ua: string
        ver: string
        getBrowser: () => browserTypes
        getDevice: () => deviceTypes
        getIosVer: () => number | undefined
        browser: string
        iosVer: number
        isIE: boolean
        isiOS: boolean
        isAndroid: boolean
        isiOS: boolean
        isMobile: boolean
        isTablet: boolean
        isTouch: boolean
        isModern: boolean
    }

    type browserTypes = 'edge' | 'iemobile' | 'ie11' | 'ie6' | 'ie7' | 'ie8' | 'ie9' | 'ie10' | 'chrome' | 'safari' | 'opera' | 'firefox' | 'unknown_browser' | ''
    type deviceTypes = 'iphone' | 'ipad' | 'android' | 'windows_phone' | ''
}
