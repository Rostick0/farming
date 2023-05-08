import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Input } from "../UI/Input";
import { Button } from '../UI/Button';
import { ErrorText } from '../UI/ErrorText';

const LoginWidgets = () => {
    const initialValues = { email: '', password: '' };
    const validateForm = values => {
        const errors = {};
        if (!values.email) {
            errors.email = 'Обязательно заполните';
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
        <Formik
            initialValues={initialValues}
            validate={validateForm}
            onSubmit={onSubmitForm}
        >
            {({ isSubmitting }) => (
                <Form>
                    <label>
                        <Field type="email" name="email" as={Input} />
                        <ErrorMessage name="email" component={ErrorText} />
                    </label>
                    <label>
                        <Field type="password" name="password" as={Input} />
                        <ErrorMessage name="password" component="span" />
                    </label>
                    <Button type="submit" disabled={isSubmitting}>
                        Создать
                    </Button>
                </Form>
            )}
        </Formik>
    );
};

export {
    LoginWidgets
};