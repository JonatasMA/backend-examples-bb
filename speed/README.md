```bash
time php 1b.php
```

```bash
time node 1b.js
```

```bash
time python3 1b.py
```

```bash
rustc -C strip=debuginfo 1b.rs -o 1b_rs
sudo chmod +x ./1b_rs
time ./1b_rs
```

```bash
gcc 1b.c -o 1b_c
sudo chmod +x ./1b_c
time ./1b_c
```