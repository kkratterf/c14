import type { Metadata } from 'next'

import { getStartupFromId } from '@/actions/startup';

import LeftPanel from '@/components/modules/startup-detail/left-panel';
import RightPanel from '@/components/modules/startup-detail/right-panel';
import Empty from '@/components/ui/empty';

interface IProps {
  params: Promise<{
    id: string;
  }>
}

export async function generateMetadata(
  { params }: IProps,
): Promise<Metadata> {
  const { id } = await params;
  const startup = await getStartupFromId(id);
  if (!startup) {
    return {
      title: "C14 - Startup not found",
    };
  }

  return {
    title: `C14 - ${startup.name}`,
    description: startup.shortDescription,
  }
}

export default async function StartupDetailPage({
  params
}: IProps) {
  const { id } = await params;
  const startup = await getStartupFromId(id);

  if (!startup) {
    return <Empty description="Something went wrong. But hey, don&apos;t give up!Try again later." />;
  }

  return (
    <div className='relative flex min-h-dvh w-full flex-col gap-4 p-6 pb-0 lg:flex-row'>
      <LeftPanel startup={startup} />
      <RightPanel startup={startup} />
    </div>
  );
}
