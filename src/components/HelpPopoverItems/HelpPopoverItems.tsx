import React from 'react';
import { Link } from 'react-router-dom';

import { useTranslator } from '@jutro/locale';

import messages from './HelpPopoverItems.messages';
import styles from './HelpPopoverItems.module.scss';

export const HelpPopoverItems = (): React.JSX.Element => {
    const translate = useTranslator();

    return (
        <React.Fragment>
            <h5 className={styles.helpComponent}>
                {translate(messages.helpGwCloud)}
            </h5>
            <p className={styles.helpComponent}>
                {translate(messages.helpGwCloudDescription)}
            </p>
            <Link
                className={styles.helpLink}
                href={messages.helpHref.defaultMessage}
                target="_blank"
                rel="noopener noreferrer"
                to="/"
            >
                {translate(messages.helpReadMore)}
            </Link>
        </React.Fragment>
    );
};
