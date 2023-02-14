import { GetServerSideProps, InferGetStaticPropsType } from 'next';

export default function PageHome(): InferGetStaticPropsType<typeof getServerSideProps> {
  return (
    <>
      <h1>Hallo</h1>
    </>
  );
}
export const getServerSideProps: GetServerSideProps = async () => {
  console.log('hoi');
  return {
    props: { posts: require('../data/posts.json') },
  };
};
