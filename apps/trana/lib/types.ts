import React from 'react';

export type CourseChapterDocument = {
  id: string;
  title: string | React.ReactNode;
  type: 'text' | 'quiz' | 'media' | null;
  completed: boolean;
  slug: string;
};

export type CourseChapter = {
  id: string;
  title: string | React.ReactNode;
  documents: CourseChapterDocument[];
};
export type Course = {
  id: string;
  title: string | React.ReactNode;
  chapters: CourseChapter[];
};
export interface CourseTreeProps {
  courses: Course[];
}