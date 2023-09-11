const getCreatedDate = () => {
  const now = new Date();
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const year = now.getFullYear();
  const month = months[now.getMonth()];
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  return `Created on ${month} ${day}, ${year} ${hours}:${minutes}`;
};

export default getCreatedDate;
