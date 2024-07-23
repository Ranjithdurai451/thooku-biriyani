export function formatNumberWithCommas(number: number): string {
    // Convert the number to a string with two decimal places
    let numberString = number.toFixed(2);

    // Use a regular expression to add commas
    let formattedString = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return formattedString;
}

export function convertDateFormat(dateString: string): string {
    // Create a Date object from the input string
    const date = new Date(dateString);

    // Extract year, month, and day
    const year = date.getUTCFullYear();
    // getUTCMonth() returns 0-11, so we add 1 to get 1-12
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    const day = date.getUTCDate().toString().padStart(2, '0');

    // Return the formatted date string
    return `${year}-${month}-${day}`;
}
export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
