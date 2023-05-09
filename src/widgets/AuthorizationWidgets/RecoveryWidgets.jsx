import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Input } from "../../UI/Input";
import { Button } from '../../UI/Button';
import { ErrorText } from '../../UI/ErrorText';
import { LinkTo } from '../../UI/LinkTo';
import { Label } from '../../UI/Label';
import styles from './authorization.module.scss';

const RecoveryWidgets = () => {
    const initialValues = { email: '', password: '' };
    const validateForm = values => {
        const errors = {};
        if (!values.email) {
            errors.email = 'Укажите почту';
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
            errors.email = 'Неправильная почта';
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
        <div className={styles.authorization}>
            <div className={styles.authorization__title}>Восстановления пароля</div>
            <Formik
                initialValues={initialValues}
                validate={validateForm}
                onSubmit={onSubmitForm}
            >
                {({ isSubmitting }) => (
                    <Form className={styles.authorization__form}>
                        <Label>
                            <Field type="email" name="email" placeholder="Электронная почта" as={Input} />
                            <ErrorMessage name="email" component={ErrorText} />
                        </Label>
                        <Button className={styles.authorization__button} type="submit" disabled={isSubmitting}>Отправить</Button>
                    </Form>
                )}
            </Formik>
            <div className={styles.authorization__links}>
                <LinkTo to="/login">Войти в аккаунт</LinkTo>
            </div>
        </div>
    );
};

export {
    RecoveryWidgets
};