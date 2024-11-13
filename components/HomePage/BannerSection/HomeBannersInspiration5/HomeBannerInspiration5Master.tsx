import Image from 'next/image';
import React from 'react';
import HomeBannerInspiration4Loading from './HomeBannerInspiration5Loading';
import useBanner from '../../../../hooks/HomePageHooks/useHomeBanners';
import ErrorImage from '../../../../public/assets/images/error-icon.png';
import HomeBannerInspiration5 from './HomeBannerInspiration5';

function HomeBannerInspiration5Master() {
  const { bannersList, isLoading, errorMessage } = useBanner();

  if (isLoading) {
    return <HomeBannerInspiration4Loading />;
  } else if (bannersList?.length > 0) {
    return <HomeBannerInspiration5 bannersList={bannersList} />;
  } else if (errorMessage) {
    return (
      <div className="p-3 d-flex justify-content-center align-items-center" style={{ fontSize: '40px' }}>
        <Image src={ErrorImage} width={250} height={250} alt="Error Image" />
      </div>
    );
  }
  return <></>;
}

export default HomeBannerInspiration5Master;
