export function getFormattedDate(): string {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const currentDate = new Date();
  return currentDate.toLocaleDateString('en-US', options);
}