import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { isEmpty } from '../../utils';
import AuthService from '../../auth/services/auth.service';
import { store } from '../../store';

class Props {
  authority: string;
  redirectPath?: string;
  children?: any;
  childs?: any;
  permissions: string[];
}

const RouteGuard = (props: Props) => {
  const childs = props ? props.childs : [];
  const redirectPath = '/p401';
  const state = store.getState();

  let authoritDic = {};

  let authorized: boolean = true;

  let path = location.hash;
  let pathName = path.substring(path.lastIndexOf('/') + 1, path.length);
  let authority = 'public';
  if (Array.isArray(childs)) {
    const activeChild = childs.find((ch) => ch.path === pathName);
    authority = activeChild?.element?.props
      ? activeChild.element.props.authority
      : authority;
  }

  const permissions = {
    authority: authority,
    permissions:
      authoritDic && authoritDic[authority]
        ? authoritDic[authority]['Permissions']
        : [],
  };

  if (authority === 'public') {
    authorized = true;
  }

  const GuardWrapper = ({ children }) =>
    children && (
      <>
        {React.Children.map(children, (child) => {
          return React.cloneElement(child);
        })}
      </>
    );

  return (
    <>
      {!authorized ? (
        <Navigate to={redirectPath} replace />
      ) : (
        <GuardWrapper children={props.children}></GuardWrapper>
      )}
    </>
  );
};

export default RouteGuard;
