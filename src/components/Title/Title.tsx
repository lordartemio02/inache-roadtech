import { FC } from 'react';

import { ITitle } from './Title.interface';

const Title: FC<ITitle> = ({ content }) => {
  return <h1 className='text-pc-h2 font-protoGrotesk font-normal'>{content}</h1>;
};

export default Title;
