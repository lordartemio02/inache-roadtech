import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "../assets/icons";
import Button from "../components/Button";
import CarouselStories from "../components/CarouselStories";
import CircleImage from "../components/CircleImage";
import Layout from "../components/Layout";
import data from "../mock/cardsList.json";

const StoryLocationPage = () => {
  // const { data: datas, isLoading } = useGetPointByIdQuery({ id });
  const [_, setCurrentIndex] = useState(1);
  const nav = useNavigate();

  const onChangeIndex = (index: number) => {
    setCurrentIndex(index);
  };

  const goBack = () => {
    nav(-1);
  };

  return (
    <Layout hideFooter>
      <div
        className={`bg-[url("https://penza-online.ru/upload/articles/2023/643d24a6c2e11.jpeg")] h-[546px] bg-center`}>
        <div className="flex flex-row justify-between p-4">
          <Button
            type="outline"
            className="!py-1 !px-4"
            onClick={goBack}
            leftIcon={<ChevronLeft />}>
            Назад
          </Button>
        </div>
      </div>
      <div className="fixed w-full bottom-4 h-[394px]">
        <div
          className="absolute -top-20 left-9 flex flex-col items-center"
          onClick={() => nav("/story/info")}>
          <CircleImage size="h-10 w-10" img={data[0].images[0].avatar || ""} />
          <div className="bg-white w-[1px] h-28"></div>
        </div>
        <CarouselStories
          onChangeIndex={onChangeIndex}
          images={data[0].images}
        />
      </div>
    </Layout>
  );
};

export default StoryLocationPage;
