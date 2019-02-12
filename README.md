# bs-msal

Bindings for [microsoft-authentication-library-for-js (msal)](https://github.com/AzureAD/microsoft-authentication-library-for-js)

## Usage

You'll notice that the intilization function has been simplified from `UserAgentApplication` to `initApp`, and that all parameters are named. All optional properties on the optional options object in the original `msal` have been moved to the root of the function call, also as named parameters. The only required parameters are `clientId`, `authority`, and `tokenReceivedCallback`.

### Example

```reason
let authApp =
      Msal.initApp(
        ~clientId="CLIENT_ID_HERE",
        ~authority=
          "B2C_AUTHORITY_HERE",
        ~tokenReceivedCallback=
          (_errorDesc, _token, error, _tokenType) => {
            Js.log("Error in tokenReceivedCallback:");
            Js.log(error);
          },
        ~redirectUri="http://YOU_REDIRECT_URI",
        ~postLogoutRedirectUri="http://YOU_LOGOUT_REDIRECT_URI",
        ~storeAuthStateInCookie=false,
        ~validateAuthority=false,
        ~cacheLocation=`localStorage,
        (),
      );

    Js.log(authApp |> Msal.logger |> Msal.correlationId);
```
