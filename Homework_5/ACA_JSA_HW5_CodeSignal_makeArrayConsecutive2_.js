//CodeSignal_makeArrayConsecutive2_
function makeArrayConsecutive2(statues) {
  let counter = 0;
  for (let j = 0; j < statues.length; j++) {
    for (let i = 0; i < statues.length; i++) {
      if (statues[i] > statues[i + 1]) {
        let tmp = statues[i];
        statues[i] = statues[i + 1];
        statues[i + 1] = tmp;
      }
    }
  }
  for (let i = 0; i < statues.length - 1; i++) {
    let diff = statues[i + 1] - statues[i];
    if (diff != 1) {
      counter += diff - 1;
    }
  }
  return counter;
}