import { Accordion, Box } from '@trana/ui';
import { styled } from '../../../stitches.config';
import { AccordionElement } from '../accordion/accordion';
import { CheckIcon, ClipboardIcon, DocumentIcon, PlayerIcon } from './icons';
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

const CourseChapterDocumentLabel = styled(Box, {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  flexGrow: 1,
});

const CourseChapterContainer = styled(Box, {
  pl: '$5',
  cursor: 'pointer',

  '> * + *': {
    marginTop: '$1',
    marginBottom: 0,
  },
});

const StyledDocumentIcon = styled(DocumentIcon, {
  flex: "none",
  mr: 6,
  width: '$3',
  height: '$3',
  color: '$grey500',
});

const StyledClipboardIcon = styled(ClipboardIcon, {
  flex: "none",
  mr: 6,
  width: '$3',
  height: '$3',
  color: '$grey500',
});

const StyledPlayerIcon = styled(PlayerIcon, {
  flex: "none",
  mr: 6,
  width: '$3',
  height: '$3',
  color: '$grey500',
});

const CourseChapterDocument = styled(Box, {
  py: '$1',
  pl: 6,
  pr: 9,
  display: 'flex',
  alignItems: 'center',
  transition: 'color 300ms cubic-bezier(0.4, 0, 1, 1)',
  '&:hover': { color: '$grey800' },
  [`&:hover ${StyledDocumentIcon}`]: { color: '$grey800' },
  [`&:hover ${StyledClipboardIcon}`]: { color: '$grey800' },
  [`&:hover ${StyledPlayerIcon}`]: { color: '$grey800' },
});

const StyledCheckIcon = styled(CheckIcon, {
  flex: "none",
  ml: 6,
  width: '$3',
  height: '$3',
  color: '$blue',
});

const CourseTypeIcons = {
  text: <StyledDocumentIcon aria-hidden />,
  quizz: <StyledClipboardIcon aria-hidden />,
  media: <StyledPlayerIcon aria-hidden />,
};

export function CourseTree({ courses }: CourseTreeProps) {
  const mapChapter = (chapter: CourseChapter): AccordionElement => {
    return {
      title: chapter.title,
      content: (
        <CourseChapterContainer>
          {chapter.documents.map((document) => (
            <CourseChapterDocument key={document.id}>
              {CourseTypeIcons[document.type]}
              <CourseChapterDocumentLabel>{document.title}</CourseChapterDocumentLabel>
              {document.completed ? <StyledCheckIcon aria-hidden /> : null}
            </CourseChapterDocument>
          ))}
        </CourseChapterContainer>
      ),
      value: chapter.id,
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
