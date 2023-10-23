import Navbar from "@/components/common/Navbar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex min-h-screen">
      <Navbar />
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default Layout;
