let contractAddress = "0x38183221CEc0B4DF367cE664CD3180814546A7ca"

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
		"name": "Dots",
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
		"name": "viewDot",
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