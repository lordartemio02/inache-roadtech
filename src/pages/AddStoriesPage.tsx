import { useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import Layout from "../components/Layout";
import TextArea from "../components/TextArea";
import { useCreateStoryMutation } from "../store/api/storiesApi";
const { VITE_APP_BASE_TOKEN } = import.meta.env;

const AddStoriesPage = () => {
  const { id } = useParams();
  const [value, setValue] = useState("");
  const [file, setFile] = useState<any>(null);
  const [createStory] = useCreateStoryMutation();

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

  const onSendFile = async () => {
    try {
      await createStory({
        user_id: VITE_APP_BASE_TOKEN,
        point_id: id,
        description: value,
        image: file,
      }).unwrap();
    } catch (error) {}
  };

  return (
    <Layout hideFooter>
      <div className="px-4">
        <div className="flex flex-row justify-between mb-4">
          <div className="w-12 h-14 bg-natural-700 rounded-[4px]">
            <input
              accept="image/*"
              className={"hidden"}
              id="contained-button-file"
              type="file"
              onChange={handlerFile}
            />
            <label htmlFor="contained-button-file rounded-[4px]">
              {file ? (
                <img
                  className="inline-block w-12 h-14 rounded-[4px] z-[4]"
                  src={window.URL.createObjectURL(file)}
                  alt="Image Description"
                />
              ) : null}
            </label>
          </div>
          <label htmlFor="contained-button-file">
            {file ? null : (
              <div
                className={"flex flex-row justify-between items-start"}
                onClick={() => {}}>
                + Добавить фото
              </div>
            )}
          </label>
        </div>
        {/* {file ? (
          <img src={window.URL.createObjectURL(file)} alt={"img"} />
        ) : null} */}
        <p className="text-[12px] mb-1">Комментарий</p>
        <TextArea
          placeholder="Введите описание"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          className={"mb-12"}
        />
        <Button className="w-full" onClick={onSendFile}>
          Опубликовать
        </Button>
      </div>
    </Layout>
  );
};

export default AddStoriesPage;
