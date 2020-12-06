import React,{useState} from 'react';
import {Upload,Button,Spin} from "antd";
import styles from './index.css';
import { UploadOutlined } from '@ant-design/icons';

function getUploadContent(imgUrl) {
    if (imgUrl){
        return <img src={imgUrl} alt="" className={styles.avatarImg}/>
    }else{
        return <Button type="primary" size="small" icon={<UploadOutlined/>}>上传图片</Button>
    }
}

function Avatar({imgUrl,onChange}) {
    const [loading,setLoading] = useState(false);
    return (
        <Spin spinning={loading}>
            <Upload
                listType="picture-card"
                showUploadList={false}
                action="/api/upload"
                beforeUpload={()=>{
                    setLoading(true);
                }}
                onChange={data=>{
                    if (data.file.response){
                        onChange && onChange(data.file.response.path);
                        setLoading(false);
                    }
                }}
                accept=".jpg,.gif,.png,.webp,.bmp"
                name="imagefile"
            >
                <div className={styles.avatarContainer}>
                    {getUploadContent(imgUrl)}
                </div>
            </Upload>
        </Spin>
    );
}

export default Avatar;