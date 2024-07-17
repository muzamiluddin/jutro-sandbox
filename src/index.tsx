// @ts-nocheck
import { setConfiguration } from '@jutro/config';
import appConfig from './config/config.json';
import { startApp } from './startApp';

// set envConfig for the code executed before the Jutro React app starts
setConfiguration({ ...appConfig, ...appConfig.env });

// below is the trick to bypass the CORS triggered by Jutro Core microapp code sending unexpected pragma/cache headers for DAD
if (!window.jutroCacheFetchFixed) {
    const nativeFetch = window.fetch;

    window.fetch = (...args) => {
        if (
            args[0]?.includes?.('asset-manifest.json') &&
            args[1]?.headers?.Pragma
        ) {
            return nativeFetch(args[0]);
        }

        return nativeFetch.apply(window, args);
    };
    window.jutroCacheFetchFixed = true;
}

startApp();
