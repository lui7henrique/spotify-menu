export const millisToMinutesAndSeconds = (millis: number) => {
  const minutes = Math.floor(millis / 60000);
  const seconds = ((millis % 60000) / 1000).toFixed(0);
  const result = minutes + ":" + (+seconds < 10 ? "0" : "") + seconds;

  return result;
};
