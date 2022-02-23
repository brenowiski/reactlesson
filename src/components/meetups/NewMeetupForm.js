import { useRef } from 'react';

import Card from '../ui/Cards'
import classes from './NewMeetupForm.module.css'

function NewMeetupForm(props){
    const titleInpuRef = useRef();
    const imageInpuRef = useRef();
    const addressInpuRef = useRef();
    const descriptionInpuRef = useRef();


    function submitHandler(event){
        event.preventDefault();

        const enteredTitle = titleInpuRef.current.value;
        const enteredImage= imageInpuRef.current.value;
        const enteredAddress = addressInpuRef.current.value;
        const enteredDescription = descriptionInpuRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        };
        
        props.onAddMeetup(meetupData);
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type='text' required id='title' ref={titleInpuRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Meetup Image</label>
                    <input type='url' required id='image' ref={imageInpuRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>Adress</label>
                    <input type='text' required id='address' ref={addressInpuRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea id='description' required rows='5' ref={descriptionInpuRef}>                        
                    </textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>    
                </div>    
            </form>
        </Card>
    );
}

export default NewMeetupForm;