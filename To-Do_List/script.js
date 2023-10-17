$(document).ready(function () {
  // Add Task

  $(".add-task").click(function () {
    var taskText = $(".form-control").val();

    if (taskText !== "") {
      var taskItem = $(
        '<li class="list-group-item d-flex justify-content-between align-items-center"></li>'
      ).text(taskText);

      var deleteButton = $(
        '<button class="btn btn-danger btn-sm delete-task">Delete</button>'
      );
      taskItem.append(deleteButton);

      $(".list-group").append(taskItem);

      $(".form-control").val("");
    }
  });

  // Delete Task

  $(document).on("click", ".delete-task", function () {
    $(this).parent().remove();
  });
});
