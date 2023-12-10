import PageContainer from '@/components/container/PageContainer';

export default function SignInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageContainer>{children}</PageContainer>;
}
