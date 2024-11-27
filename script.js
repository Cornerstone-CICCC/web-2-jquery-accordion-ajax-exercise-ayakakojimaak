$(function () {
  $(".accordion-header").on("click", function () {
    $(".accordion-header").next("div").slideUp();
    if ($(this).next("div").css("display") === "none") {
      $(this).next("div").slideDown();
    }
  });

  $(".todos > button").on("click", function (event) {
    $.ajax({
      url: "https://dummyjson.com/todos",
      dataType: "json",
    })
      .done(function (data) {
        const data_stringify = JSON.stringify(data.todos);
        const data_json = JSON.parse(data_stringify);
        let html = "";
        data_json.forEach((list) => {
          html += `<li class="todo-${list.id} ${list.completed ? "completed" : ""}">${list.todo}</li>`;
        });
        $(".todos > ul").append(html);
      })
      .fail(function () {
        alert("error");
      });
  });
});
