import React, { useContext, useEffect, useState } from "react";
import { Button, Checkbox, Form, Input, Select, Spin } from "antd";
import { useParams, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import axios from "../utils/axios";

const validationSchema = Yup.object().shape({
  first_name: Yup.string()
    .required("Please input your first name!")
    .matches(
      /^[A-Za-z]+$/,
      "Please input a valid first name (only letters are allowed)"
    ),
  last_name: Yup.string()
    .required("Please input your first name!")
    .matches(
      /^[A-Za-z]+$/,
      "Please input a valid first name (only letters are allowed)"
    ),
  email: Yup.string()
    .email("Invalid email address")
    .required("Please input your email!"),
  gender: Yup.string().required("Please select your gender!"),
});

const yupSync = {
  async validator({ field }, value) {
    await validationSchema.validateSyncAt(field, { [field]: value });
  },
};

const UserForm = ({ isEdit, userID }) => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [form] = Form.useForm();
  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);
      const response = await axios.get(`/users/${id}`);
      console.log(response.data);
      console.log(isEdit);
      setUser(response.data);
      setIsLoading(false);
    };

    if (isEdit && id) {
      fetchUser();
    }
  }, [id, isEdit]);

  const onFinish = async (values) => {
    setIsLoading(true);
    try {
      if (isEdit) {
        await axios.put(`/users/${id}`, values);
      } else {
        const response = await axios.post("/users", values);
        console.log("New user added:", response.data);
      }
      navigate("/");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onFinishFailed = () => {
    console.log("submit failed");
  };

  console.log("user", user);

  if (isLoading) {
    return <Spin size="large" />;
  }
  return (
    <main className="userFormContainer">
      <Form
        form={form}
        name="basic"
        labelCol={{
          span: 8,
          style: { color: theme === "light" ? "black" : "white" },
        }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={user ? user : {}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item label="ID" name="id">
          <Input disabled />
        </Form.Item>
        <Form.Item label=" name" name="name" rules={[yupSync]}>
          <Input />
        </Form.Item>

        <Form.Item label="Last name" name="last_name" rules={[yupSync]}>
          <Input />
        </Form.Item>

        <Form.Item label="Email" name="email" rules={[yupSync]}>
          <Input />
        </Form.Item>

        <Form.Item label="Gender" name="gender" rules={[yupSync]}>
          <Select>
            <Select.Option value="Male">Male</Select.Option>
            <Select.Option value="Female">Female</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            {isEdit ? "Update" : "Submit"}
          </Button>
        </Form.Item>
      </Form>
    </main>
  );
};

export default UserForm;
