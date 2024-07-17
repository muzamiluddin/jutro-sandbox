import { start } from '@jutro/app';
import { loadConfiguration } from '@jutro/config';
import { warning } from '@jutro/logger';
import '@jutro/theme';

import { Jutro } from './app/App';
import messages from './app/App.messages';
import appConfig from './config/config.json';
import themesConfig from '../.themesConfig.json';
import microAppConfig from './config/mfeConfig.json';
import { loadAppMessages, loadCoreMessages } from './messagesLoaders';
import './styles/index.scss';

loadConfiguration(
    { ...appConfig, ...appConfig.env, microAppConfig },
    { 'dynamic-param': 'World' }
);

export const startApp = (): void => {
    if (process.env.NODE_ENV !== 'production') {
        warning(
            `Jutro App is running with NODE_ENV=${process.env.NODE_ENV} which may have a performance impact.`
        );
    }

    start(Jutro, {
        rootId: 'root',
        messageLoader: loadAppMessages,
        coreMessageLoader: loadCoreMessages,
        refreshOnLanguageOrLocaleChange: true,
        saveDefaultLanguageAndLocaleToLocalStorage: false,
        appName: messages.appName,
        appDescription: messages.appDescription,
        themeConfig: themesConfig.wsibTheme,
    });
};
