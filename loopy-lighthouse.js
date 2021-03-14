let value = 100

for (value = 100; value <= 200; value++) {
  if ((value % 3 === 0) && (value % 4 === 0)) {
      console.log("LoopyLighthouse");
    } else if (value % 3 === 0) {
      console.log("Loopy");
    } else if (value % 4 === 0) {
      console.log("Lighthouse");
    } else {
      console.log(value);
    }
  }