import React from 'react';
import './Container.scss';

interface Props {
  children: JSX.Element | JSX.Element[] | null;
  className?: string;
}

const Container = (props: Props): JSX.Element => {
  const containerClass = props.className
    ? `${props.className} container`
    : 'container';

  return <div className={containerClass}>{props.children}</div>;
};

export default Container;
