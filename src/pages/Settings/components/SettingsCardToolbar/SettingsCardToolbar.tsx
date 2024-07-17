import React from 'react';
import { useTranslator } from '@jutro/locale';
import { Button } from '@jutro/components';
import messages from './SettingsCardToolbar.messages';
import styles from './SettingsCardToolbar.module.scss';

type SettingsCardToolbarProps = {
    isEditMode: boolean;
    setIsEditMode: React.Dispatch<React.SetStateAction<boolean>>;
    save: () => void;
    cancel: () => void;
};

export const SettingsCardToolbar = ({
    isEditMode,
    setIsEditMode,
    save,
    cancel,
}: SettingsCardToolbarProps): JSX.Element => {
    const translator = useTranslator();

    const onSave = () => {
        setIsEditMode(false);
        save();
    };

    const onCancel = () => {
        setIsEditMode(false);
        cancel();
    };

    const onEdit = () => {
        setIsEditMode(true);
    };

    return (
        <div className={styles.buttonFlex}>
            {isEditMode && (
                <div>
                    <Button
                        variant="tertiary"
                        onClick={() => onCancel()}
                        label={translator(messages.cancel)}
                    />
                    <Button
                        onClick={() => onSave()}
                        label={translator(messages.save)}
                    />
                </div>
            )}
            {!isEditMode && (
                <Button
                    variant="secondary"
                    onClick={() => onEdit()}
                    label={translator(messages.edit)}
                />
            )}
        </div>
    );
};
