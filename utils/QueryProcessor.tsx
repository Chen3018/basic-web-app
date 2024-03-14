export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    return (
      "My Andrew ID is chenjiaf."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return (
      "chenjiaf"
    );
  }
  
  if (query.toLowerCase().includes("plus")) {
    const numbers = query.substring(8).split(' plus ');
    return (
      (Number(numbers[0]) + Number(numbers[1].substring(0, numbers[1].length - 1))).toString()
    );
  }

  if (query.toLowerCase().includes("largest")) {
    const largest = query.substring(47).split(', ');
    const list = [Number(largest[0]), Number(largest[1]), Number(largest[2].substring(0, largest[2].length - 1))];
    return (
      Math.max(...list).toString()
    );
  }

  if (query.toLowerCase().includes("multiplied")) {
    const numbers = query.substring(8).split(' multiplied by ');
    return (
      (Number(numbers[0]) * Number(numbers[1].substring(0, numbers[1].length - 1))).toString()
    );
  }

  if (query.toLowerCase().includes("square")) {
    const largest = query.substring(60).split(', ');
    const list = [Number(largest[0]), Number(largest[1]), Number(largest[2]), Number(largest[3]), Number(largest[4]), Number(largest[5]), Number(largest[6].substring(0, largest[6].length - 1))];\
    const r = (0).toString()
    if (Math.sqrt(list[0]) % 1 == 0 && Math.cbrt(list[0]) % 1 == 0) {
      const r = list[0].toString()
    }
    if (Math.sqrt(list[1]) % 1 == 0 && Math.cbrt(list[1]) % 1 == 0) {
      const r = list[1].toString()
    }
    if (Math.sqrt(list[2]) % 1 == 0 && Math.cbrt(list[2]) % 1 == 0) {
      const r = list[2].toString()
    }
    if (Math.sqrt(list[3]) % 1 == 0 && Math.cbrt(list[3]) % 1 == 0) {
      const r = list[3].toString()
    }
    if (Math.sqrt(list[4]) % 1 == 0 && Math.cbrt(list[4]) % 1 == 0) {
      const r = list[4].toString()
    }
    if (Math.sqrt(list[5]) % 1 == 0 && Math.cbrt(list[5]) % 1 == 0) {
      const r = list[5].toString()
    }
    if (Math.sqrt(list[6]) % 1 == 0 && Math.cbrt(list[6]) % 1 == 0) {
      const r = list[6].toString()
    }

    return (
      r
    );
  }

  return "";
}
