export const toastAccessibilityData = [
  {
    key: "F8",
    description: "Focuses toasts viewport.",
  },
  {
    key: "Tab",
    description: "Moves focus to the next focusable element.",
  },
  {
    key: "Shift+Tab",
    description: "When focus is on a Toast.Action or Toast.Close, closes the toast.",
  },
  {
    key: "Space",
    description: (
      <>
        When focus is on a <code className="cell-accessibility-code">ToastAction</code> or{" "}
        <code className="cell-accessibility-code">ToastClose</code>, closes the toast.
      </>
    ),
  },
  {
    key: "Enter",
    description: (
      <>
        When focus is on a <code className="cell-accessibility-code">ToastAction</code> or{" "}
        <code className="cell-accessibility-code">ToastClose</code>, closes the toast.
      </>
    ),
  },
  {
    key: "Esc",
    description: (
      <>
        When focus is on a <code className="cell-accessibility-code">Toast</code>, closes the toast.
      </>
    ),
  },
];
