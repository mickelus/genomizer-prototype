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