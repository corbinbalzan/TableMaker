/*
$goButton = $('#submit');

$goButton.on( "click", function(){ 
  var value = $("#textInput").val();
  trigger(value)


})
*/


  $("#textInput").on('keyup', function (e) {
      if (e.keyCode == 13) {
      		$("#tBody").empty();
			trigger();	
              }

  });

$("#submit1").on('click', function () { 
	$("#tBody").empty();
	trigger();

});

var printer = function(i){
	count = i + 1 
	var something = '<tr class="child ' + count + '"><td class="counter">Count:' + count + ' </td><td>Corbin Balzan</td></tr>';
	//$(".counter").text(i);
	return something;
};

var trigger = function(){
	var value = $("#textInput").val();
	for (var i = 0; i < value; i += 1){
		$('#mainTable tbody').append(printer(i));
	}

};
/*
var shade = function(){
	var value2 = $("#tBody tr").length;
	for (var i = 0; i < value2; i += 1){
		if (i === 7){
			$(".child6").addClass("shade");

		};
	};
};
*/
$("#shade").on('click', function () { 
	//shade();
	$("#tBody .child:odd").addClass("odd");
	//$("#tBody tr:nth-child(2)").css("border", "4px solid red");
});

$("#tenRows").on('click', function () { 

	$("#tBody .child:nth-child(10n) td").addClass("border");
	//$("#tBody tr:nth-child(2)").css("border", "4px solid red");
});

$("#reset").on('click', function () { 
	//shade();
	$("#tBody .child:odd").removeClass("odd");
	$("#tBody .child:nth-child(10n) td").removeClass("border");

	//$("#tBody tr:nth-child(2)").css("border", "4px solid red");
});













