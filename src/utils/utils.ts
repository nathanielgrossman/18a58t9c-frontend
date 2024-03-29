export const random = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const invert = (rgb: RGB, bw: boolean): RGB => {
  let channels = rgb.substring(4, rgb.length - 1).split(", ").map(channel => parseInt(channel))
  if (bw) return (channels[0] * 0.299 + channels[1] * 0.587 + channels[2] * 0.114) > 186 ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)"
  let inverted = channels.map(channel => 255 - channel);
  return `rgb(${inverted[0]}, ${inverted[1]}, ${inverted[2]})`;
}

export const coinToss = () => {
  return Math.random() >= 0.5
}