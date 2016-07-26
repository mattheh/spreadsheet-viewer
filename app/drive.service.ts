import {Injectable} from '@angular/core';
declare var authorize;

@Injectable()
export class AuthService {
  devKey: string;
  clientId: string;

  constructor(){
    this.init();
  }
  init() {
    // Put credentials of target Google Drive here
    //
    this.devKey = "your_dev_key";
    this.clientId = "your_client_id";
  }
  getAuthToken() {
    return new Promise<string>(resolve => 
        authorize(function(result){
            resolve(result.access_token)
        })
    );
  }
}


@Injectable()
export class PickerService extends AuthService {
  constructor(){
    super();
  }
  createPicker() {
    return new Promise<string>(resolve => 
      super.getAuthToken().then(authToken => {
        var picker = new google.picker.PickerBuilder()
            .addView(new google.picker.DocsView(google.picker.ViewId.SPREADSHEETS))
            .setOAuthToken(authToken)
            .setDeveloperKey(this.devKey)
            .setAppId(this.clientId)
            .setCallback((data:any) => {
                if (data[google.picker.Response.ACTION] == google.picker.Action.PICKED) {
                  var doc = data[google.picker.Response.DOCUMENTS][0];
                  console.log(doc[google.picker.Document.EMBEDDABLE_URL])
                  resolve(doc[google.picker.Document.EMBEDDABLE_URL])
                }
                }
            )
            .setOrigin("http://localhost:3000")
            .build();
        picker.setVisible(true);
        }
      )
    )
  }
  init() {
    super.init();

  }
}

