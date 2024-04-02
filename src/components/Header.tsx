import { useNavigate } from "react-router-dom";

const Header = () => {
  const nav = useNavigate();

  const handleNavigate = (path: string) => {
    nav(path);
  };

  return <div></div>;
};

export default Header;
