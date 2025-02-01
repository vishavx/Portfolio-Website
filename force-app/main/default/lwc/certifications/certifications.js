import { LightningElement } from 'lwc';
import Image_Url from '@salesforce/resourceUrl/portfolioPictures'
export default class Certifications extends LightningElement {

    certData=[
        {
            id:1,
            name:'Salesforce Administrator',
            image: Image_Url + '/PortfolioProjectPics/c1.png',
            date:'15/06/2025'
        },
        {
            id:2,
            name:'Platform Developer 1',
            image: Image_Url + '/PortfolioProjectPics/c3.png',
            date:'Working on it'
        },
        {
            id:3,
            name:'Javascript Developer 1',
            image: Image_Url + '/PortfolioProjectPics/c4.png',
            date:'Working on it'
        },
        {
            id:4,
            name:'Platform App Builder',
            image: Image_Url + '/PortfolioProjectPics/c2.png',
            date:'Working on it'
        },
        
    ]
}