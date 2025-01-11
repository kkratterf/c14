export const dropdownMenuAccessibilityData = [
  {
    key: "Space",
    description: (
      <>
        When focus is on <code className="cell-accessibility-code">DropdownMenuTrigger</code>, opens the
        dropdown menu and focuses the first item. When focus is on an item, activates the focused item.
      </>
    ),
  },
  {
    key: "Enter",
    description: (
      <>
        When focus is on <code className="cell-accessibility-code">DropdownMenuTrigger</code>, opens the
        dropdown menu and focuses the first item. When focus is on an item, activates the focused item.
      </>
    ),
  },
  {
    key: "ArrowDown",
    description: (
      <>
        When focus is on <code className="cell-accessibility-code">DropdownMenuTrigger</code>, opens the
        dropdown menu. When focus is on an item, moves focus to the next item.
      </>
    ),
  },
  {
    key: "ArrowUp",
    description: "When focus is on an item, moves focus to the previous item.",
  },
  {
    key: "ArrowRight",
    description: (
      <>
        When focus is on <code className="cell-accessibility-code">DropdownMenuSubTrigger</code>, opens the
        submenu.
      </>
    ),
  },
  {
    key: "ArrowLeft",
    description: (
      <>
        When focus is on <code className="cell-accessibility-code">DropdownMenuSubTrigger</code>, closes the
        submenu.
      </>
    ),
  },
  {
    key: "Esc",
    description: (
      <>
        Closes the dropdown menu and moves focus to{" "}
        <code className="cell-accessibility-code">DropdownMenuTrigger</code>.
      </>
    ),
  },
];
