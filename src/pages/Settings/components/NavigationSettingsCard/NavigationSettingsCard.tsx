import React, { useCallback, useState } from 'react';
import { useTranslator } from '@jutro/locale';
import { ToggleField } from '@jutro/components';
import { useSetting } from '../../../../context/SettingsContext';
import { SettingsCard } from '../SettingsCard/SettingsCard';
import messages from './NavigationSettingsCard.messages';

export const NavigationSettingsCard = (): JSX.Element => {
    const translator = useTranslator();
    const [isEditMode, setIsEditMode] = useState(false);
    const ctx = useSetting('navPlacement');
    const navigationOptions = [
        {
            id: 'top',
            displayName: messages.top,
        },
        {
            id: 'left',
            displayName: messages.left,
        },
    ];

    const [navigationPlacement, setNavigationPlacement] = useState(
        ctx?.getValue() || 'top'
    );

    const updateSetting = useCallback(() => {
        ctx?.setValue(navigationPlacement);
    }, [ctx, navigationPlacement]);

    const restoreSetting = useCallback(() => {
        setNavigationPlacement(ctx?.getValue() || 'top');
    }, [ctx]);

    return (
        <SettingsCard
            id={NavigationSettingsCard.name}
            header={translator(messages.navigation)}
            content={[
                [
                    <ToggleField
                        id="navigationPosition"
                        key="navigationPosition"
                        label="Navigation placement"
                        availableValues={navigationOptions}
                        value={navigationPlacement}
                        onValueChange={setNavigationPlacement}
                        readOnly={!isEditMode}
                    />,
                ],
            ]}
            onSave={updateSetting}
            onCancel={restoreSetting}
            isEditMode={isEditMode}
            setIsEditMode={setIsEditMode}
        />
    );
};
