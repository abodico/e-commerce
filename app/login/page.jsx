'use client'
import React from "react"
import Login from "../components/Login"
import { loginData, loginTail } from "./data"

const page = () => {
  return (
    <Login image="/images/img-10.jpg"
      title="Welcome!"
      text="Please login here"
      btnText="Login"
      data={loginData}
      tail={loginTail}
    />
  )
}

export default page