import { ThemeProvider } from '@/ui/context/theme-provider';

function AppWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {children}
    </ThemeProvider>
  );
}

export default AppWrapper;
