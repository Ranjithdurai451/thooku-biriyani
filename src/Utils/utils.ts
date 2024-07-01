export function formatNumberWithCommas(number: number): string {
    // Convert the number to a string with two decimal places
    let numberString = number.toFixed(2);

    // Use a regular expression to add commas
    let formattedString = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return formattedString;
}