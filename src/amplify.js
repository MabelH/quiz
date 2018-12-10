import Auth from '@aws-amplify/auth'
import API from '@aws-amplify/api'
import { API_NAME } from './constants'

// window.LOG_LEVEL = 'DEBUG'

Auth.configure({
  // REQUIRED - Amazon Cognito Identity Pool ID
  identityPoolId: `${process.env.AWS_AMPLIFY_AUTH_IDENTITYPOOLID}`,
  // REQUIRED - Amazon Cognito Region
  region: 'us-east-1',
  // OPTIONAL - Amazon Cognito User Pool ID
  userPoolId: `${process.env.AWS_AMPLIFY_AUTH_USERPOOLID}`,
  // OPTIONAL - Amazon Cognito Web Client ID
  userPoolWebClientId: `${process.env.AWS_AMPLIFY_AUTH_USERPOOL_WEBCLIENT_ID}`
})

API.configure({
  endpoints: [
    {
      name: API_NAME,
      endpoint: `${process.env.AWS_AMPLIFY_API_ENDPOINT}`
    }
  ]
})