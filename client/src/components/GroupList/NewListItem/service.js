export const findItem = (inputValue, list) => {
  const result = list.find(element => element.title.toUpperCase().match(inputValue.toUpperCase())).title;
  return {
    value: result,
  };
};
