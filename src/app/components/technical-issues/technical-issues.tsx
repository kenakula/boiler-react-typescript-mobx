import * as React from 'react';

interface Props {
  code?: number;
  header?: string;
  message?: string;
}

export const TechnicalIssues = ({
  code,
  header,
  message,
}: Props): JSX.Element => (
  <div className="technical-issues">
    <div className="technical-issues__group">
      <div>{!!code && <h1>{code}</h1>}</div>
      <div>
        <h4>{header}</h4>
        <p>{message}</p>
      </div>
    </div>
  </div>
);

TechnicalIssues.defaultProps = {
  header: 'Произошла ошибка',
  message: 'Перезагрузите страницу',
};
