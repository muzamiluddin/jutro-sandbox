import React from 'react';
import { AppFloorPlan } from '@jutro/floorplan';
import { SettingsProvider } from '../context/SettingsContext';
import '../styles/index.scss';
import { useFloorPlansWithNavigationPlacement } from '../hooks/useFloorPlansWithNavigationPlacement';

export const AppRoot: React.FC = (): JSX.Element => {
    const floorPlans = useFloorPlansWithNavigationPlacement();

    if (process.env.NODE_ENV === 'production') {
        // @ts-ignore
        // eslint-disable-next-line no-underscore-dangle
        const DEV_TOOLS = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;

        if (typeof DEV_TOOLS === 'object') {
            for (const [key, value] of Object.entries(DEV_TOOLS)) {
                DEV_TOOLS[key] = typeof value === 'function' ? undefined : null;
            }
        }
    }

    return <AppFloorPlan floorPlans={floorPlans} />;
};

export function Jutro(): JSX.Element {
    return (
        <SettingsProvider>
            <AppRoot />
        </SettingsProvider>
    );
}
