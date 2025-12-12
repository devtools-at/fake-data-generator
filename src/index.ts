/**
 * Fake Data Generator
 * Generate fake/mock data
 *
 * Online tool: https://devtools.at/tools/fake-data-generator
 *
 * @packageDocumentation
 */

function randomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateFirstName(): string {
  return randomItem(firstNames);
}

function generateLastName(): string {
  return randomItem(lastNames);
}

function generateEmail(name?: string): string {
  const firstName = name ? name.split(" ")[0].toLowerCase() : generateFirstName().toLowerCase();
  const lastName = name ? name.split(" ")[1]?.toLowerCase() || "" : generateLastName().toLowerCase();
  const domain = randomItem(domains);
  const separator = randomItem([".", "_", ""]);
  return `${firstName}${separator}${lastName}${randomInt(0, 99)}@${domain}`.toLowerCase();
}

function generatePhone(): string {
  return `(${randomInt(200, 999)}) ${randomInt(200, 999)}-${randomInt(1000, 9999)}`;
}

function generateAddress(): string {
  const number = randomInt(1, 9999);
  const street = randomItem(streets);
  return `${number} ${street}`;
}

function generateCity(): string {
  return randomItem(cities);
}

function generateState(): string {
  return randomItem(states);
}

function generateZip(): string {
  return randomInt(10000, 99999).toString();
}

function generateDate(startYear: number, endYear: number): string {
  const start = new Date(startYear, 0, 1);
  const end = new Date(endYear, 11, 31);
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return date.toISOString().split('T')[0];
}

function generateBirthDate(): string {
  return generateDate(1950, 2005);
}

// Export for convenience
export default { encode, decode };
