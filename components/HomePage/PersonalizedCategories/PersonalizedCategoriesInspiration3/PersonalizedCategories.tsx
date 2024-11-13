import Link from 'next/link';
import React from 'react';
import { Card } from 'react-bootstrap';
import categoriesStyles from '../../../../styles/components/home.module.scss';
import Image from 'next/image';

const PersonalizedCategories = ({ homeTopCategories }: any) => {
  const myLoader = ({ src, width, quality }: any) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };
  return (
    <div className={`container-fluid mainSection-margin`}>
      <h2 className="section_heading">Personalized Categories Section</h2>
      <div className={categoriesStyles.categories_title}>
        <h4 className="section_subheading">Curated Just for You</h4>
        <Link href={' '} className={categoriesStyles.viewMoreLink}>
          <h4 className="section_subheading text-end">View More</h4>
        </Link>
      </div>
      <div className="row section-margin ">
        {homeTopCategories.map((item: any, i: any) => (
          <div className="col-md-3">
            <Link href={item?.category_url} className="linkStyle">
              <Card className={`${categoriesStyles.cardContainer}`}>
                <div className={`${categoriesStyles.imageContainer}`}>
                  <Image
                    src={item?.product_img}
                    alt="Banner Images"
                    loading="eager"
                    priority={true}
                    width={250}
                    height={250}
                    loader={myLoader}
                  />
                </div>
                <div className="text-container">
                  <h4 className="text-center fw-bold">{item?.heading}</h4>
                </div>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalizedCategories;
