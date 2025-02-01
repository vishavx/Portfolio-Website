import { LightningElement , api} from 'lwc';
import Image_Url from '@salesforce/resourceUrl/portfolioPictures'
export default class Skills extends LightningElement {
    skillsImage= Image_Url + '/PortfolioProjectPics/skill.avif';

    // skill1="Salesforce Lightning";
    // skillBarValue1="80";
    // skill2="LWC";
    // skillBarValue2="70";
    // skill3="JavaScript";
    // skillBarValue3="60";
    // skill4="Apex, Triggers, Flows";
    // skillBarValue4="50";
    // skill5="SOQL";
    // skillBarValue5="60";
    @api skill1 ;
    @api skillBarValue1 ;
    @api skill2 ;
    @api skillBarValue2 ;
    @api skill3 ;
    @api skillBarValue3 ;
    @api skill4 ;
    @api skillBarValue4 ;
    @api skill5 ;
    @api skillBarValue5 ;
}