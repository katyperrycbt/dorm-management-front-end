import React from 'react';
import useStyles from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { close } from './open';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

// import { useHistory } from 'react-router-dom';

import {ADD_TO_REQUEST_LIST } from './RequestInfor';
import { increment } from './RequestInfor';


export default function RequestForm() {
    const [ title, setTitle ] = React.useState('');
    const [ image, setImage ] = React.useState("");
    const id = useSelector((state) => state.RequestList.id);
    const approve = useSelector((state) => state.RequestList.approve);
    const status = useSelector((state) => state.RequestList.status);

    // const history = useHistory();
    const classes = useStyles();
    const isOpen = useSelector((state) => state.isOpen.openState);
    const dispatch = useDispatch();
    const list = useSelector((state) => state.RequestList.list);

    const handleSubmit = () => {
        dispatch({
            type: ADD_TO_REQUEST_LIST,
            item: {
                id: id,
                title: title,
                image: image,
                approve: approve,
                status: status,
            }
        })
    }

    // const handleOpen = () => {
    //     dispatch(open());
    // }

    const handleClose = () => {
        dispatch(close());
    }

    const imageRef = React.useRef(null);


    const useDisplayImage = () => {
        const [result, setResult] = React.useState("");
        
        const uploader = (e) => {
            const imageFile = e.target.files[0];

            const reader = new FileReader();
            reader.addEventListener("load", (e)=>{
                setResult(e.target.result);
            });

            reader.readAsDataURL(imageFile);
        }

        return { result, uploader}
    }

    const { result, uploader } = useDisplayImage();

    console.log(list);

    return(
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={isOpen}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{timeout:500,}}
            >
                <Fade in={isOpen}>
                    <div className={classes.paper}>
                        <h2 style={{backgroundColor:"lightblue", padding:'30px', textAlign:'center'}}>Request Form</h2>
                        <p>Please fill all the information below</p>
                        <form className={classes.request} noValidate autoComplete="off">
                            <TextField id="outline-basic" label="Content" variant="outlined" rowsMin={3} onChange={(e) => setTitle(e.target.value)}/>
                            <input
                                type="file"
                                onChange={(e) => {
                                setImage(URL.createObjectURL(e.target.files[0]));
                                uploader(e);
                                }}
                                
                            />
                            {result && <img ref={imageRef} src={result} alt="" style={{maxWidth:'200px'}}/>}
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                endIcon={<SendIcon/>}
                                onClick={(e) => {
                                    // history.push('/requests');
                                    // history.go(0);
                                    // setImage(result); 
                                    handleSubmit();
                                    handleClose();
                                    increment();
                                }}
                            >
                                Send
                            </Button>

                        </form>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}