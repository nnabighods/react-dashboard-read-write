import React from "react";

import Button from 'react-bootstrap/Button';
import * as Icon from 'react-feather';
import { Link } from "react-router-dom";

import { EditProduct } from "components/products/widgets/EditProduct";


function EditProductPanel(props) {
 
  return (
    <main className="panel col-md-9 ms-sm-auto px-4 pb-4">
    <div className="d-flex justify-content-between gap-1 flex-wrap flex-md-nowrap align-items-center pt-4 pb-3 mb-3 border-bottom">
      <h1 className="h2">Edit Product</h1>

      <div className="d-flex gap-2 justify-content-between">
        <Link to="/dashboard/add">
          <Button className="d-flex gap-1 btn-sm align-items-center">
            <Icon.Plus/>Add Product
          </Button>
        </Link>
        <Link to="/dashboard">
          <Button className="d-flex gap-1 btn-sm align-items-center">
            <Icon.Eye/>View All
          </Button>
        </Link>
      </div>
    </div>
    <EditProduct/>
    </main>
  );
}

export default EditProductPanel;