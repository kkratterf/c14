import { Card } from '@c14/design-system/components/ui/card';
import { Separator } from '@c14/design-system/components/ui/separator';

export default function BenchmarkPage() {
  return (
    <div className="flex flex-col gap-4 p-10">
      <h1 className="font-brand text-3xl">Benchmark</h1>
      <Separator />
      <Card>Chart 1</Card>
      <div className="flex grid-cols-2 gap-4 md:grid">
        <Card>Chart 2</Card>
        <Card>Chart 3</Card>
      </div>
    </div>
  );
}
