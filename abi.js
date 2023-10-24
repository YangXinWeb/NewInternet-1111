let contractAddress = "0x78192F99603E101c1691487F5FA89C5a59dD3169"


let abi=[
	{
		"inputs": [
			{
				"internalType": "uint8",
				"name": "_red",
				"type": "uint8"
			},
			{
				"internalType": "uint8",
				"name": "_green",
				"type": "uint8"
			},
			{
				"internalType": "uint8",
				"name": "_blue",
				"type": "uint8"
			}
		],
		"name": "addDot",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint8",
				"name": "red",
				"type": "uint8"
			},
			{
				"indexed": false,
				"internalType": "uint8",
				"name": "green",
				"type": "uint8"
			},
			{
				"indexed": false,
				"internalType": "uint8",
				"name": "blue",
				"type": "uint8"
			}
		],
		"name": "colorSetEvent",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "dots",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "red",
				"type": "uint8"
			},
			{
				"internalType": "uint8",
				"name": "green",
				"type": "uint8"
			},
			{
				"internalType": "uint8",
				"name": "blue",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "viewDots",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint8",
						"name": "red",
						"type": "uint8"
					},
					{
						"internalType": "uint8",
						"name": "green",
						"type": "uint8"
					},
					{
						"internalType": "uint8",
						"name": "blue",
						"type": "uint8"
					}
				],
				"internalType": "struct ColorDot.colorDot[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]