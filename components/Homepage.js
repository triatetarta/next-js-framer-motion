import { useDispatch } from 'react-redux';
import { setCursor } from '../slices/cursorSlice';

const Homepage = () => {
  const dispatch = useDispatch();

  return (
    <div className='h-screen flex items-center justify-center'>
      <div>
        <h1
          onMouseEnter={() =>
            dispatch(setCursor({ cursorText: 'hey', cursorVariant: 'rooms' }))
          }
          onMouseLeave={() =>
            dispatch(setCursor({ cursorText: '', cursorVariant: 'default' }))
          }
          className='text-3xl bg-gray-900 text-gray-50 p-5'
        >
          Homepage
        </h1>
      </div>
    </div>
  );
};

export default Homepage;
