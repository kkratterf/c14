export const contextMenuAccessibilityData = [
  {
    key: "Space",
    description: "Activates the focused item.",
  },
  {
    key: "Enter",
    description: "Activates the focused item.",
  },
  {
    key: "ArrowDown",
    description: "Moves focus to the next item.",
  },
  {
    key: "ArrowUp",
    description: "Moves focus to the previous item.",
  },
  {
    key: "ArrowRight",
    description: (
      <>
        When focus is on <code className="cell-accessibility-code">ContextMenuSubTrigger</code>, opens the
        submenu.
      </>
    ),
  },
  {
    key: "ArrowLeft",
    description: (
      <>
        When focus is on <code className="cell-accessibility-code">ContextMenuSubTrigger</code>, closes the
        submenu.
      </>
    ),
  },
  {
    key: "Esc",
    description: "Closes the context menu",
  },
];
