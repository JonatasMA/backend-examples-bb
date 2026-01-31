#include <stdio.h>

int main() {
  long long a = 0;
  for (long long x = 0; x <= 100000; x++) {
    for (int y = 0; y <= 10000; y++) {
      a = x * y;
    }
  }
  printf("%lld\n", a);
}