import MainPagination from "./component/pagination";
import MainTable from './component/table';
import {Data, Header} from './utils/data';

function App() {
  return (
    <>
    <MainTable data={Data} header={Header}/>
    <MainPagination/>
    </>
  );
}

export default App;
