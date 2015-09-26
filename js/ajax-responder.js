$(function() {
	$.getJSON('ajax/data.json', function(json){

		$('#top_address').text(json.address);
		$('#footer_address').text(json.address);

		$('#top_telephone').text(json.telephone);
		$('#footer_telephone').text(json.telephone);

		$('#map').html("<img src=" + json.map + ">");
	});
});
