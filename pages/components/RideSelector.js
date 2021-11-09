import React, { useEffect, useState } from 'react'
import tw from "tailwind-styled-components";
import { carList } from '../data/carList.js';

const RideSelector = ({pickupCoordinates, dropoffCoordinates}) => {

    const [rideDuration, setRideDuration] = useState(0);

    useEffect(() => {
        rideDuration = fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1Ijoid2luZ2Vyd2luZ21hbiIsImEiOiJja3ZtbXdrczIxbWUzMm9tdDUyaDk3azZpIn0.v7O1le6LExaRLFDizRv_6w`).then(res => res.json()).then(data => {
            setRideDuration(data.routes[0].duration / 100);
        })
    }, [pickupCoordinates, dropoffCoordinates])
    return (
        <Wrapper>
            <Title>Choose a Ride, or swipe up for more</Title>
            <CarList>
                {carList.map((car, index) => {
                    return (
                        <Car key={index}>
                        <CarImage src={car.imgUrl} />
                        <CarDetails>
                            <Service>{car.service}</Service>
                            <Time>5 min away</Time>
                        </CarDetails>
                        <Price>{'$' + (rideDuration * car.multiplier).toFixed(2)}</Price>
                    </Car>
                    )
                })}
            </CarList>
        </Wrapper>
    )
}

export default RideSelector

const CarDetails = tw.div`
    flex-1 
`

const Service = tw.div`
    font-medium
`

const Time = tw.div`
    text-xs text-blue-500
`

const Price = tw.div`
    text-sm
`

const CarImage = tw.img`
    h-14 mr-4
`

const Car = tw.div`
    flex p-4 item-center 
`

const CarList = tw.div`

`

const Title = tw.div`
        text-gray-500 text-center text-xs py-2 border-b 
`

const Wrapper = tw.div`
    flex-1 overflow-y-scroll flex flex-col
`