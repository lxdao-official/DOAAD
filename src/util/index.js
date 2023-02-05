import * as IPFS from 'ipfs-core';

const readIpfs = async (cid) => {
  const ipfs = await IPFS.create({ repo: 'ok' + Math.random() });
  console.log(cid);
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
export { readIpfs, uploadIpfs };
