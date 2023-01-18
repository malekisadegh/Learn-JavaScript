import { t } from 'i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { imagePath } from '../../../../helpers/asset.helper';
import LandingHeaderComponent from '../header/landing.header';
import './landing.scss';
const TopSectionComponent = (props: any) => {
  const [t] = useTranslation(['common']);

  return (
    <>
      <div className="wrapper main-bg">
        <LandingHeaderComponent></LandingHeaderComponent>
        <section id="top-section" className="top-section-wrp">
          <div className="top-app-name">
            <h1 className="text-xl text-sky-600">{t('landing.message.app')}</h1>
          </div>
        </section>
      </div>
    </>
  );
};

export default TopSectionComponent;
