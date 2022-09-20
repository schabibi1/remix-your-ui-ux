import Mail from "./Mail";
import Phone from "./Phone";
import Twitter from "./Twitter";

interface IconType {
  type: {
    [key: string]: JSX.Element[] | JSX.Element;
  }
}

const Components = {
  twitter: Twitter,
  mail: Mail,
  phone: Phone,
};

const DynamicIcon = ({ type }: IconType) => {
  if (typeof Components[type] !== "undefined") {
    const Component = Components[type];
    return <Component />;
  }
  return null;
};

export default DynamicIcon;