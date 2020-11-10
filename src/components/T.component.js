import React from 'react';
import { Trans, useTranslation } from 'react-i18next';


export default ({ children, i18nKey = '', count = 0, ns = 'common', ...rest })=> {
    const { t } = useTranslation(['translation', ns]);

    return (
        <Trans t={t} i18nKey={i18nKey} count={count} {...rest}>
            { children }
        </Trans>
    );
};

