fn main() {
    let mut a = 0;
    for x in 0..=10_000 {
        for y in 0..=100_000 {
            a = x * y;
        }
    }
    println!("{}", a);
}