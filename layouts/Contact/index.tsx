import { Button } from "@components/Button";

export const Contact: React.FC<any> = (props) => {
  return (
    <div className="container p-3">
      <title>Contact page</title>
      <form className="flex flex-col gap-2">
      <fieldset className="grid grid-flow-row gap-3">
          <input
            type="text"
            placeholder="name"
            className="border-[1px] rounded-md px-3 py-1 border-accent w-[30rem]"
          />
          <input
            type="email"
            placeholder="email"
            className="border-[1px] rounded-md px-3 py-1 border-accent w-[30rem]"
          />
          <input
            type="tel"
            placeholder="phone"
            className="border-[1px] rounded-md px-3 py-1 border-accent  w-[30rem]"
          />
        </fieldset>


        <Button
          typographyProps={{
            size: "base",
            weight: "normal",
          }}
          variant="text"
          type="submit"
          color="secondary"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Want to submit a??
        </Button>
      </form>
    </div>
  );
};
