export function Header() {
  return (
    <header className="w-full h-20 bg-[#01131C] min-h-[8vh]">
      <div className="flex justify-between items-center h-full max-w-[980px] m-auto">
        <h1 className="text-3xl font-bold">
          <a href="/" className="cursor-pointer">MMLDb</a>
        </h1>
        <nav>
          <ul className="flex items-center gap-4 font-medium text-xl">
            <li>
              <a
                href="/movies"
                className="text-[#3E4C52] hover:text-zinc-50 font-semibold text-[18px]"
              >
                Movies
              </a>
            </li>
            <li>
              <a
                href="/top100movies/page/1"
                className="text-[#3E4C52] hover:text-zinc-50 font-semibold text-[18px]"
              >
                Top 100 Movies
              </a>
            </li>

          </ul>
        </nav>
      </div>
    </header>
  );
}
