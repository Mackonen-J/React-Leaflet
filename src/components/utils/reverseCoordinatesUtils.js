export const reverseCoordinates = (data) =>
  data.map(function reverse(item) {
    return Array.isArray(item) && Array.isArray(item[0])
      ? item.map(reverse)
      : item.reverse();
  });
