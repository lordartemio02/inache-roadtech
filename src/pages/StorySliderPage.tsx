import { useNavigate } from "react-router-dom";
import { CloseIcon, HeartIcon } from "../assets/icons";
import Layout from "../components/Layout";
import ProgressBar from "../components/ProgressBar";

const StorySliderPage = () => {
  const nav = useNavigate();

  // const [like, setLike] = useState(false);

  const goBack = () => {
    nav(-1);
  };

  // const onClickLike = () => {
  //   setLike((prev) => !prev);
  // };

  return (
    <Layout hideFooter>
      <div className="h-[calc(100vh-100px)] w-full relative">
        <img
          className="h-[calc(100vh-100px)] w-full object-cover"
          src="https://cms.russpass.ru/v1/file/65420b82d2b6381af066dba8"
        />
        <div className="absolute top-5 left-4 right-4">
          <ProgressBar />
          <div className="mt-4 flex flex-row justify-between items-center">
            <div className="flex flex-row gap-3 items-center">
              <img
                className="inline-block size-7 rounded-full"
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                alt="Image Description"
              />
              <p className="text-[14px] leading-4 text-white">Анна Ахматова</p>
            </div>
            <CloseIcon className="w-5 h-5" onClick={goBack} />
          </div>
        </div>
        <div className="absolute bottom-6 px-3 flex flex-row justify-between w-full">
          <p className="max-w-[290px] break-words line-clamp-3 text-white">
            Живописное и воодушевляющее место, где стоит побывать каждому и еще
            какой-то текст, чтобы поместить в три строки
          </p>
          <HeartIcon className={`min-w-[24px] min-h-[24px]`} />
        </div>
      </div>
    </Layout>
  );
};

export default StorySliderPage;
