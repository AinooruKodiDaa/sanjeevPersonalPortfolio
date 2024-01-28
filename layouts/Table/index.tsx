import { Button } from "@components/Button";
import {
  StyledCaption,
  StyledTable,
  StyledTableDataCell,
  StyledTableFooter,
  StyledTableHead,
  StyledTableRow,
} from "./styled";
import { Heading, Text } from "@components/Typography";
import { useCallback, useState } from "react";

const generateRandomRecords = (count: number) => {
  const records = [];
  for (let i = 0; i < count; i++) {
    const record = {
      id: i + 1,
      name: `Person ${i + 1}`,
      email: `person${i + 1}@example.com`,
      phone: `+${Math.floor(Math.random() * 10000000000)}`,
      salary: Math.floor(Math.random() * 1000000),
      employment: Math.random() > 0.5 ? "Active" : "Inactive",
      wealth: Math.random() > 0.5 ? "Rich" : "Poor",
    };
    records.push(record);
  }
  return records;
};

export const Table: React.FC<any> = (props) => {
  const records = generateRandomRecords(50);

  // Find the person with the highest salary
  const highestSalaryPerson = records.reduce((prev, current) =>
    prev.salary > current.salary ? prev : current
  );

  // Calculate the average salary
  const totalSalary: number = records.reduce(
    (sum, record) => sum + record.salary,
    0
  );
  const averageSalary: number = totalSalary / records.length;

  return (
    <div className="container px-3">
      <title>Responsive table</title>
      <div className="grid grid-cols-2 my-3">
        <input
          type="search"
          placeholder="Search"
          className="border-[1px] rounded-md px-3 py-1 border-accent w-[15rem]"
        />
        <input
          type="search"
          placeholder="Search"
          className="border-[1px] rounded-md px-3 py-1 border-accent w-[15rem]"
        />
      </div>
      <div className="h-[70vh] overflow-auto">
        <StyledTable>
          {/* <StyledCaption></StyledCaption> */}
          <StyledTableRow>
            <StyledTableHead>
              <Heading color="inherit" size="sm" as="h2" weight="bold">
                Name
              </Heading>
            </StyledTableHead>
            <StyledTableHead>
              <Heading color="inherit" size="sm" as="h2" weight="bold">
                Email
              </Heading>
            </StyledTableHead>
            <StyledTableHead>
              <Heading color="inherit" size="sm" as="h2" weight="bold">
                Phone
              </Heading>
            </StyledTableHead>
            <StyledTableHead>
              <Heading
                color="inherit"
                size="sm"
                as="h2"
                weight="bold"
              >{`Salary (annual)`}</Heading>
            </StyledTableHead>
            <StyledTableHead>
              <Heading color="inherit" size="sm" as="h2" weight="bold">
                Employment Status
              </Heading>
            </StyledTableHead>
            <StyledTableHead>
              <Heading color="inherit" size="sm" as="h2" weight="bold">
                Wealth Status
              </Heading>
            </StyledTableHead>
          </StyledTableRow>

          {records.map((record, index) => (
            <StyledTableRow key={record.id} className="cursor-pointer">
              <StyledTableDataCell data-cell="name">
                <Text color="inherit" size="sm" as="p" weight="normal">
                  {record.name}
                </Text>
              </StyledTableDataCell>
              <StyledTableDataCell data-cell="email">
                <Text color="inherit" size="sm" as="p" weight="normal">
                  {record.email}
                </Text>
              </StyledTableDataCell>
              <StyledTableDataCell data-cell="phone">
                <Text color="inherit" size="sm" as="p" weight="normal">
                  {record.phone}
                </Text>
              </StyledTableDataCell>
              <StyledTableDataCell data-cell="salary">
                <Text color="inherit" size="sm" as="p" weight="normal">
                  {Math.round(record.salary / 100000)} LPA
                </Text>
              </StyledTableDataCell>
              <StyledTableDataCell data-cell="employment">
                
                <div
              className={`${
                record.employment === "Active"
                  ? "bg-[rgba(0,194,84,0.7)]"
                  : "bg-[rgba(194,178,0,0.7)]"
              } " rounded-lg p-1 text-center w-[5rem]`}
            >
              <Text as="p" color="primary" weight="normal" size="sm">
                {record.employment}
              </Text>
            </div>
                
              </StyledTableDataCell>
              <StyledTableDataCell data-cell="wealth">
                <Text color="inherit" size="sm" as="p" weight="normal">
                  {record.wealth}
                </Text>
              </StyledTableDataCell>
            </StyledTableRow>
          ))}
        </StyledTable>

        <div className="px-3 bg-secondary sticky bottom-0 flex items-center justify-between gap-1">
          <Text color="primary" size="sm" as="p" weight="bold">
            Total records : {records.length}
          </Text>
          <div className="flex justify-between gap-1">
            <Button
              typographyProps={{
                size: "base",
                weight: "normal",
              }}
              
              variant="text"
              color="primary"
            >
              {`< Prev`}
            </Button>
            <Button
              typographyProps={{
                size: "base",
                weight: "normal",
              }}
              variant="text"
              color="primary"
            >
              1
            </Button>
            <Button
              typographyProps={{
                size: "base",
                weight: "normal",
              }}
              variant="text"
              color="primary"
            >
              2
            </Button>
            <Button
              typographyProps={{
                size: "base",
                weight: "normal",
              }}
              variant="text"
              color="primary"
            >
              3
            </Button>
            <Button
              typographyProps={{
                size: "base",
                weight: "normal",
              }}
              variant="text"
              color="primary"
            >
              {`Next >`}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
