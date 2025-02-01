import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    fname="no name";
    sname='';

    handleEvent(event)
    {
        this.sname=event.detail;
        // console.log(this.sname);
    }
}