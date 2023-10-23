type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return <div className="bg-purple">{children}</div>;
}
