import React from 'react';
import { checkA11yViolations, getTranslation, render } from '@jutro/test';
import { Settings } from './Settings';
import { ThemeSettingsCard } from './components/ThemeSettingsCard/ThemeSettingsCard';
import { GlobalizationSettingsCard } from './components/GlobalizationSettingsCard/GlobalizationSettingsCard';
import { NavigationSettingsCard } from './components/NavigationSettingsCard/NavigationSettingsCard';
import { AboutSettingsCard } from './components/AboutSettingsCard/AboutSettingsCard';
import en from '../../i18n/en.json';

describe('Settings Page', () => {
    it('Displays Setting page header properly', () => {
        const rendered = render(<Settings />);
        const container = rendered.baseElement;

        expect(container.querySelector('h1')?.textContent).toEqual(
            getTranslation(en['jutro-app.Pages.Settings.heading'])
        );
    });

    it('Displays Language and Regional Format block properly', () => {
        const rendered = render(<Settings />);

        const container = rendered.baseElement;

        expect(
            container.querySelector(
                `div[id="${GlobalizationSettingsCard.name}"] h2`
            )?.textContent
        ).toEqual(
            getTranslation(en['jutro-app.Pages.Settings.regionalFormat'])
        );
    });

    it('Displays Theme block properly', () => {
        const rendered = render(<Settings />);

        const container = rendered.baseElement;

        expect(
            container.querySelector(`div[id="${ThemeSettingsCard.name}"] h2`)
                ?.textContent
        ).toEqual(getTranslation(en['jutro-app.Pages.Settings.theme']));
    });

    it('Displays Navigation block properly', () => {
        const rendered = render(<Settings />);

        const container = rendered.baseElement;

        expect(
            container.querySelector(
                `div[id="${NavigationSettingsCard.name}"] h2`
            )?.textContent
        ).toEqual(
            getTranslation(
                en[
                    'jutro.app.settings.navigationPlacementSettingsCard.headerLabel'
                ]
            )
        );
    });

    it('Displays About block properly', () => {
        const rendered = render(<Settings />);

        const container = rendered.baseElement;

        expect(
            container.querySelector(`div[id="${AboutSettingsCard.name}"] h2`)
                ?.textContent
        ).toEqual(getTranslation(en['jutro.app.settings.aboutSettings.about']));
    });

    it('has no a11y violations', async () => {
        await checkA11yViolations(<Settings />);
    });
});
