import React from 'react';
import { useTranslation } from 'react-i18next';
import { imagePath } from '../../../../helpers/asset.helper';
import './landing.header.scss';

const LandingHeaderComponent = (props: any) => {
  const [t] = useTranslation(['login']);

  const topMenu = [
    {
      id: 1,
      title: 'ورود ',
      description: 'some desc',
      icon: 'home',
      link: '#/login',
    },
    {
      id: 2,
      title: 'محصولات',
      description: 'some desc',
      icon: 'help',
      link: '/#/product/product-list',
    },
  ];

  return (
    <>
      <div id="mega-menu-full" className="mega-menu">
        <ul className="mega-menu-list-wrp">
          {topMenu.map((item, index) => (
            <li className="ml-2" key={index}>
              <a
                href={item.link}
                className="mega-menu-list-item"
                aria-current="page"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default LandingHeaderComponent;
