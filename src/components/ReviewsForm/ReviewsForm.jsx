import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from './form.module.scss';
import { Input } from '../../UI/Input';
import { Textarea } from '../../UI/Textarea';
import { Select } from '../../UI/Select';
import { ErrorText } from '../../UI/ErrorText';
import { Label } from '../../UI/Label';
import { Button } from '../../UI/Button';
import { Title } from '../../UI/Title';

const ReviewsForm = ({
    onSubmitForm
}) => {
    const optionReviews = [
        { value: 5, label: 5 },
        { value: 4, label: 4 },
        { value: 3, label: 3 },
        { value: 2, label: 2 },
        { value: 1, label: 1 }
    ];

    const initialValues = { raiting: '', text: '' };
    const validateForm = values => {
        const errors = {};
        if (!values.raiting) {
            errors.raiting = 'Укажите рейтинг';
        }

        if (!values.text) {
            errors.text = "Введите текст отзыва";
        }

        return errors;
    };

    return (
        <>
            <Title>Оставьте отзыв</Title>
            <Formik
                initialValues={initialValues}
                validate={validateForm}
                onSubmit={onSubmitForm}
            >
                {({ isSubmitting }) => (
                    <Form className={styles.form}>
                        {/* <Label>
                            <Select
                                name="raiting"
                                options={optionReviews}
                                isSearchable={false}
                            ></Select>
                            <ErrorMessage name="raiting" component={ErrorText} />
                        </Label> */}
                        <Field name="raiting">
                            {({ field, form, meta }) => (
                                <Label>
                                    <Select
                                        {...field}
                                        options={optionReviews}
                                        isSearchable={false}
                                    ></Select>
                                    {/* <input type="text" {...field} placeholder="First Name" /> */}
                                    {meta.touched &&
                                        meta.error && <ErrorText>{meta.error}</ErrorText>}
                                </Label>
                            )}
                        </Field>
                        <Label>
                            <Field name="text" placeholder="Ваш пароль" as={Textarea} />
                            <ErrorMessage name="text" component={ErrorText} />
                        </Label>
                        <Button className={styles.form__button} type="submit" disabled={isSubmitting}>Оставить отзыв</Button>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export {
    ReviewsForm
};