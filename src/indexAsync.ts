// @ts-ignore
// asynchronous start boundary for webpack dynamic module loading
Promise.all([
    import('@jutro/config'),
    import('./config/config.json'),
    import('./startApp'),
]).then(([{ setConfiguration }, appConfig, { startApp }]) => {
    // set envConfig for the code executed before the Jutro React app starts
    setConfiguration({ ...appConfig, ...appConfig.env });

    startApp();
});
