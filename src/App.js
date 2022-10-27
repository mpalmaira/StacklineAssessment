import { createGlobalStyle } from "styled-components";
import Heading from "./components/Heading/Heading";
import Sidebar from "./components/Sidebar/Sidebar";
import Chart from "./components/Chart/Chart";
import { Panels, ChartandTable } from "./App.styles";
import Table from "./components/Table/Table";

const GlobalStyle = createGlobalStyle`
body{
  margin: 0;
  background-color: #F6F8FA;
}
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Heading />
      <Panels>
        <Sidebar />
        <ChartandTable>
          <Chart />
          <Table />
        </ChartandTable>
      </Panels>
    </div>
  );
}

export default App;
