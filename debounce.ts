const debounce = (fn: any, delay = 100): (...args: []) => void => {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: []): void => {
    clearTimeout(timer);
    timer = setTimeout((): void => {
      fn(...args);
    }, delay);
  };
};

const printSomething = (value: string): void => {
  console.log(value);
};

const debouncedPrintSomething: (value: any) => void = debounce(printSomething, 1000);

debouncedPrintSomething('hello');
