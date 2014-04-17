$('#history-button').popover({
	html: true,
	content: $("#history-content").html(),
	title: "Previous queries",
	placement: "bottom",
	container: "#history-container"
})

$('#builder-button').popover({
	html: true,
	content: $("#builder-content").html(),
	title: "Query builder",
	placement: "bottom",
	container: "#builder-container"
})


$('#builder-container').delegate('.type-dropdown li', 'click', function(event) {
	console.log("asd")
	// change input fields based on value
	switch($(this).find('a').text()) {
		case "author":
			console.log("author");
	}



	// create a new row if this is the last one
	var $tr = $(document.createElement('tr'));
	$tr.html($('#builder-row').html());
	$('#builder-container tbody').append($tr);

	// set string on button
})

$( document.body ).on( 'click', '.dropdown-menu li', function( event ) {
 	console.log('dropdown click');
   var $target = $( event.currentTarget );
 
   $target.closest( '.btn-group' )
      .find( '[data-bind="label"]' ).text( $target.text() )
         .end()
      .children( '.dropdown-toggle' ).dropdown( 'toggle' );
 
   return false;
 
});

$(".file-table tbody").html($("#fileset1").html());

$("#workspace-link").click(function() {
	$("#search-link").find(".glyphicon").css("opacity", 1);
	$("#workspace-link").find(".glyphicon").css("opacity", 0);
	$("#workspace-link").find(".text").css("text-decoration", "underline");
	$("#search-link").find(".text").css("text-decoration", "none");

	$(".file-table tbody").html($("#fileset2").html());
})

$("#search-link").click(function() {
	$("#search-link").find(".glyphicon").css("opacity", 0);
	$("#workspace-link").find(".glyphicon").css("opacity", 1);
	$("#search-link").find(".text").css("text-decoration", "underline");
	$("#workspace-link").find(".text").css("text-decoration", "none");

	$(".file-table tbody").html($("#fileset1").html());
})