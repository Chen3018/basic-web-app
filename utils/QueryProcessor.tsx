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

 

  return "";
}
