// Capitalizes the first letter of a string
export const capitalizeFirstLetter = (string) => {
  return string?.charAt(0).toUpperCase() + string?.slice(1);
};

// Truncates the input string to a specific length and appends '...' if it's longer
export const truncate = (input, string = 6) => {
  if (input.length > string) {
    return input.substring(0, string) + "...";
  }
  return input;
};

// it gives the current year
export const getCurrentYear = () => {
  let currentYear = new Date().getFullYear();
  return currentYear;
};
