import React from "react";

import Paragraph from "./Paragraph";

export default {
  title: "Atoms/Paragraph",
  component: Paragraph,
};

const Template = (args) => <Paragraph {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Lorem ipsum",
};

export const Big = Template.bind({});
Big.args = {
  children: "Lorem ipsum",
  style: "big",
};

export const NBold = Template.bind({});
NBold.args = {
  children: "Lorem ipsum",
  style: "nBold",
};

export const Small = Template.bind({});
Small.args = {
  children: "Lorem ipsum",
  style: "small",
};

export const ESmall = Template.bind({});
ESmall.args = {
  children: "Lorem ipsum",
  style: "eSmall",
};
