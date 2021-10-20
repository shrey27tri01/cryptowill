import React, { Dispatch, SetStateAction, useState, useEffect } from "react";
import { TezosToolkit } from "@taquito/taquito";

import TransportU2F from "@ledgerhq/hw-transport-u2f";
import { LedgerSigner } from "@taquito/ledger-signer";

import { Form, Button, Row, Col } from 'react-bootstrap'

import { InMemorySigner } from '@taquito/signer';

import NavbarMain from "./NavbarMain"

import { SECRET_KEY } from '../dapp/default';

import { BeaconWallet } from "@taquito/beacon-wallet";

import {
  NetworkType,
  BeaconEvent,
  defaultEventCallbacks
} from "@airgap/beacon-sdk";

import CryptoJS from "crypto-js";

const SetupForm = () => {


  // const Tezos = new TezosToolkit('https://granadanet.api.tez.ie');

  // InMemorySigner.fromSecretKey(SECRET_KEY)  
  //   .then((signer) => {
  //     Tezos.setProvider({ signer: signer });
  //     return Tezos.signer.publicKeyHash();
  //   }).then((publicKeyHash) => {
  //     console.log(`The public key hash associated is: ${publicKeyHash}.`);
  //   }).catch((error) => 
  //     alert(`Error: ${error} ${JSON.stringify(error, null, 2)}`)
  //   );

  const Tezos = new TezosToolkit('https://api.tez.ie/rpc/granadanet');

    const loginWallet = new BeaconWallet({
    name: 'cryptowill',
    preferredNetwork: NetworkType.GRANADANET,
    eventHandlers: {
        PERMISSION_REQUEST_SUCCESS: {
        handler: async (data: any) => {
            console.log('permission data:', data);
        },
        },
    },
    });

    Tezos.setWalletProvider(loginWallet);

  const [formData, setFormData] = useState({receiverAddress: "", nofDays: "", secretKey: "", amount: ""})

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value})
    console.log(formData)

  }

  const originateWill = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    var address = formData['receiverAddress'];
    var resetDays = formData['nofDays'];
    var secretphrase = formData['secretKey'];
    var amount = Number(formData['amount']);

    var phraseHexBytes = ""

    for (var i = 0; i < secretphrase.length; i++) {
      var s = secretphrase.charCodeAt(i).toString(16);
      while (s.length < 2) {
        s = '0' + s;
      }
      phraseHexBytes += s;
    }


    function arbuf2hex(buffer: any) {
      var hexCodes = [];
      var view = new DataView(buffer);
      for (var i = 0; i < view.byteLength; i += 4) {
        // Using getUint32 reduces the number of iterations needed (we process 4 bytes each time)
        var value = view.getUint32(i)
        // toString(16) will give the hex representation of the number without padding
        var stringValue = value.toString(16)
        // We use concatenation and slice for padding
        var padding = '00000000'
        var paddedValue = (padding + stringValue).slice(-padding.length)
        hexCodes.push(paddedValue);
      }
    
      // Join all the hex strings into one
      return hexCodes.join("");
    }

    function sha256hash(hexstr: any) {
      // We transform the string into an arraybuffer.
      var buffer = new Uint8Array(hexstr.match(/[\da-f]{2}/gi).map(function (h: any) {
        return parseInt(h, 16)
      }));
      return crypto.subtle.digest("SHA-256", buffer).then(function (hash) {
        return arbuf2hex(hash);
      });
    }

    sha256hash(phraseHexBytes).then(function(digest) {
      console.log(digest);
      Tezos.wallet
      .at('KT1HVaSGGszQnwLmC5ehQrTF6pUtHE3zTZnF')
      .then((contract) => {
        return contract.methods.originate(address, resetDays, digest).send({amount: amount})
      }).then((contract) => {
        return contract.confirmation()
      }).then((hash) => 
        console.log(`Operation injected: https://granada.tzstats.com/${hash}`)
      ).catch((error) => 
        console.log(`Error: ${JSON.stringify(error, null, 2)}`)
      );
    }); 


    
    // String -> Hex -> Bytes (needed)
    
    // console.log(secretphrase)
    
    // var hexvalue = CryptoJS.enc.Hex.parse(secretphrase)

    // console.log(hexvalue)

    // console.log(CryptoJS.SHA256(phraseHexBytes).toString(CryptoJS.enc.Hex))

    

    // Tezos.wallet
    //   .at('KT1HVaSGGszQnwLmC5ehQrTF6pUtHE3zTZnF')
    //   .then((contract) => {
    //     return contract.methods.originate(address, resetDays, secretphrase).send({amount: amount})
    //   }).then((contract) => {
    //     return contract.confirmation()
    //   }).then((hash) => 
    //     console.log(`Operation injected: https://granada.tzstats.com/${hash}`)
    //   ).catch((error) => 
    //     console.log(`Error: ${JSON.stringify(error, null, 2)}`)
    //   );

    
  

    console.log('Sent call to contract, waiting for response...');
  }
  


  return (
    <div>
      <div style={{
          color: "black", 
          fontFamily: 'Montserrat', 
          fontSize: "3em",
          fontWeight: "bolder",
          marginLeft: "1em",
          marginTop: "0.5em",
          textAlign: "left"
      }}>
          Set up your Will
      </div>
      <div style={{
          color: "black", 
          fontFamily: 'Montserrat', 
          fontSize: "1.5em",
          fontWeight: "bolder",
          marginLeft: "2.1em",
          marginTop: "1em",
          textAlign: "left"
      }}>
        <Form onSubmit={originateWill}>
          <Row>
            <Col sm={4}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Owner's Email Address</Form.Label>
                <Form.Control type="email" placeholder="Email" style={{width: "30em", borderRadius: "50px 50px 50px 50px", color: "black", fontWeight: "bold"}} />
                  {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text> */}
              </Form.Group>
            </Col>

            <Col sm={8}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Receiver's Email Address</Form.Label>
                <Form.Control type="email" placeholder="Email" style={{width: "30em", borderRadius: "50px 50px 50px 50px", color: "black", fontWeight: "bold"}} />
                {/* <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text> */}
              </Form.Group>
            </Col>
          </Row>

              
          <Row>
            <Col sm={4}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Receiver's Address</Form.Label>
                <Form.Control type="text" onChange={handleFormChange} name="receiverAddress" placeholder="Address" style={{width: "60em", borderRadius: "50px 50px 50px 50px", color: "black", fontWeight: "bold"}} />
                {/* <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text> */}
              </Form.Group>
            </Col>
          </Row>


          <Row>
            <Col sm={4}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Amount (in XTZ)</Form.Label>
                <Form.Control type="number" onChange={handleFormChange} name="amount" step="any" placeholder="Amount" style={{width: "30em", borderRadius: "50px 50px 50px 50px", color: "black", fontWeight: "bold"}} />
                {/* <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text> */}
              </Form.Group>
            </Col>

            <Col sm={8}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Number of days until will expiration</Form.Label>
                <Form.Control type="number" onChange={handleFormChange} name="nofDays" placeholder="Number of days" style={{width: "30em", borderRadius: "50px 50px 50px 50px", color: "black", fontWeight: "bold"}} />
                {/* <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text> */}
              </Form.Group>
            </Col>
          </Row>


          <Row>
            <Col sm={4}>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Secret Key</Form.Label>
                <Form.Control type="password" onChange={handleFormChange} name="secretKey" placeholder="Secret Key" style={{width: "30em", borderRadius: "50px 50px 50px 50px", color: "black", fontWeight: "bold"}} />
                </Form.Group></Col><Col sm={8}>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Secret Key</Form.Label>
                <Form.Control type="password" placeholder="Secret Key" style={{width: "30em", borderRadius: "50px 50px 50px 50px", color: "black", fontWeight: "bold"}} />
              </Form.Group>
            </Col>
          </Row>


          <Button variant="danger" type="submit"
            style={{
              width: "20em", 
              borderRadius: "50px 50px 50px 50px", 
              color: "white", 
              marginTop: "2em", 
              fontWeight: "bolder"}}>
            Submit
          </Button>
        </Form>
      </div>
    </div>

  );
            
}

export default SetupForm;
