import { Container } from "../../UI/Container";
import { LinkTo } from "../../UI/LinkTo";
import styles from './header.module.scss';
import { Link } from "react-router-dom";
import { HeaderCatalog } from "../HeaderCatalog";
import { HeaderSearch } from "../HeaderSearch";
import { LogoSite } from "../../UI/LogoSite";
import { SvgBurger } from "../../UI/SvgBurger";
import { useState } from "react";
import { SvgXDelete } from "../../UI/SvgXDelete";
import { useSelector } from "react-redux";

const Header = ({ headerStyle = {} }) => {
    const [activeNav, setActiveNav] = useState(false);
    const classActiveNav = activeNav ? ' ' + styles.header__mobile_menu_active : '';
    const countProducts = useSelector(state => state.cart.productsLocal)?.length

    return (
        <header className={styles.header} style={headerStyle}>
            <Container>
                <div className={styles.header__container}>
                    <div className={styles.header__computer}>
                        <div className={styles.header__computer_top}>
                            <LogoSite></LogoSite>
                            <HeaderSearch></HeaderSearch>
                            <div className={styles.header__icons}>
                                <Link className={styles.header__icon} to="/cart">
                                    <svg className={styles.header__icon_cart} stroke="#000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
                                        <g fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M6 6 L30 6 27 19 9 19 M27 23 L10 23 5 2 2 2" />
                                            <circle cx="25" cy="27" r="2" />
                                            <circle cx="12" cy="27" r="2" />
                                        </g>
                                    </svg>
                                    <span className={styles.header__icon_counter}>{countProducts}</span>
                                </Link>
                                <Link className={styles.header__icon} to="/login">
                                    <svg className={styles.header__icon_profile} viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><title /><g id="about"><path d="M16,16A7,7,0,1,0,9,9,7,7,0,0,0,16,16ZM16,4a5,5,0,1,1-5,5A5,5,0,0,1,16,4Z" /><path d="M17,18H15A11,11,0,0,0,4,29a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1A11,11,0,0,0,17,18ZM6.06,28A9,9,0,0,1,15,20h2a9,9,0,0,1,8.94,8Z" /></g></svg>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.header__computer_bottom}>
                            <HeaderCatalog></HeaderCatalog>
                            <nav className={styles.header__nav}>
                                <ul className={styles.header__navigation}>
                                    <li className={styles.header__navigation_item}>
                                        <LinkTo to="/about">О нас</LinkTo>
                                    </li>
                                    <li className={styles.header__navigation_item}>
                                        <LinkTo to="/partners">Партнерам</LinkTo>
                                    </li>
                                    <li className={styles.header__navigation_item}>
                                        <LinkTo to="/contacts">Контакты</LinkTo>
                                    </li>
                                    <li className={styles.header__navigation_item}>
                                        <LinkTo to="/reviews">Отзывы</LinkTo>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className={styles.header__mobile}>
                        <LogoSite></LogoSite>
                        <SvgBurger
                            onClick={() => setActiveNav(true)}
                            strokeWidth="3"
                        ></SvgBurger>
                        <div className={styles.header__mobile_menu + classActiveNav}>
                            <Container>
                                <div className={styles.header__mobile_top}>
                                    <HeaderSearch></HeaderSearch>
                                    <SvgXDelete
                                        onClick={() => setActiveNav(false)}
                                    ></SvgXDelete>
                                </div>
                                <nav className={styles.header__mobile_nav}>
                                    <ul className={styles.header__mobile_navigation}>
                                        <li className={styles.header__mobile_navigation_item}>
                                            <LinkTo to="/login">Войти в аккаунт</LinkTo>
                                        </li>
                                        <li className={styles.header__mobile_navigation_item}>
                                            <LinkTo to="/cart">Корзина</LinkTo>
                                        </li>
                                        <li className={styles.header__mobile_navigation_item}>
                                            <LinkTo to="/catalog">Каталог</LinkTo>
                                        </li>
                                        <li className={styles.header__mobile_navigation_item}>
                                            <LinkTo to="/about">О нас</LinkTo>
                                        </li>
                                        <li className={styles.header__mobile_navigation_item}>
                                            <LinkTo to="/partners">Партнерам</LinkTo>
                                        </li>
                                        <li className={styles.header__mobile_navigation_item}>
                                            <LinkTo to="/contacts">Контакты</LinkTo>
                                        </li>
                                        <li className={styles.header__mobile_navigation_item}>
                                            <LinkTo to="/reviews">Отзывы</LinkTo>
                                        </li>
                                    </ul>
                                </nav>
                            </Container>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export {
    Header
}