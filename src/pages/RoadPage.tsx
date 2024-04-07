import { useNavigate, useParams } from "react-router-dom";
import CardRoad from "../components/CardRoad";
import Layout from "../components/Layout";
import {
  useGetRouteByIdQuery,
  useSaveRouteMutation,
} from "../store/api/routesApi";

const RoadPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetRouteByIdQuery({ id });
  const [saveRoute] = useSaveRouteMutation();
  const nav = useNavigate();

  const handleClick = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      if (token) {
        await saveRoute({ id }).unwrap();
        nav(`/added-road/${id}`);
      } else {
        nav("/login");
      }
    } catch (error) {}
  };

  const handleLike = () => {};

  return (
    <Layout>
      {isLoading ? null : data ? (
        <CardRoad
          {...data}
          onClick={handleClick}
          onLike={handleLike}
          isLike={false}
        />
      ) : null}
    </Layout>
  );
};

export default RoadPage;
