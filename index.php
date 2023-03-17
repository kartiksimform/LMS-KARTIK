<?php
$ltd="";
$a="";
$vac="";
$maw="";
$s="";
if(isset($_GET['name'])){
    $name=$_GET['name'];
    $$name="selected";
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php include("link.php") ?>
    <title>Measurment Converter</title>
</head>

<body>
    <?php
include("header.php");
    ?>
    <section class="selection">

        <div class="cointiner">
            
            <form class=" d-flex flex-column justify-content-center ">
<div class="upper width-fit  d-flex  justify-content-center w-100" >
    <select class="w-auto form-select chnagebg form-select-lg mb-3 " id="options" aria-label=".form-select-lg example">

        <option value="ltd" <?php echo $ltd ?>> Length To Distance </option>
        <option value="a" <?php echo $a ?>> Area </option>
        <option value="vac" <?php echo $vac ?> >Volume And Capacity  </option>
        <option value="maw" <?php echo $maw ?>> Mass And Weight </option>
        <option value="s" <?php echo $s ?>> Speed </option>
         </select>

</div>
<div class="lowwer d-flex align-items-center flex-row width-100 justify-content-evenly">
    
                <div class="box flex-column">

                    <div class="col-auto ">
                    
                        <input type="number"  min="0" value="1" class="form-control m-2" id="input1">
                    </div>
                    <select class="form-select chnagebg m-2 form-select-lg mb-3" id="select1" aria-label=".form-select-lg example">
                
                    </select>

                </div>
                <div class="box">
                    <p><img width="30px" id="exchange" src="image/ex.png" alt="="></p>
                </div>

                <div class="box flex-column">
                    <div class="col-auto">
                      
                        <input type="text" disabled class="form-control m-2 " id="input2" placeholder="" value="1">
                    </div>
                    <select class="form-select m-2  chnagebg form-select-lg mb-3" id="select2" aria-label=".form-select-lg example">
       
                    </select>

                </div>
                
</div>
            </form>
        </div>

    </section>


    <?php
include("footer.php");
    ?>

</body>

</html>