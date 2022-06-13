<?php

$services=array(array("name"=>"Malaria parasite by smear test", "cost"=>"150"),
array("name"=>"Cleaning and dressing", "cost"=>"300"),
array("name"=>"Registration","cost"=>"100"), 
array("name"=>"Revisit fee", "cost"=>"50"));

echo json_encode($services);

?>