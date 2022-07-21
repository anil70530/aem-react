import React, { useState } from 'react'
import { FiStar } from "react-icons/fi";
import { Container, Radio, Rating } from "./RatingStyles";
const Rate=(props)=> {
    const [rate, setRate] = useState(props.rating);
    
  return (
    <Container>
      {[...Array(5)].map((item, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
            <Radio
              type="radio"
              value={ratingValue}
              onClick={() => {
                setRate(ratingValue);
              }}
            />
            <Rating>
              <FiStar
                color={"000"}
                fill={
                  ratingValue < rate || ratingValue === rate
                    ? "000"
                    : "rgb(255 255 255)"
                }
              />
            </Rating>
          </label>
        );
      })}
    </Container>
  )
}

export default Rate