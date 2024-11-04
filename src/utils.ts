export const colorConverter = {
  toInt(hex) {
    // Remove "#" if it exists
    hex = hex.replace(/^#/, '');
    // Parse the hexadecimal string to an integer
    return parseInt(hex, 16);
  },
  toHex(integer) {
    // Convert the integer to a hexadecimal string
    const hex = integer.toString(16).toUpperCase();
    // Add "#" at the beginning
    return '#' + hex;
  },
  HSLtoHEX(h, s, l) {
    l /= 100;
    const a = (s * Math.min(l, 1 - l)) / 100;
    const f = (n) => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color)
        .toString(16)
        .padStart(2, '0'); // convert to Hex and prefix "0" if needed
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  },
};
