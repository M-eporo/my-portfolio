const startDate = new Date(2018,5,1);
const now = new Date();
const yearDiff = now.getFullYear() - startDate.getFullYear();
document.getElementById("year").textContent = yearDiff;