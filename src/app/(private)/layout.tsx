import Asidebar from "@/components/common/Asidebar";
import Container from "@/components/common/Container";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex min-h-screen">
      <Asidebar />
      <Container>{children}</Container>
    </div>
  );
};

export default Layout;
