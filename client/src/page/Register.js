import axios from "axios";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const saveForm = async (data) => {
    console.log(data);

    try {
      const apiUrl = `${process.env.REACT_APP_AUTH_API}/register`;

      const response = await axios.post(apiUrl, data);

      if (response.status === 200) {
        const data = await response.data;
        console.log(data);
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col xs="12">
            <h1>Register</h1>
          </Col>
          <form name="loginForm" onSubmit={handleSubmit(saveForm)}>
            <Col className="py-3">
              <label>Email</label>
              <input {...register("email")} />
            </Col>
            <Col className="py-3">
              <label>Password</label>
              <input type="password" {...register("password")} />
            </Col>
            <Col className="py-3">
              <input type="submit" value="Register" />
            </Col>
          </form>
        </Row>
      </Container>
    </>
  );
};

export default Register;