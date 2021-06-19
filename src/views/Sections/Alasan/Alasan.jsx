import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";
import PageSection from "components/PageSection";

const Alasan = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header, subheader, telephone, email } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <Row className="justify-content-center">
        <Col lg={8} className="text-center">
          <h2 className="mt-0">{header}</h2>
          <hr className="divider my-4" />
          <p className="text-muted mb-5">{subheader}</p>
        </Col>
      </Row>
      <Row>
        <Col lg={4} className="ml-auto text-center">
          <p className="" href={`tel:${telephone}`}>
            {telephone}
          </p>
        </Col>
        <Col lg={4} className="mr-auto text-center">
          <p className="" href={`mailto:${email}`}>
            {email}
          </p>
        </Col>
      </Row>
    </PageSection>
  );
};

Alasan.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Alasan.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Alasan;
