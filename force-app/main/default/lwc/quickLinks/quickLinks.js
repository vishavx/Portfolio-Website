import { LightningElement } from 'lwc';
import Image_Url from '@salesforce/resourceUrl/portfolioPictures'
import {NavigationMixin} from 'lightning/navigation'
export default class QuickLinks extends NavigationMixin(LightningElement) {

    data=[
        {
            id:1,
            image: Image_Url + '/PortfolioProjectPics/pic4.jpg',
            text:'Projects'
        },
        {
            id:2,
            image: Image_Url + '/PortfolioProjectPics/skill.avif',
            text:'Skills'
        },
        {
            id:3,
            image: Image_Url + '/PortfolioProjectPics/pic6.avif',
            text:'Certifications'
        },
    ]
    
    handleClick(event){
        let selected = event.currentTarget.dataset.id;
        console.log(JSON.stringify(selected));
        if(selected==1){
            this.navigateTo('projects__c');
        }
        else if(selected==2){
            this.navigateTo('skills__c');
        }
        else if(selected==3){
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