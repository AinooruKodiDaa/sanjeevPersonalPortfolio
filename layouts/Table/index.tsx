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
      
      <div className="h-[70vh] overflow-auto">
        <StyledTable>
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
            <StyledTableRow
              key={record.id}
              className="cursor-pointer"
              
            >
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
                <Text color="inherit" size="sm" as="p" weight="normal">
                  {record.employment}
                </Text>
              </StyledTableDataCell>
              <StyledTableDataCell data-cell="wealth">
                <Text color="inherit" size="sm" as="p" weight="normal">
                  {record.wealth}
                </Text>
              </StyledTableDataCell>
            </StyledTableRow>
          ))}

       
        </StyledTable>
        
        <div className="p-3 bg-white sticky bottom-0 flex justify-between gap-1">

        <Text color="accent" size="sm" as="p" weight="bold">
                Total records : {records.length}
              </Text>
              <div className="flex justify-between gap-1">
              <Button
                  typographyProps={{
                    size: "base",
                    weight: "normal",
                  }}
                  variant="text"
                  color="secondary"
                >
                  {`< Prev`}
                </Button>
                <Button
                  typographyProps={{
                    size: "base",
                    weight: "normal",
                  }}
                  variant="text"
                  color="secondary"
                >
                  1
                </Button>
                <Button
                  typographyProps={{
                    size: "base",
                    weight: "normal",
                  }}
                  variant="text"
                  color="secondary"
                >
                  2
                </Button>
                <Button
                  typographyProps={{
                    size: "base",
                    weight: "normal",
                  }}
                  variant="text"
                  color="secondary"
                >
                  3
                </Button>
                <Button
                  typographyProps={{
                    size: "base",
                    weight: "normal",
                  }}
                  variant="text"
                  color="secondary"
                >
                  {`Next >`}
                </Button>
              </div>
           
              </div>
      </div>
      <div className="py-20">
        Some other content
      </div>
      <div className="py-20">
        Some other content
      </div>
      <div className="py-20">
        Some other content
      </div>
    </div>
  );
};
