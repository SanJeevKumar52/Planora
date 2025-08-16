import { Button, Form, Input } from "antd";
import WelcomeContent from "../common/welcome-content";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import cookies from "js-cookie";
import { loginUser } from "../../../api-services/users-service";

function LoginPage() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values:never) => {
    try {
      setLoading(true);
      const response = await loginUser(values);
      alert("✅ Login successful!");
      cookies.set("token", response.token);
      navigate("/");
    } catch (error) {
      alert("❌ Login failed. Please check your credentials.");
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="col-span-1 lg:flex hidden">
        <WelcomeContent />
      </div>
      <div className="h-screen flex items-center justify-center">
        <Form
          className="flex flex-col gap-5 w-96"
          layout="vertical"
          onFinish={onFinish}
        >
          <h1 className="text-2xl font-bold text-gray-600">
            Login your account
          </h1>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Please enter a valid email" },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Button type="primary" htmlType="submit" block loading={loading}>
            Login
          </Button>

          <Link to="/register">Don't have an account? Register</Link>
        </Form>
      </div>
    </div>
  );
}

export default LoginPage;
