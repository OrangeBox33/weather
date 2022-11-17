import { Button, Form, Input } from "antd";
import { FC } from "react";
import styles from "./style.module.css";
import "antd/dist/antd.css";

interface iProps {
  name: string;
  onSave: (arg: { name: string }) => void;
}

export const CoordEdition: FC<iProps> = ({ name, onSave }) => {
  return (
    <div className={styles.container}>
      <Form
        name="coord"
        layout="inline"
        // labelCol={{ span: 3 }}
        // wrapperCol={{ span: 10 }}
        initialValues={{ name }}
        autoComplete="off"
        onFinish={onSave}
      >
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Please input name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
