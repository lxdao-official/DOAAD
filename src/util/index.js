import * as IPFS from 'ipfs-core';
import { Web3Storage } from 'web3.storage';

// const retrieve = async (cid) => {
//   const client = makeStorageClient();
//   const res = await client.get(cid);
//   console.log(`Got a response! [${res.status}] ${res.statusText}`);
//   if (!res.ok) {
//     throw new Error(`failed to get ${cid}`);
//   }

//   // request succeeded! do something with the response object here...
//   const data = await res.json();
//   console.log(data);
//   return data;
// };

const retrieve = async (cid) => {
  const res = await fetch(`https://ipfs.io/ipfs/${cid}`);
  console.log(`Got a response! [${res.status}] ${res.statusText}`);
  if (!res.ok) {
    throw new Error(`failed to get ${cid}`);
  }

  // request succeeded! do something with the response object here...
  const data = await res.json();
  return data;
};

function makeStorageClient() {
  return new Web3Storage({ token: process.env.REACT_APP_WEB3STORAGE_TOKEN });
}

const readIpfs = async (cid) => {
  const ipfs = await IPFS.create({ repo: 'ok' + Math.random() });
  const stream = ipfs.cat(cid);
  const decoder = new TextDecoder();
  let str = '';

  for await (const chunk of stream) {
    // chunks of data are returned as a Uint8Array, convert it back to a string
    str += decoder.decode(chunk, { stream: true });
  }
  const data = JSON.parse(str);
  return data;
};

//上传数据至ipfs
const uploadIpfs = async (value) => {
  const ipfs = await IPFS.create({ repo: 'ok' + Math.random() });
  const fileAdded = await ipfs.add(JSON.stringify(value));
  const cid = fileAdded.path;
  return cid;
};
export { readIpfs, uploadIpfs, retrieve };
