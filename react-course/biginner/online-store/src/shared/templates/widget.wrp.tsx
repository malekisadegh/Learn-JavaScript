import React from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import WidgetsIcon from '@mui/icons-material/Widgets';

const WidgetWrapper = (props) => {
  const location = useLocation();
  const pathName = location?.pathname;
  const activePage = pathName
    ? pathName.substring(pathName.lastIndexOf('/') + 1)
    : '';
  const [t] = useTranslation(['pages']);
  const activeElement = props.childs.find((ch) => ch.path === activePage);
  const activePageProps = activeElement?.element?.props;

  return (
    <>
      <div className="flex justify-center ">
        <div className="block  w-full">
          {activePageProps.hideHeader !== true && (
            <div className="py-3 px-6 border-b border-orange-600">
              <WidgetsIcon className="w-4 text-emerald-400" />
              <span className="mx-4  ">{t('pages.' + activePage)}</span>
            </div>
          )}
          <div className="p-6 widget-container">
            <Outlet context={activePageProps} />
          </div>
        </div>
      </div>
    </>
  );
};

export default WidgetWrapper;
