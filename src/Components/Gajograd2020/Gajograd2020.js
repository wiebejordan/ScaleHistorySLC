import React, {useState} from 'react';
import { Document, Page } from "react-pdf/dist/entry.webpack";
import GG from '../GG.pdf'
import './Gajograd2020.css';




const Gajograd2020 = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
 
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <div className='GG-main'>
      <div className='GG-container'>
      <Document
        
        file={GG}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page size='B9'  className='pdf' pageNumber={pageNumber}>
          
        </Page>
      </Document>
      <div>
        <p>
          Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
        </p>
        <button
          type="button"
          disabled={pageNumber <= 1}
          onClick={previousPage}
        >
          Previous
        </button>
        <button
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Next
        </button>
      </div>
      </div>
    </div>
  );
}

export default Gajograd2020;