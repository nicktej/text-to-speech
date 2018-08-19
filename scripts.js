var API_ENDPOINT = "INSERT_API_HERE"

document.getElementById("sayButton").onclick = function(){

		document.getElementById('sayButton').disabled = false; 
		var inputData = {
			"voice": $('#voiceSelected option:selected').val(),
			"filename" : $('#fileName').val(),
			"text" : $('#postText').val()
		};

		$.ajax({
			url: API_ENDPOINT,
			type: 'POST',
			data:  JSON.stringify(inputData)  ,
			contentType: 'application/json; charset=utf-8',
			success: function (response) {
				document.getElementById("postIDreturned").textContent="Post ID: " + response;
			},
			error: function () {
				alert("error");
			}
		});

}


document.getElementById("searchButton").onclick = function(){

	var postId = $('#postId').val();

	$.ajax({
		url: API_ENDPOINT + '?postId='+postId,
		type: 'GET',
		success: function (response) {

			$('#posts tr').slice(1).remove();

			jQuery.each(response, function(i,data) {

				var player = "<audio controls><source src='" + data['url'] + "' type='audio/mpeg'></audio>"
				var text = "<input type=\"submit\" onclick=\"showText("+ i +")\" value=\"Show/Hide text\" id=\"showText\"><br>" + "<span id=\"textHere" + i + "\" style=\"display:none\">"+ data['text']+"<span>"
				if (typeof data['url'] === "undefined") {
					var player = ""
				}

				$("#posts").append("<tr> \
					<td>" + data['id'] + "</td> \
					<td>" + data['filename'] + "</td> \
					<td>" + data['voice'] + "</td> \
					<td>" + text + "</td> \
					<td>" + data['status'] + "</td> \
					<td>" + player + "</td> \
					</tr>");
			});
		},
		error: function () {
			alert("error");
		}
	});
}

document.getElementById("postText").onkeyup = function(){
	var length = $(postText).val().length;
	document.getElementById("charCounter").textContent="Characters: " + length;
}

function showText(i) {
    var x = document.getElementById("textHere" + i);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
