import React, { useContext, useRef, useState } from 'react';
import { useTranslator } from '@jutro/locale';
import { ThemeChooser } from '@jutro/components';
import { useEvent } from '@jutro/platform';
import { ThemeContext, ThemeProvider } from '@jutro/theme';
import themesConfig from '../../../../../.themesConfig.json';
import { SettingsCard } from '../SettingsCard/SettingsCard';
import messages from './ThemeSettingsCard.messages';

export const ThemeSettingsCard = (): JSX.Element => {
    const translator = useTranslator();
    const [isEditMode, setIsEditMode] = useState(false);
    const themeContext = useContext(ThemeContext);
    const [theme, setTheme] = useState(themeContext);
    const ref = useRef(theme);
    const onSaveClickCallback = useEvent(() => {
        const themeUntyped: unknown = themeContext;

        (themeUntyped as ThemeProvider).switchTheme(theme);
        ref.current = { ...theme };
    });

    const onCancelClickCallback = useEvent(() => setTheme(ref.current));
    const onThemeChangeCallback = useEvent(selectedTheme => {
        setTheme(selectedTheme);
    });

    return (
        <SettingsCard
            id={ThemeSettingsCard.name}
            header={translator(messages.theme)}
            content={[
                [
                    <ThemeChooser
                        id="theme"
                        key="theme"
                        label={translator(messages.currentTheme)}
                        availableThemes={Object.values(themesConfig)}
                        readOnly={!isEditMode}
                        theme={theme}
                        onThemeChange={onThemeChangeCallback}
                        skipPropagation
                    />,
                ],
            ]}
            onSave={onSaveClickCallback}
            onCancel={onCancelClickCallback}
            isEditMode={isEditMode}
            setIsEditMode={setIsEditMode}
        />
    );
};
