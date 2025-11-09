// ATO Rates: accommodation + per diem per salary band
const atoRates = {
  "Adelaide":{"1":{accommodation:158, breakfast:34.75, lunch:39.10, dinner:66.65, full:140.50, incidentals:24.50},
                "2":{accommodation:211, breakfast:37.85, lunch:53.45, dinner:75, full:166.30, incidentals:35.05},
                "3":{accommodation:211, breakfast:42.15, lunch:59.60, dinner:83.40, full:185.15, incidentals:35.05}},
    "Brisbane":{"1":{accommodation:181, breakfast:34.75, lunch:39.10, dinner:66.65, full:140.50, incidentals:24.50},
                "2":{accommodation:257, breakfast:37.85, lunch:53.45, dinner:75, full:166.30, incidentals:35.05},
                "3":{accommodation:257, breakfast:42.15, lunch:59.60, dinner:83.40, full:185.15, incidentals:35.05}},
    "Canberra":{"1":{accommodation:178, breakfast:34.75, lunch:39.10, dinner:66.65, full:140.50, incidentals:24.50},
                "2":{accommodation:246, breakfast:37.85, lunch:53.45, dinner:75, full:166.30, incidentals:35.05},
                "3":{accommodation:246, breakfast:42.15, lunch:59.60, dinner:83.40, full:185.15, incidentals:35.05}},
    "Darwin":{"1":{accommodation:220, breakfast:34.75, lunch:39.10, dinner:66.65, full:140.50, incidentals:24.50},
                "2":{accommodation:293, breakfast:37.85, lunch:53.45, dinner:75, full:166.30, incidentals:35.05},
                "3":{accommodation:293, breakfast:42.15, lunch:59.60, dinner:83.40, full:185.15, incidentals:35.05}},
    "Hobart":{"1":{accommodation:176, breakfast:34.75, lunch:39.10, dinner:66.65, full:140.50, incidentals:24.50},
                "2":{accommodation:235, breakfast:37.85, lunch:53.45, dinner:75, full:166.30, incidentals:35.05},
                "3":{accommodation:235, breakfast:42.15, lunch:59.60, dinner:83.40, full:185.15, incidentals:35.05}},
    "Melbourne":{"1":{accommodation:173, breakfast:34.75, lunch:39.10, dinner:66.65, full:140.50, incidentals:24.50},
                "2":{accommodation:231, breakfast:37.85, lunch:53.45, dinner:75, full:166.30, incidentals:35.05},
                "3":{accommodation:265, breakfast:42.15, lunch:59.60, dinner:83.40, full:185.15, incidentals:35.05}},
    "Perth":{"1":{accommodation:180, breakfast:34.75, lunch:39.10, dinner:66.65, full:140.50, incidentals:24.50},
                "2":{accommodation:245, breakfast:37.85, lunch:53.45, dinner:75, full:166.30, incidentals:35.05},
                "3":{accommodation:265, breakfast:42.15, lunch:59.60, dinner:83.40, full:185.15, incidentals:35.05}},
    "Sydney":{"1":{accommodation:223, breakfast:34.75, lunch:39.10, dinner:66.65, full:140.50, incidentals:24.50},
                "2":{accommodation:297, breakfast:37.85, lunch:53.45, dinner:75, full:166.30, incidentals:35.05},
                "3":{accommodation:297, breakfast:42.15, lunch:59.60, dinner:83.40, full:185.15, incidentals:35.05}},
    "Katherine":{"1":{accommodation:228, breakfast:34.75, lunch:39.10, dinner:66.65, full:140.50, incidentals:24.50},
                "2":{accommodation:228, breakfast:37.85, lunch:53.45, dinner:75, full:166.30, incidentals:35.05},
                "3":{accommodation:228, breakfast:42.15, lunch:59.60, dinner:83.40, full:185.15, incidentals:35.05}},
    "Alice Springs":{"1":{accommodation:206, breakfast:34.75, lunch:39.10, dinner:66.65, full:140.50, incidentals:24.50},
                "2":{accommodation:206, breakfast:37.85, lunch:53.45, dinner:75, full:166.30, incidentals:35.05},
                "3":{accommodation:207, breakfast:42.15, lunch:59.60, dinner:83.40, full:185.15, incidentals:35.05}},
    "Broome":{"1":{accommodation:255, breakfast:34.75, lunch:39.10, dinner:66.65, full:140.50, incidentals:24.50},
                "2":{accommodation:255, breakfast:37.85, lunch:53.45, dinner:75, full:166.30, incidentals:35.05},
                "3":{accommodation:255, breakfast:42.15, lunch:59.60, dinner:83.40, full:185.15, incidentals:35.05}},
    "Christmas Island":{"1":{accommodation:218, breakfast:34.75, lunch:39.10, dinner:66.65, full:140.50, incidentals:24.50},
                "2":{accommodation:218, breakfast:37.85, lunch:53.45, dinner:75, full:166.30, incidentals:35.05},
                "3":{accommodation:218, breakfast:42.15, lunch:59.60, dinner:83.40, full:185.15, incidentals:35.05}},
    "Cocos (Keeling)":{"1":{accommodation:331, breakfast:34.75, lunch:39.10, dinner:66.65, full:140.50, incidentals:24.50},
                "2":{accommodation:331, breakfast:37.85, lunch:53.45, dinner:75, full:166.30, incidentals:35.05},
                "3":{accommodation:331, breakfast:42.15, lunch:59.60, dinner:83.40, full:185.15, incidentals:35.05}},
    "Exmouth":{"1":{accommodation:235, breakfast:34.75, lunch:39.10, dinner:66.65, full:140.50, incidentals:24.50},
                "2":{accommodation:235, breakfast:37.85, lunch:53.45, dinner:75, full:166.30, incidentals:35.05},
                "3":{accommodation:235, breakfast:42.15, lunch:59.60, dinner:83.40, full:185.15, incidentals:35.05}},
    "Newcastle":{"1":{accommodation:195, breakfast:34.75, lunch:39.10, dinner:66.65, full:140.50, incidentals:24.50},
                "2":{accommodation:195, breakfast:37.85, lunch:53.45, dinner:75, full:166.30, incidentals:35.05},
                "3":{accommodation:207, breakfast:42.15, lunch:59.60, dinner:83.40, full:185.15, incidentals:35.05}},
    "Nowra":{"1":{accommodation:168, breakfast:34.75, lunch:39.10, dinner:66.65, full:140.50, incidentals:24.50},
                "2":{accommodation:168, breakfast:37.85, lunch:53.45, dinner:75, full:166.30, incidentals:35.05},
                "3":{accommodation:207, breakfast:42.15, lunch:59.60, dinner:83.40, full:185.15, incidentals:35.05}},
    "Rockhampton":{"1":{accommodation:174, breakfast:34.75, lunch:39.10, dinner:66.65, full:140.50, incidentals:24.50},
                "2":{accommodation:174, breakfast:37.85, lunch:53.45, dinner:75, full:166.30, incidentals:35.05},
                "3":{accommodation:207, breakfast:42.15, lunch:59.60, dinner:83.40, full:185.15, incidentals:35.05}},
    "Toowoomba":{"1":{accommodation:161, breakfast:34.75, lunch:39.10, dinner:66.65, full:140.50, incidentals:24.50},
                "2":{accommodation:161, breakfast:37.85, lunch:53.45, dinner:75, full:166.30, incidentals:35.05},
                "3":{accommodation:207, breakfast:42.15, lunch:59.60, dinner:83.40, full:185.15, incidentals:35.05}},
	"USA":{"1":{accommodation:0, breakfast:70, lunch:84, dinner:126, full:280, incidentals:45},
                "2":{accommodation:0, breakfast:90, lunch:108, dinner:162, full:360, incidentals:50},
                "3":{accommodation:0, breakfast:103.75, lunch:124.50, dinner:124.50, full:415, incidentals:60}},
    "Canada":{"1":{accommodation:0, breakfast:58.75, lunch:70.50, dinner:105.75, full:235, incidentals:40},
                "2":{accommodation:0, breakfast:72.50, lunch:87, dinner:130.50, full:290, incidentals:50},
                "3":{accommodation:0, breakfast:91.25, lunch:109.50, dinner:164.25, full:365, incidentals:60}},
    "Germany":{"1":{accommodation:0, breakfast:58.75, lunch:70.50, dinner:105.75, full:235, incidentals:40},
                "2":{accommodation:0, breakfast:72.50, lunch:87, dinner:130.50, full:290, incidentals:50},
                "3":{accommodation:0, breakfast:91.25, lunch:109.50, dinner:164.25, full:365, incidentals:60}},
    "India":{"1":{accommodation:0, breakfast:37.50, lunch:45, dinner:67.50, full:150, incidentals:35},
                "2":{accommodation:0, breakfast:43.75, lunch:52.50, dinner:78.75, full:175, incidentals:40},
                "3":{accommodation:0, breakfast:57.50, lunch:69, dinner:103.50, full:230, incidentals:45}},
    "Indonesia":{"1":{accommodation:0, breakfast:37.50, lunch:45, dinner:67.50, full:150, incidentals:35},
                "2":{accommodation:0, breakfast:43.75, lunch:52.50, dinner:78.75, full:175, incidentals:40},
                "3":{accommodation:0, breakfast:57.50, lunch:69, dinner:103.50, full:230, incidentals:45}},
    "Italy":{"1":{accommodation:0, breakfast:58.75, lunch:70.50, dinner:105.75, full:235, incidentals:40},
                "2":{accommodation:0, breakfast:72.50, lunch:87, dinner:130.50, full:290, incidentals:50},
                "3":{accommodation:0, breakfast:91.25, lunch:109.50, dinner:164.25, full:365, incidentals:60}},
    "Japan":{"1":{accommodation:0, breakfast:58.75, lunch:70.50, dinner:105.75, full:235, incidentals:40},
                "2":{accommodation:0, breakfast:72.50, lunch:87, dinner:130.50, full:290, incidentals:50},
                "3":{accommodation:0, breakfast:91.25, lunch:109.50, dinner:164.25, full:365, incidentals:60}},
    "Malaysia":{"1":{accommodation:0, breakfast:37.50, lunch:45, dinner:67.50, full:150, incidentals:35},
                "2":{accommodation:0, breakfast:43.75, lunch:52.50, dinner:78.75, full:175, incidentals:40},
                "3":{accommodation:0, breakfast:57.50, lunch:69, dinner:103.50, full:230, incidentals:45}},
    "Norway":{"1":{accommodation:0, breakfast:70, lunch:84, dinner:126, full:280, incidentals:45},
                "2":{accommodation:0, breakfast:90, lunch:108, dinner:162, full:360, incidentals:50},
                "3":{accommodation:0, breakfast:103.75, lunch:124.50, dinner:124.50, full:415, incidentals:60}},
    "PNG":{"1":{accommodation:0, breakfast:48.75, lunch:58.50, dinner:87.75, full:195, incidentals:35},
                "2":{accommodation:0, breakfast:53.75, lunch:64.50, dinner:96.75, full:215, incidentals:45},
                "3":{accommodation:0, breakfast:72.50, lunch:87, dinner:130.50, full:290, incidentals:50}},
    "Philippines":{"1":{accommodation:0, breakfast:48.75, lunch:58.50, dinner:87.75, full:195, incidentals:35},
                "2":{accommodation:0, breakfast:53.75, lunch:64.50, dinner:96.75, full:215, incidentals:45},
                "3":{accommodation:0, breakfast:72.50, lunch:87, dinner:130.50, full:290, incidentals:50}},
    "Singapore":{"1":{accommodation:0, breakfast:70, lunch:84, dinner:126, full:280, incidentals:45},
                "2":{accommodation:0, breakfast:90, lunch:108, dinner:162, full:360, incidentals:50},
                "3":{accommodation:0, breakfast:103.75, lunch:124.50, dinner:124.50, full:415, incidentals:60}},
    "Thailand":{"1":{accommodation:0, breakfast:48.75, lunch:58.50, dinner:87.75, full:195, incidentals:35},
                "2":{accommodation:0, breakfast:53.75, lunch:64.50, dinner:96.75, full:215, incidentals:45},
                "3":{accommodation:0, breakfast:72.50, lunch:87, dinner:130.50, full:290, incidentals:50}},
    "France":{"1":{accommodation:0, breakfast:58.75, lunch:70.50, dinner:105.75, full:235, incidentals:40},
                "2":{accommodation:0, breakfast:72.50, lunch:87, dinner:130.50, full:290, incidentals:50},
                "3":{accommodation:0, breakfast:91.25, lunch:109.50, dinner:164.25, full:365, incidentals:60}},
    "Netherlands":{"1":{accommodation:0, breakfast:58.75, lunch:70.50, dinner:105.75, full:235, incidentals:40},
                "2":{accommodation:0, breakfast:72.50, lunch:87, dinner:130.50, full:290, incidentals:50},
                "3":{accommodation:0, breakfast:91.25, lunch:109.50, dinner:164.25, full:365, incidentals:60}},
    "New Zealand":{"1":{accommodation:0, breakfast:48.75, lunch:58.50, dinner:87.75, full:195, incidentals:35},
                "2":{accommodation:0, breakfast:53.75, lunch:64.50, dinner:96.75, full:215, incidentals:45},
                "3":{accommodation:0, breakfast:72.50, lunch:87, dinner:130.50, full:290, incidentals:50}},
    "UAE":{"1":{accommodation:0, breakfast:70, lunch:84, dinner:126, full:280, incidentals:45},
                "2":{accommodation:0, breakfast:90, lunch:108, dinner:162, full:360, incidentals:50},
                "3":{accommodation:0, breakfast:103.75, lunch:124.50, dinner:124.50, full:415, incidentals:60}},
    "UK":{"1":{accommodation:0, breakfast:58.75, lunch:70.50, dinner:105.75, full:235, incidentals:40},
                "2":{accommodation:0, breakfast:72.50, lunch:87, dinner:130.50, full:290, incidentals:50},
                "3":{accommodation:0, breakfast:91.25, lunch:109.50, dinner:164.25, full:365, incidentals:60}},
    "Vietnam":{"1":{accommodation:0, breakfast:37.50, lunch:45, dinner:67.50, full:150, incidentals:35},
                "2":{accommodation:0, breakfast:43.75, lunch:52.50, dinner:78.75, full:175, incidentals:40},
                "3":{accommodation:0, breakfast:57.50, lunch:69, dinner:103.50, full:230, incidentals:45}},
  // Extend for other locations and overseas similarly
};

