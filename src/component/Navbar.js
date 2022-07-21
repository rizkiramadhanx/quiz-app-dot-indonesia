import { useContext } from "react";
import { ContextGlobal } from "../utama";
const Navbar = () => {
  const context = useContext(ContextGlobal);
  return (
    <div className="navbar bg-red-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">
          {context.contextState.name ? context.contextState.name : "kamu siapa"}
        </a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
