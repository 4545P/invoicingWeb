const inputs = document.querySelectorAll("input");
const updateBtn = document.querySelector(".update");
const purchaseBtn = document.querySelector(".purchase");
const renewBtn = document.querySelector(".renew");

updateBtn.addEventListener("click", function () {
  const book = {
    isbn: inputs[0].value,
    categories: inputs[1].value.split(",").map((category) => category.trim()),
  };

  console.log(book);
  // 呼叫更新類別的 API
  fetch("http://localhost:8080/update_category", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});

purchaseBtn.addEventListener("click", function () {
  const book = {
    isbn: inputs[2].value,
    purchase: +inputs[3].value,
  };

  console.log(book)

  // 呼叫購買書籍的 API
  fetch("http://localhost:8080/purchase", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});

renewBtn.addEventListener("click", function () {
  const book = {
    isbn: inputs[4].value,
    price: +inputs[5].value,
  };

  // 呼叫更新價格的 API
  fetch("http://localhost:8080/renew", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});
