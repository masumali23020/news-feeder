function getFormattedDate(value = "2024-02-07T05:05:00Z") {
  const date = new Date(value);

  const options = {
    year: "numeric",
    month: "short",
    day: "2-digit",
  };

  return new Intl.DateTimeFormat("en-us", options).format(date);
}

export { getFormattedDate };
