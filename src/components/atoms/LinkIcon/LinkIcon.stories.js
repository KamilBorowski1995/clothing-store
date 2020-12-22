import React from "react";

import LinkIcon from "./LinkIcon";

export default {
  title: "Atoms/LinkIcon",
  component: LinkIcon,
};

const Template = (args) => <LinkIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Lista zakupów",
  icon: "card",
};

export const Sec = Template.bind({});
Sec.args = {
  children: "Zaloguj",
};
