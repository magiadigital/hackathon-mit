import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CommodityService } from './Commodity.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-Commodity',
	templateUrl: './Commodity.component.html',
	styleUrls: ['./Commodity.component.css'],
  providers: [CommodityService]
})
export class CommodityComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      tradingSymbol = new FormControl("", Validators.required);
  
      description = new FormControl("", Validators.required);
  
      mainExchange = new FormControl("", Validators.required);
  
      quantity = new FormControl("", Validators.required);
  
      owner = new FormControl("", Validators.required);
  


  constructor(private serviceCommodity:CommodityService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          tradingSymbol:this.tradingSymbol,
        
    
        
          description:this.description,
        
    
        
          mainExchange:this.mainExchange,
        
    
        
          quantity:this.quantity,
        
    
        
          owner:this.owner
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceCommodity.getAll()
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      result.forEach(asset => {
        tempList.push(asset);
      });
      this.allAssets = tempList;
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });
  }

  addAsset(form: any): Promise<any> {

    this.asset = {
      $class: "org.acme.mynetwork.Commodity",
      
        
          "tradingSymbol":this.tradingSymbol.value,
        
      
        
          "description":this.description.value,
        
      
        
          "mainExchange":this.mainExchange.value,
        
      
        
          "quantity":this.quantity.value,
        
      
        
          "owner":this.owner.value
        
      
    };

    this.myForm.setValue({
      
        
          "tradingSymbol":null,
        
      
        
          "description":null,
        
      
        
          "mainExchange":null,
        
      
        
          "quantity":null,
        
      
        
          "owner":null
        
      
    });

    return this.serviceCommodity.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "tradingSymbol":null,
        
      
        
          "description":null,
        
      
        
          "mainExchange":null,
        
      
        
          "quantity":null,
        
      
        
          "owner":null 
        
      
      });
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else{
            this.errorMessage = error;
        }
    });
  }


   updateAsset(form: any): Promise<any> {
    this.asset = {
      $class: "org.acme.mynetwork.Commodity",
      
        
          
        
    
        
          
            "description":this.description.value,
          
        
    
        
          
            "mainExchange":this.mainExchange.value,
          
        
    
        
          
            "quantity":this.quantity.value,
          
        
    
        
          
            "owner":this.owner.value
          
        
    
    };

    return this.serviceCommodity.updateAsset(form.get("tradingSymbol").value,this.asset)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
            else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }


  deleteAsset(): Promise<any> {

    return this.serviceCommodity.deleteAsset(this.currentId)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
			else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }

  setId(id: any): void{
    this.currentId = id;
  }

  getForm(id: any): Promise<any>{

    return this.serviceCommodity.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "tradingSymbol":null,
          
        
          
            "description":null,
          
        
          
            "mainExchange":null,
          
        
          
            "quantity":null,
          
        
          
            "owner":null 
          
        
      };



      
        if(result.tradingSymbol){
          formObject.tradingSymbol = result.tradingSymbol;
        }else{
          formObject.tradingSymbol = null;
        }
      
        if(result.description){
          formObject.description = result.description;
        }else{
          formObject.description = null;
        }
      
        if(result.mainExchange){
          formObject.mainExchange = result.mainExchange;
        }else{
          formObject.mainExchange = null;
        }
      
        if(result.quantity){
          formObject.quantity = result.quantity;
        }else{
          formObject.quantity = null;
        }
      
        if(result.owner){
          formObject.owner = result.owner;
        }else{
          formObject.owner = null;
        }
      

      this.myForm.setValue(formObject);

    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });

  }

  resetForm(): void{
    this.myForm.setValue({
      
        
          "tradingSymbol":null,
        
      
        
          "description":null,
        
      
        
          "mainExchange":null,
        
      
        
          "quantity":null,
        
      
        
          "owner":null 
        
      
      });
  }

}
