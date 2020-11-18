import { Component } from '@angular/core';
import { LoadingController, ToastController, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  name: string;
  favoriteColor: string;
  colors: any[] = [
    {
    "name": "Red", "value": "red"
    }, 
    
    {
    "name": "Green", "value": "green"
    }, 
    
    {
    "name": "Blue", "value": "blue"
    }
  ];
  terms: boolean = false;
  profession: string;

  people: any[] = [
    {
      "index": 0,
      "isActive": true,
      "balance": "$2,882.02",
      "picture": "http://placehold.it/32x32",
      "name": "Tyler Grimes",
      "gender": "male"
    },
    {
      "index": 1,
      "isActive": true,
      "balance": "$3,838.62",
      "picture": "http://placehold.it/32x32",
      "name": "Nadine Wilson",
      "gender": "female"
    },
    {
      "index": 2,
      "isActive": false,
      "balance": "$1,318.73",
      "picture": "http://placehold.it/32x32",
      "name": "Martinez Castro",
      "gender": "male"
    },
    {
      "index": 3,
      "isActive": false,
      "balance": "$2,027.11",
      "picture": "http://placehold.it/32x32",
      "name": "Willis Powers",
      "gender": "male"
    },
    {
      "index": 4,
      "isActive": true,
      "balance": "$1,560.67",
      "picture": "http://placehold.it/32x32",
      "name": "Helen Cobb",
      "gender": "female"
    },
    {
      "index": 5,
      "isActive": false,
      "balance": "$1,276.12",
      "picture": "http://placehold.it/32x32",
      "name": "Angelique Ortiz",
      "gender": "female"
    },
    {
      "index": 6,
      "isActive": false,
      "balance": "$2,768.57",
      "picture": "http://placehold.it/32x32",
      "name": "Elizabeth Flynn",
      "gender": "female"
    },
    {
      "index": 7,
      "isActive": false,
      "balance": "$3,661.02",
      "picture": "http://placehold.it/32x32",
      "name": "Mattie Williams",
      "gender": "female"
    },
    {
      "index": 8,
      "isActive": true,
      "balance": "$3,433.50",
      "picture": "http://placehold.it/32x32",
      "name": "Kathryn Holt",
      "gender": "female"
    },
    {
      "index": 9,
      "isActive": true,
      "balance": "$2,022.55",
      "picture": "http://placehold.it/32x32",
      "name": "Shawna Figueroa",
      "gender": "female"
    },
    {
      "index": 10,
      "isActive": true,
      "balance": "$1,737.46",
      "picture": "http://placehold.it/32x32",
      "name": "Hatfield Rutledge",
      "gender": "male"
    },
    {
      "index": 11,
      "isActive": true,
      "balance": "$3,512.70",
      "picture": "http://placehold.it/32x32",
      "name": "Georgina Bass",
      "gender": "female"
    },
    {
      "index": 12,
      "isActive": false,
      "balance": "$2,207.04",
      "picture": "http://placehold.it/32x32",
      "name": "Ingrid Mcfadden",
      "gender": "female"
    }
  ];

  constructor(private loadingCtrl: LoadingController, private toastCtrl: ToastController, private actionsheetCtrl: ActionSheetController) {
    
  }

  async showLoading() {
    // show loading using loading controller
    let loading = await this.loadingCtrl.create({
      message: "Loading, please wait...",
      spinner: "dots"
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 4000);
  }

  onChange() {
    console.log("You changed the value of the checkbox!");
  }

  async showToast() {
    let toast = await this.toastCtrl.create({
      header: "Welcome",
      message: "HelloIonic welcomes you back!",
      color: "success",
      position: "top",
      buttons: [{
        text: "Cancel",
        icon: "close",
        handler: () => {
          this.handlerFunction("cancel");
        }
      }, {
        text: "Okay",
        icon: "checkmark",
        handler: () => {
          this.handlerFunction("okay");
        }
      }]
    });

    toast.present();

    // toast.dismiss();
  }

  handlerFunction(buttonName: string) {
    console.log("You tapped on " + buttonName);
  }


  async showActionSheet() {
    let actionsheet = await this.actionsheetCtrl.create({
      header: "Choose an option",
      subHeader: "Please select one of the following values",
      buttons: [{
        text: "Google",
        handler: () => {
          this.handlerFunction("google");
        }
      }, {
        text: "Yahoo",
        handler: () => {
          this.handlerFunction("yahoo");
        }
      }, {
        text: "Microsoft",
        handler: () => {
          this.handlerFunction("microsoft");
        }
      }, {
        text: "Facebook",
        handler: () => {
          this.handlerFunction("facebook");
        }
      }]
    });

    actionsheet.present();
  }

}
