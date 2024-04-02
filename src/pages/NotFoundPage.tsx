import { useNavigate } from "react-router-dom";
import NotFoundImg from "../assets/svg/NotFoundImg";
import { BasicButton } from "../components/BasicButton";
import Header from "../components/Header";
import Layout from "../components/Layout";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Layout title="Страница не найдена">
      <Header />
      <div className="flex flex-col items-center px-16">
        <p className="text-64 font-bold mb-30 md:mb-60">404</p>
        <NotFoundImg />
        <p className="text-24 mb-20">Воу! А тут ничего нет ={")"}</p>
        <p className="text-extra-large max-w-552 text-center mb-30">
          Если вы отсканировали QR-код вашего заказа, не удивляйтесь, что тут
          ничего нет. Этот код нужен только для специалиста пункта выдачи!
          Покажите его, когда будете забирать заказ!
        </p>
        <BasicButton
          onClick={() => navigate("/")}
          text="Перейти на главную страницу"
          className="hover:bg-buttons-hoverBlue hover:border-transparent text-normal-bold py-16 !rounded-16 mb-30"
        />
      </div>
    </Layout>
  );
};

export default NotFoundPage;
