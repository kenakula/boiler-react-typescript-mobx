import React from 'react';
import { makeAutoObservable } from 'mobx';
import { BootState } from 'app/constants/boot-state';

export class MainPageStore {
  private bootState: BootState = BootState.None;

  constructor() {
    makeAutoObservable(this);
  }

  init(): void {
    this.bootState = BootState.Success;
  }
}

export const MainPageStoreContext = React.createContext<
  MainPageStore | undefined
>(undefined);
