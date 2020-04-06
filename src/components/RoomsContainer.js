import React from 'react';
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import {withRoomConsumer} from "../context";
import Loading from "./Loading";


const RoomContainer = ({context}) => {
    const {loading, sortedRooms, rooms} = context;

    if (loading) {
        return <Loading/>
    }

    return (
        <React.Fragment>
            <RoomsFilter rooms={rooms}/>
            <RoomsList rooms={sortedRooms}/>
        </React.Fragment>
    )
};

export default withRoomConsumer(RoomContainer)

/*
import React from 'react';
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import {RoomConsumer} from "../context";
import Loading from "./Loading";


const RoomsContainer = () => {
    return (
        <RoomConsumer>
            {value => {
                const {loading, sortedRooms, rooms} = value;
                if (loading) {
                    return <Loading/>
                }

                return (
                    <div>
                        hello from rooms container
                        <RoomsFilter rooms={rooms}/>
                        <RoomsList rooms={sortedRooms}/>
                    </div>
                )
            }}
        </RoomConsumer>
    )
};

export default RoomsContainer;
*/
