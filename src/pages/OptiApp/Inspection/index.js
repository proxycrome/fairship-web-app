import React, { useEffect, useState } from 'react';
import { Input, Button, Table, Card, CardBody } from 'reactstrap';
import NewInspection from './NewInspection';
// import { Link } from 'react-router-dom'
import profileImage from '../../../assets/images/ProfileImage.svg';
import { fetchInspections } from '../../../store/inspection/actions';
import { useDispatch, connect } from 'react-redux';
import Loader from '../../../components/Common/Loading/index';
import emptyCan from '../../../assets/images/EmptyCan.png';
// import MoveIn from './MoveIn';

const Inspection = ({inspections, fetchInspections, loading}) => {
  const [isNewInspection, setIsNewInspection] = useState(false);
  // const [isMoveIn, setIsMoveIn] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInspections());
  }, [dispatch])
  
  console.log(inspections)


  if (isNewInspection) {
    return <NewInspection BackToHome={() => setIsNewInspection(false)} />;
  }
  return (
    <div className="page-content">
      {loading ? (
        <Card>
          <CardBody>
            <Loader loading={loading} />
          </CardBody>
        </Card>
      ) : (
      <>
        <h5 className="ml-2"> Inspections </h5>
        <Card>
          <CardBody>
            <div className="d-flex justify-content-between">
              <div className="search-box">
                <div className="position-relative">
                  <Input
                    type="text"
                    className="form-control rounded"
                    placeholder="Search..."
                  />
                  <i className="mdi mdi-magnify search-icon"></i>
                </div>
              </div>
              <div className="text-right">
                <Button
                  color="success"
                  onClick={() => setIsNewInspection(!isNewInspection)}
                >
                  New Inspection
                </Button>
              </div>
            </div>
            {inspections?.entities?.length !== 0 ? (
              <div className="table-rep-plugin mt-4">
                <div
                  className="table-responsive mb-0"
                  data-pattern="priority-columns"
                >
                  <Table id="tech-companies-1" striped responsive>
                    <thead>
                      <tr>
                        <th>Tenant</th>
                        <th data-priority="1">Unit Number</th>
                        <th data-priority="3">Property</th>
                        <th data-priority="1">Type</th>
                        <th data-priority="3">Date</th>
                        <th data-priority="3"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="d-flex align-items-center">
                          <img
                            src={profileImage}
                            alt="profile"
                            width="38"
                            height="38"
                          />
                          <span className="co-name mx-2">Robert Williams</span>
                        </td>
                        <td>001</td>
                        <td>Cosy Studio in the heart of lagos</td>
                        <td>Move in</td>
                        <td>3rd Jul 2020</td>
                        <td>
                          <i className="ri-more-2-fill"></i>
                        </td>
                      </tr>
                      <tr>
                        <td className="d-flex align-items-center">
                          <img
                            src={profileImage}
                            alt="profile"
                            width="38"
                            height="38"
                          />
                          <span className="co-name mx-2">Robert Williams</span>
                        </td>
                        <td>001</td>
                        <td>Cosy Studio in the heart of lagos</td>
                        <td>Move Out</td>
                        <td>3rd Jul 2020</td>
                        <td>
                          <i className="ri-more-2-fill"></i>
                        </td>
                      </tr>
                      <tr>
                        <td className="d-flex align-items-center">
                          <img
                            src={profileImage}
                            alt="profile"
                            width="38"
                            height="38"
                          />
                          <span className="co-name mx-2">Robert Williams</span>
                        </td>
                        <td>001</td>
                        <td>Cosy Studio in the heart of lagos</td>
                        <td>External</td>
                        <td>3rd Jul 2020</td>
                        <td>
                          <i className="ri-more-2-fill"></i>
                        </td>
                      </tr>
                      <tr>
                        <td className="d-flex align-items-center">
                          <img
                            src={profileImage}
                            alt="profile"
                            width="38"
                            height="38"
                          />
                          <span className="co-name mx-2">Robert Williams</span>
                        </td>
                        <td>001</td>
                        <td>Cosy Studio in the heart of lagos</td>
                        <td>Bi-annual</td>
                        <td>3rd Jul 2020</td>
                        <td>
                          <i className="ri-more-2-fill"></i>
                        </td>
                      </tr>
                      <tr>
                        <td className="d-flex align-items-center">
                          <img
                            src={profileImage}
                            alt="profile"
                            width="38"
                            height="38"
                          />
                          <span className="co-name mx-2">Robert Williams</span>
                        </td>
                        <td>001</td>
                        <td>Cosy Studio in the heart of lagos</td>
                        <td>External</td>
                        <td>3rd Jul 2020</td>
                        <td>
                          <i className="ri-more-2-fill"></i>
                        </td>
                      </tr>
                      <tr>
                        <td className="d-flex align-items-center">
                          <img
                            src={profileImage}
                            alt="profile"
                            width="38"
                            height="38"
                          />
                          <span className="co-name mx-2">Robert Williams</span>
                        </td>
                        <td>001</td>
                        <td>Cosy Studio in the heart of lagos</td>
                        <td>Move In</td>
                        <td>3rd Jul 2020</td>
                        <td>
                          <i className="ri-more-2-fill"></i>
                        </td>
                      </tr>
                      <tr>
                        <td className="d-flex align-items-center">
                          <img
                            src={profileImage}
                            alt="profile"
                            width="38"
                            height="38"
                          />
                          <span className="co-name mx-2">Robert Williams</span>
                        </td>
                        <td>001</td>
                        <td>Cosy Studio in the heart of lagos</td>
                        <td>Move Out</td>
                        <td>3rd Jul 2020</td>
                        <td>
                          <i className="ri-more-2-fill"></i>
                        </td>
                      </tr>
                      <tr>
                        <td className="d-flex align-items-center">
                          <img
                            src={profileImage}
                            alt="profile"
                            width="38"
                            height="38"
                          />
                          <span className="co-name mx-2">Robert Williams</span>
                        </td>
                        <td>001</td>
                        <td>Cosy Studio in the heart of lagos</td>
                        <td>Bi-annual</td>
                        <td>3rd Jul 2020</td>
                        <td>
                          <i className="ri-more-2-fill"></i>
                        </td>
                      </tr>
                      <tr>
                        <td className="d-flex align-items-center">
                          <img
                            src={profileImage}
                            alt="profile"
                            width="38"
                            height="38"
                          />
                          <span className="co-name mx-2">Robert Williams</span>
                        </td>
                        <td>001</td>
                        <td>Cosy Studio in the heart of lagos</td>
                        <td>Bi-annual</td>
                        <td>3rd Jul 2020</td>
                        <td>
                          <i className="ri-more-2-fill"></i>
                        </td>
                      </tr>
                      <tr>
                        <td className="d-flex align-items-center">
                          <img
                            src={profileImage}
                            alt="profile"
                            width="38"
                            height="38"
                          />
                          <span className="co-name mx-2">Robert Williams</span>
                        </td>
                        <td>001</td>
                        <td>Cosy Studio in the heart of lagos</td>
                        <td>Bi-annual</td>
                        <td>3rd Jul 2020</td>
                        <td>
                          <i className="ri-more-2-fill"></i>
                        </td>
                      </tr>
                      <tr>
                        <td className="d-flex align-items-center">
                          <img
                            src={profileImage}
                            alt="profile"
                            width="38"
                            height="38"
                          />
                          <span className="co-name mx-2">Robert Williams</span>
                        </td>
                        <td>001</td>
                        <td>Cosy Studio in the heart of lagos</td>
                        <td>Move Out</td>
                        <td>3rd Jul 2020</td>
                        <td>
                          <i className="ri-more-2-fill"></i>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <img
                  src={emptyCan}
                  alt="empty"
                  className="rounded mb-2"
                />
                <h4> Table is Empty </h4>
              </div>
            )}
            
          </CardBody>
        </Card>
      </>   
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  const {inspections, loading} = state.Inspections;
  return {inspections, loading};
}

export default connect(mapStateToProps, {fetchInspections})(Inspection);
