export const saveItem = ({ key, value }: { key: string, value: any }): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = (key: string): any => {
  const item = localStorage.getItem(key);

  if (item) {
    return JSON.parse(item);
  }

  return null;
};

export const deleteItem = (key: string): void => {
  localStorage.removeItem(key);
};

export const clearStorage = (): void => {
  localStorage.clear();
};
