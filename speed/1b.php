<?php

$a = 0;

for ($x = 0; $x <= 100_000; $x++) {
    for ($y=0; $y <= 10_000; $y++) {
        $a= $x * $y;
    }
}

echo $a . PHP_EOL;