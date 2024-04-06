// components/CustomImage.tsx

import Image from 'next/image';
import React from 'react';

type NewsImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const NewsImage: React.FC<NewsImageProps> = ({ src, alt, width, height }) => {
  const isExternal = src.startsWith('https://');

  if (isExternal) {
    // const imageUrl = encodeURIComponent(src);
    src = `/api/image-proxy?url=${src}`;
  }

  return <Image src={src} alt={alt} width={width} height={height} layout={'responsive'} objectFit={'scale-down'} />;
};

export default NewsImage;
