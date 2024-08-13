export default function SpinCoin() {
  return (
    <div className="h-[calc(100vh-20px)] flex flex-col items-center">
      {/* <img className="rounded-full bigO opacity-30" src="/main-logo/bigO.png" alt="logo" /> */}
      <img className="leftO" src="/main-logo/leftO.png" alt="leftO" />
      <img className="rightO" src="/main-logo/rightO.png" alt="rightO" />
      <img
        className="rounded-full z-50 bigU"
        src="/main-logo/bigU.png"
        alt="logo"
      />
      {/* <img className="rounded-full bigO" src="/logo.png" alt="logo" /> */}
      <img className="rounded-full spin-coin" src="/logo.png" alt="fullLogo" />
    </div>
  );
}
