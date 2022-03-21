import React, { useEffect, useState } from 'react';
import { Input, Button, Table, Card, CardBody } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom'
import profileImage from '../../../assets/images/ProfileImage.svg';
import Preview from './Preview';
import CreateAgent from './CreateAgent';
import { connect, useDispatch } from 'react-redux';
import { getLandlordAgents } from '../../../store/agent/actions';

const Agent = ({ user, landlordAgents, getLandlordAgents }) => {
  const [isNewAgent, setIsNewAgent] = useState(false);
  const [preview, setPreview] = useState(false);
  const dispatch = useDispatch();
  // const [landlordId, setLandlordId] = useState(1);  


  useEffect(() => {
    dispatch(getLandlordAgents(user?.id))
  }, [dispatch]);

  // const {landlordAgents} = useSelector(state => state.Agents);

  console.log(landlordAgents);

  if (preview) {
    return <Preview BackToHome={() => setPreview(false)} />;
  }

  if (isNewAgent) {
    return <CreateAgent BackToHome={() => setIsNewAgent(false)} />;
  }

  return (
    <div className="page-content">
      <h5 className="ml-2"> Agent </h5>
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
                onClick={() => setIsNewAgent(!isNewAgent)}
              >
                New Agent
              </Button>
            </div>
          </div>
          <div className="table-rep-plugin mt-4">
            <div
              className="table-responsive mb-0"
              data-pattern="priority-columns"
            >
              <Table id="tech-companies-1" striped responsive>
                <thead>
                  <tr>
                    <th>Agent</th>
                    <th data-priority="1">Properties</th>
                    <th data-priority="3">Email</th>
                    <th data-priority="1">Date Added</th>
                    <th data-priority="3">Last Active</th>
                    <th data-priority="3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="d-flex align-items-center">
                      <Link to="#" onClick={() => setPreview(true)}>
                        <img
                          src={profileImage}
                          alt="profile"
                          width="38"
                          height="38"
                        />
                        <span className="co-name mx-2">Robert Williams</span>
                      </Link>
                    </td>
                    <td>3</td>
                    <td>Willian@gmail.com</td>
                    <td>3rd Jul 2020</td>
                    <td>3rd Jul 2020</td>
                    <td>
                      <span>
                        Active
                        <i className="ri-more-2-fill ml-2"></i>
                      </span>
                    </td>
                    <td></td>
                  </tr>

                  <tr>
                    <td className="d-flex align-items-center">
                      <Link to="#" onClick={() => setPreview(true)}>
                        <img
                          src={profileImage}
                          alt="profile"
                          width="38"
                          height="38"
                        />
                        <span className="co-name mx-2">Robert Williams</span>
                      </Link>
                    </td>
                    <td>3</td>
                    <td>Willian@gmail.com</td>
                    <td>3rd Jul 2020</td>
                    <td>3rd Jul 2020</td>
                    <td>
                      <span>
                        Active
                        <i className="ri-more-2-fill ml-2"></i>
                      </span>
                    </td>
                    <td></td>
                  </tr>

                  <tr>
                    <td className="d-flex align-items-center">
                      <Link to="#" onClick={() => setPreview(true)}>
                        <img
                          src={profileImage}
                          alt="profile"
                          width="38"
                          height="38"
                        />
                        <span className="co-name mx-2">Robert Williams</span>
                      </Link>
                    </td>
                    <td>3</td>
                    <td>Willian@gmail.com</td>
                    <td>3rd Jul 2020</td>
                    <td>3rd Jul 2020</td>
                    <td>
                      <span>
                        Active
                        <i className="ri-more-2-fill ml-2"></i>
                      </span>
                    </td>
                    <td></td>
                  </tr>

                  <tr>
                    <td className="d-flex align-items-center">
                      <Link to="#" onClick={() => setPreview(true)}>
                        <img
                          src={profileImage}
                          alt="profile"
                          width="38"
                          height="38"
                        />
                        <span className="co-name mx-2">Robert Williams</span>
                      </Link>
                    </td>
                    <td>3</td>
                    <td>Willian@gmail.com</td>
                    <td>3rd Jul 2020</td>
                    <td>3rd Jul 2020</td>
                    <td>
                      <span>
                        Active
                        <i className="ri-more-2-fill ml-2"></i>
                      </span>
                    </td>
                    <td></td>
                  </tr>

                  <tr>
                    <td className="d-flex align-items-center">
                      <Link to="#" onClick={() => setPreview(true)}>
                        <img
                          src={profileImage}
                          alt="profile"
                          width="38"
                          height="38"
                        />
                        <span className="co-name mx-2">Robert Williams</span>
                      </Link>
                    </td>
                    <td>3</td>
                    <td>Willian@gmail.com</td>
                    <td>3rd Jul 2020</td>
                    <td>3rd Jul 2020</td>
                    <td>
                      <span>
                        Active
                        <i className="ri-more-2-fill ml-2"></i>
                      </span>
                    </td>
                    <td></td>
                  </tr>

                  <tr>
                    <td className="d-flex align-items-center">
                      <Link to="#" onClick={() => setPreview(true)}>
                        <img
                          src={profileImage}
                          alt="profile"
                          width="38"
                          height="38"
                        />
                        <span className="co-name mx-2">Robert Williams</span>
                      </Link>
                    </td>
                    <td>3</td>
                    <td>Willian@gmail.com</td>
                    <td>3rd Jul 2020</td>
                    <td>3rd Jul 2020</td>
                    <td>
                      <span>
                        Active
                        <i className="ri-more-2-fill ml-2"></i>
                      </span>
                    </td>
                    <td></td>
                  </tr>

                  <tr>
                    <td className="d-flex align-items-center">
                      <Link to="#" onClick={() => setPreview(true)}>
                        <img
                          src={profileImage}
                          alt="profile"
                          width="38"
                          height="38"
                        />
                        <span className="co-name mx-2">Robert Williams</span>
                      </Link>
                    </td>
                    <td>3</td>
                    <td>Willian@gmail.com</td>
                    <td>3rd Jul 2020</td>
                    <td>3rd Jul 2020</td>
                    <td>
                      <span>
                        Active
                        <i className="ri-more-2-fill ml-2"></i>
                      </span>
                    </td>
                    <td></td>
                  </tr>

                  <tr>
                    <td className="d-flex align-items-center">
                      <Link to="#" onClick={() => setPreview(true)}>
                        <img
                          src={profileImage}
                          alt="profile"
                          width="38"
                          height="38"
                        />
                        <span className="co-name mx-2">Robert Williams</span>
                      </Link>
                    </td>
                    <td>3</td>
                    <td>Willian@gmail.com</td>
                    <td>3rd Jul 2020</td>
                    <td>3rd Jul 2020</td>
                    <td>
                      <span>
                        Active
                        <i className="ri-more-2-fill ml-2"></i>
                      </span>
                    </td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

const mapStatetoProps = (state) => {
  const { user } = state.Account;
  const { landlordAgents } = state.Agents;
  return { landlordAgents, user };
};

export default withRouter(
  connect(mapStatetoProps, { getLandlordAgents })(Agent)
);
