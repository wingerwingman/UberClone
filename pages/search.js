import React, { useState } from 'react';
import tw from 'tailwind-styled-components'
import Link from 'next/link';


const Search = () => {

    const [ pickup, setPickup ] = useState('');
    const [ dropoff, setDropoff ] = useState('');

    return (
        <Wrapper>
            <ButtonContainer>
                <Link href="/">
                <BackButton src="left.png" />
                </Link>
            </ButtonContainer>
            <InputContainer>
                <FromToIcons>
                    <Circle src="filled-circle.png" />
                    <Line src="vertical-line.png" />
                    <Square src="square-full.png" />
                </FromToIcons>
                <InputBoxes>
                    <Input 
                    placeholder="Enter Pickup Location" 
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                />
                    <Input 
                    placeholder="Engter Destination"
                    value={dropoff} 
                    onChange={(e) => setDropoff(e.target.value)}
                />
                </InputBoxes>
                <PlusIcon src="plus-math.png" />
            </InputContainer>
            <SavedPlaces>
                <StarIcon src="star.png" />
                Saved Places
            </SavedPlaces>
            <Link href={{
                pathname: "/confirm",
                query: {
                    pickup: pickup,
                    dropoff: dropoff
                }
            }}>
                <ConfirmButtonContainer>
                    <button>
                        Confirm Locations
                    </button>
                </ConfirmButtonContainer>
            </Link>
        </Wrapper>
    )
}

export default Search;

const Wrapper = tw.div` 
    bg-gray-200 h-screen
`

const ButtonContainer = tw.div` 
    bg-white px-4 
`
const BackButton = tw.img` 
    h-12 cursor-pointer 
`

const InputContainer = tw.div`  
    bg-white flex items-center px-4 mb-2
`

const FromToIcons = tw.div`  
    w-10 flex flex-col mr-2 items-center 
`

const Circle = tw.img`
    h-2.5
`

const Line = tw.img`
 h-10
`

const Square = tw.img`
  h-3
`

const InputBoxes = tw.div` 
    flex flex-col flex-1 
`

const Input = tw.input`
    h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none 
`

const PlusIcon = tw.img`
    w-10 h-10 bg-gray-200 rounded-full ml-3 
`

const SavedPlaces = tw.div` 
    flex items-center bg-white px-4 py-2 
`

const StarIcon = tw.img`
    bg-gray-400 rounded-full w-10 h-10 p-2 mr-2
`

const ConfirmButtonContainer = tw.div`
    bg-black text-white text-center mt-2 mx-4 px-4 py-3 text-2xl cursor-pointer
`