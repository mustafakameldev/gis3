import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
const DynamicComponentWithNoSSR = dynamic(() => import('../components/Main'), {
  ssr: false,
});
const Home: NextPage = () => {
  return (
    <>
      <DynamicComponentWithNoSSR />
    </>
  );
};

export default Home;
