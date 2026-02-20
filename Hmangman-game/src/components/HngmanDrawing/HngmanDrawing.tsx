const HEAD = (
  <div className="w-13 h-13 rounded-full border-black border-8 absolute top-12 -right-5"></div>
);
const BODY = <div className="w-2 h-25  absolute top-23 right-0 bg-black"></div>;
const RIGHT_ARM = (
  <div className="w-23 h-2  absolute top-27 -right-21 bg-black -rotate-30"></div>
);
const LEFT_ARM = (
  <div className="w-23 h-2  absolute top-27 right-0 bg-black rotate-30"></div>
);
const RIGHT_LEG = (
  <div className="w-23 h-2  absolute top-51 -right-20 bg-black rotate-32"></div>
);
const LEFT_LEG = (
  <div className="w-23 h-2  absolute top-51.5 -right-0.5 bg-black -rotate-32"></div>
);
const BODY_PARTS=[HEAD,BODY,RIGHT_ARM,LEFT_ARM,RIGHT_LEG,LEFT_LEG]
type HangManDrawingProps= {
  numberOfGuesses:number
}
const HngmanDrawing = ({numberOfGuesses}:HangManDrawingProps) => {
  return (
    <div className="relative">
   {BODY_PARTS.slice(0,numberOfGuesses)}
      <div className="h-12.5 w-2.5 bg-black absolute top-0 right-0"></div>
      <div className="h-2.5 w-50 bg-black ml-30"></div>
      <div className="h-100 w-2.5 bg-black ml-30"></div>
      <div className="w-62.5 h-2.5 bg-black"></div>
    </div>
  );
};

export default HngmanDrawing;
