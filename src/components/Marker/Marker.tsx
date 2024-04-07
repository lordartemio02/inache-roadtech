import { IMarker } from "./Marker.interface";

const Marker = ({
  id,
}: IMarker) => {
  return (
    <>
      <img
        data-id={id}
        className="inline-block size-[30px] rounded-full ring-2 ring-white"
        src='src/assets/images/Diamond.png'
        alt={`pin`}
        width="30"
        height="30"
      />
    </>
  );
}
export default Marker;
