// Сортировка вставкой
//
function insertionSort(arr) {
  let key;
  for (let i = 1; i < arr.length; i++) {
    key = arr[i];
    if (typeof arr[i] === "string") {
      return [];
    }
    let j = i - 1;
    while (j > -1 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return [...arr];
}

module.exports = insertionSort;
