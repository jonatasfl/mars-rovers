export default function min(minValue: number) {
  return function(target: any, key: string) {
    let val = target[key];
    
    const getter = () => val;
    const setter = (value: number) => {
      if (value < minValue) {
        throw new Error(`Min ${key} should be ${minValue}`);
      }

      if (isNaN(value) || !Number.isInteger(value)) {
        throw new Error(`${key} should be a integer`);
      }

      val = value;
    }

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    });
  }
}