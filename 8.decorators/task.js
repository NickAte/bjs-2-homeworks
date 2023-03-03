function cachingDecoratorNew(func) {
    let cache = [];
    const maxCacheValuesCount = 5;
    return (...args) => {
      const hash = md5(args);
      const objectFromCache = cache.find(object => object.hash === hash);
      if (objectFromCache){
        console.log("Из кэша: ", objectFromCache.value);
        return "Из кэша: " + objectFromCache.value;
      }
  
      const value = func(...args);
      cache.push({hash, value})
      if(cache.length > maxCacheValuesCount) {
        cache.shift();
      }
  
      console.log("Вычисляем: ", value);
      return "Вычисляем: " + value;
    };
  }
  


  function debounceDecoratorNew(func, delay) {
    let timeoutId = null;
    wrapper.count = 0;
    wrapper.allCount = 0;
  
    function wrapper(...args) {
      wrapper.allCount++;
  
      if(timeoutId === null) {
        func(...args);
        wrapper.count++;
      }
  
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        wrapper.count++;
        func(...args);
      }, delay);
    }
  
    return wrapper;
  }