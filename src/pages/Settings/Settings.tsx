import React from 'react';
import { useTranslator } from '@jutro/locale';
import { Flex } from '@jutro/layout';
import messages from './Settings.messages';
import styles from './Settings.module.scss';
import { ThemeSettingsCard } from './components/ThemeSettingsCard/ThemeSettingsCard';
import { GlobalizationSettingsCard } from './components/GlobalizationSettingsCard/GlobalizationSettingsCard';
import { NavigationSettingsCard } from './components/NavigationSettingsCard/NavigationSettingsCard';
import { AboutSettingsCard } from './components/AboutSettingsCard/AboutSettingsCard';
import { InlineNotification } from '@jutro/components';
import { StepProgressBar } from '@jutro/components';

export const Settings = (): JSX.Element => {
    const translator = useTranslator();

    return (
        <div className={styles.settingsContainer}>
            <InlineNotification
                message="The sandbox app is for learning only! You will not be able to bootstrap a production-ready application with this sandbox app. It is limited in functionality and has a fixed version, so you can only try basic Jutro Design System features and practice the workflows proposed under the ‘Learning Missions’ section of the documentation"
                onClosed={function noRefCheck() {}}
                type="warning"
                isDismissable={true}
            />
            <h1>{translator(messages.settings)}</h1>
            <Flex direction="column" className={styles.flexContainer}>
                <GlobalizationSettingsCard />
                <ThemeSettingsCard />
                <NavigationSettingsCard />
                <AboutSettingsCard />
            </Flex>

            <StepProgressBar
                steps={[
                    {
                        title: 'Step 1',
                        visited: true,
                    },
                    {
                        active: true,
                        title: 'Step 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
                        visited: false,
                    },
                    {
                        title: 'Step 3',
                        visited: false,
                    },
                    {
                        disabled: true,
                        title: 'Step 4',
                        visited: false,
                    },
                ]}
            />
        </div>
    );
};
