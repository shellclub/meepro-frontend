"use client";

import { Form, InputGroup } from "react-bootstrap";
import * as formik from "formik";
import * as yup from "yup";
import { useRef } from "react";

const CommentReplying = ({ index, onFormSubmit }: any) => {
  const { Formik } = formik;
  const formikRef = useRef<any>(null);

  const schema = yup.object().shape({
    reply: yup.string().required(),
  });

  const onSubmit = (data: any) => {
    onFormSubmit(data, index);

    // Reset form after successful submission
    if (formikRef.current) {
      formikRef.current.resetForm();
    }
  };

  return (
    <>
      <Formik
        innerRef={formikRef}
        validationSchema={schema}
        onSubmit={onSubmit}
        initialValues={{
          reply: "",
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form
            noValidate
            onSubmit={handleSubmit}
            className="gi-blog-form"
            action="#"
          >
            <div className="gi-text-leave">
              <Form.Group>
                <InputGroup hasValidation>
                  <Form.Control
                    as="textarea"
                    name="reply"
                    value={values.reply}
                    onChange={handleChange}
                    placeholder="Message"
                    required
                    rows={3}
                    isInvalid={!!errors.reply}
                  />
                  <Form.Control.Feedback
                    style={{ marginBottom: "10px" }}
                    type="invalid"
                  >
                    Please Enter your reply
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <button
                style={{ float: "right" }}
                type="submit"
                className="gi-btn-2 mt-2"
              >
                Reply
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default CommentReplying;
