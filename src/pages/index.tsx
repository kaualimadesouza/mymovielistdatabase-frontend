import { useNavigate } from "react-router-dom";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

export function Index() {
    const navigate = useNavigate();

    function goTo100Movies() {
        navigate('/top100movies/page/1');
    }

    function goToMovies() {
        navigate('/movies/page/1');
    }

    return (
    <div className="bg-custom-gradient h-screen flex flex-col items-center justify-center ">
      <main>
        <div className="w-full space-y-5 max-w-[980px] m-auto relative text-center -mt-6">
          <h1 className="text-3xl font-bold">
            <a href="/" className="cursor-pointer">
              MMLDb
            </a>
          </h1>
          <p className="text-[20px] font-medium text-[#3E4C52]">
            See you favorite movies here
          </p>
          <div className="flex gap-4 items-center justify-center">
            <button onClick={goTo100Movies} className="bg-zinc-50 text-[#011620] px-4 py-1 rounded-sm font-bold text-[20px] hover:opacity-90 transition-all">
              Top 100 Movies
            </button>
            <div className="w-px h-4 bg-[#3E4C52]"></div>
            <button onClick={goToMovies} className="bg-zinc-50 text-[#011620] px-4 py-1 rounded-sm font-bold text-[20px] hover:opacity-90 transition-all">
              Movie Management
            </button>
          </div>
          <p className="text-sm font-normal text-[#3E4C52]">
            Ao acessar uma pagina você automaticamente concorda com nossos
            <br></br> termos de uso e politicas de privacidade
          </p>
        </div>
      </main>
    </div>
  );
}
