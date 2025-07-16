export function encodeCursor(event) {
  // Use event id as cursor
  return event.id;
}

export function decodeCursor(cursor) {
  // For now, just return the event id
  return cursor;
} 