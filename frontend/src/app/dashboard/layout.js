import { auth } from '@/auth.config';
import theme from '@/components/dashboard/themes';import LayoutWrapper from '@/components/dashboard/ui/LayoutWrapper';
import { CssBaseline } from '@mui/material';
;
import { ThemeProvider } from '@mui/material/styles';

export const metadata = {
    title: "Dashboard",
    description: "",
  };

export default async function DashboardLayout({
 children
}) {

  const session = await auth();

  return (
 <ThemeProvider theme={theme}>
    <CssBaseline />
    <LayoutWrapper children={children} session = {session}/>
 </ThemeProvider>
  );
}