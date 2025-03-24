export const containsChinese = (text: string): boolean => {
  return /[\u4e00-\u9fff]/.test(text);
};
