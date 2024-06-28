import DensitySmallIcon from "@mui/icons-material/DensitySmall";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MainPage from "@/components/MainPage";
import PersonIcon from "@mui/icons-material/Person";

export default function Home() {
  return (
    <>
      <div className="drawer">
        <input className="drawer-toggle" type="checkbox" id="my-drawer" />
        <div className="drawer-content flex flex-col">
          <header className="navbar w-3/4 mx-auto">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer"
                aria-label="open sidebar"
                className="btn btn-ghost btn-circle"
              >
                <DensitySmallIcon />
              </label>
            </div>
            <div className="lg:navbar-start">
              <a className="text-xl text-black">LOGO</a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 text-black font-semibold">
                <li>
                  <a>Viagens</a>
                </li>
                <li>
                  <a>Hotéis</a>
                </li>
                <li>
                  <a>Pacotes para Família</a>
                </li>
                <li>
                  <a>Promoções</a>
                </li>
                <li>
                  <a>Ajuda</a>
                </li>
              </ul>
            </div>
            <div className="navbar-end">
              <div>
                <button className="btn btn-ghost btn-circle">
                  <div className="indicator text-black">
                    <PersonIcon />
                  </div>
                </button>
              </div>
              <button className="btn btn-ghost btn-circle">
                <div className="indicator text-black">
                  <ShoppingCartIcon />
                </div>
              </button>
            </div>
          </header>

          <MainPage />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul
            tabIndex={-1}
            className="menu bg-gray-200 text-black min-h-full w-80 p-4"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
