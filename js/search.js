const inputs = document.querySelectorAll("input");
const search = document.querySelector("#search");
const categoryBtn = document.querySelector("#categoryBtn");

search.addEventListener("click", () => {
  const isbnValue = document.querySelector("#isbn").value;
  const bookValue = document.querySelector("#book").value;
  const authorValue = document.querySelector("#author").value;

  const body = {
    "isbn": isbnValue,
    "book": bookValue,
    "author": authorValue
  }

  fetch("http://localhost:8080/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body)
  })
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(err => console.log(err))
});

categoryBtn.addEventListener("click", function () {
  const inputsArray = Array.from(inputs); // 将 inputs 转换为数组
  const categories = {
    categories: []
  };


  for (let i = 0; i < inputsArray.length; i++) {
    const category = inputsArray[i].value.trim(); // 移除空白
    if (category !== "") { // 如果不是空字串
      categories.categories = categories.categories.concat(category.split(',').map(category => category.trim())); // 將分類陣列合併到 categories 物件中
    }
  }

  categories.categories = [...new Set(categories.categories)]; // 去除重複的類別

  console.log(categories);


  fetch("http://localhost:8080/categories_search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(categories), // 將多個書籍以 JSON 字串的方式傳送
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});