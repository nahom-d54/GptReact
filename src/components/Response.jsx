import logo from '/chatgpt-logo.jpg'

const Response = (props) => {
    return ( 
        <div className="response grid-a">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur modi cum blanditiis quam sint doloremque quaerat hic saepe reiciendis porro? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam quo repellat quisquam.
            </p>
        </div>
     );
}
 
export default Response;