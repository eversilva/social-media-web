type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => (
  <main className="flex flex-1 justify-center bg-gray-200 p-4 overflow-y-scroll min-h-full">
    <div className="max-w-7xl w-full">{children}</div>
  </main>
);

export default Container;
