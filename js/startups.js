
var options = {
  valueNames: ['name', 'type', 'author', 'Title'],
  page: 12,
  plugins: [
    ListPagination({})]
};


var userList = new List('search-results', options);
var updateList = function () {
  var name = new Array();
  var type = new Array();

  $("input:checkbox[name=name]:checked").each(function () {
    name.push($(this).val());
  });

  $("input:checkbox[name=type]:checked").each(function () {
    if ($(this).val().indexOf('|') > 0) {
      var arr = $(this).val().split('|');
      var arrayLength = arr.length;
      type = type.concat(arr);
      console.log('Multiple values:' + arr);
    } else {
      type.push($(this).val());
      console.log('Single values:' + arr);
    }
  });


  var values_type = type.length > 0 ? type : null;
  var values_name = name.length > 0 ? name : null;

  userList.filter(function (item) {
    var typeTest;
    var nameTest;


    if (item.values().type.indexOf('|') > 0) {
      var typeArr = item.values().type.split('|');
      for (var i = 0; i < typeArr.length; i++) {
        if (window.CP.shouldStopExecution(0)) break;
        if (_(values_type).contains(typeArr[i])) {
          typeTest = true;
        }
      } window.CP.exitedLoop(0);
    }

    return (_(values_type).contains(item.values().type) || !values_type || typeTest) && (
      _(values_name).contains(item.values().name) || !values_name)
  });
};

userList.on("updated", function () {
  $('.sort').each(function () {
    if ($(this).hasClass("asc")) {
      $(this).find(".fa").addClass("fa-sort-alpha-asc").removeClass("fa-sort-alpha-desc").show();
    } else if ($(this).hasClass("desc")) {
      $(this).find(".fa").addClass("fa-sort-alpha-desc").removeClass("fa-sort-alpha-asc").show();
    } else {
      $(this).find(".fa").hide();
    }
  });
});

var all_type = [];
var all_name = [];
var all_difficulty = [];

updateList();

_(userList.items).each(function (item) {
  if (item.values().type.indexOf('|') > 0) {
    var arr = item.values().type.split('|');
    all_type = all_type.concat(arr);
  } else {
    all_type.push(item.values().type);
  }

  all_name.push(item.values().name);

});

_(all_type).uniq().each(function (item) {
  $(".typeContainer").append('<label><input type="checkbox" name="type" value="' + item + '">' + item + '</label><br>');
});

_(all_name).uniq().each(function (item) {
  $(".nameContainer").append('<label><input type="checkbox" name="name" value="' + item + '">' + item + '</label><br>');
});



$(document).off("change", "input:checkbox[name=type]");
$(document).on("change", "input:checkbox[name=type]", updateList);
$(document).off("change", "input:checkbox[name=name]");
$(document).on("change", "input:checkbox[name=name]", updateList);

//# sourceURL=pen.js
