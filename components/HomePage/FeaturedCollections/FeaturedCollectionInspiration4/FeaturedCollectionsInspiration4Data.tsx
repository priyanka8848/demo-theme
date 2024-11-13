import React, { useState } from 'react';
import styles from '../../../../styles/components/home.module.scss';
import { Card } from 'react-bootstrap';
import Image from 'next/image';

type Props = {
  data: any;
  addToCartItem: any;
  getPartyName: any;
  wishlistData: any;
};

const FeaturedCollectionsInspiration4Data = (props: Props) => {
  const myLoader = ({ src, width, quality }: any) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };
  const tit = 'Louis Philippe Regular Fit Solid';
  const [activeTab, setActivetab] = useState(0);
  const { data, addToCartItem, getPartyName, wishlistData } = props;
  console.log(data, 'data');
  const handleTabChange = (index: number) => {
    setActivetab(index);
  };
  return (
    <div className="container-fluid mainSection-margin">
      <h2 className="section_heading">Featured Collection section</h2>
      <h4 className="section_subheading">Curated Just for You</h4>
      <div className="text-center mt-3">
        <ul className="nav justify-content-end flex-row">
          {data?.map((item: any, index: any) => (
            <li className="nav-item" key={index}>
              <button
                className={`nav-link ${activeTab === index && styles.activeTabButton} ${styles.lefttabButton} `}
                onClick={() => handleTabChange(index)}
              >
                {item?.tag_name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className={`row ${styles.tabContainerMargin} `}>
        {data &&
          data[activeTab]?.value?.length > 0 &&
          data[activeTab]?.value.map((item: any) => (
            <div className="col-md-3 mb-2">
              <Card className={`${styles.tabcardContainer}`}>
                <div className={`${styles.tabimageContainer}`}>
                  <Image src={item?.image} alt="Banner Images" loading="eager" priority={true} width={303} height={303} loader={myLoader} />
                </div>
              </Card>
              <h6 className={styles.tabProductTitle}>{item?.item_name?.split(' ').slice(0, 4).join(' ')}</h6>
              <div>
                <h6 className={styles.tabProductTitle}>
                  <span className={styles.tabProductPrice}>₹{item?.price}</span>
                  <span className={styles.tabProductmrpPrice}>₹{item?.mrp_price}</span>
                </h6>
              </div>
              <div className="d-flex">
                <div className={styles.tabProductColor} style={{ backgroundColor: '#ff6e28' }}>
                  red
                </div>
                <div className={styles.tabProductColor} style={{ backgroundColor: '#82b440' }}>
                  green
                </div>
                <div className={styles.tabProductColor} style={{ backgroundColor: 'black' }}>
                  Black
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FeaturedCollectionsInspiration4Data;
