import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { NavDropdown } from 'react-bootstrap';
import { FaSearch, FaUserCircle } from 'react-icons/fa';
import { FaAlignJustify } from 'react-icons/fa6';
import { BsCart3, BsHeart, BsPerson } from 'react-icons/bs';
import { CiUser } from 'react-icons/ci';
import logo from '../../../public/assets/images/logo.png';
import stylesNavbar from '../../../styles/components/navbar.module.scss';

function WebNavbarInspiration2({
  navbarData,
  isLoading,
  errorMessage,
  selectedCurrencyValue,
  handleLogoutUser,
  multiLanguagesData,
  selectedLang,
  handleLanguageChange,
  selectedLanguageData,
  cartCount,
  wishlistCount,
  isLoggedIn,
}: any) {
  console.log(navbarData, 'navbarData');
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [indexVal, setIndexVal] = useState<any>();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const user = localStorage.getItem('party_name');
  const handleSearch = (e: any) => {
    e.preventDefault();
    if (searchTerm !== '') {
      router.push('/product/' + searchTerm);
    }
  };
  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };
  const handleCloseSidebar = () => setIsSidebarOpen(false);
  const handleShowDropDown = () => setShowDropDown(!showDropDown);
  const handleToggle = (e: any) => {
    setShowDropDown((prevState) => !prevState);
  };
  const handleEnter = (index: any) => {
    setIndexVal(index);
  };
  return (
    <>
      <header className={stylesNavbar.header}>
        <nav className="position-relative">
          <div className={`${stylesNavbar.navbar} ps-lg-4 pe-lg-4`}>
            <div className={`w-100 d-flex justify-content-end  ${stylesNavbar.NavbarInspiration2_container}`}>
              <div className="mobile-nav d-flex justify-content-sm-between px-3 px-sm-4 d-sm-block d-md-none">
                <Link href="#" legacyBehavior>
                  <a
                    className="mobile-menu-toggle  w-icon-hamburger"
                    aria-label="menu-toggle"
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  >
                    <FaAlignJustify className="icon" />
                  </a>
                </Link>
              </div>
              <div className={`${stylesNavbar.logo} d-none d-sm-none d-md-block`}>
                <Link href="/" legacyBehavior>
                  <a>
                    <Image src={logo} alt="logo" width={196} priority={true} className="mt-1" />
                  </a>
                </Link>
              </div>
              <div className="d-flex align-items-center">
                <ul className="nav list-inline d-flex justify-content-centre">
                  {navbarData?.map((val: any, i: any) => (
                    <li className={stylesNavbar.navBarItem} onMouseEnter={() => handleEnter(i)}>
                      <Link href={''}>{val.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`d-block`}>
                <div className="search-input position-relative">
                  <FaSearch className={stylesNavbar.NavbarInspiration2search_icon} />
                  <input
                    type="text"
                    className={`form-control ${stylesNavbar.NavbarInspiration2_search_bar}`}
                    placeholder="Search here"
                    aria-label="Search"
                    aria-describedby="basic-addon1"
                    onChange={(e: any) => setSearchTerm(e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e)}
                  />
                </div>
              </div>

              <ul className={`nav list-inline d-flex justify-content-end ${stylesNavbar.cartContainer} align-items-center`}>
                <li className={stylesNavbar.NavbarInspiration2_list_item}>
                  <Link href="/cart" legacyBehavior>
                    <a className={`link-dark ${stylesNavbar.label}`}>
                      <div className={stylesNavbar.icon_container}>
                        <BsCart3 fontSize={22} color="#000" />
                        <span className={`${stylesNavbar.NavbarInspiration2_badge} ${stylesNavbar.badge_warning} text-white`}>
                          {cartCount}
                        </span>
                      </div>
                    </a>
                  </Link>
                </li>
                <li className={stylesNavbar.NavbarInspiration2_list_item}>
                  <Link href="/wishlist " legacyBehavior>
                    <a className={`link-dark ${stylesNavbar.label}`}>
                      <div className={stylesNavbar.icon_container}>
                        <BsHeart fontSize={22} color="#000" />
                        <span className={`${stylesNavbar.NavbarInspiration2_badge} ${stylesNavbar.badge_warning} text-white`}>
                          {wishlistCount}
                        </span>
                      </div>
                    </a>
                  </Link>
                </li>
                <li className={stylesNavbar.NavbarInspiration2_list_item}>
                  {isLoggedIn ? (
                    <>
                      <div className={stylesNavbar.icon_container} onClick={handleShowDropDown}>
                        <CiUser fontSize={26} color="#000" />
                        <span className={`d-none d-md-inline-block theme-blue ${stylesNavbar.order_list_dropdown}`}>{user}</span>
                      </div>

                      {isLoggedIn && (
                        <NavDropdown
                          title={''}
                          id="basic-nav-dropdown"
                          className={` ${stylesNavbar.order_list_dropdown}`}
                          show={showDropDown}
                          onToggle={handleToggle}
                        >
                          <NavDropdown.Item
                            as="a"
                            className={`text-decoration-none ${stylesNavbar.order_list_items} custom-dropdown-item`}
                          ></NavDropdown.Item>

                          <Link href="/quick-order" passHref className="text-decoration-none">
                            <NavDropdown.Item
                              as="a"
                              className={`text-decoration-none ${stylesNavbar.order_list_items} custom-dropdown-item`}
                            >
                              {selectedLanguageData?.quick_order}
                            </NavDropdown.Item>
                          </Link>
                          <Link href="/quick-order" passHref className="text-decoration-none">
                            <NavDropdown.Item
                              as="a"
                              className={`text-decoration-none ${stylesNavbar.order_list_items} custom-dropdown-item`}
                            >
                              {selectedLanguageData?.my_account}
                            </NavDropdown.Item>
                          </Link>
                          <Link href="/quick-order" passHref className="text-decoration-none">
                            <NavDropdown.Item
                              as="a"
                              className={`text-decoration-none ${stylesNavbar.order_list_items} custom-dropdown-item`}
                            >
                              {selectedLanguageData?.dealer_ledger}
                            </NavDropdown.Item>
                          </Link>
                          <Link href="/catalog" passHref className="text-decoration-none">
                            <NavDropdown.Item
                              as="a"
                              className={`text-decoration-none ${stylesNavbar.order_list_items} custom-dropdown-item`}
                            >
                              {selectedLanguageData?.view_catalogs}
                            </NavDropdown.Item>
                          </Link>
                          <Link href="/my-orders" passHref className="text-decoration-none">
                            <NavDropdown.Item
                              as="a"
                              className={`text-decoration-none ${stylesNavbar.order_list_items} custom-dropdown-item`}
                            >
                              {selectedLanguageData?.my_order}
                            </NavDropdown.Item>
                          </Link>

                          <Link href="#" passHref className="text-decoration-none" onClick={handleLogoutUser}>
                            <NavDropdown.Item
                              as="a"
                              className={`text-decoration-none ${stylesNavbar.order_list_items} custom-dropdown-item`}
                            >
                              {selectedLanguageData?.logout}
                            </NavDropdown.Item>
                          </Link>
                        </NavDropdown>
                      )}
                    </>
                  ) : (
                    <Link href={'/login'} className={stylesNavbar.icon_container} onClick={handleShowDropDown}>
                      <BsPerson fontSize={26} color="#000" />
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
          {navbarData?.map((val: any, i: any) => (
            <div
              className={'position-absolute container-fluid ps-lg-4 pe-lg-4 bg-white subMenu-container'}
              onMouseLeave={() => setIndexVal('')}
            >
              <div className={`${indexVal === i ? 'd-flex' : 'd-none'} justify-content-between`}>
                {val.values.map((item: any, index: any) => (
                  <div className={`${index % 2 ? 'bg-body-tertiary' : 'bg-white'} ${stylesNavbar.columnBg} `}>
                    <h6 className="fw-bold">
                      <Link
                        href={{
                          pathname: `${item?.url}`,
                          query: { page: '1', currency: 'INR' },
                        }}
                      >
                        {item.label}
                      </Link>
                    </h6>
                    {item?.values?.map((values: any, i: any) => (
                      <h6>
                        <Link
                          href={{
                            pathname: `${values?.url}`,
                            query: { page: '1', currency: 'INR' },
                          }}
                        >
                          {values.label}
                        </Link>
                      </h6>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </header>
      {/* <MobileProductCategories
        show={isSidebarOpen}
        handleClose={handleCloseSidebar}
        navbarData={navbarData}
        setIsSidebarOpen={setIsSidebarOpen}
        selectedLanguageData={selectedLanguageData}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />
      <ProductCatagoriesNavbar
        navbarData={navbarData}
        errorMessage={errorMessage}
        selectedCurrencyValue={selectedCurrencyValue}
        multiLanguagesData={multiLanguagesData}
        selectedLang={selectedLang}
        handleLanguageChange={handleLanguageChange}
      /> */}
    </>
  );
}

export default WebNavbarInspiration2;
