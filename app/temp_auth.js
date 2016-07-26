//This authorization method is deprecated and temporary
//
function authorize(fn){
        window.gapi.auth.authorize(
            {
              'client_id': "189539260028-s5ucd6cd8jo7oj5p05l3uatd63dil3l4.apps.googleusercontent.com",
              'scope': ['https://www.googleapis.com/auth/drive.readonly'],
              'immediate': false
            },
            fn);
}

