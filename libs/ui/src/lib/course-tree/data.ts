import { Course } from './types';

export const COURSES: Course[] = [
  {
    id: '1',
    title: 'Digital Payments 101',
    chapters: [
      {
        id: '1',
        title: 'Unterschied Kreditkarte vs. Debitkarte als Zahlungsart',
        documents: [],
      },
      {
        id: '2',
        title: 'Kreditkarte: Weltweit bargeldlos bezahlen',
        documents: [],
      },
      {
        id: '3',
        title: 'Debitkarte',
        documents: [
          {
            id: '1',
            title: 'Wie Kreditkarten funktionieren',
            type: 'text',
            completed: false,
            slug: '#',
          },
          {
            id: '2',
            title: 'Kreditkarte',
            type: 'quizz',
            completed: false,
            slug: '#',
          },
          {
            id: '3',
            title: 'Virtuelle Karten',
            type: 'media',
            completed: true,
            slug: '#',
          },
        ],
      },
    ],
  },
  {
    id: '2',
    title: 'Employee expense management',
    chapters: [
      {
        id: '1',
        title: 'What expenses can I submit?',
        documents: [
          {
            id: '1',
            title: 'What expenses are deductible?',
            type: 'text',
            completed: false,
            slug: '#',
          },
        ],
      },
      {
        id: '2',
        title: 'Business trips',
        documents: [
          {
            id: '1',
            title: 'Travelling inlands',
            type: 'text',
            completed: true,
            slug: '#',
          },
          {
            id: '2',
            title: 'Travelling abroad',
            type: 'text',
            completed: true,
            slug: '#',
          },
          {
            id: '3',
            title: 'Transportation means',
            type: 'text',
            completed: true,
            slug: '#',
          },
        ],
      },
      {
        id: '3',
        title: 'Business lunch / dinner',
        documents: [
          {
            id: '1',
            title: 'Meals around the office',
            type: 'text',
            completed: false,
            slug: '#',
          },
          {
            id: '2',
            title: 'Meals while on a business trip',
            type: 'text',
            completed: false,
            slug: '#',
          },
        ],
      },
      {
        id: '4',
        title: 'Hosting company events with more than five people',
        documents: [
          {
            id: '1',
            title: 'How much in advance do I need to plan my event?',
            type: 'text',
            completed: true,
            slug: '#',
          },
          {
            id: '2',
            title: 'How to submit a planning request',
            type: 'text',
            completed: false,
            slug: '#',
          },
          {
            id: '3',
            title: 'Limits and thresholds',
            type: 'text',
            completed: false,
            slug: '#',
          },
        ],
      },
    ],
  },
];
