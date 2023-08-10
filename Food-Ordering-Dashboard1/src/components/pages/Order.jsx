// import { TbArrowBackUpDouble } from 'react-icons/tb';
import { Link } from 'react-router-dom';

function Order() {
  return (
    <div className="dashboard">
      <div className="top">
        <div className="back">
          <Link to="/order-list">
            {/* <TbArrowBackUpDouble /> Back */}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Order;
