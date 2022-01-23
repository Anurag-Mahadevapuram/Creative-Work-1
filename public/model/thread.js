export class Thread {

    constructor(data){

        this.uid = data.uid;
        this.email = data.email;
        this.title = data.title;
        this.timestamp = data.timestamp;
        this.content = data.content;
        this.keywordsArray = data.keywordsArray;
    }

   //serialization
   toFirestore(){
       return{
           uid: this.uid,
           email: this.email,
           title: this.title,
           title: this.timestamp,
           content: this.content,
           keywordsArray: this.keywordsArray,
       };
   }

}