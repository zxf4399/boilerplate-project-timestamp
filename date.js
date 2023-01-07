exports.getUnixAndUtc = (date) => {
  if (date instanceof Date) {
    return {
      unix: date.getTime(),
      utc: date.toUTCString(),
    };
  }

  if (isNaN(Number(date))) {
    const newDate = new Date(date);
    const INVALID_DATE = "Invalid Date";

    if (newDate.toString() === INVALID_DATE) {
      return {
        error: INVALID_DATE,
      };
    } else {
      return this.getUnixAndUtc(newDate);
    }
  } else {
    // 时间戳
    const timestamp = Number(date);

    return this.getUnixAndUtc(new Date(timestamp));
  }
};
