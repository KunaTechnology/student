<!DOCTYPE html>
<html>
<!--<html manifest="appcache.manifest">-->
<head>
	<meta charset="utf-8" />
	<title>KHS Student Info</title>
	<link href="style.css" type="text/css" rel="stylesheet" />
	<script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
</head>
<body>
<!-- https://msdn.microsoft.com/en-us/hh781002.aspx -->
<!-- https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API -->
<?php echo $_SERVER['LOGON_USER']; ?>
<h1>Kuna High School</h1>
<h3>Student Information App</h3>
<p>This is just to show that we can build anything we want and that the browser has the capability,
with HTML5, to run offline including access to a database.  So we create the link to extract the student
specific data from the Data Warehouse and store it locally in IndexedDB as JavaScript tables.</p>
<p>Draw the data from the tables to display on the page.  We could even create it as one page with hidden div's that
expand on touch of the button to display the data, no need to have multiple pages to refresh and store.</p>
<p>We need to make the page responsive so that it displays nicely on any size device and screen orientation.  That
isn't a difficult task, but can be daunting at first.  I am here to help and will provide access to those who require access.</p>
<a href="mailto:mrauch@kunaschools.org">mrauch@kunaschools.org</a>
</body>
<script src="db.js"></script>
</html>
