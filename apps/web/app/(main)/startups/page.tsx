import AdvertiseCard from '@/components/ui/advertise-card';
import StartupCard from '@/components/ui/startup-card';
import { advertise } from '@/lib/advertise';
import { startups } from '@/lib/startups';

export default function StartupsPage() {
  return (
    <div className="flex h-full w-full flex-col gap-1 px-3 py-4">
      {startups.slice(0, 4).map((startup) => (
        <StartupCard key={startup.name} item={startup} />
      ))}
      <AdvertiseCard item={advertise} type="startups" />
      {startups.slice(4).map((startup) => (
        <StartupCard key={startup.name} item={startup} />
      ))}
    </div>
  );
}
