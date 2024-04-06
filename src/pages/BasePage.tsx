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
import Button from "../components/Button";
import CustomDataPicker from "../components/CustomDataPicker";
import Input from "../components/Input";
import Layout from "../components/Layout";
import SearchMainBlock from "../components/SearchMainBlock";
import { TypesRoadSearch } from "../interfaces/TypesRoadSearch";

const BasePage = () => {
  const [dateRange, setDateRange] = useState<(Date | null)[]>([null, null]);
  const [startDate, endDate] = dateRange;
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

  return (
    <Layout hideHeader>
      <div className="px-4">
        <h1 className="text-mobile-h1">
          Спланируйте идеальное путешествие с RUSSPASS
        </h1>
        <p className="text-mobile-subTitle mb-20">Москва</p>
        <div className="relative w-full">
          <div className="absolute z-[100] rounded-20 bg-natural-100 p-4 flex flex-row justify-around h-24 -top-14 w-full">
            <MuseumIcon
              onClick={() => onCLickType(TypesRoadSearch.MUSEUM)}
              className={
                typeSelected === TypesRoadSearch.MUSEUM
                  ? "fill-yellow-100 border-b border-b-yellow-100"
                  : ""
              }
            />
            <CameraIcon className="h-6 w-6" />
            <HotelIcon className="h-6 w-6" />
            <CafeIcon className="h-6 w-6" />
            <AirplaneIcon className="h-6 w-6" />
            <TrainIcon className="h-6 w-6" />
            <RoadIcon
              onClick={() => onCLickType(TypesRoadSearch.ROAD)}
              className={
                typeSelected === TypesRoadSearch.ROAD
                  ? "fill-yellow-100 border-b border-b-yellow-100"
                  : ""
              }
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
      </div>
    </Layout>
  );
};

export default BasePage;
