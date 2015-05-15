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
//This call returns this string, which can be adjusted to a JS array
//[{"course_section_id":"HR 11B-K11","course_short_title":"Advisory 11 B","term_code":"S2","period":"KH","room":"Commons","teacher_last_name":"Martinez","teacher_first_name":"David","teacher_email":"dmartinez@kunaschools.org"},{"course_section_id":"1411-K21","course_short_title":"Gen Chemistry B","term_code":"S2","period":"1","room":"124","teacher_last_name":"Fisher","teacher_first_name":"Michael","teacher_email":"mfisher@kunaschools.org"},{"course_section_id":"1078-K02","course_short_title":"*PTECH CC Desktop Oper Sys Support","term_code":"S2","period":"2","room":"211","teacher_last_name":"Eysel","teacher_first_name":"Karin","teacher_email":"Keysel@kunaschools.org"},{"course_section_id":"1311-K53","course_short_title":"Algebra 2 B","term_code":"S2","period":"3","room":"228","teacher_last_name":"Jordan","teacher_first_name":"Dennis","teacher_email":"djordan@kunaschools.org"},{"course_section_id":"1506-K34","course_short_title":"US History 2 B","term_code":"S2","period":"4","room":"218","teacher_last_name":"Donaldson","teacher_first_name":"Tracy","teacher_email":"tdonaldson@kunaschools.org"},{"course_section_id":"1261-K95","course_short_title":"Lang Arts 3 B","term_code":"S2","period":"5","room":"201","teacher_last_name":"Welker","teacher_first_name":"Lindsey","teacher_email":"lwelker@kunaschools.org"},{"course_section_id":"1502-K526","course_short_title":"Economics","term_code":"S2","period":"6","room":"217","teacher_last_name":"Jensen","teacher_first_name":"Ken","teacher_email":"kjensen@kunaschools.org"},{"course_section_id":"1606-K87","course_short_title":"*CC Biology B","term_code":"S2","period":"7","room":"119","teacher_last_name":"Murray","teacher_first_name":"Stuart","teacher_email":"smurray@kunaschools.org"},{"course_section_id":"1126-K328","course_short_title":"PE Sports","term_code":"S2","period":"8","room":"Gym","teacher_last_name":"Owens","teacher_first_name":"Patrick","teacher_email":"powens@kunaschools.org"}]
//You can call the data using this form:

var dbData = $.ajax({
	url: '../include/student.inc.php?s=309983', //we will use Josiah for testing and I will replace with php code to get ID
	dataType: 'json',
	async: false
}).responseText;
if(dbData!='null'){//check to see if no data returned
	var stuData = eval('(' + dbData + ')');//format data into javascript array
	//After much thought I realized that we will need to use IndexedDB because the student schedule could change and we can't
	//cache the schedule file or we would have to change the cache file each time schedules change...so we don't cache the student php file
	//we store it in the IndexedDB and allow it to change when access is restored, unless we can use the wireless and not have to cache anything?
	var ht = "<table id='schedule'>\n";
	ht += '<tr><th>Meet</th><th>Term</th><th>Crs-Sec</th><th>Title</th><th>Teacher</th><th>Room</th></tr>\n';
	//Display data with html table using javascript to fill in html div
	for(var i = 0; i<stuData.length; i++)
	{
		ht += '<tr>';
		ht += '<td>' + stuData[i].period + '</td>';
		ht += '<td>' + stuData[i].term_code + '</td>';
		ht += '<td>' + stuData[i].course_section_id + '</td>';
		ht += '<td>' + stuData[i].course_short_title + '</td>';
		ht += '<td>' + stuData[i].teacher_last_name + ', ' + stuData[i].teacher_first_name + '</td>'; //add teacher email link
		ht += '<td>' + stuData[i].room + '</td>';
		ht += '</tr>\n';
	}
	ht += '</table><br />\n';
	document.getElementById('Student Schedule').innerHTML=ht;
} else {
	document.getElementById('Student Schedule').innerHTML='';//empty div if no data to display
}
