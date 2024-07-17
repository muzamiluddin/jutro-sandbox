import { RenderOptions, checkA11yViolations, render } from '@jutro/test';
import React from 'react';
import { Jutro } from './App';

const defaultRenderOptions = {
    providers: {
        globalization: {
            props: {
                defaultLocale: 'en-US',
                defaultLanguage: 'en',
            },
        },
    },
};

describe('App', () => {
    it('renders without crashing', () => {
        const rendered = render(
            <Jutro />,
            defaultRenderOptions as RenderOptions
        );

        rendered.unmount();
    });

    it('Verify Application Header exits', () => {
        const rendered = render(<Jutro />);
        const container = rendered?.baseElement;

        expect(
            container?.querySelector('header')?.getAttribute('class')
        ).toContain('applicationHeader');
    });

    it('Verify Application Header of the Starter Template contain expected any icons', () => {
        const rendered = render(<Jutro />);
        const container = rendered.baseElement;

        expect(
            container?.querySelector(
                'header[class="header applicationHeader header"]'
            )?.innerHTML
        ).toContain('Application Logo');

        expect(
            container?.querySelector(
                'header[class="header applicationHeader header"]'
            )?.innerHTML
        ).toContain('Notification Button');

        expect(
            container?.querySelector(
                'header[class="header applicationHeader header"]'
            )?.innerHTML
        ).toContain('notifications icon');

        expect(
            container?.querySelector(
                'header[class="header applicationHeader header"]'
            )?.innerHTML
        ).toContain('helpButton');

        expect(
            container?.querySelector(
                'header[class="header applicationHeader header"]'
            )?.innerHTML
        ).toContain('languageSwitcher');
    });

    it('has no a11y violations', async () => {
        await checkA11yViolations(<Jutro />);
    });
});
