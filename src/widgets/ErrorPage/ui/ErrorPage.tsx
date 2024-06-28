import ErrorIm from 'shared/icons/errorPage70x70.svg';
import * as style from './ErrorPage.module.css';

export function ErrorPage() {
    const refr = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };
    return (
        <div className={style.errorPage}>
            <ErrorIm />
            Sorry.. there was an error
            <button type="button" onClick={refr}>
                reload
            </button>
        </div>
    );
}