// ---------------------- Meal Times ----------------------
const mealTimes = {
  breakfast: { start: "06:00", end: "09:00" },
  lunch: { start: "11:00", end: "13:00" },
  dinner: { start: "18:00", end: "21:00" }
};

// ---------------------- Currency Helpers ----------------------
function formatCurrency(value) {
  if (isNaN(value) || value === "" || value === null) return "$0.00";
  return "$" + Number(value).toLocaleString("en-AU", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
function parseCurrency(str) {
  if (str === null || str === undefined) return 0;
  return parseFloat(String(str).replace(/[^0-9.-]+/g, "")) || 0;
}

// ---------------------- Time Helpers ----------------------
function parseTimeToDate(baseDate, timeStr) {
  const [hours, minutes] = timeStr.split(":").map(Number);
  const d = new Date(baseDate.getTime());
  d.setHours(hours, minutes, 0, 0);
  return d;
}
function checkMealClaim(dayStart, dayEnd, mealStartStr, mealEndStr) {
  const mealStart = parseTimeToDate(dayStart, mealStartStr);
  const mealEnd = parseTimeToDate(dayStart, mealEndStr);
  const overlapStart = dayStart > mealStart ? dayStart : mealStart;
  const overlapEnd = dayEnd < mealEnd ? dayEnd : mealEnd;
  const diffHours = (overlapEnd - overlapStart) / (1000 * 60 * 60);
  return diffHours >= 1 ? 1 : 0;
}
function splitTravelIntoDays(startDate, endDate) {
  const days = [];
  let current = new Date(startDate.getTime());
  while (current <= endDate) {
    const dayStart = new Date(current);
    const dayEnd = new Date(current);
    dayEnd.setHours(23, 59, 59, 999);
    if (dayEnd > endDate) dayEnd.setTime(endDate.getTime());
    days.push({ start: dayStart, end: dayEnd });
    current.setDate(current.getDate() + 1);
    current.setHours(0, 0, 0, 0);
  }
  return days;
}

// ---------------------- Location row add/remove ----------------------
function addLocationRow() {
  const container = document.getElementById("locations-container");
  const template = document.getElementById("location-template").content.cloneNode(true);
  const entries = container.querySelectorAll(".location-entry");
  let startTime = new Date().toISOString().slice(0, 16);
  if (entries.length > 0) {
    const lastEntry = entries[entries.length - 1];
    const lastEnd = lastEntry.querySelector(".endDate").value;
    if (lastEnd) startTime = lastEnd;
  }
  template.querySelector(".startDate").value = startTime;
  template.querySelector(".endDate").value = startTime;
  container.appendChild(template);
}
function removeLocationRow(button) {
  button.closest(".location-entry").remove();
}

// ---------------------- Extras lines ----------------------
function addLine(blockId, templateId) {
  const block = document.getElementById(blockId);
  const template = document.getElementById(templateId).content.cloneNode(true);
  block.appendChild(template);
  const newLine = block.lastElementChild;
  newLine.querySelectorAll("input").forEach(inp => {
    inp.addEventListener("input", calculateExtrasTotals);
  });
  const removeBtn = newLine.querySelector(".removeLineBtn");
  if (removeBtn) {
    removeBtn.addEventListener("click", () => {
      newLine.remove();
      calculateExtrasTotals();
    });
  }
  attachCurrencyFormatting(newLine);
}
function addAccommodationLine() { addLine("accomLines", "accom-template"); }
function addTaxiLine() { addLine("taxiLines", "taxi-template"); }
function addHireCarLine() { addLine("hireCarLines", "hirecar-template"); }
function addOtherLine() { addLine("otherLines", "other-template"); }
// ---------------------- Flights Section ----------------------
function addFlightLine() {
  // Confirm both elements exist before proceeding
  const block = document.getElementById("flightsContainer") || document.getElementById("flightLines");
  const template = document.getElementById("flight-template");

  if (!block || !template) {
    console.error("❌ Flight container or template not found.");
    return;
  }

  const clone = template.content.cloneNode(true);
  block.appendChild(clone);

  const newLine = block.lastElementChild;
  newLine.querySelectorAll("input").forEach(inp => {
    inp.addEventListener("input", calculateExtrasTotals);
  });

  // Apply currency formatting
  attachCurrencyFormatting(newLine);

  // Add remove button handler
  const removeBtn = newLine.querySelector(".removeLineBtn");
  if (removeBtn) {
    removeBtn.addEventListener("click", () => {
      newLine.remove();
      calculateExtrasTotals();
    });
  }

  // Immediately recalc
  calculateExtrasTotals();
}

// Wait for DOM ready before attaching button
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("addFlightBtn");
  if (btn) {
    btn.addEventListener("click", addFlightLine);
  } else {
    console.error("❌ Add Flight button not found in DOM.");
  }
});



