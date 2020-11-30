export function checkLocalStorage(key, initialize) {
  let roomsStorage = JSON.parse(localStorage.getItem(key));
  if (roomsStorage == null) {
    return initialize;
  } else {
    return roomsStorage;
  }
}

export function saveLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
