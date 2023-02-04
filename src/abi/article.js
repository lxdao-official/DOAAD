export const abi = [
  {
    inputs: [{ internalType: 'uint256', name: '_citeFee', type: 'uint256' }],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'citeFee',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: '_paperId', type: 'uint256' }],
    name: 'getCiteCount',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: '_paperId', type: 'uint256' }],
    name: 'getCitedCount',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: '_paperId', type: 'uint256' }],
    name: 'getPaper',
    outputs: [
      {
        components: [
          { internalType: 'string', name: 'paperName', type: 'string' },
          { internalType: 'string', name: 'paperCid', type: 'string' },
          { internalType: 'uint256', name: 'citedCount', type: 'uint256' },
          { internalType: 'uint256', name: 'publishTime', type: 'uint256' },
          { internalType: 'address', name: 'author', type: 'address' },
          {
            internalType: 'uint256[]',
            name: 'citeTargetList',
            type: 'uint256[]',
          },
        ],
        internalType: 'struct FileContract.Paper',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: '_address', type: 'address' }],
    name: 'getPaperBalance',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getPaperList',
    outputs: [
      {
        components: [
          { internalType: 'string', name: 'paperName', type: 'string' },
          { internalType: 'string', name: 'paperCid', type: 'string' },
          { internalType: 'uint256', name: 'citedCount', type: 'uint256' },
          { internalType: 'uint256', name: 'publishTime', type: 'uint256' },
          { internalType: 'address', name: 'author', type: 'address' },
          {
            internalType: 'uint256[]',
            name: 'citeTargetList',
            type: 'uint256[]',
          },
        ],
        internalType: 'struct FileContract.Paper[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'paperId',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'string', name: 'paperName', type: 'string' },
      { internalType: 'string', name: 'paperCid', type: 'string' },
      { internalType: 'uint256[]', name: 'citeTargetList', type: 'uint256[]' },
    ],
    name: 'publishPaper',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: '_address', type: 'address' },
      { internalType: 'bool', name: '_bool', type: 'bool' },
    ],
    name: 'setAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'price', type: 'uint256' }],
    name: 'setCiteFee',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
