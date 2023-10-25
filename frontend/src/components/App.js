import './App.css';
import { acquaTestContract } from './utils/interact';
import { useEffect } from 'react';
// import Table from 'react-bootstrap/Table';

const App = () => {
  const connect = async () => {
    const test = await acquaTestContract();
    console.log(test.functions.getNumber());
  };

  useEffect(() => {
    connect();
  }, []);

  return (
    <div>
      <h1>Acqua Management Console</h1>
      <div className="table-container">
        <table className="table table-striped">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
