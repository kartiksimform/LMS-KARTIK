
function exchangeval(){

   $("#input1").val($("#input2").val());
   calculate();

}
function calculate() {
    var select1 = $("#select1").val();
    var select2 = $("#select2").val();
    var input1 = $("#input1").val();
    var input2 = $("#input2").val();
    var options = $("#options").val();

 
    $.ajax({
        url: "find.php",
        type: "post",
        data: {
            'options': options,
            'select_box_1': select1,
            'select_box_2': select2,
            'input_box1': input1,
            'input_box2': input2,
        },
        success: function (data) {
            $("#input2").val(data)
        },

    })
}

function unit_conversation() {

    var op = $("#options");
    var array_of_unit = "";
    if (op.val() == "ltd") {

        array_of_unit = [
            ["kilometer (km)", 'km'],
            ["hectometer (hm)", 'hm'],
            ["decameter (dam)", 'dam'],
            [" meter (m)", 'm'],
            [" decimeter (dm)", 'dm'],
            [" centimeter (cm)", 'cm'],
            [" millimeter (mm)", 'mm'],
        ]
    }
    if (op.val() == "a") {

        array_of_unit = [
            ['square kilomiter', 'km'],
            ['square inch', 'in'],
            ['square foot', 'ft'],
            ['square yard', 'yd'],
            ['square mile', 'mi'],
            ['square acre', 'ac'],
            ['square hectare', 'ha'],
            ['square millimiter', 'mm'],
            ['square centimeter', 'cm'],
            ['square meter', 'm']
        ]
    }
    if (op.val() == "vac") {

        array_of_unit = [
            ["cubic kilometer	", 'km'],
            ["hectometer cubic	 ", 'hm'],
            ["decameter cubic	 (dam)", 'dam'],
            [" cubic meter	 (m)", 'm'],
            ["cubic decimeter (dm)", 'dm'],
            ["cubic centimeter (cm)", 'cm'],
            ["cubic millimeter (mm)", 'mm'],
        ]
    }
    if (op.val() == "maw") {

        array_of_unit = [
            ["kilogram", 'kg'],
            ["hectogram", 'hg'],
            ["decagram", 'dg'],
            ["gram", 'g'],
            ["decigram", 'dag'],
            ["centigram", 'cg'],
            ["miligram", 'mg'],
        ]
    }
    if (op.val() == "s") {

        array_of_unit = [
        ['kilometers per hour','kph'], 
        ['miles per hour','mph'], 
        ['meters per hour','mps'], 
        ['feet per second','fps'], 
        ]
    }


    let s = "";
    for (var i = 0; i < array_of_unit.length; i++) {

        s += "<option class='form-control chnagebg' value='" + array_of_unit[i][1] + "' >" + array_of_unit[i][0] + "</option>";

    }

    $("#select2").html(s);
    $("#select1").html(s);

    calculate();
}
$(document).ready(function () {
    $('.nav-link').on('click',function(){
  
    })
    calculate();
    unit_conversation();


    $("#options").on("input", unit_conversation)
    $("#exchange").on("click", exchangeval)


    $("#select1").on('input', calculate);
    $("#input1").on("input", calculate);
    $("#select2").on('input', calculate);





})

