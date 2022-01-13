import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import collectionItem from "../../components/collection-item/collection-item.component";

import { selectCollection } from "../../redux/shop/shop.selector";

import "./collection.styles.scss";

const CollectionPage = () => {
  return (
    <div className="collection">
      <h2>COLLECTION PAGE</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log("mapStateToProps", state, ownProps);
  return {
    collection: selectCollection("hats")(state),
  };
};

export default connect(mapStateToProps)(CollectionPage);
