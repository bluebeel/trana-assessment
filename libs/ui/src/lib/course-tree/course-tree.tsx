import { Accordion, Box } from '@trana/ui';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { styled } from '../../../stitches.config';
import { AccordionElement } from '../accordion/accordion';
import ChapterDocumentItem from './chapter-document';
import { CourseChapter, CourseTreeProps } from './types';

const CourseContainer = styled(Box, {
  '> * + *': {
    marginTop: '$4',
    marginBottom: 0,
  },
});

const CourseTitle = styled('h2', {
  fontStyle: 'normal',
  fontWeight: '$semibold',
  fontSize: '$0',
  color: '$grey400',
  lineHeight: '12px',
  letterSpacing: '0.8px',
  textTransform: 'uppercase',
  fontFamily: '$sans',
  mb: '$1',
});

const CourseChapterContainer = styled(Box, {
  pl: '$5',
  cursor: 'pointer',

  '> * + *': {
    marginTop: '$1',
    marginBottom: 0,
  },
});

export function CourseTree({ courses }: CourseTreeProps) {
  const router = useRouter();
  const mapChapter = (chapter: CourseChapter): AccordionElement => {
    return {
      title: chapter.title,
      content: (
        <CourseChapterContainer>
          {chapter.documents.map((document) => (
            <Link href={document.slug} key={document.id} passHref>
              <ChapterDocumentItem
                title={document.title}
                type={document.type}
                completed={document.completed}
                active={router.pathname === document.slug}
              />
            </Link>
          ))}
        </CourseChapterContainer>
      ),
      value: chapter.id,
      disabled: chapter.documents.length === 0,
    };
  };
  return (
    <CourseContainer>
      {courses.map((course, index) => (
        <Box key={course.id}>
          <CourseTitle>{course.title}</CourseTitle>
          <Accordion
            items={course.chapters.map((chapter) => mapChapter(chapter))}
          />
        </Box>
      ))}
    </CourseContainer>
  );
}

export default CourseTree;
