import type { LogoProps } from '@ircsignpost/signpost-base/dist/src/header';
import type { Locale } from '@ircsignpost/signpost-base/dist/src/locale';

import logoEnUs from '../public/yemen_logo_transparent_white_gold.png';

export const getHeaderLogoProps = (currentLocale: Locale): LogoProps => {
  let imgSrc: string;
  switch (currentLocale.url) {
    case 'ar':
    default:
      imgSrc = logoEnUs.src;
      break;
  }
  return {
    src: imgSrc,
  };
};
