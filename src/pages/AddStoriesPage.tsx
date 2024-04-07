import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";

const AddStoriesPage = () => {
  const nav = useNavigate();
  const { id } = useParams();
  const [file, setFile] = useState<any>(null);

  // const [like, setLike] = useState(false);

  // const goBack = () => {
  //   nav(-1);
  // };

  // const onClickLike = () => {
  //   setLike((prev) => !prev);
  // };

  const handlerFile = (e: any) => {
    setFile(e.target.files[0]);
  };

  return (
    <Layout hideFooter>
      <div className="flex flex-row overscroll-y-auto">
        <div className="flex flex-row overscroll-auto whitespace-nowrap">
          <img
            onClick={() => nav(`/story-create/${id}`)}
            className="inline-block size-7 rounded-full ring-2 ring-white z-[4]"
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
            alt="Image Description"
          />
        </div>
        <input
          accept="image/*"
          className={"hidden"}
          id="contained-button-file"
          type="file"
          onChange={handlerFile}
        />
        <label htmlFor="contained-button-file">
          <img
            className="inline-block size-7 rounded-full ring-2 ring-white z-[4]"
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
            alt="Image Description"
          />
        </label>
        {file ? (
          <img src={window.URL.createObjectURL(file)} alt={"img"} />
        ) : null}
      </div>
    </Layout>
  );
};

export default AddStoriesPage;
