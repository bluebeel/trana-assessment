import React from 'react';
import { styled, keyframes, CSS } from '../../../stitches.config';
import { mauve } from '@radix-ui/colors';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import * as AccordionPrimitive from '@radix-ui/react-accordion';

/* Animation keyframes */
const slideDown = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-accordion-content-height)' },
});

const slideUp = keyframes({
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: 0 },
});

const StyledAccordion = styled(AccordionPrimitive.Root, {
  '> * + *': {
    marginTop: '$1',
    marginBottom: 0,
  },
});

const StyledItem = styled(AccordionPrimitive.Item, {
  overflow: 'hidden',
  fontSize: '$2',
  fontFamily: '$sans',
  fontWeight: '$medium',
  lineHeight: '20px',
  letterSpacing: '-1%',
  color: '$grey500',

  '> * + *': {
    marginTop: '$1',
    marginBottom: 0,
  },

  '&:focus-within': {
    position: 'relative',
    zIndex: 1,
    boxShadow: `0 0 0 2px ${mauve.mauve12}`,
  },
});

const StyledHeader = styled(AccordionPrimitive.Header, {
  all: 'unset',
  display: 'flex',
});

const StyledTrigger = styled(AccordionPrimitive.Trigger, {
  all: 'unset',
  cursor: 'pointer',
  fontFamily: 'inherit',
  backgroundColor: 'transparent',
  width: '100%',
  py: '$1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  transition: 'color 300ms cubic-bezier(0.4, 0, 1, 1)',
  '&[data-state="closed"]': { backgroundColor: 'white' },
  '&[data-state="open"]': { backgroundColor: 'white', color: '$grey800' },
  '&:hover': { color: '$grey800' },
});

const StyledTriggerLabel = styled('span', {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  flexGrow: 1,
});

const StyledContent = styled(AccordionPrimitive.Content, {
  overflow: 'hidden',
  backgroundColor: 'transparent',

  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.4, 0, 1, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.4, 0, 1, 1)`,
  },
});

const StyledChevron = styled(ChevronDownIcon, {
  flex: "none",
  ml: 6,
  width: '$3',
  height: '$3',
  color: '$grey500',
  transition: 'transform 300ms cubic-bezier(0.4, 0, 1, 1)',
  '[data-state=open] &': { transform: 'rotate(180deg)', color: '$grey800' },
});

// Exports
export const AccordionRoot = StyledAccordion;
export const AccordionItem = StyledItem;

type AccordionTriggerPrimitiveProps = React.ComponentProps<
  typeof AccordionPrimitive.Trigger
>;
type AccordionTriggerProps = AccordionTriggerPrimitiveProps & { css?: CSS };

export const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof StyledTrigger>,
  AccordionTriggerProps
>(({ children, ...props }, forwardedRef) => (
  <StyledHeader>
    <StyledTrigger {...props} ref={forwardedRef}>
      <StyledTriggerLabel>{children}</StyledTriggerLabel>
      <StyledChevron aria-hidden />
    </StyledTrigger>
  </StyledHeader>
));

type AccordionContentPrimitiveProps = React.ComponentProps<
  typeof AccordionPrimitive.Content
>;
type AccordionContentProps = AccordionContentPrimitiveProps & { css?: CSS };

export const AccordionContent = React.forwardRef<
  React.ElementRef<typeof StyledContent>,
  AccordionContentProps
>(({ children, ...props }, forwardedRef) => (
  <StyledContent {...props} ref={forwardedRef}>
    {children}
  </StyledContent>
));

export type AccordionElement = {
  /**
   * Title of the element.
   */
  title: string | React.ReactNode;
  /**
   * The content revealed when the element is clicked on.
   */
  content: string | React.ReactNode;
  /**
   * A unique value identifying the element from among its siblings.
   */
  value: string;
};

export interface AccordionProps {
  /**
   * A set of interactive headings that each reveal an associated content section.
   */
  items: AccordionElement[];
  /**
   * The value of the item whose content is expanded when the accordion is initially rendered. Use
   * `defaultValue` if you do not need to control the state of an accordion.
   */
  defaultValue?: string;
}

export const Accordion = ({ items, defaultValue }: AccordionProps) => (
  <AccordionRoot
    type="single"
    defaultValue={defaultValue}
    collapsible
    css={{ width: '279px' }}
  >
    {items.map((item: AccordionElement) => (
      <AccordionItem value={item.value} key={item.value}>
        <AccordionTrigger>{item.title}</AccordionTrigger>
        <AccordionContent>{item.content}</AccordionContent>
      </AccordionItem>
    ))}
  </AccordionRoot>
);

export default Accordion;
