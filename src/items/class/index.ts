export function execClass(classConstructor: any, functionNames: string[], params: any[]): any[] {
  let res: any[] = [null];
  let instance = new classConstructor(...params[0]);
  for (let i = 1; i < functionNames.length; i++) {
    res[i] = instance[functionNames[i]](...params[i]);
  }
  return res;
}
