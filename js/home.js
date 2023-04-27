const inputs = document.querySelectorAll("input");
const btn = document.querySelector("#btn");
const search = document.querySelector("#search");

btn.addEventListener("click", function () {
  const books = {
    isbnList: [],
  };

  for (let i = 0; i < inputs.length; i += 5) {
    const book = {
      isbn: inputs[i].value,
      book: inputs[i + 1].value,
      author: inputs[i + 2].value,
      category: inputs[i + 3].value.split(",").map((category) => category.trim()).join(","), // 將陣列轉成字串
      price: inputs[i + 4].value,
    };
    // 檢查每個輸入欄位是否有值，如果該欄位為空，就不要新增進去
    if (book.isbn && book.book && book.author && book.category && book.price) {
      books.isbnList.push(book);
    }
  }

  fetch("http://localhost:8080/add_books", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(books), // 將多個書籍以 JSON 字串的方式傳送
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});


search.addEventListener("click", () => {
  const isbnValue = document.querySelector("#isbn").value;
  const bookValue = document.querySelector("#book").value;
  const authorValue = document.querySelector("#author").value;

  const body = {
    "isbn": isbnValue,
    "book": bookValue,
    "author": authorValue
  }

  fetch("http://localhost:8080/search_shop", {
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

