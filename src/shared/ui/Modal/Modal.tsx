// eslint-disable-next-line object-curly-newline
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import { createPortal } from 'react-dom';
import { ThemeContext } from 'app/provaiders/themeprovaider';
import style from './Modal.module.css';

export default function Modal({ visible, setVisible }: any) {
    const [isClos, setIsClos] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();
    const { theme } = useContext(ThemeContext);

    const closing = useCallback(() => {
        setVisible(false);
        setIsClos(false);
    }, [setVisible]);

    const modalClose = useCallback(() => {
        setIsClos(true);
        timerRef.current = setTimeout(closing, 300);
    }, [closing]);

    const escPress = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') modalClose();
        },
        // eslint-disable-next-line comma-dangle
        [modalClose]
    );

    const contClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    useEffect(() => {
        if (visible) window.addEventListener('keydown', escPress);
        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', escPress);
        };
    }, [escPress, visible]);

    if (!visible) return null;

    return createPortal(
        <div className={cn(style.overlay, { [style.opened]: visible, [style.closed]: isClos })} onClick={modalClose}>
            <div className={cn(style.modalBack)}>
                <div className={cn(style.modalCont, theme)} onClick={contClick}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ut nobis, consectetur adipisci architecto enim laboriosam minima,
                    unde sint, pariatur cupiditate expedita illo cum ipsam voluptates. Saepe dolore magni consequuntur.
                </div>
            </div>
        </div>,
        // eslint-disable-next-line comma-dangle
        document.body
    );
}
