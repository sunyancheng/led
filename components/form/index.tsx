import React, { Component } from "react";
import { Form as AntdForm } from "antd";
import * as AntdFormInterface from "antd/es/form";
import ClassNames from "classnames";

import "./style";

const FormItem = AntdForm.Item;

const useForm = AntdForm.useForm;

class Form extends Component<AntdFormInterface.FormProps> {
  static Item: typeof FormItem = FormItem;

  static useForm: typeof useForm = useForm;

  render() {
    const { className, ...props } = this.props;
    return <AntdForm className={ClassNames("fl-form", className)} {...props} />;
  }
}

export default Form;
