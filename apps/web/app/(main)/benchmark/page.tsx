import { Card } from '@c14/design-system/components/ui/card';

import {
  FirstChart,
  SecondChart,
  ThirdChart,
} from '@/components/modules/benchmark/charts';

export default function BenchmarkPage() {
  return (
    <div className="flex h-full w-full flex-col gap-4 px-6 py-6">
      <Card className="h-96 w-full rounded-xl border border-border bg-card shadow-sm">
        <FirstChart />
      </Card>
      <div className="flex flex-row gap-4">
        <Card className="h-96 w-full rounded-xl border border-border bg-card shadow-sm">
          <SecondChart />
        </Card>
        <Card className="h-96 w-full rounded-xl border border-border bg-card shadow-sm">
          <ThirdChart />
        </Card>
      </div>
    </div>
  );
}
