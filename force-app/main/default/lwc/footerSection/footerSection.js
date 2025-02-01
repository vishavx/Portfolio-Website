import { LightningElement } from 'lwc';
import Image_Url from '@salesforce/resourceUrl/portfolioPictures'
import {NavigationMixin} from 'lightning/navigation'
export default class QuickLinks extends NavigationMixin(LightningElement) {

    contact_img= Image_Url + '/PortfolioProjectPics/contact.png';
    mail_img= Image_Url + '/PortfolioProjectPics/gmail.png';
    linkedIn_img= Image_Url + '/PortfolioProjectPics/linkedIn.png';
    trailhead_img= Image_Url + '/PortfolioProjectPics/trailhead.png';

    handleClick(event){
        let selected = event.target.dataset.id;
        console.log(JSON.stringify(selected));
        if(selected==1){
            this.navigateTo('Home');
        }
        if(selected==2){
            this.navigateTo('projects__c');
        }
        else if(selected==3){
            this.navigateTo('skills__c');
        }
        else if(selected==4){
            this.navigateTo('certifications__c');
        }
    }

    navigateTo(pageApiName){
        console.log(JSON.stringify(pageApiName));
        this[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes:{
                name:pageApiName
            }
        })
    }
}