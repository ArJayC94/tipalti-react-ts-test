export const formatDate = (dateTime: string) => {
  const date = new Date(dateTime);

  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
};
