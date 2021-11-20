import { Box } from '../box';
import { styled } from '../../stitches.config';
import { DocumentIcon, PlayerIcon, ClipboardIcon, CheckIcon } from './icons';
import React, { forwardRef } from 'react';

const StyledCourseChapterDocumentLabel = styled(Box, {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  flexGrow: 1,
});

const StyledDocumentIcon = styled(DocumentIcon, {
  flex: 'none',
  mr: 6,
  width: '$3',
  height: '$3',
  color: '$grey400',
  transition:
    'color 300ms cubic-bezier(0.4, 0, 1, 1), background-color 300ms cubic-bezier(0.4, 0, 1, 1)',
});

const StyledClipboardIcon = styled(ClipboardIcon, {
  flex: 'none',
  mr: 6,
  width: '$3',
  height: '$3',
  color: '$grey400',
  transition:
    'color 300ms cubic-bezier(0.4, 0, 1, 1), background-color 300ms cubic-bezier(0.4, 0, 1, 1)',
});

const StyledPlayerIcon = styled(PlayerIcon, {
  flex: 'none',
  mr: 6,
  width: '$3',
  height: '$3',
  color: '$grey400',
  transition:
    'color 300ms cubic-bezier(0.4, 0, 1, 1), background-color 300ms cubic-bezier(0.4, 0, 1, 1)',
});

const StyledCourseChapterDocument = styled(Box, {
  fontStyle: 'normal',
  fontWeight: '$medium',
  fontSize: '$2',
  color: '$grey500',
  lineHeight: '20px',
  letterSpacing: '0.8px',
  fontFamily: '$sans',
  py: '$1',
  pr: 6,
  pl: 28,
  display: 'flex',
  alignItems: 'center',
  transition:
    'color 300ms cubic-bezier(0.4, 0, 1, 1), background-color 300ms cubic-bezier(0.4, 0, 1, 1), border-radius 300ms cubic-bezier(0.4, 0, 1, 1)',
  '&:hover': { color: '$grey800', backgroundColor: '$grey100', br: '$1' },
  [`&:hover ${StyledDocumentIcon}`]: { color: '$grey500' },
  [`&:hover ${StyledClipboardIcon}`]: { color: '$grey500' },
  [`&:hover ${StyledPlayerIcon}`]: { color: '$grey500' },

  variants: {
    size: {
      small: {
        py: '$1',
      },
      big: {
        p: 6,
        fontSize: 14,
        letterSpacing: '0%',
      },
    },
    active: {
      true: {
        backgroundColor: '$blue',
        color: 'white',
        br: '$1',
        fontWeight: '$semibold',
        letterSpacing: '-2%',
        [`& svg`]: { color: 'white' },
        '&:hover': { backgroundColor: '$blue800', color: 'white' },
        [`&:hover ${StyledDocumentIcon}`]: { color: 'white' },
        [`&:hover ${StyledClipboardIcon}`]: { color: 'white' },
        [`&:hover ${StyledPlayerIcon}`]: { color: 'white' },
      },
    },
    icon: {
      true: {
        px: 6,
      },
    },
  },
  compoundVariants: [
    {
      size: 'small',
      active: true,
      css: {
        letterSpacing: '-2%',
        '&:hover': { fontWeight: '$medium', letterSpacing: '-1%' },
      },
    },
    {
      size: 'big',
      active: true,
      css: {
        letterSpacing: '-0.1px',
        '&:hover': { fontWeight: '$medium' },
      },
    },
    {
      icon: false,
      size: 'big',
      css: {
        pl: 28,
        pr: 6,
      },
    },
  ],
  defaultVariants: {
    size: 'small',
    active: false,
    icon: false,
  },
});

const StyledCheckIcon = styled(CheckIcon, {
  flex: 'none',
  ml: 6,
  width: '$3',
  height: '$3',
  color: '$blue',
});

const CourseTypeIcons = {
  text: <StyledDocumentIcon aria-hidden />,
  quiz: <StyledClipboardIcon aria-hidden />,
  media: <StyledPlayerIcon aria-hidden />,
};

export interface ChapterDocumentItemProps {
  type?: 'text' | 'quiz' | 'media' | null;
  active?: boolean;
  size?: 'small' | 'big';
  title: string | React.ReactNode;
  completed?: boolean;
  onClick?: () => void;
  href?: string;
}

export const ChapterDocumentItem = forwardRef(
  (
    {
      title,
      type,
      active = false,
      size = 'small',
      completed = false,
      onClick,
      href,
    }: ChapterDocumentItemProps,
    ref: React.Ref<HTMLDivElement>
  ) => {
    const linkProps = href ? { as: 'a' } : {};
    return (
      <StyledCourseChapterDocument
        ref={ref}
        active={active}
        icon={!!type}
        size={size}
        {...linkProps}
        onClick={onClick}
      >
        {type ? CourseTypeIcons[type] : null}
        <StyledCourseChapterDocumentLabel>
          {title}
        </StyledCourseChapterDocumentLabel>
        {completed ? <StyledCheckIcon aria-hidden /> : null}
      </StyledCourseChapterDocument>
    );
  }
);

export default ChapterDocumentItem;
