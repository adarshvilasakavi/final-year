$(".Attendance").click(function () {
  $(".marks-table").css("display", "none")
  $(".attendance-table").css("display", "table")
})
$(".Marks").click(function () {
  $(".attendance-table").css("display", "none")
  $(".marks-table").css("display", "table")
})
