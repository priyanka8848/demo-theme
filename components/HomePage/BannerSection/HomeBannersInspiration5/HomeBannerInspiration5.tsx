import React from 'react';
import Image from 'next/image';

function HomeBannerInspiration5({ bannersList = [] }: any) {
  const myLoader = ({ src, width, quality }: any) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {bannersList?.map((item: any, i: number) => (
          <div className="col-md-6" key={i}>
            <Image
              src={item?.img}
              alt="Banner Images"
              loading="eager"
              priority={true}
              width={850}
              height={779}
              loader={myLoader}
              style={{ width: '100%' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeBannerInspiration5;
