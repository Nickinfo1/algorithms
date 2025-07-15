// Сортировка вставкой
//
function insertionSort(arr) {
  let key;
  for (let i = 1; i < arr.length; i++) {
    key = arr[i];
    let j = i - 1;
    while (j > -1 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
}

const arr = [5, 3, 2, 6, 1, 4];
insertionSort(arr);
console.log(arr);
