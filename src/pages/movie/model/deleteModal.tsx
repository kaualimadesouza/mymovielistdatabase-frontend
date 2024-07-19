import { Tag, X } from "lucide-react";
import { FormEvent } from "react";

interface deleteModalProps {
    isDeleteModalOpen: boolean,
    closeDeleteModal: () => void,
    removeMovie:(event: FormEvent<HTMLFormElement>) => Promise<void>,
    setIdtoRemove: (id: string) => void,


}

export function DeleteModal({ isDeleteModalOpen, closeDeleteModal, removeMovie, setIdtoRemove } : deleteModalProps) {
  return (
    <div>
      {isDeleteModalOpen && (
        <div className="inset-0 fixed bg-black/60 flex justify-center items-center">
          <div className="w-[500px] shadow-shape bg-[#01131C] rounded-md px-10 py-7 space-y-3">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-semibold">Delete a Movie</h1>
              <button onClick={closeDeleteModal}>
                <X className="size-5 opacity-40 hover:opacity-80" />
              </button>
            </div>
            <p className="opacity-25 text-[14px]">
              insert the movie Id to remove from database
            </p>

            <div className="w-full ">
              <form
                onSubmit={removeMovie}
                className="w-full overflow-hidden space-y-3"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2 w-full">
                    <div className="bg-black/60 p-4 rounded-md flex-1 flex items-center gap-3">
                      <Tag className="opacity-25 size-5" />
                      <input
                        onChange={(event) => setIdtoRemove(event.target.value)}
                        type="text"
                        name="movieid"
                        placeholder="Movie Id"
                        className="bg-transparent outline-none placeholder:opacity-45 placeholder:font-light "
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center bg-red-600 text-zinc-50 rounded-lg py-1.5 text-xl font-semibold hover:opacity-85"
                >
                  Remove
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
