export default function oneOf(values: Array<any>) {
  return function(target: any, key: string) {
    let dir = target[key];
    
    const getter = () => dir;
    const setter = (value: string) => {
      if (values.indexOf(value) === -1) {
        throw new Error('Invalid direction');
      }

      dir = value;
    }

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    });

    // console.log('DIR', dir, target, key, target[key]);
  }
}