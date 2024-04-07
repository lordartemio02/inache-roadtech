import { IMarker } from "./Marker.interface";

// const prepareMarkerContent = (type: string) => {
//   switch (type) {
//     case value:
      
//       break;
  
//     default:
//       break;
//   }
// };

const Marker = ({
  id,
  imageSrc,
  type,
}: IMarker) => {
  return (
    <>
      <img
        data-id={id}
        className="inline-block size-[30px] rounded-full ring-2 ring-white"
        src='src/assets/images/Diamond.png'
        alt={`pin-${type}`}
        width="30"
        height="30"
      />
      Kjsdvnkjdfkv
    </>

  );
};

export default Marker;