
import { Outlet } from 'react-router-dom';

const MainLout = () => {
    return (
        <div>
            <section>
      <div className='py-6 shadow-lg bg-neutral-50'>Nav</div>
     <Outlet></Outlet>
    </section>
        </div>
    );
};

export default MainLout;