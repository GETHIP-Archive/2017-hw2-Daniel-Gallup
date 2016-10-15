$(document).ready(function() 
{
  $.getJSON("https://raw.githubusercontent.com/GETHIP/HW2-Template/master/daniel.json", function(data)
  {
    console.log(data);
	
    $("#profile-name").text(data.firstName + " " + data.lastName);
    $("#age").text(data.age);
    $("#profile-picture").attr("src", data.picture);
	
    $.each(data.nickNames, function(key, value)
	{
		$("#nicknames").append("<li>" + value.nick + "</li>");
    });
	
	$.each(data.bookMarks, function(k, v)
	{
		$("#bookmarks").append("<li><a src=\"" + v.key + "\">" + v.key + "</li>");
	});
  });
});
