import { Block } from '@/components/block';
import './app.css';
import { BoxIcon, MousePointerIcon, MoveRightIcon } from 'lucide-react';
import { Button } from './components/button';
import { Counter } from '@app2/counter';

export const App = () => {
  return (
    <>
      <header className="header">
        <h1 className="title">RSBuild Micro Frontends</h1>
        <h2 className="subtitle">
          Bidirectional module sharing between applications
        </h2>
      </header>

      <div className="container">
        <Block
          title="App@1"
          label="Step 1"
          color="purple"
          items={[
            {
              key: '1',
              icon: <BoxIcon width={12} height={12} />,
              title: 'Button Component',
              label: 'EXPOSED',
              content: <Button>Sample Button</Button>,
            },
          ]}
        />
        <MoveRightIcon className="delimiter" />
        <Block
          title="App@2"
          label="Step 2"
          color="blue"
          items={[
            {
              key: '2',
              icon: <MousePointerIcon width={12} height={12} />,
              title: 'Counter Component',
              label: 'BUILT + EXPOSED',
              content: <Counter subtitle="Counter" />,
            },
          ]}
        />
        <MoveRightIcon className="delimiter" />
        <Block
          title="App@1"
          label="Step 3"
          color="purple"
          items={[
            {
              key: '3',
              icon: <MousePointerIcon width={12} height={12} />,
              title: 'Counter A',
              label: 'FROM APP@2',
              content: <Counter subtitle="Instance A" />,
            },
            {
              key: '4',
              icon: <MousePointerIcon width={12} height={12} />,
              title: 'Counter B',
              label: 'FROM APP@2',
              content: <Counter subtitle="Instance B" />,
            },
          ]}
        />
      </div>
    </>
  );
};
