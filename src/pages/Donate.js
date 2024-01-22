function Donate() {
  return (
    <div className="h-[105%]">
      <button
        onClick={() =>
          window.open("https://www.paypal.me/autoittutorial", "_blank").focus()
        }
        className="mt-2 p-1 w-[30%] text-white bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 border border-gray-100 border-opacity-30 hover:bg-opacity-20"
      >
        Paypal
      </button>{" "}
      <button
        onClick={() =>
          window
            .open("https://me.momo.vn/AEI7uyfxtRFKUBT9sbsx", "_blank")
            .focus()
        }
        className="mt-2 p-1 w-[30%] text-white bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 border border-gray-100 border-opacity-30 hover:bg-opacity-20"
      >
        Momo
      </button>{" "}
      <button
        onClick={() =>
          window
            .open("https://phatjkk.github.io/crypto.txt", "_blank")
            .focus()
        }
        className="mt-2 p-1 w-[30%] text-white bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 border border-gray-100 border-opacity-30 hover:bg-opacity-20"
      >
        Crypto
      </button>
      <p>TPBank: 03631648801 (NGUYEN THANH PHAT)</p>
      Thanks you ^^
    </div>
  );
}
export default Donate;
