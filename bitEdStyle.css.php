<?php
require "lessc.inc.php";

$less = new lessc;
try
{
$output="/* BitEdJS style generated by less.php for dev*/\n";

$output.=$less->compileFile("css/main.less");
header("Content-Type: text/css");
echo $output;

} catch (exception $e)
{
    echo "Error : ".$e;
}