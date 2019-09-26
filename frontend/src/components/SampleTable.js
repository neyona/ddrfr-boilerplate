import React from 'react';
import PropTypes from 'prop-types';
import key from 'weak-key';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import './SampleCss.css';

// The Table styling from React-Bootstrap has responsive so that the table can
// be wrapped depending on the table size.

const SampleTable = ({ data }) =>
  !data.length ? (
    <p>Nothing to show</p>
  ) : (
    <Container>
      <h2 className="subtitle">
        Showing <strong>{data.length} items</strong>
      </h2>
      <span>If you don't see your submission, try refreshing the page.</span>
      <Table responsive striped bordered hover variant="dark">
        <thead>
          <tr>
            {Object.entries(data[0]).map(el => <th key={key(el)}>{el[0]}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map(el => (
            <tr key={el.id}>
              {Object.entries(el).map(el => <td key={key(el)}>{el[1]}</td>)}
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );

SampleTable.propTypes = {
  data: PropTypes.array.isRequired
};

export default SampleTable;
