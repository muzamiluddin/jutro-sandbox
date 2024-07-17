import React from 'react';
import { useTranslator } from '@jutro/locale';
import { Card } from '@jutro/components';
import styles from './AboutSettingsCard.module.scss';
import messages from './AboutSettingsCard.messages';

export const AboutSettingsCard = (): JSX.Element => {
    const translator = useTranslator();

    return (
        <Card
            id={AboutSettingsCard.name}
            isPanel
            fullWidth
            style={{ paddingBottom: '16px' }}
        >
            <div className={styles.smallerFlexGap}>
                <h2>{translator(messages.aboutSettingsAbout)}</h2>
            </div>
            <div className={styles.flexWrapGap}>
                <div className={styles.logoWrapper}>
                    <img
                        src="./images/guidewire-logo.svg"
                        alt={translator(messages.aboutSettingsLogoTitle)}
                    />
                    <div className={styles.logoTitle}>
                        <h3>{translator(messages.aboutSettingsLogoTitle)}</h3>
                    </div>
                </div>
            </div>
        </Card>
    );
};
