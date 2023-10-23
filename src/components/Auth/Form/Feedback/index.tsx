type Props = {
  message: string;
};

const AuthFormFeedback = ({ message }: Props) => (
  <div>Erro ao realizar login: {message}</div>
);
export default AuthFormFeedback;
