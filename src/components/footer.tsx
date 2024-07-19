import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-[#021620] h-52 py-12">
      <div className="max-w-[980px] m-auto space-y-7">
        <div className="flex items-center justify-between">
          <div>
            <nav className="flex items-center gap-6 text-md">
              <ul className="opacity-60 hover:opacity-100 cursor-pointer">
                <li>About</li>
              </ul>
              <ul className="opacity-60 hover:opacity-100 cursor-pointer">
                <li>Terms</li>
              </ul>
              <ul className="opacity-60 hover:opacity-100 cursor-pointer">
                <li>API</li>
              </ul>
              <ul className="opacity-60 hover:opacity-100 cursor-pointer">
                <li>Contact</li>
              </ul>
            </nav>
          </div>
          <div>
            <nav>
              <ul className="flex items-center gap-4">
                <li className="opacity-25 hover:opacity-100">
                  <a
                    href="https://www.linkedin.com/in/kaualimadesouza"
                    target="_blank"
                  >
                    <Linkedin className="size-5" />
                  </a>
                </li>

                <li className="opacity-25 hover:opacity-100">
                  <a href="https://github.com/kaualimadesouza" target="_blank">
                    <Github className="size-5" />
                  </a>
                </li>

                <li className="opacity-25 hover:opacity-100">
                  <a href="https://www.instagram.com/kl.souza1/" target="_blank">
                    <Instagram className="size-5" />
                  </a>
                </li>

                <li className="opacity-25 hover:opacity-100">
                  <a href="https://twitter.com/mechamokaua_" target="_blank">
                    <Twitter className="size-5" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <p className="opacity-40 text-sm font-light">
          Made by fã in Brazil, Movie data from IMDb.
        </p>
      </div>
    </footer>
  );
}
