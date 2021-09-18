import React from 'react'

import { DAppProvider, useConnect } from '../dapp/dapp';
import { APP_NAME, NETWORK } from '../dapp/default';
import { useAccountPkh, useTezos, useOnBlock } from '../dapp/dapp';

const Account = () => {
    const connect = useConnect()
  const accountPkh = useAccountPkh()
  const tezos = useTezos()
  const [balance, setBalance] = React.useState(null)
  const handleConnect = React.useCallback(async () => {
    try {
      await connect(NETWORK, { forcePermission: true })
    } catch (err) {
      console.error(err.message)
    }
  }, [connect])


  const accountPkhPreview = React.useMemo(() => {
    if (!accountPkh) return undefined
    else {
    //   const accPkh = (accountPkh as unknown) as string
      const accPkh = accountPkh; 
      const ln = accPkh.length
      return `${accPkh.slice(0, 7)}...${accPkh.slice(ln - 4, ln)}`
    }
  }, [accountPkh])

  const loadBalance = React.useCallback(async () => {
    if (tezos) {
    //   const tezosOk = tezos as any
      const tezosOk = tezos
      const bal = await tezosOk.tz.getBalance(accountPkh)
      setBalance(tezosOk.format('mutez', 'tz', bal).toString())
    }
  }, [tezos, accountPkh, setBalance])

  React.useEffect(() => {
    loadBalance()
  }, [loadBalance])



  useOnBlock(tezos, loadBalance)

    return (
        <div>
            {(() => {
        if (balance) {
          return <div>{balance}</div>;
        } 
        if (accountPkhPreview) {
            <div>{accountPkhPreview}</div>
        }
      })()}
                
            
            
      
      {/* <button onClick={handleConnect}>Connect account</button> */}
        </div>
    )
}

export default Account



//---------------------------------------------------------------------------------------------


// import React from 'react'

// import { DAppProvider, useConnect } from '../dapp/dapp';
// import { APP_NAME, NETWORK } from '../dapp/default';
// import { useAccountPkh, useTezos, useOnBlock } from '../dapp/dapp';

// const Account = () => {
//     const connect = useConnect()
//   const accountPkh = useAccountPkh()
//   const tezos = useTezos()
//   const [balance, setBalance] = React.useState(null)
//   const handleConnect = React.useCallback(async () => {
//     try {
//       await connect(NETWORK, { forcePermission: true })
//       const accountPkhPreview = React.useMemo(() => {
//         if (!accountPkh) return undefined
//         else {
//         //   const accPkh = (accountPkh as unknown) as string
//           const accPkh = accountPkh; 
//           const ln = accPkh.length
//           return `${accPkh.slice(0, 7)}...${accPkh.slice(ln - 4, ln)}`
//         }
//       }, [accountPkh])
    
//       const loadBalance = React.useCallback(async () => {
//         if (tezos) {
//         //   const tezosOk = tezos as any
//           const tezosOk = tezos
//           const bal = await tezosOk.tz.getBalance(accountPkh)
//           setBalance(tezosOk.format('mutez', 'tz', bal).toString())
//         }
//       }, [tezos, accountPkh, setBalance])
    
//       React.useEffect(() => {
//         loadBalance()
//       }, [loadBalance])
    
    
    
//       useOnBlock(tezos, loadBalance)


//       return (
//         <div>
//           <div>{balance}</div>
//         <div>{accountPkhPreview}</div>
//         </div>
        
//         )
//     } catch (err) {
//       console.error(err.message)
//     }
//   }, [connect])


  

//     return (
//         <div>
            
                
            
            
      
//       {/* <button onClick={handleConnect}>Connect account</button> */}
//         </div>
//     )
// }

// export default Account
