import React from 'react';
import { useSelector} from 'react-redux';
// import RoomFixing from '../RequestList/RoomFixing';
import ApprovedCard from './ApprovedCard';

export default function ApprovedList(){
    const list = useSelector((state) => state.RequestList.list);
    console.log(list);
    return(
        <div>
            {list.map((request) => {
                if(request.approve === true){
                    return(<ApprovedCard key={request.id} id={request.id} title={request.title} image={request.image} status={request.status} approve={request.approve}/>);
                }
            })}
        </div>
    );
}