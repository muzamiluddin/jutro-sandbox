const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const SPAWN_OPTIONS = {
    stdio: 'inherit',
    shell: true,
    cwd: __dirname,
    env: {
        ...process.env,
        original_env: JSON.stringify(process.env),
        npm_config_engine_strict: false, // just to be 100% sure
    },
};

const forceResolutions = () => {
    const hasNpm = process.env.npm_execpath?.includes('npm');
    const isCI = process.env.npm_config_refer?.includes('ci');

    if (!hasNpm || isCI) {
        // yarn has built-in support for resolutions, no need to run anything
        // also 'npm ci' shouldn't touch package-lock in any way
        return;
    }

    const hasPackageLock = fs.existsSync(
        path.join(__dirname, 'package-lock.json')
    );

    if (!hasPackageLock) {
        // force-resolutions does nothing when no package-lock.json
        try {
            spawnSync(
                'npm',
                [
                    'install',
                    '--package-lock-only',
                    '--ignore-scripts',
                    '--no-audit',
                ],
                SPAWN_OPTIONS
            );
        } catch (e) {
            throw new Error(e.toString());
        }
    }

    try {
        spawnSync(
            'node',
            ['./@jutro/cli-npm-preinstall/index.js'],
            SPAWN_OPTIONS
        );
    } catch (e) {
        throw new Error(e.toString());
    }
};

forceResolutions();
