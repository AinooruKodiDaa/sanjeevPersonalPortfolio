import { Heading, Text } from "@components/Typography";

export const Dashboard: React.FC<any> = (props) => {
  const array: any[] = [];

  for (let i = 0; i <= 1000; i++) {
    const record = {
      title: `Title ${i + 1}`,
      subTitle: `Random number and some text like idem diemd:  ${Math.floor(
        Math.random() * 980
      )}`,
      status: Math.random() > 0.5 ? "Active" : "Inactive",
    };
    array.push(record);
  }
  return (
    <div className="container">
      <title>Dashboard page</title>

      <div className="p-3 flex flex-wrap items-center gap-3 w-full">
        {array.map((item, i) => (
          <div
            key={i}
            className="rounded-lg shadow-[rgba(var(--colors-rgbBlack),0.2)] shadow-md flex flex-col justify-between items-start text-start text-secondary bg-slate-200  hover:scale-[1.1] hover:z-[50] transition-all 100ms ease-in-out p-3 h-[14rem] w-[10rem]"
          >
            <Heading as="h2" color="inherit" weight="bold" size="base">
              {item.title}
            </Heading>
            <Text as="p" color="inherit" weight="normal" size="base">
              {item.subTitle}
            </Text>
            <div
              className={`${
                item.status === "Active"
                  ? "bg-[rgba(0,194,84,0.5)]"
                  : "bg-[rgba(194,178,0,0.5)]"
              } " rounded-lg p-1 text-center w-[5rem]`}
            >
              <Text as="p" color="inherit" weight="normal" size="base">
                {item.status}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
