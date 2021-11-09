import React, { useEffect, useState } from 'react'
import tw from "tailwind-styled-components";
import Map from './components/Map';
import { useRouter } from 'next/router';
import RideSelctor from './components/RideSelector';
import Link from 'next/link';

const Confirm = () => {

    const router = useRouter();
    const { pickup, dropoff } = router.query;
    
    const [ pickupCoordinates, setPickupCoordinates ] = useState(0, 0);
    const [ dropoffCoordinates, setDropoffCoordinates ] = useState(0, 0);

    const getPickupCoordinates = (pickup) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?`+ 
            new URLSearchParams({
             access_token: "pk.eyJ1Ijoid2luZ2Vyd2luZ21hbiIsImEiOiJja3ZtbXdrczIxbWUzMm9tdDUyaDk3azZpIn0.v7O1le6LExaRLFDizRv_6w",
             limit: 1
            })
        )
        .then(response => response.json())
        .then(data => {
            setPickupCoordinates(data.features[0].center);
        })
    }

    const getDropoffCoordinates = (dropoff) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?`+ 
            new URLSearchParams({
             access_token: "pk.eyJ1Ijoid2luZ2Vyd2luZ21hbiIsImEiOiJja3ZtbXdrczIxbWUzMm9tdDUyaDk3azZpIn0.v7O1le6LExaRLFDizRv_6w",
             limit: 1
            })
        )
        .then(response => response.json())
        .then(data => {
            setDropoffCoordinates(data.features[0].center);
        })
    }

    useEffect(() => {
        getPickupCoordinates(pickup);
        getDropoffCoordinates(dropoff);
    }, [pickup, dropoff]);


    return (

        <Wrapper>
            <ButtonContainer>
                <Link href="search">
                    <BackButton src="left.png" />
                </Link>
            </ButtonContainer>
            <Map 
                pickupCoordinates={pickupCoordinates}
                dropoffCoordinates={dropoffCoordinates}
            />
            <RideContainer>
                <RideSelctor
                pickupCoordinates={pickupCoordinates}
                dropoffCoordinates={dropoffCoordinates}
            />
                <ConfirmButtonContainer>
                    <ConfirmButton>
                        Confirm UberX
                    </ConfirmButton>
                </ConfirmButtonContainer>
            </RideContainer>
        </Wrapper>
    )
}

export default Confirm

const ButtonContainer = tw.div`
    rounded-full absolute top-4 left-4 z-10 bg-white shadow-md curosr-pointer 
`
const BackButton = tw.img` 
    h-full object-contain
`

const ConfirmButton = tw.div`
    bg-black text-white my-4 mx-4 py-4 text-center text-xl 
`

const ConfirmButtonContainer = tw.div`
boarder-t-2
`

const Wrapper = tw.div`
    flex h-screen flex-col 
`

const RideContainer = tw.div`
    flex-1 flex flex-col h-1/2
`