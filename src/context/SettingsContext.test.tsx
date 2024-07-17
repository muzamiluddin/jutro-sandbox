import { fireEvent, render, screen, waitFor } from '@jutro/test';
import React from 'react';
import { SettingsProvider, useSetting } from './SettingsContext';

describe('SettingsContext', () => {
    describe('useSettings', () => {
        function TestComponent() {
            const { getValue: getTestSetting, setValue: setTestSetting } =
                useSetting('testSetting');
            const changeValueText = 'Change value';

            return (
                <React.Fragment>
                    <h1>{getTestSetting() ?? 'not set'}</h1>
                    <button
                        type="button"
                        data-testid="change-value"
                        onClick={() => setTestSetting('Changed')}
                    >
                        {changeValueText}
                    </button>
                </React.Fragment>
            );
        }

        it('has no values by default', async () => {
            render(
                <SettingsProvider>
                    <TestComponent />
                </SettingsProvider>
            );
            expect(screen.getByRole('heading').textContent).toBe('not set');
        });

        it('changes the value of the setting', async () => {
            render(
                <SettingsProvider>
                    <TestComponent />
                </SettingsProvider>
            );
            fireEvent.click(screen.getByTestId('change-value'));
            await waitFor(() => screen.getByRole('heading'));
            expect(screen.getByRole('heading').textContent).toBe('Changed');
        });
    });
});
