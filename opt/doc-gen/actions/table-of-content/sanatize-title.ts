export const sanitizeTitle = (title: string): string => {
  if (!title) {
    return 'untitled'; // Handle empty titles
  }
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .trim()
    .replace(/\s+/g, '-'); // Replace spaces with hyphens
};
