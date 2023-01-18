import * as React from 'react';
import createCache from '@emotion/cache';
import { HashRouter, Outlet } from 'react-router-dom';
import AppRouter from './routes/components/router';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
//import { ThemeProvider } from '@emotion/react';
import { ToastContainer } from 'react-toastify';
import theme from './theme';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import i18n, { initialI18nSettings, Language } from './i18n';
import { CacheProvider } from '@emotion/react';
import { faIR } from '@mui/material/locale';
i18n.init({
  ...initialI18nSettings,
  lng: Language.FA,
});

const cacheLtr = createCache({
  key: 'muiltr',
});

const cacheRtl = createCache({
  key: 'muirtl',
  // prefixer is the only stylis plugin by default, so when
  // overriding the plugins you need to include it explicitly
  // if you want to retain the auto-prefixing behavior.
  stylisPlugins: [prefixer, rtlPlugin],
});

const ltrTheme = createTheme({ direction: 'ltr' }, faIR);
const rtlTheme = createTheme({ direction: 'rtl' });

function App() {
  //TODO: isRtl must manage by redux store
  const isRtl = true;
  React.useLayoutEffect(() => {
    document.body.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
  }, [isRtl]);

  return (
    <CacheProvider value={isRtl ? cacheRtl : cacheLtr}>
      <ThemeProvider theme={isRtl ? rtlTheme : ltrTheme}>
        <HashRouter>
          <AppRouter></AppRouter>
          <ToastContainer theme="colored" rtl={true} />
        </HashRouter>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
