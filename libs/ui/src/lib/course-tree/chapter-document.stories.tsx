import { Meta } from '@storybook/react';
import { Box } from '../box/box';
import { darkTheme } from '../../../stitches.config';
import ChapterDocumentItem from './chapter-document';
import { CourseTree } from './course-tree';

export default {
  component: CourseTree,
  title: 'Course Tree/Chapter',
} as Meta;

export const ChapterDocument = () => (
  <Box
    css={{
      '> * + *': {
        marginTop: '$3',
        marginBottom: 0,
      },
      p: '$2',
    }}
  >
    <ChapterDocumentItem title="Wie Kreditkarten funktionieren" />
    <ChapterDocumentItem title="Kreditkarte" type="text" />
    <ChapterDocumentItem title="Virtuelle Karten" type="media" />
    <ChapterDocumentItem title="What expenses are deductible?" type="quiz" />
    <ChapterDocumentItem title="Travelling inlands" size="big" />
    <ChapterDocumentItem title="Travelling abroad" active={true} />
    <ChapterDocumentItem
      title="Transportation means"
      active={true}
      size="big"
    />
    <ChapterDocumentItem
      title="Meals around the office"
      active={true}
      type="quiz"
    />
    <ChapterDocumentItem
      title="Meals while on a business trip"
      active={true}
      type="text"
    />
    <ChapterDocumentItem
      title="How much in advance do I need to plan my event?"
      active={true}
      type="media"
    />
    <ChapterDocumentItem
      title="How to submit a planning request"
      active={true}
      type="media"
      size="big"
    />
  </Box>
);

export const ChapterDocumentDarkMode = () => (
  <Box
    className={darkTheme}
    css={{
      '> * + *': {
        marginTop: '$3',
        marginBottom: 0,
      },
      backgroundColor: '#111111',
      p: '$2',
    }}
  >
    <ChapterDocumentItem title="Wie Kreditkarten funktionieren" />
    <ChapterDocumentItem title="Kreditkarte" type="text" />
    <ChapterDocumentItem title="Virtuelle Karten" type="media" />
    <ChapterDocumentItem title="What expenses are deductible?" type="quiz" />
    <ChapterDocumentItem title="Travelling inlands" size="big" />
    <ChapterDocumentItem title="Travelling abroad" active={true} />
    <ChapterDocumentItem
      title="Transportation means"
      active={true}
      size="big"
    />
    <ChapterDocumentItem
      title="Meals around the office"
      active={true}
      type="quiz"
    />
    <ChapterDocumentItem
      title="Meals while on a business trip"
      active={true}
      type="text"
    />
    <ChapterDocumentItem
      title="How much in advance do I need to plan my event?"
      active={true}
      type="media"
    />
    <ChapterDocumentItem
      title="How to submit a planning request"
      active={true}
      type="media"
      size="big"
    />
  </Box>
);
