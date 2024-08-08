import cn from 'classnames';

import { AppLink } from 'shared/ui/AppLink/AppLink';
import Modal from 'shared/ui/Modal/Modal';
import { useState } from 'react';
import style from './Navbar.module.css';

export function Navbar() {
    const [visible, setVisible] = useState(false);

    const clickLogin = () => {
        setVisible(true);
    };

    return (
        <div className={cn(style.navbar)}>
            <Modal visible={visible} setVisible={setVisible} />
            <button type="button" className={cn(style.btnEnter)} onClick={clickLogin}>
                Войти
            </button>
        </div>
    );
}
