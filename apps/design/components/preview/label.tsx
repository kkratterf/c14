import Preview from '@/components/preview/preview';
import { Checkbox } from '@c14/design-system/components/ui/checkbox';
import { Input } from '@c14/design-system/components/ui/input';
import { Label } from '@c14/design-system/components/ui/label';
import { Textarea } from '@c14/design-system/components/ui/textarea';

export const LabelPreview = () => (
  <Preview>
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  </Preview>
);

export const LabelWithCheckbox = () => (
  <Preview>
    <div className="flex items-center space-x-2">
      <Checkbox id="terms-2" />
      <Label htmlFor="terms-2">Accept terms and conditions</Label>
    </div>
  </Preview>
);

export const LabelWithInput = () => (
  <Preview>
    <div className="grid w-full max-w-sm items-center gap-3">
      <Label htmlFor="email">Email</Label>
      <Input
        type="email"
        id="email"
        placeholder="Email"
        className="patch-input"
      />
    </div>
  </Preview>
);

export const LabelWithTextArea = () => (
  <Preview>
    <div className="grid w-full gap-3">
      <Label htmlFor="message">Your story</Label>
      <Textarea placeholder="Once upon a time..." id="message" />
    </div>
  </Preview>
);
