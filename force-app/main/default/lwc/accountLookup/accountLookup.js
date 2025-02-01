import { LightningElement, wire } from 'lwc';
import callApex from '@salesforce/apex/lookupHelper.getContacts';
import LightningConfirm from 'lightning/confirm';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { deleteRecord } from 'lightning/uiRecordApi';
export default class AccountLookup extends LightningElement {

    accountId;
    contactList;
    columns=[{label:'Name' ,fieldName:'Name'},
             {label:'Phone' ,fieldName:'Phone'}
    ];
    // fieldName = api name of field 
    showContactTable= false;
    addContactClick= false;
    editContactClick= false;
    deleteContactClick= false;
    editableContactId;
    filter = {
        criteria: [
            {
                fieldPath: 'CreatedDate',
                operator: 'lt',
                value: { literal: 'TODAY' },
            },
        ],
    };

    displayInfo = {
        // primaryField: 'Account.Name',        // not working
        additionalFields: ['Industry']
    };

    matchingInfo = {
        primaryField: { fieldPath: 'Name' },
        additionalFields: [{ fieldPath: 'Industry', mode: 'startsWith' }],
    };

    
    handleChange(event){
        this.accountId=event.detail.recordId;
        console.log(this.accountId);
        this.contactList=[];
        this.showContactTable=false;
        if(this.accountId)
        {
            this.callImperative(event);
        }
    }
     
    // @wire(callApex,{accId : '$accountId'}) 
    // wireData({error,data}){
    //     if(data){
    //         this.contactList=data;
    //         this.showContactTable=true;
    //     }
    //     else if (error){
    //         this.contactList=undefined;
    //         this.showContactTable=false;

    //     }
    // }
    
    // method 2
    // callImperative(event)
    // {
    //     callApex({accId: this.accountId})
    //     .then(result=>{
    //         this.contactList = result;
    //         this.showContactTable=true;
    //     })
    //     .catch(error=>{
    //         this.contactList=undefined;
    //         this.showContactTable=false;
    //     })
    // }

    async callImperative(event)
    {
        try{
            const result = await callApex({accId: this.accountId});
            this.contactList = result;
            this.showContactTable=true;

        }
        catch(error){
            this.contactList=undefined;
            this.showContactTable=false;

        }
    }


    handleAddContact(event)
    {
        this.addContactClick=true;
    }
    addContactCancel(event)
    {
        this.addContactClick=false;
    }
    
    handleEdit(event)
    {
        this.editContactClick=true;
        this.editableContactId=event.target.dataset.contactId;
        // this is done to get contact id from html to js same with delete contact
    }
    editContactCancel(event)
    {
        this.editContactClick=false;
    }

    handleSuccess(event)
    {
        this.callImperative();
        this.addContactClick=false;
        this.editContactClick=false;
    }
    async handleDelete(event)
    {
        this.editableContactId=event.target.dataset.contactId;
        const result = await LightningConfirm.open({
            message: 'Do you want to delete this contact ?',
            variant: 'headerless',
            label: 'this is the aria-label value',
            // setting theme would have no effect
        });
        if(result)
        {
            
            const deleteResult= await deleteRecord(this.editableContactId);
            this.callImperative();
            this.showToast();

        }
        
    }

    showToast() {
        const event = new ShowToastEvent({
            title: 'Record deleted',
            message:
                'Contact you selected has been deleted.',
        });
        this.dispatchEvent(event);
    }

}