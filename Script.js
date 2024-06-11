clock();

function clock() {
  const date = new Date();
  const indent = 2;
  const clockObj = {
    AM_PM : date.getHours() >= 12 ? "pm" : "am",
    Hours : date.getHours() % 12 || 12,
    Minutes : date.getMinutes(),
    Seconds : date.getSeconds(),
    Day : date.toLocaleDateString("en-us", { weekday: "long" }),
    Date : date.getDate(),
    Month : date.toLocaleDateString("en-us", { month: "long" }),
    Year : date.getFullYear(),
  };
  const entryFormat = ([key, val]) => {
    return `${"&nbsp".repeat(
      indent
    )}<span class="property">${key}</span>: ${valFormat(val)}`;
  };
  const valFormat = (val) => {
    if (typeof val == "number") return `<span class="number">${val}</span>`;
    else if (typeof val == "string")
      return `<span class="string">"${val}"</span>`;
  };
  document.querySelector(".watch").innerHTML = `
    <span class="keyword">const</span> <span class="def">clock</span> = {<br>
    ${Object.entries(clockObj).reduce(
      (str, entry) => str + entryFormat(entry) + ",<br>",
      ""
    )}};`;

  requestAnimationFrame(clock);
}