/* Attach formatting only to rate/amount text fields.
   Quantity inputs are type="number" and are NOT formatted with $.
*/
function attachCurrencyFormatting(container) {
  const currencySelectors = [
    '.accom-rate',
    '.taxi-rate',
    '.hire-rate',
    '.other-amount',
    '.flight-cost' // ✈️ include flights
  ];

  currencySelectors.forEach(sel => {
    container.querySelectorAll(sel).forEach(inp => {
      // Remove $ for editing
      inp.addEventListener("focus", () => {
        inp.value = parseCurrency(inp.value) || "";
      });

      // Format on blur
      inp.addEventListener("blur", () => {
        const raw = String(inp.value || "").trim();
        if (raw === "") {
          inp.value = "";
          calculateExtrasTotals();
          return;
        }
        const val = parseCurrency(raw);
        if (!isNaN(val)) inp.value = formatCurrency(val);
        calculateExtrasTotals();
      });
    });
  });
}



// ---------------------- Extras totals ----------------------
function calculateExtrasTotals() {
  let subtotal = 0;

  // Accommodation: rate (formatted) × nights (number input)
  document.querySelectorAll(".accom-line").forEach(line => {
    const rate = parseCurrency(line.querySelector(".accom-rate").value);
    const nightsInput = line.querySelector(".accom-nights");
    const nights = (nightsInput && nightsInput.valueAsNumber >= 0) ? nightsInput.valueAsNumber : 0;
    const total = rate * nights;
    line.querySelector(".accom-total").value = formatCurrency(total);
    subtotal += total;
  });

  // Taxi
  document.querySelectorAll(".taxi-line").forEach(line => {
    const rate = parseCurrency(line.querySelector(".taxi-rate").value);
    const qtyInput = line.querySelector(".taxi-qty");
    const qty = (qtyInput && qtyInput.valueAsNumber >= 0) ? qtyInput.valueAsNumber : 0;
    const total = rate * qty;
    line.querySelector(".taxi-total").value = formatCurrency(total);
    subtotal += total;
  });

  // Hire car
  document.querySelectorAll(".hirecar-line").forEach(line => {
    const rate = parseCurrency(line.querySelector(".hire-rate").value);
    const daysInput = line.querySelector(".hire-days");
    const days = (daysInput && daysInput.valueAsNumber >= 0) ? daysInput.valueAsNumber : 0;
    const total = rate * days;
    line.querySelector(".hire-total").value = formatCurrency(total);
    subtotal += total;
  });

  // Other
  document.querySelectorAll(".other-line").forEach(line => {
    const amt = parseCurrency(line.querySelector(".other-amount").value);
    line.querySelector(".other-total").value = formatCurrency(amt);
    subtotal += amt;
  });
  
  // --- Flights ---
document.querySelectorAll(".flight-line").forEach(line => {
    const cost = parseCurrency(line.querySelector(".flight-cost").value);
    line.querySelector(".flight-total").value = formatCurrency(cost);
    subtotal += cost;
  });


  const perDiemTotal = parseCurrency(document.getElementById("totalPerDiemValue").textContent);

  const contingency = (subtotal + perDiemTotal) * 0.10;
  const grand = subtotal + perDiemTotal + contingency;

  document.getElementById("subtotalValue").textContent = formatCurrency(subtotal);
  document.getElementById("totalPerDiemValue").textContent = formatCurrency(perDiemTotal);
  document.getElementById("contingencyValue").textContent = formatCurrency(contingency);
  document.getElementById("grandTotalValue").textContent = formatCurrency(grand);
}

