import * as React from 'react';
import { BootState } from 'app/constants/boot-state';
import { TechnicalIssues } from 'app/components/technical-issues/technical-issues';

interface IProps {
  bootState: BootState;
  children: JSX.Element | JSX.Element[];
}

export const BootStateWrapper = (props: IProps): JSX.Element => {
  switch (props.bootState) {
    case BootState.Error:
      return <TechnicalIssues />;
    case BootState.Success:
      return <>{props.children}</>;
    default:
      return <span>...loading</span>;
  }
};
