import { useNavigate, useParams } from "react-router-dom";
import { PluseIcon } from "../assets/icons";
import Layout from "../components/Layout";
import { Loader } from "../components/Loader";
import { useGetRouteByIdQuery } from "../store/api/routesApi";

const InfoLocationPage = () => {
  const nav = useNavigate();
  const { id } = useParams();
  const { data, isLoading } = useGetRouteByIdQuery({ id });

  return (
    <Layout hideFooter>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="flex flex-row overscroll-auto whitespace-nowrap gap-3">
            <div className="relative">
              <img
                onClick={() => nav("/")}
                className="inline-block size-12 rounded-full ring-2 ring-white z-[4]"
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                alt="Image Description"
              />
              <div className="right-0 bottom-0 absolute">
                <PluseIcon />
              </div>
            </div>
            <img
              className="inline-block size-12 rounded-full ring-2 ring-white z-[4]"
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
              alt="Image Description"
            />
            <img
              className="inline-block size-12 rounded-full ring-2 ring-white z-[4]"
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
              alt="Image Description"
            />
            <img
              className="inline-block size-12 rounded-full ring-2 ring-white z-[4]"
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
              alt="Image Description"
            />
            <img
              className="inline-block size-12 rounded-full ring-2 ring-white z-[4]"
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
              alt="Image Description"
            />
            <img
              className="inline-block size-12 rounded-full ring-2 ring-white z-[4]"
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
              alt="Image Description"
            />
            <img
              className="inline-block size-12 rounded-full ring-2 ring-white z-[4]"
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
              alt="Image Description"
            />
            <img
              className="inline-block size-12 rounded-full ring-2 ring-white z-[4]"
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
              alt="Image Description"
            />
            <img
              className="inline-block size-12 rounded-full ring-2 ring-white z-[4]"
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
              alt="Image Description"
            />
            <img
              className="inline-block size-12 rounded-full ring-2 ring-white z-[4]"
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
              alt="Image Description"
            />
          </div>
          <div className="rounded-32">
            <img src={} alt="" />
          </div>
        </>
      )}

      {/* <input
        accept="image/*"
        className={"hidden"}
        id="contained-button-file"
        type="file"
        onChange={handlerFile}
      />
      <label htmlFor="contained-button-file"></label>
      {file ? <img src={window.URL.createObjectURL(file)} alt={"img"} /> : null} */}
    </Layout>
  );
};

export default InfoLocationPage;
