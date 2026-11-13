/**
 * Dynamic timeline and experience calculator
 */

export function calculateTotalExperience(startDateStr = "2022-12-01") {
  const start = new Date(startDateStr);
  const now = new Date();

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const decimalYears = (years + months / 12).toFixed(1);
  return {
    years,
    months,
    label: `${decimalYears}+ YEARS ENTERPRISE`,
    shortLabel: `${decimalYears}+ YRS`,
  };
}

export function formatTenure(startDateStr, endDateStr = null) {
  const start = new Date(startDateStr);
  const end = endDateStr ? new Date(endDateStr) : new Date();

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  if (years > 0 && months > 0) {
    return `${years} YR${years > 1 ? "S" : ""} ${months} MO${months > 1 ? "S" : ""}`;
  }
  if (years > 0) {
    return `${years} YR${years > 1 ? "S" : ""}`;
  }
  return `${months} MO${months > 1 ? "S" : ""}`;
}
