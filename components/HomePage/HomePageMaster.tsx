import HomeBannersInspiration1Master from './BannerSection/HomeBannersInspiration1/HomeBannersMaster';
import PersonalizedCategoriesInspiration1Master from './PersonalizedCategories/PersonalizedCategoriesInspiration1/PersonalizedCategoriesMaster';
import BrandsSectionInspiration1Master from './BrandSection/BrandsSectionInspiration1/BrandListingInspiration1Master';
import FeaturedCollectionsInspiration1Master from './FeaturedCollections/FeaturedCollectionInspiration1/FeaturedCollectionsInspiration1Master';
import style from '../../styles/components/home.module.scss';
import HomeBannerInspiration5Master from './BannerSection/HomeBannersInspiration5/HomeBannerInspiration5Master';
import PersonalizedCategoriesInspiration3Master from './PersonalizedCategories/PersonalizedCategoriesInspiration3/PersonalizedCategoriesInspiration3Master';
import BrandListingInspiration2Master from './BrandSection/BrandsSectionInspiration2/BrandListingInspiration2Master';
import FeaturedCollectionsInspiration4Master from './FeaturedCollections/FeaturedCollectionInspiration4/FeaturedCollectionsInspiration4Master';

const HomePageMaster = () => {
  return (
    <>
      <HomeBannerInspiration5Master />
      <div className={`row ps-lg-5 pe-lg-5 ${style.backgoundColor}`}>
        <PersonalizedCategoriesInspiration3Master />
        <BrandListingInspiration2Master />
        <FeaturedCollectionsInspiration4Master />
      </div>
    </>
  );
};
export default HomePageMaster;
