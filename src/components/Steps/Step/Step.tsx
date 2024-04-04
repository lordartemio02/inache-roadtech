import { FC } from 'react';

interface IStep {
  isActive: boolean;
}

const Step: FC<IStep> = ({ isActive }) => {
  const className = isActive ? 'bg-system-success' : 'bg-natural-600';

  return <div className={`w-full rounded-md h-1 ${className}`} />;
};

export default Step;
