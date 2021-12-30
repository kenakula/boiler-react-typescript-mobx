import React, { useEffect, useState } from 'react';
import { TechnicalIssues } from './components/technical-issues/technical-issues';
import { BootState } from './constants/boot-state';
import RouterComponent from './routes/RouterComponent';
import { MainPageStore, MainPageStoreContext } from './store/main-page-store';

const App = (): JSX.Element => {
  const [bootState, setBootState] = useState<BootState>(BootState.None);
  const [mainPageStore, setMainPageStore] = useState<MainPageStore>();

  const loadEnvironment = async (): Promise<void> => {
    try {
      const mainPageStoreInst = new MainPageStore();

      setMainPageStore(mainPageStoreInst);
      setBootState(BootState.Success);
    } catch (error) {
      console.error(error);
      setBootState(BootState.Error);
    }
  };

  useEffect(() => {
    loadEnvironment();
  }, []);

  switch (bootState) {
    case BootState.Loading:
      return <span>...loading</span>;
    case BootState.Success:
      return (
        <MainPageStoreContext.Provider value={mainPageStore}>
          <React.Suspense fallback={<span>...loading</span>}>
            <RouterComponent />
          </React.Suspense>
        </MainPageStoreContext.Provider>
      );
    case BootState.Error:
      return <TechnicalIssues />;
    default:
      return <span>...loading</span>;
  }
};

export default App;
