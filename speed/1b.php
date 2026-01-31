<?php

$a = 0;

for ($x = 0; $x <= 10_000; $x++) {
    for ($y=0; $y <= 100_000; $y++) {
        $a= $x * $y;
    }
}

echo $a;
echo PHP_EOL;