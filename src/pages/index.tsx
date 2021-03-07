import { NextPage } from 'next';
import { useRecoilValue } from 'recoil';
import { userLoginRequestState } from 'store/atoms';

const Home: NextPage = () => {
  const { email, password, remember } = useRecoilValue(userLoginRequestState);

  return (
    <div>
      <h1>{email}</h1>
      <h1>{password}</h1>
      <h1>{remember}</h1>
    </div>
  );
};

export default Home;
