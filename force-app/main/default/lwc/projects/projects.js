import { LightningElement } from 'lwc';
import Image_Url from '@salesforce/resourceUrl/portfolioPictures'

export default class Projects extends LightningElement {
    projectsImage= Image_Url + '/PortfolioProjectPics/pic4.jpg';
    projectData=[
        {
            id:1,
            name:'Portfolio Website',
            description:'Portfolio Website built on Salesforce Lightning Web Runtime experience using custom LWC with Mobile responsiveness.',
            tech:'Salesforce, LWC, Apex, Javascript, Experience Cloud',
            github:'https://vishavgarg-dev-ed.trailblaze.my.site.com/'
        },
        {
            id:2,
            name:'Gemini Globals - Official Website',
            description:'Developed Gemini Globals, a responsive website using LWC and Apex to dynamically fetch product data from Salesforce. Integrated a Web-to-Lead form to capture customer inquiries, enhancing engagement and lead management.',
            tech:'Salesforce, LWC, Apex, Javascript, Experience Cloud',
            github:'https://geminiglobal-dev-ed.develop.my.site.com/'
        }
    ]

}