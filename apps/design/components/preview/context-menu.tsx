import Preview from '@/components/preview/preview';
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuSubMenu,
  ContextMenuSubMenuContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '@c14/design-system/components/ui/context-menu';

export const ContextMenuPreview = () => (
  <Preview>
    <ContextMenu>
      <ContextMenuTrigger className="flex h-40 w-80 items-center justify-center rounded border border-default border-dashed text-md">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem shortcut="⌘[">Back</ContextMenuItem>
        <ContextMenuItem shortcut="⌘]" disabled>
          Forward
        </ContextMenuItem>
        <ContextMenuItem shortcut="⌘R">Reload</ContextMenuItem>
        <ContextMenuSubMenu>
          <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
          <ContextMenuSubMenuContent className="w-48">
            <ContextMenuItem shortcut="⇧⌘S">Save Page As...</ContextMenuItem>
            <ContextMenuItem>Create Shortcut...</ContextMenuItem>
            <ContextMenuItem>Name Window...</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Developer Tools</ContextMenuItem>
          </ContextMenuSubMenuContent>
        </ContextMenuSubMenu>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem shortcut="⌘⇧B" checked>
          Show Bookmarks Bar
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuRadioGroup value="michael">
          <ContextMenuLabel>People</ContextMenuLabel>
          <ContextMenuRadioItem value="michael">
            Michael Scott
          </ContextMenuRadioItem>
          <ContextMenuRadioItem value="dwight">
            Dwight Schrute
          </ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  </Preview>
);
