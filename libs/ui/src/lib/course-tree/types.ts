export type CourseChapterDocument = {
  id: string;
  title: string;
  type: 'text' | 'quizz' | 'media';
  completed: boolean;
  slug: string;
};
export type CourseChapter = {
  id: string;
  title: string;
  documents: CourseChapterDocument[];
};
export type Course = {
  id: string;
  title: string;
  chapters: CourseChapter[];
};
export interface CourseTreeProps {
  courses: Course[];
}
