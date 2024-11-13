import Link from 'next/link';
import Image from 'next/image';
import style from '../../../../styles/components/home.module.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const BrandsInspiration2Data = ({ brandListing }: any) => {
  const imageLoader = ({ src, width, quality }: any) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };
  const responsive: any = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 6,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };
  return (
    <div className="container-fluid mainSection-margin">
      <h2 className="section_heading">Brands section</h2>
      <h4 className="section_subheading">Today’s Standout brands</h4>
      <div className="row section-margin ">
        <Carousel responsive={responsive}>
          {brandListing?.length > 0 &&
            brandListing?.map((val: any, j: any) => (
              <div key={`${j}`} className={`card-wrapper mx-auto ${style.brandCard}`}>
                <Link href={val?.url} className="banner-title text-white text-capitalize ls-25 homecategory_btnlink">
                  <Image loader={imageLoader} src={val?.image} alt="Brand Images" width={130} height={130} priority={false} />
                </Link>
              </div>
            ))}
        </Carousel>
      </div>
    </div>
  );
};

export default BrandsInspiration2Data;
