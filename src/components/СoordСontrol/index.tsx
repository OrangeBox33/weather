import { Form, Input, Button, InputNumber } from "antd";
import { FC } from "react";
import styles from "./style.module.css";
import "antd/dist/antd.css";
import { useTypedDispatch } from "../../store/hooks";
import { getWeather } from "../../store/slices/forecast";
import { saveCoord } from "../../store/slices/coord";
import { CoordName } from "../../types/coord";

interface iProps {
  lat: number;
  lon: number;
}

export const CoordControl: FC<iProps> = ({ lat, lon }) => {
  const dispatch = useTypedDispatch();
  const [form] = Form.useForm();

  const onSaveCoord = (formData: CoordName) => {
    dispatch(saveCoord(formData));
    form.resetFields();
  };

  const onGetForecast = () => {
    const { lat, lon } = form.getFieldsValue();
    dispatch(getWeather(lat, lon));
  };

  return (
    <div className={styles.container}>
      <Form
        name="coord"
        form={form}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 17 }}
        initialValues={{ lat, lon }}
        autoComplete="off"
        onFinish={onSaveCoord}
      >
        <Form.Item
          label="Latitude"
          name="lat"
          rules={[{ required: true, message: "Please input Latitude!" }]}
        >
          <InputNumber controls={false} style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Longitude"
          name="lon"
          rules={[{ required: true, message: "Please input Longitude!" }]}
        >
          <InputNumber controls={false} style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 3, span: 10 }}>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
          <Button onClick={onGetForecast}>Forecast!</Button>
        </Form.Item>
      </Form>
    </div>
  );
};
