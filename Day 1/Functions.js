/*
 * Create the function factorial here
 */
function factorial (n) {
    for (var i=n-1; i >= 1; i--) {
         n *= i;
    }
    return n;
  }