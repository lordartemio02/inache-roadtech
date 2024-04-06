import { ChevronLeft } from "../assets/icons";
import Button from "../components/Button";
import CarouselStories from "../components/CarouselStories";
import Layout from "../components/Layout";
import data from "../mock/cardsList.json";

const StoryLocationPage = () => {
  return (
    <Layout hideFooter>
      <div className="bg-story h-[546px]">
        <div className="flex flex-row justify-between p-4">
          <Button
            type="outline"
            className="!py-1 !px-4"
            leftIcon={<ChevronLeft />}>
            На карту
          </Button>
          <Button type="outline" className="!py-1 !px-4">
            Все отзывы
          </Button>
        </div>
      </div>
      <div className="fixed w-full bottom-4 h-[394px]">
        <CarouselStories images={data[0].images} />
      </div>
    </Layout>
  );
};

export default StoryLocationPage;
