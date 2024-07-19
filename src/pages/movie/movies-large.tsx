import {
  Plus,
  Search,
  Trash,
} from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { API } from "../../lib/axios";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { InsertModal } from "./model/insertModal";
import { DeleteModal } from "./model/deleteModal";
import { useNavigate, useParams } from "react-router-dom";

interface movieProps {
  id: string;
  title: string;
  description: string;
  imgURL: string;
  genre: string;
  rating: number;
  movie_year: number;
  imdb_id: number;
}

export function MoviesLarge() {
  const navigate = useNavigate();
  const { page } = useParams();
  const realPage = !page ? "1" : page;
  const [movieData, setMovieData] = useState<movieProps[]>([]);
  const [totalMovies, setTotalMovies] = useState<movieProps[]>([]);
  const [isInsertModalOpen, setIsInsertModalOppen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOppen] = useState(false);
  const [movieName, setMovieName] = useState("");

  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [imgurl, setImgurl] = useState("");
  const [year, setYear] = useState(0);
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");
  const [imdbid, setImdbid] = useState("");
  const [idToRemove, setIdtoRemove] = useState("");

  function openInsertModal() {
    setIsInsertModalOppen(true);
    document.body.style.overflow = "hidden";
  }
  function closeInsertModal() {
    setIsInsertModalOppen(false);
    document.body.style.overflow = "auto";
  }

  function openDeleteModal() {
    setIsDeleteModalOppen(true);
    document.body.style.overflow = "hidden";
  }
  function closeDeleteModal() {
    setIsDeleteModalOppen(false);
    document.body.style.overflow = "auto";
  }

  useEffect(() => {
    API.get(
      `/movies/pageable/${
        !page ? 0 : parseInt(page) > 0 ? parseInt(page) - 1 : 0
      }/${18}`
    ).then((response) => {
      setMovieData(response.data);
    });
    API.get("/movies").then((response) => {
      setTotalMovies(response.data);
    });
  }, []);

  async function removeMovie(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!idToRemove) {
      return;
    }

    await API.delete(`/movies/${idToRemove}`);
    closeDeleteModal();
    return;
  }

  async function postMovie(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (
      !title ||
      !rating ||
      !imgurl ||
      !year ||
      !description ||
      !genre ||
      !imdbid
    ) {
      return;
    }

    await API.post("/movies", {
      title,
      description,
      imgURL: imgurl,
      genre,
      rating: parseFloat(rating),
      movieYear: year,
      imdbId: imdbid,
    });

    closeInsertModal();

    return;
  }

  function reload() {
    location.reload();
  }

  function goToNormal() {
    navigate("/movies");
  }

  function nextPage() {
    navigate(`/movies/large/page/${parseInt(realPage) + 1}`);
    location.reload();
  }

  function previousPage() {
    navigate(`/movies/large/page/${parseInt(realPage) - 1}`);
    location.reload();
  }

  function searchByMovieName(movieNameFull: string) {
    const movieNameToSearch = movieNameFull.replace("_", " ");
    setMovieName(movieNameToSearch);

    if (movieNameFull === "") {
      API.get(
        `/movies/pageable/${
          !page ? 0 : parseInt(page) > 0 ? parseInt(page) - 1 : 0
        }/${18}`
      ).then((response) => {
        setMovieData(response.data);
      });
    } else {
      API.get(
        `http://44.195.40.138:8080/movies/search/${movieName}/${
          !page ? 0 : parseInt(page) > 0 ? parseInt(page) - 1 : 0
        }/${18}`
      ).then((response) => {
        setMovieData(response.data);
      });
    }
  }

  // document.body.style.overflow = 'hidden';

  return (
    <div className="h-[100vh]">
      <Header />

      <main className="bg-custom-gradient py-11">
        <div className="w-full space-y-3 max-w-[980px] m-auto h-[880px] relative">
          <div className="w-full flex items-baseline justify-between border-b-[1px] border-zinc-100 border-opacity-25">
            <h2 className="opacity-25 text-xl">Movies</h2>
            <div className="flex items-center gap-4">
              <button
                onClick={openInsertModal}
                className="opacity-25 hover:opacity-100 flex items-center gap-0.5"
              >
                <Plus className="size-3.5" />
                <span>Insert</span>
              </button>
              <button
                onClick={openDeleteModal}
                className="opacity-25 hover:opacity-100 flex items-center gap-0.5"
              >
                <Trash className="size-3.5" />
                <span>Delete</span>
              </button>
              <div className="flex items-baseline gap-1">
                <button
                  onClick={goToNormal}
                  className="opacity-25 hover:opacity-100"
                >
                  <img src="/one.svg" className="size-4" />
                </button>
                <button onClick={reload}>
                  <img src="/mult.svg" className="size-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="w-full h-9 bg-[#1B2B34] rounded-md flex items-center justify-center space-y-8">
            <span className="text-sm">
              These are {totalMovies.length} movies{" "}
              <span className="opacity-40 text-[10px]">(insert a movie)</span>
            </span>
          </div>
          <form className="flex items-center border-b-[1px] border-zinc-100 border-opacity-25 pb-1 gap-2">
            <Search className="size-4 opacity-35" />
            <input
              onChange={(event) => searchByMovieName(event.currentTarget.value)}
              type="text"
              name="search"
              placeholder="Search by name"
              className="w-full bg-transparent outline-none placeholder:opacity-35"
            />
          </form>
          <div></div>
          <div className="grid grid-cols-large justify-between gap-2 pb-3 border-b-[1px] border-zinc-100 border-opacity-25 ">
            {movieData.map((movie) => (
              <div
                key={movie.id}
                className="relative
before:content-[attr(movie-title)]
before:absolute

before:px-3 before:py-2
before:left-1/2 before:-top-12
before:w-max before:max-w-xs
before:-translate-x-1/2
before:bg-gray-700 before:text-white
before:rounded-md before:opacity-0
before:transition-all
before:text-[11px]
before:shadow-shape
before:z-10
before:font-bold
before:font-sans

after:absolute
after:left-1/2 after:-top-3
after:h-0 after:w-0
after:-translate-x-1/2 after:border-8
after:border-t-gray-700
after:border-l-transparent
after:border-b-transparent
after:border-r-transparent
after:opacity-0
after:transition-all
after:z-10

hover:before:opacity-100 hover:after:opacity-100"
                movie-title={movie.title}
                movie-rating={movie.rating}
              >
                <img
                  src={movie.imgURL}
                  alt={movie.title}
                  className="rounded-[4px] shadow-shape border-zinc-50 border border-opacity-5"
                />
              </div>
            ))}
          </div>
          {realPage === "1" && totalMovies.length < 18 ? (
            <div>
              <button
                onClick={nextPage}
                className="absolute right-0 px-3 py-1 bg-[#404f55] text-sm font-light rounded-sm opacity-50 hover:opacity-75 shadow-shape"
              >
                Next
              </button>
            </div>
          ) : movieData.length < 18 && !movieName ? (
            <div>
              <button
                onClick={previousPage}
                className="absolute left-0 px-3 py-1 bg-[#404f55] text-sm font-light rounded-sm opacity-50 hover:opacity-75 shadow-shape"
              >
                Previous
              </button>
            </div>
          ) : !movieName ? (
            <div>
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
          ) : (
            <div></div>
          )}
        </div>
      </main>

      <Footer />

      <DeleteModal
        closeDeleteModal={closeDeleteModal}
        isDeleteModalOpen={isDeleteModalOpen}
        removeMovie={removeMovie}
        setIdtoRemove={setIdtoRemove}
      />

      <InsertModal
        closeInsertModal={closeInsertModal}
        isInsertModalOpen={isInsertModalOpen}
        postMovie={postMovie}
        setDescription={setDescription}
        setGenre={setGenre}
        setImdbid={setImdbid}
        setImgurl={setImgurl}
        setRating={setRating}
        setTitle={setTitle}
        setYear={setYear}
      />
    </div>
  );
}
