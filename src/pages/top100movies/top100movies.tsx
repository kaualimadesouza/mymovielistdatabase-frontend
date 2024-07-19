import { Heart, Repeat, Star } from "lucide-react";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { useEffect, useState } from "react";
import { API_TMD } from "../../lib/axiosMovieDatabase";
import { useNavigate, useParams } from "react-router-dom";

interface top100Movies {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export function Top100Movies() {
  const navigate = useNavigate();
  const { page } = useParams();
  if(!page) {
    return
  }
  const realPage = parseInt(page) + 1;
  const [movieDataRaw, setMovieDataRaw] = useState<Object>({});
  const [movieData, setMovieData] = useState<top100Movies[]>([]);
  const [isAcess, setIsAcess] = useState(true);

  async function getMovies() {
    await API_TMD.get(
      `/top_rated?language=en-US&page=${
        Number(page) >= 1 && Number(page) <= 5 ? Number(page) : 1
      }`
    ).then((response) => {
      setMovieData(response.data.results);
    });
    console.log(page);
  }

  useEffect(() => {
    getMovies();
  }, []);

  const getYear = (dateStr: string): number => {
    const date = new Date(dateStr);
    return date.getFullYear();
  };

  if (!realPage) {
    return;
  }

  function nextPage() {
    if (!page) {
      return;
    }
    navigate(`/top100movies/page/${parseInt(page) + 1}`);
    location.reload();
  }

  function previousPage() {
    if (!page) {
      return;
    }
    navigate(`/top100movies/page/${parseInt(page) - 1}`);
    location.reload();
  }

  return (
    <div className="h-[100vh]">
      <Header />
      <main className="bg-custom-gradient py-11 min-h-[880px]">
        <div className="grid grid-cols-top100 w-full max-w-[980px] m-auto gap-10">
          <div className="space-y-3">
            <div className="flex justify-between items-center border-b-[1px] border-zinc-100 border-opacity-25">
              <h2 className="opacity-25 text-xl">Movies</h2>
              <div className="flex gap-[3px]">
                <button>
                  <img
                    src="../../public/lineline.svg"
                    alt="lineline"
                    className="size-4"
                  />
                </button>
                <button className="opacity-25 hover:opacity-100 transition-all">
                  <img src="../../public/one.svg" alt="mult" className="size-4" />
                </button>
              </div>
            </div>
            <div className="space-y-5">
              <h1 className="font-bold text-3xl">Top 100 Movies</h1>
              <p className="opacity-50 font-normal text-lg">
                Welcome to our ultimate guide to the top 100 movies of all time!
                This curated list is a celebration of the finest cinematic
                masterpieces, spanning a wide array of genres, eras, and styles.
                Whether you're a die-hard film enthusiast or just starting your
                journey into the world of cinema, this list has something for
                everyone
              </p>
            </div>

            <div className="relative">
              {movieData.map((movie, index) => (
                <div
                  key={movie.id}
                  className="flex items-center gap-5 border-b-[1px] border-t-[1px] border-zinc-100 border-opacity-15 py-3"
                >
                  <div className="hover:opacity-75 hover:transition-all">
                    <img
                      className="h-32 rounded-sm shadow-shape"
                      src={
                        "https://image.tmdb.org/t/p/original/" +
                        movie.poster_path
                      }
                      alt="poster"
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <h2 className="font-bold text-2xl ">
                      {(index + 1)}. {movie.title}
                    </h2>
                    <div className="font-semibold text-2xl opacity-25 flex gap-7">
                      <span>{getYear(movie.release_date)}</span>
                      <div className="flex gap-1 items-center">
                        <Star className="size-5" />
                        <span>{movie.vote_average.toFixed(1)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {parseInt(page) === 1 ? (
                <div className="pt-2">
                  <button
                    onClick={nextPage}
                    className="absolute right-0 px-3 py-1 bg-[#404f55] text-sm font-light rounded-sm opacity-50 hover:opacity-75 shadow-shape"
                  >
                    Next
                  </button>
                </div>
              ) : 
                <div className="pt-2">
                  <button
                    onClick={previousPage}
                    className="absolute left-0 px-3 py-1 bg-[#404f55] text-sm font-light rounded-sm opacity-50 hover:opacity-75 shadow-shape"
                  >
                    Previous
                  </button>
                  <button
                    onClick={nextPage}
                    className="absolute right-0 px-3 py-1 bg-[#404f55] text-sm font-light rounded-sm opacity-50 hover:opacity-75 shadow-shape"
                  >
                    Next
                  </button>
                </div>
              }
            </div>
          </div>
          <div>
            <aside className="bg-[#011620] shadow-shape rounded-sm h-auto">
              <button className="flex justify-center items-center w-full py-2 gap-1 border-b-[1px] border-zinc-100 border-opacity-5 opacity-65 hover:opacity-100">
                <Heart className="size-4" />
                <span>Like This?</span>
              </button>
              <button className="flex justify-center items-center w-full py-2 opacity-65 hover:opacity-100">
                <span>Share</span>
              </button>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
