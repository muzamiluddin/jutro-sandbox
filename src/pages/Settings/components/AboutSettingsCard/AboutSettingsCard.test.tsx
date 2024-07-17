import {
    checkA11yViolations,
    getTranslation,
    render,
    screen,
} from '@jutro/test';
import React from 'react';
import { AboutSettingsCard } from './AboutSettingsCard';
import en from '../../../../i18n/en.json';

describe('AboutSettingsCard', () => {
    it('Displays the Guidewire Cloud logo', () => {
        render(<AboutSettingsCard />);

        expect(screen.getByRole('heading', { level: 2 }).textContent).toBe(
            getTranslation(en['jutro.app.settings.aboutSettings.about'])
        );

        expect(screen.getByRole('heading', { level: 3 }).textContent).toBe(
            getTranslation(en['jutro.app.settings.aboutSettings.logoTitle'])
        );
        expect(screen.getByRole('img').getAttribute('src')).toBe(
            './images/guidewire-logo.svg'
        );
    });

    it('has no a11y violations', async () => {
        await checkA11yViolations(<AboutSettingsCard />);
    });
});