// ---------------------- Per-diem calculation (math preserved) ----------------------
let perDiemResults = [];

function calculatePerDiem() {
  const container = document.getElementById("locations-container");
  const salaryBand = document.getElementById("salaryBand").value;
  const entries = Array.from(container.querySelectorAll(".location-entry"));
  if (entries.length === 0) {
    alert("Please add at least one location");
    return;
  }

  // Build segments array (one per entry) capturing original index and times
  const segments = entries.map((entry, idx) => {
    const location = entry.querySelector(".location-select").value;
    const start = new Date(entry.querySelector(".startDate").value);
    const end = new Date(entry.querySelector(".endDate").value);
    const providedB = parseInt(entry.querySelector(".breakfastCount").value) || 0;
    const providedL = parseInt(entry.querySelector(".lunchCount").value) || 0;
    const providedD = parseInt(entry.querySelector(".dinnerCount").value) || 0;
    const comments = entry.querySelector(".locationComments").value || "";
    const rates = atoRates[location]?.[salaryBand] || null;
    return {
      originalIndex: idx,
      location,
      start,
      end,
      providedB,
      providedL,
      providedD,
      comments,
      rates
    };
  });

  // Validate data: ensure start <= end and rates exist
  for (const seg of segments) {
    if (!seg.rates) {
      alert(`No ATO rates for location "${seg.location}" / salary band ${salaryBand}.`);
      return;
    }
    if (!(seg.start instanceof Date) || isNaN(seg.start.getTime()) ||
        !(seg.end instanceof Date) || isNaN(seg.end.getTime()) ||
        seg.end < seg.start) {
      alert(`Invalid dates for location "${seg.location}". Please check start/stop.`);
      return;
    }
  }

  // Sort segments by start time to determine earliest segments per day
  const sorted = segments.slice().sort((a, b) => a.start - b.start);

  // For each segment build the set of calendar-days it covers and compute meals claim counts
  // We'll also collect all dayKeys (YYYY-MM-DD) across segments
  const segmentDays = sorted.map(seg => {
    const days = splitTravelIntoDays(seg.start, seg.end);
    const dayKeys = days.map(d => d.start.toISOString().split("T")[0]);
    return {
      seg,
      dayKeys,
      days
    };
  });

  // Assign incidentals per calendar-day to the earliest segment that covers that day
  const dayAssignment = new Map(); // dayKey => sortedIndex (index in sorted array)
  segmentDays.forEach((sd, sortedIdx) => {
    sd.dayKeys.forEach(dayKey => {
      if (!dayAssignment.has(dayKey)) {
        dayAssignment.set(dayKey, sortedIdx); // assign to earliest covering segment
      }
    });
  });

  // Now compute per-segment meal claims and incidentals based on the assignment map
  perDiemResults = [];
  let grandTotal = 0;
  let grandBreakfast = 0, grandLunch = 0, grandDinner = 0;

  // We'll accumulate incidentals per originalIndex
  const incidentalsByOriginal = new Map(); // origIdx => total incidentals amount

  // Initialize counts
  segments.forEach(s => incidentalsByOriginal.set(s.originalIndex, 0));

  // For each sorted segment, compute meal claims and count incidentals assigned to it
  segmentDays.forEach((sd, sortedIdx) => {
    const seg = sd.seg;
    const rates = seg.rates;
    let b = 0, l = 0, d = 0;
    const locDaySet = new Set();

    // For each day (day object has start and end)
    sd.days.forEach(day => {
      const dayKey = day.start.toISOString().split("T")[0];
      locDaySet.add(dayKey);
      // Meals: check overlap between segment day window and meal windows
      b += checkMealClaim(day.start, day.end, mealTimes.breakfast.start, mealTimes.breakfast.end);
      l += checkMealClaim(day.start, day.end, mealTimes.lunch.start, mealTimes.lunch.end);
      d += checkMealClaim(day.start, day.end, mealTimes.dinner.start, mealTimes.dinner.end);

      // Incidentals: if this dayKey is assigned to this sorted segment, add incidentals
      if (dayAssignment.get(dayKey) === sortedIdx) {
        // add incidentals amount to that segment's originalIndex tally
        const prev = incidentalsByOriginal.get(seg.originalIndex) || 0;
        incidentalsByOriginal.set(seg.originalIndex, prev + rates.incidentals);
      }
    });

    // Subtract provided meals
    b = Math.max(b - seg.providedB, 0);
    l = Math.max(l - seg.providedL, 0);
    d = Math.max(d - seg.providedD, 0);

    // We'll calculate totals later after we know incidentals per original index
    perDiemResults.push({
      originalIndex: seg.originalIndex,
      location: seg.location,
      start: seg.start.toLocaleString(),
      stop: seg.end.toLocaleString(),
      totalDays: locDaySet.size,
      mealsProvided: { B: seg.providedB, L: seg.providedL, D: seg.providedD },
      mealsClaimed: { B: b, L: l, D: d },
      incidentals: 0, // placeholder; will set below using incidentalsByOriginal
      total: 0,
      comments: seg.comments,
      rates
    });

    grandBreakfast += b;
    grandLunch += l;
    grandDinner += d;
  });

  // Now attach incidentals and compute totals for perDiemResults (map by originalIndex)
  perDiemResults.forEach(r => {
    const incAmount = incidentalsByOriginal.get(r.originalIndex) || 0;
    r.incidentals = incAmount;
    const rates = r.rates;
    const mealsTotal = (r.mealsClaimed.B * rates.breakfast) + (r.mealsClaimed.L * rates.lunch) + (r.mealsClaimed.D * rates.dinner);
    r.total = mealsTotal + r.incidentals;
    grandTotal += r.total;
  });

  // Re-order perDiemResults to match order of UI entries (original order)
  perDiemResults.sort((a, b) => a.originalIndex - b.originalIndex);

  // Build output text (preserves your original format)
  let outputText = "Detailed Cost Breakdown by Location:\n\n";
  perDiemResults.forEach(r => {
    const rates = r.rates;
    outputText += `${r.location}:\n`;
    outputText += `  - Days: ${r.totalDays}\n`;
    outputText += `  - Breakfast: ${r.mealsClaimed.B} × $${rates.breakfast.toFixed(2)} = $${(r.mealsClaimed.B * rates.breakfast).toFixed(2)}\n`;
    outputText += `  - Lunch: ${r.mealsClaimed.L} × $${rates.lunch.toFixed(2)} = $${(r.mealsClaimed.L * rates.lunch).toFixed(2)}\n`;
    outputText += `  - Dinner: ${r.mealsClaimed.D} × $${rates.dinner.toFixed(2)} = $${(r.mealsClaimed.D * rates.dinner).toFixed(2)}\n`;
    const incidentalsDays = r.incidentals > 0 && r.rates.incidentals > 0
		? (r.incidentals / r.rates.incidentals)
		: 0;
	outputText += `  - Incidentals: ${incidentalsDays} × $${r.rates.incidentals.toFixed(2)} = ${formatCurrency(r.incidentals)}\n`;
	outputText += `  - Total: ${formatCurrency(r.total)}\n\n`;
    outputText += `  - Recommended Accommodation (ATO): ${rates.accommodation > 0 ? "$" + rates.accommodation.toFixed(2) : "N/A"}\n\n\n`;
  });

  outputText += `Total Meals Claimed: Breakfast ${grandBreakfast}, Lunch ${grandLunch}, Dinner ${grandDinner}\n\n`;
  outputText += `Per Diem Total: ${formatCurrency(grandTotal)}\n\n`;

  // update onscreen per-diem total used by extras math
  document.getElementById("totalPerDiemValue").textContent = formatCurrency(grandTotal);

  // recalc extras totals (so contingency uses fresh per diem)
  calculateExtrasTotals();

  outputText += `\t *NOTE* - Incidentals can only be claimed once per day, first (earliest) location segment for the day receives the incidentals.\n`;
  outputText += `  *NOTE* - Meal times B: 0600 - 0900, L: 1100 - 1300, D: 1800 - 2100. Travel must overlap > 1Hr to claim.\n`;
  document.getElementById("calculationOutput").textContent = outputText;
}


