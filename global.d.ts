declare global {
    interface Window {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      CustomEvent: any
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      Event: any
    }
  }