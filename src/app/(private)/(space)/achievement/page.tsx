const Page = async () => {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Alguma coisa");
    }, 4000);
  });

  return <h2>Achievement</h2>;
};

export default Page;
