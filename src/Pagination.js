import DataTable from 'react-data-table-component';

const columns = [
  {
    name: 'Title',
    selector: (row) => row.title,
  },
  {
    name: 'Year',
    selector: (row) => row.year,
  },
];

const data = [
  {
    id: 1,
    title: 'Beetlejuice',
    year: '1988',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 3,
    title: 'Alpha',
    year: '1900',
  },
  {
    id: 4,
    title: 'Beta',
    year: '1921',
  },
  {
    id: 5,
    title: 'Gamma',
    year: '1922',
  },
  {
    id: 6,
    title: 'Delta',
    year: '1923',
  },
  {
    id: 7,
    title: 'Omega',
    year: '1924',
  },
  {
    id: 8,
    title: 'Pi',
    year: '1924',
  },
  {
    id: 9,
    title: 'Phi',
    year: '1930',
  },
  {
    id: 10,
    title: 'Batman',
    year: '1934',
  },
  {
    id: 11,
    title: 'Captain America',
    year: '1964',
  },
  {
    id: 12,
    title: 'Flash',
    year: '1960',
  },
  {
    id: 13,
    title: 'Professor X',
    year: '1934',
  },
  {
    id: 14,
    title: 'Wolverine',
    year: '1954',
  },
  {
    id: 15,
    title: 'Dr. Strange',
    year: '1965',
  },
  {
    id: 16,
    title: 'Black Adam',
    year: '1960',
  },
];

export default function Pagination() {
  return (
    <div>
        <h3>Table Pagination</h3>
      <DataTable
        columns={columns}
        data={data}
        pagination
      />
    </div>
  );
}
