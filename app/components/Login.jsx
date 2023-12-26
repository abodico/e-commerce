//This component is used for login/register or any other form signing page
import { Button, ConfigProvider, Form } from "antd"
import Image from "next/image"
import Link from "next/link"
import FormInput from "./FormInput"

const Login = (props) => {
  return (
    <div className="flex h-screen w-screen">
      <div >
        <Image alt="img" src={props.image} width={1000} height={1000} style={{
          width: "100%",
          height: "100%",
        }}/>
      </div>
      <div className="py-32 px-24 w-1/2">
        <div className="py-8 ">
          <h1 className="text-3xl text-maingold font-semibold">{props.title}</h1>
          <p className="text-base text-lightgray font-light">{props.text}</p>
        </div>
        <ConfigProvider 
          theme={{
            components: {
              Form: {
                labelColor: '#f5cd47',
                labelRequiredMarkColor: 'lightgray'
              },
            },
          }}>
          <Form layout="vertical" form={props.form} onFinish={props.onFinish}>
            {props.data.map((item, ind) => {
              return (
                <FormInput key={ind} input={item.input} formItemProps={item.formItemProps}/>
              )
            })}
            <Button className="w-full h-12 bg-maingold text-white border-none" htmlType="submit">
              {props.btnText}
            </Button>
          </Form>
        </ConfigProvider>
        {/* FORM TAIL */}
        <div className="flex justify-between items-center mt-4">
          {props.tail.map((item, ind) => (
            <Link key={ind} href={item.linkUrl} className="text-sm text-lightgray hover:text-white">
              {item.linkText}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Login