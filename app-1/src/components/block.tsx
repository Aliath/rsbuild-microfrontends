import type React from 'react';

export const Block = ({
  items,
  title,
  label,
  color,
}: {
  items: Array<{
    key: string;
    icon: React.ReactNode;
    title: string;
    label: string;
    content: React.ReactNode;
  }>;
  title: React.ReactNode;
  label: React.ReactNode;
  color: 'purple' | 'blue';
}) => {
  return (
    <div className={`block block--${color}`}>
      <header className="block__header">
        <div className="block__label">{label}</div>
        <div className="block__title">{title}</div>
      </header>

      <div className="block__container">
        {items.map((item) => (
          <div className="block__content" key={item.key}>
            <header className="block__content-header">
              {item.icon}
              <div className="block__content-title">{item.title}</div>
              <div className="block__content-label">{item.label}</div>
            </header>
            <div className="block__content-body">{item.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
