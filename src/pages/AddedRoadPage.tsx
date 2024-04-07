import { useParams } from "react-router-dom";
import { UnionIcon } from "../assets/icons";
import roadAdd from "../assets/images/RoadAdd.png";
import Button from "../components/Button";
import Layout from "../components/Layout";
import { Loader } from "../components/Loader";
import { useGetRouteByIdQuery } from "../store/api/routesApi";

const AddedRoadPage = () => {
  // const nav = useNavigate();
  const { id } = useParams();
  const { data, isLoading } = useGetRouteByIdQuery({ id });

  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="px-4">
          <div className="flex flex-row justify-between items-center bg-[#F9F9F9] pl-6 mb-4">
            <p className="flex flex-col gap-1 text-[24px] font-bold">
              <span>Маршрут</span>
              <span>добавлен</span>
            </p>
            <img src={roadAdd} alt="road add" />
          </div>
          <div className="flex flex-col rounded-20 p-4 bg-[#F9F9F9] mb-4">
            <p className="text-[14px]">Воскресенье</p>
            <p className="text-[16px] font-bold mb-4">
              с 7 по {7 + (Number(data?.days_count) || 0)} апреля
            </p>
            <p className="text-[14px] text-[#707070]">Город</p>
            <p className="text-[14px] mb-3">{data?.city}</p>
            <p className="text-[14px] text-[#707070]">Точка старта маршрута</p>
            <p className="text-[14px] mb-3">{data?.points[0].address}</p>
            <p className="text-[14px] text-[#707070]">Номер маршрута</p>
            <p className="text-[14px] mb-4">3</p>
            <Button onClick={() => {}}>Добавить в календарь</Button>
          </div>
          <div className="flex flex-col rounded-20 p-4 mb-4 bg-[#F9F9F9]">
            <div className="flex flex-row justify-between items-center">
              <p className="text-[20px] font-bold">Начисление бонусов</p>
              <div className="flex flex-row items-center gap-1 justify-center rounded-8 p-[6px] bg-[#0074701F]">
                <span>+ 125</span>
                <UnionIcon />
              </div>
            </div>
            <p>В течение 3 дней после прохождения маршрута</p>
          </div>
          <p className="text-[16px] font-bold mb-2">Изменились планы?</p>
          <p className="text-[14px] mb-4">
            Перенести или отменить маршрут можно в мои планы поездки или
            по телефону +7 (499) 000-00-00
          </p>
          <Button type="secondary" className="mb-2 w-full">
            Новый маршрут
          </Button>
          <Button type="secondary2" className="w-full mb-4">
            Мои планы
          </Button>
        </div>
      )}
    </Layout>
  );
};

export default AddedRoadPage;
