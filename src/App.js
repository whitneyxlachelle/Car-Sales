import React from 'react';

import { connect } from 'react-redux';
import { addFeature, removeFeature } from './actions/index';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = ({ additionalFeatures, additionalPrice, car, addFeature, removeFeature }) => {

  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={additionalFeatures} addFeature={addFeature}/>
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};

//these are now props that can be passed anywhere I need
const mapDispatchProps = {
  addFeature,
  removeFeature
}

const mapStateToProps = (state) => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures
  }
}
export default connect(mapStateToProps, mapDispatchProps)(App);
