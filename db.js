//Database JavaScript file
//https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API
//-->https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Basic_Concepts_Behind_IndexedDB
//-->https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB
//--Example>https://mdn.mozillademos.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB$samples/Full_IndexedDB_example?revision=783011
//http://mdn.github.io/to-do-notifications/scripts/todo.js
//https://google-developers.appspot.com/chart/interactive/docs/php_example
//http://stackoverflow.com/questions/12607251/how-do-i-store-json-objects-in-indexeddb

//Structure:
//Include the database structure, what elements do you want to store?
//course_section_id, course_short_title, term_code, room, period, teacher_last_name, teacher_first_name, teacher_email

//Elements:
//I will create the link to Kuna Schools Data Warehouse
//Data Warehouse will return the above elements for the current term and try to filter on start and end dates to only
//provide latest schedule
//You can call the data using this form:
var dbData = $.ajax({
	url: '../include/student.inc.php?s=309983', //we will use Josiah for testing and I will replace with php code to get ID
	dataType: 'json',
	async: false
}).responseText;

