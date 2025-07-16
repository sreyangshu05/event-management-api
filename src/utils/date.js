import { DateTime } from "luxon";

export function isPast(dateString) {
  return DateTime.fromISO(dateString) < DateTime.now();
}

export function toISO(date) {
  return DateTime.fromJSDate(date).toISO();
} 