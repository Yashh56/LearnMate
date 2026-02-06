export const isTeacher = (userId?: string | null) => {
  if (!userId) return false;

  // Support multiple teacher IDs (comma-separated)
  const teacherIds = process.env.NEXT_PUBLIC_TEACHER_IDS;
  if (teacherIds) {
    const ids = teacherIds.split(',').map(id => id.trim());
    return ids.includes(userId);
  }

  // Fallback to legacy single teacher ID for backward compatibility
  return userId === process.env.NEXT_PUBLIC_TEACHER_ID;
}