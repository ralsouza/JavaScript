// Converts from YYYY-mm-dd hh:mm:ss to dd-mm-YYYY hh:mm:ss
function formatDate( stringDate ){

	var sepDateTime = stringDate.split(' ');
	var sepDate = sepDateTime[0].split('-');
	var sepTime = sepDateTime[1].split(':');
	var newDate = sepDate[2] + '-' + sepDate[1] + '-' + sepDate[0] + ' ' + sepTime.slice(0,2).join(':');

	return newDate;
}

console.log( formatDate('2014-11-26 05:04:13'))
