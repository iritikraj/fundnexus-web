const StorageService = {
  setItem(key, value) {
    try {
      const serializedValue = JSON.stringify(value);
      const encodedValue = btoa(encodeURIComponent(serializedValue));
      localStorage.setItem(key, encodedValue);
    } catch (error) {
      console.error(`StorageService: Error saving ${key}`, error);
      return false;
    }
    return true;
  },

  getItem(key) {
    try {
      const encodedValue = localStorage.getItem(key);
      if (!encodedValue) return null;

      // Modern decoding with URI component handling
      const serializedValue = decodeURIComponent(atob(encodedValue));
      return JSON.parse(serializedValue);
    } catch (error) {
      console.error(`StorageService: Error reading ${key}`, error);
      // this.removeItem(key);
      return null;
    }
  },

  removeItem(key) {
    localStorage.removeItem(key);
  },

  clear() {
    localStorage.clear();
  }
};

export default StorageService;