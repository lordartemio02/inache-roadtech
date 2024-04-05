import CardRoad from "../components/CardRoad";
import Layout from "../components/Layout";
import data from "../mock/cardsList.json";

const RoadPage = () => {
  const handleClick = () => {};

  const handleLike = () => {};

  return (
    <Layout>
      <CardRoad
        {...data[0]}
        onClick={handleClick}
        onLike={handleLike}
        isLike={false}
      />
    </Layout>
  );
};

export default RoadPage;
