export class towel{
    constructor(
        public color : string,
        public length : number,
        public image : string,
        public wet : boolean

       


    ){}
    

   
     use() : string{
            if(this.wet){
              return "Ca ne fonctionne pas"
            }
            else{
                return " La serviette est sèche"
            }
           
        }
}