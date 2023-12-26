import { Checkbox, DatePicker, Form, Input, InputNumber, Select } from "antd"

const FormInput = ({input, formItemProps}) => {
  return (
    <Form.Item {...formItemProps}> {
      input.type === "text" ? (
        <Input
          {...input}
        />
      ): input.type === "textarea" ? (
        <Input.TextArea
          {...input}
        />
      ): input.type === "select" ? (
        <Select
          {...input}
          labelInValue
          showSearch
          suffixIcon={null}
        />
      ) : input.type === "date" ? (
        <DatePicker
          {...input}
          allowClear
          placeholder="YYYY-MM-DD"
        />
      ) : input.type === "number" ? (
        <InputNumber
          {...input}
        /> 
      ) : input.type === "checkbox" ? (
        <Checkbox
          {...input}
        />
      ) : null
    }
    </Form.Item>
  )
}

export default FormInput