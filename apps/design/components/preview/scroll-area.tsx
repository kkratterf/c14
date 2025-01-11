import Image from 'next/image';

import Preview from '@/components/preview/preview';
import {
  ScrollArea,
  ScrollBar,
} from '@c14/design-system/components/ui/scroll-area';
import { Separator } from '@c14/design-system/components/ui/separator';

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

export interface Artwork {
  artist: string;
  art: string;
}

export const works: Artwork[] = [
  {
    artist: 'Ornella Binni',
    art: 'https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80',
  },
  {
    artist: 'Tom Byrom',
    art: 'https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80',
  },
  {
    artist: 'Vladimir Malyavko',
    art: 'https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80',
  },
];

export const ScrollAreaPreview = () => (
  <Preview>
    <ScrollArea className="h-72 w-48 rounded border border-default">
      <div className="p-4">
        <h4 className="mb-4 text-md-medium leading-none">Tags</h4>
        {tags.map((tag) => (
          <>
            <div key={tag} className="text-md">
              {tag}
            </div>
            <Separator key={tag} className="my-2" />
          </>
        ))}
      </div>
    </ScrollArea>
  </Preview>
);

export const ScrollAreaHorizontal = () => (
  <Preview>
    <ScrollArea className="w-96 whitespace-nowrap rounded border border-default">
      <div className="flex w-max space-x-4 p-4">
        {works.map((artwork) => (
          <figure key={artwork.artist} className="shrink-0">
            <div className="overflow-hidden rounded">
              <Image
                src={artwork.art}
                alt={`Photo by ${artwork.artist}`}
                className="aspect-[3/4] size-fit object-cover"
                width={300}
                height={400}
              />
            </div>
            <figcaption className="pt-2 text-description text-sm">
              Photo by{' '}
              <span className="text font-semibold">{artwork.artist}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  </Preview>
);
