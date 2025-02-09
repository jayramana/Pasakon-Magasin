import { useNavigate } from "react-router-dom";

const Demonav = () => {
  const Navigate = useNavigate();

  const homeRedirect = () => {
    Navigate("/home");
  };

  const RegiNav = () => {
    Navigate("/register");
  };
  const LoginNav = () => {
    Navigate("/login");
  };

  return (
    <div className="flex justify-between p-6 bg-gray-300 fixed w-[100%] z-[10]">
      <div onClick={homeRedirect} className="hover:cursor-pointer">
        <p className="font-sans font-semibold text-lg">Pasakon-Magasin</p>
      </div>

      <div className="flex gap-4">
        <div className="flex gap-2 items-center transform translate-y-[-6.5px]">
          <button onClick={LoginNav}>
            <p>Log-In</p>
          </button>
          Or
          <button onClick={RegiNav}>
            <p>Register</p>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Demonav;
