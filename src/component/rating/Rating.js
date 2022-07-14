import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
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
              <FaStar
                color={
                    ratingValue < rate || ratingValue === rate
                    ? "000"
                    : "rgb(192,192,192)"
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