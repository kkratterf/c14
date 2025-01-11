export const selectAccessibilityData = [
  {
    key: "Space",
    description: (
      <>
        When focus is on <code className="cell-accessibility-code">SelectTrigger</code>, opens the select and
        focuses the selected item. When focus is on an item, selects the focused item.
      </>
    ),
  },
  {
    key: "Enter",
    description: (
      <>
        When focus is on <code className="cell-accessibility-code">SelectTrigger</code>, opens the select and
        focuses the first item. When focus is on an item, selects the focused item.
      </>
    ),
  },
  {
    key: "ArrowDown",
    description: (
      <>
        When focus is on <code className="cell-accessibility-code">SelectTrigger</code>, opens the select.
        When focus is on an item, moves focus to the next item.
      </>
    ),
  },
  {
    key: "ArrowUp",
    description: (
      <>
        When focus is on <code className="cell-accessibility-code">SelectTrigger</code>, opens the select.
        When focus is on an item, moves focus to the previous item.
      </>
    ),
  },
  {
    key: "Esc",
    description: (
      <>
        Closes the select and moves focus to <code className="cell-accessibility-code">SelectTrigger</code>.
      </>
    ),
  },
];
