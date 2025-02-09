import { useData } from "../hooks/GlobalDataProvider";
import Demonav from "../comps/nav/demonav";

const App = () => {
  const { dispatch } = useData();

  return (
    <div className="h-screen">
      <div>
        <Demonav />
      </div>
      <div className="pt-20">Pasakon-Magasin is a E-Commerce Platform Exclusively for Laptops where users can browse various laptops and add them to their respective carts. More Features to be enable soon enough</div>
    </div>
  );
};

export default App;
