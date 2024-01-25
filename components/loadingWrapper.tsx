import Portal from "./Portal";



export const Preloader: React.FC = () => {
  return (
    <Portal>
      <div className="h-full w-full grid place-items-center bg-light">
       Loading ...
      </div>
    </Portal>
  );
};
