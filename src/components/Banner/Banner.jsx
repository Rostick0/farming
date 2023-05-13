import LazyLoad from 'react-lazy-load';
import { Container } from '../../UI/Container';
import { Title } from '../../UI/Title';
import styles from './banner.module.scss';

const Banner = ({
    backgroundImage,
    title,
    description,
    application
}) => {
    return (
        <LazyLoad>
            <div className={styles.banner} style={{ backgroundImage }}>
                <Container>
                    <div className={styles.banner__container}>
                        <Title className={styles.banner__title}>{title}</Title>
                        <div className={styles.banner__description}>{description}</div>
                        {application}
                    </div>
                </Container>
            </div>
        </LazyLoad>
    );
};

export {
    Banner
};