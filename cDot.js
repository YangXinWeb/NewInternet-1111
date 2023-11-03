main();

// everything goes inside the main() function
async function main() {
    // A Web3Provider wraps a standard Web3 provider, which is
    // what MetaMask injects as window.ethereum into each page
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // MetaMask requires requesting permission to connect users accounts
    await provider.send("eth_requestAccounts", []);

    // The MetaMask plugin also allows signing transactions to
    // send ether and pay to change state within the blockchain.
    // For this, you need the account signer...
    const signer = provider.getSigner();

    const contract = new ethers.Contract(contractAddress, abi, provider);

    const contractWithSigner = contract.connect(signer);
    /////////////////////////////////
    // REQUIRED ETH CODE ABOVE ^^^^^^^^^ //
    /////////////////////////////////
    // OUR OWN CODE BELOW VVVVVVVVVVV //
    ///////////////////////////////////////

    //////


    const container = document.getElementById("container");
    const addDotButton = document.getElementById("add-dot");
    const colorPicker = document.getElementById("color-picker");

    loadDots();

    addDotButton.addEventListener("click", () => {

        // convert the value in the colorpicker from hexadecimal to rgb.
        let dotColorRGB = hexToRgb(colorPicker.value);

        // extract the individual r, g, b values from the dotColorRGB (which is a javascript object)
        let r = dotColorRGB.r;
        let g = dotColorRGB.g;
        let b = dotColorRGB.b;

        contractWithSigner.addDot(r, g, b);
    })


    contract.on("colorSetEvent", (r, g, b) => {
        addDot(r, g, b);
    })

    async function loadDots() {
        let dots = await contract.viewDots();

        for(let i = 0; i < dots.length; i++) {

            const dot = dots[i];
            
            const r = dot.red;
            const g = dot.green;
            const b = dot.blue;

            addDot(r, g, b);
        }
    }

    function addDot(_r, _g, _b) {
        let dot = document.createElement("div");
        dot.classList.add("dot");
        dot.style.backgroundColor = `rgb(${_r}, ${_g}, ${_b})`;
        container.appendChild(dot);
    }

    function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
    
    
}