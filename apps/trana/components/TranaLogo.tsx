import React from 'react';
import { TranaLogoIcon } from './TranaLogoIcon';
import { AccessibleIcon } from '@radix-ui/react-accessible-icon';
import { Flex } from '@trana/ui';

export const TranaLogo = ({ label = 'Radix homepage' }: { label?: string }) => (
  <AccessibleIcon label={label}>
    <Flex align="center">
      <TranaLogoIcon style={{ marginRight: 3 }} />
    </Flex>
  </AccessibleIcon>
);
