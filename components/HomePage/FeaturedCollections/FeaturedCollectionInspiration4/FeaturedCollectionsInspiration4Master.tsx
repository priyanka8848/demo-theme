import React from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { selectWishlist } from '../../../../store/slices/wishlist-slices/wishlist-local-slice';
import useFeaturedCollections from '../../../../hooks/HomePageHooks/useFeaturedCollections';
import useAddToCartHook from '../../../../hooks/CartPageHook/useAddToCart';
import ErrorImage from '../../../../public/assets/images/error-icon.png';
import FeaturedCollectionsInspiration4Loading from './FeaturedCollectionsInspiration4Loading';
import FeaturedCollectionsInspiration4Data from './FeaturedCollectionsInspiration4Data';

const FeaturedCollectionsInspiration4Master = () => {
  const { allTagsData, fetchDisplayTagsDataFunction, isLoading, errorMessage } = useFeaturedCollections();
  const { addToCartItem, getPartyName } = useAddToCartHook();
  const wishlistData = useSelector(selectWishlist).items;

  if (isLoading) {
    return <FeaturedCollectionsInspiration4Loading />;
  }

  if (allTagsData && allTagsData?.length > 0) {
    return (
      <FeaturedCollectionsInspiration4Data
        data={allTagsData}
        addToCartItem={addToCartItem}
        getPartyName={getPartyName}
        wishlistData={wishlistData}
      />
    );
  }
  if (errorMessage) {
    return (
      <div className="p-3 d-flex justify-content-center align-items-center" style={{ fontSize: '40px' }}>
        <Image src={ErrorImage} width={250} height={250} alt="Error Image" />
      </div>
    );
  }

  return <></>;
};
export default FeaturedCollectionsInspiration4Master;
