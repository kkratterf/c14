import type React from 'react';
import type { ReactNode } from 'react';

type PreviewProps = {
  children: ReactNode;
};

const Preview: React.FC<PreviewProps> = ({ children }) => {
  return (
    <div className="nx-border-gray-200 contrast-more:nx-border-primary-900/20 dark:nx-border-neutral-800 contrast-more:dark:nx-border-primary-100/40 nx-mb-4 nx-py-4 nx-border contrast-more:nx-border nx-rounded-xl nx-subpixel-antialiased nx-overflow-x-auto contrast-more:nx-contrast-150 flex justify-center bg-background px-10 py-20">
      {children}
    </div>
  );
};

export default Preview;
