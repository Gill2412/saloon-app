function draw_table()
{
	$("#results").empty();
	$.getJSONuncached = function (url)
	{
		return $.ajax(
		{
			url: url,
			type: 'GET',
			cache: false,
			success: function (html)
			{
				$("#results").append(html);
				select_row();
			}
		});
	};
	$.getJSONuncached("/get/html")
};

const e = require("express");

function select_row()
{
	$("#TableSalon tbody tr[id]").click(function ()
	{
        
		$(".selected").removeClass("selected");
		$(this).addClass("selected");
		var Days = $(this).prevAll("tr").children("td[colspan='3']").length - 1;
		var Details = $(this).attr("id") - 1;
		delete_row(Days, Details);
	})
};

function delete_row(dy, dt)
{
	$("#delete").click(function ()
	{
		$.ajax(
		{
			url: "/post/delete",
			type: "POST",
			data:
			{
				Days: dy,
				Details: dt
			},
			cache: false,
			success: setTimeout(draw_table, 1000)
		})
	})
};

$(document).ready(function ()
{
	draw_table();
});

