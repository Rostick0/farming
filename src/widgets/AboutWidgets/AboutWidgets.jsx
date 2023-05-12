import { Link } from 'react-router-dom';
import { Container } from '../../UI/Container';
import { Title } from '../../UI/Title';
import styles from './about.module.scss';
import { Button } from '../../UI/Button';

const AboutWidgets = () => {
    return (
        <div className={styles.about}>
            <Container>
                <Title>О сервисе</Title>
                <div className={styles.about__info}>
                    <div className={styles.about__info_image}>
                        <img src="https://agromp.ru/wp-content/uploads/2020/09/lllok.jpg" alt="" />
                    </div>
                    <div className={styles.about__info_content}>
                        <p>
                            Наш сервис для фермеров, владельцев магазинов любого размера, центров питания и производителей продуктов питания, где все участники, вплоть до покупателей, могут стать равными участниками на рынке по всей цепочке создания стоимости свежих продуктов.
                        </p>
                        <p>
                            Мы объединяем всех, кто связан с сельским хозяйством, для создания условий экономии средств за счет масштабов и новых “цепочек” поставок свежей продукции, способных обслуживать крупные рынки сбыта. <strong>Это достигается благодаря сетевому эффекту.</strong>
                        </p>
                        <p>
                            Вы всегда можете сделать индивидуальный заказ на выращивание или производство любой агрокультуры, производство сельскохозяйственной продукции, что будет гарантировать высокое качество продукции и равное участие на рынке.
                        </p>
                    </div>
                </div>
                <Title>Преимущества сервиса</Title>
                <ul className={styles.advantages}>
                    <li className={styles.advantages__item}>
                        <div className={styles.advantages__image}>
                            <img src={require('./../../assets/circle-5.png')} alt="" />
                        </div>
                        <div className={styles.advantages__name}>5 лет на рынке</div>
                    </li>
                    <li className={styles.advantages__item}>
                        <div className={styles.advantages__image}>
                            <img src={require('./../../assets/speedometer.png')} alt="" />
                        </div>
                        <div className={styles.advantages__name}>Быстрая скорость работы</div>
                    </li>
                    <li className={styles.advantages__item}>
                        <div className={styles.advantages__image}>
                            <img src={require('./../../assets/24-hours-support.png')} alt="" />
                        </div>
                        <div className={styles.advantages__name}>Поддержка 24/7</div>
                    </li>
                    <li className={styles.advantages__item}>
                        <div className={styles.advantages__image}>
                            <img src={require('./../../assets/check.png')} alt="" />
                        </div>
                        <div className={styles.advantages__name}>Высокое качество</div>
                    </li>
                </ul>
                <div className={styles.action}>
                    <Title>Получите возможность покупки фермерских продуктов в пару кликов прямо сейчас</Title>
                    <Link to="/register">
                        <Button>Получить</Button>
                    </Link>
                </div>
            </Container>
        </div>
    );
};

export {
    AboutWidgets
};