//This component is used for login/register or any other form signing page
import { Button, Form } from "antd"
import Image from "next/image"
import Link from "next/link"
import FormInput from "./FormInput"

const Login = (props) => {
  return (
    <div className="flex h-screen w-screen">
      <div>
        <Image alt="img" src={props.image} width={1000} height={1000} style={{
          width: "auto",
          height: "100%"
        }}/>
      </div>
      <div className="py-32 px-12">
        <div className="p-12">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
        </div>

        <Form layout="vertical" form={props.form} onFinish={props.onFinish}>
          {props.data.map((item, ind) => {
            return (
              <FormInput key={ind} input={item.input} formItemProps={item.formItemProps}/>
            )
          })}
          <Button className="w-full" htmlType="submit">
            {props.btnText}
          </Button>
        </Form>
        {/* FORM TAIL */}
        <div className="flex justify-between items-center">
          {props.tail.map((item, ind) => {
            <Link key={ind} href={item.linkUrl}>
              {item.linkText}
            </Link>
          })}
        </div>
      </div>
    </div>
  )
}

export default Login