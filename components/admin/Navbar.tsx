import Search from "../ui/search";

interface Props {
  children: React.ReactNode;
}

function Navbar() {
  return (
    <div className="flex justify-between">
      <div>
        <h1 className="text-2xl font-semibold text-dark-400">
          Welcome back,Matteo
        </h1>
        <p className="text-slate-500">Monitor all your books from here</p>
      </div>
      <Search />
    </div>
  );
}

export default Navbar;
