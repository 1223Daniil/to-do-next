import React, { FC, Suspense } from "react";

type Props = {
  name: string;
  className?: string;
};

const SvgIcon: FC<Props> = ({ name, className }) => {
  const SvgComponent = React.lazy(() => import(`@/assets/svg/${name}.svg`));

  return (
    <Suspense fallback={<span>Loading...</span>}>
      <SvgComponent className={className} />
    </Suspense>
  );
};

export default SvgIcon;