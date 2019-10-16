import { SharedService } from './shared.service';


export class Message {

    public text : String = '';
    public imageUrl : String = '';
    public createdOn : Date;
    public from : String = '';
    public to : String = '';

    constructor() {
        this.to = "Everyone";
        this.createdOn = new Date(); // current date and time of device
    }
}



/* 
Idea is to be able to change the user name on a configuration page on the app

1 - Create the form on the config page (tabs3)
2 - Create the service ( ionic generate service shared )
3 - Store the value from the form into the sharedService
4 - Read the userName from the sharedService

*/