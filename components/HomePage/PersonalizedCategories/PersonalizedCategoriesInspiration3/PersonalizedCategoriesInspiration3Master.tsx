import Image from 'next/image';
import useHomeTopCategories from '../../../../hooks/HomePageHooks/usePersonalizedCategories';
import ErrorImage from '../../../../public/assets/images/error-icon.png';
import PersonalizedCategories from './PersonalizedCategories';
import PersonalizedCategoriesLoading from './PersonalizedCategoriesLoading';

const PersonalizedCategoriesInspiration3Master = () => {
  const { homeTopCategories, isLoading, errorMessage } = useHomeTopCategories();

  if (isLoading) {
    return <PersonalizedCategoriesLoading />;
  } else if (homeTopCategories?.length > 0) {
    return <PersonalizedCategories homeTopCategories={homeTopCategories} />;
  } else if (errorMessage) {
    return (
      <div className="p-3 d-flex justify-content-center align-items-center" style={{ fontSize: '40px' }}>
        <Image src={ErrorImage} width={250} height={250} alt="Error Image" />
      </div>
    );
  }
  return <></>;
};

export default PersonalizedCategoriesInspiration3Master;
