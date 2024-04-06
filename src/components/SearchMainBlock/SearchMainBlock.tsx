import { FC } from "react";
import { ChildrenProps } from "../../interfaces/ChildrenProps";

const SearchMainBlock: FC<ChildrenProps> = ({ children }) => {
  return (
    <div className="relative z-[200] p-4 rounded-20 w-full bg-natural-700 flex flex-col gap-4">
      {children}
    </div>
  );
};

export default SearchMainBlock;
