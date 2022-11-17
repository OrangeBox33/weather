export const get = <T = string>(property: string): T => {
  return localStorage.getItem(property) as any as T;
};

export const set = (property: string, value: string): void => {
  return localStorage.setItem(property, value);
};

export const remove = (property: string): void => {
  return localStorage.removeItem(property);
};

export const getOrCreate = <T = string>(
  property: string,
  defaultValue: T
): T => {
  const storageValue: T = get(property);
  if (typeof storageValue === "string") return storageValue;
  // localStorage.setItem(property, defaultValue);
  return defaultValue;
};
