import React, { Component } from 'react';
import {
  Card,
  CardBody,
} from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import {fetchExpiringZero} from '../../../store/actions';
import emptyCan from '../../../assets/images/EmptyCan.png';

//Simple bar
import SimpleBar from 'simplebar-react';

class RecentlyActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
    };
  }
componentDidMount(){
  this.props.fetchExpiringZero()
}


  render() {
  
    return (
      <React.Fragment>
            { this.props.zero?.entities?.length !== 0 ? (
              <Card>
              <CardBody>
              <h4 className="card-title mb-4">Upcoming Rental payment</h4>  
               <SimpleBar style={{ maxHeight: '300px' }}>
               {this.props.zero?.entities.slice(0,3).map((twent) =>  (
                <ul className="list-unstyled activity-wid" key={twent?.id}>
                    <li className="activity-list">
                    <div className="activity-icon avatar-xs">
                      <span className="avatar-title bg-soft-primary text-primary rounded-circle">
                        <i className=" ri-map-pin-2-line"></i>
                      </span>
                    </div>
                    <div>
                      <div>
                        <h5 className="font-size-13">
                          <small className="text-muted mr-2">Payment Date</small>
                          {twent?.dueDate}
                        </h5>
                        <h5 className="font-size-13">
                          <small className="text-muted mr-2">Overdue</small>
                          {twent?.property?.price.toLocaleString()}
                        </h5>
                        <h5 className="font-size-13">
                          <small className="text-muted mr-2">Property name</small>
                          {twent?.property?.parentProperty?.title} {twent?.property?.title}
                        </h5>
                      </div>
   
                      <div>
                        <p className="text-muted mb-0">
                          {twent?.property?.address?.houseNoAddress}
                        </p>
                      </div>
                    </div>
                  </li>
               </ul> 
               ))}
               </SimpleBar>
               <Link to='/tenants' className="text-success"> More Details </Link>
               </CardBody>
               </Card>)
                : 
           (
             <Card>
              <CardBody>
              <h4 className="card-title mb-4">Upcoming Rental payment</h4>  
            <div className="text-center">
            <img
              src={emptyCan}
              alt="empty"
              className="rounded mb-2"
            />
            <h5> No Rent Request! </h5>
          </div>
          </CardBody>
           </Card>)
          }
      </React.Fragment>
    );
  }
}


const mapStatetoProps = (state) => {
  const { zero, errorzero} = state.fetchReducerExpiring;
  return { zero, errorzero};
};


export default withRouter(connect(mapStatetoProps, {fetchExpiringZero}) (RecentlyActivity));
