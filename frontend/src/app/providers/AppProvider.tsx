import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { PropsWithChildren } from 'react';
import { QueryProvider } from './QueryProvider';

export const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    <QueryProvider>
      <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
    </QueryProvider>
  );
};

export default AppProvider
