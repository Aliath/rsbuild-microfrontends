import { Fieldset } from '@/components/fieldset';
import type React from 'react';

export const ComponentA = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fieldset color="purple" title="App 1">
      {children}
    </Fieldset>
  );
};
