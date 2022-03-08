import './App.css';
import BasicTable from './BasicTable';
import BasicSorting from './BasicSorting';
import SelectableRows from './SelectableRows';
import ExpandableRows from './ExpandableRoes';
import Pagination from './Pagination';

function App() {
  return (
    <div className="App">
      <BasicTable />
      <BasicSorting />
      <SelectableRows />
      <ExpandableRows />
      <Pagination />
    </div>
  );
}

export default App;
