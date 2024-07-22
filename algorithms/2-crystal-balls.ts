function two_crystal_balls(breaks: boolean[]): number {
  const jump_amt = Math.floor(Math.sqrt(breaks.length));

  let i = jump_amt;
  for (; i < breaks.length; i += jump_amt) {
    if (breaks[i]) {
      break;
    }
  }

  i -= jump_amt;
  for (let j = 0; j < jump_amt && i < breaks.length; j += 1, i += 1) {
    if (breaks[i]) {
      return i;
    }
  }

  return -1;
}

two_crystal_balls([false, true]);

// this is just for reference, maybe I'll test is laterr
