type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="bg-gray-900 flex items-center justify-center min-h-screen">
      {children}
    </div>
  );
}
