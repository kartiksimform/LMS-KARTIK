
    <div class="main">
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand text-uppercase" href="#">Measurement Converter</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">

        <li class="nav-item">
          <a class="nav-link <?php if(isset($_REQUEST['name'])){if($_REQUEST['name']=='ltd'){echo "active";}} ?>" href="index.php?name=ltd">Lenght To Distance</a>
        </li>
        <li class="nav-item">
          <a class="nav-link <?php if(isset($_REQUEST['name'])){if($_REQUEST['name']=='a'){echo "active";}} ?>" href="index.php?name=a">Area</a>
        </li>
        <li class="nav-item">
          <a class="nav-link  <?php if(isset($_REQUEST['name'])){if($_REQUEST['name']=='vac'){echo "active";}} ?>" href="index.php?name=vac">Volume And Capacity</a>
        </li>
        <li class="nav-item">
          <a class="nav-link  <?php if(isset($_REQUEST['name'])){if($_REQUEST['name']=='maw'){echo "active";}} ?>" href="index.php?name=maw"> Mass And Weight</a>
        </li>
        <li class="nav-item">
          <a class="nav-link  <?php if(isset($_REQUEST['name'])){if($_REQUEST['name']=='s'){echo "active";}} ?>" href="index.php?name=s"> Speed</a>
        </li>
      
      </ul>
    </div>
  </div>
</nav>
    </div>
