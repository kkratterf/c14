export const menubarAccessibilityData = [
  {
    key: "Space",
    description: (
      <>
        When focus is on <code className="cell-accessibility-code">MenubarTrigger</code>, opens the menubar
        and focuses the first item. When focus is on an item, activates the focused item.
      </>
    ),
  },
  {
    key: "Enter",
    description: (
      <>
        When focus is on <code className="cell-accessibility-code">MenubarTrigger</code>, opens the associated
        menu. When focus is on an item, activates the focused item.
      </>
    ),
  },
  {
    key: "ArrowDown",
    description: (
      <>
        When focus is on <code className="cell-accessibility-code">MenubarTrigger</code>, opens the associated
        menu. When focus is on an item, moves focus to the next item.
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
        When focus is on a <code className="cell-accessibility-code">MenubarTrigger</code>, moves focus to the
        next item. When focus is on a <code className="cell-accessibility-code">MenubarSubTrigger</code>,{" "}
        opens or closes the submenu depending on reading direction. When focus is within a{" "}
        <code className="cell-accessibility-code">MenubarContent</code>, opens the next menu in the menubar.
      </>
    ),
  },
  {
    key: "ArrowLeft",
    description: (
      <>
        When focus is on a <code className="cell-accessibility-code">MenubarTrigger</code>, moves focus to the
        previous item. When focus is on a <code className="cell-accessibility-code">MenubarSubTrigger</code>,{" "}
        opens or closes the submenu depending on reading direction. When focus is within a{" "}
        <code className="cell-accessibility-code">MenubarContent</code>, opens the next menu in the menubar.
      </>
    ),
  },
  {
    key: "Esc",
    description: (
      <>
        Closes the currently open menu and moves focus to its{" "}
        <code className="cell-accessibility-code">MenubarTrigger</code>.
      </>
    ),
  },
];
