import { useMemo } from 'react';
import { FloorPlans } from '@jutro/floorplan';
import floorPlanConfig from '../app/App.config';
import { useSetting } from '../context/SettingsContext';

const updateNavigationPlacementConfig = (
    config: FloorPlans,
    newValue: string
): FloorPlans => {
    if (
        !newValue ||
        !config ||
        (newValue === 'top' && !config[0].showLeftSide)
    ) {
        return config;
    }

    const [oldConfig, ...otherConfig] = config;

    const newConfig = {
        ...oldConfig,
        showLeftSide: newValue === 'left',
        showSubHeader: newValue === 'top',
        sideRoutes: newValue === 'left' ? oldConfig.routes : [],
        routes: newValue === 'top' ? oldConfig.sideRoutes : [],
    };

    return [newConfig, ...otherConfig];
};

export const useFloorPlansWithNavigationPlacement = (): FloorPlans => {
    const navigationPlacementSettings = useSetting('navPlacement');
    const currentNavigationPlacement =
        navigationPlacementSettings?.getValue() as unknown as string;

    return useMemo(
        () =>
            updateNavigationPlacementConfig(
                Object.values(floorPlanConfig),
                currentNavigationPlacement
            ),
        [currentNavigationPlacement]
    );
};
