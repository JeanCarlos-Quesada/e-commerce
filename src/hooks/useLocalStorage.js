const useLocalStorage = () => {
  const setItem = (name, item) => {
    try {
      window.localStorage.setItem(name, item);
      return true;
    } catch (err) {
      return false;
    }
  };

  const getItem = (name) => {
    try {
      return window.localStorage.getItem(name);
    } catch (err) {
      return -1;
    }
  };

  return {
    setItem,
    getItem
  };
};

export default useLocalStorage;
