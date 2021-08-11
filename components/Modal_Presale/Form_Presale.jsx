import React from 'react';
import { Form, Button } from 'react-bootstrap'
import { useFormik } from 'formik';
import emailjs from 'emailjs-com';

// import { server } from '../../config'

// import localization data
import { local } from '../../data/localization_data/components/Modal_Presale/Form_Presale'

// TODO: normal validation 

const validate = values => {
    const errors = {};
    if (!values.userFirstName) {
      errors.userFirstName = `${local.errors.userFirstName_null}`;
    } else if ( values.userFirstName.length > 30 ) {
      errors.userFirstName = `${local.errors.userName_long}`;
    }

    if (!values.userLastName) {
      errors.userLastName = `${local.errors.userLastName_null}`;
    } else if ( values.userLastName.length > 30 ) {
      errors.userLastName = `${local.errors.userName_long}`;
    }
 
    if (!values.userNumber) {
      errors.userNumber = `${local.errors.userNumber_null}`;
    } else if (!/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/i.test(values.userNumber)) {
      errors.userNumber = `${local.errors.userNumber_numb}`;
    }
   
    if (!values.userEmail) {
      errors.userEmail = `${local.errors.userEmail_null}`;
    } else if (!/.+@.+\..+/i.test(values.userEmail)) {
      errors.userEmail = `${local.errors.userEmail_numb}`;
    }

    return errors;
  };


const OrderCallForm = () => {

    const service = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;
    const template = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID;
    const user = process.env.NEXT_PUBLIC_EMAIL_USER_ID;

    // Notice that we have to initialize ALL of fields with values. These
    // could come from props, but since we don't want to prefill this form,
    // we just use an empty string. If you don't do this, React will yell
    // at you.
    const formik = useFormik({
        initialValues: {
            userLastName: '',
            userFirstName: '',
            userPatronymic: '',
            userNumber: '',
            userEmail: '',
            userMessage: '',
        },
        validate,
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2))
            emailjs.send(service, template, values, user)
            .then(function(response) {
                alert(`${values.userFirstName}, скоро вам перезвонят из центра Кинезис!`);
                console.log('SUCCESS!', response.status, response.text);
                // go to main after submit 
                window.location.href = "/";
            }, function(error) {
                alert(`${values.userFirstName}, что-то пошло не так!`);
                console.log('FAILED...', error);
            });
        },
    });

    const basicNavbarNav = document.getElementById("basic-navbar-nav");
    const basicBavbarNavButton = document.getElementById("basic-navbar-nav-button");

    if (basicNavbarNav.classList.contains('show')) {
        basicBavbarNavButton.click();
    } 

    return (
        <Form onSubmit={formik.handleSubmit}>
            
            <Form.Group controlId="formLastName">
                <Form.Label>{local.form_last_name_label}</Form.Label>
                <Form.Control 
                    type="text"
                    name="userLastName"
                    onChange={formik.handleChange}
                    value={formik.values.userLastName}
                />
                <Form.Text className="text-muted">
                    {formik.errors.userLastName ? `${formik.errors.userLastName}` : null}
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formFirstName">
                <Form.Label>{local.form_first_name_label}</Form.Label>
                <Form.Control 
                    type="text"
                    name="userFirstName"
                    onChange={formik.handleChange}
                    value={formik.values.userFirstName}
                />
                <Form.Text className="text-muted">
                    {formik.errors.userFirstName ? `${formik.errors.userFirstName}` : null}
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formPatronymic">
                <Form.Label>{local.form_patronymic_label}</Form.Label>
                <Form.Control 
                    type="text"
                    name="userPatronymic"
                    onChange={formik.handleChange}
                    value={formik.values.userPatronymic}
                />
                {/* <Form.Text className="text-muted">
                    {formik.errors.userPatronymic ? `${formik.errors.userPatronymic}` : null}
                </Form.Text> */}
            </Form.Group>

            <Form.Group controlId="formBasicNumber">
                <Form.Label>{local.form_number_label}</Form.Label>
                <Form.Control 
                    type='tel' 
                    name="userNumber"
                    placeholder={local.form_number_info}
                    onChange={formik.handleChange}
                    value={formik.values.userNumber}
                />
                <Form.Text className="text-muted">
                    {formik.errors.userNumber ? `${formik.errors.userNumber}` : null}
                    {/* {local.form_number_info} */}
                </Form.Text>
            </Form.Group>
            
            <Form.Group controlId="formEmail">
                <Form.Label>{local.form_email_label}</Form.Label>
                <Form.Control 
                    type="email" 
                    name="userEmail"
                    placeholder={local.form_email_info}
                    onChange={formik.handleChange}
                    value={formik.values.userEmail}
                />
                <Form.Text className="text-muted">
                    {formik.errors.userEmail ? `${formik.errors.userEmail}` : null}
                    {/* {local.form_number_info} */}
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formMessage">
                <Form.Label>{local.form_user_message_label}</Form.Label>
                <Form.Control 
                    type="text" 
                    name="userMessage"
                    onChange={formik.handleChange}
                    value={formik.values.userMessage}
                />
                <Form.Text className="text-muted">
                    {local.errors.userMessage_null}
                </Form.Text>
            </Form.Group>

            <div style={{textAlign:'center'}}>
                <Button className="button_green_color" type="submit">
                    {local.form_button}
                </Button>
            </div>
        </Form>
  );
};

export default OrderCallForm;