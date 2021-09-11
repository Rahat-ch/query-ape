import * as React from 'react';
import styles from './Home.module.css'
import { createClient } from 'urql'
import EthLogin from "./EthLogin";
import Form from "./Form"

const APIURL = "https://api.thegraph.com/subgraphs/name/rahat-ch/ape-query"


export default function Home() {
  const [currAccount, setCurrAcount] = React.useState("");
  const [error, setError] = React.useState("");
  const [token, setToken] = React.useState("");
  const [message, setMessage] = React.useState("");
  async function tokenQuery (e) {
    e.preventDefault()
    console.log('token query running')
  const tokensQuery = `
    query {
      tokens(where: {tokenID: ${token}}) {
        tokenID
        owner {
          id
        }
      }
    }
  `
const client = createClient({
url: APIURL
});

const data = await client.query(tokensQuery).toPromise();

if (data.data.tokens[0].owner.id == currAccount){
  setMessage('You are the verified owner of this Ape')
} else {
  setMessage('You do not own this ape')
}
}

  return (
    <div className={styles.container}>
      { currAccount ? <Form value={token} handleSubmit={tokenQuery} setToken={setToken} /> : <EthLogin
      message="Login with Eth"
      setAccount={setCurrAcount}
      setError={setError}
    />}
    <h1>{message}</h1>
    </div>
  )
}
