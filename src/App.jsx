import "./index.css";

function App() {
  return (
    <div className="App">
      {/* navigation */}

      <header className="absolute z-30 bg-white w-full text-black">
        <nav className="bg-white w-[1080px] my-0 mx-auto font-outfit text-lg py-4">
          <div className="flex justify-between">
            <div className="text-[24px]">Coaching App</div>
            <div className="flex gap-6">
              <div>About</div>
              <div>Solutions</div>
              <div>Log In</div>
            </div>
          </div>
        </nav>
      </header>

      <main className="">
        <section className="">
          <div
            id="image"
            className="h-screen flex flex-col justify-end overflow-clip bg-center bg-cover bg-no-repeat"
          >
            <div className="w-[1080px] mx-auto my-auto">
              <div className="flex-col">
                <div className="text-8xl text-white">
                  "To dare,
                  <br /> that is the price of progress." <br /> Victor Hugo
                </div>
                <div id="paragraph" className="text-white py-8 text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto soluta tempora ratione corrupti <br /> reiciendis
                  molestias sunt recusandae fugit harum consequuntur sed
                  voluptate earum enim quidem eos, <br /> repudiandae beatae
                  voluptas quod labore. Aut maxime dolorum commodi magni non
                  molestiae quas placeat? <br /> Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Facilis, dolor.
                </div>
                <div id="btn" className="flex gap-8">
                  <button className="bg-white font-thinn  px-16 rounded-full py-4 text-[28px]">
                    Get started
                  </button>
                  <button className="text-white bg-transparent border-2 px-16 rounded-full py-4 text-[28px]">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* business coaching */}

        <section className="w-[1080px] mx-auto pt-60 pb-40">
          <div className="flex justify-between gap-9">
            <div className="w-[540px]">
              <p className="text-6xl text-left">Business Coaching</p>
              <p id="paragraph" className="py-10 text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
                aliquid ratione sed necessitatibus praesentium veniam, corporis
                atque ipsam, nisi blanditiis repellendus quae illo aliquam dicta
                soluta voluptatem quod tenetur delectus.
              </p>
              <button
                id="btn"
                className="text-white bg-[#0F766E] border-2 px-24 rounded-full py-4 text-[28px] drop-shadow"
              >
                Learn more
              </button>
            </div>

            <div className="flex-col w-[540px]">
              <div className="flex justify-between py-4 px-10 bg-white rounded-xl shadow-lg mb-2">
                <p className=" flex items-center text-xl">
                  LEADERSHIP COACHING
                </p>
                <div className="bg-white w-[70px] h-[70px] flex justify-center items-center rounded-full drop-shadow text-[#0F766E] color-[#0F766E] hover:bg-[#0F766E] hover:text-white">
                  <i class="fa-solid fa-arrow-down fa-2x"></i>
                </div>
              </div>
              <div className="flex justify-between py-4 px-10 bg-white rounded-xl shadow-lg mb-2">
                <p className="flex items-center text-xl">
                  SALES/MARKETING COACHING
                </p>
                <div className="bg-white w-[70px] h-[70px] flex justify-center items-center rounded-full drop-shadow text-[#0F766E] color-[#0F766E] hover:bg-[#0F766E] hover:text-white">
                  <i class="fa-solid fa-arrow-down fa-2x"></i>
                </div>
              </div>
              <div className="flex justify-between py-4 px-10 bg-white rounded-xl shadow-lg">
                <p className="flex items-center text-xl">MENTORING COACHING</p>
                <div className="bg-white w-[70px] h-[70px] flex justify-center items-center rounded-full drop-shadow text-[#0F766E] color-[#0F766E] hover:bg-[#0F766E] hover:text-white">
                  <i class="fa-solid fa-arrow-down fa-2x"></i>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* life coaching */}

        <section className="w-[1080px] mx-auto py-20">
          <div className="flex justify-between gap-9">
            <div className="flex-col w-[540px]">
              <div className="flex justify-between py-4 px-10 bg-white rounded-xl shadow-lg mb-2">
                <p className="p-5 text-xl">RELATIONSHIP COACHING</p>
                <div className="bg-white w-[70px] h-[70px] flex justify-center items-center rounded-full drop-shadow text-[#FF9F1C] color-[#0F766E] hover:bg-[#FF9F1C] hover:text-white">
                  <i class="fa-solid fa-arrow-down fa-2x"></i>
                </div>
              </div>
              <div className="flex justify-between py-4 px-10 bg-white rounded-xl shadow-lg mb-2">
                <p className="p-5 text-xl">HEALTH & WELNNES COACHING</p>
                <div className="bg-white w-[70px] h-[70px] flex justify-center items-center rounded-full drop-shadow text-[#FF9F1C] color-[#0F766E] hover:bg-[#FF9F1C] hover:text-white">
                  <i class="fa-solid fa-arrow-down fa-2x"></i>
                </div>
              </div>
              <div className="flex justify-between py-4 px-10 bg-white rounded-xl shadow-lg mb-2">
                <p className="p-5 text-xl">CAREER COACHING</p>
                <div className="bg-white w-[70px] h-[70px] flex justify-center items-center rounded-full drop-shadow text-[#FF9F1C] color-[#0F766E] hover:bg-[#FF9F1C] hover:text-white">
                  <i class="fa-solid fa-arrow-down fa-2x"></i>
                </div>
              </div>
            </div>

            <div className="w-[540px] text-left">
              <p className="text-6xl text-left">Life Coaching</p>
              <p id="paragraph" className="py-10 text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
                aliquid ratione sed necessitatibus praesentium veniam, corporis
                atque ipsam, nisi blanditiis repellendus quae illo aliquam dicta
                soluta voluptatem quod tenetur delectus.
              </p>
              <button
                id="btn"
                className="text-white bg-[#FF9F1C] border-2 px-24 rounded-full py-4 text-[28px]"
              >
                Learn more
              </button>
            </div>
          </div>
        </section>

        {/* cards with photos */}

        <section className="w-[1080px] mx-auto py-20">
          <div className="flex justify-between gap-56">
            <img src="../img/rukice 1.png" alt="" />
            <div className="w-[540px] text-left">
              <p className="text-6xl text-left">Leadership Coaching</p>
              <p id="paragraph" className="py-16 text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
                aliquid ratione sed necessitatibus praesentium veniam, corporis
                atque ipsam, nisi blanditiis repellendus quae illo aliquam dicta
                soluta voluptatem quod tenetur delectus.
              </p>
              <button
                id="btn"
                className="text-white bg-[#0F766E] border-2 px-24 rounded-full py-4 text-[28px]"
              >
                Learn more
              </button>
            </div>
          </div>
        </section>

        <section className="w-[1080px] mx-auto py-20">
          <div className="flex justify-between gap-56">
            <div className="w-[540px] text-left">
              <p className="text-6xl text-left">Health & Welness Coaching</p>
              <p id="paragraph" className="py-16 text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
                aliquid ratione sed necessitatibus praesentium veniam, corporis
                atque ipsam, nisi blanditiis repellendus quae illo aliquam dicta
                soluta voluptatem quod tenetur delectus.
              </p>
              <button
                id="btn"
                className="text-white bg-[#0F766E] border-2 px-24 rounded-full py-4 text-[28px]"
              >
                Learn more
              </button>
            </div>

            <img src="../img/rukice 1.png" alt="" />
          </div>
        </section>

        <section className="w-[1080px] mx-auto py-20">
          <div className="flex justify-between gap-56">
            <img src="../img/rukice 1.png" alt="" />
            <div className="w-[540px] text-left">
              <p className="text-6xl text-left">Relationship Coaching</p>
              <p id="paragraph" className="py-16 text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
                aliquid ratione sed necessitatibus praesentium veniam, corporis
                atque ipsam, nisi blanditiis repellendus quae illo aliquam dicta
                soluta voluptatem quod tenetur delectus.
              </p>
              <button
                id="btn"
                className="text-white bg-[#0F766E] border-2 px-24 rounded-full py-4 text-[28px]"
              >
                Learn more
              </button>
            </div>
          </div>
        </section>

        <section className="w-[1080px] mx-auto py-20">
          <div className="flex justify-between gap-56">
            <div className="w-[540px] text-left">
              <p className="text-6xl text-left">Relationship Coaching</p>
              <p id="paragraph" className="py-16 text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
                aliquid ratione sed necessitatibus praesentium veniam, corporis
                atque ipsam, nisi blanditiis repellendus quae illo aliquam dicta
                soluta voluptatem quod tenetur delectus.
              </p>
              <button
                id="btn"
                className="text-white bg-[#FF9F1C] border-2 px-24 rounded-full py-4 text-[28px]"
              >
                Learn more
              </button>
            </div>

            <img src="../img/rukice 1.png" alt="" />
          </div>
        </section>

        <section className="w-[1080px] mx-auto py-20">
          <div className="flex justify-between gap-56">
            <img src="../img/rukice 1.png" alt="" />
            <div className="w-[540px] text-left">
              <p className="text-6xl text-left">Health & Welness Coaching</p>
              <p id="paragraph" className="py-16 text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
                aliquid ratione sed necessitatibus praesentium veniam, corporis
                atque ipsam, nisi blanditiis repellendus quae illo aliquam dicta
                soluta voluptatem quod tenetur delectus.
              </p>
              <button
                id="btn"
                className="text-white bg-[#FF9F1C] border-2 px-24 rounded-full py-4 text-[28px]"
              >
                Learn more
              </button>
            </div>
          </div>
        </section>

        <section className="w-[1080px] mx-auto py-20">
          <div className="flex justify-between gap-56">
            <div className="w-[540px] text-left">
              <p className="text-6xl text-left">Career Coaching</p>
              <p id="paragraph" className="py-16 text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
                aliquid ratione sed necessitatibus praesentium veniam, corporis
                atque ipsam, nisi blanditiis repellendus quae illo aliquam dicta
                soluta voluptatem quod tenetur delectus.
              </p>
              <button
                id="btn"
                className="text-white bg-[#FF9F1C] border-2 px-24 rounded-full py-4 text-[28px]"
              >
                Learn more
              </button>
            </div>
            <img src="../img/rukice 1.png" alt="" />
          </div>
        </section>

        {/* couches */}

        <section className="w-[1080px] mx-auto py-20">
          <div className="flex justify-between gap-5">
            <div>
              <img
                src="../img/coucica 1.png"
                alt=""
                className="rounded-full mx-auto"
              />
              <div
                id="paragraph"
                className="text-center pt-20 pb-48 px-10 shadow-lg rounded-2xl"
              >
                <h1 className=" py-10">ZORICA BRUNCLIK</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  animi, tempore cumque ipsum molestias corrupti!
                </p>
              </div>
            </div>
            <div>
              <img
                src="../img/coucica 1.png"
                alt=""
                className="rounded-full mx-auto"
              />
              <div
                id="paragraph"
                className="text-center pt-20 pb-48 px-10 shadow-lg rounded-2xl"
              >
                <h1 className=" py-10">ZORICA BRUNCLIK</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  animi, tempore cumque ipsum molestias corrupti!
                </p>
              </div>
            </div>
            <div>
              <img
                src="../img/coucica 1.png"
                alt=""
                className="rounded-full mx-auto"
              />
              <div
                id="paragraph"
                className="text-center pt-20 pb-48 px-10 shadow-lg rounded-2xl"
              >
                <h1 className=" py-10">ZORICA BRUNCLIK</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  animi, tempore cumque ipsum molestias corrupti!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-[1080px] mx-auto py-20">
          <div className="bg-gradient-to-r from-[#0F766E] to-[#FF9F1C] text-center rounded-3xl">
            <p className="pt-14 text-2xl">ARE YOU READY?</p>
            <p id="paragraph" className=" text-6xl text-white py-10">
              Ovde poruka da se <br /> izloze (CTA)
            </p>
            <div className="pb-14">
              <button
                id="btn"
                className="bg-black text-white px-16 rounded-full py-4 text-[28px]"
              >
                Get started
              </button>
            </div>
          </div>
        </section>

        <section className="w-[1080px] mx-auto py-20">
          <div className="flex justify-between">
            <div>
              <p className="mb-3">Coaching App.</p>
            </div>
            <div>
              <p className="mb-3">Useful Links</p>
              <div id="paragraph">
                <p className="mb-3">Link Example</p>
                <p className="mb-3">Link Example</p>
                <p className="mb-3">Link Example</p>
              </div>
            </div>
            <div>
              <p className="mb-3">Comunity</p>
              <div id="paragraph">
                <p className="mb-3">Link Example</p>
                <p className="mb-3">Link Example</p>
                <p className="mb-3">Link Example</p>
              </div>
            </div>
            <div>
              <p className="mb-3">Partners</p>
              <div id="paragraph">
                <p className="mb-3">Partner 1</p>
                <p className="mb-3">Partner 2</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-2 bg-gradient-to-r from-[#0F766E] to-[#FF9F1C]"></footer>
    </div>
  );
}

export default App;
