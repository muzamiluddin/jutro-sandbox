module.exports = {
    webpack: {
        moduleFederation: {
            name: 'standaloneapp',

            /**
             * Entry point to override/extend shared libs
             * Receives default libraries configuration end expect shared
             * libraries configuration
             *
             * Refer to official webpack module federation docs for more info
             *
             * @default undefined
             */
            // shared: sharedDefaults => ({ ...sharedDefaults }),
        },
    },
};
