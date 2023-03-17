<?php



$final_result = "";
$select_box_1 = $_POST['select_box_1'];
$select_box_2 = $_POST['select_box_2'];
$input_box1 = $_POST['input_box1'];
$input_box2 = $_POST['input_box2'];
$options = $_POST['options'];
if ($input_box1 == null) {
    $input_box1 = 0;
}

$converted_result = $input_box1;

if ($options == "ltd") {

    // conver select_box_1 to meter
    function convert_to_meter($selection)
    {
        global $converted_result;
        switch ($selection) {
            case "km":
                $converted_result *= 1000;
                break;
            case "hm":
                $converted_result *= 100;
                break;
            case "dam":
                $converted_result *= 10;
                break;
            case "m":
                $converted_result *= 1;
                break;
            case "dm":
                $converted_result *= 0.1;
                break;
            case "cm":
                $converted_result *= 0.01;
                break;
            case "mm":
                $converted_result *= 0.001;
                break;
        }
    }
    // conver  meter to any
    function meter_to_any($selection)
    {
        global $converted_result;
        switch ($selection) {
            case "km":
                $converted_result /= 1000;
                break;
            case "hm":
                $converted_result /= 100;
                break;
            case "dam":
                $converted_result /= 10;
                break;
            case "m":
                $converted_result /= 1;
                break;
            case "dm":
                $converted_result /= 0.1;
                break;
            case "cm":
                $converted_result /= 0.01;
                break;
            case "mm":
                $converted_result /= 0.001;
                break;
        }
    }
    convert_to_meter($select_box_1);
    meter_to_any($select_box_2);

    $final_result = $converted_result;
}


else if ($options == "a") {

    function convert_to_meter($selection)
    {
        global $converted_result;
        switch ($selection) {
            case "in":
                $converted_result *= 0.00064516;
                break;
            case "ft":
                $converted_result *= 0.09290304;
                break;
            case "yd":
                $converted_result *= 0.83612736;
                break;
            case "yd":
                $converted_result *= 0.83612736;
                break;
            case "mi":
                $converted_result *= 2589988.110336;
                break;
            case "ac":
                $converted_result *= 4046.8564224;
                break;
            case "ha":
                $converted_result *= 10000;
                break;
            case "mm":
                $converted_result *= 0.000001;
                break;
            case "cm":
                $converted_result *= 0.0001;
                break;
            case "m":
                $converted_result *= 1;
                break;
            case "km":
                $converted_result *= 1000000;
                break;
        }
    }
    function meter_to_any($selection)
    {
        global $converted_result;
        switch ($selection) {
            case "in":
                $converted_result /= 0.00064516;
                break;
            case "ft":
                $converted_result /= 0.09290304;
                break;
            case "yd":
                $converted_result /= 0.83612736;
                break;
            case "yd":
                $converted_result /= 0.83612736;
                break;
            case "mi":
                $converted_result /= 2589988.110336;
                break;
            case "ac":
                $converted_result /= 4046.8564224;
                break;
            case "ha":
                $converted_result /= 10000;
                break;
            case "mm":
                $converted_result /= 0.000001;
                break;
            case "cm":
                $converted_result /= 0.0001;
                break;
            case "m":
                $converted_result /= 1;
                break;
            case "km":
                $converted_result /= 1000000;
                break;
        }
    }
    convert_to_meter($select_box_1);
    meter_to_any($select_box_2);

    $final_result = $converted_result;
}
else if($options=="vac"){
function meter_to_any($selection)
{
    global $converted_result;
    switch ($selection) {
        case "km":
            $converted_result /= 1000000000 ;
            break;
        case "hm":
            $converted_result /= 1000000;
            break;
        case "dam":
            $converted_result /= 1000;
            break;
        case "m":
            $converted_result /= 1;
            break;
        case "dm":
            $converted_result /= 0.001;
            break;
        case "cm":
            $converted_result /= 0.000001;
            break;
        case "mm":
            $converted_result /= 0.000000001;
            break;
         }
}
function convert_to_meter($selection)
{
    global $converted_result;
    switch ($selection) {
        case "km":
            $converted_result *= 1000000000 ;
            break;
        case "hm":
            $converted_result *= 1000000;
            break;
        case "dam":
            $converted_result *= 1000;
            break;
        case "m":
            $converted_result *= 1;
            break;
        case "dm":
            $converted_result *= 0.001;
            break;
        case "cm":
            $converted_result *= 0.000001;
            break;
        case "mm":
            $converted_result *= 0.000000001;
            break;
         }    
}

convert_to_meter($select_box_1);
meter_to_any($select_box_2);
$final_result=$converted_result;
}

else if($options=="maw"){


    function convert_to_meter($selection)
    {
        global $converted_result;
        switch ($selection) {
            case "kg":
                $converted_result *= 1000 ;
                break;
            case "hg":
                $converted_result *= 100;
                break;
            case "dag":
                $converted_result *= 10;
                break;
            case "g":
                $converted_result *= 1;
                break;
            case "dg":
                $converted_result *= 0.1;
                break;
            case "cg":
                $converted_result *= 0.01;
                break;
            case "mg":
                $converted_result *= 0.001;
                break;
            }    
        }
    function meter_to_any($selection)
    {
        global $converted_result;
        switch ($selection) {
            case "kg":
                $converted_result /= 1000 ;
                break;
            case "hg":
                $converted_result /= 100;
                break;
            case "dag":
                $converted_result /= 10;
                break;
            case "g":
                $converted_result /= 1;
                break;
            case "dg":
                $converted_result /= 0.1;
                break;
            case "cg":
                $converted_result /= 0.01;
                break;
            case "mg":
                $converted_result /= 0.001;
                break;
             }    
    }

    convert_to_meter($select_box_1);
    meter_to_any($select_box_2);
    $final_result = $converted_result;
}
else if($options=="s"){
    
    function convert_to_meter($selection)
    {
        global $converted_result;
        switch ($selection) {
    
            case "kph":
                $converted_result *= 0.277778 ;
                break;
            case "mph":
                $converted_result *= 0.44704;
                break;
            case "mps":
                $converted_result *= 1;
                break;
            case "fps":
                $converted_result *= 0.3048;
                break;
            }    
        }
    function meter_to_any($selection)
    {
        global $converted_result;
        switch ($selection) {
    
            case "kph":
                $converted_result /= 0.277778 ;
                break;
            case "mph":
                $converted_result /= 0.44704;
                break;
            case "mps":
                $converted_result /= 1;
                break;
            case "fps":
                $converted_result /= 0.3048;
                break;
            }    
        }
        convert_to_meter($select_box_1);
        meter_to_any($select_box_2);
        $final_result = $converted_result;
        
    }
   
echo $final_result;
// echo $url;
