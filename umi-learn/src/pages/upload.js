import React,{useState} from 'react';
import Avatar from "../components/Avatar";

function Upload(props) {
    const [imgUrl,setImgUrl] = useState("");
    return (
        <Avatar imgUrl={imgUrl} onChange={newUrl=>{
            setImgUrl(newUrl);
        }} />
    );
}

export default Upload;