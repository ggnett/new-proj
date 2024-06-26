import cn from 'classnames';
import * as style from './NotFoundPage.module.css';

export function NotFoundPage() {
    return <div className={cn(style.notFound)}>Page not found</div>;
}
