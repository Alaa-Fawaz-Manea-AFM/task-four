// 1 => fetch

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

// 2 => XMLHttpRequest

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    var data = JSON.parse(xhr.responseText);
    console.log(data);
  } else {
    console.error("Error:", xhr.statusText);
  }
};
xhr.onerror = function () {
  console.error("Network Error");
};
xhr.send();

//  3 => axios
axios
  .get("https://jsonplaceholder.typicode.com/todos")
  .then((res) => console.log(response.data))
  .catch((error) => console.error("Error:", error));
