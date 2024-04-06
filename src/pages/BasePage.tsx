import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AirplaneIcon,
  CafeIcon,
  CameraIcon,
  HotelIcon,
  MuseumIcon,
  RoadIcon,
  TrainIcon,
} from "../assets/icons";
import point from "../assets/images/Point.png";
import Banner from "../components/Banner";
import Button from "../components/Button";
import CarouselMain from "../components/CarouselMain";
import CustomDataPicker from "../components/CustomDataPicker";
import Input from "../components/Input";
import Layout from "../components/Layout";
import SearchMainBlock from "../components/SearchMainBlock";
import { TypesRoadSearch } from "../interfaces/TypesRoadSearch";
import data from "../mock/cardsList.json";
import { useGetPopularRoutesQuery } from "../store/api/routesApi";

const BasePage = () => {
  const [dateRange, setDateRange] = useState<(Date | null)[]>([null, null]);
  const [startDate, endDate] = dateRange;
  const datas = useGetPopularRoutesQuery({});
  // const [searchValue, setSearchValue] = useState<string>("");
  const nav = useNavigate();

  const [typeSelected, setTypeSelected] = useState<string>(
    TypesRoadSearch.MUSEUM
  );

  const onCLickType = (type: TypesRoadSearch) => {
    setTypeSelected(type);
  };

  const onSearch = () => {
    nav("/road");
  };

  console.log("====================================");
  console.log(datas);
  console.log("====================================");

  return (
    <Layout hideFooter>
      <div className={`bg-main mb-5`}>
        <div className="relative w-full">
          <div className="flex flex-col bg-white rounded-b-20 pb-2">
            <div className="flex flex-row gap-8 justify-center">
              <div
                onClick={() => onCLickType(TypesRoadSearch.MUSEUM)}
                className={`${
                  typeSelected === TypesRoadSearch.MUSEUM ? "bg-yellow-100" : ""
                }  rounded-12 p-2 flex flex-col items-center justify-center`}>
                <MuseumIcon />
                <span className="text-[9px]">Места</span>
              </div>
              <div
                className={` rounded-12 p-2 flex flex-col items-center justify-center`}>
                <CameraIcon className="h-6 w-6" />
                <span className="text-[9px]">Экскурсии</span>
              </div>
              <div
                className={` rounded-12 p-2 flex flex-col items-center justify-center`}>
                <HotelIcon className="h-6 w-6" />
                <span className="text-[9px]">Жилье</span>
              </div>
              <div
                className={` rounded-12 p-2 flex flex-col items-center justify-center`}>
                <CafeIcon className="h-6 w-6" />
                <span className="text-[9px]">Рестораны</span>
              </div>
            </div>

            <div className="flex flex-row gap-8 justify-center">
              <div
                className={` rounded-12 p-2 flex flex-col items-center justify-center`}>
                <AirplaneIcon className="h-6 w-6" />
                <span className="text-[9px]">Авиа</span>
              </div>
              <div
                className={` rounded-12 p-2 flex flex-col items-center justify-center`}>
                <TrainIcon className="h-6 w-6" />
                <span className="text-[9px]">Ж/д</span>
              </div>
              <div
                onClick={() => onCLickType(TypesRoadSearch.ROAD)}
                className={`${
                  typeSelected === TypesRoadSearch.ROAD ? "bg-yellow-100" : ""
                }  rounded-12 px-1 flex flex-col items-center justify-center`}>
                <RoadIcon />
                <span className="text-[9px]">Маршруты</span>
              </div>
            </div>
          </div>
        </div>
        <div className="pl-4 my-5">
          <CarouselMain images={data[0].images} />
        </div>
        <div className="my-5 px-4">
          <Banner
            title="Маршруты"
            desc="Популярные маршруты и планировщик путешествий: гулять это интересно!"
            img={point}
          />
        </div>

        <SearchMainBlock>
          <Input placeholder="Найти маршрут" />
          <div className="col-span-3 w-full">
            <CustomDataPicker
              placeholderText="Дата"
              startDate={startDate}
              endDate={endDate}
              dateFormat="dd.MM"
              onChange={(update) => {
                setDateRange(update);
              }}
              selectsRange
            />
          </div>
          <Button type="primary" onClick={onSearch}>
            <span>Найти</span>
          </Button>
        </SearchMainBlock>
      </div>
    </Layout>
  );
};

export default BasePage;
