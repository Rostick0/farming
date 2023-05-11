import { Container } from "../../UI/Container";
import { Title } from "../../UI/Title";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Input } from "../../UI/Input";
import { Button } from '../../UI/Button';
import { ErrorText } from '../../UI/ErrorText';
import { Label } from '../../UI/Label';
import styles from './contacts.module.scss';
import { Textarea } from "../../UI/Textarea";

const ContactsWidgets = () => {
    const initialValues = { email: '', password: '' };
    const validateForm = values => {
        const errors = {};
        if (!values.name) {
            errors.name = 'Введите имя';
        }

        if (!values.tel) {
            errors.tel = 'Укажите телефон';
        } else if (
            !/^\+?[1-9][0-9]{7,14}$/.test(values.tel)
        ) {
            errors.tel = 'Неккоректный номер телефона';
        }

        if (!values.email) {
            errors.email = 'Укажите почту';
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
            errors.email = 'Неправильная почта';
        }

        if ((values.message?.length ?? 0) < 10) {
            errors.message = 'Минимая длина 10 символов';
        }

        return errors;
    }

    const onSubmitForm = (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
    };

    return (
        <div>
            <div className={styles.contacts__map}>
                <iframe
                    loading="lazy"
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A1c845d5716e5bd576213c376a3a4c41b280d13a7e63272741d2f4441057a10b0&amp;source=constructo"
                    title="Адрес"
                    width="100%"
                    height="400"
                    frameborder="0"
                ></iframe>
            </div>
            <Container>
                <Title>Контактная информация</Title>
                <div className={styles.contacts__content}>
                    <div className={styles.contacts__content_inner}>
                        <div className={styles.contacts__image}>
                            <img src="https://krot.info/uploads/posts/2021-11/thumbs/1638215175_50-krot-info-p-moskva-reka-krasivie-foto-54.jpg" alt="" />
                        </div>
                        <ul className={styles.contacts__info}>
                            <li className={styles.info__item}>
                                <div className={styles.info__title}>Офис:</div>
                                <a className={styles.info__value} href="" target="_blank">г. Москва</a>
                            </li>
                            <li className={styles.info__item}>
                                <div className={styles.info__title}>Телефон:</div>
                                <a className={styles.info__value} href="tel: 8800555">8 (800) 555</a>
                            </li>
                            <li className={styles.info__item}>
                                <div className={styles.info__title}>Почта:</div>
                                <a className={styles.info__value} href="malito: mail@mail.com">mail@mail.com</a>
                            </li>
                        </ul>
                    </div>
                    <Formik
                        initialValues={initialValues}
                        validate={validateForm}
                        onSubmit={onSubmitForm}
                    >
                        {({ isSubmitting }) => (
                            <Form className={styles.contacts__form}>
                                <div className={styles.contacts__form_title}>Форма для обратной связи</div>
                                <Label>
                                    <Field type="text" name="name" placeholder="Ваше имя" as={Input} />
                                    <ErrorMessage name="name" component={ErrorText} />
                                </Label>
                                <Label>
                                    <Field type="tel" name="tel" placeholder="Контактный телефон" as={Input} />
                                    <ErrorMessage name="tel" component={ErrorText} />
                                </Label>
                                <Label>
                                    <Field type="email" name="email" placeholder="Электронная почта" as={Input} />
                                    <ErrorMessage name="email" component={ErrorText} />
                                </Label>
                                <Label>
                                    <Field type="text" name="message" placeholder="Текст сообщения" as={Textarea} />
                                    <ErrorMessage name="message" component={ErrorText} />
                                </Label>
                                <Button className={styles.authorization__button} type="submit" disabled={isSubmitting}>Отправить</Button>
                            </Form>
                        )}
                    </Formik>
                </div >
            </Container >
        </div >
    );
};

export {
    ContactsWidgets
};