import React, { Component } from "react";
import { Form as AntdForm } from "@ant-design/compatible";
import "@ant-design/compatible/assets/index.css";
import * as AntdFormInterface from "antd/es/form";
import ClassNames from "classnames";

import "./style";

const FormItem = AntdForm.Item;

class Form extends Component<AntdFormInterface.FormProps> {
  static Item: typeof FormItem = FormItem;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static create: typeof AntdForm.create = AntdForm.create;

  render() {
    return <AntdForm className={ClassNames("fl-form", this.props.className)} {...this.props} />;
  }
}

export default Form;
