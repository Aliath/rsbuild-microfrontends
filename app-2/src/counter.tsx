import { Button } from '@app1/shared';
import { useState, type ReactNode } from 'react';

export const Counter = ({ subtitle }: { subtitle: ReactNode }) => {
  const [value, setValue] = useState(0);

  return (
    <div className="counter">
      <div className="counter__title">{value}</div>
      <div className="counter__subtitle">{subtitle}</div>
      <Button onClick={() => setValue(value + 1)}>+1</Button>
    </div>
  );
};
