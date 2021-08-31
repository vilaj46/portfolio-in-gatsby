import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import PropTypes from "prop-types";
import Img from "gatsby-image";

const Image = styled(Img)`
  &:hover {
    cursor: auto;
  }
`;

const Circle = styled.div`
  height: 10px;
  width: 10px;
  background-color: #333;
  border-radius: 100%;
  margin: 0 5px;
`;

const Button = styled.button`
  margin: 0 5px;
`;

const Buttons = styled.div`
  display: flex;
  margin: 0 0 5px;

  &:hover {
    cursor: auto;
  }
`;

const Circles = styled.div`
  text-align: center;
  margin: 0 auto;
  margin-top: 2px;
  display: flex;
  &:hover {
    cursor: pointer;
  }
`;

const SlideImg = ({ filenames, alt }) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fluid(maxWidth: 1366) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);
  const [num, setNum] = useState(0);

  const images = filenames.map((filename) => {
    const image = data.images.edges.find((n) => {
      return n.node.relativePath.includes(filename);
    });

    if (!image) return null;

    const imageFluid = image.node.childImageSharp.fluid;
    return imageFluid;
  });

  const prev = (e) => {
    e.preventDefault();
    const value = num - 1;
    if (value === -1) {
      setNum(images.length - 1);
    } else {
      setNum(value);
    }
  };

  const next = (e) => {
    e.preventDefault();
    const value = num + 1;
    if (value === images.length) {
      setNum(0);
    } else {
      setNum(value);
    }
  };

  return (
    <React.Fragment>
      <Buttons>
        <div>
          <Button type="button" onClick={prev} className="btn btn-primary">
            Prev
          </Button>
          <Button type="button" onClick={next} className="btn btn-primary">
            Next
          </Button>
        </div>
        <Circles>
          {filenames.map((filename, index) => {
            if (num !== index) {
              return <Circle key={index} onClick={() => setNum(index)} />;
            } else {
              return (
                <Circle key={index} style={{ backgroundColor: "red" }}></Circle>
              );
            }
          })}
        </Circles>
      </Buttons>
      <Image alt={alt} fluid={images[num]} />
    </React.Fragment>
  );
};

SlideImg.propTypes = {
  filenames: PropTypes.array,
  alt: PropTypes.string,
};

export default SlideImg;
