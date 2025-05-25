import type React from 'react';

export const Fieldset = ({
  children,
  title,
  color,
}: {
  children: React.ReactNode;
  title: React.ReactNode;
  color: 'purple' | 'yellow';
}) => {
  return (
    <fieldset className={color}>
      <legend>{title}</legend>
      {children}
    </fieldset>
  );
};
