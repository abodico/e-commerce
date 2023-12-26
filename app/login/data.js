export const loginData = [
  {
    formItemProps: {
      name: "email",
      label: "Email Address",
      rules: [
        {required: true, message: "Please enter your email address"},
        {whitespace: true, message: "Email address can't be empty"},
      ]
    },
    input: {
      type: "text",
      className: "bg-white hover:border-lightgray focus:border-lightgray h-10",
    },
  },
  {
    formItemProps: {
      name: "password",
      label: "Password",
      rules: [
        {required: true, message: "Please enter your Password"},
        {whitespace: true, message: "Password can't be empty"},
      ]
    },
    input: {
      type: "text",
      className: "bg-white hover:border-lightgray focus:border-lightgray h-10",
    },
  },
];

export const loginTail = [
  {
    linkUrl: "/",
    linkText: "Create an account?"
  },
  {
    linkUrl: "/",
    linkText: "Forgot password?"
  }
];