// ---------------------- Export to PDF (full inline implementation) ----------------------
function exportPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ orientation: "landscape", unit: "pt" });
  const employee = document.getElementById("employeeName").value || "";
  const reason = document.getElementById("travelReason").value || "";
  const postTravel = document.getElementById("postTravel").checked;
  const perDiemOnlyMode = document.getElementById("perDiemOnly").checked;
  const project = document.getElementById("projectSelect").value || "";


  const title = `Travel Calculator TY25/26 ${postTravel ? "Post-Travel" : "Pre-Travel"} Authority`;

  // --- Header ---
  doc.setFontSize(14);
  doc.text(title, 40, 40);
  doc.setFontSize(11);
  doc.text(`Employee: ${employee}`, 40, 60);
  doc.text(`Reason: ${reason}`, 300, 60);
  doc.text(`Project: ${project}`, 40, 80);


  // --- Per-Diem Table ---
  const perDiemHead = [
    [
      "Location","Start","Stop","Total Days",
      "B Prov","B Claim","L Prov","L Claim",
      "D Prov","D Claim","Incidentals","Total $","Comments"
    ]
  ];
  const perDiemBody = perDiemResults.map(r => [
    r.location, r.start, r.stop, r.totalDays,
    r.mealsProvided.B, r.mealsClaimed.B,
    r.mealsProvided.L, r.mealsClaimed.L,
    r.mealsProvided.D, r.mealsClaimed.D,
    formatCurrency(r.incidentals), formatCurrency(r.total), r.comments
  ]);

  let perDiemEndY = 120;
  doc.autoTable({
    startY: perDiemEndY,
    head: perDiemHead,
    body: perDiemBody,
    theme: "grid",
    styles: { fontSize: 9 },
    headStyles: { fillColor: [41,128,185], textColor: 255 },
    didDrawPage: (data) => { perDiemEndY = data.cursor.y + 10; } // track end position
  });

  // --- ATO Accommodation Guidance ---
  doc.setFontSize(11);
  doc.text("ATO Accommodation Guidance", 40, perDiemEndY + 10);
  let accY = perDiemEndY + 30;
  perDiemResults.forEach(r => {
    const location = r.location;
    const salaryBand = document.getElementById("salaryBand").value;
    const accRate = atoRates[location]?.[salaryBand]?.accommodation || 0;
    const accText = accRate > 0 ? "$" + accRate.toFixed(2) : "N/A";
    doc.text(`${location}: ${accText}`, 60, accY);
    accY += 16;
  });

  // --- Travel Extras Table ---
  let extrasRows = [];
  if (!perDiemOnlyMode) {
	  
	// --- Flights ---
	document.querySelectorAll(".flight-line").forEach(line => {
		const desc = line.querySelector(".flight-desc").value || "";
		const cost = parseCurrency(line.querySelector(".flight-cost").value);
		if (desc || cost) extrasRows.push(["Flight", desc, "", "", formatCurrency(cost)]);
	});

    document.querySelectorAll(".accom-line").forEach(line => {
      const desc = line.querySelector(".accom-desc").value || "";
      const rate = parseCurrency(line.querySelector(".accom-rate").value);
      const nights = line.querySelector(".accom-nights").valueAsNumber || 0;
      const total = rate * nights;
      if (desc || total) extrasRows.push(["Accommodation", desc, `${nights} nights`, formatCurrency(rate), formatCurrency(total)]);
    });
    document.querySelectorAll(".taxi-line").forEach(line => {
      const desc = line.querySelector(".taxi-desc").value || "";
      const rate = parseCurrency(line.querySelector(".taxi-rate").value);
      const qty = line.querySelector(".taxi-qty").valueAsNumber || 0;
      const total = rate * qty;
      if (desc || total) extrasRows.push(["Taxi", desc, `${qty} trips`, formatCurrency(rate), formatCurrency(total)]);
    });
    document.querySelectorAll(".hirecar-line").forEach(line => {
      const desc = line.querySelector(".hire-desc").value || "";
      const rate = parseCurrency(line.querySelector(".hire-rate").value);
      const days = line.querySelector(".hire-days").valueAsNumber || 0;
      const total = rate * days;
      if (desc || total) extrasRows.push(["Hire Car", desc, `${days} days`, formatCurrency(rate), formatCurrency(total)]);
    });
    document.querySelectorAll(".other-line").forEach(line => {
      const desc = line.querySelector(".other-desc").value || "";
      const amt = parseCurrency(line.querySelector(".other-amount").value);
      if (desc || amt) extrasRows.push(["Other", desc, "", "", formatCurrency(amt)]);
    });

    if (extrasRows.length > 0) {
      doc.addPage();
      doc.autoTable({
        startY: 40,
        head: [["Type","Description","Qty","Rate","Total"]],
        body: extrasRows,
        theme: "grid",
        styles: { fontSize: 10 },
        headStyles: { fillColor: [41,128,185], textColor: 255 }
      });
    }
  }

  // --- Summary Totals on Last Page ---
  const totalPerDiem = perDiemResults.reduce((sum, r) => sum + (Number(r.total) || 0), 0);
  const subtotalExtras = parseCurrency(document.getElementById("subtotalValue").textContent || "$0");
  const contingency = parseCurrency(document.getElementById("contingencyValue").textContent || "$0");
  const grandExtras = parseCurrency(document.getElementById("grandTotalValue").textContent || "$0");
  const combinedGrand = totalPerDiem + contingency + subtotalExtras;

  const pageCount = doc.getNumberOfPages();
  doc.setPage(pageCount);

  let summaryY = doc.internal.pageSize.getHeight() - 220;
  if (summaryY < 160) summaryY = 160;

  doc.setFontSize(12);
  doc.text("Summary Totals:", 40, summaryY);
  doc.setFontSize(11);
  summaryY += 18;
  doc.text(`Per Diem Total: ${formatCurrency(totalPerDiem)}`, 60, summaryY);
  summaryY += 16;
  if (!perDiemOnlyMode) {
    doc.text(`Travel Estimate: ${formatCurrency(subtotalExtras)}`, 60, summaryY);
    summaryY += 16;
    doc.text(`Contingency (10% of Travel + Per Diem): ${formatCurrency(contingency)}`, 60, summaryY);
    summaryY += 16;
  }
  doc.setFont(undefined, "bold");
  doc.text(`Grand Total: ${formatCurrency(combinedGrand)}`, 60, summaryY);
  doc.setFont(undefined, "normal");

  // --- Timestamp ---
  const generatedOn = new Date().toLocaleString("en-AU", { dateStyle: "medium", timeStyle: "short" });
  const sigY = doc.internal.pageSize.getHeight() - 120;
  doc.setFontSize(9);
  doc.text(`Generated on: ${generatedOn}`, 40, sigY - 10);

  doc.save(`YYMMDD_${employee || "travel"}_${postTravel ? "post" : "pre"}_authority.pdf`);
}


// ---------------------- DOM Ready hooks ----------------------
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('addLocationBtn').addEventListener('click', addLocationRow);
  document.getElementById('calculateBtn').addEventListener('click', calculatePerDiem);
  document.getElementById('exportPDFBtn').addEventListener('click', exportPDF);

  document.getElementById('perDiemOnly').addEventListener('change', e => {
    document.getElementById('budgetExtras').style.display = e.target.checked ? 'none' : 'block';
  });

  // --- Add line buttons ---
  document.getElementById('addAccomBtn').addEventListener('click', addAccommodationLine);
  document.getElementById('addTaxiBtn').addEventListener('click', addTaxiLine);
  document.getElementById('addHireCarBtn').addEventListener('click', addHireCarLine);
  document.getElementById('addOtherBtn').addEventListener('click', addOtherLine);
  document.getElementById('addFlightBtn').addEventListener('click', addFlightLine); // ✅ fixed to use existing addLine() logic

  // Initial location row
  addLocationRow();
});

