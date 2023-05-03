function Header() {

    // inline, internal, external

    let myText = "Hello i am text"

    let headerStyle = {
        background: 'black', 
        height: '100px',
        display: 'flex'
    }

    return <div style={headerStyle}>
        {/* <h1>{myText}</h1> */}
        <h1 className="text-white">{myText}</h1>
        <h1 className="text-white">{myText}</h1>
    </div>
}

export default Header