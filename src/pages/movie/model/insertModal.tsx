import {
  Calendar,
  Captions,
  Clapperboard,
  Image,
  Pen,
  Star,
  VenetianMask,
  X,
} from "lucide-react";
import { FormEvent } from "react";

interface insertModalProps {
  isInsertModalOpen: boolean;
  closeInsertModal: () => void;
  postMovie: (event: FormEvent<HTMLFormElement>) => Promise<void>;
  setTitle: (title: string) => void;
  setRating: (rating: string) => void;
  setImgurl: (imgurl: string) => void;
  setYear: (year: number) => void;
  setDescription: (desc: string) => void;
  setGenre: (genre: string) => void;
  setImdbid: (imdbid: string) => void;
}

export function InsertModal({
  isInsertModalOpen,
  closeInsertModal,
  postMovie,
  setTitle,
  setRating,
  setImgurl,
  setYear,
  setDescription,
  setGenre,
  setImdbid,
}: insertModalProps) {
  return (
    <div>
      {isInsertModalOpen && (
        <div className="inset-0 fixed bg-black/60 flex justify-center items-center">
          <div className="w-[500px] shadow-shape bg-[#01131C] rounded-md px-10 py-7 space-y-3">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-semibold">Insert a Movie</h1>
              <button onClick={closeInsertModal}>
                <X className="size-5 opacity-40 hover:opacity-80" />
              </button>
            </div>
            <p className="opacity-25 text-[14px]">
              insert a film and assign its name, rating, duration, poster and a
              description
            </p>

            <div className="w-full ">
              <form
                onSubmit={postMovie}
                className="w-full overflow-hidden space-y-3"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2 w-full">
                    <div className="bg-black/60 p-4 rounded-md flex-1 flex items-center gap-3">
                      <Captions className="opacity-25 size-5" />
                      <input
                        onChange={(event) => setTitle(event.target.value)}
                        type="text"
                        name="title"
                        placeholder="Title"
                        className="bg-transparent outline-none placeholder:opacity-45 placeholder:font-light "
                      />
                    </div>

                    <div className="bg-black/60 p-4 rounded-md flex-1 flex items-center gap-3">
                      <Star className="opacity-25 size-5" />
                      <input
                        onChange={(event) => setRating(event.target.value)}
                        min={0}
                        max={10}
                        type="text"
                        name="rating"
                        placeholder="Rating"
                        className="bg-transparent outline-none placeholder:opacity-45 placeholder:font-light"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 w-full">
                    <div className="bg-black/60 p-4 rounded-md flex-1 flex items-center gap-3">
                      <Image className="opacity-25 size-5" />
                      <input
                        onChange={(event) => setImgurl(event.target.value)}
                        type="text"
                        name="image"
                        placeholder="Image URL"
                        className="bg-transparent outline-none placeholder:opacity-45 placeholder:font-light"
                      />
                    </div>

                    <div className="bg-black/60 p-4 rounded-md flex-1 flex items-center gap-3">
                      <Calendar className="opacity-25 size-5" />
                      <input
                        onChange={(event) =>
                          setYear(parseInt(event.target.value))
                        }
                        min={1888}
                        max={2024}
                        type="number"
                        name="year"
                        placeholder="Year"
                        className="bg-transparent outline-none placeholder:opacity-45 placeholder:font-light"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="bg-black/60 p-4 rounded-md flex-1 flex items-center gap-3">
                      <Pen className="opacity-25 size-5" />
                      <input
                        onChange={(event) => setDescription(event.target.value)}
                        type="text"
                        name="description"
                        placeholder="Description"
                        className=" w-full bg-transparent outline-none placeholder:opacity-45 placeholder:font-light"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 w-full">
                    <div className="bg-black/60 p-4 rounded-md flex-1 flex items-center gap-3">
                      <VenetianMask className="opacity-25 size-5" />
                      <input
                        onChange={(event) => setGenre(event.target.value)}
                        type="text"
                        name="genre"
                        placeholder="Genres"
                        className="bg-transparent outline-none placeholder:opacity-45 placeholder:font-light"
                      />
                    </div>

                    <div className="bg-black/60 p-4 rounded-md flex-1 flex items-center gap-3">
                      <Clapperboard className="opacity-25 size-5" />
                      <input
                        onChange={(event) => setImdbid(event.target.value)}
                        type="text"
                        name="imdbid"
                        placeholder="Imdb Id"
                        className="bg-transparent outline-none placeholder:opacity-45 placeholder:font-light"
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center bg-zinc-50 text-[#01131C] rounded-lg py-1.5 text-xl font-semibold hover:opacity-85"
                >
                  SendMove
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
