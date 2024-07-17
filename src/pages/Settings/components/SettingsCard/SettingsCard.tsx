import React from 'react';
import { Card } from '@jutro/components';
import styles from './SettingsCard.module.scss';
import { SettingsCardToolbar } from '../SettingsCardToolbar/SettingsCardToolbar';

type SettingsCardProps = {
    id: string;
    header: string;
    onSave?: () => void;
    onCancel?: () => void;
    content: JSX.Element[][];
    isEditMode?: boolean;
    setIsEditMode?: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SettingsCard = ({
    id,
    header,
    content,
    onSave,
    onCancel,
    isEditMode,
    setIsEditMode,
}: SettingsCardProps): JSX.Element => (
    <Card id={id} isPanel fullWidth style={{ paddingBottom: '16px' }}>
        <div className={styles.smallerFlexGap}>
            <h2>{header}</h2>
            <SettingsCardToolbar
                isEditMode={isEditMode}
                setIsEditMode={setIsEditMode}
                save={onSave}
                cancel={onCancel}
            />
        </div>
        <div className={styles.flexWrapGap}>
            {content.map((wrapper: JSX.Element[], index: number) => (
                <div
                    className={styles.formFieldWidth}
                    key={`wrappedField${index}`}
                >
                    {wrapper.map((FormField: JSX.Element) => FormField)}
                </div>
            ))}
        </div>
    </Card>
);
