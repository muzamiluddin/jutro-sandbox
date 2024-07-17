import React, { useContext, useRef, useState } from 'react';
import { LocaleContext, useLanguage, useTranslator } from '@jutro/locale';
import { GlobalizationChooser } from '@jutro/components';
import { set } from 'lodash/fp';
import { useEvent } from '@jutro/platform';
import { SettingsCard } from '../SettingsCard/SettingsCard';
import messages from './GlobalizationSettingsCard.messages';

export const GlobalizationSettingsCard = (): JSX.Element => {
    const translator = useTranslator();
    const [isEditMode, setIsEditMode] = useState(false);
    const localeContext = useContext(LocaleContext);
    const languageContext = useLanguage();
    const currentLanguage = languageContext.language;
    const currentLocale = localeContext.locale;
    const languageValue = currentLanguage;
    const localeValue = currentLocale;
    const [data, setData] = useState({
        languageValue,
        localeValue,
    });

    const ref = useRef({ ...data });

    const updateLocale = useEvent(newLocale => {
        localeContext?.localeOnChangeCallback?.(newLocale);
    });

    const updateLanguage = useEvent(newLanguage => {
        languageContext?.languageOnChangeCallback?.(newLanguage);
    });

    const onSaveCallback = useEvent(() => {
        if (currentLocale !== data.localeValue) {
            updateLocale(data.localeValue);
        }

        if (currentLanguage !== data.languageValue) {
            updateLanguage(data.languageValue);
        }

        ref.current = { ...data };
    });

    const onCancelCallback = useEvent(() => {
        setData({ ...data, ...ref.current });
    });

    const onLanguageValueChange = useEvent(lang => {
        setData(set('languageValue', lang, data));
    });

    const onLocaleValueChange = useEvent(locale => {
        setData(set('localeValue', locale, data));
    });

    return (
        <SettingsCard
            id={GlobalizationSettingsCard.name}
            header={translator(messages.regionalFormat)}
            content={[
                [
                    <GlobalizationChooser
                        key="language"
                        readOnly={!isEditMode}
                        showLocaleSelect={false}
                        skipPropagation
                        languageValue={data.languageValue}
                        onLanguageValueChange={onLanguageValueChange}
                    />,
                ],
                [
                    <GlobalizationChooser
                        key="locale"
                        readOnly={!isEditMode}
                        localeLabelText={messages.regionalFormat}
                        showLanguageSelect={false}
                        skipPropagation
                        localeValue={data.localeValue}
                        onLocaleValueChange={onLocaleValueChange}
                    />,
                ],
            ]}
            onSave={onSaveCallback}
            onCancel={onCancelCallback}
            isEditMode={isEditMode}
            setIsEditMode={setIsEditMode}
        />
    );
};
