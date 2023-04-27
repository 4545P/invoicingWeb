const inputs = document.querySelectorAll("input");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {

  const books = {
    salesList: [],
  };

  for (let i = 0; i < inputs.length; i += 2) {
    const book = {
      isbn: inputs[i].value,
      num: inputs[i + 1].value
    };
    // 檢查每個輸入欄位是否有值，如果該欄位為空，就不要新增進去
    if (book.isbn && book.num) {
      books.salesList.push(book);
    }
  }

  console.log(books);

  fetch("http://localhost:8080/sales", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(books)
  })
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(err => console.log(err))
});

