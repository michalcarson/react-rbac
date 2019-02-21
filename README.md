This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# RBAC sample

This is a POC for Role-based Access Control in a React app using Auth0 as the
authentication provider. 

Set Auth0 domain and clientId in `src/auth0-variables.js`.

The Auth0 app requires a rule with the following code. This is configured through
the Auth0 dashboard. You can/should change the email in this code. If you change the 
`idToken` index name, you must also change it in `src/auth0-variables.js`. This value
is a namespaced claim id within the JWT token (`idToken`).

```javascript
function (user, context, callback) {
  user.app_metadata = user.app_metadata || {};
  user.app_metadata.roles = [];

  if (user.email === 'changeme@dealerinspire.com') {
    user.app_metadata.roles.push('admin');
  } else {
    user.app_metadata.roles.push('writer');
  }
  
  user.app_metadata.roles.push('other');

  auth0.users.updateAppMetadata(user.user_id, user.app_metadata)
    .then(() => {
      context.idToken['https://dealerinspire/roles'] = user.app_metadata.roles;
      callback(null, user, context);
    })
    .catch((err) => {
      callback(err);
    });
}
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

