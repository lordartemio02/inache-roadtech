import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const nav = useNavigate();
  const media = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  const handleNavigate = (path: string) => {
    nav(path);
  };

  return <div></div>;
};
export default Footer;
