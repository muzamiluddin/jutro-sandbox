import { cloneDeep, set } from 'lodash';
import React, { useCallback, useContext, useMemo, useState } from 'react';

type SettingsContextType = {
    updateValue: (key: string, newValue: string) => void;
} | null;

const SettingsContext = React.createContext<SettingsContextType>(null);

export type SettingsProviderProps = { children: React.ReactNode };

export const SettingsProvider: React.FC<SettingsProviderProps> = ({
    children,
}) => {
    const [value, setValue] = useState({});

    const updateValue = useCallback(
        (key, newValue) =>
            setValue(currentSettings => {
                const newSettings = cloneDeep(currentSettings);

                set(newSettings, `setting:${key}`, newValue);

                return newSettings;
            }),
        []
    );

    const memoValue = useMemo(
        () => ({ ...value, updateValue }),
        [value, updateValue]
    );

    return (
        <SettingsContext.Provider value={memoValue}>
            {children}
        </SettingsContext.Provider>
    );
};

export const useSetting = (
    settingName: string
): {
    getValue: () => undefined;
    setValue: (newValue: unknown) => null;
} => {
    const ctx = useContext(SettingsContext);

    return {
        // @ts-ignore
        getValue: () => ctx?.[`setting:${settingName}`],
        // @ts-ignore
        setValue: newValue => ctx && ctx.updateValue(settingName, newValue),
    };
};
