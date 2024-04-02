import Header from "../components/Header";
import Layout from "../components/Layout";

const NotFoundPage = () => {
  return (
    <Layout>
      <Header />
      <div className="flex flex-col items-center px-16">
        <p className="text-64 font-bold mb-30 md:mb-60">404</p>
        <p className="text-24 mb-20">Воу! А тут ничего нет ={")"}</p>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
