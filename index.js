function utcToTimeZone(
  utcDateString,
  timeZone = 'Asia/Kolkata',
  locale = 'en-CA',
  isISOFormat = false,
) {
  if (utcDateString == null || utcDateString === undefined) return utcDateString;
  let utcDate = utcDateString;
  if (!(utcDate instanceof Date)) utcDate = new Date(utcDateString);

  const formatter = new Intl.DateTimeFormat(locale, {
    timeZone,
    hourCycle: 'h23',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  if (isISOFormat) {
    const parts = formatter.formatToParts(utcDate);
    const values = Object.fromEntries(parts.map((p) => [p.type, p.value]));

    // Treat timezone time as UTC to force shift
    return new Date(
      `${values.year}-${values.month}-${values.day}T${values.hour}:${values.minute}:${values.second}Z`,
    ).toISOString();
  }
  return formatter.format(utcDate);
}
