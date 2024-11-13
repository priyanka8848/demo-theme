import { SelectedFilterLangDataFromStore } from '../../../store/slices/general_slices/selected-multilanguage-slice';
import { useSelector } from 'react-redux';
import useFetchCartItems from '../../../hooks/CartPageHook/useFetchCartItems';
import useWishlist from '../../../hooks/WishlistHooks/useWishlistHook';
import WebNavbarInspiration2 from './WebNavbarInspiration2';
import useNavbar from '../../../hooks/GeneralHooks/useNavbar';

function NavbarInspiration2() {
  const { navbarData, isLoading, errorMessage, selectedCurrencyValue, handleLogoutUser, isLoggedIn } = useNavbar();
  const { selectedLanguageData }: any = useSelector(SelectedFilterLangDataFromStore);
  const { cartCount } = useFetchCartItems();
  const { wishlistCount } = useWishlist();
  return (
    <WebNavbarInspiration2
      navbarData={navbarData}
      isLoading={isLoading}
      errorMessage={errorMessage}
      selectedCurrencyValue={selectedCurrencyValue}
      handleLogoutUser={handleLogoutUser}
      selectedLanguageData={selectedLanguageData}
      cartCount={cartCount}
      wishlistCount={wishlistCount}
      isLoggedIn={isLoggedIn}
    />
  );
}

export default NavbarInspiration2;
