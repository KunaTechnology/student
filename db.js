//Database JavaScript file
//https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API
//http://mdn.github.io/to-do-notifications/scripts/todo.js
//https://google-developers.appspot.com/chart/interactive/docs/php_example
//http://stackoverflow.com/questions/12607251/how-do-i-store-json-objects-in-indexeddb

//Structure:
//
//

//Elements:
//I will create the link to Kuna Schools Data Warehouse
//You can call the data using this form:
//			var yearColumnData = $.ajax({
//				url: '../include/student.inc.php?s=studentid', //replace studentid with the actual id
//				dataType: 'json',
//				async: false
//			}).responseText;

var db;
var newItem = [
	{student_id: "", section_id: "", teacher_name: ""}
];