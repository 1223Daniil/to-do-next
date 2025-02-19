import React, { FC, Suspense } from 'react';
import Loader from '@/components/UI/Loader';

type Props = {
  name: string;
  className?: string;
};

const lazySvgCache: Record<string, React.LazyExoticComponent<React.ComponentType<any>>> = {};

function getLazySvg(name: string) {
  if (!lazySvgCache[name]) {
    lazySvgCache[name] = React.lazy(() => import(`@/assets/svg/${name}.svg`));
  }
  return lazySvgCache[name];
}

const SvgIcon: FC<Props> = ({ name, className }) => {
  const LazySvg = getLazySvg(name);

  return (
    <Suspense fallback={<Loader />}>
      <LazySvg className={className} />
    </Suspense>
  );
};

export default React.memo(SvgIcon);
