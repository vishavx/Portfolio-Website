import { LightningElement } from 'lwc';

export default class ChildComponent2 extends LightningElement {
    name="";
    handleChange(event)
    {
        this.name=event.target.value;
    }
    handleClick(event)
    {
        const searchEvent= new CustomEvent('getsearchevent',{detail:this.name});
        this.dispatchEvent(searchEvent);
        // console.log(this.name);
    }
}