'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';

export default function AdImg() {
  const { resolvedTheme } = useTheme();
  const src =
    resolvedTheme === 'dark' ? '/images/ad-dark.png' : '/images/ad-light.png';
  return (
    <Image
      src={src}
      alt="Picture of the product"
      height={900}
      width={1400}
      className='w-full rounded-xl border border-border'
      draggable={false}
    />
  );
}
