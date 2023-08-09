function Home() {
  return (
    <>
      <div className="mt-5 ">
        Hi! Welcome to my website, my name is Nguyễn Thành Phát. A typical Asian man, who has experience in developing websites and applications. Have knowledge about data
        processing/analytics and do some of Machine/Deep Learning tasks. 
        Let's see my products in Project Tab. Give me a star if it helpful to you. 
        Have a great day ;)
      </div>
      <div className="bg-[url('/have_a_nice.gif')] mt-2 rounded-lg mx-auto bg-cover h-[10em] w-[10em]">
      </div>
        <div class="flex w-full justify-center">
          <button onClick={() => window.open("https://github.com/phatjkk/phatjkk.github.io/blob/master/CV_NguyenThanhPhat_noPhone.pdf", "_blank").focus()} class=" mt-2 p-1 w-[10em]  text-white bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 border border-gray-100 border-opacity-30 hover:bg-opacity-20">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="download" class="svg-inline--fa fa-download fa-w-16 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"></path>
          </svg>
          View CV
          </button>
        </div>
    </>
  );
}
export default Home;
