import { Box, CourseTree } from '@trana/ui';
import { useRouter } from 'next/router';
import React from 'react';
import { Course } from '../course-tree/types';
import { styled, keyframes, CSS } from '../../../stitches.config';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import Link from 'next/link';
import ChapterDocumentItem from '../course-tree/chapter-document';

const StyledSeparator = styled(SeparatorPrimitive.Root, {
  backgroundColor: '$grey200',
  '&[data-orientation=horizontal]': { height: 1, width: '100%' },
  '&[data-orientation=vertical]': { height: '100%', width: 1 },
});

const MenuContainer = styled(Box, {
  cursor: 'pointer',

  '> * + *': {
    marginTop: '$1',
    marginBottom: 0,
  },
});

export type SidebarMenu = {
  title: string | React.ReactNode;
  type: 'text' | 'quiz' | 'media' | null;
  slug: string;
};
export interface SidebarProps {
  menus: SidebarMenu[];
  courses: Course[];
}

// Your app...
export const Sidebar = ({ menus, courses }: SidebarProps) => {
  const router = useRouter();

  return (
    <Box css={{ width: '279px' }}>
      <MenuContainer>
        {menus.map((document, index) => (
          <Link href={document.slug} key={index} passHref>
            <ChapterDocumentItem
              title={document.title}
              type={document.type}
              completed={false}
              active={router.pathname === document.slug}
            />
          </Link>
        ))}
      </MenuContainer>
      <StyledSeparator css={{ margin: '20px 0' }} />
      <CourseTree courses={courses} />
    </Box>
  );
};

export default Sidebar;
