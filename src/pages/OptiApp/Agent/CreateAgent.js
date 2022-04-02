import React, { useEffect, useState } from "react";
import {
  Container,
  Card,
  CardBody,
  Col,
  FormGroup,
  Form,
  Label,
} from "reactstrap";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { getAgents, postAgents } from "../../../store/actions";
import Loader from "../../../components/Common/Loading/index";

const CreateAgent = ({ BackToHome }) => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState(null);
  const [formData, setFormData] = useState({
    agentId: 0,
    landlordId: 0,
  });

  useEffect(() => {
    dispatch(getAgents());
  }, [dispatch]);

  const { user } = useSelector((state) => state.Account);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);

    setFormData({
      ...formData,
      agentId: selectedOption.value,
      landlordId: user?.id,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postAgents(formData));
  };

  const { agents, postAgentData, loading } = useSelector(
    (state) => state.Agents
  );

  console.log(postAgentData?.message);

  const optionGroup = [
    {
      label: "Select an Agent",
      options: agents?.entities.map((agent) => {
        return {
          label: `${agent.firstName} ${agent.lastName}`,
          value: agent.id,
        };
      }),
    },
  ];

  return (
    <React.Fragment>
      <div className="page-content" style={{ height: "100vh" }}>
        <Container fluid>
          <span onClick={BackToHome} className="mx-2 font-size-14 mb-2">
            <span>
              <i className="fas fa-arrow-left font-size-14 mr-2" />
            </span>
            Back
          </span>
          <Card className="mt-2">
            <CardBody>
              <h5>
                <b>Add Agent</b>
              </h5>
              <Form className="mx-4 mt-2">
                <FormGroup row>
                  <Col md={12}>
                    <Label>Property</Label>
                    <Select
                      value={selectedOption}
                      options={optionGroup}
                      onChange={handleChange}
                    />
                  </Col>
                </FormGroup>

                <div className="text-center">
                  <button
                    className="btn btn-success px-5"
                    onClick={handleSubmit}
                  >
                    Add
                  </button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default CreateAgent;
