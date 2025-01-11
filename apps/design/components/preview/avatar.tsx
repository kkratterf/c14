import Preview from '@/components/preview/preview';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@c14/design-system/components/ui/avatar';

export const AvatarPreview = () => (
  <Preview>
    <Avatar>
      <AvatarImage
        src="https://avatars.githubusercontent.com/u/70836137?s=400&v=4"
        alt="@kkratterf"
      />
      <AvatarFallback>FK</AvatarFallback>
    </Avatar>
  </Preview>
);

export const AvatarSize = () => (
  <Preview>
    <div className="flex items-center space-x-3">
      <Avatar size="xs">
        <AvatarImage
          src="https://avatars.githubusercontent.com/u/70836137?s=400&v=4"
          alt="@kkratterf"
        />
        <AvatarFallback>FK</AvatarFallback>
      </Avatar>
      <Avatar size="sm">
        <AvatarImage
          src="https://avatars.githubusercontent.com/u/70836137?s=400&v=4"
          alt="@kkratterf"
        />
        <AvatarFallback>FK</AvatarFallback>
      </Avatar>
      <Avatar size="md">
        <AvatarImage
          src="https://avatars.githubusercontent.com/u/70836137?s=400&v=4"
          alt="@kkratterf"
        />
        <AvatarFallback>FK</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarImage
          src="https://avatars.githubusercontent.com/u/70836137?s=400&v=4"
          alt="@kkratterf"
        />
        <AvatarFallback>FK</AvatarFallback>
      </Avatar>
      <Avatar size="xl">
        <AvatarImage
          src="https://avatars.githubusercontent.com/u/70836137?s=400&v=4"
          alt="@kkratterf"
        />
        <AvatarFallback>FK</AvatarFallback>
      </Avatar>
    </div>
  </Preview>
);

export const AvatarExampleFallback = () => (
  <Preview>
    <Avatar>
      <AvatarImage src="" alt="@kkratterf" />
      <AvatarFallback>FK</AvatarFallback>
    </Avatar>
  </Preview>
);
