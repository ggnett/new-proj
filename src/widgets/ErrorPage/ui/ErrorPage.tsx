import React from 'react';
import Error from 'shared/icons/errorPage.svg';
import * as style from './ErrorPage.module.css';

export function ErrorPage() {
    return (
        <div className={style.errorPage}>
            <Error />
            Sorry.. there was an error
        </div>
    );
}
