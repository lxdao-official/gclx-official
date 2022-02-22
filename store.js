function setToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
function getFromLocalStorage(key) {
  const value = localStorage.getItem(key);
  return JSON.parse(value);
}
function removeFromLocalStorage(key) {
  localStorage.removeItem(key);
}

function Store() {
  let store = getFromLocalStorage("store") || {};
  let subscriptions = {};

  function get(name) {
    return store[name];
  }

  function set(name, value) {
    store = { ...store, [name]: value };
    setToLocalStorage("store", store);
    if (subscriptions[name] && subscriptions[name].length) {
      subscriptions[name]
        .filter((callback) => callback !== null)
        .forEach((callback) => {
          callback(value);
        });
    }
  }

  function subscribe(name, callback) {
    if (!subscriptions[name]) {
      subscriptions[name] = [];
    }

    const existing = subscriptions[name].find((cb) => cb === callback);
    if (existing) {
      return () => {};
    }

    const length = subscriptions[name].push(callback);
    const index = length - 1;

    return () => {
      subscriptions[name][index] = null;
    };
  }

  function reset() {
    store = {};
    subscriptions = {};
    removeFromLocalStorage("store");
  }

  return { get, set, subscribe, reset };
}

let storeInstance = {};
if (typeof window !== "undefined") {
  storeInstance = Store();
}

const { get, set, subscribe, reset } = storeInstance;

export { get, set, subscribe, reset };
