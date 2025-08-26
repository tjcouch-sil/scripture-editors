export * from "./usfm/index.js";
export * from "./usj/index.js";

export * from "./get-marker-action.model.js";

export const debounce = <F extends (...args: Parameters<F>) => ReturnType<F>>(
  func: F,
  delay: number,
  shouldExecuteFunc: (...args: Parameters<F>) => boolean = () => true,
) => {
  let timeout: NodeJS.Timeout;

  return (...args: Parameters<F>) => {
    if (!shouldExecuteFunc(...args)) {
      return;
    }
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
};
