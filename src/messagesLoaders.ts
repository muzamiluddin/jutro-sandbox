import { getLanguageSubtag } from '@jutro/locale';
import { warning } from '@jutro/logger';
import bizCompTranslationsMetadata from '../i18n/biz-comp-translations/meta.json';

export type LoadMessageType = {
    lang: string;
    loader: (
        lang: string
    ) => Promise<Record<'default', Record<string, string>>>;
    source: string;
};

/**
 * Load messages
 * @param {object} params
 * @param {string} params.lang
 * @param {function} params.loader
 * @param {string} params.source
 *
 * @returns {Promise<object>} - Loaded messages
 */
export const loadMessages = async ({
    lang,
    loader,
    source,
}: LoadMessageType): Promise<Record<string, string>> => {
    try {
        const { default: result } = await loader(lang);

        return result;
    } catch {
        const extractedLang = getLanguageSubtag(lang);

        if (extractedLang && extractedLang !== lang) {
            warning(
                `Unable to load ${source} translations for lang: ${lang}. Falling back to: ${extractedLang}.`
            );

            try {
                const { default: result } = await loader(extractedLang);

                return result;
            } catch {
                warning(
                    `Unable to load ${source} translations for lang: ${extractedLang}.`
                );

                return {};
            }
        }

        warning(`Unable to load ${source} translations for lang: ${lang}.`);

        return {};
    }
};

/**
 * Load application specific messages
 * @param {string} lang
 *
 * @returns {Promise<object>} - Loaded messages
 */
export const loadAppMessages = async (
    lang: string
): Promise<Record<string, string>> =>
    loadMessages({
        lang,
        loader: fileName => import(`./i18n/${fileName}.json`),
        source: 'application',
    });

/**
 * Load core application messages
 * @param {string} lang
 *
 * @returns {Promise<object>} - Loaded messages
 */
export const loadCoreMessages = async (
    lang: string
): Promise<Record<string, string>> => {
    const jutroMessages = await loadMessages({
        lang,
        loader: fileName => import(`@jutro/translations/lang-data/${fileName}`),
        source: 'jutro components',
    });
    const bizCompMessages = bizCompTranslationsMetadata.translationsAvailable
        ? await loadMessages({
              lang,
              loader: fileName =>
                  import(`../i18n/biz-comp-translations/${fileName}`),
              source: 'business components',
          })
        : {};

    return { ...jutroMessages, ...bizCompMessages };
};
