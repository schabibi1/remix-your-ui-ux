import Mail from "./Mail";
import Phone from "./Phone";
import Twitter from "./Twitter";

export type IconType = string;

export type Icons = {
  [key: IconType]: () => JSX.Element;
};

const IconComponents: Icons = {
  twitter: Twitter,
  mail: Mail,
  phone: Phone,
};

const DynamicIcon = ({ type }: { type: IconType }) => {
  if (typeof IconComponents[type] !== "undefined") {
    const Component = IconComponents[type];
    return <Component />;
  }
  return null;
};

export default DynamicIcon;