declare module 'matchmediaquery' {
    function matchMedia(query: string, values: string | string[], forceStatic: boolean): Mql

    interface Mql {
        matches: (query: string, values: string | string[]) => boolean
        media: string
        addListener: (listener: any) => void
        removeListener: (listener: any) => void
        dispose: () => void
    }

    export = matchMedia
}
