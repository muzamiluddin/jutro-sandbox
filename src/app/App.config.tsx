import React from 'react';
import { HelpPopoverItems } from '../components/HelpPopoverItems/HelpPopoverItems';
import { Settings } from '../pages/Settings/Settings';
import { Dashboard } from '../pages/Dashboard/Dashboard';

import messages from './App.messages';
import { Flex } from '@jutro/layout';

const Subheader = () => {
    return <Flex direction="row">This is a subheader...</Flex>;
};

export default {
    'floorplan.default': {
        type: 'floorplan',
        scrollContent: false,
        showLeftSide: false,
        showRightSide: false,
        showFooter: true,
        showSubHeader: true,
        routes: [
            {
                path: '/',
                exact: true,
                showOnNavBar: false,
                redirect: '/dashboard',
            },
            {
                title: messages.pagesDashboardTitle,
                path: '/dashboard',
                exact: true,
                component: Dashboard,
            },
            {
                title: messages.pagesSettingsTitle,
                path: '/settings',
                exact: true,
                component: Settings,
            },
        ],
        header: {
            showAvatar: true,
            commonAvatarRoutes: [
                {
                    title: 'Home',
                    to: '/dashboard',
                },
            ],
            showNotifications: true,
            logoSrc: './images/logo.svg',
            logoTitle: 'Online Services',
            showHelp: true,
            showAppSwitcher: false,
            showLanguageSelector: true,
            renderHelpPopoverItems(): React.JSX.Element {
                return <HelpPopoverItems />;
            },
        },
        subHeader: {
            renderCustomComponent(): React.JSX.Element {
                return <Subheader />;
            },
        },
    },
    'floorplan.settings': {
        type: 'floorplan',
        contentLayout: 'center',
        matches: ['/settings', '/dashboard'],
    },
};
