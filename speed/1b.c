#include <stdio.h>

int main() {
  long long a = 0;
  for (long long x = 0; x <= 10000; x++) {
    for (int y = 0; y <= 100000; y++) {
      a = x * y;
    }
  }
  printf("%lld\n", a);
}