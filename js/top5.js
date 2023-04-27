fetch("http://localhost:8080/top5", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let show = document.querySelector(".show");

    // 遍历书籍信息数组，渲染到页面上
    data.forEach(function (book) {
      let bookInfo = document.createElement("div");
      bookInfo.innerHTML = `
        <div> ISBN: ${book[0]}</div>
        <div> 書名: ${book[1]}</div>
        <div> 作者: ${book[2]}</div>
        <div> 價格: ${book[3]}</div>
      `;
      show.appendChild(bookInfo);
    });
  })
  .catch((err) => console.log(err));
