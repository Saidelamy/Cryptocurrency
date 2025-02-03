export const formatNumber = (number) => {
  if (number >= 1_000_000_000) {
    return (number / 1_000_000_000).toFixed(2) + " B";
  } else if (number >= 1_000_000) {
    return (number / 1_000_000).toFixed(2) + " M";
  } else number;
};
